import * as React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return <div>
    <Link to='/page-1' style={{marginRight: '20px'}}>Page 1</Link>
    <Link to='/page-2'>Page 2</Link>
  </div>
}