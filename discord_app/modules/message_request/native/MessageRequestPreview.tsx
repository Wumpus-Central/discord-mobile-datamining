// === Module 16422: ? ===

// Module 16422
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "markAllUserIdListsStale" /* 4100 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importDefaultResult from "createTextStyle" /* 5429 */;

const require = arg1;
let c3 = importAllResult;
({ Fonts, AnalyticEvents: closure_6, MessageFlags: error } = ME);
let obj = { systemContent: null, messageContent: null };
obj = { fontStyle: "italic" };
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_DEFAULT, 12));
obj.lineHeight = 16;
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_DEFAULT, 12));
createCacheKey.lineHeight = 16;
obj[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
const importDefaultResult1 = importDefaultResult;
const memoResult = importAllResult.memo(function MessageRequestPreview(channel) {
  channel = channel.channel;
  let message;
  const tmp = callback();
  let obj = channel(12125);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  message = messageRequestPreview.message;
  ({ loaded, error } = messageRequestPreview);
  const items = [closure_5];
  const items1 = [message];
  const stateFromStoresObject = channel(589).useStateFromStoresObject(items, () => {
    let isBlockedForMessageResult = null != message;
    if (isBlockedForMessageResult) {
      isBlockedForMessageResult = closure_1_5.isBlockedForMessage(tmp);
    }
    const obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
    let isIgnoredForMessageResult = null != tmp;
    if (isIgnoredForMessageResult) {
      isIgnoredForMessageResult = closure_1_5.isIgnoredForMessage(tmp);
    }
    obj[1] = isIgnoredForMessageResult;
    return obj;
  }, items1);
  const items2 = [channel, message];
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const effect = importAllResult.useEffect(() => {
    if (null != message) {
      let obj = message(closure_1_2[10]);
      obj = { is_spam: null, channel_id: null, other_user_id: null };
      ({ isSpam: obj2[0], id: obj2[1] } = channel);
      obj[2] = tmp.author.id;
      obj.track(closure_1_6.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    }
  }, items2);
  if (error) {
    const intl9 = tmp2(1236).intl;
    let stringResult = intl9.string(tmp2(1236).t.BZHld2);
    let flag = false;
  } else {
    stringResult = null;
    flag = false;
    if (loaded) {
      if (null != message) {
        if (isBlocked) {
          const intl8 = tmp2(1236).intl;
          stringResult = intl8.string(tmp2(1236).t["WPe+xL"]);
          flag = false;
        }
      }
      if (null != message) {
        if (isIgnored) {
          const intl7 = tmp2(1236).intl;
          stringResult = intl7.string(tmp2(1236).t.uxrh1O);
          flag = false;
        }
      }
      let content;
      if (message != null) {
        content = message.content;
      }
      if (null != content) {
        if ("" !== message.content) {
          const content1 = message(7599)(message, { noStyleAndInteraction: true, allowGameMentions: true }).content;
          const _Array = Array;
          if (!Array.isArray(content1)) {
            flag = true;
            stringResult = content1;
          }
          const intl6 = tmp2(1236).intl;
          stringResult = intl6.string(tmp2(1236).t["262oPB"]);
          flag = false;
        }
      }
      if (null != message) {
        if (tmp2Result.getMessageStickers(message).length > 0) {
          const intl5 = tmp2(1236).intl;
          let stringResult1 = intl5.string(tmp2(1236).t["zuI+by"]);
        } else if (null != message.interaction) {
          const intl4 = tmp2(1236).intl;
          stringResult1 = intl4.string(tmp2(1236).t["2v7kfl"]);
        } else {
          if (message.hasFlag(constants.IS_VOICE_MESSAGE)) {
            const intl3 = tmp2(1236).intl;
            stringResult1 = intl3.string(tmp2(1236).t["6bhHrc"]);
          } else {
            const intl2 = tmp2(1236).intl;
            const string = intl2.string;
            const t = tmp2(1236).t;
            if (hasFlagResult) {
              stringResult1 = string(t.Xxm5i3);
            } else {
              stringResult1 = string(t.LoMGlg);
            }
            hasFlagResult = message.hasFlag(tmp15.IS_COMPONENTS_V2);
          }
          tmp15 = constants;
        }
        stringResult = stringResult1;
        flag = false;
        tmp2Result = tmp2(4820);
      } else {
        const intl = tmp2(1236).intl;
        stringResult = intl.string(tmp2(1236).t["0KfDxM"]);
        flag = false;
      }
    }
  }
  obj = { style: channel.style, children: jsx(tmp2(1297).LegacyText, { style: tmp14, numberOfLines: 3, ellipsizeMode: "tail", children: stringResult }) };
  return <View style={arg0.style}>{jsx(tmp2(1297).LegacyText, { style: tmp14, numberOfLines: 3, ellipsizeMode: "tail", children: stringResult })}</View>;
});
const result = require("set").fileFinishedImporting("modules/message_request/native/MessageRequestPreview.tsx");

export default memoResult;