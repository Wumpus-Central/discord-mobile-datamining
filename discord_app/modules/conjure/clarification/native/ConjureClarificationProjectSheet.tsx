// discord_app/modules/conjure/clarification/native/ConjureClarificationProjectSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import BottomSheetModal from "../../../../../_runtime/05275_BottomSheetModal.js";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationProjectSheet.tsx");

export default function ConjureClarificationProjectSheet(title) {
  ({ sheetKey: require, projects, onPick: importDefault } = title);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = {
    scrollable: true,
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: title.title }),
    children: null,
  };
  const obj2 = {
    contentContainerStyle: closure_4(bottom).scrollContent,
    scrollIndicatorInsets: { bottom },
    children: null,
  };
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
        },
      };
      const serverName = label.serverName;
      obj.subLabel = serverName;
      return jsx(
        ActionSheetRow.ActionSheetRow,
        {
          label: label.name,
          subLabel: null,
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet(require);
            closure_2_1(closure_0);
          },
        },
        label.projectId,
      );
    }),
  });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, {
    contentContainerStyle: closure_4(bottom).scrollContent,
    scrollIndicatorInsets: { bottom },
    children: null,
  });
  return jsx(ActionSheet.ActionSheet, {
    scrollable: true,
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: title.title }),
    children: null,
  });
}
