// === Module 17077: ConjureChannelChatToasts ===

// Module 17077 (ConjureChannelChatToasts)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import UserUtils from "UserUtils" /* 4922 */;
import Text_Text from "Text/Text" /* 5086 */;
import Card from "Card" /* 6186 */;
import useConjureChatToastMessagesDefault from "useConjureChatToastMessages" /* 17078 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { column: null, opaque: null, card: null, body: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, alignItems: "flex-end", gap: nativeDefault.space.PX_8 };
obj2.column = rect;
obj2.opaque = { width: 304, maxWidth: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
let obj3 = { width: 304, maxWidth: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
obj2.card = { padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.body = { flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatToast(message) {
  const cResult = c.c(23);
  message = message.message;
  const onOpenChat = message.onOpenChat;
  const tmp4 = closure_7();
  const name = UserUtils.useName(message.author);
  if (cResult[0] !== message) {
    const trimmed = message.content.replace(/\s+/g, " ").trim();
    if ("" !== trimmed) {
      cResult[0] = message;
      cResult[1] = trimmed;
      let tmp6 = trimmed;
    } else if (message.stickerItems.length > 0) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.kHdYCW);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t["6hGo0c"]);
    }
    const str3 = message.content.replace(/\s+/g, " ");
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === message) {
    if (cResult[3] === onOpenChat) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] !== message.author) {
      const obj3 = { size: native.AvatarSizes.SMALL, user: message.author, guildId: "r" };
      const tmp13 = hasOwnProperty(native.Avatar, obj3);
      cResult[5] = message.author;
      cResult[6] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== name) {
      const obj4 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, children: name };
      const tmp16 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[7] = name;
      cResult[8] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] !== tmp6) {
      const obj5 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: tmp6 };
      const tmp19 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[9] = tmp6;
      cResult[10] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[10];
    }
    if (cResult[11] === tmp4.body) {
      if (cResult[12] === tmp14) {
        if (cResult[13] === tmp17) {
          let tmp20 = cResult[14];
        }
        if (cResult[15] === tmp10) {
          if (cResult[16] === tmp4.card) {
            if (cResult[17] === tmp11) {
              if (cResult[18] === tmp20) {
                let tmp24 = cResult[19];
              }
              if (cResult[20] === tmp4.opaque) {
                if (cResult[21] === tmp24) {
                  let tmp27 = cResult[22];
                }
                return tmp27;
              }
              const obj6 = { style: tmp4.opaque, children: tmp24 };
              const tmp30 = hasOwnProperty(View, obj6);
              cResult[20] = tmp4.opaque;
              cResult[21] = tmp24;
              cResult[22] = tmp30;
              tmp27 = tmp30;
            }
          }
        }
        const obj7 = { variant: "primary", shadow: "high", border: "subtle", style: tmp4.card, onPress: tmp10, children: null };
        const items = [tmp11, tmp20];
        obj7.children = items;
        const tmp26 = timestampProducer(Card.Card, obj7);
        cResult[15] = tmp10;
        cResult[16] = tmp4.card;
        cResult[17] = tmp11;
        cResult[18] = tmp20;
        cResult[19] = tmp26;
        tmp24 = tmp26;
      }
    }
    const obj8 = { style: tmp4.body, children: null };
    const items1 = [tmp14, tmp17];
    obj8.children = items1;
    const tmp23 = timestampProducer(View, obj8);
    cResult[11] = tmp4.body;
    cResult[12] = tmp14;
    cResult[13] = tmp17;
    cResult[14] = tmp23;
    tmp20 = tmp23;
  }
  const fn = function b() {
    return onOpenChat(message);
  };
  cResult[2] = message;
  cResult[3] = onOpenChat;
  cResult[4] = fn;
  tmp10 = fn;
}) : (function ChatToast(message) {
  message = message.message;
  const onOpenChat = message.onOpenChat;
  const tmp = closure_7();
  const name = UserUtils.useName(message.author);
  const trimmed = message.content.replace(/\s+/g, " ").trim();
  if ("" !== trimmed) {
    const items = [message, onOpenChat];
    const obj2 = { style: tmp.opaque, children: null };
    const callback = noop.useCallback(() => onOpenChat(message), items);
    const obj3 = { variant: "primary", shadow: "high", border: "subtle", style: tmp.card, onPress: callback, children: null };
    const obj4 = { size: native.AvatarSizes.SMALL, user: message.author, guildId: "r" };
    const items1 = [hasOwnProperty(native.Avatar, obj4), ];
    const obj5 = { style: tmp.body, children: null };
    const obj6 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, children: name };
    const items2 = [hasOwnProperty(Text_Text.Text, obj6), ];
    const obj7 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: trimmed };
    items2[1] = hasOwnProperty(Text_Text.Text, obj7);
    obj5.children = items2;
    items1[1] = timestampProducer(View, obj5);
    obj3.children = items1;
    obj2.children = timestampProducer(Card.Card, obj3);
    return hasOwnProperty(View, obj2);
  } else if (message.stickerItems.length > 0) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.kHdYCW);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["6hGo0c"]);
  }
  const str2 = message.content.replace(/\s+/g, " ");
});
ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelChatToasts.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelChatToasts(onOpenChat) {
  const cResult = onOpenChat(576).c(8);
  onOpenChat = onOpenChat.onOpenChat;
  const tmp2 = closure_7();
  const arr = useConjureChatToastMessagesDefault(onOpenChat.channelId, true);
  let num = 0;
  if (0 === arr.length) {
    return null;
  } else {
    if (cResult[0] === arr) {
      if (cResult[1] === onOpenChat) {
        if (cResult[5] === tmp2.column) {
          if (cResult[6] === tmp3) {
            let tmp7 = cResult[7];
          }
          return tmp7;
        }
        const obj2 = { style: tmp12, pointerEvents: "box-none", accessibilityLiveRegion: "polite", children: cResult[2] };
        const tmp10 = closure_5(View, obj2);
        cResult[5] = tmp2.column;
        cResult[6] = cResult[2];
        cResult[7] = tmp10;
        tmp7 = tmp10;
      }
    }
    if (cResult[3] !== onOpenChat) {
      const fn = function b(message) {
        return hasOwnProperty(closure_8, { message, onOpenChat }, message.id);
      };
      cResult[3] = onOpenChat;
      cResult[4] = fn;
      let tmp4 = fn;
    } else {
      tmp4 = cResult[4];
    }
    const mapped = arr.map(tmp4);
    cResult[num] = arr;
    cResult[1] = onOpenChat;
    num = 2;
    cResult[2] = mapped;
  }
  const obj = onOpenChat(576);
}) : (function ConjureChannelChatToasts(onOpenChat) {
  onOpenChat = onOpenChat.onOpenChat;
  const arr = useConjureChatToastMessagesDefault(onOpenChat.channelId, true);
  let tmp2 = null;
  if (0 !== arr.length) {
    const obj = { style: tmp.column, pointerEvents: "box-none", accessibilityLiveRegion: "polite", children: arr.map((message) => hasOwnProperty(closure_8, { message, onOpenChat }, message.id)) };
    tmp2 = closure_5(View, obj);
  }
  return tmp2;
});