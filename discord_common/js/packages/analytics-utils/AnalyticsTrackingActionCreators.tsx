// === Module 658: queueTrackingEventMaker ===

// Module 658 (queueTrackingEventMaker)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx");

export (dispatcher, TRACK_ACTION_NAME) => {
  closure_0 = dispatcher;
  closure_1 = TRACK_ACTION_NAME;
  return (arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return new Promise((arg0) => {
      const obj = { type: closure_1, event: closure_0, properties: closure_1, flush: null, fingerprint: null, resolve: null };
      let flag;
      if (closure_2 != null) {
        flag = closure_2.flush;
      }
      if (flag == null) {
        flag = false;
      }
      obj[3] = flag;
      let fingerprint;
      if (closure_2 != null) {
        fingerprint = closure_2.fingerprint;
      }
      obj[4] = fingerprint;
      obj[5] = arg0;
      closure_0.dispatch(obj);
    });
  };
}