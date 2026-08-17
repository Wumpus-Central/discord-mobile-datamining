// discord_app/modules/safety_hub/native/ClassificationEvidence.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 11070 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import Button from "Button" /* 1297 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { cardShadow: null, flaggedContent: null, sectionContainer: null };
createCacheKey[0] = Button.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
createCacheKey = { borderWidth: 1, borderRadius: ThemesDefault.radii.sm, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: ThemesDefault.colors.CHANNELTEXTAREA_BACKGROUND, padding: 20 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", gap: ThemesDefault.space.PX_8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { display: "flex", gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/ClassificationEvidence.tsx");

export default function ClassificationEvidence(flaggedContent) {
  flaggedContent = flaggedContent.flaggedContent;
  const tmp = callback3();
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
    obj1 = { flaggedContent: null };
    obj1[0] = flaggedContent;
    obj[1] = callback(ClassificationEvidenceDefault, obj1);
    items[1] = callback(View, obj);
    obj[1] = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};