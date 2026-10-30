// === Module 16762: FamilyCenterLinkingBanner ===

// Module 16762 (FamilyCenterLinkingBanner)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef2537 from "module_2537" /* 2537 */;
import Text_Text from "Text/Text" /* 5619 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8362 */;
import useAgeSpecificText from "useAgeSpecificText" /* 13312 */;
import FamilyCenterBannerButton from "FamilyCenterBannerButton" /* 16725 */;
import WizardHatAndBookSpotIllustration from "WizardHatAndBookSpotIllustration" /* 16763 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterLinkingBannerParentContent() {
  const obj = { style: closure_7().container, children: null };
  const obj2 = { index: 1, header: null, description: null };
  const intl = util.intl;
  obj2.header = intl.string(_modDef2537["7xxAni"]);
  const intl2 = util.intl;
  obj2.description = intl2.string(_modDef2537["1M9So2"]);
  const items = [React4(FamilyCenterLinkingInstructionsRow, obj2), , , ];
  const obj3 = { index: 2, header: null, description: null };
  const intl3 = util.intl;
  obj3.header = intl3.string(_modDef2537["AXgx+a"]);
  const intl4 = util.intl;
  obj3.description = intl4.string(_modDef2537.GzMFnb);
  items[1] = React4(FamilyCenterLinkingInstructionsRow, obj3);
  const obj4 = { index: 3, header: null, description: null, isLast: true };
  const intl5 = util.intl;
  obj4.header = intl5.string(_modDef2537.MZn1tG);
  const intl6 = util.intl;
  obj4.description = intl6.string(_modDef2537["8rLBxD"]);
  items[2] = React4(FamilyCenterLinkingInstructionsRow, obj4);
  items[3] = React4(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
  obj.children = items;
  return hasOwnProperty(View, obj);
}
function FamilyCenterLinkingBannerTeenContent() {
  return React4(View, { style: closure_9().container, children: React4(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {}) });
}
function FamilyCenterLinkingInstructionsRow(arg0) {
  ({ header, description, index, isLast } = arg0);
  const tmp = closure_11();
  const obj = { style: tmp.row, children: null };
  const items = [React4(View, { style: tmp.circle, children: React4(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index }) }), ];
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = gap;
  const items2 = [React4(Text_Text.Text, { variant: "heading-sm/bold", children: header }), React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: description })];
  obj3.children = items2;
  items[1] = hasOwnProperty(View, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(5009);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2, overflow: "hidden" }, content: null, art: null, header: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2, overflow: "hidden" };
obj2.content = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.art = { marginBottom: nativeDefault.space.PX_12 };
let obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj2.header = { marginBottom: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
createStyles = fn(5009);
const obj8 = { container: null };
const obj6 = { marginBottom: nativeDefault.space.PX_8 };
obj8.container = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
let closure_7 = createStyles.createStyles(obj8);
createStyles = fn(5009);
const obj11 = { container: null };
const obj9 = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
obj11.container = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj11);
createStyles = fn(5009);
const obj14 = { row: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, gap: { marginBottom: 12 }, circle: null, rowContent: null };
let size = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj14.circle = size;
obj14.rowContent = { marginLeft: 12, flex: 1 };
let closure_11 = createStyles.createStyles(obj14);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default function FamilyCenterLinkingBanner() {
  const tmp = closure_6();
  const tmp2 = useIsInAdultAgeGroupDefault();
  const intl = util.intl;
  const obj = useAgeSpecificText;
  const intl2 = util.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2537.zUCWEL), intl2.string(_modDef2537.B0NPbp));
  const stringResult = intl.string(_modDef2537.zUCWEL);
  const intl3 = util.intl;
  const obj2 = useAgeSpecificText;
  const intl4 = util.intl;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.art, children: null };
  const ageSpecificText1 = obj2.useAgeSpecificText(intl3.format(_modDef2537.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" }), intl4.string(_modDef2537.JsAEDi));
  obj4.children = React4(WizardHatAndBookSpotIllustration.WizardHatAndBookSpotIllustration, { accessible: false });
  const items = [React4(View, obj4), , ];
  const obj5 = { style: tmp.content, children: null };
  const items1 = [React4(Text_Text.Text, { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText }), React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 })];
  obj5.children = items1;
  items[1] = hasOwnProperty(View, obj5);
  items[2] = React4(tmp2 ? FamilyCenterLinkingBannerParentContent : FamilyCenterLinkingBannerTeenContent, {});
  obj3.children = items;
  return hasOwnProperty(View, obj3);
};