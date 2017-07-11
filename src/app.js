class App {
  constructor(){
    this.noteContainer = document.querySelector('.all-notes')
    this.submitBtn = document.querySelector('#create-note #submit-new-note')
    this.noteTitles = document.querySelector('.notes .note-title')
    this.noteBodies = document.querySelector('.notes .note-body')
    this.noteList = new NoteList()
    this.submitBtn.addEventListener('click', this.onSubmit.bind(this))
  }

  onSubmit(){
    event.preventDefault()
    const text = this.todoText.value
    this.todoList.addTodoItem(text)
    this.todoText.value = ' '
    this.render()
  }
}
