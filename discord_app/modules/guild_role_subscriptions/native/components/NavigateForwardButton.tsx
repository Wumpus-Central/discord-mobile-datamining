// discord_app/modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  const items = [callback(require(4189) /* Text */.Text, obj), ];
  obj = { source: null };
  obj[0] = importDefault(14258);
  items[1] = callback(require(1297) /* Button */.Icon, obj);
  obj[2] = items;
  return callback2(require(4721) /* PressableBase */.PressableHighlight, obj);
};