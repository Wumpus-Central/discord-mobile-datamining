// discord_app/modules/guild_role_subscriptions/native/components/EmojiIcon.tsx
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import _modDef10449 from "../../../../../_runtime/metro/10449__.js";
import useEmojiByIdOrName from "../../useEmojiByIdOrName.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const emojiByIdOrName = useEmojiByIdOrName.useEmojiByIdOrName(guildId, id);
  if (null == emojiByIdOrName) {
    let tmp4 = null;
    if (flag) {
      const obj2 = { resizeMode: "contain", style: null, source: null };
      size = { width: num, height: num };
      obj2.style = size;
      obj2.source = _modDef10449;
      tmp4 = jsx(FastImageDefault, { resizeMode: "contain", style: null, source: null });
    }
    let tmp8Result = tmp4;
  } else {
    const obj3 = { style: size.style, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
    const size1 = { width: num, height: num };
    obj3.fastImageStyle = size1;
    if (fontSize == null) {
      fontSize = num;
    }
    const obj5 = { fontSize, lineHeight };
    obj3.textEmojiStyle = obj5;
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
    obj3.name = str;
    if (null != emojiByIdOrName.id) {
      const obj6 = { id: null, animated: null, size: null };
      ({ id: obj4.id, animated: obj4.animated } = emojiByIdOrName);
      obj6.size = num;
      let url = AvatarUtilsDefault.getEmojiURL(obj6);
      const tmp9Result = AvatarUtilsDefault;
    } else {
      url = emojiByIdOrName.url;
    }
    obj3.src = url;
    tmp8Result = jsx(EmojiDefault, {
      style: size.style,
      fastImageStyle: null,
      textEmojiStyle: null,
      name: null,
      src: null,
    });
  }
  return tmp8Result;
}
