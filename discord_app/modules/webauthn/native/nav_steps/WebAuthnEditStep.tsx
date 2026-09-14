// discord_app/modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import WebAuthnActionCreators from "../../WebAuthnActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = { inputField: { marginBottom: nativeDefault.space.PX_16 }, form: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.form = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default function EditCredentialModal(credential) {
  credential = credential.credential;
  dependencyMap = undefined;
  value = undefined;
  noop = undefined;
  const tmp = closure_7();
  const navigation = credential(1483).useNavigation();
  let obj = credential(1483);
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
      }),
    };
    navigation.setOptions(obj);
  }, items);
  let obj2 = { style: tmp.form, children: null };
  const obj3 = {
    showTopContainer: false,
    value,
    onChange: tmp7[1],
    style: tmp.inputField,
    error: tmp9[0],
    title: null,
    placeholder: null,
    disabled: null,
    clearButtonVisibility: null,
    autoFocus: true,
    showBorder: true,
    required: true,
    large: true,
  };
  let intl = credential(1114).intl;
  obj3.title = intl.string(credential(1114).t["Jzd+z/"]);
  obj3.placeholder = credential.name;
  obj3.disabled = tmp6;
  obj3.clearButtonVisibility = credential(1176).ClearButtonVisibility.WITH_CONTENT;
  const items1 = [closure_5(credential(8716).FormInput, obj3), closure_5(credential(8716).FormDivider, {})];
  const obj4 = {
    onPress() {
      _undefined(true);
      closure_4(null);
      const result = WebAuthnActionCreators.editWebAuthnCredential(credential.id, first);
      const nextPromise = result.then(() => {
        const obj2 = {
          key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY",
          content: null,
          icon: null,
          IconComponent: null,
          iconColor: "status-positive",
        };
        const intl = credential(1114).intl;
        obj2.content = intl.string(credential(1114).t.IV13mH);
        obj2.icon = navigation(10781);
        obj2.IconComponent = credential(4596).CircleCheckIcon;
        navigation(4335).open(obj2);
        closure_1_1.popToTop();
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
          const intl = credential(1114).intl;
          obj2.content = intl.string(credential(1114).t.IV13mH);
          obj2.icon = navigation(10781);
          obj2.IconComponent = credential(4596).CircleCheckIcon;
          navigation(4335).open(obj2);
          closure_1_1.popToTop();
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
  let tmp13 = tmp6;
  if (!tmp6) {
    tmp13 = "" === value;
  }
  obj4.disabled = tmp13;
  obj4.loading = tmp6;
  const intl2 = tmp2(1114).intl;
  obj4.text = intl2.string(credential(1114).t["7asiR3"]);
  items1[2] = closure_5(credential(5056).Button, obj4);
  obj2.children = items1;
  return closure_6(credential(8716).Form, obj2);
}
