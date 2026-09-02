// === Module 11981: ChannelIcon ===

// Module 11981 (ChannelIcon)
import ThemesDefault from "Themes" /* 709 */;
import Text from "Text" /* 4474 */;
import computeChannelNameDefault from "computeChannelName" /* 4674 */;
import TextIcon3 from "TextIcon" /* 5033 */;
import TableRowInner from "TableRowInner" /* 5607 */;
import stylesDefault from "styles" /* 11972 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "createGuildRecordFromRust" /* 1908 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
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
    tmp = closure_9();
    TextIcon = require("TextIcon").TextIcon;
    if (null != channel) {
      tmp4 = closure_5;
      guild = closure_5.getGuild(channel.getGuildId());
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
  ({ channel, index } = arg0);
  ({ totalCount, onPress } = arg0);
  const tmp = computeChannelNameDefault(channel);
  return callback(TableRowInner.TableRow, { onPress, label: callback(Text.Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: computeChannelNameDefault(channel) }), icon: callback(ChannelIcon, { channel }), start: 0 === index, end: index === totalCount - 1 }, channel.id);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const AppLauncherChannelListActionSheet = "AppLauncherChannelListActionSheet";
createCacheKey = { channelIconWrapper: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx");

export default function AppLauncherChannelListActionSheet(channel) {
  ({ onChannelPress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  let first;
  closure_5 = undefined;
  let ref;
  let first1;
  closure_8 = undefined;
  const tmp = option(first.useState(""), 2);
  first = tmp[0];
  closure_5 = tmp[1];
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
      return ref(closure_1_11, {
        channel: item,
        index: index.index,
        totalCount: first1.length,
        onPress() {
          item({ channel: item });
          closure_1_1(closure_1_2[10]).hideActionSheet(closure_1_8);
          closure_1_1();
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