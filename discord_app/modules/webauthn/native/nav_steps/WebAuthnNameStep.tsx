// discord_app/modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { WebAuthnScreens } from "WebAuthnScreens";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ margin: { margin: 16 } });
const result = require("noop").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx");

export default function WebAuthnNameStep(arg0) {
  let c4;
  let importDefault;
  let name;
  let require;
  let tmp8;
  ({ ticket: require, credential: importDefault, name } = arg0);
  let dependencyMap;
  let closure_3;
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
          return { value: "HermesInternal", done: null };
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
              let closure_0 = tmp4;
              let v02 = 2;
              v02(true);
              let obj2 = outer1_0(outer1_2[8]);
              v0 = 3;
              v03 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.finishRegisterWebAuthnCredential(outer1_5, outer1_0, v0);
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
            const intl = outer1_0(outer1_2[10]).intl;
            obj3[1] = intl.string(outer1_0(outer1_2[10]).t.j3d5qI);
            obj3[2] = v0(outer1_2[11]);
            obj3[3] = outer1_0(outer1_2[12]).CircleCheckIcon;
            v0(outer1_2[9]).open(obj3);
            arr = arr.push(outer1_7.SUCCESS, {});
            v03 = 3;
            return { value: "HermesInternal", done: null };
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
    const _onPress = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  let obj = require(1480) /* useNavigation */;
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
  obj[5] = intl.string(require(1236) /* getSystemLocale */.t["Jzd+z/"]);
  const intl2 = tmp2(1236).intl;
  obj[6] = intl2.string(require(1236) /* getSystemLocale */.t["I/sJtJ"]);
  obj[7] = tmp6[0];
  obj[8] = require(1297) /* Button */.ClearButtonVisibility.WITH_CONTENT;
  const items = [callback2(require(7639) /* Form */.FormInput, obj), callback2(require(7639) /* Form */.FormDivider, {}), ];
  let obj1 = { style: tmp.margin, children: null };
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
  obj2[1] = intl3.string(require(1236) /* getSystemLocale */.t["5dyZ1S"]);
  obj2[2] = "" === first;
  obj1[1] = callback2(require(4604) /* Button */.Button, obj2);
  items[2] = callback2(_onPress, obj1);
  obj[0] = items;
  return callback3(require(7639) /* Form */.Form, obj);
};