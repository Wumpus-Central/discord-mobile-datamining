// discord_app/components_native/premium/GuildBoostingGuildList.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useGuildPowerupsBoostCountDefault from "../../modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import GuildIconDefault from "../../modules/guild/native/GuildIcon.tsx";
import UserSettingsModalActionCreatorsDefault from "../../actions/UserSettingsModalActionCreators.tsx";
import transitionToGuild from "../../modules/routing/transitionToGuild.native.tsx";
import TouchableHitBoxDefault from "../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import _modDef10550 from "../../../_runtime/metro/10550__.js";
import BoostedGuildTierProgressCircleDefault from "../../modules/premium/native/BoostedGuildTierProgressCircle.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";

require = fn;
function GuildBoostingGuildListItem(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_10();
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
      onPress() {
        transitionToGuild.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
        UserSettingsModalActionCreatorsDefault.close();
      },
      children: null,
    };
    const obj3 = { guild: stateFromStores, size: null, style: null, selected: false };
    const tmp2Result = TouchableHitBoxDefault;
    obj3.size = tmp5(5670).GuildIconSizes.LARGE;
    obj3.style = tmp.guildIcon;
    const items1 = [closure_8(GuildIconDefault, obj3), ,];
    const obj4 = { style: tmp.guildCardDescription, children: null };
    const obj5 = { variant: "text-md/bold", children: stateFromStores.name };
    const items2 = [closure_8(tmp5(4634).Text, obj5)];
    const obj6 = { style: tmp.subscriptionInfo, children: null };
    const obj7 = { source: _modDef10550, style: tmp.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
    const items3 = [closure_8(closure_4, obj7)];
    const obj8 = { variant: "text-xs/medium", children: null };
    const intl = tmp5(1115).intl;
    const obj9 = { subscriberCount: tmp8 };
    obj8.children = intl.format(tmp5(1115).t.If4iTS, obj9);
    items3[1] = closure_8(tmp5(4634).Text, obj8);
    obj6.children = items3;
    items2[1] = closure_9(closure_3, obj6);
    obj4.children = items2;
    items1[1] = closure_9(closure_3, obj4);
    const obj10 = { guild: stateFromStores, theme: tmp4 };
    items1[2] = closure_8(BoostedGuildTierProgressCircleDefault, obj10);
    obj2.children = items1;
    tmp9 = closure_9(tmp2Result, obj2);
    const tmp2Result2 = GuildIconDefault;
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
let closure_7 = fn(1074).NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4638);
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
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default function GuildBoostingGuildList(guildCount) {
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_7;
  }
  const items = [SortedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj2 = { style: guildCount.style, children: null };
  const substr = stateFromStores.slice(0, guildCount);
  obj2.children = substr.map((guildId) => closure_1_8(GuildBoostingGuildListItem, { guildId }, guildId));
  return React6(React3, obj2);
}
