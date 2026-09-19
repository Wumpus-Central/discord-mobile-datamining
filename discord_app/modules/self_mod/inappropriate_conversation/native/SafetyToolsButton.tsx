// === Module 13581: SafetyToolsButton ===

// Module 13581 (SafetyToolsButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11631 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 11632 */;
import SafetyToolsActionCreators from "SafetyToolsActionCreators" /* 11652 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { safetyToolsButton: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx");

export const SafetyToolsButton = function SafetyToolsButton(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  closure_7 = undefined;
  let tmp = closure_7();
  const safetyToolsButtonTooltipForChannel = channelId(warningId[6]).useSafetyToolsButtonTooltipForChannel(channelId);
  let obj = channelId(warningId[6]);
  const shouldShowInitialSafetyToolsButtonTooltip = channelId(warningId[7]).useShouldShowInitialSafetyToolsButtonTooltip(channelId);
  let tmp4 = warningType(safetyToolsButtonTooltipForChannel.useState(false), 2);
  const first = tmp4[0];
  closure_7 = tmp4[1];
  let items = [shouldShowInitialSafetyToolsButtonTooltip, safetyToolsButtonTooltipForChannel];
  const callback = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (shouldShowInitialSafetyToolsButtonTooltip) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["16QyDv"]);
    } else {
      stringResult = null;
      if (null != safetyToolsButtonTooltipForChannel) {
        const intl = util.intl;
        stringResult = intl.string(util.t.kCN9i0);
      }
    }
    return stringResult;
  }, items);
  let tmp7 = warningType(safetyToolsButtonTooltipForChannel.useState(callback()), 2);
  const first1 = tmp7[0];
  closure_10 = tmp7[1];
  const items1 = [first, safetyToolsButtonTooltipForChannel, shouldShowInitialSafetyToolsButtonTooltip];
  const memo = safetyToolsButtonTooltipForChannel.useMemo(() => {
    let tmp = first;
    if (first) {
      tmp = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
      const tmp4 = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
    }
    return tmp;
  }, items1);
  const items2 = [channelId, warningId, warningType, recipientId, safetyToolsButtonTooltipForChannel];
  const callback1 = safetyToolsButtonTooltipForChannel.useCallback((viewName) => {
    SafetyWarningUtils.trackNamedViewEvent({ channelId, warningId, warningType, senderId: recipientId, viewName, isNudgeWarning: null != safetyToolsButtonTooltipForChannel });
  }, items2);
  const effect = safetyToolsButtonTooltipForChannel.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_7(true);
    }, 5);
  }, []);
  recipientId(warningId[10])(() => {
    callback1(SafetyWarningUtils.ViewNameTypes.SAFETY_TOOLS_BUTTON);
  });
  const items3 = [callback, memo, shouldShowInitialSafetyToolsButtonTooltip, callback1];
  const effect1 = safetyToolsButtonTooltipForChannel.useEffect(() => {
    let tmp = memo;
    if (memo) {
      tmp = !shouldShowInitialSafetyToolsButtonTooltip;
    }
    if (tmp) {
      callback1(SafetyWarningUtils.ViewNameTypes.SAFETY_TOOLS_NUDGE_TOOLTIP);
    }
    const tmp7 = callback();
    if (null != tmp7) {
      closure_10(tmp7);
    }
  }, items3);
  const items4 = [channelId, safetyToolsButtonTooltipForChannel, shouldShowInitialSafetyToolsButtonTooltip];
  const callback2 = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (shouldShowInitialSafetyToolsButtonTooltip) {
      const result = ChannelSafetyWarningsActionCreators.acknowledgeChannelSafetyWarningTooltip(channelId);
    }
    if (null != safetyToolsButtonTooltipForChannel) {
      const items = [tmp5.id];
      const result1 = ChannelSafetyWarningsActionCreators.dismissChannelSafetyWarnings(channelId, items);
    }
  }, items4);
  const items5 = [recipientId, callback2, channelId, warningId, warningType, safetyToolsButtonTooltipForChannel];
  const callback3 = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (null != recipientId) {
      callback2();
      const obj = SafetyToolsActionCreators;
      const result = obj.openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
      const obj3 = { channelId, senderId: recipientId, warningId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
      SafetyWarningUtils.trackCtaEvent(obj3);
    }
  }, items5);
  const ref = safetyToolsButtonTooltipForChannel.useRef(null);
  const items6 = [callback2, memo, first1];
  const memo1 = safetyToolsButtonTooltipForChannel.useMemo(() => {
    let str = first1;
    if (first1 == null) {
      str = "";
    }
    return {
      position: "bottom",
      label: str,
      visible: memo,
      onPress() {
        return callback2();
      }
    };
  }, items6);
  let obj2 = channelId(warningId[7]);
  const tooltip = channelId(warningId[13]).useTooltip(ref, memo1);
  const obj4 = { ref, children: null };
  const obj5 = { noMargin: true, color: null, source: null, onPress: null, accessibilityLabel: null, style: null };
  let obj3 = channelId(warningId[13]);
  obj5.color = recipientId(warningId[5]).unsafe_rawColors.WHITE;
  obj5.source = recipientId(warningId[15]);
  obj5.onPress = callback3;
  let intl = channelId(warningId[8]).intl;
  obj5.accessibilityLabel = intl.string(channelId(warningId[8]).t.rpc2qv);
  obj5.style = tmp.safetyToolsButton;
  obj4.children = first(recipientId(warningId[14]), obj5);
  return first(shouldShowInitialSafetyToolsButtonTooltip, obj4);
};