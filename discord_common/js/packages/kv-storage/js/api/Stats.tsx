// discord_common/js/packages/kv-storage/js/api/Stats.tsx
import set from "../../../../../../_runtime/00002_set.js";
import open from "../raw/Host.tsx";

const result = set.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Stats.tsx");
const prototype = function Stats() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["malformedValueCount"] = function malformedValueCount() {
  const Host = open.Host;
  return Host.malformedValueCount();
};
prototype["malformedEntryCount"] = function malformedEntryCount() {
  const Host = open.Host;
  return Host.malformedEntryCount();
};

export const Stats = prototype;