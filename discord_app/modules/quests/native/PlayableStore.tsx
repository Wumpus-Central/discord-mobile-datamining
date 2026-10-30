// discord_app/modules/quests/native/PlayableStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import QuestTypes from "../QuestTypes.tsx";
import DiscordAppStateDefault from "../../app_state/DiscordAppState.native.tsx";
import AdDecisionUtils from "../../ads/utils/AdDecisionUtils.tsx";
import AdDeliveryStore from "../../ads/AdDeliveryStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
function pauseOrResumeTimer(c3) {
  const startedAt = _null.startedAt;
  const tmp3 = asLaunched(FramesStore.getFrame(_null.frameId));
  const state = DiscordAppStateDefault.getState();
  let tmp8 = state === ConstantsIOS.AppStates.ACTIVE;
  if (tmp8) {
    let activityPanelMode;
    if (tmp3 != null) {
      activityPanelMode = tmp3.data.activityPanelMode;
    }
    tmp8 = activityPanelMode === ActivityPanelModes.PANEL;
  }
  if (tmp8) {
    if (!tmp) {
      const obj3 = {};
      const merged = Object.assign(_null);
      const _Date = Date;
      obj3.startedAt = Date.now();
      _null = obj3;
      let flag = true;
    }
    return flag;
  }
  const tmp2Result = asLaunched(FramesStore.getFrame(_null.frameId));
  const state1 = DiscordAppStateDefault.getState();
  let tmp17 = state1 === ConstantsIOS.AppStates.ACTIVE;
  if (tmp17) {
    let activityPanelMode1;
    if (tmp2Result != null) {
      activityPanelMode1 = tmp2Result.data.activityPanelMode;
    }
    tmp17 = activityPanelMode1 === ActivityPanelModes.PANEL;
  }
  if (!tmp17) {
    tmp17 = !tmp;
  }
  let flag2 = !tmp17;
  if (!tmp17) {
    const _Date2 = Date;
    const obj4 = {};
    const diff = Date.now() - startedAt;
    const merged1 = Object.assign(_null);
    const _Math = Math;
    obj4.remainingMs = Math.max(0, _null.remainingMs - diff);
    obj4.startedAt = null;
    _null = obj4;
    flag2 = true;
  }
  flag = flag2;
  const tmp4Result = DiscordAppStateDefault;
}
function handleVisibilityChange() {
  let tmp = null != c3;
  if (tmp) {
    tmp = pauseOrResumeTimer(c3);
  }
  return tmp;
}
const ActivityPanelModes = fn(5652).ActivityPanelModes;
const asLaunched = fn(6841).asLaunched;
let c3 = null;
const Store = initializeDefault.Store;
class PlayableStore extends Store {}
const prototype = PlayableStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(FramesStore, AdDeliveryStore, AppStateStore);
};
prototype["getPlayingPlayableId"] = function getPlayingPlayableId() {
  let playableId;
  if (_null != null) {
    playableId = _null.playableId;
  }
  if (playableId == null) {
    playableId = null;
  }
  return playableId;
};
prototype["isRunning"] = function isRunning(arg0) {
  let playableId;
  if (_null != null) {
    playableId = _null.playableId;
  }
  let tmp2 = playableId === arg0;
  if (tmp2) {
    tmp2 = null != _null.startedAt;
  }
  return tmp2;
};
prototype["getRemainingMs"] = function getRemainingMs(playingPlayableId) {
  let tmp = null;
  if (null != _null) {
    tmp = null;
    if (_null.playableId === playingPlayableId) {
      if (null == _null.startedAt) {
        let remainingMs = _null.remainingMs;
      } else {
        const _Math = Math;
        const _Date = Date;
        remainingMs = Math.max(0, _null.remainingMs - (Date.now() - _null.startedAt));
      }
    }
  }
  return tmp;
};
PlayableStore.displayName = "PlayableStore";
const playableStore = new PlayableStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    c3 = null;
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(frameId) {
    frameId = frameId.frameId;
    if (null != c3) {
      return false;
    } else {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
      let creative;
      if (value != null) {
        creative = value.creative;
      }
      const deliveredPlayable = AdDecisionUtils.getDeliveredPlayable(creative);
      if (null != deliveredPlayable) {
        const frame = FramesStore.getFrame(frameId);
        let applicationId;
        if (frame != null) {
          applicationId = frame.applicationId;
        }
        if (deliveredPlayable.applicationId === applicationId) {
          const obj = {
            playableId: deliveredPlayable.id,
            frameId,
            remainingMs: 1000 * deliveredPlayable.rewardTimerSeconds,
            startedAt: null,
          };
          c3 = obj;
          pauseOrResumeTimer(obj);
        }
      }
      return false;
    }
  },
  FRAME_STOP: function handleFrameStop(arg0) {
    if (null != _null) {
      if (_null.frameId === tmp) {
        _null = null;
      }
    }
    return false;
  },
  APP_STATE_UPDATE: handleVisibilityChange,
  FRAME_SET_PANEL_MODE: handleVisibilityChange,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/PlayableStore.tsx");

export default playableStore;
