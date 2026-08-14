// discord_app/modules/channel_list_v2/native/items/UnknownChannel.tsx
import importAllResult from "noop";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/08675_registerAsset.js";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { computeChannelName } from "../../../channel/useChannelName.tsx";
import { getChannelMode } from "../../../guild_sidebar/native/ChannelItem.tsx";
import { dispatcher } from "../../../toast/native/ToastActionCreators.tsx";

const require = arg1;
function handlePress() {
  let obj = dispatcher;
  obj = { key: "UNKNOWN_CHANNEL_UPDATE_DISCORD", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["/ZjyYE"]);
  obj[2] = registerAsset;
  obj.open(obj);
}
let c3 = importAllResult;
let obj = { container: null };
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = callback();
  callback = importAllResult.useCallback(() => {
    const result = channel(outer1_2[10]).openChannelLongPressActionSheet(channel.id);
  }, items);
  const obj = { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
  const tmp2 = computeChannelName(channel);
  const intl = channel(1236).intl;
  obj[4] = intl.formatToPlainString(channel(1236).t.yjQ9P8, { channelName: tmp2 });
  obj[5] = { selected };
  obj[6] = channel;
  obj[7] = selected;
  obj[8] = UnreadSetting.ONLY_MENTIONS;
  return jsx(getChannelMode, { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null });
});
let result = require("ReadStateTypes").fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;