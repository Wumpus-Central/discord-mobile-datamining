// discord_app/components_native/calls/RTCDebugOverlay.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../common/SafeAreaView.tsx";
import RTCDebugActionCreatorsAll from "../../actions/RTCDebugActionCreators.tsx";
import RTCConnectionUtilsDefault from "../../utils/RTCConnectionUtils.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import RTCDebugStore from "../../stores/RTCDebugStore.tsx";
import StreamRTCConnectionStore from "../../stores/StreamRTCConnectionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
let closure_4 = ["type"];
get_ActivityIndicator = fn(17);
({ View: closure_8, ScrollView: closure_9, StyleSheet } = get_ActivityIndicator);
const MediaEngineContextTypes = fn(4915).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
function asString(arg0) {}
const createStyles = fn(4890);
let obj = { container: null, scroller: null, indent: null, row: null, text: null, buttonClose: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
const ColorUtils = fn(4727);
obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7);
obj.container = obj3;
obj.scroller = { flex: 1, margin: 8 };
obj.indent = { marginLeft: 16 };
obj.row = { flexDirection: "row" };
obj.text = { color: nativeDefault.unsafe_rawColors.WHITE, fontSize: 14 };
obj.buttonClose = { flexGrow: 0, margin: 8 };
const guild = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      const tmp4 = closure_21();
      if (cResult[0] === arg0) {
        if (cResult[1] === tmp4.text) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const obj2 = {};
      const merged = Object.assign(arg0);
      obj2.style = tmp4.text;
      const tmp7 = constants(native.LegacyText, obj2);
      cResult[0] = arg0;
      cResult[1] = tmp4.text;
      cResult[2] = tmp7;
      tmp5 = tmp7;
    }
  : (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.style = closure_21().text;
      return constants(native.LegacyText, obj);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(8);
      ({ title, children } = arg0);
      const tmp2 = closure_21();
      if (cResult[0] !== title) {
        const obj2 = { children: null };
        const items = [title, ":"];
        obj2.children = items;
        const tmp6 = collapsedCategories(closure_22, obj2);
        cResult[0] = title;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === children) {
        if (cResult[3] === tmp2.indent) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] === tmp3) {
          if (cResult[6] === tmp7) {
            let tmp9 = cResult[7];
          }
          return tmp9;
        }
        const obj3 = { children: null };
        const items1 = [tmp3, tmp7];
        obj3.children = items1;
        const tmp12 = collapsedCategories(closure_1_19, obj3);
        cResult[5] = tmp3;
        cResult[6] = tmp7;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      }
      const tmp8 = constants(closure_1_8, { style: tmp2.indent, children });
      cResult[2] = children;
      cResult[3] = tmp2.indent;
      cResult[4] = tmp8;
      tmp7 = tmp8;
      const obj4 = { style: tmp2.indent, children };
    }
  : (arg0) => {
      ({ title, children } = arg0);
      const obj = { children: null };
      const obj2 = { children: null };
      const items = [title, ":"];
      obj2.children = items;
      const items1 = [collapsedCategories(closure_22, obj2)];
      const tmp = closure_21();
      items1[1] = constants(closure_1_8, { style: closure_21().indent, children });
      obj.children = items1;
      return collapsedCategories(closure_1_19, obj);
    };
