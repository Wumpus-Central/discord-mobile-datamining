// discord_app/modules/safety_hub/native/AppealIngestionPolicySummary.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { hexToRgba } from "../../../utils/ColorUtils.tsx";
import { parseMessageEmbedForProps } from "../SafetyHubUtils.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { sectionTitle: { marginBottom: 8 }, policy: { marginBottom: 16 }, borderColor: null, userContainer: null };
createCacheKey = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginTop: 8, justifyContent: "flex-start", minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 18 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginTop: 8, justifyContent: "flex-start", minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 18 };
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionPolicySummary.tsx");

export default function AppealIngestionPolicySummary(classification) {
  classification = classification.classification;
  const tmp = createCacheKey();
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