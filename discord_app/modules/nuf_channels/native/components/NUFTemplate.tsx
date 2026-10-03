// === Module 13587: NUFTemplate ===

// Module 13587 (NUFTemplate)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { padding: 16, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", lineHeight: 18, marginBottom: 24 }, image: { marginBottom: 24 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: 16, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === tmp4.title) {
    if (cResult[1] === title) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === description) {
      if (cResult[4] === tmp4.description) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === imageSrc) {
        if (cResult[7] === tmp4.image) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] === CTALabel) {
          if (cResult[10] === onCTAPress) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === tmp4.container) {
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp14) {
                    let tmp17 = cResult[17];
                  }
                  return tmp17;
                }
              }
            }
          }
          const obj2 = { style: tmp4.container, children: null };
          const items = [tmp5, tmp7, tmp10, tmp14];
          obj2.children = items;
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
        const tmp16 = React4(components_Button_Button.Button, obj3);
        cResult[9] = CTALabel;
        cResult[10] = onCTAPress;
        cResult[11] = tmp16;
        tmp14 = tmp16;
      }
      const obj4 = { source: imageSrc, style: tmp4.image };
      const tmp13 = React4(React3, obj4);
      cResult[6] = imageSrc;
      cResult[7] = tmp4.image;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: description };
    const tmp9 = React4(Text_Text.Text, obj5);
    cResult[3] = description;
    cResult[4] = tmp4.description;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = React4(Text_Text.Text, { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title });
  cResult[0] = tmp4.title;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj6 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
}) : ((arg0) => {
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const items = [React4(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title }), React4(Text_Text.Text, { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description }), React4(React3, { source: imageSrc, style: tmp.image }), React4(components_Button_Button.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true })];
  obj.children = items;
  return hasOwnProperty(React2, obj);
});