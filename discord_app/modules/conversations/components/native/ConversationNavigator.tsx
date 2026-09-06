// === Module 7912: HeaderWithBorder ===

// Module 7912 (HeaderWithBorder)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import set from "set" /* 1115 */;
import map from "map" /* 4262 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4418 */;
import GenericHeaderTitle from "GenericHeaderTitle" /* 7863 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 7913 */;

require = arg1;
function HeaderWithBorder(arg0) {
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.BORDER_SUBTLE);
  obj = {};
  const merged = Object.assign(arg0);
  const obj2 = GenericHeaderTitle;
  obj.shouldHandleSafeArea = set.isAndroid();
  obj.style = { borderColor: token };
  return obj2.renderHeader(obj);
}
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_6 = createNativeStackNavigator.createNativeStackNavigator();
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  const params = route.route.params;
  const channelId = params.channelId;
  let obj = channelId(7000);
  obj = { id: "conversation-navigator", screenOptions: obj.useAccessibilityNativeStackOptions(), children: null };
  obj = {
    initialParams: { channelId, guildId: params.guildId },
    name: channelId(7923).ConversationNavigatorScreens.LIST,
    options(navigation) {
      let obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return callback(closure_5, {});
        },
        headerLeft: channelId(closure_1_2[4]).getRenderBackImage(navigation.navigation),
        headerTitle() {
          const obj = { channelId: closure_0, title: null };
          const intl = closure_1_0(closure_1_2[10]).intl;
          obj[1] = intl.string(closure_1_0(closure_1_2[10]).t.T3WBRp);
          return closure_1_3(closure_1_1(closure_1_2[9]), obj);
        }
      };
      return obj;
    },
    getComponent() {
      return channelId(7925).default;
    }
  };
  ({ Navigator, Screen } = Screen);
  const items = [
    callback(Screen, obj),
    callback(Screen.Screen, {
      name: channelId(7923).ConversationNavigatorScreens.FOCUS,
      options(route) {
        route = route.route;
        const obj = {
          header(arg0) {
            const merged = Object.assign(arg0);
            return callback(closure_5, {});
          },
          headerLeft: route(7863).getRenderBackImage(route.navigation),
          headerTitle() {
            return closure_1_3(closure_1_1(closure_1_2[9]), { channelId: route.params.channelId, title: route.params.title, hasRightAction: true });
          },
          headerRight() {
            return closure_1_3(closure_1_1(closure_1_2[12]), { channelId: route.params.channelId, conversationId: route.params.conversationId });
          }
        };
        return obj;
      },
      getComponent() {
        return channelId(13251).default;
      }
    })
  ];
  obj[2] = items;
  return callback2(Navigator, obj);
};
export const openConversationNavigator = function openConversationNavigator(arg0) {
  ({ channelId, guildId } = arg0);
  let obj = getRootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { channelId: null, guildId: null };
    obj[0] = channelId;
    obj[1] = guildId;
    rootNavigationRef.navigate("conversations", obj);
  }
};