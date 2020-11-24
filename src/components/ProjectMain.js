import React from 'react'
import img9 from '../image/img9.jpg'
import img11 from '../image/img11.jpg'

const ProjectMain = () => {
  return (
    <div>
      <div className="wrapper">
        <img src={img9} alt="sample" />
        <img src={img11} alt="sample" />
        <div className="description">
          <h1>버거보고</h1>
          <h3>국내 5사 햄버거에 대한 후기 및 정보 제공 서비스</h3>
          <div className="line">
            <div className="block">[프로젝트 참여 기간]</div>
            <div className="block indent">2020.07.18 ~ 2020.11.26</div>
            <div className="block">[사용기술]</div>
            <div className="block indent">
              <p>
                - 언어 및 프레임워크 : Node.js, Express, sequelize, React-native
              </p>
              <p>- 데이터베이스 : MySQL, RDS</p>
              <p>- 서버 : EC2, LightSail, Route53, S3, Netlify</p>
              <p>- 협업 툴 및 형상관리 : Notion, GitHub, Slack</p>
            </div>
            <div className="block">[담당 기능]</div>
            <div className="block indent">
              <p>- AWS EC2, LightSail, RDS 구축</p>
              <p>- Route53으로 개발 서버와 운영 서버 도메인 연결</p>
              <p>- pm2를 이용한 자동 배포 및 무중단 서비스</p>
              <p>- mocha, Chai를 이용한 테스트 코드 작성</p>
              <p>- 회원 기능, 버거 검색 필터 개발</p>
              <p>- ERD 설계</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectMain
