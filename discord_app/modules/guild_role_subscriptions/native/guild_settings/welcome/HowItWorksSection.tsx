// === Module 19823: HowItWorksSection ===

// Module 19823 (HowItWorksSection)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import PerksTicketSpotIllustration from "PerksTicketSpotIllustration" /* 19824 */;
import AnnouncementMegaphoneSpotIllustration from "AnnouncementMegaphoneSpotIllustration" /* 19828 */;
import CoinsAndBagSpotIllustration from "CoinsAndBagSpotIllustration" /* 19832 */;
import noop from "module_19" /* 19 */;

require = fn;
function HowItWorksCard(Illustration) {
  ({ cardNumber, description } = Illustration);
  const tmp = closure_5();
  const obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description, children: null };
  const items = [React3(Text_Text.Text, { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber }), React3(View, { style: tmp.howItWorksCardIcon, children: React3(Illustration.Illustration, { width: 108 }) }), React3(Text_Text.Text, { style: tmp.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description })];
  obj.children = items;
  return React4(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" }, card: { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, cardNumber: null, howItWorksCardDescription: null, howItWorksCardIcon: null };
let size = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
obj2.cardNumber = size;
let obj3 = { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.howItWorksCardDescription = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
obj2.howItWorksCardIcon = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 16 };
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default function HowItWorksSection() {
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.horizontalContainer, children: null };
  const obj3 = { cardNumber: 1, description: null, Illustration: null };
  const intl = util.intl;
  obj3.description = intl.string(util.t.lT0ZNS);
  obj3.Illustration = PerksTicketSpotIllustration.PerksTicketSpotIllustration;
  const items = [React3(HowItWorksCard, obj3), React3(native.Spacer, { size: 12 }), ];
  const obj4 = { cardNumber: 2, description: null, Illustration: null };
  const intl2 = util.intl;
  obj4.description = intl2.string(util.t.ihN2Wb);
  obj4.Illustration = AnnouncementMegaphoneSpotIllustration.AnnouncementMegaphoneSpotIllustration;
  items[2] = React3(HowItWorksCard, obj4);
  obj2.children = items;
  const items1 = [React4(View, obj2), ];
  const obj5 = { cardNumber: 3, description: null, Illustration: null };
  const intl3 = util.intl;
  obj5.description = intl3.string(util.t.c8krDQ);
  obj5.Illustration = CoinsAndBagSpotIllustration.CoinsAndBagSpotIllustration;
  items1[1] = React3(HowItWorksCard, obj5);
  obj.children = items1;
  return React4(View, obj);
};