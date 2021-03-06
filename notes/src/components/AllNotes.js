import React from 'react';
import PropTypes from 'prop-types';

class AllNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNotes: [ ]//this.props.notesData
        }
    }

    componentWillMount() {
        console.log("in componentWillMount");
        this.setState({ currentNotes: this.props.notesData }, () =>  console.log("componentWillMount currentNotes", this.state.currentNotes));
       
        // this.state.currentNotes = this.props.notesData
       
        console.log("componentWillMount notesData", this.props.notesData)
    }
/*
    componentDidMount() {
        console.log("this.props.notesData in componentDidMount", this.props.notesData)
        //this.setState({ currentNotes: this.props.notesData });
        console.log("this.state.currentNotes in componentDidMount()", this.state.currentNotes )
    }
*/
    componentDidUpdate(prevProps) {
        console.log("in componentDidUpdate");
        if(JSON.stringify(this.props.notesData) !== JSON.stringify(prevProps.notesData)) {
            this.setState({ currentNotes: this.props.notesData })
        }
     }


    showAll() {
        this.setState({ currentNotes: this.props.notesData })
    }

/*
     filterByTag(tag) {
         if (this.state.currentNotes) {
         console.log("inside filter")
         const filteredNotes = this.props.notesData.filter(note => note.tags.includes(tag));
         this.setState({ currentNotes: filteredNotes })
         console.log("filtered", filteredNotes);
         }
     }
*/

    render() {
        console.log("in render")
        console.log("currentNotes in render", this.state)
        if (!this.props.notesData || !this.props.notesData.length) {
            return (
                <div><h3>You don't have any Notes yet. :(</h3>
                    <p>Try adding a new Note by clicking the <strong>+ Create New Note</strong> button! :)</p></div>
            )
        }

        return (
            <div className="notes-list-wrapper">
            <h3>Your Notes:</h3>
                {/* { <div className="filter">
                <h5 className="show-all" onClick={() => this.showAll()}>Show All Notes</h5>
                <div className="by-tag"><h5>Filter by tag:</h5> {this.props.notesData.map(note => {
                    return note.tags.split(',').map(tag => (
                        <h6 onClick={() => this.filterByTag(tag)}>{tag}</h6>
                    ))
                })}
                </div>
                </div> } */}
                <div className="all-notes">
                {  
                    this.state.currentNotes.map(note => (
                    <div className="note-card" key={note.id} onClick={() => this.props.history.push(`notes/${note.id}`)}>
                        <h4>
                        {this.props.truncateTitle(note.title)}
                        </h4>
                        <p>{this.props.truncate(note.content)}</p>
                    </div> 
                ))
                
                }
                </div>
            </div>
        )

    }
}

AllNotes.propTypes = {
    notesData: PropTypes.array,
    history: PropTypes.shape({
        push: PropTypes.func
    })
}

export default AllNotes;