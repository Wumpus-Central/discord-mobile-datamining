// === Module 658: queueTrackingEventMaker ===

// Module 658 (queueTrackingEventMaker)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx");

export (arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return new Promise((arg0) => {
      const obj = { type: closure_1, event: closure_0, properties: closure_1, flush: null, fingerprint: null, resolve: null };
      let flag;
      if (closure_2 != null) {
        flag = tmp2.flush;
      }
      if (flag == null) {
        flag = false;
      }
      obj[3] = flag;
      let fingerprint;
      if (closure_2 != null) {
        fingerprint = tmp2.fingerprint;
      }
      obj[4] = fingerprint;
      obj[5] = arg0;
      closure_0.dispatch(obj);
    });
  };
}