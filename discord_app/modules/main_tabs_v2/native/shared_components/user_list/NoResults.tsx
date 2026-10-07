// discord_app/modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx
import c from "../../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({
  headerContainer: { paddingHorizontal: 16 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 32,
  },
  image: { marginBottom: 12 },
  textContainer: { justifyContent: "center", alignItems: "center" },
  text: { textAlign: "center", marginTop: 4 },
  fullHeightContentContainer: { paddingBottom: 0, paddingTop: 0 },
  fullHeightScrollContent: { flexGrow: 1 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(28);
      ({ title, subtitle, children, containerStyle, fullHeight, illustration } = arg0);
      let fullHeightContentContainer = undefined !== fullHeight && fullHeight;
      const tmp4 = closure_6();
      if (cResult[0] !== tmp4.headerContainer) {
        const items = [tmp4.headerContainer];
        cResult[0] = tmp4.headerContainer;
        cResult[1] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      let fullHeightScrollContent = fullHeightContentContainer;
      if (fullHeightContentContainer) {
        fullHeightScrollContent = tmp4.fullHeightScrollContent;
      }
      if (fullHeightContentContainer) {
        fullHeightContentContainer = tmp4.fullHeightContentContainer;
      }
      if (cResult[2] === containerStyle) {
        if (cResult[3] === tmp4.container) {
          if (cResult[4] === fullHeightContentContainer) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === illustration) {
            if (cResult[7] === tmp4.image) {
              let tmp7 = cResult[8];
            }
            if (cResult[9] === tmp4.text) {
              if (cResult[10] === title) {
                let tmp12 = cResult[11];
              }
              if (cResult[12] === tmp4.text) {
                if (cResult[13] === subtitle) {
                  let tmp15 = cResult[14];
                }
                if (cResult[15] === tmp4.textContainer) {
                  if (cResult[16] === tmp12) {
                    if (cResult[17] === tmp15) {
                      let tmp18 = cResult[18];
                    }
                    if (cResult[19] === tmp6) {
                      if (cResult[20] === tmp7) {
                        if (cResult[21] === tmp18) {
                          let tmp22 = cResult[22];
                        }
                        if (cResult[23] === children) {
                          if (cResult[24] === tmp22) {
                            if (cResult[25] === tmp5) {
                              if (cResult[26] === fullHeightScrollContent) {
                                let tmp26 = cResult[27];
                              }
                              return tmp26;
                            }
                          }
                        }
                        const obj2 = {
                          style: tmp5,
                          alwaysBounceVertical: false,
                          contentContainerStyle: fullHeightScrollContent,
                          children: null,
                        };
                        const items1 = [tmp22, children];
                        obj2.children = items1;
                        const tmp29 = hasOwnProperty(React3, obj2);
                        cResult[23] = children;
                        cResult[24] = tmp22;
                        cResult[25] = tmp5;
                        cResult[26] = fullHeightScrollContent;
                        cResult[27] = tmp29;
                        tmp26 = tmp29;
                      }
                    }
                    const obj3 = { style: tmp6, children: null };
                    const items2 = [tmp7, tmp18];
                    obj3.children = items2;
                    const tmp25 = hasOwnProperty(React2, obj3);
                    cResult[19] = tmp6;
                    cResult[20] = tmp7;
                    cResult[21] = tmp18;
                    cResult[22] = tmp25;
                    tmp22 = tmp25;
                  }
                }
                const obj4 = { style: tmp4.textContainer, children: null };
                const items3 = [tmp12, tmp15];
                obj4.children = items3;
                const tmp21 = hasOwnProperty(React2, obj4);
                cResult[15] = tmp4.textContainer;
                cResult[16] = tmp12;
                cResult[17] = tmp15;
                cResult[18] = tmp21;
                tmp18 = tmp21;
              }
              let tmp16 = null;
              if (null != subtitle) {
                const obj5 = {
                  variant: "text-xs/medium",
                  color: "interactive-text-default",
                  style: tmp4.text,
                  children: subtitle,
                };
                tmp16 = React4(Text_Text.Text, obj5);
              }
              cResult[12] = tmp4.text;
              cResult[13] = subtitle;
              cResult[14] = tmp16;
              tmp15 = tmp16;
            }
            const obj6 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              style: tmp4.text,
              children: title,
            };
            const tmp14 = React4(Text_Text.Text, obj6);
            cResult[9] = tmp4.text;
            cResult[10] = title;
            cResult[11] = tmp14;
            tmp12 = tmp14;
          }
          let tmp9 = null != illustration;
          if (tmp9) {
            const obj7 = { style: tmp4.image, children: React4(illustration, {}) };
            tmp9 = React4(React2, obj7);
          }
          cResult[6] = illustration;
          cResult[7] = tmp4.image;
          cResult[8] = tmp9;
          tmp7 = tmp9;
        }
      }
      const items4 = [tmp4.container, fullHeightContentContainer, containerStyle];
      cResult[2] = containerStyle;
      cResult[3] = tmp4.container;
      cResult[4] = fullHeightContentContainer;
      cResult[5] = items4;
      tmp6 = items4;
    }
  : (illustration) => {
      ({ subtitle, fullHeight } = illustration);
      ({ title, children, containerStyle } = illustration);
      if (fullHeight === undefined) {
        fullHeight = false;
      }
      illustration = illustration.illustration;
      const tmp = closure_6();
      const obj = { style: null, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
      const items = [tmp.headerContainer];
      obj.style = items;
      let fullHeightScrollContent = fullHeight;
      if (fullHeight) {
        fullHeightScrollContent = tmp.fullHeightScrollContent;
      }
      obj.contentContainerStyle = fullHeightScrollContent;
      const items1 = [tmp.container, ,];
      if (fullHeight) {
        fullHeight = tmp.fullHeightContentContainer;
      }
      const obj2 = { style: items1, children: null };
      items1[1] = fullHeight;
      items1[2] = containerStyle;
      let tmp5 = null != illustration;
      if (tmp5) {
        const obj3 = { style: tmp.image, children: React4(illustration, {}) };
        tmp5 = React4(React2, obj3);
      }
      const items2 = [tmp5];
      const obj4 = { style: tmp.textContainer, children: null };
      const items3 = [
        React4(Text_Text.Text, {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          style: tmp.text,
          children: title,
        }),
      ];
      let tmp7Result = null;
      if (null != subtitle) {
        const obj6 = {
          variant: "text-xs/medium",
          color: "interactive-text-default",
          style: tmp.text,
          children: subtitle,
        };
        tmp7Result = React4(Text_Text.Text, obj6);
      }
      items3[1] = tmp7Result;
      obj4.children = items3;
      items2[1] = hasOwnProperty(React2, obj4);
      obj2.children = items2;
      const items4 = [hasOwnProperty(React2, obj2), children];
      obj.children = items4;
      return hasOwnProperty(React3, obj);
    };
