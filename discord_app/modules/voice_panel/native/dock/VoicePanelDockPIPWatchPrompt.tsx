// === Module 19359: VoicePanelDockPIPWatchPrompt ===

// Module 19359 (VoicePanelDockPIPWatchPrompt)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import _mod1706 from "module_1706" /* 1706 */;
import native from "native" /* 4978 */;
import timing_timing from "timing/timing" /* 5127 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6254 */;
import StreamActionCreators from "StreamActionCreators" /* 8278 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11634 */;
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators" /* 19360 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6687 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
function WatchPrompt(ownerId) {
  ownerId = ownerId.ownerId;
  _require = ownerId;
  ({ streamKey, isConnecting, cleanUp } = ownerId);
  let sharedValue;
  ({ hideContent, transitionState } = ownerId);
  const tmp = closure_10();
  const context = sharedValue.useContext(cleanUp(11634));
  ({ channelId, guildId } = context);
  items = [UserStore];
  let items1 = [ownerId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(c0), items1);
  let obj = require("initialize");
  closure_129_0 = ownerId;
  closure_129_1 = streamKey;
  closure_129_2 = isConnecting;
  const name = cleanUp(6681).useName(guildId, channelId, stateFromStores);
  const context1 = sharedValue.useContext(cleanUp(11634));
  const channelId2 = context1.channelId;
  closure_129_3 = channelId2;
  const guildId2 = context1.guildId;
  closure_129_4 = guildId2;
  let obj2 = cleanUp(6681);
  const analyticsLocations = cleanUp(6253)(cleanUp(6254).STREAM_WATCH_PROMPT_PIP).analyticsLocations;
  closure_129_5 = analyticsLocations;
  const items2 = [ownerId, guildId2, isConnecting, analyticsLocations];
  const items3 = [guildId2, channelId2, isConnecting, streamKey, analyticsLocations];
  const callback = sharedValue.useCallback(() => {
    if (!closure_2) {
      if (null != c0) {
        const streamForUser = ApplicationStreamingStore.getStreamForUser(tmp, guild_id);
        if (null != streamForUser) {
          const obj2 = { forceMultiple: true, noFocus: true, analyticsLocations };
          StreamActionCreators.watchStream(streamForUser, obj2);
        }
      }
    }
  }, items2);
  const callback1 = sharedValue.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.STREAM_WATCH_PROMPT_PIP_DISMISSED, { guild_id, channel_id: sharedValue, location_stack });
    let tmp3 = closure_2;
    if (closure_2) {
      tmp3 = null != cleanUp;
    }
    if (tmp3) {
      StreamActionCreators.stopStream(cleanUp, false);
    }
    const obj2 = { guild_id, channel_id: sharedValue, location_stack };
    const result = VoicePanelDockActionCreators.dismissVoicePanelDockWatchPrompt();
  }, items3);
  const tmp12 = transitionState !== require("native").TransitionStates.YEETED;
  dependencyMap = tmp12;
  const tmp9 = cleanUp(6253);
  sharedValue = require("module_1653").useSharedValue(1);
  const items4 = [sharedValue, tmp12, cleanUp];
  const effect = sharedValue.useEffect(() => {
    if (closure_2) {
      const result = set(1);
    } else {
      const obj = timing_timing;
      items = [closure_11, _mod1706.scheduleOnRN, cleanUp];
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
  let obj3 = require("module_1653");
  const items5 = [closure_12, sharedValue];
  _require = undefined;
  [tmp15, tmp16] = items5;
  class VoicePanelDockPIPWatchPromptTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items6 = [tmp16];
  VoicePanelDockPIPWatchPromptTsx2.__closure = items6;
  VoicePanelDockPIPWatchPromptTsx2.__workletHash = 9976352241568;
  VoicePanelDockPIPWatchPromptTsx2.__initData = tmp15;
  let tmp18 = !tmp12;
  const animatedStyle = require("module_1653").useAnimatedStyle(VoicePanelDockPIPWatchPromptTsx2);
  if (tmp12) {
    tmp18 = hideContent;
  }
  const obj5 = { style: null, pointerEvents: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items7 = [tmp.container, animatedStyle];
  obj5.style = items7;
  let str = "auto";
  if (tmp18) {
    str = "none";
  }
  obj5.pointerEvents = str;
  const items8 = [closure_7(cleanUp(6929), { style: tmp.border, pointerEvents: "none" }), , ];
  const items9 = [tmp.content, ];
  let hidden = null;
  let obj4 = require("module_1653");
  const obj6 = { style: tmp.border, pointerEvents: "none" };
  if (tmp18) {
    hidden = tmp.hidden;
  }
  const obj7 = { style: items9, children: null };
  items9[1] = hidden;
  const obj8 = { type: null, variant: "critical" };
  const obj9 = { text: null };
  const intl = tmp5(1112).intl;
  obj9.text = intl.string(require("util").t.dI3q4h);
  obj8.type = obj9;
  const items10 = [closure_7(require("Badge").Badge, obj8), , ];
  let tmp20Result = null != stateFromStores;
  if (tmp20Result) {
    const obj10 = { variant: "body-sm/medium", color: "text-default", lineClamp: 1, style: tmp.label, children: null };
    const intl2 = tmp5(1112).intl;
    const obj11 = { username: name };
    obj10.children = intl2.formatToPlainString(cleanUp(3378)["g9x8/M"], obj11);
    tmp20Result = closure_7(tmp5(5508).Text, obj10);
  }
  items10[1] = tmp20Result;
  const obj12 = { size: "sm", variant: "primary-overlay", text: null, onPress: null, loading: null };
  const intl3 = tmp5(1112).intl;
  obj12.text = intl3.string(require("util").t.I6JG46);
  obj12.onPress = callback;
  obj12.loading = isConnecting;
  items10[2] = closure_7(require("components/Button/Button").Button, obj12);
  obj7.children = items10;
  items8[1] = closure_8(cleanUp(6929), obj7);
  const items11 = [tmp.dismissButton, ];
  let hidden1 = null;
  const tmp2Result = cleanUp(6929);
  if (tmp18) {
    hidden1 = tmp.hidden;
  }
  const obj13 = { style: items11, children: null };
  items11[1] = hidden1;
  const obj14 = { size: "sm", variant: "tertiary", icon: closure_7(require("XSmallIcon").XSmallIcon, { size: "sm" }), onPress: callback1, accessibilityLabel: null };
  const intl4 = tmp5(1112).intl;
  obj14.accessibilityLabel = intl4.string(require("util").t.WAI6xu);
  obj13.children = closure_7(require("IconButton").IconButton, obj14);
  items8[2] = closure_7(cleanUp(6929), obj13);
  obj5.children = items8;
  return closure_8(cleanUp(1653).View, obj5);
}
function renderWatchPrompt(id, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return metroImportDefault(WatchPrompt, obj, id);
}
const StyleSheet = fn(17).StyleSheet;
const AnalyticEvents = fn(1071).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let closure_9 = { duration: 200 };
const createStyles = fn(4917);
let obj = { container: null, border: null, content: null, hidden: null, dismissButton: null, label: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.padding = nativeDefault.space.PX_16;
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.container = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderWidth = 1;
obj4.borderColor = nativeDefault.colors.BORDER_SUBTLE;
obj4.borderRadius = nativeDefault.radii.lg;
obj.border = obj4;
obj.content = { alignSelf: "stretch", alignItems: "center" };
obj.hidden = { opacity: 0 };
const rect = { position: "absolute", top: nativeDefault.space.PX_4, right: nativeDefault.space.PX_4 };
obj.dismissButton = rect;
obj.label = { textAlign: "center", marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "(function VoicePanelDockPIPWatchPromptTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished===true){scheduleOnRN(cleanUp);}})" };
let closure_12 = { code: "(function VoicePanelDockPIPWatchPromptTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let obj5 = { textAlign: "center", marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPWatchPrompt.tsx");

export default noop.memo(function VoicePanelDockPIPWatchPrompt(arg0) {
  ({ ownerId, streamKey, isConnecting, hideContent, visible } = arg0);
  let tmp2;
  if (visible) {
    const obj = { ownerId, streamKey, isConnecting, hideContent };
    tmp2 = obj;
  }
  return metroImportDefault(native.TransitionItem, { item: tmp2, renderItem: renderWatchPrompt });
});
export function useVoicePanelDockWatchPromptActions(ownerId, streamKey, isWatching) {
  closure_0 = ownerId;
  importDefault = streamKey;
  dependencyMap = isWatching;
  const context = channelId.useContext(VoicePanelStateContextDefault);
  channelId = context.channelId;
  const guildId = context.guildId;
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.STREAM_WATCH_PROMPT_PIP).analyticsLocations;
  const obj = { handleWatch: null, handleDismiss: null };
  items = [ownerId, guildId, isWatching, analyticsLocations];
  obj.handleWatch = channelId.useCallback(() => {
    if (!closure_2) {
      if (null != c0) {
        const streamForUser = ApplicationStreamingStore.getStreamForUser(tmp, guild_id);
        if (null != streamForUser) {
          const obj2 = { forceMultiple: true, noFocus: true, analyticsLocations };
          StreamActionCreators.watchStream(streamForUser, obj2);
        }
      }
    }
  }, items);
  const items1 = [guildId, channelId, isWatching, streamKey, analyticsLocations];
  obj.handleDismiss = channelId.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.STREAM_WATCH_PROMPT_PIP_DISMISSED, { guild_id, channel_id: sharedValue, location_stack });
    let tmp3 = closure_2;
    if (closure_2) {
      tmp3 = null != cleanUp;
    }
    if (tmp3) {
      StreamActionCreators.stopStream(cleanUp, false);
    }
    const obj2 = { guild_id, channel_id: sharedValue, location_stack };
    const result = VoicePanelDockActionCreators.dismissVoicePanelDockWatchPrompt();
  }, items1);
  return obj;
}