import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function NoteForm(props) {
    function handleSubmit(event) {
        event.preventDefault();

        if (props.isUpdating) {
            props.updateNote(props.note._id);
        } else {
            props.addNewNote();
        }
    }

    function handleCancel(event) {
        event.preventDefault();
        if(props.isUpdating) {
        props.history.push(`/notes/${props.note._id}`)
        } else {
            props.history.push(`/notes`)
        }
        
    }

    return (
        <Fragment>
           <div className="note-form">
            <h3>{props.isUpdating ? 'Edit Note:' : 'Create New Note:'}</h3>
            <form>
                
                    <input type="text"
                    value={props.note.title}
                    name="title"
                    className="title"
                    placeholder="Note Title"
                    rows="1"
                    onChange={props.handleChange} />
                    <textarea type="text"
                    value={props.note.textBody}
                    name="textBody"
                    className="textBody"
                    placeholder="Note Content"
                    cols="30"
                    rows="23"
                    onChange={props.handleChange}></textarea>
                <div className="buttons">  
                <button className="blueButton" onClick={handleSubmit}><a>{props.isUpdating ? 'Update' : 'Save'}</a></button>
                <button className="blueButton" onClick={handleCancel}><a>Cancel</a></button>
                </div>
            </form>
            </div>
        </Fragment>
    )
}

// Form.propTypes = {
//     note: PropTypes.shape({
//         title: PropTypes.string,
//         content: PropTypes.string
//     }),
//     isUpdating: PropTypes.bool,
//     addNewNote: PropTypes.func,
//     handleChange: PropTypes.func,
//     updateNote: PropTypes.func
// }

export default NoteForm;