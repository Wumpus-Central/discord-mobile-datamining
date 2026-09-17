// === Module 10187: RTCDebugOverlay ===

// Module 10187 (RTCDebugOverlay)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import components_Button_Button from "components/Button/Button" /* 5062 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7237 */;
import RTCDebugActionCreatorsAll from "RTCDebugActionCreators" /* 10189 */;
import RTCConnectionUtilsDefault from "RTCConnectionUtils" /* 10190 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4663 */;
import RTCDebugStore from "RTCDebugStore" /* 10188 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4679 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function Text(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.style = closure_18().text;
  return closure_1_14(native.LegacyText, obj);
}
function Section(arg0) {
  ({ title, children } = arg0);
  const obj = { children: null };
  const obj2 = { children: null };
  const items = [title, ":"];
  obj2.children = items;
  const items1 = [__initData(Text, obj2), ];
  const tmp = closure_18();
  items1[1] = closure_1_14(hasOwnProperty, { style: closure_18().indent, children });
  obj.children = items1;
  return __initData(value2, obj);
}
function ObjectKV(obj) {
  const row = closure_18();
  const entries = Object.entries(obj.obj);
  return entries.map((item) => {
    [tmp, obj] = item;
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
        const obj2 = { title: tmp, children: null };
        const obj3 = { obj: value };
        obj2.children = closure_2_14(ObjectKV, obj3);
        let tmp4Result = closure_2_14(Section, obj2, tmp);
      }
      return tmp4Result;
    }
    const obj4 = { style: row.row, children: null };
    const items = [tmp, ": ", ];
    if (typeof asString === "function") {
      const obj5 = { children: null };
      items[2] = "" + value;
      obj5.children = items;
      obj4.children = tmp6(tmp7, obj5);
      tmp4Result = tmp4(tmp5, obj4, tmp);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
}
function RTCDebugGeneral() {
  const items = [RTCConnectionStore];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items, () => ({ guildId: RTCConnectionStore.getGuildId(), channelId: RTCConnectionStore.getChannelId() }), []);
  guildId = stateFromStoresObject.guildId;
  const channelId = stateFromStoresObject.channelId;
  const obj = guildId(504);
  const items1 = [GuildStore];
  const items2 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
  const obj2 = guildId(504);
  const items3 = [ChannelStore];
  const items4 = [channelId];
  const stateFromStores1 = guildId(504).useStateFromStores(items3, () => ChannelStore.getChannel(channelId), items4);
  const obj4 = { id: guildId, name: null };
  let name = null;
  const obj3 = guildId(504);
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  const obj5 = { title: "general", children: null };
  const obj6 = { obj: null };
  const tmp4 = channelId(4793)(stateFromStores1);
  obj4.name = name;
  obj6.obj = { guild: obj4, channel: { id: channelId, name: channelId(4793)(stateFromStores1) } };
  obj5.children = closure_14(ObjectKV, obj6);
  return closure_14(Section, obj5);
}
function RTCDebugContext(context) {
  context = context.context;
  let items = [RTCDebugStore];
  const items1 = [context];
  const stateFromStores = context(504).useStateFromStores(items, () => RTCDebugStore.getAllStats(context), items1);
  let mapped = null;
  if (null != stateFromStores) {
    mapped = null;
    if (0 !== stateFromStores.length) {
      mapped = stateFromStores.map((mediaEngineConnectionId) => {
        const obj = { title: "" + context + " - " + mediaEngineConnectionId.mediaEngineConnectionId, children: null };
        let tmp4 = null;
        if (null != closure_25[context]) {
          tmp4 = closure_2_14(tmp3, {});
        }
        const items = [tmp4, , , ];
        const obj2 = { title: "transport", children: closure_2_14(ObjectKV, { obj: mediaEngineConnectionId.transport }) };
        items[1] = closure_2_14(Section, obj2);
        const outbound = mediaEngineConnectionId.rtp.outbound;
        items[2] = closure_2_14(Section, { title: "outbound", children: outbound.map((data, index) => closure_1_14(closure_1_22, { data }, index)) });
        const inbound = mediaEngineConnectionId.rtp.inbound;
        const keys = Object.keys(inbound);
        let tmp6Result = null;
        if (0 !== keys.length) {
          const obj5 = { title: "inbound", children: keys.map((userId) => closure_2_14(closure_2_23, { userId, data: inbound[userId] }, userId)) };
          tmp6Result = closure_2_14(Section, obj5);
        }
        items[3] = tmp6Result;
        obj.children = items;
        return __initData(Section, obj, mediaEngineConnectionId.mediaEngineConnectionId);
      });
    }
  }
  return mapped;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = get_ActivityIndicator);
const MediaEngineContextTypes = fn(4665).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
function asString(arg0) {

}
const createStyles = fn(4640);
let obj = { container: null, scroller: null, indent: null, row: null, text: null, buttonClose: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
const ColorUtils = fn(4489);
obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7);
obj.container = obj3;
obj.scroller = { flex: 1, margin: 8 };
obj.indent = { marginLeft: 16 };
obj.row = { flexDirection: "row" };
obj.text = { color: nativeDefault.unsafe_rawColors.WHITE, fontSize: 14 };
obj.buttonClose = { flexGrow: 0, margin: 8 };
let closure_18 = createStyles.createStyles(obj);
let closure_22 = noop.memo((data) => {
  data = data.data;
  const obj = { title: data.type, children: closure_1_14(ObjectKV, { obj: Object.assign(data, Object.assign({ type: 0 })) }) };
  return closure_1_14(Section, obj);
});
let closure_23 = noop.memo((userId) => {
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
  return closure_14(Section, { title: sum, children: data.map((data, index) => closure_1_14(closure_1_22, { data }, index)) });
});
let closure_25 = {
  [MediaEngineContextTypes.DEFAULT]: function DefaultContextInfo() {
    const items = [RTCConnectionStore];
    return closure_1_14(ObjectKV, {
      obj: initialize.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: RTCConnectionStore.getMediaSessionId(), state: RTCConnectionStore.getState(), hostname: RTCConnectionUtilsDefault.getShortHostname(RTCConnectionStore.getHostname()), quality: RTCConnectionStore.getQuality(), averagePing: RTCConnectionStore.getAveragePing(), lastPing: RTCConnectionStore.getLastPing(), outboundLossRate: RTCConnectionStore.getOutboundLossRate(), duration: RTCConnectionStore.getDuration() };
        return obj;
      }, [])
    });
  },
  [MediaEngineContextTypes.STREAM]: function StreamContextInfo() {
    const first = StreamRTCConnectionStore.getAllActiveStreamKeys()[0];
    const items = [StreamRTCConnectionStore];
    const items1 = [first];
    let obj = first(504);
    return closure_14(ObjectKV, {
      obj: first(504).useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: StreamRTCConnectionStore.getMediaSessionId(first), hostname: RTCConnectionUtilsDefault.getShortHostname(StreamRTCConnectionStore.getHostname(first)), quality: StreamRTCConnectionStore.getQuality(first) };
        return obj;
      }, items1)
    });
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default function RTCDebugOverlay(arg0) {
  ({ onClose, style } = arg0);
  const tmp = closure_18();
  const effect = noop.useEffect(() => {
    RTCDebugActionCreatorsAll.open();
    return () => closure_1_1(573).wait(closure_1_2(10189).close);
  }, []);
  const rect = { top: true, left: true, right: true, bottom: true, style: null, children: null };
  const items = [tmp.container, style];
  rect.style = items;
  const obj = { style: tmp.scroller, indicatorStyle: "white", children: null };
  const items1 = [closure_1_14(RTCDebugGeneral, {}), ];
  const values = Object.values(MediaEngineContextTypes);
  items1[1] = values.map((context) => closure_1_14(RTCDebugContext, { context }, context));
  obj.children = items1;
  const items2 = [__initData(timestampProducer, obj), ];
  const obj2 = { style: tmp.buttonClose, children: null };
  const obj3 = { text: null, onPress: null };
  const intl = util.intl;
  obj3.text = intl.string(util.t.cpT0Cq);
  obj3.onPress = onClose;
  obj2.children = closure_1_14(components_Button_Button.Button, obj3);
  items2[1] = closure_1_14(hasOwnProperty, obj2);
  rect.children = items2;
  return __initData(common_SafeAreaView.SafeAreaPaddingView, rect);
};