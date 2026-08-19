// === Module 14094: EditCredentialModal ===

// Module 14094 (EditCredentialModal)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default function EditCredentialModal(credential) {
  credential = credential.credential;
  dependencyMap = undefined;
  let first;
  let React;
  const tmp = callback2();
  let obj = credential(1500);
  const navigation = obj.useNavigation();
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
  obj = { showTopContainer: false, value: first, onChange: tmp7[1], style: tmp.inputField, error: tmp9[0], title: null, placeholder: null, disabled: null, clearButtonVisibility: null, autoFocus: true, showBorder: true, required: true, large: true };
  let intl = credential(1236).intl;
  obj[5] = intl.string(credential(1236).t["Jzd+z/"]);
  obj[6] = credential.name;
  obj[7] = tmp6;
  obj[8] = credential(1297).ClearButtonVisibility.WITH_CONTENT;
  const items1 = [callback(credential(8083).FormInput, obj), callback(credential(8083).FormDivider, {}), ];
  obj1 = {
    onPress() {
      _undefined(true);
      callback(null);
      const result = credential(_undefined[11]).editWebAuthnCredential(credential.id, first);
      let obj = credential(_undefined[11]);
      const nextPromise = result.then((result) => {
        navigation(closure_1_2[12]);
        const obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
        const intl = credential(closure_1_2[8]).intl;
        obj[1] = intl.string(credential(closure_1_2[8]).t.IV13mH);
        obj[2] = navigation(closure_1_2[13]);
        obj[3] = credential(closure_1_2[14]).CircleCheckIcon;
        obj.open(obj);
        closure_1.popToTop();
      });
      result.then((result) => {
        navigation(closure_1_2[12]);
        const obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
        const intl = credential(closure_1_2[8]).intl;
        obj[1] = intl.string(credential(closure_1_2[8]).t.IV13mH);
        obj[2] = navigation(closure_1_2[13]);
        obj[3] = credential(closure_1_2[14]).CircleCheckIcon;
        obj.open(obj);
        closure_1.popToTop();
      }).catch((error) => {
        callback2(error.body.message);
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
  items1[2] = callback(credential(4745).Button, obj1);
  obj[1] = items1;
  return callback(credential(8083).Form, obj);
};