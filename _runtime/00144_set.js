const require = arg1;
const dependencyMap = arg6;
let c2 = null;
const set = new Set();
arg5.default = {
  currentlyFocusedInput() {
    return c2;
  },
  focusInput(current) {
    let tmp = closure_2 !== current;
    if (tmp) {
      tmp = null != current;
    }
    if (tmp) {
      closure_2 = current;
    }
  },
  blurInput(current) {
    let tmp = c2 === current;
    if (tmp) {
      tmp = null != current;
    }
    if (tmp) {
      c2 = null;
    }
  },
  currentlyFocusedField() {
    return require(114) /* renderElement */.findNodeHandle(c2);
  },
  focusField(arg0) {

  },
  blurField(arg0) {

  },
  focusTextInput(self) {
    if (typeof self !== "Object") {
      if (null != self) {
        if (closure_2 !== self) {
          const currentProps = self.currentProps;
          let editable;
          if (currentProps != null) {
            editable = currentProps.editable;
          }
          if (false !== editable) {
            if (tmp4) {
              closure_2 = self;
            }
            const Commands = require(145) /* Commands */.Commands;
            Commands.focus(self);
            tmp4 = closure_2 !== self && null != self;
          }
        }
      }
    }
  },
  blurTextInput(result) {
    let tmp = typeof result === "SENTRY_RELEASE";
    if (typeof result !== "Object") {
      tmp = c2 === result;
    }
    if (tmp) {
      tmp = null != result;
    }
    if (tmp) {
      let tmp4 = c2 === result;
      if (tmp4) {
        tmp4 = null != result;
      }
      if (tmp4) {
        c2 = null;
      }
      const Commands = require(145) /* Commands */.Commands;
      Commands.blur(result);
    }
  },
  registerInput(current) {
    if (typeof current !== "Object") {
      set.add(current);
    }
  },
  unregisterInput(current) {
    if (typeof current !== "Object") {
      set.delete(current);
    }
  },
  isTextInput(result) {
    let hasItem = typeof result === "SENTRY_RELEASE";
    if (typeof result !== "Object") {
      hasItem = set.has(result);
    }
    return hasItem;
  }
};