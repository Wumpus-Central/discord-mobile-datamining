// discord_app/modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import registerAssetDefault from "../../../../../_runtime/14751_registerAsset.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 1 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  ({ onPress, text } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container, onPress, children: null };
  obj = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
  const items = [callback(Text.Text, obj), ];
  obj = { source: registerAssetDefault };
  items[1] = callback(Button.Icon, obj);
  obj[2] = items;
  return callback2(PressableBase.PressableHighlight, obj);
};