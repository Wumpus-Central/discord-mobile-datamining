// === Module 12650: GuildPromptsStore ===

// Module 12650 (GuildPromptsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const dependencyMap = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildPromptsStore extends PersistedStore {
}
const prototype = GuildPromptsStore.prototype;
prototype["initialize"] = function initialize(obj) {
  for (const key10004 in arg0) {
    let _Set = Set;
    let tmp3 = new.target;
    let tmp4 = new.target;
    let set = new Set(arg0[key10004]);
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
const guildPromptsStore = new GuildPromptsStore(DispatcherDefault, {
  GUILD_PROMPT_VIEWED: function handleGuildPromptViewed(arg0) {
    ({ prompt: _prompt, guildId } = arg0);
    if (null == dependencyMap[guildId]) {
      const _Set = Set;
      const set = new Set();
      dependencyMap[guildId] = set;
      dependencyMap[guildId].add(_prompt);
      let flag = true;
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/GuildPromptsStore.tsx");

export default guildPromptsStore;