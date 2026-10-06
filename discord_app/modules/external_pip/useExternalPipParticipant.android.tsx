// discord_app/modules/external_pip/useExternalPipParticipant.android.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../_runtime/00019_react.js";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import CallConstants from "../calls/CallConstants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let num;

let c9;
let metroImportAll;
function hasOnlySelfParticipant(participants, meId) {
  if (3 < participants.length) {
    return false;
  } else {
    const iter = participants[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.type !== constants.ACTIVITY) {
        let user = tmp6.user;
        let id;
        if (user != null) {
          id = user.id;
        }
        if (id !== meId) {
          iter.return();
          let flag = false;
          return false;
        }
      }
      continue;
    }
    return true;
  }
}
let react = react_mod;
({ isStreamParticipant: metroImportAll, ParticipantTypes: c9 } = CallConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedParticipantStreamId) => {
      let tmp2;
      let tmp3;
      const obj = selectedParticipantStreamId(576);
      const cResult = obj.c(3);
      selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
      if (cResult[0] !== selectedParticipantStreamId) {
        const fn = function c() {
          let closure_0 = selectedParticipantStreamId;
          if (null != selectedParticipantStreamId) {
            let mediaEngine = MediaEngineStore.getMediaEngine();
            mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
              setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, "useExternalPipParticipant"),
            );
            return () => {
              mediaEngine = mediaEngine.getMediaEngine();
              mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
                setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(
                  closure_1_0,
                  false,
                  "useExternalPipParticipant",
                ),
              );
            };
          }
        };
        const items = [selectedParticipantStreamId];
        cResult[0] = selectedParticipantStreamId;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  : (selectedParticipantStreamId) => {
      selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
      const items = [selectedParticipantStreamId];
      const effect = react.useEffect(() => {
        let closure_0 = selectedParticipantStreamId;
        if (null != selectedParticipantStreamId) {
          const useExternalPipParticipant = "useExternalPipParticipant";
          let mediaEngine = MediaEngineStore.getMediaEngine();
          mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
            setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant),
          );
          return () => {
            mediaEngine = mediaEngine.getMediaEngine();
            mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
              setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, useExternalPipParticipant),
            );
          };
        }
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let focusedParticipantStreamId;
      let stateFromStoresObject;
      let tmp5;
      const tmp = channelId;
      let obj = channelId(focusedParticipantStreamId[8]);
      const cResult = obj.c(13);
      channelId = channelId.channelId;
      const tmp2 = focusedParticipantStreamId;
      focusedParticipantStreamId = channelId.focusedParticipantStreamId;
      const meId = channelId.meId;
      const tmp4 = meId(react.useState(0), 2);
      [tmp5, react] = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStoresObject];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === focusedParticipantStreamId) {
          let tmp8;
          if (cResult[3] === meId) {
            tmp8 = cResult[4];
          }
          if (cResult[5] === channelId) {
            if (cResult[6] === focusedParticipantStreamId) {
              if (cResult[7] === meId) {
                let tmp9;
                let tmp12;
                if (cResult[8] === tmp5) {
                  tmp9 = cResult[9];
                }
                const tmpResult = tmp(tmp2[9]);
                stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
                if (cResult[10] !== stateFromStoresObject.selectedParticipantSpeaking) {
                  class E {
                    constructor() {
                      if (closure_4.selectedParticipantSpeaking) {
                        tmp = globalThis;
                        _setTimeout = setTimeout;
                        num = 3000;
                        closure_0 = setTimeout(() => {
                          closure_1_3(() => {
                            /* body not rendered: F153877 */
                          });
                        }, 3000);
                        return () => {
                          clearTimeout(closure_0);
                        };
                      } else {
                        return;
                      }
                    }
                  }
                  const items1 = [stateFromStoresObject.selectedParticipantSpeaking];
                  cResult[10] = stateFromStoresObject.selectedParticipantSpeaking;
                  cResult[11] = E;
                  cResult[12] = items1;
                  tmp12 = items1;
                } else {
                  class E {
                    constructor() {
                      if (closure_4.selectedParticipantSpeaking) {
                        tmp = globalThis;
                        _setTimeout = setTimeout;
                        num = 3000;
                        closure_0 = setTimeout(() => {
                          closure_1_3(() => {
                            /* body not rendered: F153877 */
                          });
                        }, 3000);
                        return () => {
                          clearTimeout(closure_0);
                        };
                      } else {
                        return;
                      }
                    }
                  }
                  tmp12 = cResult[12];
                }
                const effect = react.useEffect(E, tmp12);
                return stateFromStoresObject;
              }
            }
          }
          const items2 = [channelId, focusedParticipantStreamId, meId, tmp5];
          cResult[5] = channelId;
          cResult[6] = focusedParticipantStreamId;
          cResult[7] = meId;
          cResult[8] = tmp5;
          cResult[9] = items2;
          tmp9 = items2;
        }
      }
      const fn = function o() {
        let id1;
        let streamId1;
        let tmp20;
        let tmp30;
        let tmp35;
        if (null != channelId) {
          if (null == focusedParticipantStreamId) {
            const _Date = Date;
            let tmp24;
            const timestamp = Date.now();
            const participants = ChannelRTCStore.getParticipants(tmp);
            const tmp54 = hasOnlySelfParticipant(participants, meId);
            const iter = participants[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp5 = nextResult;
              if (!tmp54) {
                if (tmp5.type === constants.USER) {
                  let user = tmp5.user;
                  let id;
                  if (user != null) {
                    id = user.id;
                  }
                }
                continue;
              }
              let type = tmp5.type;
              if (constants.USER === type) {
                let speaking = tmp5.speaking;
                if (!speaking) {
                  speaking = timestamp - tmp5.lastSpoke < 1000;
                }
                if (speaking) {
                  speaking = null == tmp24;
                }
                if (speaking) {
                  tmp24 = nextResult;
                }
                let voiceState = tmp5.voiceState;
                let flag;
                if (voiceState != null) {
                  flag = voiceState.selfVideo;
                }
                if (flag == null) {
                  flag = false;
                }
                if (flag) {
                  let tmp27 = null == tmp30;
                  if (!tmp27) {
                    tmp27 = tmp30.lastSpoke < tmp5.lastSpoke;
                  }
                  flag = tmp27;
                }
                if (flag) {
                  tmp30 = nextResult;
                }
                let tmp32 = null == tmp35;
                if (!tmp32) {
                  tmp32 = tmp35.lastSpoke < tmp5.lastSpoke;
                }
                if (tmp32) {
                  tmp35 = nextResult;
                }
              } else if (tmp12.STREAM === type) {
                let tmp14 = null != tmp20;
                if (!tmp14) {
                  tmp14 = null == tmp5.streamId;
                }
                if (!tmp14) {
                  let tmp17 = metroImportAll(tmp5);
                  if (tmp17) {
                    tmp17 = tmp5.user.id === meId;
                  }
                  tmp14 = tmp17;
                }
                if (!tmp14) {
                  tmp20 = nextResult;
                }
              }
            }
            const obj = {
              selectedParticipantSpeaking: null != tmp24,
              selectedParticipantUserId: id1,
              selectedStreamId: streamId1,
            };
            id1 = undefined;
            if (tmp24 != null) {
              const user2 = tmp24.user;
              if (user2 != null) {
                id1 = user2.id;
              }
            }
            if (id1 == null) {
              let id2;
              if (tmp30 != null) {
                const user3 = tmp30.user;
                if (user3 != null) {
                  id2 = user3.id;
                }
              }
              id1 = id2;
            }
            if (id1 == null) {
              let id3;
              if (tmp35 != null) {
                const user4 = tmp35.user;
                if (user4 != null) {
                  id3 = user4.id;
                }
              }
              id1 = id3;
            }
            if (null != tmp24) {
              const streamId = tmp24.streamId;
              streamId1 = streamId;
            } else {
              streamId1 = undefined;
              if (tmp20 != null) {
                streamId1 = tmp20.streamId;
              }
              if (streamId1 == null) {
                let streamId2;
                if (tmp30 != null) {
                  streamId2 = tmp30.streamId;
                }
                streamId1 = streamId2;
              }
            }
            return obj;
          }
        }
        return {
          selectedParticipantSpeaking: false,
          selectedParticipantUserId: "Boolean",
          selectedStreamId: "unicodeVersion",
        };
      };
      cResult[1] = channelId;
      cResult[2] = focusedParticipantStreamId;
      cResult[3] = meId;
      cResult[4] = fn;
      tmp8 = fn;
    }
  : (channelId) => {
      let closure_3;
      channelId = channelId.channelId;
      const focusedParticipantStreamId = channelId.focusedParticipantStreamId;
      const meId = channelId.meId;
      react = undefined;
      let stateFromStoresObject;
      const tmp = meId(react.useState(0), 2);
      react = tmp[1];
      const first = tmp[0];
      let obj = channelId(focusedParticipantStreamId[9]);
      const items = [stateFromStoresObject];
      const items1 = [channelId, focusedParticipantStreamId, meId, first];
      stateFromStoresObject = obj.useStateFromStoresObject(
        items,
        () => {
          let id1;
          let streamId1;
          let tmp20;
          let tmp30;
          let tmp35;
          if (null != channelId) {
            if (null == focusedParticipantStreamId) {
              const _Date = Date;
              let tmp24;
              const timestamp = Date.now();
              const participants = ChannelRTCStore.getParticipants(tmp);
              const tmp54 = hasOnlySelfParticipant(participants, meId);
              const iter = participants[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp5 = nextResult;
                if (!tmp54) {
                  if (tmp5.type === constants.USER) {
                    let user = tmp5.user;
                    let id;
                    if (user != null) {
                      id = user.id;
                    }
                  }
                  continue;
                }
                let type = tmp5.type;
                if (constants.USER === type) {
                  let speaking = tmp5.speaking;
                  if (!speaking) {
                    speaking = timestamp - tmp5.lastSpoke < 1000;
                  }
                  if (speaking) {
                    speaking = null == tmp24;
                  }
                  if (speaking) {
                    tmp24 = nextResult;
                  }
                  let voiceState = tmp5.voiceState;
                  let flag;
                  if (voiceState != null) {
                    flag = voiceState.selfVideo;
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  if (flag) {
                    let tmp27 = null == tmp30;
                    if (!tmp27) {
                      tmp27 = tmp30.lastSpoke < tmp5.lastSpoke;
                    }
                    flag = tmp27;
                  }
                  if (flag) {
                    tmp30 = nextResult;
                  }
                  let tmp32 = null == tmp35;
                  if (!tmp32) {
                    tmp32 = tmp35.lastSpoke < tmp5.lastSpoke;
                  }
                  if (tmp32) {
                    tmp35 = nextResult;
                  }
                } else if (tmp12.STREAM === type) {
                  let tmp14 = null != tmp20;
                  if (!tmp14) {
                    tmp14 = null == tmp5.streamId;
                  }
                  if (!tmp14) {
                    let tmp17 = metroImportAll(tmp5);
                    if (tmp17) {
                      tmp17 = tmp5.user.id === meId;
                    }
                    tmp14 = tmp17;
                  }
                  if (!tmp14) {
                    tmp20 = nextResult;
                  }
                }
              }
              const obj = {
                selectedParticipantSpeaking: null != tmp24,
                selectedParticipantUserId: id1,
                selectedStreamId: streamId1,
              };
              id1 = undefined;
              if (tmp24 != null) {
                const user2 = tmp24.user;
                if (user2 != null) {
                  id1 = user2.id;
                }
              }
              if (id1 == null) {
                let id2;
                if (tmp30 != null) {
                  const user3 = tmp30.user;
                  if (user3 != null) {
                    id2 = user3.id;
                  }
                }
                id1 = id2;
              }
              if (id1 == null) {
                let id3;
                if (tmp35 != null) {
                  const user4 = tmp35.user;
                  if (user4 != null) {
                    id3 = user4.id;
                  }
                }
                id1 = id3;
              }
              if (null != tmp24) {
                const streamId = tmp24.streamId;
                streamId1 = streamId;
              } else {
                streamId1 = undefined;
                if (tmp20 != null) {
                  streamId1 = tmp20.streamId;
                }
                if (streamId1 == null) {
                  let streamId2;
                  if (tmp30 != null) {
                    streamId2 = tmp30.streamId;
                  }
                  streamId1 = streamId2;
                }
              }
              return obj;
            }
          }
          return {
            selectedParticipantSpeaking: false,
            selectedParticipantUserId: "Boolean",
            selectedStreamId: "unicodeVersion",
          };
        },
        items1,
      );
      const items2 = [stateFromStoresObject.selectedParticipantSpeaking];
      const effect = react.useEffect(() => {
        let closure_0;
        if (stateFromStoresObject.selectedParticipantSpeaking) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            closure_1_3((arg0) => arg0 + 1);
          }, 3000);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }, items2);
      return stateFromStoresObject;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let meId;
      let ref2;
      const tmp = channelId;
      let obj = channelId(meId[8]);
      const cResult = obj.c(4);
      channelId = channelId.channelId;
      const tmp2 = meId;
      meId = channelId.meId;
      const ref = react.useRef(undefined);
      react = react.useRef(undefined);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        let tmp6;
        if (cResult[2] === meId) {
          tmp6 = cResult[3];
        }
        const tmpResult = tmp(tmp2[9]);
        return tmpResult.useStateFromStoresObject(first, tmp6);
      }
      const fn = function l() {
        let obj;
        let tmp17;
        let tmp6;
        let type3;
        let selectedParticipant = null;
        if (null != channelId) {
          selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
        }
        if (!metroImportAll(selectedParticipant)) {
          tmp6 = selectedParticipant;
        } else {
          const user = selectedParticipant.user;
          let id;
          if (user != null) {
            id = user.id;
          }
          tmp6 = null;
        }
        if (undefined === ref.current) {
          let id1;
          if (tmp6 != null) {
            id1 = tmp6.id;
          }
          ref.current = id1;
          let type;
          if (tmp6 != null) {
            type = tmp6.type;
          }
          ref2.current = type;
        }
        let id2;
        const current = ref.current;
        if (tmp6 != null) {
          id2 = tmp6.id;
        }
        if (current !== id2) {
          obj = {
            focusedParticipantStreamId: "Array",
            focusedParticipantUserId: "Reflect",
            focusedParticipantType: ref2.current,
          };
          const obj2 = {
            focusedParticipantStreamId: "Array",
            focusedParticipantUserId: "Reflect",
            focusedParticipantType: ref2.current,
          };
        } else {
          let type1;
          if (tmp6 != null) {
            type1 = tmp6.type;
          }
          let tmp14;
          if (type1 !== constants.ACTIVITY) {
            let streamId;
            if (tmp6 != null) {
              streamId = tmp6.streamId;
            }
            tmp14 = streamId;
          }
          obj = { focusedParticipantStreamId: tmp14, focusedParticipantUserId: tmp17, focusedParticipantType: type3 };
          let type2;
          if (tmp6 != null) {
            type2 = tmp6.type;
          }
          tmp17 = undefined;
          if (type2 !== constants.ACTIVITY) {
            let id3;
            if (tmp6 != null) {
              const user2 = tmp6.user;
              if (user2 != null) {
                id3 = user2.id;
              }
            }
            tmp17 = id3;
          }
          type3 = undefined;
          if (tmp6 != null) {
            type3 = tmp6.type;
          }
        }
        return obj;
      };
      cResult[1] = channelId;
      cResult[2] = meId;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (arg0) => {
      let ref2;
      ({ channelId: require, meId: dependencyMap } = arg0);
      react = undefined;
      const ref = react.useRef(undefined);
      react = react.useRef(undefined);
      let obj = get_initialized;
      const items = [ChannelRTCStore];
      return obj.useStateFromStoresObject(items, () => {
        let obj;
        let tmp17;
        let tmp6;
        let type3;
        let selectedParticipant = null;
        if (null != require) {
          selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
        }
        if (!metroImportAll(selectedParticipant)) {
          tmp6 = selectedParticipant;
        } else {
          const user = selectedParticipant.user;
          let id;
          if (user != null) {
            id = user.id;
          }
          tmp6 = null;
        }
        if (undefined === ref.current) {
          let id1;
          if (tmp6 != null) {
            id1 = tmp6.id;
          }
          ref.current = id1;
          let type;
          if (tmp6 != null) {
            type = tmp6.type;
          }
          ref2.current = type;
        }
        let id2;
        const current = ref.current;
        if (tmp6 != null) {
          id2 = tmp6.id;
        }
        if (current !== id2) {
          obj = {
            focusedParticipantStreamId: "Array",
            focusedParticipantUserId: "Reflect",
            focusedParticipantType: ref2.current,
          };
          const obj2 = {
            focusedParticipantStreamId: "Array",
            focusedParticipantUserId: "Reflect",
            focusedParticipantType: ref2.current,
          };
        } else {
          let type1;
          if (tmp6 != null) {
            type1 = tmp6.type;
          }
          let tmp14;
          if (type1 !== constants.ACTIVITY) {
            let streamId;
            if (tmp6 != null) {
              streamId = tmp6.streamId;
            }
            tmp14 = streamId;
          }
          obj = { focusedParticipantStreamId: tmp14, focusedParticipantUserId: tmp17, focusedParticipantType: type3 };
          let type2;
          if (tmp6 != null) {
            type2 = tmp6.type;
          }
          tmp17 = undefined;
          if (type2 !== constants.ACTIVITY) {
            let id3;
            if (tmp6 != null) {
              const user2 = tmp6.user;
              if (user2 != null) {
                id3 = user2.id;
              }
            }
            tmp17 = id3;
          }
          type3 = undefined;
          if (tmp6 != null) {
            type3 = tmp6.type;
          }
        }
        return obj;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let channelId;
      let focusedParticipantStreamId;
      let focusedParticipantType;
      let id;
      let selectedParticipantSpeaking;
      let selectedParticipantUserId;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(17);
      const items = [RTCConnectionStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => channelId.getChannelId());
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AuthenticationStore];
        const fn = function n() {
          return id.getId();
        };
        cResult[0] = items1;
        cResult[1] = fn;
        tmp5 = items1;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores1 = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === stateFromStores) {
        let tmp9;
        if (cResult[3] === stateFromStores1) {
          tmp9 = cResult[4];
        }
        ({ focusedParticipantStreamId, focusedParticipantType } = closure_13(tmp9));
        closure_13(tmp9);
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === focusedParticipantStreamId) {
            let tmp13;
            let tmp16;
            if (cResult[7] === stateFromStores1) {
              tmp13 = cResult[8];
            }
            const tmp15 = closure_12(tmp13);
            ({ selectedParticipantUserId, selectedParticipantSpeaking } = tmp15);
            let selectedStreamId = focusedParticipantStreamId;
            if (focusedParticipantStreamId == null) {
              selectedStreamId = tmp15.selectedStreamId;
            }
            if (null != focusedParticipantStreamId) {
              selectedParticipantUserId = tmp12;
            }
            if (cResult[9] !== selectedStreamId) {
              const obj3 = { selectedParticipantStreamId: selectedStreamId };
              cResult[9] = selectedStreamId;
              cResult[10] = obj3;
              tmp16 = obj3;
            } else {
              tmp16 = cResult[10];
            }
            closure_11(tmp16);
            if (cResult[11] === stateFromStores) {
              if (cResult[12] === focusedParticipantType) {
                if (cResult[13] === selectedParticipantUserId) {
                  if (cResult[14] === selectedParticipantSpeaking) {
                    let tmp19;
                    if (cResult[15] === selectedStreamId) {
                      tmp19 = cResult[16];
                    }
                    return tmp19;
                  }
                }
              }
            }
            const obj4 = {
              channelId: stateFromStores,
              selectedParticipantStreamId: selectedStreamId,
              selectedParticipantUserId,
              selectedParticipantSpeaking,
              focusedParticipantType,
            };
            cResult[11] = stateFromStores;
            cResult[12] = focusedParticipantType;
            cResult[13] = selectedParticipantUserId;
            cResult[14] = selectedParticipantSpeaking;
            cResult[15] = selectedStreamId;
            cResult[16] = obj4;
            tmp19 = obj4;
          }
        }
        const obj5 = { channelId: stateFromStores, focusedParticipantStreamId, meId: stateFromStores1 };
        cResult[5] = stateFromStores;
        cResult[6] = focusedParticipantStreamId;
        cResult[7] = stateFromStores1;
        cResult[8] = obj5;
        tmp13 = obj5;
      }
      const obj6 = { channelId: stateFromStores, meId: stateFromStores1 };
      cResult[2] = stateFromStores;
      cResult[3] = stateFromStores1;
      cResult[4] = obj6;
      tmp9 = obj6;
    }
  : () => {
      let focusedParticipantType;
      let focusedParticipantUserId;
      let id;
      const items = [RTCConnectionStore];
      const obj = get_initialized;
      const channelId = obj.useStateFromStores(items, () => channelId.getChannelId());
      const items1 = [AuthenticationStore];
      const tmpResult = get_initialized;
      const stateFromStores1 = tmpResult.useStateFromStores(items1, () => id.getId());
      const tmp5 = closure_13({ channelId, meId: stateFromStores1 });
      const focusedParticipantStreamId = tmp5.focusedParticipantStreamId;
      ({ focusedParticipantUserId, focusedParticipantType } = tmp5);
      const tmp6 = closure_12({ channelId, focusedParticipantStreamId, meId: stateFromStores1 });
      let selectedParticipantUserId = tmp6.selectedParticipantUserId;
      let selectedParticipantStreamId = focusedParticipantStreamId;
      const selectedParticipantSpeaking = tmp6.selectedParticipantSpeaking;
      if (focusedParticipantStreamId == null) {
        selectedParticipantStreamId = tmp6.selectedStreamId;
      }
      if (null != focusedParticipantStreamId) {
        selectedParticipantUserId = focusedParticipantUserId;
      }
      closure_11({ selectedParticipantStreamId });
      return {
        channelId,
        selectedParticipantStreamId,
        selectedParticipantUserId,
        selectedParticipantSpeaking,
        focusedParticipantType,
      };
    };
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default tmp3;
