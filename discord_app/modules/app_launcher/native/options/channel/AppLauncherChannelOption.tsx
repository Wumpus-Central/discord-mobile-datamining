// === Module 11830: AppLauncherChannelOption ===

// Module 11830 (AppLauncherChannelOption)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import AppLauncherChannelListActionSheet from "AppLauncherChannelListActionSheet" /* 11831 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx");

export default function AppLauncherChannelOption(option) {
  let autoFocus;
  let closure_7;
  let first;
  let hasError;
  let onActionSheetDismiss;
  let onChannelPress;
  let style;
  let tmp10;
  option = option.option;
  ({ initialValue: importDefault, onChannelPress } = option);
  ({ onActionSheetDismiss: _slicedToArray, channel: react, onPress: ChannelStore } = option);
  first = undefined;
  closure_7 = undefined;
  ({ style, autoFocus, hasError } = option);
  [first, closure_7] = react.useState(() => {
    let channelId = null;
    if (null != importDefault) {
      channelId = null;
      if ("channelMention" === importDefault.type) {
        channelId = importDefault.channelId;
      }
    }
    return channelId;
  });
  const tmp3 = option;
  let tmp4 = onChannelPress;
  let obj = option(onChannelPress[4]);
  const items = [ChannelStore];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(first), items1);
  const items2 = [onChannelPress, first, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = null != first && null == stateFromStores;
    if (tmp) {
      closure_7(null);
      onChannelPress({ channel: null });
    }
  }, items2);
  const obj2 = {
    style,
    option,
    hasError,
    selected: null != stateFromStores,
    selectedItemName: tmp10,
    leading: first(tmp3(tmp4[7]).ChannelIcon, { channel: stateFromStores }),
    onPress() {
      if (ChannelStore != null) {
        tmp();
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = {
        option,
        channel: react,
        onChannelPress(channel) {
          channel = channel.channel;
          let id;
          if (channel != null) {
            id = channel.id;
          }
          closure_1_7(id);
          onChannelPress({ channel });
        },
        onActionSheetDismiss: _slicedToArray
      };
      const tmp4 = asyncRequire(11831, dependencyMap.paths);
      openLazy(tmp4, AppLauncherChannelListActionSheet.APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY, obj);
    },
    autoFocus
  };
  tmp10 = undefined;
  const tmp7 = require("useChannelName")(stateFromStores);
  const tmp9 = require("AppLauncherSelectOptionFormRow");
  if (null != stateFromStores) {
    tmp10 = tmp7;
  }
  return first(tmp9, obj2);
};