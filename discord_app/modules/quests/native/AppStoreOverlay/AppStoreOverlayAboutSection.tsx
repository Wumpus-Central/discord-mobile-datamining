// === Module 10933: AppStoreOverlayAboutSection ===

// Module 10933 (AppStoreOverlayAboutSection)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const rect = { top: nativeDefault.space.PX_12, bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
let obj = { aboutSection: obj2 };
obj2 = { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_1;
  let closure_3;
  let description;
  let first;
  let intl2;
  let items;
  let obj5;
  let obj6;
  let onSeeMorePress;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(20);
  ({ description, onSeeMorePress } = arg0);
  const tmp4 = closure_9();
  [tmp6, closure_129_1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first, closure_3] = react.useState(null);
  if (cResult[0] !== first) {
    const fn = function c(nativeEvent) {
      if (null == first) {
        closure_3(nativeEvent.nativeEvent.lines.length > 3);
      }
    };
    cResult[0] = first;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== onSeeMorePress) {
    const fn2 = function k() {
      let tmp = closure_1_1((arg0) => {
        const tmp = arg0;
        if (!tmp) {
          if (onSeeMorePress != null) {
            tmp2();
          }
        }
        return !arg0;
      });
    };
    cResult[2] = onSeeMorePress;
    cResult[3] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const intl = intl3.intl;
    const string = intl.string;
    const t = intl3.t;
    const stringResult = string(tmp6 ? t["6MwJo/"] : t.lBeKY2);
    cResult[4] = tmp6;
    cResult[5] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.CI0vSJ) };
    const Text = Text_Text.Text;
    intl2 = intl3.intl;
    const tmp15 = metroRequire(Text, obj2);
    cResult[6] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === description) {
    if (cResult[8] === tmp9) {
      let tmp16;
      if (cResult[9] === num7) {
        tmp16 = cResult[10];
      }
      if (cResult[11] === tmp6) {
        if (cResult[12] === tmp10) {
          if (cResult[13] === first) {
            let tmp18;
            if (cResult[14] === tmp11) {
              tmp18 = cResult[15];
            }
            if (cResult[16] === tmp4.aboutSection) {
              if (cResult[17] === tmp16) {
                let tmp23;
                if (cResult[18] === tmp18) {
                  tmp23 = cResult[19];
                }
                return tmp23;
              }
            }
            const obj3 = { style: tmp4.aboutSection, children: items };
            items = [tmp13, tmp16, tmp18];
            const tmp26 = metroImportDefault(hasOwnProperty, obj3);
            cResult[16] = tmp4.aboutSection;
            cResult[17] = tmp16;
            cResult[18] = tmp18;
            cResult[19] = tmp26;
            tmp23 = tmp26;
          }
        }
      }
      let tmp19 = true === first;
      if (tmp19) {
        const obj4 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: tmp11, accessibilityState: obj5, onPress: tmp10, children: metroRequire(Text_Text.Text, obj6) };
        obj5 = { expanded: tmp6 };
        obj6 = { variant: "text-sm/medium", color: "text-link", children: tmp11 };
        tmp19 = metroRequire(React3, obj4);
      }
      cResult[11] = tmp6;
      cResult[12] = tmp10;
      cResult[13] = first;
      cResult[14] = tmp11;
      cResult[15] = tmp19;
      tmp18 = tmp19;
    }
  }
  const tmp17 = metroRequire(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: num7, onTextLayout: tmp9, children: description });
  cResult[7] = description;
  cResult[8] = tmp9;
  cResult[9] = num7;
  cResult[10] = tmp17;
  tmp16 = tmp17;
}) : ((onSeeMorePress) => {
  let c1;
  let closure_3;
  let first;
  let intl2;
  let items2;
  let obj4;
  let obj5;
  let tmp3;
  onSeeMorePress = onSeeMorePress.onSeeMorePress;
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  const description = onSeeMorePress.description;
  let tmp = closure_9();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c1] = tmp2;
  [first, closure_3] = react.useState(null);
  const items = [first];
  const items1 = [onSeeMorePress];
  const callback = react.useCallback((nativeEvent) => {
    if (null == first) {
      closure_3(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  const callback1 = react.useCallback(() => {
    let tmp = _undefined((arg0) => {
      const tmp = arg0;
      if (!tmp) {
        if (onSeeMorePress != null) {
          tmp2();
        }
      }
      return !arg0;
    });
  }, items1);
  const intl = intl3.intl;
  const string = intl.string;
  const t = intl3.t;
  const stringResult = string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  const obj = { style: tmp.aboutSection, children: items2 };
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.CI0vSJ) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  items2 = [metroRequire(Text, obj2), , ];
  const Text2 = Text_Text.Text;
  items2[1] = metroRequire(Text2, { variant: "text-sm/medium", color: "text-default", lineClamp: num, onTextLayout: callback, children: description });
  let tmp13Result = true === first;
  if (tmp13Result) {
    const obj3 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj4, onPress: callback1, children: metroRequire(Text_Text.Text, obj5) };
    obj4 = { expanded: tmp3 };
    obj5 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
    tmp13Result = metroRequire(React3, obj3);
  }
  items2[2] = tmp13Result;
  return metroImportDefault(hasOwnProperty, obj);
});
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default tmp4;