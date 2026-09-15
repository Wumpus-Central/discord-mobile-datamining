// === Module 2001: Kv ===

// Module 2001 (Kv)
import Host2 from "Host" /* 1996 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Kv.tsx");
const prototype = function Kv() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["databases"] = function databases() {
  const Host = Host2.Host;
  return Host.list();
};
prototype["optimize"] = function optimize(arg0) {
  const Host = Host2.Host;
  return Host.optimize(arg0);
};

export const Kv = prototype;