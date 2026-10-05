// discord_app/modules/conversations/components/native/ConversationNavigatorHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import ConversationNavigatorMoreMenuDefault from "ConversationNavigatorMoreMenu.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, channelId;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0) => {
  let num;
  const container = {
    flex: 1,
    paddingVertical: nativeDefault.space.PX_16,
    paddingRight: num,
    alignItems: "center",
    justifyContent: "center",
  };
  num = 0;
  if (!arg0) {
    num = nativeDefault.space.PX_64;
  }
  return { container };
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let hasRightAction;
      let title;
      let tmp10;
      let tmp9;
      const obj = channelId(576);
      const cResult = obj.c(10);
      channelId = channelId.channelId;
      ({ title, hasRightAction } = channelId);
      const tmp5 = undefined !== hasRightAction && hasRightAction;
      const tmp4Result = closure_6(tmp5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
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
        tmp10 = items1;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = channelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
      const tmp12 = useChannelNameDefault(stateFromStores, true);
      if (cResult[4] === tmp12) {
        let tmp13;
        if (cResult[5] === title) {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp4Result.container) {
          let tmp15;
          if (cResult[8] === tmp13) {
            tmp15 = cResult[9];
          }
          return tmp15;
        }
        const tmp18 = <View style={tmp4Result.container}>{tmp13}</View>;
        cResult[7] = tmp4Result.container;
        cResult[8] = tmp13;
        cResult[9] = tmp18;
        tmp15 = tmp18;
      }
      const tmp14 = jsx(channelId(7498).GenericHeaderTitle, {
        title,
        subtitle: tmp12,
        variant: "heading-lg/semibold",
        subtitleColor: "text-muted",
      });
      cResult[4] = tmp12;
      cResult[5] = title;
      cResult[6] = tmp14;
      tmp13 = tmp14;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      let flag = channelId.hasRightAction;
      const title = channelId.title;
      if (flag === undefined) {
        flag = false;
      }
      const items = [ChannelStore];
      const items1 = [channelId];
      const tmp = closure_6(flag);
      const obj = channelId(504);
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
      const tmp3 = useChannelNameDefault(stateFromStores, true);
      const GenericHeaderTitle = channelId(7498).GenericHeaderTitle;
      return <View style={tmp.container}>{null}</View>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (shouldHandleSafeArea) => {
      const obj = react2;
      const cResult = obj.c(4);
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.BORDER_SUBTLE);
      const obj3 = useToken;
      const token1 = obj3.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
      if (cResult[0] === token1) {
        if (cResult[1] === token) {
          let tmp6;
          if (cResult[2] === shouldHandleSafeArea) {
            tmp6 = cResult[3];
          }
          return tmp6;
        }
      }
      const obj4 = { shouldHandleSafeArea, style: { borderColor: token, backgroundColor: token1 } };
      const renderHeader = HeaderShared.renderHeader;
      HeaderShared;
      const merged = Object.assign(shouldHandleSafeArea);
      shouldHandleSafeArea = shouldHandleSafeArea.shouldHandleSafeArea;
      if (shouldHandleSafeArea == null) {
        const tmpResult2 = utils_PlatformUtils;
        shouldHandleSafeArea = tmpResult2.isAndroid();
      }
      const renderHeaderResult = renderHeader(obj4);
      cResult[0] = token1;
      cResult[1] = token;
      cResult[2] = shouldHandleSafeArea;
      cResult[3] = renderHeaderResult;
      tmp6 = renderHeaderResult;
    }
  : (shouldHandleSafeArea) => {
      const obj = useToken;
      const token = obj.useToken(nativeDefault.colors.BORDER_SUBTLE);
      const obj2 = useToken;
      const token1 = obj2.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
      const obj3 = { shouldHandleSafeArea, style: { borderColor: token, backgroundColor: token1 } };
      const renderHeader = HeaderShared.renderHeader;
      HeaderShared;
      const merged = Object.assign(shouldHandleSafeArea);
      shouldHandleSafeArea = shouldHandleSafeArea.shouldHandleSafeArea;
      if (shouldHandleSafeArea == null) {
        const tmpResult = utils_PlatformUtils;
        shouldHandleSafeArea = tmpResult.isAndroid();
      }
      return renderHeader(obj3);
    };
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorHeader.tsx");

export const conversationNavigatorListHeaderOptions = function conversationNavigatorListHeaderOptions(
  route,
  navigation,
  backgroundColor,
) {
  let getRenderBackImage;
  _require = route;
  const obj = {
    headerShown: true,
    header(arg0) {
      const merged = Object.assign(arg0);
      let shouldHandleSafeArea;
      if (backgroundColor != null) {
        shouldHandleSafeArea = backgroundColor.shouldHandleSafeArea;
      }
      return <closure_8 shouldHandleSafeArea={shouldHandleSafeArea} />;
    },
    headerLeft: getRenderBackImage(navigation, { badgeCutoutColor: backgroundColor }),
    headerTitle() {
      const intl = intl2.intl;
      return <closure_7 channelId={route.params.channelId} title={intl.string(intl2.t.T3WBRp)} />;
    },
  };
  backgroundColor = undefined;
  getRenderBackImage = require("HeaderShared").getRenderBackImage;
  require("HeaderShared");
  if (backgroundColor != null) {
    backgroundColor = backgroundColor.backgroundColor;
  }
  return obj;
};
export const conversationNavigatorFocusHeaderOptions = function conversationNavigatorFocusHeaderOptions(
  route,
  navigation,
  backgroundColor,
) {
  let getRenderBackImage;
  _require = route;
  const obj = {
    headerShown: true,
    header(arg0) {
      const merged = Object.assign(arg0);
      let shouldHandleSafeArea;
      if (backgroundColor != null) {
        shouldHandleSafeArea = backgroundColor.shouldHandleSafeArea;
      }
      return <closure_8 shouldHandleSafeArea={shouldHandleSafeArea} />;
    },
    headerLeft: getRenderBackImage(navigation, { badgeCutoutColor: backgroundColor }),
    headerTitle() {
      let tmp2 = null;
      if (null != route.params) {
        tmp2 = <closure_7 channelId={route.params.channelId} title={route.params.title} hasRightAction />;
      }
      return tmp2;
    },
    headerRight() {
      let tmp2 = null;
      if (null != route.params) {
        tmp2 = jsx(ConversationNavigatorMoreMenuDefault, {
          channelId: route.params.channelId,
          conversationId: route.params.conversationId,
        });
      }
      return tmp2;
    },
  };
  backgroundColor = undefined;
  getRenderBackImage = require("HeaderShared").getRenderBackImage;
  require("HeaderShared");
  if (backgroundColor != null) {
    backgroundColor = backgroundColor.backgroundColor;
  }
  return obj;
};
