// === Module 13163: SafetyToolsButton ===

// Module 13163 (SafetyToolsButton)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
createCacheKey = { safetyToolsButton: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx");

export const SafetyToolsButton = function SafetyToolsButton(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let safetyToolsButtonTooltipForChannel;
  let shouldShowInitialSafetyToolsButtonTooltip;
  let first;
  let callback;
  callback = undefined;
  let first1;
  closure_10 = undefined;
  let memo;
  let callback1;
  let callback2;
  let obj = channelId(warningId[6]);
  safetyToolsButtonTooltipForChannel = obj.useSafetyToolsButtonTooltipForChannel(channelId);
  let tmp = callback();
  shouldShowInitialSafetyToolsButtonTooltip = channelId(warningId[7]).useShouldShowInitialSafetyToolsButtonTooltip(channelId);
  let tmp4 = warningType(safetyToolsButtonTooltipForChannel.useState(false), 2);
  first = tmp4[0];
  callback = tmp4[1];
  let items = [shouldShowInitialSafetyToolsButtonTooltip, safetyToolsButtonTooltipForChannel];
  callback = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (shouldShowInitialSafetyToolsButtonTooltip) {
      const intl2 = channelId(warningId[8]).intl;
      let stringResult = intl2.string(channelId(warningId[8]).t["16QyDv"]);
    } else {
      stringResult = null;
      if (null != safetyToolsButtonTooltipForChannel) {
        const intl = channelId(warningId[8]).intl;
        stringResult = intl.string(channelId(warningId[8]).t.kCN9i0);
      }
    }
    return stringResult;
  }, items);
  let tmp7 = warningType(safetyToolsButtonTooltipForChannel.useState(callback()), 2);
  first1 = tmp7[0];
  closure_10 = tmp7[1];
  const items1 = [first, safetyToolsButtonTooltipForChannel, shouldShowInitialSafetyToolsButtonTooltip];
  memo = safetyToolsButtonTooltipForChannel.useMemo(() => {
    let tmp = first;
    if (first) {
      tmp = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
      const tmp4 = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
    }
    return tmp;
  }, items1);
  const items2 = [channelId, warningId, warningType, recipientId, safetyToolsButtonTooltipForChannel];
  callback1 = safetyToolsButtonTooltipForChannel.useCallback((viewName) => {
    let obj = channelId(warningId[9]);
    obj = { channelId, warningId, warningType, senderId: recipientId, viewName, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
    obj.trackNamedViewEvent(obj);
  }, items2);
  const effect = safetyToolsButtonTooltipForChannel.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(true);
    }, 5);
  }, []);
  recipientId(warningId[10])(() => {
    callback1(channelId(warningId[9]).ViewNameTypes.SAFETY_TOOLS_BUTTON);
  });
  const items3 = [callback, memo, shouldShowInitialSafetyToolsButtonTooltip, callback1];
  const effect1 = safetyToolsButtonTooltipForChannel.useEffect(() => {
    let tmp = memo;
    if (memo) {
      tmp = !shouldShowInitialSafetyToolsButtonTooltip;
    }
    if (tmp) {
      callback1(channelId(warningId[9]).ViewNameTypes.SAFETY_TOOLS_NUDGE_TOOLTIP);
    }
    const tmp7 = callback();
    if (null != tmp7) {
      callback(tmp7);
    }
  }, items3);
  const items4 = [channelId, safetyToolsButtonTooltipForChannel, shouldShowInitialSafetyToolsButtonTooltip];
  callback2 = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (shouldShowInitialSafetyToolsButtonTooltip) {
      const result = channelId(warningId[11]).acknowledgeChannelSafetyWarningTooltip(channelId);
      const obj = channelId(warningId[11]);
    }
    if (null != safetyToolsButtonTooltipForChannel) {
      const items = [tmp5.id];
      const result1 = channelId(warningId[11]).dismissChannelSafetyWarnings(channelId, items);
      const obj2 = channelId(warningId[11]);
    }
  }, items4);
  const items5 = [recipientId, callback2, channelId, warningId, warningType, safetyToolsButtonTooltipForChannel];
  const callback3 = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (null != recipientId) {
      callback2();
      let obj = channelId(warningId[12]);
      const result = obj.openSafetyToolsActionSheet(channelId, tmp, warningId, warningType);
      obj = { channelId: null, senderId: null, warningId: null, warningType: null, cta: null, isNudgeWarning: null };
      obj[0] = channelId;
      obj[1] = tmp;
      obj[2] = warningId;
      obj[3] = warningType;
      obj[4] = channelId(warningId[9]).CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK;
      obj[5] = null != safetyToolsButtonTooltipForChannel;
      channelId(warningId[9]).trackCtaEvent(obj);
      const obj2 = channelId(warningId[9]);
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
        return callback();
      }
    };
  }, items6);
  let obj2 = channelId(warningId[7]);
  const tooltip = channelId(warningId[13]).useTooltip(ref, memo1);
  obj = { ref, children: null };
  obj = { noMargin: true, color: null, source: null, onPress: null, accessibilityLabel: null, style: null };
  const obj3 = channelId(warningId[13]);
  obj[1] = recipientId(warningId[5]).unsafe_rawColors.WHITE;
  obj[2] = recipientId(warningId[15]);
  obj[3] = callback3;
  let intl = channelId(warningId[8]).intl;
  obj[4] = intl.string(channelId(warningId[8]).t.rpc2qv);
  obj[5] = tmp.safetyToolsButton;
  obj[1] = first(recipientId(warningId[14]), obj);
  return first(shouldShowInitialSafetyToolsButtonTooltip, obj);
};