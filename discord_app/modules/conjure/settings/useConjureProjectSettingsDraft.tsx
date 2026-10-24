// discord_app/modules/conjure/settings/useConjureProjectSettingsDraft.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3830 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/useConjureProjectSettingsDraft.tsx");

export default function useConjureProjectSettingsDraft(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  let items = [save2];
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
  const obj4 = require("ConjureHostApproval");
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
  const tmp8Result7 = changes(
    commit.useState(() => {
      const items = [...prop];
      return items;
    }),
    2,
  );
  const first1 = tmp8Result7[0];
  closure_15 = tmp8Result7[1];
  const tmp8Result8 = changes(commit.useState(false), 2);
  const first2 = tmp8Result8[0];
  closure_17 = tmp8Result8[1];
  const tmp13 = changes(commit.useState(tmp10), 2);
  [tmp21, closure_18] = changes(commit.useState(null), 2);
  const tmp8Result9 = changes(commit.useState(null), 2);
  [tmp23, closure_19] = changes(commit.useState(null), 2);
  const tmp8Result10 = changes(commit.useState(null), 2);
  [tmp25, closure_20] = changes(commit.useState(null), 2);
  const tmp8Result11 = changes(commit.useState(null), 2);
  [tmp27, closure_21] = changes(commit.useState(null), 2);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    result = tmp(tmp2[9]).projectSupportsVisibility(stateFromStores);
    const tmpResult = tmp(tmp2[9]);
  }
  let tmp30 = null != stateFromStores;
  if (tmp30) {
    tmp30 = "user" !== stateFromStores.install_scope;
  }
  let result1 = tmp30;
  if (tmp30) {
    result1 = null != arg1;
  }
  if (result1) {
    result1 = tmp(tmp2[9]).projectSupportsCollaboratorRoles(stateFromStores);
    const tmpResult4 = tmp(tmp2[9]);
  }
  const tmp8Result12 = changes(commit.useState(null), 2);
  const conjureProjectAccessSettings = require("ConjureUtils").getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let tmp33 = null != stateFromStores;
  if (tmp33) {
    tmp33 = trimmed !== tmp10;
  }
  closure_24 = tmp33;
  let tmp34 = result;
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
    tmp34 = flags !== num2;
  }
  closure_25 = tmp34;
  let tmp36 = result1;
  if (result1) {
    let roleIds;
    if (tmp12 != null) {
      roleIds = tmp12.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp36 = !tmp(tmp2[11]).haveSameRoleIds(first1, roleIds);
    const tmpResult6 = tmp(tmp2[11]);
  }
  closure_26 = tmp36;
  let changed = tmp33;
  if (!tmp33) {
    changed = tmp34;
  }
  if (!changed) {
    changed = tmp36;
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
  const items5 = [setChecked2];
  const callback5 = obj5.useCallback((arg0) => {
    if (arg0.length > ConjureProjectTypes.MAX_PROJECT_COLLABORATOR_ROLES) {
      const intl = util.intl;
      const obj = { max: ConjureProjectTypes.MAX_PROJECT_COLLABORATOR_ROLES };
      closure_1_19(intl.formatToPlainString(_modDef3830["dH7+/Z"], obj));
    } else {
      closure_15(arg0);
      closure_1_19(null);
      closure_1_20(null);
    }
  }, []);
  const items6 = [setChecked3];
  const callback6 = obj5.useCallback((arg0) => {
    setChecked2(arg0);
    closure_1_21(null);
  }, items5);
  const callback7 = obj5.useCallback((arg0) => {
    setChecked3(arg0);
    closure_1_21(null);
  }, items6);
  const items7 = [
    commit,
    flags,
    tmp34,
    arg1,
    changed2,
    changes,
    isGuildCollaboration,
    tmp33,
    stateFromStores,
    arg0,
    changed,
    tmp36,
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
    nameError: tmp21,
    nameChanged: tmp33,
    isPublic: conjureProjectAccessSettings.isPublic,
    isGuildCollaboration,
    selectedRoleIds: first1,
    supportsVisibility: result,
    supportsCollaboration: tmp30,
    supportsCollaboratorRoles: result1,
    saving: first2,
    selectionError: tmp23,
    saveError: tmp25,
    experimentalError: tmp27,
    canSave: null,
    handleIconChange: null,
    handleNameChange: null,
    handleDescriptionChange: null,
    handleFlagChange: null,
    handleLiveReloadChange: null,
    handleRoleSelectionChange: null,
    handleSmartContextChange: null,
    handleRequireHostApprovalChange: null,
    submit: null,
  };
  const callback8 = obj5.useCallback(
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
          return { value: "IconComponent", done: null };
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
                    if (closure_24) {
                      result = tmp4(tmp91[14]).conjureProjectNameError(trimmed);
                      const obj3 = tmp4(tmp91[14]);
                    }
                    if (null != result) {
                      collapsedCategories(result);
                      c4 = 3;
                      return { value: "project", done: true };
                    } else {
                      const obj6 = {};
                      const merged = Object.assign(changes);
                      if (closure_24) {
                        obj6.name = trimmed;
                      }
                      let tmp46 = closure_25;
                      if (closure_25) {
                        obj6.flags = flags;
                      }
                      let tmp48 = closure_26;
                      if (closure_26) {
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
                      closure_2_20(null);
                      guild(null);
                      c3 = 2;
                      if (changed) {
                        guild_id = 3;
                        c4 = 1;
                        const obj7 = { value: tmp4(tmp91[15]).updateProjectSettings(tmp4, obj6), done: false };
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
            const intl = tmp4(tmp91[12]).intl;
            closure_128_20(intl.string(guild_id(tmp91[13])["9JPr8h"]));
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
            closure_128_9(closure_128_22);
            const obj = { flags: closure_128_12, roleIds: null };
            const items1 = [];
            HermesBuiltin.arraySpread(closure_128_14, 0);
            obj.roleIds = items1;
            closure_128_10(obj);
            closure_128_5();
          }
          if (closure_128_3()) {
            if (!closure_128_6()) {
              const intl3 = tmp4(tmp91[12]).intl;
              closure_128_21(intl3.string(guild_id(tmp91[13])["9JPr8h"]));
              const tmp74 = "experimental";
            }
          } else {
            const intl2 = tmp4(tmp91[12]).intl;
            closure_128_20(intl2.string(guild_id(tmp91[13]).XzkNBw));
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
    }),
    items7,
  );
  if (changed2) {
    changed2 = "" !== trimmed;
  }
  obj6.canSave = changed2;
  obj6.handleIconChange = callback;
  obj6.handleNameChange = callback2;
  obj6.handleDescriptionChange = callback1;
  obj6.handleFlagChange = callback3;
  obj6.handleLiveReloadChange = callback4;
  obj6.handleRoleSelectionChange = callback5;
  obj6.handleSmartContextChange = callback6;
  obj6.handleRequireHostApprovalChange = callback7;
  obj6.submit = callback8;
  return obj6;
}
