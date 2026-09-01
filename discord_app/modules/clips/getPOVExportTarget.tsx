// === Module 4548: getPOVExportTarget ===

// Module 4548 (getPOVExportTarget)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/clips/getPOVExportTarget.tsx");

export default function getPOVExportTarget(duration_secs) {
  if (null != duration_secs.duration_secs) {
    if (null != duration_secs.clip_sync_timestamp) {
      const obj = { duration: null, syncTimestamp: null };
      obj[0] = duration_secs.duration_secs;
      const _Date = Date;
      obj[1] = Date.parse(duration_secs.clip_sync_timestamp);
      return obj;
    }
  }
};