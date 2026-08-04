// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx
import computeChannelName from "computeChannelName";
import ensureGuildLoaded from "ensureGuildLoaded";
import fromString from "fromString";
import get_ActivityIndicator from "initialize";
import { isGuildOwner } from "GuildNSFWContentLevel";
import closure_10 from "ensureGuildLoaded";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "module_4203";
import createCacheKey from "createCacheKey";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let error;
let metroImportAll;
const require = arg1;
({ View: error, ScrollView: metroImportAll } = get_ActivityIndicator);
({ PermissionOverrideType: closure_16, HelpdeskArticles: closure_17, Permissions: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
createCacheKey = { container: null, containerContent: null, section: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_12 };
let obj1 = { paddingTop: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_12 };
createCacheKey[2] = { marginBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginBottom: require("Themes").space.PX_16 };
const result = require("noop").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx");

export default function ChannelSettingsPermissionsOverrides(fromCreate) {
  let closure_0;
  let id;
  ({ channelId: closure_0, id } = fromCreate);
  fromCreate = fromCreate.fromCreate;
  let dependencyMap;
  let navigation;
  let stateFromStores;
  let React;
  let closure_7;
  let closure_8;
  let first;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = _require(1480);
  navigation = obj.useNavigation();
  let obj1 = _require(589);
  const items = [closure_10];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_10.getChannel(closure_0));
  _require = undefined;
  _require = stateFromStores((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
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
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === name) {
              if (guild_id === 1) {
                c5 = 3;
                throw arg1;
              } else if (guild_id === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let obj1 = tmp5;
                let everyoneOverwrite = tmp2;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = c1;
                c1 = undefined;
                everyoneOverwrite = undefined;
                obj1 = undefined;
                name = undefined;
                c5 = undefined;
                let c6;
                let c7;
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
                  obj1 = fromCreate(3826);
                  everyoneOverwrite = obj1.makeEveryoneOverwrite(throwTypeErrorResult);
                  tmp10 = everyoneOverwrite;
                }
                obj1 = {};
                const merged = Object.assign(tmp10);
                let obj3 = fromCreate(506);
                obj1.deny = obj3.remove(obj1.deny, throwTypeErrorResult);
                let obj4 = fromCreate(506);
                obj1.allow = obj4.remove(obj1.allow, throwTypeErrorResult);
                if (throwTypeErrorResult === callback(3826).ALLOW) {
                  obj1.allow = fromCreate(506).add(obj1.allow, throwTypeErrorResult);
                  const obj9 = fromCreate(506);
                } else {
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  if (throwTypeErrorResult === callback(3826).DENY) {
                    throwTypeErrorResult = c5;
                    if (null != c5.guild_id) {
                      if (throwTypeErrorResult) {
                        name = 1;
                        c5 = 1;
                        const obj2 = { value: null, done: false };
                        obj2[0] = callback(8283).checkChattableChannelThresholdMetAfterChannelPermissionDeny(c5, throwTypeErrorResult);
                        return obj2;
                      }
                    }
                  }
                }
                obj3 = {};
                obj3[outer1_3.id] = outer1_3;
                if (outer2_13.can(callback, c5, obj3)) {
                  throwTypeErrorResult = id;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = c5;
                  throwTypeErrorResult = outer1_3;
                  throwTypeErrorResult = id(4203).updatePermissionOverwrite(c5.id, outer1_3);
                  c5 = 3;
                  const obj17 = id(4203);
                } else if (outer2_13.can(callback, c5)) {
                  if (!closure_1) {
                    if (!obj11.has(outer1_2.allow, callback)) {
                      if (!obj12.has(outer1_2.deny, callback)) {
                        outer1_6(callback, callback(3826).ALLOW);
                      }
                      obj12 = fromCreate(506);
                    }
                    obj11 = fromCreate(506);
                  }
                }
                const type = fromCreate.type;
                if (callback(1906).PermissionOverwriteType.MEMBER === type) {
                  const stateFromStores = outer2_15.getUser(fromCreate.id);
                  if (null != stateFromStores) {
                    const navigation = id(4032).getName(stateFromStores);
                    const obj13 = id(4032);
                  }
                } else {
                  throwTypeErrorResult = obj1;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  if (callback(1906).PermissionOverwriteType.ROLE === type) {
                    id = outer2_12.getGuild(c5.guild_id);
                    if (null != id) {
                      throwTypeErrorResult = everyoneOverwrite;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = outer2_11;
                      throwTypeErrorResult = id;
                      throwTypeErrorResult = fromCreate;
                      const role = outer2_11.getRole(id.id, fromCreate.id);
                      throwTypeErrorResult = role;
                      if (null != role) {
                        name = outer1_7.name;
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
                throwTypeErrorResult = name;
                obj5[0] = name;
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
                throwTypeErrorResult = id(4532).show(obj4);
                const obj14 = id(4532);
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
              return { value: "HermesInternal", done: null };
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
    const guild = outer1_12.getGuild(stateFromStores.guild_id);
    const currentUser = outer1_15.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let canResult = first(guild, currentUser);
        if (!canResult) {
          canResult = outer1_13.can(outer1_18.ADMINISTRATOR, guild);
        }
        if (!canResult) {
          canResult = outer1_13.can(outer1_18.MANAGE_ROLES, obj, undefined, undefined, true);
        }
        if (obj.isGuildStageVoice()) {
          const STAGE_CHANNEL_DISABLED_PERMISSIONS = callback(_undefined[28]).STAGE_CHANNEL_DISABLED_PERMISSIONS;
          if (STAGE_CHANNEL_DISABLED_PERMISSIONS.has(arg0)) {
            const intl2 = tmp11(tmp12[25]).intl;
            let stringResult = intl2.string(tmp11(tmp12[25]).t.bTS5lf);
          }
          return stringResult;
        }
        stringResult = arg0 === outer1_18.MANAGE_ROLES && !canResult;
        if (!stringResult) {
          let tmp15 = null != arg0;
          if (tmp15) {
            tmp15 = !outer1_13.can(arg0, guild);
          }
          if (tmp15) {
            tmp15 = !canResult;
          }
          stringResult = tmp15;
        }
        if (stringResult) {
          const intl = callback(_undefined[25]).intl;
          stringResult = intl.string(callback(_undefined[25]).t.nOtPMM);
        }
      }
    }
    return false;
  }, items2);
  const items3 = [stateFromStores, id];
  closure_8 = React.useCallback((arg0) => {
    let allow;
    if (stateFromStores.permissionOverwrites[id] != null) {
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
  first = navigation(React.useState(() => id(_undefined[29]).generateChannelPermissionSpec(stateFromStores.guild_id, stateFromStores, id === stateFromStores.guild_id)), 2)[0];
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
        const intl = outer1_0(outer1_3[25]).intl;
        obj[1] = intl.string(outer1_0(outer1_3[25]).t.i4jeWR);
        return outer1_19(outer1_0(outer1_3[30]).HeaderTextButton, obj);
      };
      navigation.setOptions(obj);
    }
  }, items4);
  obj = { variant: "text-md/medium", color: "text-muted", children: null };
  let obj3 = _require(4384);
  obj[2] = obj3.computeChannelName(stateFromStores, mergeGuildAvatar, upsertRelationship, true);
  let tmp10 = callback(_require(4189).Text, obj);
  if (fromCreate.type === constants.MEMBER) {
    obj = { userId: null, guildId: null, start: true, end: true, trailing: null };
    obj[0] = id;
    obj[1] = stateFromStores.guild_id;
    obj[4] = tmp10;
    let tmp9Result = tmp9(id(10215), obj);
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
    tmp9Result = tmp9(_require(5224).TableRow, obj1);
  }
  let obj2 = { style: tmp.container, contentContainerStyle: items5, children: null };
  items5 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + id(1581)().bottom }];
  obj3 = { style: tmp.section, children: tmp9Result };
  const items6 = [
    callback(closure_7, obj3),
    first.map((permissions) => {
      permissions = permissions.permissions;
      let obj = { style: _undefined.section, children: null };
      let title;
      if (first.length > 1) {
        title = permissions.title;
      }
      obj = {
        title,
        hasIcons: false,
        children: permissions.map((description) => {
          let flag;
          let title;
          ({ title, flag } = description);
          let flag2 = callback(flag);
          if (flag2 == null) {
            flag2 = false;
          }
          let obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
          obj[2] = outer1_0(outer1_3[36]).renderDescription(description.description);
          const obj2 = outer1_0(outer1_3[36]);
          const tmp2 = outer1_3;
          const tmp3 = outer1_19(outer1_0(outer1_3[31]).Text, obj);
          const obj3 = outer1_0(outer1_3[37]);
          obj = { accessible: outer1_0(outer1_3[37]).isAndroid() || undefined, disabled: tmp5, label: title, subLabel: tmp3, trailing: null };
          obj = { permissionTitle: title, value: null, disabled: null, onValueChange: null };
          const tmp4 = outer1_0(outer1_3[37]).isAndroid() || undefined;
          obj[1] = callback2(flag);
          obj[2] = false !== flag2;
          obj[3] = function onValueChange(arg0) {
            outer1_6(flag, arg0);
          };
          obj[4] = outer1_19(outer1_1(tmp2[38]), obj);
          return outer1_19(outer1_0(outer1_3[34]).TableRow, obj, "row-" + arg1);
        })
      };
      obj[1] = outer1_19(callback(_undefined[35]).TableRowGroup, obj);
      return outer1_19(closure_7, obj, "section-" + arg1);
    })
  ];
  obj2[2] = items6;
  return callback2(closure_8, obj2);
};