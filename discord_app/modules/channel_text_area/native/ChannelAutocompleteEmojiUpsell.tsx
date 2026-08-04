import "noop";
import { View } from "get ActivityIndicator";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { upsell: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, title: { lineHeight: 16, flex: 1 }, emojis: { height: 28 }, emojiWrapper: null, emoji: null };
createCacheKey = { position: "absolute", width: 28, height: 28, padding: 2, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderRadius: 14, borderColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { width: 16, height: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx");

export default function ChannelAutocompleteEmojiUpsell(results) {
  results = results.results;
  let _require;
  const tmp = createCacheKey();
  _require = tmp;
  const substr = results.slice(0, 3);
  let obj = { style: tmp.upsell, children: null };
  const mapped = substr.map((id) => {
    let obj = { style: items, children: null };
    items = [_undefined.emojiWrapper, ];
    obj = { left: 24 * arg1 };
    items[1] = obj;
    obj = { style: _undefined.emoji, source: null };
    if (null != id.id) {
      const obj1 = { id: null, animated: null, size: null };
      ({ id: obj5[0], animated: obj5[1] } = id);
      obj1[2] = outer1_4;
      let url = outer1_1(outer1_2[7]).getEmojiURL(obj1);
      const tmp3Result = outer1_1(outer1_2[7]);
    } else {
      url = id.url;
    }
    obj[1] = { uri: url };
    obj[1] = outer1_5(outer1_1(outer1_2[6]), obj);
    return outer1_5(outer1_3, obj, id.id);
  });
  const result = 24 * substr.length;
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", children: null };
  const intl = _require(1236).intl;
  obj = { count: results.length };
  obj[3] = intl.format(_require(1236).t.uEky42, obj);
  let items = [callback(_require(4281).Text, obj), ];
  const items1 = [tmp.emojis, { width: result + 16 }];
  items[1] = callback(View, { style: items1, children: mapped });
  obj[1] = items;
  return callback2(View, obj);
};