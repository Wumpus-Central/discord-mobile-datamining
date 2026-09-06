// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import Server from "../../flow/Server.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import DeprecatedLayoutAnimation from "../../modules/animations/native/DeprecatedLayoutAnimation.tsx";
import TableRow from "../../design/components/TableRow/native/TableRow.native.tsx";
import RoleLabel from "../../design/void/RoleLabel/native/RoleLabel.tsx";
import DetailedGuildIdentityUserRowDefault from "../../modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx";
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
  const items = [channel, category];
  const callback = noop.useCallback(() => {
    category(4904);
    let obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
    const intl = channel(1114).intl;
    obj.title = intl.string(channel(1114).t.YWMtRe);
    const intl2 = channel(1114).intl;
    obj = {
      channelName: channel(4713).computeChannelName(closure_0, UserStore, RelationshipStore, true),
      categoryName: null,
    };
    const obj4 = channel(4713);
    obj.categoryName = channel(4713).computeChannelName(category, UserStore, RelationshipStore);
    obj.body = intl2.format(channel(1114).t["iKW+jY"], obj);
    const intl3 = channel(1114).intl;
    obj.confirmText = intl3.string(channel(1114).t.eW8Gy4);
    const intl4 = channel(1114).intl;
    obj.cancelText = intl4.string(channel(1114).t.s4uM3b);
    closure_0 = asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              const guild_id = tmp5.guild_id;
              const obj8 = PermissionUtilsAll;
              const syncedPermissionOverwrites = obj8.getSyncedPermissionOverwrites(
                tmp5,
                tmp2(11610).getAppChannelBotUserId(tmp2),
              );
              closure_128_0 = syncedPermissionOverwrites;
              const obj9 = tmp2(11610);
              c2 = 1;
              c3 = 1;
              const obj1 = {
                value: tmp2(9740).checkChattableChannelThresholdMetAfterChannelPermissionDeny(
                  tmp2,
                  syncedPermissionOverwrites[guild_id].deny,
                  syncedPermissionOverwrites[guild_id].allow,
                ),
                done: false,
              };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            if (value) {
              obj = tmp2(8625);
              const obj3 = { permissionOverwrites: null };
              obj2 = category(12);
              obj3.permissionOverwrites = obj2.values(closure_128_0);
              obj.saveChannel(tmp2.id, obj3);
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
    obj.onConfirm = function () {
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
  const channelName = obj.computeChannelName(category, UserStore, RelationshipStore);
  obj = { style: closure_18().tableRowGroupContainer, children: null };
  let intl = channel(1114).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = channel(1114).t;
  if (channel.locked) {
    obj = { categoryName: channelName };
    let formatToPlainStringResult = formatToPlainString(t.ETJqLl, obj);
  } else {
    let obj1 = { categoryName: channelName };
    formatToPlainStringResult = formatToPlainString(t.OIhm0M, obj1);
  }
  let obj2 = { title: formatToPlainStringResult, hasIcons: true, children: null };
  let obj3 = { icon: closure_16(channel(15158).RefreshIcon, {}), label: null, onPress: null };
  let intl2 = tmp3(1114).intl;
  obj3.label = intl2.string(channel(1114).t.NVwuHq);
  obj3.onPress = callback;
  obj2.children = closure_16(channel(5605).TableRow, obj3);
  obj.children = closure_16(channel(5687).TableRowGroup, obj2);
  return closure_16(View, obj);
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
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  if (isEditing.isEditing) {
    return null;
  } else {
    obj = { style: tmp.tableRowGroupContainer, children: null };
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp2(1114).intl;
    obj.title = intl.string(tmp2(1114).t.vPHdP5);
    const obj1 = { icon: closure_16(tmp2(12753).PlusMediumIcon, {}), label: null, onPress: null };
    const intl2 = tmp2(1114).intl;
    obj1.label = intl2.string(tmp2(1114).t.fVWxvT);
    obj1.onPress = function onPress() {
      closure_0.push(constants2.NEW_PERMISSION, { type: constants.ROLE });
    };
    const items = [closure_16(tmp2(5605).TableRow, obj1)];
    const obj2 = { icon: closure_16(tmp2(12753).PlusMediumIcon, {}), label: null, onPress: null };
    const intl3 = tmp2(1114).intl;
    obj2.label = intl3.string(tmp2(1114).t.riesLt);
    obj2.onPress = function onPress() {
      closure_0.push(constants2.NEW_PERMISSION, { type: constants.MEMBER });
    };
    items[1] = closure_16(tmp2(5605).TableRow, obj2);
    obj.children = items;
    obj.children = closure_17(tmp2(5687).TableRowGroup, obj);
    return closure_16(View, obj);
  }
  tmp = closure_18();
}
function RoleRow(onDelete) {
  ({ role, isEditing, onSelect } = onDelete);
  ({ name, colorString, colorStrings } = role);
  const tmp = isEveryoneRole(role);
  let obj = {
    label: value2(RoleLabel.RoleLabel, { name, color: colorString, colors: colorStrings }),
    arrow: !isEditing,
    icon: null,
    onPress: null,
  };
  let tmp2Result = null;
  if (isEditing) {
    tmp2Result = null;
    if (!tmp) {
      obj = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, accessibilityLabel: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.N86XcP);
      tmp2Result = value2(CircleMinusIcon.CircleMinusIcon, obj);
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
  let obj = guild(504);
  const items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
  obj = {};
  const merged = Object.assign(guild.channel.permissionOverwrites);
  if (null == obj[guild.id]) {
    obj[guild.id] = PermissionUtilsAll.makeEveryoneOverwrite(guild.id);
  }
  const found = stateFromStores.filter((item) => {
    let type;
    if (obj[item.id] != null) {
      type = tmp.type;
    }
    return type === Server.PermissionOverwriteType.ROLE;
  });
  obj = { style: closure_18().tableRowGroupContainer, children: null };
  const obj1 = { title: null, hasIcons: true, children: null };
  const intl = tmp2(1114).intl;
  obj1.title = intl.string(guild(1114).t["LPJmL/"]);
  obj1.children = found.map((role) => {
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
  obj.children = closure_16(guild(5687).TableRowGroup, obj1);
  return closure_16(View, obj);
}
function MemberRow(arg0) {
  ({ isEditing, onSelect } = arg0);
  ({ guildId, user, onDelete } = arg0);
  let obj = { userId: user.id, guildId, onPress: null, arrow: null, leading: null };
  if (isEditing) {
    onSelect = onDelete;
  }
  obj.onPress = onSelect;
  obj.arrow = !isEditing;
  let tmpResult = null;
  if (isEditing) {
    obj = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, accessibilityLabel: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.N86XcP);
    tmpResult = value2(CircleMinusIcon.CircleMinusIcon, obj);
  }
  obj.leading = tmpResult;
  return value2(DetailedGuildIdentityUserRowDefault, obj);
}
function MemberOverwrites(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = channel);
  const tmp = closure_18();
  let obj = _modDef12(useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites));
  const tmp3 = useGetOrFetchChannelOverwriteUsersDefault(guild_id, channel.permissionOverwrites);
  const valueResult = obj.sortBy((username) => username.username.toLowerCase()).value();
  let tmp4 = null;
  if (valueResult.length > 0) {
    obj = { style: tmp.tableRowGroupContainer, children: null };
    obj = { title: null, hasIcons: true, children: null };
    const intl = guild_id(1114).intl;
    obj.title = intl.string(guild_id(1114).t["9Oq93m"]);
    obj.children = valueResult.map((user) => {
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
    obj.children = closure_16(guild_id(5687).TableRowGroup, obj);
    tmp4 = closure_16(View, obj);
  }
  return tmp4;
}
const View = fn(17).View;
const isEveryoneRole = fn(2016).isEveryoneRole;
const Constants = fn(1074);
({ PermissionOverrideType: closure_14, ChannelSettingsSections: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let createStyles = { tableRowGroupContainer: null, tableContainer: null };
createStyles = { marginBottom: nativeDefault.space.PX_16 };
createStyles.tableRowGroupContainer = createStyles;
createStyles.tableContainer = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_18 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx");

export default function ChannelSettingsPermissionsOverview(channelId) {
  channelId = channelId.channelId;
  let stateFromStores2;
  let isEditing;
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
    navigation(stateFromStores2[14]);
    const obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
    const intl = channelId(stateFromStores2[15]).intl;
    obj.title = intl.formatToPlainString(channelId(stateFromStores2[15]).t.txPV7k, { name: username });
    const intl2 = channelId(stateFromStores2[15]).intl;
    obj.body = intl2.format(channelId(stateFromStores2[15]).t.xERCnZ, { name: username });
    const intl3 = channelId(stateFromStores2[15]).intl;
    obj.cancelText = intl3.string(channelId(stateFromStores2[15]).t.gm1Vej);
    const intl4 = channelId(stateFromStores2[15]).intl;
    obj.confirmText = intl4.string(channelId(stateFromStores2[15]).t.p89ACt);
    obj.onConfirm = function onConfirm() {
      const result = ChannelActionCreatorsDefault.clearPermissionOverwrite(channelId, closure_0);
    };
    obj.show(obj);
  }
  let obj = channelId(stateFromStores2[25]);
  const navigation = obj.useNavigation();
  let obj1 = channelId(stateFromStores2[29]);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let obj2 = channelId(stateFromStores2[18]);
  const appChannelBotUserId = obj2.useAppChannelBotUserId(stateFromStores);
  let obj3 = channelId(stateFromStores2[29]);
  const items2 = [ChannelStore];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let parent_id;
    if (stateFromStores != null) {
      parent_id = stateFromStores.parent_id;
    }
    return ChannelStore.getChannel(parent_id);
  });
  let tmp = closure_18();
  const tmp2 = stateFromStores2;
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
    areChannelsLockedResult = stateFromStores(tmp2[17]).areChannelsLocked(
      stateFromStores,
      stateFromStores1,
      appChannelBotUserId,
    );
    const obj7 = stateFromStores(tmp2[17]);
  }
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  isEditing = tmp10[0];
  noop = tmp10[1];
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
      },
    });
  }, items5);
  let tmp14 = null;
  if (null != stateFromStores) {
    tmp14 = null;
    if (null != stateFromStores2) {
      obj = { style: tmp.tableContainer, children: null };
      obj = { channel: stateFromStores, category: stateFromStores1, isEditing, locked: areChannelsLockedResult };
      const items6 = [closure_16(CategorySync, obj), , ,];
      obj1 = { isEditing };
      items6[1] = closure_16(AddPermission, obj1);
      obj2 = {
        guild: stateFromStores2,
        channel: stateFromStores,
        isEditing,
        onSelectRow(id) {
          if (!first) {
            const obj = { type: tmp, id };
            navigation.push(constants2.PERMISSION_OVERRIDES, obj);
          }
        },
        onDeleteRow(arg0) {
          handleClearPermissionOverwrite(arg0);
        },
      };
      items6[2] = closure_16(RoleOverwrites, obj2);
      obj3 = {
        channel: stateFromStores,
        isEditing,
        onSelectRow(id) {
          if (!first) {
            const obj = { type: tmp, id };
            navigation.push(constants2.PERMISSION_OVERRIDES, obj);
          }
        },
        onDeleteRow(arg0) {
          handleClearPermissionOverwrite(arg0);
        },
      };
      items6[3] = closure_16(MemberOverwrites, obj3);
      obj.children = items6;
      tmp14 = closure_17(callback, obj);
    }
  }
  return tmp14;
}
