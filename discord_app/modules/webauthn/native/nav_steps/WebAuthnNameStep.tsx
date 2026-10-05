// discord_app/modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useSettingNavigationRoute from "../../../user_settings/core/native/useSettingNavigationRoute.tsx";
import Form2 from "../../../../design/void/Form/native/index.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c4, dependencyMap;

let c9;
let metroImportAll;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ margin: { margin: 16 } });
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx");

export default function WebAuthnNameStep() {
  let Button;
  let closure_2;
  let closure_3;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let name;
  let obj6;
  let tmp12;
  let tmp9;
  let obj = function _onPress() {
    obj = _asyncToGenerator(async () => {
      let body;
      let closure_0;
      let intl;
      let obj3;
      let v2;
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c3 = 2;
              closure_2_3(true);
              v2 = 3;
              c4 = 1;
              const obj5 = {
                value: obj3.finishRegisterWebAuthnCredential(first1, require, importDefault),
                done: false,
              };
              obj3 = tmp(body[9]);
              return obj5;
            }
          } else if (1 === v2) {
            c3 = 0;
            closure_128_3(false);
            throw body;
          } else if (2 === v2) {
            closure_128_4(body.body.message);
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
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_3(false);
            const obj7 = {
              key: "WEBAUTHN_CREDENTIAL_REGISTER_SUCCESS_TOAST_KEY",
              content: intl.string(tmp(body[11]).t.j3d5qI),
              icon: v2(body[12]),
              IconComponent: tmp(body[13]).CircleCheckIcon,
              iconColor: "status-success",
            };
            const open = v2(body[10]).open;
            const tmp40 = v2(body[10]);
            intl = tmp(body[11]).intl;
            open(obj7);
            const replaced = closure_128_2.replace(constants.WEBAUTHN_SUCCESS);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          body = tmp28;
          if (0 === c3) {
            c4 = 3;
            throw tmp28;
          } else if (1 === tmp30) {
            v2 = 1;
          } else {
            v2 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = useSettingNavigationRoute;
  ({ ticket: require, credential: importDefault, name } = obj.useSettingNavigationRoute().params);
  const tmp3 = closure_10();
  let obj2 = useNavigation;
  dependencyMap = obj2.useNavigation();
  [first, closure_3] = first1.useState(false);
  const tmp8 = _slicedToArray(first1.useState(null), 2);
  [tmp9, _slicedToArray] = tmp8;
  const useState = first1.useState;
  if (name == null) {
    name = "";
  }
  [first1, tmp12] = useState(name);
  let obj3 = { children: items };
  const Form = Form2.Form;
  let obj4 = {
    showTopContainer: false,
    value: first1,
    onChange: tmp12,
    style: tmp3.margin,
    error: tmp9,
    title: intl.string(intl4.t["Jzd+z/"]),
    placeholder: intl2.string(intl4.t["I/sJtJ"]),
    disabled: first,
    clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT,
    autoFocus: true,
    showBorder: true,
    required: true,
    large: true,
  };
  const FormInput = Form2.FormInput;
  intl = intl4.intl;
  intl2 = intl4.intl;
  items = [closure_8(FormInput, obj4), closure_8(Form2.FormDivider, {})];
  let obj5 = { style: tmp3.margin, children: closure_8(Button, obj6) };
  obj6 = {
    onPress() {
      return obj(...arguments);
    },
    text: intl3.string(intl4.t["5dyZ1S"]),
    disabled: "" === first1,
    size: "lg",
  };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = closure_8(obj, obj5);
  return closure_9(Form, obj3);
}
