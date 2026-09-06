// === Module 14789: TwoFASetupEnterCode ===

// Module 14789 (TwoFASetupEnterCode)
import MFAUtils from "MFAUtils" /* 6951 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14680 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1895 */;

require = fn;
const TwoFAModalSetupSections = fn(14783).TwoFAModalSetupSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupEnterCode.tsx");

export default function TwoFASetupEnterCode(set) {
  _require = set;
  let obj = require("TwoFASetupStyles");
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  importDefault = ref.useRef(set);
  const effect = ref.useEffect(() => {
    closure_1.current = current;
  });
  let obj1 = require("useNavigation");
  navigation = obj1.useNavigation();
  let obj2 = require("initialize");
  const items = [ref1];
  const stateFromStores = obj2.useStateFromStores(items, () => ref1.getState());
  const tmp6 = _slicedToArray(ref.useState(false), 2);
  _slicedToArray = tmp6[1];
  ref = ref.useRef(null);
  ref1 = ref.useRef(null);
  const items1 = [navigation];
  const callback = ref.useCallback((code) => {
    let obj = MFAUtils;
    closure_3(true);
    const encodeTotpSecretResult = obj.encodeTotpSecret(ref.current.totpSecret);
    obj = { code, secret: encodeTotpSecretResult };
    const enableResult = MFAActionCreatorsDefault.enable(obj);
    MFAActionCreatorsDefault.enable(obj).then(() => {
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
  obj = { children: null };
  obj = { bottom: true, style: closure_9().container, children: null };
  obj1 = { style: null, children: null };
  const items2 = [, ];
  ({ modalHeader: arr3[0], text: arr3[1] } = twoFASetupStyles);
  obj1.style = items2;
  let intl = require("util").intl;
  obj1.children = intl.string(require("util").t.HZPBOd);
  const items3 = [closure_7(require("native").LegacyText, obj1), ];
  obj2 = { style: { maxHeight: 520 }, ref: ref1, showActivityIndicator: tmp6[0], handleSubmit: callback, error: null, appState: null };
  const tmp = closure_9();
  obj2.error = require("useRefValue")(ref);
  obj2.appState = stateFromStores;
  items3[1] = closure_7(require("MFACodeInput"), obj2);
  obj.children = items3;
  obj.children = closure_8(require("common/SafeAreaView").SafeAreaPaddingView, obj);
  return closure_7(require("TwoFASetupModal").TwoFASetupModalScreen, obj);
};