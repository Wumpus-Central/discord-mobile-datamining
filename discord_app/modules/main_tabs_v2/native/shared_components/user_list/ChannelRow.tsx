// discord_app/modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4348 from "../../../../../../_runtime/metro/04348__.js";
import DateUtils from "../../../../../utils/DateUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import TextIcon2 from "../../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import ForumIcon from "../../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import openChannelLongPressActionSheet from "../../../../channel/native/openChannelLongPressActionSheet.tsx";
import GuildIconWithChannelType from "../../../../guild/native/GuildIconWithChannelType.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import ReadStateStore from "../../../../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const UserRowModes = fn(11121).UserRowModes;
const ReadStateTypes = fn(4938).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4756);
let obj = {
  guildIcon: { flexShrink: 0, flexGrow: 0 },
  subLabel: { display: "flex", flexDirection: "row", alignItems: "center" },
  subLabelIcon: { width: 12, height: 12, marginRight: 2 },
  subLabelSeparator: { marginHorizontal: nativeDefault.space.PX_4 },
  threadName: { flexShrink: 1 },
};
let closure_15 = createStyles.createStyles(obj);
let obj3 = { marginHorizontal: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx");

export default noop.memo(function ChannelRow(channel) {
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
    NONE = stateFromStores1.NONE;
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
  const merged = Object.assign(
    channel,
    Object.assign({
      channel: 0,
      mode: 0,
      selected: 0,
      disabled: 0,
      onPress: 0,
      onLongPress: 0,
      trailing: 0,
      subLabel: 0,
      label: 0,
    }),
  );
  let tmp3 = closure_15();
  closure_7 = tmp3;
  let items = [label];
  const stateFromStores = channel(onPress[12]).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const tmp7 = flag2(onPress[13])(channel);
  closure_9 = tmp7;
  let obj = channel(onPress[12]);
  let items1 = [subLabel, closure_9, stateFromStores];
  stateFromStores1 = channel(onPress[12]).useStateFromStores(items1, () => {
    channel = ChannelStore.getChannel(channel.parent_id);
    let channelName = null;
    if (null != channel) {
      const obj = useChannelName;
      channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, false);
    }
    return channelName;
  });
  let obj2 = channel(onPress[12]);
  const items2 = [closure_7];
  const stateFromStores2 = channel(onPress[12]).useStateFromStores(items2, () =>
    ReadStateStore.lastMessageTimestamp(channel.id, ReadStateTypes.CHANNEL),
  );
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
      const obj = {
        "aria-label": "",
        style: closure_7.guildIcon,
        guild: tmp,
        channel,
        size: GuildIconWithChannelType.GuildIconWithChannelTypeSizes.SMALL_32,
      };
      tmp2 = closure_2_12(GuildIconWithChannelType.GuildIconWithChannelType, obj);
    }
    return tmp2;
  }, items5);
  const items7 = [channel, , , , , , , ,];
  let name;
  const memo1 = onLongPress.useMemo(() => {
    let tmp = label;
    if (undefined === label) {
      tmp = closure_9;
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
  const items8 = [trailing, flag2];
  const memo2 = onLongPress.useMemo(() => {
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
      const obj = { style: closure_7.subLabel, children: null };
      const obj2 = { color: nativeDefault.colors.TEXT_SUBTLE, style: closure_7.subLabelIcon };
      const items = [closure_2_12(TextIcon, obj2), ,];
      const obj3 = {
        style: closure_7.threadName,
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        ellipsizeMode: "tail",
        children: stateFromStores1,
      };
      items[1] = closure_2_12(Text_Text.Text, obj3);
      let tmp5Result = null;
      if (null != stateFromStores2) {
        const obj4 = { children: null };
        const obj5 = {
          style: closure_7.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-subtle",
          children: "\u2022",
        };
        const items1 = [closure_2_12(Text_Text.Text, obj5)];
        const obj6 = {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: DateUtils.calendarFormatCompact(_modDef4348(tmp14)),
        };
        items1[1] = closure_2_12(Text_Text.Text, obj6);
        obj4.children = items1;
        tmp5Result = closure_2_14(map1, obj4);
      }
      items[2] = tmp5Result;
      obj.children = items;
      return closure_2_14(View, obj);
    }
  }, items7);
  const memo3 = onLongPress.useMemo(() => {
    let tmp = trailing;
    if (null == trailing) {
      let tmp3;
      if (flag2) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }, items8);
  let obj5 = {};
  let obj3 = channel(onPress[12]);
  const merged1 = Object.assign(merged);
  obj5.disabled = flag2;
  obj5.icon = memo;
  obj5.onPress = callback;
  obj5.onLongPress = callback1;
  obj5.label = closure_12(channel(onPress[18]).Text, {
    lineClamp: 1,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: memo1,
  });
  obj5.subLabel = memo2;
  if (NONE === stateFromStores1.TOGGLE) {
    let obj6 = {};
    const merged2 = Object.assign(obj5);
    obj6.height = "100%";
    obj6.checked = flag;
    let tmp17Result = closure_12(tmp4(tmp5[21]).TableCheckboxRow, obj6);
  } else {
    let obj7 = {};
    const merged3 = Object.assign(obj5);
    obj7.height = "100%";
    obj7.trailing = memo3;
    tmp17Result = closure_12(tmp4(tmp5[22]).TableRow, obj7);
  }
  return tmp17Result;
});
