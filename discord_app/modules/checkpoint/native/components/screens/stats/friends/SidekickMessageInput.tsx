// === Module 12654: SidekickMessageInput ===

// Module 12654 (SidekickMessageInput)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4974 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7419 */;
import utils_openGiftModal from "utils/openGiftModal" /* 9345 */;
import Tracking from "Tracking" /* 12368 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: closure_4, Pressable: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const CheckpointConstants = fn(5850);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4794);
let obj2 = { messageInputContainer: null, messageInputContainerLarge: null, messageInput: null, messageInputActions: null, messageInputAction: null, giftAction: null, sendAction: null, messageInputIcon: null, disabled: null };
let obj3 = { height: 104, padding: PX_12, paddingBottom: null, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
const sum = 18 + CHECKPOINT_CONTROL_ICON_SIZE;
obj3.paddingBottom = sum + nativeDefault.space.PX_8;
obj2.messageInputContainer = obj3;
obj2.messageInputContainerLarge = { height: 136 };
obj2.messageInput = { flex: 1, alignSelf: "stretch", padding: 0, color: CHECKPOINT_PRIMARY, textAlignVertical: "top" };
obj2.messageInputActions = { position: "absolute", bottom: 0, end: 0, flexDirection: "row" };
obj2.messageInputAction = { height: 44, justifyContent: "flex-end", paddingBottom: 18 };
obj2.giftAction = { paddingStart: 18, paddingEnd: 9 };
obj2.sendAction = { paddingStart: 9, paddingEnd: 18 };
obj2.messageInputIcon = { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE };
obj2.disabled = { opacity: 0.5 };
let closure_12 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/SidekickMessageInput.tsx");

export default function SidekickMessageInput(user) {
  user = user.user;
  ({ state, setState: importDefault } = user);
  let str;
  closure_3 = undefined;
  closure_4 = async function _handleSend() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp4;
            if (asyncGeneratorStep) {
              importDefault((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.isSending = true;
                return obj;
              });
              c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj6 = { value: tmp4(tmp37[9]).sendSidekickMessage(str, id.id), done: false };
              return obj6;
            } else {
              c5 = 3;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            const intl = tmp4(tmp37[11]).intl;
            tmp4(tmp37[10]).presentError(intl.string(tmp4(tmp37[11]).t.fEptJP));
            const obj2 = tmp4(tmp37[10]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_1((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.isSending = false;
              return obj;
            });
            c5 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            closure_129_1((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.inputValue = undefined;
              obj.messageSent = true;
              return obj;
            });
            c3 = 1;
          }
          c3 = 0;
          closure_129_1((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.isSending = false;
            return obj;
          });
        }
        c3 = 0;
        closure_129_1((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.isSending = false;
          return obj;
        });
        throw tmp37;
      } catch (tmp37) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp37;
        } else if (tmp2 === tmp39) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  ({ username, containerRef } = user);
  const tmp = closure_12();
  ({ inputValue, messageSent, isSending } = state);
  const size = require("useWindowDimensions")({ ignoreKeyboard: true });
  const bound = Math.min(size.width, size.height);
  let messageInputContainerLarge = bound > user(str[7]).WINDOW_SIZE_THRESHOLD_LARGE;
  str = undefined;
  if (inputValue != null) {
    str = inputValue.trim();
  }
  if (str == null) {
    str = "";
  }
  let tmp6 = str.length > 0;
  if (tmp6) {
    tmp6 = str.length <= 250;
  }
  if (tmp6) {
    tmp6 = !messageSent;
  }
  if (tmp6) {
    tmp6 = !isSending;
  }
  closure_3 = tmp6;
  let tmp8Result = null;
  if (tmp5) {
    let obj = { ref: containerRef, style: null, children: null };
    items = [tmp.messageInputContainer, ];
    if (messageInputContainerLarge) {
      messageInputContainerLarge = tmp.messageInputContainerLarge;
    }
    items[1] = messageInputContainerLarge;
    obj.style = items;
    let obj2 = {
      multiline: true,
      onChangeText(inputValue) {
          return importDefault((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.inputValue = inputValue;
            return obj;
          });
        },
      style: tmp.messageInput,
      value: inputValue,
      maxLength: 250,
      editable: null,
      placeholderTextColor: null,
      placeholder: null,
      returnKeyType: "done",
      submitBehavior: "blurAndSubmit",
      disableFullscreenUI: true
    };
    let tmp11 = !messageSent;
    if (!messageSent) {
      tmp11 = !isSending;
    }
    obj2.editable = tmp11;
    obj2.placeholderTextColor = CHECKPOINT_WHITE;
    let intl = tmp4(tmp2[11]).intl;
    if (messageSent) {
      let stringResult = intl.string(tmp4(tmp2[11]).t.fjcCk5);
    } else {
      let obj3 = { name: username };
      stringResult = intl.formatToPlainString(tmp4(tmp2[11]).t["0ZQw/X"], obj3);
    }
    obj2.placeholder = stringResult;
    const items1 = [closure_9(tmp4(tmp2[12]).TextInput, obj2), ];
    let obj4 = { style: tmp.messageInputActions, children: null };
    let obj5 = {
      onPress: function handleGift() {
          React4.dismiss();
          const result = Tracking.trackCheckpoint2026GiftCtaClicked(user.id);
          const obj3 = { recipientUserId: user.id, analyticsLocations: null };
          items = [AnalyticsLocationDefault.CHECKPOINT, AnalyticsLocationDefault.CHECKPOINT_SIDEKICK];
          obj3.analyticsLocations = items;
          utils_openGiftModal.openGiftModal(obj3);
        },
      style: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null
    };
    const items2 = [, ];
    ({ messageInputAction: arr3[0], giftAction: arr3[1] } = tmp);
    obj5.style = items2;
    const intl2 = tmp4(tmp2[11]).intl;
    obj5.accessibilityLabel = intl2.string(tmp4(tmp2[11]).t.Ve9Ge6);
    let obj6 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.messageInputIcon };
    obj5.children = closure_9(tmp4(tmp2[16]).GiftIcon, obj6);
    const items3 = [closure_9(closure_5, obj5), ];
    const obj7 = {
      onPress: function handleSend() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      disabled: !tmp6,
      style: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityState: null,
      children: null
    };
    const items4 = [, , ];
    ({ messageInputAction: arr5[0], sendAction: arr5[1] } = tmp);
    let disabled = tmp16;
    if (!tmp6) {
      disabled = tmp.disabled;
    }
    items4[2] = disabled;
    obj7.style = items4;
    const intl3 = tmp4(tmp2[11]).intl;
    obj7.accessibilityLabel = intl3.string(tmp4(tmp2[11]).t.oeb1vg);
    const obj8 = { disabled: !tmp6 };
    obj7.accessibilityState = obj8;
    const obj9 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.messageInputIcon };
    obj7.children = closure_9(tmp4(tmp2[17]).SendMessageIcon, obj9);
    items3[1] = closure_9(closure_5, obj7);
    obj4.children = items3;
    items1[1] = closure_10(closure_6, obj4);
    obj.children = items1;
    tmp8Result = closure_10(closure_6, obj);
  }
  return tmp8Result;
};
export function useSidekickMessageInputKeyboardOffset() {
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const bound = Math.min(size.width, size.height);
  let num = 104;
  if (bound > useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
    num = 136;
  }
  return num - PX_12 - 2;
}