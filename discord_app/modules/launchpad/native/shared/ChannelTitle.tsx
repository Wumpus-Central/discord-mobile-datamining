// discord_app/modules/launchpad/native/shared/ChannelTitle.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = {
  muted: nativeDefault.colors.TEXT_MUTED,
  normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT,
  unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT,
};
let closure_6 = createStyles.createStyleProperties(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let connected;
        let first;
        let muted;
        let resolvedUnreadSetting;
        let title;
        let tmp9;
        let unread;
        const obj = react2;
        const cResult = obj.c(6);
        ({ title, unread } = arg0);
        ({ muted, resolvedUnreadSetting, connected } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp6 = getLayoutStylesDefault();
          cResult[0] = tmp6;
          first = tmp6;
        } else {
          first = cResult[0];
        }
        const tmp7 = closure_6();
        let unreadOrConnected = tmp7.normal;
        if (muted) {
          unreadOrConnected = tmp7.muted;
        } else {
          if (unread) {
            unread = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
          }
          if (!unread) {
            unread = connected;
          }
          if (unread) {
            unreadOrConnected = tmp7.unreadOrConnected;
          }
        }
        if (cResult[1] !== unreadOrConnected) {
          const obj2 = { color: unreadOrConnected, paddingRight: 4, flexShrink: 1 };
          cResult[1] = unreadOrConnected;
          cResult[2] = obj2;
          tmp9 = obj2;
        } else {
          tmp9 = cResult[2];
        }
        if (title == null) {
          title = "";
        }
        if (cResult[3] === tmp9) {
          let tmp10;
          if (cResult[4] === title) {
            tmp10 = cResult[5];
          }
          return tmp10;
        }
        const tmp11 = jsx(Text_Text.Text, {
          variant: first.channelName.text.variant,
          lineClamp: 1,
          maxFontSizeMultiplier: 1.75,
          style: tmp9,
          children: title,
        });
        cResult[3] = tmp9;
        cResult[4] = title;
        cResult[5] = tmp11;
        tmp10 = tmp11;
      }
    : (unread) => {
        let muted;
        let title;
        ({ title, muted } = unread);
        unread = unread.unread;
        const resolvedUnreadSetting = unread.resolvedUnreadSetting;
        const connected = unread.connected;
        const tmp = unread(resolvedUnreadSetting[7])();
        const tmp2 = closure_6();
        const normal = tmp2;
        const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
        const memo = connected.useMemo(() => {
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
        const Text = muted(resolvedUnreadSetting[8]).Text;
        if (title == null) {
          title = "";
        }
        return (
          <Text variant={tmp.channelName.text.variant} lineClamp={1} maxFontSizeMultiplier={1.75} style={memo}>
            {title}
          </Text>
        );
      },
);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelTitle.tsx");

export default memoResult;
