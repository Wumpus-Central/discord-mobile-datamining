// === Module 13109: ChatLoadingIndicator ===

// Module 13109 (ChatLoadingIndicator)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import MessageStore from "MessageStore" /* 5110 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let _require, channelId;

let closure_14;
let closure_15;
let map1;
let size;
function openLoadingIndicatorDebugBody() {
  let paths;
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
          const promise = require("asyncRequire")(paths[14], paths.paths);
          return promise.then((result) => {
            let closure_0 = result.default;
            return (arg0) => {
              const obj = { title: "Chat Loading indicator", children: closure_2_13(closure_2_18, {}) };
              const merged = Object.assign(arg0);
              return closure_2_13(closure_0, obj);
            };
          });
        },
      isDismissable: true
    };
    const obj2 = actions_AlertActionCreatorsDefault;
    obj2.openLazy(obj);
  }
}
const View = react_native.View;
const AppStates = Constants.AppStates;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4 }, pulse: size };
size = { height: 8, width: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_16 = createStyles.createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let connected;
  let items1;
  let messagesCached;
  let messagesReady;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore, GatewayConnectionStore, SelectedChannelStore];
    const fn = function n() {
      channelId = channelId.getChannelId();
      const isConnectedResult = connected.isConnected();
      if (null == channelId) {
        return { messagesCached: false, messagesReady: false, connected: isConnectedResult };
      } else {
        messages = messages.getMessages(channelId);
        const obj = { messagesCached: null, messagesReady: null, connected: isConnectedResult };
        ({ cached: obj.messagesCached, ready: obj.messagesReady } = messages);
        return obj;
      }
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  ({ messagesCached, messagesReady, connected } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s(arg0, arg1, arg2) {
      let items1;
      let str3;
      const children = [arg0, ":", " ", , ];
      let str = "text-feedback-critical";
      const Text = require("Text/Text").Text;
      if (arg1) {
        str = "text-feedback-positive";
      }
      let str2 = "false";
      const obj = { variant: "text-md/normal", color: str, children: str3 };
      str3 = "false";
      if (arg1) {
        str3 = "true";
      }
      children[3] = closure_1_13(Text, obj);
      let tmpResult = null;
      if (null != arg2) {
        tmpResult = null;
        if (arg1 !== arg2) {
          const Text2 = require("Text/Text").Text;
          if (arg2) {
            str2 = "true";
          }
          const obj2 = { variant: "text-md/normal", color: "text-muted", children: items1 };
          items1 = [" ", "(should be ", str2, " to hide loading indicator)"];
          tmpResult = closure_1_14(Text2, obj2);
        }
      }
      children[4] = tmpResult;
      return closure_1_14(closure_1_15, { children });
    };
    cResult[2] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== messagesCached) {
    let str = "messages.cached";
    const tmp11Result = tmp11("messages.cached", messagesCached, false);
    cResult[3] = messagesCached;
    cResult[4] = tmp11Result;
    tmp12 = tmp11Result;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== messagesReady) {
    let str2 = "messages.ready";
    const tmp11Result4 = tmp11("messages.ready", messagesReady, true);
    cResult[5] = messagesReady;
    cResult[6] = tmp11Result4;
    tmp14 = tmp11Result4;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== connected) {
    let str3 = "connected";
    const tmp11Result5 = tmp11("connected", connected, true);
    cResult[7] = connected;
    cResult[8] = tmp11Result5;
    tmp16 = tmp11Result5;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== (messagesCached || !messagesReady || !connected)) {
    const tmp11Result6 = tmp11("should show chat indicator", messagesCached || !messagesReady || !connected);
    cResult[9] = messagesCached || !messagesReady || !connected;
    cResult[10] = tmp11Result6;
    tmp18 = tmp11Result6;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === tmp12) {
    if (cResult[12] === tmp14) {
      if (cResult[13] === tmp16) {
        let tmp20;
        if (cResult[14] === tmp18) {
          tmp20 = cResult[15];
        }
        return tmp20;
      }
    }
  }
  let obj2 = { variant: "text-md/normal", color: "text-default", children: items1 };
  items1 = [tmp12, "\n", tmp14, "\n", tmp16, "\n", tmp18];
  const tmp21 = authStore2(Text_Text.Text, obj2);
  cResult[11] = tmp12;
  cResult[12] = tmp14;
  cResult[13] = tmp16;
  cResult[14] = tmp18;
  cResult[15] = tmp21;
  tmp20 = tmp21;
}) : (() => {
  let connected;
  let items2;
  let items5;
  let items7;
  let messagesCached;
  let messagesReady;
  let str11;
  let str4;
  let str7;
  let obj = get_initialized;
  const items = [MessageStore, GatewayConnectionStore, SelectedChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    channelId = channelId.getChannelId();
    const isConnectedResult = connected.isConnected();
    if (null == channelId) {
      return { messagesCached: false, messagesReady: false, connected: isConnectedResult };
    } else {
      messages = messages.getMessages(channelId);
      const obj = { messagesCached: null, messagesReady: null, connected: isConnectedResult };
      ({ cached: obj.messagesCached, ready: obj.messagesReady } = messages);
      return obj;
    }
  });
  ({ messagesCached, messagesReady, connected } = stateFromStoresObject);
  const items1 = ["messages.cached", ":", " ", , ];
  const Text = Text_Text.Text;
  let str = "text-feedback-critical";
  let str2 = "text-feedback-critical";
  const Text2 = Text_Text.Text;
  if (messagesCached) {
    str2 = "text-feedback-positive";
  }
  const obj2 = { variant: "text-md/normal", color: str2, children: str4 };
  let str3 = "false";
  str4 = "false";
  if (messagesCached) {
    str4 = "true";
  }
  items1[3] = map1(Text2, obj2);
  let tmp4Result = null;
  if (messagesCached !== false) {
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: items2 };
    items2 = [" ", "(should be ", str3, " to hide loading indicator)"];
    tmp4Result = authStore2(Text_Text.Text, obj3);
  }
  items1[4] = tmp4Result;
  const items3 = [authStore2(closure_15, { children: items1 }), "\n", , , , , ];
  const items4 = ["messages.ready", ":", " ", , ];
  let str6 = str;
  const Text3 = Text_Text.Text;
  if (messagesReady) {
    str6 = "text-feedback-positive";
  }
  const obj4 = { variant: "text-md/normal", color: str6, children: str7 };
  str7 = str3;
  if (messagesReady) {
    str7 = "true";
  }
  items4[3] = map1(Text3, obj4);
  let tmp4Result3 = null;
  if (messagesReady !== true) {
    const obj5 = { variant: "text-md/normal", color: "text-muted", children: items5 };
    items5 = [" ", "(should be ", "true", " to hide loading indicator)"];
    tmp4Result3 = authStore2(Text_Text.Text, obj5);
  }
  items4[4] = tmp4Result3;
  items3[2] = authStore2(closure_15, { children: items4 });
  items3[3] = "\n";
  const items6 = ["connected", ":", " ", , ];
  let str10 = str;
  const Text4 = Text_Text.Text;
  if (connected) {
    str10 = "text-feedback-positive";
  }
  const obj6 = { variant: "text-md/normal", color: str10, children: str11 };
  str11 = str3;
  if (connected) {
    str11 = "true";
  }
  items6[3] = map1(Text4, obj6);
  let tmp4Result4 = null;
  if (connected !== true) {
    const obj7 = { variant: "text-md/normal", color: "text-muted", children: items7 };
    items7 = [" ", "(should be ", "true", " to hide loading indicator)"];
    tmp4Result4 = authStore2(Text_Text.Text, obj7);
  }
  items6[4] = tmp4Result4;
  items3[4] = authStore2(closure_15, { children: items6 });
  items3[5] = "\n";
  if (!messagesCached) {
    messagesCached = !messagesReady;
  }
  if (!messagesCached) {
    messagesCached = !connected;
  }
  const items8 = ["should show chat indicator", ":", " ", , ];
  const Text5 = Text_Text.Text;
  if (messagesCached) {
    str = "text-feedback-positive";
  }
  const obj8 = { variant: "text-md/normal", color: str, children: str3 };
  if (messagesCached) {
    str3 = "true";
  }
  items8[3] = map1(Text5, obj8);
  const obj9 = { variant: "text-md/normal", color: "text-default", children: items3 };
  items8[4] = null;
  items3[6] = authStore2(closure_15, { children: items8 });
  return authStore2(Text, obj9);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}" };
