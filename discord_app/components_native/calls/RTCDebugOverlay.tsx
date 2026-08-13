// discord_app/components_native/calls/RTCDebugOverlay.tsx
import importAllResult from "SafeAreaPaddingView";
import get_ActivityIndicator from "open";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import createRTCConnection from "createRTCConnection";
import updateStats from "updateStats";
import initialize from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { Button } from "../../design/components/Button/native/Button.native.tsx";
import { Button } from "../../design/void/native.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { SafeAreaPaddingView } from "../common/SafeAreaView.tsx";

let StyleSheet;
let c5;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
const require = arg1;
function Text(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.style = callback3().text;
  return callback(Button.LegacyText, obj);
}
function Section(arg0) {
  let children;
  let title;
  ({ title, children } = arg0);
  let obj = { children: null };
  const items = [title, ":"];
  const items1 = [callback2(Text, { children: items }), ];
  obj = { style: callback3().indent, children };
  items1[1] = callback(closure_5, obj);
  obj[0] = items1;
  return callback2(closure_16, obj);
}
function ObjectKV(obj) {
  let closure_0;
  closure_0 = callback3();
  const entries = Object.entries(obj.obj);
  return entries.map((arg0) => {
    let obj;
    let tmp;
    [tmp, obj] = arg0;
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
        obj[1] = outer1_14(outer1_21, obj);
        let tmp4Result = outer1_14(outer1_20, obj, tmp);
      }
      return tmp4Result;
    }
    const obj1 = { style: row.row, children: null };
    const items = [tmp, ": ", ];
    if (typeof outer1_17 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    items[2] = "" + value;
    obj1[1] = outer1_15(outer1_19, { children: items });
    tmp4Result = outer1_14(outer1_5, obj1, tmp);
  });
}
function RTCDebugGeneral() {
  let obj = guildId(589);
  const items = [createRTCConnection];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guildId: store.getGuildId(), channelId: store.getChannelId() }), []);
  guildId = stateFromStoresObject.guildId;
  const channelId = stateFromStoresObject.channelId;
  const items1 = [createGuildRecordFromRust];
  const items2 = [guildId];
  const stateFromStores = guildId(589).useStateFromStores(items1, () => outer1_8.getGuild(guildId), items2);
  const obj2 = guildId(589);
  const items3 = [ensureGuildLoaded];
  const items4 = [channelId];
  const stateFromStores1 = guildId(589).useStateFromStores(items3, () => outer1_7.getChannel(channelId), items4);
  obj = { id: guildId, name: null };
  let name = null;
  const obj3 = guildId(589);
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj = { title: "general", children: tmp5(ObjectKV, { obj: { guild: obj, channel: { id: channelId, name: channelId(4535)(stateFromStores1) } } }) };
  obj[1] = name;
  return closure_14(Section, obj);
}
function RTCDebugContext(context) {
  context = context.context;
  let items = [updateStats];
  const items1 = [context];
  const stateFromStores = context(589).useStateFromStores(items, () => outer1_10.getAllStats(context), items1);
  let mapped = null;
  if (null != stateFromStores) {
    mapped = null;
    if (0 !== stateFromStores.length) {
      mapped = stateFromStores.map((mediaEngineConnectionId) => {
        let obj = { title: "" + inbound + " - " + mediaEngineConnectionId.mediaEngineConnectionId, children: null };
        let tmp4 = null;
        if (null != outer1_25[inbound]) {
          tmp4 = outer1_14(tmp3, {});
        }
        const items = [tmp4, , , ];
        obj = { title: "transport", children: outer1_14(outer1_21, obj) };
        obj = { obj: mediaEngineConnectionId.transport };
        items[1] = outer1_14(outer1_20, obj);
        const outbound = mediaEngineConnectionId.rtp.outbound;
        items[2] = outer1_14(outer1_20, { title: "outbound", children: outbound.map((data) => callback(closure_22, { data }, arg1)) });
        inbound = mediaEngineConnectionId.rtp.inbound;
        const keys = Object.keys(inbound);
        let tmp6Result = null;
        if (0 !== keys.length) {
          const obj2 = { title: "inbound", children: null };
          obj2[1] = keys.map((userId) => outer1_14(outer1_23, { userId, data: inbound[userId] }, userId));
          tmp6Result = outer1_14(tmp2, obj2);
        }
        items[3] = tmp6Result;
        obj[1] = items;
        return outer1_15(outer1_20, obj, mediaEngineConnectionId.mediaEngineConnectionId);
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
let obj = { container: null, scroller: null, indent: null, row: null, text: null, buttonClose: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.7);
obj[0] = obj;
obj[1] = { flex: 1, margin: 8 };
obj[2] = { marginLeft: 16 };
obj[3] = { flexDirection: "row" };
createCacheKey = { color: require("Themes").unsafe_rawColors.WHITE, fontSize: 14 };
obj[4] = createCacheKey;
obj[5] = { flexGrow: 0, margin: 8 };
let closure_18 = createCacheKey.createStyles(obj);
let closure_22 = importAllResult.memo((data) => {
  data = data.data;
  let obj = { title: data.type, children: null };
  obj = { obj: Object.assign(data, Object.create(null)) };
  obj[1] = callback(ObjectKV, obj);
  return callback(Section, obj);
});
let closure_23 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const data = userId.data;
  let obj = userId(589);
  const items = [mergeGuildAvatar];
  const items1 = [userId];
  const str = obj.useStateFromStores(items, () => outer1_12.getUser(userId), items1);
  const combined = "" + userId;
  let sum = combined;
  if (null != str) {
    const _HermesInternal = HermesInternal;
    sum = combined + " (" + str.toString() + ")";
  }
  obj = { title: sum, children: data.map((data) => callback(closure_22, { data }, arg1)) };
  return callback(Section, obj);
});
let closure_25 = {
  [MediaEngineContextTypes.DEFAULT]: function DefaultContextInfo() {
    let obj = initialize;
    const items = [createRTCConnection];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: store.getMediaSessionId(), state: store.getState(), hostname: null, quality: null, averagePing: null, lastPing: null, outboundLossRate: null, duration: null };
        obj[2] = callback(table[16]).getShortHostname(store.getHostname());
        obj[3] = store.getQuality();
        obj[4] = store.getAveragePing();
        obj[5] = store.getLastPing();
        obj[6] = store.getOutboundLossRate();
        obj[7] = store.getDuration();
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
        const obj = { mediaSessionId: outer1_11.getMediaSessionId(first), hostname: null, quality: null };
        obj[1] = outer1_1(outer1_3[16]).getShortHostname(outer1_11.getHostname(first));
        obj[2] = outer1_11.getQuality(first);
        return obj;
      }, items1)
    };
    return callback(ObjectKV, obj);
  }
};
const result = require("ensureGuildLoaded").fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default function RTCDebugOverlay(arg0) {
  let onClose;
  let style;
  ({ onClose, style } = arg0);
  const tmp = callback3();
  const effect = importAllResult.useEffect(() => {
    callback(table[17]).open();
    return () => callback(709).wait(callback2(10892).close);
  }, []);
  let obj = { top: true, left: true, right: true, bottom: true, style: items, children: null };
  items = [tmp.container, style];
  obj = { style: tmp.scroller, indicatorStyle: "white", children: null };
  const items1 = [callback(RTCDebugGeneral, {}), ];
  const values = Object.values(MediaEngineContextTypes);
  items1[1] = values.map((context) => callback2(closure_26, { context }, context));
  obj[2] = items1;
  const items2 = [callback2(closure_6, obj), ];
  obj = { style: tmp.buttonClose, children: null };
  const obj1 = { text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj1[0] = intl.string(getSystemLocale.t.cpT0Cq);
  obj1[1] = onClose;
  obj[1] = callback(Button.Button, obj1);
  items2[1] = callback(closure_5, obj);
  obj[5] = items2;
  return callback2(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};