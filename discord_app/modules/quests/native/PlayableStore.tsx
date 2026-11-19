// discord_app/modules/quests/native/PlayableStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import DiscordAppStateDefault from "../../app_state/DiscordAppState.native.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
function pauseOrResumeTimer(startedAt) {
  startedAt = startedAt.startedAt;
  obj = FramesStore;
  const tmp3 = React6(FramesStore.getFrame(startedAt.frameId));
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
  const tmp2Result = React6(obj.getFrame(startedAt.frameId));
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
const ActivityPanelModes = fn(5418).ActivityPanelModes;
const FramesConstants = fn(6503);
({ asLaunched: closure_9, makeFrameId: closure_10, MAIN_SURFACE: closure_11 } = FramesConstants);
let c3 = null;
let obj = null;
let set = new Set();
const Store = initializeDefault.Store;
class PlayableStore extends Store {}
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
prototype["getTimerState"] = function getTimerState(arg0) {
  let id;
  if (obj != null) {
    id = obj.playable.id;
  }
  let tmp2 = null;
  if (id === arg0) {
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
prototype["getRemainingMs"] = function getRemainingMs(playingPlayableId) {
  let tmp = null;
  if (null != obj) {
    tmp = null;
    if (obj.playable.id === playingPlayableId) {
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
    c3 = null;
    set = new Set();
  },
  PLAYABLE_LAUNCH: function handlePlayableLaunch(playable) {
    c3 = { playable: playable.playable, launchId: playable.launchId };
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
        obj = FramesStore;
        const mainFrame = FramesStore.getMainFrame();
        let applicationId;
        if (mainFrame != null) {
          applicationId = mainFrame.applicationId;
        }
        if (applicationId === playable.applicationId) {
          if (mainFrame.id === refs(playable.applicationId, closure_1_11)) {
            const tmp16 = React6(mainFrame);
            let iframeId;
            if (tmp16 != null) {
              iframeId = tmp16.data.iframeId;
            }
            let flag2 = null != iframeId;
            if (flag2) {
              const id = mainFrame.id;
              const mainFrame1 = obj.getMainFrame();
              let id1;
              if (mainFrame1 != null) {
                id1 = mainFrame1.id;
              }
              let tmp7 = id1 === id && id === refs(playable.applicationId, closure_1_11);
              if (tmp7) {
                _null = null;
                let frameId;
                if (obj != null) {
                  frameId = obj.frameId;
                }
                if (frameId !== id) {
                  const obj2 = {
                    playable,
                    frameId: id,
                    remainingMs: 1000 * playable.rewardTimerSeconds,
                    startedAt: null,
                  };
                  obj = obj2;
                  pauseOrResumeTimer(obj2);
                }
                tmp7 = tmp9;
              }
              flag2 = tmp7;
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
    obj = FramesStore;
    const frame = FramesStore.getFrame(frameId);
    let playable;
    if (_null != null) {
      playable = _null.playable;
    }
    let tmp3 = null != playable;
    if (tmp3) {
      let applicationId;
      if (frame != null) {
        applicationId = frame.applicationId;
      }
      tmp3 = playable.applicationId === applicationId;
    }
    if (tmp3) {
      const mainFrame = obj.getMainFrame();
      let id;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      let tmp7 = id === frameId;
      if (tmp7) {
        tmp7 = frameId === refs(playable.applicationId, closure_1_11);
      }
      if (tmp7) {
        _null = null;
        let frameId1;
        if (obj != null) {
          frameId1 = obj.frameId;
        }
        if (frameId1 !== frameId) {
          const obj2 = { playable, frameId, remainingMs: 1000 * playable.rewardTimerSeconds, startedAt: null };
          obj = obj2;
          pauseOrResumeTimer(obj2);
        }
        tmp7 = tmp11;
      }
      tmp3 = tmp7;
    }
    return tmp3;
  },
  FRAME_STOP: function handleFrameStop(arg0) {
    ({ frameId, applicationId } = arg0);
    let applicationId1;
    if (_null != null) {
      applicationId1 = _null.playable.applicationId;
    }
    let tmp2 = applicationId1 === applicationId;
    if (tmp2) {
      tmp2 = frameId === refs(applicationId, closure_1_11);
    }
    if (tmp2) {
      _null = null;
    }
    return false;
  },
  PLAYABLE_REWARD_TIMER_COMPLETE: function handlePlayableRewardTimerComplete(arg0) {
    if (null != obj) {
      if (obj.playable.id === tmp) {
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
