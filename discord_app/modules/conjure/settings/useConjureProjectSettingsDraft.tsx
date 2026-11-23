// === Module 18286: useConjureProjectSettingsDraft ===

// Module 18286 (useConjureProjectSettingsDraft)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/useConjureProjectSettingsDraft.tsx");

export default function useConjureProjectSettingsDraft(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  items = [save2];
  let items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj = require("initialize");
  const conjureLiveReloadSetting = require("useConjureLiveReloadSetting").useConjureLiveReloadSetting(arg0);
  const save = conjureLiveReloadSetting.save;
  const tmp6 = require("useConjureAppIdentityDraft")(arg0);
  const changes = tmp6.changes;
  const commit = tmp6.commit;
  let obj2 = require("useConjureLiveReloadSetting");
  const tmp5 = importDefault;
  const conjureSmartContextSetting = require("ConjureSmartContext").useConjureSmartContextSetting(arg0);
  save2 = conjureSmartContextSetting.save;
  let obj3 = require("ConjureSmartContext");
  const conjureRequireHostApprovalSetting = require("ConjureHostApproval").useConjureRequireHostApprovalSetting(arg0);
  const save3 = conjureRequireHostApprovalSetting.save;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.collaborator_role_ids;
  }
  if (prop == null) {
    prop = [];
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  let obj4 = require("ConjureHostApproval");
  [tmp11, closure_9] = changes(commit.useState(str), 2);
  const tmp10 = changes(commit.useState(str), 2);
  [tmp13, tmp14] = changes(commit.useState(null), 2);
  closure_10 = tmp14;
  const tmp12 = changes(commit.useState(null), 2);
  [str2, closure_11] = changes(commit.useState(tmp11), 2);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp9Result = changes(commit.useState(num), 2);
  let flags = tmp9Result[0];
  closure_13 = tmp18;
  const tmp9Result11 = changes(commit.useState(() => {
    items = [...prop];
    return items;
  }), 2);
  const first1 = tmp9Result11[0];
  closure_15 = tmp21;
  const tmp22 = tmp5(stateFromStores[9])(arg0);
  closure_16 = tmp22;
  const memo = obj5.useMemo(() => closure_0(stateFromStores[10]).conjureSharingOptions(), []);
  const tmp9Result12 = changes(commit.useState(null), 2);
  const first2 = tmp9Result12[0];
  closure_18 = tmp26;
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  let tmp28 = null;
  if ("guild" === install_scope) {
    let guild_id = stateFromStores.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    tmp28 = guild_id;
  }
  const tmp9Result13 = changes(commit.useState(tmp28), 2);
  if (tmp28 !== tmp9Result13[0]) {
    tmp9Result13[1](tmp28);
    let num2;
    if (stateFromStores != null) {
      num2 = stateFromStores.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp18(num2);
    const items2 = [];
    HermesBuiltin.arraySpread(prop, 0);
    tmp21(items2);
    tmp26(null);
    tmp14(null);
  }
  let uses_preview_app;
  if (stateFromStores != null) {
    uses_preview_app = stateFromStores.uses_preview_app;
  }
  const tmp15 = changes(commit.useState(tmp11), 2);
  [tmp41, tmp42] = changes(commit.useState(null), 2);
  if (tmp43) {
    tmp42(null);
  }
  const tmp9Result15 = changes(commit.useState(false), 2);
  const first3 = tmp9Result15[0];
  closure_21 = tmp9Result15[1];
  tmp43 = null != tmp41 && tmp41 === uses_preview_app;
  const tmp9Result14 = changes(commit.useState(null), 2);
  [tmp48, closure_22] = changes(commit.useState(null), 2);
  const tmp9Result16 = changes(commit.useState(null), 2);
  [tmp50, closure_23] = changes(commit.useState(null), 2);
  const tmp9Result17 = changes(commit.useState(null), 2);
  [tmp52, closure_24] = changes(commit.useState(null), 2);
  const tmp9Result18 = changes(commit.useState(null), 2);
  [tmp54, closure_25] = changes(commit.useState(null), 2);
  const tmp9Result19 = changes(commit.useState(null), 2);
  [tmp56, closure_26] = changes(commit.useState(false), 2);
  closure_27 = obj5.useRef(null);
  closure_28 = obj5.useRef(false);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    result = tmp(tmp2[11]).projectSupportsVisibility(stateFromStores);
    const tmpResult = tmp(tmp2[11]);
  }
  let result1 = tmp59;
  if (null != stateFromStores && "guild" === stateFromStores.install_scope) {
    result1 = null != arg1;
  }
  if (result1) {
    result1 = tmp(tmp2[11]).projectSupportsCollaboratorRoles(stateFromStores);
    const tmpResult4 = tmp(tmp2[11]);
  }
  const tmp9Result20 = changes(commit.useState(false), 2);
  const conjureProjectAccessSettings = require("ConjureUtils").getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let shareLinksEnabled = first2;
  if (first2 == null) {
    shareLinksEnabled = tmp22.shareLinksEnabled;
  }
  let str3 = "public";
  if (!conjureProjectAccessSettings.isPublic) {
    let tmp62 = null;
    if (null != shareLinksEnabled) {
      let str4 = "collaborators";
      if (shareLinksEnabled) {
        str4 = "link";
      }
      tmp62 = str4;
    }
    str3 = tmp62;
  }
  let tmp63 = result;
  if (result) {
    tmp63 = null != first2;
  }
  if (tmp63) {
    tmp63 = first2 !== tmp22.shareLinksEnabled;
  }
  closure_31 = tmp63;
  closure_32 = tmp64;
  let tmp65 = result;
  if (result) {
    let num4;
    if (tmp13 != null) {
      num4 = tmp13.flags;
    }
    if (num4 == null) {
      flags = undefined;
      if (stateFromStores != null) {
        flags = stateFromStores.flags;
      }
      num4 = flags;
    }
    if (num4 == null) {
      num4 = 0;
    }
    tmp65 = flags !== num4;
  }
  closure_33 = tmp65;
  let tmp67 = result1;
  if (result1) {
    let roleIds;
    if (tmp13 != null) {
      roleIds = tmp13.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp67 = !tmp(tmp2[13]).haveSameRoleIds(first1, roleIds);
    const tmpResult6 = tmp(tmp2[13]);
  }
  closure_34 = tmp67;
  let flag = tmp41;
  if (tmp41 == null) {
    flag = uses_preview_app;
  }
  if (flag == null) {
    flag = false;
  }
  let tmp70 = tmp69;
  if (null != uses_preview_app) {
    tmp70 = null != tmp41;
  }
  closure_36 = tmp70;
  let changed = tmp64;
  if (!(null != stateFromStores && trimmed !== tmp11)) {
    changed = tmp65;
  }
  if (!changed) {
    changed = tmp63;
  }
  if (!changed) {
    changed = tmp67;
  }
  if (!changed) {
    changed = tmp70;
  }
  if (!changed) {
    changed = tmp6.changed;
  }
  let changed2 = changed;
  if (!changed) {
    changed2 = conjureLiveReloadSetting.changed;
  }
  if (!changed2) {
    changed2 = conjureSmartContextSetting.changed;
  }
  if (!changed2) {
    changed2 = conjureRequireHostApprovalSetting.changed;
  }
  const setIcon = tmp6.setIcon;
  const setDescription = tmp6.setDescription;
  const setChecked = conjureLiveReloadSetting.setChecked;
  const setChecked2 = conjureSmartContextSetting.setChecked;
  const setChecked3 = conjureRequireHostApprovalSetting.setChecked;
  const items3 = [setIcon];
  const items4 = [setDescription];
  const callback = obj5.useCallback((channelId) => {
    setIcon(channelId);
    closure_1_24(null);
  }, items3);
  const callback1 = obj5.useCallback((description) => {
    setDescription(description);
    closure_1_24(null);
  }, items4);
  const callback2 = obj5.useCallback((arg0) => {
    closure_1_11(arg0);
    closure_1_22(null);
    closure_1_24(null);
  }, []);
  const callback3 = obj5.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_13((arg0) => {
      if (closure_1) {
        let tmp2 = arg0 | closure_0;
      } else {
        tmp2 = arg0 & ~closure_0;
      }
      return tmp2;
    });
    closure_1_23(null);
    closure_1_24(null);
  }, []);
  const callback4 = obj5.useCallback((arg0) => {
    closure_0 = arg0;
    closure_13((arg0) => {
      if ("public" === closure_0) {
        let tmp3 = arg0 | closure_0(stateFromStores[11]).ConjureProjectFlags.PUBLIC;
      } else {
        tmp3 = arg0 & ~closure_0(stateFromStores[11]).ConjureProjectFlags.PUBLIC;
      }
      return tmp3;
    });
    let tmp3 = null;
    if ("public" !== arg0) {
      tmp3 = "link" === arg0;
    }
    closure_18(tmp3);
    closure_1_24(null);
  }, []);
  const items5 = [setChecked];
  const callback5 = obj5.useCallback((arg0) => {
    tmp42(arg0);
    closure_1_24(null);
  }, []);
  const callback6 = obj5.useCallback((arg0) => {
    setChecked(arg0);
    closure_1_24(null);
  }, items5);
  const items6 = [arg1, stateFromStores];
  const callback7 = obj5.useCallback(save(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (null != stateFromStores) {
              if (null != closure_1) {
                if (null != stateFromStores.preview_application_id) {
                  if (ref.current !== closure_1) {
                    if (ref2.current) {
                      c5 = 3;
                      return { value: false, done: true };
                    } else {
                      ref2.current = true;
                      closure_2_26(true);
                      c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj5 = { value: closure_0(tmp62[14]).fetchConjureAppInGuild(stateFromStores, closure_1), done: false };
                      return obj5;
                    }
                  }
                }
              }
            }
            c5 = 3;
            return { value: true, done: true };
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_28.current = false;
          closure_129_26(false);
          throw tmp62;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_28.current = false;
            closure_129_26(false);
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = value;
            if (false !== closure_128_0) {
              if (true === closure_128_0) {
                closure_129_27.current = closure_129_1;
              }
              c3 = 0;
              closure_129_28.current = false;
              closure_129_26(false);
              c5 = 3;
              return { value: true, done: true };
            } else {
              c4 = 3;
              c5 = 1;
              const obj8 = { value: closure_0(tmp62[15]).requestConjureInstallConsent(closure_129_2.id, closure_129_1), done: false };
              return obj8;
            }
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_28.current = false;
            closure_129_26(false);
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c4 = 4;
            c5 = 1;
            const obj11 = { value: closure_0(tmp62[14]).fetchConjureAppInGuild(closure_129_2, closure_129_1), done: false };
            return obj11;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_28.current = false;
          closure_129_26(false);
          c5 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_128_1 = tmp70;
          if (closure_128_1) {
            closure_129_27.current = closure_129_1;
          }
          c3 = 0;
          closure_129_28.current = false;
          closure_129_26(false);
          c5 = 3;
          const obj = { value: closure_128_1, done: true };
          return obj;
        }
      } catch (tmp62) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp62;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items6);
  _require = save(function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c4 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            if (closure_0.length > closure_0(stateFromStores[11]).MAX_PROJECT_COLLABORATOR_ROLES) {
              const intl = closure_0(stateFromStores[16]).intl;
              const obj4 = { max: closure_0(stateFromStores[11]).MAX_PROJECT_COLLABORATOR_ROLES };
              closure_1_23(intl.formatToPlainString(tmp16(stateFromStores[17])["dH7+/Z"], obj4));
            } else {
              function apply() {
                closure_2_15(closure_1_0);
                closure_2_23(null);
                closure_2_24(null);
              }
              closure_129_1 = apply;
              if (closure_0.some((item) => !closure_1_14.includes(item))) {
                c3 = 1;
                c2 = 2;
                c4 = 1;
                const obj5 = { value: callback7(), done: false };
                return obj5;
              } else {
                apply();
              }
            }
          }
        } else {
          if (1 === tmp6) {
            c3 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value) {
              closure_129_1();
            }
            c3 = 0;
          }
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      } catch (tmp15) {
        if (tmp3 === c3) {
          c4 = tmp2;
          throw tmp15;
        } else {
          c2 = tmp;
        }
      }
    }
  });
  const items7 = [callback7, first1];
  const items8 = [setChecked2];
  const callback8 = obj5.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items7);
  const items9 = [setChecked3];
  const callback9 = obj5.useCallback((arg0) => {
    setChecked2(arg0);
    closure_1_25(null);
  }, items8);
  const callback10 = obj5.useCallback((arg0) => {
    setChecked3(arg0);
    closure_1_25(null);
  }, items9);
  const items10 = [commit, flags, tmp65, arg1, changed2, changes, isGuildCollaboration, null != stateFromStores && trimmed !== tmp11, tmp70, flag, stateFromStores, arg0, changed, tmp67, save3, save, save2, first3, first1, tmp22, tmp63, first2, trimmed];
  let obj6 = { iconURL: tmp6.iconURL, description: tmp6.description, liveReload: conjureLiveReloadSetting, smartContext: conjureSmartContextSetting, hostApproval: conjureRequireHostApprovalSetting, name: str2, nameError: tmp48, nameChanged: null != stateFromStores && trimmed !== tmp11, sharingMode: str3, sharingOptions: memo, canChangeSharing: null, isGuildCollaboration: null, usesPreviewApp: null, canChangePreviewApp: null, selectedRoleIds: null, supportsVisibility: null, supportsCollaboration: null, supportsCollaboratorRoles: null, checkingAppInGuild: null, saving: null, selectionError: null, saveError: null, experimentalError: null, canSave: null, handleIconChange: null, handleNameChange: null, handleDescriptionChange: null, handleFlagChange: null, handleSharingModeChange: null, handleUsesPreviewAppChange: null, handleLiveReloadChange: null, handleRoleSelectionChange: null, ensureAppInGuild: null, handleSmartContextChange: null, handleRequireHostApprovalChange: null, submit: null };
  let tmp83 = result;
  const callback11 = obj5.useCallback(save(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === guild_id) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (null != stateFromStores) {
              if (changed2) {
                if (!first3) {
                  let result = null;
                  if (closure_32) {
                    result = tmp4(tmp92[18]).conjureProjectNameError(trimmed);
                    const obj2 = tmp4(tmp92[18]);
                  }
                  if (null != result) {
                    closure_2_22(result);
                    c4 = 3;
                    return { value: "project", done: true };
                  } else {
                    const obj6 = {};
                    const merged = Object.assign(changes);
                    if (closure_32) {
                      obj6.name = trimmed;
                    }
                    let tmp43 = closure_33;
                    if (closure_33) {
                      obj6.flags = flags;
                    }
                    if (closure_31) {
                      obj6.share_links_enabled = first2;
                    }
                    let tmp47 = closure_34;
                    if (closure_34) {
                      items = [];
                      HermesBuiltin.arraySpread(first1, 0);
                      obj6.collaborator_role_ids = items.sort();
                    }
                    if (closure_36) {
                      obj6.uses_preview_app = flag;
                    }
                    let tmp53 = null == tmp111.guild_id;
                    if (tmp53) {
                      tmp53 = null != guild_id;
                    }
                    if (tmp53) {
                      if (!tmp47) {
                        if (tmp43) {
                          tmp43 = isGuildCollaboration;
                        }
                        tmp47 = tmp43;
                      }
                      tmp53 = tmp47;
                    }
                    if (tmp53) {
                      obj6.guild_id = guild_id;
                    }
                    closure_21(true);
                    dependencyMap3(null);
                    closure_2_25(null);
                    c3 = 2;
                    if (changed) {
                      guild_id = 3;
                      c4 = 1;
                      const obj7 = { value: tmp4(tmp92[19]).updateProjectSettings(tmp4, obj6), done: false };
                      return obj7;
                    }
                  }
                }
              }
            }
            c4 = 3;
            return { value: null, done: true };
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_21(false);
          throw tmp92;
        } else if (2 === tmp8) {
          c3 = 1;
          const intl = tmp4(tmp92[16]).intl;
          closure_128_24(intl.string(guild_id(tmp92[17])["9JPr8h"]));
          c3 = 0;
          closure_128_21(false);
          c4 = 3;
          return { value: "project", done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_21(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_9(closure_128_29);
          const obj8 = { flags: closure_128_12, roleIds: null };
          const items1 = [];
          HermesBuiltin.arraySpread(closure_128_14, 0);
          obj8.roleIds = items1;
          closure_128_10(obj8);
          if (null != closure_128_17) {
            closure_128_16.setShareLinksEnabled(closure_128_17);
          }
          closure_128_18(null);
          closure_128_5();
        }
        if (closure_128_3()) {
          if (!closure_128_6()) {
            const intl3 = tmp4(tmp92[16]).intl;
            closure_128_25(intl3.string(guild_id(tmp92[17])["9JPr8h"]));
            const tmp75 = "experimental";
          }
        } else {
          const intl2 = tmp4(tmp92[16]).intl;
          closure_128_24(intl2.string(guild_id(tmp92[17]).XzkNBw));
        }
        c3 = 0;
        closure_128_21(false);
        c4 = 3;
      } catch (tmp92) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp92;
        } else if (tmp2 === tmp94) {
          guild_id = tmp2;
        } else {
          guild_id = tmp;
        }
      }
    }
  }), items10);
  if (result) {
    tmp83 = null != tmp22.shareLinksEnabled || tmp22.loadFailed;
    const tmp84 = null != tmp22.shareLinksEnabled || tmp22.loadFailed;
  }
  obj6.canChangeSharing = tmp83;
  obj6.isGuildCollaboration = isGuildCollaboration;
  obj6.usesPreviewApp = flag;
  obj6.canChangePreviewApp = null != uses_preview_app;
  obj6.selectedRoleIds = first1;
  obj6.supportsVisibility = result;
  obj6.supportsCollaboration = null != stateFromStores && "guild" === stateFromStores.install_scope;
  obj6.supportsCollaboratorRoles = result1;
  obj6.checkingAppInGuild = tmp56;
  obj6.saving = first3;
  obj6.selectionError = tmp50;
  obj6.saveError = tmp52;
  obj6.experimentalError = tmp54;
  if (changed2) {
    changed2 = "" !== trimmed;
  }
  obj6.canSave = changed2;
  obj6.handleIconChange = callback;
  obj6.handleNameChange = callback2;
  obj6.handleDescriptionChange = callback1;
  obj6.handleFlagChange = callback3;
  obj6.handleSharingModeChange = callback4;
  obj6.handleUsesPreviewAppChange = callback5;
  obj6.handleLiveReloadChange = callback6;
  obj6.handleRoleSelectionChange = callback8;
  obj6.ensureAppInGuild = callback7;
  obj6.handleSmartContextChange = callback9;
  obj6.handleRequireHostApprovalChange = callback10;
  obj6.submit = callback11;
  return obj6;
};