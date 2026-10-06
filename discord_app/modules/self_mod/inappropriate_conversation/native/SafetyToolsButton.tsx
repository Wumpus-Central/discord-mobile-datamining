// === Module 13139: SafetyToolsButton ===

// Module 13139 (SafetyToolsButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9811 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 9812 */;
import SafetyToolsActionCreators from "SafetyToolsActionCreators" /* 9838 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { safetyToolsButton: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let closure_8;
  let tmp8;
  let warningId;
  let tmp = warningId;
  let obj = channelId(warningId[7]);
  const cResult = obj.c(42);
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  warningId = channelId.warningId;
  const warningType = channelId.warningType;
  closure_7();
  let obj2 = channelId(warningId[8]);
  const safetyToolsButtonTooltipForChannel = obj2.useSafetyToolsButtonTooltipForChannel(channelId);
  const obj3 = channelId(warningId[9]);
  const shouldShowInitialSafetyToolsButtonTooltip = obj3.useShouldShowInitialSafetyToolsButtonTooltip(channelId);
  const tmp6 = warningType;
  let tmp7 = warningType(safetyToolsButtonTooltipForChannel.useState(false), 2);
  [tmp8, jsx] = tmp7;
  if (cResult[0] === safetyToolsButtonTooltipForChannel) {
    let tmp9;
    let tmp10;
    if (cResult[1] === shouldShowInitialSafetyToolsButtonTooltip) {
      tmp9 = cResult[2];
    }
    closure_7 = tmp9;
    if (cResult[3] !== tmp9) {
      const tmp9Result = tmp9();
      cResult[3] = tmp9;
      cResult[4] = tmp9Result;
      tmp10 = tmp9Result;
    } else {
      tmp10 = cResult[4];
    }
    [r10046, closure_8] = tmp6(safetyToolsButtonTooltipForChannel.useState(tmp10), 2);
    tmp6(safetyToolsButtonTooltipForChannel.useState(tmp10), 2);
    let closure_9 = tmp8;
    if (cResult[5] === channelId) {
      if (cResult[6] === safetyToolsButtonTooltipForChannel) {
        if (cResult[7] === recipientId) {
          if (cResult[8] === warningId) {
            let tmp15;
            let tmp18;
            if (cResult[9] === warningType) {
              tmp15 = cResult[10];
            }
            let closure_10 = tmp15;
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              class F {
                constructor() {
                  timerId = setTimeout(() => {
                    closure_1_6(true);
                  }, 5);
                  return;
                }
              }
              let items = [];
              cResult[11] = F;
              cResult[12] = items;
              tmp18 = items;
            } else {
              class F {
                constructor() {
                  timerId = setTimeout(() => {
                    closure_1_6(true);
                  }, 5);
                  return;
                }
              }
              tmp18 = cResult[12];
            }
            const effect = obj4.useEffect(F, tmp18);
            if (cResult[13] !== tmp15) {
              class P {
                constructor() {
                  closure_10(SafetyWarningUtils.ViewNameTypes.SAFETY_TOOLS_BUTTON);
                }
              }
              cResult[13] = tmp15;
              cResult[14] = P;
            } else {
              class P {
                constructor() {
                  closure_10(SafetyWarningUtils.ViewNameTypes.SAFETY_TOOLS_BUTTON);
                }
              }
            }
            recipientId(tmp[12])(P);
            if (cResult[15] === tmp9) {
              class P {
                constructor() {
                  closure_10(SafetyWarningUtils.ViewNameTypes.SAFETY_TOOLS_BUTTON);
                }
              }
            }
            class R {
              constructor() {
                const tmp = closure_9 && !shouldShowInitialSafetyToolsButtonTooltip;
                if (tmp) {
                  closure_10(SafetyWarningUtils.ViewNameTypes.SAFETY_TOOLS_NUDGE_TOOLTIP);
                }
                const tmp7 = closure_7();
                if (null != tmp7) {
                  closure_8(tmp7);
                }
              }
            }
            const items1 = [tmp9, tmp8, shouldShowInitialSafetyToolsButtonTooltip, tmp15];
            cResult[15] = tmp9;
            cResult[16] = tmp8;
            cResult[17] = shouldShowInitialSafetyToolsButtonTooltip;
            cResult[18] = tmp15;
            cResult[19] = R;
            cResult[20] = items1;
            class T {
              constructor() {
                let stringResult;
                if (shouldShowInitialSafetyToolsButtonTooltip) {
                  const intl2 = intl3.intl;
                  stringResult = intl2.string(intl3.t["16QyDv"]);
                } else {
                  stringResult = null;
                  if (null != safetyToolsButtonTooltipForChannel) {
                    const intl = intl3.intl;
                    stringResult = intl.string(intl3.t.kCN9i0);
                  }
                }
                return stringResult;
              }
            }
          }
        }
      }
    }
    const fn = function b(viewName) {
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, warningType, senderId: recipientId, viewName, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
      obj.trackNamedViewEvent(obj2);
    };
    cResult[5] = channelId;
    cResult[6] = safetyToolsButtonTooltipForChannel;
    cResult[7] = recipientId;
    cResult[8] = warningId;
    cResult[9] = warningType;
    cResult[10] = fn;
    tmp15 = fn;
  }
  class T {
    constructor() {
      let stringResult;
      if (shouldShowInitialSafetyToolsButtonTooltip) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t["16QyDv"]);
      } else {
        stringResult = null;
        if (null != safetyToolsButtonTooltipForChannel) {
          const intl = intl3.intl;
          stringResult = intl.string(intl3.t.kCN9i0);
        }
      }
      return stringResult;
    }
  }
  cResult[0] = safetyToolsButtonTooltipForChannel;
  cResult[1] = shouldShowInitialSafetyToolsButtonTooltip;
  cResult[2] = T;
  tmp9 = T;
}) : ((channelId) => {
  let intl;
  let obj5;
  let tmp19;
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  closure_7 = undefined;
  let tmp = closure_7();
  let obj = channelId(warningId[8]);
  const safetyToolsButtonTooltipForChannel = obj.useSafetyToolsButtonTooltipForChannel(channelId);
  let obj2 = channelId(warningId[9]);
  const shouldShowInitialSafetyToolsButtonTooltip = obj2.useShouldShowInitialSafetyToolsButtonTooltip(channelId);
  const tmp4 = warningType(safetyToolsButtonTooltipForChannel.useState(false), 2);
  const first = tmp4[0];
  closure_7 = tmp4[1];
  let items = [shouldShowInitialSafetyToolsButtonTooltip, safetyToolsButtonTooltipForChannel];
  const callback = safetyToolsButtonTooltipForChannel.useCallback(() => {
    let stringResult;
    if (shouldShowInitialSafetyToolsButtonTooltip) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t["16QyDv"]);
    } else {
      stringResult = null;
      if (null != safetyToolsButtonTooltipForChannel) {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t.kCN9i0);
      }
    }
    return stringResult;
  }, items);
  let tmp7 = warningType(safetyToolsButtonTooltipForChannel.useState(callback()), 2);
  const first1 = tmp7[0];
  let closure_10 = tmp7[1];
  const items1 = [first, safetyToolsButtonTooltipForChannel, shouldShowInitialSafetyToolsButtonTooltip];
  const memo = safetyToolsButtonTooltipForChannel.useMemo(() => {
    let tmp = first;
    if (tmp) {
      tmp = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
    }
    return tmp;
  }, items1);
  const items2 = [channelId, warningId, warningType, recipientId, safetyToolsButtonTooltipForChannel];
  const callback1 = safetyToolsButtonTooltipForChannel.useCallback((viewName) => {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, warningType, senderId: recipientId, viewName, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
    obj.trackNamedViewEvent(obj2);
  }, items2);
  const effect = safetyToolsButtonTooltipForChannel.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_7(true);
    }, 5);
  }, []);
  recipientId(warningId[12])(() => {
    callback1(SafetyWarningUtils.ViewNameTypes.SAFETY_TOOLS_BUTTON);
  });
  const items3 = [callback, memo, shouldShowInitialSafetyToolsButtonTooltip, callback1];
  const effect1 = safetyToolsButtonTooltipForChannel.useEffect(() => {
    const tmp = memo && !shouldShowInitialSafetyToolsButtonTooltip;
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
      const obj = ChannelSafetyWarningsActionCreators;
      const result = obj.acknowledgeChannelSafetyWarningTooltip(channelId);
    }
    if (null != safetyToolsButtonTooltipForChannel) {
      const items = [tmp6.id];
      const obj2 = ChannelSafetyWarningsActionCreators;
      const result1 = obj2.dismissChannelSafetyWarnings(channelId, items);
    }
  }, items4);
  const items5 = [recipientId, callback2, channelId, warningId, warningType, safetyToolsButtonTooltipForChannel];
  const callback3 = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (null != recipientId) {
      callback2();
      const obj = SafetyToolsActionCreators;
      const result = obj.openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
      const obj2 = { channelId, senderId: recipientId, warningId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
      const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
      SafetyWarningUtils;
      trackCtaEvent(obj2);
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
  const obj3 = channelId(warningId[15]);
  const tooltip = obj3.useTooltip(ref, memo1);
  const obj4 = { ref, children: first(tmp19, obj5) };
  obj5 = { noMargin: true, color: recipientId(warningId[5]).unsafe_rawColors.WHITE, source: recipientId(warningId[17]), onPress: callback3, accessibilityLabel: intl.string(channelId(warningId[10]).t.rpc2qv), style: tmp.safetyToolsButton };
  tmp19 = recipientId(warningId[16]);
  intl = channelId(warningId[10]).intl;
  return first(shouldShowInitialSafetyToolsButtonTooltip, obj4);
});
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx");

export const SafetyToolsButton = tmp2;