// === Module 15557: CheckpointPressable ===

// Module 15557 (CheckpointPressable)
import c from "c" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
let closure_2 = ["style", "containerStyle", "children"];
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { paddingRight: 4, paddingBottom: 4 }, shadow: { position: "absolute", top: 4, left: 4, right: 0, bottom: 0, backgroundColor: fn(5115).CHECKPOINT_BUTTON_SHADOW }, pressed: null };
let obj3 = { transform: null };
let items = [{ translateX: 4 }, { translateY: 4 }];
obj3.transform = items;
obj2.pressed = obj3;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointPressable.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(21);
  if (cResult[0] !== style) {
    style = style.style;
    closure_0 = style;
    ({ containerStyle, children } = style);
    const tmp8 = _objectWithoutProperties(style, closure_2);
    cResult[0] = style;
    cResult[1] = children;
    cResult[2] = containerStyle;
    cResult[3] = tmp8;
    cResult[4] = style;
    let tmp4 = tmp8;
    let tmp3 = containerStyle;
    let tmp2 = children;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
    closure_0 = cResult[4];
  }
  const tmp9 = closure_8();
  let pressed = tmp9;
  if (cResult[5] === tmp3) {
    if (cResult[6] === tmp9.container) {
      let tmp10 = cResult[7];
    }
    if (cResult[8] !== tmp9.shadow) {
      const obj2 = { style: tmp9.shadow };
      const tmp14 = timestampProducer(hasOwnProperty, obj2);
      cResult[8] = tmp9.shadow;
      cResult[9] = tmp14;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[9];
    }
    if (cResult[10] === tmp5) {
      if (cResult[11] === tmp9.pressed) {
        let tmp15 = cResult[12];
      }
      if (cResult[13] === tmp2) {
        if (cResult[14] === tmp4) {
          if (cResult[15] === tmp15) {
            let tmp16 = cResult[16];
          }
          if (cResult[17] === tmp10) {
            if (cResult[18] === tmp11) {
              if (cResult[19] === tmp16) {
                let tmp23 = cResult[20];
              }
              return tmp23;
            }
          }
          const obj3 = { style: tmp10, children: null };
          let items = [tmp11, tmp16];
          obj3.children = items;
          const tmp26 = React5(hasOwnProperty, obj3);
          cResult[17] = tmp10;
          cResult[18] = tmp11;
          cResult[19] = tmp16;
          cResult[20] = tmp26;
          tmp23 = tmp26;
        }
      }
      const obj4 = {};
      const merged = Object.assign(tmp4);
      obj4.style = tmp15;
      obj4.children = tmp2;
      const tmp22 = timestampProducer(React4, obj4);
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
  style = style.style;
  ({ containerStyle, children } = style);
  const merged = Object.assign(style, Object.assign({ style: 0, containerStyle: 0, children: 0 }));
  const tmp2 = closure_8();
  let pressed = tmp2;
  const obj = { style: null, children: null };
  let items = [tmp2.container, containerStyle];
  obj.style = items;
  const items1 = [timestampProducer(hasOwnProperty, { style: tmp2.shadow }), ];
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.style = function style(pressed) {
    pressed = pressed.pressed;
    const items = [style, ];
    if (pressed) {
      pressed = pressed.pressed;
    }
    items[1] = pressed;
    return items;
  };
  obj3.children = children;
  items1[1] = timestampProducer(React4, obj3);
  obj.children = items1;
  return React5(hasOwnProperty, obj);
});
export const SHADOW_OFFSET = 4;