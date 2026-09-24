// === Module 17869: DmSettingsUpsellActionSheet ===

// Module 17869 (DmSettingsUpsellActionSheet)
import nativeDefault from "native" /* 576 */;
import UserSettings from "UserSettings" /* 2020 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7328 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 14274 */;
import DmSettingsUpsellManager from "DmSettingsUpsellManager" /* 17866 */;
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils" /* 17870 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 }, headerImage: { alignSelf: "center", width: 73, height: 86 }, title: { textAlign: "center", alignSelf: "center", width: 250 }, body: { textAlign: "center" }, guildContainer: null, guildInfo: null, footer: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.guildContainer = { paddingVertical: nativeDefault.space.PX_16 };
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
obj2.guildInfo = { marginTop: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
let obj5 = { marginTop: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
obj2.footer = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default function DmSettingsUpsellActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_9();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [guildId];
  const effect = noop.useEffect(() => {
    const result = DmSettingsUpsellManager.acknowledgeDmSettingsUpsell(guildId);
    DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
  }, items1);
  let tmp6 = null;
  if (null != stateFromStores) {
    let obj2 = { startExpanded: true, children: null };
    let obj3 = { style: tmp.container, children: null };
    const obj4 = { source: stateFromStores(11723), style: tmp.headerImage };
    const items2 = [closure_7(closure_5, obj4), , , , , , ];
    const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
    let intl = tmp2(1115).intl;
    obj5.children = intl.string(tmp2(1115).t.w2BvnL);
    items2[1] = closure_7(tmp2(4825).Text, obj5);
    const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: null };
    const intl2 = tmp2(1115).intl;
    const obj7 = { guild_name: stateFromStores.name };
    obj6.children = intl2.format(tmp2(1115).t.Depjkv, obj7);
    items2[2] = closure_7(tmp2(4825).Text, obj6);
    const obj8 = { style: tmp.guildContainer, children: null };
    const obj9 = { variant: "eyebrow", color: "text-default", children: null };
    const intl3 = tmp2(1115).intl;
    obj9.children = intl3.string(tmp2(1115).t.KPB2iw);
    const items3 = [closure_7(tmp2(4825).Text, obj9), ];
    const obj10 = { style: tmp.guildInfo, children: null };
    const obj11 = { guild: stateFromStores, size: tmp2(5889).GuildIconSizes.SMALL_32 };
    const items4 = [closure_7(stateFromStores(5889), obj11), ];
    const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
    items4[1] = closure_7(tmp2(4825).Text, obj12);
    obj10.children = items4;
    items3[1] = closure_8(closure_4, obj10);
    obj8.children = items3;
    items2[3] = closure_8(closure_4, obj8);
    const obj13 = {
      size: "lg",
      onPress() {
          const sanitizedRestrictedGuilds = UserSettingsUtils.getSanitizedRestrictedGuilds();
          sanitizedRestrictedGuilds.add(guildId);
          const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
          RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds)).then(() => {
            const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(9704), content: null };
            const intl = guildId(1115).intl;
            obj2.content = intl.string(guildId(1115).t.rlYD1W);
            stateFromStores(4523).open(obj2);
          });
          const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
          ActionSheetActionCreatorsDefault.hideActionSheet();
          DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
        },
      text: null
    };
    const intl4 = tmp2(1115).intl;
    obj13.text = intl4.string(tmp2(1115).t.TD7iUx);
    items2[4] = closure_7(tmp2(5273).Button, obj13);
    const obj14 = {
      size: "lg",
      variant: "secondary",
      onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
        },
      text: null
    };
    const intl5 = tmp2(1115).intl;
    obj14.text = intl5.string(tmp2(1115).t.PsWbcp);
    items2[5] = closure_7(tmp2(5273).Button, obj14);
    const obj15 = { variant: "text-xs/normal", style: tmp.footer, children: null };
    const intl6 = tmp2(1115).intl;
    const obj16 = {
      onClick() {
          if (null != stateFromStores) {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            openGuildActionSheetDefault(tmp);
            DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
          }
        }
    };
    obj15.children = intl6.format(tmp2(1115).t.IzZxXW, obj16);
    items2[6] = closure_7(tmp2(4825).Text, obj15);
    obj3.children = items2;
    obj2.children = closure_8(closure_4, obj3);
    tmp6 = closure_7(tmp2(7530).ActionSheet, obj2);
    const tmp12 = stateFromStores(5889);
  }
  return tmp6;
};