import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Countdown from '../../components/Countdown';
import FancySvg from '../../components/FancySvg';
import Panel from '../../components/Panel';
import ButtonPrimary from '../../components/ButtonPrimary';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, Cover, Text, Photo } from './styles';

function Greeting() {
  return (
    <Container>
      <Cover imgSrc="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/31271238_10156405833644884_5060567756500369408_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=znHcOyU7lM8AX_oFohF&_nc_ht=scontent.fcgh37-1.fna&oh=960e95cd5d03749e30b3f889e1fef952&oe=607CED20">
        <div className="cover-container">
          <figure className="figure">
            <div>
              <strong className="full-name">R & D</strong>
              <strong className="min-name">R & D</strong>
              <span>27.03.2021</span>
            </div>
          </figure>
        </div>
      </Cover>
      <Countdown />
      <Panel
        title="sobre nós"
        subtitle="#chadepanela___#acasacaiu"
        text="Olá, seja bem-vindo ao nosso site "/>
      <Text>
        <section className="text-wrapper">
          {/* <h2>AVISO</h2> */}
          <p>
            Nada nos deixaria mais felizes do que compartilhar com todos vocês o
            momento da nossa união! Mas nem sempre a vida permite que nossos
            planos aconteçam como sonhamos.
          </p>
          <p>
            Devido ao atual momento que estamos vivendo, decidimos não reunir
            muitas pessoas na celebração da nossa união, mas não é um motivo
            para deixarmos de comemorar este momento único nas nossas vidas.
          </p>
          <p>
            Obrigado por reservar o seu tempo e nos dar o seu carinho. Iremos
            lembrar para sempre deste momento tão esperado.
          </p>
          <FancySvg />
        </section>
      </Text>

      <Photo imgSrc="https://cdn.discordapp.com/attachments/1128078686449577996/1246935726361284608/IMG_20231209_181254_445.webp?ex=665e32e4&is=665ce164&hm=49e8e59d36d242b26a43f74fc2538d82566ab10f2ae3ff93d315b4039fc27ec9&">
        <div className="photo-wrapper">
          <figure />
        </div>
      </Photo>
      <div className="button-container">
        <Link to="/shop">
          <ButtonPrimary type="button" text="Ver presentes" />
        </Link>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
