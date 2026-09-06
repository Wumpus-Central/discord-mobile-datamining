// === Module 144: ? ===

// Module 144
import renderElement from "renderElement" /* 114 */;
import _mod145 from "module_145" /* 145 */;

require = arg1;
const dependencyMap = arg6;
let c2 = null;
const set = new Set();

export default {
  currentlyFocusedInput() {
    return c2;
  },
  focusInput(current) {
    let tmp = c2 !== current;
    if (tmp) {
      tmp = null != current;
    }
    if (tmp) {
      c2 = current;
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
    return renderElement.findNodeHandle(c2);
  },
  focusField(arg0) {

  },
  blurField(arg0) {

  },
  focusTextInput(self) {
    if (typeof self !== "number") {
      if (null != self) {
        if (c2 !== self) {
          const currentProps = self.currentProps;
          let editable;
          if (currentProps != null) {
            editable = currentProps.editable;
          }
          if (false !== editable) {
            if (tmp4) {
              c2 = self;
            }
            const Commands = _mod145.Commands;
            Commands.focus(self);
            tmp4 = c2 !== self && null != self;
          }
        }
      }
    }
  },
  blurTextInput(_default2) {
    let tmp = typeof _default2 !== "number";
    if (typeof _default2 !== "number") {
      tmp = c2 === _default2;
    }
    if (tmp) {
      tmp = null != _default2;
    }
    if (tmp) {
      let tmp4 = c2 === _default2;
      if (tmp4) {
        tmp4 = null != _default2;
      }
      if (tmp4) {
        c2 = null;
      }
      const Commands = _mod145.Commands;
      Commands.blur(_default2);
    }
  },
  registerInput(current) {
    if (typeof current !== "number") {
      set.add(current);
    }
  },
  unregisterInput(current) {
    if (typeof current !== "number") {
      set.delete(current);
    }
  },
  isTextInput(target) {
    let hasItem = typeof target !== "number";
    if (typeof target !== "number") {
      hasItem = set.has(target);
    }
    return hasItem;
  }
};