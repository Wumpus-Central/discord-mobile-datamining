// discord_app/utils/native/FilePickerUtils.tsx
import getSystemLocale from "getSystemLocale";
import { AnalyticEvents } from "ME";

const require = arg1;
function _handleDocumentSelection() {
  const self = this;
  const tmp = callback(() => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    let iter = (function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp3;
              let extensions = tmp7;
              let flag;
              extensions = undefined;
              let obj1 = flag;
              if (flag === undefined) {
                obj1 = {};
              }
              flag = obj1.pickMultiple;
              if (flag === undefined) {
                flag = true;
              }
              extensions = obj1.extensions;
              dependencyMap = undefined;
              let getSystemLocale;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
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
                        let tmp10 = flag;
                        let tmp11 = _undefined;
                        let obj2 = flag(_undefined[2]);
                        let obj = { kind: "extension", value: null };
                        let tmp12 = nextResult;
                        obj[1] = tmp2;
                        let isKnownTypeResult = obj2.isKnownType(obj);
                        if (isKnownTypeResult.isKnown) {
                          let tmp10Result = tmp10(tmp11[3]);
                          let tmp4 = tmp10Result.isIOS() ? tmp15 : tmp14;
                          if (null == tmp4) {
                            let tmp8 = iter;
                            iter.return();
                          } else {
                            let tmp6 = tmp4;
                            let arr = items.push(tmp5);
                          }
                        } else {
                          let tmp3 = iter;
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
              const outer1_2 = tmp54;
              let c4 = 1;
              let pick = callback(outer1_2[2]).pick;
              let obj8 = callback(outer1_2[3]);
              if (obj8.isIOS()) {
                let obj3 = { mode: "open" };
              } else {
                obj3 = { mode: "import" };
              }
              let obj4 = {};
              const merged = Object.assign(obj3);
              obj4.allowMultiSelection = flag;
              obj4.type = dependencyMap;
              pick = pick(obj4);
              c5 = 3;
              c6 = 1;
              const tmp61 = callback(outer1_2[2]);
            }
          } else if (2 === tmp7) {
            c4 = 0;
            c4 = getSystemLocale;
            obj3 = flag(10166);
            if (obj3.isErrorWithCode(c4)) {
              if (c4.code === flag(10166).errorCodes.OPERATION_CANCELED) {
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            obj4 = flag(4498);
            const obj5 = { error_message: null };
            const _JSON = JSON;
            obj5[0] = JSON.stringify(c4);
            obj4.trackWithMetadata(c4.MOBILE_FILE_PICKER_ERROR, obj5);
            let obj6 = extensions(4643);
            obj6 = { title: null, body: null };
            const intl3 = flag(1236).intl;
            obj6[0] = intl3.string(flag(1236).t.rWHepR);
            const intl4 = flag(1236).intl;
            obj6[1] = intl4.string(flag(1236).t.fZRH9P);
            obj6.show(obj6);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            getSystemLocale = arg1;
            if (getSystemLocale.some((size) => 0 === size.size)) {
              obj = extensions(4643);
              obj8 = { title: null, body: null };
              const intl = flag(1236).intl;
              obj8[0] = intl.string(flag(1236).t.B3vFdU);
              const intl2 = flag(1236).intl;
              obj8[1] = intl2.string(flag(1236).t["9ZpT2C"]);
              obj.show(obj8);
            }
            c4 = 0;
            c6 = 3;
          }
        } catch (tmp70) {
          getSystemLocale = tmp70;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp70;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _handleDocumentSelection = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("isKnownType").fileFinishedImporting("utils/native/FilePickerUtils.tsx");

export const handleDocumentSelection = function handleDocumentSelection(arg0) {
  const self = this;
  const apply = _handleDocumentSelection.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};