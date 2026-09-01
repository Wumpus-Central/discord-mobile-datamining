// === Module 9994: Soundpacks ===

// Module 9994 (Soundpacks)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import Soundpacks2 from "Soundpacks" /* 9995 */;

const Soundpacks = Soundpacks2.Soundpacks;
let closure_1 = { soundpack: Soundpacks.CLASSIC, lastSoundpackExperimentId: null };
const PersistedStore = initializeDefault.PersistedStore;
class SoundpackStore extends PersistedStore {
}
const prototype = SoundpackStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_1 = arg0;
    const _Object = Object;
    const values = Object.values(Soundpacks);
    if (!values.includes(closure_1.soundpack)) {
      closure_1.soundpack = tmp2.CLASSIC;
    }
    tmp2 = Soundpacks;
  }
};
prototype["getState"] = function getState() {
  return closure_1;
};
prototype["getSoundpack"] = function getSoundpack() {
  return closure_1.soundpack;
};
prototype["getLastSoundpackExperimentId"] = function getLastSoundpackExperimentId() {
  return closure_1.lastSoundpackExperimentId;
};
SoundpackStore.displayName = "SoundpackStore";
SoundpackStore.persistKey = "SoundpackStore";
const soundpackStore = new SoundpackStore(dispatcherDefault, {
  SET_SOUNDPACK: function handleSetSoundpack(forExperimentId) {
    let lastSoundpackExperimentId = forExperimentId.forExperimentId;
    const obj = { soundpack: forExperimentId.soundpack, lastSoundpackExperimentId: null };
    if (undefined === lastSoundpackExperimentId) {
      lastSoundpackExperimentId = obj.lastSoundpackExperimentId;
    }
    obj[1] = lastSoundpackExperimentId;
  }
});
const result = set.fileFinishedImporting("modules/soundpacks/SoundpackStore.tsx");

export default soundpackStore;