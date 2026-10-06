// === Module 10739: NoResults ===

// Module 10739 (NoResults)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ headerContainer: { paddingHorizontal: 16 }, container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 32 }, image: { marginBottom: 12 }, textContainer: { justifyContent: "center", alignItems: "center" }, text: { textAlign: "center", marginTop: 4 }, fullHeightContentContainer: { paddingBottom: 0, paddingTop: 0 }, fullHeightScrollContent: { flexGrow: 1 } });
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let containerStyle;
  let fullHeight;
  let illustration;
  let items1;
  let items2;
  let items3;
  let subtitle;
  let title;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(28);
  ({ title, subtitle, children, containerStyle, fullHeight, illustration } = arg0);
  let fullHeightContentContainer = undefined !== fullHeight && fullHeight;
  const tmp4 = closure_6();
  if (cResult[0] !== tmp4.headerContainer) {
    const items = [tmp4.headerContainer];
    cResult[0] = tmp4.headerContainer;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (fullHeightContentContainer) {
    fullHeightContentContainer = tmp4.fullHeightContentContainer;
  }
  if (cResult[2] === containerStyle) {
    if (cResult[3] === tmp4.container) {
      let tmp7;
      if (cResult[4] === fullHeightContentContainer) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === illustration) {
        let tmp8;
        if (cResult[7] === tmp4.image) {
          tmp8 = cResult[8];
        }
        if (cResult[9] === tmp4.text) {
          let tmp13;
          if (cResult[10] === title) {
            tmp13 = cResult[11];
          }
          if (cResult[12] === tmp4.text) {
            let tmp16;
            if (cResult[13] === subtitle) {
              tmp16 = cResult[14];
            }
            if (cResult[15] === tmp4.textContainer) {
              if (cResult[16] === tmp13) {
                let tmp19;
                if (cResult[17] === tmp16) {
                  tmp19 = cResult[18];
                }
                if (cResult[19] === tmp7) {
                  if (cResult[20] === tmp8) {
                    let tmp23;
                    if (cResult[21] === tmp19) {
                      tmp23 = cResult[22];
                    }
                    if (cResult[23] === children) {
                      if (cResult[24] === tmp23) {
                        if (cResult[25] === tmp5) {
                          let tmp27;
                          if (cResult[26] === (fullHeightContentContainer && tmp4.fullHeightScrollContent)) {
                            tmp27 = cResult[27];
                          }
                          return tmp27;
                        }
                      }
                    }
                    const obj2 = { style: tmp5, alwaysBounceVertical: false, contentContainerStyle: fullHeightContentContainer && tmp4.fullHeightScrollContent, children: items1 };
                    items1 = [tmp23, children];
                    const tmp30 = hasOwnProperty(_false, obj2);
                    cResult[23] = children;
                    cResult[24] = tmp23;
                    cResult[25] = tmp5;
                    cResult[26] = fullHeightContentContainer && tmp4.fullHeightScrollContent;
                    cResult[27] = tmp30;
                    tmp27 = tmp30;
                  }
                }
                const obj3 = { style: tmp7, children: items2 };
                items2 = [tmp8, tmp19];
                const tmp26 = hasOwnProperty(React2, obj3);
                cResult[19] = tmp7;
                cResult[20] = tmp8;
                cResult[21] = tmp19;
                cResult[22] = tmp26;
                tmp23 = tmp26;
              }
            }
            const obj4 = { style: tmp4.textContainer, children: items3 };
            items3 = [tmp13, tmp16];
            const tmp22 = hasOwnProperty(React2, obj4);
            cResult[15] = tmp4.textContainer;
            cResult[16] = tmp13;
            cResult[17] = tmp16;
            cResult[18] = tmp22;
            tmp19 = tmp22;
          }
          let tmp17 = null;
          if (null != subtitle) {
            const obj5 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp4.text, children: subtitle };
            tmp17 = React3(Text_Text.Text, obj5);
          }
          cResult[12] = tmp4.text;
          cResult[13] = subtitle;
          cResult[14] = tmp17;
          tmp16 = tmp17;
        }
        const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp4.text, children: title };
        const tmp15 = React3(Text_Text.Text, obj6);
        cResult[9] = tmp4.text;
        cResult[10] = title;
        cResult[11] = tmp15;
        tmp13 = tmp15;
      }
      let tmp10 = null != illustration;
      if (tmp10) {
        const obj7 = { style: tmp4.image, children: React3(illustration, {}) };
        tmp10 = React3(React2, obj7);
      }
      cResult[6] = illustration;
      cResult[7] = tmp4.image;
      cResult[8] = tmp10;
      tmp8 = tmp10;
    }
  }
  const items4 = [tmp4.container, fullHeightContentContainer, containerStyle];
  cResult[2] = containerStyle;
  cResult[3] = tmp4.container;
  cResult[4] = fullHeightContentContainer;
  cResult[5] = items4;
  tmp7 = items4;
}) : ((illustration) => {
  let children;
  let containerStyle;
  let fullHeight;
  let fullHeightScrollContent;
  let items;
  let items2;
  let items3;
  let items4;
  let subtitle;
  let title;
  ({ subtitle, fullHeight } = illustration);
  ({ title, children, containerStyle } = illustration);
  if (fullHeight === undefined) {
    fullHeight = false;
  }
  illustration = illustration.illustration;
  const tmp = closure_6();
  const obj = { style: items, alwaysBounceVertical: false, contentContainerStyle: fullHeightScrollContent, children: items4 };
  items = [tmp.headerContainer];
  fullHeightScrollContent = fullHeight && tmp.fullHeightScrollContent;
  const items1 = [tmp.container, , ];
  if (fullHeight) {
    fullHeight = tmp.fullHeightContentContainer;
  }
  const obj2 = { style: items1, children: items2 };
  items1[1] = fullHeight;
  items1[2] = containerStyle;
  let tmp5 = null != illustration;
  if (tmp5) {
    const obj3 = { style: tmp.image, children: React3(illustration, {}) };
    tmp5 = React3(React2, obj3);
  }
  items2 = [tmp5, ];
  const obj4 = { style: tmp.textContainer, children: items3 };
  items3 = [, ];
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: title };
  items3[0] = React3(Text_Text.Text, obj5);
  let tmp7Result = null;
  if (null != subtitle) {
    const obj6 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.text, children: subtitle };
    tmp7Result = React3(Text_Text.Text, obj6);
  }
  items3[1] = tmp7Result;
  items2[1] = hasOwnProperty(React2, obj4);
  items4 = [hasOwnProperty(React2, obj2), children];
  return hasOwnProperty(_false, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx");

export default tmp5;