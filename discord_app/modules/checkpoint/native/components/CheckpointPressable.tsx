// === Module 15557: CheckpointPressable ===

// Module 15557 (CheckpointPressable)
import react from "react" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 5115 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

let closure_4;
let hasOwnProperty;
let items;
let metroImportDefault;
let metroRequire;
let obj2;
let closure_2 = ["style", "containerStyle", "children"];
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const CHECKPOINT_BUTTON_SHADOW = CheckpointConstants.CHECKPOINT_BUTTON_SHADOW;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { paddingRight: 4, paddingBottom: 4 }, shadow: { position: "absolute", top: 4, left: 4, right: 0, bottom: 0, backgroundColor: CHECKPOINT_BUTTON_SHADOW }, pressed: obj2 };
obj2 = { transform: items };
items = [{ translateX: 4 }, { translateY: 4 }];
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let children;
  let containerStyle;
  let items;
  let tmp2;
  let tmp3;
  let tmp4;
  const obj = react;
  const cResult = obj.c(21);
  if (cResult[0] !== style) {
    style = style.style;
    let closure_0 = style;
    ({ containerStyle, children } = style);
    const tmp8 = _objectWithoutProperties(style, closure_2);
    cResult[0] = style;
    cResult[1] = children;
    cResult[2] = containerStyle;
    cResult[3] = tmp8;
    cResult[4] = style;
    tmp4 = tmp8;
    tmp3 = containerStyle;
    tmp2 = children;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
    closure_0 = cResult[4];
  }
  const tmp9 = closure_8();
  let closure_1 = tmp9;
  if (cResult[5] === tmp3) {
    let tmp10;
    let tmp11;
    if (cResult[6] === tmp9.container) {
      tmp10 = cResult[7];
    }
    if (cResult[8] !== tmp9.shadow) {
      const obj2 = { style: tmp9.shadow };
      const tmp14 = metroRequire(hasOwnProperty, obj2);
      cResult[8] = tmp9.shadow;
      cResult[9] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[9];
    }
    if (cResult[10] === tmp5) {
      let tmp15;
      if (cResult[11] === tmp9.pressed) {
        tmp15 = cResult[12];
      }
      if (cResult[13] === tmp2) {
        if (cResult[14] === tmp4) {
          let tmp16;
          if (cResult[15] === tmp15) {
            tmp16 = cResult[16];
          }
          if (cResult[17] === tmp10) {
            if (cResult[18] === tmp11) {
              let tmp23;
              if (cResult[19] === tmp16) {
                tmp23 = cResult[20];
              }
              return tmp23;
            }
          }
          const obj3 = { style: tmp10, children: items };
          items = [tmp11, tmp16];
          const tmp26 = metroImportDefault(hasOwnProperty, obj3);
          cResult[17] = tmp10;
          cResult[18] = tmp11;
          cResult[19] = tmp16;
          cResult[20] = tmp26;
          tmp23 = tmp26;
        }
      }
      const obj4 = { style: tmp15, children: tmp2 };
      const merged = Object.assign(tmp4);
      const tmp22 = metroRequire(React3, obj4);
      cResult[13] = tmp2;
      cResult[14] = tmp4;
      cResult[15] = tmp15;
      cResult[16] = tmp22;
      tmp16 = tmp22;
    }
    const fn = function w(pressed) {
      pressed = pressed.pressed;
      const items = [closure_0, ];
      if (pressed) {
        pressed = pressed.pressed;
      }
      items[1] = pressed;
      return items;
    };
    cResult[10] = tmp5;
    cResult[11] = tmp9.pressed;
    cResult[12] = fn;
    tmp15 = fn;
  }
  const items1 = [tmp9.container, tmp3];
  cResult[5] = tmp3;
  cResult[6] = tmp9.container;
  cResult[7] = items1;
  tmp10 = items1;
}) : ((style) => {
  let children;
  let containerStyle;
  let items;
  let items1;
  style = style.style;
  ({ containerStyle, children } = style);
  const merged = Object.assign(style, Object.assign({ style: 0, containerStyle: 0, children: 0 }));
  const tmp2 = closure_8();
  let closure_1 = tmp2;
  const obj = { style: items, children: items1 };
  items = [tmp2.container, containerStyle];
  items1 = [, ];
  const obj2 = { style: tmp2.shadow };
  items1[0] = metroRequire(hasOwnProperty, obj2);
  const obj3 = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [style, ];
      if (pressed) {
        pressed = pressed.pressed;
      }
      items[1] = pressed;
      return items;
    },
    children
  };
  const merged1 = Object.assign(merged);
  items1[1] = metroRequire(React3, obj3);
  return metroImportDefault(hasOwnProperty, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointPressable.tsx");

export default tmp4;
export const SHADOW_OFFSET = 4;