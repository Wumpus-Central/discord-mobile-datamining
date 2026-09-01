// discord_app/modules/verification/native/components/AddPhone.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../phone/PhoneStore.tsx";
import closure_9 from "../../../../stores/UserRequiredActionStore.tsx";
import closure_10 from "../../../../stores/UserStore.tsx";
import { UserFlags } from "../../../../Constants.tsx";
import { NOOP_NULL } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { background: null, container: null, title: null, input: null, redesignInput: null, button: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 16, flex: 1 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { marginTop: 24 };
createCacheKey[4] = { borderRadius: ThemesDefault.radii.lg };
createCacheKey[5] = { marginTop: 8 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.radii.lg };
let result = require("set").fileFinishedImporting("modules/verification/native/components/AddPhone.tsx");

export default function AddPhone(reason) {
  ({ header, onComplete: require, onDeletePhone } = reason);
  reason = reason.reason;
  let stateFromStores;
  let callback;
  let React;
  let first;
  closure_7 = undefined;
  let first1;
  closure_9 = undefined;
  closure_10 = undefined;
  closure_11 = undefined;
  closure_12 = undefined;
  function _handleSubmit() {
    const self = this;
    const tmp = stateFromStores(function* () {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let aPIError = tmp4;
              let combined = tmp8;
              combined = undefined;
              aPIError = undefined;
              const _HermesInternal = HermesInternal;
              combined = "" + closure_1_6 + closure_1_8;
              closure_1_12(true);
              c3 = 2;
              const obj7 = closure_1_1(closure_1_2[14]);
              if (c4) {
                c4 = 4;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj7.beginReverifyPhone(combined, closure_1_2);
                return obj1;
              } else {
                c4 = 3;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj7.beginAddPhone(combined, closure_1_2);
                return obj2;
              }
            }
          } else if (1 === tmp8) {
            c3 = 0;
            callback2(false);
            throw closure_2;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              aPIError = new closure_1_0(closure_1_2[15]).APIError(closure_2);
              callback(aPIError.getAnyErrorMessage());
              c3 = 0;
              callback2(false);
              c5 = 3;
            } else {
              if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                callback2(false);
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              combined(combined);
              c3 = 1;
            }
            c3 = 0;
            callback2(false);
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
        } catch (tmp44) {
          closure_2 = tmp44;
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
    });
    closure_13 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  let obj = require(reason[12]);
  const items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = require(reason[12]);
  const items1 = [closure_9];
  let phone;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => action.getAction());
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let obj2 = onDeletePhone(tmp3[13]);
  const result = obj2.isPhoneReverification(stateFromStores, stateFromStores1);
  callback = result;
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
  const stateFromStores2 = require(reason[12]).useStateFromStores(items2, () => first1.getCountryCode());
  let str = stateFromStores2.code;
  const tmp2Result = require(reason[12]);
  [tmp13, tmp14] = callback(stateFromStores2.code.split(" "), 2);
  React = tmp14;
  let obj4 = React;
  let str2 = tmp13;
  if (tmp13 == null) {
    str2 = "";
  }
  let tmp11Result = tmp11(React.useState(str2), 2);
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
  closure_9 = tmp11Result[1];
  const tmp11Result1 = callback(obj4.useState(null), 2);
  closure_10 = tmp11Result1[1];
  closure_11 = obj4.useRef(true);
  const tmp11Result2 = callback(obj4.useState(false), 2);
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
      closure_9(str);
      const tmp2 = closure_9;
    }
  }, items3);
  obj = { style: items4, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  items4 = [tmp.background, reason.style];
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
    ({ input: obj8[0], redesignInput: obj8[1] } = tmp);
    if (null != phone) {
      if (!result) {
        const intl3 = tmp2(tmp3[17]).intl;
        let stringResult = intl3.string(tmp2(tmp3[17]).t.K6R0UP);
      }
      function handleSubmit() {
        const self = this;
        const apply = _handleSubmit.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      obj1[2] = stringResult;
      obj1[3] = stateFromStores2.alpha2;
      obj1[4] = tmp13;
      obj1[5] = first1;
      obj1[6] = function onChangeText(arg0, arg1) {
        action(arg0);
        callback2(arg1);
      };
      obj1[7] = tmp2(tmp3[19]).PhoneOrEmailSelectorForceMode.PHONE;
      obj1[9] = handleSubmit;
      obj1[10] = tmp11Result1[0];
      obj1[11] = function onPressCountrySelector() {
        return onDeletePhone(reason[20]).pushLazy(callback(reason[22])(reason[21], reason.paths));
      };
      items5[1] = tmp22(tmp28, obj1);
      obj2 = { style: null, children: null };
      obj2[0] = tmp.button;
      let str5 = "lg";
      if (tmp8) {
        str5 = "md";
      }
      let obj3 = { variant: "primary", size: null, text: null, onPress: null, loading: null };
      obj3[1] = str5;
      const intl5 = tmp2(tmp3[17]).intl;
      obj3[2] = intl5.string(tmp2(tmp3[17]).t.PDTjLN);
      obj3[3] = handleSubmit;
      obj3[4] = tmp11Result2[0];
      obj2[1] = tmp22(tmp2(tmp3[23]).Button, obj3);
      items5[2] = tmp22(tmp25, obj2);
      let tmp22Result = null;
      if (tmp8) {
        obj4 = { style: null, children: null };
        obj4[0] = tmp.button;
        const obj5 = { variant: "secondary", size: "md", text: null, onPress: null };
        const intl6 = tmp2(tmp3[17]).intl;
        obj5[2] = intl6.string(tmp2(tmp3[17]).t.kYvzoQ);
        obj5[3] = function onPress() {
          let obj = stateFromStores;
          if (null != stateFromStores) {
            if (obj.hasFlag(ref.MFA_SMS)) {
              obj = { importer: null };
              obj[0] = function importer() {
                return closure_1_0(closure_1_2[22])(closure_1_2[25], closure_1_2.paths).then((arg0) => {
                  closure_0 = arg0.default;
                  return (arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    let tmp4 = closure_1_1;
                    if (closure_1_1 == null) {
                      tmp4 = closure_2_12;
                    }
                    obj.onConfirm = tmp4;
                    return closure_2_13(closure_0, obj);
                  };
                });
              };
              onDeletePhone(reason[24]).openLazy(obj);
              const obj2 = onDeletePhone(reason[24]);
            } else if (onDeletePhone != null) {
              tmp2();
            }
          }
        };
        obj4[1] = tmp22(tmp2(tmp3[23]).Button, obj5);
        tmp22Result = tmp22(tmp25, obj4);
      }
      items5[3] = tmp22Result;
      obj[1] = items5;
      obj[3] = tmp24(tmp25, obj);
      return tmp22(tmp23, obj);
    }
    const intl4 = tmp2(tmp3[17]).intl;
    stringResult = intl4.string(tmp2(tmp3[17]).t["64bX0M"]);
  } else {
    const obj6 = {
      style: null,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    obj6[0] = tmp.title;
    if (null != phone) {
      if (!result) {
        const intl = tmp2(tmp3[17]).intl;
        let stringResult1 = intl.string(tmp2(tmp3[17]).t.WO0zBE);
      }
      obj6[4] = stringResult1;
      tmp22Result = tmp22(tmp31, obj6);
    }
    const intl2 = tmp2(tmp3[17]).intl;
    stringResult1 = intl2.string(tmp2(tmp3[17]).t.hY8QTR);
  }
}
