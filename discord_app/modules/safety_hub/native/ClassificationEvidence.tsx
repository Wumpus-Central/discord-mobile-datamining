// discord_app/modules/safety_hub/native/ClassificationEvidence.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import Button from "Button";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ClassificationEvidence } from "ClassificationMessageEvidence.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { cardShadow: null, flaggedContent: null, sectionContainer: null };
createCacheKey[0] = Button.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
createCacheKey = { borderWidth: 1, borderRadius: require("Themes").radii.sm, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("Themes").colors.CHANNELTEXTAREA_BACKGROUND, padding: 20 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { display: "flex", gap: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/ClassificationEvidence.tsx");

export default function ClassificationEvidence(flaggedContent) {
  flaggedContent = flaggedContent.flaggedContent;
  const tmp = createCacheKey();
  let tmp2 = null;
  if (0 !== flaggedContent.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.sectionContainer;
    obj = { variant: "eyebrow", color: "text-default", children: null };
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t.s64CMg);
    const items = [callback(Text.Text, obj), ];
    obj = { style: null, children: null };
    const items1 = [, ];
    ({ flaggedContent: arr3[0], cardShadow: arr3[1] } = tmp);
    obj[0] = items1;
    const obj1 = { flaggedContent: null };
    obj1[0] = flaggedContent;
    obj[1] = callback(ClassificationEvidence, obj1);
    items[1] = callback(View, obj);
    obj[1] = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};