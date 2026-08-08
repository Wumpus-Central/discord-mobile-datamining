// _runtime/05473_needsToReattach.js
arg5.needsToReattach = function needsToReattach(closure_1, closure_2) {
  if (closure_2.length !== closure_1.attachedGestures.length) {
    return true;
  } else {
    let num = 0;
    if (0 < closure_2.length) {
      while (closure_2[num].handlerName === closure_1.attachedGestures[num].handlerName) {
        if (closure_2[num].shouldUseReanimated !== closure_1.attachedGestures[num].shouldUseReanimated) {
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