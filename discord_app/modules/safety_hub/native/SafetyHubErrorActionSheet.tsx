// discord_app/modules/safety_hub/native/SafetyHubErrorActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { errorContainer: null, redesignErrorIconContainer: null, redesignErrorIcon: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: require("Themes").space.PX_8, paddingBottom: require("Themes").space.PX_24, gap: require("Themes").space.PX_16, minHeight: 120 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.WHITE };
createCacheKey[2] = { height: 50, width: 50 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { display: "flex", justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.WHITE };
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default function SafetyHubErrorActionSheet(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const tmp3 = createCacheKey();
    const tmp6 = require("../hooks/useSafetyHubLoading.tsx")();
    let obj = { children: null };
    obj = { style: null, children: null };
    const items = [tmp3.errorContainer];
    obj[0] = items;
    obj = { style: null, children: null };
    const items1 = [tmp3.redesignErrorIconContainer];
    obj[0] = items1;
    const obj1 = { size: "custom", color: null, style: null };
    obj1[1] = require("../../../../discord_common/js/packages/tokens/native.tsx").colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
    const items2 = [tmp3.redesignErrorIcon];
    obj1[2] = items2;
    obj[1] = callback(require("../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx") /* CircleXIcon */.CircleXIcon, obj1);
    const items3 = [callback(View, obj), ];
    const obj2 = { variant: "heading-lg/normal", children: null };
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj2[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.TDRvqs);
    items3[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj2);
    obj[1] = items3;
    const items4 = [callback2(View, obj), ];
    const obj3 = { onPress: null, text: null, loading: null, disabled: null };
    obj3[0] = function onPress() {
      return callback(table[11]).getSafetyHubData();
    };
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj3[1] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.R1AN4F);
    obj3[2] = tmp6;
    obj3[3] = tmp6;
    items4[1] = callback(require("../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj3);
    obj[0] = items4;
    return callback2(require("../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, obj);
  }
};