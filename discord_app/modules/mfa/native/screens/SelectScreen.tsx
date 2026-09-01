// discord_app/modules/mfa/native/screens/SelectScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import NAV_BAR_HEIGHT2 from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { SELECT_NAMES } from "../../MFAConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { context } from "../MfaChallengeContext.tsx";

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

export default function SelectScreen() {
  let obj = context;
  const tmp = useWideAuthViewDefault();
  const tmp2 = callback3(tmp);
  obj1 = useNavigation;
  _require = obj1.useNavigation();
  obj = { top: !tmp, style: tmp2.container, children: null };
  obj = { style: tmp2.selectContainer, children: null };
  obj1 = { variant: "heading-xl/extrabold", children: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj1[1] = intl.string(require("../../../../intl/index.native.tsx").t.S9b9bX);
  const items = [callback(require("../../../../design/components/Text/native/Text.tsx").Heading, obj1), ];
  const obj2 = { variant: "text-sm/medium", children: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj2[1] = intl2.string(require("../../../../intl/index.native.tsx").t.Jz1lXO);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj2);
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const methods = obj.useMfaChallenge().mfaChallenge.methods;
  items1[1] = callback(View, {
    style: { marginTop: 16, gap: 8 },
    children: methods.map((type) => {
      const callback = type;
      closure_1 = callback;
      return closure_1_5(callback(closure_1_2[6]).RowButton, {
        label: closure_1_4[type.type],
        onPress() {

        }
      }, type.type);
    })
  });
  obj[2] = items1;
  return callback2(require("../../../../components_native/common/SafeAreaView.tsx").SafeAreaPaddingView, obj);
};