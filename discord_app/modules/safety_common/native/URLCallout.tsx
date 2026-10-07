// === Module 12766: URLCallout ===

// Module 12766 (URLCallout)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import SharedStateUtils from "SharedStateUtils" /* 12767 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsxs: c3, jsx: closure_4 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { linkCalloutContainer: { maxHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: nativeDefault.radii.md }, linkCalloutContainerText: null };
let obj3 = { maxHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: nativeDefault.radii.md };
obj2.linkCalloutContainerText = { padding: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12, textAlign: "center" };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export const URLCallout = ReactCompilerGating.isReactCompilerEnabled() ? ((url) => {
  const cResult = c.c(14);
  const tmp4 = closure_5();
  const urlParts = SharedStateUtils.useUrlParts(url.url);
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  if (cResult[0] !== protocol) {
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
    const items = [protocol, "//"];
    obj3.children = items;
    const tmp8 = React3(Text_Text.Text, obj3);
    cResult[0] = protocol;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== hostname) {
    const obj4 = { variant: "text-md/semibold", color: "text-default", children: hostname };
    const tmp11 = React4(Text_Text.Text, obj4);
    cResult[2] = hostname;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== theRestOfTheUrl) {
    const obj5 = { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl };
    const tmp14 = React4(Text_Text.Text, obj5);
    cResult[4] = theRestOfTheUrl;
    cResult[5] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.linkCalloutContainerText) {
    if (cResult[7] === tmp6) {
      if (cResult[8] === tmp9) {
        if (cResult[9] === tmp12) {
          let tmp15 = cResult[10];
        }
        if (cResult[11] === tmp4.linkCalloutContainer) {
          if (cResult[12] === tmp15) {
            let tmp17 = cResult[13];
          }
          return tmp17;
        }
        const obj6 = { style: tmp4.linkCalloutContainer, children: tmp15 };
        const tmp20 = React4(ScrollView, obj6);
        cResult[11] = tmp4.linkCalloutContainer;
        cResult[12] = tmp15;
        cResult[13] = tmp20;
        tmp17 = tmp20;
      }
    }
  }
  const obj7 = { style: tmp4.linkCalloutContainerText, variant: "text-md/normal", children: null };
  const items1 = [tmp6, tmp9, tmp12];
  obj7.children = items1;
  const tmp16 = React3(Text_Text.Text, obj7);
  cResult[6] = tmp4.linkCalloutContainerText;
  cResult[7] = tmp6;
  cResult[8] = tmp9;
  cResult[9] = tmp12;
  cResult[10] = tmp16;
  tmp15 = tmp16;
}) : ((url) => {
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
});