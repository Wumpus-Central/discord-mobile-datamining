// discord_app/components_native/premium/GuildBoostingUpsell.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import shared from "../../design/shared.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import ReactionIcon from "../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import UploadIcon from "../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import BoostGemIcon from "../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import PremiumFeatureListDefault from "PremiumFeatureList.tsx";
import ShieldUserIcon from "../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import StickerIcon from "../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import StarIcon from "../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import HeadphonesIcon from "../../design/components/Icon/native/redesign/generated/HeadphonesIcon.tsx";
import _modDef12888 from "../../../_runtime/metro/12888__.js";
import _modDef12897 from "../../../_runtime/metro/12897__.js";
import _modDef12898 from "../../../_runtime/metro/12898__.js";
import useSubscriptionPlansLoaded from "../../modules/billing/hooks/useSubscriptionPlansLoaded.tsx";
import _modDef13025 from "../../../_runtime/metro/13025__.js";
import _modDef13047 from "../../../_runtime/metro/13047__.js";
import BoostTier3Icon from "../../design/components/Icon/native/redesign/generated/BoostTier3Icon.tsx";
import _modDef13050 from "../../../_runtime/metro/13050__.js";
import _modDef13051 from "../../../_runtime/metro/13051__.js";
import _modDef13052 from "../../../_runtime/metro/13052__.js";
import _modDef13053 from "../../../_runtime/metro/13053__.js";
import _modDef13054 from "../../../_runtime/metro/13054__.js";
import _modDef13055 from "../../../_runtime/metro/13055__.js";
import GuildSubscriptionNoGuilds from "../../design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx";
import PremiumSubscriptionPricingUpsellDefault from "PremiumSubscriptionPricingUpsell.tsx";
import GuildBoostingGuildListDefault from "GuildBoostingGuildList.tsx";
import PremiumSubscriptionUpsellDefault from "PremiumSubscriptionUpsell.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const FractionalPremiumStates = fn(1374).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  root: { paddingHorizontal: 16, paddingVertical: 32 },
  title: { marginTop: 16 },
  features: { marginTop: 16 },
  cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" },
  guildList: { marginTop: 16 },
  logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 },
  imgPremiumGuild: { width: 95, height: 65 },
  imgNoGuilds: { width: 178, height: 112, marginTop: 32 },
  header: { alignItems: "center" },
  upsell: {
    marginTop: 32,
    paddingTop: 16,
    borderTopWidth: 2 * StyleSheet.hairlineWidth,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  subscriptionUpsell: { marginTop: 32 },
};
let closure_9 = createStyles.createStyles(obj2);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    obj = { icon: closure_1(closure_2[7]), label: null, IconComponent: null, color: null };
    intl = closure_0(closure_2[8]).intl;
    obj.label = intl.string(closure_0(closure_2[8]).t["GS+bL0"]);
    obj.IconComponent = closure_0(closure_2[9]).BoostGemIcon;
    obj.color = closure_1(closure_2[6]).unsafe_rawColors.GUILD_BOOSTING_PINK;
    items = [, ,];
    items[0] = obj;
    obj1 = { icon: closure_1(closure_2[10]), label: null, IconComponent: null };
    intl2 = closure_0(closure_2[8]).intl;
    obj1.label = intl2.string(closure_0(closure_2[8]).t.a7LWeM);
    obj1.IconComponent = function IconComponent(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.color = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
      return closure_1_7(BoostTier3Icon.BoostTier3Icon, obj);
    };
    items[1] = obj1;
    obj4 = { icon: closure_1(closure_2[12]), label: null, color: null, IconComponent: null };
    intl3 = closure_0(closure_2[8]).intl;
    obj4.label = intl3.string(closure_0(closure_2[8]).t.E76jz8);
    obj4.color = closure_1(closure_2[6]).unsafe_rawColors.YELLOW_300;
    obj4.IconComponent = closure_0(closure_2[13]).ShieldUserIcon;
    items[2] = obj4;
    return items;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default function GuildBoostingUpsell(arg0) {
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = closure_9();
  const items = [SortedGuildStore];
  const stateFromStores = initialize.useStateFromStores(
    items,
    () => flattenedGuildIds.getFlattenedGuildIds().length > 0,
  );
  const subscriptionPlansLoaded = useSubscriptionPlansLoaded.useSubscriptionPlansLoaded();
  const guildSubscriptionNoGuildsSource = GuildSubscriptionNoGuilds.useGuildSubscriptionNoGuildsSource();
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      let tmp11Result = null;
    }
    return tmp11Result;
  }
  const obj4 = { style: tmp.root, children: null };
  const obj5 = { style: tmp.header, children: null };
  const tmp8 = useThemeDefault();
  const items1 = [React5(React4, { style: tmp.imgPremiumGuild, source: _modDef12888 }), , ,];
  const obj7 = { style: tmp.logoPremiumGuild, source: null };
  const obj6 = { style: tmp.imgPremiumGuild, source: _modDef12888 };
  if (tmp2Result.isThemeDark(tmp8)) {
    let tmp7Result = _modDef12897;
  } else {
    tmp7Result = _modDef12898;
  }
  obj7.source = tmp7Result;
  items1[1] = React5(React4, obj7);
  const obj8 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj8.children = intl.string(util.t.hw6WTd);
  items1[2] = React5(Text_Text.Text, obj8);
  const obj9 = { style: tmp.cardText, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj9.children = intl2.string(util.t.K5jBdG);
  items1[3] = React5(Text_Text.Text, obj9);
  obj5.children = items1;
  const items2 = [React6(React3, obj5), , , , ,];
  const obj10 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = util.intl;
  obj10.children = intl3.string(util.t.RvfRTB);
  items2[1] = React5(Text_Text.Text, obj10);
  const obj11 = { style: tmp.features, features: null };
  tmp2Result = shared;
  obj11.features = FEATURES_PREMIUM_GUILD_USER();
  items2[2] = React5(PremiumFeatureListDefault, obj11);
  const obj12 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl4 = util.intl;
  obj12.children = intl4.string(util.t["/pVhjb"]);
  items2[3] = React5(Text_Text.Text, obj12);
  const obj13 = { style: tmp.features, features: null };
  const obj14 = { icon: null, label: null, IconComponent: null, color: null };
  const tmp7Result3 = PremiumFeatureListDefault;
  obj14.icon = _modDef13051;
  const intl5 = util.intl;
  obj14.label = intl5.string(util.t.Ts7BVI);
  obj14.IconComponent = ReactionIcon.ReactionIcon;
  obj14.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW;
  const items3 = [obj14, , , ,];
  const obj15 = { icon: _modDef13052, label: null, IconComponent: null, color: null };
  const intl6 = util.intl;
  obj15.label = intl6.string(util.t.QcJbt6);
  obj15.IconComponent = StickerIcon.StickerIcon;
  obj15.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE;
  items3[1] = obj15;
  const obj16 = { icon: _modDef13053, label: null, color: "#4173da", IconComponent: null };
  const intl7 = util.intl;
  obj16.label = intl7.string(util.t.rFNkf5);
  obj16.IconComponent = HeadphonesIcon.HeadphonesIcon;
  items3[2] = obj16;
  const obj17 = { icon: _modDef13054, label: null, IconComponent: null, color: null };
  const intl8 = util.intl;
  obj17.label = intl8.string(util.t["BpjjS/"]);
  obj17.IconComponent = UploadIcon.UploadIcon;
  obj17.color = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  items3[3] = obj17;
  const obj18 = { icon: _modDef13055, label: null, IconComponent: null, color: null };
  const intl9 = util.intl;
  obj18.label = intl9.string(util.t["9g5Lgb"]);
  obj18.IconComponent = StarIcon.StarIcon;
  obj18.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_GOLD;
  items3[4] = obj18;
  obj13.features = items3;
  items2[4] = React5(PremiumFeatureListDefault, obj13);
  const obj19 = { style: tmp.upsell, children: null };
  let tmp13Result = null;
  if (subscriptionPlansLoaded) {
    tmp13Result = null;
    if (fractionalState === FractionalPremiumStates.NONE) {
      tmp13Result = React5(PremiumSubscriptionPricingUpsellDefault, {});
    }
  }
  const items4 = [tmp13Result, ,];
  if (isInReverseTrial) {
    items4[1] = null;
    let tmp13Result2 = null;
    if (subscriptionPlansLoaded) {
      const obj20 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
      tmp13Result2 = React5(PremiumSubscriptionUpsellDefault, obj20);
    }
    items4[2] = tmp13Result2;
    obj19.children = items4;
    items2[5] = React6(React3, obj19);
    obj4.children = items2;
    tmp11Result = React6(React3, obj4);
  } else {
    const obj21 = { children: null };
    if (stateFromStores) {
      const obj22 = { style: tmp.cardText, variant: "text-md/medium", children: null };
      const intl12 = util.intl;
      obj22.children = intl12.string(util.t.WRzob8);
      const items5 = [React5(Text_Text.Text, obj22), ,];
      const obj23 = { style: null, variant: "text-md/bold", children: null };
      const items6 = [tmp.cardText];
      obj23.style = items6;
      const intl13 = util.intl;
      obj23.children = intl13.string(util.t.j4bXcm);
      items5[1] = React5(Text_Text.Text, obj23);
      const obj24 = { style: tmp.guildList };
      items5[2] = React5(GuildBoostingGuildListDefault, obj24);
      obj21.children = items5;
      let tmp19 = obj21;
    } else {
      const obj25 = { style: tmp.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
      const items7 = [React5(React4, obj25), ,];
      const obj26 = { style: null, variant: "text-md/bold", children: null };
      const items8 = [tmp.cardText];
      obj26.style = items8;
      const intl10 = util.intl;
      obj26.children = intl10.string(util.t.FHm4bZ);
      items7[1] = React5(Text_Text.Text, obj26);
      const obj27 = { style: tmp.cardText, variant: "text-md/medium", children: null };
      const intl11 = util.intl;
      obj27.children = intl11.string(util.t.PSLiiu);
      items7[2] = React5(Text_Text.Text, obj27);
      obj21.children = items7;
      tmp19 = obj21;
    }
    React6(React3, tmp19);
  }
  const tmp7Result4 = PremiumFeatureListDefault;
}
export { FEATURES_PREMIUM_GUILD_USER };
