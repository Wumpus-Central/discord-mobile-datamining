// === Module 11561: ChannelAutocompleteEmojiUpsell ===

// Module 11561 (ChannelAutocompleteEmojiUpsell)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import preloadDefault from "preload" /* 5449 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1925 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { position: "absolute", width: 28, height: 28, padding: 2, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderRadius: 14, borderColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { width: 16, height: 16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx");

export default function ChannelAutocompleteEmojiUpsell(results) {
  results = results.results;
  const tmp = callback3();
  const _require = tmp;
  const substr = results.slice(0, 3);
  const mapped = substr.map((item, index) => {
    const items = [closure_0.emojiWrapper, ];
    let obj = { left: 24 * index };
    items[1] = obj;
    obj = { style: closure_0.emoji, source: null };
    if (null != item.id) {
      obj1 = { id: null, animated: null, size: null };
      ({ id: obj5[0], animated: obj5[1] } = item);
      obj1[2] = EMOJI_URL_BASE_SIZE;
      let url = getAvatarURLDefault.getEmojiURL(obj1);
      const tmp3Result = getAvatarURLDefault;
    } else {
      url = item.url;
    }
    obj[1] = { uri: url };
    obj[1] = closure_1_5(preloadDefault, obj);
    return closure_1_5(View, obj, item.id);
  });
  const result = 24 * substr.length;
  const intl = _require(1236).intl;
  let obj = { count: results.length };
  obj[3] = intl.format(_require(1236).t.uEky42, obj);
  let items = [callback(_require(4734).Text, obj), ];
  const items1 = [tmp.emojis, { width: result + 16 }];
  items[1] = callback(View, { style: items1, children: mapped });
  obj[1] = items;
  return callback2(View, obj);
};