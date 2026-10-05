// _runtime/metro/00144__.js
import renderElement from "../00114_renderElement.js";
import _mod145 from "00145__.js";

let c2 = null;
const set = new Set();
let obj = {
  currentlyFocusedInput() {
    return c2;
  },
  focusInput(current) {
    const tmp = c2 !== current && null != current;
    if (tmp) {
      c2 = current;
    }
  },
  blurInput(current) {
    const tmp = c2 === current && null != current;
    if (tmp) {
      c2 = null;
    }
  },
  currentlyFocusedField() {
    const obj = renderElement;
    return obj.findNodeHandle(c2);
  },
  focusField(arg0) {},
  blurField(arg0) {},
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
            const tmp4 = c2 !== self && null != self;
            if (tmp4) {
              c2 = self;
            }
            const Commands = _mod145.Commands;
            Commands.focus(self);
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
      const tmp4 = c2 === _default2 && null != _default2;
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
  },
};

export default obj;
