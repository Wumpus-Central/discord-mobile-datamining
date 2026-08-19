// discord_app/modules/launchpad/native/shared/ChannelTitle.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let c3 = importAllResult;
let closure_6 = createCacheKey.createStyleProperties({ muted: ThemesDefault.colors.TEXT_MUTED, normal: ThemesDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: ThemesDefault.colors.REDESIGN_CHANNEL_NAME_TEXT });
const memoResult = importAllResult.memo(function ChannelTitle(unread) {
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  let tmp2 = callback();
  closure_4 = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = connected.useMemo(() => {
    let color = closure_4.normal;
    if (muted) {
      color = closure_4.muted;
    } else {
      let tmp2 = unread;
      if (unread) {
        tmp2 = resolvedUnreadSetting === closure_4.ALL_MESSAGES;
      }
      if (!tmp2) {
        tmp2 = connected;
      }
      if (tmp2) {
        color = closure_4.unreadOrConnected;
      }
    }
    return { color, paddingRight: 4, flexShrink: 1 };
  }, items);
  const obj = { variant: unread(resolvedUnreadSetting[5])().channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: null };
  if (title == null) {
    title = "";
  }
  obj[4] = title;
  return jsx(muted(resolvedUnreadSetting[6]).Text, { variant: unread(resolvedUnreadSetting[5])().channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: null });
});
const result = require("obj132").fileFinishedImporting("modules/launchpad/native/shared/ChannelTitle.tsx");

export default memoResult;