// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ReadStateConstants from "../../../../read_states/ReadStateConstants.tsx";
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = {
  muted: nativeDefault.colors.TEXT_MUTED,
  normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT,
  unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT,
};
let closure_5 = createStyles.createStyleProperties(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let connected;
        let layout;
        let muted;
        let resolvedUnreadSetting;
        let title;
        let tmp4;
        let tmp8;
        let unread;
        const obj = react2;
        const cResult = obj.c(8);
        ({ title, unread, layout, muted, resolvedUnreadSetting, connected } = arg0);
        if (cResult[0] !== layout) {
          const tmpResult = ChannelListLayout;
          const layoutStyles = tmpResult.getLayoutStyles(layout);
          cResult[0] = layout;
          cResult[1] = layoutStyles;
          tmp4 = layoutStyles;
        } else {
          tmp4 = cResult[1];
        }
        const tmp6 = closure_5();
        let unreadOrConnected = tmp6.normal;
        if (muted) {
          unreadOrConnected = tmp6.muted;
        } else {
          if (unread) {
            unread = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
          }
          if (!unread) {
            unread = connected;
          }
          if (unread) {
            unreadOrConnected = tmp6.unreadOrConnected;
          }
        }
        if (cResult[2] !== unreadOrConnected) {
          const obj2 = { color: unreadOrConnected, paddingRight: 4, flexShrink: 1 };
          cResult[2] = unreadOrConnected;
          cResult[3] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[3];
        }
        if (title == null) {
          title = "";
        }
        if (cResult[4] === tmp4.channelName.text.variant) {
          if (cResult[5] === tmp8) {
            let tmp9;
            if (cResult[6] === title) {
              tmp9 = cResult[7];
            }
            return tmp9;
          }
        }
        const tmp10 = jsx(Text_Text.Text, {
          variant: tmp4.channelName.text.variant,
          lineClamp: 1,
          maxFontSizeMultiplier: 1.75,
          style: tmp8,
          children: title,
        });
        cResult[4] = tmp4.channelName.text.variant;
        cResult[5] = tmp8;
        cResult[6] = title;
        cResult[7] = tmp10;
        tmp9 = tmp10;
      }
    : (unread) => {
        let muted;
        let title;
        ({ title, muted } = unread);
        unread = unread.unread;
        const resolvedUnreadSetting = unread.resolvedUnreadSetting;
        const connected = unread.connected;
        const layout = unread.layout;
        const obj = muted(unread[7]);
        const layoutStyles = obj.getLayoutStyles(layout);
        const tmp2 = closure_5();
        const normal = tmp2;
        const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
        const memo = resolvedUnreadSetting.useMemo(() => {
          let color = normal.normal;
          if (muted) {
            color = normal.muted;
          } else {
            const tmp3 = (unread && resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) || connected;
            if (tmp3) {
              color = normal.unreadOrConnected;
            }
          }
          return { color, paddingRight: 4, flexShrink: 1 };
        }, items);
        const obj2 = {
          variant: layoutStyles.channelName.text.variant,
          lineClamp: 1,
          maxFontSizeMultiplier: 1.75,
          style: memo,
          children: title,
        };
        const Text = muted(unread[8]).Text;
        const tmp4 = normal;
        if (title == null) {
          title = "";
        }
        return tmp4(Text, obj2);
      },
);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx",
);

export default memoResult;
