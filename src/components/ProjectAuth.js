import React from 'react'
import img6 from '../image/img6.jpg'
import img13 from '../image/img13.jpg'

const ProjectAuth = () => {
  return (
    <div>
      <div className="wrapper">
        <img src={img6} alt="sample" />
        <img src={img13} alt="sample" />
        <div className="description">
          <h1>주요 기능</h1>
          <h3>회원 기능 및 리뷰 등록</h3>
          <div className="line">
            <div className="block">[회원 기능]</div>
            <div className="block indent">
              <p>
                - GMail API, OAuth2.0, nodeEmailer를 이용한 이메일 전송 개발
              </p>
              <p>- AccessToken과 RefreshToken 관리</p>
              <p>- bcrypt를 이용한 비밀번호 암호화</p>
            </div>
            <div className="block">[리뷰 기능]</div>
            <div className="block indent">
              <p>- 이모티콘 입력을 위한 RDS와 데이터베이스 설정</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectAuth
