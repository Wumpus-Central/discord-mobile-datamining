// === Module 12155: initialize ===

// Module 12155 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildPromptsStore extends PersistedStore {
}
const prototype = GuildPromptsStore.prototype;
prototype["initialize"] = function initialize(obj) {
  for (const key10004 in arg0) {
    let tmp = key10004;
    let tmp2 = closure_0;
    let _Set = Set;
    let tmp3 = new.target;
    let tmp4 = new.target;
    let set = new Set(arg0[key10004]);
    let tmp6 = set;
    closure_0[key10004] = set;
    continue;
  }
};
prototype["hasViewedPrompt"] = function hasViewedPrompt(REAL_NAME_PROMPT, id) {
  let hasItem = null != obj;
  if (hasItem) {
    hasItem = obj.has(REAL_NAME_PROMPT);
  }
  return hasItem;
};
prototype["getState"] = function getState() {
  return closure_0;
};
GuildPromptsStore.displayName = "GuildPromptsStore";
GuildPromptsStore.persistKey = "GuildPromptsStore";
const guildPromptsStore = new GuildPromptsStore(dispatcherDefault, {
  GUILD_PROMPT_VIEWED: function handleGuildPromptViewed(arg0) {
    ({ prompt: _prompt, guildId } = arg0);
    if (null == dependencyMap[guildId]) {
      const _Set = Set;
      const set = new Set();
      tmp[guildId] = set;
      tmp[guildId].add(_prompt);
      let flag = true;
      const obj2 = tmp[guildId];
    } else {
      const hasItem = obj.has(_prompt);
      flag = !hasItem;
      if (!hasItem) {
        obj.add(_prompt);
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    let flag = null != dependencyMap[guild.id] && !guild.unavailable;
    if (flag) {
      const id = guild.id;
      delete tmp2[tmp];
      flag = true;
    }
    return flag;
  }
});
const result = require("set").fileFinishedImporting("modules/guild/GuildPromptsStore.tsx");

export default guildPromptsStore;