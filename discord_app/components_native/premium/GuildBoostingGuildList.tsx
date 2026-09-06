// discord_app/components_native/premium/GuildBoostingGuildList.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useGuildPowerupsBoostCountDefault from "../../modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx";
import UserSettingsModalActionCreatorsDefault from "../../actions/UserSettingsModalActionCreators.tsx";
import transitionToGuild from "../../modules/routing/transitionToGuild.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";

require = fn;
function GuildBoostingGuildListItem(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_10();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  useGuildPowerupsBoostCountDefault;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    obj = {
      style: tmp.guildCard,
      activeOpacity: 0.5,
      accessibilityRole: "button",
      onPress() {
        transitionToGuild.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
        UserSettingsModalActionCreatorsDefault.close();
      },
      children: null,
    };
    tmp2(9050);
    obj = { guild: stateFromStores, size: null, style: null, selected: false };
    const tmp2Result = tmp2(5584);
    obj.size = tmp5(5584).GuildIconSizes.LARGE;
    obj.style = tmp.guildIcon;
    const items1 = [closure_8(tmp2Result, obj), ,];
    const obj1 = { style: tmp.guildCardDescription, children: null };
    const obj2 = { variant: "text-md/bold", children: stateFromStores.name };
    const items2 = [closure_8(tmp5(4556).Text, obj2)];
    const obj3 = { style: tmp.subscriptionInfo, children: null };
    const obj4 = { source: tmp2(10410), style: tmp.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
    const items3 = [closure_8(closure_4, obj4)];
    const obj5 = { variant: "text-xs/medium", children: null };
    const intl = tmp5(1114).intl;
    const obj6 = { subscriberCount: tmp8 };
    obj5.children = intl.format(tmp5(1114).t.If4iTS, obj6);
    items3[1] = closure_8(tmp5(4556).Text, obj5);
    obj3.children = items3;
    items2[1] = closure_9(closure_3, obj3);
    obj1.children = items2;
    items1[1] = closure_9(closure_3, obj1);
    const obj7 = { guild: stateFromStores, theme: tmp4 };
    items1[2] = closure_8(tmp2(13507), obj7);
    obj.children = items1;
    tmp9 = closure_9(tmp2Result, obj);
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
let closure_7 = fn(1074).NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = {
  guildCard: null,
  guildIcon: null,
  guildCardDescription: null,
  subscriptionInfo: null,
  premiumGuildImage: null,
};
createStyles = {
  padding: 12,
  paddingLeft: 16,
  borderRadius: nativeDefault.radii.xs,
  marginBottom: 8,
  minHeight: 96,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
createStyles.guildCard = createStyles;
createStyles.guildIcon = { marginRight: 16 };
createStyles.guildCardDescription = { flex: 1 };
createStyles.subscriptionInfo = { flexDirection: "row", alignItems: "center" };
createStyles.premiumGuildImage = { width: 18, height: 12, marginLeft: -5 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default function GuildBoostingGuildList(guildCount) {
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_7;
  }
  let obj = initialize;
  const items = [SortedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  obj = { style: guildCount.style, children: null };
  const substr = stateFromStores.slice(0, guildCount);
  obj.children = substr.map((guildId) => closure_1_8(GuildBoostingGuildListItem, { guildId }, guildId));
  return React6(React3, obj);
}
