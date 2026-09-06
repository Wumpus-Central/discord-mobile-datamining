// === Module 14673: WebAuthnEditStep ===

// Module 14673 (WebAuthnEditStep)
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6597 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { inputField: null, form: null };
createStyles = { marginBottom: nativeDefault.space.PX_16 };
createStyles.inputField = createStyles;
createStyles.form = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default function EditCredentialModal(credential) {
  credential = credential.credential;
  dependencyMap = undefined;
  value = undefined;
  noop = undefined;
  const tmp = closure_7();
  let obj = credential(1483);
  const navigation = obj.useNavigation();
  [tmp6, c2] = value(noop.useState(false), 2);
  const tmp7 = value(noop.useState(""), 2);
  value = tmp7[0];
  const tmp9 = value(noop.useState(null), 2);
  noop = tmp9[1];
  const items = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    const obj = {
      headerLeft: NavigatorHeader.getHeaderBackButton(() => {
        navigation.pop();
      })
    };
    navigation.setOptions(obj);
  }, items);
  obj = { style: tmp.form, children: null };
  obj = { showTopContainer: false, value, onChange: tmp7[1], style: tmp.inputField, error: tmp9[0], title: null, placeholder: null, disabled: null, clearButtonVisibility: null, autoFocus: true, showBorder: true, required: true, large: true };
  let intl = credential(1114).intl;
  obj.title = intl.string(credential(1114).t["Jzd+z/"]);
  obj.placeholder = credential.name;
  obj.disabled = tmp6;
  obj.clearButtonVisibility = credential(1178).ClearButtonVisibility.WITH_CONTENT;
  const items1 = [closure_5(credential(8593).FormInput, obj), closure_5(credential(8593).FormDivider, {}), ];
  const obj1 = {
    onPress() {
      _undefined(true);
      closure_4(null);
      const result = WebAuthnActionCreators.editWebAuthnCredential(credential.id, first);
      const nextPromise = result.then(() => {
        navigation(4259);
        const obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
        const intl = credential(1114).intl;
        obj.content = intl.string(credential(1114).t.IV13mH);
        obj.icon = navigation(10652);
        obj.IconComponent = credential(4520).CircleCheckIcon;
        obj.open(obj);
        closure_1_1.popToTop();
      });
      result.then(() => {
        navigation(4259);
        const obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
        const intl = credential(1114).intl;
        obj.content = intl.string(credential(1114).t.IV13mH);
        obj.icon = navigation(10652);
        obj.IconComponent = credential(4520).CircleCheckIcon;
        obj.open(obj);
        closure_1_1.popToTop();
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
  let tmp13 = tmp6;
  if (!tmp6) {
    tmp13 = "" === value;
  }
  obj1.disabled = tmp13;
  obj1.loading = tmp6;
  const intl2 = tmp2(1114).intl;
  obj1.text = intl2.string(credential(1114).t["7asiR3"]);
  items1[2] = closure_5(credential(4975).Button, obj1);
  obj.children = items1;
  return closure_6(credential(8593).Form, obj);
};