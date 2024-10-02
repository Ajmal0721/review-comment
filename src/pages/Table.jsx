import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const Table = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    let Data = JSON.parse(localStorage.getItem('FormData'))
    setData(Data);
  }, [])

  const handleDelete = (index) => {
    Data.splice(index, 1)
    setData([...Data]);
    localStorage.setItem('FormData', JSON.stringify([...Data]));
  }

  return (
    <div>
      <div className="btn-group">
        <Link to="/"><button style={{ marginBottom: '15px' }}>Form</button></Link>
        <Link to="/card"><button style={{ marginBottom: '15px' }}>Cards</button></Link>
      </div>
      <table border={2} cellPadding={2} cellSpacing={5}>
        <thead>
          <th>No.</th>
          <th>Image</th>
          <th>Name</th>
          <th>Comment</th>
          <th>Action</th>
        </thead>
        <tbody>
          {Data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td><img src={val.image} alt="" width={100} /></td>
                <td>{val.name}</td>
                <td>{[1, 2, 3, 4, 5].map((star, index) => (
                  (<FaStar className='rm-2'
                    key={index}
                    size={18}
                    color={index < val.rating ? "#ffc107" : "#e4e5e9"}
                  />)
                ))}</td>
                <td style={{
                  maxHeight: '50px',
                  overflow: 'auto',
                  wordWrap: 'break-word',
                  whiteSpace: 'pre-wrap',
                }}>
                  {val.comment}
                </td>

                <td>
                  <button style={{ margin: '0 5px' }} onClick={() => handleDelete(key)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
