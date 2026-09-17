// === Module 8046: ConversationNavigatorHeader ===

// Module 8046 (ConversationNavigatorHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import useToken from "useToken" /* 4341 */;
import useChannelNameDefault from "useChannelName" /* 4793 */;
import HeaderShared from "HeaderShared" /* 7984 */;
import ConversationNavigatorMoreMenuDefault from "ConversationNavigatorMoreMenu" /* 8047 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

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
  obj2.children = jsx(channelId(7984).GenericHeaderTitle, { title: channelId.title, subtitle: useChannelNameDefault(stateFromStores, true), variant: "heading-lg/semibold", subtitleColor: "text-muted" });
  return <View style={tmp.container}>{null}</View>;
}
function HeaderWithBorder(arg0) {
  const token = useToken.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const token1 = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj4 = {};
  const merged = Object.assign(arg0);
  const obj3 = HeaderShared;
  obj4.shouldHandleSafeArea = utils_PlatformUtils.isAndroid();
  obj4.style = { borderColor: token, backgroundColor: token1 };
  return obj3.renderHeader(obj4);
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
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

export const conversationNavigatorListHeaderOptions = function conversationNavigatorListHeaderOptions(route, navigation, MOBILE_ACTIONSHEET_BACKGROUND) {
  _require = route;
  let obj = {
    headerShown: true,
    header(arg0) {
      const merged = Object.assign(arg0);
      return <HeaderWithBorder />;
    },
    headerLeft: require("HeaderShared").getRenderBackImage(navigation, { badgeCutoutColor: MOBILE_ACTIONSHEET_BACKGROUND }),
    headerTitle() {
      const obj = { channelId: navigation.params.channelId, title: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.T3WBRp);
      return <ConversationNavigatorHeader channelId={navigation.params.channelId} title={null} />;
    }
  };
  return obj;
};
export const conversationNavigatorFocusHeaderOptions = function conversationNavigatorFocusHeaderOptions(route, navigation, MOBILE_ACTIONSHEET_BACKGROUND) {
  _require = route;
  let obj = {
    headerShown: true,
    header(arg0) {
      const merged = Object.assign(arg0);
      return <HeaderWithBorder />;
    },
    headerLeft: require("HeaderShared").getRenderBackImage(navigation, { badgeCutoutColor: MOBILE_ACTIONSHEET_BACKGROUND }),
    headerTitle() {
      let tmp2 = null;
      if (null != closure_0.params) {
        const obj = { channelId: closure_0.params.channelId, title: closure_0.params.title, hasRightAction: true };
        tmp2 = <ConversationNavigatorHeader channelId={closure_0.params.channelId} title={closure_0.params.title} hasRightAction />;
      }
      return tmp2;
    },
    headerRight() {
      let tmp2 = null;
      if (null != closure_0.params) {
        const obj = { channelId: closure_0.params.channelId, conversationId: closure_0.params.conversationId };
        tmp2 = jsx(ConversationNavigatorMoreMenuDefault, { channelId: closure_0.params.channelId, conversationId: closure_0.params.conversationId });
      }
      return tmp2;
    }
  };
  return obj;
};