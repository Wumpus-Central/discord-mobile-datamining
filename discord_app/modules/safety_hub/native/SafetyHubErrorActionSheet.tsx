// === Module 14109: SafetyHubErrorActionSheet ===

// Module 14109 (SafetyHubErrorActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import Background from "Background" /* 6950 */;
import CircleXIcon from "CircleXIcon" /* 7341 */;
import useIsSafetyHubLoadingDefault from "useIsSafetyHubLoading" /* 14107 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_16, minHeight: 120 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[2] = { height: 50, width: 50 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default function SafetyHubErrorActionSheet(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const tmp3 = callback3();
    const tmp6 = useIsSafetyHubLoadingDefault();
    let obj = { style: null, children: null };
    const items = [tmp3.errorContainer];
    obj[0] = items;
    obj = { style: null, children: null };
    const items1 = [tmp3.redesignErrorIconContainer];
    obj[0] = items1;
    obj1 = { size: "custom", color: null, style: null };
    obj1[1] = ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
    const items2 = [tmp3.redesignErrorIcon];
    obj1[2] = items2;
    obj[1] = callback(CircleXIcon.CircleXIcon, obj1);
    const items3 = [callback(View, obj), ];
    const obj2 = { variant: "heading-lg/normal", children: null };
    const intl = getSystemLocale.intl;
    obj2[1] = intl.string(getSystemLocale.t.TDRvqs);
    items3[1] = callback(Text.Text, obj2);
    obj[1] = items3;
    const items4 = [callback2(View, obj), ];
    const obj3 = { onPress: null, text: null, loading: null, disabled: null };
    obj3[0] = function onPress() {
      return callback(table[11]).getSafetyHubData();
    };
    const intl2 = getSystemLocale.intl;
    obj3[1] = intl2.string(getSystemLocale.t.R1AN4F);
    obj3[2] = tmp6;
    obj3[3] = tmp6;
    items4[1] = callback(Button.Button, obj3);
    obj[0] = items4;
    return callback2(Background.BottomSheet, obj);
  }
};