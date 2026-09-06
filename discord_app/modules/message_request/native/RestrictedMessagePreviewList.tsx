// === Module 16898: RestrictedMessagePreviewList ===

// Module 16898 (RestrictedMessagePreviewList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import DateUtils from "DateUtils" /* 4242 */;
import Text_Text from "Text/Text" /* 4556 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5081 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import RestrictedBlockedMessageGroupDefault from "RestrictedBlockedMessageGroup" /* 16901 */;
import noop from "module_19" /* 19 */;
import MessageStore from "MessageStore" /* 4781 */;

require = fn;
function HiddenMedia(length) {
  const tmp = closure_10();
  _require = tmp;
  let obj = { children: null };
  let items = [
    Array.from({ length: length.count }, (arg0, arg1) => {
      let obj = { style: mediaPlaceholderCard.mediaPlaceholderCard, children: null };
      const items = [timestampProducer(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "text-muted" }), ];
      obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.B2xSxL);
      items[1] = timestampProducer(Text_Text.Text, obj);
      obj.children = items;
      return React5(View, obj, arg1);
    }),

  ];
  obj = { style: tmp.mediaHiddenRow, children: null };
  const items1 = [closure_6(require("CircleInformationIcon").CircleInformationIcon, { size: "sm", color: "text-muted" }), ];
  obj = { variant: "text-sm/normal", color: "text-muted", children: null };
  let intl = require("util").intl;
  obj.children = intl.string(require("util").t["VGf+K3"]);
  items1[1] = closure_6(require("Text/Text").Text, obj);
  obj.children = items1;
  items[1] = closure_7(View, obj);
  obj.children = items;
  return closure_7(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let closure_9 = { renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: false, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false, restrictedPreview: true };
fn(4560);
let createStyles = { container: { flexDirection: "column" }, hiddenMedia: null, messageRow: null, avatarHitbox: null, dateDivider: null, dividerLine: null, mediaPlaceholderCard: null, mediaHiddenRow: null };
createStyles = { marginLeft: fn(16899).RESTRICTED_CONTENT_INSET };
createStyles.hiddenMedia = createStyles;
createStyles.messageRow = { position: "relative" };
let size = { position: "absolute", top: 0, left: 0, width: fn(16899).RESTRICTED_CONTENT_INSET, height: fn(16899).RESTRICTED_AVATAR_SIZE };
createStyles.avatarHitbox = size;
createStyles.dateDivider = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_12 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_12 };
createStyles.dividerLine = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj2 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.mediaPlaceholderCard = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, height: 160, marginTop: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj3 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, height: 160, marginTop: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.mediaHiddenRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewList.tsx");

export default function RestrictedMessagePreviewList(channelId) {
  channelId = channelId.channelId;
  let analyticsLocations;
  let callback;
  let renderMessage;
  let tmp = closure_10();
  importDefault = tmp;
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let obj = channelId(analyticsLocations[13]);
  let items = [renderMessage];
  let items1 = [channelId];
  const items2 = [channelId, analyticsLocations];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const messages = MessageStore.getMessages(channelId);
    return messages.toArray();
  }, items1);
  callback = callback.useCallback((userId) => {
    showUserProfileActionSheetDefault({ userId, channelId, sourceAnalyticsLocations: analyticsLocations });
  }, items2);
  const memo = callback.useMemo(() => {
    const obj = new closure_1(analyticsLocations[15])();
    obj.setOptions(closure_1_9);
    return obj;
  }, []);
  const items3 = [tmp, memo, callback];
  renderMessage = callback.useCallback((message) => {
    const tmp = closure_1(analyticsLocations[16])(message);
    let obj = { style: closure_1.messageRow, children: null };
    obj = { pointerEvents: "none", message, rowGenerator: memo };
    const items = [arr5(closure_1(analyticsLocations[17]), obj), ];
    obj = { style: closure_1.avatarHitbox, accessibilityRole: "button", accessibilityLabel: null, onPress: null };
    const intl = channelId(analyticsLocations[9]).intl;
    obj.accessibilityLabel = intl.string(channelId(analyticsLocations[9]).t.iXAna6);
    obj.onPress = function onPress() {
      return callback(message.author.id);
    };
    items[1] = arr5(channelId(analyticsLocations[18]).PressableOpacity, obj);
    obj.children = items;
    const children = [closure_1_7(memo, obj), ];
    let tmp6Result = tmp > 0;
    if (tmp6Result) {
      const obj1 = { style: closure_1.hiddenMedia, children: null };
      const obj2 = { count: tmp };
      obj1.children = tmp6(HiddenMedia, obj2);
      tmp6Result = tmp6(memo, obj1);
    }
    children[1] = tmp6Result;
    return closure_1_7(closure_1_8, { children });
  }, items3);
  const arr5 = (function groupMessages(stateFromStoresArray) {
    const items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.blocked) {
        let tmp5 = items[items.length - 1];
        let tmp7 = null;
        if (null != tmp5) {
          tmp7 = null;
          if ("blocked" === tmp6.type) {
            tmp7 = tmp5;
          }
        }
        let tmp9 = tmp7;
        if (null != tmp7) {
          let obj2 = channelId(analyticsLocations[11]);
          if (obj2.isSameDay(tmp9.messages[tmp9.messages.length - 1].timestamp, tmp2.timestamp)) {
            let messages = tmp9.messages;
            let arr = messages.push(tmp2);
          }
        }
        let obj = { type: "blocked", messages: null };
        let items1 = [tmp2];
        obj.messages = items1;
        arr = items.push(obj);
      } else {
        obj = { type: "message", message: null };
        obj.message = tmp2;
        let arr1 = items.push(obj);
      }
      continue;
    }
    return items;
  })(stateFromStoresArray);
  obj = {
    style: tmp.container,
    children: arr5.map((type, index) => {
      if ("message" === type.type) {
        let message = type.message;
      } else {
        message = type.messages[0];
      }
      if (null == arr5[index - 1]) {
        let tmp6Result = null == null;
        if (!tmp6Result) {
          let obj = DateUtils;
          tmp6Result = !obj.isSameDay(null.timestamp, message.timestamp);
        }
        if (tmp6Result) {
          obj = { style: closure_1.dateDivider, children: null };
          obj = { style: closure_1.dividerLine };
          const items = [timestampProducer(tmp7, obj), , ];
          const obj1 = { variant: "text-xs/semibold", color: "text-muted", children: null };
          let obj4 = DateUtils;
          obj1.children = obj4.dateFormat(message.timestamp, "LL");
          items[1] = timestampProducer(Text_Text.Text, obj1);
          const obj2 = { style: closure_1.dividerLine };
          items[2] = timestampProducer(tmp7, obj2);
          obj.children = items;
          tmp6Result = tmp6(tmp7, obj);
        }
        const items1 = [tmp6Result, ];
        if ("message" === type.type) {
          let tmp18 = renderMessage(type.message);
        } else {
          const obj3 = { messages: type.messages, renderMessage };
          tmp18 = timestampProducer(RestrictedBlockedMessageGroupDefault, obj3);
        }
        obj4 = { children: null };
        items1[1] = tmp18;
        obj4.children = items1;
        if ("message" === type.type) {
          let id = type.message.id;
        } else {
          const _HermesInternal = HermesInternal;
          id = "blocked-" + message.id;
        }
        return React5(View, obj4, id);
      } else if ("message" === tmp.type) {
        let message2 = tmp.message;
      } else {
        message2 = tmp.messages[tmp.messages.length - 1];
      }
    })
  };
  return arr5(memo, obj);
};