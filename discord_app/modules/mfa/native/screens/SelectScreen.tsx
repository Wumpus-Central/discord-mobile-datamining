// discord_app/modules/mfa/native/screens/SelectScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import NAV_BAR_HEIGHT2 from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { SELECT_NAMES } from "../../MFAConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { SafeAreaPaddingView } from "../../../../components_native/common/SafeAreaView.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

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
  let obj = _useNavigation;
  importDefault = obj.useNavigation();
  obj = { top: !tmp, style: tmp2.container, children: null };
  obj = { style: tmp2.selectContainer, children: null };
  obj1 = { variant: "heading-xl/extrabold", children: null };
  const intl = _getSystemLocale.intl;
  obj1[1] = intl.string(_getSystemLocale.t.S9b9bX);
  const items = [callback(_Text.Text, obj1), ];
  const obj2 = { variant: "text-sm/medium", children: null };
  const intl2 = _getSystemLocale.intl;
  obj2[1] = intl2.string(_getSystemLocale.t.Jz1lXO);
  items[1] = callback(_Text.Text, obj2);
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
  return callback2(_SafeAreaPaddingView.SafeAreaPaddingView, obj);
};