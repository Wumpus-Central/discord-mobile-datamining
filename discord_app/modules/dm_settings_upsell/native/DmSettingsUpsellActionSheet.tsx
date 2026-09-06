// discord_app/modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import openGuildActionSheetDefault from "../../guild_action_sheet/native/openGuildActionSheet.tsx";
import DmSettingsUpsellManager from "../DmSettingsUpsellManager.tsx";
import DmSettingsUpsellUtils from "../DmSettingsUpsellUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  headerImage: null,
  title: null,
  body: null,
  guildContainer: null,
  guildInfo: null,
  footer: null,
};
createStyles = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.headerImage = { alignSelf: "center", width: 73, height: 86 };
createStyles.title = { textAlign: "center", alignSelf: "center", width: 250 };
createStyles.body = { textAlign: "center" };
createStyles.guildContainer = { paddingVertical: nativeDefault.space.PX_16 };
let obj1 = { paddingVertical: nativeDefault.space.PX_16 };
createStyles.guildInfo = {
  marginTop: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.md,
};
let obj2 = {
  marginTop: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.md,
};
createStyles.footer = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default function DmSettingsUpsellActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_9();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [guildId];
  const effect = noop.useEffect(() => {
    const result = DmSettingsUpsellManager.acknowledgeDmSettingsUpsell(guildId);
    DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
  }, items1);
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { startExpanded: true, children: null };
    obj = { style: tmp.container, children: null };
    const obj1 = { source: stateFromStores(11374), style: tmp.headerImage };
    const items2 = [closure_7(closure_5, obj1), , , , , ,];
    let obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
    let intl = tmp2(1114).intl;
    obj2.children = intl.string(tmp2(1114).t.w2BvnL);
    items2[1] = closure_7(tmp2(4556).Text, obj2);
    let obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: null };
    const intl2 = tmp2(1114).intl;
    const obj4 = { guild_name: stateFromStores.name };
    obj3.children = intl2.format(tmp2(1114).t.Depjkv, obj4);
    items2[2] = closure_7(tmp2(4556).Text, obj3);
    const obj5 = { style: tmp.guildContainer, children: null };
    const obj6 = { variant: "eyebrow", color: "text-default", children: null };
    const intl3 = tmp2(1114).intl;
    obj6.children = intl3.string(tmp2(1114).t.KPB2iw);
    const items3 = [closure_7(tmp2(4556).Text, obj6)];
    const obj7 = { style: tmp.guildInfo, children: null };
    const obj8 = { guild: stateFromStores, size: tmp2(5584).GuildIconSizes.SMALL_32 };
    const items4 = [closure_7(stateFromStores(5584), obj8)];
    const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
    items4[1] = closure_7(tmp2(4556).Text, obj9);
    obj7.children = items4;
    items3[1] = closure_8(closure_4, obj7);
    obj5.children = items3;
    items2[3] = closure_8(closure_4, obj5);
    const obj10 = {
      size: "lg",
      onPress() {
        const sanitizedRestrictedGuilds = UserSettingsUtils.getSanitizedRestrictedGuilds();
        sanitizedRestrictedGuilds.add(guildId);
        const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
        RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds)).then(() => {
          stateFromStores(4259);
          const obj = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(9566), content: null };
          const intl = guildId(1114).intl;
          obj.content = intl.string(guildId(1114).t.rlYD1W);
          obj.open(obj);
        });
        const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
        ActionSheetActionCreatorsDefault.hideActionSheet();
        DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
      },
      text: null,
    };
    const intl4 = tmp2(1114).intl;
    obj10.text = intl4.string(tmp2(1114).t.TD7iUx);
    items2[4] = closure_7(tmp2(4975).Button, obj10);
    const obj11 = {
      size: "lg",
      variant: "secondary",
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
      },
      text: null,
    };
    const intl5 = tmp2(1114).intl;
    obj11.text = intl5.string(tmp2(1114).t.PsWbcp);
    items2[5] = closure_7(tmp2(4975).Button, obj11);
    const obj12 = { variant: "text-xs/normal", style: tmp.footer, children: null };
    const intl6 = tmp2(1114).intl;
    const obj13 = {
      onClick() {
        if (null != stateFromStores) {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          openGuildActionSheetDefault(tmp);
          DmSettingsUpsellUtils.trackEvent(
            DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
            guildId,
          );
        }
      },
    };
    obj12.children = intl6.format(tmp2(1114).t.IzZxXW, obj13);
    items2[6] = closure_7(tmp2(4556).Text, obj12);
    obj.children = items2;
    obj.children = closure_8(closure_4, obj);
    tmp6 = closure_7(tmp2(7198).ActionSheet, obj);
    const tmp12 = stateFromStores(5584);
  }
  return tmp6;
}
