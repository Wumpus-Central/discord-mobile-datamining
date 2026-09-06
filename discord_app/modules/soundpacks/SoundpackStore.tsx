// === Module 9903: SoundpackStore ===

// Module 9903 (SoundpackStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 9904 */;
import size from "module_2" /* 2 */;

const Soundpacks = Constants.Soundpacks;
let obj = { soundpack: Soundpacks.CLASSIC, lastSoundpackExperimentId: null };
const PersistedStore = initializeDefault.PersistedStore;
class SoundpackStore extends PersistedStore {
}
const prototype = SoundpackStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    const _Object = Object;
    const values = Object.values(Soundpacks);
    if (!values.includes(arg0.soundpack)) {
      obj.soundpack = Soundpacks.CLASSIC;
    }
  }
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["getSoundpack"] = function getSoundpack() {
  return obj.soundpack;
};
prototype["getLastSoundpackExperimentId"] = function getLastSoundpackExperimentId() {
  return obj.lastSoundpackExperimentId;
};
SoundpackStore.displayName = "SoundpackStore";
SoundpackStore.persistKey = "SoundpackStore";
obj = {
  SET_SOUNDPACK: function handleSetSoundpack(forExperimentId) {
    let lastSoundpackExperimentId = forExperimentId.forExperimentId;
    obj = { soundpack: forExperimentId.soundpack, lastSoundpackExperimentId: null };
    if (undefined === lastSoundpackExperimentId) {
      lastSoundpackExperimentId = obj.lastSoundpackExperimentId;
    }
    obj.lastSoundpackExperimentId = lastSoundpackExperimentId;
  }
};
const soundpackStore = new SoundpackStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackStore.tsx");

export default soundpackStore;