import React, { Component, Fragment } from "react";
import Feature                        from "./Feature";

export default class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="container">
        <div className="flex ck-orta b-aralik">
          <Feature
            id="responsive"
            classes="responsive"
            title="100% Responsive"
            description="<b>Mobil</b> öncelikli tasarlandı"
            logo="<svg fill='#ff9800' height='50' viewBox='0 0 1792 1792'><path d='M976 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zm208-160v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zm-192-848q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zm288-16v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z'/></svg>"
          />
          <Feature
            id="flexbox"
            classes="flexbox"
            title="Modern"
            description="<b>Flexbox</b> ile geliştirildi"
            logo="<svg fill='#0277bd' height='50' viewBox='0 0 1792 1792'><path d='M275 128h1505l-266 1333-804 267-698-267 71-356h297l-29 147 422 161 486-161 68-339h-1208l58-297h1209l38-191h-1208z'/></svg>"
          />
          <Feature
            id="turkish"
            classes="turkish"
            title="Türkçe"
            description="<b>Türkçe</b> dil desteği"
            logo="<svg height='50' viewBox='0 0 600 600'><path fill='#e30a17' d='M0 0h640v480H0z'/><path fill='#fff' d='M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z'/><path fill='#e30a17' d='M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z'/><path fill='#fff' d='M430.7 191.5l-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z'/></svg>"
          />
          <Feature
            id="open-source"
            classes="open-source"
            title="Ücretsiz"
            description="<b>GitHub</b>'ta açık kaynak"
            logo="<svg fill='#323131' height='50' viewBox='0 0 1792 1792'><path d='M704 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm640 0q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm160 0q0-120-69-204t-187-84q-41 0-195 21-71 11-157 11t-157-11q-152-21-195-21-118 0-187 84t-69 204q0 88 32 153.5t81 103 122 60 140 29.5 149 7h168q82 0 149-7t140-29.5 122-60 81-103 32-153.5zm224-176q0 207-61 331-38 77-105.5 133t-141 86-170 47.5-171.5 22-167 4.5q-78 0-142-3t-147.5-12.5-152.5-30-137-51.5-121-81-86-115q-62-123-62-331 0-237 136-396-27-82-27-170 0-116 51-218 108 0 190 39.5t189 123.5q147-35 309-35 148 0 280 32 105-82 187-121t189-39q51 102 51 218 0 87-27 168 136 160 136 398z'/></svg>"
          />
        </div>
      </div>
      </Fragment>
    );
  }
}
