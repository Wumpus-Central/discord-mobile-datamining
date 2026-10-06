// === Module 6602: GuildOnboardingPromptsStore ===

// Module 6602 (GuildOnboardingPromptsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import GuildOnboardingStore2 from "GuildOnboardingStore" /* 6598 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6603 */;
import DefaultChannelUtils from "DefaultChannelUtils" /* 6604 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const GuildOnboardingStore = GuildOnboardingStore2;
let closure_8;

function handleUpdate(arg0) {
  let guildId;
  let mapped;
  let updates;
  ({ guildId, updates } = arg0);
  let prop = updates.onboardingPromptsSeen;
  if (prop == null) {
    let prop1;
    if (closure_8[guildId] != null) {
      prop1 = tmp2.onboardingPromptsSeen;
    }
    prop = prop1;
  }
  if (prop == null) {
    prop = {};
  }
  let prop2 = updates.onboardingResponsesSeen;
  if (prop2 == null) {
    let prop3;
    if (closure_8[guildId] != null) {
      prop3 = tmp5.onboardingResponsesSeen;
    }
    prop2 = prop3;
  }
  if (prop2 == null) {
    prop2 = {};
  }
  let prompts = updates.prompts;
  if (prompts == null) {
    let prompts1;
    if (closure_8[guildId] != null) {
      prompts1 = tmp8.prompts;
    }
    prompts = prompts1;
  }
  if (prompts == null) {
    prompts = [];
  }
  const obj = { prompts: mapped };
  mapped = prompts.map((options) => {
    const items = [];
    let num = 0;
    let flag = false;
    let flag2 = false;
    if (0 < options.options.length) {
      do {
        let tmp3 = options.options[num];
        let tmp4 = null == tmp2[tmp3.id];
        let flag3 = flag;
        if (tmp4) {
          flag3 = true;
        }
        let obj = { isUnseen: tmp4 };
        let push = items.push;
        let merged = Object.assign(tmp3);
        let arr = push(obj);
        num = num + 1;
        flag = flag3;
        flag2 = flag3;
      } while (num < options.options.length);
    }
    obj2 = { options: items, hasNewAnswers: flag2, isNew: null == prompts_seen[options.id] };
    const merged1 = Object.assign(options);
    return obj2;
  });
  const merged = Object.assign(closure_8[guildId]);
  const merged1 = Object.assign(updates);
  closure_8[guildId] = obj;
}
const GuildOnboardingStatus = GuildOnboardingStore2.GuildOnboardingStatus;
const GuildOnboardingMode = GuildOnboardingPromptsConstants.GuildOnboardingMode;
const metroImportAll = {};
const React4 = {};
const authStore = {};
let c11 = false;
let closure_12 = [];
let closure_13 = [];
let closure_14 = [];
let closure_15 = [];
const Store = get_initializedDefault.Store;
class GuildOnboardingPromptsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildOnboardingStore, ImpersonateStore);
  }
  getOnboardingPromptsForOnboarding(guildId) {
    let onboardingPrompts;
    if (closure_8[guildId] != null) {
      onboardingPrompts = tmp.onboardingPrompts;
    }
    if (onboardingPrompts == null) {
      onboardingPrompts = closure_12;
    }
    return onboardingPrompts;
  }
  getOnboardingPrompts(guildId) {
    let prompts;
    if (closure_8[guildId] != null) {
      prompts = tmp.prompts;
    }
    if (prompts == null) {
      prompts = closure_12;
    }
    return prompts;
  }
  getOnboardingResponses(id) {
    let fromResult;
    if (ImpersonateStore.isFullServerPreview(id)) {
      const _Array = Array;
      let onboardingResponses = ImpersonateStore.getOnboardingResponses(id);
      if (onboardingResponses == null) {
        onboardingResponses = closure_13;
      }
      fromResult = from(onboardingResponses);
    } else {
      fromResult = undefined;
      if (closure_8[id] != null) {
        fromResult = tmp2.responses;
      }
      if (fromResult == null) {
        fromResult = closure_13;
      }
    }
    return fromResult;
  }
  getSelectedOptions(guildId) {
    let closure_0;
    const onboardingResponses = this.getOnboardingResponses(guildId);
    const onboardingPrompts = this.getOnboardingPrompts(guildId);
    const mapped = onboardingPrompts.map((options) => options.options);
    const flatResult = mapped.flat();
    return flatResult.filter((id) => closure_0.includes(id.id));
  }
  getOnboardingResponsesForPrompt(guildId, id) {
    let closure_0 = id;
    if (null == closure_8[guildId]) {
      return closure_13;
    } else {
      let intersectionResult;
      const prompts = tmp.prompts;
      const found = prompts.find((id) => id.id === closure_0);
      if (null == found) {
        intersectionResult = closure_13;
      } else {
        const self = this;
        const options = found.options;
        const intersection = _modDef12.intersection;
        _modDef12;
        const mapped = options.map((id) => id.id);
        intersectionResult = intersection(mapped, this.getOnboardingResponses(guildId));
      }
      return intersectionResult;
    }
  }
  getEnabledOnboardingPrompts(item) {
    let tmp2;
    if (ImpersonateStore.isFullServerPreview(item)) {
      let prompts1;
      if (closure_8[item] != null) {
        prompts1 = tmp.prompts;
      }
      if (prompts1 == null) {
        prompts1 = closure_12;
      }
      tmp2 = prompts1;
    } else {
      if (null != closure_8[item]) {
        if (closure_8[item].enabled) {
          let prompts = tmp.prompts;
          if (prompts == null) {
            prompts = closure_12;
          }
          tmp2 = prompts;
        }
      }
      tmp2 = closure_12;
    }
    return tmp2;
  }
  getDefaultChannelIds(guildId) {
    let defaultChannelIds;
    if (closure_8[guildId] != null) {
      defaultChannelIds = tmp.defaultChannelIds;
    }
    if (defaultChannelIds == null) {
      defaultChannelIds = closure_14;
    }
    return defaultChannelIds;
  }
  getEnabled(id) {
    let flag;
    if (ImpersonateStore.isFullServerPreview(id)) {
      flag = null != tmp;
    } else {
      flag = undefined;
      if (closure_8[id] != null) {
        flag = tmp.enabled;
      }
      if (flag == null) {
        flag = false;
      }
    }
    return flag;
  }
  getOnboardingPrompt(promptId) {
    let closure_0 = promptId;
    const values = Object.values(closure_8);
    const mapped = values.map((prompts) => prompts.prompts);
    const flatResult = mapped.flat();
    return flatResult.find((id) => id.id === closure_0);
  }
  isLoading() {
    return c11;
  }
  shouldFetchPrompts(guildId) {
    let HOUR = arg1;
    if (arg1 === undefined) {
      HOUR = DurationsDefault.Millis.HOUR;
    }
    if (c11) {
      return false;
    } else {
      let tmp8 = null == tmp6;
      if (!tmp8) {
        const _Date = Date;
        tmp8 = Date.now() - tmp6 > HOUR;
      }
      return tmp8;
    }
  }
  getPendingResponseOptions(guildId) {
    return closure_9[guildId];
  }
  ackIdForGuild(item) {
    const enabledOnboardingPrompts = this.getEnabledOnboardingPrompts(item);
    let id = "0";
    item = enabledOnboardingPrompts.forEach((options) => {
      options = options.options;
      const item = options.forEach((id) => {
        const obj = SnowflakeUtilsDefault;
        if (obj.compare(id.id, id) > 0) {
          id = id.id;
        }
      });
      let obj = SnowflakeUtilsDefault;
      if (obj.compare(options.id, id) > 0) {
        id = options.id;
      }
    });
    return id;
  }
  lastFetchedAt(arg0) {
    return closure_10[arg0];
  }
  isAdvancedMode(guildId) {
    let tmp = null != guildId;
    if (tmp) {
      let mode;
      if (closure_8[guildId] != null) {
        mode = tmp3.mode;
      }
      tmp = mode === GuildOnboardingMode.ONBOARDING_ADVANCED;
    }
    return tmp;
  }
  getConnections(guildId) {
    let connections;
    if (closure_8[guildId] != null) {
      connections = tmp.connections;
    }
    if (connections == null) {
      connections = closure_15;
    }
    return connections;
  }
  getOnboardingConnections(guildId) {
    if (null == closure_8[guildId]) {
      return closure_15;
    } else {
      let items;
      let prop = tmp2.additionalConnections;
      if (prop == null) {
        prop = [];
      }
      if (0 === prop.length) {
        let connections = tmp2.connections;
        if (connections == null) {
          connections = closure_15;
        }
        items = connections;
      } else {
        let connections1 = tmp2.connections;
        if (connections1 == null) {
          connections1 = [];
        }
        items = [];
        HermesBuiltin.arraySpread(items, prop, HermesBuiltin.arraySpread(items, connections1, 0));
      }
      return items;
    }
  }
}
const prototype = GuildOnboardingPromptsStore.prototype;
GuildOnboardingPromptsStore.displayName = "GuildOnboardingPromptsStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    c11 = false;
    closure_8 = {};
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete closure_8[guild.id];
    delete closure_9[guild.id];
    delete closure_10[guild.id];
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_START: function handleStart() {
    c11 = true;
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function handleSuccess(guildId) {
    let additionalConnections;
    let belowRequirements;
    let connections;
    let defaultChannelIds;
    let enabled;
    let items;
    let mode;
    let onboardingPromptsSeen;
    let onboardingResponsesSeen;
    let prompts;
    let responses;
    guildId = guildId.guildId;
    ({ prompts, defaultChannelIds, responses, onboardingPromptsSeen, onboardingResponsesSeen, connections, additionalConnections } = guildId);
    c11 = false;
    ({ enabled, mode, belowRequirements } = guildId);
    const tmp = GuildOnboardingStore.getOnboardingStatus(guildId) === GuildOnboardingStatus.READY;
    const mapped = prompts.map((options) => {
      const items = [];
      let num = 0;
      let flag = false;
      let flag2 = false;
      if (0 < options.options.length) {
        do {
          let tmp3 = options.options[num];
          let tmp4 = null == tmp2[tmp3.id];
          let flag3 = flag;
          if (tmp4) {
            flag3 = true;
          }
          let obj = { isUnseen: tmp4 };
          let push = items.push;
          let merged = Object.assign(tmp3);
          let arr = push(obj);
          num = num + 1;
          flag = flag3;
          flag2 = flag3;
        } while (num < options.options.length);
      }
      obj2 = { options: items, hasNewAnswers: flag2, isNew: null == prompts_seen[options.id] };
      const merged1 = Object.assign(options);
      return obj2;
    });
    let obj = {
      enabled,
      mode,
      belowRequirements,
      prompts: mapped,
      onboardingPrompts: mapped.filter((inOnboarding) => inOnboarding.inOnboarding),
      defaultChannelIds: defaultChannelIds.filter((item) => {
        const obj = DefaultChannelUtils;
        return obj.canChannelBeDefault(guildId, item);
      }),
      responses: items,
      onboardingPromptsSeen,
      onboardingResponsesSeen,
      connections,
      additionalConnections
    };
    items = responses;
    if (tmp) {
      items = [];
    }
    if (connections == null) {
      connections = [];
    }
    if (additionalConnections == null) {
      additionalConnections = [];
    }
    closure_8[guildId] = obj;
    if (!tmp) {
      if (null != closure_9[guildId]) {
        const obj2 = {};
        const _Object = Object;
        const keys = Object.keys(closure_9[guildId]);
        const item = keys.forEach((item) => {
          if (!options.includes(item)) {
            if (closure_9[guildId][item]) {
              obj2[item] = true;
            }
          }
          const hasItem = options.includes(item) && false === closure_9[guildId][item];
          if (hasItem) {
            obj2[item] = false;
          }
        });
        closure_9[guildId] = obj2;
        const found = responses.filter((item) => null == obj2[item] || true === obj2[item]);
        const _Object2 = Object;
        const keys1 = Object.keys(obj2);
        const item1 = keys1.forEach((item) => {
          const hasItem = true !== obj2[item] || options.includes(item);
          if (!hasItem) {
            found.push(item);
          }
        });
        const obj3 = { responses: found };
        const merged = Object.assign(closure_8[guildId]);
        closure_8[guildId] = obj3;
      }
    }
    closure_10[guildId] = Date.now();
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function handleFailure() {
    c11 = false;
  },
  GUILD_ONBOARDING_SELECT_OPTION: function handleOptionSelect(guildId) {
    let optionId;
    let removedOptionIds;
    let selected;
    guildId = guildId.guildId;
    ({ optionId, selected, removedOptionIds } = guildId);
    let isFullServerPreviewResult = ImpersonateStore.isFullServerPreview(guildId);
    if (!isFullServerPreviewResult) {
      let flag = null != closure_8[guildId];
      if (flag) {
        const tmp4 = null != removedOptionIds && removedOptionIds.length > 0;
        if (tmp4) {
          const obj = _modDef12;
          obj.pullAll(closure_8[guildId].responses, removedOptionIds);
        }
        if (selected) {
          const responses = closure_8[guildId].responses;
          responses.push(optionId);
        } else {
          const obj2 = _modDef12;
          obj2.pull(closure_8[guildId].responses, optionId);
        }
        if (null == closure_9[guildId]) {
          closure_9[guildId] = {};
        }
        closure_9[guildId][optionId] = selected;
        if (null != removedOptionIds) {
          const item = removedOptionIds.forEach((item) => {
            closure_9[guildId][item] = false;
            return false;
          });
        }
        const obj3 = {};
        const merged = Object.assign(closure_9[guildId]);
        closure_9[guildId] = obj3;
        flag = true;
      }
      isFullServerPreviewResult = flag;
    }
    return isFullServerPreviewResult;
  },
  GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function handleUpdateResponsesSuccess(arg0) {
    let guildId;
    let options;
    let options_seen;
    let prompts_seen;
    ({ guildId, options, prompts_seen, options_seen } = arg0);
    let obj2;
    let found;
    if (null != closure_9[guildId]) {
      obj2 = {};
      let tmp7 = globalThis;
      const _Object = Object;
      const keys = Object.keys(closure_9[guildId]);
      const item = keys.forEach((item) => {
        if (!options.includes(item)) {
          if (closure_9[guildId][item]) {
            obj2[item] = true;
          }
        }
        const hasItem = options.includes(item) && false === closure_9[guildId][item];
        if (hasItem) {
          obj2[item] = false;
        }
      });
      closure_9[guildId] = obj2;
      found = options.filter((item) => null == obj2[item] || true === obj2[item]);
      const _Object2 = Object;
      const keys1 = Object.keys(obj2);
      const item1 = keys1.forEach((item) => {
        const hasItem = true !== obj2[item] || options.includes(item);
        if (!hasItem) {
          found.push(item);
        }
      });
      const obj3 = { responses: found };
      let merged = Object.assign(closure_8[guildId]);
      closure_8[guildId] = obj3;
    }
    const tmp2 = closure_8[guildId];
    if (null == tmp2) {
      let flag = false;
      return false;
    } else {
      const prompts = tmp2.prompts;
      const mapped = prompts.map((options) => {
        const items = [];
        let num = 0;
        let flag = false;
        let flag2 = false;
        if (0 < options.options.length) {
          do {
            let tmp3 = options.options[num];
            let tmp4 = null == tmp2[tmp3.id];
            let flag3 = flag;
            if (tmp4) {
              flag3 = true;
            }
            let obj = { isUnseen: tmp4 };
            let push = items.push;
            let merged = Object.assign(tmp3);
            let arr = push(obj);
            num = num + 1;
            flag = flag3;
            flag2 = flag3;
          } while (num < options.options.length);
        }
        obj2 = { options: items, hasNewAnswers: flag2, isNew: null == prompts_seen[options.id] };
        const merged1 = Object.assign(options);
        return obj2;
      });
      let obj = { prompts: mapped, onboardingPrompts: mapped.filter((inOnboarding) => inOnboarding.inOnboarding), onboardingPromptsSeen: prompts_seen, onboardingResponsesSeen: options_seen };
      let tmp4 = obj;
      let tmp5 = tmp2;
      let merged1 = Object.assign(tmp2);
      closure_8[guildId] = obj;
    }
  },
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: handleUpdate,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: handleUpdate,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function handleUpdateDefaultChannels(guildId) {
    let channelIds;
    guildId = guildId.guildId;
    const obj = { defaultChannelIds: channelIds };
    channelIds = guildId.channelIds;
    const merged = Object.assign(closure_8[guildId]);
    closure_8[guildId] = obj;
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function handleUpdateConnections(guildId) {
    guildId = guildId.guildId;
    if (null == closure_8[guildId]) {
      return false;
    } else {
      const obj = { connections: tmp };
      const merged = Object.assign(closure_8[guildId]);
      closure_8[guildId] = obj;
    }
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function handleSetMode(mode) {
    if (null != closure_8[mode.guildId]) {
      closure_8[mode.guildId].mode = mode.mode;
    }
  }
};
const guildOnboardingPromptsStore = new GuildOnboardingPromptsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsStore.tsx");

export default guildOnboardingPromptsStore;