// discord_app/modules/conjure/shared/native/ConjureNativeCardSurface.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { surface: { padding: nativeDefault.space.PX_12 } };
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { padding: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCardSurface.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeCardSurface(arg0) {
      const cResult = c.c(6);
      ({ children, style } = arg0);
      const tmp4 = closure_3();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.surface) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp5) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
        const obj2 = { variant: "secondary", border: "subtle", radius: 12, style: tmp5, children };
        const tmp8 = jsx(Card.Card, { variant: "secondary", border: "subtle", radius: 12, style: tmp5, children });
        cResult[3] = children;
        cResult[4] = tmp5;
        cResult[5] = tmp8;
        tmp6 = tmp8;
      }
      const items = [tmp4.surface, style];
      cResult[0] = style;
      cResult[1] = tmp4.surface;
      cResult[2] = items;
      tmp5 = items;
    }
  : function ConjureNativeCardSurface(arg0) {
      ({ children, style } = arg0);
      const obj = { variant: "secondary", border: "subtle", radius: 12, style: null, children };
      const items = [closure_3().surface, style];
      obj.style = items;
      return jsx(Card.Card, { variant: "secondary", border: "subtle", radius: 12, style: null, children });
    };
export const CONJURE_NATIVE_CARD_RADIUS = 12;
