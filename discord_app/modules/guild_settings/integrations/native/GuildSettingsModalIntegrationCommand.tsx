// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationCommand.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import useGuildSettingsAppIntegrationDefault from "../useGuildSettingsAppIntegration.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import IntegrationPermissionStore from "../permission/IntegrationPermissionStore.tsx";

require = fn;
function CommandPermissions(guildId) {
  guildId = guildId.guildId;
  ({ application, command } = guildId);
  let id;
  let originalApplicationPermissions;
  let editedTargetPermissions;
  let hasChanges;
  let first;
  closure_10 = undefined;
  c11 = undefined;
  let callback;
  const tmp = callback();
  const navigation = guildId(id[8]).useNavigation();
  id = application.id;
  const id2 = command.id;
  const bot = application.bot;
  let id1;
  if (bot != null) {
    id1 = bot.id;
  }
  let obj = guildId(id[8]);
  items = [editedTargetPermissions];
  const items1 = [id1, guildId];
  const stateFromStores = guildId(id[9]).useStateFromStores(
    items,
    () => {
      let member = null;
      if (null != id1) {
        member = GuildMemberStore.getMember(guildId, tmp);
      }
      return member;
    },
    items1,
  );
  const tmp8 = command(id[10])(guildId, id, id2);
  originalApplicationPermissions = tmp8.originalApplicationPermissions;
  editedTargetPermissions = tmp8.editedTargetPermissions;
  hasChanges = tmp8.hasChanges;
  ({ originalCommandPermissions, selectedPermissionCount } = tmp8);
  const tmp9 = id1(originalApplicationPermissions.useState(false), 2);
  first = tmp9[0];
  closure_10 = tmp9[1];
  const tmp2Result = guildId(id[9]);
  [obj3, c11] = id1(originalApplicationPermissions.useState(null), 2);
  const items2 = [id2];
  const effect = originalApplicationPermissions.useEffect(
    () => () => {
      navigation(id[11]).resetPermissions(id2);
      const obj = navigation(id[11]);
      const result = command(id[12]).stopEditingCommandPermissions(id2);
    },
    items2,
  );
  const items3 = [id, command, editedTargetPermissions, guildId, navigation, originalApplicationPermissions];
  callback = originalApplicationPermissions.useCallback(
    id2(function* () {
      _undefined(null);
      closure_10(true);
      yield tmp26(20071).saveCommandPermissions({
        applicationId: id,
        command,
        editedPermissions: editedTargetPermissions,
        guildId,
        originalApplicationPermissions,
      });
      if (1 === tmp7) {
        dependencyMap = 0;
        closure_128_0 = tmp26;
        closure_129_11(new tmp3(5793)(closure_128_0));
        closure_129_10(false);
        c5 = 3;
        new tmp3(5793)(closure_128_0);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_2.goBack();
        dependencyMap = 0;
      }
      return value;
    }),
    items3,
  );
  const items4 = [hasChanges, navigation, callback, first];
  const layoutEffect = originalApplicationPermissions.useLayoutEffect(() => {
    if (first) {
      let fn = () => null;
    } else {
      fn = NavigatorHeader.getHeaderConditionalBackButton(() => command(id[15])(hasChanges));
    }
    const obj2 = { headerLeft: fn, gestureEnabled: null, headerRight: null };
    let tmp5 = !hasChanges;
    if (!hasChanges) {
      tmp5 = !first;
    }
    obj2.gestureEnabled = tmp5;
    obj2.headerRight = function headerRight() {
      if (closure_1_9) {
        let tmp2 = first(guildId(id[14]).HeaderSubmittingIndicator, {});
      } else {
        tmp2 = null;
        if (hasChanges) {
          const obj = { text: null, onPress: null };
          const intl = guildId(id[17]).intl;
          obj.text = intl.string(guildId(id[17]).t["R3BPH+"]);
          obj.onPress = onPress;
          tmp2 = first(guildId(id[16]).HeaderActionButton, obj);
        }
      }
      return tmp2;
    };
    navigation.setOptions(obj2);
  }, items4);
  let obj2 = { style: tmp.form, contentContainerStyle: null, children: null };
  const items5 = [tmp.formContent, guildId.contentContainerStyle];
  obj2.contentContainerStyle = items5;
  const obj4 = { spacing: command(id[7]).space.PX_24, children: null };
  const obj5 = { direction: "horizontal", align: "center", spacing: command(id[7]).space.PX_16, children: null };
  const tmp11 = id1(originalApplicationPermissions.useState(null), 2);
  const tmp16 = c11;
  const tmp18 = command(id[20]);
  const obj6 = { id: application.id, icon: application.icon, guildMember: stateFromStores, bot: null, size: 40 };
  let bot1;
  if (command.type !== guildId(id[22]).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    bot1 = application.bot;
  }
  const obj7 = command(id[21]);
  obj6.bot = bot1;
  const items6 = [first(tmp18, { source: command(id[21]).getApplicationIconSource(obj6), style: tmp.icon })];
  const obj9 = { spacing: command(id[7]).space.PX_4, style: tmp.headerText, children: null };
  const obj10 = { variant: "body-md/semibold", children: null };
  const obj8 = { source: command(id[21]).getApplicationIconSource(obj6), style: tmp.icon };
  obj10.children = guildId(id[24]).commandName(command.type, command.displayName);
  const items7 = [first(guildId(id[23]).Text, obj10)];
  let tmp17Result = null;
  if ("" !== command.displayDescription) {
    const obj11 = { variant: "body-sm/normal", color: "text-muted", children: command.displayDescription };
    tmp17Result = tmp17(tmp2(tmp3[23]).Text, obj11);
  }
  items7[1] = tmp17Result;
  obj9.children = items7;
  items6[1] = closure_10(guildId(id[19]).Stack, obj9);
  obj5.children = items6;
  const items8 = [closure_10(guildId(id[19]).Stack, obj5), ,];
  let tmp17Result2 = null;
  if (null != obj3) {
    tmp17Result2 = null;
    if (!obj3.hasFieldErrors()) {
      const obj12 = { type: "critical", message: obj3.getAnyErrorMessage(), role: "alert" };
      tmp17Result2 = tmp17(tmp2(tmp3[25]).InlineNotice, obj12);
    }
  }
  const obj13 = { children: null };
  items8[1] = tmp17Result2;
  items8[2] = first(command(id[26]), {
    applicationId: id,
    commandId: id2,
    guildId,
    editedTargetPermissions,
    originalApplicationPermissions,
    originalCommandPermissions,
    selectedPermissionCount,
  });
  obj4.children = items8;
  obj2.children = closure_10(guildId(id[19]).Stack, obj4);
  const items9 = [first(guildId(id[18]).Form, obj2), first(guildId(id[27]).NavScrim, {})];
  obj13.children = items9;
  return closure_10(tmp16, obj13);
}
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  form: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  formContent: null,
  icon: null,
  headerText: null,
};
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.formContent = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md };
obj2.icon = size;
obj2.headerText = { flexShrink: 1 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationCommand.tsx",
);

export default function GuildSettingsModalIntegrationCommand(commandId) {
  commandId = commandId.commandId;
  const merged = Object.assign(commandId, Object.assign({ applicationId: 0, commandId: 0 }));
  ({ guild, integration } = useGuildSettingsAppIntegrationDefault(commandId.applicationId));
  if (integration != null) {
    const application = integration.application;
  }
  const tmp3 = useGuildSettingsAppIntegrationDefault(commandId.applicationId);
  items = [IntegrationPermissionStore];
  const items1 = [commandId];
  const stateFromStores = commandId(504).useStateFromStores(
    items,
    () => IntegrationPermissionStore.getCommand(commandId),
    items1,
  );
  let tmp5 = null;
  if (null != guild) {
    tmp5 = null;
    if (null != application) {
      tmp5 = null;
      if (null != stateFromStores) {
        const obj2 = {};
        const merged1 = Object.assign(merged);
        obj2.guildId = guild.id;
        obj2.application = application;
        obj2.command = stateFromStores;
        tmp5 = closure_9(CommandPermissions, obj2);
      }
    }
  }
  return tmp5;
}
