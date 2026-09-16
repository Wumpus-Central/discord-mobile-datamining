// discord_app/modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01897_asyncRequireImpl.js";
import CheckmarkLargeIcon from "../../../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import WarningIcon from "../../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import SuspiciousDownloadModalActionCreatorsDefault from "../../../../suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx";
import BlockedDomainModalActionCreatorsDefault from "../../../../blocked_domains/BlockedDomainModalActionCreators.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function ActionSheetSelector(arg0) {
  ({ selectedType: require, onSelect } = arg0);
  items = [onSelect];
  dependencyMap = noop.useCallback((type) => {
    ActionSheetActionCreatorsDefault.hideActionSheet("action-sheet-selector");
    onSelect(type.type);
    type.show();
  }, items);
  let obj = {
    header: closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, {
      title: "Select Action Sheet",
      subtitle: "" + items.length + " options",
    }),
    children: null,
  };
  const obj3 = { style: null, children: null };
  const obj2 = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
  obj3.style = { paddingHorizontal: onSelect(576).space.PX_12 };
  const obj4 = { paddingHorizontal: onSelect(576).space.PX_12 };
  obj3.children = closure_7(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: items.map((type, index) => {
      closure_0 = type;
      const obj = {
        icon: closure_1_7(WarningIcon.WarningIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_2(closure_0);
        },
        trailing: null,
        start: null,
        end: null,
      };
      ({ label: obj.label, description: obj.subLabel } = type);
      let tmpResult;
      if (closure_0 === type.type) {
        tmpResult = closure_1_7(CheckmarkLargeIcon.CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj.trailing = tmpResult;
      obj.start = 0 === index;
      obj.end = index === length.length - 1;
      return closure_1_7(TableRow.TableRow, obj, type.type);
    }),
  });
  obj.children = closure_7(closure_5, obj3);
  return closure_7(Sheet_BottomSheet.BottomSheet, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  wrap: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    flex: 1,
    paddingHorizontal: nativeDefault.space.PX_12,
  },
  contentContainer: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2.contentContainer = { paddingVertical: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
let items = [
  {
    type: "blocked-domain",
    label: "Blocked Domain",
    description: "Shows a warning for potentially malicious domains",
    show() {
      return BlockedDomainModalActionCreatorsDefault.show("https://example-phishing-site.com/malicious-page");
    },
  },
  {
    type: "suspicious-download",
    label: "Suspicious Download",
    description: "Warns users about potentially dangerous file downloads",
    show() {
      return SuspiciousDownloadModalActionCreatorsDefault.show("https://suspicious-file.com/dangerous-file.exe");
    },
  },
  {
    type: "inappropriate-conversation",
    label: "Inappropriate Conversation",
    description: "Shows safety warning for inappropriate conversations",
    show() {
      return ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(15842, dependencyMap.paths),
        {
          warningId: "test-warning-123",
          warningType: "inappropriate_conversation",
          senderId: "123456789",
          channelId: "987654321",
        },
        "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL",
      );
    },
  },
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default function DevToolsActionSheetsScreen() {
  const tmp = closure_9();
  [selectedType, onSelect] = noop.useState("blocked-domain");
  const found = items.find((type) => type.type === first);
  items = [selectedType];
  const obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(
      Promise.resolve({ default: ActionSheetSelector }),
      "action-sheet-selector",
      { selectedType, onSelect },
    );
  }, items);
  const obj2 = { spacing: 16, children: null };
  const obj3 = { children: null };
  const items1 = [closure_7(selectedType(4634).Text, { variant: "heading-lg/medium", children: "Action Sheets" })];
  const obj4 = {
    description: "Tap an option to launch the action sheet immediately",
    hasIcons: false,
    children: closure_7(selectedType(5691).TableRow, {
      label: found.label,
      subLabel: found.description,
      arrow: true,
      onPress: callback,
    }),
  };
  items1[1] = closure_7(selectedType(5773).TableRowGroup, obj4);
  obj3.children = items1;
  obj2.children = closure_8(selectedType(5693).Card, obj3);
  obj.children = closure_7(selectedType(5058).Stack, obj2);
  return closure_7(closure_6, obj);
}
