// === Module 10946: AppStoreOverlayAboutSection ===

// Module 10946 (AppStoreOverlayAboutSection)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { top: nativeDefault.space.PX_12, bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
const createStyles = fn(4896);
let obj = { aboutSection: { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 } };
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ description, onSeeMorePress } = arg0);
  const tmp4 = closure_9();
  [tmp6, dependencyMap] = noop.useState(false);
  [first, closure_3] = noop.useState(null);
  if (cResult[0] !== first) {
    const fn = function c(nativeEvent) {
      if (null == first) {
        closure_3(nativeEvent.nativeEvent.lines.length > 3);
      }
    };
    cResult[0] = first;
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== onSeeMorePress) {
    const fn2 = function k() {
      dependencyMap((arg0) => {
        if (!arg0) {
          if (onSeeMorePress != null) {
            tmp();
          }
        }
        return !arg0;
      });
    };
    cResult[2] = onSeeMorePress;
    cResult[3] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const intl = util.intl;
    const t = util.t;
    const stringResult = intl.string(tmp6 ? t["6MwJo/"] : t.lBeKY2);
    cResult[4] = tmp6;
    cResult[5] = stringResult;
  } else {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj2.children = intl2.string(util.t.CI0vSJ);
      const tmp17 = timestampProducer(Text_Text.Text, obj2);
      cResult[6] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] === description) {
      if (cResult[8] === tmp9) {
        if (cResult[9] === num7) {
          let tmp18 = cResult[10];
        }
        if (cResult[11] === tmp6) {
          if (cResult[12] === tmp10) {
            if (cResult[13] === first) {
              if (cResult[14] === tmp11) {
                let tmp21 = cResult[15];
              }
              if (cResult[16] === tmp4.aboutSection) {
                if (cResult[17] === tmp18) {
                  if (cResult[18] === tmp21) {
                    let tmp26 = cResult[19];
                  }
                  return tmp26;
                }
              }
              const obj3 = { style: tmp4.aboutSection, children: null };
              const items = [tmp15, tmp18, tmp21];
              obj3.children = items;
              const tmp29 = React5(hasOwnProperty, obj3);
              cResult[16] = tmp4.aboutSection;
              cResult[17] = tmp18;
              cResult[18] = tmp21;
              cResult[19] = tmp29;
              tmp26 = tmp29;
            }
          }
        }
        let tmp22 = true === first;
        if (tmp22) {
          const obj4 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: tmp11, accessibilityState: null, onPress: null, children: null };
          const obj5 = { expanded: tmp6 };
          obj4.accessibilityState = obj5;
          obj4.onPress = tmp10;
          const obj6 = { variant: "text-sm/medium", color: "text-link", children: tmp11 };
          obj4.children = timestampProducer(Text_Text.Text, obj6);
          tmp22 = timestampProducer(React4, obj4);
        }
        cResult[11] = tmp6;
        cResult[12] = tmp10;
        cResult[13] = first;
        cResult[14] = tmp11;
        cResult[15] = tmp22;
        tmp21 = tmp22;
      }
    }
    const obj7 = { variant: "text-sm/medium", color: "text-default", lineClamp: num7, onTextLayout: tmp9, children: description };
    const tmp20 = timestampProducer(Text_Text.Text, obj7);
    cResult[7] = description;
    cResult[8] = tmp9;
    cResult[9] = num7;
    cResult[10] = tmp20;
    tmp18 = tmp20;
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
}) : ((children) => {
  const onSeeMorePress = children.onSeeMorePress;
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  const tmp = closure_9();
  [tmp3, c1] = noop.useState(false);
  [first, closure_3] = noop.useState(null);
  const items = [first];
  const items1 = [onSeeMorePress];
  const callback = noop.useCallback((nativeEvent) => {
    if (null == first) {
      closure_3(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    _undefined((arg0) => {
      if (!arg0) {
        if (onSeeMorePress != null) {
          tmp();
        }
      }
      return !arg0;
    });
  }, items1);
  const intl = util.intl;
  const t = util.t;
  const stringResult = intl.string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  const obj = { style: tmp.aboutSection, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.CI0vSJ);
  const items2 = [timestampProducer(Text_Text.Text, obj2), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: num, onTextLayout: callback, children: children.description }), ];
  let tmp13Result = true === first;
  if (tmp13Result) {
    const obj3 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: null, onPress: null, children: null };
    const obj4 = { expanded: tmp3 };
    obj3.accessibilityState = obj4;
    obj3.onPress = callback1;
    const obj5 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
    obj3.children = timestampProducer(Text_Text.Text, obj5);
    tmp13Result = timestampProducer(React4, obj3);
  }
  items2[2] = tmp13Result;
  obj.children = items2;
  return React5(hasOwnProperty, obj);
});