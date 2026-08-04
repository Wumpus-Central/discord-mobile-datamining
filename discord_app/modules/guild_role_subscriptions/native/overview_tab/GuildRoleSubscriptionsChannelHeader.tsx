import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { header: null };
obj = { flex: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function GuildRoleSubscriptionsChannelHeader() {
  let obj = { style: callback3().header, children: null };
  obj = { source: null, size: null, disableColor: true };
  obj[0] = importDefault(12043);
  obj[1] = require(1297) /* Button */.Icon.Sizes.MEDIUM;
  const items = [callback(require(1297) /* Button */.Icon, obj), ];
  obj = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["KzCF/6"]);
  items[1] = callback(require(4281) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx");

export default memoResult;