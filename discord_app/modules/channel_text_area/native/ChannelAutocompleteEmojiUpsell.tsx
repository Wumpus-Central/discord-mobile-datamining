// discord_app/modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { EMOJI_URL_BASE_SIZE } from "../../emojis/EmojiConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
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
  const intl = require("../../../intl/index.native.tsx").intl;
  let obj = { count: results.length };
  obj[3] = intl.format(require("../../../intl/index.native.tsx").t.uEky42, obj);
  let items = [callback(require("../../../design/components/Text/native/Text.tsx").Text, obj), ];
  const items1 = [tmp.emojis, { width: result + 16 }];
  items[1] = callback(View, { style: items1, children: mapped });
  obj[1] = items;
  return callback2(View, obj);
};