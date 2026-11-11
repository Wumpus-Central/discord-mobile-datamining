// === Module 19913: VoicePanelDockPIPWatchPrompt ===

// Module 19913 (VoicePanelDockPIPWatchPrompt)
import nativeDefault from "native" /* 575 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5314 */;
import timing_timing from "timing/timing" /* 5485 */;
import StreamActionCreators from "StreamActionCreators" /* 6799 */;
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators" /* 19912 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6757 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function WatchPrompt(ownerId) {
  ownerId = ownerId.ownerId;
  _require = ownerId;
  const streamKey = ownerId.streamKey;
  const isConnecting = ownerId.isConnecting;
  const cleanUp = ownerId.cleanUp;
  closure_5 = undefined;
  let tmp = closure_9();
  const context = cleanUp.useContext(streamKey(isConnecting[7]));
  const guildId = context.guildId;
  items = [closure_5];
  let items1 = [ownerId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(c0), items1);
  let obj = require("initialize");
  const items2 = [ownerId, guildId, isConnecting];
  const name = streamKey(isConnecting[9]).useName(guildId, context.channelId, stateFromStores);
  const items3 = [isConnecting, streamKey];
  const callback = cleanUp.useCallback(() => {
    if (!isConnecting) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(c0, guildId);
      if (null != streamForUser) {
        StreamActionCreators.watchStream(streamForUser, { forceMultiple: true, noFocus: true });
      }
    }
  }, items2);
  const callback1 = cleanUp.useCallback(() => {
    let tmp = isConnecting;
    if (isConnecting) {
      tmp = null != streamKey;
    }
    if (tmp) {
      StreamActionCreators.stopStream(streamKey, false);
    }
    const result = VoicePanelDockActionCreators.dismissVoicePanelDockWatchPrompt();
  }, items3);
  const tmp10 = ownerId.transitionState !== require("native").TransitionStates.YEETED;
  closure_5 = tmp10;
  let obj2 = streamKey(isConnecting[9]);
  const sharedValue = require("module_1652").useSharedValue(1);
  const items4 = [sharedValue, tmp10, cleanUp];
  const effect = cleanUp.useEffect(() => {
    if (closure_5) {
      const result = set(1);
    } else {
      const obj = timing_timing;
      items = [closure_10, _mod1705.scheduleOnRN, cleanUp];
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
      const result1 = set(obj.withTiming(0, closure_8, "respect-motion-settings", VoicePanelDockPIPWatchPromptTsx1));
    }
  }, items4);
  const obj3 = require("module_1652");
  const items5 = [closure_11, sharedValue];
  _require = undefined;
  [tmp13, tmp14] = items5;
  class VoicePanelDockPIPWatchPromptTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items6 = [tmp14];
  VoicePanelDockPIPWatchPromptTsx2.__closure = items6;
  VoicePanelDockPIPWatchPromptTsx2.__workletHash = 9976352241568;
  VoicePanelDockPIPWatchPromptTsx2.__initData = tmp13;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelDockPIPWatchPromptTsx2);
  const obj5 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  const items7 = [tmp.container, animatedStyle];
  obj5.style = items7;
  let str = "none";
  if (tmp10) {
    str = "auto";
  }
  obj5.pointerEvents = str;
  obj5.accessibilityElementsHidden = !tmp10;
  let str2 = "no-hide-descendants";
  if (tmp10) {
    str2 = "auto";
  }
  obj5.importantForAccessibility = str2;
  const obj6 = { type: null, variant: "critical" };
  const obj7 = { text: null };
  const intl = tmp5(tmp3[17]).intl;
  obj7.text = intl.string(require("util").t.dI3q4h);
  obj6.type = obj7;
  const items8 = [sharedValue(require("Badge").Badge, obj6), , , ];
  let tmp17Result = null != stateFromStores;
  if (tmp17Result) {
    const obj8 = { variant: "body-sm/medium", color: "text-default", lineClamp: 1, style: tmp.label, children: null };
    const intl2 = tmp5(tmp3[17]).intl;
    const obj9 = { username: name };
    obj8.children = intl2.formatToPlainString(tmp2(tmp3[19])["g9x8/M"], obj9);
    tmp17Result = tmp17(tmp5(tmp3[18]).Text, obj8);
  }
  items8[1] = tmp17Result;
  const obj10 = { style: tmp.buttonRow, children: null };
  const obj4 = require("module_1652");
  const obj11 = { size: "sm", variant: "primary-overlay", text: null, onPress: null, loading: null, grow: true };
  const intl3 = tmp5(tmp3[17]).intl;
  obj11.text = intl3.string(require("util").t.I6JG46);
  obj11.onPress = callback;
  obj11.loading = isConnecting;
  obj10.children = sharedValue(require("components/Button/Button").Button, obj11);
  items8[2] = sharedValue(streamKey(isConnecting[20]), obj10);
  const obj12 = { style: tmp.dismissButton, children: null };
  const tmp2Result = streamKey(isConnecting[20]);
  const obj13 = { size: "sm", variant: "tertiary", icon: sharedValue(require("XSmallIcon").XSmallIcon, { size: "sm" }), onPress: callback1, accessibilityLabel: null };
  const intl4 = tmp5(tmp3[17]).intl;
  obj13.accessibilityLabel = intl4.string(require("util").t.WAI6xu);
  obj12.children = sharedValue(require("IconButton").IconButton, obj13);
  items8[3] = sharedValue(streamKey(isConnecting[20]), obj12);
  obj5.children = items8;
  return closure_7(streamKey(isConnecting[13]).View, obj5);
}
function renderWatchPrompt(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return timestampProducer(WatchPrompt, obj, arg0);
}
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = { duration: 200 };
const createStyles = fn(5243);
let obj = { container: null, dismissButton: null, buttonRow: null, label: null };
let obj3 = {};
let merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.padding = nativeDefault.space.PX_16;
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.container = obj3;
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj.dismissButton = rect;
obj.buttonRow = { flexDirection: "row", alignSelf: "stretch" };
obj.label = { textAlign: "center", marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = { code: "(function VoicePanelDockPIPWatchPromptTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished===true){scheduleOnRN(cleanUp);}})" };
let closure_11 = { code: "(function VoicePanelDockPIPWatchPromptTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
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
  return timestampProducer(native.TransitionItem, { item: tmp2, renderItem: renderWatchPrompt });
});