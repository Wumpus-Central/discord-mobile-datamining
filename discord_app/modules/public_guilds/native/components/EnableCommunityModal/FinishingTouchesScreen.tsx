// === Module 17827: FinishingTouchesScreen ===

// Module 17827 (FinishingTouchesScreen)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const PublicGuildsConstants = fn(7706);
({ CREATE_NEW_CHANNEL_VALUE: c10, MODERATOR_PERMISSIONS: closure_11, MODERATOR_PERMISSIONS_FLAG: closure_12 } = PublicGuildsConstants);
const Constants = fn(1085);
({ GuildFeatures: map1, HelpdeskArticles: closure_14, UserNotificationSettings: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = guild(576).c(59);
  let obj = guild(576);
  const ref = noop.useRef(null);
  const token = guild(4580).useToken(defaultMessageNotifications(587).modules.mobile.TABLE_ROW_PADDING);
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
  let obj3 = guild(4580);
  const tmp5 = defaultMessageNotifications;
  guild = guild(504).useStateFromStoresObject(tmp7, tmp8).guild;
  let prop;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  defaultMessageNotifications = _slicedToArray(noop.useState(prop), 1)[0];
  const tmpResult = guild(504);
  [tmp14, r10056] = noop.useState(false);
  if (cResult[2] !== guild) {
    const someResult = closure_11.some((item) => PermissionUtilsAll.canEveryone(item, guild));
    cResult[2] = guild;
    cResult[3] = someResult;
    let tmp15 = someResult;
  } else {
    tmp15 = cResult[3];
  }
  const tmp13 = _slicedToArray(noop.useState(false), 2);
  [tmp19, r10069] = noop.useState(!tmp15);
  const first1 = _slicedToArray(noop.useState(tmp19), 1)[0];
  let prop1;
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  if (cResult[4] === prop1) {
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
      cResult[7] = V;
    } else {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
    }
    const tmp24 = tmp5(17816)();
    const enableCommunitySharedStyles = tmp(17815).useEnableCommunitySharedStyles();
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
      const stringResult = obj6.string(tmp(1126).t.XGl4ba);
      cResult[8] = stringResult;
    } else {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
      let obj4 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
      const intl = tmp(1126).intl;
      obj4.children = intl.formatToPlainString(tmp(1126).t.tInpJj, { number: 3, total: 3 });
      const tmp30 = closure_16(tmp(4886).Text, obj4);
      cResult[9] = tmp30;
      const tmp29 = tmp30;
    } else {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
    }
    if (cResult[10] !== tmp24.finishingTouches) {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
      let obj5 = { resizeMode: "contain", source: tmp24.finishingTouches };
      const tmp33 = closure_16(closure_6, obj5);
      cResult[10] = tmp24.finishingTouches;
      cResult[11] = tmp33;
    } else {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
      const stringResult1 = obj9.string(tmp(1126).t["Pj/s/a"]);
      cResult[12] = stringResult1;
      const tmp34 = stringResult1;
    } else {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
    }
    if (cResult[13] !== enableCommunitySharedStyles.header) {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
      const obj7 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp34 };
      const tmp37 = closure_16(tmp(4886).Heading, obj7);
      cResult[13] = enableCommunitySharedStyles.header;
      cResult[14] = tmp37;
    } else {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
      const stringResult2 = obj11.string(tmp(1126).t["IL7/no"]);
      cResult[15] = stringResult2;
      const tmp38 = stringResult2;
    } else {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
    }
    if (cResult[16] !== enableCommunitySharedStyles.description) {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
      const obj8 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: tmp38 };
      const tmp41 = closure_16(tmp(4886).Text, obj8);
      cResult[16] = enableCommunitySharedStyles.description;
      cResult[17] = tmp41;
    } else {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
    }
    if (cResult[18] === enableCommunitySharedStyles.content) {
      class V {
        constructor(arg0) {
          everyoneRole = undefined;
          if (null != arg0) {
            tmp2 = closure_1_9;
            everyoneRole = closure_1_9.getEveryoneRole(arg0);
          }
          if (null != everyoneRole) {
            tmp6 = globalThis;
            _Set = Set;
            tmp7 = new.target;
            tmp8 = new.target;
            set = new Set(arg0.features);
            tmp9 = set;
            tmp10 = closure_1_13;
            addResult = set.add(closure_1_13.COMMUNITY);
            tmp12 = closure_1_2;
            tmp13 = closure_1_3;
            obj3 = closure_1_2(closure_1_3[15]);
            tmp14 = closure_1_12;
            removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
            obj1 = {};
            tmp16 = obj1;
            tmp17 = everyoneRole;
            merged = Object.assign(everyoneRole);
            obj1.permissions = removeResult;
            tmp19 = closure_1;
            obj5 = closure_1(closure_1_3[14]);
            obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
            obj7.features = set;
            rulesChannelId = arg0.rulesChannelId;
            if (rulesChannelId == null) {
              rulesChannelId = closure_1_10;
            }
            obj7.rulesChannelId = rulesChannelId;
            ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
            if (publicUpdatesChannelId == null) {
              publicUpdatesChannelId = closure_1_10;
            }
            obj7.publicUpdatesChannelId = publicUpdatesChannelId;
            obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
            saveGuildResult = obj5.saveGuild(arg0.id, obj7);
            if (removeResult !== everyoneRole.permissions) {
              tmp4 = guild;
              obj = guild(tmp13[16]);
              items = [];
              items[0] = obj1;
              saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
            }
          }
          return;
        }
      }
    }
    const obj10 = { style: enableCommunitySharedStyles.content, children: null };
    const items1 = [tmp29, tmp31, tmp36, tmp40];
    obj10.children = items1;
    const tmp45 = closure_17(closure_7, obj10);
    cResult[18] = enableCommunitySharedStyles.content;
    cResult[19] = tmp36;
    cResult[20] = tmp40;
    cResult[21] = tmp31;
    class U {
      constructor(arg0) {
        tmp = arg0;
        if (arg0) {
          tmp2 = null;
          prop = undefined;
          if (guild != null) {
            prop = guild.defaultMessageNotifications;
          }
          if (prop !== UserNotificationSettings.ONLY_MENTIONS) {
            tmp11 = closure_1;
            tmp12 = closure_3;
            obj3 = closure_1(closure_3[14]);
            obj1 = { defaultMessageNotifications: null };
            obj1.defaultMessageNotifications = tmp4.ONLY_MENTIONS;
            updateGuildResult = obj3.updateGuild(obj1);
          }
          return;
        }
        if (!tmp) {
          tmp5 = closure_1;
          tmp6 = null;
          tmp = null == closure_1;
        }
        if (!tmp) {
          tmp7 = closure_1;
          tmp8 = closure_3;
          obj = closure_1(closure_3[14]);
          obj5 = { defaultMessageNotifications: null };
          tmp9 = closure_1;
          obj5.defaultMessageNotifications = closure_1;
          updateGuildResult1 = obj.updateGuild(obj5);
        }
        return;
      }
    }
    cResult[22] = tmp45;
    const tmpResult2 = tmp(17815);
  }
  if (guild != null) {
    class V {
      constructor(arg0) {
        everyoneRole = undefined;
        if (null != arg0) {
          tmp2 = closure_1_9;
          everyoneRole = closure_1_9.getEveryoneRole(arg0);
        }
        if (null != everyoneRole) {
          tmp6 = globalThis;
          _Set = Set;
          tmp7 = new.target;
          tmp8 = new.target;
          set = new Set(arg0.features);
          tmp9 = set;
          tmp10 = closure_1_13;
          addResult = set.add(closure_1_13.COMMUNITY);
          tmp12 = closure_1_2;
          tmp13 = closure_1_3;
          obj3 = closure_1_2(closure_1_3[15]);
          tmp14 = closure_1_12;
          removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
          obj1 = {};
          tmp16 = obj1;
          tmp17 = everyoneRole;
          merged = Object.assign(everyoneRole);
          obj1.permissions = removeResult;
          tmp19 = closure_1;
          obj5 = closure_1(closure_1_3[14]);
          obj7 = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
          obj7.features = set;
          rulesChannelId = arg0.rulesChannelId;
          if (rulesChannelId == null) {
            rulesChannelId = closure_1_10;
          }
          obj7.rulesChannelId = rulesChannelId;
          ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = arg0);
          if (publicUpdatesChannelId == null) {
            publicUpdatesChannelId = closure_1_10;
          }
          obj7.publicUpdatesChannelId = publicUpdatesChannelId;
          obj7.defaultMessageNotifications = arg0.defaultMessageNotifications;
          saveGuildResult = obj5.saveGuild(arg0.id, obj7);
          if (removeResult !== everyoneRole.permissions) {
            tmp4 = guild;
            obj = guild(tmp13[16]);
            items = [];
            items[0] = obj1;
            saveRoleSettingsResult = obj.saveRoleSettings(arg0.id, items);
          }
        }
        return;
      }
    }
  }
  class U {
    constructor(arg0) {
      tmp = arg0;
      if (arg0) {
        tmp2 = null;
        prop = undefined;
        if (guild != null) {
          prop = guild.defaultMessageNotifications;
        }
        if (prop !== UserNotificationSettings.ONLY_MENTIONS) {
          tmp11 = closure_1;
          tmp12 = closure_3;
          obj3 = closure_1(closure_3[14]);
          obj1 = { defaultMessageNotifications: null };
          obj1.defaultMessageNotifications = tmp4.ONLY_MENTIONS;
          updateGuildResult = obj3.updateGuild(obj1);
        }
        return;
      }
      if (!tmp) {
        tmp5 = closure_1;
        tmp6 = null;
        tmp = null == closure_1;
      }
      if (!tmp) {
        tmp7 = closure_1;
        tmp8 = closure_3;
        obj = closure_1(closure_3[14]);
        obj5 = { defaultMessageNotifications: null };
        tmp9 = closure_1;
        obj5.defaultMessageNotifications = closure_1;
        updateGuildResult1 = obj.updateGuild(obj5);
      }
      return;
    }
  }
  cResult[4] = undefined;
  cResult[5] = defaultMessageNotifications;
  cResult[6] = U;
  const tmp11Result = _slicedToArray(noop.useState(!tmp15), 2);
}) : (() => {
  const ref = noop.useRef(null);
  const token = guild(4580).useToken(defaultMessageNotifications(587).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(4580);
  let items = [GuildSettingsStore];
  guild = guild(504).useStateFromStoresObject(items, () => props.getProps()).guild;
  let prop;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  defaultMessageNotifications = _slicedToArray(noop.useState(prop), 1)[0];
  [first1, obj19.onValueChange] = noop.useState(false);
  let obj3 = guild(504);
  [tmp12, tmp13] = _slicedToArray(noop.useState(!closure_11.some((item) => PermissionUtilsAll.canEveryone(item, guild))), 2);
  const first2 = _slicedToArray(noop.useState(tmp12), 1)[0];
  let prop1;
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  const items1 = [prop1, defaultMessageNotifications];
  const callback = noop.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0) {
      let prop;
      if (guild != null) {
        prop = guild.defaultMessageNotifications;
      }
      if (prop !== constants3.ONLY_MENTIONS) {
        const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
        GuildSettingsActionCreatorsDefault.updateGuild(obj2);
      }
    }
    if (!tmp) {
      tmp = null == defaultMessageNotifications;
    }
    if (!tmp) {
      const obj4 = { defaultMessageNotifications };
      GuildSettingsActionCreatorsDefault.updateGuild(obj4);
    }
  }, items1);
  const callback1 = noop.useCallback((features) => {
    everyoneRole = undefined;
    if (null != features) {
      everyoneRole = everyoneRole.getEveryoneRole(features);
    }
    if (null != everyoneRole) {
      const _Set = Set;
      const set = new Set(features.features);
      set.add(constants.COMMUNITY);
      const removeResult = BigFlagUtilsAll.remove(everyoneRole.permissions, closure_1_12);
      const obj2 = {};
      const merged = Object.assign(everyoneRole);
      obj2.permissions = removeResult;
      const obj4 = { features: set, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
      let rulesChannelId = features.rulesChannelId;
      if (rulesChannelId == null) {
        rulesChannelId = closure_1_10;
      }
      obj4.rulesChannelId = rulesChannelId;
      ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = features);
      if (publicUpdatesChannelId == null) {
        publicUpdatesChannelId = closure_1_10;
      }
      obj4.publicUpdatesChannelId = publicUpdatesChannelId;
      obj4.defaultMessageNotifications = features.defaultMessageNotifications;
      first(9247).saveGuild(features.id, obj4);
      if (removeResult !== everyoneRole.permissions) {
        const items = [obj2];
        guild(17769).saveRoleSettings(features.id, items);
        const obj = guild(17769);
      }
      const obj5 = first(9247);
    }
  }, []);
  const tmp11 = _slicedToArray(noop.useState(!closure_11.some((item) => PermissionUtilsAll.canEveryone(item, guild))), 2);
  const tmp19 = defaultMessageNotifications(17816)();
  const enableCommunitySharedStyles = guild(17815).useEnableCommunitySharedStyles();
  let obj4 = { headerRef: ref, currentStep: guild(17813).EnableCommunityModalSteps.STEP_3, onSuccess: callback1, disableNextStep: !first1, buttonText: null, children: null };
  const intl = tmp2(1126).intl;
  obj4.buttonText = intl.string(guild(1126).t.XGl4ba);
  let obj5 = { style: enableCommunitySharedStyles.content, children: null };
  const obj6 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
  const intl2 = tmp2(1126).intl;
  obj6.children = intl2.formatToPlainString(guild(1126).t.tInpJj, { number: 3, total: 3 });
  const items2 = [closure_16(guild(4886).Text, obj6), closure_16(closure_6, { resizeMode: "contain", source: tmp19.finishingTouches }), , ];
  const obj8 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = tmp2(1126).intl;
  obj8.children = intl3.string(guild(1126).t["Pj/s/a"]);
  items2[2] = closure_16(guild(4886).Heading, obj8);
  const obj9 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: null };
  const intl4 = tmp2(1126).intl;
  obj9.children = intl4.string(guild(1126).t["IL7/no"]);
  items2[3] = closure_16(guild(4886).Text, obj9);
  obj5.children = items2;
  const items3 = [closure_17(closure_7, obj5), , ];
  const obj10 = { spacing: 24, style: { paddingHorizontal: token }, children: null };
  const obj11 = { formSwitchDisabled: defaultMessageNotifications === constants3.ONLY_MENTIONS, children: null };
  const obj7 = { resizeMode: "contain", source: tmp19.finishingTouches };
  const tmp2Result = guild(17815);
  const obj12 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl5 = tmp2(1126).intl;
  obj12.label = intl5.format(guild(1126).t.K8Eg4P, {
    infoHook() {
      return null;
    }
  });
  let prop2;
  if (guild != null) {
    prop2 = guild.defaultMessageNotifications;
  }
  const obj14 = { hasIcons: false, children: null };
  obj12.value = prop2 === constants3.ONLY_MENTIONS;
  obj12.disabled = defaultMessageNotifications === constants3.ONLY_MENTIONS;
  obj12.onValueChange = callback;
  obj11.children = closure_16(guild(6698).TableSwitchRow, obj12);
  const items4 = [closure_16(defaultMessageNotifications(17825), obj11), ];
  const obj15 = { formSwitchDisabled: first2, children: null };
  const obj13 = {
    infoHook() {
      return null;
    }
  };
  const tmp4Result = defaultMessageNotifications(17825);
  const obj16 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl6 = tmp2(1126).intl;
  obj16.label = intl6.format(guild(1126).t.v8qCoG, {
    infoHook() {
      return null;
    }
  });
  obj16.value = tmp12;
  obj16.disabled = first2;
  obj16.onValueChange = tmp13;
  obj15.children = closure_16(guild(6698).TableSwitchRow, obj16);
  items4[1] = closure_16(defaultMessageNotifications(17825), obj15);
  obj14.children = items4;
  const items5 = [closure_17(guild(6074).TableRowGroup, obj14), ];
  const obj18 = { title: null, hasIcons: false, children: null };
  const intl7 = tmp2(1126).intl;
  obj18.title = intl7.string(guild(1126).t["k+b2Cf"]);
  const obj19 = { label: null, value: null, onValueChange: null };
  const intl8 = tmp2(1126).intl;
  obj19.label = intl8.string(guild(1126).t["9AG3wI"]);
  obj19.value = first1;
  obj18.children = closure_16(guild(6698).TableSwitchRow, obj19);
  items5[1] = closure_16(guild(6074).TableRowGroup, obj18);
  obj10.children = items5;
  items3[1] = closure_17(guild(5593).Stack, obj10);
  const obj20 = { style: enableCommunitySharedStyles.formHint, variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl9 = tmp2(1126).intl;
  const obj21 = { communityGuidelines: null, typesOfGuilds: null };
  const obj17 = {
    infoHook() {
      return null;
    }
  };
  const tmp4Result4 = defaultMessageNotifications(17825);
  obj21.communityGuidelines = defaultMessageNotifications(2115).getArticleURL(constants2.PUBLIC_GUILD_GUILDLINES);
  const tmp4Result5 = defaultMessageNotifications(2115);
  obj21.typesOfGuilds = defaultMessageNotifications(2115).getArticleURL(constants2.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj20.children = intl9.format(guild(1126).t["BwbW/Q"], obj21);
  items3[2] = closure_16(guild(4886).Text, obj20);
  obj4.children = items3;
  return closure_17(guild(17813).EnableCommunityModalScreen, obj4);
});