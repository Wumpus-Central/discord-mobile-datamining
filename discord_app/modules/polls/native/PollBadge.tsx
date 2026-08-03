import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { borderRadius: require("Themes").radii.round, paddingHorizontal: 8, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, color: require("Themes").colors.TEXT_MUTED, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: 4, textTransform: "uppercase" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default function PollBadge(style) {
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.container, style.style];
  obj = { size: null, source: null };
  obj[0] = require(1297) /* Button */.IconSizes.EXTRA_SMALL_10;
  obj[1] = importDefault(15599);
  const items1 = [callback(require(1297) /* Button */.Icon, obj), ];
  obj = { style: tmp.text, variant: "text-xs/semibold", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.RgIi2B);
  items1[1] = callback(require(4251) /* Text */.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
};