// === Module 15240: EmojiIcon ===

// Module 15240 (EmojiIcon)
import FastImageDefault from "FastImage" /* 5587 */;
import EmojiDefault from "Emoji" /* 7130 */;
import _modDef10302 from "module_10302" /* 10302 */;
import useEmojiByIdOrName from "useEmojiByIdOrName" /* 15241 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiIcon.tsx");

export default function EmojiIcon(size) {
  let num = size.size;
  ({ guildId, id } = size);
  if (num === undefined) {
    num = 20;
  }
  let flag = size.useFallbackIcon;
  if (flag === undefined) {
    flag = true;
  }
  ({ fontSize, lineHeight } = size);
  if (lineHeight === undefined) {
    lineHeight = num + 4;
  }
  let obj = useEmojiByIdOrName;
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, id);
  if (null == emojiByIdOrName) {
    let tmp4 = null;
    if (flag) {
      obj = { resizeMode: "contain", style: null, source: null };
      size = { width: num, height: num };
      obj.style = size;
      obj.source = _modDef10302;
      tmp4 = jsx(FastImageDefault, { resizeMode: "contain", style: null, source: null });
    }
    let tmp8Result = tmp4;
  } else {
    obj = { style: size.style, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
    const size1 = { width: num, height: num };
    obj.fastImageStyle = size1;
    if (fontSize == null) {
      fontSize = num;
    }
    const obj1 = { fontSize, lineHeight };
    obj.textEmojiStyle = obj1;
    if (null != emojiByIdOrName.id) {
      let str = emojiByIdOrName.name;
    } else {
      str = emojiByIdOrName.surrogates;
      if (str == null) {
        str = emojiByIdOrName.name;
      }
      if (str == null) {
        str = "";
      }
    }
    obj.name = str;
    if (null != emojiByIdOrName.id) {
      const obj2 = { id: null, animated: null, size: null };
      ({ id: obj4.id, animated: obj4.animated } = emojiByIdOrName);
      obj2.size = num;
      let url = tmp9(1396).getEmojiURL(obj2);
      const tmp9Result = tmp9(1396);
    } else {
      url = emojiByIdOrName.url;
    }
    obj.src = url;
    tmp8Result = jsx(EmojiDefault, { style: size.style, fastImageStyle: null, textEmojiStyle: null, name: null, src: null });
    tmp9 = importDefault;
  }
  return tmp8Result;
};