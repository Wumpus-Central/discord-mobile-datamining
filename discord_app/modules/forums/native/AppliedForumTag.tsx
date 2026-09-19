// === Module 10886: AppliedForumTag ===

// Module 10886 (AppliedForumTag)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4752 */;
import EmojiDefault from "Emoji" /* 7370 */;
import ForumTagContextMenuDefault from "ForumTagContextMenu" /* 10887 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5671 */;

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
    obj1 = {
      tagId: tag.id,
      children(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { style: null, accessible: true, accessibilityLabel: null, ref: null };
            const items = [container.container, closure_1_0];
            obj.style = items;
            const intl = util.intl;
            obj.accessibilityLabel = intl.formatToPlainString(util.t.tXXD6v, { tagName });
            obj.ref = ref.ref;
            const merged1 = Object.assign(merged);
            str = c4;
            let tmp11Result = null != c4;
            if (!tmp11Result) {
              tmp11Result = null != c3;
            }
            if (tmp11Result) {
              const obj4 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
              ({ textEmoji: obj3.textEmojiStyle, emoji: obj3.fastImageStyle } = container);
              let emojiURL;
              if (null != closure_5) {
                const obj6 = { id: null, animated: null, size: null };
                ({ id: obj5.id, animated: obj5.animated } = closure_5);
                obj6.size = EMOJI_URL_BASE_SIZE;
                emojiURL = AvatarUtilsDefault.getEmojiURL(obj6);
                const tmp12Result = AvatarUtilsDefault;
              }
              obj4.src = emojiURL;
              if (str == null) {
                str = "";
              }
              obj4.name = str;
              tmp11Result = timestampProducer(EmojiDefault, obj4);
            }
            const items1 = [tmp11Result, timestampProducer(Text_Text.Text, { lineClamp: 1, style: container.tagName, variant: "text-xs/semibold", color: str, children: tagName })];
            obj.children = items1;
            return React5(View, obj);
          }
    };
    return c6(closure_1(tmp[8]), obj1);
  }
}
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
const obj2 = { pill: { height: 24, paddingHorizontal: 8, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginRight: 4, flexShrink: 1 }, disableEndMargin: { marginRight: 0 }, emoji: { height: 12, width: 12, marginRight: 4, flexShrink: 0 }, textEmoji: { fontSize: 10, marginRight: 4 }, tagName: { flexShrink: 1 }, container: { display: "flex", flexDirection: "row", alignItems: "center" } };
const React6 = createStyles.createStyles(obj2);
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