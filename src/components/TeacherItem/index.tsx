import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://storage.live.com/mydata/myprofile/expressionprofile/profilephoto:UserTileStatic,UserTileSmall/MeControlMediumUserTile?ck=1&ex=24&fofoff=1&sc=1596477740339"
          alt="Leo Peres"
        />
        <div>
          <strong>Leo Peres</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        suscipit hendrerit risus non imperdiet. Phasellus ultricies, dui nec
        elementum interdum, enim est molestie urna, eget cursus enim risus eget
        mauris. Curabitur rutrum luctus dictum.
        <br /> <br />
        Nullam vestibulum dolor vel turpis elementum dapibus. Proin a facilisis
        nulla. Nullam ut venenatis lorem. Curabitur accumsan luctus erat.
        Vestibulum tempor in tortor in rutrum. Duis rhoncus nulla sed malesuada
        aliquam. Donec auctor libero vel lacus posuere, ac gravida massa
        imperdiet. Cras vestibulum orci augue.
      </p>
      <footer>
        <p>
          Preço por hora <strong>R$80.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
