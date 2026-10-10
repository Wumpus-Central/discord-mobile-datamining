// discord_app/design/components/Sheet/native/ActionSheet.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Sheet_BottomSheet from "BottomSheet.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const createStyles = fn(5092);
const obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: { gap: 24 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActionSheet(ref) {
      const cResult = c.c(8);
      if (cResult[0] !== ref) {
        const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
        cResult[0] = ref.ref;
        cResult[1] = tmp8;
        cResult[2] = ref.ref;
        let tmp5 = ref;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_5();
      if (cResult[3] === tmp4) {
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp9.body) {
            if (cResult[6] === tmp9.content) {
              let tmp10 = cResult[7];
            }
            return tmp10;
          }
        }
      }
      const merged = Object.assign(tmp4);
      ({ content: obj2.contentStyles, body: obj2.bodyStyles } = tmp9);
      const tmp12 = jsx(Sheet_BottomSheet.BottomSheet, { ref: tmp5 });
      cResult[3] = tmp4;
      cResult[4] = tmp5;
      cResult[5] = tmp9.body;
      cResult[6] = tmp9.content;
      cResult[7] = tmp12;
      tmp10 = tmp12;
      const obj3 = { ref: tmp5 };
    }
  : function ActionSheet(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      ({ content: obj.contentStyles, body: obj.bodyStyles } = closure_5());
      return jsx(Sheet_BottomSheet.BottomSheet, { ref: ref.ref });
    };
