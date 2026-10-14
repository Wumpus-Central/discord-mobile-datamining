// discord_app/design/void/EmptyState/native/EmptyState.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../shared.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { textTransform: "none" };
let closure_7 = {
  accessible: false,
  accessibilityRole: "none",
  accessibilityElementsHidden: true,
  importantForAccessibility: "no-hide-descendants",
};
const createStyles = fn(5096);
let obj2 = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 36,
    paddingBottom: 80,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  },
  emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 },
  textGroup: { alignSelf: "stretch", alignItems: "center" },
  emptyTitle: { marginTop: 20, textTransform: "uppercase" },
  emptyBody: { textAlign: "center", marginTop: 8 },
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 36,
  paddingBottom: 80,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyState(Illustration) {
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
            let tmp21 = cResult[2];
          }
          if (cResult[3] === Illustration.Illustration) {
          }
          const obj3 = {};
          const merged = Object.assign(closure_7);
          obj3.resizeMode = "contain";
          obj3.style = tmp21;
          const tmp27 = React4(Illustration.Illustration, obj3);
          cResult[3] = Illustration.Illustration;
          cResult[4] = tmp21;
          cResult[5] = tmp27;
        }
        const items = [tmp4.emptyImage, Illustration.imageStyle];
        cResult[0] = Illustration.imageStyle;
        cResult[1] = tmp4.emptyImage;
        cResult[2] = items;
        tmp21 = items;
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
              const tmp20 = React4(FastImageDefault, obj4);
              cResult[9] = tmp11;
              cResult[10] = tmp12;
              cResult[11] = tmp20;
              tmp13 = tmp20;
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
            let tmp30 = cResult[14];
          }
          if (cResult[15] === body) {
            if (cResult[16] === bodyStyle) {
              if (cResult[17] === tmp29) {
                if (cResult[18] === tmp4.emptyBody) {
                  if (cResult[19] === tmp4.emptyTitle) {
                    if (cResult[20] === tmp4.textGroup) {
                      if (cResult[21] === title) {
                        if (cResult[22] === titleStyle) {
                          if (cResult[23] === closure_6) {
                            let tmp31 = cResult[24];
                          }
                          if (cResult[25] === children) {
                            if (cResult[26] === tmp10) {
                              if (cResult[27] === tmp30) {
                                if (cResult[28] === tmp31) {
                                  let tmp39 = cResult[29];
                                }
                                return tmp39;
                              }
                            }
                          }
                          const obj5 = { style: tmp30, children: null };
                          const items2 = [tmp10, tmp31, children];
                          obj5.children = items2;
                          const tmp42 = hasOwnProperty(View, obj5);
                          cResult[25] = children;
                          cResult[26] = tmp10;
                          cResult[27] = tmp30;
                          cResult[28] = tmp31;
                          cResult[29] = tmp42;
                          tmp39 = tmp42;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          let tmp33Result = null;
          if (tmp29) {
            const obj6 = { style: tmp4.textGroup, accessible: true, children: null };
            let tmp35 = null;
            if (null != title) {
              const obj7 = {
                variant: "heading-lg/semibold",
                color: "mobile-text-heading-primary",
                maxFontSizeMultiplier: 2,
                style: null,
                children: null,
              };
              const items3 = [tmp4.emptyTitle, titleStyle, closure_6];
              obj7.style = items3;
              obj7.children = title;
              tmp35 = React4(Text_Text.Text, obj7);
            }
            const items4 = [tmp35];
            let tmp37 = null;
            if (null != body) {
              const obj8 = {
                variant: "text-md/medium",
                color: "text-muted",
                maxFontSizeMultiplier: 2,
                style: null,
                children: null,
              };
              const items5 = [tmp4.emptyBody, bodyStyle];
              obj8.style = items5;
              obj8.children = body;
              tmp37 = React4(Text_Text.Text, obj8);
            }
            items4[1] = tmp37;
            obj6.children = items4;
            tmp33Result = hasOwnProperty(View, obj6);
          }
          cResult[15] = body;
          cResult[16] = bodyStyle;
          cResult[17] = tmp29;
          cResult[18] = tmp4.emptyBody;
          cResult[19] = tmp4.emptyTitle;
          cResult[20] = tmp4.textGroup;
          cResult[21] = title;
          cResult[22] = titleStyle;
          cResult[23] = closure_6;
          cResult[24] = tmp33Result;
          tmp31 = tmp33Result;
        }
        const items6 = [tmp4.container, style];
        cResult[12] = style;
        cResult[13] = tmp4.container;
        cResult[14] = items6;
        tmp30 = items6;
      }
    }
  : function EmptyState(Illustration) {
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
          const tmp13 = FastImageDefault;
          obj3.source = shared.isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource;
          const items1 = [tmp.emptyImage, Illustration.imageStyle];
          obj3.style = items1;
          tmp11Result = React4(tmp13, obj3);
          const tmp2Result2 = shared;
        }
        tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
      }
      ({ body, title } = Illustration);
      const obj4 = { style: null, children: null };
      const items2 = [tmp.container, Illustration.style];
      obj4.style = items2;
      const items3 = [tmp11Result, ,];
      if (null != title) {
        const obj5 = { style: tmp.textGroup, accessible: true, children: null };
        let tmp26 = null;
        if (null != title) {
          const obj6 = {
            variant: "heading-lg/semibold",
            color: "mobile-text-heading-primary",
            maxFontSizeMultiplier: 2,
            style: null,
            children: null,
          };
          const items4 = [tmp.emptyTitle, tmp22, closure_6];
          obj6.style = items4;
          obj6.children = title;
          tmp26 = React4(Text_Text.Text, obj6);
        }
        const items5 = [tmp26];
        let tmp28 = null;
        if (null != body) {
          const obj7 = {
            variant: "text-md/medium",
            color: "text-muted",
            maxFontSizeMultiplier: 2,
            style: null,
            children: null,
          };
          const items6 = [tmp.emptyBody, tmp21];
          obj7.style = items6;
          obj7.children = body;
          tmp28 = React4(Text_Text.Text, obj7);
        }
        items5[1] = tmp28;
        obj5.children = items5;
        let tmp23Result = hasOwnProperty(View, obj5);
      } else {
        tmp23Result = null;
      }
      items3[1] = tmp23Result;
      items3[2] = Illustration.children;
      obj4.children = items3;
      return hasOwnProperty(View, obj4);
    };
