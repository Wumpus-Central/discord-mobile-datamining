// discord_app/modules/conjure/settings/useConjureProjectSettingsDraft.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/useConjureProjectSettingsDraft.tsx");

export default function useConjureProjectSettingsDraft(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  items = [save2];
  let items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(closure_0),
    items1,
  );
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
  [tmp12, tmp13] = changes(commit.useState(null), 2);
  closure_10 = tmp13;
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
  closure_13 = tmp17;
  const tmp8Result10 = changes(
    commit.useState(() => {
      items = [...prop];
      return items;
    }),
    2,
  );
  const first1 = tmp8Result10[0];
  closure_15 = tmp20;
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  let tmp22 = null;
  if ("guild" === install_scope) {
    let guild_id = stateFromStores.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    tmp22 = guild_id;
  }
  const tmp8Result11 = changes(commit.useState(tmp22), 2);
  if (tmp22 !== tmp8Result11[0]) {
    tmp8Result11[1](tmp22);
    let num2;
    if (stateFromStores != null) {
      num2 = stateFromStores.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp17(num2);
    const items2 = [];
    HermesBuiltin.arraySpread(prop, 0);
    tmp20(items2);
    tmp13(null);
  }
  let uses_preview_app;
  if (stateFromStores != null) {
    uses_preview_app = stateFromStores.uses_preview_app;
  }
  const tmp14 = changes(commit.useState(tmp10), 2);
  [tmp34, tmp35] = changes(commit.useState(null), 2);
  if (tmp36) {
    tmp35(null);
  }
  const tmp8Result13 = changes(commit.useState(false), 2);
  const first2 = tmp8Result13[0];
  closure_18 = tmp8Result13[1];
  tmp36 = null != tmp34 && tmp34 === uses_preview_app;
  const tmp8Result12 = changes(commit.useState(null), 2);
  [tmp41, closure_19] = changes(commit.useState(null), 2);
  const tmp8Result14 = changes(commit.useState(null), 2);
  [tmp43, closure_20] = changes(commit.useState(null), 2);
  const tmp8Result15 = changes(commit.useState(null), 2);
  [tmp45, closure_21] = changes(commit.useState(null), 2);
  const tmp8Result16 = changes(commit.useState(null), 2);
  [tmp47, closure_22] = changes(commit.useState(null), 2);
  const tmp8Result17 = changes(commit.useState(null), 2);
  [tmp49, closure_23] = changes(commit.useState(false), 2);
  closure_24 = obj5.useRef(null);
  closure_25 = obj5.useRef(false);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    result = tmp(tmp2[9]).projectSupportsVisibility(stateFromStores);
    const tmpResult = tmp(tmp2[9]);
  }
  let result1 = tmp52;
  if (null != stateFromStores && "guild" === stateFromStores.install_scope) {
    result1 = null != arg1;
  }
  if (result1) {
    result1 = tmp(tmp2[9]).projectSupportsCollaboratorRoles(stateFromStores);
    const tmpResult4 = tmp(tmp2[9]);
  }
  const tmp8Result18 = changes(commit.useState(false), 2);
  const conjureProjectAccessSettings = require("ConjureUtils").getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let tmp55 = null != stateFromStores;
  if (tmp55) {
    tmp55 = trimmed !== tmp10;
  }
  closure_28 = tmp55;
  let tmp56 = result;
  if (result) {
    let num4;
    if (tmp12 != null) {
      num4 = tmp12.flags;
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
    tmp56 = flags !== num4;
  }
  closure_29 = tmp56;
  let tmp58 = result1;
  if (result1) {
    let roleIds;
    if (tmp12 != null) {
      roleIds = tmp12.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp58 = !tmp(tmp2[11]).haveSameRoleIds(first1, roleIds);
    const tmpResult6 = tmp(tmp2[11]);
  }
  closure_30 = tmp58;
  let flag = tmp34;
  if (tmp34 == null) {
    flag = uses_preview_app;
  }
  if (flag == null) {
    flag = false;
  }
  let tmp61 = tmp60;
  if (null != uses_preview_app) {
    tmp61 = null != tmp34;
  }
  closure_32 = tmp61;
  let changed = tmp55;
  if (!tmp55) {
    changed = tmp56;
  }
  if (!changed) {
    changed = tmp58;
  }
  if (!changed) {
    changed = tmp61;
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
  const items3 = [setIcon];
  const items4 = [setDescription];
  const callback = obj5.useCallback((channelId) => {
    setIcon(channelId);
    closure_1_21(null);
  }, items3);
  const callback1 = obj5.useCallback((description) => {
    setDescription(description);
    closure_1_21(null);
  }, items4);
  const callback2 = obj5.useCallback((arg0) => {
    closure_1_11(arg0);
    closure_1_19(null);
    closure_1_21(null);
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
    closure_1_20(null);
    closure_1_21(null);
  }, []);
  const items5 = [setChecked];
  const callback4 = obj5.useCallback((arg0) => {
    tmp35(arg0);
    closure_1_21(null);
  }, []);
  const callback5 = obj5.useCallback((arg0) => {
    setChecked(arg0);
    closure_1_21(null);
  }, items5);
  const items6 = [arg1, stateFromStores];
  const callback6 = obj5.useCallback(
    save(function* () {
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
                        dependencyMap2(true);
                        c3 = 1;
                        c4 = 2;
                        c5 = 1;
                        const obj5 = {
                          value: closure_0(tmp62[12]).fetchConjureAppInGuild(stateFromStores, closure_1),
                          done: false,
                        };
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
            closure_129_25.current = false;
            closure_129_23(false);
            throw tmp62;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_25.current = false;
              closure_129_23(false);
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_128_0 = value;
              if (false !== closure_128_0) {
                if (true === closure_128_0) {
                  closure_129_24.current = closure_129_1;
                }
                c3 = 0;
                closure_129_25.current = false;
                closure_129_23(false);
                c5 = 3;
                return { value: true, done: true };
              } else {
                c4 = 3;
                c5 = 1;
                const obj8 = {
                  value: closure_0(tmp62[13]).requestConjureInstallConsent(closure_129_2.id, closure_129_1),
                  done: false,
                };
                return obj8;
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_25.current = false;
              closure_129_23(false);
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              c4 = 4;
              c5 = 1;
              const obj11 = {
                value: closure_0(tmp62[12]).fetchConjureAppInGuild(closure_129_2, closure_129_1),
                done: false,
              };
              return obj11;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_25.current = false;
            closure_129_23(false);
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_128_1 = tmp70;
            if (closure_128_1) {
              closure_129_24.current = closure_129_1;
            }
            c3 = 0;
            closure_129_25.current = false;
            closure_129_23(false);
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
    }),
    items6,
  );
  _require = save(function* (arg0) {
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
              closure_1_20(intl.formatToPlainString(tmp16(stateFromStores[15])["dH7+/Z"], obj4));
            } else {
              function apply() {
                closure_2_15(closure_1_0);
                closure_2_20(null);
                closure_2_21(null);
              }
              closure_129_1 = apply;
              if (closure_0.some((item) => !closure_1_14.includes(item))) {
                c3 = 1;
                c2 = 2;
                c4 = 1;
                const obj5 = { value: callback6(), done: false };
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
  const items7 = [callback6, first1];
  const items8 = [setChecked2];
  const callback7 = obj5.useCallback(function () {
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
  const callback8 = obj5.useCallback((arg0) => {
    setChecked2(arg0);
    closure_1_22(null);
  }, items8);
  const callback9 = obj5.useCallback((arg0) => {
    setChecked3(arg0);
    closure_1_22(null);
  }, items9);
  const items10 = [
    commit,
    flags,
    tmp56,
    arg1,
    changed2,
    changes,
    isGuildCollaboration,
    tmp55,
    tmp61,
    flag,
    stateFromStores,
    arg0,
    changed,
    tmp58,
    save3,
    save,
    save2,
    first2,
    first1,
    trimmed,
  ];
  let obj6 = {
    iconURL: tmp5.iconURL,
    description: tmp5.description,
    liveReload: conjureLiveReloadSetting,
    smartContext: conjureSmartContextSetting,
    hostApproval: conjureRequireHostApprovalSetting,
    name: str2,
    nameError: tmp41,
    nameChanged: tmp55,
    isPublic: conjureProjectAccessSettings.isPublic,
    isGuildCollaboration,
    usesPreviewApp: flag,
    canChangePreviewApp: null != uses_preview_app,
    selectedRoleIds: first1,
    supportsVisibility: result,
    supportsCollaboration: null != stateFromStores && "guild" === stateFromStores.install_scope,
    supportsCollaboratorRoles: result1,
    checkingAppInGuild: tmp49,
    saving: first2,
    selectionError: tmp43,
    saveError: tmp45,
    experimentalError: tmp47,
    canSave: null,
    handleIconChange: null,
    handleNameChange: null,
    handleDescriptionChange: null,
    handleFlagChange: null,
    handleUsesPreviewAppChange: null,
    handleLiveReloadChange: null,
    handleRoleSelectionChange: null,
    ensureAppInGuild: null,
    handleSmartContextChange: null,
    handleRequireHostApprovalChange: null,
    submit: null,
  };
  const callback10 = obj5.useCallback(
    save(function* () {
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
                    if (closure_28) {
                      result = tmp4(tmp93[16]).conjureProjectNameError(trimmed);
                      const obj3 = tmp4(tmp93[16]);
                    }
                    if (null != result) {
                      expandedHeight(result);
                      c4 = 3;
                      return { value: "project", done: true };
                    } else {
                      const obj6 = {};
                      const merged = Object.assign(changes);
                      if (closure_28) {
                        obj6.name = trimmed;
                      }
                      let tmp46 = closure_29;
                      if (closure_29) {
                        obj6.flags = flags;
                      }
                      let tmp48 = closure_30;
                      if (closure_30) {
                        items = [];
                        HermesBuiltin.arraySpread(first1, 0);
                        obj6.collaborator_role_ids = items.sort();
                      }
                      if (closure_32) {
                        obj6.uses_preview_app = flag;
                      }
                      let tmp54 = null == tmp101.guild_id;
                      if (tmp54) {
                        tmp54 = null != guild_id;
                      }
                      if (tmp54) {
                        if (!tmp48) {
                          if (tmp46) {
                            tmp46 = isGuildCollaboration;
                          }
                          tmp48 = tmp46;
                        }
                        tmp54 = tmp48;
                      }
                      if (tmp54) {
                        obj6.guild_id = guild_id;
                      }
                      closure_18(true);
                      guild(null);
                      closure_2_22(null);
                      c3 = 2;
                      if (changed) {
                        guild_id = 3;
                        c4 = 1;
                        const obj7 = { value: tmp4(tmp93[17]).updateProjectSettings(tmp4, obj6), done: false };
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
            closure_128_18(false);
            throw tmp93;
          } else if (2 === tmp8) {
            c3 = 1;
            const intl = tmp4(tmp93[14]).intl;
            closure_128_21(intl.string(guild_id(tmp93[15])["9JPr8h"]));
            c3 = 0;
            closure_128_18(false);
            c4 = 3;
            return { value: "project", done: true };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_18(false);
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_128_9(closure_128_26);
            const obj = { flags: closure_128_12, roleIds: null };
            const items1 = [];
            HermesBuiltin.arraySpread(closure_128_14, 0);
            obj.roleIds = items1;
            closure_128_10(obj);
            closure_128_5();
          }
          if (closure_128_3()) {
            if (!closure_128_6()) {
              const intl3 = tmp4(tmp93[14]).intl;
              closure_128_22(intl3.string(guild_id(tmp93[15])["9JPr8h"]));
              const tmp76 = "experimental";
            }
          } else {
            const intl2 = tmp4(tmp93[14]).intl;
            closure_128_21(intl2.string(guild_id(tmp93[15]).XzkNBw));
          }
          c3 = 0;
          closure_128_18(false);
          c4 = 3;
        } catch (tmp93) {
          if (tmp5 === c3) {
            c4 = tmp3;
            throw tmp93;
          } else if (tmp2 === tmp95) {
            guild_id = tmp2;
          } else {
            guild_id = tmp;
          }
        }
      }
    }),
    items10,
  );
  if (changed2) {
    changed2 = "" !== trimmed;
  }
  obj6.canSave = changed2;
  obj6.handleIconChange = callback;
  obj6.handleNameChange = callback2;
  obj6.handleDescriptionChange = callback1;
  obj6.handleFlagChange = callback3;
  obj6.handleUsesPreviewAppChange = callback4;
  obj6.handleLiveReloadChange = callback5;
  obj6.handleRoleSelectionChange = callback7;
  obj6.ensureAppInGuild = callback6;
  obj6.handleSmartContextChange = callback8;
  obj6.handleRequireHostApprovalChange = callback9;
  obj6.submit = callback10;
  return obj6;
}
