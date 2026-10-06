// === Module 9576: SoundpackStore ===

// Module 9576 (SoundpackStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 9577 */;
import size from "module_2" /* 2 */;

const Soundpacks = Constants.Soundpacks;
let obj = { soundpack: Soundpacks.CLASSIC, lastSoundpackExperimentId: null };
const PersistedStore = get_initializedDefault.PersistedStore;
class SoundpackStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      const _Object = Object;
      const values = Object.values(Soundpacks);
      if (!values.includes(arg0.soundpack)) {
        arg0.soundpack = Soundpacks.CLASSIC;
      }
    }
  }
  getState() {
    return obj;
  }
  getSoundpack() {
    return obj.soundpack;
  }
  getLastSoundpackExperimentId() {
    return obj.lastSoundpackExperimentId;
  }
}
const prototype = SoundpackStore.prototype;
SoundpackStore.displayName = "SoundpackStore";
SoundpackStore.persistKey = "SoundpackStore";
obj = {
  SET_SOUNDPACK: function handleSetSoundpack(forExperimentId) {
    let lastSoundpackExperimentId = forExperimentId.forExperimentId;
    obj = { soundpack: forExperimentId.soundpack, lastSoundpackExperimentId };
    if (undefined === lastSoundpackExperimentId) {
      lastSoundpackExperimentId = obj.lastSoundpackExperimentId;
    }
  }
};
const soundpackStore = new SoundpackStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackStore.tsx");

export default soundpackStore;