// discord_app/modules/guild_role_subscriptions/native/components/EmojiIcon.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useEmojiByIdOrName").fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiIcon.tsx");

export default function EmojiIcon(size) {
  let fontSize;
  let guildId;
  let id;
  let lineHeight;
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
  let obj = require("../../useEmojiByIdOrName.tsx") /* useEmojiByIdOrName */;
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, id);
  if (null == emojiByIdOrName) {
    let tmp4 = null;
    if (flag) {
      obj = { resizeMode: "contain", style: null, source: null };
      obj = { width: null, height: null };
      obj[0] = num;
      obj[1] = num;
      obj[1] = obj;
      obj[2] = require("../../../../../_runtime/08610_registerAsset.js");
      tmp4 = jsx(require("../../../../components_native/common/FastImage.tsx"), { width: null, height: null });
      const tmp7 = require("../../../../components_native/common/FastImage.tsx");
    }
    let tmp8Result = tmp4;
  } else {
    const obj1 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
    obj1[0] = size.style;
    const obj2 = { width: null, height: null };
    obj2[0] = num;
    obj2[1] = num;
    obj1[1] = obj2;
    if (fontSize == null) {
      fontSize = num;
    }
    const obj3 = { fontSize: null, lineHeight: null };
    obj3[0] = fontSize;
    obj3[1] = lineHeight;
    obj1[2] = obj3;
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
    obj1[3] = str;
    if (null != emojiByIdOrName.id) {
      const obj4 = { id: null, animated: null, size: null };
      ({ id: obj4[0], animated: obj4[1] } = emojiByIdOrName);
      obj4[2] = num;
      let url = tmp9(1416).getEmojiURL(obj4);
      const tmp9Result = tmp9(1416);
    } else {
      url = emojiByIdOrName.url;
    }
    obj1[4] = url;
    tmp8Result = jsx(require("../../../emojis/native/Emoji.tsx"), { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null });
    const tmp10 = require("../../../emojis/native/Emoji.tsx");
    const tmp8 = jsx;
    tmp9 = importDefault;
  }
  return tmp8Result;
};