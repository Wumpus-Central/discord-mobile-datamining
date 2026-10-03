// === Module 9822: InappropriateConversationBlockAndReportAlert ===

// Module 9822 (InappropriateConversationBlockAndReportAlert)
import SafetyWarningUtils from "SafetyWarningUtils" /* 9798 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(warningType[3]).c(24);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  warningType = channelId.warningType;
  const senderId = channelId.senderId;
  const analyticsBlockContext = channelId.analyticsBlockContext;
  const analyticsBlockAndReportContext = channelId.analyticsBlockAndReportContext;
  const analyticsCancelContext = channelId.analyticsCancelContext;
  ({ onClose, onDismiss } = channelId);
  if (cResult[0] === channelId) {
    if (cResult[1] === senderId) {
      if (cResult[2] === warningId) {
        if (cResult[3] === warningType) {
          let tmp4 = cResult[4];
        }
        closure_8 = tmp4;
        if (cResult[5] === analyticsCancelContext) {
          if (cResult[6] === tmp4) {
            let tmp5 = cResult[7];
          }
          if (cResult[8] === analyticsBlockContext) {
            if (cResult[9] === onDismiss) {
              if (cResult[10] === tmp4) {
                let tmp6 = cResult[11];
              }
              if (cResult[12] === analyticsBlockAndReportContext) {
                if (cResult[13] === onDismiss) {
                  if (cResult[14] === tmp4) {
                    let tmp7 = cResult[15];
                  }
                  const _Symbol = Symbol;
                  class B {
                    constructor() {
                      tmp = closure_8(analyticsCancelContext);
                      return;
                    }
                  }
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[5]).intl;
                    const stringResult = intl.string(tmp(tmp2[5]).t["5NhTvu"]);
                    class B {
                      constructor() {
                        tmp = closure_8(analyticsCancelContext);
                        return;
                      }
                    }
                    cResult[16] = stringResult;
                    let tmp9 = stringResult;
                  } else {
                    tmp9 = cResult[16];
                  }
                  if (cResult[17] === channelId) {
                    if (cResult[18] === tmp5) {
                      if (cResult[19] === tmp7) {
                        if (cResult[20] === tmp6) {
                          if (cResult[21] === onClose) {
                            if (cResult[22] === senderId) {
                              let tmp11 = cResult[23];
                            }
                            return tmp11;
                          }
                        }
                      }
                    }
                  }
                  const obj2 = { userId: senderId, channelId, onClose, onCancel: tmp5, onBlock: tmp6, onBlockAndReport: tmp7, blockButtonVariant: "primary", description: tmp9 };
                  const tmp14 = analyticsBlockContext(warningId(tmp2[6]), obj2);
                  cResult[17] = channelId;
                  cResult[18] = tmp5;
                  cResult[19] = tmp7;
                  cResult[20] = tmp6;
                  cResult[21] = onClose;
                  cResult[22] = senderId;
                  cResult[23] = tmp14;
                  tmp11 = tmp14;
                }
              }
              const fn3 = function w() {
                if (onDismiss != null) {
                  tmp();
                }
                closure_8(analyticsBlockAndReportContext);
              };
              class B {
                constructor() {
                  tmp = closure_8(analyticsCancelContext);
                  return;
                }
              }
              cResult[12] = analyticsBlockAndReportContext;
              cResult[13] = onDismiss;
              cResult[14] = tmp4;
              cResult[15] = fn3;
              tmp7 = fn3;
            }
          }
          const fn2 = function b() {
            if (onDismiss != null) {
              tmp();
            }
            closure_8(analyticsBlockContext);
          };
          class B {
            constructor() {
              tmp = closure_8(analyticsCancelContext);
              return;
            }
          }
          cResult[8] = analyticsBlockContext;
          cResult[9] = onDismiss;
          cResult[10] = tmp4;
          cResult[11] = fn2;
          tmp6 = fn2;
        }
        class B {
          constructor() {
            tmp = closure_8(analyticsCancelContext);
            return;
          }
        }
        cResult[5] = analyticsCancelContext;
        cResult[6] = tmp4;
        cResult[7] = B;
        tmp5 = B;
      }
    }
  }
  const fn = function o(cta) {
    SafetyWarningUtils.trackCtaEvent({ channelId, warningId, senderId, warningType, cta });
  };
  cResult[0] = channelId;
  cResult[1] = senderId;
  cResult[2] = warningId;
  cResult[3] = warningType;
  cResult[4] = fn;
  tmp4 = fn;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const senderId = channelId.senderId;
  const analyticsBlockContext = channelId.analyticsBlockContext;
  const analyticsBlockAndReportContext = channelId.analyticsBlockAndReportContext;
  const analyticsCancelContext = channelId.analyticsCancelContext;
  const onDismiss = channelId.onDismiss;
  const items = [channelId, warningId, senderId, warningType];
  const callback = senderId.useCallback((cta) => {
    SafetyWarningUtils.trackCtaEvent({ channelId, warningId, senderId, warningType, cta });
  }, items);
  const items1 = [callback, analyticsCancelContext];
  const items2 = [onDismiss, callback, analyticsBlockContext];
  const callback1 = senderId.useCallback(() => {
    callback(analyticsCancelContext);
  }, items1);
  const items3 = [onDismiss, callback, analyticsBlockAndReportContext];
  const callback2 = senderId.useCallback(() => {
    if (onDismiss != null) {
      tmp();
    }
    callback(analyticsBlockContext);
  }, items2);
  const callback3 = senderId.useCallback(() => {
    if (onDismiss != null) {
      tmp();
    }
    callback(analyticsBlockAndReportContext);
  }, items3);
  const obj = { userId: senderId, channelId, onClose: channelId.onClose, onCancel: callback1, onBlock: callback2, onBlockAndReport: callback3, blockButtonVariant: "primary", description: null };
  const intl = channelId(warningType[5]).intl;
  obj.description = intl.string(channelId(warningType[5]).t["5NhTvu"]);
  return analyticsBlockContext(warningId(warningType[6]), obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/InappropriateConversationBlockAndReportAlert.tsx");

export default tmp2;
export const InappropriateConversationBlockAndReportAlert = tmp2;