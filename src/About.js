import React, { Component, Fragment } from "react";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <section className="about">
          <div className="container">
            <div className="flex">
              <div className="ck12">
                <h3>Hakkında</h3>
                <p>
                  Turkuaz Css 11 Nisan 2016 tarihinde, <a href="https://github.com/omergulcicek" target="_blank" rel="noopener noreferrer">@omergulcicek</a> tarafından GitHub üzerinden açık kaynak olarak geliştirilmeye başlanmıştır. Kolayca özelleştirilebilir kod yapısı ile kısa sürede şık tasarımlar ortaya çıkartabilirsiniz. Türkçe sınıf isimlendirmeleri ile, geliştirmeye yeni başlamış veya yabancı dilde yetersiz olan kişilerin, kolayca site oluşturmasını sağlar.
                </p>
                <p>
                  Turkuaz Css ile oluşturulan siteler, CSS medya sorguları ile mobil öncelikli olarak tablet, dizüstü bilgisayar ve masaüstü dahil her cihazda uyumlu çalışır. Geliştiriciler, ekran boyutları için benzersiz tasarımlar oluşturabilir ve cihaz ne olursa olsun sorunsuz bir deneyim yaşatabilir. Ücretsiz olarak sunulan yüzlerce örnek, onlarca temayı indirip, geliştirmeye başlayabilirsiniz.
                </p>
                <p>
                  İsmini Türk rengi olarakta bilinen Turkuaz renginden alır.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
