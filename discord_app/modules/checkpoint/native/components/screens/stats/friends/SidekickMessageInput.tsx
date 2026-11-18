// discord_app/modules/checkpoint/native/components/screens/stats/friends/SidekickMessageInput.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../../../../screen/useWindowDimensions.native.tsx";
import useWindowSizeClassifier from "../../../../../../screen/native/useWindowSizeClassifier.tsx";
import AnalyticsLocationDefault from "../../../../../../app_analytics/AnalyticsLocation.tsx";
import utils_openGiftModal from "../../../../../../premium/native/utils/openGiftModal.tsx";
import Tracking from "../../../../../tracking/Tracking.tsx";
import asyncGeneratorStep from "../../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: closure_6, Pressable: metroImportDefault, View: closure_8 } = get_ActivityIndicator);
const CheckpointConstants = fn(5877);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4823);
let obj2 = {
  messageInputContainer: null,
  messageInputContainerLarge: null,
  messageInput: null,
  messageInputActions: null,
  messageInputAction: null,
  giftAction: null,
  sendAction: null,
  messageInputIcon: null,
  disabled: null,
};
let obj3 = {
  height: 104,
  padding: PX_12,
  paddingBottom: null,
  borderWidth: 2,
  borderColor: CHECKPOINT_PRIMARY,
  backgroundColor: nativeDefault.colors.BLACK,
};
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
let closure_14 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/friends/SidekickMessageInput.tsx",
);

export default function SidekickMessageInput(user) {
  user = user.user;
  dependencyMap = undefined;
  c3 = undefined;
  let str2;
  noop = undefined;
  closure_6 = async function _handleSend() {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (noop) {
            asyncGeneratorStep(true);
            c3 = 2;
            c1 = 3;
            c4 = 1;
            const obj6 = { value: tmp4(tmp40[11]).sendSidekickMessage(str2, id.id), done: false };
            return obj6;
          } else {
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            const intl = tmp4(tmp40[13]).intl;
            tmp4(tmp40[12]).presentError(intl.string(tmp4(tmp40[13]).t.fEptJP));
            const obj2 = tmp4(tmp40[12]);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_1(undefined);
            closure_128_2(true);
            c3 = 1;
          }
          c3 = 0;
          closure_128_3(false);
        }
        c3 = 0;
        closure_128_3(false);
        throw tmp40;
      } catch (tmp40) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp40;
        } else if (tmp2 === tmp42) {
          c1 = tmp2;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  ({ username, containerRef } = user);
  const tmp = closure_14();
  [str, tmp3] = str2(noop.useState(undefined), 2);
  importDefault = tmp3;
  const tmp2 = str2(noop.useState(undefined), 2);
  [tmp5, c2] = str2(noop.useState(false), 2);
  const tmp4 = str2(noop.useState(false), 2);
  [tmp7, c3] = str2(noop.useState(false), 2);
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const bound = Math.min(size.width, size.height);
  let messageInputContainerLarge = bound > user(5003).WINDOW_SIZE_THRESHOLD_LARGE;
  str2 = undefined;
  const tmp6 = str2(noop.useState(false), 2);
  if (str != null) {
    str2 = str.trim();
  }
  if (str2 == null) {
    str2 = "";
  }
  let tmp12 = str2.length > 0;
  if (tmp12) {
    tmp12 = str2.length <= 250;
  }
  if (tmp12) {
    tmp12 = !tmp5;
  }
  if (tmp12) {
    tmp12 = !tmp7;
  }
  noop = tmp12;
  let tmp14Result = null;
  if (tmp11) {
    let obj = { ref: containerRef, style: null, children: null };
    items = [tmp.messageInputContainer];
    if (messageInputContainerLarge) {
      messageInputContainerLarge = tmp.messageInputContainerLarge;
    }
    items[1] = messageInputContainerLarge;
    obj.style = items;
    let obj2 = {
      multiline: true,
      onChangeText: tmp3,
      style: tmp.messageInput,
      value: str,
      maxLength: 250,
      editable: null,
      placeholderTextColor: null,
      placeholder: null,
      returnKeyType: "done",
      submitBehavior: "blurAndSubmit",
      disableFullscreenUI: true,
    };
    let tmp17 = !tmp5;
    if (!tmp5) {
      tmp17 = !tmp7;
    }
    obj2.editable = tmp17;
    obj2.placeholderTextColor = CHECKPOINT_WHITE;
    let intl = tmp10(1113).intl;
    if (tmp5) {
      let stringResult = intl.string(tmp10(1113).t.fjcCk5);
    } else {
      let obj3 = { name: username };
      stringResult = intl.formatToPlainString(tmp10(1113).t["0ZQw/X"], obj3);
    }
    obj2.placeholder = stringResult;
    const items1 = [closure_11(tmp10(1187).TextInput, obj2)];
    let obj4 = { style: tmp.messageInputActions, children: null };
    let obj5 = {
      onPress: function handleGift() {
        timestampProducer.dismiss();
        const result = Tracking.trackCheckpoint2026GiftCtaClicked(user.id);
        const obj3 = { recipientUserId: user.id, analyticsLocations: null };
        items = [AnalyticsLocationDefault.CHECKPOINT, AnalyticsLocationDefault.CHECKPOINT_SIDEKICK];
        obj3.analyticsLocations = items;
        utils_openGiftModal.openGiftModal(obj3);
      },
      style: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const items2 = [,];
    ({ messageInputAction: arr3[0], giftAction: arr3[1] } = tmp);
    obj5.style = items2;
    const intl2 = tmp10(1113).intl;
    obj5.accessibilityLabel = intl2.string(tmp10(1113).t.Ve9Ge6);
    let obj6 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.messageInputIcon };
    obj5.children = closure_11(tmp10(12393).GiftIcon, obj6);
    const items3 = [closure_11(closure_7, obj5)];
    const obj7 = {
      onPress: function handleSend() {
        const self = this;
        const apply = closure_6.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      disabled: !tmp12,
      style: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityState: null,
      children: null,
    };
    const items4 = [, ,];
    ({ messageInputAction: arr5[0], sendAction: arr5[1] } = tmp);
    let disabled = tmp22;
    if (!tmp12) {
      disabled = tmp.disabled;
    }
    items4[2] = disabled;
    obj7.style = items4;
    const intl3 = tmp10(1113).intl;
    obj7.accessibilityLabel = intl3.string(tmp10(1113).t.oeb1vg);
    const obj8 = { disabled: !tmp12 };
    obj7.accessibilityState = obj8;
    const obj9 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.messageInputIcon };
    obj7.children = closure_11(tmp10(5521).SendMessageIcon, obj9);
    items3[1] = closure_11(closure_7, obj7);
    obj4.children = items3;
    items1[1] = closure_12(closure_8, obj4);
    obj.children = items1;
    tmp14Result = closure_12(closure_8, obj);
  }
  return tmp14Result;
}
export function useSidekickMessageInputKeyboardOffset() {
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const bound = Math.min(size.width, size.height);
  let num = 104;
  if (bound > useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
    num = 136;
  }
  return num - PX_12 - 2;
}
