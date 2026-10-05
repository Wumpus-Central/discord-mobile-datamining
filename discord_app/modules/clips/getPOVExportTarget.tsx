// === Module 13810: getPOVExportTarget ===

// Module 13810 (getPOVExportTarget)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/clips/getPOVExportTarget.tsx");

export default function getPOVExportTarget(duration_secs) {
  if (null != duration_secs.duration_secs) {
    if (null != duration_secs.clip_sync_timestamp) {
      const _Date = Date;
      const obj = { duration: duration_secs.duration_secs, syncTimestamp: Date.parse(duration_secs.clip_sync_timestamp) };
      return obj;
    }
  }
};