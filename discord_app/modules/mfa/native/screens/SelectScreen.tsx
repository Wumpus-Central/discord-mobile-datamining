// === Module 15122: SelectScreen ===

// Module 15122 (SelectScreen)
import noopAll from "noop" /* 19 */;
import NAV_BAR_HEIGHT2 from "NAV_BAR_HEIGHT" /* 6370 */;
import useWideAuthViewDefault from "useWideAuthView" /* 8582 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { SELECT_NAMES } from "get webauthn" /* 15119 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles((arg0) => {
  const obj = { container: { marginLeft: 16, marginRight: 16 }, selectContainer: null };
  const NAV_BAR_HEIGHT = NAV_BAR_HEIGHT2.NAV_BAR_HEIGHT;
  if (arg0) {
    let diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - NAV_BAR_HEIGHT2.STATUS_BAR_HEIGHT;
  }
  obj[1] = { marginTop: diff, marginLeft: 16, marginRight: 16, display: "flex", alignItems: "center" };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/mfa/native/screens/SelectScreen.tsx");

export default function SelectScreen(mfaChallenge) {
  const _require = mfaChallenge;
  const tmp = useWideAuthViewDefault();
  const tmp2 = callback3(tmp);
  let obj = _require(1500);
  importDefault = obj.useNavigation();
  obj = { top: !tmp, style: tmp2.container, children: null };
  obj = { style: tmp2.selectContainer, children: null };
  obj1 = { variant: "heading-xl/extrabold", children: null };
  const intl = _require(1236).intl;
  obj1[1] = intl.string(_require(1236).t.S9b9bX);
  const items = [callback(_require(4734).Text, obj1), ];
  const obj2 = { variant: "text-sm/medium", children: null };
  const intl2 = _require(1236).intl;
  obj2[1] = intl2.string(_require(1236).t.Jz1lXO);
  items[1] = callback(_require(4734).Text, obj2);
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const methods = mfaChallenge.mfaChallenge.methods;
  items1[1] = callback(View, {
    style: { marginTop: 16, gap: 8 },
    children: methods.map((type) => {
      closure_1 = type;
      closure_2 = closure_1;
      return closure_1_5(mfaChallenge(closure_1_2[6]).RowButton, {
        label: closure_1_4[type.type],
        onPress() {

        }
      }, type.type);
    })
  });
  obj[2] = items1;
  return callback2(_require(6803).SafeAreaPaddingView, obj);
};