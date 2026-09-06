// _runtime/06701_needsToReattach.js

export const needsToReattach = function needsToReattach(current2, gesturesToAttach) {
  if (gesturesToAttach.length !== current2.attachedGestures.length) {
    return true;
  } else {
    let num = 0;
    if (0 < gesturesToAttach.length) {
      while (gesturesToAttach[num].handlerName === current2.attachedGestures[num].handlerName) {
        if (gesturesToAttach[num].shouldUseReanimated !== current2.attachedGestures[num].shouldUseReanimated) {
          break;
        } else {
          num = num + 1;
        }
      }
      return true;
    }
    return false;
  }
};
