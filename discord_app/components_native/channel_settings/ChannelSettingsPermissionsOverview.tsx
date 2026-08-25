// === Module 16173: ChannelPermissionSyncModule ===

// Module 16173 (ChannelPermissionSyncModule)
import applyDefault from "apply" /* 12 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import applyOverwritesAll from "applyOverwrites" /* 4030 */;
import TableRowInner from "TableRowInner" /* 5480 */;
import memoResult1Default from "memoResult1" /* 9845 */;
import RoleLabel from "RoleLabel" /* 10074 */;
import CircleMinusIcon from "CircleMinusIcon" /* 14756 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isEveryoneRole } from "GuildRoleRecordTypeTag" /* 1986 */;
import closure_9 from "ensureGuildLoaded" /* 1391 */;
import closure_10 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_11 from "createGuildRecordFromRust" /* 1910 */;
import closure_12 from "markAllUserIdListsStale" /* 4034 */;
import closure_13 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

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
    let obj4 = channel(closure_1_3[16]);
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
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_1 = tmp2;
              obj1 = tmp3;
              obj1 = undefined;
              const guild_id = closure_1_1.guild_id;
              obj1 = {};
              const merged = Object.assign(closure_1_1.permissionOverwrites);
              let tmp16 = null != guild_id;
              if (tmp16) {
                tmp16 = null == obj1[guild_id];
              }
              if (tmp16) {
                let obj4 = closure_2_2(closure_2_3[17]);
                obj1[guild_id] = obj4.makeEveryoneOverwrite(guild_id);
              }
              c2 = 1;
              c3 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = callback(closure_2_3[18]).checkChattableChannelThresholdMetAfterChannelPermissionDeny(closure_1_0, obj1[guild_id].deny, obj1[guild_id].allow);
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            if (arg1) {
              obj = callback(closure_2_3[19]);
              obj4 = { permissionOverwrites: null };
              obj2 = closure_2_1(closure_2_3[20]);
              obj4[0] = obj2.values(obj1);
              obj.saveChannel(closure_1_0.id, obj4);
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
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
  let obj = channel(4574);
  const channelName = obj.computeChannelName(category, closure_13, closure_12);
  obj = { style: callback3().tableRowGroupContainer, children: null };
  let intl = channel(1236).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = channel(1236).t;
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
  let obj3 = { icon: closure_16(channel(14055).RefreshIcon, {}), label: null, onPress: null };
  let intl2 = tmp3(1236).intl;
  obj3[1] = intl2.string(channel(1236).t.NVwuHq);
  obj3[2] = callback;
  obj2[2] = closure_16(channel(5480).TableRow, obj3);
  obj[1] = closure_16(channel(5873).TableRowGroup, obj2);
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
      tmp4 = callback(ChannelPermissionSyncModule, obj);
    }
  }
  return tmp4;
}
function AddPermission(isEditing) {
  let _require;
  let obj = _require(1500);
  _require = obj.useNavigation();
  if (isEditing.isEditing) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.tableRowGroupContainer;
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp2(1236).intl;
    obj[0] = intl.string(tmp2(1236).t.vPHdP5);
    obj1 = { icon: null, label: null, onPress: null };
    obj1[0] = callback(tmp2(12309).PlusMediumIcon, {});
    const intl2 = tmp2(1236).intl;
    obj1[1] = intl2.string(tmp2(1236).t.fVWxvT);
    obj1[2] = function onPress() {

    };
    const items = [callback(tmp2(5480).TableRow, obj1), ];
    const obj2 = { icon: null, label: null, onPress: null };
    obj2[0] = callback(tmp2(12309).PlusMediumIcon, {});
    const intl3 = tmp2(1236).intl;
    obj2[1] = intl3.string(tmp2(1236).t.riesLt);
    obj2[2] = function onPress() {

    };
    items[1] = callback(tmp2(5480).TableRow, obj2);
    obj[2] = items;
    obj[1] = callback2(tmp2(5873).TableRowGroup, obj);
    return callback(View, obj);
  }
  tmp = callback3();
}
function RoleRow(onDelete) {
  ({ role, isEditing, onSelect } = onDelete);
  ({ name, colorString, colorStrings } = role);
  const tmp = isEveryoneRole(role);
  let obj = { label: callback(RoleLabel.RoleLabel, { name, color: colorString, colors: colorStrings }), arrow: !isEditing, icon: null, onPress: null };
  let tmp2Result = null;
  if (isEditing) {
    tmp2Result = null;
    if (!tmp) {
      obj = { color: null, accessibilityLabel: null };
      obj[0] = ThemesDefault.colors.ICON_FEEDBACK_CRITICAL;
      const intl = tmp3(1236).intl;
      obj[1] = intl.string(tmp3(1236).t.N86XcP);
      tmp2Result = tmp2(tmp3(14756).CircleMinusIcon, obj);
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
  return callback(TableRowInner.TableRow, obj);
}
function RoleOverwrites(guild) {
  guild = guild.guild;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = guild);
  let obj;
  obj = guild(589);
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
    return type === guild(closure_1_3[29]).PermissionOverwriteType.ROLE;
  });
  obj = { style: callback3().tableRowGroupContainer, children: null };
  obj1 = { title: null, hasIcons: true, children: null };
  const intl = tmp2(1236).intl;
  obj1[0] = intl.string(guild(1236).t["LPJmL/"]);
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
  obj[1] = callback(guild(5873).TableRowGroup, obj1);
  return callback(View, obj);
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
  const tmp = callback3();
  const found = applyDefault(channel.permissionOverwrites).filter((type) => type.type === guild_id(table[29]).PermissionOverwriteType.MEMBER);
  const mapped = found.map((id) => user.getUser(id.id));
  const found1 = mapped.filter(guild_id(1370).isNotNullish);
  const arr = applyDefault(channel.permissionOverwrites);
  const valueResult = found1.sortBy((username) => username.username.toLowerCase()).value();
  let tmp4 = null;
  if (valueResult.length > 0) {
    let obj = { style: null, children: null };
    obj[0] = tmp.tableRowGroupContainer;
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp3(1236).intl;
    obj[0] = intl.string(tmp3(1236).t["9Oq93m"]);
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
    obj[1] = callback(tmp3(5873).TableRowGroup, obj);
    tmp4 = callback(View, obj);
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
  let stateFromStores1;
  let stateFromStores2;
  closure_5 = undefined;
  let first;
  closure_7 = undefined;
  let callback;
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
    let obj = navigation(stateFromStores1[14]);
    obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
    const intl = channelId(stateFromStores1[15]).intl;
    obj[0] = intl.formatToPlainString(channelId(stateFromStores1[15]).t.txPV7k, { name: username });
    const intl2 = channelId(stateFromStores1[15]).intl;
    obj[1] = intl2.format(channelId(stateFromStores1[15]).t.xERCnZ, { name: username });
    const intl3 = channelId(stateFromStores1[15]).intl;
    obj[2] = intl3.string(channelId(stateFromStores1[15]).t.gm1Vej);
    const intl4 = channelId(stateFromStores1[15]).intl;
    obj[3] = intl4.string(channelId(stateFromStores1[15]).t.p89ACt);
    obj[4] = function onConfirm() {
      const result = navigation(stateFromStores1[34]).clearPermissionOverwrite(closure_0, closure_0);
    };
    obj.show(obj);
  }
  let obj = channelId(stateFromStores1[24]);
  navigation = obj.useNavigation();
  obj1 = channelId(stateFromStores1[28]);
  const items = [handleClearPermissionOverwrite];
  const items1 = [channelId];
  stateFromStores = obj1.useStateFromStores(items, () => handleClearPermissionOverwrite.getChannel(channelId), items1);
  let obj2 = channelId(stateFromStores1[28]);
  const items2 = [handleClearPermissionOverwrite];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let parent_id;
    if (stateFromStores != null) {
      parent_id = stateFromStores.parent_id;
    }
    return handleClearPermissionOverwrite.getChannel(parent_id);
  });
  let obj3 = channelId(stateFromStores1[28]);
  const items3 = [closure_11];
  stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return closure_1_11.getGuild(guild_id);
  });
  let tmp = callback3();
  const items4 = [closure_10];
  closure_5 = channelId(stateFromStores1[28]).useStateFromStores(items4, () => {
    let rolesSnapshot;
    if (null != stateFromStores2) {
      rolesSnapshot = closure_1_10.getRolesSnapshot(tmp.id);
    }
    return rolesSnapshot;
  });
  const items5 = [stateFromStores, stateFromStores1];
  const memo = first.useMemo(() => {
    let areChannelsLockedResult = null != stateFromStores;
    if (areChannelsLockedResult) {
      areChannelsLockedResult = stateFromStores(stateFromStores1[17]).areChannelsLocked(tmp, stateFromStores1);
      const obj = stateFromStores(stateFromStores1[17]);
    }
    return areChannelsLockedResult;
  }, items5);
  const tmp7 = stateFromStores2(first.useState(false), 2);
  first = tmp7[0];
  closure_7 = tmp7[1];
  callback = first.useCallback(() => {
    callback((arg0) => !arg0);
    const result = channelId(stateFromStores1[32]).DeprecatedLayoutAnimation();
  }, []);
  const items6 = [navigation, first, callback];
  const layoutEffect = first.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = closure_8;
        const intl = closure_1_0(closure_1_3[15]).intl;
        const string = intl.string;
        const t = closure_1_0(closure_1_3[15]).t;
        if (closure_6) {
          let stringResult = string(t.i4jeWR);
        } else {
          stringResult = string(t.bt75uw);
        }
        obj.label = stringResult;
        return closure_1_16(closure_1_0(closure_1_3[33]).HeaderTextButton, obj);
      }
    });
  }, items6);
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = null;
    if (null != stateFromStores2) {
      obj = { style: null, children: null };
      obj[0] = tmp.tableContainer;
      obj = { channel: null, category: null, isEditing: null, locked: null };
      obj[0] = stateFromStores;
      obj[1] = stateFromStores1;
      obj[2] = first;
      obj[3] = memo;
      const items7 = [callback(CategorySync, obj), , , ];
      obj1 = { isEditing: null };
      obj1[0] = first;
      items7[1] = callback(AddPermission, obj1);
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
      items7[2] = callback(RoleOverwrites, obj2);
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
      items7[3] = callback(MemberOverwrites, obj3);
      obj[1] = items7;
      tmp11 = callback2(closure_7, obj);
    }
  }
  return tmp11;
};