import React from 'react';

const Skill = () => {
    return (
        <section id="skill_box" className="p-5 lg:p-10 bg-white">
            <div className="skill-container mx-auto max-w-4xl">
                <div className="text-left mb-2 mt-20">
                    <p className="inline-block font-bold border-b-2 border-gray-400 pb-3 min-w-24 justify-start text-3xl lg:text-4xl">Skill</p>
                </div>
                <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around">
                    <div className="lg:w-1/2">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-5 mt-5 flex justify-start">Frameworks</h3>
                        <ul className="flex flex-wrap justify-start gap-4">
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/react.png" alt="React 아이콘" className="w-10 mr-5"/>React.js</li>
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/tailwindcss.png" alt="TailwindCSS 아이콘" className="w-10 mr-5"/>TailwindCSS</li>
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/daisyui.png" alt="DaisyUI 아이콘" className="w-10 mr-5"/>DaisyUI</li>
                        </ul>
                    </div>
      
                    <div className="lg:w-1/2 mb-10">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-5 mt-5 flex justify-start">Language</h3>
                        <ul className="flex flex-wrap justify-start gap-4">
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/html.png" alt="HTML 아이콘" className="w-10 mr-5"/>HTML 5</li>
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/css.png" alt="CSS 아이콘" className="w-10 mr-5"/>CSS 3</li>
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/javascript.png" alt="JavaScript 아이콘" className="w-10 mr-5"/>JavaScript</li>
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/ts.png" alt="TypeScript 아이콘" className="w-10 mr-5"/>TypeScript</li>
                        </ul>
                    </div>
                    

                    <div className="lg:w-1/2 mb-10">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-5 flex justify-start">Libraries</h3>
                        <ul className="flex flex-wrap justify-start gap-4">
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/recoil.png" alt="Recoil 아이콘" className="w-10 mr-5"/>Recoil</li>
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/reactquery.png" alt="ReactQuery 아이콘" className="w-10 mr-5"/>React Query</li>
                        </ul>
                    </div>

                    <div className="lg:w-1/2 mb-10">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-5 flex justify-start">Design</h3>
                        <ul className="flex flex-wrap justify-start gap-4">
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/figma.png" alt="Figma 아이콘" className="w-10 mr-5"/>Figma</li>
                        </ul>
                    </div>

                    <div className="lg:w-1/2 mb-10">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-5 flex justify-start">Collaboration</h3>
                        <ul className="flex flex-wrap justify-start gap-4">
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/notion.png" alt="Notion 아이콘" className="w-10 mr-5"/>Notion</li>
                            <li className="flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/slack.png" alt="Slack 아이콘" className="w-8 mr-5"/>Slack</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;