// === Module 1341: AnalyticsTrackingActionCreators ===

// Module 1341 (AnalyticsTrackingActionCreators)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx");

export const queueTrackingEventMaker = (dispatcher, TRACK_ACTION_NAME) => {
  let closure_0 = dispatcher;
  let closure_1 = TRACK_ACTION_NAME;
  return (event, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    const promise = new Promise((resolve) => {
      let fingerprint;
      let flag;
      const obj = { type: properties, event, properties, flush: flag, fingerprint, resolve };
      flag = undefined;
      const dispatch = event.dispatch;
      if (closure_2 != null) {
        flag = closure_2.flush;
      }
      if (flag == null) {
        flag = false;
      }
      fingerprint = undefined;
      if (closure_2 != null) {
        fingerprint = closure_2.fingerprint;
      }
      dispatch(obj);
    });
    return promise;
  };
};