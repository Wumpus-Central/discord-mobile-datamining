// === Module 11365: AppLauncherChannelOption ===

// Module 11365 (AppLauncherChannelOption)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx");

export default function AppLauncherChannelOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onChannelPress } = option);
  ({ onActionSheetDismiss: closure_3, channel: closure_4, onPress: closure_5 } = option);
  ({ style, autoFocus, hasError } = option);
  let tmp = callback(React.useState(() => {
    let channelId = null;
    if (null != closure_1) {
      channelId = null;
      if ("channelMention" === closure_1.type) {
        channelId = closure_1.channelId;
      }
    }
    return channelId;
  }), 2);
  const first = tmp[0];
  closure_7 = tmp[1];
  let obj = option(onChannelPress[4]);
  const items = [closure_5];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getChannel(first), items1);
  const items2 = [onChannelPress, first, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      callback(null);
      onChannelPress({ channel: null });
    }
  }, items2);
  obj = { style, option, hasError, selected: null != stateFromStores, selectedItemName: null, leading: null, onPress: null, autoFocus: null };
  let tmp10;
  const tmp3 = option;
  const tmp4 = onChannelPress;
  const tmp7 = importDefault(onChannelPress[5])(stateFromStores);
  if (null != stateFromStores) {
    tmp10 = tmp7;
  }
  obj[4] = tmp10;
  obj[5] = first(tmp3(tmp4[7]).ChannelIcon, { channel: stateFromStores });
  obj[6] = function onPress() {
    if (closure_5 != null) {
      tmp();
    }
    importDefault(onChannelPress[8]);
    const obj = {
      option,
      channel: closure_4,
      onChannelPress(channel) {
        channel = channel.channel;
        let id;
        if (channel != null) {
          id = channel.id;
        }
        callback(id);
        callback({ channel });
      },
      onActionSheetDismiss: closure_3
    };
    obj.openLazy(option(onChannelPress[10])(onChannelPress[9], onChannelPress.paths), option(onChannelPress[7]).APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY, obj);
  };
  obj[7] = autoFocus;
  return first(importDefault(onChannelPress[6]), obj);
};