import React from "react";

export default function Administracao() {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(title);
    console.log(body);
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="body">Conteúdo:</label>
        <textarea onChange={(e) => { setBody(e.target.value) }} id="body" cols={30} rows={10}>
          {body}
        </textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}