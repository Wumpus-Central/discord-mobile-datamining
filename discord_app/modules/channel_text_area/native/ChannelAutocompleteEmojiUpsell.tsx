// discord_app/modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  upsell: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { lineHeight: 16, flex: 1 },
  emojis: { height: 28 },
  emojiWrapper: null,
  emoji: null,
};
let size = {
  position: "absolute",
  width: 28,
  height: 28,
  padding: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderWidth: 2,
  borderRadius: 14,
  borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
  justifyContent: "center",
};
obj2.emojiWrapper = size;
obj2.emoji = { width: 16, height: 16 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx");

export default function ChannelAutocompleteEmojiUpsell(results) {
  results = results.results;
  const tmp = closure_7();
  _require = tmp;
  const substr = results.slice(0, 3);
  let obj = { style: tmp.upsell, children: null };
  const mapped = substr.map((id, index) => {
    const obj = { style: null, children: null };
    const items = [closure_0.emojiWrapper, { left: 24 * index }];
    obj.style = items;
    const obj3 = { style: closure_0.emoji, source: null };
    if (null != id.id) {
      const obj4 = { id: null, animated: null, size: null };
      ({ id: obj5.id, animated: obj5.animated } = id);
      obj4.size = EMOJI_URL_BASE_SIZE;
      let url = AvatarUtilsDefault.getEmojiURL(obj4);
      const tmp3Result = AvatarUtilsDefault;
    } else {
      url = id.url;
    }
    obj3.source = { uri: url };
    obj.children = hasOwnProperty(FastImageDefault, obj3);
    return hasOwnProperty(View, obj, id.id);
  });
  const result = 24 * substr.length;
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", children: null };
  const intl = require("util").intl;
  obj2.children = intl.format(require("util").t.uEky42, { count: results.length });
  let items = [closure_5(require("Text/Text").Text, obj2)];
  let obj4 = { style: null, children: mapped };
  const items1 = [tmp.emojis, { width: result + 16 }];
  obj4.style = items1;
  items[1] = closure_5(View, obj4);
  obj.children = items;
  return closure_6(View, obj);
}
