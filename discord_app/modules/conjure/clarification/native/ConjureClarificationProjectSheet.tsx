// === Module 12971: ConjureClarificationProjectSheet ===

// Module 12971 (ConjureClarificationProjectSheet)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import BottomSheetModal from "BottomSheetModal" /* 5394 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7385 */;
import ActionSheet from "ActionSheet" /* 7429 */;
import ActionSheetRow from "ActionSheetRow" /* 7431 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationProjectSheet.tsx");

export default function ConjureClarificationProjectSheet(title) {
  ({ sheetKey: require, projects, onPick: importDefault } = title);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = { scrollable: true, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: title.title }), children: null };
  const obj2 = { contentContainerStyle: closure_4(bottom).scrollContent, scrollIndicatorInsets: { bottom }, children: null };
  const tmp = closure_4(bottom);
  obj2.children = jsx(ActionSheetRow.ActionSheetRow.Group, {
    hasIcons: false,
    children: projects.map((label) => {
      closure_0 = label;
      const obj = {
        label: label.name,
        subLabel: null,
        onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet(require);
          closure_2_1(closure_0);
        }
      };
      const serverName = label.serverName;
      obj.subLabel = serverName;
      return jsx(ActionSheetRow.ActionSheetRow, {
        label: label.name,
        subLabel: null,
        onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet(require);
          closure_2_1(closure_0);
        }
      }, label.projectId);
    })
  });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { contentContainerStyle: closure_4(bottom).scrollContent, scrollIndicatorInsets: { bottom }, children: null });
  return jsx(ActionSheet.ActionSheet, { scrollable: true, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: title.title }), children: null });
};