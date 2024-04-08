import React from 'react';

function Project() {
    return (
        <section id="profile" className="pt-28 relative max-w-full bg-gray-50">
            <div className="text-left">
                <p className="inline-block font-bold border-b-2 border-gray-400 pb-3 min-w-40 justify-start text-3xl">FE_JuniorDev_Portfolio</p>
            </div>
            <div className="mt-8">
                    <h2 className="text-3xl flex justify-start font-bold mb-2">About Me</h2>
                    <div className="text-lg font-medium space-y-1 mb-1">
                   <p className="text-left">
                        안녕하세요! 꾸준히 성장하는 주니어 FE 개발자 박민서 입니다.<br />
                        전자공학 졸업 후 제가 정말 하고 싶은 일을 찾아 개발자 공부를 시작하게 되었습니다.<br />
                        진로 변경 후, 대학 전공과 다르게 팀원들과 코드리뷰를 하면서 나누는 토론과<br />
                        끊임없는 고민 끝에 완성된 결과물을 보며 희열을 느낍니다.
                    </p>
                    </div>
                </div>
            
                <div className="flex justify-center gap-20 items-center flex-wrap drop-shadow-xl shadow-neutral-400 pt-5 shadow-xl ">
                    <div className="w-full md:w-auto">
                        <img src="/img/my-profile.png" alt="프로필" className="w-64 rounded-xl h-auto object-cover mx-auto" />
                    </div>
                
                <div className="text-gray-700 text-lg mt-2 md:mt-0">
                    <div className="flex font-extrabold text-3xl items-center gap-2 mb-5">박민서 / Minseo Park</div>
                    <ul className="mb-5 border-l-4 border-black ">
                        <li className="ml-5 flex items-center gap-1"><span className="mr-5">Name</span><span>박민서</span></li>
                        <li className="ml-5 flex items-center gap-1"><span className="mr-12">Tel</span><span>010-8077-1915</span></li>
                            <li className="ml-5 flex items-center gap-1"><span className="mr-8">Birth</span><span>1999.08.27</span></li>
                            <li className="ml-5 flex items-center gap-1"><span className="mr-2">Addres</span><span>인천광역시 서구 한들로33</span></li>
                            <li className="ml-5 flex items-center gap-1"><span className="mr-5">E-mail</span><span>melody9908@naver.com</span></li>
                            
                    </ul>
                    
                     <div className="flex font-extrabold text-3xl items-center gap-2 mb-5">Education</div>       
                    <ul className="mb-5 border-l-4 border-black ">
                        <li className="ml-5 flex items-center gap-2 text-left mb-2">청운대학교(전자공학과, 전자공학부)<br/>2018.03~2023.07</li>
                            <li className="ml-5 flex items-center gap-2 text-left">제로베이스 프론트엔드 취업 스쿨 졸업<br/>2024.09~2024.03</li>
                    </ul>
                    <div className="flex font-extrabold text-3xl items-center gap-2 mb-5">Social Media</div>
                    <ul className="mb-5 border-l-4 border-black ">
                       <a href="https://github.com/Luison1472" target="_blank"><li className="ml-5 flex items-center gap-2"><img className="w-8" src="/img/github.png" alt="깃허브 이미지"/>GitHub</li></a> 
                        <a href="https://blog.naver.com/mingcoding" target="_blank"><li className="ml-5 flex items-center gap-2"><img className="w-8" src="/img/blog.png"/>Blog</li></a>
                    </ul>
                       
                    </div>
             
            </div>
                
        </section>
    );
}

export default Project;