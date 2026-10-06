// === Module 13603: NUFTemplateV2 ===

// Module 13603 (NUFTemplateV2)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 46, paddingLeft: 18, paddingRight: 18 }, illustration: { alignSelf: "stretch", alignItems: "center", marginBottom: 32 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let CTALabel;
  let description;
  let illustration;
  let items;
  let onCTAPress;
  let title;
  const obj = react2;
  const cResult = obj.c(18);
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === illustration) {
    let tmp5;
    if (cResult[1] === tmp4.illustration) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.title) {
      let tmp7;
      if (cResult[4] === title) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === description) {
        let tmp10;
        if (cResult[7] === tmp4.description) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === CTALabel) {
          let tmp13;
          if (cResult[10] === onCTAPress) {
            tmp13 = cResult[11];
          }
          if (cResult[12] === tmp4.container) {
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp10) {
                  let tmp16;
                  if (cResult[16] === tmp13) {
                    tmp16 = cResult[17];
                  }
                  return tmp16;
                }
              }
            }
          }
          const obj2 = { style: tmp4.container, children: items };
          items = [tmp5, tmp7, tmp10, tmp13];
          const tmp19 = React3(View, obj2);
          cResult[12] = tmp4.container;
          cResult[13] = tmp5;
          cResult[14] = tmp7;
          cResult[15] = tmp10;
          cResult[16] = tmp13;
          cResult[17] = tmp19;
          tmp16 = tmp19;
        }
        const obj3 = { text: CTALabel, onPress: onCTAPress, grow: true };
        const tmp15 = _false(components_Button_Button.Button, obj3);
        cResult[9] = CTALabel;
        cResult[10] = onCTAPress;
        cResult[11] = tmp15;
        tmp13 = tmp15;
      }
      const obj4 = { style: tmp4.description, variant: "text-md/medium", children: description };
      const tmp12 = _false(Text_Text.Text, obj4);
      cResult[6] = description;
      cResult[7] = tmp4.description;
      cResult[8] = tmp12;
      tmp10 = tmp12;
    }
    const obj5 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/bold", children: title };
    const tmp9 = _false(Text_Text.Text, obj5);
    cResult[3] = tmp4.title;
    cResult[4] = title;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const obj6 = { style: tmp4.illustration, children: illustration };
  const tmp6 = _false(View, obj6);
  cResult[0] = illustration;
  cResult[1] = tmp4.illustration;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let CTALabel;
  let description;
  let illustration;
  let items;
  let onCTAPress;
  let title;
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items };
  items = [, , , ];
  const obj2 = { style: tmp.illustration, children: illustration };
  items[0] = _false(View, obj2);
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", children: title };
  items[1] = _false(Text_Text.Text, obj3);
  const obj4 = { style: tmp.description, variant: "text-md/medium", children: description };
  items[2] = _false(Text_Text.Text, obj4);
  items[3] = _false(components_Button_Button.Button, { text: CTALabel, onPress: onCTAPress, grow: true });
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplateV2.tsx");

export default tmp4;