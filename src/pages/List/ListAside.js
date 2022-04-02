import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ListAside = props => {
  const [sub1Category, setSub1Category] = useState([]);
  const [sub2Category, setSub2Category] = useState([]);
  //const productUrl = `/products/${productInfo.id}`;

  useEffect(() => {
    fetch(`data/sub1CategoryData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setSub1Category(data);
      });
    fetch(`data/sub2CategoryData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setSub2Category(data);
      });
  }, []);
  console.log(props);

  return (
    <aside className="sub-aside">
      <p className="category1-title">{props.title}</p>

      <ul className="category2-list">
        <li>
          <Link to="#">차렵이불</Link>
        </li>
        <li className="category2-current">
          <Link to="#">패드 | 토퍼</Link>
        </li>
      </ul>
    </aside>
  );
};

export default ListAside;
