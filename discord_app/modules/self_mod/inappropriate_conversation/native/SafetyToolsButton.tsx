// === Module 12854: SafetyToolsButton ===

// Module 12854 (SafetyToolsButton)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10374 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 10375 */;
import SafetyToolsActionCreators from "SafetyToolsActionCreators" /* 10401 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { safetyToolsButton: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx");

export const SafetyToolsButton = ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyToolsButton(channelId) {
  const cResult = channelId(warningId[7]).c(42);
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  warningId = channelId.warningId;
  const warningType = channelId.warningType;
  closure_7();
  let obj = channelId(warningId[7]);
  let tmp = warningId;
  const safetyToolsButtonTooltipForChannel = channelId(warningId[8]).useSafetyToolsButtonTooltipForChannel(channelId);
  let obj2 = channelId(warningId[8]);
  const shouldShowInitialSafetyToolsButtonTooltip = channelId(warningId[9]).useShouldShowInitialSafetyToolsButtonTooltip(channelId);
  let obj3 = channelId(warningId[9]);
  const tmp6 = warningType;
  [tmp8, jsx] = warningType(safetyToolsButtonTooltipForChannel.useState(false), 2);
  if (cResult[0] === safetyToolsButtonTooltipForChannel) {
    if (cResult[1] === shouldShowInitialSafetyToolsButtonTooltip) {
      let tmp9 = cResult[2];
    }
    closure_7 = tmp9;
    if (cResult[3] !== tmp9) {
      const tmp9Result = tmp9();
      cResult[3] = tmp9;
      cResult[4] = tmp9Result;
      let tmp10 = tmp9Result;
    } else {
      tmp10 = cResult[4];
    }
    [r10046, closure_8] = tmp6(obj4.useState(tmp10), 2);
    if (tmp8) {
      const tmp14 = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
    }
    closure_9 = tmp8;
    if (cResult[5] === channelId) {
      if (cResult[6] === safetyToolsButtonTooltipForChannel) {
        if (cResult[7] === recipientId) {
          if (cResult[8] === warningId) {
            if (cResult[9] === warningType) {
              let tmp15 = cResult[10];
            }
            closure_10 = tmp15;
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
              let tmp18 = items;
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
                  tmp = closure_10(closure_0(closure_2[11]).ViewNameTypes.SAFETY_TOOLS_BUTTON);
                  return;
                }
              }
              cResult[13] = tmp15;
              cResult[14] = P;
            } else {
              class P {
                constructor() {
                  tmp = closure_10(closure_0(closure_2[11]).ViewNameTypes.SAFETY_TOOLS_BUTTON);
                  return;
                }
              }
            }
            recipientId(tmp[12])(P);
            if (cResult[15] === tmp9) {
              class P {
                constructor() {
                  tmp = closure_10(closure_0(closure_2[11]).ViewNameTypes.SAFETY_TOOLS_BUTTON);
                  return;
                }
              }
            }
            class R {
              constructor() {
                tmp = closure_9;
                if (closure_9) {
                  tmp2 = closure_5;
                  tmp = !closure_5;
                }
                if (tmp) {
                  tmp3 = closure_10;
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  tmp6 = closure_10(closure_0(closure_2[11]).ViewNameTypes.SAFETY_TOOLS_NUDGE_TOOLTIP);
                }
                tmp7 = closure_7();
                if (null != tmp7) {
                  tmp8 = closure_8;
                  tmp9 = closure_8(tmp7);
                }
                return;
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
                if (closure_5) {
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  intl2 = closure_0(closure_2[10]).intl;
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  stringResult = intl2.string(closure_0(closure_2[10]).t["16QyDv"]);
                } else {
                  tmp = closure_4;
                  stringResult = null;
                  if (null != closure_4) {
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    intl = closure_0(closure_2[10]).intl;
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    stringResult = intl.string(closure_0(closure_2[10]).t.kCN9i0);
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
      SafetyWarningUtils.trackNamedViewEvent({ channelId, warningId, warningType, senderId: recipientId, viewName, isNudgeWarning: null != safetyToolsButtonTooltipForChannel });
    };
    cResult[5] = channelId;
    cResult[6] = safetyToolsButtonTooltipForChannel;
    cResult[7] = recipientId;
    cResult[8] = warningId;
    cResult[9] = warningType;
    cResult[10] = fn;
    tmp15 = fn;
    const tmp6Result = tmp6(obj4.useState(tmp10), 2);
  }
  class T {
    constructor() {
      if (closure_5) {
        tmp7 = closure_0;
        tmp8 = closure_2;
        intl2 = closure_0(closure_2[10]).intl;
        tmp9 = closure_0;
        tmp10 = closure_2;
        stringResult = intl2.string(closure_0(closure_2[10]).t["16QyDv"]);
      } else {
        tmp = closure_4;
        stringResult = null;
        if (null != closure_4) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          intl = closure_0(closure_2[10]).intl;
          tmp5 = closure_0;
          tmp6 = closure_2;
          stringResult = intl.string(closure_0(closure_2[10]).t.kCN9i0);
        }
      }
      return stringResult;
    }
  }
  cResult[0] = safetyToolsButtonTooltipForChannel;
  cResult[1] = shouldShowInitialSafetyToolsButtonTooltip;
  cResult[2] = T;
  tmp9 = T;
  let tmp7 = warningType(safetyToolsButtonTooltipForChannel.useState(false), 2);
}) : (function SafetyToolsButton(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  closure_7 = undefined;
  let tmp = closure_7();
  const safetyToolsButtonTooltipForChannel = channelId(warningId[8]).useSafetyToolsButtonTooltipForChannel(channelId);
  let obj = channelId(warningId[8]);
  const shouldShowInitialSafetyToolsButtonTooltip = channelId(warningId[9]).useShouldShowInitialSafetyToolsButtonTooltip(channelId);
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
  recipientId(warningId[12])(() => {
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
  let obj2 = channelId(warningId[9]);
  const tooltip = channelId(warningId[15]).useTooltip(ref, memo1);
  const obj4 = { ref, children: null };
  const obj5 = { noMargin: true, color: null, source: null, onPress: null, accessibilityLabel: null, style: null };
  let obj3 = channelId(warningId[15]);
  obj5.color = recipientId(warningId[5]).unsafe_rawColors.WHITE;
  obj5.source = recipientId(warningId[17]);
  obj5.onPress = callback3;
  let intl = channelId(warningId[10]).intl;
  obj5.accessibilityLabel = intl.string(channelId(warningId[10]).t.rpc2qv);
  obj5.style = tmp.safetyToolsButton;
  obj4.children = first(recipientId(warningId[16]), obj5);
  return first(shouldShowInitialSafetyToolsButtonTooltip, obj4);
});