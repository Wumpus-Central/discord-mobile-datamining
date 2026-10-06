// === Module 15557: CheckpointScreen ===

// Module 15557 (CheckpointScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointConstants from "CheckpointConstants" /* 5121 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

let closure_4;
let hasOwnProperty;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const CHECKPOINT_NAV_HEIGHT = CheckpointConstants.CHECKPOINT_NAV_HEIGHT;
const jsx = Fragment.jsx;
const PX_24 = nativeDefault.space.PX_24;
let closure_9 = createStyles.createStyles({ container: { height: "100%", width: "100%" }, scroll: { width: "100%" }, scrollContent: { flexGrow: 1 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(15);
  children = children.children;
  const tmp2 = closure_9();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const sum = insets.left + PX_24;
  const sum1 = insets.right + PX_24;
  const sum2 = insets.bottom + nativeDefault.space.PX_24;
  const sum3 = insets.top + CHECKPOINT_NAV_HEIGHT;
  if (cResult[0] === sum) {
    if (cResult[1] === sum1) {
      if (cResult[2] === sum2) {
        let tmp7;
        if (cResult[3] === sum3) {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp7) {
          let tmp8;
          if (cResult[6] === tmp2.scrollContent) {
            tmp8 = cResult[7];
          }
          if (cResult[8] === children) {
            if (cResult[9] === tmp2.scroll) {
              let tmp9;
              if (cResult[10] === tmp8) {
                tmp9 = cResult[11];
              }
              if (cResult[12] === tmp2.container) {
                let tmp13;
                if (cResult[13] === tmp9) {
                  tmp13 = cResult[14];
                }
                return tmp13;
              }
              const tmp16 = <hasOwnProperty style={tmp2.container}>{tmp9}</hasOwnProperty>;
              cResult[12] = tmp2.container;
              cResult[13] = tmp9;
              cResult[14] = tmp16;
              tmp13 = tmp16;
            }
          }
          const tmp12 = <React3 style={tmp2.scroll} contentContainerStyle={tmp8} showsVerticalScrollIndicator={false}>{children}</React3>;
          cResult[8] = children;
          cResult[9] = tmp2.scroll;
          cResult[10] = tmp8;
          cResult[11] = tmp12;
          tmp9 = tmp12;
        }
        const items = [tmp2.scrollContent, tmp7];
        cResult[5] = tmp7;
        cResult[6] = tmp2.scrollContent;
        cResult[7] = items;
        tmp8 = items;
      }
    }
  }
  const obj4 = { paddingLeft: sum, paddingRight: sum1, paddingBottom: sum2, paddingTop: sum3 };
  cResult[0] = sum;
  cResult[1] = sum1;
  cResult[2] = sum2;
  cResult[3] = sum3;
  cResult[4] = obj4;
  tmp7 = obj4;
}) : ((children) => {
  children = children.children;
  const tmp = closure_9();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const items = [, , , ];
  ({ bottom: arr[0], left: arr[1], right: arr[2], top: arr[3] } = insets);
  const items1 = [
    tmp.scrollContent,
    react.useMemo(() => {
      const obj = { paddingLeft: insets.left + PX_24, paddingRight: insets.right + PX_24, paddingBottom: insets.bottom + nativeDefault.space.PX_24, paddingTop: insets.top + CHECKPOINT_NAV_HEIGHT };
      return obj;
    }, items)
  ];
  return <closure_5 style={tmp.container}>{null}</closure_5>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default tmp3;