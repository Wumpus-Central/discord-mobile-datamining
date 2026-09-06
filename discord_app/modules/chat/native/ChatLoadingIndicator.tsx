// === Module 13267: ChatLoadingIndicator ===

// Module 13267 (ChatLoadingIndicator)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import MessageStore from "MessageStore" /* 4781 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;
import AppStateStore from "AppStateStore" /* 1895 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function openLoadingIndicatorDebugBody() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    let isStaffPersonalResult;
    if (currentUser != null) {
      isStaffPersonalResult = currentUser.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  if (isStaffResult) {
    let obj = {
      importer() {
          return require("asyncRequireImpl")(paths[14], paths.paths).then((result) => {
            closure_0 = result.default;
            return (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.title = "Chat Loading indicator";
              obj.children = closure_2_13(closure_2_18, {});
              return closure_2_13(closure_0, obj);
            };
          });
        },
      isDismissable: true
    };
    actions_AlertActionCreatorsDefault.openLazy(obj);
  }
}
const View = fn(17).View;
const AppStates = fn(1074).AppStates;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(4560);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4 }, pulse: null };
let size = { height: 8, width: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.pulse = size;
let closure_16 = createStyles.createStyles(obj);
let closure_18 = noop.memo(() => {
  let obj = initialize;
  const items = [MessageStore, GatewayConnectionStore, SelectedChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    channelId = channelId.getChannelId();
    const isConnectedResult = connected.isConnected();
    if (null == channelId) {
      let obj = { messagesCached: false, messagesReady: false, connected: isConnectedResult };
      return obj;
    } else {
      messages = messages.getMessages(channelId);
      obj = { messagesCached: null, messagesReady: null, connected: null };
      ({ cached: obj.messagesCached, ready: obj.messagesReady } = messages);
      obj.connected = isConnectedResult;
      return obj;
    }
  });
  ({ messagesCached, messagesReady, connected } = stateFromStoresObject);
  const items1 = ["messages.cached", ":", " ", , ];
  let str = "text-feedback-critical";
  let str2 = "text-feedback-critical";
  if (messagesCached) {
    str2 = "text-feedback-positive";
  }
  obj = { variant: "text-md/normal", color: str2, children: null };
  let str3 = "false";
  let str4 = "false";
  if (messagesCached) {
    str4 = "true";
  }
  obj.children = str4;
  items1[3] = map1(Text_Text.Text, obj);
  let tmp4Result = null;
  if (messagesCached !== false) {
    obj = { variant: "text-md/normal", color: "text-muted", children: null };
    const items2 = [" ", "(should be ", str3, " to hide loading indicator)"];
    obj.children = items2;
    tmp4Result = closure_1_14(Text_Text.Text, obj);
  }
  items1[4] = tmp4Result;
  const items3 = [closure_1_14(__initData, { children: items1 }), "\n", , , , , ];
  const items4 = ["messages.ready", ":", " ", , ];
  let str6 = str;
  if (messagesReady) {
    str6 = "text-feedback-positive";
  }
  const obj1 = { variant: "text-md/normal", color: str6, children: null };
  let str7 = str3;
  if (messagesReady) {
    str7 = "true";
  }
  obj1.children = str7;
  items4[3] = map1(Text_Text.Text, obj1);
  tmp4Result = null;
  if (messagesReady !== true) {
    const obj2 = { variant: "text-md/normal", color: "text-muted", children: null };
    const items5 = [" ", "(should be ", "true", " to hide loading indicator)"];
    obj2.children = items5;
    tmp4Result = closure_1_14(Text_Text.Text, obj2);
  }
  items4[4] = tmp4Result;
  items3[2] = closure_1_14(__initData, { children: items4 });
  items3[3] = "\n";
  const items6 = ["connected", ":", " ", , ];
  let str10 = str;
  if (connected) {
    str10 = "text-feedback-positive";
  }
  const obj3 = { variant: "text-md/normal", color: str10, children: null };
  let str11 = str3;
  if (connected) {
    str11 = "true";
  }
  obj3.children = str11;
  items6[3] = map1(Text_Text.Text, obj3);
  let tmp4Result1 = null;
  if (connected !== true) {
    const obj4 = { variant: "text-md/normal", color: "text-muted", children: null };
    const items7 = [" ", "(should be ", "true", " to hide loading indicator)"];
    obj4.children = items7;
    tmp4Result1 = closure_1_14(Text_Text.Text, obj4);
  }
  items6[4] = tmp4Result1;
  items3[4] = closure_1_14(__initData, { children: items6 });
  items3[5] = "\n";
  if (!messagesCached) {
    messagesCached = !messagesReady;
  }
  if (!messagesCached) {
    messagesCached = !connected;
  }
  const items8 = ["should show chat indicator", ":", " ", , ];
  if (messagesCached) {
    str = "text-feedback-positive";
  }
  const obj5 = { variant: "text-md/normal", color: str, children: null };
  if (messagesCached) {
    str3 = "true";
  }
  obj5.children = str3;
  items8[3] = map1(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", children: null };
  items8[4] = null;
  items3[6] = closure_1_14(__initData, { children: items8 });
  obj6.children = items3;
  return closure_1_14(Text_Text.Text, obj6);
});
const __initData = { code: "function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatLoadingIndicator.tsx");

export const useShouldChannelShowLoadingIndicator = function useShouldChannelShowLoadingIndicator(channelId) {
  _require = channelId;
  const ChatLoadingIndicatorExperiment = require("ChatLoadingIndicatorExperiment").ChatLoadingIndicatorExperiment;
  const enabled = ChatLoadingIndicatorExperiment.useConfig({ location: "ChatLoadingIndicatorGuard" }).enabled;
  const items = [MessageStore, GatewayConnectionStore, AppStateStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (enabled) {
      if (null == closure_0) {
        return false;
      } else if (AppStateStore.getState() !== AppStates.ACTIVE) {
        return false;
      } else {
        const messages = MessageStore.getMessages(tmp);
        let cached = messages.cached;
        if (!cached) {
          cached = !messages.ready;
        }
        if (!cached) {
          cached = !isConnectedResult;
        }
        return cached;
      }
    } else {
      return false;
    }
  });
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp2[1];
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_3(true);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      closure_3(false);
    }
  }, items1);
  return tmp2[0];
};
export const ChannelHeaderLoadingIndicator = function ChannelHeaderLoadingIndicator() {
  const tmp = closure_16();
  let obj = stateFromStores(504);
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = stateFromStores(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      let isStaffPersonalResult;
      if (currentUser != null) {
        isStaffPersonalResult = currentUser.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    return isStaffResult;
  });
  let obj2 = stateFromStores(4296);
  const fn = function t() {
    let obj = { transform: null };
    if (stateFromStores) {
      obj.transform = [];
      let tmp7 = obj;
    } else {
      obj = { scale: null };
      const obj3 = ReanimatedRexport;
      const obj4 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(1, { duration: 0 });
      obj = { duration: 1500, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj.easing = Easing.bezier(0.4, 0, 0.2, 1);
      const withTimingResult1 = timing.withTiming(0.5, obj);
      const obj1 = { duration: 1500, easing: null };
      const Easing2 = ReanimatedRexport.Easing;
      obj1.easing = Easing2.bezier(0.4, 0, 0.2, 1);
      obj.scale = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, timing.withTiming(1, obj1)), -1);
      const items = [obj];
      obj.transform = items;
      tmp7 = obj;
    }
    return tmp7;
  };
  obj = { useReducedMotion: stateFromStores, withRepeat: stateFromStores(4296).withRepeat, withSequence: stateFromStores(4296).withSequence, withTiming: stateFromStores(4561).withTiming, Easing: stateFromStores(4296).Easing };
  fn.__closure = obj;
  fn.__workletHash = 17454673879926;
  fn.__initData = __initData;
  obj = { style: tmp.container, children: null };
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj1 = { style: null };
  const items2 = [tmp.pulse, animatedStyle];
  obj1.style = items2;
  const items3 = [closure_13(ReanimatedRexportDefault.View, obj1), ];
  obj2 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = stateFromStores(1114).intl;
  obj2.children = intl.string(stateFromStores(1114).t.JwIJMV);
  items3[1] = closure_13(stateFromStores(4556).Text, obj2);
  obj.children = items3;
  const tmp8 = closure_14(View, obj);
  let tmp7Result = tmp8;
  if (stateFromStores1) {
    let obj3 = { onPress: openLoadingIndicatorDebugBody, children: tmp8 };
    tmp7Result = closure_13(stateFromStores(5123).PressableOpacity, obj3);
  }
  return tmp7Result;
};