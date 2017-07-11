// $(document).ready(function(){
//
// })
class Note{
  constructor(title, body){
    this.title = title
    this.body = body
  }

  render(){
    return(
     `<li class= "notes">
        <span class='note-title'> ${this.title} </span>
        <span class='note-body'> ${this.body} </span>
      </li>`
    )
  }
}
