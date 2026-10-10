// === Module 9356: ConversationNavigatorHeader ===

// Module 9356 (ConversationNavigatorHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import useToken from "useToken" /* 4818 */;
import useChannelNameDefault from "useChannelName" /* 5421 */;
import HeaderShared from "HeaderShared" /* 9297 */;
import ConversationNavigatorMoreMenuDefault from "ConversationNavigatorMoreMenu" /* 9357 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles((arg0) => {
  const container = { flex: 1, paddingVertical: nativeDefault.space.PX_16, paddingRight: null, alignItems: "center", justifyContent: "center" };
  let num = 0;
  if (!arg0) {
    num = nativeDefault.space.PX_64;
  }
  container.paddingRight = num;
  return { container };
});
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConversationNavigatorHeader(channelId) {
  const cResult = channelId(576).c(10);
  channelId = channelId.channelId;
  ({ title, hasRightAction } = channelId);
  let tmp5 = undefined !== hasRightAction;
  if (tmp5) {
    tmp5 = hasRightAction;
  }
  const tmp4Result = closure_6(tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function u() {
      return ChannelStore.getChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp9, tmp10);
  const tmp12 = useChannelNameDefault(stateFromStores, true);
  if (cResult[4] === tmp12) {
    if (cResult[5] === title) {
      let tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4Result.container) {
      if (cResult[8] === tmp13) {
        let tmp15 = cResult[9];
      }
      return tmp15;
    }
    const obj2 = { style: tmp4Result.container, children: tmp13 };
    const tmp18 = <View style={tmp4Result.container}>{tmp13}</View>;
    cResult[7] = tmp4Result.container;
    cResult[8] = tmp13;
    cResult[9] = tmp18;
    tmp15 = tmp18;
  }
  const tmp14 = jsx(channelId(9297).GenericHeaderTitle, { title, subtitle: tmp12, variant: "heading-lg/semibold", subtitleColor: "text-muted" });
  cResult[4] = tmp12;
  cResult[5] = title;
  cResult[6] = tmp14;
  tmp13 = tmp14;
  const tmpResult = channelId(504);
}) : (function ConversationNavigatorHeader(channelId) {
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
  obj2.children = jsx(channelId(9297).GenericHeaderTitle, { title: channelId.title, subtitle: useChannelNameDefault(stateFromStores, true), variant: "heading-lg/semibold", subtitleColor: "text-muted" });
  return <View style={tmp.container}>{null}</View>;
});
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderWithBorder(shouldHandleSafeArea) {
  const cResult = c.c(4);
  const token = useToken.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const token1 = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  if (cResult[0] === token1) {
    if (cResult[1] === token) {
      if (cResult[2] === shouldHandleSafeArea) {
        let tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const obj4 = {};
  const merged = Object.assign(shouldHandleSafeArea);
  shouldHandleSafeArea = shouldHandleSafeArea.shouldHandleSafeArea;
  if (shouldHandleSafeArea == null) {
    shouldHandleSafeArea = utils_PlatformUtils.isAndroid();
    const tmpResult2 = utils_PlatformUtils;
  }
  obj4.shouldHandleSafeArea = shouldHandleSafeArea;
  obj4.style = { borderColor: token, backgroundColor: token1 };
  const renderHeaderResult = HeaderShared.renderHeader(obj4);
  cResult[0] = token1;
  cResult[1] = token;
  cResult[2] = shouldHandleSafeArea;
  cResult[3] = renderHeaderResult;
  tmp6 = renderHeaderResult;
  const tmpResult = HeaderShared;
}) : (function HeaderWithBorder(shouldHandleSafeArea) {
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
      return <closure_8 />;
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
    return <closure_7 channelId={navigation.params.channelId} title={null} />;
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
      return <closure_8 />;
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
      tmp2 = <closure_7 channelId={closure_0.params.channelId} title={closure_0.params.title} hasRightAction />;
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