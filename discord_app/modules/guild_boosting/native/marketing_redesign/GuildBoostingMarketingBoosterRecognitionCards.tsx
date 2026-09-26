// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import HeartIcon from "../../../../design/components/Icon/native/redesign/generated/HeartIcon.tsx";
import BoostGemIcon from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import ShieldUserIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import BoostTier3Icon from "../../../../design/components/Icon/native/redesign/generated/BoostTier3Icon.tsx";
import _modDef13139 from "../../../../../_runtime/metro/13139__.js";
import _modDef13140 from "../../../../../_runtime/metro/13140__.js";
import _modDef13141 from "../../../../../_runtime/metro/13141__.js";
import _modDef13142 from "../../../../../_runtime/metro/13142__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function Card(arg0) {
  const tmp = closure_6();
  const obj = { style: tmp.card, children: null };
  const obj2 = {
    style: tmp.iconContainer,
    children: React4(IconComponent, { size: "lg", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK }),
  };
  ({ IconComponent, children } = arg0);
  const items = [
    React4(View, obj2),
    React4(Text_Text.Text, { style: tmp.description, variant: "text-sm/medium", children }),
  ];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(4836);
let obj2 = {
  card: {
    minHeight: 124,
    width: 172,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
    borderRadius: nativeDefault.radii.sm,
    paddingHorizontal: 13,
    paddingVertical: 16,
  },
  description: { textAlign: "center" },
  iconContainer: { height: 30, marginBottom: 10 },
};
let closure_6 = createStyles.createStyles(obj2);
createStyles = fn(4836);
let closure_8 = createStyles.createStyles({
  container: { marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center" },
  title: { textAlign: "center", marginHorizontal: 34 },
  recognitionCardsContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx",
);

export default function GuildBoostingMarketingBoosterRecognitionCards() {
  const tmp = closure_8();
  const obj = { style: tmp.container, children: null };
  const obj2 = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.IzKs3o);
  const items = [React4(Text_Text.Heading, obj2)];
  const obj3 = { style: tmp.recognitionCardsContainer, children: null };
  const obj4 = { icon: _modDef13139, IconComponent: BoostGemIcon.BoostGemIcon, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.TZigSO);
  const items1 = [React4(Card, obj4), , ,];
  const obj5 = { icon: _modDef13140, IconComponent: BoostTier3Icon.BoostTier3Icon, children: null };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.hjQuV2);
  items1[1] = React4(Card, obj5);
  const obj6 = { icon: _modDef13141, IconComponent: ShieldUserIcon.ShieldUserIcon, children: null };
  const intl4 = util.intl;
  obj6.children = intl4.string(util.t["2RUcaM"]);
  items1[2] = React4(Card, obj6);
  const obj7 = { icon: _modDef13142, IconComponent: HeartIcon.HeartIcon, children: null };
  const intl5 = util.intl;
  obj7.children = intl5.string(util.t.bJoZKV);
  items1[3] = React4(Card, obj7);
  obj3.children = items1;
  items[1] = hasOwnProperty(View, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
