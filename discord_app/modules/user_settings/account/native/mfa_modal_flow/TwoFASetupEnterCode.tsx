// === Module 14888: TwoFASetupEnterCode ===

// Module 14888 (TwoFASetupEnterCode)
import MFAUtils from "MFAUtils" /* 7056 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14777 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1896 */;

const require = globalThis.__r;

require = fn;
const TwoFAModalSetupSections = fn(14882).TwoFAModalSetupSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
let closure_9 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupEnterCode.tsx");

export default function TwoFASetupEnterCode(current) {
  _require = current;
  const tmp = closure_9();
  const twoFASetupStyles = require("TwoFASetupStyles").useTwoFASetupStyles();
  importDefault = ref.useRef(current);
  const effect = ref.useEffect(() => {
    closure_1.current = current;
  });
  let obj = require("TwoFASetupStyles");
  navigation = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const items = [ref1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ref1.getState());
  const tmp6 = _slicedToArray(ref.useState(false), 2);
  _slicedToArray = tmp6[1];
  ref = ref.useRef(null);
  ref1 = ref.useRef(null);
  const items1 = [navigation];
  const callback = ref.useCallback((code) => {
    closure_3(true);
    const encodeTotpSecretResult = MFAUtils.encodeTotpSecret(ref.current.totpSecret);
    const obj3 = { code, secret: encodeTotpSecretResult };
    const enableResult = MFAActionCreatorsDefault.enable({ code, secret: encodeTotpSecretResult });
    MFAActionCreatorsDefault.enable({ code, secret: encodeTotpSecretResult }).then(() => {
      navigation.push(constants.SUCCESS);
    }).catch((error) => {
      if (null != error.body) {
        let message = error.body.message;
      } else {
        const intl = closure_0(navigation[11]).intl;
        message = intl.string(closure_0(navigation[11]).t["1u5B+G"]);
      }
      closure_1_4.current = message;
      current = ref.current;
      if (current != null) {
        current.clear();
      }
      closure_1_3(false);
    });
  }, items1);
  const obj4 = { children: null };
  const obj5 = { bottom: true, style: tmp.container, children: null };
  const obj6 = { style: null, children: null };
  const items2 = [, ];
  ({ modalHeader: arr3[0], text: arr3[1] } = twoFASetupStyles);
  obj6.style = items2;
  let intl = require("util").intl;
  obj6.children = intl.string(require("util").t.HZPBOd);
  const items3 = [closure_7(require("native").LegacyText, obj6), ];
  const obj7 = { style: { maxHeight: 520 }, ref: ref1, showActivityIndicator: tmp6[0], handleSubmit: callback, error: null, appState: null };
  let obj3 = require("initialize");
  obj7.error = require("useRefValue")(ref);
  obj7.appState = stateFromStores;
  items3[1] = closure_7(require("MFACodeInput"), obj7);
  obj5.children = items3;
  obj4.children = closure_8(require("common/SafeAreaView").SafeAreaPaddingView, obj5);
  return closure_7(require("TwoFASetupModal").TwoFASetupModalScreen, obj4);
};