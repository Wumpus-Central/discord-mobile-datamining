// discord_app/modules/parent_tools/native/FamilyCenterLinkingBanner.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2397 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import FamilyCenterBannerButton from "FamilyCenterBannerButton.tsx";
import _modDef15038 from "../../../../_runtime/metro/15038__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FamilyCenterLinkingBannerParentContent() {
  const obj = { style: closure_8().container, children: null };
  const obj2 = { index: 1, header: null, description: null };
  const intl = util.intl;
  obj2.header = intl.string(_modDef2397["7xxAni"]);
  const intl2 = util.intl;
  obj2.description = intl2.string(_modDef2397["1M9So2"]);
  const items = [hasOwnProperty(FamilyCenterLinkingInstructionsRow, obj2), , ,];
  const obj3 = { index: 2, header: null, description: null };
  const intl3 = util.intl;
  obj3.header = intl3.string(_modDef2397["AXgx+a"]);
  const intl4 = util.intl;
  obj3.description = intl4.string(_modDef2397.GzMFnb);
  items[1] = hasOwnProperty(FamilyCenterLinkingInstructionsRow, obj3);
  const obj4 = { index: 3, header: null, description: null, isLast: true };
  const intl5 = util.intl;
  obj4.header = intl5.string(_modDef2397.MZn1tG);
  const intl6 = util.intl;
  obj4.description = intl6.string(_modDef2397["8rLBxD"]);
  items[2] = hasOwnProperty(FamilyCenterLinkingInstructionsRow, obj4);
  items[3] = hasOwnProperty(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
  obj.children = items;
  return timestampProducer(React3, obj);
}
function FamilyCenterLinkingBannerTeenContent() {
  return hasOwnProperty(React3, {
    style: closure_10().container,
    children: hasOwnProperty(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {}),
  });
}
function FamilyCenterLinkingInstructionsRow(arg0) {
  ({ header, description, index, isLast } = arg0);
  const tmp = closure_12();
  const obj = { style: tmp.row, children: null };
  const items = [
    hasOwnProperty(React3, {
      style: tmp.circle,
      children: hasOwnProperty(Text_Text.Text, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: index,
      }),
    }),
  ];
  const items1 = [tmp.rowContent];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = gap;
  const items2 = [
    hasOwnProperty(Text_Text.Text, { variant: "heading-sm/bold", children: header }),
    hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: description }),
  ];
  obj3.children = items2;
  items[1] = timestampProducer(React3, obj3);
  obj.children = items;
  return timestampProducer(React3, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(4640);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    marginTop: nativeDefault.space.PX_16,
    paddingTop: 0,
    paddingBottom: nativeDefault.space.PX_16,
    alignItems: "center",
    borderRadius: nativeDefault.radii.md,
    elevation: 2,
    overflow: "hidden",
  },
  content: null,
  art: null,
  header: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: 0,
  paddingBottom: nativeDefault.space.PX_16,
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
  elevation: 2,
  overflow: "hidden",
};
obj2.content = { padding: nativeDefault.space.PX_16 };
let size = { width: "100%", height: 175, marginBottom: nativeDefault.space.PX_12 };
obj2.art = size;
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.header = { marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(4640);
const obj6 = { container: null };
let obj5 = { marginBottom: nativeDefault.space.PX_8 };
obj6.container = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
let closure_8 = createStyles.createStyles(obj6);
createStyles = fn(4640);
const obj9 = { container: null };
const obj8 = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
obj9.container = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj9);
createStyles = fn(4640);
const obj12 = {
  row: { display: "flex", flexDirection: "row", alignItems: "flex-start" },
  gap: { marginBottom: 12 },
  circle: null,
  rowContent: null,
};
const size1 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj12.circle = size1;
obj12.rowContent = { marginLeft: 12, flex: 1 };
let closure_12 = createStyles.createStyles(obj12);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default function FamilyCenterLinkingBanner() {
  const tmp = closure_7();
  const tmp2 = useIsInAdultAgeGroupDefault();
  const intl = util.intl;
  const obj = useAgeSpecificText;
  const intl2 = util.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2397.zUCWEL), intl2.string(_modDef2397.B0NPbp));
  const stringResult = intl.string(_modDef2397.zUCWEL);
  const intl3 = util.intl;
  const obj2 = useAgeSpecificText;
  const intl4 = util.intl;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { source: null, style: null, resizeMethod: "resize" };
  const ageSpecificText1 = obj2.useAgeSpecificText(
    intl3.format(_modDef2397.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" }),
    intl4.string(_modDef2397.JsAEDi),
  );
  obj4.source = _modDef15038;
  obj4.style = tmp.art;
  const items = [hasOwnProperty(React4, obj4), ,];
  const obj5 = { style: tmp.content, children: null };
  const items1 = [
    hasOwnProperty(Text_Text.Text, { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText }),
    hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 }),
  ];
  obj5.children = items1;
  items[1] = timestampProducer(React3, obj5);
  items[2] = hasOwnProperty(tmp2 ? FamilyCenterLinkingBannerParentContent : FamilyCenterLinkingBannerTeenContent, {});
  obj3.children = items;
  return timestampProducer(React3, obj3);
}
