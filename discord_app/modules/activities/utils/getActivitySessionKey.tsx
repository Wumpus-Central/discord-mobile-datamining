// === Module 11473: getActivitySessionKey ===

// Module 11473 (getActivitySessionKey)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getActivitySessionKey.tsx");

export const getActivitySessionKey = function getActivitySessionKey(activity) {
  if (null == activity.application_id) {
    return null;
  } else {
    let session_id = activity.session_id;
    if (session_id == null) {
      const secrets = activity.secrets;
      let join;
      if (secrets != null) {
        join = secrets.join;
      }
      session_id = join;
    }
    if (session_id == null) {
      const party = activity.party;
      let id;
      if (party != null) {
        id = party.id;
      }
      session_id = id;
    }
    if (session_id == null) {
      const timestamps = activity.timestamps;
      let start;
      if (timestamps != null) {
        start = timestamps.start;
      }
      let StringResult = null;
      if (null != start) {
        const _String = String;
        StringResult = String(activity.timestamps.start);
      }
      session_id = StringResult;
    }
    let combined = null;
    if (null != session_id) {
      const _HermesInternal = HermesInternal;
      combined = "" + activity.application_id + ":" + session_id;
    }
    return combined;
  }
};