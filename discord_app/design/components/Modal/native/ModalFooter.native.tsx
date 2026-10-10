// discord_app/design/components/Modal/native/ModalFooter.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({
  footer: { flexDirection: "column", paddingVertical: 16, paddingHorizontal: 24 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export const ModalFooter = ReactCompilerGating.isReactCompilerEnabled()
  ? function ModalFooter(children) {
      const cResult = c.c(3);
      children = children.children;
      const tmp2 = closure_4();
      if (cResult[0] === children) {
        if (cResult[1] === tmp2.footer) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = <View style={tmp2.footer}>{children}</View>;
      cResult[0] = children;
      cResult[1] = tmp2.footer;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : function ModalFooter(children) {
      return <View style={closure_4().footer}>{children.children}</View>;
    };
