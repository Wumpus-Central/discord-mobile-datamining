import { Soundpacks } from "Soundpacks";
import { PersistedStore } from "initialize";

let closure_1 = { soundpack: Soundpacks.CLASSIC, lastSoundpackExperimentId: null };
class SoundpackStore extends PersistedStore {
}
const prototype = SoundpackStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    let closure_1 = arg0;
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
const soundpackStore = new SoundpackStore(require("dispatcher"), {
  SET_SOUNDPACK: function handleSetSoundpack(forExperimentId) {
    let lastSoundpackExperimentId = forExperimentId.forExperimentId;
    const obj = { soundpack: forExperimentId.soundpack, lastSoundpackExperimentId: null };
    if (undefined === lastSoundpackExperimentId) {
      lastSoundpackExperimentId = obj.lastSoundpackExperimentId;
    }
    obj[1] = lastSoundpackExperimentId;
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/soundpacks/SoundpackStore.tsx");

export default soundpackStore;