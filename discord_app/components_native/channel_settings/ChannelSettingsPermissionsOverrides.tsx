// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import util from "../../intl/index.native.tsx";
import StageChannelPermissions from "../../modules/stage_channels/StageChannelPermissions.tsx";
import PermissionUtils from "../../utils/PermissionUtils.tsx";
import TableRowGroup from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import AppChannelPermissionUtils from "../../modules/app_channels/AppChannelPermissionUtils.tsx";
import PermissionSpecUtilsDefault from "../../utils/PermissionSpecUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const isGuildOwner = fn(1975).isGuildOwner;
const Constants = fn(1074);
({ PermissionOverrideType: closure_16, HelpdeskArticles: closure_17, Permissions: closure_18 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
fn(4560);
let createStyles = { container: null, containerContent: null, section: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.containerContent = {
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_12,
};
let obj1 = {
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_12,
};
createStyles.section = { marginBottom: nativeDefault.space.PX_16 };
let closure_22 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx");

export default function ChannelSettingsPermissionsOverrides(fromCreate) {
  ({ channelId: closure_0, id } = fromCreate);
  fromCreate = fromCreate.fromCreate;
  closure_7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  let first;
  let tmp = closure_22();
  dependencyMap = tmp;
  let obj = require("useNavigation");
  const navigation = obj.useNavigation();
  let obj1 = require("initialize");
  let items = [first];
  let stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  let obj2 = require("useAppChannelApplication");
  const appChannelApplication = obj2.useAppChannelApplication(stateFromStores);
  let obj3 = require("AppChannelPermissionUtils");
  const appChannelBotUserId = obj3.useAppChannelBotUserId(stateFromStores);
  let tmp9 = null;
  if (appChannelBotUserId === id) {
    tmp9 = appChannelApplication;
  }
  _require = stateFromStores(function* (arg0, arg1) {
    if (stateFromStores === 2) {
      stateFromStores = 3;
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
        stateFromStores = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp2;
            closure_130_0 = closure_0;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            let name;
            let user2;
            let guild2;
            let role2;
            closure_130_1 = tmp126;
            let tmp10 = stateFromStores.permissionOverwrites[closure_1];
            closure_130_2 = tmp10;
            let tmp6 = null == tmp10;
            if (tmp6) {
              tmp6 = tmp126;
            }
            if (tmp6) {
              let obj1 = fromCreate(tmp5[20]);
              const everyoneOverwrite = obj1.makeEveryoneOverwrite(closure_1);
              closure_130_2 = everyoneOverwrite;
              tmp10 = everyoneOverwrite;
            }
            obj1 = {};
            const merged = Object.assign(tmp10);
            closure_130_3 = obj1;
            let obj3 = fromCreate(tmp5[21]);
            obj1.deny = obj3.remove(obj1.deny, closure_0);
            let obj4 = fromCreate(tmp5[21]);
            obj1.allow = obj4.remove(obj1.allow, closure_0);
            if (closure_1 === closure_0(tmp5[20]).ALLOW) {
              obj1.allow = fromCreate(tmp5[21]).add(obj1.allow, closure_0);
              const obj9 = fromCreate(tmp5[21]);
            } else if (closure_1 === closure_0(tmp5[20]).DENY) {
              if (null != stateFromStores.guild_id) {
                if (tmp126) {
                  c4 = 1;
                  stateFromStores = 1;
                  const obj2 = {
                    value: closure_0(tmp5[22]).checkChattableChannelThresholdMetAfterChannelPermissionDeny(
                      stateFromStores,
                      closure_0,
                    ),
                    done: false,
                  };
                  return obj2;
                }
              }
            }
            obj3 = {};
            obj3[closure_130_3.id] = closure_130_3;
            if (PermissionStore.can(closure_130_0, stateFromStores, obj3)) {
              const result = id(tmp5[23]).updatePermissionOverwrite(stateFromStores.id, closure_130_3);
              stateFromStores = 3;
              const obj17 = id(tmp5[23]);
            } else if (PermissionStore.can(closure_130_0, stateFromStores)) {
              if (!closure_130_1) {
                if (!obj11.has(closure_130_2.allow, closure_130_0)) {
                  if (!obj12.has(closure_130_2.deny, closure_130_0)) {
                    closure_1_7(closure_130_0, closure_0(tmp5[20]).ALLOW);
                  }
                  obj12 = fromCreate(tmp5[21]);
                }
                obj11 = fromCreate(tmp5[21]);
              }
            }
            const type = closure_130_2.type;
            if (closure_0(tmp5[24]).PermissionOverwriteType.MEMBER === type) {
              user2 = user.getUser(closure_130_2.id);
              if (null != user2) {
                name = id(tmp5[25]).getName(user2);
                const obj13 = id(tmp5[25]);
              }
            } else if (closure_0(tmp5[24]).PermissionOverwriteType.ROLE === type) {
              guild2 = guild.getGuild(stateFromStores.guild_id);
              if (null != guild2) {
                role2 = role.getRole(guild2.id, closure_130_2.id);
                if (null != role2) {
                  name = role2.name;
                }
              }
            } else {
              const type2 = closure_130_2.type;
            }
            obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
            const intl = closure_0(tmp5[27]).intl;
            obj4.title = intl.string(closure_0(tmp5[27]).t.vElC9b);
            const intl2 = closure_0(tmp5[27]).intl;
            let obj5 = { name };
            obj4.body = intl2.format(closure_0(tmp5[27]).t.yslqFM, obj5);
            const intl3 = closure_0(tmp5[27]).intl;
            obj4.cancelText = intl3.string(closure_0(tmp5[27]).t["ETE/oC"]);
            const intl4 = closure_0(tmp5[27]).intl;
            obj4.confirmText = intl4.string(closure_0(tmp5[27]).t.psXQHP);
            obj4.onConfirm = function onConfirm() {
              const obj = closure_1_1(4255);
              obj.openURL(closure_1_1(2024).getArticleURL(constants.PERMISSIONS_LOCKOUT));
            };
            id(tmp5[26]).show(obj4);
            const obj14 = id(tmp5[26]);
          }
        } else if (arg0 === 1) {
          stateFromStores = 3;
          throw value;
        } else if (arg0 === 2) {
          stateFromStores = 3;
          obj = { value, done: true };
          return obj;
        } else if (!value) {
          stateFromStores = 3;
          return { value: "HermesInternal", done: null };
        }
        obj5 = fromCreate(tmp5[21]);
        closure_130_3.deny = obj5.add(closure_130_3.deny, closure_130_0);
      } catch (tmp117) {
        stateFromStores = tmp;
        throw tmp117;
      }
    }
  });
  const items1 = [stateFromStores, id];
  closure_7 = appChannelBotUserId.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
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
            let tmp19 = null != VIEW_CHANNEL;
            if (tmp19) {
              tmp19 = !PermissionStore.can(VIEW_CHANNEL, guild);
            }
            if (tmp19) {
              tmp19 = !canResult;
            }
            stringResult = tmp19;
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
  const items3 = [stateFromStores, id];
  closure_9 = appChannelBotUserId.useCallback((VIEW_CHANNEL) => {
    let allow;
    if (stateFromStores.permissionOverwrites[id] != null) {
      allow = tmp.allow;
    }
    if (obj.has(allow, VIEW_CHANNEL)) {
      let ALLOW = PermissionUtils.ALLOW;
    } else {
      let deny;
      if (tmp != null) {
        deny = tmp.deny;
      }
      const hasItem = BigFlagUtilsAll.has(deny, VIEW_CHANNEL);
      const tmp8 = PermissionUtils;
      ALLOW = hasItem ? tmp8.DENY : tmp8.PASSTHROUGH;
      const tmp2Result = BigFlagUtilsAll;
    }
    return ALLOW;
  }, items3);
  first = navigation(
    appChannelBotUserId.useState(() =>
      PermissionSpecUtilsDefault.generateChannelPermissionSpec(
        stateFromStores.guild_id,
        stateFromStores,
        id === stateFromStores.guild_id,
      ),
    ),
    2,
  )[0];
  const items4 = [fromCreate, navigation];
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
          const intl = closure_0(1114).intl;
          obj.label = intl.string(closure_0(1114).t.i4jeWR);
          return closure_2_19(closure_0(7863).HeaderTextButton, obj);
        },
      };
      navigation.setOptions(obj);
    }
  }, items4);
  obj = { variant: "text-md/medium", color: "text-muted", children: null };
  let tmp10 = navigation(
    appChannelBotUserId.useState(() =>
      PermissionSpecUtilsDefault.generateChannelPermissionSpec(
        stateFromStores.guild_id,
        stateFromStores,
        id === stateFromStores.guild_id,
      ),
    ),
    2,
  );
  obj.children = require("useChannelName").computeChannelName(stateFromStores, UserStore, RelationshipStore, true);
  const tmp13 = closure_19(require("Text/Text").Text, obj);
  if (fromCreate.type === constants.MEMBER) {
    obj = { userId: id, guildId: stateFromStores.guild_id, start: true, end: true, trailing: tmp13 };
    let tmp12Result = closure_19(id(10942), obj);
  } else {
    const role = GuildRoleStore.getRole(stateFromStores.guild_id, id);
    let str;
    if (role != null) {
      str = role.name;
    }
    if (str == null) {
      str = "";
    }
    obj1 = { end: true, label: str, start: true, trailing: tmp13 };
    tmp12Result = closure_19(tmp2(5605).TableRow, obj1);
  }
  obj2 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items5 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + id(1611)().bottom }];
  obj2.contentContainerStyle = items5;
  obj3 = { style: tmp.section, children: tmp12Result };
  const items6 = [closure_19(closure_7, obj3), ,];
  tmp12Result = null;
  if (null != tmp9) {
    let obj4 = { style: tmp.section, children: null };
    let obj5 = { messageType: tmp2(1178).HelpMessageTypes.INFO, children: null };
    let intl = tmp2(1114).intl;
    const obj6 = { appName: tmp9.name };
    obj5.children = intl.format(tmp2(1114).t["Xq++FA"], obj6);
    obj4.children = closure_19(tmp2(1178).HelpMessage, obj5);
    tmp12Result = closure_19(closure_7, obj4);
  }
  items6[1] = tmp12Result;
  items6[2] = first.map((permissions, index) => {
    permissions = permissions.permissions;
    let obj = { style: section.section, children: null };
    let title;
    if (first.length > 1) {
      title = permissions.title;
    }
    obj = {
      title,
      hasIcons: false,
      children: permissions.map((description, index) => {
        ({ title, flag } = description);
        const tmp = closure_8(flag);
        let obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
        let obj1 = closure_1_0(16834);
        obj.children = obj1.renderDescription(description.description);
        const items = [closure_1_19(closure_1_0(4556).Text, obj)];
        let tmp5Result = null;
        if (false !== tmp) {
          tmp5Result = null;
          if ("" !== tmp) {
            obj = { variant: "text-xs/medium", color: "text-feedback-critical", children: tmp };
            tmp5Result = closure_1_19(closure_1_0(4556).Text, obj);
          }
        }
        items[1] = tmp5Result;
        const tmp3Result = closure_1_21(closure_1_20, { children: items });
        const tmp6Result = closure_1_0(1115);
        obj = {
          accessible: closure_1_0(1115).isAndroid() || undefined,
          disabled: tmp2,
          label: title,
          subLabel: tmp3Result,
          trailing: null,
        };
        obj1 = { permissionTitle: title, value: null, disabled: null, onValueChange: null };
        const tmp10 = closure_1_0(1115).isAndroid() || undefined;
        obj1.value = closure_9(flag);
        obj1.disabled = false !== tmp;
        obj1.onValueChange = function onValueChange(arg0) {
          closure_2_7(flag, arg0);
        };
        obj.trailing = closure_1_19(id(16835), obj1);
        return closure_1_19(closure_1_0(5605).TableRow, obj, "row-" + index);
      }),
    };
    obj.children = closure_2_19(TableRowGroup.TableRowGroup, obj);
    return closure_2_19(React5, obj, "section-" + index);
  });
  obj2.children = items6;
  return closure_21(closure_8, obj2);
}
