// === Module 13595: GuildBoostingMarketingBoosterRecognitionCards ===

// Module 13595 (GuildBoostingMarketingBoosterRecognitionCards)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import HeartIcon from "HeartIcon" /* 8774 */;
import BoostGemIcon from "BoostGemIcon" /* 9375 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9752 */;
import BoostTier3Icon from "BoostTier3Icon" /* 13525 */;
import _modDef13596 from "module_13596" /* 13596 */;
import _modDef13597 from "module_13597" /* 13597 */;
import _modDef13598 from "module_13598" /* 13598 */;
import _modDef13599 from "module_13599" /* 13599 */;
import noop from "module_19" /* 19 */;

require = fn;
function Card(arg0) {
  const tmp = closure_6();
  let obj = { style: tmp.card, children: null };
  obj = { style: tmp.iconContainer, children: null };
  obj = { size: "lg", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
  ({ IconComponent, children } = arg0);
  obj.children = React4(IconComponent, obj);
  const items = [React4(View, obj), React4(Text_Text.Text, { style: tmp.description, variant: "text-sm/medium", children })];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { card: null, description: null, iconContainer: null };
createStyles = { minHeight: 124, width: 172, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", flexDirection: "column", alignItems: "center", margin: 5, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 13, paddingVertical: 16 };
createStyles.card = createStyles;
createStyles.description = { textAlign: "center" };
createStyles.iconContainer = { height: 30, marginBottom: 10 };
let closure_6 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center" }, title: { textAlign: "center", marginHorizontal: 34 }, recognitionCardsContainer: { marginTop: 15, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx");

export default function GuildBoostingMarketingBoosterRecognitionCards() {
  const tmp = closure_8();
  let obj = { style: tmp.container, children: null };
  obj = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.IzKs3o);
  const items = [React4(Text_Text.Heading, obj), ];
  obj = { style: tmp.recognitionCardsContainer, children: null };
  const obj1 = { icon: _modDef13596, IconComponent: BoostGemIcon.BoostGemIcon, children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.TZigSO);
  const items1 = [React4(Card, obj1), , , ];
  const obj2 = { icon: _modDef13597, IconComponent: BoostTier3Icon.BoostTier3Icon, children: null };
  const intl3 = util.intl;
  obj2.children = intl3.string(util.t.hjQuV2);
  items1[1] = React4(Card, obj2);
  const obj3 = { icon: _modDef13598, IconComponent: ShieldUserIcon.ShieldUserIcon, children: null };
  const intl4 = util.intl;
  obj3.children = intl4.string(util.t["2RUcaM"]);
  items1[2] = React4(Card, obj3);
  const obj4 = { icon: _modDef13599, IconComponent: HeartIcon.HeartIcon, children: null };
  const intl5 = util.intl;
  obj4.children = intl5.string(util.t.bJoZKV);
  items1[3] = React4(Card, obj4);
  obj.children = items1;
  items[1] = hasOwnProperty(View, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
};