// discord_app/modules/guild_role_subscriptions/native/components/EmojiIcon.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09904_AssetRegistry.js";
import useEmojiByIdOrName from "../../useEmojiByIdOrName.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiIcon.tsx");

export default function EmojiIcon(size) {
  let fontSize;
  let guildId;
  let id;
  let lineHeight;
  let tmp8Result;
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
  const style = size.style;
  const obj = useEmojiByIdOrName;
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, id);
  if (null == emojiByIdOrName) {
    let tmp4 = null;
    if (flag) {
      size = { width: num, height: num };
      FastImageDefault;
      tmp4 = <tmp7 resizeMode="contain" style={size} source={AssetRegistryDefault} />;
    }
    tmp8Result = tmp4;
  } else {
    let str;
    let url;
    const size1 = { width: num, height: num };
    EmojiDefault;
    if (fontSize == null) {
      fontSize = num;
    }
    const obj5 = { fontSize, lineHeight };
    if (null != emojiByIdOrName.id) {
      str = emojiByIdOrName.name;
    } else {
      str = emojiByIdOrName.surrogates;
      if (str == null) {
        str = emojiByIdOrName.name;
      }
      if (str == null) {
        str = "";
      }
    }
    if (null != emojiByIdOrName.id) {
      const obj6 = { id: null, animated: null, size: num };
      ({ id: obj4.id, animated: obj4.animated } = emojiByIdOrName);
      const tmp9Result = AvatarUtilsDefault;
      url = tmp9Result.getEmojiURL(obj6);
    } else {
      url = emojiByIdOrName.url;
    }
    tmp8Result = <tmp10 style={style} fastImageStyle={size1} textEmojiStyle={obj5} name={str} src={url} />;
  }
  return tmp8Result;
}
