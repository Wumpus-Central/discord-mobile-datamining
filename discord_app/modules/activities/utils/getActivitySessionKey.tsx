// === Module 11073: getActivitySessionKey ===

// Module 11073 (getActivitySessionKey)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/getActivitySessionKey.tsx");

export const getActivitySessionKey = function getActivitySessionKey(application_id) {
  if (null == application_id.application_id) {
    return null;
  } else {
    let session_id = application_id.session_id;
    if (session_id == null) {
      const secrets = application_id.secrets;
      let join;
      if (secrets != null) {
        join = secrets.join;
      }
      session_id = join;
    }
    if (session_id == null) {
      const party = application_id.party;
      let id;
      if (party != null) {
        id = party.id;
      }
      session_id = id;
    }
    if (session_id == null) {
      const timestamps = application_id.timestamps;
      let start;
      if (timestamps != null) {
        start = timestamps.start;
      }
      let StringResult = null;
      if (null != start) {
        const _String = String;
        StringResult = String(application_id.timestamps.start);
      }
      session_id = StringResult;
    }
    let combined = null;
    if (null != session_id) {
      const _HermesInternal = HermesInternal;
      combined = "" + application_id.application_id + ":" + session_id;
    }
    return combined;
  }
};