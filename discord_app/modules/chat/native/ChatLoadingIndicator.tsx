// discord_app/modules/chat/native/ChatLoadingIndicator.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

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
      isDismissable: true,
    };
    actions_AlertActionCreatorsDefault.openLazy(obj);
  }
}
const View = fn(17).View;
const AppStates = fn(1085).AppStates;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5091);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4 }, pulse: null };
let size = {
  height: 8,
  width: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj.pulse = size;
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_18 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function LoadingIndicatorDebugBody() {
        const cResult = c.c(16);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MessageStore, GatewayConnectionStore, SelectedChannelStore];
          const fn = function n() {
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
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
        ({ messagesCached, messagesReady, connected } = stateFromStoresObject);
        let tmp10 = messagesCached;
        if (!messagesCached) {
          tmp10 = !messagesReady;
        }
        if (!tmp10) {
          tmp10 = !connected;
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          function renderField(arg0, arg1, arg2) {
            const children = [arg0, ":", " ", ,];
            let str = "text-feedback-critical";
            if (arg1) {
              str = "text-feedback-positive";
            }
            const obj = { variant: "text-md/normal", color: str, children: null };
            let str2 = "false";
            let str3 = "false";
            if (arg1) {
              str3 = "true";
            }
            obj.children = str3;
            children[3] = closure_1_13(require("Text/Text").Text, obj);
            let tmpResult = null;
            if (null != arg2) {
              tmpResult = null;
              if (arg1 !== arg2) {
                if (arg2) {
                  str2 = "true";
                }
                const obj2 = { variant: "text-md/normal", color: "text-muted", children: null };
                const items1 = [" ", "(should be ", str2, " to hide loading indicator)"];
                obj2.children = items1;
                tmpResult = closure_1_14(require("Text/Text").Text, obj2);
              }
            }
            children[4] = tmpResult;
            return closure_1_14(closure_1_15, { children });
          }
          cResult[2] = renderField;
          let tmp11 = renderField;
        } else {
          tmp11 = cResult[2];
        }
        if (cResult[3] !== messagesCached) {
          const tmp11Result = tmp11("messages.cached", messagesCached, false);
          cResult[3] = messagesCached;
          cResult[4] = tmp11Result;
          let tmp12 = tmp11Result;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[5] !== messagesReady) {
          const tmp11Result4 = tmp11("messages.ready", messagesReady, true);
          cResult[5] = messagesReady;
          cResult[6] = tmp11Result4;
          let tmp14 = tmp11Result4;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] !== connected) {
          const tmp11Result5 = tmp11("connected", connected, true);
          cResult[7] = connected;
          cResult[8] = tmp11Result5;
          let tmp16 = tmp11Result5;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] !== tmp10) {
          const tmp11Result6 = tmp11("should show chat indicator", tmp10);
          cResult[9] = tmp10;
          cResult[10] = tmp11Result6;
          let tmp18 = tmp11Result6;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] === tmp12) {
          if (cResult[12] === tmp14) {
            if (cResult[13] === tmp16) {
              if (cResult[14] === tmp18) {
                let tmp20 = cResult[15];
              }
              return tmp20;
            }
          }
        }
        let obj2 = { variant: "text-md/normal", color: "text-default", children: null };
        let items1 = [tmp12, "\n", tmp14, "\n", tmp16, "\n", tmp18];
        obj2.children = items1;
        const tmp21 = state(Text_Text.Text, obj2);
        cResult[11] = tmp12;
        cResult[12] = tmp14;
        cResult[13] = tmp16;
        cResult[14] = tmp18;
        cResult[15] = tmp21;
        tmp20 = tmp21;
        let tmpResult = initialize;
      }
    : function LoadingIndicatorDebugBody() {
        const items = [MessageStore, GatewayConnectionStore, SelectedChannelStore];
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
        const items1 = ["messages.cached", ":", " ", ,];
        let str = "text-feedback-critical";
        let str2 = "text-feedback-critical";
        if (messagesCached) {
          str2 = "text-feedback-positive";
        }
        let obj2 = { variant: "text-md/normal", color: str2, children: null };
        let str3 = "false";
        let str4 = "false";
        if (messagesCached) {
          str4 = "true";
        }
        obj2.children = str4;
        items1[3] = __initData2(Text_Text.Text, obj2);
        let tmp4Result = null;
        if (messagesCached !== false) {
          const obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
          const items2 = [" ", "(should be ", str3, " to hide loading indicator)"];
          obj3.children = items2;
          tmp4Result = state(Text_Text.Text, obj3);
        }
        items1[4] = tmp4Result;
        const items3 = [state(closure_1_15, { children: items1 }), "\n", , , , ,];
        const items4 = ["messages.ready", ":", " ", ,];
        let str6 = str;
        if (messagesReady) {
          str6 = "text-feedback-positive";
        }
        const obj4 = { variant: "text-md/normal", color: str6, children: null };
        let str7 = str3;
        if (messagesReady) {
          str7 = "true";
        }
        obj4.children = str7;
        items4[3] = __initData2(Text_Text.Text, obj4);
        let tmp4Result3 = null;
        if (messagesReady !== true) {
          const obj5 = { variant: "text-md/normal", color: "text-muted", children: null };
          const items5 = [" ", "(should be ", "true", " to hide loading indicator)"];
          obj5.children = items5;
          tmp4Result3 = state(Text_Text.Text, obj5);
        }
        items4[4] = tmp4Result3;
        items3[2] = state(closure_1_15, { children: items4 });
        items3[3] = "\n";
        const items6 = ["connected", ":", " ", ,];
        let str10 = str;
        if (connected) {
          str10 = "text-feedback-positive";
        }
        const obj6 = { variant: "text-md/normal", color: str10, children: null };
        let str11 = str3;
        if (connected) {
          str11 = "true";
        }
        obj6.children = str11;
        items6[3] = __initData2(Text_Text.Text, obj6);
        let tmp4Result4 = null;
        if (connected !== true) {
          const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
          const items7 = [" ", "(should be ", "true", " to hide loading indicator)"];
          obj7.children = items7;
          tmp4Result4 = state(Text_Text.Text, obj7);
        }
        items6[4] = tmp4Result4;
        items3[4] = state(closure_1_15, { children: items6 });
        items3[5] = "\n";
        if (!messagesCached) {
          messagesCached = !messagesReady;
        }
        if (!messagesCached) {
          messagesCached = !connected;
        }
        const items8 = ["should show chat indicator", ":", " ", ,];
        if (messagesCached) {
          str = "text-feedback-positive";
        }
        const obj8 = { variant: "text-md/normal", color: str, children: null };
        if (messagesCached) {
          str3 = "true";
        }
        obj8.children = str3;
        items8[3] = __initData2(Text_Text.Text, obj8);
        const obj9 = { variant: "text-md/normal", color: "text-default", children: null };
        items8[4] = null;
        items3[6] = state(closure_1_15, { children: items8 });
        obj9.children = items3;
        return state(Text_Text.Text, obj9);
      },
);
fn(558);
const __initData = {
  code: "function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}",
};
const __initData2 = {
  code: "function ChatLoadingIndicatorTsx2(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}",
};
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldChannelShowLoadingIndicator(arg0) {
      _require = arg0;
      const cResult = require("c").c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "ChatLoadingIndicatorGuard" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const ChatLoadingIndicatorExperiment = tmp(tmp2[20]).ChatLoadingIndicatorExperiment;
      const enabled = ChatLoadingIndicatorExperiment.useConfig(first).enabled;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore, GatewayConnectionStore, AppStateStore];
        cResult[1] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === arg0) {
        if (cResult[3] === enabled) {
          let tmp9 = cResult[4];
        }
        stateFromStores = tmp(tmp2[18]).useStateFromStores(tmp5, tmp9);
        const tmpResult = tmp(tmp2[18]);
        [tmp13, _slicedToArray] = noop.useState(false);
        if (cResult[5] !== stateFromStores) {
          const fn2 = function v() {
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
          cResult[6] = fn2;
          cResult[7] = items1;
          let tmp15 = items1;
          let tmp14 = fn2;
        } else {
          tmp14 = cResult[6];
          tmp15 = cResult[7];
        }
        const effect = noop.useEffect(tmp14, tmp15);
        return tmp13;
      }
      const fn = function w() {
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
      };
      cResult[2] = arg0;
      cResult[3] = enabled;
      cResult[4] = fn;
      tmp9 = fn;
      const obj = require("c");
    }
  : function useShouldChannelShowLoadingIndicator(arg0) {
      _require = arg0;
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
size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatLoadingIndicator.tsx");

export const useShouldChannelShowLoadingIndicator = tmp3;
export const ChannelHeaderLoadingIndicator = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelHeaderLoadingIndicator() {
      let PressableOpacity = stateFromStores;
      let tmp = dependencyMap;
      const cResult = stateFromStores(576).c(13);
      const tmp3 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function n() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = stateFromStores(576);
      stateFromStores = PressableOpacity(504).useStateFromStores(tmp4, tmp5);
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
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const PressableOpacityResult = PressableOpacity(504);
      const stateFromStores1 = PressableOpacity(504).useStateFromStores(tmp8, tmp9);
      const PressableOpacityResult1 = PressableOpacity(504);
      const fn3 = function w() {
        const obj = { transform: null };
        if (stateFromStores) {
          obj.transform = [];
          let tmp7 = obj;
        } else {
          const obj2 = { scale: null };
          const obj3 = ReanimatedRexport;
          const obj4 = ReanimatedRexport;
          const withTimingResult = timing.withTiming(1, { duration: 0 });
          const obj7 = { duration: 1500, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj7.easing = Easing.bezier(0.4, 0, 0.2, 1);
          const withTimingResult1 = timing.withTiming(0.5, obj7);
          const obj9 = { duration: 1500, easing: null };
          const Easing2 = ReanimatedRexport.Easing;
          obj9.easing = Easing2.bezier(0.4, 0, 0.2, 1);
          obj2.scale = obj3.withRepeat(
            obj4.withSequence(withTimingResult, withTimingResult1, timing.withTiming(1, obj9)),
            -1,
          );
          const items = [obj2];
          obj.transform = items;
          tmp7 = obj;
        }
        return tmp7;
      };
      const PressableOpacityResult2 = PressableOpacity(4811);
      fn3.__closure = {
        useReducedMotion: stateFromStores,
        withRepeat: PressableOpacity(4811).withRepeat,
        withSequence: PressableOpacity(4811).withSequence,
        withTiming: PressableOpacity(5092).withTiming,
        Easing: PressableOpacity(4811).Easing,
      };
      fn3.__workletHash = 17454673879926;
      fn3.__initData = __initData;
      const animatedStyle = PressableOpacityResult2.useAnimatedStyle(fn3);
      if (cResult[4] === animatedStyle) {
        if (cResult[5] === tmp3.pulse) {
          let tmp13 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const intl = PressableOpacity(1126).intl;
          obj3.children = intl.string(PressableOpacity(1126).t.JwIJMV);
          const tmp17 = closure_13(PressableOpacity(5087).Text, obj3);
          cResult[7] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] === tmp3.container) {
          if (cResult[9] === tmp13) {
            let tmp18 = cResult[10];
          }
          if (!stateFromStores1) {
            return tmp18;
          } else if (cResult[11] !== tmp18) {
            PressableOpacity = PressableOpacity(6191).PressableOpacity;
            let obj4 = { onPress: openLoadingIndicatorDebugBody, children: tmp18 };
            tmp = closure_13(PressableOpacity, obj4);
            cResult[11] = tmp18;
            cResult[12] = tmp;
          }
        }
        let obj5 = { style: tmp3.container, children: null };
        const items2 = [tmp13, tmp15];
        obj5.children = items2;
        const tmp21 = closure_14(View, obj5);
        cResult[8] = tmp3.container;
        cResult[9] = tmp13;
        cResult[10] = tmp21;
        tmp18 = tmp21;
      }
      let obj6 = { style: null };
      const items3 = [tmp3.pulse, animatedStyle];
      obj6.style = items3;
      const tmp14 = closure_13(ReanimatedRexportDefault.View, obj6);
      cResult[4] = animatedStyle;
      cResult[5] = tmp3.pulse;
      cResult[6] = tmp14;
      tmp13 = tmp14;
      let obj2 = {
        useReducedMotion: stateFromStores,
        withRepeat: PressableOpacity(4811).withRepeat,
        withSequence: PressableOpacity(4811).withSequence,
        withTiming: PressableOpacity(5092).withTiming,
        Easing: PressableOpacity(4811).Easing,
      };
    }
  : function ChannelHeaderLoadingIndicator() {
      const tmp = closure_16();
      let items = [AccessibilityStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let obj = stateFromStores(504);
      const tmp2 = stateFromStores;
      const items1 = [UserStore];
      const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => {
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
      let obj2 = stateFromStores(504);
      const fn = function t() {
        const obj = { transform: null };
        if (stateFromStores) {
          obj.transform = [];
          let tmp7 = obj;
        } else {
          const obj2 = { scale: null };
          const obj3 = ReanimatedRexport;
          const obj4 = ReanimatedRexport;
          const withTimingResult = timing.withTiming(1, { duration: 0 });
          const obj7 = { duration: 1500, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj7.easing = Easing.bezier(0.4, 0, 0.2, 1);
          const withTimingResult1 = timing.withTiming(0.5, obj7);
          const obj9 = { duration: 1500, easing: null };
          const Easing2 = ReanimatedRexport.Easing;
          obj9.easing = Easing2.bezier(0.4, 0, 0.2, 1);
          obj2.scale = obj3.withRepeat(
            obj4.withSequence(withTimingResult, withTimingResult1, timing.withTiming(1, obj9)),
            -1,
          );
          const items = [obj2];
          obj.transform = items;
          tmp7 = obj;
        }
        return tmp7;
      };
      let obj3 = stateFromStores(4811);
      fn.__closure = {
        useReducedMotion: stateFromStores,
        withRepeat: stateFromStores(4811).withRepeat,
        withSequence: stateFromStores(4811).withSequence,
        withTiming: stateFromStores(5092).withTiming,
        Easing: stateFromStores(4811).Easing,
      };
      fn.__workletHash = 9356373946997;
      fn.__initData = __initData2;
      let obj5 = { style: tmp.container, children: null };
      const animatedStyle = obj3.useAnimatedStyle(fn);
      let obj6 = { style: null };
      const items2 = [tmp.pulse, animatedStyle];
      obj6.style = items2;
      const items3 = [closure_13(ReanimatedRexportDefault.View, obj6)];
      let obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl = stateFromStores(1126).intl;
      obj7.children = intl.string(stateFromStores(1126).t.JwIJMV);
      items3[1] = closure_13(stateFromStores(5087).Text, obj7);
      obj5.children = items3;
      const tmp8 = closure_14(View, obj5);
      let tmp7Result = tmp8;
      if (stateFromStores1) {
        let obj8 = { onPress: openLoadingIndicatorDebugBody, children: tmp8 };
        tmp7Result = closure_13(tmp2(6191).PressableOpacity, obj8);
      }
      return tmp7Result;
    };
