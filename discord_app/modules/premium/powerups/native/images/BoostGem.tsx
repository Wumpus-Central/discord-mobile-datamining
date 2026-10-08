// discord_app/modules/premium/powerups/native/images/BoostGem.tsx
import c from "../../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../../_runtime/07550_inlineStyles.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/images/BoostGem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BoostGem(arg0) {
      const cResult = c.c(10);
      ({ width, height, style } = arg0);
      let num = 39;
      if (undefined !== width) {
        num = width;
      }
      let num2 = 66;
      if (undefined !== height) {
        num2 = height;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = React3(inlineStyles.Path, {
          d: "M19.3146 0L0 19.4029V46.6865L19.3146 65.9999L38.6293 46.5969V19.388L19.3146 0ZM28.972 42.6566L19.3146 52.3432L9.65732 42.6566V23.388L19.3146 13.6865L28.972 23.388V42.6566Z",
          fill: "#FA6EF6",
        });
        const tmp12 = React3(inlineStyles.Path, {
          d: "M19.3145 0V13.6316L28.9718 23.2941L38.6291 19.3102L19.3145 0Z",
          fill: "#FFADFB",
        });
        const tmp13 = React3(inlineStyles.Path, {
          d: "M9.65732 42.7056L0 46.7269L19.3146 65.9996V52.3419L9.65732 42.7056Z",
          fill: "#E655D4",
        });
        const tmp14 = React3(inlineStyles.Path, {
          d: "M9.65723 23.3317V42.6835L19.3145 52.4118L28.9719 42.6835V23.3317L19.3145 13.5884L9.65723 23.3317Z",
          fill: "#FFCFF9",
        });
        const tmp15 = React3(inlineStyles.Path, {
          d: "M28.9719 23.1273L9.74637 42.7058H9.65723V37.3827L26.3273 20.3823L28.9719 23.1273Z",
          fill: "white",
        });
        const tmp16 = React3(inlineStyles.Path, {
          d: "M28.9717 31.0586V36.3917L16.1689 49.4997L13.52 46.6984L28.9717 31.0586Z",
          fill: "white",
        });
        cResult[0] = tmp11;
        cResult[1] = tmp12;
        cResult[2] = tmp13;
        cResult[3] = tmp14;
        cResult[4] = tmp15;
        cResult[5] = tmp16;
        tmp4 = tmp11;
        tmp5 = tmp12;
        tmp6 = tmp13;
        tmp7 = tmp14;
        tmp8 = tmp15;
        tmp9 = tmp16;
      } else {
        [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = cResult;
      }
      if (cResult[6] === num2) {
        if (cResult[7] === style) {
          if (cResult[8] === num) {
            let tmp17 = cResult[9];
          }
          return tmp17;
        }
      }
      const size = { width: num, height: num2, viewBox: "0 0 39 66", fill: "none", style, children: null };
      const items = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
      size.children = items;
      const tmp18 = React4(inlineStylesDefault, size);
      cResult[6] = num2;
      cResult[7] = style;
      cResult[8] = num;
      cResult[9] = tmp18;
      tmp17 = tmp18;
    }
  : function BoostGem(style) {
      let num = style.width;
      if (num === undefined) {
        num = 39;
      }
      let num2 = style.height;
      if (num2 === undefined) {
        num2 = 66;
      }
      const size = { width: num, height: num2, viewBox: "0 0 39 66", fill: "none", style: style.style, children: null };
      const items = [
        React3(inlineStyles.Path, {
          d: "M19.3146 0L0 19.4029V46.6865L19.3146 65.9999L38.6293 46.5969V19.388L19.3146 0ZM28.972 42.6566L19.3146 52.3432L9.65732 42.6566V23.388L19.3146 13.6865L28.972 23.388V42.6566Z",
          fill: "#FA6EF6",
        }),
        React3(inlineStyles.Path, {
          d: "M19.3145 0V13.6316L28.9718 23.2941L38.6291 19.3102L19.3145 0Z",
          fill: "#FFADFB",
        }),
        React3(inlineStyles.Path, {
          d: "M9.65732 42.7056L0 46.7269L19.3146 65.9996V52.3419L9.65732 42.7056Z",
          fill: "#E655D4",
        }),
        React3(inlineStyles.Path, {
          d: "M9.65723 23.3317V42.6835L19.3145 52.4118L28.9719 42.6835V23.3317L19.3145 13.5884L9.65723 23.3317Z",
          fill: "#FFCFF9",
        }),
        React3(inlineStyles.Path, {
          d: "M28.9719 23.1273L9.74637 42.7058H9.65723V37.3827L26.3273 20.3823L28.9719 23.1273Z",
          fill: "white",
        }),
        React3(inlineStyles.Path, {
          d: "M28.9717 31.0586V36.3917L16.1689 49.4997L13.52 46.6984L28.9717 31.0586Z",
          fill: "white",
        }),
      ];
      size.children = items;
      return React4(inlineStylesDefault, size);
    };
