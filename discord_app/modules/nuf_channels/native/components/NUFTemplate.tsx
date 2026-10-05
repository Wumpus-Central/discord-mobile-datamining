// === Module 13589: NUFTemplate ===

// Module 13589 (NUFTemplate)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, Image: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", lineHeight: 18, marginBottom: 24 }, image: { marginBottom: 24 } };
obj2 = { padding: 16, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let CTALabel;
  let description;
  let imageSrc;
  let items;
  let onCTAPress;
  let title;
  const obj = react2;
  const cResult = obj.c(18);
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === tmp4.title) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === description) {
      let tmp7;
      if (cResult[4] === tmp4.description) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === imageSrc) {
        let tmp10;
        if (cResult[7] === tmp4.image) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === CTALabel) {
          let tmp14;
          if (cResult[10] === onCTAPress) {
            tmp14 = cResult[11];
          }
          if (cResult[12] === tmp4.container) {
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp10) {
                  let tmp17;
                  if (cResult[16] === tmp14) {
                    tmp17 = cResult[17];
                  }
                  return tmp17;
                }
              }
            }
          }
          const obj2 = { style: tmp4.container, children: items };
          items = [tmp5, tmp7, tmp10, tmp14];
          const tmp20 = hasOwnProperty(React2, obj2);
          cResult[12] = tmp4.container;
          cResult[13] = tmp5;
          cResult[14] = tmp7;
          cResult[15] = tmp10;
          cResult[16] = tmp14;
          cResult[17] = tmp20;
          tmp17 = tmp20;
        }
        const obj3 = { text: CTALabel, size: "md", onPress: onCTAPress, grow: true };
        const tmp16 = React3(components_Button_Button.Button, obj3);
        cResult[9] = CTALabel;
        cResult[10] = onCTAPress;
        cResult[11] = tmp16;
        tmp14 = tmp16;
      }
      const obj4 = { source: imageSrc, style: tmp4.image };
      const tmp13 = React3(_false, obj4);
      cResult[6] = imageSrc;
      cResult[7] = tmp4.image;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: description };
    const tmp9 = React3(Text_Text.Text, obj5);
    cResult[3] = description;
    cResult[4] = tmp4.description;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const obj6 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const tmp6 = React3(Text_Text.Text, obj6);
  cResult[0] = tmp4.title;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let CTALabel;
  let description;
  let imageSrc;
  let items;
  let onCTAPress;
  let title;
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  items = [, , , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  items[0] = React3(Text_Text.Text, obj2);
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = React3(Text_Text.Text, obj3);
  const obj4 = { source: imageSrc, style: tmp.image };
  items[2] = React3(_false, obj4);
  items[3] = React3(components_Button_Button.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true });
  return hasOwnProperty(React2, obj);
});
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default tmp5;