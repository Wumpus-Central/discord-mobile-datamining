// === Module 9104: useShouldForcePipOrientation ===

// Module 9104 (useShouldForcePipOrientation)
import Constants from "Constants" /* 2011 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9049 */;
import usePipVideoOrStreamDefault from "usePipVideoOrStream" /* 9105 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallConstants from "CallConstants" /* 4917 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let metroImportAll;
let metroImportDefault;
const OrientationLockState = Constants.OrientationLockState;
({ isStreamParticipant: metroImportDefault, ParticipantTypes: metroImportAll } = CallConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let activityLockOrientation;
  let first;
  let focusedEmbeddedActivityParticipant;
  let tmp10;
  const obj = channel(576);
  const cResult = obj.c(6);
  channel = channel.channel;
  let tmp4 = usePipVideoOrStreamDefault(channel.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
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
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, A);
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
    tmp10 = items1;
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
  const tmpResult2 = channel(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp10, tmp13);
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
      return tmp17;
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
}) : ((channel) => {
  let LANDSCAPE1;
  let activityLockOrientation;
  let focusedEmbeddedActivityParticipant;
  channel = channel.channel;
  let tmp2 = usePipVideoOrStreamDefault(channel.id);
  const items = [ChannelRTCStore, AuthenticationStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(channel.id, AuthenticationStore.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === metroImportAll.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const obj3 = channel(504);
  const items1 = [EmbeddedActivitiesStore, ChannelRTCStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let pipOrientationLockStateForApp;
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
      const obj4 = { applicationId: null, instanceId: null };
      ({ applicationId: obj3.applicationId, compositeInstanceId: obj3.instanceId } = currentEmbeddedActivity);
      tmp4 = null;
      const obj2 = ChannelRTCParticipants;
      if (id === obj2.getEmbeddedActivityParticipantId(obj4)) {
        tmp4 = selectedParticipant;
      }
    }
    const obj6 = { focusedEmbeddedActivityParticipant: tmp4, activityLockOrientation: pipOrientationLockStateForApp };
    pipOrientationLockStateForApp = null;
    if (null != currentEmbeddedActivity) {
      pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(currentEmbeddedActivity.applicationId);
    }
    return obj6;
  });
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  let tmp6 = null;
  if (null != tmp2) {
    tmp6 = null;
    if (tmp2.user.id !== AuthenticationStore.getId()) {
      tmp6 = tmp2;
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    focusedEmbeddedActivityParticipant = tmp6;
  }
  if (null != focusedEmbeddedActivityParticipant) {
    if (closure_7(focusedEmbeddedActivityParticipant)) {
      let LANDSCAPE;
      if (null == stateFromStores) {
        LANDSCAPE = tmp3(8018).OrientationType.LANDSCAPE;
      }
      return LANDSCAPE;
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    LANDSCAPE1 = tmp3(8018).OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE1 = null;
    if (activityLockOrientation === tmp9.PORTRAIT) {
      LANDSCAPE1 = tmp3(8018).OrientationType.PORTRAIT;
    }
  }
  LANDSCAPE = LANDSCAPE1;
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export const useShouldForcePipOrientation = tmp3;