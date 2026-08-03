// === Module 11488: AppLauncherChannelOption ===

// Module 11488 (AppLauncherChannelOption)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx");

export default function AppLauncherChannelOption(option) {
  let autoFocus;
  let _slicedToArray;
  let noop;
  let ensureGuildLoaded;
  let hasError;
  let importDefault;
  let onChannelPress;
  let style;
  option = option.option;
  ({ initialValue: importDefault, onChannelPress } = option);
  ({ onActionSheetDismiss: _slicedToArray, channel: noop, onPress: ensureGuildLoaded } = option);
  let first;
  let closure_7;
  let stateFromStores;
  ({ style, autoFocus, hasError } = option);
  let tmp = callback(React.useState(() => {
    let channelId = null;
    if (null != closure_1) {
      channelId = null;
      if ("channelMention" === tmp.type) {
        channelId = tmp.channelId;
      }
    }
    return channelId;
  }), 2);
  first = tmp[0];
  closure_7 = tmp[1];
  let obj = option(onChannelPress[4]);
  const items = [ensureGuildLoaded];
  const items1 = [first];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(first), items1);
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
    if (ensureGuildLoaded != null) {
      tmp();
    }
    let obj = outer1_1(onChannelPress[8]);
    obj = {
      option,
      channel: noop,
      onChannelPress(channel) {
        channel = channel.channel;
        let id;
        if (channel != null) {
          id = channel.id;
        }
        closure_7(id);
        callback({ channel });
      },
      onActionSheetDismiss: _slicedToArray
    };
    obj.openLazy(option(onChannelPress[10])(onChannelPress[9], onChannelPress.paths), option(onChannelPress[7]).APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY, obj);
  };
  obj[7] = autoFocus;
  return first(importDefault(onChannelPress[6]), obj);
};