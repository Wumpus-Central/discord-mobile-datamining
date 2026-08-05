// discord_app/modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { WarningIcon } from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { flexDirection: "row", alignItems: "flex-start", gap: require("Themes").space.PX_8, padding: require("Themes").space.PX_12, borderWidth: 1, borderColor: require("Themes").colors.BORDER_FEEDBACK_WARNING, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_WARNING };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, paddingRight: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { flex: 1, paddingRight: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx");

export default function FamilyCenterInlineWarningNotice(arg0) {
  let style;
  let text;
  ({ text, style } = arg0);
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.container, style];
  obj = { size: "sm", color: null };
  obj[1] = Themes.colors.ICON_FEEDBACK_WARNING;
  const items1 = [callback(WarningIcon /* WarningIcon */.WarningIcon, obj), ];
  obj = { variant: "text-sm/medium", color: "text-strong", style: tmp.text, children: text };
  items1[1] = callback(Text /* Text */.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
};