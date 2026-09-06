// === Module 14913: FamilyCenterLinkingBanner ===

// Module 14913 (FamilyCenterLinkingBanner)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4556 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8646 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11919 */;
import FamilyCenterBannerButton from "FamilyCenterBannerButton" /* 14876 */;
import _modDef14914 from "module_14914" /* 14914 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterLinkingBannerParentContent() {
  let obj = { style: closure_8().container, children: null };
  obj = { index: 1, header: null, description: null };
  const intl = util.intl;
  obj.header = intl.string(_modDef2396["7xxAni"]);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef2396["1M9So2"]);
  const items = [hasOwnProperty(FamilyCenterLinkingInstructionsRow, obj), , , ];
  obj = { index: 2, header: null, description: null };
  const intl3 = util.intl;
  obj.header = intl3.string(_modDef2396["AXgx+a"]);
  const intl4 = util.intl;
  obj.description = intl4.string(_modDef2396.GzMFnb);
  items[1] = hasOwnProperty(FamilyCenterLinkingInstructionsRow, obj);
  const obj1 = { index: 3, header: null, description: null, isLast: true };
  const intl5 = util.intl;
  obj1.header = intl5.string(_modDef2396.MZn1tG);
  const intl6 = util.intl;
  obj1.description = intl6.string(_modDef2396["8rLBxD"]);
  items[2] = hasOwnProperty(FamilyCenterLinkingInstructionsRow, obj1);
  items[3] = hasOwnProperty(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
  obj.children = items;
  return timestampProducer(React3, obj);
}
function FamilyCenterLinkingBannerTeenContent() {
  return hasOwnProperty(React3, { style: closure_10().container, children: hasOwnProperty(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {}) });
}
function FamilyCenterLinkingInstructionsRow(arg0) {
  ({ header, description, index, isLast } = arg0);
  const tmp = closure_12();
  let obj = { style: tmp.row, children: null };
  obj = { style: tmp.circle, children: hasOwnProperty(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index }) };
  const items = [hasOwnProperty(React3, obj), ];
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  obj = { style: items1, children: null };
  items1[1] = gap;
  const items2 = [hasOwnProperty(Text_Text.Text, { variant: "heading-sm/bold", children: header }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: description })];
  obj.children = items2;
  items[1] = timestampProducer(React3, obj);
  obj.children = items;
  return timestampProducer(React3, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, content: null, art: null, header: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_16, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2, overflow: "hidden" };
createStyles.container = createStyles;
createStyles.content = { padding: nativeDefault.space.PX_16 };
let size = { width: "100%", height: 175, marginBottom: nativeDefault.space.PX_12 };
createStyles.art = size;
let obj1 = { padding: nativeDefault.space.PX_16 };
createStyles.header = { marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
const obj3 = { container: null };
const obj2 = { marginBottom: nativeDefault.space.PX_8 };
obj3.container = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
let closure_8 = createStyles.createStyles(obj3);
fn(4560);
const obj5 = { container: null };
createStyles = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
obj5.container = createStyles;
let closure_10 = createStyles.createStyles(obj5);
createStyles = fn(4560);
const obj7 = { row: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, gap: { marginBottom: 12 }, circle: null, rowContent: null };
const size1 = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj7.circle = size1;
obj7.rowContent = { marginLeft: 12, flex: 1 };
let closure_12 = createStyles.createStyles(obj7);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default function FamilyCenterLinkingBanner() {
  const tmp = closure_7();
  let obj = useAgeSpecificText;
  const intl = util.intl;
  const tmp2 = useIsInAdultAgeGroupDefault();
  const intl2 = util.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2396.zUCWEL), intl2.string(_modDef2396.B0NPbp));
  let obj1 = useAgeSpecificText;
  const intl3 = util.intl;
  const stringResult = intl.string(_modDef2396.zUCWEL);
  const intl4 = util.intl;
  obj = { style: tmp.container, children: null };
  obj = { source: null, style: null, resizeMethod: "resize" };
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.format(_modDef2396.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" }), intl4.string(_modDef2396.JsAEDi));
  obj.source = _modDef14914;
  obj.style = tmp.art;
  const items = [hasOwnProperty(React4, obj), , ];
  obj1 = { style: tmp.content, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 })];
  obj1.children = items1;
  items[1] = timestampProducer(React3, obj1);
  items[2] = hasOwnProperty(tmp2 ? FamilyCenterLinkingBannerParentContent : FamilyCenterLinkingBannerTeenContent, {});
  obj.children = items;
  return timestampProducer(React3, obj);
};