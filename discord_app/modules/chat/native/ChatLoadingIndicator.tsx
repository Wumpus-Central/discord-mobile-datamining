// discord_app/modules/chat/native/ChatLoadingIndicator.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4217 from "../../reanimated/ReanimatedRexport.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import _modDef4858 from "../../../actions/native/AlertActionCreators.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../a11y/AccessibilityStore.tsx";
import closure_7 from "../../gateway/GatewayConnectionStore.tsx";
import closure_8 from "../../../stores/MessageStore.tsx";
import closure_9 from "../../../stores/SelectedChannelStore.tsx";
import closure_10 from "../../../stores/UserStore.tsx";
import closure_11 from "../../../stores/native/AppStateStore.tsx";
import { AppStates } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function openLoadingIndicatorDebugBody() {
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
  if (isStaffResult) {
    let obj = { importer: null, isDismissable: true };
    obj[0] = function importer() {
      return callback(paths[15])(paths[14], paths.paths).then((arg0) => {
        closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.title = "Chat Loading indicator";
          obj.children = closure_1_13(closure_1_18, {});
          return closure_1_13(closure_0, obj);
        };
      });
    };
    _modDef4858.openLazy(obj);
    const obj2 = _modDef4858;
  }
}
let c4 = importAllResult;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4 }, pulse: null };
obj = {
  height: 8,
  width: 8,
  borderRadius: ThemesDefault.radii.round,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND,
};
obj[1] = obj;
let closure_16 = createCacheKey.createStyles(obj);
let closure_18 = importAllResult.memo(() => {
  let obj = initialize;
  const items = [closure_8, closure_7, closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    channelId = channelId.getChannelId();
    const isConnectedResult = connected.isConnected();
    if (null == channelId) {
      let obj = { messagesCached: false, messagesReady: false, connected: null };
      obj[2] = isConnectedResult;
      return obj;
    } else {
      messages = messages.getMessages(channelId);
      obj = { messagesCached: null, messagesReady: null, connected: null };
      ({ cached: obj[0], ready: obj[1] } = messages);
      obj[2] = isConnectedResult;
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
  obj = { variant: "text-md/normal", color: str2, children: null };
  let str3 = "false";
  let str4 = "false";
  if (messagesCached) {
    str4 = "true";
  }
  obj[2] = str4;
  items1[3] = closure_13(Text.Text, obj);
  let tmp4Result = null;
  if (messagesCached !== false) {
    obj = { variant: "text-md/normal", color: "text-muted", children: null };
    const items2 = [" ", "(should be ", str3, " to hide loading indicator)"];
    obj[2] = items2;
    tmp4Result = tmp4(tmp(4474).Text, obj);
  }
  items1[4] = tmp4Result;
  const items3 = [closure_14(closure_15, { children: items1 }), "\n", , , , ,];
  const items4 = ["messages.ready", ":", " ", ,];
  let str6 = str;
  if (messagesReady) {
    str6 = "text-feedback-positive";
  }
  obj1 = { variant: "text-md/normal", color: str6, children: null };
  let str7 = str3;
  if (messagesReady) {
    str7 = "true";
  }
  obj1[2] = str7;
  items4[3] = closure_13(Text.Text, obj1);
  tmp4Result = null;
  if (messagesReady !== true) {
    const obj2 = { variant: "text-md/normal", color: "text-muted", children: null };
    const items5 = [" ", "(should be ", "true", " to hide loading indicator)"];
    obj2[2] = items5;
    tmp4Result = tmp4(tmp(4474).Text, obj2);
  }
  items4[4] = tmp4Result;
  items3[2] = closure_14(closure_15, { children: items4 });
  items3[3] = "\n";
  const items6 = ["connected", ":", " ", ,];
  let str10 = str;
  if (connected) {
    str10 = "text-feedback-positive";
  }
  const obj3 = { variant: "text-md/normal", color: str10, children: null };
  let str11 = str3;
  if (connected) {
    str11 = "true";
  }
  obj3[2] = str11;
  items6[3] = closure_13(Text.Text, obj3);
  let tmp4Result1 = null;
  if (connected !== true) {
    const obj4 = { variant: "text-md/normal", color: "text-muted", children: null };
    const items7 = [" ", "(should be ", "true", " to hide loading indicator)"];
    obj4[2] = items7;
    tmp4Result1 = tmp4(tmp(4474).Text, obj4);
  }
  items6[4] = tmp4Result1;
  items3[4] = closure_14(closure_15, { children: items6 });
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
  const obj5 = { variant: "text-md/normal", color: str, children: null };
  if (messagesCached) {
    str3 = "true";
  }
  obj5[2] = str3;
  items8[3] = closure_13(Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", children: null };
  items8[4] = null;
  items3[6] = closure_14(closure_15, { children: items8 });
  obj6[2] = items3;
  return closure_14(Text.Text, obj6);
});
let closure_19 = {
  code: "function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}",
};
const result = require("set").fileFinishedImporting("modules/chat/native/ChatLoadingIndicator.tsx");

export const useShouldChannelShowLoadingIndicator = function useShouldChannelShowLoadingIndicator(channelId) {
  const _require = channelId;
  const ChatLoadingIndicatorExperiment = _require(stateFromStores[18]).ChatLoadingIndicatorExperiment;
  const enabled = ChatLoadingIndicatorExperiment.useConfig({ location: "ChatLoadingIndicatorGuard" }).enabled;
  const items = [closure_8, closure_7, closure_11];
  stateFromStores = _require(stateFromStores[16]).useStateFromStores(items, () => {
    if (enabled) {
      if (null == closure_0) {
        return false;
      } else if (closure_1_11.getState() !== closure_1_12.ACTIVE) {
        return false;
      } else {
        const messages = closure_1_8.getMessages(tmp);
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
  const tmp2 = callback(importAllResult.useState(false), 2);
  callback = tmp2[1];
  const items1 = [stateFromStores];
  const effect = importAllResult.useEffect(() => {
    if (stateFromStores) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback(true);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      callback(false);
    }
  }, items1);
  return tmp2[0];
};
export const ChannelHeaderLoadingIndicator = function ChannelHeaderLoadingIndicator() {
  const tmp = callback4();
  let obj = stateFromStores(586);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = stateFromStores(586);
  const items1 = [closure_10];
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
  let obj2 = stateFromStores(4217);
  const fn = function t() {
    let obj = { transform: null };
    if (stateFromStores) {
      obj[0] = [];
      let tmp7 = obj;
    } else {
      obj = { scale: null };
      const obj3 = stateFromStores(closure_1_2[19]);
      const obj4 = stateFromStores(closure_1_2[19]);
      const obj5 = stateFromStores(closure_1_2[20]);
      const withTimingResult = stateFromStores(closure_1_2[20]).withTiming(1, { duration: 0 });
      obj = { duration: 1500, easing: null };
      const Easing = stateFromStores(closure_1_2[19]).Easing;
      obj[1] = Easing.bezier(0.4, 0, 0.2, 1);
      const obj6 = stateFromStores(closure_1_2[20]);
      const withTimingResult1 = stateFromStores(closure_1_2[20]).withTiming(0.5, obj);
      obj1 = { duration: 1500, easing: null };
      const Easing2 = stateFromStores(closure_1_2[19]).Easing;
      obj1[1] = Easing2.bezier(0.4, 0, 0.2, 1);
      obj[0] = obj3.withRepeat(
        obj4.withSequence(withTimingResult, withTimingResult1, stateFromStores(closure_1_2[20]).withTiming(1, obj1)),
        -1,
      );
      const items = [obj];
      obj[0] = items;
      tmp7 = obj;
      const obj8 = stateFromStores(closure_1_2[20]);
    }
    return tmp7;
  };
  obj = {
    useReducedMotion: stateFromStores,
    withRepeat: stateFromStores(4217).withRepeat,
    withSequence: stateFromStores(4217).withSequence,
    withTiming: stateFromStores(4479).withTiming,
    Easing: stateFromStores(4217).Easing,
  };
  fn.__closure = obj;
  fn.__workletHash = 17454673879926;
  fn.__initData = closure_19;
  obj = { style: tmp.container, children: null };
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items2 = [tmp.pulse, animatedStyle];
  const items3 = [callback2(_modDef4217.View, { style: items2 })];
  obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = stateFromStores(1233).intl;
  obj1[2] = intl.string(stateFromStores(1233).t.JwIJMV);
  items3[1] = callback2(stateFromStores(4474).Text, obj1);
  obj[1] = items3;
  const tmp8 = callback3(View, obj);
  let tmp7Result = tmp8;
  if (stateFromStores1) {
    obj2 = { onPress: null, children: null };
    obj2[0] = openLoadingIndicatorDebugBody;
    obj2[1] = tmp8;
    tmp7Result = callback2(stateFromStores(5076).PressableOpacity, obj2);
  }
  return tmp7Result;
};
