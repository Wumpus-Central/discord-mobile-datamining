// _runtime/11031_releaseLongTermAccess.js
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

let c1;

_asyncToGenerator(async (arg0) => {
  closure_0 = arg0;
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        const NativeDocumentPicker = closure_0(c1[1]).NativeDocumentPicker;
        c1 = 3;
        const obj = { value: NativeDocumentPicker.releaseLongTermAccess(closure_0), done: true };
        return obj;
      }
    } catch (tmp6) {
      c1 = 3;
      throw tmp6;
    }
  }
});
let closure_0 = _asyncToGenerator(async (arg0) => {
  closure_0 = arg0;
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        const NativeDocumentPicker = closure_0(c1[1]).NativeDocumentPicker;
        c1 = 3;
        const obj = { value: NativeDocumentPicker.releaseSecureAccess(closure_0), done: true };
        return obj;
      }
    } catch (tmp6) {
      c1 = 3;
      throw tmp6;
    }
  }
});

export const releaseLongTermAccess = function releaseLongTermAccess(arg0) {
  return closure_0(...arguments);
};
export const releaseSecureAccess = function releaseSecureAccess(arg0) {
  return closure_0(...arguments);
};
