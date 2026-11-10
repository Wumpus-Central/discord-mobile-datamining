// === Module 14839: ChatLoadingIndicator ===

// Module 14839 (ChatLoadingIndicator)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5372 */;
import Text_Text from "Text/Text" /* 5753 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6093 */;
import Pressables from "Pressables" /* 7046 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6625 */;
import MessageStore from "MessageStore" /* 6196 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import UserStore from "UserStore" /* 1385 */;
import AppStateStore from "AppStateStore" /* 2117 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

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
const AppStates = fn(1072).AppStates;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5142);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4 }, pulse: null };
let size = { height: 8, width: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.pulse = size;
let closure_16 = createStyles.createStyles(obj);
let closure_18 = noop.memo(function LoadingIndicatorDebugBody() {
  items = [MessageStore, GatewayConnectionStore, SelectedChannelStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    channelId = channelId.getChannelId();
    const isConnectedResult = connected.isConnected();
    if (null == channelId) {
      const obj2 = { messagesCached: false, messagesReady: false, connected: isConnectedResult };
      return obj2;
    } else {
      messages = messages.getMessages(channelId);
      const obj = { messagesCached: null, messagesReady: null, connected: null };
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
  let obj2 = { variant: "body-md/normal", color: str2, children: null };
  let str3 = "false";
  let str4 = "false";
  if (messagesCached) {
    str4 = "true";
  }
  obj2.children = str4;
  items1[3] = state(Text_Text.Text, obj2);
  let tmp4Result = null;
  if (messagesCached !== false) {
    const obj3 = { variant: "body-md/normal", color: "text-muted", children: null };
    const items2 = [" ", "(should be ", str3, " to hide loading indicator)"];
    obj3.children = items2;
    tmp4Result = gesture(Text_Text.Text, obj3);
  }
  items1[4] = tmp4Result;
  const items3 = [gesture(closure_1_15, { children: items1 }), "\n", , , , , ];
  const items4 = ["messages.ready", ":", " ", , ];
  let str6 = str;
  if (messagesReady) {
    str6 = "text-feedback-positive";
  }
  const obj4 = { variant: "body-md/normal", color: str6, children: null };
  let str7 = str3;
  if (messagesReady) {
    str7 = "true";
  }
  obj4.children = str7;
  items4[3] = state(Text_Text.Text, obj4);
  let tmp4Result3 = null;
  if (messagesReady !== true) {
    const obj5 = { variant: "body-md/normal", color: "text-muted", children: null };
    const items5 = [" ", "(should be ", "true", " to hide loading indicator)"];
    obj5.children = items5;
    tmp4Result3 = gesture(Text_Text.Text, obj5);
  }
  items4[4] = tmp4Result3;
  items3[2] = gesture(closure_1_15, { children: items4 });
  items3[3] = "\n";
  const items6 = ["connected", ":", " ", , ];
  let str10 = str;
  if (connected) {
    str10 = "text-feedback-positive";
  }
  const obj6 = { variant: "body-md/normal", color: str10, children: null };
  let str11 = str3;
  if (connected) {
    str11 = "true";
  }
  obj6.children = str11;
  items6[3] = state(Text_Text.Text, obj6);
  let tmp4Result4 = null;
  if (connected !== true) {
    const obj7 = { variant: "body-md/normal", color: "text-muted", children: null };
    const items7 = [" ", "(should be ", "true", " to hide loading indicator)"];
    obj7.children = items7;
    tmp4Result4 = gesture(Text_Text.Text, obj7);
  }
  items6[4] = tmp4Result4;
  items3[4] = gesture(closure_1_15, { children: items6 });
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
  const obj8 = { variant: "body-md/normal", color: str, children: null };
  if (messagesCached) {
    str3 = "true";
  }
  obj8.children = str3;
  items8[3] = state(Text_Text.Text, obj8);
  const obj9 = { variant: "body-md/normal", color: "text-default", children: null };
  items8[4] = null;
  items3[6] = gesture(closure_1_15, { children: items8 });
  obj9.children = items3;
  return gesture(Text_Text.Text, obj9);
});
let closure_19 = { code: "(function ChatLoadingIndicatorTsx1(){let[useReducedMotion,withRepeat,withSequence,withTiming,Easing]=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};})" };
size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatLoadingIndicator.tsx");

export function useShouldChannelShowLoadingIndicator(channelId) {
  _require = channelId;
  const ChatLoadingIndicatorExperiment = require("ChatLoadingIndicatorExperiment").ChatLoadingIndicatorExperiment;
  const enabled = ChatLoadingIndicatorExperiment.useConfig({ location: "ChatLoadingIndicatorGuard" }).enabled;
  items = [MessageStore, GatewayConnectionStore, AppStateStore];
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
}
export function ChannelHeaderLoadingIndicator() {
  const tmp = closure_16();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [UserStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
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
  const items2 = [closure_19, stateFromStores, _mod1652.withRepeat, _mod1652.withSequence, timing_timing.withTiming, _mod1652.Easing];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items2;
  class ChatLoadingIndicatorTsx1 {
    constructor() {
      obj = { transform: null };
      if (closure_0) {
        obj.transform = [];
        tmp9 = obj;
      } else {
        obj1 = { scale: null };
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_3;
        num = 1;
        obj5 = { duration: 1500, easing: null };
        tmp5 = closure_4;
        num2 = 0.2;
        num3 = 0.4;
        tmp6 = closure_4;
        num4 = 0.4;
        num5 = 0;
        num6 = 0.2;
        num7 = 1;
        tmp4 = closure_3(1, { duration: 0 });
        obj5.easing = closure_4.bezier(0.4, 0, 0.2, 1);
        num8 = 0.5;
        obj6 = { duration: 1500, easing: null };
        tmp8 = closure_4;
        num9 = 0.4;
        num10 = 0;
        tmp7 = closure_3(0.5, obj5);
        obj6.easing = closure_4.bezier(0.4, 0, 0.2, 1);
        num11 = -1;
        obj1.scale = closure_1(closure_2(tmp4, tmp7, closure_3(1, obj6)), -1);
        items = [];
        items[0] = obj1;
        obj.transform = items;
        tmp9 = obj;
      }
      return tmp9;
    }
  }
  const items3 = [tmp7, tmp8, tmp9, tmp10, tmp11];
  ChatLoadingIndicatorTsx1.__closure = items3;
  ChatLoadingIndicatorTsx1.__workletHash = 6182376502575;
  ChatLoadingIndicatorTsx1.__initData = tmp6;
  let obj4 = { style: tmp.container, children: null };
  const animatedStyle = _mod1652.useAnimatedStyle(ChatLoadingIndicatorTsx1);
  const obj5 = { style: null };
  const items4 = [tmp.pulse, animatedStyle];
  obj5.style = items4;
  const items5 = [state(_modDef1652.View, obj5), ];
  const obj6 = { variant: "body-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.JwIJMV);
  items5[1] = state(Text_Text.Text, obj6);
  obj4.children = items5;
  const tmp14 = gesture(View, obj4);
  let tmp13Result = tmp14;
  if (stateFromStores1) {
    const obj7 = { onPress: openLoadingIndicatorDebugBody, children: tmp14 };
    tmp13Result = state(Pressables.PressableOpacity, obj7);
  }
  return tmp13Result;
}