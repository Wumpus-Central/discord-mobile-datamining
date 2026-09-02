// === Module 7302: fromServer ===

// Module 7302 (fromServer)
import fromServerDefault from "fromServer" /* 1948 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;

require = arg1;
fromServerDefault;
let prototype;
prototype = function ProfileEffectRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  // ThrowIfThisInitialized (0x7c)
  tmp2.type = CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT;
  ({ title: tmp2.title, description: tmp2.description, accessibilityLabel: tmp2.accessibilityLabel, reducedMotionSrc: tmp2.reducedMotionSrc, thumbnailPreviewSrc: tmp2.thumbnailPreviewSrc, effects: tmp2.effects, animationType: tmp2.animationType, staticFrameSrc: tmp2.staticFrameSrc } = arg0);
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
  tmp.type = CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT;
  ({ title: tmp4.title, description: tmp4.description, accessibilityLabel: tmp4.accessibilityLabel, reducedMotionSrc: tmp4.reducedMotionSrc, thumbnailPreviewSrc: tmp4.thumbnailPreviewSrc, effects: tmp4.effects, animationType: tmp4.animationType, staticFrameSrc: tmp4.staticFrameSrc } = obj);
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/ProfileEffectRecord.tsx");

export default prototype;
export const RestartMethod = { FromLoop: "fromLoop", FromStart: "fromStart" };
export const isProfileEffectRecord = function isProfileEffectRecord(first) {
  return first instanceof prototype;
};