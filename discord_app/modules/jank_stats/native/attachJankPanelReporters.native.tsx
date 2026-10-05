// === Module 17540: attachJankPanelReporters ===

// Module 17540 (attachJankPanelReporters)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import FramesStore from "FramesStore" /* 8703 */;
import VoicePanelStore from "VoicePanelStore" /* 5098 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

let closure_2;

let c7 = false;
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  let f131048;
  let voice;
  const f1310472 = () => {
    const tmp = closure_1_1();
    if (tmp !== closure_2) {
      closure_2 = tmp;
      const obj = voice(f131048[5]);
      obj.setJankPanelOpen(f131047, tmp);
    }
  };
  const f148739 = (addChangeListener) => addChangeListener.addChangeListener(f131047);
  let isAndroidResult = !c7;
  if (isAndroidResult) {
    let obj = voice(f131048[6]);
    isAndroidResult = obj.isAndroid();
  }
  if (isAndroidResult) {
    c7 = true;
    voice = "voice";
    f131048 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    let state = VoicePanelStore.getState();
    let c2 = state.isAnyVoicePanelOpen();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    if (c2) {
      const obj4 = voice(f131048[5]);
      obj4.setJankPanelOpen("voice", true);
    }
    const subscription = VoicePanelStore.subscribe(f1310472);
    const items = [c2, ChannelStore, SelectedChannelStore];
    const activity = "activity";
    const f131049 = () => {
      const obj = activity(f131049[7]);
      let result = obj.isConnectedToActivityInText();
      if (result) {
        const tmpResult = activity(f131049[7]);
        result = tmpResult.isActivityPanelFullscreen();
      }
      return result;
    };
    c2 = undefined;
    const obj5 = voice(f131048[7]);
    let result = obj5.isConnectedToActivityInText();
    if (result) {
      const tmp12Result = voice(f131048[7]);
      result = tmp12Result.isActivityPanelFullscreen();
    }
    c2 = result;
    if (c2) {
      const tmp12Result3 = voice(f131048[5]);
      tmp12Result3.setJankPanelOpen("activity", true);
    }
    let f131047 = f1310472;
    const item = items.forEach(f148739);
    const isFramePanelFullscreen = tmp12(tmp13[8]).isFramePanelFullscreen;
    const items1 = [FramesStore];
    const frame_str = "frame";
    const result1 = isFramePanelFullscreen();
    if (result1) {
      const tmp12Result4 = voice(f131048[5]);
      tmp12Result4.setJankPanelOpen("frame", true);
    }
    f131047 = f1310472;
    const item1 = items1.forEach(f148739);
  }
};