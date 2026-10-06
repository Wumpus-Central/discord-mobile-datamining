// discord_app/modules/channel_following/native/components/NewChannelFollower.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl10 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ChannelRecord from "../../../../records/ChannelRecord.tsx";
import GuildChannelStore2 from "../../../../stores/GuildChannelStore.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelFollowerActionCreatorsDefault from "../../../../actions/ChannelFollowerActionCreators.tsx";
import openChannelPickerDefault from "../../../channel/native/openChannelPicker.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, arr, guild;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function canFollowIntoChannel(channel) {
  channel = channel.channel;
  const hasItem = set.has(channel.type) && PermissionStore.can(constants.MANAGE_WEBHOOKS, channel);
  return hasItem;
}
({ View: hasOwnProperty, ImageBackground: metroRequire } = react_native);
const set = ChannelRecord.GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
let closure_10 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
({ AbortCodes: closure_14, Permissions: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 24 },
  header: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 96 },
  headerGuildIcon: { width: 40, marginRight: 16 },
  headerChannelContainer: obj2,
  headerChannel: obj3,
  headerChannelIcon: { height: 20, width: 20, marginRight: 8, opacity: 0.6 },
  ctaHeader: { flex: 1, textAlign: "center", marginBottom: 8 },
  ctaSubhead: { flex: 1, textAlign: "center", marginBottom: 8 },
  channelIcon: { height: 16, width: 16, opacity: 0.6 },
};
obj2 = {
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  height: 32,
};
createStyles = createStyles.createStyles;
obj3 = {
  flex: 1,
  flexDirection: "row",
  minWidth: 160,
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED,
};
let closure_18 = createStyles(obj);
const result = size.fileFinishedImporting("modules/channel_following/native/components/NewChannelFollower.tsx");

