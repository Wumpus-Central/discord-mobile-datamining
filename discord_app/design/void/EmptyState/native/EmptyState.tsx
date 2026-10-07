// === Module 13959: EmptyState ===

// Module 13959 (EmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import shared from "shared" /* 4735 */;
import Text_Text from "Text/Text" /* 4892 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { textTransform: "none" };
let closure_7 = { accessible: false, accessibilityRole: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 }, textGroup: { alignSelf: "stretch", alignItems: "center" }, emptyTitle: { marginTop: 20, textTransform: "uppercase" }, emptyBody: { textAlign: "center", marginTop: 8 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((Illustration) => {
  const cResult = c.c(30);
  const tmp4 = closure_8();
  const themeContext = shared.useThemeContext();
  let hasItem;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      hasItem = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  shared;
  if (null != Illustration.Illustration) {
    if (cResult[0] === Illustration.imageStyle) {
      if (cResult[1] === tmp4.emptyImage) {
        let tmp20 = cResult[2];
      }
      if (cResult[3] === Illustration.Illustration) {
      }
      const obj3 = {};
      const merged = Object.assign(closure_7);
      obj3.resizeMode = "contain";
      obj3.style = tmp20;
      const tmp26 = React4(Illustration.Illustration, obj3);
      cResult[3] = Illustration.Illustration;
      cResult[4] = tmp20;
      cResult[5] = tmp26;
    }
    const items = [tmp4.emptyImage, Illustration.imageStyle];
    cResult[0] = Illustration.imageStyle;
    cResult[1] = tmp4.emptyImage;
    cResult[2] = items;
    tmp20 = items;
  } else {
    let tmp10 = null;
    if (null != Illustration.lightSource) {
      tmp10 = null;
      if (null != Illustration.darkSource) {
        const tmp11 = shared.isThemeLight(tmp9) ? Illustration.lightSource : Illustration.darkSource;
        if (cResult[6] === Illustration.imageStyle) {
          if (cResult[7] === tmp4.emptyImage) {
            let tmp12 = cResult[8];
          }
          if (cResult[9] === tmp11) {
            if (cResult[10] === tmp12) {
              let tmp13 = cResult[11];
            }
            tmp10 = tmp13;
          }
          const obj4 = {};
          const merged1 = Object.assign(closure_7);
          obj4.resizeMode = "contain";
          obj4.source = tmp11;
          obj4.style = tmp12;
          const tmp19 = React4(React3, obj4);
          cResult[9] = tmp11;
          cResult[10] = tmp12;
          cResult[11] = tmp19;
          tmp13 = tmp19;
        }
        const items1 = [tmp4.emptyImage, Illustration.imageStyle];
        cResult[6] = Illustration.imageStyle;
        cResult[7] = tmp4.emptyImage;
        cResult[8] = items1;
        tmp12 = items1;
        const tmpResult2 = shared;
      }
    }
    ({ style, body, title, children, bodyStyle, titleStyle } = Illustration);
    if (cResult[12] === style) {
      if (cResult[13] === tmp4.container) {
        let tmp29 = cResult[14];
      }
      if (cResult[15] === body) {
        if (cResult[16] === bodyStyle) {
          if (cResult[17] === tmp28) {
            if (cResult[18] === tmp4.emptyBody) {
              if (cResult[19] === tmp4.emptyTitle) {
                if (cResult[20] === tmp4.textGroup) {
                  if (cResult[21] === title) {
                    if (cResult[22] === titleStyle) {
                      if (cResult[23] === closure_6) {
                        let tmp30 = cResult[24];
                      }
                      if (cResult[25] === children) {
                        if (cResult[26] === tmp10) {
                          if (cResult[27] === tmp29) {
                            if (cResult[28] === tmp30) {
                              let tmp38 = cResult[29];
                            }
                            return tmp38;
                          }
                        }
                      }
                      const obj5 = { style: tmp29, children: null };
                      const items2 = [tmp10, tmp30, children];
                      obj5.children = items2;
                      const tmp41 = hasOwnProperty(React2, obj5);
                      cResult[25] = children;
                      cResult[26] = tmp10;
                      cResult[27] = tmp29;
                      cResult[28] = tmp30;
                      cResult[29] = tmp41;
                      tmp38 = tmp41;
                    }
                  }
                }
              }
            }
          }
        }
      }
      let tmp32Result = null;
      if (tmp28) {
        const obj6 = { style: tmp4.textGroup, accessible: true, children: null };
        let tmp34 = null;
        if (null != title) {
          const obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null, children: null };
          const items3 = [tmp4.emptyTitle, titleStyle, closure_6];
          obj7.style = items3;
          obj7.children = title;
          tmp34 = React4(Text_Text.Text, obj7);
        }
        const items4 = [tmp34, ];
        let tmp36 = null;
        if (null != body) {
          const obj8 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: null, children: null };
          const items5 = [tmp4.emptyBody, bodyStyle];
          obj8.style = items5;
          obj8.children = body;
          tmp36 = React4(Text_Text.Text, obj8);
        }
        items4[1] = tmp36;
        obj6.children = items4;
        tmp32Result = hasOwnProperty(React2, obj6);
      }
      cResult[15] = body;
      cResult[16] = bodyStyle;
      cResult[17] = tmp28;
      cResult[18] = tmp4.emptyBody;
      cResult[19] = tmp4.emptyTitle;
      cResult[20] = tmp4.textGroup;
      cResult[21] = title;
      cResult[22] = titleStyle;
      cResult[23] = closure_6;
      cResult[24] = tmp32Result;
      tmp30 = tmp32Result;
    }
    const items6 = [tmp4.container, style];
    cResult[12] = style;
    cResult[13] = tmp4.container;
    cResult[14] = items6;
    tmp29 = items6;
  }
}) : ((Illustration) => {
  const tmp = closure_8();
  const themeContext = shared.useThemeContext();
  let hasItem;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      hasItem = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  shared;
  if (null != Illustration.Illustration) {
    const obj2 = {};
    const merged = Object.assign(closure_7);
    obj2.resizeMode = "contain";
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj2.style = items;
    let tmp11Result = React4(Illustration.Illustration, obj2);
  } else {
    tmp11Result = null;
    if (tmp9) {
      const obj3 = {};
      const merged1 = Object.assign(closure_7);
      obj3.resizeMode = "contain";
      obj3.source = shared.isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource;
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj3.style = items1;
      tmp11Result = React4(React3, obj3);
      const tmp2Result2 = shared;
    }
    tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj4 = { style: null, children: null };
  const items2 = [tmp.container, Illustration.style];
  obj4.style = items2;
  const items3 = [tmp11Result, , ];
  if (null != title) {
    const obj5 = { style: tmp.textGroup, accessible: true, children: null };
    let tmp25 = null;
    if (null != title) {
      const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null, children: null };
      const items4 = [tmp.emptyTitle, tmp21, closure_6];
      obj6.style = items4;
      obj6.children = title;
      tmp25 = React4(Text_Text.Text, obj6);
    }
    const items5 = [tmp25, ];
    let tmp27 = null;
    if (null != body) {
      const obj7 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: null, children: null };
      const items6 = [tmp.emptyBody, tmp20];
      obj7.style = items6;
      obj7.children = body;
      tmp27 = React4(Text_Text.Text, obj7);
    }
    items5[1] = tmp27;
    obj5.children = items5;
    let tmp22Result = hasOwnProperty(React2, obj5);
  } else {
    tmp22Result = null;
  }
  items3[1] = tmp22Result;
  items3[2] = Illustration.children;
  obj4.children = items3;
  return hasOwnProperty(React2, obj4);
});