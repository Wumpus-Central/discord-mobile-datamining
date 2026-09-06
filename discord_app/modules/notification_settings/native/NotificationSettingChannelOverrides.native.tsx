// === Module 17792: NotificationSettingChannelOverrides ===

// Module 17792 (NotificationSettingChannelOverrides)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7112 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7111 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const isGuildReadableType = fn(1961).isGuildReadableType;
const Constants = fn(1074);
({ ChannelTypes: c10, NotificationSettingsSections: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let obj = { container: null, searchContainer: null };
obj = { marginHorizontal: nativeDefault.space.PX_8, flex: 1 };
obj.container = obj;
const createStyles = { paddingVertical: nativeDefault.space.PX_16 };
obj.searchContainer = createStyles;
let closure_14 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx");

export default noop.memo(function NotificationSettingChannelOverrides(arg0) {
  ({ guildId: require, navigation } = arg0);
  let stateFromStores;
  let first;
  let channels;
  let tmp = closure_14();
  let obj = require("initialize");
  let items = [GuildCategoryStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildCategoryStore.getCategories(require));
  const tmp6 = first(channels.useState(""), 2);
  first = tmp6[0];
  const items1 = [stateFromStores, first];
  const memo = channels.useMemo(() => {
    const mapped = getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, (channel) => {
      channel = channel.channel;
      let tmp = isGuildReadableType(channel.type);
      if (!tmp) {
        let tmp3 = channel.type === constants.GUILD_CATEGORY;
        if (tmp3) {
          tmp3 = null != dependencyMap[channel.id];
        }
        if (tmp3) {
          tmp3 = dependencyMap[channel.id].length > 0;
        }
        tmp = tmp3;
      }
      if (tmp) {
        if ("" !== first) {
          if (null != first) {
            const obj = require("useChannelName");
            const formatted = require("useChannelName").computeChannelName(channel, UserStore, RelationshipStore).toLowerCase();
            const str3 = require("useChannelName").computeChannelName(channel, UserStore, RelationshipStore);
            return navigation(stateFromStores[15])(first.toLowerCase(), formatted);
          }
        }
        return tmp;
      } else {
        return false;
      }
    }).map((channel) => channel.channel);
    let obj = { channels: mapped, sections: null };
    const items = [mapped.length];
    obj.sections = items;
    return obj;
  }, items1);
  channels = memo.channels;
  const items2 = [channels, first];
  const effect = channels.useEffect(() => {
    if (null != first) {
      if ("" !== tmp) {
        if (channels.length > 0) {
          const intl2 = util.intl;
          const obj = { count: length };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.ZGVL3g, obj);
        } else {
          const intl = util.intl;
          formatToPlainStringResult = intl.string(util.t.f5cMAg);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items2);
  const items3 = [channels, navigation];
  const callback = channels.useCallback((arg0, arg1) => {
    const id = tmp;
    let obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
    obj = { IconComponent: require("utils/ChannelUtils").getChannelIconComponent(channels[arg1]) };
    obj.icon = closure_1_12(require("TableRowIcon").TableRowIcon, obj);
    obj.start = 0 === arg1;
    obj.end = arg1 === channels.length - 1;
    const obj3 = require("utils/ChannelUtils");
    obj.label = require("useChannelName").computeChannelName(channels[arg1], UserStore, RelationshipStore);
    obj.onPress = function onPress() {
      navigation.push(constants.CHANNEL_OVERRIDE, { channelId: id.id });
    };
    return closure_1_12(require("TableRow").TableRow, obj);
  }, items3);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.searchContainer, children: null };
  const tmp10 = navigation(stateFromStores[18])();
  const obj1 = { placeholder: null, onChange: null };
  let intl = require("util").intl;
  obj1.placeholder = intl.string(require("util").t["5h0QOP"]);
  obj1.onChange = tmp6[1];
  obj.children = closure_12(require("SearchField").SearchField, obj1);
  const items4 = [closure_12(View, obj), ];
  if (0 === channels.length) {
    const obj2 = { Illustration: require("generated/NoResults").NoResults, title: null, body: null };
    let intl2 = require("util").intl;
    obj2.title = intl2.string(require("util").t.wM7uRI);
    const intl3 = require("util").intl;
    obj2.body = intl3.string(require("util").t.f5cMAg);
    let tmp15Result = closure_12(require("native").EmptyState, obj2);
  } else {
    let obj3 = { sections: memo.sections, renderItem: callback, itemSize: tmp10, insetEnd: navigation(stateFromStores[12])().insets.bottom, estimatedListSize: "windowSize", placeholderConfig: tmp12, wrapChildren: true };
    tmp15Result = closure_12(navigation(tmp3[26]), obj3);
  }
  items4[1] = tmp15Result;
  obj.children = items4;
  return closure_13(View, obj);
});