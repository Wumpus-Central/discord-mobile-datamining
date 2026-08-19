// === Module 10263: AppliedForumTag ===

// Module 10263 (AppliedForumTag)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import ForumTagContextMenuDefault from "ForumTagContextMenu" /* 10264 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "getEmojiToGroupId" /* 6727 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1925 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
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
    obj = require("initialize");
    items = [];
    items[0] = emojiName;
    closure_5 = obj.useStateFromStores(items, () => {
      let usableCustomEmojiById = null;
      if (null != c3) {
        usableCustomEmojiById = _undefined2.getUsableCustomEmojiById(tmp);
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
            const merged = Object.assign(ref, Object.create(null));
            let obj = { style: items, accessible: true, accessibilityLabel: null, ref: null };
            items = [lib.container, closure_0];
            const intl = closure_1_0(_undefined[9]).intl;
            obj = { tagName: _undefined };
            obj[2] = intl.formatToPlainString(closure_1_0(_undefined[9]).t.tXXD6v, obj);
            obj[3] = ref.ref;
            const merged1 = Object.assign(merged);
            str = c4;
            let tmp11Result = null != c4;
            if (!tmp11Result) {
              tmp11Result = null != c3;
            }
            if (tmp11Result) {
              obj = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
              ({ textEmoji: obj3[0], emoji: obj3[1] } = tmp4);
              let emojiURL;
              if (null != closure_5) {
                obj1 = { id: null, animated: null, size: null };
                ({ id: obj5[0], animated: obj5[1] } = tmp14);
                obj1[2] = closure_5;
                emojiURL = tmp12(tmp6[11]).getEmojiURL(obj1);
                const tmp12Result = tmp12(tmp6[11]);
              }
              obj[2] = emojiURL;
              if (str == null) {
                str = "";
              }
              obj[3] = str;
              tmp11Result = str(lib(tmp6[10]), obj);
              const tmp11 = str;
              tmp12 = lib;
              const tmp13 = lib(tmp6[10]);
              tmp14 = closure_5;
            }
            const items1 = [tmp11Result, str(closure_1_0(_undefined[12]).Text, { lineClamp: 1, style: lib.tagName, variant: "text-xs/semibold", color: str, children: _undefined })];
            obj.children = items1;
            return closure_1_7(c3, obj);
          }
    };
    return c6(require("ForumTagContextMenu"), obj);
  }
}
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { pill: null, disableEndMargin: null, emoji: null, textEmoji: null, tagName: null, container: null };
createCacheKey = { height: 24, paddingHorizontal: 8, borderRadius: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, marginRight: 4, flexShrink: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 0 };
createCacheKey[2] = { height: 12, width: 12, marginRight: 4, flexShrink: 0 };
createCacheKey[3] = { fontSize: 10, marginRight: 4 };
createCacheKey[4] = { flexShrink: 1 };
createCacheKey[5] = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/forums/native/AppliedForumTag.tsx");

export const AppliedForumTagPill = function AppliedForumTagPill(arg0) {
  ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
  const tmp = callback2();
  containerStyle = [tmp.pill, , ];
  containerStyle[1] = containerStyle;
  containerStyle[2] = disableEndMargin ? tmp.disableEndMargin : {};
  return callback(AppliedForumTag, { tag, hasUnreads, containerStyle });
};
export { AppliedForumTag };