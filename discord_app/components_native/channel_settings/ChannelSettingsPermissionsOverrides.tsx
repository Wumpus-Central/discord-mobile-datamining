// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1434 */;
import closure_10 from "ensureGuildLoaded" /* 1391 */;
import closure_11 from "createGuildRoleRecordFromRust" /* 1983 */;
import closure_12 from "createGuildRecordFromRust" /* 1910 */;
import closure_13 from "getUncachedChannelPermissions" /* 4021 */;
import closure_14 from "markAllUserIdListsStale" /* 4030 */;
import closure_15 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useNavigation } from "../../design/components/Navigator/native/useNavigation.native.tsx";
import { TableRowInner } from "../../design/components/TableRow/native/TableRow.native.tsx";
import { Text } from "../../design/components/Text/native/Text.tsx";
import { computeChannelName } from "../../modules/channel/useChannelName.tsx";

const require = arg1;
({ View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ PermissionOverrideType: closure_16, HelpdeskArticles: closure_17, Permissions: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
createCacheKey = { container: null, containerContent: null, section: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_12 };
let obj1 = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_21 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx");

export default function ChannelSettingsPermissionsOverrides(fromCreate) {
  ({ channelId: closure_0, id } = fromCreate);
  fromCreate = fromCreate.fromCreate;
  dependencyMap = undefined;
  let callback;
  let callback2;
  let React;
  closure_7 = undefined;
  closure_8 = undefined;
  let first;
  const tmp = callback5();
  dependencyMap = tmp;
  let obj = _useNavigation;
  const navigation = obj.useNavigation();
  callback = navigation;
  obj1 = _initialize;
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_10.getChannel(closure_0));
  callback2 = stateFromStores;
  _require = undefined;
  _require = callback2((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let name = 0;
    c5 = 0;
    return (function*(guild_id) {
      if (c5 === 2) {
        c5 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = guild_id;
        throwTypeErrorResult = tmp3;
        if (tmp4 === 3) {
          if (guild_id === 1) {
            throw arg1;
          } else if (guild_id === 2) {
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
              if (guild_id === 1) {
                c5 = 3;
                throw arg1;
              } else if (guild_id === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                obj1 = tmp5;
                let everyoneOverwrite = tmp2;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = c1;
                c1 = undefined;
                everyoneOverwrite = undefined;
                obj1 = undefined;
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                c7 = undefined;
                throwTypeErrorResult = c5;
                throwTypeErrorResult = closure_1 === c5.guild_id;
                c1 = throwTypeErrorResult;
                throwTypeErrorResult = c5;
                let tmp10 = c5.permissionOverwrites[closure_1];
                everyoneOverwrite = tmp10;
                throwTypeErrorResult = null;
                let tmp6 = null == tmp10;
                throwTypeErrorResult = closure_1;
                if (tmp6) {
                  tmp6 = throwTypeErrorResult;
                }
                if (tmp6) {
                  obj1 = fromCreate(4026);
                  everyoneOverwrite = obj1.makeEveryoneOverwrite(throwTypeErrorResult);
                  tmp10 = everyoneOverwrite;
                }
                obj1 = {};
                const merged = Object.assign(tmp10);
                let obj3 = fromCreate(506);
                obj1.deny = obj3.remove(obj1.deny, throwTypeErrorResult);
                let obj4 = fromCreate(506);
                obj1.allow = obj4.remove(obj1.allow, throwTypeErrorResult);
                if (throwTypeErrorResult === callback(4026).ALLOW) {
                  obj1.allow = fromCreate(506).add(obj1.allow, throwTypeErrorResult);
                  const obj9 = fromCreate(506);
                } else {
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  if (throwTypeErrorResult === callback(4026).DENY) {
                    throwTypeErrorResult = c5;
                    if (null != c5.guild_id) {
                      if (throwTypeErrorResult) {
                        c4 = 1;
                        c5 = 1;
                        const obj2 = { value: null, done: false };
                        obj2[0] = callback(8852).checkChattableChannelThresholdMetAfterChannelPermissionDeny(c5, throwTypeErrorResult);
                        return obj2;
                      }
                    }
                  }
                }
                obj3 = {};
                obj3[closure_1_3.id] = closure_1_3;
                if (closure_2_13.can(callback, c5, obj3)) {
                  throwTypeErrorResult = id;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = c5;
                  throwTypeErrorResult = closure_1_3;
                  throwTypeErrorResult = id(4770).updatePermissionOverwrite(c5.id, closure_1_3);
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
                } else {
                  throwTypeErrorResult = obj1;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  if (callback(1954).PermissionOverwriteType.ROLE === type) {
                    id = closure_2_12.getGuild(c5.guild_id);
                    if (null != id) {
                      throwTypeErrorResult = everyoneOverwrite;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = closure_2_11;
                      throwTypeErrorResult = id;
                      throwTypeErrorResult = fromCreate;
                      const role = closure_2_11.getRole(id.id, fromCreate.id);
                      throwTypeErrorResult = role;
                      if (null != role) {
                        name = closure_1_7.name;
                      }
                    }
                  } else {
                    const type2 = fromCreate.type;
                  }
                }
                obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                const intl = callback(1236).intl;
                obj4[0] = intl.string(callback(1236).t.vElC9b);
                const intl2 = callback(1236).intl;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj5 = { name: null };
                throwTypeErrorResult = c4;
                obj5[0] = c4;
                obj4[1] = intl2.format(callback(1236).t.yslqFM, obj5);
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                const intl3 = callback(1236).intl;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                obj4[2] = intl3.string(callback(1236).t["ETE/oC"]);
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                const intl4 = callback(1236).intl;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                obj4[3] = intl4.string(callback(1236).t.psXQHP);
                obj4[4] = function onConfirm() {
                  const obj = _undefined(obj1[26]);
                  obj.openURL(_undefined(obj1[27]).getArticleURL(constants.PERMISSIONS_LOCKOUT));
                };
                throwTypeErrorResult = id(4827).show(obj4);
                const obj14 = id(4827);
              }
            } else if (guild_id === 1) {
              c5 = 3;
              throw arg1;
            } else if (guild_id === 2) {
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
          } catch (throwTypeErrorResult) {
            c5 = throwTypeErrorResult;
            throw throwTypeErrorResult;
          }
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
    const guild = closure_1_12.getGuild(closure_5.guild_id);
    const currentUser = closure_1_15.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let canResult = first(guild, currentUser);
        if (!canResult) {
          canResult = closure_1_13.can(closure_1_18.ADMINISTRATOR, guild);
        }
        if (!canResult) {
          canResult = closure_1_13.can(closure_1_18.MANAGE_ROLES, obj, undefined, undefined, true);
        }
        if (obj.isGuildStageVoice()) {
          const STAGE_CHANNEL_DISABLED_PERMISSIONS = callback(section[28]).STAGE_CHANNEL_DISABLED_PERMISSIONS;
          if (STAGE_CHANNEL_DISABLED_PERMISSIONS.has(arg0)) {
            const intl2 = tmp11(tmp12[25]).intl;
            let stringResult = intl2.string(tmp11(tmp12[25]).t.bTS5lf);
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
    if (closure_5.permissionOverwrites[id] != null) {
      allow = tmp.allow;
    }
    if (obj.has(allow, arg0)) {
      let ALLOW = callback(tmp3[18]).ALLOW;
    } else {
      let deny;
      if (tmp != null) {
        deny = tmp.deny;
      }
      const hasItem = fromCreate(tmp3[19]).has(deny, arg0);
      const tmp8 = callback(tmp3[18]);
      ALLOW = hasItem ? tmp8.DENY : tmp8.PASSTHROUGH;
      const tmp2Result = fromCreate(tmp3[19]);
    }
    return ALLOW;
  }, items3);
  first = callback(React.useState(() => id(section[29]).generateChannelPermissionSpec(closure_5.guild_id, closure_5, id === closure_5.guild_id)), 2)[0];
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
  let obj3 = _computeChannelName;
  obj[2] = obj3.computeChannelName(stateFromStores, closure_15, closure_14, true);
  let tmp10 = callback3(_Text.Text, obj);
  if (fromCreate.type === constants.MEMBER) {
    obj = { userId: null, guildId: null, start: true, end: true, trailing: null };
    obj[0] = id;
    obj[1] = stateFromStores.guild_id;
    obj[4] = tmp10;
    let tmp9Result = tmp9(id(9965), obj);
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
    tmp9Result = tmp9(_TableRowInner.TableRow, obj1);
  }
  let obj2 = { style: tmp.container, contentContainerStyle: items5, children: null };
  items5 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + id(1629)().bottom }];
  obj3 = { style: tmp.section, children: tmp9Result };
  const items6 = [
    callback3(closure_7, obj3),
    first.map((permissions) => {
      permissions = permissions.permissions;
      let obj = { style: section.section, children: null };
      let title;
      if (first.length > 1) {
        title = permissions.title;
      }
      obj = {
        title,
        hasIcons: false,
        children: permissions.map((description) => {
          ({ title, flag } = description);
          let flag2 = callback(flag);
          if (flag2 == null) {
            flag2 = false;
          }
          let obj = { variant: "text-xs/medium", color: "text-subtle", children: closure_1_0(closure_1_3[36]).renderDescription(description.description) };
          const obj2 = closure_1_0(closure_1_3[36]);
          const tmp2 = closure_1_3;
          const tmp3 = closure_1_19(closure_1_0(closure_1_3[31]).Text, obj);
          const obj3 = closure_1_0(closure_1_3[37]);
          obj = { accessible: closure_1_0(closure_1_3[37]).isAndroid() || undefined, disabled: tmp5, label: title, subLabel: tmp3, trailing: null };
          obj = { permissionTitle: title, value: null, disabled: null, onValueChange: null };
          const tmp4 = closure_1_0(closure_1_3[37]).isAndroid() || undefined;
          obj[1] = callback2(flag);
          obj[2] = false !== flag2;
          obj[3] = function onValueChange(arg0) {
            closure_1_6(flag, arg0);
          };
          obj[4] = closure_1_19(closure_1_1(tmp2[38]), obj);
          return closure_1_19(closure_1_0(closure_1_3[34]).TableRow, obj, "row-" + arg1);
        })
      };
      obj[1] = closure_1_19(callback(section[35]).TableRowGroup, obj);
      return closure_1_19(closure_7, obj, "section-" + arg1);
    })
  ];
  obj2[2] = items6;
  return callback4(closure_8, obj2);
};