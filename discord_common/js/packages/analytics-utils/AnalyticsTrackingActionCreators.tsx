// === Module 1331: AnalyticsTrackingActionCreators ===

// Module 1331 (AnalyticsTrackingActionCreators)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx");

export (dispatcher, TRACK_ACTION_NAME) => {
  closure_0 = dispatcher;
  closure_1 = TRACK_ACTION_NAME;
  return (event, arg1, arg2) => {
    closure_1 = arg1;
    closure_2 = arg2;
    return new Promise((resolve) => {
      const obj = { type: properties, event, properties, flush: null, fingerprint: null, resolve: null };
      let flag;
      if (closure_2 != null) {
        flag = closure_2.flush;
      }
      if (flag == null) {
        flag = false;
      }
      obj.flush = flag;
      let fingerprint;
      if (closure_2 != null) {
        fingerprint = closure_2.fingerprint;
      }
      obj.fingerprint = fingerprint;
      obj.resolve = resolve;
      event.dispatch(obj);
    });
  };
}