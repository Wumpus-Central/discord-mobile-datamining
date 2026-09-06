// discord_app/modules/verification/native/components/AddPhone.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import PhoneStore from "../../../phone/PhoneStore.tsx";
import UserRequiredActionStore from "../../../../stores/UserRequiredActionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const UserFlags = fn(1074).UserFlags;
const NOOP_NULL = fn(1085).NOOP_NULL;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = { background: null, container: null, title: null, input: null, redesignInput: null, button: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.background = createStyles;
createStyles.container = { padding: 16, flex: 1 };
createStyles.title = { textAlign: "center" };
createStyles.input = { marginTop: 24 };
createStyles.redesignInput = { borderRadius: nativeDefault.radii.lg };
createStyles.button = { marginTop: 8 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/AddPhone.tsx");

export default function AddPhone(reason) {
  ({ header, onComplete: require, onDeletePhone } = reason);
  reason = reason.reason;
  _slicedToArray = undefined;
  noop = undefined;
  let first;
  closure_7 = undefined;
  let first1;
  let action;
  let currentUser;
  closure_12 = undefined;
  closure_13 = async function _handleSubmit(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
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
              const obj1 = { value: obj7.beginReverifyPhone(combined, reason), done: false };
              return obj1;
            } else {
              c4 = 3;
              c5 = 1;
              const obj2 = { value: obj7.beginAddPhone(combined, reason), done: false };
              return obj2;
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
              obj = { value, done: true };
              return obj;
            }
            closure_129_0(closure_128_0);
            c3 = 1;
          }
          c3 = 0;
          closure_129_12(false);
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
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
  let obj = require("initialize");
  const items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = require("initialize");
  const items1 = [action];
  let phone;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => action.getAction());
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let obj2 = onDeletePhone(tmp3[13]);
  const result = obj2.isPhoneReverification(stateFromStores, stateFromStores1);
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
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => first1.getCountryCode());
  const tmp2Result = require("initialize");
  [tmp13, tmp14] = _slicedToArray(stateFromStores2.code.split(" "), 2);
  noop = tmp14;
  let obj4 = noop;
  let str2 = tmp13;
  if (tmp13 == null) {
    str2 = "";
  }
  let tmp11Result = tmp11(noop.useState(str2), 2);
  first = tmp11Result[0];
  closure_7 = tmp11Result[1];
  if (null != phone) {
    let str3 = phone.replace(first, "");
  } else {
    str3 = tmp14;
    if (tmp14 == null) {
      str3 = "";
    }
  }
  tmp11Result = tmp11(obj4.useState(str3), 2);
  first1 = tmp11Result[0];
  action = tmp11Result[1];
  const tmp11Result1 = _slicedToArray(obj4.useState(null), 2);
  currentUser = tmp11Result1[1];
  obj4.useRef(true);
  const tmp11Result2 = _slicedToArray(obj4.useState(false), 2);
  closure_12 = tmp11Result2[1];
  const items3 = [tmp14];
  const effect = obj4.useEffect(() => {
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
  obj = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  const items4 = [tmp.background, reason.style];
  obj.style = items4;
  obj = { style: tmp.container, children: null };
  if (header != null) {
    const items5 = [header, , ,];
    obj1 = {
      style: null,
      textInputStyle: null,
      label: null,
      alpha2: null,
      countryCode: null,
      value: null,
      onChangeText: null,
      forceMode: null,
      returnKeyType: "done",
      onSubmitEditing: null,
      error: null,
      onPressCountrySelector: null,
      autoFocus: true,
    };
    ({ input: obj8.style, redesignInput: obj8.textInputStyle } = tmp);
    if (null != phone) {
      if (!result) {
        const intl3 = tmp2(tmp3[17]).intl;
        let stringResult = intl3.string(tmp2(tmp3[17]).t.K6R0UP);
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
      obj1.label = stringResult;
      obj1.alpha2 = stateFromStores2.alpha2;
      obj1.countryCode = tmp13;
      obj1.value = first1;
      obj1.onChangeText = function onChangeText(arg0, arg1) {
        action(arg0);
        closure_7(arg1);
      };
      obj1.forceMode = tmp2(tmp3[19]).PhoneOrEmailSelectorForceMode.PHONE;
      obj1.onSubmitEditing = handleSubmit;
      obj1.error = tmp11Result1[0];
      obj1.onPressCountrySelector = function onPressCountrySelector() {
        return onDeletePhone(reason[20]).pushLazy(require("asyncRequireImpl")(reason[21], reason.paths));
      };
      items5[1] = tmp22(tmp28, obj1);
      obj2 = { style: tmp.button, children: null };
      let str5 = "lg";
      if (tmp8) {
        str5 = "md";
      }
      let obj3 = { variant: "primary", size: str5, text: null, onPress: null, loading: null };
      const intl5 = tmp2(tmp3[17]).intl;
      obj3.text = intl5.string(tmp2(tmp3[17]).t.PDTjLN);
      obj3.onPress = handleSubmit;
      obj3.loading = tmp11Result2[0];
      obj2.children = tmp22(tmp2(tmp3[23]).Button, obj3);
      items5[2] = tmp22(tmp25, obj2);
      let tmp22Result = null;
      if (tmp8) {
        obj4 = { style: tmp.button, children: null };
        const obj5 = { variant: "secondary", size: "md", text: null, onPress: null };
        const intl6 = tmp2(tmp3[17]).intl;
        obj5.text = intl6.string(tmp2(tmp3[17]).t.kYvzoQ);
        obj5.onPress = function onPress() {
          let obj = stateFromStores;
          if (null != stateFromStores) {
            if (obj.hasFlag(UserFlags.MFA_SMS)) {
              obj = {
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
                },
              };
              actions_AlertActionCreatorsDefault.openLazy(obj);
            } else if (onDeletePhone != null) {
              tmp2();
            }
          }
        };
        obj4.children = tmp22(tmp2(tmp3[23]).Button, obj5);
        tmp22Result = tmp22(tmp25, obj4);
      }
      items5[3] = tmp22Result;
      obj.children = items5;
      obj.children = tmp24(tmp25, obj);
      return tmp22(tmp23, obj);
    }
    const intl4 = tmp2(tmp3[17]).intl;
    stringResult = intl4.string(tmp2(tmp3[17]).t["64bX0M"]);
  } else {
    const obj6 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    if (null != phone) {
      if (!result) {
        const intl = tmp2(tmp3[17]).intl;
        let stringResult1 = intl.string(tmp2(tmp3[17]).t.WO0zBE);
      }
      obj6.children = stringResult1;
      tmp22Result = tmp22(tmp31, obj6);
    }
    const intl2 = tmp2(tmp3[17]).intl;
    stringResult1 = intl2.string(tmp2(tmp3[17]).t.hY8QTR);
  }
}
