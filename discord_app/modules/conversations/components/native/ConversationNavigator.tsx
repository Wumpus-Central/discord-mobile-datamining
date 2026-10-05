// === Module 7555: ConversationNavigator ===

// Module 7555 (ConversationNavigator)
import nativeDefault from "native" /* 587 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7550 */;
import useSelectedConversationDefault from "useSelectedConversation" /* 7566 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7103 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const NativeStackNavigator = fn(7556);
let closure_8 = NativeStackNavigator.createNativeStackNavigator();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const cResult = require("c").c(22);
  ({ channelId, guildId } = route.route.params);
  let obj = require("c");
  const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
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
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const first = _slicedToArray(noop.useState(tmp6), 1)[0];
  if (null != first) {
    let LIST = tmp(7568).ConversationNavigatorScreens.FOCUS;
  } else {
    LIST = tmp(7568).ConversationNavigatorScreens.LIST;
  }
  if (cResult[2] === channelId) {
    if (cResult[3] === guildId) {
      let tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function f(arg0) {
        ({ route, navigation } = arg0);
        const obj = closure_0(7569);
        return obj.conversationNavigatorListHeaderOptions(route, navigation, { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
      };
      const fn3 = function h() {
        return closure_0(7584).default;
      };
      cResult[5] = fn2;
      cResult[6] = fn3;
      let tmp11 = fn3;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp8) {
      const obj3 = { initialParams: tmp8, name: tmp(7568).ConversationNavigatorScreens.LIST, options: tmp10, getComponent: tmp11 };
      const tmp15 = closure_6(closure_8.Screen, obj3);
      cResult[7] = tmp8;
      cResult[8] = tmp15;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === channelId) {
      if (cResult[10] === guildId) {
        if (cResult[11] === first) {
          let tmp16 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor(arg0) {
              ({ route, navigation } = route);
              obj = closure_0(closure_1_2[10]);
              obj1 = { backgroundColor: closure_1_1(closure_1_2[11]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj1);
            }
          }
          const fn4 = function b() {
            return closure_0(13091).default;
          };
          cResult[13] = T;
          cResult[14] = fn4;
          let tmp23 = fn4;
        } else {
          class T {
            constructor(arg0) {
              ({ route, navigation } = route);
              obj = closure_0(closure_1_2[10]);
              obj1 = { backgroundColor: closure_1_1(closure_1_2[11]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj1);
            }
          }
          tmp23 = cResult[14];
        }
        if (cResult[15] !== tmp16) {
          class T {
            constructor(arg0) {
              ({ route, navigation } = route);
              obj = closure_0(closure_1_2[10]);
              obj1 = { backgroundColor: closure_1_1(closure_1_2[11]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj1);
            }
          }
          const obj4 = { name: tmp(7568).ConversationNavigatorScreens.FOCUS, initialParams: tmp16, options: T, getComponent: tmp23 };
          const tmp26 = closure_6(closure_8.Screen, obj4);
          cResult[15] = tmp16;
          cResult[16] = tmp26;
        } else {
          class T {
            constructor(arg0) {
              ({ route, navigation } = route);
              obj = closure_0(closure_1_2[10]);
              obj1 = { backgroundColor: closure_1_1(closure_1_2[11]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj1);
            }
          }
        }
        if (cResult[17] === accessibilityNativeStackOptions) {
          class T {
            constructor(arg0) {
              ({ route, navigation } = route);
              obj = closure_0(closure_1_2[10]);
              obj1 = { backgroundColor: closure_1_1(closure_1_2[11]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
              return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj1);
            }
          }
        }
        const obj5 = { id: "conversation-navigator", screenOptions: accessibilityNativeStackOptions, initialRouteName: LIST, children: null };
        const items = [tmp12, tmp24];
        obj5.children = items;
        const tmp30 = closure_7(closure_8.Navigator, obj5);
        cResult[17] = accessibilityNativeStackOptions;
        cResult[18] = tmp24;
        cResult[19] = LIST;
        cResult[20] = tmp12;
        cResult[21] = tmp30;
      }
    }
    let tmp17;
    if (null != first) {
      class T {
        constructor(arg0) {
          ({ route, navigation } = route);
          obj = closure_0(closure_1_2[10]);
          obj1 = { backgroundColor: closure_1_1(closure_1_2[11]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
          return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj1);
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
  const obj2 = require("Navigator");
}) : ((route) => {
  ({ channelId, guildId } = route.route.params);
  _require = undefined;
  const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  _require = useSelectedConversationDefault(channelId);
  const first = _slicedToArray(noop.useState(() => {
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
  const obj2 = { id: "conversation-navigator", screenOptions: accessibilityNativeStackOptions, initialRouteName: null, children: null };
  if (null != first) {
    let LIST = tmp(7568).ConversationNavigatorScreens.FOCUS;
  } else {
    LIST = tmp(7568).ConversationNavigatorScreens.LIST;
  }
  obj2.initialRouteName = LIST;
  let obj = require("Navigator");
  const items = [
    closure_6(closure_8.Screen, {
      initialParams: { channelId, guildId },
      name: require("ConversationNavigatorUtils").ConversationNavigatorScreens.LIST,
      options(arg0) {
        ({ route, navigation } = arg0);
        const obj = closure_0(7569);
        return obj.conversationNavigatorListHeaderOptions(route, navigation, { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
      },
      getComponent() {
        return closure_0(7584).default;
      }
    }),

  ];
  const obj4 = { name: require("ConversationNavigatorUtils").ConversationNavigatorScreens.FOCUS, initialParams: null, options: null, getComponent: null };
  let tmp8;
  if (null != first) {
    const obj5 = { channelId, guildId };
    const merged = Object.assign(first);
    tmp8 = obj5;
  }
  obj4.initialParams = tmp8;
  obj4.options = function options(arg0) {
    ({ route, navigation } = arg0);
    const obj = closure_0(7569);
    return obj.conversationNavigatorFocusHeaderOptions(route, navigation, { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  };
  obj4.getComponent = function getComponent() {
    return closure_0(13091).default;
  };
  items[1] = closure_6(closure_8.Screen, obj4);
  obj2.children = items;
  return closure_7(closure_8.Navigator, obj2);
});
export const openConversationNavigator = function openConversationNavigator(focusSelectedConversation) {
  let flag = focusSelectedConversation.focusSelectedConversation;
  ({ channelId, guildId } = focusSelectedConversation);
  if (flag === undefined) {
    flag = false;
  }
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp3) {
    if (flag) {
      const conversationFocus = ConversationsActionCreators.requestConversationFocus();
      const tmpResult = ConversationsActionCreators;
    }
    const obj2 = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj2);
  }
  tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
};