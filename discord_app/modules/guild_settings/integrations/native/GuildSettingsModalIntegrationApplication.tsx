// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationApplication.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import openGuildSettingsRemoveAppAlertDefault from "openGuildSettingsRemoveAppAlert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1071).Permissions;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  form: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  formContent: null,
  icon: null,
  headerText: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.formContent = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.md };
obj2.icon = size;
obj2.headerText = { flexShrink: 1 };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationApplication.tsx",
);

export default function GuildSettingsModalIntegrationApplication(applicationId) {
  applicationId = applicationId.applicationId;
  let navigation;
  guild = undefined;
  let integration;
  let name;
  const tmp = closure_9();
  navigation = navigation(integration[6]).useNavigation();
  const tmp6 = guild(integration[7])(applicationId);
  guild = tmp6.guild;
  integration = tmp6.integration;
  const isRemoved = tmp6.isRemoved;
  let application;
  if (integration != null) {
    application = integration.application;
  }
  let id;
  let obj = navigation(integration[6]);
  if (guild != null) {
    id = guild.id;
  }
  items = [applicationId];
  const tmp5Result = guild(integration[8]);
  const hasItem = guild(integration[8])(id, items).includes(applicationId);
  const tmp11 = guild(integration[9])(guild, application);
  const tmp5ResultResult = guild(integration[8])(id, items);
  const items1 = [application];
  const items2 = [guild];
  name = undefined;
  const stateFromStores = navigation(integration[10]).useStateFromStores(
    items1,
    () => PermissionStore.can(Permissions.MANAGE_ROLES, guild),
    items2,
  );
  if (application != null) {
    name = application.name;
  }
  const items3 = [name, navigation];
  const layoutEffect = isRemoved.useLayoutEffect(() => {
    if (null != name) {
      const obj = { title: tmp };
      navigation.setOptions(obj);
    }
  }, items3);
  const items4 = [isRemoved, navigation];
  const effect = isRemoved.useEffect(() => {
    if (isRemoved) {
      navigation.goBack();
    }
  }, items4);
  if (null != guild) {
    if (null != integration) {
      if (null != application) {
        let userTag = null;
        if (null != integration.user) {
          userTag = tmp5(tmp3[11]).getUserTag(integration.user);
          const tmp5Result6 = tmp5(tmp3[11]);
        }
        const obj2 = { style: tmp.form, contentContainerStyle: null, children: null };
        const items5 = [tmp.formContent, applicationId.contentContainerStyle];
        obj2.contentContainerStyle = items5;
        const obj3 = { spacing: tmp5(tmp3[5]).space.PX_24, children: null };
        const obj4 = { spacing: tmp5(tmp3[5]).space.PX_16, children: null };
        const obj5 = { direction: "horizontal", align: "center", spacing: tmp5(tmp3[5]).space.PX_16, children: null };
        if (hasItem) {
          const obj6 = { application, size: 48 };
          let tmp19Result = closure_6(tmp5(tmp3[14]), obj6);
        } else {
          const obj7 = { source: null, style: null };
          const tmp5Result7 = tmp5(tmp3[15]);
          ({ id: obj11.id, icon: obj11.icon } = application);
          obj7.source = tmp5(tmp3[16]).getApplicationIconSource({ id: null, icon: null, size: 48 });
          obj7.style = tmp.icon;
          tmp19Result = closure_6(tmp5Result7, obj7);
          const obj8 = { id: null, icon: null, size: 48 };
          const tmp5Result8 = tmp5(tmp3[16]);
        }
        const items6 = [tmp19Result];
        const obj9 = { spacing: tmp5(tmp3[5]).space.PX_4, style: tmp.headerText, children: null };
        const obj10 = { variant: "heading-lg/semibold", children: application.name };
        const items7 = [closure_6(tmp2(tmp3[17]).Text, obj10), ,];
        const obj12 = { direction: "horizontal", align: "center", spacing: tmp5(tmp3[5]).space.PX_4, children: null };
        const obj13 = { size: "xs", color: tmp5(tmp3[5]).colors.ICON_MUTED };
        const items8 = [closure_6(tmp2(tmp3[18]).ClockIcon, obj13)];
        const obj14 = { variant: "body-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(tmp3[19]).intl;
        const obj15 = { timestamp: tmp5(tmp3[20]).extractTimestamp(integration.id) };
        obj14.children = intl.formatToPlainString(tmp2(tmp3[19]).t.gcdJ8J, obj15);
        items8[1] = closure_6(tmp2(tmp3[17]).Text, obj14);
        obj12.children = items8;
        items7[1] = closure_7(tmp2(tmp3[13]).Stack, obj12);
        let tmp17Result = null;
        if (null != userTag) {
          const obj16 = { direction: "horizontal", align: "center", spacing: tmp5(tmp3[5]).space.PX_4, children: null };
          const obj17 = { size: "xs", color: tmp5(tmp3[5]).colors.ICON_MUTED };
          const items9 = [closure_6(tmp2(tmp3[21]).UserIcon, obj17)];
          const obj18 = { variant: "body-sm/medium", color: "text-muted", children: null };
          const intl2 = tmp2(tmp3[19]).intl;
          const obj19 = { user: userTag };
          obj18.children = intl2.formatToPlainString(tmp2(tmp3[19]).t.qE7oqs, obj19);
          items9[1] = closure_6(tmp2(tmp3[17]).Text, obj18);
          obj16.children = items9;
          tmp17Result = closure_7(tmp2(tmp3[13]).Stack, obj16);
        }
        items7[2] = tmp17Result;
        obj9.children = items7;
        items6[1] = closure_7(tmp2(tmp3[13]).Stack, obj9);
        obj5.children = items6;
        const items10 = [closure_7(tmp2(tmp3[13]).Stack, obj5)];
        let tmp19Result3 = null;
        if (null != application.description) {
          tmp19Result3 = null;
          if ("" !== application.description) {
            const obj20 = { bio: application.description, guildId: guild.id, lineClamp: 6 };
            tmp19Result3 = closure_6(tmp5(tmp3[22]), obj20);
          }
        }
        items10[1] = tmp19Result3;
        obj4.children = items10;
        const items11 = [closure_7(tmp2(tmp3[13]).Stack, obj4), , , ,];
        let tmp19Result4 = null;
        if (stateFromStores) {
          const obj21 = { guildId: guild.id, application, hasCommandsScope: null };
          const tmp5Result10 = tmp5(tmp3[23]);
          obj21.hasCommandsScope = tmp2(tmp3[24]).integrationHasCommandsScope(integration);
          tmp19Result4 = closure_6(tmp5Result10, obj21);
          const tmp2Result2 = tmp2(tmp3[24]);
        }
        items11[1] = tmp19Result4;
        const obj22 = { guild, application, integration };
        items11[2] = closure_6(tmp5(tmp3[25]), obj22);
        const obj23 = { guild, applicationId: application.id };
        items11[3] = closure_6(tmp5(tmp3[26]), obj23);
        const intl3 = tmp2(tmp3[19]).intl;
        const string = intl3.string;
        const t = tmp2(tmp3[19]).t;
        if (tmp11) {
          let stringResult = string(t.hdneL4);
        } else {
          stringResult = string(t.xRCMqx);
        }
        const obj24 = { children: null };
        const obj25 = { hasIcons: false, helperText: stringResult, children: null };
        const obj26 = { variant: "danger", label: null, disabled: null, onPress: null };
        const intl4 = tmp2(tmp3[19]).intl;
        obj26.label = intl4.string(tmp2(tmp3[19]).t.ebGf4m);
        obj26.disabled = !tmp11;
        obj26.onPress = function onPress() {
          const obj = { guildId: guild.id, app: { integrationId: integration.id, application, integration } };
          return openGuildSettingsRemoveAppAlertDefault(obj);
        };
        obj25.children = closure_6(tmp2(tmp3[28]).TableRow, obj26);
        items11[4] = closure_6(tmp2(tmp3[27]).TableRowGroup, obj25);
        obj3.children = items11;
        obj2.children = closure_7(tmp2(tmp3[13]).Stack, obj3);
        const items12 = [closure_6(tmp2(tmp3[12]).Form, obj2), closure_6(tmp2(tmp3[30]).NavScrim, {})];
        obj24.children = items12;
        return closure_7(closure_8, obj24);
      }
    }
  }
  return null;
}
