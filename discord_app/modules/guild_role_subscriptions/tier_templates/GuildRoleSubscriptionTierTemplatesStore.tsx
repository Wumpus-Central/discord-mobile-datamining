// === Module 15067: GuildRoleSubscriptionTierTemplatesStore ===

// Module 15067 (GuildRoleSubscriptionTierTemplatesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let channels;

const createChannelRecord = ChannelRecord.createChannelRecord;
const React2 = {};
const _false = {};
const Store = get_initializedDefault.Store;
class GuildRoleSubscriptionTierTemplatesStore extends Store {
  initialize() {
    this.waitFor(ChannelStore);
  }
  getTemplates(arg0) {
    return closure_2[arg0];
  }
  getTemplateWithCategory(c0, usedTemplate) {
    let closure_0 = usedTemplate;
    let found;
    if (closure_2[c0] != null) {
      found = arr.find((category) => category.category === closure_0);
    }
    return found;
  }
  getChannel(arg0) {
    return closure_3[arg0];
  }
}
const prototype = GuildRoleSubscriptionTierTemplatesStore.prototype;
GuildRoleSubscriptionTierTemplatesStore.displayName = "GuildRoleSubscriptionTierTemplatesStore";
const obj = {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function handleStashTemplateChannels(selectedTemplate) {
    selectedTemplate = selectedTemplate.selectedTemplate;
    let closure_0 = Object.values(ChannelStore.getMutableGuildChannelsForGuild(selectedTemplate.guildId));
    const listings = selectedTemplate.listings;
    let item = listings.forEach((channels) => {
      channels = channels.channels;
      const item = channels.forEach((id) => {
        closure_0 = id;
        const found = closure_1_0.find((name) => name.name === name.name);
        if (undefined !== found) {
          id.id = found.id;
        } else if (!(id.id in closure_2_3)) {
          tmp2[id.id] = closure_0(id);
        }
      });
    });
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function handleFetchTemplates(guildId) {
    closure_2[guildId.guildId] = guildId.templates;
  }
};
const guildRoleSubscriptionTierTemplatesStore = new GuildRoleSubscriptionTierTemplatesStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx");

export default guildRoleSubscriptionTierTemplatesStore;