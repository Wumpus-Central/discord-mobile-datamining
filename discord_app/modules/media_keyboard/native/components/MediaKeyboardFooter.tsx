// === Module 10386: MediaKeyboardFooter ===

// Module 10386 (MediaKeyboardFooter)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import DeviceMediaDefault from "DeviceMedia" /* 10375 */;
import _modDef10387 from "module_10387" /* 10387 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj = { container: { padding: nativeDefault.space.PX_16, height: 280, alignItems: "center" }, label: { textAlign: "center", marginBottom: 16 }, buttonWrapper: null, loadingSpinner: null };
let obj3 = { padding: nativeDefault.space.PX_16, height: 280, alignItems: "center" };
obj.buttonWrapper = { marginBottom: nativeDefault.space.PX_32, height: nativeDefault.space.PX_48 };
let obj4 = { marginBottom: nativeDefault.space.PX_32, height: nativeDefault.space.PX_48 };
obj.loadingSpinner = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ disabled, onViewAll } = arg0);
  const tmp4 = closure_8();
  if (obj2.useHasReachedEnd()) {
    const _Symbol = Symbol;
    ({ container, label } = tmp4);
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.mKSwAW);
      cResult[2] = stringResult;
      let tmp11 = stringResult;
    } else {
      tmp11 = cResult[2];
    }
    if (cResult[3] !== tmp4.label) {
      const obj3 = { variant: "text-sm/normal", style: label, children: tmp11 };
      const tmp15 = timestampProducer(Text_Text.Text, obj3);
      cResult[3] = tmp4.label;
      cResult[4] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.ZT24In);
      cResult[5] = stringResult1;
      let tmp16 = stringResult1;
    } else {
      tmp16 = cResult[5];
    }
    if (cResult[6] === disabled) {
      if (cResult[7] === onViewAll) {
        let tmp18 = cResult[8];
      }
      if (cResult[9] === tmp4.buttonWrapper) {
        if (cResult[10] === tmp18) {
          let tmp21 = cResult[11];
        }
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { source: _modDef10387 };
          const tmp28 = timestampProducer(React4, obj4);
          cResult[12] = tmp28;
          let tmp25 = tmp28;
        } else {
          tmp25 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp13) {
            if (cResult[15] === tmp21) {
              let tmp29 = cResult[16];
            }
            return tmp29;
          }
        }
        const obj5 = { style: container, children: null };
        const items = [tmp13, tmp21, tmp25];
        obj5.children = items;
        const tmp32 = React5(React3, obj5);
        cResult[13] = tmp4.container;
        cResult[14] = tmp13;
        cResult[15] = tmp21;
        cResult[16] = tmp32;
        tmp29 = tmp32;
      }
      const obj6 = { style: tmp4.buttonWrapper, children: tmp18 };
      const tmp24 = timestampProducer(React3, obj6);
      cResult[9] = tmp4.buttonWrapper;
      cResult[10] = tmp18;
      cResult[11] = tmp24;
      tmp21 = tmp24;
    }
    const obj7 = { variant: "primary", size: "sm", onPress: onViewAll, text: tmp16, disabled };
    const tmp20 = timestampProducer(components_Button_Button.Button, obj7);
    cResult[6] = disabled;
    cResult[7] = onViewAll;
    cResult[8] = tmp20;
    tmp18 = tmp20;
  } else {
    if (cResult[0] !== tmp4.loadingSpinner) {
      const obj8 = { style: tmp4.loadingSpinner, size: "large", color: tmp4.loadingSpinner.color };
      const tmp9 = timestampProducer(hasOwnProperty, obj8);
      cResult[0] = tmp4.loadingSpinner;
      cResult[1] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[1];
    }
    return tmp6;
  }
  obj2 = DeviceMediaDefault;
}) : ((arg0) => {
  ({ disabled, onViewAll } = arg0);
  const tmp = closure_8();
  if (obj.useHasReachedEnd()) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { variant: "text-sm/normal", style: tmp.label, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.mKSwAW);
    const items = [timestampProducer(Text_Text.Text, obj3), , ];
    const obj4 = { style: tmp.buttonWrapper, children: null };
    const obj5 = { variant: "primary", size: "sm", onPress: onViewAll, text: null, disabled: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(util.t.ZT24In);
    obj5.disabled = disabled;
    obj4.children = timestampProducer(components_Button_Button.Button, obj5);
    items[1] = timestampProducer(React3, obj4);
    const obj6 = { source: _modDef10387 };
    items[2] = timestampProducer(React4, obj6);
    obj2.children = items;
    let tmp6 = React5(React3, obj2);
  } else {
    const obj7 = { style: tmp.loadingSpinner, size: "large", color: tmp.loadingSpinner.color };
    tmp6 = timestampProducer(hasOwnProperty, obj7);
  }
  return tmp6;
}));
export const FOOTER_HEIGHT = 280;