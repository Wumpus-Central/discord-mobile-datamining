// discord_app/design/components/Modal/native/ModalContent.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({
  scrollContainer: { flex: 1 },
  contentContainer: {
    flexDirection: "column",
    paddingTop: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    flexGrow: 1,
  },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = ReactCompilerGating.isReactCompilerEnabled()
  ? function ModalContent(arg0) {
      const cResult = c.c(5);
      ({ children, ref } = arg0);
      const tmp2 = closure_4();
      if (cResult[0] === children) {
        if (cResult[1] === ref) {
          if (cResult[2] === tmp2.contentContainer) {
            if (cResult[3] === tmp2.scrollContainer) {
              let tmp3 = cResult[4];
            }
            return tmp3;
          }
        }
      }
      const tmp4 = (
        <ScrollView
          style={tmp2.scrollContainer}
          contentContainerStyle={tmp2.contentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ref={ref}
        >
          {children}
        </ScrollView>
      );
      cResult[0] = children;
      cResult[1] = ref;
      cResult[2] = tmp2.contentContainer;
      cResult[3] = tmp2.scrollContainer;
      cResult[4] = tmp4;
      tmp3 = tmp4;
    }
  : function ModalContent(arg0) {
      ({ children, ref } = arg0);
      const tmp = closure_4();
      return (
        <ScrollView
          style={tmp.scrollContainer}
          contentContainerStyle={tmp.contentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ref={ref}
        >
          {children}
        </ScrollView>
      );
    };
