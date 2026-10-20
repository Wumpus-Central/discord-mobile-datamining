// discord_app/modules/checkpoint/native/components/CheckpointRankTag.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CheckpointCustomizationUtils from "../../CheckpointCustomizationUtils.tsx";
import inlineStyles from "../../../../../_runtime/07910_inlineStyles.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(5973).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4945);
const obj2 = {
  hidden: { opacity: 0 },
  text: {
    color: nativeDefault.colors.BLACK,
    paddingVertical: 2,
    paddingHorizontal: nativeDefault.space.PX_8,
    fontSize: 14,
    lineHeight: 18,
  },
  shape: { position: "absolute", top: 0, left: 0 },
  shapeChamferBottomRight: null,
};
let obj4 = { transform: null };
let items = [{ scaleY: -1 }];
obj4.transform = items;
obj2.shapeChamferBottomRight = obj4;
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  color: nativeDefault.colors.BLACK,
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_8,
  fontSize: 14,
  lineHeight: 18,
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRankTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointRankTag(arg0) {
      const cResult = c.c(16);
      ({ rank, chamferCorner, style } = arg0);
      let str = "top-right";
      if (undefined !== chamferCorner) {
        str = chamferCorner;
      }
      const tmp4 = closure_9();
      [size, require] = noop.useState(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(nativeEvent) {
          ({ width: closure_0, height: closure_1 } = nativeEvent.nativeEvent.layout);
          require((arg0) => {
            let size = arg0;
            let width;
            if (arg0 != null) {
              width = size.width;
            }
            if (width !== closure_1_0) {
              const size1 = { width: tmp2, height };
              size = size1;
            } else {
              height = undefined;
              if (size != null) {
                height = size.height;
              }
            }
            return size;
          });
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === style) {
        if (cResult[2] === tmp7) {
          let tmp8 = cResult[3];
        }
        if (cResult[4] === str) {
          if (cResult[5] === size) {
            if (cResult[6] === tmp4.shape) {
              if (cResult[7] === tmp4.shapeChamferBottomRight) {
                let tmp9 = cResult[8];
              }
              if (cResult[9] === rank) {
                if (cResult[10] === tmp4.text) {
                  let tmp15 = cResult[11];
                }
                if (cResult[12] === tmp8) {
                  if (cResult[13] === tmp9) {
                    if (cResult[14] === tmp15) {
                      let tmp18 = cResult[15];
                    }
                    return tmp18;
                  }
                }
                const obj3 = { style: tmp8, onLayout: first, children: null };
                const items = [tmp9, tmp15];
                obj3.children = items;
                const tmp21 = closure_1_8(View, obj3);
                cResult[12] = tmp8;
                cResult[13] = tmp9;
                cResult[14] = tmp15;
                cResult[15] = tmp21;
                tmp18 = tmp21;
              }
              const obj4 = { variant: "experimental/mono-md/bold", style: tmp4.text, children: null };
              const items1 = ["#", rank];
              obj4.children = items1;
              const tmp17 = closure_1_8(Text_Text.Text, obj4);
              cResult[9] = rank;
              cResult[10] = tmp4.text;
              cResult[11] = tmp17;
              tmp15 = tmp17;
            }
          }
        }
        let tmp11Result = null != size;
        if (tmp11Result) {
          let size1 = { width: null, height: null, style: null, pointerEvents: "none", children: null };
          ({ width: obj2.width, height: obj2.height } = size);
          const items2 = [tmp4.shape];
          let shapeChamferBottomRight = "bottom-right" === str;
          if (shapeChamferBottomRight) {
            shapeChamferBottomRight = tmp4.shapeChamferBottomRight;
          }
          items2[1] = shapeChamferBottomRight;
          size1.style = items2;
          const obj5 = { points: null, fill: null };
          const tmp13 = inlineStylesDefault;
          obj5.points = CheckpointCustomizationUtils.getChamferedRectPoints(size.width, size.height, 5.5);
          obj5.fill = CHECKPOINT_PRIMARY;
          size1.children = React5(inlineStyles.Polygon, obj5);
          tmp11Result = React5(tmp13, size1);
          const tmpResult = CheckpointCustomizationUtils;
        }
        cResult[4] = str;
        cResult[5] = size;
        cResult[6] = tmp4.shape;
        cResult[7] = tmp4.shapeChamferBottomRight;
        cResult[8] = tmp11Result;
        tmp9 = tmp11Result;
      }
      const items3 = [style, null == size && tmp4.hidden];
      cResult[1] = style;
      cResult[2] = null == size && tmp4.hidden;
      cResult[3] = items3;
      tmp8 = items3;
      const tmp5 = _slicedToArray(noop.useState(null), 2);
    }
  : function CheckpointRankTag(chamferCorner) {
      let str = chamferCorner.chamferCorner;
      if (str === undefined) {
        str = "top-right";
      }
      c0 = undefined;
      const tmp = closure_9();
      [size, c0] = noop.useState(null);
      const items = [chamferCorner.style];
      let hidden = null == size;
      const callback = noop.useCallback((nativeEvent) => {
        ({ width: c0, height: closure_1 } = nativeEvent.nativeEvent.layout);
        _undefined((arg0) => {
          let size = arg0;
          let width;
          if (arg0 != null) {
            width = size.width;
          }
          if (width !== _undefined) {
            const size1 = { width: tmp2, height };
            size = size1;
          } else {
            height = undefined;
            if (size != null) {
              height = size.height;
            }
          }
          return size;
        });
      }, []);
      if (hidden) {
        hidden = tmp.hidden;
      }
      const obj = { style: items, onLayout: callback, children: null };
      items[1] = hidden;
      let tmp7Result = null != size;
      if (tmp7Result) {
        let size1 = { width: null, height: null, style: null, pointerEvents: "none", children: null };
        ({ width: obj2.width, height: obj2.height } = size);
        const items1 = [tmp.shape];
        let shapeChamferBottomRight = "bottom-right" === str;
        if (shapeChamferBottomRight) {
          shapeChamferBottomRight = tmp.shapeChamferBottomRight;
        }
        items1[1] = shapeChamferBottomRight;
        size1.style = items1;
        const obj3 = { points: null, fill: null };
        const tmp10 = inlineStylesDefault;
        obj3.points = CheckpointCustomizationUtils.getChamferedRectPoints(size.width, size.height, 5.5);
        obj3.fill = CHECKPOINT_PRIMARY;
        size1.children = React5(inlineStyles.Polygon, obj3);
        tmp7Result = React5(tmp10, size1);
      }
      const items2 = [tmp7Result];
      const obj5 = { variant: "experimental/mono-md/bold", style: tmp.text, children: null };
      const items3 = ["#", chamferCorner.rank];
      obj5.children = items3;
      items2[1] = closure_1_8(Text_Text.Text, obj5);
      obj.children = items2;
      return closure_1_8(View, obj);
    };
