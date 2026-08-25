// === Module 14192: EditCredentialModal ===

// Module 14192 (EditCredentialModal)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { inputField: null, form: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default function EditCredentialModal(credential) {
  credential = credential.credential;
  let navigation;
  dependencyMap = undefined;
  let first;
  let React;
  const tmp = callback2();
  let obj = credential(1500);
  navigation = obj.useNavigation();
  [tmp6, c2] = first(React.useState(false), 2);
  const tmp7 = first(React.useState(""), 2);
  first = tmp7[0];
  const tmp9 = first(React.useState(null), 2);
  React = tmp9[1];
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerLeft: credential(_undefined[6]).getHeaderBackButton(() => {

      })
    };
    navigation.setOptions(obj);
  }, items);
  obj = { style: tmp.form, children: null };
  obj = { showTopContainer: false, value: first, onChange: tmp7[1], style: tmp.inputField, error: tmp9[0], title: null, placeholder: null, disabled: null, clearButtonVisibility: null, autoFocus: true, showBorder: true, required: true, large: true };
  let intl = credential(1236).intl;
  obj[5] = intl.string(credential(1236).t["Jzd+z/"]);
  obj[6] = credential.name;
  obj[7] = tmp6;
  obj[8] = credential(1297).ClearButtonVisibility.WITH_CONTENT;
  const items1 = [callback(credential(8118).FormInput, obj), callback(credential(8118).FormDivider, {}), ];
  obj1 = {
    onPress() {
      _undefined(true);
      callback(null);
      const result = credential(_undefined[11]).editWebAuthnCredential(credential.id, first);
      let obj = credential(_undefined[11]);
      const nextPromise = result.then(() => {
        let obj = closure_1_1(closure_1_2[12]);
        obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
        const intl = closure_1_0(closure_1_2[8]).intl;
        obj[1] = intl.string(closure_1_0(closure_1_2[8]).t.IV13mH);
        obj[2] = closure_1_1(closure_1_2[13]);
        obj[3] = closure_1_0(closure_1_2[14]).CircleCheckIcon;
        obj.open(obj);
        closure_1.popToTop();
      });
      result.then(() => {
        let obj = closure_1_1(closure_1_2[12]);
        obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
        const intl = closure_1_0(closure_1_2[8]).intl;
        obj[1] = intl.string(closure_1_0(closure_1_2[8]).t.IV13mH);
        obj[2] = closure_1_1(closure_1_2[13]);
        obj[3] = closure_1_0(closure_1_2[14]).CircleCheckIcon;
        obj.open(obj);
        closure_1.popToTop();
      }).catch((body) => {
        callback2(body.body.message);
      }).finally(() => {
        callback(false);
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
    tmp13 = "" === first;
  }
  obj1[1] = tmp13;
  obj1[2] = tmp6;
  const intl2 = tmp2(1236).intl;
  obj1[4] = intl2.string(credential(1236).t["7asiR3"]);
  items1[2] = callback(credential(4815).Button, obj1);
  obj[1] = items1;
  return closure_6(credential(8118).Form, obj);
};