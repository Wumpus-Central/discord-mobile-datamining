// discord_app/modules/collectibles/records/NameplateRecord.tsx
import "fromServer";

const require = arg1;
let prototype;
prototype = function NameplateRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  // ThrowIfThisInitialized (0x7c)
  tmp2.type = require(1901) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE;
  ({ asset: tmp2.asset, label: tmp2.label, palette: tmp2.palette } = arg0);
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  let tmp = prototype;
  const merged = Object.assign(super.fromServer(arg0));
  const merged1 = Object.assign(arg0);
  if (typeof prototype !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  tmp = new tmp(obj, arg0, this, merged);
  // ThrowIfThisInitialized (0x7c)
  tmp.type = require(1901) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE;
  ({ asset: tmp4.asset, label: tmp4.label, palette: tmp4.palette } = obj);
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/NameplateRecord.tsx");

export default prototype;
export const isNameplateRecord = function isNameplateRecord(first) {
  return first instanceof prototype;
};