import React from 'react';
import logo from './../assets/images/logo.png';
import twitter from './../assets/images/twitter.png';
import inst from './../assets/images/inst.png';
import tiktok from './../assets/images/tiktok.png';
import tg from './../assets/images/tg.png';
import ConnectWalletNORMAL from './../assets/images/ConnectWallet_NORMAL.png';

const Register = () => {
  return (
    <section className="registration">
      <div className="registration__row">
        <div className="registration__content d-f fd-c ai-c jc-c">
          <div className="registration__contentImg">
            <img src={logo} alt="logo" />
          </div>
          <button className="button" />
          <p className="d-f ai-c">
            Users Online:<b>X,XXX</b>
          </p>
        </div>
        <div className="registration__bottom d-f ai-c jc-sb">
          <p>
            Need help?{' '}
            <a className="link" href="#">
              Ask in Telegram
            </a>{' '}
          </p>
          <p>metamonopoly.org 2022</p>
          <p>
            <ul className="d-f ai-c">
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={inst} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={tg} alt="telegram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={tiktok} alt="tiktok" />
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
