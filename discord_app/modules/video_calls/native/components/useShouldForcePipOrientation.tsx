// === Module 9104: useShouldForcePipOrientation ===

// Module 9104 (useShouldForcePipOrientation)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9049 */;
import usePipVideoOrStreamDefault from "usePipVideoOrStream" /* 9105 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const OrientationLockState = fn(2011).OrientationLockState;
const CallConstants = fn(4917);
({ isStreamParticipant: closure_7, ParticipantTypes: closure_8 } = CallConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export const useShouldForcePipOrientation = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(6);
  channel = channel.channel;
  let tmp4 = usePipVideoOrStreamDefault(channel.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    cResult[1] = channel.id;
    cResult[2] = A;
  } else {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
  }
  const obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, A);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    const items1 = [EmbeddedActivitiesStore, ChannelRTCStore];
    cResult[3] = items1;
    const tmp10 = items1;
  } else {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
  }
  if (cResult[4] !== channel.id) {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    cResult[4] = channel.id;
    cResult[5] = tmp13;
  } else {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
  }
  const tmpResult = channel(504);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp10, tmp13);
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  if (null != tmp4) {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    if (tmp4.user.id !== AuthenticationStore.getId()) {
      class A {
        constructor() {
          participant = closure_4.getParticipant(channel.id, closure_5.getId());
          tmp2 = null;
          if (null != participant) {
            tmp3 = ParticipantTypes;
            tmp2 = null;
            if (participant.type === ParticipantTypes.USER) {
              tmp2 = null;
              if (null != participant.streamId) {
                tmp2 = participant;
              }
            }
          }
          return tmp2;
        }
      }
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
  }
  if (null != focusedEmbeddedActivityParticipant) {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    if (closure_7(focusedEmbeddedActivityParticipant)) {
      class A {
        constructor() {
          participant = closure_4.getParticipant(channel.id, closure_5.getId());
          tmp2 = null;
          if (null != participant) {
            tmp3 = ParticipantTypes;
            tmp2 = null;
            if (participant.type === ParticipantTypes.USER) {
              tmp2 = null;
              if (null != participant.streamId) {
                tmp2 = participant;
              }
            }
          }
          return tmp2;
        }
      }
    } else {
      class A {
        constructor() {
          participant = closure_4.getParticipant(channel.id, closure_5.getId());
          tmp2 = null;
          if (null != participant) {
            tmp3 = ParticipantTypes;
            tmp2 = null;
            if (participant.type === ParticipantTypes.USER) {
              tmp2 = null;
              if (null != participant.streamId) {
                tmp2 = participant;
              }
            }
          }
          return tmp2;
        }
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    const LANDSCAPE = dependencyMap.LANDSCAPE;
  } else {
    class A {
      constructor() {
        participant = closure_4.getParticipant(channel.id, closure_5.getId());
        tmp2 = null;
        if (null != participant) {
          tmp3 = ParticipantTypes;
          tmp2 = null;
          if (participant.type === ParticipantTypes.USER) {
            tmp2 = null;
            if (null != participant.streamId) {
              tmp2 = participant;
            }
          }
        }
        return tmp2;
      }
    }
    if (activityLockOrientation === tmp16.PORTRAIT) {
      class A {
        constructor() {
          participant = closure_4.getParticipant(channel.id, closure_5.getId());
          tmp2 = null;
          if (null != participant) {
            tmp3 = ParticipantTypes;
            tmp2 = null;
            if (participant.type === ParticipantTypes.USER) {
              tmp2 = null;
              if (null != participant.streamId) {
                tmp2 = participant;
              }
            }
          }
          return tmp2;
        }
      }
    }
  }
  const tmpResult2 = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  let OrientationType = dependencyMap;
  const tmp = usePipVideoOrStreamDefault(channel.id);
  const items = [ChannelRTCStore, AuthenticationStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(channel.id, AuthenticationStore.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === constants.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const obj = channel(504);
  const items1 = [EmbeddedActivitiesStore, ChannelRTCStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items1, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
    let applicationId;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    let tmp4 = null;
    if (null != applicationId) {
      let id;
      if (selectedParticipant != null) {
        id = selectedParticipant.id;
      }
      ({ applicationId: obj3.applicationId, compositeInstanceId: obj3.instanceId } = currentEmbeddedActivity);
      tmp4 = null;
      if (id === obj2.getEmbeddedActivityParticipantId(obj4)) {
        tmp4 = selectedParticipant;
      }
      obj2 = ChannelRTCParticipants;
      obj4 = { applicationId: null, instanceId: null };
    }
    const obj6 = { focusedEmbeddedActivityParticipant: tmp4, activityLockOrientation: null };
    let pipOrientationLockStateForApp = null;
    if (null != currentEmbeddedActivity) {
      pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(currentEmbeddedActivity.applicationId);
    }
    obj6.activityLockOrientation = pipOrientationLockStateForApp;
    return obj6;
  });
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (tmp.user.id !== AuthenticationStore.getId()) {
      tmp5 = tmp;
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    focusedEmbeddedActivityParticipant = tmp5;
  }
  if (null != focusedEmbeddedActivityParticipant) {
    if (closure_7(focusedEmbeddedActivityParticipant)) {
      if (null == stateFromStores) {
        return tmp2(8018).OrientationType.LANDSCAPE;
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    OrientationType = tmp2(8018).OrientationType;
    let LANDSCAPE = OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE = null;
    if (activityLockOrientation === tmp8.PORTRAIT) {
      LANDSCAPE = tmp2(8018).OrientationType.PORTRAIT;
    }
  }
  const obj3 = channel(504);
});