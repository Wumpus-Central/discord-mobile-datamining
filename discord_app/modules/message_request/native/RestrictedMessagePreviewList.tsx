// discord_app/modules/message_request/native/RestrictedMessagePreviewList.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ImageWarningIcon from "../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import RestrictedMessagePreviewLayout from "RestrictedMessagePreviewLayout.tsx";
import RestrictedBlockedMessageGroupDefault from "RestrictedBlockedMessageGroup.tsx";
import react from "../../../../_runtime/00019_react.js";
import MessageStore from "../../../stores/MessageStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_0, importDefault, obj1, obj8, rowGenerator, tmp3;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
function groupMessages(stateFromStoresArray) {
  let items1;
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
      let obj3 = { type: "blocked", messages: items1 };
      items1 = [tmp2];
      let arr2 = items.push(obj3);
    } else {
      let obj = { type: "message", message: tmp2 };
      let arr3 = items.push(obj);
    }
    continue;
  }
  return items;
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
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
let createStyles = createStyles_mod;
let obj = {
  container: { flexDirection: "column" },
  hiddenMedia: obj2,
  messageRow: { position: "relative" },
  avatarHitbox: size,
  dateDivider: obj3,
  dividerLine: obj4,
  mediaPlaceholderCard: obj5,
  mediaHiddenRow: obj6,
};
obj2 = { marginLeft: RestrictedMessagePreviewLayout.RESTRICTED_CONTENT_INSET };
createStyles = createStyles.createStyles;
size = {
  position: "absolute",
  top: 0,
  left: 0,
  width: RestrictedMessagePreviewLayout.RESTRICTED_CONTENT_INSET,
  height: RestrictedMessagePreviewLayout.RESTRICTED_AVATAR_SIZE,
};
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginVertical: nativeDefault.space.PX_12,
};
obj4 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = {
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  height: 160,
  marginTop: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj6 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_4,
};
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (count) => {
      let intl;
      let items;
      let items1;
      let mediaPlaceholderCard;
      let tmp6;
      let obj = require("react");
      const cResult = obj.c(12);
      count = count.count;
      const tmp4 = closure_10();
      _require = tmp4;
      if (cResult[0] === count) {
        let tmp5;
        let tmp9;
        let tmp12;
        let tmp15;
        if (cResult[1] === tmp4.mediaPlaceholderCard) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = closure_6(require("CircleInformationIcon").CircleInformationIcon, {
            size: "sm",
            color: "text-muted",
          });
          cResult[5] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = {
            variant: "text-sm/normal",
            color: "text-muted",
            children: intl.string(require("intl").t["VGf+K3"]),
          };
          let Text = tmp(4892).Text;
          intl = tmp(1126).intl;
          const tmp14 = closure_6(Text, obj2);
          cResult[6] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] !== tmp4.mediaHiddenRow) {
          const obj3 = { style: tmp4.mediaHiddenRow, children: items };
          items = [tmp9, tmp12];
          const tmp18 = closure_7(View, obj3);
          cResult[7] = tmp4.mediaHiddenRow;
          cResult[8] = tmp18;
          tmp15 = tmp18;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          let tmp19;
          if (cResult[10] === tmp15) {
            tmp19 = cResult[11];
          }
          return tmp19;
        }
        const obj4 = { children: items1 };
        items1 = [tmp5, tmp15];
        const tmp22 = closure_7(View, obj4);
        cResult[9] = tmp5;
        cResult[10] = tmp15;
        cResult[11] = tmp22;
        tmp19 = tmp22;
      }
      if (cResult[3] !== tmp4.mediaPlaceholderCard) {
        const fn = function o(arg0, id) {
          let intl;
          let items;
          const obj = { style: mediaPlaceholderCard.mediaPlaceholderCard, children: items };
          items = [metroRequire(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "text-muted" })];
          const obj2 = { variant: "text-sm/medium", color: "text-muted", children: intl.string(intl2.t.B2xSxL) };
          const Text = Text_Text.Text;
          intl = intl2.intl;
          items[1] = metroRequire(Text, obj2);
          return metroImportDefault(View, obj, id);
        };
        cResult[3] = tmp4.mediaPlaceholderCard;
        cResult[4] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[4];
      }
      const arr = Array.from({ length: count }, tmp6);
      cResult[0] = count;
      cResult[1] = tmp4.mediaPlaceholderCard;
      cResult[2] = arr;
      tmp5 = arr;
    }
  : (count) => {
      let intl;
      let items;
      let items1;
      let mediaPlaceholderCard;
      count = count.count;
      const tmp = closure_10();
      _require = tmp;
      let obj = { children: items };
      items = [
        Array.from({ length: count }, (arg0, id) => {
          let intl;
          let items;
          const obj = { style: mediaPlaceholderCard.mediaPlaceholderCard, children: items };
          items = [metroRequire(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "text-muted" })];
          const obj2 = { variant: "text-sm/medium", color: "text-muted", children: intl.string(intl2.t.B2xSxL) };
          const Text = Text_Text.Text;
          intl = intl2.intl;
          items[1] = metroRequire(Text, obj2);
          return metroImportDefault(View, obj, id);
        }),
      ];
      let obj2 = { style: tmp.mediaHiddenRow, children: items1 };
      items1 = [closure_6(require("CircleInformationIcon").CircleInformationIcon, { size: "sm", color: "text-muted" })];
      const obj3 = {
        variant: "text-sm/normal",
        color: "text-muted",
        children: intl.string(require("intl").t["VGf+K3"]),
      };
      let Text = require("Text/Text").Text;
      intl = require("intl").intl;
      items1[1] = closure_6(Text, obj3);
      items[1] = closure_7(View, obj2);
      return closure_7(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (channelId) {
      let analyticsLocations;
      let arr3;
      let closure_1;
      let first;
      let renderMessage;
      let tmp8;
      let tmp9;
      let tmp2 = analyticsLocations;
      let tmp = channelId;
      let obj = channelId(analyticsLocations[8]);
      const cResult = obj.c(25);
      channelId = channelId.channelId;
      const tmp4 = closure_10();
      importDefault = tmp4;
      analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
      const tmp5 = importDefault;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [renderMessage];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function v() {
          const messages = MessageStore.getMessages(channelId);
          return messages.toArray();
        };
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(tmp2[15]);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
      if (cResult[4] === analyticsLocations) {
        let tmp11;
        let tmp12;
        if (cResult[5] === channelId) {
          tmp11 = cResult[6];
        }
        let closure_3 = tmp11;
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const self = this;
          const self2 = this;
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
              PressableOpacity = channelId(analyticsLocations[20]).PressableOpacity;
              intl = channelId(analyticsLocations[11]).intl;
              obj6.accessibilityLabel = intl.string(channelId(analyticsLocations[11]).t.iXAna6);
              obj6.onPress = function onPress() {
                return closure_3(message.author.id);
              };
              items[1] = closure_6(PressableOpacity, obj6);
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
          tmp12 = obj3;
        } else {
          tmp12 = cResult[7];
        }
        rowGenerator = tmp12;
        if (cResult[8] === tmp11) {
          if (cResult[9] === tmp4.avatarHitbox) {
            if (cResult[10] === tmp4.hiddenMedia) {
              let tmp16;
              if (cResult[11] === tmp4.messageRow) {
                tmp16 = cResult[12];
              }
              renderMessage = tmp16;
              if (cResult[13] === stateFromStoresArray) {
                if (cResult[14] === tmp16) {
                  if (cResult[15] === tmp4.container) {
                    if (cResult[16] === tmp4.dateDivider) {
                      let tmp17;
                      let tmp18;
                      let tmp19;
                      if (cResult[17] === tmp4.dividerLine) {
                        tmp17 = cResult[18];
                        tmp18 = cResult[19];
                        tmp19 = cResult[20];
                      }
                      if (cResult[21] === tmp17) {
                        if (cResult[22] === tmp18) {
                          let tmp22;
                          if (cResult[23] === tmp19) {
                            tmp22 = cResult[24];
                          }
                          return tmp22;
                        }
                      }
                      let obj2 = { style: tmp18, children: tmp19 };
                      const tmp24 = arr3(tmp17, obj2);
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
                          PressableOpacity = channelId(analyticsLocations[20]).PressableOpacity;
                          intl = channelId(analyticsLocations[11]).intl;
                          obj6.accessibilityLabel = intl.string(channelId(analyticsLocations[11]).t.iXAna6);
                          obj6.onPress = function onPress() {
                            return closure_3(message.author.id);
                          };
                          items[1] = closure_6(PressableOpacity, obj6);
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
                      cResult[21] = tmp17;
                      cResult[22] = tmp18;
                      cResult[23] = tmp19;
                      cResult[24] = tmp24;
                      tmp22 = tmp24;
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
                  PressableOpacity = channelId(analyticsLocations[20]).PressableOpacity;
                  intl = channelId(analyticsLocations[11]).intl;
                  obj6.accessibilityLabel = intl.string(channelId(analyticsLocations[11]).t.iXAna6);
                  obj6.onPress = function onPress() {
                    return closure_3(message.author.id);
                  };
                  items[1] = closure_6(PressableOpacity, obj6);
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
                let id;
                let items;
                let message;
                let obj5;
                let tmp18;
                if ("message" === type.type) {
                  message = type.message;
                } else {
                  message = type.messages[0];
                }
                let tmp2 = null;
                if (null != arr3[index - 1]) {
                  let message2;
                  if ("message" === arr3[index - 1].type) {
                    message2 = tmp.message;
                  } else {
                    message2 = tmp.messages[tmp.messages.length - 1];
                  }
                  tmp2 = message2;
                }
                let tmp6Result = null == tmp2;
                if (!tmp6Result) {
                  const obj = DateUtils;
                  tmp6Result = !obj.isSameDay(tmp2.timestamp, message.timestamp);
                }
                if (tmp6Result) {
                  const obj2 = { style: closure_1.dateDivider, children: items };
                  const obj3 = { style: closure_1.dividerLine };
                  items = [metroRequire(View, obj3), ,];
                  const obj4 = {
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: obj5.dateFormat(message.timestamp, "LL"),
                  };
                  const Text = Text_Text.Text;
                  obj5 = DateUtils;
                  items[1] = metroRequire(Text, obj4);
                  const obj6 = { style: closure_1.dividerLine };
                  items[2] = metroRequire(View, obj6);
                  tmp6Result = metroImportDefault(View, obj2);
                }
                const children = [tmp6Result];
                if ("message" === type.type) {
                  tmp18 = renderMessage(type.message);
                } else {
                  const obj7 = { messages: type.messages, renderMessage };
                  tmp18 = metroRequire(RestrictedBlockedMessageGroupDefault, obj7);
                }
                children[1] = tmp18;
                if ("message" === type.type) {
                  id = type.message.id;
                } else {
                  const _HermesInternal = HermesInternal;
                  id = "blocked-" + message.id;
                }
                return metroImportDefault(View, { children }, id);
              });
              cResult[13] = stateFromStoresArray;
              cResult[14] = tmp16;
              cResult[15] = tmp4.container;
              cResult[16] = tmp4.dateDivider;
              cResult[17] = tmp4.dividerLine;
              cResult[18] = rowGenerator;
              cResult[19] = container;
              cResult[20] = mapped;
              tmp19 = mapped;
              tmp18 = container;
              tmp17 = rowGenerator;
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
            PressableOpacity = channelId(analyticsLocations[20]).PressableOpacity;
            intl = channelId(analyticsLocations[11]).intl;
            obj6.accessibilityLabel = intl.string(channelId(analyticsLocations[11]).t.iXAna6);
            obj6.onPress = function onPress() {
              return closure_3(message.author.id);
            };
            items[1] = closure_6(PressableOpacity, obj6);
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
        tmp16 = M;
      }
      const fn2 = function _(userId) {
        const obj = { userId, channelId, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      };
      cResult[4] = analyticsLocations;
      cResult[5] = channelId;
      cResult[6] = fn2;
      tmp11 = fn2;
    }
  : (channelId) => {
      let closure_1;
      channelId = channelId.channelId;
      let analyticsLocations;
      let callback;
      let renderMessage;
      let tmp = closure_10();
      importDefault = tmp;
      analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
      let obj = channelId(analyticsLocations[15]);
      let items = [renderMessage];
      const items1 = [channelId];
      const items2 = [channelId, analyticsLocations];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          const messages = MessageStore.getMessages(channelId);
          return messages.toArray();
        },
        items1,
      );
      callback = callback.useCallback((userId) => {
        const obj = { userId, channelId, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }, items2);
      const memo = callback.useMemo(() => {
        const obj = new closure_1(analyticsLocations[17])();
        obj.setOptions(closure_1_9);
        return obj;
      }, []);
      const items3 = [tmp, memo, callback];
      renderMessage = callback.useCallback((message) => {
        let intl;
        let items;
        let obj5;
        const tmp = closure_1(analyticsLocations[18])(message);
        const obj = { style: closure_1.messageRow, children: items };
        items = [,];
        const obj2 = { pointerEvents: "none", message, rowGenerator: memo };
        items[0] = arr5(closure_1(analyticsLocations[19]), obj2);
        const obj3 = {
          style: closure_1.avatarHitbox,
          accessibilityRole: "button",
          accessibilityLabel: intl.string(channelId(analyticsLocations[11]).t.iXAna6),
          onPress() {
            return callback(message.author.id);
          },
        };
        const PressableOpacity = channelId(analyticsLocations[20]).PressableOpacity;
        intl = channelId(analyticsLocations[11]).intl;
        items[1] = arr5(PressableOpacity, obj3);
        const children = [closure_1_7(memo, obj)];
        let tmp6Result = tmp > 0;
        if (tmp6Result) {
          const obj4 = { style: closure_1.hiddenMedia, children: arr5(closure_1_11, obj5) };
          obj5 = { count: tmp };
          tmp6Result = arr5(memo, obj4);
        }
        children[1] = tmp6Result;
        return closure_1_7(closure_1_8, { children });
      }, items3);
      const arr5 = groupMessages(stateFromStoresArray);
      let obj2 = {
        style: tmp.container,
        children: arr5.map((type, index) => {
          let id;
          let items;
          let message;
          let obj5;
          let tmp18;
          if ("message" === type.type) {
            message = type.message;
          } else {
            message = type.messages[0];
          }
          let tmp2 = null;
          if (null != arr5[index - 1]) {
            let message2;
            if ("message" === arr5[index - 1].type) {
              message2 = tmp.message;
            } else {
              message2 = tmp.messages[tmp.messages.length - 1];
            }
            tmp2 = message2;
          }
          let tmp6Result = null == tmp2;
          if (!tmp6Result) {
            const obj = DateUtils;
            tmp6Result = !obj.isSameDay(tmp2.timestamp, message.timestamp);
          }
          if (tmp6Result) {
            const obj2 = { style: closure_1.dateDivider, children: items };
            const obj3 = { style: closure_1.dividerLine };
            items = [metroRequire(View, obj3), ,];
            const obj4 = {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: obj5.dateFormat(message.timestamp, "LL"),
            };
            const Text = Text_Text.Text;
            obj5 = DateUtils;
            items[1] = metroRequire(Text, obj4);
            const obj6 = { style: closure_1.dividerLine };
            items[2] = metroRequire(View, obj6);
            tmp6Result = metroImportDefault(View, obj2);
          }
          const children = [tmp6Result];
          if ("message" === type.type) {
            tmp18 = renderMessage(type.message);
          } else {
            const obj7 = { messages: type.messages, renderMessage };
            tmp18 = metroRequire(RestrictedBlockedMessageGroupDefault, obj7);
          }
          children[1] = tmp18;
          if ("message" === type.type) {
            id = type.message.id;
          } else {
            const _HermesInternal = HermesInternal;
            id = "blocked-" + message.id;
          }
          return metroImportDefault(View, { children }, id);
        }),
      };
      return arr5(memo, obj2);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewList.tsx");

export default tmp4;
