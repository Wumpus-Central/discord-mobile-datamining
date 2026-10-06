// === Module 6548: AddPhone ===

// Module 6548 (AddPhone)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PhoneStore from "PhoneStore" /* 6437 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5, closure_12, closure_2;

let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const UserFlags = Constants.UserFlags;
const NOOP_NULL = Constants2.NOOP_NULL;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, container: { padding: 16, flex: 1 }, title: { textAlign: "center" }, input: { marginTop: 24 }, redesignInput: obj3, button: { marginTop: 8 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/verification/native/components/AddPhone.tsx");

export default function AddPhone(reason) {
  let Button;
  let Button2;
  let header;
  let intl5;
  let intl6;
  let items4;
  let obj10;
  let obj12;
  let onDeletePhone;
  let str3;
  let tmp13;
  let tmp14;
  ({ header, onComplete: require, onDeletePhone } = reason);
  reason = reason.reason;
  _slicedToArray = undefined;
  react = undefined;
  let first;
  let closure_7;
  let first1;
  let action;
  let currentUser;
  let ref;
  closure_12 = undefined;
  let obj = function _handleSubmit() {
    obj = _asyncToGenerator(async function() {
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          let aPIError;
          let combined;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp4;
              aPIError = undefined;
              const _HermesInternal = HermesInternal;
              combined = "" + first + first1;
              closure_2_12(true);
              c3 = 2;
              const obj7 = tmp(closure_2[14]);
              if (closure_2_4) {
                c4 = 4;
                c5 = 1;
                const obj4 = { value: obj7.beginReverifyPhone(combined, reason), done: false };
                return obj4;
              } else {
                c4 = 3;
                c5 = 1;
                const obj5 = { value: obj7.beginAddPhone(combined, reason), done: false };
                return obj5;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_12(false);
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              const self = this;
              const self2 = this;
              aPIError = new closure_0(closure_2[15]).APIError(closure_2);
              closure_129_10(aPIError.getAnyErrorMessage());
            } else {
              if (3 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  closure_129_12(false);
                  c5 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_12(false);
                c5 = 3;
                obj = { value, done: true };
                return obj;
              }
              closure_129_0(combined);
              c3 = 1;
            }
            c3 = 0;
            closure_129_12(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp38) {
          closure_2 = tmp38;
          if (0 === c3) {
            c5 = 3;
            throw tmp38;
          } else if (1 === tmp40) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const style = reason.style;
  const tmp = closure_15();
  const tmp3 = reason;
  obj = require("get initialized");
  const items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = require("get initialized");
  const items1 = [action];
  let phone;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => action.getAction());
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let obj3 = onDeletePhone(tmp3[13]);
  const result = obj3.isPhoneReverification(stateFromStores, stateFromStores1);
  _slicedToArray = result;
  let tmp8 = null != onDeletePhone && null != phone;
  if (tmp8) {
    let email;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    tmp8 = null != email;
  }
  if (tmp8) {
    tmp8 = !result;
  }
  const items2 = [first1];
  const tmp2Result = require("get initialized");
  const stateFromStores2 = tmp2Result.useStateFromStores(items2, () => first1.getCountryCode());
  let str = stateFromStores2.code;
  [tmp13, tmp14] = _slicedToArray(str.split(" "), 2);
  react = tmp14;
  let obj5 = react;
  let str2 = tmp13;
  const useState = react.useState;
  const tmp12 = _slicedToArray(str.split(" "), 2);
  if (tmp13 == null) {
    str2 = "";
  }
  const tmp11Result = _slicedToArray(useState(str2), 2);
  first = tmp11Result[0];
  closure_7 = tmp11Result[1];
  if (null != phone) {
    str3 = phone.replace(first, "");
  } else {
    str3 = tmp14;
    if (tmp14 == null) {
      str3 = "";
    }
  }
  const tmp11Result4 = _slicedToArray(obj5.useState(str3), 2);
  first1 = tmp11Result4[0];
  action = tmp11Result4[1];
  const tmp11Result5 = _slicedToArray(obj5.useState(null), 2);
  currentUser = tmp11Result5[1];
  const first2 = tmp11Result5[0];
  ref = obj5.useRef(true);
  const tmp11Result6 = _slicedToArray(obj5.useState(false), 2);
  closure_12 = tmp11Result6[1];
  const items3 = [tmp14];
  const first3 = tmp11Result6[0];
  const effect = obj5.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      let str = c5;
      if (c5 == null) {
        str = "";
      }
      action(str);
    }
  }, items3);
  let obj4 = { style: items4, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  items4 = [tmp.background, style];
  let obj6 = { style: tmp.container, children: null };
  const tmp25 = closure_7;
  if (header == null) {
    let obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    if (null != phone) {
      let stringResult;
      if (!result) {
        const intl = require("intl").intl;
        stringResult = intl.string(require("intl").t.WO0zBE);
      }
      obj7.children = stringResult;
      header = tmp24(tmp32, obj7);
    }
    const intl2 = require("intl").intl;
    stringResult = intl2.string(require("intl").t.hY8QTR);
  }
  const items5 = [header, , , ];
  const obj8 = { style: tmp.input, textInputStyle: tmp.redesignInput, label: null, alpha2: null, countryCode: null, value: null, onChangeText: null, forceMode: null, returnKeyType: "done", onSubmitEditing: null, error: null, onPressCountrySelector: null, autoFocus: true };
  if (null != phone) {
    let stringResult1;
    if (!result) {
      const intl3 = require("intl").intl;
      stringResult1 = intl3.string(require("intl").t.K6R0UP);
    }
    function handleSubmit() {
      return obj(...arguments);
    }
    obj8.label = stringResult1;
    obj8.alpha2 = stateFromStores2.alpha2;
    obj8.countryCode = tmp13;
    obj8.value = first1;
    obj8.onChangeText = function onChangeText(arg0, arg1) {
      action(arg0);
      closure_7(arg1);
    };
    obj8.forceMode = require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE;
    obj8.onSubmitEditing = handleSubmit;
    obj8.error = first2;
    obj8.onPressCountrySelector = function onPressCountrySelector() {
      obj = onDeletePhone(reason[20]);
      return obj.pushLazy(require("asyncRequire")(reason[21], reason.paths));
    };
    items5[1] = obj(tmp29, obj8);
    let str5 = "lg";
    const obj9 = { style: tmp.button, children: obj(Button, obj10) };
    Button = require("components/Button/Button").Button;
    if (tmp8) {
      str5 = "md";
    }
    obj10 = { variant: "primary", size: str5, text: intl5.string(require("intl").t.PDTjLN), onPress: handleSubmit, loading: first3 };
    intl5 = require("intl").intl;
    items5[2] = obj(first, obj9);
    let tmp24Result = null;
    if (tmp8) {
      const obj11 = { style: tmp.button, children: obj(Button2, obj12) };
      obj12 = {
        variant: "secondary",
        size: "md",
        text: intl6.string(require("intl").t.kYvzoQ),
        onPress() {
              if (null != stateFromStores) {
                if (stateFromStores.hasFlag(UserFlags.MFA_SMS)) {
                  const obj3 = {
                    importer() {
                          const promise = require("asyncRequire")(reason[25], reason.paths);
                          return promise.then((result) => {
                            let closure_0 = result.default;
                            return (arg0) => {
                              let tmp4;
                              obj = { onConfirm: tmp4 };
                              const merged = Object.assign(arg0);
                              tmp4 = closure_2_1;
                              if (closure_2_1 == null) {
                                tmp4 = closure_3_12;
                              }
                              return closure_3_13(closure_0, obj);
                            };
                          });
                        },
                    isDismissable: false
                  };
                  const obj2 = actions_AlertActionCreatorsDefault;
                  obj2.openLazy(obj3);
                } else if (onDeletePhone != null) {
                  tmp2();
                }
              }
            }
      };
      Button2 = require("components/Button/Button").Button;
      intl6 = require("intl").intl;
      tmp24Result = tmp24(tmp27, obj11);
    }
    items5[3] = tmp24Result;
    obj6.children = items5;
    obj4.children = closure_14(first, obj6);
    return obj(tmp25, obj4);
  }
  const intl4 = require("intl").intl;
  stringResult1 = intl4.string(require("intl").t["64bX0M"]);
};