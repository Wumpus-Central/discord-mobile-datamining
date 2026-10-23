// === Module 16055: WebAuthnNameStep ===

// Module 16055 (WebAuthnNameStep)
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import useNavigation from "useNavigation" /* 1505 */;
import components_Button_Button from "components/Button/Button" /* 5242 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7088 */;
import Form from "Form" /* 8949 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1087).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4969);
let closure_10 = createStyles.createStyles({ margin: { margin: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx");

export default function WebAuthnNameStep() {
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
        return { value: "IconComponent", done: null };
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
            const obj5 = { value: tmp4(tmp32[9]).finishRegisterWebAuthnCredential(noop, require, importDefault), done: false };
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
          const obj8 = { text: null, variant: "success" };
          const intl = tmp4(tmp32[11]).intl;
          obj8.text = intl.string(tmp4(tmp32[11]).t.j3d5qI);
          v3(tmp32[10]).open("WEBAUTHN_CREDENTIAL_REGISTER_SUCCESS_TOAST_KEY", obj8);
          const replaced = closure_128_2.replace(constants.WEBAUTHN_SUCCESS);
          c4 = 3;
          return { value: "IconComponent", done: null };
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
  ({ ticket: require, credential: importDefault, name } = useSettingNavigationRoute.useSettingNavigationRoute().params);
  const tmp3 = closure_10();
  dependencyMap = useNavigation.useNavigation();
  [obj4.disabled, closure_3] = value.useState(false);
  [tmp8, _slicedToArray] = _slicedToArray(value.useState(null), 2);
  if (name == null) {
    name = "";
  }
  const tmp5Result = _slicedToArray(value.useState(name), 2);
  value = tmp5Result[0];
  const obj3 = { children: null };
  let obj4 = { showTopContainer: false, value, onChange: tmp5Result[1], style: tmp3.margin, error: tmp8, title: null, placeholder: null, disabled: null, clearButtonVisibility: null, autoFocus: true, showBorder: true, required: true, large: true };
  let intl = util.intl;
  obj4.title = intl.string(util.t["Jzd+z/"]);
  const intl2 = util.intl;
  obj4.placeholder = intl2.string(util.t["I/sJtJ"]);
  obj4.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  const items = [closure_8(Form.FormInput, obj4), closure_8(Form.FormDivider, {}), ];
  let obj5 = { style: tmp3.margin, children: null };
  let obj6 = {
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
    size: "lg"
  };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["5dyZ1S"]);
  obj6.disabled = "" === value;
  obj5.children = closure_8(components_Button_Button.Button, obj6);
  items[2] = closure_8(closure_6, obj5);
  obj3.children = items;
  return closure_9(Form.Form, obj3);
};