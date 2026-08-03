import _slicedToArray from "_slicedToArray";
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function PriceTier(arg0) {
  let currency;
  let price;
  ({ price, currency } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = createCacheKey();
  let obj = { style: tmp2.priceGroup, children: null };
  obj = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  obj[2] = require(5673) /* formatSingleCurrencyPrice */.formatPrice(price, currency);
  const items = [callback2(require(4189) /* Text */.Text, obj), ];
  obj = { style: tmp2.priceInterval, variant: "eyebrow", color: "text-default", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  const obj1 = { period: null };
  const obj3 = require(5673) /* formatSingleCurrencyPrice */;
  obj1[0] = require(14267) /* getBenefitKey */.formatPlanInterval(merged);
  obj[3] = intl.format(require(1236) /* getSystemLocale */.t.isLGyX, obj1);
  items[1] = callback2(require(4189) /* Text */.Text, obj);
  obj[1] = items;
  return callback3(View, obj);
}
function Header(onPress) {
  const listingId = onPress.listingId;
  const tmp = createCacheKey();
  let obj = importAll(14263);
  let obj1 = importAll(14263);
  let str = callback(importAll(14263).useImage(listingId), 1)[0];
  const obj3 = importAll(14263);
  obj = { style: tmp.header, children: null };
  const items = [callback2(require(4189) /* Text */.Text, { variant: "heading-md/semibold", color: "interactive-text-active", children: callback(obj1.useName(listingId), 1)[0] }), , , , ];
  obj = { style: tmp.image, source: null };
  const obj4 = importAll(14263);
  const tmp3 = closure_7;
  const tmp4 = View;
  if (str == null) {
    str = "";
  }
  obj[1] = { uri: str };
  items[1] = callback2(importDefault(5145), obj);
  obj1 = {};
  const merged = Object.assign(callback(obj.useSubscriptionPlan(listingId), 1)[0]);
  items[2] = callback2(PriceTier, obj1);
  items[3] = callback2(require(16629) /* GuildPremiumRoleSubscribeButton */.GuildPremiumRoleSubscribeButton, { onPress: onPress.onSubscribePress });
  items[4] = callback2(require(4189) /* Text */.Text, { variant: "text-sm/medium", children: callback(obj4.useDescription(listingId), 1)[0] });
  obj[1] = items;
  return tmp3(tmp4, obj);
}
function Content(arg0) {
  let children;
  let noBackground;
  let style;
  ({ children, noBackground, style } = arg0);
  const tmp = createCacheKey();
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
  obj = { style: createCacheKey().sectionLabel, variant: "eyebrow", color: "text-default", children: children.label };
  obj.children = callback2(require(4189) /* Text */.Text, obj);
  return callback2(Content, obj);
}
function LabeledSection(arg0) {
  let children;
  let label;
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
  obj = { style: createCacheKey().separator };
  obj[0] = callback2(View, obj);
  return callback2(Content, obj);
}
class BenefitsSection {
  constructor(arg0) {
    ({ guildId, label, benefits, look } = global);
    if (look === undefined) {
      tmp = Fragment;
      look = Fragment.FLAT;
    }
    listingId = global.listingId;
    c2 = undefined;
    tmp2 = Fragment();
    c2 = tmp2;
    if (0 === benefits.length) {
      tmp9 = null;
      return null;
    } else {
      formatToPlainStringResult = label;
      if (typeof label !== "y") {
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
          benefitSpacing = _undefined.benefitSpacing;
        }
        let obj = { style: benefitSpacing, children: null };
        obj = { guildId: closure_0, benefit, isInteractive: null };
        obj[2] = listingId !== outer1_0(outer1_3[14]).NEW_LISTING_EDIT_STATE_ID;
        obj[1] = outer1_6(outer1_0(outer1_3[13]).GuildRoleSubscriptionBenefitPreview, obj);
        return outer1_6(outer1_5, obj, outer1_0(outer1_3[9]).getBenefitKey(benefit));
      });
      tmp4 = jsx;
      obj = { noBackground: null, label: null, children: null };
      tmp6 = Fragment;
      obj[0] = look === Fragment.ROUNDED;
      obj[1] = formatToPlainStringResult;
      tmp4Result = mapped;
      tmp5 = LabeledSection;
      if (look !== Fragment.FLAT) {
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
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
createCacheKey = { container: { padding: 16 }, header: null, image: null, priceGroup: null, priceInterval: null, content: null, contentWithBackground: null, separator: null, sectionLabel: null, benefitSpacing: null, roundedBenefitsContainer: null, footer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderTopStartRadius: 8, borderTopEndRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", padding: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 80, height: 80, borderRadius: 40, marginTop: 16 };
createCacheKey[3] = { marginTop: 16, alignItems: "center" };
createCacheKey[4] = { marginTop: 4 };
createCacheKey[5] = { paddingHorizontal: 16 };
createCacheKey[6] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[7] = { width: "100%", height: 1, marginTop: 16, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[8] = { paddingVertical: 16 };
createCacheKey[9] = { marginTop: 16 };
let obj2 = { width: "100%", height: 1, marginTop: 16, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[10] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.lg, padding: 16 };
createCacheKey[11] = { borderBottomStartRadius: 8, borderBottomEndRadius: 8, height: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { FLAT: 0, [0]: "FLAT", ROUNDED: 1, [1]: "ROUNDED" };
BenefitsSection.Looks = obj4;
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.lg, padding: 16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx");

export { BenefitsSection };
export const GuildRoleSubscriptionListingPreview = function GuildRoleSubscriptionListingPreview(arg0) {
  let guildId;
  let listingId;
  const tmp = createCacheKey();
  ({ guildId, listingId } = arg0);
  let obj = importAll(14263);
  const first = callback(obj.useChannelBenefits(listingId), 1)[0];
  let obj1 = importAll(14263);
  const first1 = callback(obj1.useIntangibleBenefits(listingId), 1)[0];
  let obj2 = importAll(14263);
  obj = { style: tmp.container, children: null };
  obj = {};
  const role = obj2.useRole(listingId, guildId);
  const merged = Object.assign(arg0);
  const items = [callback2(Header, obj), , , , ];
  obj1 = { label: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl.string(require(1236) /* getSystemLocale */.t.FJZmYx);
  obj1[1] = callback2(require(14274) /* GuildRoleSubscriptionMemberPreview */.GuildRoleSubscriptionMemberPreview, { role });
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
    const obj4 = { children: null };
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