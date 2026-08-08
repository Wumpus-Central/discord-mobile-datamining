// discord_app/modules/in_app_notifications/native/MessageReplyInput.tsx
import set from "set";
import _slicedToArray from "_slicedToArray";
import rebuild from "rebuild";
import get_ActivityIndicator from "InAppNotificationAccessoryTypes";
import ensureGuildLoaded from "ensureGuildLoaded";
import { EmojiIntention } from "set";
import jsxProd from "EMOJI_PICKER_ACTION_SHEET_KEY";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c10;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function AnimatedChatInputReplyBar(replying) {
  let onToggleReplyMention;
  let pendingReply;
  let pendingReplyAuthor;
  replying = replying.replying;
  let sharedValue;
  ({ pendingReply, pendingReplyAuthor, onToggleReplyMention } = replying);
  let obj = replying(1348);
  const tmp3 = createCacheKey();
  sharedValue = replying(4036).useSharedValue(0);
  const items = [replying, sharedValue];
  const effect = React.useEffect(() => {
    const withTiming = replying(outer1_2[11]).withTiming;
    const obj = { duration: 150 };
    if (replying) {
      const result = set(withTiming(1, obj));
    } else {
      const result1 = set(withTiming(0, obj));
    }
  }, items);
  const obj2 = replying(4036);
  const tmp = replying;
  const fn = function y() {
    const obj = { height: null, opacity: null };
    obj[0] = replying(outer1_2[10]).interpolate(sharedValue.get(), [0, 1], [0, 40]);
    obj[1] = sharedValue.get();
    return obj;
  };
  obj = { interpolate: replying(4036).interpolate, sv: sharedValue, REPLY_BAR_HEIGHT: 40 };
  fn.__closure = obj;
  fn.__workletHash = 878601267127;
  fn.__initData = closure_13;
  const animatedStyle = replying(4036).useAnimatedStyle(fn);
  const items1 = [tmp3.replyBarContainer, , ];
  obj = { style: items1, children: null };
  items1[1] = obj.useMobileVisualRefreshConfig({ location: "MessageReplyInput" }).chatInputFloating ? tmp3.replyBarRedesign : tmp3.replyBarNoRedesign;
  items1[2] = animatedStyle;
  obj[1] = closure_10(tmp(10213).ChatInputReplyBar, { pendingReply, pendingReplyAuthor, onToggleReplyMention, chatInputFloatingOverride: true });
  return closure_10(sharedValue(4036).View, obj);
}
({ Keyboard: closure_6, View: error, StyleSheet } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { inputContainer: null, iconsContainer: null, input: null, inputRow: null, placeholderText: null, replyBarContainer: null, replyBarNoRedesign: null, replyBarRedesign: null };
createCacheKey = { flexDirection: "column", gap: 0, backgroundColor: require("Themes").colors.MOBILE_ALERT_BACKGROUND_DEFAULT, padding: 0, marginHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4, borderRadius: require("Themes").radii.lg, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: 4 };
createCacheKey[2] = { flex: 1, borderRadius: require("Themes").radii.none, border: 0, color: require("Themes").colors.TEXT_DEFAULT };
let obj1 = { flex: 1, borderRadius: require("Themes").radii.none, border: 0, color: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: require("Themes").space.PX_12, paddingVertical: require("Themes").space.PX_12 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: require("Themes").space.PX_12, paddingVertical: require("Themes").space.PX_12 };
createCacheKey[4] = { color: require("Themes").colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
let obj3 = { color: require("Themes").colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
createCacheKey[5] = { justifyContent: "center", alignContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: require("Themes").colors.BORDER_MUTED, overflow: "hidden" };
let obj4 = { justifyContent: "center", alignContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: require("Themes").colors.BORDER_MUTED, overflow: "hidden" };
createCacheKey[6] = { paddingLeft: require("Themes").space.PX_12, paddingRight: require("Themes").space.PX_8 };
let obj5 = { paddingLeft: require("Themes").space.PX_12, paddingRight: require("Themes").space.PX_8 };
createCacheKey[7] = { paddingLeft: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_13 = { code: "function MessageReplyInputTsx1(){const{interpolate,sv,REPLY_BAR_HEIGHT}=this.__closure;return{height:interpolate(sv.get(),[0,1],[0,REPLY_BAR_HEIGHT]),opacity:sv.get()};}" };
let obj6 = { paddingLeft: require("Themes").space.PX_4 };
let result = require("noop").fileFinishedImporting("modules/in_app_notifications/native/MessageReplyInput.tsx");

export const MessageReplyInput = function MessageReplyInput(notification) {
  let guild;
  notification = notification.notification;
  let _require = notification;
  const onMessageSent = notification.onMessageSent;
  let ref;
  let first;
  let callback;
  let first1;
  let closure_6;
  let first2;
  let ensureGuildLoaded;
  let first3;
  let callback2;
  let message;
  let channel;
  let memo;
  let closure_14;
  ref = first1.useRef(null);
  const tmp3 = callback(first1.useState(""), 2);
  first = tmp3[0];
  callback = tmp5;
  const tmp6 = callback(first1.useState(false), 2);
  first1 = tmp6[0];
  closure_6 = tmp6[1];
  const tmp8 = callback(first1.useState(false), 2);
  first2 = tmp8[0];
  ensureGuildLoaded = tmp8[1];
  const tmp10 = callback(first1.useState(true), 2);
  first3 = tmp10[0];
  callback2 = tmp10[1];
  const tmp12 = channel();
  message = notification.message;
  channel = notification.channel;
  let obj = _require(ref[13]);
  const nullableMessageAuthor = obj.useNullableMessageAuthor(message);
  let obj1 = _require(ref[15]);
  const items = [first3, channel, message];
  const inputStyles = obj1.useInputStyles({});
  memo = first1.useMemo(() => ({ shouldMention: first3, showMentionToggle: !channel.isPrivate(), channel, message }), items);
  const layoutEffect = first1.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  _require = undefined;
  _require = first((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (length === 2) {
        length = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          length = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              length = 3;
              throw arg1;
            } else if (arg0 === 2) {
              length = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              if (true !== outer1_5) {
                const id = tmp39.channel.id;
                if (0 !== length.length) {
                  if (null != id) {
                    let getSendMessageOptionsForReply = ref;
                    let obj1 = callback(ref[16]);
                    const result = obj1.trackInAppNotificationAccessoryClicked(tmp39, callback(ref[17]).InAppNotificationAccessoryTypes.SEND_MESSAGE_BUTTON);
                    outer1_6(true);
                    const result1 = callback(ref[18]).triggerHapticFeedback(callback(ref[18]).HapticFeedbackTypes.IMPACT_MEDIUM);
                    let tmp20 = onMessageSent;
                    const obj3 = callback(ref[18]);
                    const parsed = onMessageSent(ref[19]).parse(channel.getChannel(id), tmp13);
                    const obj5 = onMessageSent(ref[20]);
                    if (outer1_7) {
                      tmp20 = tmp20(getSendMessageOptionsForReply[20]);
                      getSendMessageOptionsForReply = tmp20.getSendMessageOptionsForReply;
                      let sendMessageOptionsForReply = getSendMessageOptionsForReply(outer1_13);
                    } else {
                      sendMessageOptionsForReply = {};
                    }
                    obj1 = {};
                    const merged = Object.assign(sendMessageOptionsForReply);
                    obj1.location = "InAppNotification";
                    obj5.sendMessage(id, parsed, false, obj1);
                    c2 = 1;
                    length = 1;
                    const obj4 = onMessageSent(ref[19]);
                  }
                }
              }
              length = 3;
            }
          } else if (arg0 === 1) {
            length = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            outer1_1();
            outer1_6(false);
            outer1_4("");
          }
          length = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp33) {
          length = tmp;
          throw tmp33;
        }
      }
    })();
  });
  const items1 = [first, onMessageSent, memo, first2, first1];
  closure_14 = first1.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [, ];
  ({ channel: arr3[0], guild } = notification);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  items2[1] = id;
  obj = { style: tmp12.inputContainer, children: null };
  obj = {
    replying: first2,
    pendingReply: memo,
    pendingReplyAuthor: nullableMessageAuthor,
    onToggleReplyMention() {
      return callback2(!first3);
    }
  };
  callback = first1.useCallback(() => {
    closure_6.dismiss();
    let obj = lib(ref[21]);
    obj = {
      onPressEmoji(arg0) {
        let closure_0 = outer1_1(outer1_2[22])(arg0);
        callback((arg0) => "" + arg0 + " " + closure_0);
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      },
      pickerIntention: first3.CHAT,
      channel: null,
      guildId: null,
      startExpanded: false
    };
    const channel = lib.channel;
    obj[2] = channel;
    const guild = lib.guild;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    obj[3] = id;
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items2);
  const items3 = [callback2(closure_14, obj), ];
  obj1 = { style: tmp12.inputRow, children: null };
  let str = "icon-only";
  if (first2) {
    str = "secondary";
  }
  const obj2 = { variant: str, size: "sm", icon: null, onPress: null, accessibilityLabel: null };
  let obj3 = { size: "sm", color: null };
  obj3[1] = onMessageSent(ref[8]).colors.CHAT_INPUT_ICON_DEFAULT_TINT;
  obj2[2] = callback2(_require(ref[24]).ArrowAngleLeftUpIcon, obj3);
  obj2[3] = function onPress() {
    const result = lib(ref[16]).trackInAppNotificationAccessoryClicked(lib, lib(ref[17]).InAppNotificationAccessoryTypes.REPLY_TOGGLE);
    callback(!first2);
  };
  const intl = tmp13(tmp14[25]).intl;
  obj2[4] = intl.string(_require(ref[25]).t["5IEsGx"]);
  const items4 = [callback2(_require(ref[23]).IconButton, obj2), , ];
  let obj4 = { ref, style: items5, placeholderTextColor: tmp12.placeholderText.color, placeholder: null, autoFocus: true, value: null, onChangeText: null };
  items5 = [tmp12.input, inputStyles.text];
  const intl2 = tmp13(tmp14[25]).intl;
  obj4[3] = intl2.formatToPlainString(_require(ref[25]).t["8lzR/R"], { channel: onMessageSent(ref[14])(channel, true) });
  obj4[5] = first;
  obj4[6] = tmp3[1];
  items4[1] = callback2(_require(ref[26]).NativeTextInput, obj4);
  let obj5 = { style: tmp12.iconsContainer, children: null };
  const obj6 = { variant: "icon-only", size: "sm", icon: null, onPress: null, accessibilityLabel: null };
  const obj7 = { size: "sm", color: null };
  obj7[1] = onMessageSent(ref[8]).colors.CHAT_INPUT_ICON_DEFAULT_TINT;
  obj6[2] = callback2(_require(ref[27]).ReactionIcon, obj7);
  obj6[3] = callback;
  const intl3 = tmp13(tmp14[25]).intl;
  obj6[4] = intl3.string(_require(ref[25]).t.sMOuuS);
  const items6 = [callback2(_require(ref[23]).IconButton, obj6), ];
  const obj8 = { variant: "primary", size: "sm", accessibilityLabel: null, icon: null, onPress: null, loading: null };
  const intl4 = tmp13(tmp14[25]).intl;
  obj8[2] = intl4.string(_require(ref[25]).t.TXNS7S);
  const obj9 = { size: "sm", color: null };
  obj9[1] = onMessageSent(ref[8]).colors.WHITE;
  obj8[3] = callback2(_require(ref[28]).SendMessageIcon, obj9);
  obj8[4] = function onPress() {
    return callback3(closure_0);
  };
  obj8[5] = first1;
  items6[1] = callback2(_require(ref[23]).IconButton, obj8);
  obj5[1] = items6;
  items4[2] = message(first2, obj5);
  obj1[1] = items4;
  items3[1] = message(first2, obj1);
  obj[1] = items3;
  return message(first2, obj);
};