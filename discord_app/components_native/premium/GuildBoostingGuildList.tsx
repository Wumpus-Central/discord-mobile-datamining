// discord_app/components_native/premium/GuildBoostingGuildList.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import FastImageDefault from "../common/FastImage.tsx";
import GuildIconDefault from "../../modules/guild/native/GuildIcon.tsx";
import UserSettingsModalActionCreatorsDefault from "../../actions/UserSettingsModalActionCreators.tsx";
import transitionToGuild from "../../modules/routing/transitionToGuild.native.tsx";
import useGuildPowerupsBoostCountDefault from "../../modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx";
import TouchableHitBoxDefault from "../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import _modDef10274 from "../../../_runtime/metro/10274__.js";
import BoostedGuildTierProgressCircleDefault from "../../modules/premium/native/BoostedGuildTierProgressCircle.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";

require = fn;
function GuildBoostingGuildListItem(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_9();
  const tmp4 = useThemeDefault();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  useGuildPowerupsBoostCountDefault;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj2 = {
      style: tmp.guildCard,
      activeOpacity: 0.5,
      accessibilityRole: "button",
      onPress: function handleSelectGuild() {
        transitionToGuild.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
        UserSettingsModalActionCreatorsDefault.close();
      },
      children: null,
    };
    const obj3 = { guild: stateFromStores, size: null, style: null, selected: false };
    const tmp2Result = TouchableHitBoxDefault;
    obj3.size = tmp5(6951).GuildIconSizes.LARGE;
    obj3.style = tmp.guildIcon;
    const items1 = [closure_7(GuildIconDefault, obj3), ,];
    const obj4 = { style: tmp.guildCardDescription, children: null };
    const obj5 = { variant: "text-md/bold", children: stateFromStores.name };
    const items2 = [closure_7(tmp5(5619).Text, obj5)];
    const obj6 = { style: tmp.subscriptionInfo, children: null };
    const obj7 = { source: null, style: null, resizeMode: "contain", resizeMethod: "resize" };
    const tmp2Result3 = GuildIconDefault;
    obj7.source = _modDef10274;
    obj7.style = tmp.premiumGuildImage;
    const items3 = [closure_7(FastImageDefault, obj7)];
    const obj8 = { variant: "text-xs/medium", children: null };
    const intl = tmp5(1114).intl;
    const obj9 = { subscriberCount: tmp8 };
    obj8.children = intl.format(tmp5(1114).t.If4iTS, obj9);
    items3[1] = closure_7(tmp5(5619).Text, obj8);
    obj6.children = items3;
    items2[1] = closure_8(View, obj6);
    obj4.children = items2;
    items1[1] = closure_8(View, obj4);
    const obj10 = { guild: stateFromStores, theme: tmp4 };
    items1[2] = closure_7(BoostedGuildTierProgressCircleDefault, obj10);
    obj2.children = items1;
    tmp9 = closure_8(tmp2Result, obj2);
    const tmp2Result4 = FastImageDefault;
  }
  return tmp9;
}
const View = fn(17).View;
let closure_6 = fn(1072).NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  guildCard: {
    padding: 12,
    paddingLeft: 16,
    borderRadius: nativeDefault.radii.xs,
    marginBottom: 8,
    minHeight: 96,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  },
  guildIcon: { marginRight: 16 },
  guildCardDescription: { flex: 1 },
  subscriptionInfo: { flexDirection: "row", alignItems: "center" },
  premiumGuildImage: { width: 18, height: 12, marginLeft: -5 },
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default function GuildBoostingGuildList(guildCount) {
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_6;
  }
  const items = [SortedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj2 = { style: guildCount.style, children: null };
  const substr = stateFromStores.slice(0, guildCount);
  obj2.children = substr.map((guildId) => closure_1_7(GuildBoostingGuildListItem, { guildId }, guildId));
  return React5(View, obj2);
}
