// discord_app/modules/app_database/app/reportMalformedStorageValues.tsx
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import _mod1987 from "../../../../discord_common/js/packages/kv-storage/js/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3 = false;
const result = size.fileFinishedImporting("modules/app_database/app/reportMalformedStorageValues.tsx");

export default function reportMalformedStorageValues(source) {
  if (!c3) {
    const Stats = _mod1987.Stats;
    const malformedValueCountResult = Stats.malformedValueCount();
    const Stats2 = _mod1987.Stats;
    const malformedEntryCountResult = Stats2.malformedEntryCount();
    if (!tmp5) {
      c3 = true;
      let obj = { extra: null, fingerprint: null };
      obj = {
        malformed_value_count: malformedValueCountResult,
        malformed_entry_count: malformedEntryCountResult,
        source,
      };
      obj.extra = obj;
      obj.fingerprint = ["kv-storage-omitted-undecodable-values"];
      obj.captureMessage("kv-storage: omitted undecodable values", obj, "warning");
    }
    tmp5 = 0 === malformedValueCountResult && 0 === malformedEntryCountResult;
  }
}
