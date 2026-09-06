// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef17695 from "../../../../../../_runtime/metro/17695__.js";
import _modDef17696 from "../../../../../../_runtime/metro/17696__.js";
import _modDef17697 from "../../../../../../_runtime/metro/17697__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function HowItWorksCard(iconSource) {
  ({ cardNumber, description } = iconSource);
  const tmp = closure_6();
  let obj = {
    style: tmp.card,
    accessible: true,
    accessibilityLabel: "" + cardNumber + " - " + description,
    children: null,
  };
  obj = { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
  const items = [React4(Text_Text.Text, obj), ,];
  obj = {
    style: tmp.container,
    children: React4(FastImageDefault, {
      style: tmp.howItWorksCardIcon,
      source: iconSource.iconSource,
      resizeMode: "contain",
    }),
  };
  items[1] = React4(View, obj);
  items[2] = React4(Text_Text.Text, {
    style: tmp.howItWorksCardDescription,
    variant: "text-sm/normal",
    color: "mobile-text-heading-primary",
    children: description,
  });
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: { flex: 1 },
  horizontalContainer: { flex: 1, flexDirection: "row" },
  card: null,
  cardNumber: null,
  howItWorksCardDescription: null,
  howItWorksCardIcon: null,
};
createStyles = {
  flex: 1,
  marginVertical: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles.card = createStyles;
let size = {
  width: 18,
  height: 18,
  position: "absolute",
  top: 9,
  start: 9,
  textAlign: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: 9,
  overflow: "hidden",
};
createStyles.cardNumber = size;
createStyles.howItWorksCardDescription = {
  width: "100%",
  paddingHorizontal: 18,
  paddingVertical: 8,
  textAlign: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderBottomStartRadius: 8,
  borderBottomEndRadius: 8,
  overflow: "hidden",
};
createStyles.howItWorksCardIcon = { marginVertical: 24 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx",
);

export default function HowItWorksSection() {
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.horizontalContainer, children: null };
  obj = { cardNumber: 1, description: null, iconSource: null };
  const intl = util.intl;
  obj.description = intl.string(util.t.lT0ZNS);
  obj.iconSource = _modDef17695;
  const items = [React4(HowItWorksCard, obj), React4(native.Spacer, { size: 12 })];
  const obj1 = { cardNumber: 2, description: null, iconSource: null };
  const intl2 = util.intl;
  obj1.description = intl2.string(util.t.ihN2Wb);
  obj1.iconSource = _modDef17696;
  items[2] = React4(HowItWorksCard, obj1);
  obj.children = items;
  const items1 = [hasOwnProperty(View, obj)];
  const obj2 = { cardNumber: 3, description: null, iconSource: null };
  const intl3 = util.intl;
  obj2.description = intl3.string(util.t.c8krDQ);
  obj2.iconSource = _modDef17697;
  items1[1] = React4(HowItWorksCard, obj2);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
