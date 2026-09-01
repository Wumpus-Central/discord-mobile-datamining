// discord_app/modules/forums/native/AvailableForumTag.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../emojis/EmojiStore.tsx";
import { EMOJI_URL_BASE_SIZE } from "../../emojis/EmojiConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { pill: null, pillSelected: null, pillDisabled: null, emoji: null, imageEmoji: null, textEmoji: null };
createCacheKey = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
  borderRadius: 20,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  margin: 6,
  borderWidth: 2,
  borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  overflow: "hidden",
  height: 32,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND, borderWidth: 1 };
createCacheKey[2] = { opacity: 0.6 };
createCacheKey[3] = {
  height: 18,
  width: 18,
  marginRight: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
createCacheKey[4] = { height: 16, width: 16 };
createCacheKey[5] = { fontSize: 14, lineHeight: 20 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND, borderWidth: 1 };
const result = require("set").fileFinishedImporting("modules/forums/native/AvailableForumTag.tsx");

export default function AvailableForumTag(tag) {
  tag = tag.tag;
  ({ onPress: importDefault, disabled } = tag);
  const selected = tag.selected;
  closure_4 = undefined;
  c5 = undefined;
  let callback;
  c7 = undefined;
  let callback2;
  closure_10 = undefined;
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
        ({ emoji: obj3[0], textEmoji: obj3[1], imageEmoji: obj3[2] } = closure_4);
        let emojiURL;
        if (null != tmp6) {
          obj1 = { id: null, animated: null, size: null };
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
        tmp9Result = _undefined(closure_1_1(tmp4[9]), obj);
        tmp10 = closure_1_1;
        const tmp11 = closure_1_1(tmp4[9]);
        const tmp9 = _undefined;
      }
      const items = [
        tmp9Result,
        _undefined(tag(disabled[11]).Text, {
          variant: "text-sm/semibold",
          color: "mobile-text-heading-primary",
          children: c5,
        }),
      ];
      obj.children = items;
      return c7(tag(disabled[8]).PressableScale, obj);
    },
  };
  return callback(importDefault(disabled[7]), obj);
}
