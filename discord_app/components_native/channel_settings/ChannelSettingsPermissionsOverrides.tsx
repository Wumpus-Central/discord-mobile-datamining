// === Module 16829: ChannelSettingsPermissionsOverrides ===

// Module 16829 (ChannelSettingsPermissionsOverrides)
import ThemesDefault from "Themes" /* 576 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1975 */;
import closure_10 from "ensureGuildLoaded" /* 1957 */;
import closure_11 from "createGuildRoleRecordFromRust" /* 2015 */;
import closure_12 from "createGuildRecordFromRust" /* 1979 */;
import closure_13 from "getUncachedChannelPermissions" /* 4199 */;
import closure_14 from "markAllUserIdListsStale" /* 4209 */;
import closure_15 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ PermissionOverrideType: closure_16, HelpdeskArticles: closure_17, Permissions: closure_18 } = ME);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
createCacheKey = { container: null, containerContent: null, section: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_12 };
let obj1 = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_22 = createCacheKey.createStyles(createCacheKey);
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
  closure_9 = undefined;
  let first;
  let tmp = callback4();
  dependencyMap = tmp;
  let obj = _require(1483);
  const navigation = obj.useNavigation();
  callback = navigation;
  obj1 = _require(504);
  let items = [first];
  const stateFromStores = obj1.useStateFromStores(items, () => first.getChannel(closure_0));
  callback2 = stateFromStores;
  let obj2 = _require(11611);
  const appChannelApplication = obj2.useAppChannelApplication(stateFromStores);
  let obj3 = _require(11610);
  const appChannelBotUserId = obj3.useAppChannelBotUserId(stateFromStores);
  React = appChannelBotUserId;
  let tmp9 = null;
  if (appChannelBotUserId === id) {
    tmp9 = appChannelApplication;
  }
  _require = undefined;
  _require = callback2((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let name = 0;
    c5 = 0;
    return (function*(guildId1) {
      if (c5 === 2) {
        c5 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = guildId1;
        throwTypeErrorResult = tmp3;
        if (tmp4 === 3) {
          if (guildId1 === 1) {
            throw arg1;
          } else if (guildId1 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (guildId1 === 1) {
                c5 = 3;
                throw arg1;
              } else if (guildId1 === 2) {
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
                  obj1 = fromCreate(4204);
                  everyoneOverwrite = obj1.makeEveryoneOverwrite(throwTypeErrorResult);
                  tmp10 = everyoneOverwrite;
                }
                obj1 = {};
                const merged = Object.assign(tmp10);
                let obj3 = fromCreate(1086);
                obj1.deny = obj3.remove(obj1.deny, throwTypeErrorResult);
                let obj4 = fromCreate(1086);
                obj1.allow = obj4.remove(obj1.allow, throwTypeErrorResult);
                if (throwTypeErrorResult === callback(4204).ALLOW) {
                  obj1.allow = fromCreate(1086).add(obj1.allow, throwTypeErrorResult);
                  const obj9 = fromCreate(1086);
                } else {
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  if (throwTypeErrorResult === callback(4204).DENY) {
                    throwTypeErrorResult = c5;
                    if (null != c5.guild_id) {
                      if (throwTypeErrorResult) {
                        c4 = 1;
                        c5 = 1;
                        const obj2 = { value: null, done: false };
                        obj2[0] = callback(9740).checkChattableChannelThresholdMetAfterChannelPermissionDeny(c5, throwTypeErrorResult);
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
                  throwTypeErrorResult = id(4573).updatePermissionOverwrite(c5.id, closure_1_3);
                  c5 = 3;
                  const obj17 = id(4573);
                } else if (closure_2_13.can(callback, c5)) {
                  if (!closure_1) {
                    if (!obj11.has(closure_1_2.allow, callback)) {
                      if (!obj12.has(closure_1_2.deny, callback)) {
                        closure_1_7(callback, callback(4204).ALLOW);
                      }
                      obj12 = fromCreate(1086);
                    }
                    obj11 = fromCreate(1086);
                  }
                }
                const type = fromCreate.type;
                if (callback(1894).PermissionOverwriteType.MEMBER === type) {
                  const user = closure_2_15.getUser(fromCreate.id);
                  if (null != user) {
                    const name2 = id(4404).getName(user);
                    const obj13 = id(4404);
                  }
                } else {
                  throwTypeErrorResult = obj1;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  if (callback(1894).PermissionOverwriteType.ROLE === type) {
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
                const intl = callback(1114).intl;
                obj4[0] = intl.string(callback(1114).t.vElC9b);
                const intl2 = callback(1114).intl;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj5 = { name: null };
                throwTypeErrorResult = c4;
                obj5[0] = c4;
                obj4[1] = intl2.format(callback(1114).t.yslqFM, obj5);
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                const intl3 = callback(1114).intl;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                obj4[2] = intl3.string(callback(1114).t["ETE/oC"]);
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                const intl4 = callback(1114).intl;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                obj4[3] = intl4.string(callback(1114).t.psXQHP);
                obj4[4] = function onConfirm() {
                  const obj = _undefined(obj1[28]);
                  obj.openURL(_undefined(obj1[29]).getArticleURL(constants.PERMISSIONS_LOCKOUT));
                };
                throwTypeErrorResult = id(4904).show(obj4);
                const obj14 = id(4904);
              }
            } else if (guildId1 === 1) {
              c5 = 3;
              throw arg1;
            } else if (guildId1 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (!arg1) {
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            obj5 = fromCreate(1086);
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
  closure_7 = React.useCallback(function() {
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
  closure_8 = React.useCallback((arg0) => {
    const guild = closure_1_12.getGuild(closure_5.guild_id);
    const currentUser = closure_1_15.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let canResult = callback2(guild, currentUser);
        if (!canResult) {
          canResult = closure_1_13.can(closure_1_18.ADMINISTRATOR, guild);
        }
        if (!canResult) {
          canResult = closure_1_13.can(closure_1_18.MANAGE_ROLES, obj, undefined, undefined, true);
        }
        if (obj.isGuildStageVoice()) {
          const STAGE_CHANNEL_DISABLED_PERMISSIONS = callback(section[30]).STAGE_CHANNEL_DISABLED_PERMISSIONS;
          if (STAGE_CHANNEL_DISABLED_PERMISSIONS.has(arg0)) {
            const intl3 = tmp11(tmp12[27]).intl;
            let stringResult = intl3.string(tmp11(tmp12[27]).t.bTS5lf);
          }
          return stringResult;
        }
        if (obj2.isAppChannelFloorPermission(closure_6, id, arg0)) {
          const intl2 = tmp13(tmp14[27]).intl;
          stringResult = intl2.string(tmp13(tmp14[27]).t.yXmgpP);
        } else {
          stringResult = arg0 === closure_1_18.MANAGE_ROLES && !canResult;
          if (!stringResult) {
            let tmp19 = null != arg0;
            if (tmp19) {
              tmp19 = !closure_1_13.can(arg0, guild);
            }
            if (tmp19) {
              tmp19 = !canResult;
            }
            stringResult = tmp19;
          }
          if (stringResult) {
            const intl = tmp13(tmp14[27]).intl;
            stringResult = intl.string(tmp13(tmp14[27]).t.nOtPMM);
          }
        }
        obj2 = callback(section[19]);
      }
    }
    return false;
  }, items2);
  const items3 = [stateFromStores, id];
  closure_9 = React.useCallback((arg0) => {
    let allow;
    if (closure_5.permissionOverwrites[id] != null) {
      allow = tmp.allow;
    }
    if (obj.has(allow, arg0)) {
      let ALLOW = callback(tmp3[20]).ALLOW;
    } else {
      let deny;
      if (tmp != null) {
        deny = tmp.deny;
      }
      const hasItem = fromCreate(tmp3[21]).has(deny, arg0);
      const tmp8 = callback(tmp3[20]);
      ALLOW = hasItem ? tmp8.DENY : tmp8.PASSTHROUGH;
      const tmp2Result = fromCreate(tmp3[21]);
    }
    return ALLOW;
  }, items3);
  first = callback(React.useState(() => id(section[31]).generateChannelPermissionSpec(closure_5.guild_id, closure_5, id === closure_5.guild_id)), 2)[0];
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
        const intl = closure_1_0(closure_1_3[27]).intl;
        obj[1] = intl.string(closure_1_0(closure_1_3[27]).t.i4jeWR);
        return closure_1_19(closure_1_0(closure_1_3[32]).HeaderTextButton, obj);
      };
      options.setOptions(obj);
    }
  }, items4);
  obj = { variant: "text-md/medium", color: "text-muted", children: null };
  let tmp10 = callback(React.useState(() => id(section[31]).generateChannelPermissionSpec(closure_5.guild_id, closure_5, id === closure_5.guild_id)), 2);
  const tmp5 = id;
  obj[2] = _require(4713).computeChannelName(stateFromStores, closure_15, closure_14, true);
  const tmp13 = callback3(_require(4556).Text, obj);
  if (fromCreate.type === constants.MEMBER) {
    obj = { userId: null, guildId: null, start: true, end: true, trailing: null };
    obj[0] = id;
    obj[1] = stateFromStores.guild_id;
    obj[4] = tmp13;
    let tmp12Result = tmp12(tmp5(10942), obj);
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
    obj1[3] = tmp13;
    tmp12Result = tmp12(tmp2(5605).TableRow, obj1);
  }
  obj2 = { style: tmp.container, contentContainerStyle: items5, children: null };
  items5 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + id(1611)().bottom }];
  obj3 = { style: tmp.section, children: tmp12Result };
  const items6 = [callback3(closure_7, obj3), , ];
  tmp12Result = null;
  if (null != tmp9) {
    let obj4 = { style: null, children: null };
    obj4[0] = tmp.section;
    let obj5 = { messageType: null, children: null };
    obj5[0] = tmp2(1178).HelpMessageTypes.INFO;
    let intl = tmp2(1114).intl;
    const obj6 = { appName: null };
    obj6[0] = tmp9.name;
    obj5[1] = intl.format(tmp2(1114).t["Xq++FA"], obj6);
    obj4[1] = tmp12(tmp2(1178).HelpMessage, obj5);
    tmp12Result = tmp12(closure_7, obj4);
  }
  items6[1] = tmp12Result;
  items6[2] = first.map((permissions) => {
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
        const tmp = callback(flag);
        let obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
        obj1 = closure_1_0(closure_1_3[39]);
        obj[2] = obj1.renderDescription(description.description);
        const items = [closure_1_19(closure_1_0(closure_1_3[33]).Text, obj), ];
        let tmp5Result = null;
        if (false !== tmp) {
          tmp5Result = null;
          if ("" !== tmp) {
            obj = { variant: "text-xs/medium", color: "text-feedback-critical", children: null };
            obj[2] = tmp;
            tmp5Result = tmp5(tmp6(tmp7[33]).Text, obj);
          }
        }
        items[1] = tmp5Result;
        const tmp3 = closure_1_21;
        const tmp3Result = closure_1_21(closure_1_20, { children: items });
        const tmp4 = closure_1_20;
        const tmp6Result = closure_1_0(closure_1_3[40]);
        obj = { accessible: closure_1_0(closure_1_3[40]).isAndroid() || undefined, disabled: tmp2, label: title, subLabel: tmp3Result, trailing: null };
        obj1 = { permissionTitle: title, value: null, disabled: null, onValueChange: null };
        const tmp10 = closure_1_0(closure_1_3[40]).isAndroid() || undefined;
        obj1[1] = callback2(flag);
        obj1[2] = false !== tmp;
        obj1[3] = function onValueChange(arg0) {
          closure_1_7(flag, arg0);
        };
        obj[4] = closure_1_19(closure_1_1(closure_1_3[41]), obj1);
        return closure_1_19(closure_1_0(closure_1_3[36]).TableRow, obj, "row-" + arg1);
      })
    };
    obj[1] = closure_1_19(callback(section[38]).TableRowGroup, obj);
    return closure_1_19(closure_7, obj, "section-" + arg1);
  });
  obj2[2] = items6;
  return closure_21(closure_8, obj2);
};