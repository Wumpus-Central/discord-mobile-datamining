// discord_app/modules/message_request/native/RestrictedMessagePreviewList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ImageWarningIcon from "../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import RestrictedBlockedMessageGroupDefault from "RestrictedBlockedMessageGroup.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import MessageStore from "../../../stores/MessageStore.tsx";

const require = globalThis.__r;

require = fn;
function groupMessages(stateFromStoresArray) {
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
        let obj2 = DateUtils;
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
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let closure_9 = {
  renderEmbeds: false,
  renderReactions: false,
  inlineEmbedMedia: false,
  inlineAttachmentMedia: false,
  animateEmoji: false,
  gifAutoPlay: false,
  timestampHourCycle: 0,
  renderCodedLinks: false,
  renderGiftCode: false,
  renderActivityInstanceEmbed: false,
  renderActivityInviteEmbed: false,
  renderComponents: false,
  renderThreadEmbeds: false,
  renderReplies: false,
  renderCommunicationDisabled: false,
  renderAttachments: false,
  renderExecutedCommands: false,
  renderPolls: false,
  renderSharedClientTheme: false,
  renderForumPostActions: false,
  ignoreMentioned: false,
  ignoreEmbedDescriptionCache: false,
  forceHideSimpleEmbedContent: false,
  enableSwipeActions: false,
  useAlternateEmbedColors: false,
  restrictedPreview: true,
};
const createStyles = fn(4890);
let obj2 = {
  container: { flexDirection: "column" },
  hiddenMedia: { marginLeft: fn(17055).RESTRICTED_CONTENT_INSET },
  messageRow: { position: "relative" },
  avatarHitbox: null,
  dateDivider: null,
  dividerLine: null,
  mediaPlaceholderCard: null,
  mediaHiddenRow: null,
};
let size = {
  position: "absolute",
  top: 0,
  left: 0,
  width: fn(17055).RESTRICTED_CONTENT_INSET,
  height: fn(17055).RESTRICTED_AVATAR_SIZE,
};
obj2.avatarHitbox = size;
let obj3 = { marginLeft: fn(17055).RESTRICTED_CONTENT_INSET };
obj2.dateDivider = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginVertical: nativeDefault.space.PX_12,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginVertical: nativeDefault.space.PX_12,
};
obj2.dividerLine = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.mediaPlaceholderCard = {
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  height: 160,
  marginTop: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let obj6 = {
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  height: 160,
  marginTop: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.mediaHiddenRow = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_4,
};
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (count) => {
      const cResult = require("c").c(12);
      let mediaPlaceholderCard = count.count;
      const tmp4 = closure_10();
      _require = tmp4;
      if (cResult[0] === mediaPlaceholderCard) {
        if (cResult[1] === tmp4.mediaPlaceholderCard) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp11 = closure_6(tmp(4812).CircleInformationIcon, { size: "sm", color: "text-muted" });
            cResult[5] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[5];
          }
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { variant: "text-sm/normal", color: "text-muted", children: null };
            let intl = tmp(1126).intl;
            obj2.children = intl.string(tmp(1126).t["VGf+K3"]);
            const tmp14 = closure_6(tmp(4886).Text, obj2);
            cResult[6] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] !== tmp4.mediaHiddenRow) {
            const obj3 = { style: tmp4.mediaHiddenRow, children: null };
            let items = [tmp9, tmp12];
            obj3.children = items;
            const tmp18 = closure_7(View, obj3);
            cResult[7] = tmp4.mediaHiddenRow;
            cResult[8] = tmp18;
            let tmp15 = tmp18;
          } else {
            tmp15 = cResult[8];
          }
          if (cResult[9] === cResult[2]) {
            if (cResult[10] === tmp15) {
              let tmp19 = cResult[11];
            }
            return tmp19;
          }
          const obj4 = { children: null };
          const items1 = [cResult[2], tmp15];
          obj4.children = items1;
          const tmp22 = closure_7(View, obj4);
          cResult[9] = cResult[2];
          cResult[10] = tmp15;
          cResult[11] = tmp22;
          tmp19 = tmp22;
        }
      }
      if (cResult[3] !== tmp4.mediaPlaceholderCard) {
        const fn = function o(arg0, arg1) {
          const obj = { style: mediaPlaceholderCard.mediaPlaceholderCard, children: null };
          const items = [timestampProducer(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "text-muted" })];
          const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
          const intl = util.intl;
          obj2.children = intl.string(util.t.B2xSxL);
          items[1] = timestampProducer(Text_Text.Text, obj2);
          obj.children = items;
          return React5(View, obj, arg1);
        };
        cResult[3] = tmp4.mediaPlaceholderCard;
        cResult[4] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[4];
      }
      let obj = require("c");
      cResult[0] = mediaPlaceholderCard;
      mediaPlaceholderCard = tmp4.mediaPlaceholderCard;
      cResult[1] = mediaPlaceholderCard;
      cResult[2] = Array.from({ length: mediaPlaceholderCard }, tmp6);
      const arr = Array.from({ length: mediaPlaceholderCard }, tmp6);
    }
  : (length) => {
      const tmp = closure_10();
      _require = tmp;
      let obj = { children: null };
      let items = [
        Array.from({ length: length.count }, (arg0, arg1) => {
          const obj = { style: mediaPlaceholderCard.mediaPlaceholderCard, children: null };
          const items = [timestampProducer(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "text-muted" })];
          const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
          const intl = util.intl;
          obj2.children = intl.string(util.t.B2xSxL);
          items[1] = timestampProducer(Text_Text.Text, obj2);
          obj.children = items;
          return React5(View, obj, arg1);
        }),
      ];
      let obj2 = { style: tmp.mediaHiddenRow, children: null };
      const items1 = [
        closure_6(require("CircleInformationIcon").CircleInformationIcon, { size: "sm", color: "text-muted" }),
      ];
      const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
      let intl = require("util").intl;
      obj3.children = intl.string(require("util").t["VGf+K3"]);
      items1[1] = closure_6(require("Text/Text").Text, obj3);
      obj2.children = items1;
      items[1] = closure_7(View, obj2);
      obj.children = items;
      return closure_7(View, obj);
    };
