// discord_app/modules/checkpoint/native/components/CheckpointBackground.tsx
import c from "../../../../../_runtime/00576_c.js";
import LinearGradientDefault from "../../../../../_runtime/05219_LinearGradient.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef12776 from "../../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const dependencyMap = fn(5970).CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = fn(1087).VerticalGradient;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4945);
let closure_9 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointBackground(gradientStartColor) {
      const cResult = c.c(11);
      gradientStartColor = gradientStartColor.gradientStartColor;
      if (undefined === gradientStartColor) {
        gradientStartColor = 19;
      }
      const tmp4 = closure_9();
      if (cResult[0] !== gradientStartColor) {
        const items = [gradientStartColor, 5970];
        cResult[0] = gradientStartColor;
        cResult[1] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp4.background) {
          let tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { uri: _modDef12776 };
          cResult[5] = obj2;
          let tmp10 = obj2;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] !== tmp4.background) {
          const obj3 = { source: tmp10, style: tmp4.background, resizeMode: "cover" };
          const tmp15 = timestampProducer(FastImageDefault, obj3);
          cResult[6] = tmp4.background;
          cResult[7] = tmp15;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] === tmp7) {
          if (cResult[9] === tmp12) {
            let tmp16 = cResult[10];
          }
          return tmp16;
        }
        const obj4 = { children: null };
        const items1 = [tmp7, tmp12];
        obj4.children = items1;
        const tmp19 = closure_1_8(React5, obj4);
        cResult[8] = tmp7;
        cResult[9] = tmp12;
        cResult[10] = tmp19;
        tmp16 = tmp19;
      }
      const tmp8 = timestampProducer(LinearGradientDefault, {
        colors: tmp5,
        start: VerticalGradient.START,
        end: VerticalGradient.END,
        style: tmp4.background,
      });
      cResult[2] = tmp5;
      cResult[3] = tmp4.background;
      cResult[4] = tmp8;
      tmp7 = tmp8;
      const obj5 = { colors: tmp5, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp4.background };
    }
  : function CheckpointBackground(gradientStartColor) {
      gradientStartColor = gradientStartColor.gradientStartColor;
      if (gradientStartColor === undefined) {
        gradientStartColor = 19;
      }
      const tmp2 = closure_9();
      let items = [gradientStartColor];
      const obj = { children: null };
      const memo = noop.useMemo(() => {
        const items = [gradientStartColor, closure_4[1]];
        return items;
      }, items);
      const items1 = [
        closure_6(LinearGradientDefault, {
          colors: memo,
          start: VerticalGradient.START,
          end: VerticalGradient.END,
          style: tmp2.background,
        }),
      ];
      const obj3 = { source: null, style: null, resizeMode: "cover" };
      const obj4 = { uri: _modDef12776 };
      obj3.source = obj4;
      obj3.style = tmp2.background;
      items1[1] = closure_6(FastImageDefault, obj3);
      obj.children = items1;
      return closure_8(closure_7, obj);
    };
