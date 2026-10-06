// === Module 11033: FilePickerUtils ===

// Module 11033 (FilePickerUtils)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let code, length2, type;

let obj = function _handleDocumentSelection() {
  obj = _asyncToGenerator(async () => {
    let length;
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    let iter = (async (arg0) => {
      let c1;
      let c2;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let tmp3;
      function getPickerTypesForExtensions(c1) {
        const items = [];
        const iter = c1[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("jfif" !== nextResult) {
            let obj2 = closure_1_0(length2[2]);
            obj = { kind: "extension", value: tmp2 };
            let isKnownTypeResult = obj2.isKnownType(obj);
            if (isKnownTypeResult.isKnown) {
              let tmp10Result = closure_1_0(length2[3]);
              let tmp4 = tmp10Result.isIOS() ? tmp15 : tmp14;
              if (null == tmp4) {
                iter.return();
              } else {
                let arr = items.push(tmp5);
              }
            } else {
              iter.return();
            }
          }
          continue;
        }
        let tmp9;
        if (items.length > 0) {
          tmp9 = items;
        }
        return tmp9;
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_1;
          let flag;
          let closure_4;
          c6 = 2;
          let tmp4 = c5;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let closure_2 = tmp;
              closure_1 = tmp4;
              flag = undefined;
              length2 = undefined;
              let obj5 = closure_0;
              if (closure_0 === undefined) {
                obj5 = {};
              }
              flag = obj5.pickMultiple ?? true;
              ({ extensions: c1, types: c2 } = obj5);
              type = undefined;
              closure_4 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let tmp56;
              if (null != length2) {
                let obj8;
                if (length2.length > 0) {
                  tmp56 = length2;
                }
                type = tmp56;
                c4 = 1;
                const pick = closure_130_0(closure_130_2[2]).pick;
                closure_130_0(closure_130_2[2]);
                const obj7 = closure_130_0(closure_130_2[3]);
                if (obj7.isIOS()) {
                  obj8 = { mode: "open" };
                } else {
                  obj8 = { mode: "import" };
                }
                const obj9 = { allowMultiSelection: flag, type };
                const merged = Object.assign(obj8);
                c5 = 3;
                c6 = 1;
                const obj10 = { value: pick(obj9), done: false };
                return obj10;
              }
              if (null != length) {
                if (length.length > 0) {
                  tmp56 = getPickerTypesForExtensions(length);
                }
              }
            }
          } else if (2 === tmp4) {
            c4 = 0;
            code = type;
            const obj4 = closure_130_0(closure_130_2[2]);
            if (obj4.isErrorWithCode(code)) {
              if (code.code === closure_130_0(closure_130_2[2]).errorCodes.OPERATION_CANCELED) {
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            }
            const _JSON = JSON;
            const obj11 = { error_message: JSON.stringify(code) };
            const trackWithMetadata = closure_130_0(closure_130_2[6]).trackWithMetadata;
            const MOBILE_FILE_PICKER_ERROR = closure_130_4.MOBILE_FILE_PICKER_ERROR;
            closure_130_0(closure_130_2[6]);
            trackWithMetadata(MOBILE_FILE_PICKER_ERROR, obj11);
            const obj12 = { title: intl3.string(closure_130_0(closure_130_2[5]).t.rWHepR), body: intl4.string(closure_130_0(closure_130_2[5]).t.fZRH9P) };
            const show2 = closure_130_1(closure_130_2[4]).show;
            closure_130_1(closure_130_2[4]);
            intl3 = closure_130_0(closure_130_2[5]).intl;
            intl4 = closure_130_0(closure_130_2[5]).intl;
            show2(obj12);
            c6 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            let tmp6;
            closure_4 = value;
            if (closure_4.some((size) => 0 === size.size)) {
              obj = { title: intl.string(closure_130_0(closure_130_2[5]).t.B3vFdU), body: intl2.string(closure_130_0(closure_130_2[5]).t["9ZpT2C"]) };
              const show = closure_130_1(closure_130_2[4]).show;
              closure_130_1(closure_130_2[4]);
              intl = closure_130_0(closure_130_2[5]).intl;
              intl2 = closure_130_0(closure_130_2[5]).intl;
              show(obj);
            } else {
              const tmp5 = closure_1;
              tmp6 = closure_4;
            }
            c4 = 0;
            c6 = 3;
            return { value: tmp6, done: true };
          }
        } catch (tmp75) {
          type = tmp75;
          if (0 === c4) {
            c6 = 3;
            throw tmp75;
          } else {
            c5 = 2;
          }
        }
      }
    })();
    let nextResult = iter.next();
    return iter;
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("utils/native/FilePickerUtils.tsx");

export const handleDocumentSelection = function handleDocumentSelection() {
  return obj(...arguments);
};