// discord_app/modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import WebAuthnActionCreators from "../../WebAuthnActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { inputField: { marginBottom: nativeDefault.space.PX_16 }, form: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.form = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function WebAuthnEditStep() {
      const cResult = credential(576).c(21);
      let obj = credential(576);
      credential = credential(6681).useSettingNavigationRoute().params.credential;
      const tmp4 = closure_8();
      let obj2 = credential(6681);
      const navigation = credential(1503).useNavigation();
      const obj3 = credential(1503);
      [tmp7, dependencyMap] = value(noop.useState(false), 2);
      const tmp8 = value(noop.useState(""), 2);
      value = tmp8[0];
      const tmp6 = value(noop.useState(false), 2);
      [tmp11, noop] = value(noop.useState(null), 2);
      if (cResult[0] === credential.id) {
        if (cResult[1] === navigation) {
          if (cResult[2] === value) {
            let tmp12 = cResult[3];
          }
          const _Symbol = Symbol;
          ({ form, inputField } = tmp4);
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t["Jzd+z/"]);
            cResult[4] = stringResult;
            let tmp14 = stringResult;
          } else {
            tmp14 = cResult[4];
          }
          if (cResult[5] === credential.name) {
            if (cResult[6] === tmp11) {
              if (cResult[7] === tmp7) {
                if (cResult[8] === value) {
                  if (cResult[9] === tmp4.inputField) {
                    let tmp16 = cResult[10];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp21 = closure_6(tmp(8563).FormDivider, {});
                    cResult[11] = tmp21;
                    let tmp19 = tmp21;
                  } else {
                    tmp19 = cResult[11];
                  }
                  let tmp22 = tmp7;
                  if (!tmp7) {
                    tmp22 = "" === value;
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(1126).intl;
                    const stringResult1 = intl2.string(tmp(1126).t["7asiR3"]);
                    cResult[12] = stringResult1;
                    let tmp23 = stringResult1;
                  } else {
                    tmp23 = cResult[12];
                  }
                  if (cResult[13] === tmp7) {
                    if (cResult[14] === tmp12) {
                      if (cResult[15] === tmp22) {
                        let tmp25 = cResult[16];
                      }
                      if (cResult[17] === tmp4.form) {
                        if (cResult[18] === tmp16) {
                          if (cResult[19] === tmp25) {
                            let tmp28 = cResult[20];
                          }
                          return tmp28;
                        }
                      }
                      const obj4 = { style: form, children: null };
                      const items = [tmp16, tmp19, tmp25];
                      obj4.children = items;
                      const tmp30 = closure_7(tmp(8563).Form, obj4);
                      cResult[17] = tmp4.form;
                      cResult[18] = tmp16;
                      cResult[19] = tmp25;
                      cResult[20] = tmp30;
                      tmp28 = tmp30;
                    }
                  }
                  const obj5 = { onPress: tmp12, disabled: tmp22, loading: tmp7, size: "lg", text: tmp23, grow: true };
                  const tmp27 = closure_6(tmp(5376).Button, obj5);
                  cResult[13] = tmp7;
                  cResult[14] = tmp12;
                  cResult[15] = tmp22;
                  cResult[16] = tmp27;
                  tmp25 = tmp27;
                }
              }
            }
          }
          const obj6 = {
            showTopContainer: false,
            value,
            onChange: tmp8[1],
            style: inputField,
            error: tmp11,
            title: tmp14,
            placeholder: credential.name,
            disabled: tmp7,
            clearButtonVisibility: tmp(1200).ClearButtonVisibility.WITH_CONTENT,
            autoFocus: true,
            showBorder: true,
            required: true,
            large: true,
          };
          const tmp18 = closure_6(tmp(8563).FormInput, obj6);
          cResult[5] = credential.name;
          cResult[6] = tmp11;
          cResult[7] = tmp7;
          cResult[8] = value;
          cResult[9] = tmp4.inputField;
          cResult[10] = tmp18;
          tmp16 = tmp18;
        }
      }
      function onPress() {
        dependencyMap(true);
        noop(null);
        const result = WebAuthnActionCreators.editWebAuthnCredential(credential.id, first);
        const nextPromise = result.then(() => {
          const obj2 = {
            key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY",
            content: null,
            icon: null,
            IconComponent: null,
            iconColor: "status-positive",
          };
          const intl = credential(1126).intl;
          obj2.content = intl.string(credential(1126).t.IV13mH);
          obj2.icon = navigation(10012);
          obj2.IconComponent = credential(4993).CircleCheckIcon;
          navigation(4768).open(obj2);
          closure_1_1.popTo(constants.WEBAUTHN_VIEW);
        });
        result
          .then(() => {
            const obj2 = {
              key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY",
              content: null,
              icon: null,
              IconComponent: null,
              iconColor: "status-positive",
            };
            const intl = credential(1126).intl;
            obj2.content = intl.string(credential(1126).t.IV13mH);
            obj2.icon = navigation(10012);
            obj2.IconComponent = credential(4993).CircleCheckIcon;
            navigation(4768).open(obj2);
            closure_1_1.popTo(constants.WEBAUTHN_VIEW);
          })
          .catch((error) => {
            closure_1_4(error.body.message);
          })
          .finally(() => {
            dependencyMap(false);
          });
      }
      cResult[0] = credential.id;
      cResult[1] = navigation;
      cResult[2] = value;
      cResult[3] = onPress;
      tmp12 = onPress;
      const tmp10 = value(noop.useState(null), 2);
    }
  : function WebAuthnEditStep() {
      credential = credential(6681).useSettingNavigationRoute().params.credential;
      const tmp3 = closure_8();
      let obj = credential(6681);
      closure_1 = credential(1503).useNavigation();
      let obj2 = credential(1503);
      [tmp5, dependencyMap] = value(noop.useState(false), 2);
      const tmp6 = value(noop.useState(""), 2);
      value = tmp6[0];
      const tmp4 = value(noop.useState(false), 2);
      [tmp9, noop] = value(noop.useState(null), 2);
      const obj3 = { style: tmp3.form, children: null };
      const obj4 = {
        showTopContainer: false,
        value,
        onChange: tmp6[1],
        style: tmp3.inputField,
        error: tmp9,
        title: null,
        placeholder: null,
        disabled: null,
        clearButtonVisibility: null,
        autoFocus: true,
        showBorder: true,
        required: true,
        large: true,
      };
      let intl = credential(1126).intl;
      obj4.title = intl.string(credential(1126).t["Jzd+z/"]);
      obj4.placeholder = credential.name;
      obj4.disabled = tmp5;
      obj4.clearButtonVisibility = credential(1200).ClearButtonVisibility.WITH_CONTENT;
      const items = [closure_6(credential(8563).FormInput, obj4), closure_6(credential(8563).FormDivider, {})];
      const obj5 = {
        onPress() {
          dependencyMap(true);
          noop(null);
          const result = WebAuthnActionCreators.editWebAuthnCredential(credential.id, first);
          const nextPromise = result.then(() => {
            const obj2 = {
              key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY",
              content: null,
              icon: null,
              IconComponent: null,
              iconColor: "status-positive",
            };
            const intl = credential(1126).intl;
            obj2.content = intl.string(credential(1126).t.IV13mH);
            obj2.icon = closure_1(10012);
            obj2.IconComponent = credential(4993).CircleCheckIcon;
            closure_1(4768).open(obj2);
            closure_1_1.popTo(constants.WEBAUTHN_VIEW);
          });
          result
            .then(() => {
              const obj2 = {
                key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY",
                content: null,
                icon: null,
                IconComponent: null,
                iconColor: "status-positive",
              };
              const intl = credential(1126).intl;
              obj2.content = intl.string(credential(1126).t.IV13mH);
              obj2.icon = closure_1(10012);
              obj2.IconComponent = credential(4993).CircleCheckIcon;
              closure_1(4768).open(obj2);
              closure_1_1.popTo(constants.WEBAUTHN_VIEW);
            })
            .catch((error) => {
              closure_1_4(error.body.message);
            })
            .finally(() => {
              dependencyMap(false);
            });
        },
        disabled: null,
        loading: null,
        size: "lg",
        text: null,
        grow: true,
      };
      let tmp12 = tmp5;
      if (!tmp5) {
        tmp12 = "" === value;
      }
      obj5.disabled = tmp12;
      obj5.loading = tmp5;
      const intl2 = tmp(1126).intl;
      obj5.text = intl2.string(credential(1126).t["7asiR3"]);
      items[2] = closure_6(credential(5376).Button, obj5);
      obj3.children = items;
      return closure_7(credential(8563).Form, obj3);
    };
