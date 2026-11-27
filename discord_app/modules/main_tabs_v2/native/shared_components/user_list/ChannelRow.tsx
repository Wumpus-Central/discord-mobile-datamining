// === Module 11406: ChannelRow ===

// Module 11406 (ChannelRow)
import nativeDefault from "native" /* 575 */;
import _modDef2169 from "module_2169" /* 2169 */;
import DateUtils from "DateUtils" /* 4865 */;
import shared_getNodeText from "shared/getNodeText" /* 5209 */;
import Text_Text from "Text/Text" /* 5634 */;
import useChannelName from "useChannelName" /* 5659 */;
import TextIcon2 from "TextIcon" /* 7146 */;
import ForumIcon from "ForumIcon" /* 7154 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 8588 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11407 */;
import GuildIconWithChannelType from "GuildIconWithChannelType" /* 11573 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import ReadStateStore from "ReadStateStore" /* 6932 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;

require = fn;
const View = fn(17).View;
let UserRowModes = fn(8945).UserRowModes;
const ReadStateTypes = fn(6168).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5043);
let obj = { guildIcon: { flexShrink: 0, flexGrow: 0 }, subLabel: { display: "flex", flexDirection: "row", alignItems: "center" }, subLabelIcon: { width: 12, height: 12, marginRight: 2 }, subLabelSeparator: { marginHorizontal: nativeDefault.space.PX_4 }, threadName: { flexShrink: 1 } };
let closure_15 = createStyles.createStyles(obj);
let obj3 = { marginHorizontal: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx");

export default noop.memo(function ChannelRow(channel) {
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
    NONE = UserRowModes.NONE;
  }
  let flag = channel.selected;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = channel.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = channel.onPress;
  const onLongPress = channel.onLongPress;
  const trailing = channel.trailing;
  const subLabel = channel.subLabel;
  const label = channel.label;
  const accessibilityLabel = channel.accessibilityLabel;
  const merged = Object.assign(channel, Object.assign({ channel: 0, mode: 0, selected: 0, disabled: 0, onPress: 0, onLongPress: 0, trailing: 0, subLabel: 0, label: 0, accessibilityLabel: 0 }));
  let memo2;
  let tmp3 = closure_15();
  closure_8 = tmp3;
  items = [label];
  const stateFromStores = channel(onPress[12]).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const tmp7 = flag2(onPress[13])(channel);
  UserRowModes = tmp7;
  let obj = channel(onPress[12]);
  let items1 = [subLabel, stateFromStores, closure_8];
  const stateFromStores1 = channel(onPress[12]).useStateFromStores(items1, () => {
    channel = ChannelStore.getChannel(channel.parent_id);
    let channelName = null;
    if (null != channel) {
      const obj = useChannelName;
      channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, false);
    }
    return channelName;
  });
  let obj2 = channel(onPress[12]);
  const items2 = [accessibilityLabel];
  const stateFromStores2 = channel(onPress[12]).useStateFromStores(items2, () => ReadStateStore.lastMessageTimestamp(channel.id, ReadStateTypes.CHANNEL));
  const items3 = [channel, onPress];
  const items4 = [channel, onLongPress];
  const callback = onLongPress.useCallback(() => {
    if (onPress != null) {
      tmp(channel);
    }
  }, items3);
  const items5 = [channel, stateFromStores, tmp3.guildIcon];
  const callback1 = onLongPress.useCallback(() => {
    if (null == onLongPress) {
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
    } else {
      tmp(channel);
    }
  }, items4);
  const items6 = [tmp7, label];
  const memo = onLongPress.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { "aria-label": "", style: closure_8.guildIcon, guild: tmp, channel, size: GuildIconWithChannelType.GuildIconWithChannelTypeSizes.SMALL_32 };
      tmp2 = application_id(GuildIconWithChannelType.GuildIconWithChannelType, obj);
    }
    return tmp2;
  }, items5);
  const items7 = [channel, , , , , , , , ];
  let name;
  const memo1 = onLongPress.useMemo(() => {
    let tmp = label;
    if (undefined === label) {
      tmp = closure_10;
    }
    return tmp;
  }, items6);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items7[1] = name;
  items7[2] = stateFromStores2;
  items7[3] = stateFromStores1;
  ({ subLabel: arr8[4], subLabelIcon: arr8[5], subLabelSeparator: arr8[6], threadName: arr8[7] } = tmp3);
  items7[8] = subLabel;
  memo2 = onLongPress.useMemo(() => {
    if (undefined !== subLabel) {
      return subLabel;
    } else {
      if (!channel.isThread()) {
        if (!channel.isForumPost()) {
          let name;
          if (stateFromStores != null) {
            name = stateFromStores.name;
          }
          return name;
        }
      }
      if (channel.isForumPost()) {
        let TextIcon = ForumIcon.ForumIcon;
      } else {
        TextIcon = TextIcon2.TextIcon;
      }
      const obj = { style: closure_8.subLabel, children: null };
      const obj2 = { color: nativeDefault.colors.TEXT_SUBTLE, style: closure_8.subLabelIcon };
      items = [application_id(TextIcon, obj2), , ];
      const obj3 = { style: closure_8.threadName, variant: "body-xs/medium", color: "text-subtle", lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores1 };
      items[1] = application_id(Text_Text.Text, obj3);
      let tmp5Result = null;
      if (null != stateFromStores2) {
        const obj4 = { children: null };
        const obj5 = { style: closure_8.subLabelSeparator, variant: "body-xs/medium", color: "text-subtle", children: "\u2022" };
        const items1 = [application_id(Text_Text.Text, obj5), ];
        const obj6 = { variant: "body-xs/medium", color: "text-subtle", children: DateUtils.calendarFormatCompact(_modDef2169(tmp14)) };
        items1[1] = application_id(Text_Text.Text, obj6);
        obj4.children = items1;
        tmp5Result = gesture(state, obj4);
      }
      items[2] = tmp5Result;
      obj.children = items;
      return gesture(View, obj);
    }
  }, items7);
  const items8 = [accessibilityLabel, channel, label, memo2, trailing];
  const items9 = [trailing, flag2];
  const memo3 = obj4.useMemo(() => {
    let tmp = accessibilityLabel;
    if (undefined === accessibilityLabel) {
      let joined;
      if (undefined === label) {
        if (null == trailing) {
          const obj = { channel };
          items = [getChannelA11yLabelDefault(obj), shared_getNodeText.getNodeText(memo2)];
          const found = items.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              tmp = "" !== item;
            }
            return tmp;
          });
          joined = found.join(", ");
        }
      }
      tmp = joined;
    }
    return tmp;
  }, items8);
  const memo4 = obj4.useMemo(() => {
    let tmp = trailing;
    if (null == trailing) {
      let tmp3;
      if (flag2) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }, items9);
  let obj5 = {};
  let obj3 = channel(onPress[12]);
  const merged1 = Object.assign(merged);
  obj5.disabled = flag2;
  obj5.icon = memo;
  obj5.onPress = callback;
  obj5.onLongPress = callback1;
  obj5.label = stateFromStores2(channel(onPress[18]).Text, { lineClamp: 1, variant: "body-md/semibold", color: "mobile-text-heading-primary", children: memo1 });
  obj5.subLabel = memo2;
  obj5.accessibilityLabel = memo3;
  if (NONE === UserRowModes.TOGGLE) {
    let obj6 = {};
    const merged2 = Object.assign(obj5);
    obj6.height = "100%";
    obj6.checked = flag;
    let tmp18Result = tmp18(tmp4(tmp5[23]).TableCheckboxRow, obj6);
  } else {
    let obj7 = {};
    const merged3 = Object.assign(obj5);
    obj7.height = "100%";
    obj7.trailing = memo4;
    tmp18Result = tmp18(tmp4(tmp5[24]).TableRow, obj7);
  }
  return tmp18Result;
});