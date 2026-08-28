// === Module 14328: TwoFASetupEnterCode ===

// Module 14328 (TwoFASetupEnterCode)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "getState" /* 7104 */;
import { TwoFAModalSetupSections } from "frozen" /* 14322 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupEnterCode.tsx");

export default function TwoFASetupEnterCode(stateFromStores) {
  const _require = stateFromStores;
  let obj = _require(navigation[6]);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  importDefault = ref.useRef(stateFromStores);
  const effect = ref.useEffect(() => {
    closure_1.current = closure_0;
  });
  obj1 = _require(navigation[7]);
  navigation = obj1.useNavigation();
  let obj2 = _require(navigation[8]);
  const items = [ref1];
  stateFromStores = obj2.useStateFromStores(items, () => ref1.getState());
  const tmp6 = callback(ref.useState(false), 2);
  callback = tmp6[1];
  ref = ref.useRef(null);
  ref1 = ref.useRef(null);
  const items1 = [navigation];
  callback = ref.useCallback((code) => {
    let obj = stateFromStores(navigation[9]);
    callback(true);
    const encodeTotpSecretResult = obj.encodeTotpSecret(ref.current.totpSecret);
    obj = { code, secret: encodeTotpSecretResult };
    const obj2 = ref(navigation[10]);
    const enableResult = ref(navigation[10]).enable(obj);
    ref(navigation[10]).enable(obj).then(() => {

    }).catch((body) => {
      if (null != body.body) {
        let message = body.body.message;
      } else {
        const intl = closure_1_0(closure_1_2[11]).intl;
        message = intl.string(closure_1_0(closure_1_2[11]).t["1u5B+G"]);
      }
      closure_4.current = message;
      const current = ref.current;
      if (current != null) {
        current.clear();
      }
      callback(false);
    });
  }, items1);
  obj = { children: null };
  obj = { bottom: true, style: callback4().container, children: null };
  obj1 = { style: items2, children: null };
  items2 = [, ];
  ({ modalHeader: arr3[0], text: arr3[1] } = twoFASetupStyles);
  let intl = _require(navigation[11]).intl;
  obj1[1] = intl.string(_require(navigation[11]).t.HZPBOd);
  const items3 = [callback2(_require(navigation[14]).LegacyText, obj1), ];
  obj2 = { style: { maxHeight: 520 }, ref: ref1, showActivityIndicator: tmp6[0], handleSubmit: callback, error: null, appState: null };
  const tmp = callback4();
  obj2[4] = importDefault(navigation[16])(ref);
  obj2[5] = stateFromStores;
  items3[1] = callback2(importDefault(navigation[15]), obj2);
  obj[2] = items3;
  obj[0] = callback3(_require(navigation[13]).SafeAreaPaddingView, obj);
  return callback2(_require(navigation[12]).TwoFASetupModalScreen, obj);
};