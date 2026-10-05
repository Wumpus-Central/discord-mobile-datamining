// === Module 9721: RTCDebugOverlay ===

// Module 9721 (RTCDebugOverlay)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Constants from "Constants" /* 4915 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import RTCDebugActionCreatorsAll from "RTCDebugActionCreators" /* 9723 */;
import RTCConnectionUtilsDefault from "RTCConnectionUtils" /* 9724 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import RTCDebugStore from "RTCDebugStore" /* 9722 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, userId;

let ColorUtils;
let StyleSheet;
let c9;
let closure_17;
let closure_18;
let closure_19;
let metroImportAll;
let obj2;
let obj3;
const f101398 = (data, index) => {
  const obj = { data };
  return closure_1_17(closure_1_25, obj, index);
};
let closure_4 = ["type"];
({ View: metroImportAll, ScrollView: c9, StyleSheet } = react_native);
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
function asString(arg0) {

}
let createStyles = createStyles_mod;
let obj = { container: obj2, scroller: { flex: 1, margin: 8 }, indent: { marginLeft: 16 }, row: { flexDirection: "row" }, text: obj3, buttonClose: { flexGrow: 0, margin: 8 } };
obj2 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7) };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
ColorUtils = ColorUtils_mod;
obj3 = { color: nativeDefault.unsafe_rawColors.WHITE, fontSize: 14 };
let closure_21 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_21();
  if (cResult[0] === arg0) {
    let tmp5;
    if (cResult[1] === tmp4.text) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { style: tmp4.text };
  const LegacyText = native.LegacyText;
  const merged = Object.assign(arg0);
  const tmp7 = closure_17(LegacyText, obj2);
  cResult[0] = arg0;
  cResult[1] = tmp4.text;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : ((arg0) => {
  let tmp;
  const obj = { style: tmp.text };
  tmp = closure_21();
  const LegacyText = native.LegacyText;
  const merged = Object.assign(arg0);
  return closure_17(LegacyText, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let items1;
  let title;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(8);
  ({ title, children } = arg0);
  const tmp2 = closure_21();
  if (cResult[0] !== title) {
    const obj2 = { children: items };
    items = [title, ":"];
    const tmp6 = authStore4(closure_22, obj2);
    cResult[0] = title;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === children) {
    let tmp7;
    if (cResult[3] === tmp2.indent) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp3) {
      let tmp9;
      if (cResult[6] === tmp7) {
        tmp9 = cResult[7];
      }
      return tmp9;
    }
    const obj3 = { children: items1 };
    items1 = [tmp3, tmp7];
    const tmp12 = authStore4(closure_19, obj3);
    cResult[5] = tmp3;
    cResult[6] = tmp7;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  obj4 = { style: tmp2.indent, children };
  const tmp8 = closure_17(metroImportAll, obj4);
  cResult[2] = children;
  cResult[3] = tmp2.indent;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  let children;
  let items;
  let items1;
  let title;
  ({ title, children } = arg0);
  const obj2 = { children: items };
  items = [title, ":"];
  const obj = { children: items1 };
  items1 = [, ];
  const tmp = closure_21();
  items1[0] = authStore4(closure_22, obj2);
  const obj3 = { style: tmp.indent, children };
  items1[1] = closure_17(metroImportAll, obj3);
  return authStore4(closure_19, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
if (ReactCompilerGating.isReactCompilerEnabled()) {
  class ObjectKV {
    constructor(obj) {
      let row;
      obj = require("react");
      const cResult = obj.c(3);
      let obj2 = obj.obj;
      const tmp2 = closure_21();
      _require = tmp2;
      if (cResult[0] === obj2) {
        let tmp3;
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      const entries = Object.entries(obj2);
      const mapped = entries.map((item) => {
        let obj;
        let obj3;
        let tmp2;
        let tmp5Result;
        [tmp2, obj] = item;
        let value = obj;
        _slicedToArray(item, 2);
        if (Array.isArray(obj)) {
          const iter = obj.at(-1);
          let value2;
          if (iter != null) {
            value2 = iter.value;
          }
          value = obj;
          if (typeof value2 === "number") {
            value = obj.at(-1).value;
          }
        }
        if (null != value) {
          if (typeof value === "object") {
            const obj2 = { title: tmp2, children: closure_17(ObjectKV, obj3) };
            obj3 = { obj: value };
            tmp5Result = closure_17(closure_23, obj2, tmp2);
          }
          return tmp5Result;
        }
        obj4 = { style: row.row, children: null };
        const items = [tmp2, ": ", ];
        if (typeof asString === "function") {
          const obj5 = { children: items };
          items[2] = "" + value;
          obj4.children = tmp7(tmp8, obj5);
          tmp5Result = tmp5(tmp6, obj4, tmp2);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      cResult[0] = obj2;
      cResult[1] = tmp2;
      cResult[2] = mapped;
      tmp3 = mapped;
    }
  }
} else {
  class ObjectKV {
    constructor(obj) {
      obj = obj.obj;
      const row = closure_21();
      const entries = Object.entries(obj);
      return entries.map((item) => {
        let obj;
        let obj3;
        let tmp;
        let tmp4Result;
        [tmp, obj] = item;
        let value = obj;
        if (Array.isArray(obj)) {
          const iter = obj.at(-1);
          let value2;
          if (iter != null) {
            value2 = iter.value;
          }
          value = obj;
          if (typeof value2 === "number") {
            value = obj.at(-1).value;
          }
        }
        if (null != value) {
          if (typeof value === "object") {
            const obj2 = { title: tmp, children: closure_17(ObjectKV, obj3) };
            obj3 = { obj: value };
            tmp4Result = closure_17(closure_23, obj2, tmp);
          }
          return tmp4Result;
        }
        obj4 = { style: row.row, children: null };
        const items = [tmp, ": ", ];
        if (typeof asString === "function") {
          const obj5 = { children: items };
          items[2] = "" + value;
          obj4.children = tmp6(tmp7, obj5);
          tmp4Result = tmp4(tmp5, obj4, tmp);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    }
  }
}
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((data) => {
  let tmp2;
  let tmp3;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  data = data.data;
  if (cResult[0] !== data) {
    const type = data.type;
    const tmp6 = _objectWithoutProperties(data, closure_4);
    cResult[0] = data;
    cResult[1] = tmp6;
    cResult[2] = type;
    tmp3 = type;
    tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] !== tmp2) {
    const obj2 = { obj: tmp2 };
    const tmp10 = closure_17(ObjectKV, obj2);
    cResult[3] = tmp2;
    cResult[4] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[4];
  }
  if (cResult[5] === tmp7) {
    let tmp11;
    if (cResult[6] === tmp3) {
      tmp11 = cResult[7];
    }
    return tmp11;
  }
  const tmp12 = closure_17(closure_23, { title: tmp3, children: tmp7 });
  cResult[5] = tmp7;
  cResult[6] = tmp3;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : ((data) => {
  let obj2;
  data = data.data;
  const obj = { title: data.type, children: closure_17(ObjectKV, obj2) };
  obj2 = { obj: Object.assign(data, Object.assign({ type: 0 })) };
  return closure_17(closure_23, obj);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let first;
  let tmp12;
  let tmp6;
  let tmp7;
  let obj = userId(576);
  const cResult = obj.c(12);
  const tmp = userId;
  userId = userId.userId;
  const data = userId.data;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function o() {
      return UserStore.getUser(userId);
    };
    const items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const str = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const combined = "" + userId;
  let sum = combined;
  if (null != str) {
    let tmp10;
    if (cResult[4] !== str) {
      const str1 = str.toString();
      cResult[4] = str;
      cResult[5] = str1;
      tmp10 = str1;
    } else {
      tmp10 = cResult[5];
    }
    const _HermesInternal = HermesInternal;
    sum = combined + " (" + tmp10 + ")";
  }
  if (cResult[6] !== data) {
    let tmp13;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function f(data, arg1) {
        const obj = { data };
        return closure_1_17(closure_1_25, obj, arg1);
      };
      cResult[8] = fn2;
      tmp13 = fn2;
    } else {
      tmp13 = cResult[8];
    }
    const mapped = data.map(tmp13);
    cResult[6] = data;
    cResult[7] = mapped;
    tmp12 = mapped;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[9] === tmp12) {
    let tmp15;
    if (cResult[10] === sum) {
      tmp15 = cResult[11];
    }
    return tmp15;
  }
  const tmp16 = closure_17(closure_23, { title: sum, children: tmp12 });
  cResult[9] = tmp12;
  cResult[10] = sum;
  cResult[11] = tmp16;
  tmp15 = tmp16;
}) : ((userId) => {
  userId = userId.userId;
  const data = userId.data;
  let obj = userId(504);
  const items = [UserStore];
  const items1 = [userId];
  const str = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const combined = "" + userId;
  let sum = combined;
  if (null != str) {
    const _HermesInternal = HermesInternal;
    sum = combined + " (" + str.toString() + ")";
  }
  const obj2 = {
    title: sum,
    children: data.map((data, index) => {
      const obj = { data };
      return closure_1_17(closure_1_25, obj, index);
    })
  };
  return closure_17(closure_23, obj2);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function RTCDebugGeneral() {
  let guildId;
  let obj3;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = guildId(576);
  const cResult = obj.c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    const fn = function n() {
      const obj = { guildId: RTCConnectionStore.getGuildId(), channelId: RTCConnectionStore.getChannelId() };
      return obj;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = guildId(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5, tmp6);
  guildId = stateFromStoresObject.guildId;
  const channelId = stateFromStoresObject.channelId;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[3] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function s() {
      return GuildStore.getGuild(guildId);
    };
    const items3 = [guildId];
    cResult[4] = guildId;
    cResult[5] = fn2;
    cResult[6] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const tmpResult3 = guildId(504);
  const stateFromStores = tmpResult3.useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [ChannelStore];
    cResult[7] = items4;
    tmp14 = items4;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] !== channelId) {
    const fn3 = function v() {
      return ChannelStore.getChannel(channelId);
    };
    const items5 = [channelId];
    cResult[8] = channelId;
    cResult[9] = fn3;
    cResult[10] = items5;
    tmp17 = items5;
    tmp16 = fn3;
  } else {
    tmp16 = cResult[9];
    tmp17 = cResult[10];
  }
  const tmpResult4 = guildId(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp14, tmp16, tmp17);
  const tmp19 = channelId(5043)(stateFromStores1);
  let name = null;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  if (cResult[11] === guildId) {
    let tmp21;
    if (cResult[12] === name) {
      tmp21 = cResult[13];
    }
    if (cResult[14] === channelId) {
      let tmp22;
      if (cResult[15] === tmp19) {
        tmp22 = cResult[16];
      }
      if (cResult[17] === tmp21) {
        let tmp23;
        if (cResult[18] === tmp22) {
          tmp23 = cResult[19];
        }
        return tmp23;
      }
      const obj2 = { title: "general", children: closure_17(ObjectKV, obj3) };
      obj3 = { obj: obj4 };
      obj4 = { guild: tmp21, channel: tmp22 };
      const tmp27 = closure_17(closure_23, obj2);
      cResult[17] = tmp21;
      cResult[18] = tmp22;
      cResult[19] = tmp27;
      tmp23 = tmp27;
    }
    const obj5 = { id: channelId, name: tmp19 };
    cResult[14] = channelId;
    cResult[15] = tmp19;
    cResult[16] = obj5;
    tmp22 = obj5;
  }
  const obj6 = { id: guildId, name };
  cResult[11] = guildId;
  cResult[12] = name;
  cResult[13] = obj6;
  tmp21 = obj6;
}) : (function RTCDebugGeneral() {
  let guildId;
  let name;
  let obj6;
  let obj7;
  let obj = guildId(504);
  const items = [RTCConnectionStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { guildId: RTCConnectionStore.getGuildId(), channelId: RTCConnectionStore.getChannelId() };
    return obj;
  }, []);
  guildId = stateFromStoresObject.guildId;
  const channelId = stateFromStoresObject.channelId;
  const items1 = [GuildStore];
  const items2 = [guildId];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
  const items3 = [ChannelStore];
  const items4 = [channelId];
  const obj3 = guildId(504);
  const stateFromStores1 = obj3.useStateFromStores(items3, () => ChannelStore.getChannel(channelId), items4);
  obj4 = { id: guildId, name };
  name = null;
  const tmp4 = channelId(5043)(stateFromStores1);
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  const obj5 = { title: "general", children: closure_17(ObjectKV, obj6) };
  obj6 = { obj: obj7 };
  obj7 = { guild: obj4, channel: { id: channelId, name: tmp4 } };
  return closure_17(closure_23, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function DefaultContextInfo() {
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    const fn = function n() {
      let obj2;
      const obj = { mediaSessionId: RTCConnectionStore.getMediaSessionId(), state: RTCConnectionStore.getState(), hostname: obj2.getShortHostname(RTCConnectionStore.getHostname()), quality: RTCConnectionStore.getQuality(), averagePing: RTCConnectionStore.getAveragePing(), lastPing: RTCConnectionStore.getLastPing(), outboundLossRate: RTCConnectionStore.getOutboundLossRate(), duration: RTCConnectionStore.getDuration() };
      obj2 = RTCConnectionUtilsDefault;
      return obj;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5, tmp6);
  if (cResult[3] !== stateFromStoresObject) {
    let obj2 = { obj: stateFromStoresObject };
    const tmp12 = closure_17(ObjectKV, obj2);
    cResult[3] = stateFromStoresObject;
    cResult[4] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (function DefaultContextInfo() {
  let obj = get_initialized;
  const items = [RTCConnectionStore];
  let obj2 = {
    obj: obj.useStateFromStoresObject(items, () => {
      let obj2;
      const obj = { mediaSessionId: RTCConnectionStore.getMediaSessionId(), state: RTCConnectionStore.getState(), hostname: obj2.getShortHostname(RTCConnectionStore.getHostname()), quality: RTCConnectionStore.getQuality(), averagePing: RTCConnectionStore.getAveragePing(), lastPing: RTCConnectionStore.getLastPing(), outboundLossRate: RTCConnectionStore.getOutboundLossRate(), duration: RTCConnectionStore.getDuration() };
      obj2 = RTCConnectionUtilsDefault;
      return obj;
    }, [])
  };
  return closure_17(ObjectKV, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let obj4 = {
  [MediaEngineContextTypes.DEFAULT]: tmp7,
  [MediaEngineContextTypes.STREAM]: ReactCompilerGating.isReactCompilerEnabled() ? (function StreamContextInfo() {
    let first;
    let first1;
    let tmp10;
    let tmp13;
    let tmp8;
    let tmp9;
    let obj = first1(576);
    const cResult = obj.c(6);
    const tmp = first1;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
      cResult[0] = allActiveStreamKeys;
      first = allActiveStreamKeys;
    } else {
      first = cResult[0];
    }
    first1 = first[0];
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [StreamRTCConnectionStore];
      const fn = function l() {
        let obj2;
        const obj = { mediaSessionId: StreamRTCConnectionStore.getMediaSessionId(first1), hostname: obj2.getShortHostname(StreamRTCConnectionStore.getHostname(first1)), quality: StreamRTCConnectionStore.getQuality(first1) };
        obj2 = RTCConnectionUtilsDefault;
        return obj;
      };
      const items1 = [first1];
      cResult[1] = items;
      cResult[2] = fn;
      cResult[3] = items1;
      tmp10 = items1;
      tmp9 = fn;
      tmp8 = items;
    } else {
      tmp8 = cResult[1];
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp8, tmp9, tmp10);
    if (cResult[4] !== stateFromStoresObject) {
      let obj2 = { obj: stateFromStoresObject };
      const tmp16 = closure_17(ObjectKV, obj2);
      cResult[4] = stateFromStoresObject;
      cResult[5] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[5];
    }
    return tmp13;
  }) : (function StreamContextInfo() {
    const first = StreamRTCConnectionStore.getAllActiveStreamKeys()[0];
    let obj = first(504);
    const items = [StreamRTCConnectionStore];
    const items1 = [first];
    let obj2 = {
      obj: obj.useStateFromStoresObject(items, () => {
        let obj2;
        const obj = { mediaSessionId: StreamRTCConnectionStore.getMediaSessionId(first), hostname: obj2.getShortHostname(StreamRTCConnectionStore.getHostname(first)), quality: StreamRTCConnectionStore.getQuality(first) };
        obj2 = RTCConnectionUtilsDefault;
        return obj;
      }, items1)
    };
    return closure_17(ObjectKV, obj2);
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function RTCDebugContext(context) {
  let first;
  let tmp6;
  let tmp7;
  let obj = context(576);
  const cResult = obj.c(9);
  const tmp = context;
  context = context.context;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RTCDebugStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== context) {
    const fn = function o() {
      return RTCDebugStore.getAllStats(context);
    };
    const items1 = [context];
    cResult[1] = context;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (null != stateFromStores) {
    if (0 !== stateFromStores.length) {
      let tmp9;
      if (cResult[4] === stateFromStores) {
        let tmp8;
        if (cResult[5] === context) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
      if (cResult[7] !== context) {
        const fn2 = function u(mediaEngineConnectionId) {
          let items;
          let obj3;
          let tmp4 = null;
          const obj = { title: "" + context + " - " + mediaEngineConnectionId.mediaEngineConnectionId, children: items };
          if (null != obj4[context]) {
            tmp4 = closure_17(tmp3, {});
          }
          items = [tmp4, , , ];
          const obj2 = { title: "transport", children: closure_17(ObjectKV, obj3) };
          obj3 = { obj: mediaEngineConnectionId.transport };
          items[1] = closure_17(closure_23, obj2);
          const outbound = mediaEngineConnectionId.rtp.outbound;
          obj4 = { title: "outbound", children: outbound.map(f101398) };
          items[2] = closure_17(closure_23, obj4);
          const inbound = mediaEngineConnectionId.rtp.inbound;
          const keys = Object.keys(inbound);
          let tmp6Result = null;
          if (0 !== keys.length) {
            const obj5 = {
              title: "inbound",
              children: keys.map((userId) => {
                  const obj = { userId, data: inbound[userId] };
                  return closure_2_17(closure_2_26, obj, userId);
                })
            };
            tmp6Result = closure_17(closure_23, obj5);
          }
          items[3] = tmp6Result;
          return authStore4(closure_23, obj, mediaEngineConnectionId.mediaEngineConnectionId);
        };
        cResult[7] = context;
        cResult[8] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[8];
      }
      const mapped = stateFromStores.map(tmp9);
      cResult[4] = stateFromStores;
      cResult[5] = context;
      cResult[6] = mapped;
      tmp8 = mapped;
    }
  }
  return null;
}) : (function RTCDebugContext(context) {
  context = context.context;
  let obj = context(504);
  let items = [RTCDebugStore];
  const items1 = [context];
  const stateFromStores = obj.useStateFromStores(items, () => RTCDebugStore.getAllStats(context), items1);
  let mapped = null;
  if (null != stateFromStores) {
    mapped = null;
    if (0 !== stateFromStores.length) {
      mapped = stateFromStores.map((mediaEngineConnectionId) => {
        let items;
        let obj3;
        let obj = { title: "" + context + " - " + mediaEngineConnectionId.mediaEngineConnectionId, children: items };
        let tmp4 = null;
        if (null != obj4[context]) {
          tmp4 = closure_17(tmp3, {});
        }
        items = [tmp4, , , ];
        const obj2 = { title: "transport", children: closure_17(ObjectKV, obj3) };
        obj3 = { obj: mediaEngineConnectionId.transport };
        items[1] = closure_17(closure_23, obj2);
        const outbound = mediaEngineConnectionId.rtp.outbound;
        obj4 = { title: "outbound", children: outbound.map(f101398) };
        items[2] = closure_17(closure_23, obj4);
        const inbound = mediaEngineConnectionId.rtp.inbound;
        const keys = Object.keys(inbound);
        let tmp6Result = null;
        if (0 !== keys.length) {
          const obj5 = {
            title: "inbound",
            children: keys.map((userId) => {
                const obj = { userId, data: inbound[userId] };
                return closure_2_17(closure_2_26, obj, userId);
              })
          };
          tmp6Result = closure_17(closure_23, obj5);
        }
        items[3] = tmp6Result;
        return authStore4(closure_23, obj, mediaEngineConnectionId.mediaEngineConnectionId);
      });
    }
  }
  return mapped;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function RTCDebugOverlay(arg0) {
  let items1;
  let items2;
  let onClose;
  let style;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(19);
  ({ onClose, style } = arg0);
  const tmp4 = closure_21();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      let obj = RTCDebugActionCreatorsAll;
      obj.open();
      return () => {
        const obj = closure_1_1(closure_1_3[22]);
        return obj.wait(closure_1_2(closure_1_3[21]).close);
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[2] === style) {
    let tmp8;
    let tmp10;
    let tmp9;
    let tmp16;
    let tmp20;
    let tmp22;
    if (cResult[3] === tmp4.container) {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    const scroller = tmp4.scroller;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = closure_17(closure_27, {});
      const _Object = Object;
      const values = Object.values(MediaEngineContextTypes);
      const mapped = values.map((context) => {
        const obj = { context };
        return closure_1_17(closure_1_29, obj, context);
      });
      cResult[5] = tmp13;
      cResult[6] = mapped;
      tmp10 = mapped;
      tmp9 = tmp13;
    } else {
      tmp9 = cResult[5];
      tmp10 = cResult[6];
    }
    if (cResult[7] !== tmp4.scroller) {
      const obj2 = { style: scroller, indicatorStyle: "white", children: items1 };
      items1 = [tmp9, tmp10];
      const tmp19 = authStore4(React4, obj2);
      cResult[7] = tmp4.scroller;
      cResult[8] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[8];
    }
    const _Symbol2 = Symbol;
    const buttonClose = tmp4.buttonClose;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t.cpT0Cq);
      cResult[9] = stringResult;
      tmp20 = stringResult;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] !== onClose) {
      const obj3 = { text: tmp20, onPress: onClose };
      const tmp24 = closure_17(components_Button_Button.Button, obj3);
      cResult[10] = onClose;
      cResult[11] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[11];
    }
    if (cResult[12] === tmp4.buttonClose) {
      let tmp25;
      if (cResult[13] === tmp22) {
        tmp25 = cResult[14];
      }
      if (cResult[15] === tmp25) {
        if (cResult[16] === tmp8) {
          let tmp29;
          if (cResult[17] === tmp16) {
            tmp29 = cResult[18];
          }
          return tmp29;
        }
      }
      const rect = { top: true, left: true, right: true, bottom: true, style: tmp8, children: items2 };
      items2 = [tmp16, tmp25];
      const tmp31 = authStore4(common_SafeAreaView.SafeAreaPaddingView, rect);
      cResult[15] = tmp25;
      cResult[16] = tmp8;
      cResult[17] = tmp16;
      cResult[18] = tmp31;
      tmp29 = tmp31;
    }
    obj4 = { style: buttonClose, children: tmp22 };
    const tmp28 = closure_17(metroImportAll, obj4);
    cResult[12] = tmp4.buttonClose;
    cResult[13] = tmp22;
    cResult[14] = tmp28;
    tmp25 = tmp28;
  }
  const items3 = [tmp4.container, style];
  cResult[2] = style;
  cResult[3] = tmp4.container;
  cResult[4] = items3;
  tmp8 = items3;
}) : (function RTCDebugOverlay(arg0) {
  let Button;
  let intl;
  let items;
  let items1;
  let items2;
  let obj3;
  let onClose;
  let style;
  ({ onClose, style } = arg0);
  const tmp = closure_21();
  const effect = react.useEffect(() => {
    let obj = RTCDebugActionCreatorsAll;
    obj.open();
    return () => {
      const obj = closure_1_1(closure_1_3[22]);
      return obj.wait(closure_1_2(closure_1_3[21]).close);
    };
  }, []);
  const rect = { top: true, left: true, right: true, bottom: true, style: items, children: items2 };
  items = [tmp.container, style];
  let obj = { style: tmp.scroller, indicatorStyle: "white", children: items1 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items1 = [closure_17(closure_27, {}), ];
  const values = Object.values(MediaEngineContextTypes);
  items1[1] = values.map((context) => {
    const obj = { context };
    return closure_1_17(closure_1_29, obj, context);
  });
  items2 = [authStore4(React4, obj), ];
  const obj2 = { style: tmp.buttonClose, children: closure_17(Button, obj3) };
  obj3 = { text: intl.string(intl2.t.cpT0Cq), onPress: onClose };
  Button = components_Button_Button.Button;
  intl = intl2.intl;
  items2[1] = closure_17(metroImportAll, obj2);
  return authStore4(SafeAreaPaddingView, rect);
});
const result = size.fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default tmp8;