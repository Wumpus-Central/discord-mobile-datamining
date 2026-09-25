// === Module 10806: AvailableForumTag ===

// Module 10806 (AvailableForumTag)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4825 */;
import EmojiDefault from "Emoji" /* 6546 */;
import native from "native" /* 8362 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5766 */;

const require = globalThis.__r;

require = fn;
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
const obj2 = { pill: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 6, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden", height: 32 }, pillSelected: null, pillDisabled: null, emoji: null, imageEmoji: null, textEmoji: null };
const obj3 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 6, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden", height: 32 };
obj2.pillSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderWidth: 1 };
obj2.pillDisabled = { opacity: 0.6 };
obj2.emoji = { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" };
obj2.imageEmoji = { height: 16, width: 16 };
obj2.textEmoji = { fontSize: 14, lineHeight: 20 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/AvailableForumTag.tsx");

export default function AvailableForumTag(tag) {
  tag = tag.tag;
  ({ onPress: importDefault, disabled } = tag);
  const selected = tag.selected;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  closure_8 = undefined;
  function handlePress() {
    if (!disabled) {
      importDefault(tag);
    }
  }
  const tmp = closure_8();
  const pill = tmp;
  ({ name: c5, emojiId: c6, emojiName: c7 } = tag);
  let items = [pill];
  closure_8 = tag(disabled[6]).useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != c6) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  const items1 = [disabled, selected, tmp];
  const style = selected.useMemo(() => {
    const items = [];
    items.push(pill.pill);
    if (selected) {
      items.push(pill.pillSelected);
    }
    if (disabled) {
      items.push(pill.pillDisabled);
    }
    return items;
  }, items1);
  return c6(require("ForumTagContextMenu"), {
    tagId: tag.id,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { style, accessibilityRole: "button", accessibilityState: { selected }, disabled, ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.onPress = handlePress;
      let tmp9Result = null != closure_8;
      if (!tmp9Result) {
        tmp9Result = null != c7;
      }
      if (tmp9Result) {
        const obj4 = { style: null, textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = closure_4);
        let emojiURL;
        if (null != closure_8) {
          const obj6 = { id: null, animated: null, size: null };
          ({ id: obj5.id, animated: obj5.animated } = closure_8);
          obj6.size = EMOJI_URL_BASE_SIZE;
          emojiURL = AvatarUtilsDefault.getEmojiURL(obj6);
          const tmp10Result = AvatarUtilsDefault;
        }
        obj4.src = emojiURL;
        let str = c7;
        if (c7 == null) {
          str = "";
        }
        obj4.name = str;
        tmp9Result = timestampProducer(EmojiDefault, obj4);
      }
      const items = [tmp9Result, timestampProducer(Text_Text.Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children })];
      obj.children = items;
      return React5(native.PressableScale, obj);
    }
  });
};