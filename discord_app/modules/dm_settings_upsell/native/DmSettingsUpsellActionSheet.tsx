// discord_app/modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", width: 73, height: 86 };
createCacheKey[2] = { textAlign: "center", alignSelf: "center", width: 250 };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { paddingVertical: ThemesDefault.space.PX_16 };
createCacheKey[5] = { marginTop: ThemesDefault.space.PX_4, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12, padding: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.md };
createCacheKey[6] = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default function DmSettingsUpsellActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp = callback3();
  let obj = guildId(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(guildId));
  const items1 = [guildId];
  const effect = React.useEffect(() => {
    const result = guildId(dependencyMap[7]).acknowledgeDmSettingsUpsell(guildId);
    const obj = guildId(dependencyMap[7]);
    guildId(dependencyMap[8]).trackEvent(guildId(dependencyMap[8]).DmUpsellActionTypes.MODAL_VIEWED, guildId);
  }, items1);
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { source: null, style: null };
    obj1[0] = stateFromStores(10586);
    obj1[1] = tmp.headerImage;
    const items2 = [callback(closure_5, obj1), , , , , , ];
    let obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
    obj2[2] = tmp.title;
    let intl = tmp2(1236).intl;
    obj2[3] = intl.string(tmp2(1236).t.w2BvnL);
    items2[1] = callback(tmp2(4734).Text, obj2);
    let obj3 = { variant: "text-md/normal", color: "text-default", style: null, children: null };
    obj3[2] = tmp.body;
    const intl2 = tmp2(1236).intl;
    const obj4 = { guild_name: null };
    obj4[0] = stateFromStores.name;
    obj3[3] = intl2.format(tmp2(1236).t.Depjkv, obj4);
    items2[2] = callback(tmp2(4734).Text, obj3);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.guildContainer;
    const obj6 = { variant: "eyebrow", color: "text-default", children: null };
    const intl3 = tmp2(1236).intl;
    obj6[2] = intl3.string(tmp2(1236).t.KPB2iw);
    const items3 = [callback(tmp2(4734).Text, obj6), ];
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.guildInfo;
    const obj8 = { guild: null, size: null };
    obj8[0] = stateFromStores;
    obj8[1] = tmp2(7188).GuildIconSizes.SMALL_32;
    const items4 = [callback(stateFromStores(7188), obj8), ];
    const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj9[2] = stateFromStores.name;
    items4[1] = callback(tmp2(4734).Text, obj9);
    obj7[1] = items4;
    items3[1] = callback2(closure_4, obj7);
    obj5[1] = items3;
    items2[3] = callback2(closure_4, obj5);
    const obj10 = { size: "lg", onPress: null, text: null };
    obj10[1] = function onPress() {
      const sanitizedRestrictedGuilds = guildId(dependencyMap[15]).getSanitizedRestrictedGuilds();
      sanitizedRestrictedGuilds.add(guildId);
      const RestrictedGuildIds = guildId(dependencyMap[16]).RestrictedGuildIds;
      let obj = guildId(dependencyMap[15]);
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds)).then((result) => {
        callback2(4094);
        const obj = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: callback2(8764), content: null };
        const intl = callback(1236).intl;
        obj[2] = intl.string(callback(1236).t.rlYD1W);
        obj.open(obj);
      });
      const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      stateFromStores(dependencyMap[19]).hideActionSheet();
      const obj3 = stateFromStores(dependencyMap[19]);
      guildId(dependencyMap[8]).trackEvent(guildId(dependencyMap[8]).DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
    };
    const intl4 = tmp2(1236).intl;
    obj10[2] = intl4.string(tmp2(1236).t.TD7iUx);
    items2[4] = callback(tmp2(4745).Button, obj10);
    const obj11 = { size: "lg", variant: "secondary", onPress: null, text: null };
    obj11[2] = function onPress() {
      stateFromStores(dependencyMap[19]).hideActionSheet();
      const obj = stateFromStores(dependencyMap[19]);
      guildId(dependencyMap[8]).trackEvent(guildId(dependencyMap[8]).DmUpsellActionTypes.MODAL_DISMISSED, guildId);
    };
    const intl5 = tmp2(1236).intl;
    obj11[3] = intl5.string(tmp2(1236).t.PsWbcp);
    items2[5] = callback(tmp2(4745).Button, obj11);
    const obj12 = { variant: "text-xs/normal", style: null, children: null };
    obj12[1] = tmp.footer;
    const intl6 = tmp2(1236).intl;
    const obj13 = { onClick: null };
    obj13[0] = function onClick() {
      if (null != stateFromStores) {
        stateFromStores(dependencyMap[19]).hideActionSheet();
        stateFromStores(dependencyMap[20])(tmp);
        const obj = stateFromStores(dependencyMap[19]);
        guildId(dependencyMap[8]).trackEvent(guildId(dependencyMap[8]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
        const obj2 = guildId(dependencyMap[8]);
      }
    };
    obj12[2] = intl6.format(tmp2(1236).t.IzZxXW, obj13);
    items2[6] = callback(tmp2(4734).Text, obj12);
    obj[1] = items2;
    obj[1] = callback2(closure_4, obj);
    tmp6 = callback(tmp2(7175).ActionSheet, obj);
    const tmp12 = stateFromStores(7188);
  }
  return tmp6;
};