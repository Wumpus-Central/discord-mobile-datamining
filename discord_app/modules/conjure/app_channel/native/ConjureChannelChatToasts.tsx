// === Module 16797: ConjureChannelChatToasts ===

// Module 16797 (ConjureChannelChatToasts)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import UserUtils from "UserUtils" /* 4728 */;
import Text_Text from "Text/Text" /* 4892 */;
import Card_Card from "Card/Card" /* 6002 */;
import useConjureChatToastMessagesDefault from "useConjureChatToastMessages" /* 16798 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let rect;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { column: rect, opaque: obj2, card: obj3, body: { flex: 1 } };
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, alignItems: "flex-end", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj2 = { width: 304, maxWidth: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
obj3 = { padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let items;
  let items1;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(23);
  message = message.message;
  const onOpenChat = message.onOpenChat;
  const tmp4 = closure_7();
  const obj2 = UserUtils;
  const name = obj2.useName(message.author);
  if (cResult[0] !== message) {
    const str = message.content;
    const str3 = str.replace(/\s+/g, " ");
    let trimmed = str3.trim();
    if ("" === trimmed) {
      let stringResult;
      if (message.stickerItems.length > 0) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.kHdYCW);
      } else {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t["6hGo0c"]);
      }
      trimmed = stringResult;
    }
    cResult[0] = message;
    cResult[1] = trimmed;
    tmp6 = trimmed;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === message) {
    let tmp9;
    let tmp10;
    let tmp13;
    let tmp16;
    if (cResult[3] === onOpenChat) {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== message.author) {
      const obj3 = { size: native.AvatarSizes.SMALL, user: message.author, guildId: "Array" };
      const Avatar = native.Avatar;
      const tmp12 = hasOwnProperty(Avatar, obj3);
      cResult[5] = message.author;
      cResult[6] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] !== name) {
      const obj4 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, children: name };
      const tmp15 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[7] = name;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== tmp6) {
      const obj5 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: tmp6 };
      const tmp18 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[9] = tmp6;
      cResult[10] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp4.body) {
      if (cResult[12] === tmp13) {
        let tmp19;
        if (cResult[13] === tmp16) {
          tmp19 = cResult[14];
        }
        if (cResult[15] === tmp9) {
          if (cResult[16] === tmp4.card) {
            if (cResult[17] === tmp10) {
              let tmp23;
              if (cResult[18] === tmp19) {
                tmp23 = cResult[19];
              }
              if (cResult[20] === tmp4.opaque) {
                let tmp26;
                if (cResult[21] === tmp23) {
                  tmp26 = cResult[22];
                }
                return tmp26;
              }
              const obj6 = { style: tmp4.opaque, children: tmp23 };
              const tmp29 = hasOwnProperty(View, obj6);
              cResult[20] = tmp4.opaque;
              cResult[21] = tmp23;
              cResult[22] = tmp29;
              tmp26 = tmp29;
            }
          }
        }
        const obj7 = { variant: "primary", shadow: "high", border: "subtle", style: tmp4.card, onPress: tmp9, children: items };
        items = [tmp10, tmp19];
        const tmp25 = metroRequire(Card_Card.Card, obj7);
        cResult[15] = tmp9;
        cResult[16] = tmp4.card;
        cResult[17] = tmp10;
        cResult[18] = tmp19;
        cResult[19] = tmp25;
        tmp23 = tmp25;
      }
    }
    const obj8 = { style: tmp4.body, children: items1 };
    items1 = [tmp13, tmp16];
    const tmp22 = metroRequire(View, obj8);
    cResult[11] = tmp4.body;
    cResult[12] = tmp13;
    cResult[13] = tmp16;
    cResult[14] = tmp22;
    tmp19 = tmp22;
  }
  const fn = function x() {
    return onOpenChat(message);
  };
  cResult[2] = message;
  cResult[3] = onOpenChat;
  cResult[4] = fn;
  tmp9 = fn;
}) : ((message) => {
  let Card;
  let items1;
  let items2;
  let obj3;
  message = message.message;
  const onOpenChat = message.onOpenChat;
  const tmp = closure_7();
  const obj = UserUtils;
  const str = message.content;
  const name = obj.useName(message.author);
  const str2 = str.replace(/\s+/g, " ");
  let trimmed = str2.trim();
  if ("" === trimmed) {
    let stringResult;
    if (message.stickerItems.length > 0) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t.kHdYCW);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(intl3.t["6hGo0c"]);
    }
    trimmed = stringResult;
  }
  const items = [message, onOpenChat];
  const obj2 = { style: tmp.opaque, children: metroRequire(Card, obj3) };
  const callback = react.useCallback(() => onOpenChat(message), items);
  obj3 = { variant: "primary", shadow: "high", border: "subtle", style: tmp.card, onPress: callback, children: items1 };
  Card = Card_Card.Card;
  const obj4 = { size: native.AvatarSizes.SMALL, user: message.author, guildId: "Array" };
  const Avatar = native.Avatar;
  items1 = [hasOwnProperty(Avatar, obj4), ];
  const obj5 = { style: tmp.body, children: items2 };
  items2 = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, children: name }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: trimmed })];
  items1[1] = metroRequire(View, obj5);
  return hasOwnProperty(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onOpenChat) => {
  let obj = onOpenChat(576);
  const cResult = obj.c(8);
  onOpenChat = onOpenChat.onOpenChat;
  const channelId = onOpenChat.channelId;
  const tmp2 = closure_7();
  const arr = useConjureChatToastMessagesDefault(channelId, true);
  if (0 === arr.length) {
    return null;
  } else {
    let tmp4;
    if (cResult[0] === arr) {
      let tmp3;
      if (cResult[1] === onOpenChat) {
        tmp3 = cResult[2];
      }
      if (cResult[5] === tmp2.column) {
        let tmp6;
        if (cResult[6] === tmp3) {
          tmp6 = cResult[7];
        }
        return tmp6;
      }
      const obj2 = { style: tmp11, pointerEvents: "box-none", accessibilityLiveRegion: "polite", children: tmp3 };
      const tmp9 = closure_5(View, obj2);
      cResult[5] = tmp2.column;
      cResult[6] = tmp3;
      cResult[7] = tmp9;
      tmp6 = tmp9;
    }
    if (cResult[3] !== onOpenChat) {
      const fn = function x(message) {
        const obj = { message, onOpenChat };
        return hasOwnProperty(closure_8, obj, message.id);
      };
      cResult[3] = onOpenChat;
      cResult[4] = fn;
      tmp4 = fn;
    } else {
      tmp4 = cResult[4];
    }
    const mapped = arr.map(tmp4);
    cResult[0] = arr;
    cResult[1] = onOpenChat;
    cResult[2] = mapped;
    tmp3 = mapped;
  }
}) : ((onOpenChat) => {
  onOpenChat = onOpenChat.onOpenChat;
  const channelId = onOpenChat.channelId;
  const tmp = closure_7();
  const arr = useConjureChatToastMessagesDefault(channelId, true);
  let tmp2 = null;
  if (0 !== arr.length) {
    let obj = {
      style: tmp.column,
      pointerEvents: "box-none",
      accessibilityLiveRegion: "polite",
      children: arr.map((message) => {
          const obj = { message, onOpenChat };
          return hasOwnProperty(closure_8, obj, message.id);
        })
    };
    tmp2 = closure_5(View, obj);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelChatToasts.tsx");

export default tmp4;