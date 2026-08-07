// discord_app/modules/conversations/components/native/ConversationNavigator.tsx
import "noop";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { set } from "../../../../utils/PlatformUtils.tsx";
import { GenericHeaderTitle } from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import { getRootNavigationRef } from "../../../main_tabs_v2/RootNavigationRef.native.tsx";

let c3;
let c4;
const require = arg1;
function HeaderWithBorder(arg0) {
  let obj = map;
  const token = obj.useToken(Themes.colors.BORDER_SUBTLE);
  obj = {};
  const merged = Object.assign(arg0);
  const obj2 = GenericHeaderTitle;
  obj.shouldHandleSafeArea = set.isAndroid();
  obj.style = { borderColor: token };
  return obj2.renderHeader(obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const result = require("map").fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  let Navigator;
  let Screen;
  const params = route.route.params;
  const channelId = params.channelId;
  let obj = channelId(5723);
  obj = { id: "conversation-navigator", screenOptions: obj.useAccessibilityNativeStackOptions(), children: null };
  obj = {
    initialParams: { channelId, guildId: params.guildId },
    name: channelId(8520).ConversationNavigatorScreens.LIST,
    options(navigation) {
      let obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return callback(closure_5, {});
        },
        headerLeft: null,
        headerTitle: null
      };
      obj[1] = channelId(outer1_2[4]).getRenderBackImage(navigation.navigation);
      obj[2] = function headerTitle() {
        const obj = { channelId: closure_0, title: null };
        const intl = outer1_0(outer1_2[10]).intl;
        obj[1] = intl.string(outer1_0(outer1_2[10]).t.T3WBRp);
        return outer1_3(outer1_1(outer1_2[9]), obj);
      };
      return obj;
    },
    getComponent() {
      return channelId(8522).default;
    }
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  const items = [
    callback(Screen, obj),
    callback(createNativeStackNavigator.Screen, {
      name: channelId(8520).ConversationNavigatorScreens.FOCUS,
      options(route) {
        route = route.route;
        const obj = {
          header(arg0) {
            const merged = Object.assign(arg0);
            return callback(closure_5, {});
          },
          headerLeft: null,
          headerTitle: null,
          headerRight: null
        };
        obj[1] = route(8322).getRenderBackImage(route.navigation);
        obj[2] = function headerTitle() {
          return outer1_3(outer1_1(outer1_2[9]), { channelId: route.params.channelId, title: route.params.title, hasRightAction: true });
        };
        obj[3] = function headerRight() {
          return outer1_3(outer1_1(outer1_2[12]), { channelId: route.params.channelId, conversationId: route.params.conversationId });
        };
        return obj;
      },
      getComponent() {
        return channelId(8546).default;
      }
    })
  ];
  obj[2] = items;
  return callback2(Navigator, obj);
};
export const openConversationNavigator = function openConversationNavigator(arg0) {
  let channelId;
  let guildId;
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