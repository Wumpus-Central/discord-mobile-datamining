// === Module 17811: HowItWorksSection ===

// Module 17811 (HowItWorksSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import Text_Text from "Text/Text" /* 4632 */;
import FastImageDefault from "FastImage" /* 5668 */;
import _modDef17812 from "module_17812" /* 17812 */;
import _modDef17813 from "module_17813" /* 17813 */;
import _modDef17814 from "module_17814" /* 17814 */;
import noop from "module_19" /* 19 */;

require = fn;
function HowItWorksCard(iconSource) {
  ({ cardNumber, description } = iconSource);
  const tmp = closure_6();
  const obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description, children: null };
  const items = [React4(Text_Text.Text, { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber }), , ];
  const obj3 = { style: tmp.container, children: React4(FastImageDefault, { style: tmp.howItWorksCardIcon, source: iconSource.iconSource, resizeMode: "contain" }) };
  items[1] = React4(View, obj3);
  items[2] = React4(Text_Text.Text, { style: tmp.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description });
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" }, card: { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, cardNumber: null, howItWorksCardDescription: null, howItWorksCardIcon: null };
let size = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
obj2.cardNumber = size;
let obj3 = { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.howItWorksCardDescription = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
obj2.howItWorksCardIcon = { marginVertical: 24 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default function HowItWorksSection() {
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.horizontalContainer, children: null };
  const obj3 = { cardNumber: 1, description: null, iconSource: null };
  const intl = util.intl;
  obj3.description = intl.string(util.t.lT0ZNS);
  obj3.iconSource = _modDef17812;
  const items = [React4(HowItWorksCard, obj3), React4(native.Spacer, { size: 12 }), ];
  const obj4 = { cardNumber: 2, description: null, iconSource: null };
  const intl2 = util.intl;
  obj4.description = intl2.string(util.t.ihN2Wb);
  obj4.iconSource = _modDef17813;
  items[2] = React4(HowItWorksCard, obj4);
  obj2.children = items;
  const items1 = [hasOwnProperty(View, obj2), ];
  const obj5 = { cardNumber: 3, description: null, iconSource: null };
  const intl3 = util.intl;
  obj5.description = intl3.string(util.t.c8krDQ);
  obj5.iconSource = _modDef17814;
  items1[1] = React4(HowItWorksCard, obj5);
  obj.children = items1;
  return hasOwnProperty(View, obj);
};