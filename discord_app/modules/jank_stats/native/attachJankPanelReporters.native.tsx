// === Module 19388: attachJankPanelReporters ===

// Module 19388 (attachJankPanelReporters)
import getJankSurfaceName from "getJankSurfaceName" /* 17952 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4856 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6830 */;
import FramesStore from "FramesStore" /* 6833 */;
import VoicePanelStore from "VoicePanelStore" /* 6862 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;

require = fn;
const isStreamParticipant = fn(5670).isStreamParticipant;
let c10 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  if (!c10) {
    c10 = true;
    let update = "voice";
    const f140902 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    let state = VoicePanelStore.getState();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    closure_2 = isAnyVoicePanelOpenResult;
    if (isAnyVoicePanelOpenResult) {
      update(f140902[8]).setJankPanelOpen("voice", true);
      const obj3 = update(f140902[8]);
    }
    const subscription = VoicePanelStore.subscribe(() => {
      const tmp = f140902();
      if (tmp !== closure_2) {
        closure_2 = tmp;
        getJankSurfaceName.setJankPanelOpen(update, tmp);
      }
    });
    const items = [closure_2, ChannelStore, SelectedChannelStore];
    closure_129_0 = "activity";
    closure_129_1 = () => {
      let result = update(f140902[10]).isConnectedToActivityInText();
      if (result) {
        result = update(f140902[10]).isActivityPanelFullscreen();
        const tmpResult = update(f140902[10]);
      }
      return result;
    };
    closure_129_2 = undefined;
    let result = update(f140902[10]).isConnectedToActivityInText();
    if (result) {
      result = tmp9(tmp10[10]).isActivityPanelFullscreen();
      const tmp9Result = tmp9(tmp10[10]);
    }
    closure_129_2 = result;
    if (result) {
      tmp9(tmp10[8]).setJankPanelOpen("activity", true);
      const tmp9Result4 = tmp9(tmp10[8]);
    }
    update = () => {
      const tmp = f140902();
      if (tmp !== closure_2) {
        closure_2 = tmp;
        getJankSurfaceName.setJankPanelOpen(update, tmp);
      }
    };
    const item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(update));
    const isFramePanelFullscreen = tmp9(tmp10[11]).isFramePanelFullscreen;
    const items1 = [FramesStore];
    closure_130_0 = "frame";
    closure_130_1 = isFramePanelFullscreen;
    const result1 = isFramePanelFullscreen();
    closure_130_2 = result1;
    if (result1) {
      tmp9(tmp10[8]).setJankPanelOpen("frame", true);
      const tmp9Result5 = tmp9(tmp10[8]);
    }
    update = () => {
      const tmp = f140902();
      if (tmp !== closure_2) {
        closure_2 = tmp;
        getJankSurfaceName.setJankPanelOpen(update, tmp);
      }
    };
    const item1 = items1.forEach((addChangeListener) => addChangeListener.addChangeListener(update));
    update = function update() {
      const result = update(f140902[8]).setJankVoicePanelFocus((function getVoicePanelFocus() {
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
    let obj4 = update(f140902[10]);
    const tmp6 = closure_2;
    const result2 = update(f140902[8]).setJankVoicePanelFocus((function getVoicePanelFocus() {
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
    const items2 = [ChannelRTCStore, tmp6];
    const item2 = items2.forEach((addChangeListener) => addChangeListener.addChangeListener(update));
    const tmp9Result6 = update(f140902[8]);
  }
};