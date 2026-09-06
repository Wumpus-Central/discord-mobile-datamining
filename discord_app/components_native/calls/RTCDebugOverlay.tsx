// discord_app/components_native/calls/RTCDebugOverlay.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../common/SafeAreaView.tsx";
import RTCDebugActionCreatorsAll from "../../actions/RTCDebugActionCreators.tsx";
import RTCConnectionUtilsDefault from "../../utils/RTCConnectionUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import RTCDebugStore from "../../stores/RTCDebugStore.tsx";
import StreamRTCConnectionStore from "../../stores/StreamRTCConnectionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function Text(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.style = closure_18().text;
  return closure_1_14(native.LegacyText, obj);
}
function Section(arg0) {
  ({ title, children } = arg0);
  let obj = { children: null };
  obj = { children: null };
  const items = [title, ":"];
  obj.children = items;
  const items1 = [__initData(Text, obj)];
  obj = { style: closure_18().indent, children };
  items1[1] = closure_1_14(hasOwnProperty, obj);
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
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      value = obj;
      if (typeof value === "number") {
        value = obj.at(-1).value;
      }
    }
    if (null != value) {
      if (typeof value === "object") {
        obj = { title: tmp, children: null };
        obj = { obj: value };
        obj.children = closure_2_14(ObjectKV, obj);
        let tmp4Result = closure_2_14(Section, obj, tmp);
      }
      return tmp4Result;
    }
    const obj1 = { style: row.row, children: null };
    const items = [tmp, ": "];
    if (typeof asString === "function") {
      const obj2 = { children: null };
      items[2] = "" + value;
      obj2.children = items;
      obj1.children = tmp6(tmp7, obj2);
      tmp4Result = tmp4(tmp5, obj1, tmp);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
}
function RTCDebugGeneral() {
  let obj = guildId(504);
  const items = [RTCConnectionStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => ({ guildId: RTCConnectionStore.getGuildId(), channelId: RTCConnectionStore.getChannelId() }),
    [],
  );
  guildId = stateFromStoresObject.guildId;
  const channelId = stateFromStoresObject.channelId;
  let obj1 = guildId(504);
  const items1 = [GuildStore];
  const items2 = [guildId];
  const stateFromStores = obj1.useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
  let obj2 = guildId(504);
  const items3 = [ChannelStore];
  const items4 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => ChannelStore.getChannel(channelId), items4);
  obj = { id: guildId, name: null };
  let name = null;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj = { title: "general", children: null };
  obj1 = { obj: null };
  obj2 = { guild: obj, channel: { id: channelId, name: channelId(4713)(stateFromStores1) } };
  obj.name = name;
  obj1.obj = obj2;
  obj.children = closure_14(ObjectKV, obj1);
  return closure_14(Section, obj);
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
        let obj = { title: "" + context + " - " + mediaEngineConnectionId.mediaEngineConnectionId, children: null };
        let tmp4 = null;
        if (null != closure_25[context]) {
          tmp4 = closure_2_14(tmp3, {});
        }
        const items = [tmp4, , ,];
        obj = { title: "transport", children: null };
        obj = { obj: mediaEngineConnectionId.transport };
        obj.children = closure_2_14(ObjectKV, obj);
        items[1] = closure_2_14(Section, obj);
        const outbound = mediaEngineConnectionId.rtp.outbound;
        items[2] = closure_2_14(Section, {
          title: "outbound",
          children: outbound.map((data, index) => closure_1_14(closure_1_22, { data }, index)),
        });
        const inbound = mediaEngineConnectionId.rtp.inbound;
        const keys = Object.keys(inbound);
        let tmp6Result = null;
        if (0 !== keys.length) {
          const obj2 = {
            title: "inbound",
            children: keys.map((userId) => closure_2_14(closure_2_23, { userId, data: inbound[userId] }, userId)),
          };
          tmp6Result = closure_2_14(tmp2, obj2);
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
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
function asString(arg0) {}
fn(4560);
let obj = { container: null, scroller: null, indent: null, row: null, text: null, buttonClose: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
const ColorUtils = fn(4409);
obj.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7);
obj.container = obj;
obj.scroller = { flex: 1, margin: 8 };
obj.indent = { marginLeft: 16 };
obj.row = { flexDirection: "row" };
const createStyles = { color: nativeDefault.unsafe_rawColors.WHITE, fontSize: 14 };
obj.text = createStyles;
obj.buttonClose = { flexGrow: 0, margin: 8 };
let closure_18 = createStyles.createStyles(obj);
let closure_22 = noop.memo((data) => {
  data = data.data;
  let obj = { title: data.type, children: null };
  obj = { obj: Object.assign(data, Object.assign({ type: 0 })) };
  obj.children = closure_1_14(ObjectKV, obj);
  return closure_1_14(Section, obj);
});
let closure_23 = noop.memo((userId) => {
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
  obj = { title: sum, children: data.map((data, index) => closure_1_14(closure_1_22, { data }, index)) };
  return closure_14(Section, obj);
});
let closure_25 = {
  [MediaEngineContextTypes.DEFAULT]: function DefaultContextInfo() {
    let obj = initialize;
    const items = [RTCConnectionStore];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
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
    };
    return closure_1_14(ObjectKV, obj);
  },
  [MediaEngineContextTypes.STREAM]: function StreamContextInfo() {
    const first = StreamRTCConnectionStore.getAllActiveStreamKeys()[0];
    let obj = first(504);
    const items = [StreamRTCConnectionStore];
    const items1 = [first];
    obj = {
      obj: obj.useStateFromStoresObject(
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
    };
    return closure_14(ObjectKV, obj);
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default function RTCDebugOverlay(arg0) {
  ({ onClose, style } = arg0);
  const tmp = closure_18();
  const effect = noop.useEffect(() => {
    RTCDebugActionCreatorsAll.open();
    return () => closure_1_1(573).wait(closure_1_2(10039).close);
  }, []);
  const rect = { top: true, left: true, right: true, bottom: true, style: null, children: null };
  const items = [tmp.container, style];
  rect.style = items;
  let obj = { style: tmp.scroller, indicatorStyle: "white", children: null };
  const items1 = [closure_1_14(RTCDebugGeneral, {})];
  const values = Object.values(MediaEngineContextTypes);
  items1[1] = values.map((context) => closure_1_14(RTCDebugContext, { context }, context));
  obj.children = items1;
  const items2 = [__initData(timestampProducer, obj)];
  obj = { style: tmp.buttonClose, children: null };
  const obj1 = { text: null, onPress: null };
  const intl = util.intl;
  obj1.text = intl.string(util.t.cpT0Cq);
  obj1.onPress = onClose;
  obj.children = closure_1_14(components_Button_Button.Button, obj1);
  items2[1] = closure_1_14(hasOwnProperty, obj);
  rect.children = items2;
  return __initData(common_SafeAreaView.SafeAreaPaddingView, rect);
}
