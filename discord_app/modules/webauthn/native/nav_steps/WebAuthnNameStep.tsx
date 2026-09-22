// discord_app/modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const WebAuthnScreens = fn(14940).WebAuthnScreens;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4757);
let closure_10 = createStyles.createStyles({ margin: { margin: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx");

export default function WebAuthnNameStep(arg0) {
  ({ ticket: require, credential: importDefault, name } = arg0);
  closure_3 = undefined;
  _slicedToArray = undefined;
  value = undefined;
  closure_6 = async function _onPress() {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 2;
            asyncGeneratorStep(true);
            v3 = 3;
            c4 = 1;
            const obj5 = {
              value: tmp4(tmp32[8]).finishRegisterWebAuthnCredential(noop, require, importDefault),
              done: false,
            };
            return obj5;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_3(false);
          throw tmp32;
        } else if (2 === tmp8) {
          c3 = 1;
          closure_128_4(tmp32.body.message);
          c3 = 0;
          closure_128_3(false);
          c4 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_3(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_3(false);
          const obj8 = {
            key: "WEBAUTHN_CREDENTIAL_REGISTER_SUCCESS_TOAST_KEY",
            content: null,
            icon: null,
            IconComponent: null,
            iconColor: "status-success",
          };
          const intl = tmp4(tmp32[10]).intl;
          obj8.content = intl.string(tmp4(tmp32[10]).t.j3d5qI);
          obj8.icon = v3(tmp32[11]);
          obj8.IconComponent = tmp4(tmp32[12]).CircleCheckIcon;
          v3(tmp32[9]).open(obj8);
          closure_128_2.push(constants.SUCCESS, {});
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp32) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp32;
        } else if (tmp2 === tmp34) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  };
  const tmp = closure_10();
  dependencyMap = useNavigation.useNavigation();
  [obj3.disabled, closure_3] = value.useState(false);
  const tmp5 = _slicedToArray;
  [tmp8, c4] = _slicedToArray(value.useState(null), 2);
  if (name == null) {
    name = "";
  }
  const tmp5Result = tmp5(value.useState(name), 2);
  value = tmp5Result[0];
  let obj2 = { children: null };
  const obj3 = {
    showTopContainer: false,
    value,
    onChange: tmp5Result[1],
    style: tmp.margin,
    error: tmp8,
    title: null,
    placeholder: null,
    disabled: null,
    clearButtonVisibility: null,
    autoFocus: true,
    showBorder: true,
    required: true,
    large: true,
  };
  let intl = util.intl;
  obj3.title = intl.string(util.t["Jzd+z/"]);
  const intl2 = util.intl;
  obj3.placeholder = intl2.string(util.t["I/sJtJ"]);
  obj3.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  const items = [closure_8(Form.FormInput, obj3), closure_8(Form.FormDivider, {})];
  let obj4 = { style: tmp.margin, children: null };
  let obj5 = {
    onPress() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    text: null,
    disabled: null,
    size: "lg",
  };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["5dyZ1S"]);
  obj5.disabled = "" === value;
  obj4.children = closure_8(components_Button_Button.Button, obj5);
  items[2] = closure_8(closure_6, obj4);
  obj2.children = items;
  return closure_9(Form.Form, obj2);
}
