import React from 'react'

const About = () => {
  return (
    <div className="contents">
      <div>
        <h1>경력</h1>
        <div style={{ display: 'flex' }}>
          <h3 style={{ marginTop: '60px' }}>PayPro</h3>
          <p style={{ margin: '61px 0 0 20px' }}>2019. 08. 26 ~ 2020. 01. 31</p>
        </div>
        <div>
          <p className="block">[꿈꾸는 멍냥이]</p>
          <p style={{ marginTop: '10px' }}>
            - 언어 및 프레임워크 : Spring boot, Java, Mybatis, Angular
          </p>
          <p>- 데이터베이스 : MySQL</p>
          <p>- 서버 : AWS</p>
          <p>- 협업 툴 및 형상관리 : Jenkins, GitLab</p>
          <p>- 기능 구현 및 기타사항 : 운영중 발견된 수정사항 처리</p>
          <p>- 주요기능 </p>
          <p className="indent">1. 동영상 썸네일 노출 처리</p>
          <p className="indent">
            2. 이메일 발송 시 누락되는 데이터 추가 및 수정
          </p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p>[MI:JA (미인 자신감)]</p>
          <p style={{ marginTop: '10px' }}>
            - 언어 및 프레임워크 : Spring boot, Java, Mybatis
          </p>
          <p>- 데이터베이스 : MySQL</p>
          <p>- 서버 : AWS</p>
          <p>- 협업 툴 및 형상관리 : Jenkins, GitLab, Postman, Swagger</p>
          <p>- 기능 구현 및 기타사항</p>
          <p className="indent">1. 주소 검색 OPEN API 연동</p>
          <p className="indent">2. 전국 병원 데이터 검색 OPEN API 연동</p>
          <p className="indent">3. 전반적 서비스 및 게시글의 댓글 API 개발</p>
          <p className="indent">AWS를 이용한 파일 업로드 공통 API 개발 참여</p>
        </div>
        <div style={{ display: 'flex' }}>
          <h3 style={{ marginTop: '60px' }}>InnoRules</h3>
          <p style={{ margin: '61px 0 0 20px' }}>2019. 02. 03 ~ 2020. 11. 06</p>
        </div>
        <div>
          <p className="block"> [제품 개발 업무] </p>
          <p>- 기존 시스템(JAVA)을 유지보수하는 업무</p>
          <p>- 웹 서비스 구축(EC2, RDS) 업무</p>
          <p className="block" style={{ marginTop: '40px' }}>
            [기술 지원 업무]
          </p>
          - 리눅스 서버에 제품 설치 및 정기 점검을 하여 로그를 파악하고 에러를
          분석하는 업무
        </div>
      </div>
    </div>
  )
}

export default About
