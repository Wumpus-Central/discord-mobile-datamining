// discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx");

export (arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  return (event, arg1, arg2) => {
    closure_1 = arg1;
    closure_2 = arg2;
    return new Promise((resolve) => {
      const obj = { type: properties, event, properties, flush: null, fingerprint: null, resolve: null };
      let flag;
      if (closure_2 != null) {
        flag = tmp2.flush;
      }
      if (flag == null) {
        flag = false;
      }
      obj.flush = flag;
      let fingerprint;
      if (closure_2 != null) {
        fingerprint = tmp2.fingerprint;
      }
      obj.fingerprint = fingerprint;
      obj.resolve = resolve;
      event.dispatch(obj);
    });
  };
}