// === Module 10388: MediaKeyboardLimitedPickerNotice ===

// Module 10388 (MediaKeyboardLimitedPickerNotice)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "row", paddingHorizontal: 16, paddingVertical: 16, alignItems: "center" }, absoluteContainer: { position: "absolute" }, text: { flex: 1 }, button: { marginLeft: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ onPress, onHeightChange } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] !== onHeightChange) {
    const fn = function n(nativeEvent) {
      if (onHeightChange != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    };
    cResult[0] = onHeightChange;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let absoluteContainer;
  if (null != onHeightChange) {
    absoluteContainer = tmp4.absoluteContainer;
  }
  if (cResult[2] === tmp4.container) {
    if (cResult[3] === absoluteContainer) {
      let tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["5g7NcN"]);
      cResult[5] = stringResult;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== tmp4.text) {
      const obj2 = { style: tmp4.text, variant: "text-sm/normal", children: tmp9 };
      const tmp13 = React4(Text_Text.Text, obj2);
      cResult[6] = tmp4.text;
      cResult[7] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.JuXTi6);
      cResult[8] = stringResult1;
      let tmp14 = stringResult1;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] !== onPress) {
      const obj3 = { size: "sm", variant: "tertiary", text: tmp14, onPress };
      const tmp18 = React4(components_Button_Button.Button, obj3);
      cResult[9] = onPress;
      cResult[10] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp4.button) {
      if (cResult[12] === tmp16) {
        let tmp19 = cResult[13];
      }
      if (cResult[14] === tmp5) {
        if (cResult[15] === tmp19) {
          if (cResult[16] === tmp7) {
            if (cResult[17] === tmp11) {
              let tmp23 = cResult[18];
            }
            return tmp23;
          }
        }
      }
      const obj4 = { style: tmp7, onLayout: tmp5, children: null };
      const items = [tmp11, tmp19];
      obj4.children = items;
      const tmp26 = hasOwnProperty(View, obj4);
      cResult[14] = tmp5;
      cResult[15] = tmp19;
      cResult[16] = tmp7;
      cResult[17] = tmp11;
      cResult[18] = tmp26;
      tmp23 = tmp26;
    }
    const obj5 = { style: tmp4.button, children: tmp16 };
    const tmp22 = React4(View, obj5);
    cResult[11] = tmp4.button;
    cResult[12] = tmp16;
    cResult[13] = tmp22;
    tmp19 = tmp22;
  }
  const items1 = [tmp4.container, absoluteContainer];
  cResult[2] = tmp4.container;
  cResult[3] = absoluteContainer;
  cResult[4] = items1;
  tmp7 = items1;
}) : ((onHeightChange) => {
  onHeightChange = onHeightChange.onHeightChange;
  const tmp = closure_6();
  const items = [onHeightChange];
  const items1 = [tmp.container, ];
  let absoluteContainer;
  const callback = noop.useCallback((nativeEvent) => {
    if (onHeightChange != null) {
      tmp(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  if (null != onHeightChange) {
    absoluteContainer = tmp.absoluteContainer;
  }
  const obj = { style: items1, onLayout: callback, children: null };
  items1[1] = absoluteContainer;
  const obj2 = { style: tmp.text, variant: "text-sm/normal", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["5g7NcN"]);
  const items2 = [React4(Text_Text.Text, obj2), ];
  const obj3 = { style: tmp.button, children: null };
  const obj4 = { size: "sm", variant: "tertiary", text: null, onPress: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.JuXTi6);
  obj4.onPress = onHeightChange.onPress;
  obj3.children = React4(components_Button_Button.Button, obj4);
  items2[1] = React4(View, obj3);
  obj.children = items2;
  return hasOwnProperty(View, obj);
});