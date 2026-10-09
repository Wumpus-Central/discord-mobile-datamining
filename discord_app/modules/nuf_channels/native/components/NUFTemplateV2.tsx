// === Module 13517: NUFTemplateV2 ===

// Module 13517 (NUFTemplateV2)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 46, paddingLeft: 18, paddingRight: 18 }, illustration: { alignSelf: "stretch", alignItems: "center", marginBottom: 32 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplateV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NUFActionSheetTemplate(arg0) {
  const cResult = c.c(18);
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === illustration) {
    if (cResult[1] === tmp4.illustration) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.title) {
      if (cResult[4] === title) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === description) {
        if (cResult[7] === tmp4.description) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] === CTALabel) {
          if (cResult[10] === onCTAPress) {
            let tmp13 = cResult[11];
          }
          if (cResult[12] === tmp4.container) {
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp13) {
                    let tmp16 = cResult[17];
                  }
                  return tmp16;
                }
              }
            }
          }
          const obj2 = { style: tmp4.container, children: null };
          const items = [tmp5, tmp7, tmp10, tmp13];
          obj2.children = items;
          const tmp19 = React4(View, obj2);
          cResult[12] = tmp4.container;
          cResult[13] = tmp5;
          cResult[14] = tmp7;
          cResult[15] = tmp10;
          cResult[16] = tmp13;
          cResult[17] = tmp19;
          tmp16 = tmp19;
        }
        const obj3 = { text: CTALabel, onPress: onCTAPress, grow: true };
        const tmp15 = React3(components_Button_Button.Button, obj3);
        cResult[9] = CTALabel;
        cResult[10] = onCTAPress;
        cResult[11] = tmp15;
        tmp13 = tmp15;
      }
      const obj4 = { style: tmp4.description, variant: "text-md/medium", children: description };
      const tmp12 = React3(Text_Text.Text, obj4);
      cResult[6] = description;
      cResult[7] = tmp4.description;
      cResult[8] = tmp12;
      tmp10 = tmp12;
    }
    const obj5 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/bold", children: title };
    const tmp9 = React3(Text_Text.Text, obj5);
    cResult[3] = tmp4.title;
    cResult[4] = title;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = React3(View, { style: tmp4.illustration, children: illustration });
  cResult[0] = illustration;
  cResult[1] = tmp4.illustration;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj6 = { style: tmp4.illustration, children: illustration };
}) : (function NUFActionSheetTemplate(arg0) {
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const items = [React3(View, { style: tmp.illustration, children: illustration }), React3(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", children: title }), React3(Text_Text.Text, { style: tmp.description, variant: "text-md/medium", children: description }), React3(components_Button_Button.Button, { text: CTALabel, onPress: onCTAPress, grow: true })];
  obj.children = items;
  return React4(View, obj);
});