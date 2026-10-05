// discord_app/design/void/EmptyState/native/EmptyState.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../shared.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let Illustration;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, Image: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = { textTransform: "none" };
let closure_7 = {
  accessible: false,
  accessibilityRole: "none",
  accessibilityElementsHidden: true,
  importantForAccessibility: "no-hide-descendants",
};
let obj = {
  container: obj2,
  emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 },
  textGroup: { alignSelf: "stretch", alignItems: "center" },
  emptyTitle: { marginTop: 20, textTransform: "uppercase" },
  emptyBody: { textAlign: "center", marginTop: 8 },
};
obj2 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 36,
  paddingBottom: 80,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
let closure_8 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (Illustration) => {
      let body;
      let bodyStyle;
      let children;
      let items2;
      let items3;
      let items4;
      let items5;
      let style;
      let title;
      let titleStyle;
      let tmp10;
      const obj = react2;
      const cResult = obj.c(30);
      const tmp4 = closure_8();
      const obj2 = shared;
      const themeContext = obj2.useThemeContext();
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
          let tmp20;
          if (cResult[1] === tmp4.emptyImage) {
            tmp20 = cResult[2];
          }
          if (cResult[3] === Illustration.Illustration) {
            let tmp21;
            if (cResult[4] === tmp20) {
              tmp21 = cResult[5];
            }
            tmp10 = tmp21;
          }
          Illustration = Illustration.Illustration;
          const obj3 = { resizeMode: "contain", style: tmp20 };
          const merged = Object.assign(closure_7);
          const tmp26 = React3(Illustration, obj3);
          cResult[3] = Illustration.Illustration;
          cResult[4] = tmp20;
          cResult[5] = tmp26;
          tmp21 = tmp26;
        }
        const items = [tmp4.emptyImage, Illustration.imageStyle];
        cResult[0] = Illustration.imageStyle;
        cResult[1] = tmp4.emptyImage;
        cResult[2] = items;
        tmp20 = items;
      } else {
        tmp10 = null;
        if (null != Illustration.lightSource) {
          tmp10 = null;
          if (null != Illustration.darkSource) {
            const tmpResult2 = shared;
            const tmp11 = tmpResult2.isThemeLight(tmp9) ? Illustration.lightSource : Illustration.darkSource;
            if (cResult[6] === Illustration.imageStyle) {
              let tmp12;
              if (cResult[7] === tmp4.emptyImage) {
                tmp12 = cResult[8];
              }
              if (cResult[9] === tmp11) {
                let tmp13;
                if (cResult[10] === tmp12) {
                  tmp13 = cResult[11];
                }
                tmp10 = tmp13;
              }
              const obj4 = { resizeMode: "contain", source: tmp11, style: tmp12 };
              const merged1 = Object.assign(closure_7);
              const tmp19 = React3(_false, obj4);
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
          }
        }
      }
      ({ style, body, title, children, bodyStyle, titleStyle } = Illustration);
      if (cResult[12] === style) {
        let tmp28;
        if (cResult[13] === tmp4.container) {
          tmp28 = cResult[14];
        }
        if (cResult[15] === body) {
          if (cResult[16] === bodyStyle) {
            if (cResult[17] === (null != title || null != body)) {
              if (cResult[18] === tmp4.emptyBody) {
                if (cResult[19] === tmp4.emptyTitle) {
                  if (cResult[20] === tmp4.textGroup) {
                    if (cResult[21] === title) {
                      if (cResult[22] === titleStyle) {
                        let tmp29;
                        if (cResult[23] === closure_6) {
                          tmp29 = cResult[24];
                        }
                        if (cResult[25] === children) {
                          if (cResult[26] === tmp10) {
                            if (cResult[27] === tmp28) {
                              let tmp37;
                              if (cResult[28] === tmp29) {
                                tmp37 = cResult[29];
                              }
                              return tmp37;
                            }
                          }
                        }
                        const obj5 = { style: tmp28, children: items2 };
                        items2 = [tmp10, tmp29, children];
                        const tmp40 = hasOwnProperty(React2, obj5);
                        cResult[25] = children;
                        cResult[26] = tmp10;
                        cResult[27] = tmp28;
                        cResult[28] = tmp29;
                        cResult[29] = tmp40;
                        tmp37 = tmp40;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let tmp31Result = null;
        if (null != title || null != body) {
          let tmp33 = null;
          const obj6 = { style: tmp4.textGroup, accessible: true, children: items4 };
          if (null != title) {
            const obj7 = {
              variant: "heading-lg/semibold",
              color: "mobile-text-heading-primary",
              maxFontSizeMultiplier: 2,
              style: items3,
              children: title,
            };
            items3 = [tmp4.emptyTitle, titleStyle, closure_6];
            tmp33 = React3(Text_Text.Text, obj7);
          }
          items4 = [tmp33];
          let tmp35 = null;
          if (null != body) {
            const obj8 = {
              variant: "text-md/medium",
              color: "text-muted",
              maxFontSizeMultiplier: 2,
              style: items5,
              children: body,
            };
            items5 = [tmp4.emptyBody, bodyStyle];
            tmp35 = React3(Text_Text.Text, obj8);
          }
          items4[1] = tmp35;
          tmp31Result = hasOwnProperty(React2, obj6);
        }
        cResult[15] = body;
        cResult[16] = bodyStyle;
        cResult[17] = null != title || null != body;
        cResult[18] = tmp4.emptyBody;
        cResult[19] = tmp4.emptyTitle;
        cResult[20] = tmp4.textGroup;
        cResult[21] = title;
        cResult[22] = titleStyle;
        cResult[23] = closure_6;
        cResult[24] = tmp31Result;
        tmp29 = tmp31Result;
      }
      const items6 = [tmp4.container, style];
      cResult[12] = style;
      cResult[13] = tmp4.container;
      cResult[14] = items6;
      tmp28 = items6;
    }
  : (Illustration) => {
      let body;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let title;
      let tmp11Result;
      let tmp22Result;
      let tmp2Result2;
      const tmp = closure_8();
      const obj = shared;
      const themeContext = obj.useThemeContext();
      let hasItem;
      if (themeContext != null) {
        const enabledExperiments = themeContext.enabledExperiments;
        if (enabledExperiments != null) {
          hasItem = enabledExperiments.includes("mana-type-consolidation");
        }
      }
      shared;
      if (null != Illustration.Illustration) {
        Illustration = Illustration.Illustration;
        const obj2 = { resizeMode: "contain", style: items };
        const merged = Object.assign(closure_7);
        items = [tmp.emptyImage, Illustration.imageStyle];
        tmp11Result = React3(Illustration, obj2);
      } else {
        tmp11Result = null;
        const tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
        if (tmp9) {
          const obj3 = {
            resizeMode: "contain",
            source: tmp2Result2.isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource,
            style: items1,
          };
          const merged1 = Object.assign(closure_7);
          items1 = [tmp.emptyImage, Illustration.imageStyle];
          tmp2Result2 = shared;
          tmp11Result = React3(_false, obj3);
        }
      }
      ({ body, title } = Illustration);
      const obj4 = { style: items2, children: items3 };
      items2 = [tmp.container, Illustration.style];
      items3 = [tmp11Result, ,];
      const children = Illustration.children;
      if (null != title) {
        let tmp25 = null;
        const obj5 = { style: tmp.textGroup, accessible: true, children: items5 };
        if (null != title) {
          const obj6 = {
            variant: "heading-lg/semibold",
            color: "mobile-text-heading-primary",
            maxFontSizeMultiplier: 2,
            style: items4,
            children: title,
          };
          items4 = [tmp.emptyTitle, tmp21, closure_6];
          tmp25 = React3(Text_Text.Text, obj6);
        }
        items5 = [tmp25];
        let tmp27 = null;
        if (null != body) {
          const obj7 = {
            variant: "text-md/medium",
            color: "text-muted",
            maxFontSizeMultiplier: 2,
            style: items6,
            children: body,
          };
          items6 = [tmp.emptyBody, tmp20];
          tmp27 = React3(Text_Text.Text, obj7);
        }
        items5[1] = tmp27;
        tmp22Result = hasOwnProperty(React2, obj5);
      } else {
        tmp22Result = null;
      }
      items3[1] = tmp22Result;
      items3[2] = children;
      return hasOwnProperty(React2, obj4);
    };
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default tmp5;
