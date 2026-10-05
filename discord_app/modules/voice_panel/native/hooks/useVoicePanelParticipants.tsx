// === Module 17301: useVoicePanelParticipants ===

// Module 17301 (useVoicePanelParticipants)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;

const require = globalThis.__r;

const require = fn;
function getMemoizedParticipant(item10013, first1) {
  const combined = "" + item10013.type + "-" + item10013.id;
  value = first1.get(combined);
  if (null == value) {
    const result = first1.set(combined, item10013);
    value = item10013;
  }
  return value;
}
const VoicePanelConstants = fn(11902);
({ VoicePanelCardItemType: closure_11, VoicePanelCTACard: closure_12 } = VoicePanelConstants);
const RTCConnectionStates = fn(1085).RTCConnectionStates;
let closure_14 = [];
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(22);
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
    let tmp7 = flag;
  } else {
    tmp7 = cResult[2];
  }
  _slicedToArray = tmp7;
  const tmp10 = require("useIsConnectedToVoiceChannel")(arg0);
  noop = tmp10;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _() {
      return new Map();
    };
    cResult[3] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[3];
  }
  const first1 = _slicedToArray(noop.useState(tmp11), 1)[0];
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
    let tmp14 = items;
  } else {
    class M {
      constructor() {
        return () => first1.clear();
      }
    }
    tmp14 = cResult[6];
  }
  const effect = noop.useEffect(M, tmp14);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        return () => first1.clear();
      }
    }
    let items1 = [RTCConnectionStore];
    class R {
      constructor() {
        return closure_1_8.getState() === closure_1_13.RTC_CONNECTED;
      }
    }
    cResult[7] = items1;
    cResult[8] = R;
    let tmp17 = R;
    const tmp16 = items1;
  } else {
    class M {
      constructor() {
        return () => first1.clear();
      }
    }
    tmp17 = cResult[8];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp16, tmp17);
  const tmpResult = require("initialize");
  desyncedChannelParticipants = require("RTCConnectionDesyncHooks").useDesyncedChannelParticipants(arg0);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        return () => first1.clear();
      }
    }
    const items2 = [first1, ];
    class R {
      constructor() {
        return closure_1_8.getState() === closure_1_13.RTC_CONNECTED;
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
      if (closure_4) {
        tmp5 = closure_5;
        tmp6 = closure_0;
        voiceParticipantsHidden = closure_5.getVoiceParticipantsHidden(closure_0);
        items = [];
        filteredParticipants = closure_5.getFilteredParticipants(closure_0);
        tmp9 = filteredParticipants;
        tmp10 = filteredParticipants;
        for (const item10024 of filteredParticipants) {
          arr1 = items.push(item10024);
          continue;
        }
        if (!voiceParticipantsHidden) {
          tmp12 = closure_7;
          tmp13 = null;
          if (null != closure_7) {
            tmp14 = tmp12;
            tmp15 = tmp12;
            for (const item10034 of tmp12) {
              arr5 = items.push(item10034);
              continue;
            }
          }
        }
        items1 = [];
        tmp17 = items;
        tmp18 = items[Symbol.iterator]();
        num2 = 0;
        tmp19 = items;
        tmp21 = tmp18;
        while (tmp18 !== undefined) {
          tmp22 = getMemoizedParticipant;
          obj = { type: null, id: null };
          tmp23 = VoicePanelCardItemType;
          obj.type = VoicePanelCardItemType.PARTICIPANT;
          obj.id = tmp20.id;
          tmp24 = closure_5;
          tmp25 = getMemoizedParticipant(obj, closure_5);
          tmp26 = closure_3;
          if (closure_3) {
            tmp27 = tmp25;
            tmp28 = closure_2;
            if (tmp25.id === closure_2) {
              tmp = tmp25;
              continue;
            }
          }
          tmp29 = tmp25;
          arr6 = items1.push(tmp25);
        }
        tmp31 = tmp;
        tmp32 = null;
        if (null != tmp) {
          arr7 = items1.push(tmp);
        }
        tmp34 = closure_3;
        if (closure_3) {
          tmp34 = closure_6;
        }
        if (tmp34) {
          num3 = 1;
          tmp34 = 1 === items1.length;
        }
        if (tmp34) {
          tmp35 = getMemoizedParticipant;
          obj1 = { type: null, id: null };
          tmp36 = VoicePanelCardItemType;
          obj1.type = VoicePanelCardItemType.CTA;
          tmp37 = VoicePanelCTACard;
          obj1.id = VoicePanelCTACard.CALLER_DISCONNECTED;
          tmp38 = closure_5;
          arr8 = items1.push(getMemoizedParticipant(obj1, closure_5));
        }
        if (voiceParticipantsHidden) {
          voiceParticipantsHidden = 0 === items.length;
        }
        if (voiceParticipantsHidden) {
          tmp40 = getMemoizedParticipant;
          obj4 = { type: null, id: null };
          tmp41 = VoicePanelCardItemType;
          obj4.type = VoicePanelCardItemType.CTA;
          tmp42 = VoicePanelCTACard;
          obj4.id = VoicePanelCTACard.NO_VIDEO_PARTICIPANTS;
          tmp43 = closure_5;
          arr9 = items1.push(getMemoizedParticipant(obj4, closure_5));
        }
        if (items1.length <= 0) {
          items1 = closure_14;
        }
        return items1;
      } else {
        tmp2 = closure_10;
        tmp3 = closure_0;
        tmp4 = closure_1;
        voiceStatesForChannelAlt = closure_10.getVoiceStatesForChannelAlt(closure_0, closure_1);
        mapped = voiceStatesForChannelAlt.map((id) => {
          const obj = { type: constants.PARTICIPANT, id: id.user.id };
          const combined = "" + obj.type + "-" + obj.id;
          value = first1.get(combined);
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
  const tmpResult2 = require("RTCConnectionDesyncHooks");
}) : ((arg0, arg1) => {
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
  noop = tmp2;
  const first = flag(noop.useState(() => new Map()), 1)[0];
  let items = [first];
  const effect = noop.useEffect(() => () => first.clear(), items);
  let items1 = [RTCConnectionStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => state.getState() === constants2.RTC_CONNECTED);
  let obj2 = require("initialize");
  desyncedChannelParticipants = require("RTCConnectionDesyncHooks").useDesyncedChannelParticipants(arg0);
  let obj = { items: null, isConnected: null };
  let obj3 = require("RTCConnectionDesyncHooks");
  const items2 = [first, SortedVoiceStateStore];
  const items3 = [tmp2, desyncedChannelParticipants, arg0, arg1, first, flag, id, stateFromStores];
  obj.items = require("initialize").useStateFromStoresArray(items2, () => {
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
          for (const item10034 of tmp12) {
            let arr2 = items.push(item10034);
            continue;
          }
        }
      }
      let items1 = [];
      const tmp18 = items[Symbol.iterator]();
      while (tmp18 !== undefined) {
        let obj = { type: constants.PARTICIPANT, id: tmp20.id };
        let tmp25 = getMemoizedParticipant(obj, first);
        if (flag) {
          if (tmp25.id === id) {
            tmp = tmp25;
            continue;
          }
        }
        let arr3 = items1.push(tmp25);
      }
      if (null != tmp) {
        items1.push(tmp);
      }
      let tmp34 = flag;
      if (flag) {
        tmp34 = stateFromStores;
      }
      if (tmp34) {
        tmp34 = 1 === items1.length;
      }
      if (tmp34) {
        const obj2 = { type: constants.CTA, id: constants2.CALLER_DISCONNECTED };
        items1.push(getMemoizedParticipant(obj2, first));
      }
      if (voiceParticipantsHidden) {
        voiceParticipantsHidden = 0 === items.length;
      }
      if (voiceParticipantsHidden) {
        const obj3 = { type: constants.CTA, id: constants2.NO_VIDEO_PARTICIPANTS };
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
        value = first.get(combined);
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
  }, items3);
  obj.isConnected = tmp2;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx");

export default tmp3;
export const useChunkedParticipants = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const id = AuthenticationStore.getId();
    cResult[0] = id;
    first = id;
  } else {
    first = cResult[0];
  }
  const layoutManager = managerSubscription.useContext(require("VoicePanelStateContext")).layoutManager;
  let obj = require("c");
  managerSubscription = require("VoicePanelCardLayoutManager").useManagerSubscription(layoutManager);
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
        return () => { ... };
      }
    }
    let items = [first1];
    cResult[2] = first1;
    cResult[3] = T;
    cResult[4] = items;
    let tmp11 = items;
  } else {
    class T {
      constructor() {
        return () => { ... };
      }
    }
    tmp11 = cResult[4];
  }
  const effect = obj2.useEffect(T, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return () => { ... };
      }
    }
    let items1 = [VoiceStateStore, first1];
    cResult[5] = items1;
  } else {
    class T {
      constructor() {
        return () => { ... };
      }
    }
  }
  if (cResult[6] === first1) {
    class T {
      constructor() {
        return () => { ... };
      }
    }
  }
  class I {
    constructor() {
      if (closure_4 < 0) {
        tmp18 = closure_14;
        return closure_14;
      } else {
        tmp19 = closure_9;
        tmp20 = closure_0;
        tmp21 = closure_2;
        items = [];
        if (closure_9.isInChannel(closure_0, closure_2)) {
          tmp = globalThis;
          _Set = Set;
          tmp2 = new.target;
          tmp3 = new.target;
          set = new Set((() => { ... })());
          tmp5 = set;
          tmp6 = set;
          for (const item10013 of set) {
            tmp7 = getMemoizedParticipant;
            tmp8 = closure_5;
            arr1 = items.push(getMemoizedParticipant(item10013, closure_5));
            continue;
          }
          tmp10 = closure_5;
          tmp11 = closure_0;
          tmp12 = closure_5.getVoiceParticipantsHidden(closure_0) && 0 === items.length;
          if (tmp12) {
            tmp13 = getMemoizedParticipant;
            obj = { type: null, id: null };
            tmp14 = VoicePanelCardItemType;
            obj.type = VoicePanelCardItemType.CTA;
            tmp15 = VoicePanelCTACard;
            obj.id = VoicePanelCTACard.NO_VIDEO_PARTICIPANTS;
            tmp16 = closure_5;
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
  const tmpResult = require("VoicePanelCardLayoutManager");
}) : ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const id = AuthenticationStore.getId();
  const layoutManager = managerSubscription.useContext(require("VoicePanelStateContext")).layoutManager;
  managerSubscription = require("VoicePanelCardLayoutManager").useManagerSubscription(layoutManager);
  const first = layoutManager(managerSubscription.useState(() => new Map()), 1)[0];
  let items = [first];
  const effect = managerSubscription.useEffect(() => () => first.clear(), items);
  let obj = require("VoicePanelCardLayoutManager");
  let items1 = [VoiceStateStore, first];
  const items2 = [arg0, first, layoutManager, arg1, managerSubscription, id];
  return require("initialize").useStateFromStoresArray(items1, () => {
    if (managerSubscription < 0) {
      return closure_14;
    } else {
      let items = [];
      if (VoiceStateStore.isInChannel(closure_0, id)) {
        const _Set = Set;
        const set = new Set((() => {
          let end;
          const items = [];
          let start = closure_1_1.start;
          if (start <= closure_1_1.end) {
            do {
              let push = items.push;
              let _Array = Array;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(chunk.getChunk(start)), 0);
              let applyResult = HermesBuiltin.apply(items1, items);
              start = start + 1;
              end = closure_1_1.end;
            } while (start <= end);
          }
          return items;
        })());
        for (const item10013 of set) {
          let arr = items.push(getMemoizedParticipant(item10013, first));
          continue;
        }
        if (tmp12) {
          const obj = { type: constants.CTA, id: constants2.NO_VIDEO_PARTICIPANTS };
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
  }, items2);
});