// discord_app/modules/forums/native/AvailableForumTag.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import native from "../../../design/components/experimental/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";

require = fn;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  pill: null,
  pillSelected: null,
  pillDisabled: null,
  emoji: null,
  imageEmoji: null,
  textEmoji: null,
};
createStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
  borderRadius: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  margin: 6,
  borderWidth: 2,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  overflow: "hidden",
  height: 32,
};
createStyles.pill = createStyles;
createStyles.pillSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderWidth: 1 };
createStyles.pillDisabled = { opacity: 0.6 };
createStyles.emoji = {
  height: 18,
  width: 18,
  marginRight: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
createStyles.imageEmoji = { height: 16, width: 16 };
createStyles.textEmoji = { fontSize: 14, lineHeight: 20 };
let closure_8 = createStyles.createStyles(createStyles);
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
  let obj = tag(disabled[6]);
  let items = [pill];
  closure_8 = obj.useStateFromStores(items, () => {
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
  obj = {
    tagId: tag.id,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      let obj = { style, accessibilityRole: "button", accessibilityState: null, disabled, ref: ref.ref };
      obj = { selected };
      obj.accessibilityState = obj;
      const merged1 = Object.assign(merged);
      obj.onPress = handlePress;
      let tmp9Result = null != closure_8;
      if (!tmp9Result) {
        tmp9Result = null != c7;
      }
      if (tmp9Result) {
        obj = { style: null, textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = closure_4);
        let emojiURL;
        if (null != closure_8) {
          const obj1 = { id: null, animated: null, size: null };
          ({ id: obj5.id, animated: obj5.animated } = closure_8);
          obj1.size = EMOJI_URL_BASE_SIZE;
          emojiURL = AvatarUtilsDefault.getEmojiURL(obj1);
          const tmp10Result = AvatarUtilsDefault;
        }
        obj.src = emojiURL;
        let str = c7;
        if (c7 == null) {
          str = "";
        }
        obj.name = str;
        tmp9Result = timestampProducer(EmojiDefault, obj);
      }
      const items = [
        tmp9Result,
        timestampProducer(Text_Text.Text, {
          variant: "text-sm/semibold",
          color: "mobile-text-heading-primary",
          children,
        }),
      ];
      obj.children = items;
      return React5(native.PressableScale, obj);
    },
  };
  return c6(require("ForumTagContextMenu"), obj);
}
