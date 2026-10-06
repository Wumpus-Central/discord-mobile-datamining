// === Module 17897: FinishingTouchesScreen ===

// Module 17897 (FinishingTouchesScreen)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 7717 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let everyoneRole, set;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ Image: metroRequire, View: metroImportDefault } = react_native);
({ CREATE_NEW_CHANNEL_VALUE: c10, MODERATOR_PERMISSIONS: unpackModuleId, MODERATOR_PERMISSIONS_FLAG: closure_12 } = PublicGuildsConstants);
({ GuildFeatures: map1, HelpdeskArticles: closure_14, UserNotificationSettings: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let defaultMessageNotifications;
  let guild;
  let intl;
  let items1;
  let props;
  let tmp14;
  let tmp15;
  let tmp19;
  let tmp7;
  let tmp8;
  let tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(59);
  const ref = react.useRef(null);
  let obj3 = guild(4586);
  const token = obj3.useToken(defaultMessageNotifications(587).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = defaultMessageNotifications;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildSettingsStore];
    const fn = function f() {
      return props.getProps();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(504);
  guild = tmpResult.useStateFromStoresObject(tmp7, tmp8).guild;
  let prop;
  const useState = react.useState;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  defaultMessageNotifications = _slicedToArray(useState(prop), 1)[0];
  [tmp14, r10056] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[2] !== guild) {
    const someResult = closure_11.some((item) => {
      const obj = PermissionUtilsAll;
      return obj.canEveryone(item, guild);
    });
    cResult[2] = guild;
    cResult[3] = someResult;
    tmp15 = someResult;
  } else {
    tmp15 = cResult[3];
  }
  [tmp19, r10069] = react.useState(!tmp15);
  _slicedToArray(react.useState(!tmp15), 2);
  const first1 = _slicedToArray(react.useState(tmp19), 1)[0];
  let prop1;
  const tmp21 = cResult[4];
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  if (tmp21 === prop1) {
    let tmp30;
    let tmp35;
    let tmp39;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
      cResult[7] = V;
    } else {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
    }
    const tmp25 = tmp5(17886)();
    const tmpResult2 = tmp(17885);
    const enableCommunitySharedStyles = tmpResult2.useEnableCommunitySharedStyles();
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
      cResult[8] = obj6.string(tmp(1126).t.XGl4ba);
      const stringResult = obj6.string(tmp(1126).t.XGl4ba);
    } else {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
    }
    const _Symbol3 = Symbol;
    const content = enableCommunitySharedStyles.content;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
      let obj4 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl.formatToPlainString(tmp(1126).t.tInpJj, { number: 3, total: 3 }) };
      const Text = tmp(4892).Text;
      intl = tmp(1126).intl;
      const tmp31 = closure_16(Text, obj4);
      cResult[9] = tmp31;
      tmp30 = tmp31;
    } else {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
    }
    if (cResult[10] !== tmp25.finishingTouches) {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
      const obj5 = { resizeMode: "contain", source: tmp25.finishingTouches };
      cResult[10] = tmp25.finishingTouches;
      cResult[11] = closure_16(closure_6, obj5);
      const tmp34 = closure_16(closure_6, obj5);
    } else {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
    }
    const _Symbol4 = Symbol;
    const header = enableCommunitySharedStyles.header;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
      const stringResult1 = obj9.string(tmp(1126).t["Pj/s/a"]);
      cResult[12] = stringResult1;
      tmp35 = stringResult1;
    } else {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
    }
    if (cResult[13] !== enableCommunitySharedStyles.header) {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
      const obj7 = { style: header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp35 };
      cResult[13] = enableCommunitySharedStyles.header;
      cResult[14] = closure_16(tmp(4892).Heading, obj7);
      const tmp38 = closure_16(tmp(4892).Heading, obj7);
    } else {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
    }
    const _Symbol5 = Symbol;
    const description = enableCommunitySharedStyles.description;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
      const stringResult2 = obj11.string(tmp(1126).t["IL7/no"]);
      cResult[15] = stringResult2;
      tmp39 = stringResult2;
    } else {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
    }
    if (cResult[16] !== enableCommunitySharedStyles.description) {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
      const obj8 = { style: description, variant: "text-md/medium", color: "text-subtle", children: tmp39 };
      cResult[16] = enableCommunitySharedStyles.description;
      cResult[17] = closure_16(tmp(4892).Text, obj8);
      const tmp42 = closure_16(tmp(4892).Text, obj8);
    } else {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
    }
    if (cResult[18] === enableCommunitySharedStyles.content) {
      class V {
        constructor(features) {
          let publicUpdatesChannelId;
          let rulesChannelId;
          everyoneRole = undefined;
          if (null != features) {
            everyoneRole = everyoneRole.getEveryoneRole(features);
          }
          if (null != everyoneRole) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(features.features);
            set.add(constants.COMMUNITY);
            const obj3 = BigFlagUtilsAll;
            const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            const obj2 = { permissions: removeResult };
            const merged = Object.assign(everyoneRole);
            const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
            rulesChannelId = features.rulesChannelId;
            const saveGuild = first(dependencyMap[14]).saveGuild;
            const id = features.id;
            first(dependencyMap[14]);
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            saveGuild(id, obj4);
            if (removeResult !== everyoneRole.permissions) {
              const items = [obj2];
              const obj = guild(dependencyMap[16]);
              obj.saveRoleSettings(features.id, items);
            }
          }
        }
      }
    }
    const obj10 = { style: content, children: items1 };
    items1 = [tmp30, tmp32, tmp37, tmp41];
    cResult[18] = enableCommunitySharedStyles.content;
    cResult[19] = tmp37;
    cResult[20] = tmp41;
    cResult[21] = tmp32;
    const tmp46 = closure_17(closure_7, obj10);
    class U {
      constructor(arg0) {
        let tmp = arg0;
        if (tmp) {
          let prop;
          if (guild != null) {
            prop = guild.defaultMessageNotifications;
          }
          if (prop !== constants.ONLY_MENTIONS) {
            const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
            const obj3 = GuildSettingsActionCreatorsDefault;
            obj3.updateGuild(obj2);
          }
        }
        if (!tmp) {
          tmp = null == defaultMessageNotifications;
        }
        if (!tmp) {
          const obj4 = { defaultMessageNotifications };
          const obj = GuildSettingsActionCreatorsDefault;
          obj.updateGuild(obj4);
        }
      }
    }
    cResult[22] = tmp46;
  }
  if (guild != null) {
    class V {
      constructor(features) {
        let publicUpdatesChannelId;
        let rulesChannelId;
        everyoneRole = undefined;
        if (null != features) {
          everyoneRole = everyoneRole.getEveryoneRole(features);
        }
        if (null != everyoneRole) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(features.features);
          set.add(constants.COMMUNITY);
          const obj3 = BigFlagUtilsAll;
          const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
          const obj2 = { permissions: removeResult };
          const merged = Object.assign(everyoneRole);
          const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
          rulesChannelId = features.rulesChannelId;
          const saveGuild = first(dependencyMap[14]).saveGuild;
          const id = features.id;
          first(dependencyMap[14]);
          if (rulesChannelId == null) {
            rulesChannelId = closure_1_10;
          }
          ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
          if (publicUpdatesChannelId == null) {
            publicUpdatesChannelId = closure_1_10;
          }
          saveGuild(id, obj4);
          if (removeResult !== everyoneRole.permissions) {
            const items = [obj2];
            const obj = guild(dependencyMap[16]);
            obj.saveRoleSettings(features.id, items);
          }
        }
      }
    }
  }
  class U {
    constructor(arg0) {
      let tmp = arg0;
      if (tmp) {
        let prop;
        if (guild != null) {
          prop = guild.defaultMessageNotifications;
        }
        if (prop !== constants.ONLY_MENTIONS) {
          const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
          const obj3 = GuildSettingsActionCreatorsDefault;
          obj3.updateGuild(obj2);
        }
      }
      if (!tmp) {
        tmp = null == defaultMessageNotifications;
      }
      if (!tmp) {
        const obj4 = { defaultMessageNotifications };
        const obj = GuildSettingsActionCreatorsDefault;
        obj.updateGuild(obj4);
      }
    }
  }
  cResult[4] = undefined;
  cResult[5] = defaultMessageNotifications;
  cResult[6] = U;
}) : (() => {
  let TableSwitchRow;
  let TableSwitchRow2;
  let TableSwitchRow3;
  let defaultMessageNotifications;
  let first1;
  let format;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj13;
  let obj16;
  let obj17;
  let obj19;
  let obj21;
  let prop2;
  let prop3;
  let props;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp4Result5;
  let tmp4Result6;
  const f132670 = (item) => {
    const obj = PermissionUtilsAll;
    return obj.canEveryone(item, guild);
  };
  const ref = react.useRef(null);
  let obj2 = guild(4586);
  const tmp4 = defaultMessageNotifications;
  const token = obj2.useToken(defaultMessageNotifications(587).modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guild(504);
  let items = [GuildSettingsStore];
  guild = obj3.useStateFromStoresObject(items, () => props.getProps()).guild;
  let prop;
  const useState = react.useState;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  defaultMessageNotifications = _slicedToArray(useState(prop), 1)[0];
  const ONLY_MENTIONS = constants3.ONLY_MENTIONS;
  [first1, tmp11] = react.useState(false);
  [tmp13, tmp14] = react.useState(!closure_11.some(f132670));
  _slicedToArray(react.useState(!closure_11.some(f132670)), 2);
  const first2 = _slicedToArray(react.useState(tmp13), 1)[0];
  let prop1;
  const useCallback = react.useCallback;
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  const items1 = [prop1, defaultMessageNotifications];
  const callback = useCallback((arg0) => {
    let tmp = arg0;
    if (tmp) {
      let prop;
      if (guild != null) {
        prop = guild.defaultMessageNotifications;
      }
      if (prop !== constants.ONLY_MENTIONS) {
        const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
        const obj3 = GuildSettingsActionCreatorsDefault;
        obj3.updateGuild(obj2);
      }
    }
    if (!tmp) {
      tmp = null == defaultMessageNotifications;
    }
    if (!tmp) {
      const obj4 = { defaultMessageNotifications };
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateGuild(obj4);
    }
  }, items1);
  const callback1 = react.useCallback(function(features) {
    let publicUpdatesChannelId;
    let rulesChannelId;
    everyoneRole = undefined;
    if (null != features) {
      everyoneRole = everyoneRole.getEveryoneRole(features);
    }
    if (null != everyoneRole) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(features.features);
      set.add(constants.COMMUNITY);
      const obj3 = BigFlagUtilsAll;
      const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
      const obj2 = { permissions: removeResult };
      const merged = Object.assign(everyoneRole);
      const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
      rulesChannelId = features.rulesChannelId;
      const saveGuild = first(dependencyMap[14]).saveGuild;
      const id = features.id;
      first(dependencyMap[14]);
      if (rulesChannelId == null) {
        rulesChannelId = closure_1_10;
      }
      ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
      if (publicUpdatesChannelId == null) {
        publicUpdatesChannelId = closure_1_10;
      }
      saveGuild(id, obj4);
      if (removeResult !== everyoneRole.permissions) {
        const items = [obj2];
        const obj = guild(dependencyMap[16]);
        obj.saveRoleSettings(features.id, items);
      }
    }
  }, []);
  const tmp20 = tmp4(17886)();
  const tmp2Result = guild(17885);
  const enableCommunitySharedStyles = tmp2Result.useEnableCommunitySharedStyles();
  let obj4 = { headerRef: ref, currentStep: tmp2(17883).EnableCommunityModalSteps.STEP_3, onSuccess: callback1, disableNextStep: !first1, buttonText: intl.string(tmp2(1126).t.XGl4ba), children: items3 };
  const EnableCommunityModalScreen = tmp2(17883).EnableCommunityModalScreen;
  intl = tmp2(1126).intl;
  const obj5 = { style: enableCommunitySharedStyles.content, children: items2 };
  const obj6 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl2.formatToPlainString(guild(1126).t.tInpJj, { number: 3, total: 3 }) };
  const Text = tmp2(4892).Text;
  intl2 = tmp2(1126).intl;
  items2 = [closure_16(Text, obj6), , , ];
  const obj7 = { resizeMode: "contain", source: tmp20.finishingTouches };
  items2[1] = closure_16(closure_6, obj7);
  const obj8 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl3.string(guild(1126).t["Pj/s/a"]) };
  const Heading = tmp2(4892).Heading;
  intl3 = tmp2(1126).intl;
  items2[2] = closure_16(Heading, obj8);
  const obj9 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: intl4.string(guild(1126).t["IL7/no"]) };
  const Text2 = tmp2(4892).Text;
  intl4 = tmp2(1126).intl;
  items2[3] = closure_16(Text2, obj9);
  items3 = [closure_17(closure_7, obj5), , ];
  const obj10 = { spacing: 24, style: { paddingHorizontal: token }, children: items5 };
  const Stack = tmp2(5600).Stack;
  const TableRowGroup = tmp2(6081).TableRowGroup;
  const obj11 = { formSwitchDisabled: defaultMessageNotifications === ONLY_MENTIONS, children: closure_16(TableSwitchRow, obj12) };
  obj12 = { label: intl5.format(guild(1126).t.K8Eg4P, obj13), value: prop2 === constants3.ONLY_MENTIONS, disabled: defaultMessageNotifications === ONLY_MENTIONS, onValueChange: callback };
  const tmp4Result = tmp4(17895);
  TableSwitchRow = tmp2(6705).TableSwitchRow;
  intl5 = tmp2(1126).intl;
  prop2 = undefined;
  obj13 = {
    infoHook() {
      return null;
    }
  };
  if (guild != null) {
    prop2 = guild.defaultMessageNotifications;
  }
  const obj14 = { hasIcons: false, children: items4 };
  items4 = [closure_16(tmp4Result, obj11), ];
  const obj15 = { formSwitchDisabled: first2, children: closure_16(TableSwitchRow2, obj16) };
  obj16 = { label: intl6.format(guild(1126).t.v8qCoG, obj17), value: tmp13, disabled: first2, onValueChange: tmp14 };
  const tmp4Result4 = tmp4(17895);
  TableSwitchRow2 = tmp2(6705).TableSwitchRow;
  intl6 = tmp2(1126).intl;
  obj17 = {
    infoHook() {
      return null;
    }
  };
  items4[1] = closure_16(tmp4Result4, obj15);
  items5 = [closure_17(TableRowGroup, obj14), ];
  const obj18 = { title: intl7.string(guild(1126).t["k+b2Cf"]), hasIcons: false, children: closure_16(TableSwitchRow3, obj19) };
  const TableRowGroup2 = tmp2(6081).TableRowGroup;
  intl7 = tmp2(1126).intl;
  obj19 = { label: intl8.string(guild(1126).t["9AG3wI"]), value: first1, onValueChange: tmp11 };
  TableSwitchRow3 = tmp2(6705).TableSwitchRow;
  intl8 = tmp2(1126).intl;
  items5[1] = closure_16(TableRowGroup2, obj18);
  items3[1] = closure_17(Stack, obj10);
  const obj20 = { style: enableCommunitySharedStyles.formHint, variant: "text-xs/medium", color: "text-subtle", children: format(prop3, obj21) };
  const Text3 = tmp2(4892).Text;
  const intl9 = tmp2(1126).intl;
  format = intl9.format;
  obj21 = { communityGuidelines: tmp4Result5.getArticleURL(constants2.PUBLIC_GUILD_GUILDLINES), typesOfGuilds: tmp4Result6.getArticleURL(constants2.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) };
  prop3 = tmp2(1126).t["BwbW/Q"];
  tmp4Result5 = tmp4(2115);
  tmp4Result6 = tmp4(2115);
  items3[2] = closure_16(Text3, obj20);
  return closure_17(EnableCommunityModalScreen, obj4);
});
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx");

export default tmp6;