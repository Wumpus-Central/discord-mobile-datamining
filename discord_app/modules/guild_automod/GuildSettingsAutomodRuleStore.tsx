// === Module 17931: GuildSettingsAutomodRuleStore ===

// Module 17931 (GuildSettingsAutomodRuleStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import _mod4379 from "module_4379" /* 4379 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const AbortCodes = fn(1074).AbortCodes;
let closure_5 = Object.freeze({ editingRule: null, hasChanges: false, isLoading: false, errorMessage: null });
const identity = fn(1243);
let closure_6 = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  let obj = {
    editingRule: null,
    hasChanges: false,
    setEditingRule(id) {
      const editingRule = obj2().editingRule;
      const hasChanges = null != id && null != editingRule && id.id === editingRule.id;
      const cloneDeepResult = closure_1(12).cloneDeep(id);
      obj2 = cloneDeepResult;
      if (null != cloneDeepResult) {
        obj2 = {};
        const merged = Object.assign(cloneDeepResult);
        const actions = cloneDeepResult.actions;
        obj2.actions = actions.filter(hasChanges(1370).isNotNullish);
      }
      const obj = closure_1(12);
      hasChanges(1248).batchUpdates(() => hasChanges({ editingRule: obj2, hasChanges, errorMessage: null }));
      const obj3 = hasChanges(1248);
    },
    createNewEditingRule(guildId, triggerType, arg2) {
      let obj = arg2;
      const obj2 = {};
      const merged = Object.assign(obj2(17932).createDefaultRule(guildId, triggerType));
      if (arg2 == null) {
        obj = {};
      }
      const merged1 = Object.assign(obj);
      const obj3 = obj2(17932);
      obj2(1248).batchUpdates(() => obj2({ editingRule: obj2, hasChanges: false }));
      return obj2;
    },
    isLoading: false,
    errorMessage: null,
    cancelEditingRule() {
      ReactBatchUpdates.batchUpdates(() => {
        const merged = Object.assign(closure_2_5);
        return closure_1_0({});
      });
    },
    saveRule: null,
    saveEditingRule: null
  };
  dependencyMap = asyncGeneratorStep(async (arg0, arg1) => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_6 = tmp4;
            closure_5 = tmp6;
            closure_133_0 = undefined;
            closure_133_1 = undefined;
            if (null == closure_0) {
              closure_0(1248).batchUpdates(() => {
                const merged = Object.assign(closure_5);
                return closure_1_0({});
              });
              c10 = 3;
              return { value: null, done: true };
            } else {
              c8 = 1;
              if (obj27.isRuleKeywordFilter(closure_0)) {
                const obj8 = closure_0(17935);
                const keywordFilter = closure_0.triggerMetadata.keywordFilter;
                dependencyMap = keywordFilter;
                if (keywordFilter == null) {
                  dependencyMap = [];
                }
                closure_0.triggerMetadata.keywordFilter = obj8.sortKeywords(closure_0(17935).dedupeKeywords(dependencyMap));
                const obj9 = closure_0(17935);
                const obj10 = closure_0(17935);
                const allowList = closure_0.triggerMetadata.allowList;
                closure_3 = allowList;
                if (allowList == null) {
                  closure_3 = [];
                }
                closure_0.triggerMetadata.allowList = obj10.sortKeywords(closure_0(17935).dedupeKeywords(closure_3));
                const obj11 = closure_0(17935);
              }
              obj27 = closure_0(17932);
              if (obj12.isRuleDefaultKeywordListFilter(closure_0)) {
                const obj13 = closure_0(17935);
                const allowList2 = closure_0.triggerMetadata.allowList;
                closure_4 = allowList2;
                if (allowList2 == null) {
                  closure_4 = [];
                }
                closure_0.triggerMetadata.allowList = obj13.sortKeywords(closure_0(17935).dedupeKeywords(closure_4));
                const obj14 = closure_0(17935);
              }
              obj12 = closure_0(17932);
              const result = closure_0(17933).validateRuleByTriggerConfigOrThrow(closure_0, tmp98);
              const obj15 = closure_0(17933);
              const result1 = closure_0(17932).validateRuleBeforeSaveOrThrow(closure_0);
              c8 = 2;
              const obj16 = closure_0(17932);
              closure_0(1248).batchUpdates(() => {
                closure_1_0({ isLoading: true });
              });
              closure_133_0 = null;
              const obj17 = closure_0(1248);
              if (obj18.isBackendPersistedRule(closure_0)) {
                if (!obj19.isDefaultRuleId(closure_0.id)) {
                  c9 = 4;
                  c10 = 1;
                  const obj21 = { value: closure_0(12120).updateAutomodRule(closure_0), done: false };
                  return obj21;
                }
                obj19 = closure_0(17930);
              }
              obj18 = closure_0(17932);
              c9 = 3;
              c10 = 1;
              const obj23 = { value: closure_0(12120).createAutomodRule(closure_0), done: false };
              return obj23;
            }
          }
        } else if (1 === tmp9) {
          c8 = 0;
          closure_133_2 = closure_7;
          if (closure_133_2 instanceof closure_0(8196).InvalidKeywordError) {
            closure_0(1248).batchUpdates(() => {
              const obj = { errorMessage: null, isLoading: false };
              const intl = closure_0(message[2]).intl;
              obj.errorMessage = intl.string(closure_0(message[2]).t["4Dxaus"]);
              closure_1_0(obj);
            });
            c10 = 3;
            const obj7 = closure_0(1248);
          } else {
            const tmp41 = closure_133_2 instanceof closure_0(8196).InvalidRegexPatternError;
            if (!tmp41) {
              obj6.batchUpdates(() => {
                closure_0({ errorMessage: message.message, isLoading: false });
              });
            }
            obj6 = closure_0(1248);
          }
          tmp46(() => {
            const obj = { errorMessage: null, isLoading: false };
            const intl = closure_0(message[2]).intl;
            obj.errorMessage = intl.string(closure_0(message[2]).t.hDPEu1);
            closure_1_0(obj);
          });
        } else if (2 === tmp9) {
          c8 = 0;
          closure_133_3 = closure_7;
          const aPIError = new closure_0(4656).APIError(closure_133_3);
          closure_133_1 = aPIError;
          closure_0(1248).batchUpdates(() => {
            if (code.code === constants.INVALID_FORM_BODY) {
              const errors = code.errors;
              let regex_patterns;
              if (errors != null) {
                const trigger_metadata = errors.trigger_metadata;
                if (trigger_metadata != null) {
                  regex_patterns = trigger_metadata.regex_patterns;
                }
              }
              if (null != regex_patterns) {
                const intl = closure_0(message[2]).intl;
                let stringResult = intl.string(closure_0(message[2]).t.hDPEu1);
              }
              const obj2 = { isLoading: false, errorMessage: stringResult };
              tmp(obj2);
            }
            stringResult = code.getAnyErrorMessage();
          });
          c10 = 3;
          return { value: null, done: true };
        } else {
          if (3 === tmp9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              const obj25 = { value, done: true };
              return obj25;
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            let obj = { value, done: true };
            return obj;
          }
          closure_133_0 = value;
          closure_0(1248).batchUpdates(() => {
            const merged = Object.assign(closure_5);
            return closure_1_0({});
          });
          c8 = 0;
          c10 = 3;
          const obj26 = { value: closure_133_0, done: true };
          return obj26;
        }
      } catch (tmp89) {
        closure_7 = tmp89;
        if (tmp5 === c8) {
          c10 = tmp3;
          throw tmp89;
        } else if (tmp2 === tmp91) {
          c9 = tmp2;
        } else {
          c9 = tmp;
        }
      }
    }
  });
  obj.saveRule = function() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj.saveEditingRule = function saveEditingRule(memo) {
    const obj = closure_1();
    return obj.saveRule(obj.editingRule, memo);
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/GuildSettingsAutomodRuleStore.tsx");

export const useAutomodEditingRuleActions = function useAutomodEditingRuleActions() {
  return closure_6((hasChanges) => ({ hasChanges: hasChanges.hasChanges, editingRule: hasChanges.editingRule, isLoading: hasChanges.isLoading, errorMessage: hasChanges.errorMessage, saveRule: hasChanges.saveRule, saveEditingRule: hasChanges.saveEditingRule, cancelEditingRule: hasChanges.cancelEditingRule }), _mod4379.shallow);
};
export const useAutomodEditingRuleState = function useAutomodEditingRuleState() {
  let tmp = id;
  if (id === undefined) {
    tmp = null;
  }
  const obj = closure_6((hasChanges) => ({ hasChanges: hasChanges.hasChanges, editingRule: hasChanges.editingRule, setEditingRule: hasChanges.setEditingRule, createNewEditingRule: hasChanges.createNewEditingRule }), _mod4379.shallow);
  if (null != tmp) {
    obj.setEditingRule(tmp);
  }
  return obj;
};