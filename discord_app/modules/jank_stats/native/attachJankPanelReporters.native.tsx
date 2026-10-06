// discord_app/modules/jank_stats/native/attachJankPanelReporters.native.tsx
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import VoicePanelStore from "../../voice_panel/VoicePanelStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2;

let c7 = false;
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  let f131266;
  let voice;
  const f1312652 = () => {
    const tmp = closure_1_1();
    if (tmp !== closure_2) {
      closure_2 = tmp;
      const obj = voice(f131266[5]);
      obj.setJankPanelOpen(f131265, tmp);
    }
  };
  const f148974 = (addChangeListener) => addChangeListener.addChangeListener(f131265);
  let isAndroidResult = !c7;
  if (isAndroidResult) {
    let obj = voice(f131266[6]);
    isAndroidResult = obj.isAndroid();
  }
  if (isAndroidResult) {
    c7 = true;
    voice = "voice";
    f131266 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    let state = VoicePanelStore.getState();
    let c2 = state.isAnyVoicePanelOpen();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    if (c2) {
      const obj4 = voice(f131266[5]);
      obj4.setJankPanelOpen("voice", true);
    }
    const subscription = VoicePanelStore.subscribe(f1312652);
    const items = [c2, ChannelStore, SelectedChannelStore];
    const activity = "activity";
    const f131267 = () => {
      const obj = activity(f131267[7]);
      let result = obj.isConnectedToActivityInText();
      if (result) {
        const tmpResult = activity(f131267[7]);
        result = tmpResult.isActivityPanelFullscreen();
      }
      return result;
    };
    c2 = undefined;
    const obj5 = voice(f131266[7]);
    let result = obj5.isConnectedToActivityInText();
    if (result) {
      const tmp12Result = voice(f131266[7]);
      result = tmp12Result.isActivityPanelFullscreen();
    }
    c2 = result;
    if (c2) {
      const tmp12Result3 = voice(f131266[5]);
      tmp12Result3.setJankPanelOpen("activity", true);
    }
    let f131265 = f1312652;
    const item = items.forEach(f148974);
    const isFramePanelFullscreen = tmp12(tmp13[8]).isFramePanelFullscreen;
    const items1 = [FramesStore];
    const frame_str = "frame";
    const result1 = isFramePanelFullscreen();
    if (result1) {
      const tmp12Result4 = voice(f131266[5]);
      tmp12Result4.setJankPanelOpen("frame", true);
    }
    f131265 = f1312652;
    const item1 = items1.forEach(f148974);
  }
}
