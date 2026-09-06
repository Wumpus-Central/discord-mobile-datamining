// === Module 12190: AppLauncherChannelOption ===

// Module 12190 (AppLauncherChannelOption)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AppLauncherChannelListActionSheet from "AppLauncherChannelListActionSheet" /* 12191 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx");

export default function AppLauncherChannelOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onChannelPress } = option);
  ({ onActionSheetDismiss: _slicedToArray, channel: noop, onPress: ChannelStore } = option);
  ({ style, autoFocus, hasError } = option);
  let tmp = _slicedToArray(noop.useState(() => {
    let channelId = null;
    if (null != importDefault) {
      channelId = null;
      if ("channelMention" === tmp.type) {
        channelId = tmp.channelId;
      }
    }
    return channelId;
  }), 2);
  const first = tmp[0];
  closure_7 = tmp[1];
  let obj = option(onChannelPress[4]);
  const items = [ChannelStore];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(first), items1);
  const items2 = [onChannelPress, first, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      closure_7(null);
      onChannelPress({ channel: null });
    }
  }, items2);
  obj = { style, option, hasError, selected: null != stateFromStores, selectedItemName: null, leading: null, onPress: null, autoFocus: null };
  let tmp10;
  const tmp3 = option;
  const tmp4 = onChannelPress;
  const tmp7 = require("useChannelName")(stateFromStores);
  if (null != stateFromStores) {
    tmp10 = tmp7;
  }
  obj.selectedItemName = tmp10;
  obj.leading = first(tmp3(tmp4[7]).ChannelIcon, { channel: stateFromStores });
  obj.onPress = function onPress() {
    if (ChannelStore != null) {
      tmp();
    }
    const obj = {
      option,
      channel,
      onChannelPress(channel) {
        channel = channel.channel;
        let id;
        if (channel != null) {
          id = channel.id;
        }
        closure_1_7(id);
        onChannelPress({ channel });
      },
      onActionSheetDismiss
    };
    obj.openLazy(asyncRequireImpl(12191, dependencyMap.paths), AppLauncherChannelListActionSheet.APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY, obj);
  };
  obj.autoFocus = autoFocus;
  return first(require("AppLauncherSelectOptionFormRow"), obj);
};