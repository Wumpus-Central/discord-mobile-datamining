// discord_app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import createChannelRecord2 from "../../../records/ChannelRecord.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";

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
    found = arr.find((item, index) => item.category === closure_0);
  }
  return found;
};
prototype["getChannel"] = function getChannel(arg0) {
  return table[arg0];
};
GuildRoleSubscriptionTierTemplatesStore.displayName = "GuildRoleSubscriptionTierTemplatesStore";
const guildRoleSubscriptionTierTemplatesStore = new GuildRoleSubscriptionTierTemplatesStore(dispatcherDefault, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function handleStashTemplateChannels(guildId) {
    closure_0 = Object.values(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId.guildId));
    const listings = guildId.selectedTemplate.listings;
    let item = listings.forEach((item, index) => {
      const channels = item.channels;
      item = channels.forEach((item, index) => {
        closure_0 = item;
        const found = closure_0.find((item, index) => item.name === item.name);
        if (undefined !== found) {
          item.id = found.id;
        } else if (!(item.id in closure_1_3)) {
          tmp2[item.id] = closure_1_0(item);
        }
      });
    });
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function handleFetchTemplates(guildId) {
    closure_2[guildId.guildId] = guildId.templates;
  }
});
const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx");

export default guildRoleSubscriptionTierTemplatesStore;