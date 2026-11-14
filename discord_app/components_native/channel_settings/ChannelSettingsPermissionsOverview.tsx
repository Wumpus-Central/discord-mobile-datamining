// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import Server from "../../flow/Server.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import TableRow from "../../design/components/TableRow/native/TableRow.native.tsx";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import DetailedGuildIdentityUserRowDefault from "../../modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx";
import RoleLabel from "../../design/void/RoleLabel/native/RoleLabel.tsx";
import CircleMinusIcon from "../../design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx";
import useGetOrFetchChannelOverwriteUsersDefault from "../../modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function ChannelPermissionSyncModule(channel) {
  channel = channel.channel;
  const category = channel.category;
  items = [channel, category];
  const callback = noop.useCallback(() => {
    let obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
    const intl = channel(1113).intl;
    obj2.title = intl.string(channel(1113).t.YWMtRe);
    const intl2 = channel(1113).intl;
    let obj3 = { channelName: null, categoryName: null };
    let obj = category(6268);
    obj3.channelName = channel(5954).computeChannelName(closure_0, UserStore, RelationshipStore, true);
    let obj4 = channel(5954);
    obj3.categoryName = channel(5954).computeChannelName(category, UserStore, RelationshipStore);
    obj2.body = intl2.format(channel(1113).t["iKW+jY"], obj3);
    const intl3 = channel(1113).intl;
    obj2.confirmText = intl3.string(channel(1113).t.eW8Gy4);
    const intl4 = channel(1113).intl;
    obj2.cancelText = intl4.string(channel(1113).t.s4uM3b);
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
              const syncedPermissionOverwrites = obj8.getSyncedPermissionOverwrites(
                tmp5,
                tmp2(12560).getAppChannelBotUserId(tmp2),
              );
              closure_128_0 = syncedPermissionOverwrites;
              const obj9 = tmp2(12560);
              c2 = 1;
              c3 = 1;
              const obj5 = {
                value: tmp2(8133).checkChattableChannelThresholdMetAfterChannelPermissionDeny(
                  tmp2,
                  syncedPermissionOverwrites[guild_id].deny,
                  syncedPermissionOverwrites[guild_id].allow,
                ),
                done: false,
              };
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
              const obj = tmp2(10919);
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
    obj2.onConfirm = function onConfirm() {
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
  const channelName = channel(5954).computeChannelName(category, UserStore, RelationshipStore);
  let obj2 = { style: tmp.tableRowGroupContainer, children: null };
  let intl = channel(1113).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = channel(1113).t;
  if (channel.locked) {
    let obj3 = { categoryName: channelName };
    let formatToPlainStringResult = formatToPlainString(t.ETJqLl, obj3);
  } else {
    let obj4 = { categoryName: channelName };
    formatToPlainStringResult = formatToPlainString(t.OIhm0M, obj4);
  }
  let obj5 = { title: formatToPlainStringResult, hasIcons: true, children: null };
  let obj6 = { icon: closure_16(channel(13308).RefreshIcon, {}), label: null, onPress: null };
  let intl2 = tmp3(1113).intl;
  obj6.label = intl2.string(channel(1113).t.NVwuHq);
  obj6.onPress = callback;
  obj5.children = closure_16(channel(7443).TableRow, obj6);
  obj2.children = closure_16(channel(7746).TableRowGroup, obj5);
  return closure_16(View, obj2);
}
function AddPermission() {
  const tmp = closure_18();
  _require = require("useNavigation").useNavigation();
  const obj2 = { style: tmp.tableRowGroupContainer, children: null };
  const obj3 = { title: null, hasIcons: true, children: null };
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t.vPHdP5);
  const obj4 = { icon: closure_16(require("PlusMediumIcon").PlusMediumIcon, {}), label: null, onPress: null };
  const intl2 = require("util").intl;
  obj4.label = intl2.string(require("util").t.fVWxvT);
  obj4.onPress = function onPress() {
    closure_0.push(constants2.NEW_PERMISSION, { type: constants.ROLE });
  };
  items = [closure_16(require("TableRow").TableRow, obj4)];
  const obj5 = { icon: closure_16(require("PlusMediumIcon").PlusMediumIcon, {}), label: null, onPress: null };
  const intl3 = require("util").intl;
  obj5.label = intl3.string(require("util").t.riesLt);
  obj5.onPress = function onPress() {
    closure_0.push(constants2.NEW_PERMISSION, { type: constants.MEMBER });
  };
  items[1] = closure_16(require("TableRow").TableRow, obj5);
  obj3.children = items;
  obj2.children = closure_17(require("TableRowGroup").TableRowGroup, obj3);
  return closure_16(View, obj2);
}
function RoleRow(onDelete) {
  ({ role, isEditing, onSelect } = onDelete);
  ({ name, colorString, colorStrings } = role);
  const tmp = isEveryoneRole(role);
  const obj = {
    label: closure_1_16(RoleLabel.RoleLabel, { name, color: colorString, colors: colorStrings }),
    arrow: !isEditing,
    icon: null,
    onPress: null,
  };
  let tmp2Result = null;
  if (isEditing) {
    tmp2Result = null;
    if (!tmp) {
      const obj2 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, accessibilityLabel: null };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t.N86XcP);
      tmp2Result = closure_1_16(CircleMinusIcon.CircleMinusIcon, obj2);
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
  return closure_1_16(TableRow.TableRow, obj);
}
function RoleOverwrites(guild) {
  guild = guild.guild;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = guild);
  const tmp = closure_18();
  items = [GuildRoleStore];
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
  const intl = tmp2(1113).intl;
  obj5.title = intl.string(guild(1113).t["LPJmL/"]);
  obj5.children = found.map((role) => {
    const user = role;
    return closure_1_16(
      RoleRow,
      {
        role,
        isEditing,
        onSelect() {
          return importAll(user.id);
        },
        onDelete() {
          return dependencyMap(user.id);
        },
      },
      role.id,
    );
  });
  obj4.children = closure_16(guild(7746).TableRowGroup, obj5);
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
    tmpResult = closure_1_16(CircleMinusIcon.CircleMinusIcon, obj2);
  }
  obj.leading = tmpResult;
  return closure_1_16(DetailedGuildIdentityUserRowDefault, obj);
}
function MemberOverwrites(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = channel);
  const tmp = closure_18();
  const tmp3 = useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites);
  const obj = applyDefault(useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites));
  const valueResult = applyDefault(useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites))
    .sortBy((username) => username.username.toLowerCase())
    .value();
  let tmp4 = null;
  if (valueResult.length > 0) {
    const obj2 = { style: tmp.tableRowGroupContainer, children: null };
    const obj3 = { title: null, hasIcons: true, children: null };
    const intl = guild_id(1113).intl;
    obj3.title = intl.string(guild_id(1113).t["9Oq93m"]);
    obj3.children = valueResult.map((user) => {
      guildId = user;
      return closure_1_16(
        MemberRow,
        {
          guildId,
          user,
          isEditing,
          onSelect() {
            return importAll(user.id);
          },
          onDelete() {
            return dependencyMap(user.id);
          },
        },
        user.id,
      );
    });
    obj2.children = closure_16(guild_id(7746).TableRowGroup, obj3);
    tmp4 = closure_16(View, obj2);
  }
  return tmp4;
}
const View = fn(17).View;
const isEveryoneRole = fn(5213).isEveryoneRole;
const Constants = fn(1072);
({ PermissionOverrideType: closure_14, ChannelSettingsSections: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5306);
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
  trigger = undefined;
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
  const navigation = channelId(stateFromStores2[25]).useNavigation();
  let obj = channelId(stateFromStores2[25]);
  items = [handleClearPermissionOverwrite];
  const items1 = [channelId];
  const stateFromStores = channelId(stateFromStores2[29]).useStateFromStores(
    items,
    () => ChannelStore.getChannel(channelId),
    items1,
  );
  let obj2 = channelId(stateFromStores2[29]);
  const appChannelBotUserId = channelId(stateFromStores2[18]).useAppChannelBotUserId(stateFromStores);
  const obj3 = channelId(stateFromStores2[18]);
  const items2 = [handleClearPermissionOverwrite];
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
    areChannelsLockedResult = stateFromStores(tmp3[17]).areChannelsLocked(
      stateFromStores,
      stateFromStores1,
      appChannelBotUserId,
    );
    const obj7 = stateFromStores(tmp3[17]);
  }
  [isEditing, noop] = noop.useState(false);
  const obj6 = channelId(stateFromStores2[29]);
  ({ entering, exiting } = navigation(stateFromStores2[33])());
  const tmp14 = navigation(stateFromStores2[33])();
  const triggeredLayoutTransition = channelId(stateFromStores2[33]).useTriggeredLayoutTransition();
  ({ layout, trigger } = triggeredLayoutTransition);
  const items5 = [trigger];
  callback = noop.useCallback(() => {
    trigger();
    closure_6((arg0) => !arg0);
  }, items5);
  const items6 = [navigation, isEditing, callback];
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
      },
    });
  }, items6);
  let tmp19Result4 = null;
  if (null != stateFromStores) {
    tmp19Result4 = null;
    if (null != stateFromStores2) {
      const obj8 = { style: tmp.tableContainer, children: null };
      let tmp19Result = null;
      if (null != stateFromStores1) {
        tmp19Result = null;
        if (!isEditing) {
          const obj9 = { entering, exiting, children: null };
          const obj10 = { channel: stateFromStores, category: stateFromStores1, locked: areChannelsLockedResult };
          obj9.children = closure_16(ChannelPermissionSyncModule, obj10);
          tmp19Result = closure_16(tmp13(tmp3[36]).View, obj9);
        }
      }
      const items7 = [tmp19Result, , ,];
      let tmp19Result3 = null;
      if (!isEditing) {
        const obj11 = { entering, exiting, children: closure_16(AddPermission, {}) };
        tmp19Result3 = closure_16(tmp13(tmp3[36]).View, obj11);
      }
      const obj12 = { skipEntering: true, children: null };
      items7[1] = tmp19Result3;
      const obj13 = { layout, children: null };
      const obj14 = {
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
        },
      };
      obj13.children = closure_16(RoleOverwrites, obj14);
      items7[2] = closure_16(tmp13(tmp3[36]).View, obj13);
      const obj15 = { layout, children: null };
      const obj16 = {
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
        },
      };
      obj15.children = closure_16(MemberOverwrites, obj16);
      items7[3] = closure_16(tmp13(tmp3[36]).View, obj15);
      obj8.children = items7;
      obj12.children = closure_17(trigger, obj8);
      tmp19Result4 = closure_16(tmp2(tmp3[36]).LayoutAnimationConfig, obj12);
    }
  }
  return tmp19Result4;
}
