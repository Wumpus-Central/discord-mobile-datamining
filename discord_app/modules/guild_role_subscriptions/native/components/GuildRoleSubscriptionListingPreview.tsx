// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import formatSingleCurrencyPrice from "../../../../utils/PriceUtils.tsx";
import getRoleEmojisAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import getBenefitKey from "../../GuildRoleSubscriptionTypeUtils.tsx";
import GuildRoleSubscriptionMemberPreview from "listing_elements/GuildRoleSubscriptionMemberPreview.tsx";
import GuildPremiumRoleSubscribeButton from "GuildPremiumRoleSubscribeButton.tsx";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function PriceTier(arg0) {
  ({ price, currency } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = callback4();
  let obj = { style: tmp2.priceGroup, children: null };
  obj = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: formatSingleCurrencyPrice.formatPrice(price, currency) };
  const items = [callback2(Text.Text, obj), ];
  obj = { style: tmp2.priceInterval, variant: "eyebrow", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj1 = { period: null };
  const obj3 = formatSingleCurrencyPrice;
  obj1[0] = getBenefitKey.formatPlanInterval(merged);
  obj[3] = intl.format(getSystemLocale.t.isLGyX, obj1);
  items[1] = callback2(Text.Text, obj);
  obj[1] = items;
  return callback3(View, obj);
}
function Header(onPress) {
  const listingId = onPress.listingId;
  const tmp = callback4();
  let obj = getRoleEmojisAll;
  obj1 = getRoleEmojisAll;
  let str = callback(getRoleEmojisAll.useImage(listingId), 1)[0];
  const obj3 = getRoleEmojisAll;
  obj = { style: tmp.header, children: null };
  const items = [callback2(Text.Text, { variant: "heading-md/semibold", color: "interactive-text-active", children: callback(obj1.useName(listingId), 1)[0] }), , , , ];
  obj = { style: tmp.image, source: null };
  obj4 = getRoleEmojisAll;
  const tmp3 = closure_7;
  const tmp4 = View;
  if (str == null) {
    str = "";
  }
  obj[1] = { uri: str };
  items[1] = callback2(preloadDefault, obj);
  obj1 = {};
  const merged = Object.assign(callback(obj.useSubscriptionPlan(listingId), 1)[0]);
  items[2] = callback2(PriceTier, obj1);
  items[3] = callback2(GuildPremiumRoleSubscribeButton.GuildPremiumRoleSubscribeButton, { onPress: onPress.onSubscribePress });
  items[4] = callback2(Text.Text, { variant: "text-sm/medium", children: callback(obj4.useDescription(listingId), 1)[0] });
  obj[1] = items;
  return tmp3(tmp4, obj);
}
function Content(arg0) {
  ({ children, noBackground, style } = arg0);
  const tmp = callback4();
  style = [tmp.content, , ];
  let contentWithBackground = true !== noBackground;
  if (contentWithBackground) {
    contentWithBackground = tmp.contentWithBackground;
  }
  style[1] = contentWithBackground;
  style[2] = style;
  return closure_6(View, { style, children });
}
function SectionLabel(children) {
  const merged = Object.assign(children, Object.create(null));
  let obj = {};
  const merged1 = Object.assign(merged);
  obj = { style: callback4().sectionLabel, variant: "eyebrow", color: "text-default", children: children.label };
  obj.children = callback2(Text.Text, obj);
  return callback2(Content, obj);
}
function LabeledSection(arg0) {
  ({ label, children } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = { children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.label = label;
  const items = [callback2(SectionLabel, obj), ];
  obj = {};
  const merged2 = Object.assign(merged);
  obj.children = children;
  items[1] = callback2(Content, obj);
  obj[0] = items;
  return callback3(closure_8, obj);
}
function Separator() {
  let obj = { children: null };
  obj = { style: callback4().separator };
  obj[0] = callback2(View, obj);
  return callback2(Content, obj);
}
class BenefitsSection {
  constructor(arg0) {
    ({ guildId, label, benefits, look } = global);
    if (look === undefined) {
      tmp = closure_16;
      look = closure_16.FLAT;
    }
    listingId = global.listingId;
    closure_2 = undefined;
    tmp2 = closure_9();
    closure_2 = tmp2;
    if (0 === benefits.length) {
      tmp9 = null;
      return null;
    } else {
      formatToPlainStringResult = label;
      if (typeof label !== "string") {
        tmp11 = guildId;
        tmp12 = closure_3;
        intl = require("getSystemLocale").intl;
        obj = { count: null };
        obj[0] = benefits.length;
        formatToPlainStringResult = intl.formatToPlainString(label, obj);
      }
      mapped = benefits.map((benefit) => {
        let benefitSpacing = arg1 > 0;
        if (benefitSpacing) {
          benefitSpacing = benefitSpacing.benefitSpacing;
        }
        let obj = { style: benefitSpacing, children: null };
        obj = { guildId: closure_0, benefit, isInteractive: listingId !== closure_1_0(closure_1_3[14]).NEW_LISTING_EDIT_STATE_ID };
        obj[1] = closure_1_6(closure_1_0(closure_1_3[13]).GuildRoleSubscriptionBenefitPreview, obj);
        return closure_1_6(closure_1_5, obj, closure_1_0(closure_1_3[9]).getBenefitKey(benefit));
      });
      tmp4 = jsx;
      obj = { noBackground: null, label: null, children: null };
      tmp6 = closure_16;
      obj[0] = look === closure_16.ROUNDED;
      obj[1] = formatToPlainStringResult;
      tmp4Result = mapped;
      tmp5 = LabeledSection;
      if (look !== closure_16.FLAT) {
        tmp8 = View;
        obj1 = { style: null, children: null };
        obj1[0] = tmp2.roundedBenefitsContainer;
        obj1[1] = mapped;
        tmp4Result = tmp4(View, obj1);
      }
      obj[2] = tmp4Result;
      return tmp4(tmp5, obj);
    }
  }
}
noopAll;
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
createCacheKey = { container: { padding: 16 }, header: null, image: null, priceGroup: null, priceInterval: null, content: null, contentWithBackground: null, separator: null, sectionLabel: null, benefitSpacing: null, roundedBenefitsContainer: null, footer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderTopStartRadius: 8, borderTopEndRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", padding: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 80, height: 80, borderRadius: 40, marginTop: 16 };
createCacheKey[3] = { marginTop: 16, alignItems: "center" };
createCacheKey[4] = { marginTop: 4 };
createCacheKey[5] = { paddingHorizontal: 16 };
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[7] = { width: "100%", height: 1, marginTop: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[8] = { paddingVertical: 16 };
createCacheKey[9] = { marginTop: 16 };
let obj2 = { width: "100%", height: 1, marginTop: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[10] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, padding: 16 };
createCacheKey[11] = { borderBottomStartRadius: 8, borderBottomEndRadius: 8, height: 16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj4 = { FLAT: 0, [0]: "FLAT", ROUNDED: 1, [1]: "ROUNDED" };
BenefitsSection.Looks = obj4;
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, padding: 16 };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx");

export { BenefitsSection };
export const GuildRoleSubscriptionListingPreview = function GuildRoleSubscriptionListingPreview(arg0) {
  const tmp = callback4();
  ({ guildId, listingId } = arg0);
  let obj = getRoleEmojisAll;
  const first = callback(obj.useChannelBenefits(listingId), 1)[0];
  obj1 = getRoleEmojisAll;
  const first1 = callback(obj1.useIntangibleBenefits(listingId), 1)[0];
  let obj2 = getRoleEmojisAll;
  obj = { style: tmp.container, children: null };
  obj = {};
  const role = obj2.useRole(listingId, guildId);
  const merged = Object.assign(arg0);
  const items = [callback2(Header, obj), , , , ];
  obj1 = { label: null, children: null };
  const intl = getSystemLocale.intl;
  obj1[0] = intl.string(getSystemLocale.t.FJZmYx);
  obj1[1] = callback2(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, { role });
  items[1] = callback2(LabeledSection, obj1);
  let tmp4Result = first.length > 0;
  if (tmp4Result) {
    obj2 = { children: null };
    const items1 = [tmp6(Separator, {}), ];
    const obj3 = { guildId: null, benefits: null, label: null, listingId: null };
    obj3[0] = guildId;
    obj3[1] = first;
    obj3[2] = tmp8(1236).t.sqjII9;
    obj3[3] = listingId;
    items1[1] = tmp6(BenefitsSection, obj3);
    obj2[0] = items1;
    tmp4Result = tmp4(closure_8, obj2);
  }
  items[2] = tmp4Result;
  tmp4Result = first1.length > 0;
  if (tmp4Result) {
    obj4 = { children: null };
    const items2 = [tmp6(Separator, {}), ];
    const obj5 = { guildId: null, benefits: null, label: null, listingId: null };
    obj5[0] = guildId;
    obj5[1] = first1;
    obj5[2] = tmp8(1236).t.aBE7f9;
    obj5[3] = listingId;
    items2[1] = tmp6(BenefitsSection, obj5);
    obj4[0] = items2;
    tmp4Result = tmp4(closure_8, obj4);
  }
  items[3] = tmp4Result;
  items[4] = callback2(Content, { style: tmp.footer });
  obj[1] = items;
  return closure_7(View, obj);
};