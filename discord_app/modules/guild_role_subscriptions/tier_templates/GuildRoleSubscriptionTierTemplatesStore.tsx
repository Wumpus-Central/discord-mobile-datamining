// === Module 14337: initialize ===

// Module 14337 (initialize)
import { createChannelRecord } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import { Store } from "initialize";

let closure_2 = {};
let closure_3 = {};
class GuildRoleSubscriptionTierTemplatesStore extends Store {
}
const prototype = GuildRoleSubscriptionTierTemplatesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded);
};
prototype["getTemplates"] = function getTemplates(arg0) {
  return dependencyMap[arg0];
};
prototype["getTemplateWithCategory"] = function getTemplateWithCategory(c0, usedTemplate) {
  let closure_0 = usedTemplate;
  let found;
  if (dependencyMap[c0] != null) {
    found = arr.find((category) => category.category === closure_0);
  }
  return found;
};
prototype["getChannel"] = function getChannel(arg0) {
  return table[arg0];
};
GuildRoleSubscriptionTierTemplatesStore.displayName = "GuildRoleSubscriptionTierTemplatesStore";
const guildRoleSubscriptionTierTemplatesStore = new GuildRoleSubscriptionTierTemplatesStore(require("dispatcher"), {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function handleStashTemplateChannels(guildId) {
    let closure_0;
    closure_0 = Object.values(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId.guildId));
    const listings = guildId.selectedTemplate.listings;
    let item = listings.forEach((channels) => {
      channels = channels.channels;
      const item = channels.forEach((id) => {
        let closure_0 = id;
        const found = closure_0.find((name) => name.name === name.name);
        if (undefined !== found) {
          id.id = found.id;
        } else if (!(id.id in outer1_3)) {
          tmp2[id.id] = outer1_0(id);
        }
      });
    });
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function handleFetchTemplates(guildId) {
    closure_2[guildId.guildId] = guildId.templates;
  }
});
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx");

export default guildRoleSubscriptionTierTemplatesStore;