// discord_app/modules/channel_following/native/components/NewChannelFollower.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openChannelPickerDefault from "../../../channel/native/openChannelPicker.tsx";
import ChannelFollowerActionCreatorsDefault from "../../../../actions/ChannelFollowerActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";

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
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
fn(4995).GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
let closure_9 = fn(5072).GUILD_SELECTABLE_CHANNELS_KEY;
const Constants = fn(1072);
({ AbortCodes: map1, Permissions: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5142);
let obj2 = {
  container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 24 },
  header: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 96 },
  headerBackground: null,
  headerContent: null,
  headerGuildIcon: null,
  headerChannelContainer: null,
  headerChannel: null,
  headerChannelIcon: null,
  headerChannelName: null,
  ctaHeader: null,
  ctaSubhead: null,
  channelIcon: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = undefined;
obj3.height = 96;
obj2.headerBackground = obj3;
obj2.headerContent = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.headerGuildIcon = { width: 40, marginRight: 16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.headerChannelContainer = {
  flexShrink: 1,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  height: 32,
};
let obj5 = {
  flexShrink: 1,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  height: 32,
};
obj2.headerChannel = {
  flex: 1,
  flexDirection: "row",
  minWidth: 160,
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED,
};
obj2.headerChannelIcon = { height: 20, width: 20, marginRight: 8, opacity: 0.6 };
obj2.headerChannelName = { flexShrink: 1 };
obj2.ctaHeader = { flex: 1, textAlign: "center", marginBottom: 8 };
obj2.ctaSubhead = { flex: 1, textAlign: "center", marginBottom: 8 };
obj2.channelIcon = { height: 16, width: 16, opacity: 0.6 };
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/native/components/NewChannelFollower.tsx");

export default function NewChannelFollower(targetChannelId) {
  ({ sourceGuildId: require, sourceChannelId: importDefault, targetGuildId } = targetChannelId);
  targetChannelId = targetChannelId.targetChannelId;
  ({ reopenActionSheetWithTarget: noop, onSuccess: closure_5 } = targetChannelId);
  c7 = undefined;
  targetChannel = undefined;
  closure_10 = undefined;
  let tmp = closure_17();
  const tmp2 = targetChannelId(noop.useState(false), 2);
  closure_6 = tmp2[1];
  [tmp4, c7] = targetChannelId(noop.useState(null), 2);
  const tmp3 = targetChannelId(noop.useState(null), 2);
  const bottomSheetRef1 = require("useBottomSheetRef").useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  let obj = require("useBottomSheetRef");
  const tmp9 = require("useTheme")();
  items = [closure_10];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
    sourceGuild: GuildStore.getGuild(require),
    targetGuild: GuildStore.getGuild(targetGuildId),
  }));
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  let obj2 = require("initialize");
  const items1 = [c7];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items1, () => ({
    sourceChannel: ChannelStore.getChannel(importDefault),
    targetChannel: ChannelStore.getChannel(targetChannelId),
  }));
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  const obj3 = require("initialize");
  const tmp13 = require("useChannelName")(targetChannel);
  closure_10 = tmp14;
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
    let tmp8Result = require("../../../../../_runtime/metro/11346__.js");
  } else {
    tmp8Result = require("../../../../../_runtime/metro/11347__.js");
  }
  const obj4 = { handleDisabled: true, startExpanded: true, scrollable: true, ref: bottomSheetRef, children: null };
  const obj5 = { style: tmp.header, children: null };
  const items2 = [closure_15(require("FastImage"), { source: tmp8Result, style: tmp.headerBackground })];
  const obj7 = { style: null, children: null };
  const items3 = [,];
  ({ header: arr4[0], headerContent: arr4[1] } = tmp);
  obj7.style = items3;
  const items4 = [closure_15(require("GuildIcon"), { style: tmp.headerGuildIcon, guild: sourceGuild })];
  const obj9 = { style: tmp.headerChannelContainer, children: null };
  const obj10 = { style: tmp.headerChannel, children: null };
  const obj11 = { size: require("native").Icon.Sizes.CUSTOM, source: null, style: null };
  let channelIcon = null;
  if (null != sourceChannel) {
    channelIcon = require("utils/ChannelUtils").getChannelIcon(sourceChannel);
    const tmp5Result3 = require("utils/ChannelUtils");
  }
  obj11.source = channelIcon;
  obj11.style = tmp.headerChannelIcon;
  const items5 = [
    closure_15(require("native").Icon, obj11),
    closure_15(require("Text/Text").Text, {
      style: tmp.headerChannelName,
      lineClamp: 1,
      variant: "body-sm/medium",
      children: tmp12,
    }),
  ];
  obj10.children = items5;
  obj9.children = closure_16(closure_5, obj10);
  items4[1] = closure_15(closure_5, obj9);
  obj7.children = items4;
  items2[1] = closure_16(closure_5, obj7);
  obj5.children = items2;
  const items6 = [closure_16(closure_5, obj5)];
  const obj13 = { style: tmp.container, children: null };
  const obj14 = {
    style: tmp.ctaHeader,
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  let intl = require("util").intl;
  obj14.children = intl.string(require("util").t.mvPFbA);
  const items7 = [closure_15(require("Text/Text").Text, obj14), , , , ,];
  const obj15 = { style: tmp.ctaSubhead, variant: "body-sm/medium", color: "text-default", children: null };
  let intl2 = require("util").intl;
  obj15.children = intl2.string(require("util").t.kbpkxJ);
  items7[1] = closure_15(require("Text/Text").Text, obj15);
  const obj16 = { title: null, hasIcons: true, children: null };
  const intl3 = require("util").intl;
  obj16.title = intl3.string(require("util").t.xFn72s);
  if (null != targetGuild) {
    let name = targetGuild.name;
  } else {
    const intl4 = require("util").intl;
    name = intl4.string(require("util").t.XqMe3N);
  }
  const obj17 = { label: name, icon: null, arrow: true, onPress: null };
  let tmp19Result = null;
  if (null != targetGuild) {
    const obj18 = { guild: targetGuild, size: require("GuildIcon").GuildIconSizes.XSMALL };
    tmp19Result = closure_15(require("GuildIcon"), obj18);
    const tmp8Result2 = require("GuildIcon");
  }
  obj17.icon = tmp19Result;
  obj17.onPress = function handleSelectGuild() {
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
        canResult = closure_1_11.can(constants.MANAGE_WEBHOOKS, guild);
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
      const firstChannelOfType = bottomSheetRef.getFirstChannelOfType(arg0, canFollowIntoChannel, targetChannel);
      let id;
      if (firstChannelOfType != null) {
        id = firstChannelOfType.id;
      }
      closure_1_4(arg0, id);
    };
    obj2.onClose = function onClose() {
      closure_1_4(targetGuildId, targetChannelId);
    };
    obj.openLazy(asyncRequireImpl(9088, dependencyMap.paths), "NewChannelFollowerGuildPicker", obj2);
    const tmp = asyncRequireImpl(9088, dependencyMap.paths);
  };
  obj16.children = closure_15(require("TableRow").TableRow, obj17);
  const items8 = [closure_15(require("TableRowGroup").TableRowGroup, obj16)];
  const obj19 = { title: null, hasIcons: true, children: null };
  const intl5 = require("util").intl;
  obj19.title = intl5.string(require("util").t.PDn2fR);
  let stringResult = tmp13;
  if (tmp13 == null) {
    const intl6 = require("util").intl;
    stringResult = intl6.string(require("util").t.XqMe3N);
  }
  const obj20 = { label: stringResult, disabled: null == targetGuildId, icon: null, arrow: true, onPress: null };
  let tmp19Result3 = null;
  if (null != targetChannel) {
    const obj21 = {
      size: require("native").Icon.Sizes.CUSTOM,
      source: require("utils/ChannelUtils").getChannelIcon(targetChannel),
      style: tmp.channelIcon,
    };
    tmp19Result3 = closure_15(require("native").Icon, obj21);
    const tmp5Result4 = require("utils/ChannelUtils");
  }
  const obj22 = { spacing: 16, children: null };
  obj20.icon = tmp19Result3;
  obj20.onPress = function handleSelectChannel() {
    if (null != targetGuildId) {
      const obj = {
        guildId: tmp,
        selectedChannel: null,
        channelType: null,
        filterFn: null,
        onSelect: null,
        onClose: null,
      };
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
  obj19.children = closure_15(require("TableRow").TableRow, obj20);
  items8[1] = closure_15(require("TableRowGroup").TableRowGroup, obj19);
  obj22.children = items8;
  items7[2] = closure_16(require("Stack/Stack").Stack, obj22);
  const obj23 = { inset: true, children: null };
  const intl7 = require("util").intl;
  obj23.children = intl7.string(require("util").t.Z0quyN);
  items7[3] = closure_15(require("Form").FormHint, obj23);
  let tmp19Result4 = null;
  if (null != tmp4) {
    const obj24 = { inset: true, children: tmp4 };
    tmp19Result4 = closure_15(require("Form").FormHint, obj24);
  }
  const obj25 = { children: null };
  items7[4] = tmp19Result4;
  const obj26 = { children: null };
  const obj27 = { text: null, disabled: null, loading: null, onPress: null };
  const intl8 = require("util").intl;
  obj27.text = intl8.string(require("util").t["3aOv+h"]);
  obj27.disabled = !(null != targetGuildId && null != targetChannelId);
  obj27.loading = tmp2[0];
  obj27.onPress = function handleFollow() {
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
  const items9 = [closure_15(require("components/Button/Button").Button, obj27)];
  const obj28 = { text: null, variant: "secondary", onPress: null };
  const intl9 = require("util").intl;
  obj28.text = intl9.string(require("util").t["ETE/oC"]);
  obj28.onPress = targetChannelId.onCancel;
  items9[1] = closure_15(require("components/Button/Button").Button, obj28);
  obj26.children = items9;
  items7[5] = closure_16(require("ButtonGroup").ButtonGroup, obj26);
  obj13.children = items7;
  items6[1] = closure_16(closure_5, obj13);
  obj25.children = items6;
  const items10 = [
    closure_16(require("BottomSheetModal").BottomSheetScrollView, obj25),
    closure_15(require("ActionSheetHeaderBar").ActionSheetHeaderBar, {
      variant: "floating",
      onPress: bottomSheetRef1.bottomSheetClose,
    }),
  ];
  obj4.children = items10;
  return closure_16(require("Sheet/BottomSheet").BottomSheet, obj4);
}
