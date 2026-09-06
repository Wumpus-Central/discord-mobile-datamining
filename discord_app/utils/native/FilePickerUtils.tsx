// discord_app/utils/native/FilePickerUtils.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_5 = async function _handleDocumentSelection(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          let extensions;
          let obj1 = closure_0;
          if (closure_0 === undefined) {
            obj1 = {};
          }
          let flag = obj1.pickMultiple;
          if (flag === undefined) {
            flag = true;
          }
          closure_129_0 = flag;
          extensions = obj1.extensions;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          let tmp54;
          if (null != extensions) {
            if (extensions.length > 0) {
              tmp54 = (function getPickerTypesForExtensions(arg0) {
                const items = [];
                const iter = arg0[Symbol.iterator]();
                const nextResult = iter.next();
                while (iter !== undefined) {
                  if ("jfif" !== nextResult) {
                    let tmp10 = closure_1_0;
                    let tmp11 = closure_1_2;
                    let obj2 = closure_1_0(closure_1_2[2]);
                    let obj = { kind: "extension", value: null };
                    obj.value = tmp2;
                    let isKnownTypeResult = obj2.isKnownType(obj);
                    if (isKnownTypeResult.isKnown) {
                      let tmp10Result = tmp10(tmp11[3]);
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
          let obj8 = closure_130_0(closure_130_2[3]);
          if (obj8.isIOS()) {
            let obj3 = { mode: "open" };
          } else {
            obj3 = { mode: "import" };
          }
          let obj4 = {};
          const merged = Object.assign(obj3);
          obj4.allowMultiSelection = closure_129_0;
          obj4.type = closure_129_2;
          pick = pick(obj4);
          c5 = 3;
          c6 = 1;
          const tmp61 = closure_130_0(closure_130_2[2]);
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_4 = closure_3;
        obj3 = closure_130_0(closure_130_2[2]);
        if (obj3.isErrorWithCode(closure_129_4)) {
          if (closure_129_4.code === closure_130_0(closure_130_2[2]).errorCodes.OPERATION_CANCELED) {
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
        obj4 = closure_130_0(closure_130_2[6]);
        const obj5 = { error_message: null };
        const _JSON = JSON;
        obj5.error_message = JSON.stringify(closure_129_4);
        obj4.trackWithMetadata(closure_130_4.MOBILE_FILE_PICKER_ERROR, obj5);
        let obj6 = closure_130_1(closure_130_2[4]);
        obj6 = { title: null, body: null };
        const intl3 = closure_130_0(closure_130_2[5]).intl;
        obj6.title = intl3.string(closure_130_0(closure_130_2[5]).t.rWHepR);
        const intl4 = closure_130_0(closure_130_2[5]).intl;
        obj6.body = intl4.string(closure_130_0(closure_130_2[5]).t.fZRH9P);
        obj6.show(obj6);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_3 = value;
        if (closure_129_3.some((size) => 0 === size.size)) {
          obj = closure_130_1(closure_130_2[4]);
          obj8 = { title: null, body: null };
          const intl = closure_130_0(closure_130_2[5]).intl;
          obj8.title = intl.string(closure_130_0(closure_130_2[5]).t.B3vFdU);
          const intl2 = closure_130_0(closure_130_2[5]).intl;
          obj8.body = intl2.string(closure_130_0(closure_130_2[5]).t["9ZpT2C"]);
          obj.show(obj8);
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
