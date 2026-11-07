// discord_app/modules/quests/native/PlayableStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import DiscordAppStateDefault from "../../app_state/DiscordAppState.native.tsx";
import AdDecisionUtils from "../../ads/utils/AdDecisionUtils.tsx";
import AdDeliveryStore from "../../ads/AdDeliveryStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
function pauseOrResumeTimer(startedAt) {
  startedAt = startedAt.startedAt;
  obj = FramesStore;
  const tmp3 = asLaunched(FramesStore.getFrame(startedAt.frameId));
  state = DiscordAppStateDefault.getState();
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
      const merged = Object.assign(startedAt);
      const _Date = Date;
      obj3.startedAt = Date.now();
      obj = obj3;
      let flag = true;
    }
    return flag;
  }
  const tmp2Result = asLaunched(obj.getFrame(startedAt.frameId));
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
    const merged1 = Object.assign(startedAt);
    const _Math = Math;
    obj4.remainingMs = Math.max(0, startedAt.remainingMs - diff);
    obj4.startedAt = null;
    obj = obj4;
    flag2 = true;
  }
  flag = flag2;
  const tmp4Result = DiscordAppStateDefault;
}
function handleVisibilityChange() {
  let tmp = null != obj;
  if (tmp) {
    tmp = pauseOrResumeTimer(obj);
  }
  return tmp;
}
const ActivityPanelModes = fn(5781).ActivityPanelModes;
const asLaunched = fn(6902).asLaunched;
let obj = null;
let set = new Set();
const Store = initializeDefault.Store;
class PlayableStore extends Store {}
const prototype = PlayableStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(FramesStore, AdDeliveryStore, AppStateStore);
};
prototype["getPlayingPlayableId"] = function getPlayingPlayableId() {
  let playableId;
  if (obj != null) {
    playableId = obj.playableId;
  }
  if (playableId == null) {
    playableId = null;
  }
  return playableId;
};
prototype["isPlayableCompleted"] = function isPlayableCompleted(id) {
  return set.has(id);
};
prototype["isRunning"] = function isRunning(arg0) {
  let playableId;
  if (obj != null) {
    playableId = obj.playableId;
  }
  let tmp2 = playableId === arg0;
  if (tmp2) {
    tmp2 = null != obj.startedAt;
  }
  return tmp2;
};
prototype["getRemainingMs"] = function getRemainingMs(playingPlayableId) {
  let tmp = null;
  if (null != obj) {
    tmp = null;
    if (obj.playableId === playingPlayableId) {
      if (null == obj.startedAt) {
        let remainingMs = obj.remainingMs;
      } else {
        const _Math = Math;
        const _Date = Date;
        remainingMs = Math.max(0, obj.remainingMs - (Date.now() - obj.startedAt));
      }
    }
  }
  return tmp;
};
PlayableStore.displayName = "PlayableStore";
obj = {
  LOGOUT: function handleLogout() {
    set = new Set();
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(frameId) {
    frameId = frameId.frameId;
    if (null != obj) {
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
          obj = {
            playableId: deliveredPlayable.id,
            frameId,
            remainingMs: 1000 * deliveredPlayable.rewardTimerSeconds,
            startedAt: null,
          };
          pauseOrResumeTimer(obj);
        }
      }
      return false;
    }
  },
  FRAME_STOP: function handleFrameStop(arg0) {
    return false;
  },
  PLAYABLE_REWARD_TIMER_COMPLETE: function handlePlayableRewardTimerComplete(arg0) {
    if (null != obj) {
      if (obj.playableId === tmp) {
        obj = {};
        const merged = Object.assign(obj);
        obj.remainingMs = 0;
        obj.startedAt = null;
      }
    }
    return false;
  },
  PLAYABLE_REWARD_CLAIM_SUCCESS: function handleClaimPlayableRewardSuccess(playableId) {
    set = new Set(set);
    set.add(playableId.playableId);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(creative) {
    creative = creative.creative;
    let type;
    if (creative != null) {
      type = creative.type;
    }
    if (type === AdCreativeType.AdCreativeType.PLAYABLE) {
      if (set.has(creative.playable.id)) {
        const _Set = Set;
        set = new Set(set);
        set.delete(creative.playable.id);
      }
    }
    return false;
  },
  APP_STATE_UPDATE: handleVisibilityChange,
  FRAME_SET_PANEL_MODE: handleVisibilityChange,
};
const playableStore = new PlayableStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/PlayableStore.tsx");

export default playableStore;