const __initData2 = { code: "function ChatLoadingIndicatorTsx2(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let stateFromStores;
  let tmp13;
  let tmp5;
  _require = arg0;
  const tmp2 = stateFromStores;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "ChatLoadingIndicatorGuard" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const ChatLoadingIndicatorExperiment = tmp(tmp2[20]).ChatLoadingIndicatorExperiment;
  const enabled = ChatLoadingIndicatorExperiment.useConfig(first).enabled;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore, GatewayConnectionStore, AppStateStore];
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === arg0) {
    let tmp9;
    let tmp15;
    let tmp14;
    if (cResult[3] === enabled) {
      tmp9 = cResult[4];
    }
    const tmpResult = require("get initialized");
    stateFromStores = tmpResult.useStateFromStores(tmp5, tmp9);
    const tmp12 = _slicedToArray(react.useState(false), 2);
    [tmp13, _slicedToArray] = tmp12;
    if (cResult[5] !== stateFromStores) {
      const fn = function v() {
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
      };
      const items1 = [stateFromStores];
      cResult[5] = stateFromStores;
      cResult[6] = fn;
      cResult[7] = items1;
      tmp15 = items1;
      tmp14 = fn;
    } else {
      tmp14 = cResult[6];
      tmp15 = cResult[7];
    }
    const effect = react.useEffect(tmp14, tmp15);
    return tmp13;
  }
  class S {
    constructor() {
      if (enabled) {
        if (null == closure_0) {
          return false;
        } else if (AppStateStore.getState() !== AppStates.ACTIVE) {
          return false;
        } else {
          const messages = MessageStore.getMessages(tmp2);
          let cached = messages.cached;
          const isConnectedResult = GatewayConnectionStore.isConnected();
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
    }
  }
  cResult[2] = arg0;
  cResult[3] = enabled;
  cResult[4] = S;
  tmp9 = S;
}) : ((arg0) => {
  let closure_0;
  let closure_3;
  let first;
  let stateFromStores;
  _require = arg0;
  const ChatLoadingIndicatorExperiment = require("ChatLoadingIndicatorExperiment").ChatLoadingIndicatorExperiment;
  const enabled = ChatLoadingIndicatorExperiment.useConfig({ location: "ChatLoadingIndicatorGuard" }).enabled;
  const items = [MessageStore, GatewayConnectionStore, AppStateStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    if (enabled) {
      if (null == closure_0) {
        return false;
      } else if (AppStateStore.getState() !== AppStates.ACTIVE) {
        return false;
      } else {
        const messages = MessageStore.getMessages(tmp2);
        let cached = messages.cached;
        const isConnectedResult = GatewayConnectionStore.isConnected();
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
  [first, _slicedToArray] = react.useState(false);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
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
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let items2;
  let items3;
  let stateFromStores;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  let useReducedMotion;
  let obj = stateFromStores(576);
  const cResult = obj.c(13);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function n() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = fn;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function f() {
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
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = stateFromStores(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  const tmpResult4 = stateFromStores(4612);
  class S {
    constructor() {
      let Easing;
      let Easing2;
      let obj5;
      let tmp11;
      let withRepeat;
      let withSequence;
      let withTiming2;
      let withTimingResult;
      let withTimingResult1;
      const obj = { transform: null };
      if (stateFromStores) {
        obj.transform = [];
        tmp11 = obj;
      } else {
        const obj2 = { scale: withRepeat(withSequence(withTimingResult, withTimingResult1, withTiming2(1, obj5)), -1) };
        withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const obj3 = timing;
        withTimingResult = obj3.withTiming(1, { duration: 0 });
        const obj4 = { duration: 1500, easing: Easing.bezier(0.4, 0, 0.2, 1) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        withTimingResult1 = withTiming(0.5, obj4);
        obj5 = { duration: 1500, easing: Easing2.bezier(0.4, 0, 0.2, 1) };
        withTiming2 = timing.withTiming;
        timing;
        Easing2 = ReanimatedRexport.Easing;
        const items = [obj2];
        obj.transform = items;
        tmp11 = obj;
      }
      return tmp11;
    }
  }
  let obj2 = { useReducedMotion: stateFromStores, withRepeat: tmp(4612).withRepeat, withSequence: tmp(4612).withSequence, withTiming: tmp(4891).withTiming, Easing: tmp(4612).Easing };
  S.__closure = obj2;
  S.__workletHash = 17454673879926;
  S.__initData = __initData;
  const animatedStyle = tmpResult4.useAnimatedStyle(S);
  if (cResult[4] === animatedStyle) {
    let tmp14;
    let tmp16;
    if (cResult[5] === tmp4.pulse) {
      tmp14 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let obj3 = { variant: "text-xs/medium", color: "text-muted", children: intl.string(stateFromStores(1126).t.JwIJMV) };
      const Text = tmp(4886).Text;
      intl = tmp(1126).intl;
      const tmp18 = closure_13(Text, obj3);
      cResult[7] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] === tmp4.container) {
      let tmp19;
      if (cResult[9] === tmp14) {
        tmp19 = cResult[10];
      }
      let tmp23 = tmp19;
      if (stateFromStores1) {
        let tmp24;
        if (cResult[11] !== tmp19) {
          let obj4 = { onPress: openLoadingIndicatorDebugBody, children: tmp19 };
          const tmp27 = closure_13(stateFromStores(5909).PressableOpacity, obj4);
          cResult[11] = tmp19;
          cResult[12] = tmp27;
          tmp24 = tmp27;
        } else {
          tmp24 = cResult[12];
        }
        tmp23 = tmp24;
      }
      return tmp23;
    }
    let obj5 = { style: tmp4.container, children: items2 };
    items2 = [tmp14, tmp16];
    const tmp22 = closure_14(View, obj5);
    cResult[8] = tmp4.container;
    cResult[9] = tmp14;
    cResult[10] = tmp22;
    tmp19 = tmp22;
  }
  const obj6 = { style: items3 };
  items3 = [tmp4.pulse, animatedStyle];
  const tmp15 = closure_13(ReanimatedRexportDefault.View, obj6);
  cResult[4] = animatedStyle;
  cResult[5] = tmp4.pulse;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : (() => {
  let intl;
  let items2;
  let items3;
  let stateFromStores;
  let useReducedMotion;
  const tmp = closure_16();
  let obj = stateFromStores(504);
  let items = [AccessibilityStore];
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = stateFromStores(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
  let obj3 = stateFromStores(4612);
  const fn = function t() {
    let Easing;
    let Easing2;
    let obj5;
    let tmp11;
    let withRepeat;
    let withSequence;
    let withTiming2;
    let withTimingResult;
    let withTimingResult1;
    const obj = { transform: null };
    if (stateFromStores) {
      obj.transform = [];
      tmp11 = obj;
    } else {
      const obj2 = { scale: withRepeat(withSequence(withTimingResult, withTimingResult1, withTiming2(1, obj5)), -1) };
      withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj3 = timing;
      withTimingResult = obj3.withTiming(1, { duration: 0 });
      const obj4 = { duration: 1500, easing: Easing.bezier(0.4, 0, 0.2, 1) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      withTimingResult1 = withTiming(0.5, obj4);
      obj5 = { duration: 1500, easing: Easing2.bezier(0.4, 0, 0.2, 1) };
      withTiming2 = timing.withTiming;
      timing;
      Easing2 = ReanimatedRexport.Easing;
      const items = [obj2];
      obj.transform = items;
      tmp11 = obj;
    }
    return tmp11;
  };
  let obj4 = { useReducedMotion: stateFromStores, withRepeat: stateFromStores(4612).withRepeat, withSequence: stateFromStores(4612).withSequence, withTiming: stateFromStores(4891).withTiming, Easing: stateFromStores(4612).Easing };
  fn.__closure = obj4;
  fn.__workletHash = 9356373946997;
  fn.__initData = __initData2;
  let obj5 = { style: tmp.container, children: items3 };
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj6 = { style: items2 };
  items2 = [tmp.pulse, animatedStyle];
  items3 = [closure_13(ReanimatedRexportDefault.View, obj6), ];
  const obj7 = { variant: "text-xs/medium", color: "text-muted", children: intl.string(stateFromStores(1126).t.JwIJMV) };
  const Text = stateFromStores(4886).Text;
  intl = stateFromStores(1126).intl;
  items3[1] = closure_13(Text, obj7);
  const tmp8 = closure_14(View, obj5);
  let tmp7Result = tmp8;
  if (stateFromStores1) {
    const obj8 = { onPress: openLoadingIndicatorDebugBody, children: tmp8 };
    tmp7Result = closure_13(tmp2(5909).PressableOpacity, obj8);
  }
  return tmp7Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/chat/native/ChatLoadingIndicator.tsx");

export const useShouldChannelShowLoadingIndicator = tmp4;
export const ChannelHeaderLoadingIndicator = tmp5;