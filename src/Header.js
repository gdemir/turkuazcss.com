import React, { Component }       from "react";
import { NavLink }                from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <ul>
              <NavLink to="/" exact className="logo">
                <svg fill="#03968a" height="32" viewBox="0 0 109.000000 162.000000"><g transform="translate(0.000000,162.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M20 1083 c0 -570 2 -588 61 -706 65 -128 168 -231 295 -295 110 -55 156 -62 433 -62 l251 0 0 38 c0 104 -61 202 -153 245 -44 21 -72 26 -180 30 -106 5 -136 10 -180 30 -76 35 -122 79 -159 155 l-33 67 -5 410 -5 410 -27 47 c-54 91 -152 148 -254 148 l-44 0 0 -517z"></path><path d="M490 1048 c-91 -63 -93 -204 -3 -264 69 -46 223 -38 302 16 25 18 58 49 73 70 27 37 58 132 58 177 l0 23 -199 0 c-189 0 -200 -1 -231 -22z"></path></g></svg>
              </NavLink>
              <NavLink to="/dokuman"> 
                <svg fill="#03968a" height="18" viewBox="0 0 1792 1792"><path d="M1703 478q40 57 18 129l-275 906q-19 64-76.5 107.5t-122.5 43.5h-923q-77 0-148.5-53.5t-99.5-131.5q-24-67-2-127 0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5 16.5-23.5q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5t27.5-96.5q1-8-3-25.5t-2-26.5q2-8 9-18t18-23 17-21q8-12 16.5-30.5t15-35 16-36 19.5-32 26.5-23.5 36-11.5 47.5 5.5l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5t-128.5 34.5h-869q-27 0-38 15-11 16-1 43 24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57 38 15 59 43zm-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5z"/></svg>
                Doküman
              </NavLink>
              <NavLink to="/hakkinda">
                <svg fill="#2196f3" height="18" viewBox="0 0 2048 1792"><path d="M1024 512h-384v384h384v-384zm128 640v128h-640v-128h640zm0-768v640h-640v-640h640zm640 768v128h-512v-128h512zm0-256v128h-512v-128h512zm0-256v128h-512v-128h512zm0-256v128h-512v-128h512zm-1536 960v-960h-128v960q0 26 19 45t45 19 45-19 19-45zm1664 0v-1088h-1536v1088q0 33-11 64h1483q26 0 45-19t19-45zm128-1216v1216q0 80-56 136t-136 56h-1664q-80 0-136-56t-56-136v-1088h256v-128h1792z"/></svg>
                Hakkında
              </NavLink>
              <NavLink to="/tema">
                <svg fill="#ffeb3b" height="18" viewBox="0 0 1792 1792"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg>
                Tema
              </NavLink>
              <NavLink to="/ask">
                <svg fill="#ef5350" height="18" viewBox="0 0 1792 1792"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"/></svg>
                Aşk
              </NavLink>
            </ul>
            <ul>
              <a href="https://github.com/omergulcicek/turkuazcss" target="_blank" rel="noopener noreferrer">
                <svg fill="#323131" height="18" viewBox="0 0 1792 1792"><path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"/></svg>
              </a>
              <a href="https://twitter.com/turkuazcss" target="_blank" rel="noopener noreferrer">
                <svg fill="#5ea9dd" height="18" viewBox="0 0 1792 1792"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg>
              </a>
              <a className="buton kucuk">İndir</a>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
