// discord_app/modules/conjure/app_build_request/native/ConjureAppBuildRequestProjectsSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import BottomSheetModal from "../../../../../_runtime/05275_BottomSheetModal.js";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_6 = createStyles.createStyles((arg0) => {
  const obj = {
    scrollContent: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 },
  };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/conjure/app_build_request/native/ConjureAppBuildRequestProjectsSheet.tsx",
);

export default function ConjureAppBuildRequestProjectsSheet(arg0) {
  ({ projects, maxSelected: require, onChange: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  ({ title, initialIds } = arg0);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp = closure_6(bottom);
  [c2, c3] = noop.useState(initialIds);
  let obj = { scrollable: true, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null };
  const obj2 = { contentContainerStyle: tmp.scrollContent, scrollIndicatorInsets: { bottom }, children: null };
  const tmp2 = _slicedToArray(noop.useState(initialIds), 2);
  obj2.children = jsx(TableRowGroup.TableRowGroup, {
    hasIcons: false,
    children: projects.map((label) => {
      const obj = {
        label: label.name,
        subLabel: null,
        checked: _undefined.includes(label.projectId),
        disabled: null,
        onPress: null,
      };
      const serverName = label.serverName;
      obj.subLabel = serverName;
      const hasItem = _undefined.includes(label.projectId);
      let tmp3 = !hasItem;
      if (!hasItem) {
        tmp3 = _undefined.length >= label;
      }
      obj.disabled = tmp3;
      obj.onPress = function onPress() {
        const projectId = label.projectId;
        if (c2.includes(projectId)) {
          let found = c2.filter((item) => item !== projectId);
        } else {
          const items = [];
          items[HermesBuiltin.arraySpread(c2, 0)] = projectId;
          found = items.slice(0, require);
        }
        c3(found);
        importDefault(found);
      };
      return jsx(
        require("TableCheckboxRow").TableCheckboxRow,
        {
          label: label.name,
          subLabel: null,
          checked: _undefined.includes(label.projectId),
          disabled: null,
          onPress: null,
        },
        label.projectId,
      );
    }),
  });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, {
    contentContainerStyle: tmp.scrollContent,
    scrollIndicatorInsets: { bottom },
    children: null,
  });
  return jsx(ActionSheet.ActionSheet, {
    scrollable: true,
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }),
    children: null,
  });
}
