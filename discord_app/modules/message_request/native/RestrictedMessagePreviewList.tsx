// === Module 16717: RestrictedMessagePreviewList ===

// Module 16717 (RestrictedMessagePreviewList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import DateUtils from "DateUtils" /* 4512 */;
import Text_Text from "Text/Text" /* 4832 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5395 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import RestrictedBlockedMessageGroupDefault from "RestrictedBlockedMessageGroup" /* 16720 */;
import noop from "module_19" /* 19 */;
import MessageStore from "MessageStore" /* 5056 */;

const require = globalThis.__r;

require = fn;
function HiddenMedia(length) {
  const tmp = closure_10();
  _require = tmp;
  let obj = { children: null };
  let items = [
    Array.from({ length: length.count }, (arg0, arg1) => {
      const obj = { style: mediaPlaceholderCard.mediaPlaceholderCard, children: null };
      const items = [timestampProducer(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "text-muted" }), ];
      const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.B2xSxL);
      items[1] = timestampProducer(Text_Text.Text, obj2);
      obj.children = items;
      return React5(View, obj, arg1);
    }),

  ];
  let obj2 = { style: tmp.mediaHiddenRow, children: null };
  const items1 = [closure_6(require("CircleInformationIcon").CircleInformationIcon, { size: "sm", color: "text-muted" }), ];
  const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
  let intl = require("util").intl;
  obj3.children = intl.string(require("util").t["VGf+K3"]);
  items1[1] = closure_6(require("Text/Text").Text, obj3);
  obj2.children = items1;
  items[1] = closure_7(View, obj2);
  obj.children = items;
  return closure_7(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let closure_9 = { renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: false, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false, restrictedPreview: true };
const createStyles = fn(4836);
let obj2 = { container: { flexDirection: "column" }, hiddenMedia: { marginLeft: fn(16718).RESTRICTED_CONTENT_INSET }, messageRow: { position: "relative" }, avatarHitbox: null, dateDivider: null, dividerLine: null, mediaPlaceholderCard: null, mediaHiddenRow: null };
let size = { position: "absolute", top: 0, left: 0, width: fn(16718).RESTRICTED_CONTENT_INSET, height: fn(16718).RESTRICTED_AVATAR_SIZE };
obj2.avatarHitbox = size;
let obj3 = { marginLeft: fn(16718).RESTRICTED_CONTENT_INSET };
obj2.dateDivider = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_12 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_12 };
obj2.dividerLine = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.mediaPlaceholderCard = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, height: 160, marginTop: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj6 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, height: 160, marginTop: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.mediaHiddenRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
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
  let items = [renderMessage];
  let items1 = [channelId];
  const items2 = [channelId, analyticsLocations];
  const stateFromStoresArray = channelId(analyticsLocations[13]).useStateFromStoresArray(items, () => {
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
    const obj = { style: closure_1.messageRow, children: null };
    const items = [arr5(closure_1(analyticsLocations[17]), { pointerEvents: "none", message, rowGenerator: memo }), ];
    const obj3 = { style: closure_1.avatarHitbox, accessibilityRole: "button", accessibilityLabel: null, onPress: null };
    const intl = channelId(analyticsLocations[9]).intl;
    obj3.accessibilityLabel = intl.string(channelId(analyticsLocations[9]).t.iXAna6);
    obj3.onPress = function onPress() {
      return callback(message.author.id);
    };
    items[1] = arr5(channelId(analyticsLocations[18]).PressableOpacity, obj3);
    obj.children = items;
    const children = [closure_1_7(memo, obj), ];
    let tmp6Result = tmp > 0;
    if (tmp6Result) {
      const obj4 = { style: closure_1.hiddenMedia, children: null };
      const obj5 = { count: tmp };
      obj4.children = arr5(HiddenMedia, obj5);
      tmp6Result = arr5(memo, obj4);
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
        let obj3 = { type: "blocked", messages: null };
        let items1 = [tmp2];
        obj3.messages = items1;
        let arr2 = items.push(obj3);
      } else {
        let obj = { type: "message", message: null };
        obj.message = tmp2;
        let arr3 = items.push(obj);
      }
      continue;
    }
    return items;
  })(stateFromStoresArray);
  let obj = channelId(analyticsLocations[13]);
  return arr5(memo, {
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
          tmp6Result = !DateUtils.isSameDay(null.timestamp, message.timestamp);
        }
        if (tmp6Result) {
          const obj2 = { style: closure_1.dateDivider, children: null };
          const obj3 = { style: closure_1.dividerLine };
          const items = [timestampProducer(View, obj3), , ];
          const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: DateUtils.dateFormat(message.timestamp, "LL") };
          items[1] = timestampProducer(Text_Text.Text, obj4);
          const obj6 = { style: closure_1.dividerLine };
          items[2] = timestampProducer(View, obj6);
          obj2.children = items;
          tmp6Result = React5(View, obj2);
        }
        const items1 = [tmp6Result, ];
        if ("message" === type.type) {
          let tmp18 = renderMessage(type.message);
        } else {
          const obj7 = { messages: type.messages, renderMessage };
          tmp18 = timestampProducer(RestrictedBlockedMessageGroupDefault, obj7);
        }
        const obj8 = { children: null };
        items1[1] = tmp18;
        obj8.children = items1;
        if ("message" === type.type) {
          let id = type.message.id;
        } else {
          const _HermesInternal = HermesInternal;
          id = "blocked-" + message.id;
        }
        return React5(View, obj8, id);
      } else if ("message" === tmp.type) {
        let message2 = tmp.message;
      } else {
        message2 = tmp.messages[tmp.messages.length - 1];
      }
    })
  });
};