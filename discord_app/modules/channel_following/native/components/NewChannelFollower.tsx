// === Module 11460: NewChannelFollower ===

// Module 11460 (NewChannelFollower)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import openChannelPickerDefault from "openChannelPicker" /* 11463 */;
import ChannelFollowerActionCreatorsDefault from "ChannelFollowerActionCreators" /* 11466 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import SortedGuildStore from "SortedGuildStore" /* 5519 */;

const require = globalThis.__r;

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
const createStyles = fn(4636);
let obj2 = { container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 24 }, header: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 96 }, headerGuildIcon: { width: 40, marginRight: 16 }, headerChannelContainer: { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, height: 32 }, headerChannel: null, headerChannelIcon: null, ctaHeader: null, ctaSubhead: null, channelIcon: null };
let obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, height: 32 };
obj2.headerChannel = { flex: 1, flexDirection: "row", minWidth: 160, paddingHorizontal: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj2.headerChannelIcon = { height: 20, width: 20, marginRight: 8, opacity: 0.6 };
obj2.ctaHeader = { flex: 1, textAlign: "center", marginBottom: 8 };
obj2.ctaSubhead = { flex: 1, textAlign: "center", marginBottom: 8 };
obj2.channelIcon = { height: 16, width: 16, opacity: 0.6 };
let closure_18 = createStyles.createStyles(obj2);
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
  const tmp3 = targetChannelId(noop.useState(null), 2);
  const bottomSheetRef1 = require("useBottomSheetRef").useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  let obj = require("useBottomSheetRef");
  const tmp9 = require("useTheme")();
  const items = [GuildStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ sourceGuild: GuildStore.getGuild(require), targetGuild: GuildStore.getGuild(targetGuildId) }));
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  let obj2 = require("initialize");
  const items1 = [bottomSheetRef];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items1, () => ({ sourceChannel: ChannelStore.getChannel(importDefault), targetChannel: ChannelStore.getChannel(targetChannelId) }));
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  const obj3 = require("initialize");
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
  const tmp12 = require("useChannelName")(sourceChannel);
  if (tmp5Result.isThemeDark(tmp9)) {
    let tmp8Result = require("module_11461");
  } else {
    tmp8Result = require("module_11462");
  }
  const obj4 = { handleDisabled: true, startExpanded: true, scrollable: true, ref: bottomSheetRef, children: null };
  const obj5 = { source: tmp8Result, style: tmp.header, children: null };
  const obj6 = { style: tmp.header, children: null };
  const items2 = [closure_16(require("GuildIcon"), { style: tmp.headerGuildIcon, guild: sourceGuild }), ];
  const obj8 = { style: tmp.headerChannelContainer, children: null };
  const obj9 = { style: tmp.headerChannel, children: null };
  const obj10 = { size: require("native").Icon.Sizes.CUSTOM, source: null, style: null };
  let channelIcon = null;
  if (null != sourceChannel) {
    channelIcon = require("utils/ChannelUtils").getChannelIcon(sourceChannel);
    const tmp5Result3 = require("utils/ChannelUtils");
  }
  obj10.source = channelIcon;
  obj10.style = tmp.headerChannelIcon;
  const items3 = [closure_16(require("native").Icon, obj10), closure_16(require("Text/Text").Text, { lineClamp: 1, variant: "text-sm/medium", children: tmp12 })];
  obj9.children = items3;
  obj8.children = closure_17(closure_5, obj9);
  items2[1] = closure_16(closure_5, obj8);
  obj6.children = items2;
  obj5.children = closure_17(closure_5, obj6);
  const items4 = [closure_16(closure_6, obj5), ];
  const obj11 = { style: tmp.container, children: null };
  const obj12 = { style: tmp.ctaHeader, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = require("util").intl;
  obj12.children = intl.string(require("util").t.mvPFbA);
  const items5 = [closure_16(require("Text/Text").Text, obj12), , , , , ];
  const obj13 = { style: tmp.ctaSubhead, variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = require("util").intl;
  obj13.children = intl2.string(require("util").t.kbpkxJ);
  items5[1] = closure_16(require("Text/Text").Text, obj13);
  const obj14 = { title: null, hasIcons: true, children: null };
  const intl3 = require("util").intl;
  obj14.title = intl3.string(require("util").t.xFn72s);
  if (null != targetGuild) {
    let name = targetGuild.name;
  } else {
    const intl4 = require("util").intl;
    name = intl4.string(require("util").t.XqMe3N);
  }
  const obj15 = { label: name, icon: null, arrow: true, onPress: null };
  let tmp18Result = null;
  if (null != targetGuild) {
    const obj16 = { guild: targetGuild, size: require("GuildIcon").GuildIconSizes.XSMALL };
    tmp18Result = closure_16(require("GuildIcon"), obj16);
    const tmp8Result2 = require("GuildIcon");
  }
  obj15.icon = tmp18Result;
  obj15.onPress = function onPress() {
    const obj2 = { title: null, items: null, selectedItem: null, onItemSelect: null, onClose: null, hasIcons: false };
    let obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.etZ9tX);
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    const array = new Array();
    obj2.items = flattenedGuildIds.reduce((arr, item) => {
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
    obj2.selectedItem = targetGuildId;
    obj2.onItemSelect = function onItemSelect(arg0) {
      const firstChannelOfType = targetChannel.getFirstChannelOfType(arg0, canFollowIntoChannel, closure_10);
      let id;
      if (firstChannelOfType != null) {
        id = firstChannelOfType.id;
      }
      closure_1_4(arg0, id);
    };
    obj2.onClose = function onClose() {
      closure_1_4(targetGuildId, targetChannelId);
    };
    obj.openLazy(asyncRequireImpl(9556, dependencyMap.paths), "NewChannelFollowerGuildPicker", obj2);
    const tmp = asyncRequireImpl(9556, dependencyMap.paths);
  };
  obj14.children = closure_16(require("TableRow").TableRow, obj15);
  const items6 = [closure_16(require("TableRowGroup").TableRowGroup, obj14), ];
  const obj17 = { title: null, hasIcons: true, children: null };
  const intl5 = require("util").intl;
  obj17.title = intl5.string(require("util").t.PDn2fR);
  let stringResult = tmp13;
  if (tmp13 == null) {
    const intl6 = require("util").intl;
    stringResult = intl6.string(require("util").t.XqMe3N);
  }
  const obj18 = { label: stringResult, disabled: null == targetGuildId, icon: null, arrow: true, onPress: null };
  let tmp18Result3 = null;
  if (null != targetChannel) {
    const obj19 = { size: require("native").Icon.Sizes.CUSTOM, source: require("utils/ChannelUtils").getChannelIcon(targetChannel), style: tmp.channelIcon };
    tmp18Result3 = closure_16(require("native").Icon, obj19);
    const tmp5Result4 = require("utils/ChannelUtils");
  }
  const obj20 = { spacing: 16, children: null };
  obj18.icon = tmp18Result3;
  obj18.onPress = function onPress() {
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
  obj17.children = closure_16(require("TableRow").TableRow, obj18);
  items6[1] = closure_16(require("TableRowGroup").TableRowGroup, obj17);
  obj20.children = items6;
  items5[2] = closure_17(require("Stack/Stack").Stack, obj20);
  const obj21 = { inset: true, children: null };
  const intl7 = require("util").intl;
  obj21.children = intl7.string(require("util").t.Z0quyN);
  items5[3] = closure_16(require("Form").FormHint, obj21);
  let tmp18Result4 = null;
  if (null != tmp4) {
    const obj22 = { inset: true, children: tmp4 };
    tmp18Result4 = closure_16(require("Form").FormHint, obj22);
  }
  const obj23 = { children: null };
  items5[4] = tmp18Result4;
  const obj24 = { children: null };
  const obj25 = { text: null, disabled: null, loading: null, onPress: null };
  const intl8 = require("util").intl;
  obj25.text = intl8.string(require("util").t["3aOv+h"]);
  obj25.disabled = !(null != targetGuildId && null != targetChannelId);
  obj25.loading = tmp2[0];
  obj25.onPress = function onPress() {
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
  const items7 = [closure_16(require("components/Button/Button").Button, obj25), ];
  const obj26 = { text: null, variant: "secondary", onPress: null };
  const intl9 = require("util").intl;
  obj26.text = intl9.string(require("util").t["ETE/oC"]);
  obj26.onPress = targetChannelId.onCancel;
  items7[1] = closure_16(require("components/Button/Button").Button, obj26);
  obj24.children = items7;
  items5[5] = closure_17(require("ButtonGroup").ButtonGroup, obj24);
  obj11.children = items5;
  items4[1] = closure_17(closure_5, obj11);
  obj23.children = items4;
  const items8 = [closure_17(require("BottomSheetModal").BottomSheetScrollView, obj23), closure_16(require("ActionSheetHeaderBar").ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetRef1.bottomSheetClose })];
  obj4.children = items8;
  return closure_17(require("Sheet/BottomSheet").BottomSheet, obj4);
};