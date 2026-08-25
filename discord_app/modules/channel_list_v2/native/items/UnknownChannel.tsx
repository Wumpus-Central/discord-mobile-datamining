// discord_app/modules/channel_list_v2/native/items/UnknownChannel.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import dispatcherDefault from "../../../toast/native/ToastActionCreators.tsx";
import computeChannelNameDefault from "../../../channel/useChannelName.tsx";
import registerAssetDefault from "../../../../../_runtime/08759_registerAsset.js";
import getChannelModeDefault from "../../../guild_sidebar/native/ChannelItem.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function handlePress() {
  let obj = dispatcherDefault;
  obj = { key: "UNKNOWN_CHANNEL_UPDATE_DISCORD", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["/ZjyYE"]);
  obj[2] = registerAssetDefault;
  obj.open(obj);
}
let c3 = importAllResult;
let obj = { container: null };
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = callback();
  callback = importAllResult.useCallback(() => {
    const result = channel(closure_1_2[10]).openChannelLongPressActionSheet(channel.id);
  }, items);
  const obj = { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
  const tmp2 = computeChannelNameDefault(channel);
  const intl = channel(1236).intl;
  obj[4] = intl.formatToPlainString(channel(1236).t.yjQ9P8, { channelName: tmp2 });
  obj[5] = { selected };
  obj[6] = channel;
  obj[7] = selected;
  obj[8] = UnreadSetting.ONLY_MENTIONS;
  return jsx(getChannelModeDefault, { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null });
});
let result = require("set").fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;