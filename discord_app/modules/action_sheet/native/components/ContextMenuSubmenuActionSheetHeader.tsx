// === Module 11358: ContextMenuSubmenuActionSheetHeader ===

// Module 11358 (ContextMenuSubmenuActionSheetHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import ActionSheetHeaderPressableText2 from "ActionSheetHeaderPressableText" /* 9195 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onBack;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ headerContainer: { paddingVertical: 12, paddingHorizontal: 16, alignItems: "flex-start" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onBack) => {
  let first;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  onBack = onBack.onBack;
  const tmp4 = closure_4();
  const headerContainer = tmp4.headerContainer;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t["13/7kX"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onBack) {
    let fn = onBack;
    if (onBack == null) {
      fn = () => {

      };
    }
    cResult[1] = onBack;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp7) {
    const tmp11 = jsx(ActionSheetHeaderPressableText2.ActionSheetHeaderPressableText, { label: first, onPress: tmp7 });
    cResult[3] = tmp7;
    cResult[4] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp4.headerContainer) {
    let tmp12;
    if (cResult[6] === tmp9) {
      tmp12 = cResult[7];
    }
    return tmp12;
  }
  const tmp13 = <View style={headerContainer}>{tmp9}</View>;
  cResult[5] = tmp4.headerContainer;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((onBack) => {
  let intl;
  let fn = onBack.onBack;
  ({ label: intl.string(intl2.t["13/7kX"]), onPress: fn });
  const ActionSheetHeaderPressableText = ActionSheetHeaderPressableText2.ActionSheetHeaderPressableText;
  intl = intl2.intl;
  if (fn == null) {
    fn = () => {

    };
  }
  return <View style={closure_4().headerContainer}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx");

export default tmp3;