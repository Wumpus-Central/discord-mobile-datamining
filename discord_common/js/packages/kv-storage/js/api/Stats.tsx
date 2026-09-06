// === Module 2002: malformedValueCount ===

// Module 2002 (malformedValueCount)
import set from "set" /* 2 */;
import open from "open" /* 1995 */;

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