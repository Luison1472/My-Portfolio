import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Project() {

 const [isOpen, setIsOpen] = useState(false);


  const CodeBlock = ({ codeString }) => (
  <SyntaxHighlighter language="javascript" style={atomDark}>
    {codeString}
  </SyntaxHighlighter>
  );

  const GoTogetherCodeString1 = `
    useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await getKakaoUserInfo(code);

        // response에서 직접 사용자 정보를 받았다면, 신규 사용자로 간주
        if (response && response.email) {
          // 신규 사용자 정보를 받아왔다면, 회원가입 페이지로 이동하면서 사용자 정보 전달
          navigate('/member/KakaoSignUp', {
            state: { userInfo: response, code: code },
          });
        } else if (response && response.accessToken) {
          // 기존 회원인 경우, 서버로부터 받은 액세스 토큰을 로컬 스토리지에 저장
          localStorage.setItem('accessToken', response.accessToken);
          setKakaoUser(response);
          navigate('/');
        }
      } catch (error) {
        const errorMessage = error.response?.data?.error;

        if (errorMessage === 'DUPLICATE_USER') {
          // 이미 가입된 사용자일 경우 홈으로 리다이렉트
          navigate('/');
        } else if (errorMessage === 'USER_NOT_FOUND') {
          // 신규 사용자일 경우 회원가입 페이지로 리다이렉트
          navigate('/member/KakaoSignUp');
        } else {
          // 그 외 오류 발생 시 로그인 페이지로 리다이렉트
          console.error('Error verifying user:', error);
          navigate('/member/login');
        }
      }
    };

    verifyUser();
  }, [code, navigate]);
  `;

  const GoTogetherCodeString2 = `
  // rest 사용 (req, res, ctx)
    const getAuthHandler = rest.get('/api/auth', async (req, res, ctx) => {
  let responseData = [...Data];

  await delay(1000);
  return res(ctx.json(responseData));
});

///////////////////////////////////////////////////////////////////////////////////

// http 사용 (HttpResponse)
const getAuthHandler = http.get('/api/auth', async () => {
  let res = [...Data];

  await delay(1000);
  return HttpResponse.json(res);
});

  `;

 const YoriJoriString = `
  if (profilePicture) {
        // 프로필 사진 업로드
        const metadata = {
          contentType: profilePicture.type // 파일의 MIME 유형 설정
        };
        const storageRef = ref(storage, \`profilePictures/\${user.uid}/profile.jpg\`);
        await uploadBytes(storageRef, profilePicture, metadata);
      }
  `;
  
  

  const toggle = () => {
    setIsOpen(!isOpen);
  };  

  const toggleSubProject = () => {
    setIsSubProjectOpen(!isSubProjectOpen);
  };

  const secondToggleSubProject = () => {
    setIsSecondSubProjectOpen(!isSecondSubProjectOpen);
  }



   return (
   <section id="project" className="lg:p-5 py-10 bg-white">
      <div className="container px-4">
        <div className="text-left mb-2">
          <p className="mt-20 inline-block font-bold border-b-2 border-gray-400 pb-3 min-w-24 justify-start text-4xl">Project</p>
        </div>
         
         <div className="mt-10 mb-2 text-left border-b-4 border-gray-400 border-dashed">
           <p className="inline-block font-bold pb-3 text-2xl">Main Project 1</p>
           <div className="flex md:flex items-start align-middle">
            <h2 className="text-xl font-semibold mt-4 mb-3">Go Together / 같이가요~ </h2>
            <div className="bg-blue-500 ml-3 mt-4 md:ml-5 px-3 pt-1 rounded-xl text-white line">협업</div>
           </div>
             <div className="flex flex-col md:flex-row mb-5">
               <img className="w-full md:w-52 rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/GoTogether.png" alt="같이가요 플젝 이미지" />

               <div className="flex flex-col flex-wrap justify-between">
                 <ul className="border-l-4 border-black">
                   <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                   <li className="ml-5 mb-5">이 프로젝트는 여행을 좋아하지만 혼자가기엔 부담스러울 때 동행자를 구하는 웹앱 서비스 입니다.<br />
                     사용자는 여행 계획을 공유하고, 여러 조건에 따라 같이 여행을 갈 동행을 찾을 수 있습니다.</li>
                   <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                   <li className="ml-5 mb-5">2024.02.15 ~ 2024.04.15(서버종료)</li>
                   <li className="ml-5 font-extrabold text-xl">팀 구성</li>
                   <li className="ml-5">백엔드 3명, 프론트엔드 2명</li>
                 </ul>
                </div>
             </div>
            <div className="mb-5">
             <h3 className="font-bold text-lg">My Part</h3>
             <ul className="ml-5 list-disc">
               <li className="font-bold">로그인/회원가입 API 연동 & 카카오 로그인/회원가입</li>
               <p className="ml-5 mb-2">- 백엔드와 클라이언트간의 API를 연동시켜, FormData를 multipart 로 제출</p>
               <li className="font-bold">로그아웃/탈퇴 구현</li>
               <p className="ml-5 mb-2">- Status 200 OK 응답을 받아 로그아웃 성공시, LocalStorage 정보 제거 하는 방식으로 구현</p>
               <li className="font-bold">WebSocket을 이용한 채팅방 구현</li>
               <p className="ml-5 mb-2">- STOMP 프로토콜을 사용하여 WebSocket으로 통신, 구독을 통해 실시간 채팅 구현</p>
               <li className="font-bold">TailWindCSS로 전체 UI 수정 및 반응형 디자인 설계</li>
               <p className="ml-5 mb-2">- 코드 가독성이 떨어진다는 단점이 있지만, 주어진 기간 안에 빠른 디자인을 하기 위해 채택</p>
               <p className="ml-5 mb-2">- 장점을 살려 모바일, 태블릿, 모니터 화면 기준으로 반응형 디자인 설계</p>
               <li className="font-bold">MSW를 사용한 목업</li>
               <p className="ml-5 mb-2">- 백엔드 API 개발 중 공백 기간 동안 Mock-API를 만들어 테스팅</p>
             </ul>
           </div>
           <div className="mb-5">
                <h3 className="font-bold text-lg">Skill</h3>
         
               <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
                            
              <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/react.png" alt="React 아이콘" className="w-10 "/></li>
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/javascript.png" alt="JavaScript 아이콘" className="w-10"/></li>             
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/ts.png" alt="ts 아이콘" className="w-10"/></li>
               <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/tailwindcss.png" alt="TailwindCSS 아이콘" className="w-10" /></li>
               <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/daisyui.png" alt="DaisyUI 아이콘" className="w-10"/></li>
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/recoil.png" alt="Recoil 아이콘" className="w-10"/></li>
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/reactquery.png" alt="ReactQuery 아이콘" className="w-10"/></li>
                            
               </ul>
             
            </div>
            
                                                                        {/* Go Together 트러블 슈팅 */}

           <div className="mb-5">
             
              <h3 
                className="font-bold text-lg cursor-pointer flex items-center justify-start gap-5" 
                onClick={toggle}
             >
               <span 
                  className="text-sm inline-block transform" 
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(90deg)' }}
                >
                  ▲
                </span>
                Trouble Shooting         
              </h3>
             {isOpen && (
               <div>
                <div className="mb-10">
                <p className="font-extrabold text-lg ml-5 mt-2">Problem 1</p>
                  <p className="ml-5 mt-2">
                    <span className="font-extrabold">Kakao 로그인 후, 추가정보페이지 리다이렉트와 ProtectRoute의 관계</span><br />
                    - Kakao Login : Kauth 링크에서 CODE와 Token을 부여받고 리다이렉트로 추가 정보기입 페이지로 넘어가는 과정에서 문제가 있었음.<br />
                    ProtectRoute로 로그인 페이지 제외한 메인 페이지 접근 방지 했지만, 로그인에 관련된 Kakao추가 정보기입 페이지에 접근 가능한 문제 발생.
                  </p>
                  <p className="font-extrabold text-lg ml-5 mt-2">Solve</p>
                  <ul className="ml-5 mt-2 list-disc">
                    <li className="font-extrabold list-none">4가지의 예외처리를 수정.</li>
                     <li className="ml-5">신규 회원 로그인</li>
                     <p className="ml-5">- 신규회원을 response의 email을 대조 및 판별하여 USER_NOT_FOUND 오류가 생길시, 카카오 회원가입 페이지로 리다이렉트</p>
                     <li className="ml-5">기존 회원 로그인</li>
                     <p className="ml-5">- 기존 회원일 경우 accessToken이 있음으로 로그인 직후, 받은 accessToken을 로컬 스토리지에 저장</p>
                     <li className="ml-5">같은 이메일로 가입 시도하는 카카오 신규 회원</li>
                     <p className="ml-5">- DB상 존재하는 이메일로 가입 할 시, 서버에서 DUPLICATE_USER 오류 발생으로 초기 페이지로 리다이렉트</p>
                     <li className="ml-5">CODE를 부여받지 않고 url로 추가정보기입 페이지로 접근시도 하는 회원</li>
                     <p className="ml-5 mb-5">- Kakao 가입 시, 고유 CODE를 부여받기에, 이를 서버에서 판단하에 verifying user 에러일 시 접근 방지 </p>
                   </ul>

                   <div className="mt-1">
                    <p className="font-extrabold text-lg ml-5">Code</p>
                    <div className="ml-5 text-white p-1 rounded-lg overflow-auto">
                      <CodeBlock codeString={GoTogetherCodeString1} />
                    </div>
                   </div>
                   
                    <div className="ml-10 font-extrabold border-b-2 border-black border-dotted pb-10">
                      <span>-&gt; </span>
                      <span className="">신규,기존,같은 이메일의 경우 Server Error Message를 통해 판별하고 그에 따른 Navigate 설정</span><br/>
                      <span className="ml-4">CODE를 부여받지 않는 경우, 서버에서 CODE와 Token의 유무를 판단하고 부적절한 경우 로그인 페이지로 Navigate 설정</span>
                    </div>
                </div>
                 <div>
               <p className="font-extrabold text-lg ml-5 mt-2">Problem 2</p>
                <p className="ml-5 mt-2">
                   <span className="font-extrabold">MSW 목업 작업중, rest를 읽지 못하는 오류</span><br />
                   - MSW 사용중, 공식문서대로 rest를 사용했지만 라이브러리를 못불러오는 문제인지 잘못 사용하고 있는건지 의문
                 </p>
                   <p className="font-extrabold text-lg ml-5 mt-2 mb-2">Solve</p>
                   <p className=" font-extrabold ml-5">rest 대신 Http 사용</p>
                <ul className="ml-5 mb-3 list-disc">
                   <li className="ml-5">rest 에서 Http로 변경</li>
                   <li className="ml-5">req, res, ctx 에서 httpResponse로 변경</li>
                   </ul>
                   
                   <div className="mt-1">
                    <p className="font-extrabold text-lg ml-5">Code</p>
                    <div className="ml-5 text-white p-1 rounded-lg overflow-auto">
                      <CodeBlock codeString={GoTogetherCodeString2} />
                    </div>
                   </div>

                   <div className="ml-10 font-extrabold">
                    <span>-&gt; </span>
                    <span className="">MSW는 rest와 Http 두 가지의 객체를 사용</span><br/>
                     <span className="ml-4">REST 아키텍쳐와 HTTP 프로토콜은 서로 독립적이지만, REST는 웹 시스템을 설계하기 위한 용도이다. 즉, HTTP가 REST의 설계에 따를 수 있도록 만들어졌으며, REST가 설계, HTTP가 그 설계의 구현체였음.
                     또한, HttpResponse와 함께 사용하면 단계를 거치지 않고 응답을 즉각적으로 받아올 수 있으며, 특정 프로토콜에 국한 되어있는 REST보단 HTTP가 아키텍쳐를 구현하기에 적합했음</span>
                   </div>
               </div>
               </div>
               
              )}
           </div>
           
                                           {/* /////////////////////////////////////////////////////////////////////////////// */}
            <div className="mb-5">
                <h3 className="font-bold text-lg">What I Learn</h3>
                <ul className="ml-5 list-disc">
                  <li>로그인 API 연결과 세션 관리 방법을 배웠습니다. 이를 통해 사용자 인증과 상태 유지의 중요성을 이해하게 되었음</li>
                  <li>TailwindCSS를 통한 반응형 디자인 구현 방법을 익혔습니다. 유틸리티-퍼스트 방식이 CSS 작성 시간을 단축시키고, 디자인의 일관성을 유지하는 데 도움이 됨을 배웠습니다.</li>
                  <li>Recoil과 React Query를 사용하여 상태 관리와 데이터 패칭을 효율적으로 처리하는 방법을 배웠습니다. 이러한 라이브러리의 사용은 애플리케이션의 성능 최적화와 유지 보수성 향상에 기여합니다.</li>
                </ul>
           </div>
           <div className="flex justify-start flex-wrap gap-4 ml-12 ">
            <a href="https://github.com/zerobase-I/GoTogether-FE" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
            </a>
            <a href="https://torpid-othnielia-6af.notion.site/Go-Together-1b27235066084421a115167cecbde4bf?pvs=4" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-10 mb-3" src="/img/notion.png"/>
                <p className="ml-9">시연 영상</p>
             </a>
             <a href="https://www.notion.so/API-7cc78ca1be34401586f87aba532b82c9?pvs=4" target="_blank"
              className="mb-5 w-36 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-6 mb-3" src="/img/API.png"/>
                <p className="ml-3">API 명세서</p>
             </a>
             <a href="https://www.canva.com/design/DAF9Urai_p4/XhBa4EbFF7rxAkbj3yWFRQ/edit?utm_content=DAF9Urai_p4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-6 mb-3" src="/img/wireFrame.png"/>
                <p className="ml-1">WireFrame</p>
            </a>
           </div>
         </div>

         {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         
         <div className="mt-20 mb-2 text-left border-b-4 border-gray-400 border-dashed">
                <p className="inline-block font-bold pb-3 text-2xl">Main Project 2</p>
           <div className="flex md:flex items-start">
            <h2 className="text-xl font-semibold mt-4 mb-3">Yori-Jori / 요리조리</h2>
            <div className="bg-yellow-500 ml-3 mt-4 md:ml-5 px-3 pt-1 rounded-xl text-white line">개인</div>
           </div>
           
             <div className="flex flex-col md:flex-row mb-5">
               <img className="w-full md:w-52 h-auto rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/YoriJori.png" alt="같이가요 플젝 이미지" />

               <div className="flex flex-col justify-between">
                 <ul className="border-l-4 border-black">
                   <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                   <li className="ml-5 mb-5">요리하기를 좋아했으며, 다양한 레시피를 공유하는 커뮤니티가 있다면 좋지 않을까? 하는 생각으로
                                            개인 프로젝트때 진행한 React 레시피 공유 커뮤니티 제작 프로젝트입니다.
                                            게시글을 올리고, 댓글을 달며 소통을 할 수 있도록 했습니다. </li>
                   <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                   <li className="ml-5 mb-5">2024.01.01 ~ 2024.01.28</li>
                   <li className="ml-5 font-extrabold text-xl">팀 구성</li>
                   <li className="ml-5">개인프로젝트</li>
                 </ul>
                </div>
             </div>
            <div className="mb-5">
             <h3 className="font-bold text-lg">My Part</h3>
             <ul className="ml-5 list-disc">
               <li>FireBase를 사용해 RESTful API 사용</li>
               <p className="ml-5">- 백엔드 없이 1인 개발을 위해 Fire-Base 서비스를 사용 / 협업 전 RESTful Method에 관한 공부를 할 수 있었음</p>
               <li>HTML 5 와 JavaScript, CSS 3, Styled-component를 사용하여 마크업 및 UI 구현</li>
               <p className="ml-5">- 프론트엔드의 기본 스택을 가지고 개인 프로젝트를 기획 및 개발 함으로서, 기초를 다질 수 있는 기회였음.</p>
               <li>Context-API를 사용하여 전역 상태 관리</li>
               <p className="ml-5">- 사용자의 정보를 다른 컴포넌트에서 불러오기 위하여 context-API를 사용함</p>
               <li>Pagination을 사용하여 여러 게시글들을 효율적으로 관리 할 수 있도록 관리</li>
               <p className="ml-5">- 무한 스크롤과 Pagination의 차이점을 공부하였으며 InterSection Observer에 대하여도 공부할 수 있었음</p>
             </ul>
           </div>
           <div className="mb-5">
                <h3 className="font-bold text-lg">Skill</h3>
         
               <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
                            
                            <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/react.png" alt="React 아이콘" className="w-10 "/></li>
                            <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/javascript.png" alt="JavaScript 아이콘" className="w-10"/></li>             
                            <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/firebase.png" alt="TailwindCSS 아이콘" className="w-10" /></li>
                            <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/styledComponent.jpg" alt="styledComponent 아이콘" className="w-10"/></li>
                        </ul>
             
            </div>
            
           <div className="mb-5">
             
              <h3 
                className="font-bold text-lg cursor-pointer flex items-center justify-start gap-5" 
                onClick={toggle}
             >
               <span 
                  className="text-sm inline-block transform" 
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(90deg)' }}
                >
                  ▲
                </span>
                Trouble Shooting         
              </h3>
             {isOpen && (
               <div>
                <div className="mb-10">
                <p className="font-extrabold text-lg ml-5 mt-2">Problem 1</p>
                  <p className="ml-5 mt-2">
                    <span className="font-extrabold">FireBase를 이용해 프로필 이미지 설정 중 오류.</span><br />
                     - FireBase로 이미지를 저장할 때 MIME 타입 오류가 발생<br />
                    <span className="ml-2">DataBase로 이미지 파일이 저장되지 않는 오류</span>
                  </p>
                  <p className="font-extrabold text-lg ml-5 mt-2">Solve</p>
                  <ul className="ml-5 mt-2 list-disc">
                    <li className="font-extrabold list-none">이미지에 MIME 타입을 지정</li>
                     <li className="ml-5">if 문으로 profilePicture가 있을 시, FireBase만의 DB 이미지 타입을 지정.</li><br />
                     <li className="ml-5">contentType : profilePictrue.type 으로 지정</li>
                   </ul>
                   <div className="mt-1">
                    <p className="font-extrabold text-lg ml-5">Code</p>
                    <div className="ml-5 text-white p-1 rounded-lg overflow-auto">
                      <CodeBlock codeString={YoriJoriString} />
                    </div>
                   </div>
                    <div className="ml-10 font-extrabold border-b-2 border-black border-dotted pb-10">
                      <span>-&gt; </span>
                      <span className="">후에 협업 프로젝트로 API 연동시, Data를 서버에 보낼 땐 multipart-Type 사용한다는 것을 알게 됨</span><br/>
                    </div>
                </div>
                 
               </div>
               
              )}
            </div>
            <div className="mb-5">
                <h3 className="font-bold text-lg">What I Learn</h3>
                <ul className="ml-5 list-disc">
                  <li>이미지를 다룰 땐 MIME 타입 설정의 중요성을 배웠으며, FireBase, 백엔드API와 통신할 땐 정해진 형식을 잘 지켜야 한다는 사실과</li>
               <li>이미지 파일을 백엔드와 API 통신을 할 때는 multipart-Type을 사용해야 한다는 것도 알게 되었음.</li>
               <li>아쉬웠던 점으로는, 회원가입에 더 많은 정보들을 formData로 보낼 수 있었다는점과 이메일 인증 등등 다양한 기능이 없다는 점이였음.</li>
                </ul>
           </div>

           <div className="flex sm:flex ml-12">
            <a href="https://github.com/Luison1472/YoriJori" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
            </a>
            <a href="https://yori-jori.vercel.app/" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-9 mb-3" src="/img/demo.png"/>
                <p className="ml-9">DEMO</p>
            </a>
           </div>
           
         </div>


         {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}   
         




         <div className="mt-20 mb-2 text-left border-b-4 border-gray-400 border-dashed">
           <div className="inline-block font-bold pb-3 text-2xl cursor-pointer">
             
             
            Sub Project 1 / Coupang-Offer
          </div>
        
             <>
               <div className="flex items-center space-x-1 md:space-x-2">
                <h2 className="text-xl font-semibold mt-4 mb-3">Coupang-Offer / 마크업</h2>
                <div className="bg-red-300 px-3 pt-1 rounded-xl text-white">과제</div>
              </div>
               <div className="flex flex-col md:flex-row mb-5">
                 <img className="w-full md:w-52 h-auto rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/Coupang-CategoryBest.png" alt="같이가요 플젝 이미지" />

                 <div className="flex flex-col justify-between">
                   <ul className="border-l-4 border-black">
                     <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                     <li className="ml-5 mb-5">쿠팡 웹 페이지의 '오늘의 쇼핑 제안' 영역을 마크업한 결과물입니다.</li>
                     <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                     <li className="ml-5 mb-5">2023.09.30 ~ 2023.10.02</li>
                     <li className="ml-5 font-extrabold text-xl">프로젝트 유형</li>
                     <li className="ml-5">ZeroBase 부트캠프 개인 과제</li>
                   </ul>
                 </div>
               </div>
               <div className="mb-5">
                 <h3 className="font-bold text-lg">My Part</h3>
                 <ul className="ml-5">
                   <li>- HTML / CSS 마크업</li>
                 </ul>
               </div>
               <div className="mb-5">
                 <h3 className="font-bold text-lg">Skill</h3>
         
                 <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
                            
                   <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/html.png" alt="html 아이콘" className="w-10 " /></li>
                   <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/css.png" alt="css 아이콘" className="w-10" /></li>
                   <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/styledComponent.jpg" alt="styledComponent 아이콘" className="w-10"/></li>         
                 </ul>
               </div>
    
               <div className="mb-5">
                 <h3 className="font-bold text-lg">What I Learn</h3>
                 <ul className="ml-5 list-disc">
                   <li>HTML의 기초와 Styled-Component의 작동방식을 알 수 있었음</li>
                   
                 </ul>
             </div>
             <div className="flex sm:flex ml-12">
            <a href="https://github.com/Luison1472/Coupang-CategoryBest" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
            </a>
            <a href="https://coupang-discovery.vercel.app/" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-9 mb-3" src="/img/demo.png"/>
                <p className="ml-9">DEMO</p>
            </a>
           </div>
               
             
             </>
           
         </div>

         <div className="mt-20 mb-2 text-left border-b-4 border-gray-400 border-dashed">
           <div className="inline-block font-bold pb-3 text-2xl cursor-pointer">
             
        
            Sub Project 2 / News Infinite Viewer & Intersection Observer
          </div>
 
             <>
               <div className="flex items-center">
                 <h2 className="text-xl font-semibold mt-4 mb-3">News Infinite viewer / 마크업</h2>
                 <div className="bg-red-300 ml-1 px-3 pt-1 rounded-xl text-white items line">과제</div>
               </div>
               <div className="flex flex-col md:flex-row mb-5">
                 <img className="w-full md:w-52 h-auto rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/NewsViewer.png" alt="같이가요 플젝 이미지" />

                 <div className="flex flex-col justify-between">
                   <ul className="border-l-4 border-black">
                     <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                     <li className="ml-5 mb-5">Intersection Observer를 활용해 Infinite Scroll을 사용한 뉴스 뷰어 입니다.</li>
                     <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                     <li className="ml-5 mb-5">2023.11.18 ~ 2023.11.22</li>
                     <li className="ml-5 font-extrabold text-xl">프로젝트 유형</li>
                     <li className="ml-5">ZeroBase 부트캠프 개인 과제</li>
                   </ul>
                 </div>
               </div>
               <div className="mb-5">
                 <h3 className="font-bold text-lg">My Part</h3>
                 <ul className="ml-5">
                   <li>- JavaScript를 이용한 Intersection Observer Infinite Scroll 기능구현</li>
                   <li>- HTML / CSS 마크업</li>
                 </ul>
               </div>
               <div className="mb-5">
                 <h3 className="font-bold text-lg">Skill</h3>
         
                 <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
                  <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/javascript.png" alt="JavaScript 아이콘" className="w-10"/></li>          
                  <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/html.png" alt="html 아이콘" className="w-10 " /></li>
                   <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/css.png" alt="css 아이콘" className="w-10" /></li>
                   <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/styledComponent.jpg" alt="styledComponent 아이콘" className="w-10"/></li>    
                 </ul>
               </div>
    
               <div className="mb-5">
                 <h3 className="font-bold text-lg">What I Learn</h3>
                 <ul className="ml-5 list-disc">
                   <li>Intersection Observer에 대한 동작원리를 알게 되었음</li>
                   <li>페이지를 넘길 때 사용되는 Pagination과 무한 스크롤의 차이점을 알게 되었고, 어떤 상황에 적합한지 알게 되었음</li>
                   <li>사용자가 정확한 데이터 위치를 알고 싶을 경우와 자원 사용 최적화, 즉 서버 부하와 클라이언트 측의 자원 사용을 최적화 할 때는 Pagination을 사용하며
                     <br/> 모바일 사용자를 우선으로 콘텐츠를 탐색하거나 발견하는 것을 목적으로 할 때 Infinite Scroll이 적합하다는 것을 알게 되었음.
                   </li>
                 </ul>
             </div>
             <div className="flex sm:flex ml-12">
            <a href="https://github.com/Luison1472/News-Viewer" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
            </a>
            <a href="https://torpid-othnielia-6af.notion.site/Sub-Project-2-News-Infinite-Viewer-Intersection-Observer-6cee397edf9042efb877dd031c60f47f?pvs=4" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-10 mb-3" src="/img/notion.png"/>
                <p className="ml-9">시연 영상</p>
             </a>
           </div>
               
             
             </>
    
         </div>

  
</div>
</section>
  );
}

export default Project;
