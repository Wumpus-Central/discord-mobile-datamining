// discord_app/modules/collectibles/records/ProfileEffectRecord.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class ProfileEffectRecord extends BaseCollectiblesItemRecord {
  constructor(arg0) {
    const tmp2 = new ProfileEffectRecord(arg0, new.target, this, tmp);
    tmp2.type = CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT;
    ({
      title: tmp2.title,
      description: tmp2.description,
      accessibilityLabel: tmp2.accessibilityLabel,
      reducedMotionSrc: tmp2.reducedMotionSrc,
      thumbnailPreviewSrc: tmp2.thumbnailPreviewSrc,
      effects: tmp2.effects,
      animationType: tmp2.animationType,
      staticFrameSrc: tmp2.staticFrameSrc,
    } = arg0);
    return tmp2;
  }
  static fromServer(arg0) {
    const obj = {};
    const merged = Object.assign(super.fromServer(arg0));
    const merged1 = Object.assign(arg0);
    if (typeof ProfileEffectRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp2 = new ProfileEffectRecord(obj, arg0, this, merged);
      tmp2.type = CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT;
      ({
        title: tmp5.title,
        description: tmp5.description,
        accessibilityLabel: tmp5.accessibilityLabel,
        reducedMotionSrc: tmp5.reducedMotionSrc,
        thumbnailPreviewSrc: tmp5.thumbnailPreviewSrc,
        effects: tmp5.effects,
        animationType: tmp5.animationType,
        staticFrameSrc: tmp5.staticFrameSrc,
      } = obj);
      return tmp2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/ProfileEffectRecord.tsx");

export default ProfileEffectRecord;
export const RestartMethod = { FromLoop: "fromLoop", FromStart: "fromStart" };
export const isProfileEffectRecord = function isProfileEffectRecord(first1) {
  return first1 instanceof ProfileEffectRecord;
};
