// discord_app/modules/soundpacks/SoundpackStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const soundpackStore = new SoundpackStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackStore.tsx");

export default soundpackStore;
