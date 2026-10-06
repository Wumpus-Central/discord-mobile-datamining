// discord_app/utils/ClipboardUtils.native.tsx
import _modDef6696 from "../../_runtime/metro/06696__.js";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../_runtime/metro/00002__.js";

let c2, c3;

let obj = function _copy() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj2 = _modDef6696;
            obj2.setString(closure_0);
            if (closure_1 != null) {
              closure_1();
            }
            c3 = 1;
            c2 = 1;
            const obj5 = { value: Promise.resolve(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        c2 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("utils/ClipboardUtils.native.tsx");

export const SUPPORTS_COPY = true;
export const copy = function copy() {
  return obj(...arguments);
};
export const getString = function getString() {
  obj = _modDef6696;
  return obj.getString();
};
