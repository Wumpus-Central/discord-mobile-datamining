// discord_app/modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/14568_registerAsset.js";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  let onPress;
  let text;
  ({ onPress, text } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, onPress, children: null };
  obj = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
  const items = [callback(Text.Text, obj), ];
  obj = { source: null };
  obj[0] = registerAsset;
  items[1] = callback(Button.Icon, obj);
  obj[2] = items;
  return callback2(PressableBase.PressableHighlight, obj);
};