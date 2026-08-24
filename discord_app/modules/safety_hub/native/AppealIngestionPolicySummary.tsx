// === Module 11124: AppealIngestionPolicySummary ===

// Module 11124 (AppealIngestionPolicySummary)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hexToRgba from "hexToRgba" /* 4227 */;
import Text from "Text" /* 4739 */;
import parseMessageEmbedForProps from "parseMessageEmbedForProps" /* 5442 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { sectionTitle: { marginBottom: 8 }, policy: { marginBottom: 16 }, borderColor: null, userContainer: null };
createCacheKey = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginTop: 8, justifyContent: "flex-start", minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 18 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginTop: 8, justifyContent: "flex-start", minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 18 };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionPolicySummary.tsx");

export default function AppealIngestionPolicySummary(classification) {
  classification = classification.classification;
  const tmp = callback3();
  let obj = parseMessageEmbedForProps;
  let description;
  if (classification != null) {
    description = classification.description;
  }
  const capitalizeTextResult = obj.capitalizeText(description);
  obj = { style: tmp.policy, children: null };
  const tmp2Result = hexToRgba;
  obj = { style: tmp.sectionTitle, variant: "text-sm/bold", children: null };
  const intl = tmp2(1236).intl;
  obj[2] = intl.string(getSystemLocale.t.xsdcxh);
  const items = [callback(Text.Text, obj), ];
  const hexWithOpacityResult = hexToRgba.hexWithOpacity(tmp.borderColor.color, 0.08);
  const items1 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  items[1] = callback(View, { style: items1, children: callback(Text.Text, { variant: "text-md/semibold", children: capitalizeTextResult }) });
  obj[1] = items;
  return callback2(View, obj);
};