export default function NewChannelFollower(targetChannelId) {
  let TableRow;
  let TableRow2;
  let c7;
  let channelIcon;
  let closure_5;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items2;
  let items3;
  let items5;
  let items7;
  let items8;
  let name;
  let obj15;
  let obj18;
  let obj6;
  let obj9;
  let sourceChannel;
  let sourceGuild;
  let targetChannel;
  let targetGuild;
  let targetGuildId;
  let tmp19Result;
  let tmp19Result3;
  let tmp5;
  let tmp6Result4;
  let tmp9Result;
  ({ sourceGuildId: require, sourceChannelId: importDefault, targetGuildId } = targetChannelId);
  targetChannelId = targetChannelId.targetChannelId;
  ({ reopenActionSheetWithTarget: react, onSuccess: closure_5 } = targetChannelId);
  c7 = undefined;
  targetChannel = undefined;
  const onCancel = targetChannelId.onCancel;
  let tmp = closure_18();
  let tmp2 = targetChannelId(react.useState(false), 2);
  let closure_6 = tmp2[1];
  const first = tmp2[0];
  let tmp4 = targetChannelId(react.useState(null), 2);
  [tmp5, c7] = tmp4;
  let obj = require("useBottomSheetRef");
  const bottomSheetRef1 = obj.useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const items = [GuildStore];
  const tmp10 = require("useTheme")();
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { sourceGuild: GuildStore.getGuild(require), targetGuild: GuildStore.getGuild(targetGuildId) };
    return obj;
  });
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  const items1 = [bottomSheetRef];
  const obj3 = require("get initialized");
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    const obj = {
      sourceChannel: ChannelStore.getChannel(importDefault),
      targetChannel: ChannelStore.getChannel(targetChannelId),
    };
    return obj;
  });
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  const tmp13 = require("useChannelName")(sourceChannel);
  const tmp14 = require("useChannelName")(targetChannel);
  const channelType = tmp15;
  require("useMountEffect")(() => {
    if (channelType) {
      const current = bottomSheetRef.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  });
  const tmp6Result = require("shared");
  if (tmp6Result.isThemeDark(tmp10)) {
    tmp9Result = require("AssetRegistry");
  } else {
    tmp9Result = require("AssetRegistry");
  }
  const obj4 = { handleDisabled: true, startExpanded: true, scrollable: true, ref: bottomSheetRef, children: items8 };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  const obj5 = { source: tmp9Result, style: tmp.header, children: closure_17(closure_5, obj6) };
  obj6 = { style: tmp.header, children: items2 };
  const BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  items2 = [,];
  const obj7 = { style: tmp.headerGuildIcon, guild: sourceGuild };
  items2[0] = closure_16(require("GuildIcon"), obj7);
  const obj8 = { style: tmp.headerChannelContainer, children: closure_17(closure_5, obj9) };
  obj9 = { style: tmp.headerChannel, children: items3 };
  const obj10 = { size: require("native").Icon.Sizes.CUSTOM, source: channelIcon, style: tmp.headerChannelIcon };
  const Icon = require("native").Icon;
  channelIcon = null;
  const tmp20 = closure_6;
  if (null != sourceChannel) {
    const tmp6Result3 = require("utils/ChannelUtils");
    channelIcon = tmp6Result3.getChannelIcon(sourceChannel);
  }
  items3 = [
    closure_16(Icon, obj10),
    closure_16(require("Text/Text").Text, { lineClamp: 1, variant: "text-sm/medium", children: tmp13 }),
  ];
  items2[1] = closure_16(closure_5, obj8);
  const items4 = [closure_16(tmp20, obj5)];
  const obj11 = { style: tmp.container, children: items5 };
  const obj12 = {
    style: tmp.ctaHeader,
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: intl.string(require("intl").t.mvPFbA),
  };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items5 = [closure_16(Text, obj12), , , , ,];
  const obj13 = {
    style: tmp.ctaSubhead,
    variant: "text-sm/medium",
    color: "text-default",
    children: intl2.string(require("intl").t.kbpkxJ),
  };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items5[1] = closure_16(Text2, obj13);
  const Stack = require("Stack/Stack").Stack;
  const obj14 = {
    title: intl3.string(require("intl").t.xFn72s),
    hasIcons: true,
    children: closure_16(TableRow, obj15),
  };
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  intl3 = require("intl").intl;
  TableRow = require("TableRow").TableRow;
  if (null != targetGuild) {
    name = targetGuild.name;
  } else {
    const intl4 = require("intl").intl;
    name = intl4.string(require("intl").t.XqMe3N);
  }
  obj15 = {
    label: name,
    icon: tmp19Result,
    arrow: true,
    onPress() {
      let array;
      let intl;
      let reduce;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let obj = {
        title: intl.string(intl10.t.etZ9tX),
        items: reduce((arr, arg1) => {
          guild = guild.getGuild(arg1);
          const canResult = null != guild && closure_1_12.can(constants.MANAGE_WEBHOOKS, guild);
          if (canResult) {
            const obj = { label: null, value: null };
            ({ name: obj.label, id: obj.value } = guild);
            arr = arr.push(obj);
          }
          return arr;
        }, array),
        selectedItem: targetGuildId,
        onItemSelect(arg0) {
          const firstChannelOfType = targetChannel.getFirstChannelOfType(arg0, canFollowIntoChannel, channelType);
          let id;
          if (firstChannelOfType != null) {
            id = firstChannelOfType.id;
          }
          closure_1_4(arg0, id);
        },
        onClose() {
          closure_1_4(targetGuildId, targetChannelId);
        },
        hasIcons: false,
      };
      const tmp2 = asyncRequire(8978, dependencyMap.paths);
      intl = intl10.intl;
      const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
      reduce = flattenedGuildIds.reduce;
      array = new Array();
      openLazy(tmp2, "NewChannelFollowerGuildPicker", obj);
    },
  };
  tmp19Result = null;
  if (null != targetGuild) {
    const obj16 = { guild: targetGuild, size: require("GuildIcon").GuildIconSizes.XSMALL };
    const tmp9Result2 = require("GuildIcon");
    tmp19Result = closure_16(tmp9Result2, obj16);
  }
  const items6 = [closure_16(TableRowGroup, obj14)];
  const obj17 = {
    title: intl5.string(require("intl").t.PDn2fR),
    hasIcons: true,
    children: closure_16(TableRow2, obj18),
  };
  const TableRowGroup2 = require("TableRowGroup").TableRowGroup;
  intl5 = require("intl").intl;
  let stringResult = tmp14;
  TableRow2 = require("TableRow").TableRow;
  if (tmp14 == null) {
    const intl6 = require("intl").intl;
    stringResult = intl6.string(require("intl").t.XqMe3N);
  }
  obj18 = {
    label: stringResult,
    disabled: null == targetGuildId,
    icon: tmp19Result3,
    arrow: true,
    onPress() {
      let tmp5;
      if (null != targetGuildId) {
        const obj = {
          guildId: tmp,
          selectedChannel: tmp5,
          channelType,
          filterFn: canFollowIntoChannel,
          onSelect(id) {
            closure_1_4(targetGuildId, id.id);
          },
          onClose() {
            closure_1_4(targetGuildId, targetChannelId);
          },
        };
        tmp5 = targetChannel;
        const tmp4 = openChannelPickerDefault;
        if (targetChannel == null) {
          tmp5 = null;
        }
        tmp4(obj);
      }
    },
  };
  tmp19Result3 = null;
  if (null != targetChannel) {
    const obj19 = {
      size: require("native").Icon.Sizes.CUSTOM,
      source: tmp6Result4.getChannelIcon(targetChannel),
      style: tmp.channelIcon,
    };
    const Icon2 = require("native").Icon;
    tmp6Result4 = require("utils/ChannelUtils");
    tmp19Result3 = closure_16(Icon2, obj19);
  }
  const obj20 = { spacing: 16, children: items6 };
  items6[1] = closure_16(TableRowGroup2, obj17);
  items5[2] = closure_17(Stack, obj20);
  const obj21 = { inset: true, children: intl7.string(require("intl").t.Z0quyN) };
  const FormHint = require("Form").FormHint;
  intl7 = require("intl").intl;
  items5[3] = closure_16(FormHint, obj21);
  let tmp19Result4 = null;
  if (null != tmp5) {
    const obj22 = { inset: true, children: tmp5 };
    tmp19Result4 = closure_16(require("Form").FormHint, obj22);
  }
  const obj23 = { children: items4 };
  items5[4] = tmp19Result4;
  const obj24 = { children: items7 };
  const ButtonGroup = require("ButtonGroup").ButtonGroup;
  const obj25 = {
    text: intl8.string(require("intl").t["3aOv+h"]),
    disabled: !(null != targetGuildId && null != targetChannelId),
    loading: first,
    onPress() {
      if (null != targetChannelId) {
        closure_6(true);
        const obj = ChannelFollowerActionCreatorsDefault;
        const channelFollower = obj.createChannelFollower(tmp, importDefault);
        const nextPromise = channelFollower.then(closure_5);
        nextPromise.catch((error) => {
          closure_1_6(false);
          if (error.body.code === constants.TOO_MANY_WEBHOOKS) {
            const intl2 = require("intl").intl;
            closure_1_7(intl2.string(require("intl").t["1eZ4aB"]));
          } else {
            const intl = require("intl").intl;
            closure_1_7(intl.string(require("intl").t.LgwhuN));
          }
        });
      }
    },
  };
  const Button = require("components/Button/Button").Button;
  intl8 = require("intl").intl;
  items7 = [closure_16(Button, obj25)];
  const obj26 = { text: intl9.string(require("intl").t["ETE/oC"]), variant: "secondary", onPress: onCancel };
  const Button2 = require("components/Button/Button").Button;
  intl9 = require("intl").intl;
  items7[1] = closure_16(Button2, obj26);
  items5[5] = closure_17(ButtonGroup, obj24);
  items4[1] = closure_17(closure_5, obj11);
  items8 = [
    closure_17(BottomSheetScrollView, obj23),
    closure_16(require("ActionSheetHeaderBar").ActionSheetHeaderBar, {
      variant: "floating",
      onPress: bottomSheetClose,
    }),
  ];
  return closure_17(BottomSheet, obj4);
}
