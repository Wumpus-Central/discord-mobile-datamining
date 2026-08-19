// discord_app/components_native/calls/RTCDebugOverlay.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import Button from "../../design/void/native.tsx";
import Button2 from "../../design/components/Button/native/Button.native.tsx";
import SafeAreaPaddingView from "../common/SafeAreaView.tsx";
import _modDef12598 from "../../utils/RTCConnectionUtils.tsx";
import importAllResult from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import createRTCConnection from "../../stores/RTCConnectionStore.tsx";
import updateStats from "../../stores/RTCDebugStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { MediaEngineContextTypes } from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import hexToRgba from "../../utils/ColorUtils.tsx";

require = fn;
function Text(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.style = callback3().text;
  return callback(Button.LegacyText, obj);
}
function Section(arg0) {
  ({ title, children } = arg0);
  const items = [title, ":"];
  const items1 = [callback2(Text, { children: items }), ];
  const obj = { style: callback3().indent, children };
  items1[1] = callback(closure_5, obj);
  obj[0] = items1;
  return callback2(closure_16, obj);
}
function ObjectKV(obj) {
  closure_0 = callback3();
  const entries = Object.entries(obj.obj);
  return entries.map((item, index) => {
    [tmp, obj] = item;
    let value = obj;
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
        obj = { title: null, children: null };
        obj[0] = tmp;
        obj = { obj: null };
        obj[0] = value;
        obj[1] = closure_1_14(ObjectKV, obj);
        let tmp4Result = closure_1_14(Section, obj, tmp);
      }
      return tmp4Result;
    }
    obj1 = { style: row.row, children: null };
    const items = [tmp, ": ", ];
    if (typeof asString !== "function") {
      HermesBuiltin.throwTypeError();
    }
    items[2] = "" + value;
    obj1[1] = closure_1_15(Text, { children: items });
    tmp4Result = closure_1_14(closure_1_5, obj1, tmp);
  });
}
function RTCDebugGeneral() {
  let obj = guildId(589);
  const items = [closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guildId: store.getGuildId(), channelId: store.getChannelId() }), []);
  guildId = stateFromStoresObject.guildId;
  const channelId = stateFromStoresObject.channelId;
  const items1 = [closure_8];
  const items2 = [guildId];
  const stateFromStores = guildId(589).useStateFromStores(items1, () => closure_1_8.getGuild(guildId), items2);
  const obj2 = guildId(589);
  const items3 = [closure_7];
  const items4 = [channelId];
  const stateFromStores1 = guildId(589).useStateFromStores(items3, () => closure_1_7.getChannel(channelId), items4);
  obj = { id: guildId, name: null };
  let name = null;
  const obj3 = guildId(589);
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj = { title: "general", children: callback(ObjectKV, { obj: { guild: obj, channel: { id: channelId, name: channelId(4984)(stateFromStores1) } } }) };
  obj[1] = name;
  return callback(Section, obj);
}
function RTCDebugContext(context) {
  context = context.context;
  let items = [closure_10];
  const items1 = [context];
  const stateFromStores = context(589).useStateFromStores(items, () => closure_1_10.getAllStats(context), items1);
  let mapped = null;
  if (null != stateFromStores) {
    mapped = null;
    if (0 !== stateFromStores.length) {
      mapped = stateFromStores.map((item, index) => {
        let obj = { title: "" + inbound + " - " + item.mediaEngineConnectionId, children: null };
        let tmp4 = null;
        if (null != closure_1_25[inbound]) {
          tmp4 = closure_1_14(tmp3, {});
        }
        const items = [tmp4, , , ];
        { title: "transport", children: closure_1_14(ObjectKV, obj) };
        obj = { obj: item.transport };
        items[1] = closure_1_14(Section, obj);
        const outbound = item.rtp.outbound;
        items[2] = closure_1_14(Section, { title: "outbound", children: outbound.map((item, index) => callback(closure_22, { data: item }, index)) });
        inbound = item.rtp.inbound;
        const keys = Object.keys(inbound);
        let tmp6Result = null;
        if (0 !== keys.length) {
          const obj2 = { title: "inbound", children: null };
          obj2[1] = keys.map((item, index) => closure_1_14(closure_1_23, { userId: item, data: inbound[item] }, item));
          tmp6Result = closure_1_14(Section, obj2);
        }
        items[3] = tmp6Result;
        obj[1] = items;
        return closure_1_15(Section, obj, item.mediaEngineConnectionId);
      });
    }
  }
  return mapped;
}
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
function asString(arg0) {

}
let obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.7);
obj[0] = obj;
obj[1] = { flex: 1, margin: 8 };
obj[2] = { marginLeft: 16 };
obj[3] = { flexDirection: "row" };
const createCacheKey = { color: ThemesDefault.unsafe_rawColors.WHITE, fontSize: 14 };
obj[4] = createCacheKey;
obj[5] = { flexGrow: 0, margin: 8 };
let closure_18 = createCacheKey.createStyles(obj);
let closure_22 = importAllResult.memo((data) => {
  data = data.data;
  const obj = { obj: Object.assign(data, Object.create(null)) };
  obj[1] = callback(ObjectKV, obj);
  return callback(Section, obj);
});
let closure_23 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const data = userId.data;
  let obj = userId(589);
  const items = [closure_12];
  const items1 = [userId];
  const str = obj.useStateFromStores(items, () => closure_1_12.getUser(userId), items1);
  const combined = "" + userId;
  let sum = combined;
  if (null != str) {
    const _HermesInternal = HermesInternal;
    sum = combined + " (" + str.toString() + ")";
  }
  obj = { title: sum, children: data.map((item, index) => callback(closure_22, { data: item }, index)) };
  return callback(Section, obj);
});
let closure_25 = {
  [MediaEngineContextTypes.DEFAULT]: function DefaultContextInfo() {
    let obj = initialize;
    const items = [closure_9];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: store.getMediaSessionId(), state: store.getState(), hostname: callback(table[16]).getShortHostname(store.getHostname()), quality: store.getQuality(), averagePing: store.getAveragePing(), lastPing: store.getLastPing(), outboundLossRate: store.getOutboundLossRate(), duration: store.getDuration() };
        return obj;
      }, [])
    };
    return callback(ObjectKV, obj);
  },
  [MediaEngineContextTypes.STREAM]: function StreamContextInfo() {
    const first = allActiveStreamKeys.getAllActiveStreamKeys()[0];
    let obj = first(589);
    const items = [allActiveStreamKeys];
    const items1 = [first];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: closure_1_11.getMediaSessionId(first), hostname: _modDef12598.getShortHostname(closure_1_11.getHostname(first)), quality: closure_1_11.getQuality(first) };
        return obj;
      }, items1)
    };
    return callback(ObjectKV, obj);
  }
};
const result = require("obj132").fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default function RTCDebugOverlay(arg0) {
  ({ onClose, style } = arg0);
  const tmp = callback3();
  const effect = importAllResult.useEffect(() => {
    callback(table[17]).open();
    return () => callback(709).wait(callback2(12597).close);
  }, []);
  const items = [tmp.container, style];
  let obj = { style: tmp.scroller, indicatorStyle: "white", children: null };
  const items1 = [callback(RTCDebugGeneral, {}), ];
  const values = Object.values(MediaEngineContextTypes);
  items1[1] = values.map((item, index) => callback2(closure_26, { context: item }, item));
  obj[2] = items1;
  const items2 = [callback2(closure_6, obj), ];
  obj = { style: tmp.buttonClose, children: null };
  obj1 = { text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj1[0] = intl.string(getSystemLocale.t.cpT0Cq);
  obj1[1] = onClose;
  obj[1] = callback(Button2.Button, obj1);
  items2[1] = callback(closure_5, obj);
  obj[5] = items2;
  return callback2(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};