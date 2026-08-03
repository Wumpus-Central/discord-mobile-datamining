import "noop";
import { View } from "get ActivityIndicator";
import getEmojiToGroupId from "getEmojiToGroupId";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
class AppliedForumTag {
  constructor(arg0) {
    ({ tag, containerStyle } = global);
    containerStyle = undefined;
    name = undefined;
    emojiId = undefined;
    emojiName = undefined;
    f83205 = undefined;
    c6 = undefined;
    containerStyle = jsxs();
    ({ name, emojiId, emojiName } = tag);
    tmp = name;
    obj = require("initialize");
    items = [];
    items[0] = emojiName;
    f83205 = obj.useStateFromStores(items, () => {
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
            const intl = outer1_0(_undefined[9]).intl;
            obj = { tagName: _undefined };
            obj[2] = intl.formatToPlainString(outer1_0(_undefined[9]).t.tXXD6v, obj);
            obj[3] = ref.ref;
            const merged1 = Object.assign(merged);
            let str = c4;
            let tmp11Result = null != c4;
            if (!tmp11Result) {
              tmp11Result = null != c3;
            }
            if (tmp11Result) {
              obj = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
              ({ textEmoji: obj3[0], emoji: obj3[1] } = tmp4);
              let emojiURL;
              if (null != closure_5) {
                const obj1 = { id: null, animated: null, size: null };
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
            const items1 = [tmp11Result, str(outer1_0(_undefined[12]).Text, { lineClamp: 1, style: lib.tagName, variant: "text-xs/semibold", color: str, children: _undefined })];
            obj.children = items1;
            return outer1_7(c3, obj);
          }
    };
    return c6(require("ForumTagContextMenu"), obj);
  }
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { pill: null, disableEndMargin: null, emoji: null, textEmoji: null, tagName: null, container: null };
createCacheKey = { height: 24, paddingHorizontal: 8, borderRadius: 20, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, marginRight: 4, flexShrink: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 0 };
createCacheKey[2] = { height: 12, width: 12, marginRight: 4, flexShrink: 0 };
createCacheKey[3] = { fontSize: 10, marginRight: 4 };
createCacheKey[4] = { flexShrink: 1 };
createCacheKey[5] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("getEmojiToGroupId").fileFinishedImporting("modules/forums/native/AppliedForumTag.tsx");

export const AppliedForumTagPill = function AppliedForumTagPill(arg0) {
  let containerStyle;
  let disableEndMargin;
  let hasUnreads;
  let tag;
  ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
  const tmp = createCacheKey();
  containerStyle = [tmp.pill, , ];
  containerStyle[1] = containerStyle;
  containerStyle[2] = disableEndMargin ? tmp.disableEndMargin : {};
  return callback(AppliedForumTag, { tag, hasUnreads, containerStyle });
};
export { AppliedForumTag };