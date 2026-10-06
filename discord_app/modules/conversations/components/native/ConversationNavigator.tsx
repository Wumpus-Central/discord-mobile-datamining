// === Module 7567: ConversationNavigator ===

// Module 7567 (ConversationNavigator)
import nativeDefault from "native" /* 587 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7561 */;
import useSelectedConversationDefault from "useSelectedConversation" /* 7578 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7116 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7568 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = NativeStackView.createNativeStackNavigator();
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let LIST;
  let channelId;
  let closure_0;
  let guildId;
  let items;
  let tmp6;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(22);
  ({ channelId, guildId } = route.route.params);
  let obj2 = require("Navigator");
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  const tmp5 = useSelectedConversationDefault(channelId);
  _require = tmp5;
  if (cResult[0] !== tmp5) {
    const fn = function v() {
      let tmp = null;
      if (ChannelConversationsStore.consumeFocusRequest()) {
        let tmp3 = null;
        if (null != closure_0) {
          const obj = { conversationId: null, title: null };
          ({ id: obj.conversationId, title: obj.title } = closure_0);
          tmp3 = obj;
        }
        tmp = tmp3;
      }
      return tmp;
    };
    cResult[0] = tmp5;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const first = _slicedToArray(react.useState(tmp6), 1)[0];
  if (null != first) {
    LIST = tmp(7579).ConversationNavigatorScreens.FOCUS;
  } else {
    LIST = tmp(7579).ConversationNavigatorScreens.LIST;
  }
  if (cResult[2] === channelId) {
    let tmp8;
    let tmp11;
    let tmp10;
    let tmp12;
    if (cResult[3] === guildId) {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function f(arg0) {
        let route;
        ({ route, navigation } = arg0);
        const obj = closure_0(dependencyMap[10]);
        const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
        return obj.conversationNavigatorListHeaderOptions(route, navigation, obj2);
      };
      const fn3 = function h() {
        return closure_0(dependencyMap[12]).default;
      };
      cResult[5] = fn2;
      cResult[6] = fn3;
      tmp11 = fn3;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp8) {
      const Screen = closure_8.Screen;
      const obj3 = { initialParams: tmp8, name: tmp(7579).ConversationNavigatorScreens.LIST, options: tmp10, getComponent: tmp11 };
      const tmp15 = closure_6(Screen, obj3);
      cResult[7] = tmp8;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === channelId) {
      if (cResult[10] === guildId) {
        let tmp16;
        let tmp23;
        if (cResult[11] === first) {
          tmp16 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor(arg0) {
              let route;
              ({ route, navigation } = arg0);
              const obj = closure_0(dependencyMap[10]);
              const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj2);
            }
          }
          const fn4 = function b() {
            return closure_0(dependencyMap[13]).default;
          };
          cResult[13] = T;
          cResult[14] = fn4;
          tmp23 = fn4;
        } else {
          class T {
            constructor(arg0) {
              let route;
              ({ route, navigation } = arg0);
              const obj = closure_0(dependencyMap[10]);
              const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj2);
            }
          }
          tmp23 = cResult[14];
        }
        if (cResult[15] !== tmp16) {
          class T {
            constructor(arg0) {
              let route;
              ({ route, navigation } = arg0);
              const obj = closure_0(dependencyMap[10]);
              const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj2);
            }
          }
          const Screen2 = closure_8.Screen;
          const obj4 = { name: tmp(7579).ConversationNavigatorScreens.FOCUS, initialParams: tmp16, options: T, getComponent: tmp23 };
          cResult[15] = tmp16;
          cResult[16] = closure_6(Screen2, obj4);
          const tmp26 = closure_6(Screen2, obj4);
        } else {
          class T {
            constructor(arg0) {
              let route;
              ({ route, navigation } = arg0);
              const obj = closure_0(dependencyMap[10]);
              const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj2);
            }
          }
        }
        if (cResult[17] === accessibilityNativeStackOptions) {
          class T {
            constructor(arg0) {
              let route;
              ({ route, navigation } = arg0);
              const obj = closure_0(dependencyMap[10]);
              const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj2);
            }
          }
        }
        const obj5 = { id: "conversation-navigator", screenOptions: accessibilityNativeStackOptions, initialRouteName: LIST, children: items };
        items = [tmp12, tmp24];
        cResult[17] = accessibilityNativeStackOptions;
        cResult[18] = tmp24;
        cResult[19] = LIST;
        cResult[20] = tmp12;
        cResult[21] = closure_7(closure_8.Navigator, obj5);
        const tmp30 = closure_7(closure_8.Navigator, obj5);
      }
    }
    let tmp17;
    if (null != first) {
      class T {
        constructor(arg0) {
          let route;
          ({ route, navigation } = arg0);
          const obj = closure_0(dependencyMap[10]);
          const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
          return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj2);
        }
      }
      tmp18[0] = channelId;
      tmp18[1] = guildId;
      const merged = Object.assign(first);
      tmp17 = tmp18;
    }
    cResult[9] = channelId;
    cResult[10] = guildId;
    cResult[11] = first;
    cResult[12] = tmp17;
    tmp16 = tmp17;
  }
  const obj6 = { channelId, guildId };
  cResult[2] = channelId;
  cResult[3] = guildId;
  cResult[4] = obj6;
  tmp8 = obj6;
}) : ((route) => {
  let LIST;
  let channelId;
  let closure_0;
  let guildId;
  let items;
  let tmp8;
  ({ channelId, guildId } = route.route.params);
  _require = undefined;
  let tmp = _require;
  let obj = require("Navigator");
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  _require = useSelectedConversationDefault(channelId);
  const first = _slicedToArray(react.useState(() => {
    let tmp = null;
    if (ChannelConversationsStore.consumeFocusRequest()) {
      let tmp3 = null;
      if (null != closure_0) {
        const obj = { conversationId: null, title: null };
        ({ id: obj.conversationId, title: obj.title } = closure_0);
        tmp3 = obj;
      }
      tmp = tmp3;
    }
    return tmp;
  }), 1)[0];
  let obj2 = { id: "conversation-navigator", screenOptions: accessibilityNativeStackOptions, initialRouteName: LIST, children: items };
  const Navigator = closure_8.Navigator;
  if (null != first) {
    LIST = tmp(7579).ConversationNavigatorScreens.FOCUS;
  } else {
    LIST = tmp(7579).ConversationNavigatorScreens.LIST;
  }
  items = [, ];
  const obj3 = {
    initialParams: { channelId, guildId },
    name: tmp(7579).ConversationNavigatorScreens.LIST,
    options(arg0) {
      let route;
      ({ route, navigation } = arg0);
      const obj = closure_0(dependencyMap[10]);
      const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
      return obj.conversationNavigatorListHeaderOptions(route, navigation, obj2);
    },
    getComponent() {
      return closure_0(dependencyMap[12]).default;
    }
  };
  items[0] = closure_6(closure_8.Screen, obj3);
  const Screen = closure_8.Screen;
  const obj4 = {
    name: tmp(7579).ConversationNavigatorScreens.FOCUS,
    initialParams: tmp8,
    options(arg0) {
      let route;
      ({ route, navigation } = arg0);
      const obj = closure_0(dependencyMap[10]);
      const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
      return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj2);
    },
    getComponent() {
      return closure_0(dependencyMap[13]).default;
    }
  };
  tmp8 = undefined;
  if (null != first) {
    const obj5 = { channelId, guildId };
    const merged = Object.assign(first);
    tmp8 = obj5;
  }
  items[1] = closure_6(Screen, obj4);
  return closure_7(Navigator, obj2);
});
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default tmp3;
export const openConversationNavigator = function openConversationNavigator(focusSelectedConversation) {
  let channelId;
  let guildId;
  let flag = focusSelectedConversation.focusSelectedConversation;
  ({ channelId, guildId } = focusSelectedConversation);
  if (flag === undefined) {
    flag = false;
  }
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    if (flag) {
      const tmpResult = ConversationsActionCreators;
      const conversationFocus = tmpResult.requestConversationFocus();
    }
    const obj2 = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj2);
  }
};