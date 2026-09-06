// discord_app/modules/soundpacks/SoundpackStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Soundpacks = Constants.Soundpacks;
let obj = { soundpack: Soundpacks.CLASSIC, lastSoundpackExperimentId: null };
const PersistedStore = initializeDefault.PersistedStore;
class SoundpackStore extends PersistedStore {}
const prototype = SoundpackStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    const _Object = Object;
    const values = Object.values(Soundpacks);
    if (!values.includes(arg0.soundpack)) {
      obj.soundpack = tmp2.CLASSIC;
    }
    tmp2 = Soundpacks;
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
  },
};
const soundpackStore = new SoundpackStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackStore.tsx");

export default soundpackStore;
