// === Module 13965: RefreshEmptyState ===

// Module 13965 (RefreshEmptyState)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import shared from "shared" /* 4735 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8941 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles_mod from "TextStyles" /* 5922 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let closure_3 = ["lightSource", "darkSource"];
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const Fonts = Constants.Fonts;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignItems: "center", justifyContent: "center", padding: 16 }, title: obj2, body: obj3, image: { marginBottom: 32 }, cta: { alignSelf: "center", marginTop: 16 } };
obj2 = { textAlign: "center", marginBottom: 8 };
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj3 = { textAlign: "center" };
TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 14));
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let body;
  let bodyStyle;
  let callToAction;
  let containerStyle;
  let imageStyle;
  let items;
  let items2;
  let items3;
  let obj4;
  let source;
  let title;
  let titleStyle;
  const obj = react2;
  const cResult = obj.c(26);
  ({ source, title, body, containerStyle, imageStyle, titleStyle, bodyStyle, callToAction } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === containerStyle) {
    let tmp5;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === imageStyle) {
      if (cResult[4] === source) {
        let tmp6;
        if (cResult[5] === tmp4.image) {
          tmp6 = cResult[6];
        }
        if (cResult[7] === tmp4.title) {
          if (cResult[8] === title) {
            let tmp10;
            if (cResult[9] === titleStyle) {
              tmp10 = cResult[10];
            }
            if (cResult[11] === bodyStyle) {
              let tmp14;
              if (cResult[12] === tmp4.body) {
                tmp14 = cResult[13];
              }
              if (cResult[14] === body) {
                let tmp15;
                if (cResult[15] === tmp14) {
                  tmp15 = cResult[16];
                }
                if (cResult[17] === callToAction) {
                  let tmp19;
                  if (cResult[18] === tmp4.cta) {
                    tmp19 = cResult[19];
                  }
                  if (cResult[20] === tmp5) {
                    if (cResult[21] === tmp6) {
                      if (cResult[22] === tmp10) {
                        if (cResult[23] === tmp15) {
                          let tmp23;
                          if (cResult[24] === tmp19) {
                            tmp23 = cResult[25];
                          }
                          return tmp23;
                        }
                      }
                    }
                  }
                  const obj2 = { style: tmp5, children: items };
                  items = [tmp6, tmp10, tmp15, tmp19];
                  const tmp26 = metroImportAll(hasOwnProperty, obj2);
                  cResult[20] = tmp5;
                  cResult[21] = tmp6;
                  cResult[22] = tmp10;
                  cResult[23] = tmp15;
                  cResult[24] = tmp19;
                  cResult[25] = tmp26;
                  tmp23 = tmp26;
                }
                let tmp20 = null;
                if (null != callToAction) {
                  const obj3 = { style: tmp4.cta, children: metroImportDefault(components_Button_Button.Button, obj4) };
                  obj4 = { shrink: true, text: null, onPress: null, size: "sm" };
                  ({ label: obj6.text, onPress: obj6.onPress } = callToAction);
                  tmp20 = metroImportDefault(hasOwnProperty, obj3);
                }
                cResult[17] = callToAction;
                cResult[18] = tmp4.cta;
                cResult[19] = tmp20;
                tmp19 = tmp20;
              }
              const obj5 = { style: tmp14, children: body };
              const tmp18 = metroImportDefault(LegacyText_LegacyTextDefault, obj5);
              cResult[14] = body;
              cResult[15] = tmp14;
              cResult[16] = tmp18;
              tmp15 = tmp18;
            }
            const items1 = [tmp4.body, bodyStyle];
            cResult[11] = bodyStyle;
            cResult[12] = tmp4.body;
            cResult[13] = items1;
            tmp14 = items1;
          }
        }
        let tmp11 = null;
        if (null != title) {
          const obj7 = { style: items2, children: title };
          items2 = [tmp4.title, titleStyle];
          tmp11 = metroImportDefault(LegacyText_LegacyTextDefault, obj7);
        }
        cResult[7] = tmp4.title;
        cResult[8] = title;
        cResult[9] = titleStyle;
        cResult[10] = tmp11;
        tmp10 = tmp11;
      }
    }
    let tmp7 = null;
    if (null != source) {
      const obj13 = { source, style: items3 };
      items3 = [tmp4.image, imageStyle];
      tmp7 = metroImportDefault(metroRequire, obj13);
    }
    cResult[3] = imageStyle;
    cResult[4] = source;
    cResult[5] = tmp4.image;
    cResult[6] = tmp7;
    tmp6 = tmp7;
  }
  const items4 = [tmp4.container, containerStyle];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.container;
  cResult[2] = items4;
  tmp5 = items4;
}) : ((arg0) => {
  let body;
  let bodyStyle;
  let callToAction;
  let containerStyle;
  let imageStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let source;
  let title;
  let titleStyle;
  ({ source, title, callToAction } = arg0);
  ({ body, containerStyle, imageStyle, titleStyle, bodyStyle } = arg0);
  const tmp = closure_9();
  const obj = { style: items, children: items2 };
  items = [tmp.container, containerStyle];
  let tmp4 = null;
  if (null != source) {
    const obj2 = { source, style: items1 };
    items1 = [tmp.image, imageStyle];
    tmp4 = metroImportDefault(metroRequire, obj2);
  }
  items2 = [tmp4, , , ];
  let tmp7 = null;
  if (null != title) {
    const obj3 = { style: items3, children: title };
    items3 = [tmp.title, titleStyle];
    tmp7 = metroImportDefault(LegacyText_LegacyTextDefault, obj3);
  }
  items2[1] = tmp7;
  const obj4 = { style: items4, children: body };
  items4 = [tmp.body, bodyStyle];
  items2[2] = metroImportDefault(LegacyText_LegacyTextDefault, obj4);
  let tmp11Result = null;
  if (null != callToAction) {
    const obj5 = { style: tmp.cta, children: metroImportDefault(components_Button_Button.Button, obj11) };
    obj11 = { shrink: true, text: null, onPress: null, size: "sm" };
    ({ label: obj6.text, onPress: obj6.onPress } = callToAction);
    tmp11Result = metroImportDefault(hasOwnProperty, obj5);
  }
  items2[3] = tmp11Result;
  return metroImportAll(hasOwnProperty, obj);
});
let closure_10 = tmp10;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let darkSource;
  let lightSource;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== arg0) {
    ({ lightSource, darkSource } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = darkSource;
    cResult[2] = lightSource;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp5 = lightSource;
    tmp4 = darkSource;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmpResult = shared;
  const theme = tmpResult.useThemeContext().theme;
  const tmpResult2 = shared;
  if (tmpResult2.isThemeLight(theme)) {
    tmp4 = tmp5;
  }
  if (cResult[4] === tmp6) {
    let tmp10;
    if (cResult[5] === tmp4) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const obj2 = { source: tmp4 };
  const merged = Object.assign(tmp6);
  const tmp12 = metroImportDefault(closure_10, obj2);
  cResult[4] = tmp6;
  cResult[5] = tmp4;
  cResult[6] = tmp12;
  tmp10 = tmp12;
}) : ((darkSource) => {
  darkSource = darkSource.darkSource;
  const lightSource = darkSource.lightSource;
  const merged = Object.assign(darkSource, Object.assign({ lightSource: 0, darkSource: 0 }));
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = shared;
  if (obj2.isThemeLight(theme)) {
    darkSource = lightSource;
  }
  const obj3 = { source: darkSource };
  const merged1 = Object.assign(merged);
  return metroImportDefault(closure_10, obj3);
});
const result = size.fileFinishedImporting("design/void/RefreshEmptyState/native/RefreshEmptyState.tsx");

export default tmp10;
export const ThemedEmptyState = tmp11;