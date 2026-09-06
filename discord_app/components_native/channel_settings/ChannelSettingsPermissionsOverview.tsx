// === Module 16825: ChannelPermissionSyncModule ===

// Module 16825 (ChannelPermissionSyncModule)
import applyDefault from "apply" /* 12 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import applyOverwritesAll from "applyOverwrites" /* 4204 */;
import TableRowInner from "TableRowInner" /* 5605 */;
import RoleLabel from "RoleLabel" /* 10270 */;
import memoResult1Default from "memoResult1" /* 10942 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15312 */;
import useGetOrFetchChannelOverwriteUsersDefault from "useGetOrFetchChannelOverwriteUsers" /* 16826 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isEveryoneRole } from "GuildRoleRecordTypeTag" /* 2016 */;
import closure_9 from "ensureGuildLoaded" /* 1957 */;
import closure_10 from "createGuildRoleRecordFromRust" /* 2015 */;
import closure_11 from "createGuildRecordFromRust" /* 1979 */;
import closure_12 from "markAllUserIdListsStale" /* 4209 */;
import closure_13 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function ChannelPermissionSyncModule(channel) {
  channel = channel.channel;
  const category = channel.category;
  const items = [channel, category];
  const callback = React.useCallback(() => {
    let obj = category(closure_1_3[14]);
    obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
    const intl = channel(closure_1_3[15]).intl;
    obj[0] = intl.string(channel(closure_1_3[15]).t.YWMtRe);
    const intl2 = channel(closure_1_3[15]).intl;
    obj = { channelName: channel(closure_1_3[16]).computeChannelName(closure_0, closure_1_13, closure_1_12, true), categoryName: null };
    const obj4 = channel(closure_1_3[16]);
    obj[1] = channel(closure_1_3[16]).computeChannelName(category, closure_1_13, closure_1_12);
    obj[1] = intl2.format(channel(closure_1_3[15]).t["iKW+jY"], obj);
    const intl3 = channel(closure_1_3[15]).intl;
    obj[2] = intl3.string(channel(closure_1_3[15]).t.eW8Gy4);
    const intl4 = channel(closure_1_3[15]).intl;
    obj[3] = intl4.string(channel(closure_1_3[15]).t.s4uM3b);
    closure_0 = closure_1_5(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp5;
              let syncedPermissionOverwrites = tmp2;
              syncedPermissionOverwrites = undefined;
              const guild_id = closure_1_1.guild_id;
              const obj8 = closure_2_2(closure_2_3[17]);
              syncedPermissionOverwrites = obj8.getSyncedPermissionOverwrites(closure_1_1, callback(closure_2_3[18]).getAppChannelBotUserId(closure_1_0));
              const obj9 = callback(closure_2_3[18]);
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(closure_2_3[19]).checkChattableChannelThresholdMetAfterChannelPermissionDeny(closure_1_0, syncedPermissionOverwrites[guild_id].deny, syncedPermissionOverwrites[guild_id].allow);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            if (arg1) {
              obj = callback(closure_2_3[20]);
              const obj3 = { permissionOverwrites: null };
              obj2 = closure_2_1(closure_2_3[21]);
              obj3[0] = obj2.values(syncedPermissionOverwrites);
              obj.saveChannel(closure_1_0.id, obj3);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          c3 = tmp;
          throw tmp15;
        }
      }
    });
    obj[4] = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.show(obj);
  }, items);
  let obj = channel(4713);
  const channelName = obj.computeChannelName(category, closure_13, closure_12);
  obj = { style: callback4().tableRowGroupContainer, children: null };
  let intl = channel(1114).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = channel(1114).t;
  if (channel.locked) {
    obj = { categoryName: null };
    obj[0] = channelName;
    let formatToPlainStringResult = formatToPlainString(t.ETJqLl, obj);
  } else {
    obj1 = { categoryName: null };
    obj1[0] = channelName;
    formatToPlainStringResult = formatToPlainString(t.OIhm0M, obj1);
  }
  let obj2 = { title: formatToPlainStringResult, hasIcons: true, children: null };
  let obj3 = { icon: closure_16(channel(15158).RefreshIcon, {}), label: null, onPress: null };
  let intl2 = tmp3(1114).intl;
  obj3[1] = intl2.string(channel(1114).t.NVwuHq);
  obj3[2] = callback;
  obj2[2] = closure_16(channel(5605).TableRow, obj3);
  obj[1] = closure_16(channel(5687).TableRowGroup, obj2);
  return closure_16(View, obj);
}
function CategorySync(category) {
  category = category.category;
  let tmp4 = null;
  if (null != category) {
    tmp4 = null;
    if (!tmp2) {
      const obj = { channel: null, category: null, locked: null };
      obj[0] = tmp;
      obj[1] = category;
      obj[2] = tmp3;
      tmp4 = callback2(ChannelPermissionSyncModule, obj);
    }
  }
  return tmp4;
}
function AddPermission(isEditing) {
  let _require;
  let obj = _require(1483);
  _require = obj.useNavigation();
  if (isEditing.isEditing) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.tableRowGroupContainer;
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp2(1114).intl;
    obj[0] = intl.string(tmp2(1114).t.vPHdP5);
    obj1 = { icon: null, label: null, onPress: null };
    obj1[0] = callback2(tmp2(12753).PlusMediumIcon, {});
    const intl2 = tmp2(1114).intl;
    obj1[1] = intl2.string(tmp2(1114).t.fVWxvT);
    obj1[2] = function onPress() {

    };
    const items = [callback2(tmp2(5605).TableRow, obj1), ];
    const obj2 = { icon: null, label: null, onPress: null };
    obj2[0] = callback2(tmp2(12753).PlusMediumIcon, {});
    const intl3 = tmp2(1114).intl;
    obj2[1] = intl3.string(tmp2(1114).t.riesLt);
    obj2[2] = function onPress() {

    };
    items[1] = callback2(tmp2(5605).TableRow, obj2);
    obj[2] = items;
    obj[1] = callback3(tmp2(5687).TableRowGroup, obj);
    return callback2(View, obj);
  }
  tmp = callback4();
}
function RoleRow(onDelete) {
  ({ role, isEditing, onSelect } = onDelete);
  ({ name, colorString, colorStrings } = role);
  const tmp = isEveryoneRole(role);
  let obj = { label: callback2(RoleLabel.RoleLabel, { name, color: colorString, colors: colorStrings }), arrow: !isEditing, icon: null, onPress: null };
  let tmp2Result = null;
  if (isEditing) {
    tmp2Result = null;
    if (!tmp) {
      obj = { color: null, accessibilityLabel: null };
      obj[0] = ThemesDefault.colors.ICON_FEEDBACK_CRITICAL;
      const intl = tmp3(1114).intl;
      obj[1] = intl.string(tmp3(1114).t.N86XcP);
      tmp2Result = tmp2(tmp3(15312).CircleMinusIcon, obj);
    }
  }
  obj[2] = tmp2Result;
  onDelete = onSelect;
  if (isEditing) {
    onDelete = onSelect;
    if (!tmp) {
      onDelete = onDelete.onDelete;
    }
  }
  obj[3] = onDelete;
  return callback2(TableRowInner.TableRow, obj);
}
function RoleOverwrites(guild) {
  guild = guild.guild;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = guild);
  let obj;
  obj = guild(504);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getSortedRoles(guild.id));
  obj = {};
  const merged = Object.assign(guild.channel.permissionOverwrites);
  if (null == obj[guild.id]) {
    obj[guild.id] = applyOverwritesAll.makeEveryoneOverwrite(guild.id);
    const obj3 = applyOverwritesAll;
  }
  const found = stateFromStores.filter((arg0) => {
    let type;
    if (obj[arg0.id] != null) {
      type = tmp.type;
    }
    return type === guild(closure_1_3[30]).PermissionOverwriteType.ROLE;
  });
  obj = { style: callback4().tableRowGroupContainer, children: null };
  obj1 = { title: null, hasIcons: true, children: null };
  const intl = tmp2(1114).intl;
  obj1[0] = intl.string(guild(1114).t["LPJmL/"]);
  obj1[2] = found.map((id) => {
    closure_0 = id;
    return closure_1_16(closure_1_22, {
      role: id,
      isEditing: closure_1,
      onSelect() {
        return closure_1_2(user.id);
      },
      onDelete() {
        return closure_1_3(user.id);
      }
    }, id.id);
  });
  obj[1] = callback2(guild(5687).TableRowGroup, obj1);
  return callback2(View, obj);
}
function MemberRow(arg0) {
  ({ isEditing, onSelect } = arg0);
  ({ guildId, user, onDelete } = arg0);
  let obj = { userId: user.id, guildId, onPress: null, arrow: null, leading: null };
  if (isEditing) {
    onSelect = onDelete;
  }
  obj[2] = onSelect;
  obj[3] = !isEditing;
  let tmpResult = null;
  if (isEditing) {
    obj = { color: null, accessibilityLabel: null };
    obj[0] = ThemesDefault.colors.ICON_FEEDBACK_CRITICAL;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.N86XcP);
    tmpResult = tmp(CircleMinusIcon.CircleMinusIcon, obj);
  }
  obj[4] = tmpResult;
  return closure_16(memoResult1Default, obj);
}
function MemberOverwrites(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = channel);
  const tmp = callback4();
  let obj = applyDefault(useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites));
  const tmp3 = useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites);
  const valueResult = obj.sortBy((username) => username.username.toLowerCase()).value();
  let tmp4 = null;
  if (valueResult.length > 0) {
    obj = { style: null, children: null };
    obj[0] = tmp.tableRowGroupContainer;
    obj = { title: null, hasIcons: true, children: null };
    const intl = guild_id(1114).intl;
    obj[0] = intl.string(guild_id(1114).t["9Oq93m"]);
    obj[2] = valueResult.map((id) => {
      closure_0 = id;
      return closure_1_16(closure_1_24, {
        guildId: closure_0,
        user: id,
        isEditing: closure_1,
        onSelect() {
          return closure_1_2(user.id);
        },
        onDelete() {
          return closure_1_3(user.id);
        }
      }, id.id);
    });
    obj[1] = callback2(guild_id(5687).TableRowGroup, obj);
    tmp4 = callback2(View, obj);
  }
  return tmp4;
}
({ PermissionOverrideType: closure_14, ChannelSettingsSections: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
createCacheKey = { tableRowGroupContainer: null, tableContainer: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginHorizontal: ThemesDefault.space.PX_12 };
let closure_18 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginHorizontal: ThemesDefault.space.PX_12 };
let result = require("set").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx");

export default function ChannelSettingsPermissionsOverview(channelId) {
  channelId = channelId.channelId;
  let navigation;
  let stateFromStores;
  let stateFromStores2;
  let callback;
  let first;
  let React;
  callback = undefined;
  function handleClearPermissionOverwrite(arg0) {
    closure_0 = arg0;
    let tmp;
    if (table != null) {
      tmp = table[arg0];
    }
    const user = closure_1_13.getUser(arg0);
    if (null != tmp) {
      let username = tmp.name;
    } else if (user != null) {
      username = user.username;
    }
    let obj = navigation(stateFromStores2[14]);
    obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
    const intl = channelId(stateFromStores2[15]).intl;
    obj[0] = intl.formatToPlainString(channelId(stateFromStores2[15]).t.txPV7k, { name: username });
    const intl2 = channelId(stateFromStores2[15]).intl;
    obj[1] = intl2.format(channelId(stateFromStores2[15]).t.xERCnZ, { name: username });
    const intl3 = channelId(stateFromStores2[15]).intl;
    obj[2] = intl3.string(channelId(stateFromStores2[15]).t.gm1Vej);
    const intl4 = channelId(stateFromStores2[15]).intl;
    obj[3] = intl4.string(channelId(stateFromStores2[15]).t.p89ACt);
    obj[4] = function onConfirm() {
      const result = navigation(stateFromStores2[35]).clearPermissionOverwrite(closure_0, closure_0);
    };
    obj.show(obj);
  }
  let obj = channelId(stateFromStores2[25]);
  navigation = obj.useNavigation();
  obj1 = channelId(stateFromStores2[29]);
  const items = [closure_9];
  const items1 = [channelId];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_9.getChannel(channelId), items1);
  let obj2 = channelId(stateFromStores2[18]);
  const appChannelBotUserId = obj2.useAppChannelBotUserId(stateFromStores);
  let obj3 = channelId(stateFromStores2[29]);
  const items2 = [closure_9];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let parent_id;
    if (stateFromStores != null) {
      parent_id = stateFromStores.parent_id;
    }
    return closure_1_9.getChannel(parent_id);
  });
  let tmp = callback4();
  const tmp2 = stateFromStores2;
  const items3 = [closure_11];
  stateFromStores2 = channelId(stateFromStores2[29]).useStateFromStores(items3, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return closure_1_11.getGuild(guild_id);
  });
  const obj5 = channelId(stateFromStores2[29]);
  const items4 = [closure_10];
  callback = channelId(stateFromStores2[29]).useStateFromStores(items4, () => {
    let rolesSnapshot;
    if (null != stateFromStores2) {
      rolesSnapshot = closure_1_10.getRolesSnapshot(tmp.id);
    }
    return rolesSnapshot;
  });
  let areChannelsLockedResult = null != stateFromStores;
  if (areChannelsLockedResult) {
    areChannelsLockedResult = stateFromStores(tmp2[17]).areChannelsLocked(stateFromStores, stateFromStores1, appChannelBotUserId);
    const obj7 = stateFromStores(tmp2[17]);
  }
  const tmp10 = callback(React.useState(false), 2);
  first = tmp10[0];
  React = tmp10[1];
  callback = React.useCallback(() => {
    callback((arg0) => !arg0);
    const result = channelId(stateFromStores2[33]).DeprecatedLayoutAnimation();
  }, []);
  const items5 = [navigation, first, callback];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = closure_7;
        const intl = closure_1_0(closure_1_3[15]).intl;
        const string = intl.string;
        const t = closure_1_0(closure_1_3[15]).t;
        if (closure_5) {
          let stringResult = string(t.i4jeWR);
        } else {
          stringResult = string(t.bt75uw);
        }
        obj.label = stringResult;
        return closure_1_16(closure_1_0(closure_1_3[34]).HeaderTextButton, obj);
      }
    });
  }, items5);
  let tmp14 = null;
  if (null != stateFromStores) {
    tmp14 = null;
    if (null != stateFromStores2) {
      obj = { style: null, children: null };
      obj[0] = tmp.tableContainer;
      obj = { channel: null, category: null, isEditing: null, locked: null };
      obj[0] = stateFromStores;
      obj[1] = stateFromStores1;
      obj[2] = first;
      obj[3] = areChannelsLockedResult;
      const items6 = [callback2(CategorySync, obj), , , ];
      obj1 = { isEditing: null };
      obj1[0] = first;
      items6[1] = callback2(AddPermission, obj1);
      obj2 = { guild: null, channel: null, isEditing: null, onSelectRow: null, onDeleteRow: null };
      obj2[0] = stateFromStores2;
      obj2[1] = stateFromStores;
      obj2[2] = first;
      obj2[3] = function onSelectRow(arg0) {
        if (!first) {
          const obj = { type: null, id: null };
          obj[0] = tmp;
          obj[1] = arg0;
          navigation.push(closure_1_15.PERMISSION_OVERRIDES, obj);
        }
      };
      obj2[4] = function onDeleteRow(arg0) {
        handleClearPermissionOverwrite(arg0);
      };
      items6[2] = callback2(RoleOverwrites, obj2);
      obj3 = { channel: null, isEditing: null, onSelectRow: null, onDeleteRow: null };
      obj3[0] = stateFromStores;
      obj3[1] = first;
      obj3[2] = function onSelectRow(arg0) {
        if (!first) {
          const obj = { type: null, id: null };
          obj[0] = tmp;
          obj[1] = arg0;
          navigation.push(closure_1_15.PERMISSION_OVERRIDES, obj);
        }
      };
      obj3[3] = function onDeleteRow(arg0) {
        handleClearPermissionOverwrite(arg0);
      };
      items6[3] = callback2(MemberOverwrites, obj3);
      obj[1] = items6;
      tmp14 = callback3(callback, obj);
    }
  }
  return tmp14;
};