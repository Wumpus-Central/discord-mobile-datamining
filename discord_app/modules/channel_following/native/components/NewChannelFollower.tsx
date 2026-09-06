// === Module 11326: NewChannelFollower ===

// Module 11326 (NewChannelFollower)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import openChannelPickerDefault from "openChannelPicker" /* 11329 */;
import ChannelFollowerActionCreatorsDefault from "ChannelFollowerActionCreators" /* 11332 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

require = fn;
function canFollowIntoChannel(channel) {
  channel = channel.channel;
  let hasItem = set.has(channel.type);
  if (hasItem) {
    hasItem = PermissionStore.can(constants.MANAGE_WEBHOOKS, channel);
  }
  return hasItem;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ImageBackground: metroRequire } = get_ActivityIndicator);
fn(1961).GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
let closure_10 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const Constants = fn(1074);
({ AbortCodes: closure_14, Permissions: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 24 }, header: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 96 }, headerGuildIcon: { width: 40, marginRight: 16 }, headerChannelContainer: null, headerChannel: null, headerChannelIcon: null, ctaHeader: null, ctaSubhead: null, channelIcon: null };
createStyles = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, height: 32 };
createStyles.headerChannelContainer = createStyles;
createStyles.headerChannel = { flex: 1, flexDirection: "row", minWidth: 160, paddingHorizontal: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
createStyles.headerChannelIcon = { height: 20, width: 20, marginRight: 8, opacity: 0.6 };
createStyles.ctaHeader = { flex: 1, textAlign: "center", marginBottom: 8 };
createStyles.ctaSubhead = { flex: 1, textAlign: "center", marginBottom: 8 };
createStyles.channelIcon = { height: 16, width: 16, opacity: 0.6 };
let closure_18 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/native/components/NewChannelFollower.tsx");

export default function NewChannelFollower(targetChannelId) {
  ({ sourceGuildId: require, sourceChannelId: importDefault, targetGuildId } = targetChannelId);
  targetChannelId = targetChannelId.targetChannelId;
  ({ reopenActionSheetWithTarget: noop, onSuccess: closure_5 } = targetChannelId);
  c7 = undefined;
  targetChannel = undefined;
  let tmp = closure_18();
  const tmp2 = targetChannelId(noop.useState(false), 2);
  closure_6 = tmp2[1];
  [tmp4, c7] = targetChannelId(noop.useState(null), 2);
  let obj = require("useBottomSheetRef");
  let bottomSheetRef = obj.useBottomSheetRef();
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const tmp3 = targetChannelId(noop.useState(null), 2);
  let obj1 = require("initialize");
  const items = [GuildStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ sourceGuild: GuildStore.getGuild(require), targetGuild: GuildStore.getGuild(targetGuildId) }));
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  let obj2 = require("initialize");
  const items1 = [bottomSheetRef];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => ({ sourceChannel: ChannelStore.getChannel(importDefault), targetChannel: ChannelStore.getChannel(targetChannelId) }));
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  const tmp9 = require("useTheme")();
  const tmp13 = require("useChannelName")(targetChannel);
  const channelType = tmp14;
  require("useMountEffect")(() => {
    if (closure_10) {
      const current = bottomSheetRef.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  });
  let tmp5Result = require("shared");
  if (tmp5Result.isThemeDark(tmp9)) {
    let tmp8Result = require("module_11327");
  } else {
    tmp8Result = require("module_11328");
  }
  obj = { handleDisabled: true, startExpanded: true, scrollable: true, ref: bottomSheetRef, children: null };
  obj = { source: tmp8Result, style: tmp.header, children: null };
  obj1 = { style: tmp.header, children: null };
  obj2 = { style: tmp.headerGuildIcon, guild: sourceGuild };
  const items2 = [closure_16(require("GuildIcon"), obj2), ];
  const obj3 = { style: tmp.headerChannelContainer, children: null };
  const obj4 = { style: tmp.headerChannel, children: null };
  const obj5 = { size: require("native").Icon.Sizes.CUSTOM, source: null, style: null };
  let channelIcon = null;
  if (null != sourceChannel) {
    tmp5Result = require("utils/ChannelUtils");
    channelIcon = tmp5Result.getChannelIcon(sourceChannel);
  }
  obj5.source = channelIcon;
  obj5.style = tmp.headerChannelIcon;
  const items3 = [closure_16(require("native").Icon, obj5), closure_16(require("Text/Text").Text, { lineClamp: 1, variant: "text-sm/medium", children: require("useChannelName")(sourceChannel) })];
  obj4.children = items3;
  obj3.children = closure_17(closure_5, obj4);
  items2[1] = closure_16(closure_5, obj3);
  obj1.children = items2;
  obj.children = closure_17(closure_5, obj1);
  const items4 = [closure_16(closure_6, obj), ];
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.ctaHeader, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = require("util").intl;
  obj7.children = intl.string(require("util").t.mvPFbA);
  const items5 = [closure_16(require("Text/Text").Text, obj7), , , , , ];
  const obj8 = { style: tmp.ctaSubhead, variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = require("util").intl;
  obj8.children = intl2.string(require("util").t.kbpkxJ);
  items5[1] = closure_16(require("Text/Text").Text, obj8);
  const obj9 = { title: null, hasIcons: true, children: null };
  const intl3 = require("util").intl;
  obj9.title = intl3.string(require("util").t.xFn72s);
  if (null != targetGuild) {
    let name = targetGuild.name;
  } else {
    const intl4 = require("util").intl;
    name = intl4.string(require("util").t.XqMe3N);
  }
  const obj10 = { label: name, icon: null, arrow: true, onPress: null };
  let tmp18Result = null;
  if (null != targetGuild) {
    const obj11 = { guild: targetGuild, size: null };
    tmp8Result = require("GuildIcon");
    obj11.size = require("GuildIcon").GuildIconSizes.XSMALL;
    tmp18Result = closure_16(tmp8Result, obj11);
  }
  obj10.icon = tmp18Result;
  obj10.onPress = function onPress() {
    let obj = { title: null, items: null, selectedItem: null, onItemSelect: null, onClose: null, hasIcons: false };
    const intl = util.intl;
    obj.title = intl.string(util.t.etZ9tX);
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    const array = new Array();
    obj.items = flattenedGuildIds.reduce((arr, item) => {
      guild = guild.getGuild(item);
      let canResult = null != guild;
      if (canResult) {
        canResult = closure_1_12.can(constants.MANAGE_WEBHOOKS, guild);
      }
      if (canResult) {
        const obj = { label: null, value: null };
        ({ name: obj.label, id: obj.value } = guild);
        arr = arr.push(obj);
      }
      return arr;
    }, array);
    obj.selectedItem = targetGuildId;
    obj.onItemSelect = function onItemSelect(arg0) {
      const firstChannelOfType = targetChannel.getFirstChannelOfType(arg0, canFollowIntoChannel, closure_10);
      let id;
      if (firstChannelOfType != null) {
        id = firstChannelOfType.id;
      }
      closure_1_4(arg0, id);
    };
    obj.onClose = function onClose() {
      closure_1_4(targetGuildId, targetChannelId);
    };
    obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), "NewChannelFollowerGuildPicker", obj);
    const tmp = asyncRequireImpl(9426, dependencyMap.paths);
  };
  obj9.children = closure_16(require("TableRow").TableRow, obj10);
  const items6 = [closure_16(require("TableRowGroup").TableRowGroup, obj9), ];
  const obj12 = { title: null, hasIcons: true, children: null };
  const intl5 = require("util").intl;
  obj12.title = intl5.string(require("util").t.PDn2fR);
  let stringResult = tmp13;
  if (tmp13 == null) {
    const intl6 = require("util").intl;
    stringResult = intl6.string(require("util").t.XqMe3N);
  }
  const obj13 = { label: stringResult, disabled: null == targetGuildId, icon: null, arrow: true, onPress: null };
  tmp18Result = null;
  if (null != targetChannel) {
    const obj14 = { size: require("native").Icon.Sizes.CUSTOM, source: require("utils/ChannelUtils").getChannelIcon(targetChannel), style: tmp.channelIcon };
    tmp18Result = closure_16(require("native").Icon, obj14);
    const tmp5Result1 = require("utils/ChannelUtils");
  }
  const obj15 = { spacing: 16, children: null };
  obj13.icon = tmp18Result;
  obj13.onPress = function onPress() {
    if (null != targetGuildId) {
      const obj = { guildId: tmp, selectedChannel: null, channelType: null, filterFn: null, onSelect: null, onClose: null };
      let tmp5 = targetChannel;
      if (targetChannel == null) {
        tmp5 = null;
      }
      obj.selectedChannel = tmp5;
      obj.channelType = channelType;
      obj.filterFn = canFollowIntoChannel;
      obj.onSelect = function onSelect(id) {
        closure_1_4(targetGuildId, id.id);
      };
      obj.onClose = function onClose() {
        closure_1_4(targetGuildId, targetChannelId);
      };
      openChannelPickerDefault(obj);
    }
  };
  obj12.children = closure_16(require("TableRow").TableRow, obj13);
  items6[1] = closure_16(require("TableRowGroup").TableRowGroup, obj12);
  obj15.children = items6;
  items5[2] = closure_17(require("Stack/Stack").Stack, obj15);
  const obj16 = { inset: true, children: null };
  const intl7 = require("util").intl;
  obj16.children = intl7.string(require("util").t.Z0quyN);
  items5[3] = closure_16(require("Form").FormHint, obj16);
  let tmp18Result1 = null;
  if (null != tmp4) {
    const obj17 = { inset: true, children: tmp4 };
    tmp18Result1 = closure_16(require("Form").FormHint, obj17);
  }
  const obj18 = { children: null };
  items5[4] = tmp18Result1;
  const obj19 = { children: null };
  const obj20 = { text: null, disabled: null, loading: null, onPress: null };
  const intl8 = require("util").intl;
  obj20.text = intl8.string(require("util").t["3aOv+h"]);
  obj20.disabled = !(null != targetGuildId && null != targetChannelId);
  obj20.loading = tmp2[0];
  obj20.onPress = function onPress() {
    if (null != targetChannelId) {
      closure_6(true);
      const channelFollower = ChannelFollowerActionCreatorsDefault.createChannelFollower(tmp, closure_1_1);
      channelFollower.then(closure_1_5).catch((error) => {
        closure_1_6(false);
        if (error.body.code === constants.TOO_MANY_WEBHOOKS) {
          const intl2 = require("util").intl;
          closure_1_7(intl2.string(require("util").t["1eZ4aB"]));
        } else {
          const intl = require("util").intl;
          closure_1_7(intl.string(require("util").t.LgwhuN));
        }
      });
      const nextPromise = channelFollower.then(closure_1_5);
    }
  };
  const items7 = [closure_16(require("components/Button/Button").Button, obj20), ];
  const obj21 = { text: null, variant: "secondary", onPress: null };
  const intl9 = require("util").intl;
  obj21.text = intl9.string(require("util").t["ETE/oC"]);
  obj21.onPress = targetChannelId.onCancel;
  items7[1] = closure_16(require("components/Button/Button").Button, obj21);
  obj19.children = items7;
  items5[5] = closure_17(require("ButtonGroup").ButtonGroup, obj19);
  obj6.children = items5;
  items4[1] = closure_17(closure_5, obj6);
  obj18.children = items4;
  const items8 = [closure_17(require("BottomSheetModal").BottomSheetScrollView, obj18), closure_16(require("ActionSheetHeaderBar").ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetRef.bottomSheetClose })];
  obj.children = items8;
  return closure_17(require("Sheet/BottomSheet").BottomSheet, obj);
};