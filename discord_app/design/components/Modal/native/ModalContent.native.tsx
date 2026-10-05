// discord_app/design/components/Modal/native/ModalContent.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let children;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
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
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (children, ref) => {
        const obj = react2;
        const cResult = obj.c(5);
        children = children.children;
        const tmp2 = closure_4();
        if (cResult[0] === children) {
          if (cResult[1] === ref) {
            if (cResult[2] === tmp2.contentContainer) {
              let tmp3;
              if (cResult[3] === tmp2.scrollContainer) {
                tmp3 = cResult[4];
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
    : (children, ref) => {
        children = children.children;
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
      },
);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = forwardRefResult;
