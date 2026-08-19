// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { isGuildOwner } from "../../records/GuildRecord.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createGuildRoleRecordFromRust from "../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useNavigation } from "../../design/components/Navigator/native/useNavigation.native.tsx";
import { computeChannelName } from "../../modules/channel/useChannelName.tsx";

const require = fn;
({ View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ PermissionOverrideType: closure_16, HelpdeskArticles: closure_17, Permissions: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_21 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx");

export default function ChannelSettingsPermissionsOverrides(fromCreate) {
  ({ channelId: closure_0, id } = fromCreate);
  fromCreate = fromCreate.fromCreate;
  let React;
  const tmp = callback5();
  dependencyMap = tmp;
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const callback = navigation;
  obj1 = initialize;
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_10.getChannel(closure_0));
  const callback2 = stateFromStores;
  _require = callback2((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let name = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = tmp5;
              let everyoneOverwrite = tmp2;
              closure_1 = undefined;
              everyoneOverwrite = undefined;
              obj1 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              closure_1 = tmp127;
              let tmp10 = c5.permissionOverwrites[closure_1];
              everyoneOverwrite = tmp10;
              let tmp6 = null == tmp10;
              if (tmp6) {
                tmp6 = tmp127;
              }
              if (tmp6) {
                obj1 = fromCreate(4026);
                everyoneOverwrite = obj1.makeEveryoneOverwrite(tmp125);
                tmp10 = everyoneOverwrite;
              }
              obj1 = {};
              const merged = Object.assign(tmp10);
              let obj3 = fromCreate(506);
              obj1.deny = obj3.remove(obj1.deny, callback);
              let obj4 = fromCreate(506);
              obj1.allow = obj4.remove(obj1.allow, callback);
              if (closure_1 === callback(4026).ALLOW) {
                obj1.allow = fromCreate(506).add(obj1.allow, callback);
                const obj9 = fromCreate(506);
              } else if (tmp124 === callback(4026).DENY) {
                if (null != c5.guild_id) {
                  if (tmp127) {
                    c4 = 1;
                    c5 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = callback(8852).checkChattableChannelThresholdMetAfterChannelPermissionDeny(c5, callback);
                    return obj2;
                  }
                }
              }
              obj3 = {};
              obj3[closure_1_3.id] = closure_1_3;
              if (closure_2_13.can(callback, c5, obj3)) {
                const result = id(4770).updatePermissionOverwrite(c5.id, closure_1_3);
                c5 = 3;
                const obj17 = id(4770);
              } else if (closure_2_13.can(callback, c5)) {
                if (!closure_1) {
                  if (!obj11.has(closure_1_2.allow, callback)) {
                    if (!obj12.has(closure_1_2.deny, callback)) {
                      closure_1_6(callback, callback(4026).ALLOW);
                    }
                    obj12 = fromCreate(506);
                  }
                  obj11 = fromCreate(506);
                }
              }
              const type = fromCreate.type;
              if (callback(1954).PermissionOverwriteType.MEMBER === type) {
                const user = closure_2_15.getUser(fromCreate.id);
                if (null != user) {
                  const name2 = id(4219).getName(user);
                  const obj13 = id(4219);
                }
              } else if (callback(1954).PermissionOverwriteType.ROLE === type) {
                id = closure_2_12.getGuild(c5.guild_id);
                if (null != id) {
                  const role = closure_2_11.getRole(id.id, fromCreate.id);
                  if (null != role) {
                    name = closure_1_7.name;
                  }
                }
              } else {
                const type2 = fromCreate.type;
              }
              obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
              const intl = callback(1236).intl;
              obj4[0] = intl.string(callback(1236).t.vElC9b);
              const intl2 = callback(1236).intl;
              let obj5 = { name: null };
              obj5[0] = c4;
              obj4[1] = intl2.format(callback(1236).t.yslqFM, obj5);
              const intl3 = callback(1236).intl;
              obj4[2] = intl3.string(callback(1236).t["ETE/oC"]);
              const intl4 = callback(1236).intl;
              obj4[3] = intl4.string(callback(1236).t.psXQHP);
              obj4[4] = function onConfirm() {
                const obj = callback(obj1[26]);
                obj.openURL(callback(obj1[27]).getArticleURL(constants.PERMISSIONS_LOCKOUT));
              };
              id(4827).show(obj4);
              const obj14 = id(4827);
              tmp125 = closure_1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (!arg1) {
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
          obj5 = fromCreate(506);
          obj1.deny = obj5.add(obj1.deny, callback);
        } catch (tmp117) {
          c5 = tmp;
          throw tmp117;
        }
      }
    })();
  });
  const items1 = [stateFromStores, id];
  React = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [stateFromStores];
  closure_7 = React.useCallback((arg0) => {
    const guild = closure_1_12.getGuild(guildStageVoice.guild_id);
    const currentUser = closure_1_15.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let canResult = first(guild, currentUser);
        if (!canResult) {
          canResult = closure_1_13.can(closure_1_18.ADMINISTRATOR, guild);
        }
        if (!canResult) {
          canResult = closure_1_13.can(closure_1_18.MANAGE_ROLES, guildStageVoice, undefined, undefined, true);
        }
        if (guildStageVoice.isGuildStageVoice()) {
          const STAGE_CHANNEL_DISABLED_PERMISSIONS = callback(section[28]).STAGE_CHANNEL_DISABLED_PERMISSIONS;
          if (STAGE_CHANNEL_DISABLED_PERMISSIONS.has(arg0)) {
            const intl2 = callback(section[25]).intl;
            let stringResult = intl2.string(callback(section[25]).t.bTS5lf);
          }
          return stringResult;
        }
        stringResult = arg0 === closure_1_18.MANAGE_ROLES && !canResult;
        if (!stringResult) {
          let tmp15 = null != arg0;
          if (tmp15) {
            tmp15 = !closure_1_13.can(arg0, guild);
          }
          if (tmp15) {
            tmp15 = !canResult;
          }
          stringResult = tmp15;
        }
        if (stringResult) {
          const intl = callback(section[25]).intl;
          stringResult = intl.string(callback(section[25]).t.nOtPMM);
        }
      }
    }
    return false;
  }, items2);
  const items3 = [stateFromStores, id];
  closure_8 = React.useCallback((arg0) => {
    let allow;
    if (guildStageVoice.permissionOverwrites[id] != null) {
      allow = tmp.allow;
    }
    if (obj.has(allow, arg0)) {
      let ALLOW = callback(section[18]).ALLOW;
    } else {
      let deny;
      if (tmp != null) {
        deny = tmp.deny;
      }
      const hasItem = fromCreate(section[19]).has(deny, arg0);
      const tmp8 = callback(section[18]);
      ALLOW = hasItem ? tmp8.DENY : tmp8.PASSTHROUGH;
      const tmp2Result = fromCreate(section[19]);
    }
    return ALLOW;
  }, items3);
  const first = callback(React.useState(() => id(section[29]).generateChannelPermissionSpec(guildStageVoice.guild_id, guildStageVoice, id === guildStageVoice.guild_id)), 2)[0];
  const items4 = [fromCreate, navigation];
  const effect = React.useEffect(() => {
    if (fromCreate) {
      let obj = { headerRight: null };
      obj[0] = function headerRight() {
        const obj = {
          onPress() {

          },
          label: null
        };
        const intl = closure_1_0(closure_1_3[25]).intl;
        obj[1] = intl.string(closure_1_0(closure_1_3[25]).t.i4jeWR);
        return closure_1_19(closure_1_0(closure_1_3[30]).HeaderTextButton, obj);
      };
      options.setOptions(obj);
    }
  }, items4);
  obj = { variant: "text-md/medium", color: "text-muted", children: null };
  let obj3 = computeChannelName;
  obj[2] = obj3.computeChannelName(stateFromStores, closure_15, closure_14, true);
  let tmp10 = callback3(require("../../design/components/Text/native/Text.tsx").Text, obj);
  if (fromCreate.type === constants.MEMBER) {
    obj = { userId: null, guildId: null, start: true, end: true, trailing: null };
    obj[0] = id;
    obj[1] = stateFromStores.guild_id;
    obj[4] = tmp10;
    let tmp9Result = callback3(id(9965), obj);
  } else {
    role = role.getRole(stateFromStores.guild_id, id);
    let str;
    if (role != null) {
      str = role.name;
    }
    if (str == null) {
      str = "";
    }
    obj1 = { end: true, label: null, start: true, trailing: null };
    obj1[1] = str;
    obj1[3] = tmp10;
    tmp9Result = callback3(require("../../design/components/TableRow/native/TableRow.native.tsx").TableRow, obj1);
  }
  let obj2 = { style: tmp.container, contentContainerStyle: items5, children: null };
  items5 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + id(1629)().bottom }];
  obj3 = { style: tmp.section, children: tmp9Result };
  const items6 = [
    callback3(closure_7, obj3),
    first.map((item, index) => {
      const permissions = item.permissions;
      let obj = { style: section.section, children: null };
      let title;
      if (first.length > 1) {
        title = item.title;
      }
      obj = {
        title,
        hasIcons: false,
        children: permissions.map((item, index) => {
          ({ title, flag } = item);
          let flag2 = callback(flag);
          if (flag2 == null) {
            flag2 = false;
          }
          let obj = { variant: "text-xs/medium", color: "text-subtle", children: closure_1_0(closure_1_3[36]).renderDescription(item.description) };
          const obj2 = closure_1_0(closure_1_3[36]);
          const tmp3 = closure_1_19(closure_1_0(closure_1_3[31]).Text, obj);
          const obj3 = closure_1_0(closure_1_3[37]);
          { accessible: closure_1_0(closure_1_3[37]).isAndroid() || undefined, disabled: tmp5, label: title, subLabel: tmp3, trailing: null };
          obj = { permissionTitle: title, value: null, disabled: null, onValueChange: null };
          const tmp4 = closure_1_0(closure_1_3[37]).isAndroid() || undefined;
          obj[1] = callback2(flag);
          obj[2] = false !== flag2;
          obj[3] = function onValueChange(arg0) {
            closure_1_6(flag, arg0);
          };
          obj[4] = closure_1_19(id(closure_1_3[38]), obj);
          return closure_1_19(closure_1_0(closure_1_3[34]).TableRow, obj, "row-" + index);
        })
      };
      obj[1] = closure_1_19(callback(section[35]).TableRowGroup, obj);
      return closure_1_19(closure_7, obj, "section-" + index);
    })
  ];
  obj2[2] = items6;
  return callback4(closure_8, obj2);
};