// === Module 17882: GuildRoleSubscriptionListingPreview ===

// Module 17882 (GuildRoleSubscriptionListingPreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4632 */;
import FastImageDefault from "FastImage" /* 5668 */;
import PriceUtils from "PriceUtils" /* 7337 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15311 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 15315 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 15322 */;
import GuildRoleSubscriptionsActionCreatorExtras from "GuildRoleSubscriptionsActionCreatorExtras" /* 17856 */;
import GuildRoleSubscriptionBenefitPreview from "GuildRoleSubscriptionBenefitPreview" /* 17877 */;
import GuildPremiumRoleSubscribeButton from "GuildPremiumRoleSubscribeButton" /* 17883 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function PriceTier(arg0) {
  ({ price, currency } = arg0);
  const merged = Object.assign(arg0, Object.assign({ price: 0, currency: 0 }));
  const tmp2 = closure_9();
  const obj = { style: tmp2.priceGroup, children: null };
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: PriceUtils.formatPrice(price, currency) };
  const items = [timestampProducer(Text_Text.Text, obj2), ];
  const obj4 = { style: tmp2.priceInterval, variant: "eyebrow", color: "text-default", children: null };
  const intl = util.intl;
  const obj5 = { period: null };
  obj5.period = GuildRoleSubscriptionTypeUtils.formatPlanInterval(merged);
  obj4.children = intl.format(util.t.isLGyX, obj5);
  items[1] = timestampProducer(Text_Text.Text, obj4);
  obj.children = items;
  return React5(View, obj);
}
function Header(onPress) {
  const listingId = onPress.listingId;
  const tmp = closure_9();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let str = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(listingId), 1)[0];
  const obj5 = { style: tmp.header, children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-md/semibold", color: "interactive-text-active", children: _slicedToArray(obj2.useName(listingId), 1)[0] }), , , , ];
  obj6 = { style: tmp.image, source: null };
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  if (str == null) {
    str = "";
  }
  obj6.source = { uri: str };
  items[1] = timestampProducer(FastImageDefault, obj6);
  const merged = Object.assign(_slicedToArray(obj.useSubscriptionPlan(listingId), 1)[0]);
  items[2] = timestampProducer(PriceTier, {});
  items[3] = timestampProducer(GuildPremiumRoleSubscribeButton.GuildPremiumRoleSubscribeButton, { onPress: onPress.onSubscribePress });
  items[4] = timestampProducer(Text_Text.Text, { variant: "text-sm/medium", children: _slicedToArray(obj4.useDescription(listingId), 1)[0] });
  obj5.children = items;
  return React5(View, obj5);
}
function Content(arg0) {
  ({ children, noBackground, style } = arg0);
  const tmp = closure_9();
  const style1 = [tmp.content, , ];
  let contentWithBackground = true !== noBackground;
  if (contentWithBackground) {
    contentWithBackground = tmp.contentWithBackground;
  }
  style1[1] = contentWithBackground;
  style1[2] = style;
  return timestampProducer(View, { style: style1, children });
}
function SectionLabel(children) {
  const merged = Object.assign(children, Object.assign({ label: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  const tmp2 = closure_9();
  obj.children = timestampProducer(Text_Text.Text, { style: closure_9().sectionLabel, variant: "eyebrow", color: "text-default", children: children.label });
  return timestampProducer(Content, obj);
}
function LabeledSection(arg0) {
  ({ label, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, children: 0 }));
  const obj = { children: null };
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.label = label;
  const items = [timestampProducer(SectionLabel, obj2), ];
  const obj3 = {};
  const merged2 = Object.assign(merged);
  obj3.children = children;
  items[1] = timestampProducer(Content, obj3);
  obj.children = items;
  return React5(React6, obj);
}
function Separator() {
  const obj = { children: timestampProducer(View, { style: closure_9().separator }) };
  return timestampProducer(Content, obj);
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
        intl = guildId(closure_3[8]).intl;
        obj1 = { count: null };
        obj1.count = benefits.length;
        formatToPlainStringResult = intl.formatToPlainString(label, obj1);
      }
      mapped = benefits.map((benefit, index) => {
        benefitSpacing = index > 0;
        if (benefitSpacing) {
          benefitSpacing = benefitSpacing.benefitSpacing;
        }
        const obj = { style: benefitSpacing, children: timestampProducer(GuildRoleSubscriptionBenefitPreview.GuildRoleSubscriptionBenefitPreview, { guildId, benefit, isInteractive: listingId !== GuildRoleSubscriptionsActionCreatorExtras.NEW_LISTING_EDIT_STATE_ID }) };
        const obj2 = { guildId, benefit, isInteractive: listingId !== GuildRoleSubscriptionsActionCreatorExtras.NEW_LISTING_EDIT_STATE_ID };
        return timestampProducer(View, obj, GuildRoleSubscriptionTypeUtils.getBenefitKey(benefit));
      });
      tmp4 = jsx;
      obj = { noBackground: null, label: null, children: null };
      tmp6 = closure_16;
      obj.noBackground = look === closure_16.ROUNDED;
      obj.label = formatToPlainStringResult;
      tmp4Result = mapped;
      tmp5 = LabeledSection;
      if (look !== closure_16.FLAT) {
        tmp8 = View;
        obj4 = { style: null, children: null };
        obj4.style = tmp2.roundedBenefitsContainer;
        obj4.children = mapped;
        tmp4Result = tmp4(View, obj4);
      }
      obj.children = tmp4Result;
      return tmp4(tmp5, obj);
    }
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { padding: 16 }, header: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderTopStartRadius: 8, borderTopEndRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", padding: 16 }, image: { width: 80, height: 80, borderRadius: 40, marginTop: 16 }, priceGroup: { marginTop: 16, alignItems: "center" }, priceInterval: { marginTop: 4 }, content: { paddingHorizontal: 16 }, contentWithBackground: null, separator: null, sectionLabel: null, benefitSpacing: null, roundedBenefitsContainer: null, footer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderTopStartRadius: 8, borderTopEndRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", padding: 16 };
obj2.contentWithBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = { width: "100%", height: 1, marginTop: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.separator = size;
obj2.sectionLabel = { paddingVertical: 16 };
obj2.benefitSpacing = { marginTop: 16 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.roundedBenefitsContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: 16 };
obj2.footer = { borderBottomStartRadius: 8, borderBottomEndRadius: 8, height: 16 };
const React7 = createStyles.createStyles(obj2);
let obj6 = { FLAT: 0, [0]: "FLAT", ROUNDED: 1, [1]: "ROUNDED" };
BenefitsSection.Looks = obj6;
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx");

export { BenefitsSection };
export const GuildRoleSubscriptionListingPreview = function GuildRoleSubscriptionListingPreview(arg0) {
  const tmp = closure_9();
  ({ guildId, listingId } = arg0);
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
  const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId), 1)[0];
  const obj4 = { style: tmp.container, children: null };
  const role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(listingId, guildId);
  const merged = Object.assign(arg0);
  const items = [timestampProducer(Header, {}), , , , ];
  obj6 = { label: null, children: null };
  const intl = util.intl;
  obj6.label = intl.string(util.t.FJZmYx);
  obj6.children = timestampProducer(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, { role });
  items[1] = timestampProducer(LabeledSection, obj6);
  let tmp4Result = first.length > 0;
  if (tmp4Result) {
    const obj7 = { children: null };
    const items1 = [timestampProducer(Separator, {}), ];
    const obj8 = { guildId, benefits: first, label: util.t.sqjII9, listingId };
    items1[1] = timestampProducer(BenefitsSection, obj8);
    obj7.children = items1;
    tmp4Result = React5(React6, obj7);
  }
  items[2] = tmp4Result;
  let tmp4Result2 = first1.length > 0;
  if (tmp4Result2) {
    const obj9 = { children: null };
    const items2 = [timestampProducer(Separator, {}), ];
    const obj10 = { guildId, benefits: first1, label: util.t.aBE7f9, listingId };
    items2[1] = timestampProducer(BenefitsSection, obj10);
    obj9.children = items2;
    tmp4Result2 = React5(React6, obj9);
  }
  items[3] = tmp4Result2;
  items[4] = timestampProducer(Content, { style: tmp.footer });
  obj4.children = items;
  return React5(View, obj4);
};