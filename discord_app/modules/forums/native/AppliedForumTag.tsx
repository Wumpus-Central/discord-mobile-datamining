// discord_app/modules/forums/native/AppliedForumTag.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import ForumTagContextMenuDefault from "ForumTagContextMenu.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";

require = fn;
class AppliedForumTag {
  constructor(arg0) {
    ({ tag, containerStyle } = global);
    closure_1 = undefined;
    name = undefined;
    emojiId = undefined;
    emojiName = undefined;
    closure_5 = undefined;
    c6 = undefined;
    closure_1 = closure_8();
    ({ name, emojiId, emojiName } = tag);
    tmp = name;
    obj = containerStyle(name[7]);
    items = [];
    items[0] = emojiName;
    closure_5 = obj.useStateFromStores(items, () => {
      let usableCustomEmojiById = null;
      if (null != c3) {
        usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
      }
      return usableCustomEmojiById;
    });
    str = "text-muted";
    if (global.hasUnreads) {
      str = "text-default";
    }
    c6 = str;
    obj = {
      tagId: tag.id,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        let obj = { style: null, accessible: true, accessibilityLabel: null, ref: null };
        const items = [container.container, closure_1_0];
        obj.style = items;
        const intl = util.intl;
        obj = { tagName };
        obj.accessibilityLabel = intl.formatToPlainString(util.t.tXXD6v, obj);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        str = c4;
        let tmp11Result = null != c4;
        if (!tmp11Result) {
          tmp11Result = null != c3;
        }
        if (tmp11Result) {
          obj = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
          ({ textEmoji: obj3.textEmojiStyle, emoji: obj3.fastImageStyle } = container);
          let emojiURL;
          if (null != closure_5) {
            const obj1 = { id: null, animated: null, size: null };
            ({ id: obj5.id, animated: obj5.animated } = closure_5);
            obj1.size = EMOJI_URL_BASE_SIZE;
            emojiURL = AvatarUtilsDefault.getEmojiURL(obj1);
            const tmp12Result = AvatarUtilsDefault;
          }
          obj.src = emojiURL;
          if (str == null) {
            str = "";
          }
          obj.name = str;
          tmp11Result = timestampProducer(EmojiDefault, obj);
        }
        const items1 = [
          tmp11Result,
          timestampProducer(Text_Text.Text, {
            lineClamp: 1,
            style: container.tagName,
            variant: "text-xs/semibold",
            color: str,
            children: tagName,
          }),
        ];
        obj.children = items1;
        return React5(View, obj);
      },
    };
    return c6(closure_1(tmp[8]), obj);
  }
}
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { pill: null, disableEndMargin: null, emoji: null, textEmoji: null, tagName: null, container: null };
createStyles = {
  height: 24,
  paddingHorizontal: 8,
  borderRadius: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginRight: 4,
  flexShrink: 1,
};
createStyles.pill = createStyles;
createStyles.disableEndMargin = { marginRight: 0 };
createStyles.emoji = { height: 12, width: 12, marginRight: 4, flexShrink: 0 };
createStyles.textEmoji = { fontSize: 10, marginRight: 4 };
createStyles.tagName = { flexShrink: 1 };
createStyles.container = { display: "flex", flexDirection: "row", alignItems: "center" };
const React6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/AppliedForumTag.tsx");

export const AppliedForumTagPill = function AppliedForumTagPill(arg0) {
  ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
  const tmp = closure_8();
  const obj = { tag, hasUnreads, containerStyle: null };
  const items = [tmp.pill, containerStyle, disableEndMargin ? tmp.disableEndMargin : {}];
  obj.containerStyle = items;
  return timestampProducer(AppliedForumTag, obj);
};
export { AppliedForumTag };
