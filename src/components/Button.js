import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button style={{ padding: "10px 30px", margin: "20px 30px" }} type="button" className="btn btn-success px-3 py-2">{props.title}</button>
    </div>
  )
}
