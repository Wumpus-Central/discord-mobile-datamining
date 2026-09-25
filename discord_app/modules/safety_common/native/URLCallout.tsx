// === Module 12489: URLCallout ===

// Module 12489 (URLCallout)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4825 */;
import SharedStateUtils from "SharedStateUtils" /* 12490 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsxs: c3, jsx: closure_4 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { linkCalloutContainer: { maxHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: nativeDefault.radii.md }, linkCalloutContainerText: null };
let obj3 = { maxHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: nativeDefault.radii.md };
obj2.linkCalloutContainerText = { padding: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12, textAlign: "center" };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export const URLCallout = function URLCallout(url) {
  const tmp = closure_5();
  const urlParts = SharedStateUtils.useUrlParts(url.url);
  const obj2 = { style: tmp.linkCalloutContainer, children: null };
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  const obj3 = { style: tmp.linkCalloutContainerText, variant: "text-md/normal", children: null };
  const obj4 = { variant: "text-md/normal", color: "text-muted", children: null };
  const items = [protocol, "//"];
  obj4.children = items;
  const items1 = [React3(Text_Text.Text, obj4), React4(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: hostname }), React4(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl })];
  obj3.children = items1;
  obj2.children = React3(Text_Text.Text, obj3);
  return React4(ScrollView, obj2);
};