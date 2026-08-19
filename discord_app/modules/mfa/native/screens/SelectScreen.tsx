// discord_app/modules/mfa/native/screens/SelectScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import NAV_BAR_HEIGHT2 from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { SELECT_NAMES } from "../../MFAConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

require = fn;
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
const result = require("obj132").fileFinishedImporting("modules/mfa/native/screens/SelectScreen.tsx");

export default function SelectScreen(mfaChallenge) {
  const _require = mfaChallenge;
  const tmp = useWideAuthViewDefault();
  const tmp2 = callback3(tmp);
  let obj = useNavigation;
  importDefault = obj.useNavigation();
  obj = { style: tmp2.selectContainer, children: null };
  obj1 = { variant: "heading-xl/extrabold", children: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj1[1] = intl.string(require("../../../../intl/index.native.tsx").t.S9b9bX);
  const items = [callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj1), ];
  const obj2 = { variant: "text-sm/medium", children: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj2[1] = intl2.string(require("../../../../intl/index.native.tsx").t.Jz1lXO);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj2);
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const methods = mfaChallenge.mfaChallenge.methods;
  items1[1] = callback(View, {
    style: { marginTop: 16, gap: 8 },
    children: methods.map((item, index) => {
      closure_1 = item;
      closure_2 = closure_1;
      return closure_1_5(mfaChallenge(dependencyMap[6]).RowButton, {
        label: SELECT_NAMES[item.type],
        onPress() {

        }
      }, item.type);
    })
  });
  obj[2] = items1;
  return callback2(require("../../../../components_native/common/SafeAreaView.tsx").SafeAreaPaddingView, obj);
};