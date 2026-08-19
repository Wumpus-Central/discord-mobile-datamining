// === Module 12046: FailedGroupDMRow ===

// Module 12046 (FailedGroupDMRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4660 */;
import Text from "Text" /* 4734 */;
import computeChannelNameDefault from "computeChannelName" /* 4984 */;
import FacepileGroupDMAvatarDefault from "FacepileGroupDMAvatar" /* 9916 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import sortActivity from "sortActivity" /* 4559 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { StatusTypes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function FailedGroupDMRow(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = { size: null, channel: null };
  const tmp2 = computeChannelNameDefault(channel);
  obj[0] = Button.AvatarSizes.REFRESH_MEDIUM_32;
  obj[1] = channel;
  const items = [callback(FacepileGroupDMAvatarDefault, obj), ];
  obj = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp2 };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function FailedUserRow(user) {
  user = user.user;
  const tmp = callback3();
  let obj = user(589);
  const items = [closure_7];
  let stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getNickname(user.id));
  obj1 = user(589);
  const items1 = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: closure_1_6.isMobileOnline(user.id), status: closure_1_6.getStatus(user.id), isVROnline: closure_1_6.isVROnline(user.id) }));
  const status = stateFromStoresObject.status;
  let tmp9Result = null;
  if (null != user) {
    obj = { style: null, children: null };
    obj[0] = tmp.row;
    obj = { user: null, guildId: "Boolean", status: true, isMobileOnline: "done", isVROnline: true, size: null, avatarDecoration: null, autoStatusCutout: 71.857 };
    obj[0] = user;
    let tmp13 = null;
    if (StatusTypes.OFFLINE !== status) {
      tmp13 = status;
    }
    obj[2] = tmp13;
    obj[3] = tmp6;
    obj[4] = tmp7;
    obj[5] = tmp2(1297).AvatarSizes.XSMALL;
    obj[6] = user.avatarDecoration;
    const items2 = [callback(tmp2(1297).Avatar, obj), ];
    obj1 = { style: null, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: null };
    obj1[0] = tmp.label;
    if (stateFromStores == null) {
      stateFromStores = nameFromUserDefault.getName(user);
    }
    obj1[4] = stateFromStores;
    items2[1] = callback(tmp2(4734).Text, obj1);
    obj[1] = items2;
    tmp9Result = callback2(View, obj);
  }
  return tmp9Result;
}
function FailedChannelRow(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = channel(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return closure_1_5.getGuild(guild_id);
  });
  obj = { "aria-label": "", guild: stateFromStores, channel, size: channel(11966).GuildIconWithChannelTypeSizes.SMALL_32 };
  const items1 = [callback(channel(11966).GuildIconWithChannelType, obj), ];
  const tmp3 = computeChannelNameDefault(channel);
  items1[1] = callback(channel(4734).Text, { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: computeChannelNameDefault(channel) });
  obj[1] = items1;
  return callback2(View, obj);
}
function FailedDestinationRow(destination) {
  destination = destination.destination;
  let obj = destination(589);
  const items = [closure_4, closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let channel = null;
    if ("channel" === destination.type) {
      channel = closure_1_4.getChannel(destination.id);
    }
    const obj = { channel, user: null };
    let user = null;
    if ("user" === destination.type) {
      user = closure_1_8.getUser(destination.id);
    }
    obj[1] = user;
    return obj;
  });
  ({ channel, user } = stateFromStoresObject);
  let isGroupDMResult;
  if (channel != null) {
    isGroupDMResult = channel.isGroupDM();
  }
  if (isGroupDMResult) {
    obj = { channel: null };
    obj[0] = channel;
    let tmp3 = callback(FailedGroupDMRow, obj);
  } else if (null != user) {
    obj = { user: null };
    obj[0] = user;
    tmp3 = callback(FailedUserRow, obj);
  } else {
    tmp3 = null;
    if (null != channel) {
      obj1 = { channel: null };
      obj1[0] = channel;
      tmp3 = callback(FailedChannelRow, obj1);
    }
  }
  return tmp3;
}
noopAll;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
const createCacheKey = { borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_STRONG, borderRadius: ThemesDefault.radii.lg, paddingVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12, height: 40, marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { flexShrink: 1 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/share/native/DestinationFailedAlertModal.tsx");

export default function DestinationFailedAlertModal(arg0) {
  ({ failedDestinations, onRetry } = arg0);
  ({ title, content } = arg0);
  let obj = { style: callback3().container, children: failedDestinations.map((item, index) => callback(closure_17, { destination: item }, index)) };
  obj[2] = callback(View, obj);
  if (null != onRetry) {
    obj = { children: null };
    obj1 = { variant: "primary", onPress: null, text: null };
    obj1[1] = onRetry;
    const intl2 = getSystemLocale.intl;
    obj1[2] = intl2.string(getSystemLocale.t["5911Lb"]);
    const items = [callback(getAlertModalItemKey.AlertActionButton, obj1, "confirm"), ];
    const obj2 = { variant: "secondary", text: null };
    const intl3 = getSystemLocale.intl;
    obj2[1] = intl3.string(getSystemLocale.t.WAI6xu);
    items[1] = callback(getAlertModalItemKey.AlertActionButton, obj2, "cancel");
    obj[0] = items;
    let tmp2Result = callback2(closure_12, obj);
  } else {
    const obj3 = { variant: "primary", text: null };
    const intl = getSystemLocale.intl;
    obj3[1] = intl.string(getSystemLocale.t.BddRzS);
    tmp2Result = callback(getAlertModalItemKey.AlertActionButton, obj3, "confirm");
  }
  obj[3] = callback(getAlertModalItemKey.AlertActions, { children: tmp2Result });
  return callback(getAlertModalItemKey.AlertModal, obj);
};