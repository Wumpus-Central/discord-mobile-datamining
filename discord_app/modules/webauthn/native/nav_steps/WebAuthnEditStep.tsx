// === Module 16643: WebAuthnEditStep ===

// Module 16643 (WebAuthnEditStep)
import nativeDefault from "native" /* 575 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6742 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const UserSettingsSections = fn(1072).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { inputField: { marginBottom: nativeDefault.space.PX_16 }, form: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.form = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default function WebAuthnEditStep() {
  credential = credential(7158).useSettingNavigationRoute().params.credential;
  const tmp3 = closure_8();
  let obj = credential(7158);
  closure_1 = credential(1498).useNavigation();
  let obj2 = credential(1498);
  [tmp5, dependencyMap] = value(noop.useState(false), 2);
  const tmp6 = value(noop.useState(""), 2);
  value = tmp6[0];
  const tmp4 = value(noop.useState(false), 2);
  [tmp9, noop] = value(noop.useState(null), 2);
  const obj3 = { style: tmp3.form, children: null };
  const obj4 = { showTopContainer: false, value, onChange: tmp6[1], style: tmp3.inputField, error: tmp9, title: null, placeholder: null, disabled: null, clearButtonVisibility: null, autoFocus: true, showBorder: true, required: true, large: true };
  let intl = credential(1114).intl;
  obj4.title = intl.string(credential(1114).t["Jzd+z/"]);
  obj4.placeholder = credential.name;
  obj4.disabled = tmp5;
  obj4.clearButtonVisibility = credential(1188).ClearButtonVisibility.WITH_CONTENT;
  const items = [closure_6(credential(8169).FormInput, obj4), closure_6(credential(8169).FormDivider, {}), ];
  const obj5 = {
    onPress() {
      dependencyMap(true);
      noop(null);
      const result = WebAuthnActionCreators.editWebAuthnCredential(credential.id, first);
      const nextPromise = result.then(() => {
        const obj2 = { text: null, variant: "success" };
        const intl = credential(1114).intl;
        obj2.text = intl.string(credential(1114).t.IV13mH);
        closure_1(5707).open("WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", obj2);
        closure_1_1.popTo(constants.WEBAUTHN_VIEW);
      });
      result.then(() => {
        const obj2 = { text: null, variant: "success" };
        const intl = credential(1114).intl;
        obj2.text = intl.string(credential(1114).t.IV13mH);
        closure_1(5707).open("WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", obj2);
        closure_1_1.popTo(constants.WEBAUTHN_VIEW);
      }).catch((error) => {
        closure_1_4(error.body.message);
      }).finally(() => {
        dependencyMap(false);
      });
    },
    disabled: null,
    loading: null,
    size: "lg",
    text: null,
    grow: true
  };
  let tmp12 = tmp5;
  if (!tmp5) {
    tmp12 = "" === value;
  }
  obj5.disabled = tmp12;
  obj5.loading = tmp5;
  const intl2 = tmp(1114).intl;
  obj5.text = intl2.string(credential(1114).t["7asiR3"]);
  items[2] = closure_6(credential(5629).Button, obj5);
  obj3.children = items;
  return closure_7(credential(8169).Form, obj3);
};