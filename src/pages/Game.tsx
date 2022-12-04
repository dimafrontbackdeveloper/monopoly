import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const Game = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: '/assets/Builds.loader.js',
    dataUrl: '/assets/Builds.data',
    frameworkUrl: '/assets/Builds.framework.js',
    codeUrl: '/assets/Builds.wasm',
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  console.log(isLoaded);
  console.log(loadingProgression);
  console.log(loadingPercentage);

  return (
    <div className="container">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="unity" style={{ width: '100%' }} unityProvider={unityProvider} />
    </div>
  );
};

export default Game;
