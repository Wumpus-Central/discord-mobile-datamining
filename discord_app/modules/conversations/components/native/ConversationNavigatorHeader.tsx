// === Module 7352: ConversationNavigatorHeader ===

// Module 7352 (ConversationNavigatorHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import useToken from "useToken" /* 4531 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import ConversationNavigatorMoreMenuDefault from "ConversationNavigatorMoreMenu" /* 7353 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const require = globalThis.__r;

require = fn;
function ConversationNavigatorHeader(channelId) {
  channelId = channelId.channelId;
  let flag = channelId.hasRightAction;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6(flag);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj = channelId(504);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { title: channelId.title, subtitle: useChannelNameDefault(stateFromStores, true), variant: "heading-lg/semibold", subtitleColor: "text-muted" };
  obj2.children = jsx(channelId(7288).GenericHeaderTitle, { title: channelId.title, subtitle: useChannelNameDefault(stateFromStores, true), variant: "heading-lg/semibold", subtitleColor: "text-muted" });
  return <View style={tmp.container}>{null}</View>;
}
function HeaderWithBorder(shouldHandleSafeArea) {
  const token = useToken.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const token1 = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj4 = {};
  const merged = Object.assign(shouldHandleSafeArea);
  shouldHandleSafeArea = shouldHandleSafeArea.shouldHandleSafeArea;
  if (shouldHandleSafeArea == null) {
    shouldHandleSafeArea = utils_PlatformUtils.isAndroid();
    const tmpResult = utils_PlatformUtils;
  }
  obj4.shouldHandleSafeArea = shouldHandleSafeArea;
  obj4.style = { borderColor: token, backgroundColor: token1 };
  return HeaderShared.renderHeader(obj4);
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_6 = createStyles.createStyles((arg0) => {
  const container = { flex: 1, paddingVertical: nativeDefault.space.PX_16, paddingRight: null, alignItems: "center", justifyContent: "center" };
  let num = 0;
  if (!arg0) {
    num = nativeDefault.space.PX_64;
  }
  container.paddingRight = num;
  return { container };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorHeader.tsx");

export const conversationNavigatorListHeaderOptions = function conversationNavigatorListHeaderOptions(route, navigation, backgroundColor) {
  _require = route;
  let obj = {
    headerShown: true,
    header(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      let shouldHandleSafeArea;
      if (backgroundColor != null) {
        shouldHandleSafeArea = backgroundColor.shouldHandleSafeArea;
      }
      obj.shouldHandleSafeArea = shouldHandleSafeArea;
      return <HeaderWithBorder />;
    },
    headerLeft: null,
    headerTitle: null
  };
  backgroundColor = undefined;
  if (backgroundColor != null) {
    backgroundColor = backgroundColor.backgroundColor;
  }
  obj.headerLeft = require("HeaderShared").getRenderBackImage(navigation, { badgeCutoutColor: backgroundColor });
  obj.headerTitle = function headerTitle() {
    const obj = { channelId: navigation.params.channelId, title: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.T3WBRp);
    return <ConversationNavigatorHeader channelId={navigation.params.channelId} title={null} />;
  };
  return obj;
};
export const conversationNavigatorFocusHeaderOptions = function conversationNavigatorFocusHeaderOptions(route, navigation, backgroundColor) {
  _require = route;
  let obj = {
    headerShown: true,
    header(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      let shouldHandleSafeArea;
      if (backgroundColor != null) {
        shouldHandleSafeArea = backgroundColor.shouldHandleSafeArea;
      }
      obj.shouldHandleSafeArea = shouldHandleSafeArea;
      return <HeaderWithBorder />;
    },
    headerLeft: null,
    headerTitle: null,
    headerRight: null
  };
  backgroundColor = undefined;
  if (backgroundColor != null) {
    backgroundColor = backgroundColor.backgroundColor;
  }
  obj.headerLeft = require("HeaderShared").getRenderBackImage(navigation, { badgeCutoutColor: backgroundColor });
  obj.headerTitle = function headerTitle() {
    let tmp2 = null;
    if (null != closure_0.params) {
      const obj = { channelId: closure_0.params.channelId, title: closure_0.params.title, hasRightAction: true };
      tmp2 = <ConversationNavigatorHeader channelId={closure_0.params.channelId} title={closure_0.params.title} hasRightAction />;
    }
    return tmp2;
  };
  obj.headerRight = function headerRight() {
    let tmp2 = null;
    if (null != closure_0.params) {
      const obj = { channelId: closure_0.params.channelId, conversationId: closure_0.params.conversationId };
      tmp2 = jsx(ConversationNavigatorMoreMenuDefault, { channelId: closure_0.params.channelId, conversationId: closure_0.params.conversationId });
    }
    return tmp2;
  };
  return obj;
};