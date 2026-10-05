// discord_app/modules/guild_automod/GuildSettingsAutomodRuleStore.tsx
import Constants from "../../Constants.tsx";
import react_native from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _slicedToArray from "../../../_runtime/metro/04492__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import 01254__ from "../../../_runtime/metro/01254__.js";
import size from "../../../_runtime/metro/00002__.js";

let c10, c9, closure_7;

const AbortCodes = Constants.AbortCodes;
let closure_5 = Object.freeze({ editingRule: null, hasChanges: false, isLoading: false, errorMessage: null });
let closure_6 = module_1254.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    editingRule: null,
    hasChanges: false,
    setEditingRule(guildId) {
      let actions;
      let obj2;
      const editingRule = obj2().editingRule;
      const hasChanges = null != guildId && null != editingRule && guildId.id === editingRule.id;
      let obj = closure_1(closure_2[4]);
      const cloneDeepResult = obj.cloneDeep(guildId);
      obj2 = cloneDeepResult;
      if (null != cloneDeepResult) {
        obj2 = { actions: actions.filter(hasChanges(closure_2[5]).isNotNullish) };
        const merged = Object.assign(cloneDeepResult);
        actions = cloneDeepResult.actions;
      }
      const obj3 = hasChanges(closure_2[6]);
      obj3.batchUpdates(() => {
        const obj = { editingRule: obj2, hasChanges, errorMessage: null };
        return hasChanges(obj);
      });
    },
    createNewEditingRule(guildId, triggerType, arg2) {
      let obj = arg2;
      const obj2 = {};
      const obj3 = obj2(closure_2[7]);
      const merged = Object.assign(obj3.createDefaultRule(guildId, triggerType));
      const tmp = obj2;
      if (arg2 == null) {
        obj = {};
      }
      const merged1 = Object.assign(obj);
      const tmpResult = tmp(closure_2[6]);
      tmpResult.batchUpdates(() => {
        const obj = { editingRule: obj2, hasChanges: false };
        return obj2(obj);
      });
      return obj2;
    },
    isLoading: false,
    errorMessage: null,
    cancelEditingRule() {
      let obj = react_native;
      obj.batchUpdates(() => {
        const obj = {};
        const merged = Object.assign(closure_2_5);
        return closure_1_0(obj);
      });
    },
    saveRule: function() {
      return closure_2(...arguments);
    },
    saveEditingRule(HeaderActionButton) {
      const obj = closure_1();
      return obj.saveRule(obj.editingRule, HeaderActionButton);
    }
  };
  let closure_2 = _asyncToGenerator(async function(arg0, arg1) {
    let message;
    let obj13;
    closure_0 = arg0;
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c8;
      try {
        let closure_3;
        let result2;
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
            closure_6 = tmp;
            closure_0 = undefined;
            let aPIError;
            if (null == closure_0) {
              const obj17 = closure_0(message[6]);
              obj17.batchUpdates(() => {
                const obj = {};
                const merged = Object.assign(result2);
                return closure_1_0(obj);
              });
              c10 = 3;
              return { value: null, done: true };
            } else {
              c8 = 1;
              const obj20 = closure_0(message[7]);
              if (obj20.isRuleKeywordFilter(closure_0)) {
                const triggerMetadata = tmp95.triggerMetadata;
                const sortKeywords = closure_0(message[8]).sortKeywords;
                const tmp47 = closure_0(message[8]);
                const keywordFilter = tmp95.triggerMetadata.keywordFilter;
                const tmp50 = closure_0(message[8]);
                message = keywordFilter;
                const dedupeKeywords = tmp50.dedupeKeywords;
                if (keywordFilter == null) {
                  message = [];
                }
                triggerMetadata.keywordFilter = sortKeywords(dedupeKeywords(message));
                const triggerMetadata2 = tmp95.triggerMetadata;
                const sortKeywords2 = closure_0(message[8]).sortKeywords;
                const tmp54 = closure_0(message[8]);
                const allowList = tmp95.triggerMetadata.allowList;
                closure_3 = allowList;
                const dedupeKeywords2 = closure_0(message[8]).dedupeKeywords;
                const tmp57 = closure_0(message[8]);
                if (allowList == null) {
                  closure_3 = [];
                }
                triggerMetadata2.allowList = sortKeywords2(dedupeKeywords2(closure_3));
              }
              const obj7 = closure_0(message[7]);
              if (obj7.isRuleDefaultKeywordListFilter(closure_0)) {
                const triggerMetadata3 = tmp95.triggerMetadata;
                const sortKeywords3 = closure_0(message[8]).sortKeywords;
                const tmp63 = closure_0(message[8]);
                const allowList2 = tmp95.triggerMetadata.allowList;
                let closure_4 = allowList2;
                const dedupeKeywords3 = closure_0(message[8]).dedupeKeywords;
                const tmp66 = closure_0(message[8]);
                if (allowList2 == null) {
                  closure_4 = [];
                }
                triggerMetadata3.allowList = sortKeywords3(dedupeKeywords3(closure_4));
              }
              const obj8 = closure_0(message[9]);
              const result = obj8.validateRuleByTriggerConfigOrThrow(tmp95, tmp96);
              const obj9 = closure_0(message[7]);
              const result1 = obj9.validateRuleBeforeSaveOrThrow(tmp95);
              c8 = 2;
              const obj10 = closure_0(message[6]);
              obj10.batchUpdates(() => {
                closure_1_0({ isLoading: true });
              });
              closure_0 = null;
              const obj11 = closure_0(message[7]);
              result2 = obj11.isBackendPersistedRule(tmp95);
              if (result2) {
                const obj12 = closure_0(message[11]);
                result2 = obj12.isDefaultRuleId(tmp95.id);
                if (!result2) {
                  c9 = 4;
                  c10 = 1;
                  const obj14 = { value: obj13.updateAutomodRule(closure_0), done: false };
                  obj13 = closure_0(message[12]);
                  return obj14;
                }
              }
              const obj15 = closure_0(message[12]);
              result2 = obj15.createAutomodRule(tmp95);
              c9 = 3;
              c10 = 1;
              const obj16 = { value: result2, done: false };
              return obj16;
            }
          }
        } else if (1 === c9) {
          c8 = 0;
          message = closure_7;
          result2 = closure_6;
          if (message instanceof closure_0(message[10]).InvalidKeywordError) {
            const obj6 = closure_0(message[6]);
            obj6.batchUpdates(() => {
              let intl;
              const obj = { errorMessage: intl.string(closure_0(message[2]).t["4Dxaus"]), isLoading: false };
              intl = closure_0(message[2]).intl;
              closure_1_0(obj);
            });
          } else {
            const tmp34 = message instanceof closure_0(message[10]).InvalidRegexPatternError;
            const batchUpdates = closure_0(message[6]).batchUpdates;
            const tmp39 = closure_0(message[6]);
            if (tmp34) {
              batchUpdates(() => {
                let intl;
                const obj = { errorMessage: intl.string(closure_0(message[2]).t.hDPEu1), isLoading: false };
                intl = closure_0(message[2]).intl;
                closure_1_0(obj);
              });
            } else {
              batchUpdates(() => {
                const obj = { errorMessage: message.message, isLoading: false };
                closure_0(obj);
              });
            }
          }
          c10 = 3;
          return { value: null, done: true };
        } else if (2 === c9) {
          c8 = 0;
          closure_3 = closure_7;
          const self = this;
          const self2 = this;
          aPIError = new closure_0(message[13]).APIError(closure_3);
          const obj5 = closure_0(message[6]);
          obj5.batchUpdates(() => {
            if (code.code === constants.INVALID_FORM_BODY) {
              let stringResult;
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
                stringResult = intl.string(closure_0(message[2]).t.hDPEu1);
              }
              const obj2 = { isLoading: false, errorMessage: stringResult };
              tmp(obj2);
            }
            stringResult = code.getAnyErrorMessage();
          });
          c10 = 3;
          return { value: null, done: true };
        } else {
          if (3 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              const obj18 = { value, done: true };
              return obj18;
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
          closure_0 = value;
          let obj2 = closure_0(message[6]);
          obj2.batchUpdates(() => {
            const obj = {};
            const merged = Object.assign(result2);
            return closure_1_0(obj);
          });
          result2 = closure_0;
          c8 = 0;
          c10 = 3;
          const obj19 = { value: result2, done: true };
          return obj19;
        }
      } catch (tmp88) {
        closure_7 = tmp88;
        if (0 === c8) {
          c10 = 3;
          throw tmp88;
        } else if (1 === tmp90) {
          c9 = 1;
        } else {
          c9 = 2;
        }
      }
    }
  });
  return obj;
});
let result = size.fileFinishedImporting("modules/guild_automod/GuildSettingsAutomodRuleStore.tsx");

export const useAutomodEditingRuleActions = function useAutomodEditingRuleActions() {
  return closure_6((hasChanges) => ({ hasChanges: hasChanges.hasChanges, editingRule: hasChanges.editingRule, isLoading: hasChanges.isLoading, errorMessage: hasChanges.errorMessage, saveRule: hasChanges.saveRule, saveEditingRule: hasChanges.saveEditingRule, cancelEditingRule: hasChanges.cancelEditingRule }), _slicedToArray.shallow);
};
export const useAutomodEditingRuleState = function useAutomodEditingRuleState() {
  let tmp = guildId;
  if (guildId === undefined) {
    tmp = null;
  }
  const obj = closure_6((hasChanges) => ({ hasChanges: hasChanges.hasChanges, editingRule: hasChanges.editingRule, setEditingRule: hasChanges.setEditingRule, createNewEditingRule: hasChanges.createNewEditingRule }), _slicedToArray.shallow);
  if (null != tmp) {
    obj.setEditingRule(tmp);
  }
  return obj;
};