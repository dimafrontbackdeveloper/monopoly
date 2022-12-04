import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: '/assets/Builds.loader.js',
    dataUrl: '/assets/Builds.data',
    frameworkUrl: '/assets/Builds.framework.js',
    codeUrl: '/assets/Builds.wasm',
  });

  return (
    <div>
      <Unity
        style={{
          width: '100%',
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
};

export default Game;