ReactCompilerGating = fn(558);
if (ReactCompilerGating.isReactCompilerEnabled()) {
  class ObjectKV {
    constructor(arg0) {
      obj = closure_0(closure_3[16]);
      cResult = obj.c(3);
      obj1 = global.obj;
      tmp2 = closure_21();
      closure_0 = tmp2;
      if (cResult[0] === obj1) {
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      entries = Object.entries(obj1);
      mapped = entries.map((item) => {
        [tmp2, obj] = item;
        value = obj;
        if (Array.isArray(obj)) {
          const iter = obj.at(-1);
          value2 = undefined;
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
            const obj2 = { title: tmp2, children: null };
            const obj3 = { obj: value };
            obj2.children = constants(ObjectKV, obj3);
            let tmp5Result = constants(closure_23, obj2, tmp2);
          }
          return tmp5Result;
        }
        const obj4 = { style: row.row, children: null };
        const items = [tmp2, ": "];
        if (typeof asString === "function") {
          const obj5 = { children: null };
          items[2] = "" + value;
          obj5.children = items;
          obj4.children = tmp7(tmp8, obj5);
          tmp5Result = tmp5(tmp6, obj4, tmp2);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const tmp = _slicedToArray(item, 2);
      });
      cResult[0] = obj1;
      cResult[1] = tmp2;
      cResult[2] = mapped;
      tmp3 = mapped;
      return;
    }
  }
} else {
  class ObjectKV {
    constructor(arg0) {
      obj = closure_0(closure_3[16]);
      cResult = obj.c(3);
      obj1 = global.obj;
      tmp2 = closure_21();
      closure_0 = tmp2;
      if (cResult[0] === obj1) {
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      entries = Object.entries(obj1);
      mapped = entries.map((item) => {
        [tmp2, obj] = item;
        value = obj;
        if (Array.isArray(obj)) {
          const iter = obj.at(-1);
          value2 = undefined;
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
            const obj2 = { title: tmp2, children: null };
            const obj3 = { obj: value };
            obj2.children = constants(ObjectKV, obj3);
            let tmp5Result = constants(closure_23, obj2, tmp2);
          }
          return tmp5Result;
        }
        const obj4 = { style: row.row, children: null };
        const items = [tmp2, ": "];
        if (typeof asString === "function") {
          const obj5 = { children: null };
          items[2] = "" + value;
          obj5.children = items;
          obj4.children = tmp7(tmp8, obj5);
          tmp5Result = tmp5(tmp6, obj4, tmp2);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const tmp = _slicedToArray(item, 2);
      });
      cResult[0] = obj1;
      cResult[1] = tmp2;
      cResult[2] = mapped;
      tmp3 = mapped;
      return;
    }
  }
}
ReactCompilerGating = fn(558);
let closure_25 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (data) => {
        const cResult = c.c(8);
        data = data.data;
        if (cResult[0] !== data) {
          const type = data.type;
          const tmp6 = _objectWithoutProperties(data, closure_4);
          cResult[0] = data;
          cResult[1] = tmp6;
          cResult[2] = type;
          let tmp3 = type;
          let tmp2 = tmp6;
        } else {
          tmp2 = cResult[1];
          tmp3 = cResult[2];
        }
        if (cResult[3] !== tmp2) {
          const obj2 = { obj: tmp2 };
          const tmp10 = constants(ObjectKV, obj2);
          cResult[3] = tmp2;
          cResult[4] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp7) {
          if (cResult[6] === tmp3) {
            let tmp11 = cResult[7];
          }
          return tmp11;
        }
        const tmp12 = constants(closure_23, { title: tmp3, children: tmp7 });
        cResult[5] = tmp7;
        cResult[6] = tmp3;
        cResult[7] = tmp12;
        tmp11 = tmp12;
      }
    : (data) => {
        data = data.data;
        const obj = {
          title: data.type,
          children: constants(ObjectKV, { obj: Object.assign(data, Object.assign({ type: 0 })) }),
        };
        return constants(closure_23, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_26 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (userId) => {
        const cResult = userId(576).c(12);
        userId = userId.userId;
        const data = userId.data;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          cResult[0] = items;
          let first = items;
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
          let tmp7 = items1;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        const obj = userId(576);
        let str = userId(504).useStateFromStores(first, tmp6, tmp7);
        const combined = "" + userId;
        if (null == str) {
          if (cResult[6] !== data) {
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const fn2 = function f(data, arg1) {
                return closure_1_17(closure_1_25, { data }, arg1);
              };
              cResult[8] = fn2;
              let tmp13 = fn2;
            } else {
              tmp13 = cResult[8];
            }
            const mapped = data.map(tmp13);
            cResult[6] = data;
            cResult[7] = mapped;
          } else {
            if (cResult[9] === cResult[7]) {
              if (cResult[10] === combined) {
                let tmp16 = cResult[11];
              }
              return tmp16;
            }
            const obj2 = { title: combined, children: cResult[7] };
            const tmp19 = closure_17(closure_23, obj2);
            cResult[9] = cResult[7];
            cResult[10] = combined;
            cResult[11] = tmp19;
            tmp16 = tmp19;
          }
        } else {
          if (cResult[4] !== str) {
            const str1 = str.toString();
            cResult[4] = str;
            cResult[5] = str1;
            let tmp9 = str1;
          } else {
            tmp9 = cResult[5];
          }
          const _HermesInternal = HermesInternal;
          str = ")";
          const sum = combined + " (" + tmp9 + ")";
        }
        const tmpResult = userId(504);
      }
    : (userId) => {
        userId = userId.userId;
        const data = userId.data;
        const items = [UserStore];
        const items1 = [userId];
        const str = userId(504).useStateFromStores(items, () => UserStore.getUser(userId), items1);
        const combined = "" + userId;
        let sum = combined;
        if (null != str) {
          const _HermesInternal = HermesInternal;
          sum = combined + " (" + str.toString() + ")";
        }
        const obj = userId(504);
        return closure_17(closure_23, {
          title: sum,
          children: data.map((data, index) => closure_1_17(closure_1_25, { data }, index)),
        });
      },
);
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RTCDebugGeneral() {
      const cResult = guildId(576).c(20);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RTCConnectionStore];
        const fn = function n() {
          return { guildId: RTCConnectionStore.getGuildId(), channelId: RTCConnectionStore.getChannelId() };
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
      const obj = guildId(576);
      const stateFromStoresObject = guildId(504).useStateFromStoresObject(tmp4, tmp5, tmp6);
      guildId = stateFromStoresObject.guildId;
      const channelId = stateFromStoresObject.channelId;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        cResult[3] = items2;
        let tmp9 = items2;
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
        let tmp12 = items3;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const tmpResult = guildId(504);
      const stateFromStores = guildId(504).useStateFromStores(tmp9, tmp11, tmp12);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [ChannelStore];
        cResult[7] = items4;
        let tmp14 = items4;
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
        let tmp17 = items5;
        let tmp16 = fn3;
      } else {
        tmp16 = cResult[9];
        tmp17 = cResult[10];
      }
      const tmpResult3 = guildId(504);
      const stateFromStores1 = guildId(504).useStateFromStores(tmp14, tmp16, tmp17);
      const tmp19 = channelId(5043)(stateFromStores1);
      let name = null;
      if (null != stateFromStores) {
        name = stateFromStores.name;
      }
      if (cResult[11] === guildId) {
        if (cResult[12] === name) {
          let tmp21 = cResult[13];
        }
        if (cResult[14] === channelId) {
          if (cResult[15] === tmp19) {
            let tmp22 = cResult[16];
          }
          if (cResult[17] === tmp21) {
            if (cResult[18] === tmp22) {
              let tmp23 = cResult[19];
            }
            return tmp23;
          }
          const obj2 = { title: "general", children: null };
          const obj3 = { obj: null };
          const obj4 = { guild: tmp21, channel: tmp22 };
          obj3.obj = obj4;
          obj2.children = closure_17(ObjectKV, obj3);
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
      obj6 = { id: guildId, name };
      cResult[11] = guildId;
      cResult[12] = name;
      cResult[13] = obj6;
      tmp21 = obj6;
      const tmpResult4 = guildId(504);
    }
  : function RTCDebugGeneral() {
      const items = [RTCConnectionStore];
      const stateFromStoresObject = guildId(504).useStateFromStoresObject(
        items,
        () => ({ guildId: RTCConnectionStore.getGuildId(), channelId: RTCConnectionStore.getChannelId() }),
        [],
      );
      guildId = stateFromStoresObject.guildId;
      const channelId = stateFromStoresObject.channelId;
      const obj = guildId(504);
      const items1 = [GuildStore];
      const items2 = [guildId];
      const stateFromStores = guildId(504).useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
      const obj2 = guildId(504);
      const items3 = [ChannelStore];
      const items4 = [channelId];
      const stateFromStores1 = guildId(504).useStateFromStores(
        items3,
        () => ChannelStore.getChannel(channelId),
        items4,
      );
      const obj4 = { id: guildId, name: null };
      let name = null;
      const obj3 = guildId(504);
      if (null != stateFromStores) {
        name = stateFromStores.name;
      }
      const obj5 = { title: "general", children: null };
      obj6 = { obj: null };
      const tmp4 = channelId(5043)(stateFromStores1);
      obj4.name = name;
      obj6.obj = { guild: obj4, channel: { id: channelId, name: channelId(5043)(stateFromStores1) } };
      obj5.children = closure_17(ObjectKV, obj6);
      return closure_17(closure_23, obj5);
    };
fn(558);
let obj4 = { color: nativeDefault.unsafe_rawColors.WHITE, fontSize: 14 };
ReactCompilerGating = fn(558);
let obj6 = {
  [MediaEngineContextTypes.DEFAULT]: ReactCompilerGating.isReactCompilerEnabled()
    ? function DefaultContextInfo() {
        const cResult = c.c(5);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [RTCConnectionStore];
          const fn = function n() {
            const obj = {
              mediaSessionId: RTCConnectionStore.getMediaSessionId(),
              state: RTCConnectionStore.getState(),
              hostname: RTCConnectionUtilsDefault.getShortHostname(RTCConnectionStore.getHostname()),
              quality: RTCConnectionStore.getQuality(),
              averagePing: RTCConnectionStore.getAveragePing(),
              lastPing: RTCConnectionStore.getLastPing(),
              outboundLossRate: RTCConnectionStore.getOutboundLossRate(),
              duration: RTCConnectionStore.getDuration(),
            };
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
        const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5, tmp6);
        if (cResult[3] !== stateFromStoresObject) {
          const obj2 = { obj: stateFromStoresObject };
          const tmp12 = constants(ObjectKV, obj2);
          cResult[3] = stateFromStoresObject;
          cResult[4] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[4];
        }
        return tmp9;
      }
    : function DefaultContextInfo() {
        const items = [RTCConnectionStore];
        return constants(ObjectKV, {
          obj: initialize.useStateFromStoresObject(items, () => {
            const obj = {
              mediaSessionId: RTCConnectionStore.getMediaSessionId(),
              state: RTCConnectionStore.getState(),
              hostname: RTCConnectionUtilsDefault.getShortHostname(RTCConnectionStore.getHostname()),
              quality: RTCConnectionStore.getQuality(),
              averagePing: RTCConnectionStore.getAveragePing(),
              lastPing: RTCConnectionStore.getLastPing(),
              outboundLossRate: RTCConnectionStore.getOutboundLossRate(),
              duration: RTCConnectionStore.getDuration(),
            };
            return obj;
          }, []),
        });
      },
  [MediaEngineContextTypes.STREAM]: ReactCompilerGating.isReactCompilerEnabled()
    ? function StreamContextInfo() {
        const cResult = first1(576).c(6);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
          cResult[0] = allActiveStreamKeys;
          let first = allActiveStreamKeys;
        } else {
          first = cResult[0];
        }
        first1 = first[0];
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [StreamRTCConnectionStore];
          const fn = function l() {
            const obj = {
              mediaSessionId: StreamRTCConnectionStore.getMediaSessionId(first1),
              hostname: RTCConnectionUtilsDefault.getShortHostname(StreamRTCConnectionStore.getHostname(first1)),
              quality: StreamRTCConnectionStore.getQuality(first1),
            };
            return obj;
          };
          const items1 = [first1];
          cResult[1] = items;
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp10 = items1;
          let tmp9 = fn;
          let tmp8 = items;
        } else {
          tmp8 = cResult[1];
          tmp9 = cResult[2];
          tmp10 = cResult[3];
        }
        let obj = first1(576);
        const stateFromStoresObject = first1(504).useStateFromStoresObject(tmp8, tmp9, tmp10);
        if (cResult[4] !== stateFromStoresObject) {
          const obj2 = { obj: stateFromStoresObject };
          const tmp16 = closure_17(ObjectKV, obj2);
          cResult[4] = stateFromStoresObject;
          cResult[5] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[5];
        }
        return tmp13;
      }
    : function StreamContextInfo() {
        const first = StreamRTCConnectionStore.getAllActiveStreamKeys()[0];
        const items = [StreamRTCConnectionStore];
        const items1 = [first];
        let obj = first(504);
        return closure_17(ObjectKV, {
          obj: first(504).useStateFromStoresObject(
            items,
            () => {
              const obj = {
                mediaSessionId: StreamRTCConnectionStore.getMediaSessionId(first),
                hostname: RTCConnectionUtilsDefault.getShortHostname(StreamRTCConnectionStore.getHostname(first)),
                quality: StreamRTCConnectionStore.getQuality(first),
              };
              return obj;
            },
            items1,
          ),
        });
      },
};
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RTCDebugContext(context) {
      const cResult = context(576).c(9);
      context = context.context;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [RTCDebugStore];
        cResult[0] = items;
        let first = items;
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
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = context(576);
      const stateFromStores = context(504).useStateFromStores(first, tmp6, tmp7);
      if (null != stateFromStores) {
        if (0 !== stateFromStores.length) {
          if (cResult[4] === stateFromStores) {
            if (cResult[5] === context) {
              return cResult[6];
            }
          }
          if (cResult[7] !== context) {
            const fn2 = function u(mediaEngineConnectionId) {
              const obj = {
                title: "" + context + " - " + mediaEngineConnectionId.mediaEngineConnectionId,
                children: null,
              };
              let tmp4 = null;
              if (null != obj6[context]) {
                tmp4 = constants(tmp3, {});
              }
              const items = [tmp4, , ,];
              const obj2 = {
                title: "transport",
                children: constants(ObjectKV, { obj: mediaEngineConnectionId.transport }),
              };
              items[1] = constants(closure_23, obj2);
              const outbound = mediaEngineConnectionId.rtp.outbound;
              items[2] = constants(closure_23, {
                title: "outbound",
                children: outbound.map((data, index) => closure_1_17(closure_1_25, { data }, index)),
              });
              const inbound = mediaEngineConnectionId.rtp.inbound;
              const keys = Object.keys(inbound);
              let tmp6Result = null;
              if (0 !== keys.length) {
                const obj5 = {
                  title: "inbound",
                  children: keys.map((userId) => closure_2_17(closure_2_26, { userId, data: inbound[userId] }, userId)),
                };
                tmp6Result = constants(closure_23, obj5);
              }
              items[3] = tmp6Result;
              obj.children = items;
              return collapsedCategories(closure_23, obj, mediaEngineConnectionId.mediaEngineConnectionId);
            };
            cResult[7] = context;
            cResult[8] = fn2;
            let tmp8 = fn2;
          } else {
            tmp8 = cResult[8];
          }
          const mapped = stateFromStores.map(tmp8);
          cResult[4] = stateFromStores;
          cResult[5] = context;
          cResult[6] = mapped;
        }
      }
      return null;
    }
  : function RTCDebugContext(context) {
      context = context.context;
      let items = [RTCDebugStore];
      const items1 = [context];
      const stateFromStores = context(504).useStateFromStores(items, () => RTCDebugStore.getAllStats(context), items1);
      let mapped = null;
      if (null != stateFromStores) {
        mapped = null;
        if (0 !== stateFromStores.length) {
          mapped = stateFromStores.map((mediaEngineConnectionId) => {
            const obj = {
              title: "" + context + " - " + mediaEngineConnectionId.mediaEngineConnectionId,
              children: null,
            };
            let tmp4 = null;
            if (null != obj6[context]) {
              tmp4 = constants(tmp3, {});
            }
            const items = [tmp4, , ,];
            const obj2 = {
              title: "transport",
              children: constants(ObjectKV, { obj: mediaEngineConnectionId.transport }),
            };
            items[1] = constants(closure_23, obj2);
            const outbound = mediaEngineConnectionId.rtp.outbound;
            items[2] = constants(closure_23, {
              title: "outbound",
              children: outbound.map((data, index) => closure_1_17(closure_1_25, { data }, index)),
            });
            const inbound = mediaEngineConnectionId.rtp.inbound;
            const keys = Object.keys(inbound);
            let tmp6Result = null;
            if (0 !== keys.length) {
              const obj5 = {
                title: "inbound",
                children: keys.map((userId) => closure_2_17(closure_2_26, { userId, data: inbound[userId] }, userId)),
              };
              tmp6Result = constants(closure_23, obj5);
            }
            items[3] = tmp6Result;
            obj.children = items;
            return collapsedCategories(closure_23, obj, mediaEngineConnectionId.mediaEngineConnectionId);
          });
        }
      }
      return mapped;
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DefaultContextInfo() {
      const cResult = c.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RTCConnectionStore];
        const fn = function n() {
          const obj = {
            mediaSessionId: RTCConnectionStore.getMediaSessionId(),
            state: RTCConnectionStore.getState(),
            hostname: RTCConnectionUtilsDefault.getShortHostname(RTCConnectionStore.getHostname()),
            quality: RTCConnectionStore.getQuality(),
            averagePing: RTCConnectionStore.getAveragePing(),
            lastPing: RTCConnectionStore.getLastPing(),
            outboundLossRate: RTCConnectionStore.getOutboundLossRate(),
            duration: RTCConnectionStore.getDuration(),
          };
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
      const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5, tmp6);
      if (cResult[3] !== stateFromStoresObject) {
        const obj2 = { obj: stateFromStoresObject };
        const tmp12 = constants(ObjectKV, obj2);
        cResult[3] = stateFromStoresObject;
        cResult[4] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  : function DefaultContextInfo() {
      const items = [RTCConnectionStore];
      return constants(ObjectKV, {
        obj: initialize.useStateFromStoresObject(items, () => {
          const obj = {
            mediaSessionId: RTCConnectionStore.getMediaSessionId(),
            state: RTCConnectionStore.getState(),
            hostname: RTCConnectionUtilsDefault.getShortHostname(RTCConnectionStore.getHostname()),
            quality: RTCConnectionStore.getQuality(),
            averagePing: RTCConnectionStore.getAveragePing(),
            lastPing: RTCConnectionStore.getLastPing(),
            outboundLossRate: RTCConnectionStore.getOutboundLossRate(),
            duration: RTCConnectionStore.getDuration(),
          };
          return obj;
        }, []),
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RTCDebugOverlay(arg0) {
      const cResult = c.c(19);
      ({ onClose, style } = arg0);
      const tmp4 = closure_21();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          RTCDebugActionCreatorsAll.open();
          return () => closure_1_1(584).wait(closure_1_2(9723).close);
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp5 = fn;
        tmp6 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[2] === style) {
        if (cResult[3] === tmp4.container) {
          let tmp8 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = constants(closure_27, {});
          const _Object = Object;
          const values = Object.values(MediaEngineContextTypes);
          const mapped = values.map((context) => closure_1_17(closure_1_29, { context }, context));
          cResult[5] = tmp13;
          cResult[6] = mapped;
          let tmp10 = mapped;
          let tmp9 = tmp13;
        } else {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
        }
        if (cResult[7] !== tmp4.scroller) {
          const obj2 = { style: tmp4.scroller, indicatorStyle: "white", children: null };
          const items1 = [tmp9, tmp10];
          obj2.children = items1;
          const tmp19 = collapsedCategories(options, obj2);
          cResult[7] = tmp4.scroller;
          cResult[8] = tmp19;
          let tmp16 = tmp19;
        } else {
          tmp16 = cResult[8];
        }
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.cpT0Cq);
          cResult[9] = stringResult;
          let tmp20 = stringResult;
        } else {
          tmp20 = cResult[9];
        }
        if (cResult[10] !== onClose) {
          const obj3 = { text: tmp20, onPress: onClose };
          const tmp24 = constants(components_Button_Button.Button, obj3);
          cResult[10] = onClose;
          cResult[11] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[11];
        }
        if (cResult[12] === tmp4.buttonClose) {
          if (cResult[13] === tmp22) {
            let tmp25 = cResult[14];
          }
          if (cResult[15] === tmp25) {
            if (cResult[16] === tmp8) {
              if (cResult[17] === tmp16) {
                let tmp29 = cResult[18];
              }
              return tmp29;
            }
          }
          const rect = { top: true, left: true, right: true, bottom: true, style: tmp8, children: null };
          const items2 = [tmp16, tmp25];
          rect.children = items2;
          const tmp31 = collapsedCategories(common_SafeAreaView.SafeAreaPaddingView, rect);
          cResult[15] = tmp25;
          cResult[16] = tmp8;
          cResult[17] = tmp16;
          cResult[18] = tmp31;
          tmp29 = tmp31;
        }
        const obj4 = { style: tmp4.buttonClose, children: tmp22 };
        const tmp28 = constants(closure_1_8, obj4);
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
    }
  : function RTCDebugOverlay(arg0) {
      ({ onClose, style } = arg0);
      const tmp = closure_21();
      const effect = noop.useEffect(() => {
        RTCDebugActionCreatorsAll.open();
        return () => closure_1_1(584).wait(closure_1_2(9723).close);
      }, []);
      const rect = { top: true, left: true, right: true, bottom: true, style: null, children: null };
      const items = [tmp.container, style];
      rect.style = items;
      const obj = { style: tmp.scroller, indicatorStyle: "white", children: null };
      const items1 = [constants(closure_27, {})];
      const values = Object.values(MediaEngineContextTypes);
      items1[1] = values.map((context) => closure_1_17(closure_1_29, { context }, context));
      obj.children = items1;
      const items2 = [collapsedCategories(options, obj)];
      const obj2 = { style: tmp.buttonClose, children: null };
      const obj3 = { text: null, onPress: null };
      const intl = util.intl;
      obj3.text = intl.string(util.t.cpT0Cq);
      obj3.onPress = onClose;
      obj2.children = constants(components_Button_Button.Button, obj3);
      items2[1] = constants(closure_1_8, obj2);
      rect.children = items2;
      return collapsedCategories(common_SafeAreaView.SafeAreaPaddingView, rect);
    };
