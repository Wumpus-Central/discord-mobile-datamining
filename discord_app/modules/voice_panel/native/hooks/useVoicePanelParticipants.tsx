// discord_app/modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx
import Constants from "../../../../Constants.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require,
  arr1,
  arr5,
  arr6,
  arr7,
  arr8,
  arr9,
  importDefault,
  map,
  num2,
  num3,
  obj1,
  obj4,
  set,
  tmp12,
  tmp13,
  tmp15,
  tmp18,
  tmp20,
  tmp22,
  tmp23,
  tmp24,
  tmp25,
  tmp27,
  tmp28,
  tmp29,
  tmp30,
  tmp32,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  tmp39,
  tmp41,
  tmp42,
  tmp43,
  tmp44,
  tmp5,
  tmp6,
  tmp8,
  tmp9;

let closure_12;
let unpackModuleId;
function getMemoizedParticipant(item10013, first1) {
  const combined = "" + item10013.type + "-" + item10013.id;
  let value = first1.get(combined);
  if (null == value) {
    const result = first1.set(combined, item10013);
    value = item10013;
  }
  return value;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ VoicePanelCardItemType: unpackModuleId, VoicePanelCTACard: closure_12 } = VoicePanelConstants);
const RTCConnectionStates = Constants.RTCConnectionStates;
let closure_14 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let closure_3;
      let closure_4;
      let desyncedChannelParticipants;
      let first;
      let state;
      let stateFromStores;
      let tmp11;
      let tmp14;
      let tmp16;
      let tmp17;
      let tmp7;
      _require = arg0;
      importDefault = arg1;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(22);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const id = stateFromStores.getId();
        cResult[0] = id;
        first = id;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const channel = desyncedChannelParticipants.getChannel(arg0);
        let flag;
        if (channel != null) {
          flag = channel.isDM();
        }
        if (flag == null) {
          flag = false;
        }
        cResult[1] = arg0;
        cResult[2] = flag;
        tmp7 = flag;
      } else {
        tmp7 = cResult[2];
      }
      _slicedToArray = tmp7;
      const tmp10 = require("useIsConnectedToVoiceChannel")(arg0);
      react = tmp10;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function _() {
          map = new Map();
          return map;
        };
        cResult[3] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[3];
      }
      let obj3 = react;
      const first1 = _slicedToArray(react.useState(tmp11), 1)[0];
      if (cResult[4] !== first1) {
        class M {
          constructor() {
            return () => first1.clear();
          }
        }
        let items = [first1];
        cResult[4] = first1;
        cResult[5] = M;
        cResult[6] = items;
        tmp14 = items;
      } else {
        class M {
          constructor() {
            return () => first1.clear();
          }
        }
        tmp14 = cResult[6];
      }
      const effect = obj3.useEffect(M, tmp14);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            return () => first1.clear();
          }
        }
        let items1 = [RTCConnectionStore];
        class R {
          constructor() {
            return state.getState() === constants2.RTC_CONNECTED;
          }
        }
        cResult[7] = items1;
        cResult[8] = R;
        tmp17 = R;
        tmp16 = items1;
      } else {
        class M {
          constructor() {
            return () => first1.clear();
          }
        }
        tmp17 = cResult[8];
      }
      const tmpResult = tmp(first[13]);
      stateFromStores = tmpResult.useStateFromStores(tmp16, tmp17);
      const tmpResult2 = tmp(first[14]);
      desyncedChannelParticipants = tmpResult2.useDesyncedChannelParticipants(arg0);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            return () => first1.clear();
          }
        }
        const items2 = [first1];
        class R {
          constructor() {
            return state.getState() === constants2.RTC_CONNECTED;
          }
        }
        items2[1] = SortedVoiceStateStore;
        cResult[9] = items2;
      } else {
        class M {
          constructor() {
            return () => first1.clear();
          }
        }
      }
      if (cResult[10] === first1) {
        class M {
          constructor() {
            return () => first1.clear();
          }
        }
      }
      class V {
        constructor() {
          tmp2 = closure_4;
          if (tmp2) {
            tmp6 = closure_5;
            tmp7 = closure_0;
            voiceParticipantsHidden = closure_5.getVoiceParticipantsHidden(closure_0);
            items = [];
            filteredParticipants = closure_5.getFilteredParticipants(closure_0);
            tmp10 = filteredParticipants;
            tmp11 = filteredParticipants;
            for (const item10024 of filteredParticipants) {
              arr1 = items.push(item10024);
              continue;
            }
            if (!voiceParticipantsHidden) {
              tmp13 = closure_7;
              tmp14 = null;
              if (null != closure_7) {
                tmp15 = tmp13;
                tmp16 = tmp13;
                for (const item10034 of tmp13) {
                  arr5 = items.push(item10034);
                  continue;
                }
              }
            }
            items1 = [];
            tmp18 = items;
            tmp19 = items[Symbol.iterator]();
            num2 = 0;
            tmp20 = items;
            tmp22 = tmp19;
            while (tmp19 !== undefined) {
              tmp23 = getMemoizedParticipant;
              obj = { type: null, id: null };
              tmp24 = VoicePanelCardItemType;
              obj.type = VoicePanelCardItemType.PARTICIPANT;
              obj.id = tmp21.id;
              tmp25 = closure_5;
              tmp26 = getMemoizedParticipant(obj, closure_5);
              tmp27 = closure_3;
              if (tmp27) {
                tmp28 = tmp26;
                tmp29 = closure_2;
                if (tmp26.id === closure_2) {
                  tmp = tmp26;
                  continue;
                }
              }
              tmp30 = tmp26;
              arr6 = items1.push(tmp26);
            }
            tmp32 = tmp;
            tmp33 = null;
            if (null != tmp) {
              arr7 = items1.push(tmp);
            }
            tmp35 = closure_3 && closure_6;
            if (tmp35) {
              num3 = 1;
              tmp35 = 1 === items1.length;
            }
            if (tmp35) {
              tmp36 = getMemoizedParticipant;
              obj1 = { type: null, id: null };
              tmp37 = VoicePanelCardItemType;
              obj1.type = VoicePanelCardItemType.CTA;
              tmp38 = VoicePanelCTACard;
              obj1.id = VoicePanelCTACard.CALLER_DISCONNECTED;
              tmp39 = closure_5;
              arr8 = items1.push(getMemoizedParticipant(obj1, closure_5));
            }
            if (voiceParticipantsHidden) {
              voiceParticipantsHidden = 0 === items.length;
            }
            if (voiceParticipantsHidden) {
              tmp41 = getMemoizedParticipant;
              obj4 = { type: null, id: null };
              tmp42 = VoicePanelCardItemType;
              obj4.type = VoicePanelCardItemType.CTA;
              tmp43 = VoicePanelCTACard;
              obj4.id = VoicePanelCTACard.NO_VIDEO_PARTICIPANTS;
              tmp44 = closure_5;
              arr9 = items1.push(getMemoizedParticipant(obj4, closure_5));
            }
            if (items1.length <= 0) {
              items1 = closure_14;
            }
            return items1;
          } else {
            tmp3 = closure_10;
            tmp4 = closure_0;
            tmp5 = closure_1;
            voiceStatesForChannelAlt = closure_10.getVoiceStatesForChannelAlt(closure_0, closure_1);
            mapped = voiceStatesForChannelAlt.map((id) => {
              const obj = { type: constants.PARTICIPANT, id: id.user.id };
              const combined = "" + obj.type + "-" + obj.id;
              let value = first1.get(combined);
              if (null == value) {
                const result = first1.set(combined, obj);
                value = obj;
              }
              return value;
            });
            num = 0;
            if (mapped.length <= 0) {
              mapped = closure_14;
            }
            return mapped;
          }
        }
      }
      const items3 = [tmp10, desyncedChannelParticipants, arg0, arg1, first1, tmp7, first, stateFromStores];
      cResult[10] = first1;
      cResult[11] = arg0;
      cResult[12] = arg1;
      cResult[13] = tmp7;
      cResult[14] = tmp10;
      cResult[15] = stateFromStores;
      cResult[16] = desyncedChannelParticipants;
      cResult[17] = V;
      cResult[18] = items3;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let closure_4;
      let desyncedChannelParticipants;
      let items2;
      let items3;
      let obj5;
      let state;
      let stateFromStores;
      _require = arg0;
      importDefault = arg1;
      const id = stateFromStores.getId();
      const channel = desyncedChannelParticipants.getChannel(arg0);
      let flag;
      if (channel != null) {
        flag = channel.isDM();
      }
      if (flag == null) {
        flag = false;
      }
      const tmp2 = require("useIsConnectedToVoiceChannel")(arg0);
      react = tmp2;
      const first = flag(
        react.useState(() => {
          map = new Map();
          return map;
        }),
        1,
      )[0];
      let items = [first];
      const effect = react.useEffect(() => () => first.clear(), items);
      let obj2 = require("get initialized");
      let items1 = [RTCConnectionStore];
      stateFromStores = obj2.useStateFromStores(items1, () => state.getState() === constants2.RTC_CONNECTED);
      let obj3 = require("RTCConnectionDesyncHooks");
      desyncedChannelParticipants = obj3.useDesyncedChannelParticipants(arg0);
      let obj = {
        items: obj5.useStateFromStoresArray(
          items2,
          () => {
            let tmp;
            if (closure_4) {
              let voiceParticipantsHidden = ChannelRTCStore.getVoiceParticipantsHidden(closure_0);
              const items = [];
              const filteredParticipants = ChannelRTCStore.getFilteredParticipants(closure_0);
              for (const item10024 of filteredParticipants) {
                let arr = items.push(item10024);
                continue;
              }
              if (!voiceParticipantsHidden) {
                if (null != desyncedChannelParticipants) {
                  for (const item10034 of desyncedChannelParticipants) {
                    let arr2 = items.push(item10034);
                    continue;
                  }
                }
              }
              let items1 = [];
              const tmp19 = items[Symbol.iterator]();
              while (tmp19 !== undefined) {
                let obj = { type: unpackModuleId.PARTICIPANT, id: tmp21.id };
                let tmp26 = getMemoizedParticipant(obj, first);
                if (flag) {
                  if (tmp26.id === id) {
                    tmp = tmp26;
                    continue;
                  }
                }
                let arr3 = items1.push(tmp26);
              }
              if (null != tmp) {
                items1.push(tmp);
              }
              const tmp35 = flag && stateFromStores && 1 === items1.length;
              if (tmp35) {
                const obj2 = { type: unpackModuleId.CTA, id: constants.CALLER_DISCONNECTED };
                items1.push(getMemoizedParticipant(obj2, first));
              }
              if (voiceParticipantsHidden) {
                voiceParticipantsHidden = 0 === items.length;
              }
              if (voiceParticipantsHidden) {
                const obj3 = { type: unpackModuleId.CTA, id: constants.NO_VIDEO_PARTICIPANTS };
                items1.push(getMemoizedParticipant(obj3, first));
              }
              if (items1.length <= 0) {
                items1 = closure_14;
              }
              return items1;
            } else {
              const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(closure_0, closure_1);
              let mapped = voiceStatesForChannelAlt.map((id) => {
                const obj = { type: constants.PARTICIPANT, id: id.user.id };
                const combined = "" + obj.type + "-" + obj.id;
                let value = first.get(combined);
                if (null == value) {
                  const result = first.set(combined, obj);
                  value = obj;
                }
                return value;
              });
              if (mapped.length <= 0) {
                mapped = closure_14;
              }
              return mapped;
            }
          },
          items3,
        ),
        isConnected: tmp2,
      };
      items2 = [first, SortedVoiceStateStore];
      items3 = [tmp2, desyncedChannelParticipants, arg0, arg1, first, flag, id, stateFromStores];
      obj5 = require("get initialized");
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      let managerSubscription;
      let tmp11;
      _require = arg0;
      importDefault = arg1;
      let obj = require("react");
      const cResult = obj.c(13);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const id = AuthenticationStore.getId();
        let num = 0;
        cResult[0] = id;
        first = id;
      } else {
        first = cResult[0];
      }
      const layoutManager = managerSubscription.useContext(require("VoicePanelStateContext")).layoutManager;
      const tmpResult = tmp(first[16]);
      managerSubscription = tmpResult.useManagerSubscription(layoutManager);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            map = new Map();
            return map;
          }
        }
        cResult[1] = C;
      } else {
        class C {
          constructor() {
            map = new Map();
            return map;
          }
        }
      }
      const first1 = layoutManager(obj2.useState(C), 1)[0];
      if (cResult[2] !== first1) {
        class T {
          constructor() {
            return () => {
              /* body not rendered: F148307 */
            };
          }
        }
        let items = [first1];
        cResult[2] = first1;
        cResult[3] = T;
        cResult[4] = items;
        tmp11 = items;
      } else {
        class T {
          constructor() {
            return () => {
              /* body not rendered: F148307 */
            };
          }
        }
        tmp11 = cResult[4];
      }
      const effect = obj2.useEffect(T, tmp11);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return () => {
              /* body not rendered: F148307 */
            };
          }
        }
        let items1 = [VoiceStateStore, first1];
        cResult[5] = items1;
      } else {
        class T {
          constructor() {
            return () => {
              /* body not rendered: F148307 */
            };
          }
        }
      }
      if (cResult[6] === first1) {
        class T {
          constructor() {
            return () => {
              /* body not rendered: F148307 */
            };
          }
        }
      }
      class I {
        constructor() {
          if (closure_4 < 0) {
            tmp16 = closure_14;
            return closure_14;
          } else {
            tmp17 = closure_9;
            tmp18 = closure_0;
            tmp19 = closure_2;
            items = [];
            if (closure_9.isInChannel(closure_0, closure_2)) {
              tmp = globalThis;
              _Set = Set;
              self = this;
              self2 = this;
              set = new Set(
                (() => {
                  /* body not rendered: F148308 */
                })(),
              );
              tmp3 = set;
              tmp4 = set;
              for (const item10013 of set) {
                tmp5 = getMemoizedParticipant;
                tmp6 = closure_5;
                arr1 = items.push(getMemoizedParticipant(item10013, closure_5));
                continue;
              }
              tmp8 = closure_5;
              tmp9 = closure_0;
              tmp10 = closure_5.getVoiceParticipantsHidden(closure_0) && 0 === items.length;
              if (tmp10) {
                tmp11 = getMemoizedParticipant;
                obj = { type: null, id: null };
                tmp12 = VoicePanelCardItemType;
                obj.type = VoicePanelCardItemType.CTA;
                tmp13 = VoicePanelCTACard;
                obj.id = VoicePanelCTACard.NO_VIDEO_PARTICIPANTS;
                tmp14 = closure_5;
                arr2 = items.push(getMemoizedParticipant(obj, closure_5));
              }
              if (items.length <= 0) {
                items = closure_14;
              }
              return items;
            } else {
              return items;
            }
          }
        }
      }
      const items2 = [arg0, first1, layoutManager, arg1, managerSubscription, first];
      cResult[6] = first1;
      cResult[7] = arg0;
      cResult[8] = managerSubscription;
      cResult[9] = layoutManager;
      cResult[10] = arg1;
      cResult[11] = I;
      cResult[12] = items2;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let managerSubscription;
      _require = arg0;
      importDefault = arg1;
      const id = AuthenticationStore.getId();
      const layoutManager = managerSubscription.useContext(require("VoicePanelStateContext")).layoutManager;
      let obj = require("VoicePanelCardLayoutManager");
      managerSubscription = obj.useManagerSubscription(layoutManager);
      const first = layoutManager(
        managerSubscription.useState(() => {
          map = new Map();
          return map;
        }),
        1,
      )[0];
      let items = [first];
      const effect = managerSubscription.useEffect(() => () => first.clear(), items);
      let items1 = [VoiceStateStore, first];
      const items2 = [arg0, first, layoutManager, arg1, managerSubscription, id];
      const obj2 = require("get initialized");
      return obj2.useStateFromStoresArray(
        items1,
        function () {
          let chunk;
          if (managerSubscription < 0) {
            return closure_14;
          } else {
            let items = [];
            if (VoiceStateStore.isInChannel(closure_0, id)) {
              const _Set = Set;
              const self = this;
              const self2 = this;
              set = new Set(
                (() => {
                  let end;
                  const items = [];
                  let start = closure_1_1.start;
                  if (start <= closure_1_1.end) {
                    do {
                      let push = items.push;
                      let _Array = Array;
                      let items1 = [];
                      let arraySpreadResult = HermesBuiltin.arraySpread(items1, Array.from(chunk.getChunk(start)), 0);
                      let applyResult = HermesBuiltin.apply(push, items1, items);
                      start = start + 1;
                      end = closure_1_1.end;
                    } while (start <= end);
                  }
                  return items;
                })(),
              );
              let tmp3 = set;
              for (const item10013 of set) {
                let arr = items.push(getMemoizedParticipant(item10013, first));
                continue;
              }
              const tmp10 = ChannelRTCStore.getVoiceParticipantsHidden(closure_0) && 0 === items.length;
              if (tmp10) {
                const obj = { type: unpackModuleId.CTA, id: constants.NO_VIDEO_PARTICIPANTS };
                items.push(getMemoizedParticipant(obj, first));
              }
              if (items.length <= 0) {
                items = closure_14;
              }
              return items;
            } else {
              return items;
            }
          }
        },
        items2,
      );
    };
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx");

export default tmp3;
export const useChunkedParticipants = tmp4;
