// === Module 5119: handleUpdate ===

// Module 5119 (handleUpdate)
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import shouldShowOnboarding from "shouldShowOnboarding";
import { GuildOnboardingStatus } from "shouldShowOnboarding";
import { GuildOnboardingMode } from "serverPromptToClientPrompt";
import { Store } from "initialize";

const require = arg1;
function handleUpdate(arg0) {
  let guildId;
  let updates;
  ({ guildId, updates } = arg0);
  let prop = updates.onboardingPromptsSeen;
  if (prop == null) {
    let prop1;
    if (dependencyMap[guildId] != null) {
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
    if (dependencyMap[guildId] != null) {
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
    if (dependencyMap[guildId] != null) {
      prompts1 = tmp8.prompts;
    }
    prompts = prompts1;
  }
  if (prompts == null) {
    prompts = [];
  }
  const obj = {};
  const mapped = prompts.map((options) => {
    const items = [];
    let num = 0;
    let flag = false;
    let flag2 = false;
    if (0 < options.options.length) {
      do {
        let tmp3 = options.options[num];
        let tmp4 = null == tmp2[tmp3.id];
        let tmp5 = num;
        let flag3 = flag;
        if (tmp4) {
          flag3 = true;
        }
        let obj = {};
        let tmp6 = obj;
        let tmp7 = tmp3;
        let merged = Object.assign(tmp3);
        obj.isUnseen = tmp4;
        let arr = items.push(obj);
        num = num + 1;
        flag = flag3;
        flag2 = flag3;
      } while (num < options.options.length);
    }
    obj = {};
    const merged1 = Object.assign(options);
    obj.options = items;
    obj.hasNewAnswers = flag2;
    obj.isNew = null == prompts_seen[options.id];
    return obj;
  });
  const merged = Object.assign(dependencyMap[guildId]);
  const merged1 = Object.assign(updates);
  obj.prompts = mapped;
  dependencyMap[guildId] = obj;
}
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let c11 = false;
let closure_12 = [];
let closure_13 = [];
let closure_14 = [];
let closure_15 = [];
class GuildOnboardingPromptsStore extends Store {
}
const prototype = GuildOnboardingPromptsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, shouldShowOnboarding, initialize);
};
prototype["getOnboardingPromptsForOnboarding"] = function getOnboardingPromptsForOnboarding(guildId) {
  let onboardingPrompts;
  if (dependencyMap[guildId] != null) {
    onboardingPrompts = tmp.onboardingPrompts;
  }
  if (onboardingPrompts == null) {
    onboardingPrompts = closure_12;
  }
  return onboardingPrompts;
};
prototype["getOnboardingPrompts"] = function getOnboardingPrompts(guildId) {
  let prompts;
  if (dependencyMap[guildId] != null) {
    prompts = tmp.prompts;
  }
  if (prompts == null) {
    prompts = closure_12;
  }
  return prompts;
};
prototype["getOnboardingResponses"] = function getOnboardingResponses(closure_0) {
  if (initialize.isFullServerPreview(closure_0)) {
    let onboardingResponses = initialize.getOnboardingResponses(closure_0);
    if (onboardingResponses == null) {
      onboardingResponses = closure_13;
    }
    let responses = Array.from(onboardingResponses);
  } else {
    responses = undefined;
    if (dependencyMap[closure_0] != null) {
      responses = tmp2.responses;
    }
    if (responses == null) {
      responses = closure_13;
    }
  }
  return responses;
};
prototype["getSelectedOptions"] = function getSelectedOptions(guildId) {
  const onboardingResponses = this.getOnboardingResponses(guildId);
  const onboardingPrompts = this.getOnboardingPrompts(guildId);
  const mapped = onboardingPrompts.map((options) => options.options);
  return mapped.flat().filter((id) => closure_0.includes(id.id));
};
prototype["getOnboardingResponsesForPrompt"] = function getOnboardingResponsesForPrompt(guildId, id) {
  let closure_0 = id;
  if (null == dependencyMap[guildId]) {
    return closure_13;
  } else {
    const prompts = tmp.prompts;
    const found = prompts.find((id) => id.id === closure_0);
    if (null == found) {
      let intersectionResult = closure_13;
    } else {
      const self = this;
      const options = found.options;
      const mapped = options.map((id) => id.id);
      intersectionResult = importDefault(12).intersection(mapped, this.getOnboardingResponses(guildId));
      const obj = importDefault(12);
    }
    return intersectionResult;
  }
};
prototype["getEnabledOnboardingPrompts"] = function getEnabledOnboardingPrompts(closure_0) {
  if (initialize.isFullServerPreview(closure_0)) {
    let prompts;
    if (tmp != null) {
      prompts = tmp.prompts;
    }
    if (prompts == null) {
      prompts = closure_12;
    }
    let tmp2 = prompts;
  } else {
    if (null != tmp) {
      if (tmp.enabled) {
        prompts = tmp.prompts;
        if (prompts == null) {
          prompts = closure_12;
        }
        tmp2 = prompts;
      }
    }
    tmp2 = closure_12;
  }
  return tmp2;
};
prototype["getDefaultChannelIds"] = function getDefaultChannelIds(closure_0) {
  let defaultChannelIds;
  if (dependencyMap[closure_0] != null) {
    defaultChannelIds = tmp.defaultChannelIds;
  }
  if (defaultChannelIds == null) {
    defaultChannelIds = closure_14;
  }
  return defaultChannelIds;
};
prototype["getEnabled"] = function getEnabled(closure_0) {
  if (initialize.isFullServerPreview(closure_0)) {
    let flag = null != tmp;
  } else {
    flag = undefined;
    if (tmp != null) {
      flag = tmp.enabled;
    }
    if (flag == null) {
      flag = false;
    }
  }
  return flag;
};
prototype["getOnboardingPrompt"] = function getOnboardingPrompt(closure_1) {
  let closure_0 = closure_1;
  const values = Object.values(closure_8);
  const mapped = values.map((prompts) => prompts.prompts);
  return mapped.flat().find((id) => id.id === closure_0);
};
prototype["isLoading"] = function isLoading() {
  return c11;
};
prototype["shouldFetchPrompts"] = function shouldFetchPrompts(arg0) {
  let HOUR = arg1;
  if (arg1 === undefined) {
    HOUR = importDefault(687).Millis.HOUR;
  }
  if (c11) {
    return false;
  } else {
    let tmp7 = null == tmp5;
    if (!tmp7) {
      const _Date = Date;
      tmp7 = Date.now() - tmp5 > HOUR;
    }
    return tmp7;
  }
};
prototype["getPendingResponseOptions"] = function getPendingResponseOptions(closure_0) {
  return dependencyMap2[closure_0];
};
prototype["ackIdForGuild"] = function ackIdForGuild(closure_0) {
  const enabledOnboardingPrompts = this.getEnabledOnboardingPrompts(closure_0);
  let c0 = "0";
  let item = enabledOnboardingPrompts.forEach((options) => {
    options = options.options;
    const item = options.forEach((id) => {
      if (obj.compare(id.id, id) > 0) {
        id = id.id;
      }
    });
    if (obj.compare(options.id, id) > 0) {
      id = options.id;
    }
  });
  return c0;
};
prototype["lastFetchedAt"] = function lastFetchedAt(arg0) {
  return dependencyMap3[arg0];
};
prototype["isAdvancedMode"] = function isAdvancedMode(closure_0) {
  let tmp = null != closure_0;
  if (tmp) {
    let mode;
    if (dependencyMap[closure_0] != null) {
      mode = tmp3.mode;
    }
    tmp = mode === GuildOnboardingMode.ONBOARDING_ADVANCED;
  }
  return tmp;
};
prototype["getConnections"] = function getConnections(guildId) {
  let connections;
  if (dependencyMap[guildId] != null) {
    connections = tmp.connections;
  }
  if (connections == null) {
    connections = closure_15;
  }
  return connections;
};
prototype["getOnboardingConnections"] = function getOnboardingConnections(guildId) {
  if (null == dependencyMap[guildId]) {
    return closure_15;
  } else {
    let prop = tmp.additionalConnections;
    if (prop == null) {
      prop = [];
    }
    if (0 === prop.length) {
      let connections = tmp.connections;
      if (connections == null) {
        connections = closure_15;
      }
      let items = connections;
    } else {
      connections = tmp.connections;
      if (connections == null) {
        connections = [];
      }
      items = [];
      HermesBuiltin.arraySpread(prop, HermesBuiltin.arraySpread(connections, 0));
    }
    return items;
  }
};
GuildOnboardingPromptsStore.displayName = "GuildOnboardingPromptsStore";
const guildOnboardingPromptsStore = new GuildOnboardingPromptsStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c11 = false;
    let closure_8 = {};
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete tmp4[tmp3];
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_START: function handleStart() {
    let c11 = true;
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function handleSuccess(guildId) {
    let additionalConnections;
    let belowRequirements;
    let connections;
    let defaultChannelIds;
    let enabled;
    let mode;
    let onboardingPromptsSeen;
    let onboardingResponsesSeen;
    let prompts;
    let responses;
    guildId = guildId.guildId;
    ({ prompts, defaultChannelIds, responses, onboardingPromptsSeen, onboardingResponsesSeen, connections, additionalConnections } = guildId);
    let c11 = false;
    ({ enabled, mode, belowRequirements } = guildId);
    const tmp = onboardingStatus.getOnboardingStatus(guildId) === GuildOnboardingStatus.READY;
    guildId = onboardingPromptsSeen;
    responses = onboardingResponsesSeen;
    const mapped = prompts.map((options) => {
      const items = [];
      let num = 0;
      let flag = false;
      let flag2 = false;
      if (0 < options.options.length) {
        do {
          let tmp3 = options.options[num];
          let tmp4 = null == tmp2[tmp3.id];
          let tmp5 = num;
          let flag3 = flag;
          if (tmp4) {
            flag3 = true;
          }
          let obj = {};
          let tmp6 = obj;
          let tmp7 = tmp3;
          let merged = Object.assign(tmp3);
          obj.isUnseen = tmp4;
          let arr = items.push(obj);
          num = num + 1;
          flag = flag3;
          flag2 = flag3;
        } while (num < options.options.length);
      }
      obj = {};
      const merged1 = Object.assign(options);
      obj.options = items;
      obj.hasNewAnswers = flag2;
      obj.isNew = null == prompts_seen[options.id];
      return obj;
    });
    let obj = {
      enabled,
      mode,
      belowRequirements,
      prompts: mapped,
      onboardingPrompts: mapped.filter((inOnboarding) => inOnboarding.inOnboarding),
      defaultChannelIds: defaultChannelIds.filter((id) => {
        obj = guildId(obj[4]);
        return obj.canChannelBeDefault(guildId, id);
      }),
      responses: null,
      onboardingPromptsSeen: null,
      onboardingResponsesSeen: null,
      connections: null,
      additionalConnections: null
    };
    let items = responses;
    if (tmp) {
      items = [];
    }
    obj[6] = items;
    obj[7] = onboardingPromptsSeen;
    obj[8] = onboardingResponsesSeen;
    if (connections == null) {
      connections = [];
    }
    obj[9] = connections;
    if (additionalConnections == null) {
      additionalConnections = [];
    }
    obj[10] = additionalConnections;
    dependencyMap[guildId] = obj;
    if (!tmp) {
      if (null != dependencyMap2[guildId]) {
        obj = {};
        const _Object = Object;
        const keys = Object.keys(tmp3[guildId]);
        const item = keys.forEach((arg0) => {
          if (!options_seen.includes(arg0)) {
            if (outer1_9[prompts_seen][arg0]) {
              obj[arg0] = true;
            }
          }
          let hasItem = obj.includes(arg0);
          if (hasItem) {
            hasItem = false === outer1_9[prompts_seen][arg0];
          }
          if (hasItem) {
            obj[arg0] = false;
          }
        });
        tmp3[guildId] = obj;
        const found = responses.filter((arg0) => {
          let tmp = null == obj[arg0];
          if (!tmp) {
            tmp = true === obj[arg0];
          }
          return tmp;
        });
        const _Object2 = Object;
        const keys1 = Object.keys(obj);
        const item1 = keys1.forEach((arg0) => {
          let hasItem = true !== obj[arg0];
          if (!hasItem) {
            hasItem = options_seen.includes(arg0);
          }
          if (!hasItem) {
            found.push(arg0);
          }
        });
        obj = {};
        const merged = Object.assign(dependencyMap[guildId]);
        obj.responses = found;
        dependencyMap[guildId] = obj;
      }
    }
    closure_10[guildId] = Date.now();
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function handleFailure() {
    let c11 = false;
  },
  GUILD_ONBOARDING_SELECT_OPTION: function handleOptionSelect(guildId) {
    let optionId;
    let removedOptionIds;
    let selected;
    guildId = guildId.guildId;
    ({ optionId, selected, removedOptionIds } = guildId);
    let isFullServerPreviewResult = initialize.isFullServerPreview(guildId);
    if (!isFullServerPreviewResult) {
      let flag = null != dependencyMap[guildId];
      if (flag) {
        let tmp4 = null != removedOptionIds;
        if (tmp4) {
          tmp4 = removedOptionIds.length > 0;
        }
        if (tmp4) {
          let obj = importDefault(12);
          obj.pullAll(dependencyMap[guildId].responses, removedOptionIds);
        }
        if (selected) {
          const responses = dependencyMap[guildId].responses;
          responses.push(optionId);
        } else {
          importDefault(12).pull(dependencyMap[guildId].responses, optionId);
          const obj2 = importDefault(12);
        }
        if (null == dependencyMap2[guildId]) {
          tmp15[guildId] = {};
        }
        dependencyMap2[guildId][optionId] = selected;
        if (null != removedOptionIds) {
          const item = removedOptionIds.forEach((arg0) => {
            outer1_9[guildId][arg0] = false;
            return false;
          });
        }
        obj = {};
        const merged = Object.assign(tmp15[guildId]);
        dependencyMap2[guildId] = obj;
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
    prompts_seen = guildId;
    options_seen = options;
    let obj;
    let found;
    if (null != dependencyMap2[guildId]) {
      obj = {};
      const _Object = Object;
      const keys = Object.keys(tmp[guildId]);
      const item = keys.forEach((arg0) => {
        if (!options_seen.includes(arg0)) {
          if (outer1_9[prompts_seen][arg0]) {
            obj[arg0] = true;
          }
        }
        let hasItem = obj.includes(arg0);
        if (hasItem) {
          hasItem = false === outer1_9[prompts_seen][arg0];
        }
        if (hasItem) {
          obj[arg0] = false;
        }
      });
      tmp[guildId] = obj;
      found = options.filter((arg0) => {
        let tmp = null == obj[arg0];
        if (!tmp) {
          tmp = true === obj[arg0];
        }
        return tmp;
      });
      const _Object2 = Object;
      const keys1 = Object.keys(obj);
      const item1 = keys1.forEach((arg0) => {
        let hasItem = true !== obj[arg0];
        if (!hasItem) {
          hasItem = options_seen.includes(arg0);
        }
        if (!hasItem) {
          found.push(arg0);
        }
      });
      obj = {};
      let merged = Object.assign(dependencyMap[guildId]);
      obj.responses = found;
      dependencyMap[guildId] = obj;
    }
    if (null == dependencyMap[guildId]) {
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
            let tmp5 = num;
            let flag3 = flag;
            if (tmp4) {
              flag3 = true;
            }
            let obj = {};
            let tmp6 = obj;
            let tmp7 = tmp3;
            let merged = Object.assign(tmp3);
            obj.isUnseen = tmp4;
            let arr = items.push(obj);
            num = num + 1;
            flag = flag3;
            flag2 = flag3;
          } while (num < options.options.length);
        }
        obj = {};
        const merged1 = Object.assign(options);
        obj.options = items;
        obj.hasNewAnswers = flag2;
        obj.isNew = null == prompts_seen[options.id];
        return obj;
      });
      obj = {};
      let merged1 = Object.assign(tmp2);
      obj.prompts = mapped;
      obj.onboardingPrompts = mapped.filter((inOnboarding) => inOnboarding.inOnboarding);
      obj.onboardingPromptsSeen = prompts_seen;
      obj.onboardingResponsesSeen = options_seen;
      dependencyMap[guildId] = obj;
    }
  },
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: handleUpdate,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: handleUpdate,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function handleUpdateDefaultChannels(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(dependencyMap[guildId]);
    obj.defaultChannelIds = guildId.channelIds;
    dependencyMap[guildId] = obj;
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function handleUpdateConnections(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(dependencyMap[guildId]);
      obj.connections = tmp;
      dependencyMap[guildId] = obj;
    }
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function handleSetMode(mode) {
    if (null != dependencyMap[mode.guildId]) {
      tmp.mode = mode.mode;
    }
  }
});
const result = require("shouldShowOnboarding").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsStore.tsx");

export default guildOnboardingPromptsStore;