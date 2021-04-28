import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from 'aws-amplify';

import Form from 'react-bootstrap/Form';

import LoaderButton from '../components/LoaderButton';
import { s3Upload } from '../libs/awsLib';
import { onError } from '../libs/errorLib';
import config from '../config';

import './NewNote.css';

const NewNote = () => {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    return content.length > 0;
  };

  const handleFileChange = (event) => {
    file.current = event.target.files[0];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file small than ${config.MAX_ATTACHMENT_SIZE / 1000000} MB.`
      );
      return;
    }

    setIsLoading(true);

    try {
      const attachment = file.current ? await s3Upload(file.current) : null;

      await createNote({ content, attachment });
      history.push('/');
    }
    catch(e) {
      onError(e);
      setIsLoading(false);
    }
  };

  const createNote = (note) => {
    return API.post(
      'notes',
      '/notes',
      { body: note },
    );
  };

  return (
    <div className="NewNote">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="content">
          <Form.Control
            value={content}
            as="textarea"
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="file">
          <Form.Label>Attachment</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileChange}
          />
        </Form.Group>
        <LoaderButton
          block
          type="submit"
          size="lg"
          variant="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </Form>
    </div>
  );
};

export default NewNote;
