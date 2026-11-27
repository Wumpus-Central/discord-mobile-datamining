// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationsApps.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationSubscriptionsStore from "../../../premium_apps/ApplicationSubscriptionsStore.tsx";

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let closure_6 = createStyles.createStyles({ name: { flexShrink: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationsApps.tsx",
);

export default function GuildSettingsModalIntegrationsApps(guildId) {
  guildId = guildId.guildId;
  const apps = guildId.apps;
  ({
    commandSections: dependencyMap,
    webhookApplicationIds: ApplicationSubscriptionsStore,
    onPress: closure_4,
    renderIcon: closure_5,
  } = guildId);
  let name;
  name = name();
  const variant = guildId(5607).useToken(apps(575).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj = guildId(5607);
  const color = guildId(5607).useToken(apps(575).modules.mobile.TABLE_ROW_LABEL_COLOR);
  let obj2 = guildId(5607);
  items = [ApplicationSubscriptionsStore];
  let items1 = [apps, guildId];
  closure_9 = guildId(504).useStateFromStoresArray(
    items,
    () => {
      const found = apps.filter(
        (application) => set.getApplicationEntitlementsForGuild(application.application.id, guildId).length > 0,
      );
      return found.map((application) => application.application.id);
    },
    items1,
  );
  let obj3 = guildId(504);
  return closure_4(guildId(6140).TableRowGroup, {
    title: guildId.title,
    hasIcons: true,
    children: apps.map((integrationId) => {
      closure_0 = integrationId;
      ({ application, integration } = integrationId);
      const integrationHasBotResult = guildId(20007).integrationHasBot(application, integration);
      const hasItem = set.has(application.id);
      const obj = guildId(20007);
      const result = guildId(20007).integrationHasCommands(application, integration, closure_2);
      let tmp6;
      if (closure_5 != null) {
        tmp6 = closure_5(application);
      }
      if (tmp6 == null) {
        const obj3 = { application };
        tmp6 = closure_1_4(apps(8538), obj3);
      }
      if (closure_9.includes(application.id)) {
        const obj4 = { direction: "horizontal", align: "center", spacing: apps(575).space.PX_4, children: null };
        const obj5 = { variant, color, lineClamp: 1, style: name.name, children: application.name };
        items = [closure_1_4(guildId(5634).Text, obj5)];
        const obj6 = { size: "xs", color: apps(575).colors.ICON_SUBTLE };
        items[1] = closure_1_4(guildId(16825).TicketIcon, obj6);
        obj4.children = items;
        name = closure_1_5(guildId(6115).Stack, obj4);
      } else {
        name = application.name;
      }
      const obj7 = { label: name, subLabel: null, icon: null, trailing: null, arrow: true, onPress: null };
      const obj2 = guildId(20007);
      obj7.subLabel = guildId(20007).getIntegrationAddedLabel(integration);
      obj7.icon = tmp6;
      if (!integrationHasBotResult) {
        obj7.trailing = tmp16Result;
        obj7.onPress = function onPress() {
          return closure_2_4(closure_0);
        };
        return closure_1_4(guildId(6144).TableRow, obj7, integrationId.integrationId);
      }
      const obj8 = { direction: "horizontal", align: "center", spacing: apps(575).space.PX_8, children: null };
      let tmp9Result = null;
      if (integrationHasBotResult) {
        const obj9 = { size: "sm", color: apps(575).colors.ICON_SUBTLE };
        tmp9Result = closure_1_4(guildId(12278).RobotIcon, obj9);
      }
      const items1 = [tmp9Result, ,];
      let tmp9Result3 = null;
      if (hasItem) {
        const obj10 = { size: "sm", color: apps(575).colors.ICON_SUBTLE };
        tmp9Result3 = closure_1_4(guildId(19070).WebhookIcon, obj10);
      }
      items1[1] = tmp9Result3;
      let tmp9Result4 = null;
      if (result) {
        const obj11 = { size: "sm", color: apps(575).colors.ICON_SUBTLE };
        tmp9Result4 = closure_1_4(guildId(12151).SlashBoxIcon, obj11);
      }
      items1[2] = tmp9Result4;
      obj8.children = items1;
      const tmpResult = guildId(20007);
      tmp16Result = closure_1_5(guildId(6115).Stack, obj8);
    }),
  });
}
