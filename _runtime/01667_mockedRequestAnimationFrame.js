// _runtime/01667_mockedRequestAnimationFrame.js
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  closure_0 = arg0;
  return setTimeout(() => callback(performance.now()), 0);
};
