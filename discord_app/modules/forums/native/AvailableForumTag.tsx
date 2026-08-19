// === Module 10451: AvailableForumTag ===

// Module 10451 (AvailableForumTag)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1925 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, borderRadius: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, margin: 6, borderWidth: 2, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden", height: 32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND, borderWidth: 1 };
createCacheKey[2] = { opacity: 0.6 };
createCacheKey[3] = { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[4] = { height: 16, width: 16 };
createCacheKey[5] = { fontSize: 14, lineHeight: 20 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/forums/native/AvailableForumTag.tsx");

export default function AvailableForumTag(tag) {
  tag = tag.tag;
  ({ onPress: importDefault, disabled } = tag);
  const selected = tag.selected;
  c5 = undefined;
  let callback;
  c7 = undefined;
  let callback2;
  function handlePress() {
    if (!disabled) {
      callback(tag);
    }
  }
  const tmp = callback2();
  closure_4 = tmp;
  ({ name: c5, emojiId: c6, emojiName: c7 } = tag);
  let obj = tag(disabled[6]);
  let items = [closure_4];
  callback2 = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != c6) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  const items1 = [disabled, selected, tmp];
  closure_10 = selected.useMemo(() => {
    const items = [];
    items.push(usableCustomEmojiById.pill);
    if (selected) {
      items.push(usableCustomEmojiById.pillSelected);
    }
    if (disabled) {
      items.push(usableCustomEmojiById.pillDisabled);
    }
    return items;
  }, items1);
  obj = {
    tagId: tag.id,
    children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      let obj = { selected };
      const merged1 = Object.assign(merged);
      obj.onPress = handlePress;
      let tmp9Result = null != closure_8;
      if (!tmp9Result) {
        tmp9Result = null != _undefined;
      }
      if (tmp9Result) {
        obj = { style: null, textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ emoji: obj3[0], textEmoji: obj3[1], imageEmoji: obj3[2] } = closure_4);
        let emojiURL;
        if (null != closure_8) {
          obj1 = { id: null, animated: null, size: null };
          ({ id: obj5[0], animated: obj5[1] } = closure_8);
          obj1[2] = c5;
          emojiURL = importDefault(disabled[10]).getEmojiURL(obj1);
          const tmp10Result = importDefault(disabled[10]);
        }
        obj[3] = emojiURL;
        let str = _undefined;
        if (_undefined == null) {
          str = "";
        }
        obj[4] = str;
        tmp9Result = _undefined(importDefault(disabled[9]), obj);
        const tmp11 = importDefault(disabled[9]);
      }
      const items = [tmp9Result, _undefined(tag(disabled[11]).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: c5 })];
      obj.children = items;
      return _undefined(tag(disabled[8]).PressableScale, obj);
    }
  };
  return callback(importDefault(disabled[7]), obj);
};