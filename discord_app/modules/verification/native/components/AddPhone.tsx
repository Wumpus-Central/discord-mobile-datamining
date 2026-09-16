// === Module 7154: AddPhone ===

// Module 7154 (AddPhone)
import nativeDefault from "native" /* 576 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4983 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PhoneStore from "PhoneStore" /* 7051 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1952 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const UserFlags = fn(1074).UserFlags;
const NOOP_NULL = fn(1085).NOOP_NULL;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { background: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: { padding: 16, flex: 1 }, title: { textAlign: "center" }, input: { marginTop: 24 }, redesignInput: null, button: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.redesignInput = { borderRadius: nativeDefault.radii.lg };
obj2.button = { marginTop: 8 };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/AddPhone.tsx");

export default function AddPhone(reason) {
  ({ header, onComplete: require, onDeletePhone } = reason);
  reason = reason.reason;
  _slicedToArray = undefined;
  noop = undefined;
  first = undefined;
  closure_7 = undefined;
  first1 = undefined;
  action = undefined;
  let currentUser;
  closure_12 = undefined;
  closure_13 = async function _handleSubmit() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
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
            closure_0 = tmp8;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            const _HermesInternal = HermesInternal;
            const combined = "" + first + first1;
            closure_128_0 = combined;
            NOOP_NULL(true);
            c3 = 2;
            const obj7 = tmp4(tmp44[14]);
            if (_slicedToArray) {
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
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_12(false);
          throw tmp44;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_2 = tmp44;
            const aPIError = new closure_0(tmp44[15]).APIError(closure_128_2);
            closure_128_1 = aPIError;
            closure_129_10(closure_128_1.getAnyErrorMessage());
            c3 = 0;
            closure_129_12(false);
            c5 = 3;
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_12(false);
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            closure_129_0(closure_128_0);
            c3 = 1;
          }
          c3 = 0;
          closure_129_12(false);
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        }
      } catch (tmp44) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp44;
        } else if (tmp2 === tmp46) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = closure_15();
  const items = [currentUser];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  const items1 = [action];
  let phone;
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => action.getAction());
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let obj2 = require("initialize");
  const result = onDeletePhone(reason[13]).isPhoneReverification(stateFromStores, stateFromStores1);
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
  let obj3 = onDeletePhone(reason[13]);
  const items2 = [first1];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => first1.getCountryCode());
  const tmp2Result = require("initialize");
  [tmp13, tmp14] = stateFromStores2.code.split(" ");
  noop = tmp14;
  let str2 = tmp13;
  if (tmp13 == null) {
    str2 = "";
  }
  [first, closure_7] = noop.useState(str2);
  if (null != phone) {
    let str3 = phone.replace(first, "");
  } else {
    str3 = tmp14;
    if (tmp14 == null) {
      str3 = "";
    }
  }
  [first1, action] = noop.useState(str3);
  const tmp11Result5 = _slicedToArray(noop.useState(null), 2);
  currentUser = tmp11Result5[1];
  noop.useRef(true);
  const tmp11Result6 = _slicedToArray(noop.useState(false), 2);
  closure_12 = tmp11Result6[1];
  const items3 = [tmp14];
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
  let obj4 = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  const items4 = [tmp.background, reason.style];
  obj4.style = items4;
  let obj6 = { style: tmp.container, children: null };
  if (header != null) {
    const items5 = [header, , , ];
    let obj7 = { style: null, textInputStyle: null, label: null, alpha2: null, countryCode: null, value: null, onChangeText: null, forceMode: null, returnKeyType: "done", onSubmitEditing: null, error: null, onPressCountrySelector: null, autoFocus: true };
    ({ input: obj8.style, redesignInput: obj8.textInputStyle } = tmp);
    if (null != phone) {
      if (!result) {
        const intl3 = require("util").intl;
        let stringResult = intl3.string(require("util").t.K6R0UP);
      }
      function handleSubmit() {
        const self = this;
        const apply = closure_13.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      obj7.label = stringResult;
      obj7.alpha2 = stateFromStores2.alpha2;
      obj7.countryCode = tmp13;
      obj7.value = first1;
      obj7.onChangeText = function onChangeText(arg0, arg1) {
        action(arg0);
        closure_7(arg1);
      };
      obj7.forceMode = require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE;
      obj7.onSubmitEditing = handleSubmit;
      obj7.error = tmp11Result5[0];
      obj7.onPressCountrySelector = function onPressCountrySelector() {
        return onDeletePhone(reason[20]).pushLazy(require("asyncRequireImpl")(reason[21], reason.paths));
      };
      items5[1] = tmp22(tmp28, obj7);
      const obj9 = { style: tmp.button, children: null };
      let str5 = "lg";
      if (tmp8) {
        str5 = "md";
      }
      const obj10 = { variant: "primary", size: str5, text: null, onPress: null, loading: null };
      const intl5 = require("util").intl;
      obj10.text = intl5.string(require("util").t.PDTjLN);
      obj10.onPress = handleSubmit;
      obj10.loading = tmp11Result6[0];
      obj9.children = tmp22(require("components/Button/Button").Button, obj10);
      items5[2] = tmp22(tmp25, obj9);
      let tmp22Result = null;
      if (tmp8) {
        const obj11 = { style: tmp.button, children: null };
        const obj12 = { variant: "secondary", size: "md", text: null, onPress: null };
        const intl6 = require("util").intl;
        obj12.text = intl6.string(require("util").t.kYvzoQ);
        obj12.onPress = function onPress() {
          if (null != stateFromStores) {
            if (stateFromStores.hasFlag(UserFlags.MFA_SMS)) {
              const obj3 = {
                importer() {
                      return require("asyncRequireImpl")(reason[25], reason.paths).then((result) => {
                        closure_0 = result.default;
                        return (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          let tmp4 = closure_2_1;
                          if (closure_2_1 == null) {
                            tmp4 = closure_3_12;
                          }
                          obj.onConfirm = tmp4;
                          return closure_3_13(closure_0, obj);
                        };
                      });
                    }
              };
              actions_AlertActionCreatorsDefault.openLazy(obj3);
            } else if (onDeletePhone != null) {
              tmp2();
            }
          }
        };
        obj11.children = tmp22(require("components/Button/Button").Button, obj12);
        tmp22Result = tmp22(tmp25, obj11);
      }
      items5[3] = tmp22Result;
      obj6.children = items5;
      obj4.children = tmp24(tmp25, obj6);
      return tmp22(tmp23, obj4);
    }
    const intl4 = require("util").intl;
    stringResult = intl4.string(require("util").t["64bX0M"]);
  } else {
    const obj13 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    if (null != phone) {
      if (!result) {
        const intl = require("util").intl;
        let stringResult1 = intl.string(require("util").t.WO0zBE);
      }
      obj13.children = stringResult1;
      tmp22(tmp31, obj13);
    }
    const intl2 = require("util").intl;
    stringResult1 = intl2.string(require("util").t.hY8QTR);
  }
  const tmp12 = _slicedToArray(stateFromStores2.code.split(" "), 2);
};