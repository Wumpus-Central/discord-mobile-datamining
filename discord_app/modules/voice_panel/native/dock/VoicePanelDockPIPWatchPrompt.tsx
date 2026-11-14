// === Module 20056: VoicePanelDockPIPWatchPrompt ===

// Module 20056 (VoicePanelDockPIPWatchPrompt)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import _mod1708 from "module_1708" /* 1708 */;
import native from "native" /* 5377 */;
import timing_timing from "timing/timing" /* 5548 */;
import StreamActionCreators from "StreamActionCreators" /* 6862 */;
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators" /* 20055 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
function WatchPrompt(ownerId) {
  ownerId = ownerId.ownerId;
  _require = ownerId;
  const streamKey = ownerId.streamKey;
  const isConnecting = ownerId.isConnecting;
  const cleanUp = ownerId.cleanUp;
  const tmp = closure_10();
  const context = cleanUp.useContext(streamKey(isConnecting[8]));
  const channelId = context.channelId;
  const guildId = context.guildId;
  items = [guildId];
  let items1 = [ownerId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(c0), items1);
  let obj = require("initialize");
  const name = streamKey(isConnecting[10]).useName(guildId, channelId, stateFromStores);
  let obj2 = streamKey(isConnecting[10]);
  const analyticsLocations = streamKey(isConnecting[11])(streamKey(isConnecting[12]).STREAM_WATCH_PROMPT_PIP).analyticsLocations;
  const items2 = [ownerId, guildId, isConnecting, analyticsLocations];
  const items3 = [guildId, channelId, isConnecting, streamKey, analyticsLocations];
  const callback = cleanUp.useCallback(() => {
    if (!isConnecting) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(c0, guildId);
      if (null != streamForUser) {
        const obj2 = { forceMultiple: true, noFocus: true, analyticsLocations };
        StreamActionCreators.watchStream(streamForUser, obj2);
      }
    }
  }, items2);
  const callback1 = cleanUp.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.STREAM_WATCH_PROMPT_PIP_DISMISSED, { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations });
    let tmp3 = isConnecting;
    if (isConnecting) {
      tmp3 = null != streamKey;
    }
    if (tmp3) {
      StreamActionCreators.stopStream(streamKey, false);
    }
    const obj2 = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
    const result = VoicePanelDockActionCreators.dismissVoicePanelDockWatchPrompt();
  }, items3);
  const tmp11 = ownerId.transitionState !== require("native").TransitionStates.YEETED;
  closure_7 = tmp11;
  const tmp8 = streamKey(isConnecting[11]);
  const sharedValue = require("module_1655").useSharedValue(1);
  const items4 = [sharedValue, tmp11, cleanUp];
  const effect = cleanUp.useEffect(() => {
    if (closure_7) {
      const result = set(1);
    } else {
      const obj = timing_timing;
      items = [closure_11, _mod1708.scheduleOnRN, cleanUp];
      c0 = undefined;
      c1 = undefined;
      [tmp8, tmp9, tmp10] = items;
      class VoicePanelDockPIPWatchPromptTsx1 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp9, tmp10];
      VoicePanelDockPIPWatchPromptTsx1.__closure = items1;
      VoicePanelDockPIPWatchPromptTsx1.__workletHash = 10790735232603;
      VoicePanelDockPIPWatchPromptTsx1.__initData = tmp8;
      const result1 = set(obj.withTiming(0, closure_9, "respect-motion-settings", VoicePanelDockPIPWatchPromptTsx1));
    }
  }, items4);
  let obj3 = require("module_1655");
  const items5 = [closure_12, sharedValue];
  _require = undefined;
  [tmp14, tmp15] = items5;
  class VoicePanelDockPIPWatchPromptTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items6 = [tmp15];
  VoicePanelDockPIPWatchPromptTsx2.__closure = items6;
  VoicePanelDockPIPWatchPromptTsx2.__workletHash = 9976352241568;
  VoicePanelDockPIPWatchPromptTsx2.__initData = tmp14;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelDockPIPWatchPromptTsx2);
  const obj5 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  const items7 = [tmp.container, animatedStyle];
  obj5.style = items7;
  let str = "none";
  if (tmp11) {
    str = "auto";
  }
  obj5.pointerEvents = str;
  obj5.accessibilityElementsHidden = !tmp11;
  let str2 = "no-hide-descendants";
  if (tmp11) {
    str2 = "auto";
  }
  obj5.importantForAccessibility = str2;
  const obj6 = { type: null, variant: "critical" };
  const obj7 = { text: null };
  const intl = tmp5(tmp3[21]).intl;
  obj7.text = intl.string(require("util").t.dI3q4h);
  obj6.type = obj7;
  const items8 = [closure_7(require("Badge").Badge, obj6), , , ];
  let tmp18Result = null != stateFromStores;
  if (tmp18Result) {
    const obj8 = { variant: "body-sm/medium", color: "text-default", lineClamp: 1, style: tmp.label, children: null };
    const intl2 = tmp5(tmp3[21]).intl;
    const obj9 = { username: name };
    obj8.children = intl2.formatToPlainString(tmp2(tmp3[23])["g9x8/M"], obj9);
    tmp18Result = tmp18(tmp5(tmp3[22]).Text, obj8);
  }
  items8[1] = tmp18Result;
  const obj10 = { size: "sm", variant: "primary-overlay", text: null, onPress: null, loading: null };
  const intl3 = tmp5(tmp3[21]).intl;
  obj10.text = intl3.string(require("util").t.I6JG46);
  obj10.onPress = callback;
  obj10.loading = isConnecting;
  items8[2] = closure_7(require("components/Button/Button").Button, obj10);
  const obj11 = { style: tmp.dismissButton, children: null };
  let obj4 = require("module_1655");
  const tmp17 = sharedValue;
  const obj12 = { size: "sm", variant: "tertiary", icon: closure_7(require("XSmallIcon").XSmallIcon, { size: "sm" }), onPress: callback1, accessibilityLabel: null };
  const intl4 = tmp5(tmp3[21]).intl;
  obj12.accessibilityLabel = intl4.string(require("util").t.WAI6xu);
  obj11.children = closure_7(require("IconButton").IconButton, obj12);
  items8[3] = closure_7(streamKey(isConnecting[25]), obj11);
  obj5.children = items8;
  return tmp17(streamKey(isConnecting[17]).View, obj5);
}
function renderWatchPrompt(id, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return metroImportDefault(WatchPrompt, obj, id);
}
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let closure_9 = { duration: 200 };
const createStyles = fn(5306);
let obj = { container: null, dismissButton: null, label: null };
let obj3 = {};
let merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.padding = nativeDefault.space.PX_16;
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.container = obj3;
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj.dismissButton = rect;
obj.label = { textAlign: "center", marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "(function VoicePanelDockPIPWatchPromptTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished===true){scheduleOnRN(cleanUp);}})" };
let closure_12 = { code: "(function VoicePanelDockPIPWatchPromptTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPWatchPrompt.tsx");

export default noop.memo(function VoicePanelDockPIPWatchPrompt(arg0) {
  ({ ownerId, streamKey, isConnecting, visible } = arg0);
  let tmp2;
  if (visible) {
    const obj = { ownerId, streamKey, isConnecting };
    tmp2 = obj;
  }
  return metroImportDefault(native.TransitionItem, { item: tmp2, renderItem: renderWatchPrompt });
});