// === Module 17293: ChannelSettingsPermissionsOverview ===

// Module 17293 (ChannelSettingsPermissionsOverview)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Server from "Server" /* 1978 */;
import PermissionUtilsAll from "PermissionUtils" /* 4400 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4769 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5798 */;
import TableRow from "TableRow" /* 5822 */;
import RoleLabel from "RoleLabel" /* 10528 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 11207 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15584 */;
import useGetOrFetchChannelOverwriteUsersDefault from "useGetOrFetchChannelOverwriteUsers" /* 17294 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import GuildStore from "GuildStore" /* 2063 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function ChannelPermissionSyncModule(channel) {
  channel = channel.channel;
  const category = channel.category;
  const items = [channel, category];
  const callback = noop.useCallback(() => {
    let obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
    const intl = channel(1115).intl;
    obj2.title = intl.string(channel(1115).t.YWMtRe);
    const intl2 = channel(1115).intl;
    let obj3 = { channelName: null, categoryName: null };
    let obj = category(5108);
    obj3.channelName = channel(4909).computeChannelName(closure_0, UserStore, RelationshipStore, true);
    let obj4 = channel(4909);
    obj3.categoryName = channel(4909).computeChannelName(category, UserStore, RelationshipStore);
    obj2.body = intl2.format(channel(1115).t["iKW+jY"], obj3);
    const intl3 = channel(1115).intl;
    obj2.confirmText = intl3.string(channel(1115).t.eW8Gy4);
    const intl4 = channel(1115).intl;
    obj2.cancelText = intl4.string(channel(1115).t.s4uM3b);
    closure_0 = asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              const guild_id = tmp5.guild_id;
              const obj8 = PermissionUtilsAll;
              const syncedPermissionOverwrites = obj8.getSyncedPermissionOverwrites(tmp5, tmp2(11861).getAppChannelBotUserId(tmp2));
              closure_128_0 = syncedPermissionOverwrites;
              const obj9 = tmp2(11861);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: tmp2(9825).checkChattableChannelThresholdMetAfterChannelPermissionDeny(tmp2, syncedPermissionOverwrites[guild_id].deny, syncedPermissionOverwrites[guild_id].allow), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            if (value) {
              const obj7 = { permissionOverwrites: null };
              const obj = tmp2(8903);
              obj7.permissionOverwrites = category(12).values(closure_128_0);
              obj.saveChannel(tmp2.id, obj7);
              const obj3 = category(12);
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
    obj2.onConfirm = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.show(obj2);
  }, items);
  const tmp = closure_18();
  const channelName = channel(4909).computeChannelName(category, UserStore, RelationshipStore);
  let obj2 = { style: tmp.tableRowGroupContainer, children: null };
  let intl = channel(1115).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = channel(1115).t;
  if (channel.locked) {
    let obj3 = { categoryName: channelName };
    let formatToPlainStringResult = formatToPlainString(t.ETJqLl, obj3);
  } else {
    let obj4 = { categoryName: channelName };
    formatToPlainStringResult = formatToPlainString(t.OIhm0M, obj4);
  }
  let obj5 = { title: formatToPlainStringResult, hasIcons: true, children: null };
  let obj6 = { icon: closure_16(channel(15425).RefreshIcon, {}), label: null, onPress: null };
  let intl2 = tmp3(1115).intl;
  obj6.label = intl2.string(channel(1115).t.NVwuHq);
  obj6.onPress = callback;
  obj5.children = closure_16(channel(5822).TableRow, obj6);
  obj2.children = closure_16(channel(5904).TableRowGroup, obj5);
  return closure_16(View, obj2);
}
function CategorySync(category) {
  category = category.category;
  let tmp4 = null;
  if (null != category) {
    tmp4 = null;
    if (!tmp2) {
      const obj = { channel: tmp, category, locked: tmp3 };
      tmp4 = value2(ChannelPermissionSyncModule, obj);
    }
  }
  return tmp4;
}
function AddPermission(isEditing) {
  _require = undefined;
  const tmp = closure_18();
  _require = require("useNavigation").useNavigation();
  if (isEditing.isEditing) {
    return null;
  } else {
    const obj2 = { style: tmp.tableRowGroupContainer, children: null };
    const obj3 = { title: null, hasIcons: true, children: null };
    const intl = tmp2(1115).intl;
    obj3.title = intl.string(tmp2(1115).t.vPHdP5);
    const obj4 = { icon: closure_16(tmp2(13006).PlusMediumIcon, {}), label: null, onPress: null };
    const intl2 = tmp2(1115).intl;
    obj4.label = intl2.string(tmp2(1115).t.fVWxvT);
    obj4.onPress = function onPress() {
      closure_0.push(constants2.NEW_PERMISSION, { type: constants.ROLE });
    };
    const items = [closure_16(tmp2(5822).TableRow, obj4), ];
    const obj5 = { icon: closure_16(tmp2(13006).PlusMediumIcon, {}), label: null, onPress: null };
    const intl3 = tmp2(1115).intl;
    obj5.label = intl3.string(tmp2(1115).t.riesLt);
    obj5.onPress = function onPress() {
      closure_0.push(constants2.NEW_PERMISSION, { type: constants.MEMBER });
    };
    items[1] = closure_16(tmp2(5822).TableRow, obj5);
    obj3.children = items;
    obj2.children = closure_17(tmp2(5904).TableRowGroup, obj3);
    return closure_16(View, obj2);
  }
  const obj = require("useNavigation");
}
function RoleRow(onDelete) {
  ({ role, isEditing, onSelect } = onDelete);
  ({ name, colorString, colorStrings } = role);
  const tmp = isEveryoneRole(role);
  const obj = { label: value2(RoleLabel.RoleLabel, { name, color: colorString, colors: colorStrings }), arrow: !isEditing, icon: null, onPress: null };
  let tmp2Result = null;
  if (isEditing) {
    tmp2Result = null;
    if (!tmp) {
      const obj2 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, accessibilityLabel: null };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t.N86XcP);
      tmp2Result = value2(CircleMinusIcon.CircleMinusIcon, obj2);
    }
  }
  obj.icon = tmp2Result;
  onDelete = onSelect;
  if (isEditing) {
    onDelete = onSelect;
    if (!tmp) {
      onDelete = onDelete.onDelete;
    }
  }
  obj.onPress = onDelete;
  return value2(TableRow.TableRow, obj);
}
function RoleOverwrites(guild) {
  guild = guild.guild;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = guild);
  const tmp = closure_18();
  const items = [GuildRoleStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
  const obj2 = {};
  const merged = Object.assign(guild.channel.permissionOverwrites);
  if (null == obj2[guild.id]) {
    obj2[guild.id] = PermissionUtilsAll.makeEveryoneOverwrite(guild.id);
  }
  const found = stateFromStores.filter((item) => {
    let type;
    if (obj2[item.id] != null) {
      type = tmp.type;
    }
    return type === Server.PermissionOverwriteType.ROLE;
  });
  const obj4 = { style: tmp.tableRowGroupContainer, children: null };
  const obj5 = { title: null, hasIcons: true, children: null };
  const intl = tmp2(1115).intl;
  obj5.title = intl.string(guild(1115).t["LPJmL/"]);
  obj5.children = found.map((role) => {
    const user = role;
    return closure_1_16(RoleRow, {
      role,
      isEditing,
      onSelect() {
        return importAll(user.id);
      },
      onDelete() {
        return dependencyMap(user.id);
      }
    }, role.id);
  });
  obj4.children = closure_16(guild(5904).TableRowGroup, obj5);
  return closure_16(View, obj4);
}
function MemberRow(arg0) {
  ({ isEditing, onSelect } = arg0);
  ({ guildId, user, onDelete } = arg0);
  const obj = { userId: user.id, guildId, onPress: null, arrow: null, leading: null };
  if (isEditing) {
    onSelect = onDelete;
  }
  obj.onPress = onSelect;
  obj.arrow = !isEditing;
  let tmpResult = null;
  if (isEditing) {
    const obj2 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, accessibilityLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.N86XcP);
    tmpResult = value2(CircleMinusIcon.CircleMinusIcon, obj2);
  }
  obj.leading = tmpResult;
  return value2(DetailedGuildIdentityUserRowDefault, obj);
}
function MemberOverwrites(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = channel);
  const tmp = closure_18();
  const tmp3 = useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites);
  const obj = _modDef12(useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites));
  const valueResult = _modDef12(useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites)).sortBy((username) => username.username.toLowerCase()).value();
  let tmp4 = null;
  if (valueResult.length > 0) {
    const obj2 = { style: tmp.tableRowGroupContainer, children: null };
    const obj3 = { title: null, hasIcons: true, children: null };
    const intl = guild_id(1115).intl;
    obj3.title = intl.string(guild_id(1115).t["9Oq93m"]);
    obj3.children = valueResult.map((user) => {
      guildId = user;
      return closure_1_16(MemberRow, {
        guildId,
        user,
        isEditing,
        onSelect() {
          return importAll(user.id);
        },
        onDelete() {
          return dependencyMap(user.id);
        }
      }, user.id);
    });
    obj2.children = closure_16(guild_id(5904).TableRowGroup, obj3);
    tmp4 = closure_16(View, obj2);
  }
  return tmp4;
}
const View = fn(17).View;
const isEveryoneRole = fn(2100).isEveryoneRole;
const Constants = fn(1074);
({ PermissionOverrideType: closure_14, ChannelSettingsSections: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { tableRowGroupContainer: { marginBottom: nativeDefault.space.PX_16 }, tableContainer: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.tableContainer = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_18 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx");

export default function ChannelSettingsPermissionsOverview(channelId) {
  channelId = channelId.channelId;
  let stateFromStores2;
  isEditing = undefined;
  noop = undefined;
  let callback;
  function handleClearPermissionOverwrite(arg0) {
    closure_0 = arg0;
    let tmp;
    if (closure_4 != null) {
      tmp = closure_4[arg0];
    }
    user = user.getUser(arg0);
    if (null != tmp) {
      let username = tmp.name;
    } else if (user != null) {
      username = user.username;
    }
    const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
    const intl = channelId(stateFromStores2[15]).intl;
    obj2.title = intl.formatToPlainString(channelId(stateFromStores2[15]).t.txPV7k, { name: username });
    const intl2 = channelId(stateFromStores2[15]).intl;
    obj2.body = intl2.format(channelId(stateFromStores2[15]).t.xERCnZ, { name: username });
    const intl3 = channelId(stateFromStores2[15]).intl;
    obj2.cancelText = intl3.string(channelId(stateFromStores2[15]).t.gm1Vej);
    const intl4 = channelId(stateFromStores2[15]).intl;
    obj2.confirmText = intl4.string(channelId(stateFromStores2[15]).t.p89ACt);
    obj2.onConfirm = function onConfirm() {
      const result = ChannelActionCreatorsDefault.clearPermissionOverwrite(channelId, closure_0);
    };
    navigation(stateFromStores2[14]).show(obj2);
  }
  let tmp = closure_18();
  const tmp2 = stateFromStores2;
  const navigation = channelId(stateFromStores2[25]).useNavigation();
  let obj = channelId(stateFromStores2[25]);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(stateFromStores2[29]).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let obj2 = channelId(stateFromStores2[29]);
  const appChannelBotUserId = channelId(stateFromStores2[18]).useAppChannelBotUserId(stateFromStores);
  const obj3 = channelId(stateFromStores2[18]);
  const items2 = [ChannelStore];
  const stateFromStores1 = channelId(stateFromStores2[29]).useStateFromStores(items2, () => {
    let parent_id;
    if (stateFromStores != null) {
      parent_id = stateFromStores.parent_id;
    }
    return ChannelStore.getChannel(parent_id);
  });
  const obj4 = channelId(stateFromStores2[29]);
  const items3 = [GuildStore];
  stateFromStores2 = channelId(stateFromStores2[29]).useStateFromStores(items3, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const obj5 = channelId(stateFromStores2[29]);
  const items4 = [GuildRoleStore];
  _slicedToArray = channelId(stateFromStores2[29]).useStateFromStores(items4, () => {
    let rolesSnapshot;
    if (null != stateFromStores2) {
      rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp.id);
    }
    return rolesSnapshot;
  });
  let areChannelsLockedResult = null != stateFromStores;
  if (areChannelsLockedResult) {
    areChannelsLockedResult = stateFromStores(tmp2[17]).areChannelsLocked(stateFromStores, stateFromStores1, appChannelBotUserId);
    const obj7 = stateFromStores(tmp2[17]);
  }
  [isEditing, noop] = noop.useState(false);
  callback = noop.useCallback(() => {
    closure_6((arg0) => !arg0);
    const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
  }, []);
  const items5 = [navigation, isEditing, callback];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = onPress;
        const intl = channelId(stateFromStores2[15]).intl;
        const string = intl.string;
        const t = channelId(stateFromStores2[15]).t;
        if (isEditing) {
          let stringResult = string(t.i4jeWR);
        } else {
          stringResult = string(t.bt75uw);
        }
        obj.label = stringResult;
        return closure_2_16(channelId(stateFromStores2[34]).HeaderTextButton, obj);
      }
    });
  }, items5);
  let tmp14 = null;
  if (null != stateFromStores) {
    tmp14 = null;
    if (null != stateFromStores2) {
      const obj8 = { style: tmp.tableContainer, children: null };
      const obj9 = { channel: stateFromStores, category: stateFromStores1, isEditing, locked: areChannelsLockedResult };
      const items6 = [closure_16(CategorySync, obj9), , , ];
      const obj10 = { isEditing };
      items6[1] = closure_16(AddPermission, obj10);
      const obj11 = {
        guild: stateFromStores2,
        channel: stateFromStores,
        isEditing,
        onSelectRow(id) {
              if (!first) {
                navigation.push(constants2.PERMISSION_OVERRIDES, obj);
              }
              obj = { type: constants.ROLE, id };
            },
        onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            }
      };
      items6[2] = closure_16(RoleOverwrites, obj11);
      const obj12 = {
        channel: stateFromStores,
        isEditing,
        onSelectRow(id) {
              if (!first) {
                navigation.push(constants2.PERMISSION_OVERRIDES, obj);
              }
              obj = { type: constants.MEMBER, id };
            },
        onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            }
      };
      items6[3] = closure_16(MemberOverwrites, obj12);
      obj8.children = items6;
      tmp14 = closure_17(callback, obj8);
    }
  }
  return tmp14;
};