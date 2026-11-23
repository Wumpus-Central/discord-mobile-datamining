// === Module 16470: PlayableStore ===

// Module 16470 (PlayableStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConstantsIOS from "ConstantsIOS" /* 1091 */;
import AdCreativeType from "AdCreativeType" /* 6565 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6651 */;
import PlayableAnalytics from "PlayableAnalytics" /* 16471 */;
import FramesStore from "FramesStore" /* 6623 */;
import AppStateStore from "AppStateStore" /* 2118 */;

require = fn;
function pauseOrResumeTimer(startedAt) {
  startedAt = startedAt.startedAt;
  obj = FramesStore;
  const tmp3 = refs(FramesStore.getFrame(startedAt.frameId));
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
  const tmp2Result = refs(obj.getFrame(startedAt.frameId));
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
    obj4.playedMsBeforeRun = startedAt.playedMsBeforeRun + diff;
    obj4.startedAt = null;
    obj = obj4;
    flag2 = true;
  }
  flag = flag2;
  const tmp4Result = DiscordAppStateDefault;
}
function attachPlayable(id, playable, impressionId) {
  const mainFrame = FramesStore.getMainFrame();
  id = undefined;
  if (mainFrame != null) {
    id = mainFrame.id;
  }
  let tmp3 = id === id;
  if (tmp3) {
    tmp3 = id === closure_1_11(playable.applicationId, application_id);
  }
  if (tmp3) {
    c3 = null;
    let frameId;
    if (obj != null) {
      frameId = obj.frameId;
    }
    if (frameId !== id) {
      obj = { playable, impressionId, frameId: id, playedMsBeforeRun: 0, rewardReached: false, completionReached: false, startedAt: null };
      pauseOrResumeTimer(obj);
      const obj3 = { event: AnalyticEvents.AD_PLAYABLE_PROGRESSED, properties: null };
      const obj4 = { progress: 0, threshold_met: obj.rewardReached, reward_timer_seconds: obj.playable.rewardTimerSeconds };
      obj3.properties = obj4;
      PlayableAnalytics.trackPlayableEvent(obj.playable.id, obj.impressionId, obj3);
    }
    tmp3 = tmp7;
  }
  return tmp3;
}
function handleVisibilityChange() {
  let tmp = null != obj;
  if (tmp) {
    tmp = pauseOrResumeTimer(obj);
  }
  return tmp;
}
const AnalyticEvents = fn(1071).AnalyticEvents;
const ActivityPanelModes = fn(5539).ActivityPanelModes;
const FramesConstants = fn(6624);
({ asLaunched: closure_10, makeFrameId: closure_11, MAIN_SURFACE: closure_12 } = FramesConstants);
let c13 = 30000;
let c3 = null;
let obj = null;
let set = new Set();
const Store = initializeDefault.Store;
class PlayableStore extends Store {
}
const prototype = PlayableStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(FramesStore, AppStateStore);
};
prototype["getPlayableForFrame"] = function getPlayableForFrame(frameId) {
  frameId = undefined;
  if (obj != null) {
    frameId = obj.frameId;
  }
  let playable = null;
  if (frameId === frameId) {
    playable = obj.playable;
  }
  return playable;
};
prototype["getTimerState"] = function getTimerState(playingPlayableId) {
  let id;
  if (obj != null) {
    id = obj.playable.id;
  }
  let tmp2 = null;
  if (id === playingPlayableId) {
    tmp2 = obj;
  }
  return tmp2;
};
prototype["getPlayingPlayableId"] = function getPlayingPlayableId() {
  let id;
  if (obj != null) {
    id = obj.playable.id;
  }
  if (id == null) {
    id = null;
  }
  return id;
};
prototype["isPlayableCompleted"] = function isPlayableCompleted(id) {
  return set.has(id);
};
prototype["isRunning"] = function isRunning(arg0) {
  let id;
  if (obj != null) {
    id = obj.playable.id;
  }
  let tmp2 = id === arg0;
  if (tmp2) {
    tmp2 = null != obj.startedAt;
  }
  return tmp2;
};
prototype["getRewardRemainingMs"] = function getRewardRemainingMs(playingPlayableId) {
  let bound = null;
  if (null != obj) {
    bound = null;
    if (obj.playable.id === playingPlayableId) {
      const self = this;
      const _Math = Math;
      const result = 1000 * obj.playable.rewardTimerSeconds;
      bound = Math.max(0, result - this.getPlayedMs(playingPlayableId));
    }
  }
  return bound;
};
prototype["getPlayedMs"] = function getPlayedMs(id) {
  let sum = null;
  if (null != obj) {
    sum = null;
    if (obj.playable.id === id) {
      let num = 0;
      if (null != obj.startedAt) {
        const _Date = Date;
        num = Date.now() - obj.startedAt;
      }
      sum = obj.playedMsBeforeRun + num;
    }
  }
  return sum;
};
prototype["getCompletionRemainingMs"] = function getCompletionRemainingMs(playingPlayableId) {
  const playedMs = this.getPlayedMs(playingPlayableId);
  let bound = null;
  if (null != playedMs) {
    const _Math = Math;
    bound = Math.max(0, c13 - playedMs);
  }
  return bound;
};
PlayableStore.displayName = "PlayableStore";
obj = {
  LOGOUT: function handleLogout() {
    c3 = null;
    set = new Set();
  },
  PLAYABLE_LAUNCH: function handlePlayableLaunch(playable) {
    c3 = { playable: playable.playable, launchId: playable.launchId, impressionId: playable.impressionId };
    return false;
  },
  PLAYABLE_LAUNCH_COMPLETE: function handlePlayableLaunchComplete(arg0) {
    let launchId1;
    ({ launchId, success } = arg0);
    if (_null != null) {
      launchId1 = _null.launchId;
    }
    if (launchId1 !== launchId) {
      return false;
    } else {
      const playable = _null.playable;
      if (success) {
        const mainFrame = FramesStore.getMainFrame();
        let applicationId;
        if (mainFrame != null) {
          applicationId = mainFrame.applicationId;
        }
        if (applicationId === playable.applicationId) {
          if (mainFrame.id === closure_1_11(playable.applicationId, application_id)) {
            const tmp8 = refs(mainFrame);
            let iframeId;
            if (tmp8 != null) {
              iframeId = tmp8.data.iframeId;
            }
            let flag2 = null != iframeId;
            if (flag2) {
              flag2 = attachPlayable(mainFrame.id, playable, tmp12);
            }
          }
          return flag2;
        }
        _null = null;
        flag2 = false;
      } else {
        _null = null;
        return false;
      }
    }
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(frameId) {
    frameId = frameId.frameId;
    const frame = FramesStore.getFrame(frameId);
    let playable;
    if (_null != null) {
      playable = _null.playable;
    }
    let tmp5Result = null != playable;
    if (tmp5Result) {
      let applicationId;
      if (frame != null) {
        applicationId = frame.applicationId;
      }
      tmp5Result = playable.applicationId === applicationId;
    }
    if (tmp5Result) {
      let impressionId;
      if (_null != null) {
        impressionId = _null.impressionId;
      }
      tmp5Result = attachPlayable(frameId, playable, impressionId);
    }
    return tmp5Result;
  },
  FRAME_STOP: function handleFrameStop(arg0) {
    ({ frameId, applicationId } = arg0);
    let applicationId1;
    if (_null != null) {
      applicationId1 = _null.playable.applicationId;
    }
    let tmp2 = applicationId1 === applicationId;
    if (tmp2) {
      tmp2 = frameId === closure_1_11(applicationId, application_id);
    }
    if (tmp2) {
      _null = null;
    }
    if (null != obj) {
      if (obj.frameId === frameId) {
        const playedMs = playableStore.getPlayedMs(obj.playable.id);
        obj = PlayableAnalytics;
        const obj2 = { event: AnalyticEvents.AD_PLAYABLE_CLOSED, properties: null };
        const obj3 = { elapsed_ms: playedMs, threshold_met: obj.rewardReached, reward_timer_seconds: obj.playable.rewardTimerSeconds };
        obj2.properties = obj3;
        obj.trackPlayableEvent(obj.playable.id, obj.impressionId, obj2);
        obj = null;
      }
    }
    return false;
  },
  PLAYABLE_REWARD_TIMER_COMPLETE: function handlePlayableRewardTimerComplete(playableId) {
    playableId = playableId.playableId;
    if (null != obj) {
      if (obj.playable.id === playableId) {
        if (!obj.rewardReached) {
          obj = {};
          const merged = Object.assign(obj);
          obj.rewardReached = true;
          const _Math = Math;
          const bound = Math.min(1, playableStore.getPlayedMs(playableId) / c13);
          const obj3 = { event: AnalyticEvents.AD_PLAYABLE_PROGRESSED, properties: null };
          const obj4 = { progress: bound, threshold_met: obj.rewardReached, reward_timer_seconds: obj.playable.rewardTimerSeconds };
          obj3.properties = obj4;
          PlayableAnalytics.trackPlayableEvent(obj.playable.id, obj.impressionId, obj3);
        }
      }
    }
    return false;
  },
  PLAYABLE_COMPLETION_REACHED: function handlePlayableCompletionReached(arg0) {
    if (null != obj) {
      if (obj.playable.id === tmp) {
        if (!obj.completionReached) {
          obj = {};
          const merged = Object.assign(obj);
          obj.completionReached = true;
          const obj3 = { event: AnalyticEvents.AD_PLAYABLE_PROGRESSED, properties: null };
          const obj4 = { progress: 1, threshold_met: obj.rewardReached, reward_timer_seconds: obj.playable.rewardTimerSeconds };
          obj3.properties = obj4;
          PlayableAnalytics.trackPlayableEvent(obj.playable.id, obj.impressionId, obj3);
        }
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
  FRAME_SET_PANEL_MODE: handleVisibilityChange
};
const playableStore = new PlayableStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/PlayableStore.tsx");

export default playableStore;
export const PLAYABLE_COMPLETION_MS = 30000;