// === Module 17679: reportMalformedStorageValues ===

// Module 17679 (reportMalformedStorageValues)
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import _mod1988 from "module_1988" /* 1988 */;
import size from "module_2" /* 2 */;

let c3 = false;
const result = size.fileFinishedImporting("modules/app_database/app/reportMalformedStorageValues.tsx");

export default function reportMalformedStorageValues(source) {
  if (!c3) {
    const Stats = _mod1988.Stats;
    const malformedValueCountResult = Stats.malformedValueCount();
    const Stats2 = _mod1988.Stats;
    const malformedEntryCountResult = Stats2.malformedEntryCount();
    if (!tmp5) {
      c3 = true;
      const obj2 = { extra: null, fingerprint: null };
      const obj3 = { malformed_value_count: malformedValueCountResult, malformed_entry_count: malformedEntryCountResult, source };
      obj2.extra = obj3;
      obj2.fingerprint = ["kv-storage-omitted-undecodable-values"];
      SentryUtilsDefault.captureMessage("kv-storage: omitted undecodable values", obj2, "warning");
    }
    tmp5 = 0 === malformedValueCountResult && 0 === malformedEntryCountResult;
  }
};