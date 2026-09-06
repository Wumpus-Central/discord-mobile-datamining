// === Module 12191: AppLauncherChannelListActionSheet ===

// Module 12191 (AppLauncherChannelListActionSheet)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import TextIcon3 from "TextIcon" /* 5080 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5442 */;
import TableRow from "TableRow" /* 5605 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 12179 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
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
    TextIcon = closure_0(closure_2[6]).TextIcon;
    if (null != channel) {
      tmp4 = closure_5;
      guild = closure_5.getGuild(channel.getGuildId());
      tmp2Result = tmp2(tmp3[7]);
      TextIcon2 = tmp2Result.getChannelIconComponentWithGuild(channel, guild);
      if (TextIcon2 == null) {
        TextIcon2 = tmp2(tmp3[6]).TextIcon;
      }
      TextIcon = TextIcon2;
    }
    obj = { icon: null, wrapperStyle: null, wrapperSize: null };
    tmp6 = closure_1(tmp3[8]);
    obj.icon = jsx(TextIcon, { size, color: "interactive-text-default" });
    obj.wrapperStyle = tmp.channelIconWrapper;
    obj.wrapperSize = num;
    return jsx(tmp6, obj);
  }
}
function ChannelListItem(arg0) {
  ({ channel, index } = arg0);
  ({ totalCount, onPress } = arg0);
  const tmp = useChannelNameDefault(channel);
  return timestampProducer(TableRow.TableRow, { onPress, label: timestampProducer(Text_Text.Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: useChannelNameDefault(channel) }), icon: timestampProducer(ChannelIcon, { channel }), start: 0 === index, end: index === totalCount - 1 }, channel.id);
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const AppLauncherChannelListActionSheet = "AppLauncherChannelListActionSheet";
fn(4560);
let createStyles = { channelIconWrapper: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.channelIconWrapper = createStyles;
const React7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx");

export default function AppLauncherChannelListActionSheet(channel) {
  ({ onChannelPress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  let query;
  const tmp = option(query.useState(""), 2);
  query = tmp[0];
  closure_5 = tmp[1];
  const ref = query.useRef(null);
  const tmp4 = option(query.useState([]), 2);
  const first1 = tmp4[0];
  closure_8 = tmp4[1];
  const items = [query, channel, option];
  const effect = query.useEffect(() => {
    const obj = { query, channel, channelTypes: option.channelTypes, limit: null, allowSnowflake: true };
    closure_8(obj.queryApplicationCommandChannelResults(obj).channels);
  }, items);
  let obj = { onDismiss: onActionSheetDismiss, option, children: null };
  obj = {
    onChange(str) {
      closure_5(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  const items1 = [ref(require("AppLauncherList").AppLauncherListSearchBar, obj), ];
  if (0 === first1.length) {
    let tmp9Result = tmp9(tmp7(tmp8[12]).AppLauncherListEmptyState, {});
  } else {
    obj = {
      ref,
      data: first1,
      renderItem(index) {
          const item = index.item;
          return ref(ChannelListItem, {
            channel: item,
            index: index.index,
            totalCount: first1.length,
            onPress() {
              require({ channel: item });
              closure_1_1(channel[10]).hideActionSheet(closure_1_8);
              onActionSheetDismiss();
            }
          });
        }
    };
    tmp9Result = tmp9(tmp7(tmp8[12]).AppLauncherList, obj);
  }
  items1[1] = tmp9Result;
  obj.children = items1;
  return first1(require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY = "AppLauncherChannelListActionSheet";
export { ChannelIcon };