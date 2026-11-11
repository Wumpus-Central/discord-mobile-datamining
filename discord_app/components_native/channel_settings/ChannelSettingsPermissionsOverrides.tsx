// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import StageChannelPermissions from "../../modules/stage_channels/StageChannelPermissions.tsx";
import TableRowGroup from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import AppChannelPermissionUtils from "../../modules/app_channels/AppChannelPermissionUtils.tsx";
import PermissionSpecUtilsDefault from "../../utils/PermissionSpecUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelPermissionOverwriteEditStore from "../../modules/channel_permissions/ChannelPermissionOverwriteEditStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroImportDefault, ScrollView: closure_8 } = get_ActivityIndicator);
const isGuildOwner = fn(5110).isGuildOwner;
const Constants = fn(1072);
({ PermissionOverrideType: closure_17, HelpdeskArticles: closure_18, Permissions: closure_19 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(5243);
let obj = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  containerContent: null,
  section: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.containerContent = {
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_12,
};
let obj4 = {
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj.section = { marginBottom: nativeDefault.space.PX_16 };
let closure_23 = createStyles.createStyles(obj);
let closure_24 = noop.memo(function ChannelPermissionOverrideControl(channelId) {
  channelId = channelId.channelId;
  const overwriteId = channelId.overwriteId;
  const onValueChange = channelId.onValueChange;
  ({ savedValue, permissionTitle, disabled } = channelId);
  items = [ChannelPermissionOverwriteEditStore];
  const items1 = [channelId, overwriteId, channelId.flag];
  let stateFromStores = channelId(onValueChange[16]).useStateFromStores(
    items,
    () => {
      const pendingEdits = ChannelPermissionOverwriteEditStore.getPendingEdits(channelId, overwriteId);
      const iter = pendingEdits[String(undefined, flag)];
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      return value;
    },
    items1,
  );
  const obj2 = { permissionTitle, value: null, disabled: null, onValueChange: null };
  const flag = channelId.flag;
  const obj = channelId(onValueChange[16]);
  if (stateFromStores == null) {
    stateFromStores = savedValue;
  }
  obj2.value = stateFromStores;
  obj2.disabled = disabled;
  obj2.onValueChange = function onValueChange(arg0) {
    return onValueChange(flag, arg0);
  };
  return closure_20(overwriteId(onValueChange[17]), obj2);
});
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx");

export default function ChannelSettingsPermissionsOverrides(channelId) {
  channelId = channelId.channelId;
  const id = channelId.id;
  const fromCreate = channelId.fromCreate;
  closure_7 = undefined;
  closure_8 = undefined;
  let first;
  let tmp = closure_23();
  dependencyMap = tmp;
  const navigation = channelId(1499).useNavigation();
  let obj = channelId(1499);
  let tmp5 = id;
  items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(504);
  const appChannelApplication = channelId(7198).useAppChannelApplication(stateFromStores);
  let obj3 = channelId(7198);
  const appChannelBotUserId = channelId(12470).useAppChannelBotUserId(stateFromStores);
  let tmp9 = null;
  if (appChannelBotUserId === id) {
    tmp9 = appChannelApplication;
  }
  const items1 = [channelId, id];
  closure_7 = appChannelBotUserId.useCallback((flag, value) => {
    closure_0 = flag;
    channel = channel.getChannel(closure_0);
    if (null != channel) {
      const channelPermissionOverwrite = channelId(section[22]).getChannelPermissionOverwrite(channel, id);
      if (null != channelPermissionOverwrite) {
        const effectiveOverwrite = first.getEffectiveOverwrite(channel.id, id, channelPermissionOverwrite);
        if (tmp18Result.getChannelPermissionOverwriteValue(effectiveOverwrite, flag) !== value) {
          const result = channelId(section[22]).applyChannelPermissionOverwriteEdit(effectiveOverwrite, flag, value);
          let obj2 = {};
          obj2[result.id] = result;
          if (PermissionStore.can(flag, channel, obj2)) {
            let obj5 = { channelId: channel.id, overwriteId: id, flag, value, validate: null };
            let tmp14;
            if (value === channelId(section[24]).DENY) {
              if (tmp24) {
                tmp14 = stateFromStores(function* () {
                  if (c0 === 2) {
                    c0 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
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
                      c0 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c0 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c0 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          channel = channel.getChannel(c0);
                          let tmp5 = null != channel;
                          if (tmp5) {
                            c1 = 1;
                            c0 = 1;
                            const obj5 = {
                              value: v3(8068).checkChattableChannelThresholdMetAfterChannelPermissionDeny(channel, v3),
                              done: false,
                            };
                            return obj5;
                          }
                        }
                      } else if (arg0 === 1) {
                        c0 = 3;
                        throw value;
                      } else {
                        tmp5 = value;
                        if (arg0 === 2) {
                          c0 = 3;
                          const obj = { value, done: true };
                          return obj;
                        }
                      }
                      c0 = 3;
                      const obj6 = { value: tmp5, done: true };
                      return obj6;
                    } catch (tmp9) {
                      c0 = tmp;
                      throw tmp9;
                    }
                  }
                });
              }
            }
            obj5.validate = tmp14;
            const result1 = channelId(section[23]).updateChannelPermissionOverwrite(obj5);
            const tmp18Result4 = channelId(section[23]);
          } else {
            if (PermissionStore.can(flag, channel)) {
              if (!tmp24) {
                if (!obj.has(effectiveOverwrite.allow, flag)) {
                  if (!tmp2Result.has(effectiveOverwrite.deny, flag)) {
                    closure_7(flag, channelId(section[24]).ALLOW);
                  }
                  tmp2Result = fromCreate(section[26]);
                }
                obj = fromCreate(section[26]);
              }
            }
            const type = effectiveOverwrite.type;
            if (channelId(section[27]).PermissionOverwriteType.MEMBER === type) {
              user = user.getUser(effectiveOverwrite.id);
              if (null != user) {
                let name = id(section[28]).getName(user);
                const obj3 = id(section[28]);
              }
            } else if (channelId(section[27]).PermissionOverwriteType.ROLE === type) {
              guild = guild.getGuild(channel.guild_id);
              if (null != guild) {
                role = role.getRole(guild.id, effectiveOverwrite.id);
                if (null != role) {
                  name = role.name;
                }
              }
            } else {
              const type2 = effectiveOverwrite.type;
            }
            let obj6 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
            const intl = channelId(section[30]).intl;
            obj6.title = intl.string(channelId(section[30]).t.vElC9b);
            const intl2 = channelId(section[30]).intl;
            const obj7 = { name };
            obj6.body = intl2.format(channelId(section[30]).t.yslqFM, obj7);
            const intl3 = channelId(section[30]).intl;
            obj6.cancelText = intl3.string(channelId(section[30]).t["ETE/oC"]);
            const intl4 = channelId(section[30]).intl;
            obj6.confirmText = intl4.string(channelId(section[30]).t.psXQHP);
            obj6.onConfirm = function onConfirm() {
              const obj = id(5949);
              obj.openURL(id(2185).getArticleURL(constants.PERMISSIONS_TUTORIAL));
            };
            id(section[29]).show(obj6);
            let obj4 = id(section[29]);
          }
          const tmp18Result3 = channelId(section[22]);
        }
        tmp18Result = channelId(section[22]);
      }
      const obj9 = channelId(section[22]);
    }
  }, items1);
  const items2 = [stateFromStores, id, appChannelBotUserId];
  closure_8 = appChannelBotUserId.useCallback((VIEW_CHANNEL) => {
    guild = GuildStore.getGuild(stateFromStores.guild_id);
    const currentUser = UserStore.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let canResult = isGuildOwner(guild, currentUser);
        if (!canResult) {
          canResult = PermissionStore.can(constants2.ADMINISTRATOR, guild);
        }
        if (!canResult) {
          canResult = PermissionStore.can(constants2.MANAGE_ROLES, stateFromStores, undefined, undefined, true);
        }
        if (stateFromStores.isGuildStageVoice()) {
          const STAGE_CHANNEL_DISABLED_PERMISSIONS = StageChannelPermissions.STAGE_CHANNEL_DISABLED_PERMISSIONS;
          if (STAGE_CHANNEL_DISABLED_PERMISSIONS.has(VIEW_CHANNEL)) {
            const intl3 = util.intl;
            let stringResult = intl3.string(util.t.bTS5lf);
          }
          return stringResult;
        }
        if (obj2.isAppChannelFloorPermission(appChannelBotUserId, id, VIEW_CHANNEL)) {
          const intl2 = util.intl;
          stringResult = intl2.string(util.t.yXmgpP);
        } else {
          stringResult = VIEW_CHANNEL === constants2.MANAGE_ROLES && !canResult;
          if (!stringResult) {
            const canResult1 = PermissionStore.can(VIEW_CHANNEL, guild);
            let tmp21 = !canResult1;
            if (!canResult1) {
              tmp21 = !canResult;
            }
            stringResult = tmp21;
          }
          if (stringResult) {
            const intl = util.intl;
            stringResult = intl.string(util.t.nOtPMM);
          }
        }
        obj2 = AppChannelPermissionUtils;
      }
    }
    return false;
  }, items2);
  first = navigation(
    appChannelBotUserId.useState(() =>
      PermissionSpecUtilsDefault.generateChannelPermissionSpec(
        stateFromStores.guild_id,
        stateFromStores,
        id === stateFromStores.guild_id,
      ),
    ),
    1,
  )[0];
  const items3 = [fromCreate, navigation];
  const effect = appChannelBotUserId.useEffect(() => {
    if (fromCreate) {
      let obj = {
        headerRight() {
          const obj = {
            onPress() {
              closure_1_4.pop();
            },
            label: null,
          };
          const intl = channelId(1113).intl;
          obj.label = intl.string(channelId(1113).t.i4jeWR);
          return closure_2_20(channelId(8985).HeaderTextButton, obj);
        },
      };
      navigation.setOptions(obj);
    }
  }, items3);
  let obj5 = { variant: "body-md/medium", color: "text-muted", children: null };
  let obj4 = channelId(12470);
  obj5.children = channelId(5891).computeChannelName(stateFromStores, UserStore, RelationshipStore, true);
  const tmp12 = closure_20(channelId(5866).Text, obj5);
  if (channelId.type === constants.MEMBER) {
    let obj6 = { userId: id, guildId: stateFromStores.guild_id, start: true, end: true, trailing: tmp12 };
    let tmp11Result = closure_20(tmp5(10866), obj6);
  } else {
    let role = GuildRoleStore.getRole(stateFromStores.guild_id, id);
    let str;
    if (role != null) {
      str = role.name;
    }
    if (str == null) {
      str = "";
    }
    let obj7 = { end: true, label: str, start: true, trailing: tmp12 };
    tmp11Result = closure_20(tmp2(7379).TableRow, obj7);
  }
  const obj8 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + id(1627)().bottom }];
  obj8.contentContainerStyle = items4;
  const items5 = [closure_20(closure_7, { style: tmp.section, children: tmp11Result }), ,];
  let tmp11Result2 = null;
  if (null != tmp9) {
    const obj10 = { style: tmp.section, children: null };
    const obj11 = { type: "info", message: null, role: "none" };
    let intl = tmp2(1113).intl;
    const obj12 = { appName: tmp9.name };
    obj11.message = intl.format(tmp2(1113).t["Xq++FA"], obj12);
    obj10.children = closure_20(tmp2(8094).InlineNotice, obj11);
    tmp11Result2 = closure_20(closure_7, obj10);
  }
  items5[1] = tmp11Result2;
  items5[2] = first.map((permissions, index) => {
    permissions = permissions.permissions;
    let obj = { style: section.section, children: null };
    let title;
    if (first.length > 1) {
      title = permissions.title;
    }
    obj.children = dependencyMap(TableRowGroup.TableRowGroup, {
      title,
      hasIcons: false,
      children: permissions.map((description, index) => {
        ({ title, flag } = description);
        const tmp = closure_1_8(flag);
        const obj = {
          variant: "body-xs/medium",
          color: "text-subtle",
          children: channelId(19515).renderDescription(description.description),
        };
        items = [closure_2_20(channelId(5866).Text, obj)];
        let tmp5Result = null;
        if (false !== tmp) {
          tmp5Result = null;
          if ("" !== tmp) {
            const obj3 = { variant: "body-xs/medium", color: "text-feedback-critical", children: tmp };
            tmp5Result = closure_2_20(channelId(5866).Text, obj3);
          }
        }
        items[1] = tmp5Result;
        const obj2 = channelId(19515);
        const tmp3Result = closure_2_22(closure_2_21, { children: items });
        const tmp6Result = channelId(1377);
        const obj4 = {
          accessible: channelId(1377).isAndroid() || undefined,
          disabled: false !== tmp,
          label: title,
          subLabel: tmp3Result,
          trailing: null,
        };
        const obj5 = {
          channelId,
          overwriteId,
          flag,
          permissionTitle: title,
          savedValue: null,
          disabled: null,
          onValueChange: null,
        };
        const tmp10 = channelId(1377).isAndroid() || undefined;
        obj5.savedValue = channelId(19506).getChannelPermissionOverwriteValue(
          permissionOverwrites.permissionOverwrites[overwriteId],
          flag,
        );
        obj5.disabled = false !== tmp;
        obj5.onValueChange = onValueChange;
        obj4.trailing = closure_2_20(closure_2_24, obj5);
        return closure_2_20(channelId(7379).TableRow, obj4, "row-" + index);
      }),
    });
    return dependencyMap(metroImportDefault, obj, "section-" + index);
  });
  obj8.children = items5;
  return closure_22(closure_8, obj8);
}
