// discord_app/modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import WarningIcon from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: ThemesDefault.space.PX_8,
  padding: ThemesDefault.space.PX_12,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_FEEDBACK_WARNING,
  borderRadius: ThemesDefault.radii.lg,
  backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, paddingRight: ThemesDefault.space.PX_8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { flex: 1, paddingRight: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx");

export default function FamilyCenterInlineWarningNotice(arg0) {
  ({ text, style } = arg0);
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.container, style];
  obj = { size: "sm", color: ThemesDefault.colors.ICON_FEEDBACK_WARNING };
  const items1 = [callback(WarningIcon.WarningIcon, obj)];
  obj = { variant: "text-sm/medium", color: "text-strong", style: tmp.text, children: text };
  items1[1] = callback(Text.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
}
