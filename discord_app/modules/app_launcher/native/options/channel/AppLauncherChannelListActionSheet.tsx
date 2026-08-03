import _slicedToArray from "_slicedToArray";
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
class ChannelIcon {
  constructor(arg0) {
    ({ channel, size } = global);
    if (size === undefined) {
      size = "sm";
    }
    num = global.wrapperSize;
    if (num === undefined) {
      num = 32;
    }
    tmp2 = closure_0;
    tmp3 = closure_2;
    tmp = jsx();
    TextIcon = require("TextIcon").TextIcon;
    if (null != channel) {
      tmp4 = createGuildRecordFromRust;
      guild = createGuildRecordFromRust.getGuild(channel.getGuildId());
      tmp2Result = require("getChannelIcon");
      TextIcon2 = tmp2Result.getChannelIconComponentWithGuild(channel, guild);
      if (TextIcon2 == null) {
        TextIcon2 = require("TextIcon").TextIcon;
      }
      TextIcon = TextIcon2;
    }
    obj = { icon: null, wrapperStyle: null, wrapperSize: null };
    tmp6 = require("styles");
    obj[0] = jsx(TextIcon, { size, color: "interactive-text-default" });
    obj[1] = tmp.channelIconWrapper;
    obj[2] = num;
    return jsx(tmp6, obj);
  }
}
function ChannelListItem(arg0) {
  let channel;
  let index;
  let onPress;
  let totalCount;
  ({ channel, index } = arg0);
  ({ totalCount, onPress } = arg0);
  const obj = { onPress, label: null, icon: null, start: null, end: null };
  obj[1] = callback(require(4251) /* Text */.Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: importDefault(4446)(channel) });
  obj[2] = callback(ChannelIcon, { channel });
  obj[3] = 0 === index;
  obj[4] = index === totalCount - 1;
  return callback(require(5286) /* TableRowInner */.TableRow, obj, channel.id);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const AppLauncherChannelListActionSheet = "AppLauncherChannelListActionSheet";
createCacheKey = { channelIconWrapper: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx");

export default function AppLauncherChannelListActionSheet(channel) {
  let onActionSheetDismiss;
  let require;
  ({ onChannelPress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  let first;
  let createGuildRecordFromRust;
  let ref;
  let first1;
  let closure_8;
  const tmp = option(first.useState(""), 2);
  first = tmp[0];
  createGuildRecordFromRust = tmp[1];
  ref = first.useRef(null);
  const tmp4 = option(first.useState([]), 2);
  first1 = tmp4[0];
  closure_8 = tmp4[1];
  const items = [first, channel, option];
  const effect = first.useEffect(() => {
    let obj = onActionSheetDismiss(channel[9]);
    obj = { query: first, channel, channelTypes: option.channelTypes, limit: null, allowSnowflake: true };
    callback2(obj.queryApplicationCommandChannelResults(obj).channels);
  }, items);
  let obj = { onDismiss: onActionSheetDismiss, option, children: null };
  obj = {
    onChange(str) {
      callback(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  const items1 = [ref(require(channel[12]).AppLauncherListSearchBar, obj), ];
  if (0 === first1.length) {
    let tmp9Result = tmp9(tmp7(tmp8[12]).AppLauncherListEmptyState, {});
  } else {
    obj = { ref: null, data: null, renderItem: null };
    obj[0] = ref;
    obj[1] = first1;
    obj[2] = function renderItem(index) {
      const item = index.item;
      return ref(outer1_11, {
        channel: item,
        index: index.index,
        totalCount: first1.length,
        onPress() {
          item({ channel: item });
          outer1_1(outer1_2[10]).hideActionSheet(outer1_8);
          outer1_1();
        }
      });
    };
    tmp9Result = tmp9(tmp7(tmp8[12]).AppLauncherList, obj);
  }
  items1[1] = tmp9Result;
  obj[2] = items1;
  return first1(require(channel[11]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY = "AppLauncherChannelListActionSheet";
export { ChannelIcon };