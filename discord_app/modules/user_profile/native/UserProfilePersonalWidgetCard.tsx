// === Module 13350: UserProfilePersonalWidgetCard ===

// Module 13350 (UserProfilePersonalWidgetCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import Text_Text from "Text/Text" /* 5088 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import FastImageDefault from "FastImage" /* 6156 */;
import UserProfileCardDefault from "UserProfileCard" /* 6903 */;
import GifTagDefault from "GifTag" /* 8129 */;
import UserProfileWidgetReportButtonDefault from "UserProfileWidgetReportButton" /* 13240 */;
import PersonalWidgetExpandCollapseContext from "PersonalWidgetExpandCollapseContext" /* 13351 */;
import PersonalWidgetMarkupUtils from "PersonalWidgetMarkupUtils" /* 13352 */;
import WidgetAssetUtils from "WidgetAssetUtils" /* 13353 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const native = ThemeContextProvider(4827);
require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)", "#000"];
const locations = [0, 0.4, 1];
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5092);
let obj2 = { coverContainer: { borderRadius: nativeDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" }, coverContent: null, coverContentWithImage: null, sectionsContainer: null, fieldsContainer: null, fieldRow: null, fieldImage: null, fieldContent: null, gifTag: null, gifTagSmall: null };
let obj3 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" };
obj2.coverContent = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.coverContentWithImage = { padding: nativeDefault.space.PX_16, marginTop: 56 };
let obj5 = { padding: nativeDefault.space.PX_16, marginTop: 56 };
obj2.sectionsContainer = { gap: nativeDefault.space.PX_12 };
let obj6 = { gap: nativeDefault.space.PX_12 };
obj2.fieldsContainer = { gap: nativeDefault.space.PX_12 };
let obj7 = { gap: nativeDefault.space.PX_12 };
obj2.fieldRow = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
let size = { width: nativeDefault.space.PX_48, height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.sm };
obj2.fieldImage = size;
obj2.fieldContent = { flex: 1 };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
obj2.gifTag = rect;
const rect1 = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_4 };
obj2.gifTagSmall = rect1;
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function PersonalWidgetText(arg0) {
  const cResult = c.c(10);
  ({ variant, color, children, maxLines } = arg0);
  const personalWidgetFieldClamp = PersonalWidgetExpandCollapseContext.usePersonalWidgetFieldClamp(maxLines, children);
  ({ lineClamp, onTextLayout } = personalWidgetFieldClamp);
  if (cResult[0] === children) {
    if (cResult[1] === color) {
      if (cResult[2] === variant) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === color) {
        if (cResult[5] === lineClamp) {
          if (cResult[6] === onTextLayout) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === variant) {
                let tmp7 = cResult[9];
              }
              return tmp7;
            }
          }
        }
      }
      const obj3 = { variant, color, lineClamp, onTextLayout, children: tmp5 };
      const tmp9 = collapsed(Text_Text.Text, obj3);
      cResult[4] = color;
      cResult[5] = lineClamp;
      cResult[6] = onTextLayout;
      cResult[7] = tmp5;
      cResult[8] = variant;
      cResult[9] = tmp9;
      tmp7 = tmp9;
    }
  }
  const result = PersonalWidgetMarkupUtils.parsePersonalWidgetReact(children, undefined, { textVariant: variant, linkVariant: variant, textColor: color });
  cResult[0] = children;
  cResult[1] = color;
  cResult[2] = variant;
  cResult[3] = result;
  tmp5 = result;
  const tmpResult = PersonalWidgetMarkupUtils;
}) : (function PersonalWidgetText(variant) {
  variant = variant.variant;
  const color = variant.color;
  const children = variant.children;
  const personalWidgetFieldClamp = variant(children[10]).usePersonalWidgetFieldClamp(variant.maxLines, children);
  const items = [children, variant, color];
  ({ lineClamp, onTextLayout } = personalWidgetFieldClamp);
  const children1 = noop.useMemo(() => PersonalWidgetMarkupUtils.parsePersonalWidgetReact(children, undefined, { textVariant: variant, linkVariant: variant, textColor: color }), items);
  return closure_10(variant(children[12]).Text, { variant, color, lineClamp, onTextLayout, children: children1 });
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function PersonalWidgetShowMoreButton() {
  const cResult = c.c(12);
  const personalWidgetExpandCollapse = PersonalWidgetExpandCollapseContext.usePersonalWidgetExpandCollapse();
  ({ isExpanded, setIsExpanded } = personalWidgetExpandCollapse);
  if (!personalWidgetExpandCollapse.isAnyFieldClipped) {
    if (!isExpanded) {
      return null;
    }
  }
  if (cResult[0] !== setIsExpanded) {
    const fn = function t() {
      return setIsExpanded((arg0) => !arg0);
    };
    cResult[0] = setIsExpanded;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== isExpanded) {
    const obj3 = { expanded: isExpanded };
    cResult[2] = isExpanded;
    cResult[3] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== isExpanded) {
    const intl = util.intl;
    const t = util.t;
    const stringResult = intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2);
    cResult[4] = isExpanded;
    cResult[5] = stringResult;
  } else {
    if (cResult[6] !== cResult[5]) {
      const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: tmp8 };
      const tmp13 = collapsed(Text_Text.Text, obj4);
      cResult[6] = tmp8;
      cResult[7] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] === tmp6) {
      if (cResult[9] === tmp7) {
      }
    }
    const obj5 = { hitSlop, onPress: tmp6, accessibilityRole: "button", accessibilityState: tmp7, children: tmp11 };
    const tmp18 = collapsed(hasOwnProperty, obj5);
    cResult[8] = tmp6;
    cResult[9] = tmp7;
    cResult[10] = tmp11;
    cResult[11] = tmp18;
  }
}) : (function PersonalWidgetShowMoreButton() {
  const personalWidgetExpandCollapse = PersonalWidgetExpandCollapseContext.usePersonalWidgetExpandCollapse();
  ({ isExpanded, setIsExpanded: require } = personalWidgetExpandCollapse);
  if (!personalWidgetExpandCollapse.isAnyFieldClipped) {
    if (!isExpanded) {
      return null;
    }
  }
  const obj2 = {
    hitSlop,
    onPress() {
      return _require((arg0) => !arg0);
    },
    accessibilityRole: "button",
    accessibilityState: { expanded: isExpanded },
    children: null
  };
  const intl = util.intl;
  let t = util.t;
  t = collapsed(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2) });
  obj2.children = t;
  collapsed(hasOwnProperty, obj2);
  const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2) };
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useWidgetImage(arg0, arg1, arg2) {
  const cResult = c.c(11);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  _require = tmp5[1];
  let first = setting;
  if (!setting) {
    first = tmp5[0];
  }
  let tmp7 = null;
  if (null != arg1) {
    tmp7 = null;
    if ("fileId" in arg1) {
      tmp7 = arg1;
    }
  }
  if (null == tmp7) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          return closure_0(() => { ... });
        }
      }
      cResult[6] = T;
    } else {
      class T {
        constructor() {
          return closure_0(() => { ... });
        }
      }
    }
    if (null != tmp7 && tmp7.isAnimated && !first) {
      class T {
        constructor() {
          return closure_0(() => { ... });
        }
      }
    }
    if (cResult[7] === null) {
      class T {
        constructor() {
          return closure_0(() => { ... });
        }
      }
    }
    const obj2 = { source: null, showGifTag: null != tmp7 && tmp7.isAnimated && !first, canToggleAnimation: null != tmp7 && tmp7.isAnimated && !setting && !arg2, toggleAnimation: T };
    cResult[7] = null;
    cResult[8] = null != tmp7 && tmp7.isAnimated && !first;
    cResult[9] = null != tmp7 && tmp7.isAnimated && !setting && !arg2;
    cResult[10] = obj2;
  } else {
    class T {
      constructor() {
        return closure_0(() => { ... });
      }
    }
    if (cResult[0] === tmp7.fileId) {
      class T {
        constructor() {
          return closure_0(() => { ... });
        }
      }
    }
    const obj3 = { animated: tmp8 };
    const widgetAssetURL = WidgetAssetUtils.getWidgetAssetURL(arg0, tmp7.fileId, obj3);
    cResult[0] = tmp7.fileId;
    cResult[1] = tmp8;
    cResult[2] = arg0;
    cResult[3] = widgetAssetURL;
    const tmpResult = WidgetAssetUtils;
  }
}) : (function useWidgetImage(arg0, arg1, arg2) {
  _require = arg0;
  const GifAutoPlay = require("UserSettings").GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  let tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp2[1];
  first = setting;
  if (!setting) {
    first = tmp2[0];
  }
  let tmp4 = null;
  if (null != arg1) {
    tmp4 = null;
    if ("fileId" in arg1) {
      tmp4 = arg1;
    }
  }
  _slicedToArray = tmp4;
  const items = [arg0, tmp4, first];
  const memo = noop.useMemo(() => {
    let tmp2 = null;
    if (null != closure_3) {
      let isAnimated = closure_3.isAnimated;
      if (isAnimated) {
        isAnimated = first;
      }
      const obj2 = { uri: null };
      const obj3 = { animated: isAnimated };
      obj2.uri = WidgetAssetUtils.getWidgetAssetURL(closure_0, closure_3.fileId, obj3);
      tmp2 = obj2;
    }
    return tmp2;
  }, items);
  let obj2 = { source: memo, showGifTag: null, canToggleAnimation: null, toggleAnimation: null };
  let isAnimated = null != tmp4;
  const callback = noop.useCallback(() => closure_1((arg0) => !arg0), []);
  if (isAnimated) {
    isAnimated = tmp4.isAnimated;
  }
  if (isAnimated) {
    isAnimated = !first;
  }
  if (isAnimated) {
    isAnimated = !arg2;
  }
  obj2.showGifTag = isAnimated;
  obj2.canToggleAnimation = null != tmp4 && tmp4.isAnimated && !setting && !arg2;
  obj2.toggleAnimation = callback;
  return obj2;
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function CoverSection(section) {
  let ThemeContextProvider = require;
  let tmp = dependencyMap;
  const cResult = c.c(28);
  section = section.section;
  ({ userId, disableInteraction } = section);
  let coverContainer = closure_15();
  ({ source, showGifTag, canToggleAnimation, toggleAnimation } = closure_18(userId, section.image, disableInteraction));
  let prop = null;
  if (null != source) {
    prop = coverContainer.coverContentWithImage;
  }
  if (cResult[0] === coverContainer.coverContent) {
    if (cResult[1] === prop) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== section.title) {
      let tmp7 = null;
      if ("" !== section.title) {
        const obj2 = { variant: "heading-xl/semibold", color: "text-strong", maxLines: 2, children: section.title };
        tmp7 = collapsed(closure_16, obj2);
      }
      cResult[3] = section.title;
      cResult[4] = tmp7;
      let tmp6 = tmp7;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== section.subtitle) {
      let tmp11 = null;
      if ("" !== section.subtitle) {
        const obj3 = { variant: "text-sm/medium", color: "text-default", maxLines: 3, children: section.subtitle };
        tmp11 = collapsed(closure_16, obj3);
      }
      cResult[5] = section.subtitle;
      cResult[6] = tmp11;
      let tmp10 = tmp11;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp10) {
          let tmp14 = cResult[10];
        }
        if (null == source) {
          return tmp14;
        } else {
          if (cResult[11] === canToggleAnimation) {
            if (cResult[12] === source) {
              if (cResult[13] === toggleAnimation) {
                if (cResult[15] === section.subtitle) {
                  if (cResult[16] === section.title) {
                    if (cResult[17] === source) {
                      let tmp28 = cResult[18];
                    }
                    if (cResult[19] === showGifTag) {
                      if (cResult[20] === coverContainer.gifTag) {
                        let tmp35 = cResult[21];
                      }
                      if (cResult[22] === tmp14) {
                        if (cResult[23] === coverContainer.coverContainer) {
                          if (cResult[24] === tmp19) {
                            if (cResult[25] === tmp28) {
                            }
                          }
                        }
                      }
                      ThemeContextProvider = native.ThemeContextProvider;
                      const obj4 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: null };
                      const obj5 = { style: coverContainer.coverContainer, children: null };
                      const items = [tmp19, tmp28, tmp14, tmp35];
                      obj5.children = items;
                      obj4.children = closure_1_11(React5, obj5);
                      tmp = collapsed(ThemeContextProvider, obj4);
                      cResult[22] = tmp14;
                      coverContainer = coverContainer.coverContainer;
                      cResult[23] = coverContainer;
                      cResult[24] = tmp19;
                      cResult[25] = tmp28;
                      cResult[26] = tmp35;
                      cResult[27] = tmp;
                    }
                    let tmp36 = null;
                    if (showGifTag) {
                      const obj6 = { style: coverContainer.gifTag };
                      tmp36 = collapsed(GifTagDefault, obj6);
                    }
                    cResult[19] = showGifTag;
                    cResult[20] = coverContainer.gifTag;
                    cResult[21] = tmp36;
                    tmp35 = tmp36;
                  }
                }
                let tmp29 = null;
                if (null != source) {
                  if ("" !== section.title) {
                    const obj7 = { colors, locations, style: timestampProducer.absoluteFill, pointerEvents: "none" };
                    tmp29 = collapsed(LinearGradientDefault, obj7);
                  } else {
                    tmp29 = null;
                  }
                }
                cResult[15] = section.subtitle;
                cResult[16] = section.title;
                cResult[17] = source;
                cResult[18] = tmp29;
                tmp28 = tmp29;
              }
            }
          }
          if (canToggleAnimation) {
            const obj8 = { style: timestampProducer.absoluteFill, onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: null, children: null };
            const intl = util.intl;
            obj8.accessibilityLabel = intl.string(util.t.MxXgrL);
            const obj9 = { source, style: timestampProducer.absoluteFill, resizeMode: "cover" };
            obj8.children = collapsed(FastImageDefault, obj9);
            let tmp20Result = collapsed(hasOwnProperty, obj8);
          } else {
            const obj10 = { source, style: timestampProducer.absoluteFill, resizeMode: "cover" };
            tmp20Result = collapsed(FastImageDefault, obj10);
          }
          cResult[11] = canToggleAnimation;
          cResult[12] = source;
          cResult[13] = toggleAnimation;
          cResult[14] = tmp20Result;
        }
      }
    }
    const obj11 = { style: tmp5, pointerEvents: "box-none", children: null };
    const items1 = [tmp6, tmp10];
    obj11.children = items1;
    const tmp17 = closure_1_11(React5, obj11);
    cResult[7] = tmp5;
    cResult[8] = tmp6;
    cResult[9] = tmp10;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const items2 = [coverContainer.coverContent, prop];
  cResult[0] = coverContainer.coverContent;
  cResult[1] = prop;
  cResult[2] = items2;
  tmp5 = items2;
  const tmp3 = closure_18(userId, section.image, disableInteraction);
}) : (function CoverSection(section) {
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
  const obj = { style: items, pointerEvents: "box-none", children: null };
  items[1] = prop;
  let tmp6 = null;
  if ("" !== section.title) {
    const obj2 = { variant: "heading-xl/semibold", color: "text-strong", maxLines: 2, children: section.title };
    tmp6 = collapsed(closure_16, obj2);
  }
  const items1 = [tmp6, ];
  let tmp9 = null;
  if ("" !== section.subtitle) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", maxLines: 3, children: section.subtitle };
    tmp9 = collapsed(closure_16, obj3);
  }
  items1[1] = tmp9;
  obj.children = items1;
  const tmp3Result = closure_1_11(React5, obj);
  let tmp24Result6 = tmp3Result;
  if (null != source) {
    const obj4 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: null };
    const obj5 = { style: tmp.coverContainer, children: null };
    if (canToggleAnimation) {
      const obj6 = { style: timestampProducer.absoluteFill, onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = util.intl;
      obj6.accessibilityLabel = intl.string(util.t.MxXgrL);
      const obj7 = { source, style: timestampProducer.absoluteFill, resizeMode: "cover" };
      obj6.children = collapsed(FastImageDefault, obj7);
      let tmp24Result = collapsed(hasOwnProperty, obj6);
      let tmp15 = timestampProducer;
      let tmp14 = importDefault;
    } else {
      tmp14 = importDefault;
      const obj8 = { source, style: null, resizeMode: "cover" };
      tmp15 = timestampProducer;
      obj8.style = timestampProducer.absoluteFill;
      tmp24Result = collapsed(FastImageDefault, obj8);
    }
    const items2 = [tmp24Result, , , ];
    let tmp24Result4 = null;
    if (null != source) {
      if ("" !== section.title) {
        const obj9 = { colors, locations, style: tmp15.absoluteFill, pointerEvents: "none" };
        tmp24Result4 = collapsed(tmp14(5391), obj9);
      } else {
        tmp24Result4 = null;
      }
    }
    items2[1] = tmp24Result4;
    items2[2] = tmp3Result;
    let tmp24Result5 = null;
    if (showGifTag) {
      const obj10 = { style: tmp.gifTag };
      tmp24Result5 = collapsed(tmp14(8129), obj10);
    }
    items2[3] = tmp24Result5;
    obj5.children = items2;
    obj4.children = closure_1_11(React5, obj5);
    tmp24Result6 = collapsed(native.ThemeContextProvider, obj4);
  }
  return tmp24Result6;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function FieldRow(field) {
  const cResult = c.c(21);
  field = field.field;
  ({ userId, disableInteraction } = field);
  const tmp4 = closure_15();
  ({ source, showGifTag, canToggleAnimation, toggleAnimation } = closure_18(userId, field.image, disableInteraction));
  if (cResult[0] === source) {
    if (cResult[1] === tmp4.fieldImage) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === canToggleAnimation) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === showGifTag) {
          if (cResult[6] === tmp4.gifTagSmall) {
            if (cResult[7] === toggleAnimation) {
              let tmp10 = cResult[8];
            }
            if (cResult[9] !== field.title) {
              let tmp19 = null;
              if ("" !== field.title) {
                const obj2 = { variant: "text-sm/medium", color: "text-default", maxLines: 2, children: field.title };
                tmp19 = collapsed(closure_16, obj2);
              }
              cResult[9] = field.title;
              cResult[10] = tmp19;
              let tmp18 = tmp19;
            } else {
              tmp18 = cResult[10];
            }
            if (cResult[11] !== field.description) {
              let tmp23 = null;
              if ("" !== field.description) {
                const obj3 = { variant: "text-xs/medium", color: "text-subtle", maxLines: 4, children: field.description };
                tmp23 = collapsed(closure_16, obj3);
              }
              cResult[11] = field.description;
              cResult[12] = tmp23;
              let tmp22 = tmp23;
            } else {
              tmp22 = cResult[12];
            }
            if (cResult[13] === tmp4.fieldContent) {
              if (cResult[14] === tmp18) {
                if (cResult[15] === tmp22) {
                  let tmp26 = cResult[16];
                }
                if (cResult[17] === tmp4.fieldRow) {
                  if (cResult[18] === tmp10) {
                    if (cResult[19] === tmp26) {
                      let tmp30 = cResult[20];
                    }
                    return tmp30;
                  }
                }
                const obj4 = { style: tmp4.fieldRow, children: null };
                const items = [tmp10, tmp26];
                obj4.children = items;
                const tmp33 = closure_1_11(React5, obj4);
                cResult[17] = tmp4.fieldRow;
                cResult[18] = tmp10;
                cResult[19] = tmp26;
                cResult[20] = tmp33;
                tmp30 = tmp33;
              }
            }
            const obj5 = { style: tmp4.fieldContent, children: null };
            const items1 = [tmp18, tmp22];
            obj5.children = items1;
            const tmp29 = closure_1_11(React5, obj5);
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
        const obj6 = { onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: null, children: null };
        const intl = util.intl;
        obj6.accessibilityLabel = intl.string(util.t.MxXgrL);
        const items2 = [tmp6, ];
        let tmp15 = null;
        if (showGifTag) {
          const obj7 = { style: tmp4.gifTagSmall };
          tmp15 = collapsed(GifTagDefault, obj7);
        }
        items2[1] = tmp15;
        obj6.children = items2;
        tmp13Result = closure_1_11(hasOwnProperty, obj6);
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
    tmp7 = collapsed(FastImageDefault, obj8);
  }
  cResult[0] = source;
  cResult[1] = tmp4.fieldImage;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const tmp5 = closure_18(userId, field.image, disableInteraction);
}) : (function FieldRow(field) {
  field = field.field;
  ({ userId, disableInteraction } = field);
  const tmp = closure_15();
  const tmp2 = closure_18(userId, field.image, disableInteraction);
  const source = tmp2.source;
  let tmp3 = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    const obj = { source, style: tmp.fieldImage, resizeMode: "cover" };
    tmp3 = collapsed(FastImageDefault, obj);
  }
  const obj2 = { style: tmp.fieldRow, children: null };
  let tmp7Result = tmp3;
  if (null != tmp3) {
    tmp7Result = tmp3;
    if (canToggleAnimation) {
      const obj3 = { onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = util.intl;
      obj3.accessibilityLabel = intl.string(util.t.MxXgrL);
      const items = [tmp3, ];
      let tmp13 = null;
      if (showGifTag) {
        const obj4 = { style: tmp.gifTagSmall };
        tmp13 = collapsed(GifTagDefault, obj4);
      }
      items[1] = tmp13;
      obj3.children = items;
      tmp7Result = closure_1_11(hasOwnProperty, obj3);
    }
  }
  const items1 = [tmp7Result, ];
  const obj5 = { style: tmp.fieldContent, children: null };
  let tmp16 = null;
  if ("" !== field.title) {
    const obj6 = { variant: "text-sm/medium", color: "text-default", maxLines: 2, children: field.title };
    tmp16 = collapsed(closure_16, obj6);
  }
  const items2 = [tmp16, ];
  let tmp19 = null;
  if ("" !== field.description) {
    const obj7 = { variant: "text-xs/medium", color: "text-subtle", maxLines: 4, children: field.description };
    tmp19 = collapsed(closure_16, obj7);
  }
  items2[1] = tmp19;
  obj5.children = items2;
  items1[1] = closure_1_11(React5, obj5);
  obj2.children = items1;
  return closure_1_11(React5, obj2);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function FieldsSection(userId) {
  const cResult = userId(576).c(10);
  userId = userId.userId;
  ({ section, disableInteraction } = userId);
  const tmp2 = closure_15();
  let num = 0;
  if (0 === section.fields.length) {
    return null;
  } else {
    if (cResult[0] === disableInteraction) {
      if (cResult[1] === section.fields) {
        if (cResult[2] === userId) {
          if (cResult[7] === tmp2.fieldsContainer) {
            if (cResult[8] === tmp3) {
              let tmp7 = cResult[9];
            }
            return tmp7;
          }
          const obj2 = { style: tmp12, children: cResult[3] };
          const tmp10 = closure_10(closure_7, obj2);
          cResult[7] = tmp2.fieldsContainer;
          cResult[8] = cResult[3];
          cResult[9] = tmp10;
          tmp7 = tmp10;
        }
      }
    }
    if (cResult[4] === disableInteraction) {
      if (cResult[5] === userId) {
        let tmp4 = cResult[6];
      }
      const fields = section.fields;
      const mapped = fields.map(tmp4);
      cResult[num] = disableInteraction;
      section = section.fields;
      cResult[1] = section;
      cResult[2] = userId;
      num = 3;
      cResult[3] = mapped;
    }
    const fn = function b(field) {
      return collapsed(closure_20, { userId, field, disableInteraction }, field.key);
    };
    cResult[4] = disableInteraction;
    cResult[5] = userId;
    cResult[6] = fn;
    tmp4 = fn;
  }
  const obj = userId(576);
}) : (function FieldsSection(arg0) {
  ({ userId: require, section, disableInteraction: importDefault } = arg0);
  let tmp2 = null;
  if (0 !== section.fields.length) {
    const obj = { style: tmp.fieldsContainer, children: null };
    const fields = section.fields;
    obj.children = fields.map((field) => collapsed(closure_20, { userId, field, disableInteraction }, field.key));
    tmp2 = closure_10(closure_7, obj);
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePersonalWidgetCardContent(userId) {
  const cResult = userId(576).c(26);
  userId = userId.userId;
  ({ widget, cardStyle, disableInteraction } = userId);
  importDefault = tmp4;
  const tmp5 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function n() {
      return AuthenticationStore.getId() === userId;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(first, tmp8);
  if (cResult[3] === (undefined !== disableInteraction && disableInteraction)) {
    if (cResult[4] === userId) {
      let tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = closure_10(tmp(9035).NitroWheelIcon, { size: "xs", color: "icon-subtle" });
      cResult[6] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4) {
      if (cResult[8] === stateFromStores) {
        if (cResult[9] === userId) {
          if (cResult[10] === widget) {
            let tmp15 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            if (cResult[13] === widget.sections) {
              let tmp20 = cResult[14];
            }
            if (cResult[15] !== tmp4) {
              let tmp23 = null;
              if (!tmp4) {
                tmp23 = closure_10(closure_17, {});
              }
              cResult[15] = tmp4;
              cResult[16] = tmp23;
              let tmp22 = tmp23;
            } else {
              tmp22 = cResult[16];
            }
            if (cResult[17] === tmp5.sectionsContainer) {
              if (cResult[18] === tmp22) {
                if (cResult[19] === tmp20) {
                  let tmp26 = cResult[20];
                }
                if (cResult[21] === cardStyle) {
                  if (cResult[22] === tmp26) {
                    if (cResult[23] === tmp15) {
                      if (cResult[24] === widget.header) {
                        let tmp30 = cResult[25];
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
            const obj3 = { style: tmp19, children: null };
            const items1 = [tmp20, tmp22];
            obj3.children = items1;
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
    let tmp16 = !stateFromStores;
    if (!stateFromStores) {
      tmp16 = !tmp4;
    }
    if (tmp16) {
      const obj4 = { userId, widget };
      tmp16 = closure_10(UserProfileWidgetReportButtonDefault, obj4);
    }
    cResult[7] = tmp4;
    cResult[8] = stateFromStores;
    cResult[9] = userId;
    cResult[10] = widget;
    cResult[11] = tmp16;
    tmp15 = tmp16;
  }
  function renderSection(type, arg1) {
    type = type.type;
    if ("cover" === type) {
      const obj2 = { userId, section: type, disableInteraction };
      return collapsed(closure_19, obj2, arg1);
    } else if ("fields" === type) {
      const obj = { userId, section: type, disableInteraction };
      return collapsed(closure_21, obj, arg1);
    } else {
      return null;
    }
  }
  cResult[3] = undefined !== disableInteraction && disableInteraction;
  cResult[4] = userId;
  cResult[5] = renderSection;
  tmp10 = renderSection;
  const tmpResult = userId(504);
}) : (function UserProfilePersonalWidgetCardContent(style) {
  const userId = style.userId;
  ({ widget, disableInteraction } = style);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  const tmp = closure_15();
  const items = [AuthenticationStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  let obj2 = { style: style.cardStyle, titleLeadingIcon: null, title: null, trailingAction: null, children: null };
  let obj = userId(504);
  const tmp5 = disableInteraction;
  obj2.titleLeadingIcon = closure_10(userId(9035).NitroWheelIcon, { size: "xs", color: "icon-subtle" });
  obj2.title = widget.header;
  let tmp4Result = !stateFromStores;
  if (!stateFromStores) {
    tmp4Result = !disableInteraction;
  }
  if (tmp4Result) {
    const obj3 = { userId, widget };
    tmp4Result = closure_10(tmp5(13240), obj3);
  }
  obj2.trailingAction = tmp4Result;
  const obj4 = { style: tmp.sectionsContainer, children: null };
  const sections = widget.sections;
  const items1 = [
    sections.map(function renderSection(type, index) {
      type = type.type;
      if ("cover" === type) {
        const obj2 = { userId, section: type, disableInteraction };
        return collapsed(closure_19, obj2, index);
      } else if ("fields" === type) {
        const obj = { userId, section: type, disableInteraction };
        return collapsed(closure_21, obj, index);
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
  obj4.children = items1;
  obj2.children = closure_11(closure_7, obj4);
  return closure_10(disableInteraction(6903), obj2);
});
ReactCompilerGating = fn(558);
let obj8 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePersonalWidgetCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePersonalWidgetCard(arg0) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = { children: null };
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj2.children = collapsed(closure_22, obj3);
    const tmp10 = collapsed(PersonalWidgetExpandCollapseContext.PersonalWidgetExpandCollapseProvider, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp10;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function UserProfilePersonalWidgetCard(arg0) {
  const obj = { children: null };
  const merged = Object.assign(arg0);
  obj.children = collapsed(closure_22, {});
  return collapsed(PersonalWidgetExpandCollapseContext.PersonalWidgetExpandCollapseProvider, obj);
});