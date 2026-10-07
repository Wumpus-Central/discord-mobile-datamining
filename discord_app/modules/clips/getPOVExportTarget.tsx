// discord_app/modules/clips/getPOVExportTarget.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/clips/getPOVExportTarget.tsx");

export default function getPOVExportTarget(duration_secs) {
  if (null != duration_secs.duration_secs) {
    if (null != duration_secs.clip_sync_timestamp) {
      const obj = { duration: duration_secs.duration_secs, syncTimestamp: null };
      const _Date = Date;
      obj.syncTimestamp = Date.parse(duration_secs.clip_sync_timestamp);
      return obj;
    }
  }
}
