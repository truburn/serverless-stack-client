import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';

import { useAppContext } from '../libs/contextLib';
import { onError } from '../libs/errorLib';

import './Home.css';

const Home = () => {
  const { isAuthenticated } = useAppContext();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const onLoad = async () => {
      if (!isAuthenticated) return;

      try {
        const notes = await loadNotes();
        setNotes(notes);
        setIsLoading(false);
      }
      catch (e) {
        onError(e);
      }
    };

    onLoad();
  }, [isAuthenticated]);

  const loadNotes = () => {
    return API.get('notes', '/notes');
  };

  const renderNotesList = (notes) => {
    return (
      <>
        <LinkContainer to="/notes/new">
          <ListGroup.Item
            action
            className="py-3 text-nowrap text-truncate"
          >
            <BsPencilSquare size={17} />
            <span className="ml-2 font-weight-bold">
              Create a new note
            </span>
          </ListGroup.Item>
        </LinkContainer>
        {
          notes.map(({ noteId, content, createdAt }) => (
            <LinkContainer key={noteId} to={`/notes/${noteId}`}>
              <ListGroup.Item action>
                <span className="font-weight-bold">
                  {content.trim().split('\n')[0]}
                </span>
                <br />
                <span className="text-muted">
                  {`Created: ${new Date(createdAt).toLocaleString()}`}
                </span>
              </ListGroup.Item>
            </LinkContainer>
          ))
        }
      </>
    );
  };

  const renderLander = () => {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">
          A simple note taking app
        </p>
        <p className="text-muted">
          {`REACT_APP_REPO_VAR: ${process.env.REACT_APP_REPO_VAR}`}
        </p>
        <p className="text-muted">
          {`ENV_VAR: ${process.env.ENV_VAR}`}
        </p>
      </div>
    );
  };

  const renderNotes = () => {
    return (
      <div className="notes">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">
          Your Notes
        </h2>
        <ListGroup>
          {!isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  };

  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
};

export default Home;
