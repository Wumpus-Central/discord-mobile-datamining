// === Module 18748: SoundpackActions ===

// Module 18748 (SoundpackActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import SoundpackStore from "SoundpackStore" /* 11483 */;

const AnalyticEvents = fn(1087).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() });
  const obj2 = { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() };
  DispatcherDefault.dispatch({ type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name });
};