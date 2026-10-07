// discord_app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const createChannelRecord = ChannelRecord.createChannelRecord;
const dependencyMap = {};
let closure_3 = {};
const Store = initializeDefault.Store;
class GuildRoleSubscriptionTierTemplatesStore extends Store {}
const prototype = GuildRoleSubscriptionTierTemplatesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore);
};
prototype["getTemplates"] = function getTemplates(arg0) {
  return dependencyMap[arg0];
};
prototype["getTemplateWithCategory"] = function getTemplateWithCategory(arg0, usedTemplate) {
  closure_0 = usedTemplate;
  let found;
  if (dependencyMap[arg0] != null) {
    found = arr.find((category) => category.category === closure_0);
  }
  return found;
};
prototype["getChannel"] = function getChannel(arg0) {
  return closure_3[arg0];
};
GuildRoleSubscriptionTierTemplatesStore.displayName = "GuildRoleSubscriptionTierTemplatesStore";
const guildRoleSubscriptionTierTemplatesStore = new GuildRoleSubscriptionTierTemplatesStore(DispatcherDefault, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function handleStashTemplateChannels(guildId) {
    closure_0 = Object.values(ChannelStore.getMutableGuildChannelsForGuild(guildId.guildId));
    const listings = guildId.selectedTemplate.listings;
    let item = listings.forEach((channels) => {
      channels = channels.channels;
      const item = channels.forEach((id) => {
        const name = id;
        const found = closure_1_0.find((name) => name.name === name.name);
        if (undefined !== found) {
          id.id = found.id;
        } else if (!(id.id in closure_2_3)) {
          tmp2[id.id] = name(id);
        }
      });
    });
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function handleFetchTemplates(guildId) {
    closure_2[guildId.guildId] = guildId.templates;
  },
});
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx",
);

export default guildRoleSubscriptionTierTemplatesStore;
