// === Module 15326: RefreshEmptyState ===

// Module 15326 (RefreshEmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import shared from "shared" /* 4973 */;
import components_Button_Button from "components/Button/Button" /* 5226 */;
import FastImageDefault from "FastImage" /* 5651 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8926 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 6630 */;

require = fn;
let closure_3 = ["lightSource", "darkSource"];
const View = fn(17).View;
const Fonts = fn(1087).Fonts;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4966);
let obj2 = { container: { alignItems: "center", justifyContent: "center", padding: 16 }, title: null, body: null, image: null, cta: null };
let obj3 = {};
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj3.textAlign = "center";
obj3.marginBottom = 8;
obj2.title = obj3;
let obj4 = {};
let TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 14));
obj4.textAlign = "center";
obj2.body = obj4;
obj2.image = { marginBottom: 32 };
obj2.cta = { alignSelf: "center", marginTop: 16 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyState(arg0) {
  const cResult = c.c(26);
  ({ source, title, body, containerStyle, imageStyle, titleStyle, bodyStyle, callToAction } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp4.container) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === imageStyle) {
      if (cResult[4] === source) {
        if (cResult[5] === tmp4.image) {
          let tmp6 = cResult[6];
        }
        if (cResult[7] === tmp4.title) {
          if (cResult[8] === title) {
            if (cResult[9] === titleStyle) {
              let tmp10 = cResult[10];
            }
            if (cResult[11] === bodyStyle) {
              if (cResult[12] === tmp4.body) {
                let tmp14 = cResult[13];
              }
              if (cResult[14] === body) {
                if (cResult[15] === tmp14) {
                  let tmp15 = cResult[16];
                }
                if (cResult[17] === callToAction) {
                  if (cResult[18] === tmp4.cta) {
                    let tmp19 = cResult[19];
                  }
                  if (cResult[20] === tmp5) {
                    if (cResult[21] === tmp6) {
                      if (cResult[22] === tmp10) {
                        if (cResult[23] === tmp15) {
                          if (cResult[24] === tmp19) {
                            let tmp23 = cResult[25];
                          }
                          return tmp23;
                        }
                      }
                    }
                  }
                  const obj2 = { style: tmp5, children: null };
                  const items = [tmp6, tmp10, tmp15, tmp19];
                  obj2.children = items;
                  const tmp26 = React5(View, obj2);
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
                  const obj3 = { style: tmp4.cta, children: null };
                  ({ label: obj6.text, onPress: obj6.onPress } = callToAction);
                  obj3.children = timestampProducer(components_Button_Button.Button, { shrink: true, text: null, onPress: null, size: "sm" });
                  tmp20 = timestampProducer(View, obj3);
                  const obj4 = { shrink: true, text: null, onPress: null, size: "sm" };
                }
                cResult[17] = callToAction;
                cResult[18] = tmp4.cta;
                cResult[19] = tmp20;
                tmp19 = tmp20;
              }
              const obj5 = { style: tmp14, children: body };
              const tmp18 = timestampProducer(LegacyText_LegacyTextDefault, obj5);
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
          const obj7 = { style: null, children: null };
          const items2 = [tmp4.title, titleStyle];
          obj7.style = items2;
          obj7.children = title;
          tmp11 = timestampProducer(LegacyText_LegacyTextDefault, obj7);
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
      const obj13 = { source, style: null };
      const items3 = [tmp4.image, imageStyle];
      obj13.style = items3;
      tmp7 = timestampProducer(FastImageDefault, obj13);
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
}) : (function EmptyState(arg0) {
  ({ source, title, callToAction } = arg0);
  ({ body, containerStyle, imageStyle, titleStyle, bodyStyle } = arg0);
  const tmp = closure_8();
  const obj = { style: null, children: null };
  const items = [tmp.container, containerStyle];
  obj.style = items;
  let tmp4 = null;
  if (null != source) {
    const obj2 = { source, style: null };
    const items1 = [tmp.image, imageStyle];
    obj2.style = items1;
    tmp4 = timestampProducer(FastImageDefault, obj2);
  }
  const items2 = [tmp4, , , ];
  let tmp8 = null;
  if (null != title) {
    const obj3 = { style: null, children: null };
    const items3 = [tmp.title, titleStyle];
    obj3.style = items3;
    obj3.children = title;
    tmp8 = timestampProducer(LegacyText_LegacyTextDefault, obj3);
  }
  items2[1] = tmp8;
  const obj4 = { style: null, children: body };
  const items4 = [tmp.body, bodyStyle];
  obj4.style = items4;
  items2[2] = timestampProducer(LegacyText_LegacyTextDefault, obj4);
  let tmp12Result = null;
  if (null != callToAction) {
    const obj5 = { style: tmp.cta, children: null };
    ({ label: obj6.text, onPress: obj6.onPress } = callToAction);
    obj5.children = timestampProducer(components_Button_Button.Button, { shrink: true, text: null, onPress: null, size: "sm" });
    tmp12Result = timestampProducer(View, obj5);
    const obj11 = { shrink: true, text: null, onPress: null, size: "sm" };
  }
  items2[3] = tmp12Result;
  obj.children = items2;
  return React5(View, obj);
});
let closure_9 = tmp8;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/RefreshEmptyState/native/RefreshEmptyState.tsx");

export default tmp8;
export const ThemedEmptyState = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedEmptyState(arg0) {
  const cResult = c.c(7);
  if (cResult[0] !== arg0) {
    ({ lightSource, darkSource } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = darkSource;
    cResult[2] = lightSource;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
    let tmp5 = lightSource;
    let tmp4 = darkSource;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmpResult = shared;
  if (tmpResult2.isThemeLight(tmpResult.useThemeContext().theme)) {
    tmp4 = tmp5;
  }
  if (cResult[4] === tmp6) {
    if (cResult[5] === tmp4) {
      let tmp10 = cResult[6];
    }
    return tmp10;
  }
  const merged = Object.assign(tmp6);
  const tmp12 = timestampProducer(closure_9, { source: tmp4 });
  cResult[4] = tmp6;
  cResult[5] = tmp4;
  cResult[6] = tmp12;
  tmp10 = tmp12;
  const obj2 = { source: tmp4 };
  tmpResult2 = shared;
}) : (function ThemedEmptyState(darkSource) {
  let lightSource = darkSource.darkSource;
  const merged = Object.assign(darkSource, Object.assign({ lightSource: 0, darkSource: 0 }));
  const obj = shared;
  if (obj2.isThemeLight(obj.useThemeContext().theme)) {
    lightSource = darkSource.lightSource;
  }
  const merged1 = Object.assign(merged);
  return timestampProducer(closure_9, { source: lightSource });
});