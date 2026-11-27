// discord_app/modules/guild_settings/integrations/useManageableAppWebhooks.tsx
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import WebhooksStore from "../../../stores/WebhooksStore.tsx";

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1071).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/useManageableAppWebhooks.tsx");

export default function useManageableAppWebhooks(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  items = [WebhooksStore, ChannelStore, PermissionStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStoresArray(
    items,
    () => {
      if (null == closure_0) {
        items = [];
      } else {
        const webhooksForGuild = WebhooksStore.getWebhooksForGuild(tmp);
        items = webhooksForGuild.filter((application_id) => {
          let canResult = null != application_id.application_id;
          if (canResult) {
            canResult = null == closure_1_1 || application_id.application_id === tmp2;
            const tmp3 = null == closure_1_1 || application_id.application_id === tmp2;
          }
          if (canResult) {
            canResult = PermissionStore.can(constants.MANAGE_WEBHOOKS, channel.getChannel(application_id.channel_id));
          }
          return canResult;
        });
      }
      return items;
    },
    items1,
  );
}
