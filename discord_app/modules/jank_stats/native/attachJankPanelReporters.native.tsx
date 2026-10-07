// discord_app/modules/jank_stats/native/attachJankPanelReporters.native.tsx
import getJankSurfaceName from "getJankSurfaceName.tsx";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import VoicePanelStore from "../../voice_panel/VoicePanelStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";

require = fn;
let c7 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  let isAndroidResult = !c7;
  if (!c7) {
    isAndroidResult = f131265(f131266[6]).isAndroid();
    let obj = f131265(f131266[6]);
  }
  if (isAndroidResult) {
    c7 = true;
    f131265 = "voice";
    f131266 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    state = VoicePanelStore.getState();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    closure_2 = isAnyVoicePanelOpenResult;
    if (isAnyVoicePanelOpenResult) {
      f131265(f131266[5]).setJankPanelOpen("voice", true);
      const obj4 = f131265(f131266[5]);
    }
    const subscription = VoicePanelStore.subscribe(() => {
      const tmp = f131266();
      if (tmp !== closure_2) {
        closure_2 = tmp;
        getJankSurfaceName.setJankPanelOpen(f131265, tmp);
      }
    });
    const items = [closure_2, ChannelStore, SelectedChannelStore];
    closure_129_0 = "activity";
    closure_129_1 = () => {
      let result = f131265(f131266[7]).isConnectedToActivityInText();
      if (result) {
        result = f131265(f131266[7]).isActivityPanelFullscreen();
        const tmpResult = f131265(f131266[7]);
      }
      return result;
    };
    closure_129_2 = undefined;
    let result = f131265(f131266[7]).isConnectedToActivityInText();
    if (result) {
      result = tmp12(tmp13[7]).isActivityPanelFullscreen();
      const tmp12Result = tmp12(tmp13[7]);
    }
    closure_129_2 = result;
    if (result) {
      tmp12(tmp13[5]).setJankPanelOpen("activity", true);
      const tmp12Result3 = tmp12(tmp13[5]);
    }
    f131265 = () => {
      const tmp = f131266();
      if (tmp !== closure_2) {
        closure_2 = tmp;
        getJankSurfaceName.setJankPanelOpen(f131265, tmp);
      }
    };
    const item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(f131265));
    const isFramePanelFullscreen = tmp12(tmp13[8]).isFramePanelFullscreen;
    const items1 = [FramesStore];
    closure_130_0 = "frame";
    closure_130_1 = isFramePanelFullscreen;
    const result1 = isFramePanelFullscreen();
    closure_130_2 = result1;
    if (result1) {
      tmp12(tmp13[5]).setJankPanelOpen("frame", true);
      const tmp12Result4 = tmp12(tmp13[5]);
    }
    f131265 = () => {
      const tmp = f131266();
      if (tmp !== closure_2) {
        closure_2 = tmp;
        getJankSurfaceName.setJankPanelOpen(f131265, tmp);
      }
    };
    const item1 = items1.forEach((addChangeListener) => addChangeListener.addChangeListener(f131265));
    const obj5 = f131265(f131266[7]);
  }
}
