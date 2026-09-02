// discord_app/modules/polls/native/PollBadge.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../_runtime/16488_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = {
  borderRadius: ThemesDefault.radii.round,
  paddingHorizontal: 8,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  color: ThemesDefault.colors.TEXT_MUTED,
  flexDirection: "row",
  alignItems: "center",
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: 4, textTransform: "uppercase" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default function PollBadge(style) {
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.container, style.style];
  obj = { size: Button.IconSizes.EXTRA_SMALL_10, source: registerAssetDefault };
  const items1 = [callback(Button.Icon, obj)];
  obj = { style: tmp.text, variant: "text-xs/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.RgIi2B);
  items1[1] = callback(Text.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
}
