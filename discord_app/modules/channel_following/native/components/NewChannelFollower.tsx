// discord_app/modules/channel_following/native/components/NewChannelFollower.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import comparator from "../../../../stores/GuildChannelStore.tsx";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_9 } from "../../../../stores/GuildChannelStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../../stores/PermissionStore.tsx";
import insertUnsortedGuilds from "../../../../stores/SortedGuildStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function canFollowIntoChannel(channel) {
  channel = channel.channel;
  let canResult = channel.type === constants.GUILD_TEXT;
  if (canResult) {
    canResult = closure_11.can(constants2.MANAGE_WEBHOOKS, channel);
  }
  return canResult;
}
({ View: c5, ImageBackground: closure_6 } = get_ActivityIndicator);
({ AbortCodes: map1, ChannelTypes: closure_14, Permissions: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createCacheKey = { borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, height: 32 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { flex: 1, flexDirection: "row", minWidth: 160, paddingHorizontal: 8, paddingVertical: 6, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
createCacheKey[5] = { height: 20, width: 20, marginRight: 8, opacity: 0.6 };
createCacheKey[6] = { flex: 1, textAlign: "center", marginBottom: 8 };
createCacheKey[7] = { flex: 1, textAlign: "center", marginBottom: 8 };
createCacheKey[8] = { height: 16, width: 16, opacity: 0.6 };
let closure_18 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/channel_following/native/components/NewChannelFollower.tsx");

export default function NewChannelFollower(targetChannelId) {
  ({ sourceGuildId: require, sourceChannelId: importDefault, targetGuildId } = targetChannelId);
  targetChannelId = targetChannelId.targetChannelId;
  ({ reopenActionSheetWithTarget: closure_4, onSuccess: closure_5 } = targetChannelId);
  c7 = undefined;
  targetChannel = undefined;
  closure_10 = undefined;
  let tmp = callback2();
  const tmp2 = targetChannelId(React.useState(false), 2);
  closure_6 = tmp2[1];
  [tmp4, c7] = targetChannelId(React.useState(null), 2);
  let obj = require(targetGuildId[12]);
  let bottomSheetRef = obj.useBottomSheetRef();
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const tmp3 = targetChannelId(React.useState(null), 2);
  obj1 = require(targetGuildId[14]);
  const items = [closure_10];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ sourceGuild: store.getGuild(closure_0), targetGuild: store.getGuild(targetGuildId) }));
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  let obj2 = require(targetGuildId[14]);
  const items1 = [c7];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => ({ sourceChannel: _undefined.getChannel(closure_1), targetChannel: _undefined.getChannel(targetChannelId) }));
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  const tmp9 = importDefault(targetGuildId[13])();
  const tmp13 = importDefault(targetGuildId[15])(targetChannel);
  closure_10 = tmp14;
  importDefault(targetGuildId[16])(() => {
    if (closure_10) {
      const current = bottomSheetRef.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  });
  let tmp5Result = require(targetGuildId[17]);
  if (tmp5Result.isThemeDark(tmp9)) {
    let tmp8Result = importDefault(targetGuildId[18]);
  } else {
    tmp8Result = importDefault(targetGuildId[19]);
  }
  obj = { source: tmp8Result, style: tmp.header, children: null };
  obj1 = { style: tmp.header, children: null };
  obj2 = { style: tmp.headerGuildIcon, guild: sourceGuild };
  const items2 = [callback(importDefault(targetGuildId[22]), obj2), ];
  const obj3 = { style: tmp.headerChannelContainer, children: null };
  const obj4 = { style: tmp.headerChannel, children: null };
  const obj5 = { size: require(targetGuildId[23]).Icon.Sizes.CUSTOM, source: null, style: null };
  let channelIcon = null;
  if (null != sourceChannel) {
    tmp5Result = require(targetGuildId[24]);
    channelIcon = tmp5Result.getChannelIcon(sourceChannel);
  }
  obj5[1] = channelIcon;
  obj5[2] = tmp.headerChannelIcon;
  const items3 = [callback(require(targetGuildId[23]).Icon, obj5), callback(require(targetGuildId[25]).Text, { lineClamp: 1, variant: "text-sm/medium", children: importDefault(targetGuildId[15])(sourceChannel) })];
  obj4[1] = items3;
  obj3[1] = callback(closure_5, obj4);
  items2[1] = callback(closure_5, obj3);
  obj1[1] = items2;
  obj[2] = callback(closure_5, obj1);
  const items4 = [callback(closure_6, obj), ];
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.ctaHeader, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = require(targetGuildId[26]).intl;
  obj7[3] = intl.string(require(targetGuildId[26]).t.mvPFbA);
  const items5 = [callback(require(targetGuildId[25]).Text, obj7), , , , , ];
  const obj8 = { style: tmp.ctaSubhead, variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = require(targetGuildId[26]).intl;
  obj8[3] = intl2.string(require(targetGuildId[26]).t.kbpkxJ);
  items5[1] = callback(require(targetGuildId[25]).Text, obj8);
  const obj9 = { title: null, hasIcons: true, children: null };
  const intl3 = require(targetGuildId[26]).intl;
  obj9[0] = intl3.string(require(targetGuildId[26]).t.xFn72s);
  if (null != targetGuild) {
    let name = targetGuild.name;
  } else {
    const intl4 = require(targetGuildId[26]).intl;
    name = intl4.string(require(targetGuildId[26]).t.XqMe3N);
  }
  const obj10 = { label: name, icon: null, arrow: true, onPress: null };
  let tmp18Result = null;
  if (null != targetGuild) {
    const obj11 = { guild: null, size: null };
    obj11[0] = targetGuild;
    tmp8Result = importDefault(targetGuildId[22]);
    obj11[1] = require(targetGuildId[22]).GuildIconSizes.XSMALL;
    tmp18Result = callback(tmp8Result, obj11);
  }
  obj10[1] = tmp18Result;
  obj10[3] = function onPress() {
    importDefault(targetGuildId[30]);
    let obj = { title: null, items: null, selectedItem: null, onItemSelect: null, onClose: null, hasIcons: false };
    const intl = require(targetGuildId[26]).intl;
    obj[0] = intl.string(require(targetGuildId[26]).t.etZ9tX);
    const flattenedGuildIds = closure_1_12.getFlattenedGuildIds();
    const array = new Array();
    obj[1] = flattenedGuildIds.reduce((acc, item, index) => {
      guild = guild.getGuild(item);
      let canResult = null != guild;
      if (canResult) {
        canResult = closure_11.can(constants.MANAGE_WEBHOOKS, guild);
      }
      if (canResult) {
        const obj = { label: null, value: null };
        ({ name: obj[0], id: obj[1] } = guild);
        acc.push(obj);
      }
      return acc;
    }, array);
    obj[2] = targetGuildId;
    obj[3] = function onItemSelect(arg0) {
      const firstChannelOfType = bottomSheetRef.getFirstChannelOfType(arg0, closure_1_19, targetChannel);
      let id;
      if (firstChannelOfType != null) {
        id = firstChannelOfType.id;
      }
      callback(arg0, id);
    };
    obj[4] = function onClose() {
      callback(closure_2, closure_3);
    };
    obj.openLazy(require(targetGuildId[32])(targetGuildId[31], targetGuildId.paths), "NewChannelFollowerGuildPicker", obj);
    const tmp = require(targetGuildId[32])(targetGuildId[31], targetGuildId.paths);
  };
  obj9[2] = callback(require(targetGuildId[29]).TableRow, obj10);
  const items6 = [callback(require(targetGuildId[28]).TableRowGroup, obj9), ];
  const obj12 = { title: null, hasIcons: true, children: null };
  const intl5 = require(targetGuildId[26]).intl;
  obj12[0] = intl5.string(require(targetGuildId[26]).t.PDn2fR);
  let stringResult = tmp13;
  if (tmp13 == null) {
    const intl6 = require(targetGuildId[26]).intl;
    stringResult = intl6.string(require(targetGuildId[26]).t.XqMe3N);
  }
  const obj13 = { label: stringResult, disabled: null == targetGuildId, icon: null, arrow: true, onPress: null };
  tmp18Result = null;
  if (null != targetChannel) {
    const obj14 = { size: null, source: null, style: null };
    obj14[0] = require(targetGuildId[23]).Icon.Sizes.CUSTOM;
    obj14[1] = require(targetGuildId[24]).getChannelIcon(targetChannel);
    obj14[2] = tmp.channelIcon;
    tmp18Result = callback(require(targetGuildId[23]).Icon, obj14);
    const tmp5Result1 = require(targetGuildId[24]);
  }
  const obj15 = { spacing: 16, children: null };
  obj13[2] = tmp18Result;
  obj13[4] = function onPress() {
    if (null != targetGuildId) {
      const obj = { guildId: null, selectedChannel: null, channelType: null, filterFn: null, onSelect: null, onClose: null };
      obj[0] = tmp;
      let tmp5 = targetChannel;
      if (targetChannel == null) {
        tmp5 = null;
      }
      obj[1] = tmp5;
      obj[2] = targetChannel;
      obj[3] = canFollowIntoChannel;
      obj[4] = function onSelect(id) {
        callback(closure_2, id.id);
      };
      obj[5] = function onClose() {
        callback(closure_2, closure_3);
      };
      importDefault(targetGuildId[33])(obj);
      const tmp4 = importDefault(targetGuildId[33]);
    }
  };
  obj12[2] = callback(require(targetGuildId[29]).TableRow, obj13);
  items6[1] = callback(require(targetGuildId[28]).TableRowGroup, obj12);
  obj15[1] = items6;
  items5[2] = callback(require(targetGuildId[27]).Stack, obj15);
  const obj16 = { inset: true, children: null };
  const intl7 = require(targetGuildId[26]).intl;
  obj16[1] = intl7.string(require(targetGuildId[26]).t.Z0quyN);
  items5[3] = callback(require(targetGuildId[34]).FormHint, obj16);
  let tmp18Result1 = null;
  if (null != tmp4) {
    const obj17 = { inset: true, children: null };
    obj17[1] = tmp4;
    tmp18Result1 = callback(require(targetGuildId[34]).FormHint, obj17);
  }
  const obj18 = { children: null };
  items5[4] = tmp18Result1;
  const obj19 = { children: null };
  const obj20 = { text: null, disabled: null, loading: null, onPress: null };
  const intl8 = require(targetGuildId[26]).intl;
  obj20[0] = intl8.string(require(targetGuildId[26]).t["3aOv+h"]);
  obj20[1] = !(null != targetGuildId && null != targetChannelId);
  obj20[2] = tmp2[0];
  obj20[3] = function onPress() {
    if (null != targetChannelId) {
      callback(true);
      const channelFollower = importDefault(targetGuildId[37]).createChannelFollower(tmp, closure_1);
      const obj = importDefault(targetGuildId[37]);
      channelFollower.then(closure_5).catch((error) => {
        callback(false);
        if (error.body.code === closure_1_13.TOO_MANY_WEBHOOKS) {
          const intl2 = closure_1_0(targetGuildId[26]).intl;
          callback2(intl2.string(closure_1_0(targetGuildId[26]).t["1eZ4aB"]));
        } else {
          const intl = closure_1_0(targetGuildId[26]).intl;
          callback2(intl.string(closure_1_0(targetGuildId[26]).t.LgwhuN));
        }
      });
      const nextPromise = channelFollower.then(closure_5);
    }
  };
  const items7 = [callback(require(targetGuildId[36]).Button, obj20), ];
  const obj21 = { text: null, variant: "secondary", onPress: null };
  const intl9 = require(targetGuildId[26]).intl;
  obj21[0] = intl9.string(require(targetGuildId[26]).t["ETE/oC"]);
  obj21[2] = targetChannelId.onCancel;
  items7[1] = callback(require(targetGuildId[36]).Button, obj21);
  obj19[0] = items7;
  items5[5] = callback(require(targetGuildId[35]).ButtonGroup, obj19);
  obj6[1] = items5;
  items4[1] = callback(closure_5, obj6);
  obj18[0] = items4;
  const items8 = [callback(require(targetGuildId[21]).BottomSheetScrollView, obj18), callback(require(targetGuildId[38]).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetRef.bottomSheetClose })];
  obj[4] = items8;
  return callback(require(targetGuildId[20]).BottomSheet, obj);
};