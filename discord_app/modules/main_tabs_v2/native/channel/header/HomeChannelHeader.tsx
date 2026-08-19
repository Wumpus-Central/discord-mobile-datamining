// discord_app/modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Button from "../../../../../design/void/native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../../_runtime/11952_registerAsset.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { flex: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function HomeChannelHeader() {
  { style: callback3().container, children: null };
  let obj = { source: registerAssetDefault, size: Button.Icon.Sizes.MEDIUM, disableColor: true };
  const items = [callback(Button.Icon, obj), ];
  obj = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.Ym2Ri6);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx");

export default memoResult;