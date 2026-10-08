// === Module 17867: attachJankPanelReporters ===

// Module 17867 (attachJankPanelReporters)
import getJankSurfaceName from "getJankSurfaceName" /* 16238 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import FramesStore from "FramesStore" /* 10612 */;
import VoicePanelStore from "VoicePanelStore" /* 6079 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;

require = fn;
const isStreamParticipant = fn(5113).isStreamParticipant;
let c10 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  let isAndroidResult = !c10;
  if (!c10) {
    isAndroidResult = update(f132635[10]).isAndroid();
    let obj = update(f132635[10]);
  }
  if (isAndroidResult) {
    c10 = true;
    update = "voice";
    f132635 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    state = VoicePanelStore.getState();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    closure_2 = isAnyVoicePanelOpenResult;
    if (isAnyVoicePanelOpenResult) {
      update(f132635[8]).setJankPanelOpen("voice", true);
      let obj4 = update(f132635[8]);
    }
    const subscription = VoicePanelStore.subscribe(() => {
      const tmp = f132635();
      if (tmp !== closure_2) {
        closure_2 = tmp;
        getJankSurfaceName.setJankPanelOpen(update, tmp);
      }
    });
    const items = [closure_2, ChannelStore, SelectedChannelStore];
    closure_129_0 = "activity";
    closure_129_1 = () => {
      let result = update(f132635[11]).isConnectedToActivityInText();
      if (result) {
        result = update(f132635[11]).isActivityPanelFullscreen();
        const tmpResult = update(f132635[11]);
      }
      return result;
    };
    closure_129_2 = undefined;
    let result = update(f132635[11]).isConnectedToActivityInText();
    if (result) {
      result = tmp12(tmp13[11]).isActivityPanelFullscreen();
      const tmp12Result = tmp12(tmp13[11]);
    }
    closure_129_2 = result;
    if (result) {
      tmp12(tmp13[8]).setJankPanelOpen("activity", true);
      const tmp12Result4 = tmp12(tmp13[8]);
    }
    update = () => {
      const tmp = f132635();
      if (tmp !== closure_2) {
        closure_2 = tmp;
        getJankSurfaceName.setJankPanelOpen(update, tmp);
      }
    };
    const item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(update));
    const isFramePanelFullscreen = tmp12(tmp13[12]).isFramePanelFullscreen;
    const items1 = [FramesStore];
    closure_130_0 = "frame";
    closure_130_1 = isFramePanelFullscreen;
    const result1 = isFramePanelFullscreen();
    closure_130_2 = result1;
    if (result1) {
      tmp12(tmp13[8]).setJankPanelOpen("frame", true);
      const tmp12Result5 = tmp12(tmp13[8]);
    }
    update = () => {
      const tmp = f132635();
      if (tmp !== closure_2) {
        closure_2 = tmp;
        getJankSurfaceName.setJankPanelOpen(update, tmp);
      }
    };
    const item1 = items1.forEach((addChangeListener) => addChangeListener.addChangeListener(update));
    update = function update() {
      const result = update(f132635[8]).setJankVoicePanelFocus((function getVoicePanelFocus() {
        const voicePanelsOpened = state.getState().voicePanelsOpened;
        if (0 === voicePanelsOpened.size) {
          return null;
        } else {
          currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
          let embeddedActivityParticipantId = null;
          if (null != currentEmbeddedActivity) {
            ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
            embeddedActivityParticipantId = update(dependencyMap[9]).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null });
            const obj = update(dependencyMap[9]);
            const obj4 = { applicationId: null, instanceId: null };
          }
          for (const item10023 of voicePanelsOpened) {
            selectedParticipant = selectedParticipant.getSelectedParticipant(item10023);
            let tmp10 = selectedParticipant;
            if (null != selectedParticipant) {
              if (tmp10.id === embeddedActivityParticipantId) {
                obj3.return();
                let str2 = "activity";
                return "activity";
              } else if (closure_1_9(tmp10)) {
                if (tmp10.user.id !== tmp5) {
                  obj3.return();
                  let str = "stream";
                  return "stream";
                }
              }
            }
            continue;
          }
          return null;
        }
      })());
    };
    const obj5 = update(f132635[11]);
    const tmp9 = closure_2;
    const result2 = update(f132635[8]).setJankVoicePanelFocus((function getVoicePanelFocus() {
      const voicePanelsOpened = state.getState().voicePanelsOpened;
      if (0 === voicePanelsOpened.size) {
        return null;
      } else {
        currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
        let embeddedActivityParticipantId = null;
        if (null != currentEmbeddedActivity) {
          ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
          embeddedActivityParticipantId = update(dependencyMap[9]).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null });
          const obj = update(dependencyMap[9]);
          const obj4 = { applicationId: null, instanceId: null };
        }
        for (const item10023 of voicePanelsOpened) {
          selectedParticipant = selectedParticipant.getSelectedParticipant(item10023);
          let tmp10 = selectedParticipant;
          if (null != selectedParticipant) {
            if (tmp10.id === embeddedActivityParticipantId) {
              obj3.return();
              let str2 = "activity";
              return "activity";
            } else if (closure_1_9(tmp10)) {
              if (tmp10.user.id !== tmp5) {
                obj3.return();
                let str = "stream";
                return "stream";
              }
            }
          }
          continue;
        }
        return null;
      }
    })());
    const subscription1 = VoicePanelStore.subscribe(update);
    const items2 = [ChannelRTCStore, tmp9];
    const item2 = items2.forEach((addChangeListener) => addChangeListener.addChangeListener(update));
    const tmp12Result6 = update(f132635[8]);
  }
};