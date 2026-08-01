// === Module 9943: FailedGroupDMRow ===

// Module 9943 (FailedGroupDMRow)
import "getAlertModalItemKey";
import { View } from "GuildIconWithChannelTypeSizes";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import sortActivity from "sortActivity";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { StatusTypes } from "sum";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
function FailedGroupDMRow(channel) {
  channel = channel.channel;
  const tmp = createCacheKey();
  let obj = { style: tmp.row, children: null };
  obj = { size: null, channel: null };
  const tmp2 = importDefault(4384)(channel);
  obj[0] = require(1297) /* Button */.AvatarSizes.REFRESH_MEDIUM_32;
  obj[1] = channel;
  const items = [callback(importDefault(9101), obj), ];
  obj = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp2 };
  items[1] = callback(require(4189) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function FailedUserRow(user) {
  user = user.user;
  const tmp = createCacheKey();
  let obj = user(589);
  const items = [upsertRelationship];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_7.getNickname(user.id));
  let obj1 = user(589);
  const items1 = [sortActivity];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: outer1_6.isMobileOnline(user.id), status: outer1_6.getStatus(user.id), isVROnline: outer1_6.isVROnline(user.id) }));
  const status = stateFromStoresObject.status;
  let tmp9Result = null;
  if (null != user) {
    obj = { style: null, children: null };
    obj[0] = tmp.row;
    obj = { user: null, guildId: "Boolean", status: true, isMobileOnline: "done", isVROnline: true, size: null, avatarDecoration: null, autoStatusCutout: 5.286 };
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
    const items2 = [closure_10(tmp2(1297).Avatar, obj), ];
    obj1 = { style: null, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: null };
    obj1[0] = tmp.label;
    if (stateFromStores == null) {
      stateFromStores = importDefault(4032).getName(user);
      const obj6 = importDefault(4032);
    }
    obj1[4] = stateFromStores;
    items2[1] = closure_10(tmp2(4189).Text, obj1);
    obj[1] = items2;
    tmp9Result = closure_11(View, obj);
    const tmp10 = View;
    const tmp9 = closure_11;
  }
  return tmp9Result;
}
function FailedChannelRow(channel) {
  channel = channel.channel;
  const tmp = createCacheKey();
  let obj = channel(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return outer1_5.getGuild(guild_id);
  });
  obj = { style: tmp.row, children: null };
  obj = { "aria-label": "", guild: stateFromStores, channel, size: null };
  obj[3] = channel(9944).GuildIconWithChannelTypeSizes.SMALL_32;
  const items1 = [callback(channel(9944).GuildIconWithChannelType, obj), ];
  const tmp3 = importDefault(4384)(channel);
  items1[1] = callback(channel(4189).Text, { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: importDefault(4384)(channel) });
  obj[1] = items1;
  return callback2(View, obj);
}
function FailedDestinationRow(destination) {
  let channel;
  let user;
  destination = destination.destination;
  let obj = destination(589);
  const items = [ensureGuildLoaded, mergeGuildAvatar];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let channel = null;
    if ("channel" === destination.type) {
      channel = outer1_4.getChannel(tmp.id);
    }
    const obj = { channel, user: null };
    let user = null;
    if ("user" === destination.type) {
      user = outer1_8.getUser(tmp.id);
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
      const obj1 = { channel: null };
      obj1[0] = channel;
      tmp3 = callback(FailedChannelRow, obj1);
    }
  }
  return tmp3;
}
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { container: null, row: null, label: null };
createCacheKey = { borderWidth: 1, borderColor: require("Themes").colors.BORDER_STRONG, borderRadius: require("Themes").radii.lg, paddingVertical: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12, height: 40, marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[2] = { flexShrink: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12, height: 40, marginHorizontal: require("Themes").space.PX_16 };
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/share/native/DestinationFailedAlertModal.tsx");

export default function DestinationFailedAlertModal(arg0) {
  let content;
  let failedDestinations;
  let onRetry;
  let title;
  ({ failedDestinations, onRetry } = arg0);
  ({ title, content } = arg0);
  let obj = { title, content, extraContent: null, actions: null };
  obj = { style: createCacheKey().container, children: null };
  obj[1] = failedDestinations.map((destination) => callback(closure_17, { destination }, arg1));
  obj[2] = callback(View, obj);
  if (null != onRetry) {
    obj = { children: null };
    const obj1 = { variant: "primary", onPress: null, text: null };
    obj1[1] = onRetry;
    const intl2 = tmp3(1236).intl;
    obj1[2] = intl2.string(tmp3(1236).t["5911Lb"]);
    const items = [tmp2(tmp3(4537).AlertActionButton, obj1, "confirm"), ];
    const obj2 = { variant: "secondary", text: null };
    const intl3 = tmp3(1236).intl;
    obj2[1] = intl3.string(tmp3(1236).t.WAI6xu);
    items[1] = tmp2(tmp3(4537).AlertActionButton, obj2, "cancel");
    obj[0] = items;
    let tmp2Result = callback2(closure_12, obj);
  } else {
    const obj3 = { variant: "primary", text: null };
    const intl = tmp3(1236).intl;
    obj3[1] = intl.string(tmp3(1236).t.BddRzS);
    tmp2Result = tmp2(tmp3(4537).AlertActionButton, obj3, "confirm");
  }
  obj[3] = callback(require(4537) /* getAlertModalItemKey */.AlertActions, { children: tmp2Result });
  return callback(require(4537) /* getAlertModalItemKey */.AlertModal, obj);
};