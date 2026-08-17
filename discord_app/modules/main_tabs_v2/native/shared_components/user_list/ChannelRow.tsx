// discord_app/modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "generateOldThreadCutoff" /* 4772 */;
import closure_8 from "markAllUserIdListsStale" /* 4030 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import { UserRowModes } from "UserRowModes" /* 9081 */;
import { ReadStateTypes } from "ReadStateTypes" /* 5044 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let obj = { guildIcon: { flexShrink: 0, flexGrow: 0 }, subLabel: { display: "flex", flexDirection: "row", alignItems: "center" }, subLabelIcon: { width: 12, height: 12, marginRight: 2 }, subLabelSeparator: null, threadName: null };
obj = { marginHorizontal: ThemesDefault.space.PX_4 };
obj[3] = obj;
obj[4] = { flexShrink: 1 };
let closure_15 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ChannelRow(channel) {
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
  const merged = Object.assign(channel, Object.create(null));
  closure_7 = undefined;
  let stateFromStores;
  closure_9 = undefined;
  stateFromStores1 = undefined;
  let stateFromStores2;
  let tmp3 = callback2();
  closure_7 = tmp3;
  let obj = channel(onPress[12]);
  let items = [label];
  stateFromStores = obj.useStateFromStores(items, () => label.getGuild(channel.guild_id));
  const tmp7 = flag2(onPress[13])(channel);
  closure_9 = tmp7;
  obj1 = channel(onPress[12]);
  let items1 = [subLabel, closure_9, stateFromStores];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    channel = subLabel.getChannel(channel.parent_id);
    let channelName = null;
    if (null != channel) {
      const obj = channel(onPress[13]);
      channelName = obj.computeChannelName(channel, closure_9, stateFromStores, false);
    }
    return channelName;
  });
  const items2 = [closure_7];
  stateFromStores2 = channel(onPress[12]).useStateFromStores(items2, () => closure_7.lastMessageTimestamp(channel.id, stateFromStores2.CHANNEL));
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
      const result = channel(onPress[14]).openChannelLongPressActionSheet(channel.id);
      const obj = channel(onPress[14]);
    } else {
      tmp(channel);
    }
  }, items4);
  const items6 = [tmp7, label];
  const memo = onLongPress.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { "aria-label": "", style: null, guild: null, channel: null, size: null };
      obj[1] = closure_7.guildIcon;
      obj[2] = tmp;
      obj[3] = channel;
      obj[4] = channel(onPress[15]).GuildIconWithChannelTypeSizes.SMALL_32;
      tmp2 = closure_1_12(channel(onPress[15]).GuildIconWithChannelType, obj);
    }
    return tmp2;
  }, items5);
  const items7 = [channel, , , , , , , , ];
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
        if (!obj8.isForumPost()) {
          let name;
          if (stateFromStores != null) {
            name = stateFromStores.name;
          }
          return name;
        }
      }
      if (channel.isForumPost()) {
        let TextIcon = tmp3(tmp4[16]).ForumIcon;
      } else {
        TextIcon = tmp3(tmp4[17]).TextIcon;
      }
      let obj = { style: null, children: null };
      obj[0] = closure_7.subLabel;
      obj = { color: null, style: null };
      obj[0] = flag2(onPress[11]).colors.TEXT_SUBTLE;
      obj[1] = closure_7.subLabelIcon;
      const items = [closure_1_12(TextIcon, obj), , ];
      obj = { style: null, variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, ellipsizeMode: "tail", children: null };
      obj[0] = closure_7.threadName;
      obj[5] = stateFromStores1;
      items[1] = closure_1_12(channel(onPress[18]).Text, obj);
      let tmp5Result = null;
      if (null != stateFromStores2) {
        obj1 = { children: null };
        const obj2 = { style: null, variant: "text-xs/medium", color: "text-subtle", children: "\u2022" };
        obj2[0] = closure_7.subLabelSeparator;
        const items1 = [tmp8(channel(onPress[18]).Text, obj2), ];
        const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
        obj3[2] = channel(onPress[19]).calendarFormatCompact(flag2(onPress[20])(tmp14));
        items1[1] = tmp8(channel(onPress[18]).Text, obj3);
        obj1[0] = items1;
        tmp5Result = tmp5(closure_1_13, obj1);
        const obj7 = channel(onPress[19]);
      }
      items[2] = tmp5Result;
      obj[1] = items;
      return closure_1_14(trailing, obj);
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
  obj = {};
  let obj3 = channel(onPress[12]);
  const obj4 = onLongPress;
  const merged1 = Object.assign(merged);
  obj.disabled = flag2;
  obj.icon = memo;
  obj.onPress = callback;
  obj.onLongPress = callback1;
  obj.label = callback(channel(onPress[18]).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: memo1 });
  obj.subLabel = memo2;
  if (NONE === stateFromStores1.TOGGLE) {
    obj = {};
    const merged2 = Object.assign(obj);
    obj.height = "100%";
    obj.checked = flag;
    let tmp17Result = tmp17(tmp4(tmp5[21]).TableCheckboxRow, obj);
  } else {
    obj1 = {};
    const merged3 = Object.assign(obj);
    obj1.height = "100%";
    obj1.trailing = memo3;
    tmp17Result = tmp17(tmp4(tmp5[22]).TableRow, obj1);
  }
  return tmp17Result;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx");

export default memoResult;