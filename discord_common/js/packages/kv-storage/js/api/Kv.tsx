// === Module 1969: databases ===

// Module 1969 (databases)
import obj132 from "obj132" /* 2 */;
import open from "open" /* 1964 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Kv.tsx");
const prototype = function Kv() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["databases"] = function databases() {
  const Host = open.Host;
  return Host.list();
};
prototype["optimize"] = function optimize(arg0) {
  const Host = open.Host;
  return Host.optimize(arg0);
};

export const Kv = prototype;