ReactCompilerGating = fn(558);
let obj7 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_4,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(analyticsLocations[8]).c(25);
      channelId = channelId.channelId;
      const tmp4 = closure_10();
      importDefault = tmp4;
      analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [renderMessage];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function v() {
          const messages = MessageStore.getMessages(channelId);
          return messages.toArray();
        };
        let items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      let obj = channelId(analyticsLocations[8]);
      const tmp5 = importDefault;
      const stateFromStoresArray = channelId(analyticsLocations[15]).useStateFromStoresArray(first, tmp8, tmp9);
      if (cResult[4] === analyticsLocations) {
        if (cResult[5] === channelId) {
          let tmp11 = cResult[6];
        }
        closure_3 = tmp11;
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = new tmp5(tmp2[17])();
          obj3.setOptions(closure_9);
          class M {
            constructor(arg0) {
              closure_0 = channelId;
              tmp = closure_1(analyticsLocations[18])(channelId);
              obj = { style: closure_1.messageRow, children: null };
              tmp6 = closure_6;
              tmp2 = closure_1_7;
              tmp3 = closure_1_8;
              tmp4 = closure_4;
              tmp5 = closure_1;
              obj1 = { pointerEvents: "none", message: channelId, rowGenerator: closure_4 };
              items = [,];
              items[0] = closure_6(closure_1(analyticsLocations[19]), obj1);
              obj6 = {
                style: closure_1.avatarHitbox,
                accessibilityRole: "button",
                accessibilityLabel: null,
                onPress: null,
              };
              intl = channelId(analyticsLocations[11]).intl;
              obj6.accessibilityLabel = intl.string(channelId(analyticsLocations[11]).t.iXAna6);
              obj6.onPress = function onPress() {
                return closure_3(message.author.id);
              };
              items[1] = closure_6(channelId(analyticsLocations[20]).PressableOpacity, obj6);
              obj.children = items;
              items1 = [,];
              items1[0] = closure_1_7(closure_4, obj);
              tmp6Result = tmp > 0;
              if (tmp6Result) {
                obj7 = { style: null, children: null };
                obj7.style = tmp5.hiddenMedia;
                tmp8 = closure_1_11;
                obj8 = { count: null };
                obj8.count = tmp;
                obj7.children = tmp6(closure_1_11, obj8);
                tmp6Result = tmp6(tmp4, obj7);
              }
              items1[1] = tmp6Result;
              return tmp2(tmp3, { children: items1 });
            }
          }
          let tmp12 = obj3;
        } else {
          tmp12 = cResult[7];
        }
        rowGenerator = tmp12;
        if (cResult[8] === tmp11) {
          if (cResult[9] === tmp4.avatarHitbox) {
            if (cResult[10] === tmp4.hiddenMedia) {
              if (cResult[11] === tmp4.messageRow) {
                let tmp18 = cResult[12];
              }
              renderMessage = tmp18;
              if (cResult[13] === stateFromStoresArray) {
                if (cResult[14] === tmp18) {
                  if (cResult[15] === tmp4.container) {
                    if (cResult[16] === tmp4.dateDivider) {
                      if (cResult[17] === tmp4.dividerLine) {
                        let tmp19 = cResult[18];
                        let tmp20 = cResult[19];
                        let tmp21 = cResult[20];
                      }
                      if (cResult[21] === tmp19) {
                        if (cResult[22] === tmp20) {
                          if (cResult[23] === tmp21) {
                            let tmp24 = cResult[24];
                          }
                          return tmp24;
                        }
                      }
                      let obj2 = { style: tmp20, children: tmp21 };
                      const tmp26 = arr3(tmp19, obj2);
                      class M {
                        constructor(arg0) {
                          closure_0 = channelId;
                          tmp = closure_1(analyticsLocations[18])(channelId);
                          obj = { style: closure_1.messageRow, children: null };
                          tmp6 = closure_6;
                          tmp2 = closure_1_7;
                          tmp3 = closure_1_8;
                          tmp4 = closure_4;
                          tmp5 = closure_1;
                          obj1 = { pointerEvents: "none", message: channelId, rowGenerator: closure_4 };
                          items = [,];
                          items[0] = closure_6(closure_1(analyticsLocations[19]), obj1);
                          obj6 = {
                            style: closure_1.avatarHitbox,
                            accessibilityRole: "button",
                            accessibilityLabel: null,
                            onPress: null,
                          };
                          intl = channelId(analyticsLocations[11]).intl;
                          obj6.accessibilityLabel = intl.string(channelId(analyticsLocations[11]).t.iXAna6);
                          obj6.onPress = function onPress() {
                            return closure_3(message.author.id);
                          };
                          items[1] = closure_6(channelId(analyticsLocations[20]).PressableOpacity, obj6);
                          obj.children = items;
                          items1 = [,];
                          items1[0] = closure_1_7(closure_4, obj);
                          tmp6Result = tmp > 0;
                          if (tmp6Result) {
                            obj7 = { style: null, children: null };
                            obj7.style = tmp5.hiddenMedia;
                            tmp8 = closure_1_11;
                            obj8 = { count: null };
                            obj8.count = tmp;
                            obj7.children = tmp6(closure_1_11, obj8);
                            tmp6Result = tmp6(tmp4, obj7);
                          }
                          items1[1] = tmp6Result;
                          return tmp2(tmp3, { children: items1 });
                        }
                      }
                      cResult[21] = tmp19;
                      cResult[22] = tmp20;
                      cResult[23] = tmp21;
                      cResult[24] = tmp26;
                      tmp24 = tmp26;
                    }
                  }
                }
              }
              arr3 = groupMessages(stateFromStoresArray);
              class M {
                constructor(arg0) {
                  closure_0 = channelId;
                  tmp = closure_1(analyticsLocations[18])(channelId);
                  obj = { style: closure_1.messageRow, children: null };
                  tmp6 = closure_6;
                  tmp2 = closure_1_7;
                  tmp3 = closure_1_8;
                  tmp4 = closure_4;
                  tmp5 = closure_1;
                  obj1 = { pointerEvents: "none", message: channelId, rowGenerator: closure_4 };
                  items = [,];
                  items[0] = closure_6(closure_1(analyticsLocations[19]), obj1);
                  obj6 = {
                    style: closure_1.avatarHitbox,
                    accessibilityRole: "button",
                    accessibilityLabel: null,
                    onPress: null,
                  };
                  intl = channelId(analyticsLocations[11]).intl;
                  obj6.accessibilityLabel = intl.string(channelId(analyticsLocations[11]).t.iXAna6);
                  obj6.onPress = function onPress() {
                    return closure_3(message.author.id);
                  };
                  items[1] = closure_6(channelId(analyticsLocations[20]).PressableOpacity, obj6);
                  obj.children = items;
                  items1 = [,];
                  items1[0] = closure_1_7(closure_4, obj);
                  tmp6Result = tmp > 0;
                  if (tmp6Result) {
                    obj7 = { style: null, children: null };
                    obj7.style = tmp5.hiddenMedia;
                    tmp8 = closure_1_11;
                    obj8 = { count: null };
                    obj8.count = tmp;
                    obj7.children = tmp6(closure_1_11, obj8);
                    tmp6Result = tmp6(tmp4, obj7);
                  }
                  items1[1] = tmp6Result;
                  return tmp2(tmp3, { children: items1 });
                }
              }
              const container = tmp4.container;
              const mapped = arr3.map((type, index) => {
                if ("message" === type.type) {
                  let message = type.message;
                } else {
                  message = type.messages[0];
                }
                if (null == arr3[index - 1]) {
                  let tmp6Result = null == null;
                  if (!tmp6Result) {
                    tmp6Result = !DateUtils.isSameDay(null.timestamp, message.timestamp);
                  }
                  if (tmp6Result) {
                    const obj2 = { style: closure_1.dateDivider, children: null };
                    const obj3 = { style: closure_1.dividerLine };
                    const items = [timestampProducer(View, obj3), ,];
                    const obj4 = {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: DateUtils.dateFormat(message.timestamp, "LL"),
                    };
                    items[1] = timestampProducer(Text_Text.Text, obj4);
                    const obj6 = { style: closure_1.dividerLine };
                    items[2] = timestampProducer(View, obj6);
                    obj2.children = items;
                    tmp6Result = React5(View, obj2);
                  }
                  const items1 = [tmp6Result];
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
              });
              cResult[13] = stateFromStoresArray;
              cResult[14] = tmp18;
              cResult[15] = tmp4.container;
              cResult[16] = tmp4.dateDivider;
              cResult[17] = tmp4.dividerLine;
              cResult[18] = rowGenerator;
              cResult[19] = container;
              cResult[20] = mapped;
              tmp21 = mapped;
              tmp20 = container;
              tmp19 = rowGenerator;
            }
          }
        }
        class M {
          constructor(arg0) {
            closure_0 = channelId;
            tmp = closure_1(analyticsLocations[18])(channelId);
            obj = { style: closure_1.messageRow, children: null };
            tmp6 = closure_6;
            tmp2 = closure_1_7;
            tmp3 = closure_1_8;
            tmp4 = closure_4;
            tmp5 = closure_1;
            obj1 = { pointerEvents: "none", message: channelId, rowGenerator: closure_4 };
            items = [,];
            items[0] = closure_6(closure_1(analyticsLocations[19]), obj1);
            obj6 = {
              style: closure_1.avatarHitbox,
              accessibilityRole: "button",
              accessibilityLabel: null,
              onPress: null,
            };
            intl = channelId(analyticsLocations[11]).intl;
            obj6.accessibilityLabel = intl.string(channelId(analyticsLocations[11]).t.iXAna6);
            obj6.onPress = function onPress() {
              return closure_3(message.author.id);
            };
            items[1] = closure_6(channelId(analyticsLocations[20]).PressableOpacity, obj6);
            obj.children = items;
            items1 = [,];
            items1[0] = closure_1_7(closure_4, obj);
            tmp6Result = tmp > 0;
            if (tmp6Result) {
              obj7 = { style: null, children: null };
              obj7.style = tmp5.hiddenMedia;
              tmp8 = closure_1_11;
              obj8 = { count: null };
              obj8.count = tmp;
              obj7.children = tmp6(closure_1_11, obj8);
              tmp6Result = tmp6(tmp4, obj7);
            }
            items1[1] = tmp6Result;
            return tmp2(tmp3, { children: items1 });
          }
        }
        cResult[8] = tmp11;
        cResult[9] = tmp4.avatarHitbox;
        cResult[10] = tmp4.hiddenMedia;
        cResult[11] = tmp4.messageRow;
        cResult[12] = M;
        tmp18 = M;
      }
      const fn2 = function _(userId) {
        showUserProfileActionSheetDefault({ userId, channelId, sourceAnalyticsLocations: analyticsLocations });
      };
      cResult[4] = analyticsLocations;
      cResult[5] = channelId;
      cResult[6] = fn2;
      tmp11 = fn2;
      const tmpResult = channelId(analyticsLocations[15]);
    }
  : (channelId) => {
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
      const stateFromStoresArray = channelId(analyticsLocations[15]).useStateFromStoresArray(
        items,
        () => {
          const messages = MessageStore.getMessages(channelId);
          return messages.toArray();
        },
        items1,
      );
      callback = callback.useCallback((userId) => {
        showUserProfileActionSheetDefault({ userId, channelId, sourceAnalyticsLocations: analyticsLocations });
      }, items2);
      const memo = callback.useMemo(() => {
        const obj = new closure_1(analyticsLocations[17])();
        obj.setOptions(closure_1_9);
        return obj;
      }, []);
      const items3 = [tmp, memo, callback];
      renderMessage = callback.useCallback((message) => {
        const tmp = closure_1(analyticsLocations[18])(message);
        const obj = { style: closure_1.messageRow, children: null };
        const items = [arr5(closure_1(analyticsLocations[19]), { pointerEvents: "none", message, rowGenerator: memo })];
        const obj3 = {
          style: closure_1.avatarHitbox,
          accessibilityRole: "button",
          accessibilityLabel: null,
          onPress: null,
        };
        const intl = channelId(analyticsLocations[11]).intl;
        obj3.accessibilityLabel = intl.string(channelId(analyticsLocations[11]).t.iXAna6);
        obj3.onPress = function onPress() {
          return callback(message.author.id);
        };
        items[1] = arr5(channelId(analyticsLocations[20]).PressableOpacity, obj3);
        obj.children = items;
        const children = [closure_1_7(memo, obj)];
        let tmp6Result = tmp > 0;
        if (tmp6Result) {
          const obj4 = { style: closure_1.hiddenMedia, children: null };
          const obj5 = { count: tmp };
          obj4.children = arr5(closure_1_11, obj5);
          tmp6Result = arr5(memo, obj4);
        }
        children[1] = tmp6Result;
        return closure_1_7(closure_1_8, { children });
      }, items3);
      const arr5 = groupMessages(stateFromStoresArray);
      let obj = channelId(analyticsLocations[15]);
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
              const items = [timestampProducer(View, obj3), ,];
              const obj4 = {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: DateUtils.dateFormat(message.timestamp, "LL"),
              };
              items[1] = timestampProducer(Text_Text.Text, obj4);
              const obj6 = { style: closure_1.dividerLine };
              items[2] = timestampProducer(View, obj6);
              obj2.children = items;
              tmp6Result = React5(View, obj2);
            }
            const items1 = [tmp6Result];
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
        }),
      });
    };
