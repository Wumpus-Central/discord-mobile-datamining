// discord_app/modules/collectibles/records/NameplateRecord.tsx
import fromServerDefault from "BaseCollectiblesItemRecord.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";

require = fn;
fromServerDefault;
const prototype = function NameplateRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  // ThrowIfThisInitialized (0x7c)
  tmp2.type = CollectiblesItemType.CollectiblesItemType.NAMEPLATE;
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
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  tmp = new tmp(obj, arg0, this, merged);
  // ThrowIfThisInitialized (0x7c)
  tmp.type = CollectiblesItemType.CollectiblesItemType.NAMEPLATE;
  ({ asset: tmp4.asset, label: tmp4.label, palette: tmp4.palette } = obj);
  return tmp;
};
const result = require("obj132").fileFinishedImporting("modules/collectibles/records/NameplateRecord.tsx");

export default prototype;
export const isNameplateRecord = function isNameplateRecord(collectiblesItem) {
  return collectiblesItem instanceof prototype;
};