// === Module 16890: reportMalformedStorageValues ===

// Module 16890 (reportMalformedStorageValues)
import set from "set" /* 2 */;
import _modDef1208 from "module_1208" /* 1208 */;
import _mod1957 from "module_1957" /* 1957 */;

let c3 = false;
const result = set.fileFinishedImporting("modules/app_database/app/reportMalformedStorageValues.tsx");

export default function reportMalformedStorageValues(arg0) {
  if (!c3) {
    const Stats = _mod1957.Stats;
    const malformedValueCountResult = Stats.malformedValueCount();
    const Stats2 = _mod1957.Stats;
    const malformedEntryCountResult = Stats2.malformedEntryCount();
    if (!tmp5) {
      c3 = true;
      let obj = _modDef1208;
      obj = { extra: null, fingerprint: null };
      obj = { malformed_value_count: null, malformed_entry_count: null, source: null };
      obj[0] = malformedValueCountResult;
      obj[1] = malformedEntryCountResult;
      obj[2] = arg0;
      obj[0] = obj;
      obj[1] = ["kv-storage-omitted-undecodable-values"];
      obj.captureMessage("kv-storage: omitted undecodable values", obj, "warning");
    }
    tmp5 = 0 === malformedValueCountResult && 0 === malformedEntryCountResult;
  }
};