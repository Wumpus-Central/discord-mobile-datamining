// === Module 11610: ChannelAutocompleteEmojiUpsell ===

// Module 11610 (ChannelAutocompleteEmojiUpsell)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1925 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { upsell: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, title: { lineHeight: 16, flex: 1 }, emojis: { height: 28 }, emojiWrapper: null, emoji: null };
createCacheKey = { position: "absolute", width: 28, height: 28, padding: 2, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderRadius: 14, borderColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { width: 16, height: 16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx");

export default function ChannelAutocompleteEmojiUpsell(results) {
  results = results.results;
  let _require;
  const tmp = callback3();
  _require = tmp;
  const substr = results.slice(0, 3);
  let obj = { style: tmp.upsell, children: null };
  const mapped = substr.map((id) => {
    let obj = { style: items, children: null };
    items = [closure_0.emojiWrapper, ];
    obj = { left: 24 * arg1 };
    items[1] = obj;
    obj = { style: closure_0.emoji, source: null };
    if (null != id.id) {
      obj1 = { id: null, animated: null, size: null };
      ({ id: obj5[0], animated: obj5[1] } = id);
      obj1[2] = closure_1_4;
      let url = closure_1_1(closure_1_2[7]).getEmojiURL(obj1);
      const tmp3Result = closure_1_1(closure_1_2[7]);
    } else {
      url = id.url;
    }
    obj[1] = { uri: url };
    obj[1] = closure_1_5(closure_1_1(closure_1_2[6]), obj);
    return closure_1_5(closure_1_3, obj, id.id);
  });
  const result = 24 * substr.length;
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", children: null };
  const intl = _require(1236).intl;
  obj = { count: results.length };
  obj[3] = intl.format(_require(1236).t.uEky42, obj);
  let items = [callback(_require(4739).Text, obj), ];
  const items1 = [tmp.emojis, { width: result + 16 }];
  items[1] = callback(View, { style: items1, children: mapped });
  obj[1] = items;
  return callback2(View, obj);
};