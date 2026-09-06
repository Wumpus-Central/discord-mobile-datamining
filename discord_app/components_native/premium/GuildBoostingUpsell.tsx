// === Module 13523: GuildBoostingUpsell ===

// Module 13523 (GuildBoostingUpsell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4411 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text_Text from "Text/Text" /* 4556 */;
import ReactionIcon from "ReactionIcon" /* 8757 */;
import UploadIcon from "UploadIcon" /* 9371 */;
import BoostGemIcon from "BoostGemIcon" /* 9375 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9391 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9752 */;
import StickerIcon from "StickerIcon" /* 10114 */;
import StarIcon from "StarIcon" /* 10235 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12530 */;
import _modDef13322 from "module_13322" /* 13322 */;
import _modDef13331 from "module_13331" /* 13331 */;
import _modDef13332 from "module_13332" /* 13332 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 13417 */;
import _modDef13502 from "module_13502" /* 13502 */;
import _modDef13524 from "module_13524" /* 13524 */;
import BoostTier3Icon from "BoostTier3Icon" /* 13525 */;
import _modDef13527 from "module_13527" /* 13527 */;
import _modDef13528 from "module_13528" /* 13528 */;
import _modDef13529 from "module_13529" /* 13529 */;
import _modDef13530 from "module_13530" /* 13530 */;
import _modDef13531 from "module_13531" /* 13531 */;
import _modDef13532 from "module_13532" /* 13532 */;
import GuildSubscriptionNoGuilds from "GuildSubscriptionNoGuilds" /* 13533 */;
import PremiumSubscriptionPricingUpsellDefault from "PremiumSubscriptionPricingUpsell" /* 13537 */;
import GuildBoostingGuildListDefault from "GuildBoostingGuildList" /* 13538 */;
import PremiumSubscriptionUpsellDefault from "PremiumSubscriptionUpsell" /* 13539 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const FractionalPremiumStates = fn(1373).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { root: { paddingHorizontal: 16, paddingVertical: 32 }, title: { marginTop: 16 }, features: { marginTop: 16 }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" }, guildList: { marginTop: 16 }, logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 }, imgPremiumGuild: { width: 95, height: 65 }, imgNoGuilds: { width: 178, height: 112, marginTop: 32 }, header: { alignItems: "center" }, upsell: null, subscriptionUpsell: null };
createStyles = { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.upsell = createStyles;
createStyles.subscriptionUpsell = { marginTop: 32 };
let closure_9 = createStyles.createStyles(createStyles);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    obj = { icon: closure_1(closure_2[7]), label: null, IconComponent: null, color: null };
    intl = closure_0(closure_2[8]).intl;
    obj.label = intl.string(closure_0(closure_2[8]).t["GS+bL0"]);
    obj.IconComponent = closure_0(closure_2[9]).BoostGemIcon;
    obj.color = closure_1(closure_2[6]).unsafe_rawColors.GUILD_BOOSTING_PINK;
    items = [, , ];
    items[0] = obj;
    obj = { icon: closure_1(closure_2[10]), label: null, IconComponent: null };
    intl2 = closure_0(closure_2[8]).intl;
    obj.label = intl2.string(closure_0(closure_2[8]).t.a7LWeM);
    obj.IconComponent = function IconComponent(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.color = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
      return closure_1_7(BoostTier3Icon.BoostTier3Icon, obj);
    };
    items[1] = obj;
    obj1 = { icon: closure_1(closure_2[12]), label: null, color: null, IconComponent: null };
    intl3 = closure_0(closure_2[8]).intl;
    obj1.label = intl3.string(closure_0(closure_2[8]).t.E76jz8);
    obj1.color = closure_1(closure_2[6]).unsafe_rawColors.YELLOW_300;
    obj1.IconComponent = closure_0(closure_2[13]).ShieldUserIcon;
    items[2] = obj1;
    return items;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default function GuildBoostingUpsell(arg0) {
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = closure_9();
  let obj = initialize;
  const items = [SortedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  let obj1 = useSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = obj1.useSubscriptionPlansLoaded();
  let obj2 = GuildSubscriptionNoGuilds;
  const guildSubscriptionNoGuildsSource = obj2.useGuildSubscriptionNoGuildsSource();
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      let tmp11Result = null;
    }
    return tmp11Result;
  }
  obj = { style: tmp.root, children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { style: tmp.imgPremiumGuild, source: _modDef13322 };
  const items1 = [React5(React4, obj1), , , ];
  obj2 = { style: tmp.logoPremiumGuild, source: null };
  const tmp8 = useThemeDefault();
  if (tmp2Result.isThemeDark(tmp8)) {
    let tmp7Result = _modDef13331;
  } else {
    tmp7Result = _modDef13332;
  }
  obj2.source = tmp7Result;
  items1[1] = React5(React4, obj2);
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.hw6WTd);
  items1[2] = React5(Text_Text.Text, obj3);
  const obj4 = { style: tmp.cardText, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.K5jBdG);
  items1[3] = React5(Text_Text.Text, obj4);
  obj.children = items1;
  const items2 = [React6(React3, obj), , , , , ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.RvfRTB);
  items2[1] = React5(Text_Text.Text, obj5);
  const obj6 = { style: tmp.features, features: null };
  tmp7Result = PremiumFeatureListDefault;
  obj6.features = FEATURES_PREMIUM_GUILD_USER();
  items2[2] = React5(tmp7Result, obj6);
  const obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = util.intl;
  obj7.children = intl4.string(util.t["/pVhjb"]);
  items2[3] = React5(Text_Text.Text, obj7);
  const obj8 = { style: tmp.features, features: null };
  const obj9 = { icon: null, label: null, IconComponent: null, color: null };
  tmp2Result = shared;
  obj9.icon = _modDef13528;
  const intl5 = util.intl;
  obj9.label = intl5.string(util.t.Ts7BVI);
  obj9.IconComponent = ReactionIcon.ReactionIcon;
  obj9.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW;
  const items3 = [obj9, , , , ];
  const obj10 = { icon: _modDef13529, label: null, IconComponent: null, color: null };
  const intl6 = util.intl;
  obj10.label = intl6.string(util.t.QcJbt6);
  obj10.IconComponent = StickerIcon.StickerIcon;
  obj10.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE;
  items3[1] = obj10;
  const obj11 = { icon: _modDef13530, label: null, color: "#4173da", IconComponent: null };
  const intl7 = util.intl;
  obj11.label = intl7.string(util.t.rFNkf5);
  obj11.IconComponent = HeadphonesIcon.HeadphonesIcon;
  items3[2] = obj11;
  const obj12 = { icon: _modDef13531, label: null, IconComponent: null, color: null };
  const intl8 = util.intl;
  obj12.label = intl8.string(util.t["BpjjS/"]);
  obj12.IconComponent = UploadIcon.UploadIcon;
  obj12.color = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  items3[3] = obj12;
  const obj13 = { icon: _modDef13532, label: null, IconComponent: null, color: null };
  const intl9 = util.intl;
  obj13.label = intl9.string(util.t["9g5Lgb"]);
  obj13.IconComponent = StarIcon.StarIcon;
  obj13.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_GOLD;
  items3[4] = obj13;
  obj8.features = items3;
  items2[4] = React5(PremiumFeatureListDefault, obj8);
  const obj14 = { style: tmp.upsell, children: null };
  let tmp13Result = null;
  if (subscriptionPlansLoaded) {
    tmp13Result = null;
    if (fractionalState === FractionalPremiumStates.NONE) {
      tmp13Result = React5(PremiumSubscriptionPricingUpsellDefault, {});
    }
  }
  const items4 = [tmp13Result, , ];
  if (isInReverseTrial) {
    items4[1] = null;
    tmp13Result = null;
    if (subscriptionPlansLoaded) {
      const obj15 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
      tmp13Result = React5(PremiumSubscriptionUpsellDefault, obj15);
    }
    items4[2] = tmp13Result;
    obj14.children = items4;
    items2[5] = React6(React3, obj14);
    obj.children = items2;
    tmp11Result = React6(React3, obj);
  } else {
    const obj16 = { children: null };
    if (stateFromStores) {
      const obj17 = { style: tmp.cardText, variant: "text-md/medium", children: null };
      const intl12 = util.intl;
      obj17.children = intl12.string(util.t.WRzob8);
      const items5 = [React5(Text_Text.Text, obj17), , ];
      const obj18 = { style: null, variant: "text-md/bold", children: null };
      const items6 = [tmp.cardText];
      obj18.style = items6;
      const intl13 = util.intl;
      obj18.children = intl13.string(util.t.j4bXcm);
      items5[1] = React5(Text_Text.Text, obj18);
      const obj19 = { style: tmp.guildList };
      items5[2] = React5(GuildBoostingGuildListDefault, obj19);
      obj16.children = items5;
      let tmp19 = obj16;
    } else {
      const obj20 = { style: tmp.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
      const items7 = [React5(React4, obj20), , ];
      const obj21 = { style: null, variant: "text-md/bold", children: null };
      const items8 = [tmp.cardText];
      obj21.style = items8;
      const intl10 = util.intl;
      obj21.children = intl10.string(util.t.FHm4bZ);
      items7[1] = React5(Text_Text.Text, obj21);
      const obj22 = { style: tmp.cardText, variant: "text-md/medium", children: null };
      const intl11 = util.intl;
      obj22.children = intl11.string(util.t.PSLiiu);
      items7[2] = React5(Text_Text.Text, obj22);
      obj16.children = items7;
      tmp19 = obj16;
    }
    tmp11Result = React6(React3, tmp19);
  }
  const tmp7Result1 = PremiumFeatureListDefault;
};
export { FEATURES_PREMIUM_GUILD_USER };