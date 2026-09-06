// === Module 11326: canFollowIntoChannel ===

// Module 11326 (canFollowIntoChannel)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES as closure_7 } from "createChannelRecord" /* 1961 */;
import closure_8 from "ensureGuildLoaded" /* 1957 */;
import closure_9 from "comparator" /* 2012 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_10 } from "comparator" /* 2012 */;
import closure_11 from "createGuildRecordFromRust" /* 1979 */;
import closure_12 from "getUncachedChannelPermissions" /* 4199 */;
import closure_13 from "insertUnsortedGuilds" /* 5438 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function canFollowIntoChannel(channel) {
  channel = channel.channel;
  let hasItem = set.has(channel.type);
  if (hasItem) {
    hasItem = closure_12.can(constants.MANAGE_WEBHOOKS, channel);
  }
  return hasItem;
}
({ View: c5, ImageBackground: closure_6 } = get_ActivityIndicator);
({ AbortCodes: closure_14, Permissions: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
createCacheKey = { container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 24 }, header: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 96 }, headerGuildIcon: { width: 40, marginRight: 16 }, headerChannelContainer: null, headerChannel: null, headerChannelIcon: null, ctaHeader: null, ctaSubhead: null, channelIcon: null };
createCacheKey = { borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, height: 32 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { flex: 1, flexDirection: "row", minWidth: 160, paddingHorizontal: 8, paddingVertical: 6, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
createCacheKey[5] = { height: 20, width: 20, marginRight: 8, opacity: 0.6 };
createCacheKey[6] = { flex: 1, textAlign: "center", marginBottom: 8 };
createCacheKey[7] = { flex: 1, textAlign: "center", marginBottom: 8 };
createCacheKey[8] = { height: 16, width: 16, opacity: 0.6 };
let closure_18 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flex: 1, flexDirection: "row", minWidth: 160, paddingHorizontal: 8, paddingVertical: 6, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
const result = require("set").fileFinishedImporting("modules/channel_following/native/components/NewChannelFollower.tsx");

export default function NewChannelFollower(targetChannelId) {
  ({ sourceGuildId: require, sourceChannelId: importDefault, targetGuildId } = targetChannelId);
  targetChannelId = targetChannelId.targetChannelId;
  ({ reopenActionSheetWithTarget: closure_4, onSuccess: closure_5 } = targetChannelId);
  closure_6 = undefined;
  c7 = undefined;
  let bottomSheetRef;
  targetChannel = undefined;
  closure_10 = undefined;
  const tmp = callback2();
  const tmp2 = targetChannelId(React.useState(false), 2);
  closure_6 = tmp2[1];
  [tmp4, c7] = targetChannelId(React.useState(null), 2);
  let obj = require(targetGuildId[13]);
  bottomSheetRef = obj.useBottomSheetRef();
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const tmp3 = targetChannelId(React.useState(null), 2);
  obj1 = require(targetGuildId[15]);
  const items = [closure_11];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ sourceGuild: closure_1_11.getGuild(closure_0), targetGuild: closure_1_11.getGuild(targetGuildId) }));
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  let obj2 = require(targetGuildId[15]);
  const items1 = [bottomSheetRef];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => ({ sourceChannel: bottomSheetRef.getChannel(closure_1), targetChannel: bottomSheetRef.getChannel(targetChannelId) }));
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  const tmp9 = importDefault(targetGuildId[14])();
  const tmp13 = importDefault(targetGuildId[16])(targetChannel);
  closure_10 = tmp14;
  importDefault(targetGuildId[17])(() => {
    if (closure_10) {
      const current = bottomSheetRef.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  });
  let tmp5Result = tmp5(tmp6[18]);
  if (tmp5Result.isThemeDark(tmp9)) {
    let tmp8Result = tmp8(tmp6[19]);
  } else {
    tmp8Result = tmp8(tmp6[20]);
  }
  obj = { handleDisabled: true, startExpanded: true, scrollable: true, ref: bottomSheetRef, children: null };
  obj = { source: tmp8Result, style: tmp.header, children: null };
  obj1 = { style: tmp.header, children: null };
  obj2 = { style: tmp.headerGuildIcon, guild: sourceGuild };
  const items2 = [callback(importDefault(targetGuildId[23]), obj2), ];
  const obj3 = { style: tmp.headerChannelContainer, children: null };
  const obj4 = { style: tmp.headerChannel, children: null };
  const obj5 = { size: require(targetGuildId[24]).Icon.Sizes.CUSTOM, source: null, style: null };
  let channelIcon = null;
  if (null != sourceChannel) {
    tmp5Result = tmp5(tmp6[25]);
    channelIcon = tmp5Result.getChannelIcon(sourceChannel);
  }
  obj5[1] = channelIcon;
  obj5[2] = tmp.headerChannelIcon;
  const items3 = [callback(require(targetGuildId[24]).Icon, obj5), callback(require(targetGuildId[26]).Text, { lineClamp: 1, variant: "text-sm/medium", children: importDefault(targetGuildId[16])(sourceChannel) })];
  obj4[1] = items3;
  obj3[1] = closure_17(closure_5, obj4);
  items2[1] = callback(closure_5, obj3);
  obj1[1] = items2;
  obj[2] = closure_17(closure_5, obj1);
  const items4 = [callback(closure_6, obj), ];
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.ctaHeader, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = tmp5(tmp6[27]).intl;
  obj7[3] = intl.string(require(targetGuildId[27]).t.mvPFbA);
  const items5 = [callback(require(targetGuildId[26]).Text, obj7), , , , , ];
  const obj8 = { style: tmp.ctaSubhead, variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = tmp5(tmp6[27]).intl;
  obj8[3] = intl2.string(require(targetGuildId[27]).t.kbpkxJ);
  items5[1] = callback(require(targetGuildId[26]).Text, obj8);
  const obj9 = { title: null, hasIcons: true, children: null };
  const intl3 = tmp5(tmp6[27]).intl;
  obj9[0] = intl3.string(require(targetGuildId[27]).t.xFn72s);
  if (null != targetGuild) {
    let name = targetGuild.name;
  } else {
    const intl4 = tmp5(tmp6[27]).intl;
    name = intl4.string(tmp5(tmp6[27]).t.XqMe3N);
  }
  const obj10 = { label: name, icon: null, arrow: true, onPress: null };
  let tmp18Result = null;
  if (null != targetGuild) {
    const obj11 = { guild: null, size: null };
    obj11[0] = targetGuild;
    tmp8Result = tmp8(tmp6[23]);
    obj11[1] = tmp5(tmp6[23]).GuildIconSizes.XSMALL;
    tmp18Result = tmp18(tmp8Result, obj11);
  }
  obj10[1] = tmp18Result;
  obj10[3] = function onPress() {
    let obj = closure_1_1(targetGuildId[31]);
    obj = { title: null, items: null, selectedItem: null, onItemSelect: null, onClose: null, hasIcons: false };
    const intl = closure_1_0(targetGuildId[27]).intl;
    obj[0] = intl.string(closure_1_0(targetGuildId[27]).t.etZ9tX);
    const flattenedGuildIds = closure_1_13.getFlattenedGuildIds();
    const array = new Array();
    obj[1] = flattenedGuildIds.reduce((arr) => {
      guild = guild.getGuild(arg1);
      let canResult = null != guild;
      if (canResult) {
        canResult = closure_12.can(constants.MANAGE_WEBHOOKS, guild);
      }
      if (canResult) {
        const obj = { label: null, value: null };
        ({ name: obj[0], id: obj[1] } = guild);
        arr.push(obj);
      }
      return arr;
    }, array);
    obj[2] = targetGuildId;
    obj[3] = function onItemSelect(arg0) {
      const firstChannelOfType = closure_1_9.getFirstChannelOfType(arg0, closure_1_19, closure_1_10);
      let id;
      if (firstChannelOfType != null) {
        id = firstChannelOfType.id;
      }
      closure_4(arg0, id);
    };
    obj[4] = function onClose() {
      callback(closure_2, closure_3);
    };
    obj.openLazy(closure_1_0(targetGuildId[33])(targetGuildId[32], targetGuildId.paths), "NewChannelFollowerGuildPicker", obj);
  };
  obj9[2] = callback(require(targetGuildId[30]).TableRow, obj10);
  const items6 = [callback(require(targetGuildId[29]).TableRowGroup, obj9), ];
  const obj12 = { title: null, hasIcons: true, children: null };
  const intl5 = tmp5(tmp6[27]).intl;
  obj12[0] = intl5.string(require(targetGuildId[27]).t.PDn2fR);
  let stringResult = tmp13;
  if (tmp13 == null) {
    const intl6 = tmp5(tmp6[27]).intl;
    stringResult = intl6.string(tmp5(tmp6[27]).t.XqMe3N);
  }
  const obj13 = { label: stringResult, disabled: null == targetGuildId, icon: null, arrow: true, onPress: null };
  tmp18Result = null;
  if (null != targetChannel) {
    const obj14 = { size: null, source: null, style: null };
    obj14[0] = tmp5(tmp6[24]).Icon.Sizes.CUSTOM;
    obj14[1] = tmp5(tmp6[25]).getChannelIcon(targetChannel);
    obj14[2] = tmp.channelIcon;
    tmp18Result = tmp18(tmp5(tmp6[24]).Icon, obj14);
    const tmp5Result1 = tmp5(tmp6[25]);
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
      obj[2] = closure_10;
      obj[3] = closure_1_19;
      obj[4] = function onSelect(id) {
        callback(closure_2, id.id);
      };
      obj[5] = function onClose() {
        callback(closure_2, closure_3);
      };
      closure_1_1(targetGuildId[34])(obj);
      const tmp4 = closure_1_1(targetGuildId[34]);
    }
  };
  obj12[2] = callback(require(targetGuildId[30]).TableRow, obj13);
  items6[1] = callback(require(targetGuildId[29]).TableRowGroup, obj12);
  obj15[1] = items6;
  items5[2] = closure_17(require(targetGuildId[28]).Stack, obj15);
  const obj16 = { inset: true, children: null };
  const intl7 = tmp5(tmp6[27]).intl;
  obj16[1] = intl7.string(require(targetGuildId[27]).t.Z0quyN);
  items5[3] = callback(require(targetGuildId[35]).FormHint, obj16);
  let tmp18Result1 = null;
  if (null != tmp4) {
    const obj17 = { inset: true, children: null };
    obj17[1] = tmp4;
    tmp18Result1 = tmp18(tmp5(tmp6[35]).FormHint, obj17);
  }
  const obj18 = { children: null };
  items5[4] = tmp18Result1;
  const obj19 = { children: null };
  const obj20 = { text: null, disabled: null, loading: null, onPress: null };
  const intl8 = tmp5(tmp6[27]).intl;
  obj20[0] = intl8.string(require(targetGuildId[27]).t["3aOv+h"]);
  obj20[1] = !(null != targetGuildId && null != targetChannelId);
  obj20[2] = tmp2[0];
  obj20[3] = function onPress() {
    if (null != targetChannelId) {
      callback(true);
      const channelFollower = closure_1_1(targetGuildId[38]).createChannelFollower(tmp, closure_1);
      const obj = closure_1_1(targetGuildId[38]);
      channelFollower.then(closure_5).catch((body) => {
        callback(false);
        if (body.body.code === closure_1_14.TOO_MANY_WEBHOOKS) {
          const intl2 = closure_1_0(closure_1_2[27]).intl;
          callback2(intl2.string(closure_1_0(closure_1_2[27]).t["1eZ4aB"]));
        } else {
          const intl = closure_1_0(closure_1_2[27]).intl;
          callback2(intl.string(closure_1_0(closure_1_2[27]).t.LgwhuN));
        }
      });
      const nextPromise = channelFollower.then(closure_5);
    }
  };
  const items7 = [callback(require(targetGuildId[37]).Button, obj20), ];
  const obj21 = { text: null, variant: "secondary", onPress: null };
  const intl9 = tmp5(tmp6[27]).intl;
  obj21[0] = intl9.string(require(targetGuildId[27]).t["ETE/oC"]);
  obj21[2] = targetChannelId.onCancel;
  items7[1] = callback(require(targetGuildId[37]).Button, obj21);
  obj19[0] = items7;
  items5[5] = closure_17(require(targetGuildId[36]).ButtonGroup, obj19);
  obj6[1] = items5;
  items4[1] = closure_17(closure_5, obj6);
  obj18[0] = items4;
  const items8 = [closure_17(require(targetGuildId[22]).BottomSheetScrollView, obj18), callback(require(targetGuildId[39]).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetRef.bottomSheetClose })];
  obj[4] = items8;
  return closure_17(require(targetGuildId[21]).BottomSheet, obj);
};