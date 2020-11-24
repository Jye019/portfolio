import React from 'react'
import img3 from '../image/img3.jpg'
import img12 from '../image/img12.jpg'

const ProjectAuth = () => {
  return (
    <div>
      <div className="wrapper">
        <img src={img3} alt="sample" />
        <img src={img12} alt="sample" />
        <div className="description">
          <h1>주요 기능</h1>
          <h3>버거 검색 필터 기능</h3>
          <div className="line">
            <div className="block">[버거 검색 필터 기능]</div>
            <div className="block indent">
              <p>- 필터에 따른 검색 쿼리 구현 </p>
              <p>- 자음 및 단어 검색 함수 구현</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectAuth
