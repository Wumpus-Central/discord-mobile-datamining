// === Module 12435: useConjureProjectSettingsDraft ===

// Module 12435 (useConjureProjectSettingsDraft)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/useConjureProjectSettingsDraft.tsx");

export default function useConjureProjectSettingsDraft(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  let items = [save2];
  let items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj = require("initialize");
  const conjureLiveReloadSetting = require("useConjureLiveReloadSetting").useConjureLiveReloadSetting(arg0);
  const save = conjureLiveReloadSetting.save;
  const tmp5 = require("useConjureAppIdentityDraft")(arg0);
  const changes = tmp5.changes;
  const commit = tmp5.commit;
  let obj2 = require("useConjureLiveReloadSetting");
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
  [tmp10, closure_9] = changes(commit.useState(str), 2);
  const tmp9 = changes(commit.useState(str), 2);
  [tmp12, closure_10] = changes(commit.useState(null), 2);
  const tmp11 = changes(commit.useState(null), 2);
  [str2, closure_11] = changes(commit.useState(tmp10), 2);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp8Result = changes(commit.useState(num), 2);
  let flags = tmp8Result[0];
  closure_13 = tmp8Result[1];
  const tmp8Result8 = changes(commit.useState(() => {
    const items = [...prop];
    return items;
  }), 2);
  const first1 = tmp8Result8[0];
  closure_15 = tmp8Result8[1];
  const tmp8Result9 = changes(commit.useState(false), 2);
  const first2 = tmp8Result9[0];
  closure_17 = tmp8Result9[1];
  const tmp13 = changes(commit.useState(tmp10), 2);
  [tmp21, closure_18] = changes(commit.useState(null), 2);
  const tmp8Result10 = changes(commit.useState(null), 2);
  [tmp23, closure_19] = changes(commit.useState(null), 2);
  const tmp8Result11 = changes(commit.useState(null), 2);
  [tmp25, closure_20] = changes(commit.useState(null), 2);
  const tmp8Result12 = changes(commit.useState(null), 2);
  [tmp27, closure_21] = changes(commit.useState(null), 2);
  const tmp8Result13 = changes(commit.useState(null), 2);
  [tmp29, closure_22] = changes(commit.useState(false), 2);
  closure_23 = obj5.useRef(null);
  closure_24 = obj5.useRef(false);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    result = tmp(tmp2[9]).projectSupportsVisibility(stateFromStores);
    const tmpResult = tmp(tmp2[9]);
  }
  let tmp32 = null != stateFromStores;
  if (tmp32) {
    tmp32 = "user" !== stateFromStores.install_scope;
  }
  let result1 = tmp32;
  if (tmp32) {
    result1 = null != arg1;
  }
  if (result1) {
    result1 = tmp(tmp2[9]).projectSupportsCollaboratorRoles(stateFromStores);
    const tmpResult4 = tmp(tmp2[9]);
  }
  const tmp8Result14 = changes(commit.useState(false), 2);
  const conjureProjectAccessSettings = require("ConjureUtils").getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let tmp35 = null != stateFromStores;
  if (tmp35) {
    tmp35 = trimmed !== tmp10;
  }
  closure_27 = tmp35;
  let tmp36 = result;
  if (result) {
    let num2;
    if (tmp12 != null) {
      num2 = tmp12.flags;
    }
    if (num2 == null) {
      flags = undefined;
      if (stateFromStores != null) {
        flags = stateFromStores.flags;
      }
      num2 = flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp36 = flags !== num2;
  }
  closure_28 = tmp36;
  let tmp38 = result1;
  if (result1) {
    let roleIds;
    if (tmp12 != null) {
      roleIds = tmp12.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp38 = !tmp(tmp2[11]).haveSameRoleIds(first1, roleIds);
    const tmpResult6 = tmp(tmp2[11]);
  }
  closure_29 = tmp38;
  let changed = tmp35;
  if (!tmp35) {
    changed = tmp36;
  }
  if (!changed) {
    changed = tmp38;
  }
  if (!changed) {
    changed = tmp5.changed;
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
  const setIcon = tmp5.setIcon;
  const setDescription = tmp5.setDescription;
  const setChecked = conjureLiveReloadSetting.setChecked;
  const setChecked2 = conjureSmartContextSetting.setChecked;
  const setChecked3 = conjureRequireHostApprovalSetting.setChecked;
  const items2 = [setIcon];
  const items3 = [setDescription];
  const callback = obj5.useCallback((channelId) => {
    setIcon(channelId);
    closure_1_20(null);
  }, items2);
  const callback1 = obj5.useCallback((description) => {
    setDescription(description);
    closure_1_20(null);
  }, items3);
  const callback2 = obj5.useCallback((arg0) => {
    closure_1_11(arg0);
    closure_1_18(null);
    closure_1_20(null);
  }, []);
  const items4 = [setChecked];
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
    closure_1_19(null);
    closure_1_20(null);
  }, []);
  const callback4 = obj5.useCallback((arg0) => {
    setChecked(arg0);
    closure_1_20(null);
  }, items4);
  const items5 = [arg1, stateFromStores];
  const callback5 = obj5.useCallback(save(function*() {
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
                  if (null == stateFromStores.install_scope_setup) {
                    if (!obj13.isPreviewlessProject(stateFromStores)) {
                      if (ref.current !== closure_1) {
                        if (ref2.current) {
                          c5 = 3;
                          return { value: false, done: true };
                        } else {
                          ref2.current = true;
                          __initData4(true);
                          c3 = 1;
                          c4 = 2;
                          c5 = 1;
                          const obj5 = { value: closure_0(tmp65[12]).fetchConjureAppInGuild(stateFromStores, closure_1), done: false };
                          return obj5;
                        }
                      }
                    }
                    obj13 = closure_0(tmp65[9]);
                  }
                }
              }
            }
            c5 = 3;
            return { value: true, done: true };
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_24.current = false;
          closure_129_22(false);
          throw tmp65;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_24.current = false;
            closure_129_22(false);
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = value;
            if (false !== closure_128_0) {
              if (true === closure_128_0) {
                closure_129_23.current = closure_129_1;
              }
              c3 = 0;
              closure_129_24.current = false;
              closure_129_22(false);
              c5 = 3;
              return { value: true, done: true };
            } else {
              c4 = 3;
              c5 = 1;
              const obj8 = { value: closure_0(tmp65[13]).requestConjureInstallConsent(closure_129_2.id, closure_129_1), done: false };
              return obj8;
            }
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_24.current = false;
            closure_129_22(false);
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c4 = 4;
            c5 = 1;
            const obj11 = { value: closure_0(tmp65[12]).fetchConjureAppInGuild(closure_129_2, closure_129_1), done: false };
            return obj11;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_24.current = false;
          closure_129_22(false);
          c5 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_128_1 = tmp73;
          if (closure_128_1) {
            closure_129_23.current = closure_129_1;
          }
          c3 = 0;
          closure_129_24.current = false;
          closure_129_22(false);
          c5 = 3;
          const obj = { value: closure_128_1, done: true };
          return obj;
        }
      } catch (tmp65) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp65;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items5);
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
            if (closure_0.length > closure_0(stateFromStores[9]).MAX_PROJECT_COLLABORATOR_ROLES) {
              const intl = closure_0(stateFromStores[14]).intl;
              const obj4 = { max: closure_0(stateFromStores[9]).MAX_PROJECT_COLLABORATOR_ROLES };
              closure_1_19(intl.formatToPlainString(tmp16(stateFromStores[15])["dH7+/Z"], obj4));
            } else {
              function apply() {
                closure_2_15(closure_1_0);
                closure_2_19(null);
                closure_2_20(null);
              }
              closure_129_1 = apply;
              if (closure_0.some((item) => !closure_1_14.includes(item))) {
                c3 = 1;
                c2 = 2;
                c4 = 1;
                const obj5 = { value: callback5(), done: false };
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
  const items6 = [callback5, first1];
  const items7 = [setChecked2];
  const callback6 = obj5.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items6);
  const items8 = [setChecked3];
  const callback7 = obj5.useCallback((arg0) => {
    setChecked2(arg0);
    closure_1_21(null);
  }, items7);
  const callback8 = obj5.useCallback((arg0) => {
    setChecked3(arg0);
    closure_1_21(null);
  }, items8);
  const items9 = [commit, flags, tmp36, arg1, changed2, changes, isGuildCollaboration, tmp35, stateFromStores, arg0, changed, tmp38, save3, save, save2, first2, first1, trimmed];
  let obj6 = { iconURL: tmp5.iconURL, description: tmp5.description, liveReload: conjureLiveReloadSetting, smartContext: conjureSmartContextSetting, hostApproval: conjureRequireHostApprovalSetting, name: str2, nameError: tmp21, nameChanged: tmp35, isPublic: conjureProjectAccessSettings.isPublic, isGuildCollaboration, selectedRoleIds: first1, supportsVisibility: result, supportsCollaboration: tmp32, supportsCollaboratorRoles: result1, checkingAppInGuild: tmp29, saving: first2, selectionError: tmp23, saveError: tmp25, experimentalError: tmp27, canSave: null, handleIconChange: null, handleNameChange: null, handleDescriptionChange: null, handleFlagChange: null, handleLiveReloadChange: null, handleRoleSelectionChange: null, ensureAppInGuild: null, handleSmartContextChange: null, handleRequireHostApprovalChange: null, submit: null };
  const callback9 = obj5.useCallback(save(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
                if (!first2) {
                  let result = null;
                  if (closure_27) {
                    result = tmp4(tmp91[16]).conjureProjectNameError(trimmed);
                    const obj3 = tmp4(tmp91[16]);
                  }
                  if (null != result) {
                    collapsedCategories(result);
                    c4 = 3;
                    return { value: "project", done: true };
                  } else {
                    const obj6 = {};
                    const merged = Object.assign(changes);
                    if (closure_27) {
                      obj6.name = trimmed;
                    }
                    let tmp46 = closure_28;
                    if (closure_28) {
                      obj6.flags = flags;
                    }
                    let tmp48 = closure_29;
                    if (closure_29) {
                      const items = [];
                      HermesBuiltin.arraySpread(first1, 0);
                      obj6.collaborator_role_ids = items.sort();
                    }
                    let tmp52 = null == tmp99.guild_id;
                    if (tmp52) {
                      tmp52 = null != guild_id;
                    }
                    if (tmp52) {
                      if (!tmp48) {
                        if (tmp46) {
                          tmp46 = isGuildCollaboration;
                        }
                        tmp48 = tmp46;
                      }
                      tmp52 = tmp48;
                    }
                    if (tmp52) {
                      obj6.guild_id = guild_id;
                    }
                    closure_17(true);
                    dependencyMap(null);
                    __initData3(null);
                    c3 = 2;
                    if (changed) {
                      guild_id = 3;
                      c4 = 1;
                      const obj7 = { value: tmp4(tmp91[17]).updateProjectSettings(tmp4, obj6), done: false };
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
          closure_128_17(false);
          throw tmp91;
        } else if (2 === tmp8) {
          c3 = 1;
          const intl = tmp4(tmp91[14]).intl;
          closure_128_20(intl.string(guild_id(tmp91[15])["9JPr8h"]));
          c3 = 0;
          closure_128_17(false);
          c4 = 3;
          return { value: "project", done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_17(false);
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_128_9(closure_128_25);
          const obj = { flags: closure_128_12, roleIds: null };
          const items1 = [];
          HermesBuiltin.arraySpread(closure_128_14, 0);
          obj.roleIds = items1;
          closure_128_10(obj);
          closure_128_5();
        }
        if (closure_128_3()) {
          if (!closure_128_6()) {
            const intl3 = tmp4(tmp91[14]).intl;
            closure_128_21(intl3.string(guild_id(tmp91[15])["9JPr8h"]));
            const tmp74 = "experimental";
          }
        } else {
          const intl2 = tmp4(tmp91[14]).intl;
          closure_128_20(intl2.string(guild_id(tmp91[15]).XzkNBw));
        }
        c3 = 0;
        closure_128_17(false);
        c4 = 3;
      } catch (tmp91) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp91;
        } else if (tmp2 === tmp93) {
          guild_id = tmp2;
        } else {
          guild_id = tmp;
        }
      }
    }
  }), items9);
  if (changed2) {
    changed2 = "" !== trimmed;
  }
  obj6.canSave = changed2;
  obj6.handleIconChange = callback;
  obj6.handleNameChange = callback2;
  obj6.handleDescriptionChange = callback1;
  obj6.handleFlagChange = callback3;
  obj6.handleLiveReloadChange = callback4;
  obj6.handleRoleSelectionChange = callback6;
  obj6.ensureAppInGuild = callback5;
  obj6.handleSmartContextChange = callback7;
  obj6.handleRequireHostApprovalChange = callback8;
  obj6.submit = callback9;
  return obj6;
};