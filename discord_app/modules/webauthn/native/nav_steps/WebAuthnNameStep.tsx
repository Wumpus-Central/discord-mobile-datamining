// === Module 14196: WebAuthnNameStep ===

// Module 14196 (WebAuthnNameStep)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import useNavigation from "useNavigation" /* 1500 */;
import Button2 from "Button" /* 4815 */;
import Form from "Form" /* 8118 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14176 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ margin: { margin: 16 } });
const result = require("set").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx");

export default function WebAuthnNameStep(arg0) {
  ({ ticket: require, credential: importDefault, name } = arg0);
  dependencyMap = undefined;
  closure_3 = undefined;
  let callback;
  let first;
  function _onPress() {
    const self = this;
    const tmp = callback(function*() {
      if (v03 === 2) {
        v03 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v03 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              v03 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v03 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp4;
              let v02 = 2;
              v02(true);
              let obj2 = closure_1_0(closure_1_2[8]);
              v0 = 3;
              v03 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.finishRegisterWebAuthnCredential(closure_1_5, closure_1_0, v0);
              return obj1;
            }
          } else if (1 === tmp8) {
            v02 = 0;
            v02(false);
            throw arr;
          } else if (2 === tmp8) {
            v02 = 1;
            v03(arr.body.message);
            v02 = 0;
            v02(false);
            v03 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = undefined;
            return obj2;
          } else if (arg0 === 1) {
            v03 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 0;
            v02(false);
            v03 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v02 = 0;
            v02(false);
            const obj3 = { key: "WEBAUTHN_CREDENTIAL_REGISTER_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-success" };
            const intl = closure_1_0(closure_1_2[10]).intl;
            obj3[1] = intl.string(closure_1_0(closure_1_2[10]).t.j3d5qI);
            obj3[2] = v0(closure_1_2[11]);
            obj3[3] = closure_1_0(closure_1_2[12]).CircleCheckIcon;
            v0(closure_1_2[9]).open(obj3);
            arr = arr.push(closure_1_7.SUCCESS, {});
            v03 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp32) {
          arr = tmp32;
          if (tmp5 === v02) {
            v03 = tmp3;
            throw tmp32;
          } else if (tmp2 === tmp34) {
            v0 = tmp2;
          } else {
            v0 = tmp;
          }
        }
      }
    });
    closure_6 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  const tmp6 = callback(first.useState(false), 2);
  closure_3 = tmp6[1];
  [tmp8, c4] = callback(first.useState(null), 2);
  if (name == null) {
    name = "";
  }
  const tmp5Result = callback(first.useState(name), 2);
  first = tmp5Result[0];
  obj = { children: null };
  obj = { showTopContainer: false, value: first, onChange: tmp5Result[1], style: tmp.margin, error: tmp8, title: null, placeholder: null, disabled: null, clearButtonVisibility: null, autoFocus: true, showBorder: true, required: true, large: true };
  let intl = tmp2(1236).intl;
  obj[5] = intl.string(getSystemLocale.t["Jzd+z/"]);
  const intl2 = tmp2(1236).intl;
  obj[6] = intl2.string(getSystemLocale.t["I/sJtJ"]);
  obj[7] = tmp6[0];
  obj[8] = Button.ClearButtonVisibility.WITH_CONTENT;
  const items = [callback2(Form.FormInput, obj), callback2(Form.FormDivider, {}), ];
  obj1 = { style: tmp.margin, children: null };
  let obj2 = {
    onPress() {
      const self = this;
      const apply = _onPress.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    text: null,
    disabled: null,
    size: "lg"
  };
  const intl3 = tmp2(1236).intl;
  obj2[1] = intl3.string(getSystemLocale.t["5dyZ1S"]);
  obj2[2] = "" === first;
  obj1[1] = callback2(Button2.Button, obj2);
  items[2] = callback2(_onPress, obj1);
  obj[0] = items;
  return callback3(Form.Form, obj);
};