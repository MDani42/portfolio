import React from 'react';
import './rolam.css';

const Rolam = () => {
  return (
    <div className='tarolo'>
      <div className='schools'>
        <h3>Iskolák</h3>
        <p>2016-ban Kezdtem a középiskolát ahol Gépgyártás technológiai technikusnak tanultam.</p>
        <p>2020-ban Érettségiztem le, ami után 1 éves technikusi képzésre mentem.</p>
        <p>2022-ben CNC-programozónak tanultam ami szintén egy évig tartott.</p>
        <p>2023-ban Kezdtem el Junior frontend programozónak tanulni a Soter-line iskolánál dikitálisan.</p>
      </div>
      <br />
      <div className='munkahelyek'>
        <h3>Munkahelyek</h3>
        <p>Az első munkahelyem a Metmaxban volt ahol CNC gépkezelőként dolgoztam 5 hónapig.</p>
        <p>Ezután a Potán kezdtem el dolgozni 4 órában, mellette pedig tanultam programozni. Ahol jelenleg is dolgozom.</p>
      </div>
    </div>
  )
}

export default Rolam;
