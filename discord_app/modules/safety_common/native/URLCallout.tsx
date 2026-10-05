// === Module 12751: URLCallout ===

// Module 12751 (URLCallout)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import SharedStateUtils from "SharedStateUtils" /* 12752 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let url;

let c3;
let closure_4;
let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
({ jsxs: c3, jsx: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { linkCalloutContainer: obj2, linkCalloutContainerText: obj3 };
obj2 = { maxHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12, textAlign: "center" };
let closure_5 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((url) => {
  let hostname;
  let items;
  let items1;
  let protocol;
  let theRestOfTheUrl;
  let tmp12;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(14);
  url = url.url;
  const tmp4 = closure_5();
  const obj2 = SharedStateUtils;
  const urlParts = obj2.useUrlParts(url);
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  if (cResult[0] !== protocol) {
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: items };
    items = [protocol, "//"];
    const tmp8 = _false(Text_Text.Text, obj3);
    cResult[0] = protocol;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== hostname) {
    const obj4 = { variant: "text-md/semibold", color: "text-default", children: hostname };
    const tmp11 = React3(Text_Text.Text, obj4);
    cResult[2] = hostname;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== theRestOfTheUrl) {
    const obj5 = { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl };
    const tmp14 = React3(Text_Text.Text, obj5);
    cResult[4] = theRestOfTheUrl;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.linkCalloutContainerText) {
    if (cResult[7] === tmp6) {
      if (cResult[8] === tmp9) {
        let tmp15;
        if (cResult[9] === tmp12) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp4.linkCalloutContainer) {
          let tmp17;
          if (cResult[12] === tmp15) {
            tmp17 = cResult[13];
          }
          return tmp17;
        }
        const obj6 = { style: tmp4.linkCalloutContainer, children: tmp15 };
        const tmp20 = React3(ScrollView, obj6);
        cResult[11] = tmp4.linkCalloutContainer;
        cResult[12] = tmp15;
        cResult[13] = tmp20;
        tmp17 = tmp20;
      }
    }
  }
  const obj7 = { style: tmp4.linkCalloutContainerText, variant: "text-md/normal", children: items1 };
  items1 = [tmp6, tmp9, tmp12];
  const tmp16 = _false(Text_Text.Text, obj7);
  cResult[6] = tmp4.linkCalloutContainerText;
  cResult[7] = tmp6;
  cResult[8] = tmp9;
  cResult[9] = tmp12;
  cResult[10] = tmp16;
  tmp15 = tmp16;
}) : ((url) => {
  let Text;
  let hostname;
  let items;
  let items1;
  let obj3;
  let protocol;
  let theRestOfTheUrl;
  url = url.url;
  const tmp = closure_5();
  const obj = SharedStateUtils;
  const urlParts = obj.useUrlParts(url);
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  const obj2 = { style: tmp.linkCalloutContainer, children: _false(Text, obj3) };
  obj3 = { style: tmp.linkCalloutContainerText, variant: "text-md/normal", children: items1 };
  Text = Text_Text.Text;
  const obj4 = { variant: "text-md/normal", color: "text-muted", children: items };
  items = [protocol, "//"];
  items1 = [_false(Text_Text.Text, obj4), React3(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: hostname }), React3(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl })];
  return React3(ScrollView, obj2);
});
const result = size.fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export const URLCallout = tmp5;