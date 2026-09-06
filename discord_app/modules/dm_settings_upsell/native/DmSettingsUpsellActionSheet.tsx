// discord_app/modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/GuildStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
  container: null,
  headerImage: null,
  title: null,
  body: null,
  guildContainer: null,
  guildInfo: null,
  footer: null,
};
createCacheKey = { paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", width: 73, height: 86 };
createCacheKey[2] = { textAlign: "center", alignSelf: "center", width: 250 };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { paddingVertical: ThemesDefault.space.PX_16 };
let obj1 = { paddingVertical: ThemesDefault.space.PX_16 };
createCacheKey[5] = {
  marginTop: ThemesDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  gap: ThemesDefault.space.PX_12,
  padding: ThemesDefault.space.PX_12,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.md,
};
let obj2 = {
  marginTop: ThemesDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  gap: ThemesDefault.space.PX_12,
  padding: ThemesDefault.space.PX_12,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.md,
};
createCacheKey[6] = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj3 = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default function DmSettingsUpsellActionSheet(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  const tmp = callback3();
  let obj = guildId(504);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(guildId));
  const items1 = [guildId];
  const effect = React.useEffect(() => {
    const result = guildId(closure_1_2[7]).acknowledgeDmSettingsUpsell(guildId);
    const obj = guildId(closure_1_2[7]);
    guildId(closure_1_2[8]).trackEvent(guildId(closure_1_2[8]).DmUpsellActionTypes.MODAL_VIEWED, guildId);
  }, items1);
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { startExpanded: true, children: null };
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { source: null, style: null };
    obj1[0] = stateFromStores(11374);
    obj1[1] = tmp.headerImage;
    const items2 = [callback(closure_5, obj1), , , , , ,];
    let obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
    obj2[2] = tmp.title;
    let intl = tmp2(1114).intl;
    obj2[3] = intl.string(tmp2(1114).t.w2BvnL);
    items2[1] = callback(tmp2(4556).Text, obj2);
    let obj3 = { variant: "text-md/normal", color: "text-default", style: null, children: null };
    obj3[2] = tmp.body;
    const intl2 = tmp2(1114).intl;
    const obj4 = { guild_name: null };
    obj4[0] = stateFromStores.name;
    obj3[3] = intl2.format(tmp2(1114).t.Depjkv, obj4);
    items2[2] = callback(tmp2(4556).Text, obj3);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.guildContainer;
    const obj6 = { variant: "eyebrow", color: "text-default", children: null };
    const intl3 = tmp2(1114).intl;
    obj6[2] = intl3.string(tmp2(1114).t.KPB2iw);
    const items3 = [callback(tmp2(4556).Text, obj6)];
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.guildInfo;
    const obj8 = { guild: null, size: null };
    obj8[0] = stateFromStores;
    obj8[1] = tmp2(5584).GuildIconSizes.SMALL_32;
    const items4 = [callback(stateFromStores(5584), obj8)];
    const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj9[2] = stateFromStores.name;
    items4[1] = callback(tmp2(4556).Text, obj9);
    obj7[1] = items4;
    items3[1] = callback2(closure_4, obj7);
    obj5[1] = items3;
    items2[3] = callback2(closure_4, obj5);
    const obj10 = { size: "lg", onPress: null, text: null };
    obj10[1] = function onPress() {
      const sanitizedRestrictedGuilds = guildId(closure_1_2[15]).getSanitizedRestrictedGuilds();
      sanitizedRestrictedGuilds.add(guildId);
      const RestrictedGuildIds = guildId(closure_1_2[16]).RestrictedGuildIds;
      let obj = guildId(closure_1_2[15]);
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds)).then(() => {
        let obj = callback2(4259);
        obj = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: callback2(9566), content: null };
        const intl = callback(1114).intl;
        obj[2] = intl.string(callback(1114).t.rlYD1W);
        obj.open(obj);
      });
      const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      stateFromStores(closure_1_2[19]).hideActionSheet();
      const obj3 = stateFromStores(closure_1_2[19]);
      guildId(closure_1_2[8]).trackEvent(guildId(closure_1_2[8]).DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
    };
    const intl4 = tmp2(1114).intl;
    obj10[2] = intl4.string(tmp2(1114).t.TD7iUx);
    items2[4] = callback(tmp2(4975).Button, obj10);
    const obj11 = { size: "lg", variant: "secondary", onPress: null, text: null };
    obj11[2] = function onPress() {
      stateFromStores(closure_1_2[19]).hideActionSheet();
      const obj = stateFromStores(closure_1_2[19]);
      guildId(closure_1_2[8]).trackEvent(guildId(closure_1_2[8]).DmUpsellActionTypes.MODAL_DISMISSED, guildId);
    };
    const intl5 = tmp2(1114).intl;
    obj11[3] = intl5.string(tmp2(1114).t.PsWbcp);
    items2[5] = callback(tmp2(4975).Button, obj11);
    const obj12 = { variant: "text-xs/normal", style: null, children: null };
    obj12[1] = tmp.footer;
    const intl6 = tmp2(1114).intl;
    const obj13 = { onClick: null };
    obj13[0] = function onClick() {
      if (null != stateFromStores) {
        stateFromStores(closure_1_2[19]).hideActionSheet();
        stateFromStores(closure_1_2[20])(tmp);
        const obj = stateFromStores(closure_1_2[19]);
        guildId(closure_1_2[8]).trackEvent(
          guildId(closure_1_2[8]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
          guildId,
        );
        const obj2 = guildId(closure_1_2[8]);
      }
    };
    obj12[2] = intl6.format(tmp2(1114).t.IzZxXW, obj13);
    items2[6] = callback(tmp2(4556).Text, obj12);
    obj[1] = items2;
    obj[1] = callback2(closure_4, obj);
    tmp6 = callback(tmp2(7198).ActionSheet, obj);
    const tmp12 = stateFromStores(5584);
  }
  return tmp6;
}
