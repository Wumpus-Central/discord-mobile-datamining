// discord_app/modules/forums/native/AvailableForumTag.tsx
import noop from "noop";
import getEmojiToGroupId from "getEmojiToGroupId";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { pill: null, pillSelected: null, pillDisabled: null, emoji: null, imageEmoji: null, textEmoji: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, borderRadius: 20, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, margin: 6, borderWidth: 2, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, overflow: "hidden", height: 32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: require("Themes").colors.BACKGROUND_BRAND, borderWidth: 1 };
createCacheKey[2] = { opacity: 0.6 };
createCacheKey[3] = { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[4] = { height: 16, width: 16 };
createCacheKey[5] = { fontSize: 14, lineHeight: 20 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderColor: require("Themes").colors.BACKGROUND_BRAND, borderWidth: 1 };
const result = require("set").fileFinishedImporting("modules/forums/native/AvailableForumTag.tsx");

export default function AvailableForumTag(tag) {
  let c5;
  let c6;
  let c7;
  let disabled;
  let importDefault;
  tag = tag.tag;
  ({ onPress: importDefault, disabled } = tag);
  const selected = tag.selected;
  let c4;
  c5 = undefined;
  let callback;
  c7 = undefined;
  let createCacheKey;
  let closure_10;
  function handlePress() {
    if (!disabled) {
      callback(tag);
    }
  }
  const tmp = createCacheKey();
  c4 = tmp;
  ({ name: c5, emojiId: c6, emojiName: c7 } = tag);
  let obj = tag(disabled[6]);
  let items = [c4];
  createCacheKey = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != c6) {
      usableCustomEmojiById = _undefined.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  const items1 = [disabled, selected, tmp];
  closure_10 = selected.useMemo(() => {
    const items = [];
    items.push(_undefined.pill);
    if (selected) {
      items.push(tmp.pillSelected);
    }
    if (disabled) {
      items.push(tmp.pillDisabled);
    }
    return items;
  }, items1);
  obj = {
    tagId: tag.id,
    children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      obj = { style: closure_10, accessibilityRole: "button", accessibilityState: obj, disabled, ref: ref.ref };
      obj = { selected };
      const merged1 = Object.assign(merged);
      obj.onPress = handlePress;
      let tmp9Result = null != closure_8;
      if (!tmp9Result) {
        tmp9Result = null != c7;
      }
      if (tmp9Result) {
        obj = { style: null, textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ emoji: obj3[0], textEmoji: obj3[1], imageEmoji: obj3[2] } = c4);
        let emojiURL;
        if (null != tmp6) {
          const obj1 = { id: null, animated: null, size: null };
          ({ id: obj5[0], animated: obj5[1] } = tmp6);
          obj1[2] = c5;
          emojiURL = tmp10(tmp4[10]).getEmojiURL(obj1);
          const tmp10Result = tmp10(tmp4[10]);
        }
        obj[3] = emojiURL;
        let str = c7;
        if (c7 == null) {
          str = "";
        }
        obj[4] = str;
        tmp9Result = _undefined2(outer1_1(tmp4[9]), obj);
        tmp10 = outer1_1;
        const tmp11 = outer1_1(tmp4[9]);
        const tmp9 = _undefined2;
      }
      const items = [tmp9Result, _undefined2(tag(disabled[11]).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: c5 })];
      obj.children = items;
      return c7(tag(disabled[8]).PressableScale, obj);
    }
  };
  return callback(importDefault(disabled[7]), obj);
};