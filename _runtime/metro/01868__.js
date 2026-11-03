// === Module 1868: ? ===

// Module 1868
let closure_0 = [];
let closure_1 = [];
let closure_2 = {
  update(arg0, arg1) {
    const result = closure_0(closure_1[0]).initializeLayoutAnimationsManager();
    if (arg1) {
      closure_1.push(arg0);
    } else {
      closure_0.push(arg0);
    }
    if (closure_0.length + closure_1.length === 1) {
      const self = this;
      this.flush();
    }
    const obj = closure_0(closure_1[0]);
  },
  flush() {
    const result = closure_0(closure_1[1]).configureLayoutAnimationBatch(closure_0.concat(closure_1));
    closure_0.length = 0;
    closure_1.length = 0;
  }
};

export (reanimatedID, type, maybeBuildResult, arg3, sharedTransitionTag) => {
  const obj = { viewTag: reanimatedID, type, config: null, sharedTransitionTag: null };
  let serializable;
  if (maybeBuildResult) {
    serializable = closure_0(closure_1[2]).createSerializable(maybeBuildResult);
    const obj2 = closure_0(closure_1[2]);
  }
  obj.config = serializable;
  obj.sharedTransitionTag = sharedTransitionTag;
  return closure_2.update(obj, arg3);
}