import { Link } from 'react-router-dom';
import Header from '../components/Header';
import GameBackground from './../assets/images/Game-Background.png';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const [unityContainerHeight, setInityContainerHeight] = useState(0);
  const [unityContainerWidth, setInityContainerWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const unityContainerRef = useRef<any>(null);
  const headerRef = useRef<any>(null);
  useEffect(() => {
    if (unityContainerRef.current && headerRef.current) {
      setInityContainerHeight(unityContainerRef.current.clientHeight);
      setInityContainerWidth(unityContainerRef.current.clientWidth);
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [unityContainerRef]);

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: '/Build/Builds.loader.js',
    dataUrl: '/Build/Builds.data',
    frameworkUrl: '/Build/Builds.framework.js',
    codeUrl: '/Build/Builds.wasm',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'DefaultCompany',
    // productName: 'Metamonopoly',
    productVersion: '1.0',
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <section className="home">
      <div className="home__row d-g">
        <Header headerRef={headerRef} />

        <div id="unity-container" className="unity-desktop" ref={unityContainerRef}>
          <Unity
            unityProvider={unityProvider}
            style={{
              background: '#1F1F20',
              width: `${unityContainerWidth}px`,
              height: `${window.innerHeight - headerHeight}px`,
              position: 'absolute',
              left: '0',
              bottom: '0',
            }}
          />
          <div id="unity-loading-bar">
            <div id="unity-logo"></div>
            <div id="unity-progress-bar-empty">
              <div id="unity-progress-bar-full"></div>
            </div>
          </div>
          <div id="unity-warning"> </div>
          <div id="unity-footer">
            <div id="unity-webgl-logo"></div>
            <div id="unity-fullscreen-button"></div>
            <div id="unity-build-title">Metamonopoly</div>
          </div>
        </div>

        <div className="home__bottom">
          <ul className="soc d-f jc-c ai-c">
            <li>
              <a className="soc__link" href="#"></a>
            </li>
            <li>
              <a className="soc__link" href="#"></a>
            </li>
            <li>
              <a className="soc__link" href="#"></a>
            </li>
            <li>
              <a className="soc__link" href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
