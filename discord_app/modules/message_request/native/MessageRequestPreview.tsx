// discord_app/modules/message_request/native/MessageRequestPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import TextStyles from "../../rebrand/native/TextStyles.tsx";

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ Fonts, AnalyticEvents: metroRequire, MessageFlags: closure_7 } = Constants);
const jsx = fn(21).jsx;
fn(4560);
let obj = { systemContent: null, messageContent: null };
obj = { fontStyle: "italic" };
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 12));
obj.lineHeight = 16;
obj.systemContent = obj;
const createStyles = {};
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 12));
createStyles.lineHeight = 16;
obj.messageContent = createStyles;
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestPreview.tsx");

export default noop.memo(function MessageRequestPreview(channel) {
  channel = channel.channel;
  const tmp = closure_9();
  let obj = channel(12594);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  const message = messageRequestPreview.message;
  ({ loaded, error } = messageRequestPreview);
  const items = [RelationshipStore];
  const items1 = [message];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(
    items,
    () => {
      let isBlockedForMessageResult = null != message;
      if (isBlockedForMessageResult) {
        isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(tmp);
      }
      const obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
      let isIgnoredForMessageResult = null != tmp;
      if (isIgnoredForMessageResult) {
        isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(tmp);
      }
      obj.isIgnored = isIgnoredForMessageResult;
      return obj;
    },
    items1,
  );
  const items2 = [channel, message];
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const effect = noop.useEffect(() => {
    if (null != message) {
      const obj = { is_spam: null, channel_id: null, other_user_id: null };
      ({ isSpam: obj2.is_spam, id: obj2.channel_id } = channel);
      obj.other_user_id = tmp.author.id;
      obj.track(constants.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    }
  }, items2);
  if (error) {
    const intl9 = tmp2(1114).intl;
    let stringResult = intl9.string(tmp2(1114).t.BZHld2);
    let flag = false;
  } else {
    stringResult = null;
    flag = false;
    if (loaded) {
      if (null != message) {
        if (isBlocked) {
          const intl8 = tmp2(1114).intl;
          stringResult = intl8.string(tmp2(1114).t["WPe+xL"]);
          flag = false;
        }
      }
      if (null != message) {
        if (isIgnored) {
          const intl7 = tmp2(1114).intl;
          stringResult = intl7.string(tmp2(1114).t.uxrh1O);
          flag = false;
        }
      }
      let content;
      if (message != null) {
        content = message.content;
      }
      if (null != content) {
        if ("" !== message.content) {
          const content1 = message(7888)(message, { noStyleAndInteraction: true, allowGameMentions: true }).content;
          const _Array = Array;
          if (!Array.isArray(content1)) {
            flag = true;
            stringResult = content1;
          }
          const intl6 = tmp2(1114).intl;
          stringResult = intl6.string(tmp2(1114).t["262oPB"]);
          flag = false;
        }
      }
      if (null != message) {
        if (tmp2Result.getMessageStickers(message).length > 0) {
          const intl5 = tmp2(1114).intl;
          let stringResult1 = intl5.string(tmp2(1114).t["zuI+by"]);
        } else if (null != message.interaction) {
          const intl4 = tmp2(1114).intl;
          stringResult1 = intl4.string(tmp2(1114).t["2v7kfl"]);
        } else {
          if (message.hasFlag(constants2.IS_VOICE_MESSAGE)) {
            const intl3 = tmp2(1114).intl;
            stringResult1 = intl3.string(tmp2(1114).t["6bhHrc"]);
          } else {
            const intl2 = tmp2(1114).intl;
            const string = intl2.string;
            const t = tmp2(1114).t;
            if (hasFlagResult) {
              stringResult1 = string(t.Xxm5i3);
            } else {
              stringResult1 = string(t.LoMGlg);
            }
            hasFlagResult = message.hasFlag(tmp15.IS_COMPONENTS_V2);
          }
          tmp15 = constants2;
        }
        stringResult = stringResult1;
        flag = false;
        tmp2Result = tmp2(4899);
      } else {
        const intl = tmp2(1114).intl;
        stringResult = intl.string(tmp2(1114).t["0KfDxM"]);
        flag = false;
      }
    }
  }
  obj = {
    style: channel.style,
    children: jsx(channel(1178).LegacyText, {
      style: flag ? tmp.messageContent : tmp.systemContent,
      numberOfLines: 3,
      ellipsizeMode: "tail",
      children: stringResult,
    }),
  };
  return (
    <View style={arg0.style}>
      {jsx(channel(1178).LegacyText, {
        style: flag ? tmp.messageContent : tmp.systemContent,
        numberOfLines: 3,
        ellipsizeMode: "tail",
        children: stringResult,
      })}
    </View>
  );
});
