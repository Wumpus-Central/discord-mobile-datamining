// discord_app/design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod15523 from "../../../../../../../_runtime/metro/15523__.js";
import _mod15524 from "../../../../../../../_runtime/metro/15524__.js";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["style", "secondaryColor", "color"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx");

export const CircleMinusIcon = ReactCompilerGating.isReactCompilerEnabled()
  ? function CircleMinusIcon(arg0) {
      const cResult = c.c(21);
      if (cResult[0] !== arg0) {
        ({ style, secondaryColor, color } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        cResult[2] = style;
        cResult[3] = secondaryColor;
        cResult[4] = color;
        let INTERACTIVE_ICON_DEFAULT = color;
        let tmp6 = secondaryColor;
        let tmp5 = style;
        let tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        INTERACTIVE_ICON_DEFAULT = cResult[4];
      }
      let str = "transparent";
      if (undefined !== tmp6) {
        str = tmp6;
      }
      if (undefined === INTERACTIVE_ICON_DEFAULT) {
        INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = _mod15523;
        cResult[5] = tmpResult;
        let tmp11 = tmpResult;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === str) {
          if (cResult[8] === tmp5) {
            let tmp13 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const tmpResult2 = _mod15524;
            cResult[10] = tmpResult2;
            let tmp16 = tmpResult2;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] !== tmp5) {
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { position: "absolute", top: 0 };
              cResult[13] = obj2;
              let tmp19 = obj2;
            } else {
              tmp19 = cResult[13];
            }
            const items = [tmp5];
            const items1 = [];
            items1[HermesBuiltin.arraySpread(items.flat(), 0)] = tmp19;
            cResult[11] = tmp5;
            cResult[12] = items1;
          } else {
            if (cResult[14] === INTERACTIVE_ICON_DEFAULT) {
              if (cResult[15] === tmp4) {
                if (cResult[16] === tmp18) {
                  let tmp22 = cResult[17];
                }
                if (cResult[18] === tmp13) {
                  if (cResult[19] === tmp22) {
                    let tmp28 = cResult[20];
                  }
                  return tmp28;
                }
                const obj3 = { children: null };
                const items2 = [tmp13, tmp22];
                obj3.children = items2;
                const tmp31 = React5(View, obj3);
                cResult[18] = tmp13;
                cResult[19] = tmp22;
                cResult[20] = tmp31;
                tmp28 = tmp31;
              }
            }
            const obj4 = { source: tmp16, color: INTERACTIVE_ICON_DEFAULT, style: cResult[12] };
            const merged = Object.assign(tmp4);
            const tmp27 = timestampProducer(BaseIconImage.BaseIconImage, obj4);
            cResult[14] = INTERACTIVE_ICON_DEFAULT;
            cResult[15] = tmp4;
            cResult[16] = cResult[12];
            cResult[17] = tmp27;
            tmp22 = tmp27;
          }
        }
      }
      const merged1 = Object.assign(tmp4);
      const tmp15 = timestampProducer(BaseIconImage.BaseIconImage, { source: tmp11, color: str, style: tmp5 });
      cResult[6] = tmp4;
      cResult[7] = str;
      cResult[8] = tmp5;
      cResult[9] = tmp15;
      tmp13 = tmp15;
      const obj5 = { source: tmp11, color: str, style: tmp5 };
    }
  : function CircleMinusIcon(color) {
      ({ style, secondaryColor } = color);
      if (secondaryColor === undefined) {
        secondaryColor = "transparent";
      }
      let INTERACTIVE_ICON_DEFAULT = color.color;
      if (INTERACTIVE_ICON_DEFAULT === undefined) {
        INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
      }
      const merged = Object.assign(color, Object.assign({ style: 0, secondaryColor: 0, color: 0 }));
      const obj = { children: null };
      const merged1 = Object.assign(merged);
      const items = [
        timestampProducer(BaseIconImage.BaseIconImage, { source: _mod15523, color: secondaryColor, style }),
      ];
      const obj3 = { source: _mod15524, color: INTERACTIVE_ICON_DEFAULT, style: null };
      const items1 = [style];
      const items2 = [];
      items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
      obj3.style = items2;
      const merged2 = Object.assign(merged);
      items[1] = timestampProducer(BaseIconImage.BaseIconImage, obj3);
      obj.children = items;
      return React5(View, obj);
    };
