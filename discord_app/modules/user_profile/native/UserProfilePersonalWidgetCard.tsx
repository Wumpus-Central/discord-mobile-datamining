// === Module 8309: UserProfilePersonalWidgetCard ===

// Module 8309 (UserProfilePersonalWidgetCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import native from "native" /* 4589 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import FastImageDefault from "FastImage" /* 5974 */;
import UserProfileCardDefault from "UserProfileCard" /* 6706 */;
import GifTagDefault from "GifTag" /* 7927 */;
import PersonalWidgetExpandCollapseContext from "PersonalWidgetExpandCollapseContext" /* 8310 */;
import PersonalWidgetMarkupUtils from "PersonalWidgetMarkupUtils" /* 8311 */;
import WidgetAssetUtils from "WidgetAssetUtils" /* 8312 */;
import UserProfileWidgetReportButtonDefault from "UserProfileWidgetReportButton" /* 8314 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let rect1;
let size;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ Pressable: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)", "#000"];
const locations = [0, 0.4, 1];
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
let createStyles = createStyles_mod;
let obj = { coverContainer: obj2, coverContent: obj3, coverContentWithImage: obj4, sectionsContainer: obj5, fieldsContainer: obj6, fieldRow: obj7, fieldImage: size, fieldContent: { flex: 1 }, gifTag: rect, gifTagSmall: rect1 };
obj2 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { padding: nativeDefault.space.PX_16, marginTop: 56 };
obj5 = { gap: nativeDefault.space.PX_12 };
obj6 = { gap: nativeDefault.space.PX_12 };
obj7 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
size = { width: nativeDefault.space.PX_48, height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.sm };
rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
rect1 = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_4 };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let color;
  let lineClamp;
  let maxLines;
  let onTextLayout;
  let variant;
  const obj = react2;
  const cResult = obj.c(10);
  ({ variant, color, children, maxLines } = arg0);
  const obj2 = PersonalWidgetExpandCollapseContext;
  const personalWidgetFieldClamp = obj2.usePersonalWidgetFieldClamp(maxLines, children);
  ({ lineClamp, onTextLayout } = personalWidgetFieldClamp);
  if (cResult[0] === children) {
    if (cResult[1] === color) {
      let tmp5;
      if (cResult[2] === variant) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === color) {
        if (cResult[5] === lineClamp) {
          if (cResult[6] === onTextLayout) {
            if (cResult[7] === tmp5) {
              let tmp7;
              if (cResult[8] === variant) {
                tmp7 = cResult[9];
              }
              return tmp7;
            }
          }
        }
      }
      const obj3 = { variant, color, lineClamp, onTextLayout, children: tmp5 };
      const tmp9 = authStore(Text_Text.Text, obj3);
      cResult[4] = color;
      cResult[5] = lineClamp;
      cResult[6] = onTextLayout;
      cResult[7] = tmp5;
      cResult[8] = variant;
      cResult[9] = tmp9;
      tmp7 = tmp9;
    }
  }
  const tmpResult = PersonalWidgetMarkupUtils;
  const result = tmpResult.parsePersonalWidgetReact(children, undefined, { textVariant: variant, linkVariant: variant, textColor: color });
  cResult[0] = children;
  cResult[1] = color;
  cResult[2] = variant;
  cResult[3] = result;
  tmp5 = result;
}) : ((variant) => {
  let lineClamp;
  let onTextLayout;
  variant = variant.variant;
  const color = variant.color;
  const children = variant.children;
  const maxLines = variant.maxLines;
  let obj = variant(children[10]);
  const personalWidgetFieldClamp = obj.usePersonalWidgetFieldClamp(maxLines, children);
  const items = [children, variant, color];
  ({ lineClamp, onTextLayout } = personalWidgetFieldClamp);
  const children1 = react.useMemo(() => {
    const obj = PersonalWidgetMarkupUtils;
    const obj2 = { textVariant: variant, linkVariant: variant, textColor: color };
    return obj.parsePersonalWidgetReact(children, undefined, obj2);
  }, items);
  return closure_10(variant(children[12]).Text, { variant, color, lineClamp, onTextLayout, children: children1 });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isExpanded;
  let setIsExpanded;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(12);
  const obj2 = PersonalWidgetExpandCollapseContext;
  const personalWidgetExpandCollapse = obj2.usePersonalWidgetExpandCollapse();
  ({ isExpanded, setIsExpanded } = personalWidgetExpandCollapse);
  if (personalWidgetExpandCollapse.isAnyFieldClipped) {
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[0] !== setIsExpanded) {
      const fn = function t() {
        return setIsExpanded((arg0) => !arg0);
      };
      cResult[0] = setIsExpanded;
      cResult[1] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] !== isExpanded) {
      const obj3 = { expanded: isExpanded };
      cResult[2] = isExpanded;
      cResult[3] = obj3;
      tmp7 = obj3;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== isExpanded) {
      const intl = intl2.intl;
      const string = intl.string;
      const t = intl2.t;
      const stringResult = string(isExpanded ? t["6MwJo/"] : t.lBeKY2);
      cResult[4] = isExpanded;
      cResult[5] = stringResult;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp8) {
      const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: tmp8 };
      const tmp12 = authStore(Text_Text.Text, obj4);
      cResult[6] = tmp8;
      cResult[7] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[7];
    }
    if (cResult[8] === tmp6) {
      if (cResult[9] === tmp7) {
        let tmp13;
        if (cResult[10] === tmp10) {
          tmp13 = cResult[11];
        }
        tmp5 = tmp13;
      }
    }
    const obj5 = { hitSlop, onPress: tmp6, accessibilityRole: "button", accessibilityState: tmp7, children: tmp10 };
    const tmp17 = authStore(hasOwnProperty, obj5);
    cResult[8] = tmp6;
    cResult[9] = tmp7;
    cResult[10] = tmp10;
    cResult[11] = tmp17;
    tmp13 = tmp17;
  } else {
    tmp5 = null;
  }
  return tmp5;
}) : (() => {
  let Text;
  let closure_129_0;
  let isExpanded;
  let obj3;
  let obj4;
  let tmp5Result;
  const obj = PersonalWidgetExpandCollapseContext;
  const personalWidgetExpandCollapse = obj.usePersonalWidgetExpandCollapse();
  ({ isExpanded, setIsExpanded: closure_129_0 } = personalWidgetExpandCollapse);
  if (personalWidgetExpandCollapse.isAnyFieldClipped) {
    const obj2 = {
      hitSlop,
      onPress() {
          return closure_1_0((arg0) => !arg0);
        },
      accessibilityRole: "button",
      accessibilityState: obj3,
      children: authStore(Text, obj4)
    };
    obj3 = { expanded: isExpanded };
    Text = Text_Text.Text;
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    obj4 = { variant: "text-sm/medium", color: "text-subtle", children: string(isExpanded ? t["6MwJo/"] : t.lBeKY2) };
    tmp5Result = authStore(hasOwnProperty, obj2);
  } else {
    tmp5Result = null;
  }
  return tmp5Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  const obj = react2;
  const cResult = obj.c(11);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp5 = _slicedToArray(react.useState(false), 2);
  _require = tmp5[1];
  let tmp7 = null;
  if (null != arg1) {
    tmp7 = null;
    if ("fileId" in arg1) {
      tmp7 = arg1;
    }
  }
  let tmp8 = null;
  if (null != tmp7) {
    if (cResult[0] === tmp7.fileId) {
      if (cResult[1] === (tmp7.isAnimated && (setting || tmp5[0]))) {
        let tmp11;
        let tmp13;
        if (cResult[2] === arg0) {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== tmp11) {
          const obj2 = { uri: tmp11 };
          cResult[4] = tmp11;
          cResult[5] = obj2;
          tmp13 = obj2;
        } else {
          tmp13 = cResult[5];
        }
        tmp8 = tmp13;
      }
    }
    const obj3 = { animated: tmp7.isAnimated && (setting || tmp5[0]) };
    const tmpResult = WidgetAssetUtils;
    const widgetAssetURL = tmpResult.getWidgetAssetURL(arg0, tmp7.fileId, obj3);
    cResult[0] = tmp7.fileId;
    cResult[1] = tmp7.isAnimated && (setting || tmp5[0]);
    cResult[2] = arg0;
    cResult[3] = widgetAssetURL;
    tmp11 = widgetAssetURL;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return closure_0(() => { /* body not rendered: F138793 */ });
      }
    }
    cResult[6] = T;
  } else {
    class T {
      constructor() {
        return closure_0(() => { /* body not rendered: F138793 */ });
      }
    }
  }
  if (null != tmp7 && tmp7.isAnimated && !(setting || tmp5[0])) {
    class T {
      constructor() {
        return closure_0(() => { /* body not rendered: F138793 */ });
      }
    }
  }
  if (cResult[7] === tmp8) {
    class T {
      constructor() {
        return closure_0(() => { /* body not rendered: F138793 */ });
      }
    }
  }
  const obj4 = { source: tmp8, showGifTag: null != tmp7 && tmp7.isAnimated && !(setting || tmp5[0]), canToggleAnimation: null != tmp7 && tmp7.isAnimated && !setting && !arg2, toggleAnimation: T };
  cResult[7] = tmp8;
  cResult[8] = null != tmp7 && tmp7.isAnimated && !(setting || tmp5[0]);
  cResult[9] = null != tmp7 && tmp7.isAnimated && !setting && !arg2;
  cResult[10] = obj4;
}) : ((arg0, arg1, arg2) => {
  let callback;
  let closure_0;
  let closure_2;
  let closure_3;
  let isAnimated;
  _require = arg0;
  const GifAutoPlay = require("UserSettings").GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  let closure_1 = tmp2[1];
  dependencyMap = tmp3;
  let tmp4 = null;
  if (null != arg1) {
    tmp4 = null;
    if ("fileId" in arg1) {
      tmp4 = arg1;
    }
  }
  _slicedToArray = tmp4;
  const items = [arg0, tmp4, setting || tmp2[0]];
  const memo = react.useMemo(() => {
    let obj2;
    let tmp2 = null;
    if (null != closure_3) {
      let isAnimated = closure_3.isAnimated;
      const getWidgetAssetURL = WidgetAssetUtils.getWidgetAssetURL;
      const fileId = closure_3.fileId;
      WidgetAssetUtils;
      if (isAnimated) {
        isAnimated = closure_2;
      }
      const obj = { uri: getWidgetAssetURL(closure_0, fileId, obj2) };
      tmp2 = obj;
      obj2 = { animated: isAnimated };
    }
    return tmp2;
  }, items);
  let obj2 = { source: memo, showGifTag: isAnimated, canToggleAnimation: null != tmp4 && tmp4.isAnimated && !setting && !arg2, toggleAnimation: callback };
  isAnimated = null != tmp4;
  callback = react.useCallback(() => closure_1((arg0) => !arg0), []);
  if (isAnimated) {
    isAnimated = tmp4.isAnimated;
  }
  if (isAnimated) {
    isAnimated = !tmp3;
  }
  if (isAnimated) {
    isAnimated = !arg2;
  }
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((section) => {
  let canToggleAnimation;
  let disableInteraction;
  let intl;
  let items;
  let items1;
  let obj5;
  let obj9;
  let showGifTag;
  let source;
  let toggleAnimation;
  let userId;
  const obj = react2;
  const cResult = obj.c(28);
  section = section.section;
  ({ userId, disableInteraction } = section);
  const tmp4 = closure_15();
  ({ source, showGifTag, canToggleAnimation, toggleAnimation } = closure_18(userId, section.image, disableInteraction));
  let prop = null;
  closure_18(userId, section.image, disableInteraction);
  if (null != source) {
    prop = tmp4.coverContentWithImage;
  }
  if (cResult[0] === tmp4.coverContent) {
    let tmp7;
    let tmp8;
    let tmp12;
    if (cResult[1] === prop) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== section.title) {
      let tmp9 = null;
      if ("" !== section.title) {
        const obj2 = { variant: "heading-xl/semibold", color: "text-strong", maxLines: 2, children: section.title };
        tmp9 = authStore(closure_16, obj2);
      }
      cResult[3] = section.title;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== section.subtitle) {
      let tmp13 = null;
      if ("" !== section.subtitle) {
        const obj3 = { variant: "text-sm/medium", color: "text-default", maxLines: 3, children: section.subtitle };
        tmp13 = authStore(closure_16, obj3);
      }
      cResult[5] = section.subtitle;
      cResult[6] = tmp13;
      tmp12 = tmp13;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp8) {
        let tmp16;
        if (cResult[9] === tmp12) {
          tmp16 = cResult[10];
        }
        let tmp20 = tmp16;
        if (null != source) {
          let tmp22Result;
          if (cResult[11] === canToggleAnimation) {
            if (cResult[12] === source) {
              let tmp21;
              if (cResult[13] === toggleAnimation) {
                tmp21 = cResult[14];
              }
              if (cResult[15] === section.subtitle) {
                if (cResult[16] === section.title) {
                  let tmp29;
                  if (cResult[17] === source) {
                    tmp29 = cResult[18];
                  }
                  if (cResult[19] === showGifTag) {
                    let tmp36;
                    if (cResult[20] === tmp4.gifTag) {
                      tmp36 = cResult[21];
                    }
                    if (cResult[22] === tmp16) {
                      if (cResult[23] === tmp4.coverContainer) {
                        if (cResult[24] === tmp21) {
                          if (cResult[25] === tmp29) {
                            let tmp40;
                            if (cResult[26] === tmp36) {
                              tmp40 = cResult[27];
                            }
                            tmp20 = tmp40;
                          }
                        }
                      }
                    }
                    const obj4 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: unpackModuleId(metroImportDefault, obj5) };
                    obj5 = { style: tmp4.coverContainer, children: items };
                    items = [tmp21, tmp29, tmp16, tmp36];
                    const ThemeContextProvider = native.ThemeContextProvider;
                    const tmp45 = authStore(ThemeContextProvider, obj4);
                    cResult[22] = tmp16;
                    cResult[23] = tmp4.coverContainer;
                    cResult[24] = tmp21;
                    cResult[25] = tmp29;
                    cResult[26] = tmp36;
                    cResult[27] = tmp45;
                    tmp40 = tmp45;
                  }
                  let tmp37 = null;
                  if (showGifTag) {
                    const obj6 = { style: tmp4.gifTag };
                    tmp37 = authStore(GifTagDefault, obj6);
                  }
                  cResult[19] = showGifTag;
                  cResult[20] = tmp4.gifTag;
                  cResult[21] = tmp37;
                  tmp36 = tmp37;
                }
              }
              let tmp30 = null;
              if (null != source) {
                if ("" !== section.title) {
                  const obj7 = { colors, locations, style: metroRequire.absoluteFill, pointerEvents: "none" };
                  tmp30 = authStore(LinearGradientDefault, obj7);
                } else {
                  tmp30 = null;
                }
              }
              cResult[15] = section.subtitle;
              cResult[16] = section.title;
              cResult[17] = source;
              cResult[18] = tmp30;
              tmp29 = tmp30;
            }
          }
          if (canToggleAnimation) {
            const obj8 = { style: metroRequire.absoluteFill, onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.MxXgrL), children: authStore(FastImageDefault, obj9) };
            intl = intl2.intl;
            obj9 = { source, style: metroRequire.absoluteFill, resizeMode: "cover" };
            tmp22Result = authStore(hasOwnProperty, obj8);
          } else {
            const obj10 = { source, style: metroRequire.absoluteFill, resizeMode: "cover" };
            tmp22Result = authStore(FastImageDefault, obj10);
          }
          cResult[11] = canToggleAnimation;
          cResult[12] = source;
          cResult[13] = toggleAnimation;
          cResult[14] = tmp22Result;
          tmp21 = tmp22Result;
        }
        return tmp20;
      }
    }
    const obj11 = { style: tmp7, pointerEvents: "box-none", children: items1 };
    items1 = [tmp8, tmp12];
    const tmp19 = unpackModuleId(metroImportDefault, obj11);
    cResult[7] = tmp7;
    cResult[8] = tmp8;
    cResult[9] = tmp12;
    cResult[10] = tmp19;
    tmp16 = tmp19;
  }
  const items2 = [tmp4.coverContent, prop];
  cResult[0] = tmp4.coverContent;
  cResult[1] = prop;
  cResult[2] = items2;
  tmp7 = items2;
}) : ((section) => {
  let canToggleAnimation;
  let disableInteraction;
  let intl;
  let items1;
  let items2;
  let obj5;
  let obj7;
  let showGifTag;
  let toggleAnimation;
  let userId;
  section = section.section;
  ({ userId, disableInteraction } = section);
  const tmp = closure_15();
  const tmp2 = closure_18(userId, section.image, disableInteraction);
  const source = tmp2.source;
  const items = [tmp.coverContent, ];
  let prop = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    prop = tmp.coverContentWithImage;
  }
  const obj = { style: items, pointerEvents: "box-none", children: items1 };
  items[1] = prop;
  let tmp6 = null;
  if ("" !== section.title) {
    const obj2 = { variant: "heading-xl/semibold", color: "text-strong", maxLines: 2, children: section.title };
    tmp6 = authStore(closure_16, obj2);
  }
  items1 = [tmp6, ];
  let tmp9 = null;
  if ("" !== section.subtitle) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", maxLines: 3, children: section.subtitle };
    tmp9 = authStore(closure_16, obj3);
  }
  items1[1] = tmp9;
  const tmp3Result = unpackModuleId(metroImportDefault, obj);
  let tmp24Result6 = tmp3Result;
  if (null != source) {
    let tmp24Result;
    let tmp15;
    let tmp14;
    const obj4 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: unpackModuleId(metroImportDefault, obj5) };
    obj5 = { style: tmp.coverContainer, children: items2 };
    const ThemeContextProvider = native.ThemeContextProvider;
    if (canToggleAnimation) {
      const obj6 = { style: metroRequire.absoluteFill, onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.MxXgrL), children: authStore(FastImageDefault, obj7) };
      intl = intl2.intl;
      obj7 = { source, style: metroRequire.absoluteFill, resizeMode: "cover" };
      tmp24Result = authStore(hasOwnProperty, obj6);
      tmp15 = metroRequire;
      tmp14 = importDefault;
    } else {
      tmp14 = importDefault;
      tmp15 = metroRequire;
      const obj8 = { source, style: metroRequire.absoluteFill, resizeMode: "cover" };
      tmp24Result = authStore(FastImageDefault, obj8);
    }
    items2 = [tmp24Result, , , ];
    let tmp24Result4 = null;
    if (null != source) {
      if ("" !== section.title) {
        const obj9 = { colors, locations, style: tmp15.absoluteFill, pointerEvents: "none" };
        tmp24Result4 = authStore(tmp14(5605), obj9);
      } else {
        tmp24Result4 = null;
      }
    }
    items2[1] = tmp24Result4;
    items2[2] = tmp3Result;
    let tmp24Result5 = null;
    if (showGifTag) {
      const obj10 = { style: tmp.gifTag };
      tmp24Result5 = authStore(tmp14(7927), obj10);
    }
    items2[3] = tmp24Result5;
    tmp24Result6 = authStore(ThemeContextProvider, obj4);
  }
  return tmp24Result6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((field) => {
  let canToggleAnimation;
  let disableInteraction;
  let intl;
  let items;
  let items1;
  let items2;
  let showGifTag;
  let source;
  let toggleAnimation;
  let userId;
  const obj = react2;
  const cResult = obj.c(21);
  field = field.field;
  ({ userId, disableInteraction } = field);
  const tmp4 = closure_15();
  ({ source, showGifTag, canToggleAnimation, toggleAnimation } = closure_18(userId, field.image, disableInteraction));
  closure_18(userId, field.image, disableInteraction);
  if (cResult[0] === source) {
    let tmp6;
    if (cResult[1] === tmp4.fieldImage) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === canToggleAnimation) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === showGifTag) {
          if (cResult[6] === tmp4.gifTagSmall) {
            let tmp10;
            let tmp18;
            let tmp22;
            if (cResult[7] === toggleAnimation) {
              tmp10 = cResult[8];
            }
            if (cResult[9] !== field.title) {
              let tmp19 = null;
              if ("" !== field.title) {
                const obj2 = { variant: "text-sm/medium", color: "text-default", maxLines: 2, children: field.title };
                tmp19 = authStore(closure_16, obj2);
              }
              cResult[9] = field.title;
              cResult[10] = tmp19;
              tmp18 = tmp19;
            } else {
              tmp18 = cResult[10];
            }
            if (cResult[11] !== field.description) {
              let tmp23 = null;
              if ("" !== field.description) {
                const obj3 = { variant: "text-xs/medium", color: "text-subtle", maxLines: 4, children: field.description };
                tmp23 = authStore(closure_16, obj3);
              }
              cResult[11] = field.description;
              cResult[12] = tmp23;
              tmp22 = tmp23;
            } else {
              tmp22 = cResult[12];
            }
            if (cResult[13] === tmp4.fieldContent) {
              if (cResult[14] === tmp18) {
                let tmp26;
                if (cResult[15] === tmp22) {
                  tmp26 = cResult[16];
                }
                if (cResult[17] === tmp4.fieldRow) {
                  if (cResult[18] === tmp10) {
                    let tmp30;
                    if (cResult[19] === tmp26) {
                      tmp30 = cResult[20];
                    }
                    return tmp30;
                  }
                }
                const obj4 = { style: tmp4.fieldRow, children: items };
                items = [tmp10, tmp26];
                const tmp33 = unpackModuleId(metroImportDefault, obj4);
                cResult[17] = tmp4.fieldRow;
                cResult[18] = tmp10;
                cResult[19] = tmp26;
                cResult[20] = tmp33;
                tmp30 = tmp33;
              }
            }
            const obj5 = { style: tmp4.fieldContent, children: items1 };
            items1 = [tmp18, tmp22];
            const tmp29 = unpackModuleId(metroImportDefault, obj5);
            cResult[13] = tmp4.fieldContent;
            cResult[14] = tmp18;
            cResult[15] = tmp22;
            cResult[16] = tmp29;
            tmp26 = tmp29;
          }
        }
      }
    }
    let tmp13Result = tmp6;
    if (null != tmp6) {
      tmp13Result = tmp6;
      if (canToggleAnimation) {
        const obj6 = { onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.MxXgrL), children: items2 };
        intl = intl2.intl;
        items2 = [tmp6, ];
        let tmp15 = null;
        if (showGifTag) {
          const obj7 = { style: tmp4.gifTagSmall };
          tmp15 = authStore(GifTagDefault, obj7);
        }
        items2[1] = tmp15;
        tmp13Result = unpackModuleId(hasOwnProperty, obj6);
      }
    }
    cResult[3] = canToggleAnimation;
    cResult[4] = tmp6;
    cResult[5] = showGifTag;
    cResult[6] = tmp4.gifTagSmall;
    cResult[7] = toggleAnimation;
    cResult[8] = tmp13Result;
    tmp10 = tmp13Result;
  }
  let tmp7 = null;
  if (null != source) {
    const obj8 = { source, style: tmp4.fieldImage, resizeMode: "cover" };
    tmp7 = authStore(FastImageDefault, obj8);
  }
  cResult[0] = source;
  cResult[1] = tmp4.fieldImage;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((field) => {
  let canToggleAnimation;
  let disableInteraction;
  let intl;
  let items;
  let items1;
  let items2;
  let showGifTag;
  let toggleAnimation;
  let userId;
  field = field.field;
  ({ userId, disableInteraction } = field);
  const tmp = closure_15();
  const tmp2 = closure_18(userId, field.image, disableInteraction);
  const source = tmp2.source;
  let tmp3 = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    const obj = { source, style: tmp.fieldImage, resizeMode: "cover" };
    tmp3 = authStore(FastImageDefault, obj);
  }
  let tmp7Result = tmp3;
  const obj2 = { style: tmp.fieldRow, children: items1 };
  if (null != tmp3) {
    tmp7Result = tmp3;
    if (canToggleAnimation) {
      const obj3 = { onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.MxXgrL), children: items };
      intl = intl2.intl;
      items = [tmp3, ];
      let tmp13 = null;
      if (showGifTag) {
        const obj4 = { style: tmp.gifTagSmall };
        tmp13 = authStore(GifTagDefault, obj4);
      }
      items[1] = tmp13;
      tmp7Result = unpackModuleId(hasOwnProperty, obj3);
    }
  }
  items1 = [tmp7Result, ];
  let tmp16 = null;
  const obj5 = { style: tmp.fieldContent, children: items2 };
  if ("" !== field.title) {
    const obj6 = { variant: "text-sm/medium", color: "text-default", maxLines: 2, children: field.title };
    tmp16 = authStore(closure_16, obj6);
  }
  items2 = [tmp16, ];
  let tmp19 = null;
  if ("" !== field.description) {
    const obj7 = { variant: "text-xs/medium", color: "text-subtle", maxLines: 4, children: field.description };
    tmp19 = authStore(closure_16, obj7);
  }
  items2[1] = tmp19;
  items1[1] = unpackModuleId(metroImportDefault, obj5);
  return unpackModuleId(metroImportDefault, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let disableInteraction;
  let section;
  let obj = userId(576);
  const cResult = obj.c(10);
  userId = userId.userId;
  ({ section, disableInteraction } = userId);
  const tmp2 = closure_15();
  if (0 === section.fields.length) {
    return null;
  } else {
    let tmp3;
    if (cResult[0] === disableInteraction) {
      if (cResult[1] === section.fields) {
        if (cResult[2] === userId) {
          tmp3 = cResult[3];
        }
        if (cResult[7] === tmp2.fieldsContainer) {
          let tmp6;
          if (cResult[8] === tmp3) {
            tmp6 = cResult[9];
          }
          return tmp6;
        }
        const obj2 = { style: tmp11, children: tmp3 };
        const tmp9 = closure_10(closure_7, obj2);
        cResult[7] = tmp2.fieldsContainer;
        cResult[8] = tmp3;
        cResult[9] = tmp9;
        tmp6 = tmp9;
      }
    }
    if (cResult[4] === disableInteraction) {
      let tmp4;
      if (cResult[5] === userId) {
        tmp4 = cResult[6];
      }
      const fields = section.fields;
      const mapped = fields.map(tmp4);
      cResult[0] = disableInteraction;
      cResult[1] = section.fields;
      cResult[2] = userId;
      cResult[3] = mapped;
      tmp3 = mapped;
    }
    const fn = function b(field) {
      const obj = { userId, field, disableInteraction };
      return authStore(closure_20, obj, field.key);
    };
    cResult[4] = disableInteraction;
    cResult[5] = userId;
    cResult[6] = fn;
    tmp4 = fn;
  }
}) : ((arg0) => {
  let disableInteraction;
  let fields;
  let require;
  let section;
  let userId;
  ({ userId: require, section, disableInteraction: importDefault } = arg0);
  let tmp2 = null;
  if (0 !== section.fields.length) {
    let obj = {
      style: tmp.fieldsContainer,
      children: fields.map((field) => {
          const obj = { userId: require, field, disableInteraction: importDefault };
          return authStore(closure_20, obj, field.key);
        })
    };
    fields = section.fields;
    tmp2 = closure_10(closure_7, obj);
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let cardStyle;
  let disableInteraction;
  let first;
  let items1;
  let tmp8;
  let widget;
  let obj = userId(576);
  const cResult = obj.c(26);
  userId = userId.userId;
  ({ widget, cardStyle, disableInteraction } = userId);
  importDefault = tmp4;
  const tmp5 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function n() {
      return AuthenticationStore.getId() === userId;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = userId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === (undefined !== disableInteraction && disableInteraction)) {
    let tmp10;
    let tmp11;
    if (cResult[4] === userId) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = closure_10(userId(8313).NitroWheelIcon, { size: "xs", color: "icon-subtle" });
      cResult[6] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === (undefined !== disableInteraction && disableInteraction)) {
      if (cResult[8] === stateFromStores) {
        if (cResult[9] === userId) {
          let tmp15;
          if (cResult[10] === widget) {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            let tmp20;
            let tmp22;
            if (cResult[13] === widget.sections) {
              tmp20 = cResult[14];
            }
            if (cResult[15] !== (undefined !== disableInteraction && disableInteraction)) {
              let tmp23 = null;
              if (!(undefined !== disableInteraction && disableInteraction)) {
                tmp23 = closure_10(closure_17, {});
              }
              cResult[15] = undefined !== disableInteraction && disableInteraction;
              cResult[16] = tmp23;
              tmp22 = tmp23;
            } else {
              tmp22 = cResult[16];
            }
            if (cResult[17] === tmp5.sectionsContainer) {
              if (cResult[18] === tmp22) {
                let tmp26;
                if (cResult[19] === tmp20) {
                  tmp26 = cResult[20];
                }
                if (cResult[21] === cardStyle) {
                  if (cResult[22] === tmp26) {
                    if (cResult[23] === tmp15) {
                      let tmp30;
                      if (cResult[24] === widget.header) {
                        tmp30 = cResult[25];
                      }
                      return tmp30;
                    }
                  }
                }
                let obj2 = { style: cardStyle, titleLeadingIcon: tmp11, title: tmp14, trailingAction: tmp15, children: tmp26 };
                const tmp33 = closure_10(UserProfileCardDefault, obj2);
                cResult[21] = cardStyle;
                cResult[22] = tmp26;
                cResult[23] = tmp15;
                cResult[24] = widget.header;
                cResult[25] = tmp33;
                tmp30 = tmp33;
              }
            }
            const obj3 = { style: tmp19, children: items1 };
            items1 = [tmp20, tmp22];
            const tmp29 = closure_11(closure_7, obj3);
            cResult[17] = tmp5.sectionsContainer;
            cResult[18] = tmp22;
            cResult[19] = tmp20;
            cResult[20] = tmp29;
            tmp26 = tmp29;
          }
          const sections = widget.sections;
          const mapped = sections.map(tmp10);
          cResult[12] = tmp10;
          cResult[13] = widget.sections;
          cResult[14] = mapped;
          tmp20 = mapped;
        }
      }
    }
    let tmp16 = !stateFromStores && !tmp4;
    if (tmp16) {
      const obj4 = { userId, widget };
      tmp16 = closure_10(UserProfileWidgetReportButtonDefault, obj4);
    }
    cResult[7] = undefined !== disableInteraction && disableInteraction;
    cResult[8] = stateFromStores;
    cResult[9] = userId;
    cResult[10] = widget;
    cResult[11] = tmp16;
    tmp15 = tmp16;
  }
  class I {
    constructor(type, arg1) {
      type = type.type;
      if ("cover" === type) {
        const obj2 = { userId, section: type, disableInteraction };
        return authStore(closure_19, obj2, arg1);
      } else if ("fields" === type) {
        const obj = { userId, section: type, disableInteraction };
        return authStore(closure_21, obj, arg1);
      } else {
        return null;
      }
    }
  }
  cResult[3] = undefined !== disableInteraction && disableInteraction;
  cResult[4] = userId;
  cResult[5] = I;
  tmp10 = I;
}) : ((userId) => {
  let disableInteraction;
  let items1;
  let obj4;
  let tmp4Result;
  let widget;
  userId = userId.userId;
  ({ widget, disableInteraction } = userId);
  const cardStyle = userId.cardStyle;
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  const tmp = closure_15();
  let obj = userId(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  let obj2 = { style: cardStyle, titleLeadingIcon: closure_10(userId(8313).NitroWheelIcon, { size: "xs", color: "icon-subtle" }), title: widget.header, trailingAction: tmp4Result, children: closure_11(closure_7, obj4) };
  tmp4Result = !stateFromStores && !disableInteraction;
  const tmp5 = disableInteraction;
  const tmp6 = disableInteraction(6706);
  if (tmp4Result) {
    const obj3 = { userId, widget };
    tmp4Result = closure_10(tmp5(8314), obj3);
  }
  const sections = widget.sections;
  obj4 = { style: tmp.sectionsContainer, children: items1 };
  items1 = [
    sections.map((type, index) => {
      type = type.type;
      if ("cover" === type) {
        const obj2 = { userId, section: type, disableInteraction };
        return authStore(closure_19, obj2, index);
      } else if ("fields" === type) {
        const obj = { userId, section: type, disableInteraction };
        return authStore(closure_21, obj, index);
      } else {
        return null;
      }
    }),

  ];
  let tmp4Result2 = null;
  if (!disableInteraction) {
    tmp4Result2 = closure_10(closure_17, {});
  }
  items1[1] = tmp4Result2;
  return closure_10(tmp6, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = { children: authStore(closure_22, obj3) };
    obj3 = {};
    const PersonalWidgetExpandCollapseProvider = PersonalWidgetExpandCollapseContext.PersonalWidgetExpandCollapseProvider;
    const merged = Object.assign(arg0);
    const tmp10 = authStore(PersonalWidgetExpandCollapseProvider, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  let obj2;
  const obj = { children: authStore(closure_22, obj2) };
  obj2 = {};
  const PersonalWidgetExpandCollapseProvider = PersonalWidgetExpandCollapseContext.PersonalWidgetExpandCollapseProvider;
  const merged = Object.assign(arg0);
  return authStore(PersonalWidgetExpandCollapseProvider, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePersonalWidgetCard.tsx");

export default tmp5;