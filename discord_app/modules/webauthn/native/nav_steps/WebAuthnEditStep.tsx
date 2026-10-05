// discord_app/modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import WebAuthnActionCreators from "../../WebAuthnActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let navigation;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { inputField: obj2, form: obj3 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let credential;
      let form;
      let inputField;
      let items;
      let tmp12;
      let tmp7;
      let value;
      let tmp = credential;
      let obj = credential(576);
      const cResult = obj.c(21);
      const obj2 = credential(6490);
      credential = obj2.useSettingNavigationRoute().params.credential;
      const tmp4 = closure_8();
      const obj3 = credential(1490);
      navigation = obj3.useNavigation();
      [tmp7, dependencyMap] = value(react.useState(false), 2);
      value(react.useState(false), 2);
      const tmp8 = value(react.useState(""), 2);
      value = tmp8[0];
      const tmp10 = tmp8[1];
      const tmp11 = value(react.useState(null), 2);
      [tmp12, react] = tmp11;
      if (cResult[0] === credential.id) {
        if (cResult[1] === navigation) {
          let tmp13;
          let tmp15;
          if (cResult[2] === value) {
            tmp13 = cResult[3];
          }
          const _Symbol = Symbol;
          ({ form, inputField } = tmp4);
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t["Jzd+z/"]);
            cResult[4] = stringResult;
            tmp15 = stringResult;
          } else {
            tmp15 = cResult[4];
          }
          if (cResult[5] === credential.name) {
            if (cResult[6] === tmp12) {
              if (cResult[7] === tmp7) {
                if (cResult[8] === value) {
                  let tmp17;
                  let tmp20;
                  let tmp24;
                  if (cResult[9] === tmp4.inputField) {
                    tmp17 = cResult[10];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp22 = closure_6(tmp(8895).FormDivider, {});
                    cResult[11] = tmp22;
                    tmp20 = tmp22;
                  } else {
                    tmp20 = cResult[11];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(1126).intl;
                    const stringResult1 = intl2.string(tmp(1126).t["7asiR3"]);
                    cResult[12] = stringResult1;
                    tmp24 = stringResult1;
                  } else {
                    tmp24 = cResult[12];
                  }
                  if (cResult[13] === tmp7) {
                    if (cResult[14] === tmp13) {
                      let tmp26;
                      if (cResult[15] === (tmp7 || "" === value)) {
                        tmp26 = cResult[16];
                      }
                      if (cResult[17] === tmp4.form) {
                        if (cResult[18] === tmp17) {
                          let tmp29;
                          if (cResult[19] === tmp26) {
                            tmp29 = cResult[20];
                          }
                          return tmp29;
                        }
                      }
                      const obj4 = { style: form, children: items };
                      items = [tmp17, tmp20, tmp26];
                      const tmp31 = closure_7(tmp(8895).Form, obj4);
                      cResult[17] = tmp4.form;
                      cResult[18] = tmp17;
                      cResult[19] = tmp26;
                      cResult[20] = tmp31;
                      tmp29 = tmp31;
                    }
                  }
                  const obj5 = {
                    onPress: tmp13,
                    disabled: tmp7 || "" === value,
                    loading: tmp7,
                    size: "lg",
                    text: tmp24,
                    grow: true,
                  };
                  const tmp28 = closure_6(tmp(5594).Button, obj5);
                  cResult[13] = tmp7;
                  cResult[14] = tmp13;
                  cResult[15] = tmp7 || "" === value;
                  cResult[16] = tmp28;
                  tmp26 = tmp28;
                }
              }
            }
          }
          const obj6 = {
            showTopContainer: false,
            value,
            onChange: tmp10,
            style: inputField,
            error: tmp12,
            title: tmp15,
            placeholder: credential.name,
            disabled: tmp7,
            clearButtonVisibility: tmp(1188).ClearButtonVisibility.WITH_CONTENT,
            autoFocus: true,
            showBorder: true,
            required: true,
            large: true,
          };
          const FormInput = tmp(8895).FormInput;
          const tmp19 = closure_6(FormInput, obj6);
          cResult[5] = credential.name;
          cResult[6] = tmp12;
          cResult[7] = tmp7;
          cResult[8] = value;
          cResult[9] = tmp4.inputField;
          cResult[10] = tmp19;
          tmp17 = tmp19;
        }
      }
      const fn = function l() {
        const tmp = dependencyMap(true);
        react(null);
        let obj = WebAuthnActionCreators;
        const result = obj.editWebAuthnCredential(credential.id, first);
        const nextPromise = result.then(() => {
          let intl;
          const obj = {
            key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY",
            content: intl.string(credential(dependencyMap[12]).t.IV13mH),
            icon: navigation(dependencyMap[13]),
            IconComponent: credential(dependencyMap[14]).CircleCheckIcon,
            iconColor: "status-positive",
          };
          const open = navigation(dependencyMap[11]).open;
          navigation(dependencyMap[11]);
          intl = credential(dependencyMap[12]).intl;
          open(obj);
          closure_1_1.popTo(constants.WEBAUTHN_VIEW);
        });
        const catchPromise = nextPromise.catch((error) => {
          closure_1_4(error.body.message);
        });
        catchPromise.finally(() => {
          closure_1_2(false);
        });
      };
      cResult[0] = credential.id;
      cResult[1] = navigation;
      cResult[2] = value;
      cResult[3] = fn;
      tmp13 = fn;
    }
  : () => {
      let credential;
      let intl;
      let intl2;
      let items;
      let tmp10;
      let tmp13;
      let tmp5;
      let value;
      let tmp = credential;
      let obj = credential(6490);
      credential = obj.useSettingNavigationRoute().params.credential;
      const tmp3 = closure_8();
      const obj2 = credential(1490);
      let closure_1 = obj2.useNavigation();
      [tmp5, dependencyMap] = value(react.useState(false), 2);
      value(react.useState(false), 2);
      const tmp6 = value(react.useState(""), 2);
      value = tmp6[0];
      const tmp8 = tmp6[1];
      const tmp9 = value(react.useState(null), 2);
      [tmp10, react] = tmp9;
      const obj3 = { style: tmp3.form, children: items };
      const Form = credential(8895).Form;
      const obj4 = {
        showTopContainer: false,
        value,
        onChange: tmp8,
        style: tmp3.inputField,
        error: tmp10,
        title: intl.string(credential(1126).t["Jzd+z/"]),
        placeholder: credential.name,
        disabled: tmp5,
        clearButtonVisibility: credential(1188).ClearButtonVisibility.WITH_CONTENT,
        autoFocus: true,
        showBorder: true,
        required: true,
        large: true,
      };
      const FormInput = credential(8895).FormInput;
      intl = credential(1126).intl;
      items = [closure_6(FormInput, obj4), closure_6(credential(8895).FormDivider, {})];
      const obj5 = {
        onPress() {
          const tmp = dependencyMap(true);
          react(null);
          let obj = WebAuthnActionCreators;
          const result = obj.editWebAuthnCredential(credential.id, first);
          const nextPromise = result.then(() => {
            let intl;
            const obj = {
              key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY",
              content: intl.string(credential(dependencyMap[12]).t.IV13mH),
              icon: closure_1(dependencyMap[13]),
              IconComponent: credential(dependencyMap[14]).CircleCheckIcon,
              iconColor: "status-positive",
            };
            const open = closure_1(dependencyMap[11]).open;
            closure_1(dependencyMap[11]);
            intl = credential(dependencyMap[12]).intl;
            open(obj);
            closure_1_1.popTo(constants.WEBAUTHN_VIEW);
          });
          const catchPromise = nextPromise.catch((error) => {
            closure_1_4(error.body.message);
          });
          catchPromise.finally(() => {
            closure_1_2(false);
          });
        },
        disabled: tmp13,
        loading: tmp5,
        size: "lg",
        text: intl2.string(tmp(1126).t["7asiR3"]),
        grow: true,
      };
      tmp13 = tmp5;
      const Button = credential(5594).Button;
      if (!tmp5) {
        tmp13 = "" === value;
      }
      intl2 = tmp(1126).intl;
      items[2] = closure_6(Button, obj5);
      return closure_7(Form, obj3);
    };
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default tmp4;
