// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationWebhooks.tsx
import useChannelName from "../../../channel/useChannelName.tsx";
import IntegrationsSettingsWebhooksOverview from "../../../integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx";
import WebhooksActionCreatorsDefault from "../../../../actions/WebhooksActionCreators.tsx";
import groupWebhooksByChannelDefault from "../../../integration_settings/groupWebhooksByChannel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import WebhooksStore from "../../../../stores/WebhooksStore.tsx";

require = fn;
const Permissions = fn(1071).Permissions;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationWebhooks.tsx",
);

export default function GuildSettingsModalIntegrationWebhooks(guild) {
  guild = guild.guild;
  let stateFromStoresObject;
  const id = guild.id;
  const tmp3 = id(20000)(id, guild.applicationId);
  dependencyMap = tmp3;
  items = [WebhooksStore];
  const items1 = [id];
  const stateFromStores = guild(504).useStateFromStores(items, () => WebhooksStore.isFetching(id), items1);
  let obj = guild(504);
  const items2 = [PermissionStore];
  const items3 = [guild];
  const items4 = [id];
  const stateFromStores1 = guild(504).useStateFromStores(
    items2,
    () => PermissionStore.can(Permissions.MANAGE_WEBHOOKS, guild),
    items3,
  );
  const effect = stateFromStoresObject.useEffect(() => {
    let isFetchingResult = WebhooksStore.isFetching(id);
    if (!isFetchingResult) {
      isFetchingResult = 0 !== WebhooksStore.getWebhooksForGuild(id).length;
    }
    if (!isFetchingResult) {
      const forGuild = WebhooksActionCreatorsDefault.fetchForGuild(id);
    }
  }, items4);
  let obj2 = guild(504);
  const items5 = [ChannelStore];
  const items6 = [tmp3];
  stateFromStoresObject = guild(504).useStateFromStoresObject(
    items5,
    () =>
      Object.fromEntries(
        closure_2.map((channel_id) => {
          channel_id = channel_id.channel_id;
          items = [channel_id, channel.getChannel(channel_id)];
          return items;
        }),
      ),
    items6,
  );
  const items7 = [stateFromStoresObject, tmp3];
  const memo = stateFromStoresObject.useMemo(
    () => groupWebhooksByChannelDefault(closure_2, (arg0) => stateFromStoresObject[arg0]),
    items7,
  );
  if (memo.length > 0) {
    const obj4 = {
      spacing: tmp(575).space.PX_16,
      children: memo.map((channel) => {
        channel = channel.channel;
        const webhooks = channel.webhooks;
        let obj = { hasIcons: true, title: null, children: null };
        const intl = guild(closure_2[15]).intl;
        obj.title = intl.formatToPlainString(guild(closure_2[15]).t.TKDIZg, {
          channelHook() {
            return useChannelName.computeChannelName(channel, UserStore, RelationshipStore, true);
          },
        });
        obj.children = webhooks.map((item) => {
          ({ id, avatar } = item);
          ({ type, name, user, token } = item);
          const obj = {
            webhookId: id,
            webhookType: type,
            avatar,
            name,
            user,
            channelId: channel.id,
            token,
            guildId: id,
          };
          return refs(IntegrationsSettingsWebhooksOverview.ConnectedWebhookItem, obj, id);
        });
        return closure_1_10(guild(closure_2[14]).TableRowGroup, obj, channel.id);
      }),
    };
    let tmp10Result = closure_10(tmp4(6115).Stack, obj4);
  } else {
    tmp10Result = null;
    if (!stateFromStores) {
      let intl = tmp4(1112).intl;
      const string = intl.string;
      const t = tmp4(1112).t;
      if (stateFromStores1) {
        let stringResult = string(t.ahPd2Y);
      } else {
        stringResult = string(t.axqYMl);
      }
      const obj5 = { text: stringResult };
      tmp10Result = closure_10(tmp(20005), obj5);
      const tmpResult = tmp(20005);
    }
  }
  const obj6 = { spacing: id(575).space.PX_8, children: null };
  const obj7 = { icon: null, title: null };
  const obj3 = guild(504);
  obj7.icon = guild(19070).WebhookIcon;
  const intl2 = tmp4(1112).intl;
  obj7.title = intl2.string(guild(1112).t["t9ZX/I"]);
  const items8 = [closure_10(id(20073), obj7), tmp10Result];
  obj6.children = items8;
  return closure_11(guild(6115).Stack, obj6);
}
