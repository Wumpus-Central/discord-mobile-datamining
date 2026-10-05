// discord_app/modules/guild/GuildPromptsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

const React = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildPromptsStore extends PersistedStore {
  initialize(obj) {
    for (const key10004 in obj) {
      let _Set = Set;
      let self = this;
      let self2 = this;
      set = new Set(obj[key10004]);
      closure_0[key10004] = set;
      continue;
    }
  }
  hasViewedPrompt(REAL_NAME_PROMPT, id) {
    const hasItem = null != obj && obj.has(REAL_NAME_PROMPT);
    return hasItem;
  }
  getState() {
    return closure_0;
  }
}
const prototype = GuildPromptsStore.prototype;
GuildPromptsStore.displayName = "GuildPromptsStore";
GuildPromptsStore.persistKey = "GuildPromptsStore";
const obj = {
  GUILD_PROMPT_VIEWED: function handleGuildPromptViewed(arg0) {
    let _prompt;
    let flag;
    let guildId;
    ({ prompt: _prompt, guildId } = arg0);
    if (null == closure_0[guildId]) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      closure_0[guildId] = new Set();
      const obj2 = closure_0[guildId];
      set = new Set();
      obj2.add(_prompt);
      flag = true;
    } else {
      const hasItem = obj.has(_prompt);
      flag = !hasItem;
      if (flag) {
        closure_0[guildId].add(_prompt);
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    let flag = null != closure_0[guild.id] && !guild.unavailable;
    if (flag) {
      delete closure_0[guild.id];
      flag = true;
    }
    return flag;
  },
};
const guildPromptsStore = new GuildPromptsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild/GuildPromptsStore.tsx");

export default guildPromptsStore;
