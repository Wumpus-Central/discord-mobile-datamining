// discord_app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import createChannelRecord2 from "createChannelRecord" /* 1395 */;
import closure_1 from "ensureGuildLoaded" /* 1391 */;

const createChannelRecord = createChannelRecord2.createChannelRecord;
let closure_2 = {};
let closure_3 = {};
const Store = initializeDefault.Store;
class GuildRoleSubscriptionTierTemplatesStore extends Store {
}
const prototype = GuildRoleSubscriptionTierTemplatesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_1);
};
prototype["getTemplates"] = function getTemplates(arg0) {
  return dependencyMap[arg0];
};
prototype["getTemplateWithCategory"] = function getTemplateWithCategory(c0, usedTemplate) {
  closure_0 = usedTemplate;
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
const guildRoleSubscriptionTierTemplatesStore = new GuildRoleSubscriptionTierTemplatesStore(dispatcherDefault, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function handleStashTemplateChannels(guildId) {
    closure_0 = undefined;
    closure_0 = Object.values(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId.guildId));
    const listings = guildId.selectedTemplate.listings;
    let item = listings.forEach((channels) => {
      channels = channels.channels;
      const item = channels.forEach((id) => {
        closure_0 = id;
        const found = closure_0.find((name) => name.name === name.name);
        if (undefined !== found) {
          id.id = found.id;
        } else if (!(id.id in closure_1_3)) {
          tmp2[id.id] = closure_1_0(id);
        }
      });
    });
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function handleFetchTemplates(guildId) {
    closure_2[guildId.guildId] = guildId.templates;
  }
});
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx");

export default guildRoleSubscriptionTierTemplatesStore;