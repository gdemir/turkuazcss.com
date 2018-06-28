import React, { Component, Fragment }     from "react";
import TypeIt                             from "typeit";
import Features                           from "./Features";

export default class Home extends Component {
  componentDidMount() {
    new TypeIt(".typeit", {
      strings: [
        "Açık Kaynak",
        "jQuery'e ihtiyaç yok!",
        "Türkçe ve İngilizce",
        "Kolayca Özelleştirilebilir"
      ],
      loop: true,
      startDelay: 1500,
      breakLines: false,
      speed: 50,
      deleteSpeed: 25,
      nextStringDelay: 1500
    })
  }
  render() {
    return (
      <Fragment>
        <section className="home">
          <h4 className="intro-title">
            <b><span>Turkuaz Css</span></b>, daha hızlı ve kolay web sayfaları geliştirmek için tasarlanan güçlü bir Framework
          </h4>
          <h5 className="typeit"></h5>
        </section>
        <section className="features">
          <Features/>
        </section>
      </Fragment>
    );
  }
}
