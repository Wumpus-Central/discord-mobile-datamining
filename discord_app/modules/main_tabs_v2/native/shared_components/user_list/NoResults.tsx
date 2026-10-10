// === Module 11576: NoResults ===

// Module 11576 (NoResults)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5088 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({ headerContainer: { paddingHorizontal: 16 }, container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 32 }, image: { marginBottom: 12 }, textContainer: { justifyContent: "center", alignItems: "center" }, text: { textAlign: "center", marginTop: 4 }, fullHeightContentContainer: { paddingBottom: 0, paddingTop: 0 }, fullHeightScrollContent: { flexGrow: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NoResults(arg0) {
  const cResult = c.c(26);
  ({ title, subtitle, children, containerStyle, fullHeight, illustration } = arg0);
  let fullHeightContentContainer = undefined !== fullHeight && fullHeight;
  const tmp4 = closure_6();
  let fullHeightScrollContent = fullHeightContentContainer;
  if (fullHeightContentContainer) {
    fullHeightScrollContent = tmp4.fullHeightScrollContent;
  }
  if (fullHeightContentContainer) {
    fullHeightContentContainer = tmp4.fullHeightContentContainer;
  }
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp4.container) {
      if (cResult[2] === fullHeightContentContainer) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === illustration) {
        if (cResult[5] === tmp4.image) {
          let tmp6 = cResult[6];
        }
        if (cResult[7] === tmp4.text) {
          if (cResult[8] === title) {
            let tmp11 = cResult[9];
          }
          if (cResult[10] === tmp4.text) {
            if (cResult[11] === subtitle) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] === tmp4.textContainer) {
              if (cResult[14] === tmp11) {
                if (cResult[15] === tmp14) {
                  let tmp17 = cResult[16];
                }
                if (cResult[17] === tmp5) {
                  if (cResult[18] === tmp6) {
                    if (cResult[19] === tmp17) {
                      let tmp21 = cResult[20];
                    }
                    if (cResult[21] === children) {
                      if (cResult[22] === tmp4.headerContainer) {
                        if (cResult[23] === fullHeightScrollContent) {
                          if (cResult[24] === tmp21) {
                            let tmp25 = cResult[25];
                          }
                          return tmp25;
                        }
                      }
                    }
                    const obj2 = { style: tmp4.headerContainer, alwaysBounceVertical: false, contentContainerStyle: fullHeightScrollContent, children: null };
                    const items = [tmp21, children];
                    obj2.children = items;
                    const tmp28 = hasOwnProperty(React3, obj2);
                    cResult[21] = children;
                    cResult[22] = tmp4.headerContainer;
                    cResult[23] = fullHeightScrollContent;
                    cResult[24] = tmp21;
                    cResult[25] = tmp28;
                    tmp25 = tmp28;
                  }
                }
                const obj3 = { style: tmp5, children: null };
                const items1 = [tmp6, tmp17];
                obj3.children = items1;
                const tmp24 = hasOwnProperty(React2, obj3);
                cResult[17] = tmp5;
                cResult[18] = tmp6;
                cResult[19] = tmp17;
                cResult[20] = tmp24;
                tmp21 = tmp24;
              }
            }
            const obj4 = { style: tmp4.textContainer, children: null };
            const items2 = [tmp11, tmp14];
            obj4.children = items2;
            const tmp20 = hasOwnProperty(React2, obj4);
            cResult[13] = tmp4.textContainer;
            cResult[14] = tmp11;
            cResult[15] = tmp14;
            cResult[16] = tmp20;
            tmp17 = tmp20;
          }
          let tmp15 = null;
          if (null != subtitle) {
            const obj5 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp4.text, children: subtitle };
            tmp15 = React4(Text_Text.Text, obj5);
          }
          cResult[10] = tmp4.text;
          cResult[11] = subtitle;
          cResult[12] = tmp15;
          tmp14 = tmp15;
        }
        const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp4.text, children: title };
        const tmp13 = React4(Text_Text.Text, obj6);
        cResult[7] = tmp4.text;
        cResult[8] = title;
        cResult[9] = tmp13;
        tmp11 = tmp13;
      }
      let tmp8 = null != illustration;
      if (tmp8) {
        const obj7 = { style: tmp4.image, children: React4(illustration, {}) };
        tmp8 = React4(React2, obj7);
      }
      cResult[4] = illustration;
      cResult[5] = tmp4.image;
      cResult[6] = tmp8;
      tmp6 = tmp8;
    }
  }
  const items3 = [tmp4.container, fullHeightContentContainer, containerStyle];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.container;
  cResult[2] = fullHeightContentContainer;
  cResult[3] = items3;
  tmp5 = items3;
}) : (function NoResults(illustration) {
  ({ subtitle, fullHeight } = illustration);
  ({ title, children, containerStyle } = illustration);
  if (fullHeight === undefined) {
    fullHeight = false;
  }
  illustration = illustration.illustration;
  const tmp = closure_6();
  const obj = { style: tmp.headerContainer, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  let fullHeightScrollContent = fullHeight;
  if (fullHeight) {
    fullHeightScrollContent = tmp.fullHeightScrollContent;
  }
  obj.contentContainerStyle = fullHeightScrollContent;
  const items = [tmp.container, , ];
  if (fullHeight) {
    fullHeight = tmp.fullHeightContentContainer;
  }
  const obj2 = { style: items, children: null };
  items[1] = fullHeight;
  items[2] = containerStyle;
  let tmp5 = null != illustration;
  if (tmp5) {
    const obj3 = { style: tmp.image, children: React4(illustration, {}) };
    tmp5 = React4(React2, obj3);
  }
  const items1 = [tmp5, ];
  const obj4 = { style: tmp.textContainer, children: null };
  const items2 = [React4(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: title }), ];
  let tmp7Result = null;
  if (null != subtitle) {
    const obj6 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.text, children: subtitle };
    tmp7Result = React4(Text_Text.Text, obj6);
  }
  items2[1] = tmp7Result;
  obj4.children = items2;
  items1[1] = hasOwnProperty(React2, obj4);
  obj2.children = items1;
  const items3 = [hasOwnProperty(React2, obj2), children];
  obj.children = items3;
  return hasOwnProperty(React3, obj);
});