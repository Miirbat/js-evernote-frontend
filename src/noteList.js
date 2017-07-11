// $(document).ready(function(){
//
// })
class NoteList {
  constructor(){
    this.notes = []
  }

  renderNotes(){
    return this.notes.map( note => note.render())
  }

  addNote(title, body){
    const note = new Note(title, body)
    this.notes.push(note)
  }

  // removeNote(text){
  //   this.notes = this.notes.filter(note => note.title !== note.text)
  // } // this could be done a different way

  render(){
    return this.renderNotes()
  }

}
