// === Module 17765: GuildRoleSubscriptionListingPreview ===

// Module 17765 (GuildRoleSubscriptionListingPreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import PriceUtils from "PriceUtils" /* 7234 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 15231 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 15238 */;
import GuildRoleSubscriptionsActionCreatorExtras from "GuildRoleSubscriptionsActionCreatorExtras" /* 17739 */;
import GuildRoleSubscriptionBenefitPreview from "GuildRoleSubscriptionBenefitPreview" /* 17760 */;
import GuildPremiumRoleSubscribeButton from "GuildPremiumRoleSubscribeButton" /* 17766 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function PriceTier(arg0) {
  ({ price, currency } = arg0);
  const merged = Object.assign(arg0, Object.assign({ price: 0, currency: 0 }));
  const tmp2 = closure_9();
  let obj = { style: tmp2.priceGroup, children: null };
  obj = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: PriceUtils.formatPrice(price, currency) };
  const items = [timestampProducer(Text_Text.Text, obj), ];
  obj = { style: tmp2.priceInterval, variant: "eyebrow", color: "text-default", children: null };
  const intl = util.intl;
  const obj1 = { period: null };
  obj1.period = GuildRoleSubscriptionTypeUtils.formatPlanInterval(merged);
  obj.children = intl.format(util.t.isLGyX, obj1);
  items[1] = timestampProducer(Text_Text.Text, obj);
  obj.children = items;
  return React5(View, obj);
}
function Header(onPress) {
  const listingId = onPress.listingId;
  const tmp = closure_9();
  let obj1 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let str = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(listingId), 1)[0];
  let obj = { style: tmp.header, children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-md/semibold", color: "interactive-text-active", children: _slicedToArray(obj1.useName(listingId), 1)[0] }), , , , ];
  obj = { style: tmp.image, source: null };
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp3 = React5;
  const tmp4 = View;
  if (str == null) {
    str = "";
  }
  obj.source = { uri: str };
  items[1] = timestampProducer(FastImageDefault, obj);
  obj1 = {};
  const merged = Object.assign(_slicedToArray(obj.useSubscriptionPlan(listingId), 1)[0]);
  items[2] = timestampProducer(PriceTier, obj1);
  items[3] = timestampProducer(GuildPremiumRoleSubscribeButton.GuildPremiumRoleSubscribeButton, { onPress: onPress.onSubscribePress });
  items[4] = timestampProducer(Text_Text.Text, { variant: "text-sm/medium", children: _slicedToArray(obj4.useDescription(listingId), 1)[0] });
  obj.children = items;
  return tmp3(tmp4, obj);
}
function Content(arg0) {
  ({ children, noBackground, style } = arg0);
  const tmp = closure_9();
  style = [tmp.content, , ];
  let contentWithBackground = true !== noBackground;
  if (contentWithBackground) {
    contentWithBackground = tmp.contentWithBackground;
  }
  style[1] = contentWithBackground;
  style[2] = style;
  return timestampProducer(View, { style, children });
}
function SectionLabel(children) {
  const merged = Object.assign(children, Object.assign({ label: 0 }));
  let obj = {};
  const merged1 = Object.assign(merged);
  obj = { style: closure_9().sectionLabel, variant: "eyebrow", color: "text-default", children: children.label };
  obj.children = timestampProducer(Text_Text.Text, obj);
  return timestampProducer(Content, obj);
}
function LabeledSection(arg0) {
  ({ label, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, children: 0 }));
  let obj = { children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.label = label;
  const items = [timestampProducer(SectionLabel, obj), ];
  obj = {};
  const merged2 = Object.assign(merged);
  obj.children = children;
  items[1] = timestampProducer(Content, obj);
  obj.children = items;
  return React5(React6, obj);
}
function Separator() {
  let obj = { children: null };
  obj = { style: closure_9().separator };
  obj.children = timestampProducer(View, obj);
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
        obj = { count: null };
        obj.count = benefits.length;
        formatToPlainStringResult = intl.formatToPlainString(label, obj);
      }
      mapped = benefits.map((benefit, index) => {
        benefitSpacing = index > 0;
        if (benefitSpacing) {
          benefitSpacing = benefitSpacing.benefitSpacing;
        }
        let obj = { style: benefitSpacing, children: null };
        obj = { guildId, benefit, isInteractive: listingId !== GuildRoleSubscriptionsActionCreatorExtras.NEW_LISTING_EDIT_STATE_ID };
        obj.children = timestampProducer(GuildRoleSubscriptionBenefitPreview.GuildRoleSubscriptionBenefitPreview, obj);
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
        obj1 = { style: null, children: null };
        obj1.style = tmp2.roundedBenefitsContainer;
        obj1.children = mapped;
        tmp4Result = tmp4(View, obj1);
      }
      obj.children = tmp4Result;
      return tmp4(tmp5, obj);
    }
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: { padding: 16 }, header: null, image: null, priceGroup: null, priceInterval: null, content: null, contentWithBackground: null, separator: null, sectionLabel: null, benefitSpacing: null, roundedBenefitsContainer: null, footer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderTopStartRadius: 8, borderTopEndRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", padding: 16 };
createStyles.header = createStyles;
createStyles.image = { width: 80, height: 80, borderRadius: 40, marginTop: 16 };
createStyles.priceGroup = { marginTop: 16, alignItems: "center" };
createStyles.priceInterval = { marginTop: 4 };
createStyles.content = { paddingHorizontal: 16 };
createStyles.contentWithBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = { width: "100%", height: 1, marginTop: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.separator = size;
createStyles.sectionLabel = { paddingVertical: 16 };
createStyles.benefitSpacing = { marginTop: 16 };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.roundedBenefitsContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: 16 };
createStyles.footer = { borderBottomStartRadius: 8, borderBottomEndRadius: 8, height: 16 };
const React7 = createStyles.createStyles(createStyles);
let obj3 = { FLAT: 0, [0]: "FLAT", ROUNDED: 1, [1]: "ROUNDED" };
BenefitsSection.Looks = obj3;
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx");

export { BenefitsSection };
export const GuildRoleSubscriptionListingPreview = function GuildRoleSubscriptionListingPreview(arg0) {
  const tmp = closure_9();
  ({ guildId, listingId } = arg0);
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useChannelBenefits(listingId), 1)[0];
  let obj1 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj1.useIntangibleBenefits(listingId), 1)[0];
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj = { style: tmp.container, children: null };
  obj = {};
  const role = obj2.useRole(listingId, guildId);
  const merged = Object.assign(arg0);
  const items = [timestampProducer(Header, obj), , , , ];
  obj1 = { label: null, children: null };
  const intl = util.intl;
  obj1.label = intl.string(util.t.FJZmYx);
  obj1.children = timestampProducer(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, { role });
  items[1] = timestampProducer(LabeledSection, obj1);
  let tmp4Result = first.length > 0;
  if (tmp4Result) {
    obj2 = { children: null };
    const items1 = [tmp6(Separator, {}), ];
    obj3 = { guildId, benefits: first, label: tmp8(1114).t.sqjII9, listingId };
    items1[1] = tmp6(BenefitsSection, obj3);
    obj2.children = items1;
    tmp4Result = tmp4(React6, obj2);
  }
  items[2] = tmp4Result;
  tmp4Result = first1.length > 0;
  if (tmp4Result) {
    const obj4 = { children: null };
    const items2 = [tmp6(Separator, {}), ];
    const obj5 = { guildId, benefits: first1, label: tmp8(1114).t.aBE7f9, listingId };
    items2[1] = tmp6(BenefitsSection, obj5);
    obj4.children = items2;
    tmp4Result = tmp4(React6, obj4);
  }
  items[3] = tmp4Result;
  items[4] = timestampProducer(Content, { style: tmp.footer });
  obj.children = items;
  return React5(View, obj);
};