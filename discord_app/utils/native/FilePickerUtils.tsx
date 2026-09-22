// === Module 11493: FilePickerUtils ===

// Module 11493 (FilePickerUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _handleDocumentSelection() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          dependencyMap = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          let extensions;
          let obj6 = closure_0;
          if (closure_0 === undefined) {
            obj6 = {};
          }
          let flag = obj6.pickMultiple;
          if (flag === undefined) {
            flag = true;
          }
          closure_129_0 = flag;
          extensions = obj6.extensions;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          let tmp54;
          if (null != extensions) {
            if (extensions.length > 0) {
              tmp54 = (function getPickerTypesForExtensions(extensions) {
                const items = [];
                const iter = extensions[Symbol.iterator]();
                const nextResult = iter.next();
                while (iter !== undefined) {
                  if ("jfif" !== nextResult) {
                    let obj2 = closure_1_0(dependencyMap[2]);
                    let obj = { kind: "extension", value: null };
                    obj.value = tmp2;
                    let isKnownTypeResult = obj2.isKnownType(obj);
                    if (isKnownTypeResult.isKnown) {
                      let tmp10Result = closure_1_0(dependencyMap[3]);
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
              })(extensions);
            }
          }
          closure_129_2 = tmp54;
          c4 = 1;
          let pick = closure_130_0(closure_130_2[2]).pick;
          const tmp61 = closure_130_0(closure_130_2[2]);
          if (obj9.isIOS()) {
            let obj10 = { mode: "open" };
          } else {
            obj10 = { mode: "import" };
          }
          const obj11 = {};
          const merged = Object.assign(obj10);
          obj11.allowMultiSelection = closure_129_0;
          obj11.type = closure_129_2;
          pick = pick(obj11);
          c5 = 3;
          c6 = 1;
          obj9 = closure_130_0(closure_130_2[3]);
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_4 = closure_3;
        if (obj4.isErrorWithCode(closure_129_4)) {
          if (closure_129_4.code === closure_130_0(closure_130_2[2]).errorCodes.OPERATION_CANCELED) {
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
        obj4 = closure_130_0(closure_130_2[2]);
        const obj12 = { error_message: null };
        const _JSON = JSON;
        obj12.error_message = JSON.stringify(closure_129_4);
        closure_130_0(closure_130_2[6]).trackWithMetadata(closure_130_4.MOBILE_FILE_PICKER_ERROR, obj12);
        const obj5 = closure_130_0(closure_130_2[6]);
        const obj13 = { title: null, body: null };
        const intl3 = closure_130_0(closure_130_2[5]).intl;
        obj13.title = intl3.string(closure_130_0(closure_130_2[5]).t.rWHepR);
        const intl4 = closure_130_0(closure_130_2[5]).intl;
        obj13.body = intl4.string(closure_130_0(closure_130_2[5]).t.fZRH9P);
        closure_130_1(closure_130_2[4]).show(obj13);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj14 = { value, done: true };
        return obj14;
      } else {
        closure_129_3 = value;
        if (closure_129_3.some((size) => 0 === size.size)) {
          const obj15 = { title: null, body: null };
          const intl = closure_130_0(closure_130_2[5]).intl;
          obj15.title = intl.string(closure_130_0(closure_130_2[5]).t.B3vFdU);
          const intl2 = closure_130_0(closure_130_2[5]).intl;
          obj15.body = intl2.string(closure_130_0(closure_130_2[5]).t["9ZpT2C"]);
          closure_130_1(closure_130_2[4]).show(obj15);
          let obj = closure_130_1(closure_130_2[4]);
        }
        c4 = 0;
        c6 = 3;
      }
    } catch (tmp70) {
      closure_3 = tmp70;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp70;
      } else {
        c5 = tmp;
      }
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/FilePickerUtils.tsx");

export const handleDocumentSelection = function handleDocumentSelection() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};