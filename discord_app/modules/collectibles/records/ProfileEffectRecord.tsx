// === Module 7790: ProfileEffectRecord ===

// Module 7790 (ProfileEffectRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord" /* 1972 */;

require = fn;
const prototype = function ProfileEffectRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  tmp2.type = CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT;
  ({ title: tmp2.title, description: tmp2.description, accessibilityLabel: tmp2.accessibilityLabel, reducedMotionSrc: tmp2.reducedMotionSrc, thumbnailPreviewSrc: tmp2.thumbnailPreviewSrc, effects: tmp2.effects, animationType: tmp2.animationType, staticFrameSrc: tmp2.staticFrameSrc } = arg0);
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  const merged = Object.assign(super.fromServer(arg0));
  const merged1 = Object.assign(arg0);
  if (typeof prototype === "function") {
    const tmp2 = new prototype(obj, arg0, this, merged);
    tmp2.type = CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT;
    ({ title: tmp7.title, description: tmp7.description, accessibilityLabel: tmp7.accessibilityLabel, reducedMotionSrc: tmp7.reducedMotionSrc, thumbnailPreviewSrc: tmp7.thumbnailPreviewSrc, effects: tmp7.effects, animationType: tmp7.animationType, staticFrameSrc: tmp7.staticFrameSrc } = obj);
    return tmp2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/ProfileEffectRecord.tsx");

export default prototype;
export const RestartMethod = { FromLoop: "fromLoop", FromStart: "fromStart" };
export const isProfileEffectRecord = function isProfileEffectRecord(first1) {
  return first1 instanceof prototype;
};