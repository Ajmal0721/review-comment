import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('FormData'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    localStorage.setItem('FormData', JSON.stringify(newData));
  };

  return (
    <>
      <div className="card-container">
        <div className="card-group">
          {data.map((val, key) => (
            <div className="card" key={key}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="img">
                    <img src={val.image} alt={`${val.name}'s uploaded`} />
                  </div>
                  <div className="card-content">
                    <h4 className="card-title">Name: {val.name}</h4>
                    <h4 className="card-subtitle">
                      {[1, 2, 3, 4, 5].map((star, index) => (
                        <FaStar
                          className="rm-2"
                          key={index}
                          size={18}
                          color={index < val.rating ? "#ffc107" : "#e4e5e9"}
                        />
                      ))}
                    </h4>
                    <button className="delete-button" style={{ marginBottom: '5px' }} onClick={() => handleDelete(key)}>
                      Delete
                    </button>
                    <Link to="/" style={{display:'block',width:'100%'}}><button className="delete-button">Add Card</button></Link>
                  </div>
                </div>
                <div className="card-back">
                  <h4 className="card-title">Comment:</h4>
                  <p>{val.comment}</p>
                    <button className="delete-button" style={{ marginBottom: '5px' }} onClick={() => handleDelete(key)}>
                      Delete
                    </button>
                    <Link to="/" style={{display:'block', width:'100%'}}><button className="delete-button">Add Card</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
