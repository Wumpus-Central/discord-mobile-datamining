// discord_app/modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null };
obj = { flex: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function HomeChannelHeader() {
  let obj = { style: callback3().container, children: null };
  obj = { source: null, size: null, disableColor: true };
  obj[0] = require("../../../../../../_runtime/12040_registerAsset.js");
  obj[1] = require("../../../../../design/void/native.tsx") /* Button */.Icon.Sizes.MEDIUM;
  const items = [callback(require("../../../../../design/void/native.tsx") /* Button */.Icon, obj), ];
  obj = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.Ym2Ri6);
  items[1] = callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx");

export default memoResult;