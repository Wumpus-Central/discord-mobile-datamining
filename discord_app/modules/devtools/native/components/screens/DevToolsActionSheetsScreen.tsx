// === Module 15601: DevToolsActionSheetsScreen ===

// Module 15601 (DevToolsActionSheetsScreen)
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import SuspiciousDownloadModalActionCreatorsDefault from "SuspiciousDownloadModalActionCreators" /* 11206 */;
import BlockedDomainModalActionCreatorsDefault from "BlockedDomainModalActionCreators" /* 12749 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, selectedType;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, contentContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let obj4 = {
  type: "blocked-domain",
  label: "Blocked Domain",
  description: "Shows a warning for potentially malicious domains",
  show() {
    const obj = BlockedDomainModalActionCreatorsDefault;
    return obj.show("https://example-phishing-site.com/malicious-page");
  }
};
let items = [
  obj4,
  {
    type: "suspicious-download",
    label: "Suspicious Download",
    description: "Warns users about potentially dangerous file downloads",
    show() {
      const obj = SuspiciousDownloadModalActionCreatorsDefault;
      return obj.show("https://suspicious-file.com/dangerous-file.exe");
    }
  },
  {
    type: "inappropriate-conversation",
    label: "Inappropriate Conversation",
    description: "Shows safety warning for inappropriate conversations",
    show() {
      const obj = ModalActionCreatorsDefault;
      return obj.pushLazy(asyncRequire(15602, dependencyMap.paths), { warningId: "test-warning-123", warningType: "inappropriate_conversation", senderId: "123456789", channelId: "987654321" }, "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL");
    }
  }
];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedType) => {
  let closure_2;
  let length;
  let obj5;
  let obj6;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = selectedType(576);
  const cResult = obj.c(9);
  selectedType = selectedType.selectedType;
  const onSelect = selectedType.onSelect;
  if (cResult[0] !== onSelect) {
    const fn = function o(type) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("action-sheet-selector");
      onSelect(type.type);
      type.show();
    };
    cResult[0] = onSelect;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const _HermesInternal = HermesInternal;
    const obj2 = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
    const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
    const tmp8 = closure_7(BottomSheetTitleHeader, obj2);
    cResult[2] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { paddingHorizontal: onSelect(587).space.PX_12 };
    cResult[3] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp11;
    let tmp13;
    if (cResult[5] === selectedType) {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp11) {
      const obj4 = { header: tmp5, children: closure_7(closure_5, obj5) };
      obj5 = { style: tmp9, children: closure_7(selectedType(6074).TableRowGroup, obj6) };
      BottomSheet = tmp(6645).BottomSheet;
      obj6 = { hasIcons: true, children: tmp11 };
      const tmp16 = closure_7(BottomSheet, obj4);
      cResult[7] = tmp11;
      cResult[8] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[8];
    }
    return tmp13;
  }
  const mapped = items.map((type, index) => {
    let tmpResult;
    let closure_0 = type;
    const obj = {
      icon: closure_1_7(selectedType(closure_2[16]).WarningIcon, { size: "md" }),
      label: null,
      subLabel: null,
      onPress() {
        return closure_2(type);
      },
      trailing: tmpResult,
      start: 0 === index,
      end: index === length.length - 1
    };
    const TableRow = selectedType(closure_2[15]).TableRow;
    ({ label: obj.label, description: obj.subLabel } = type);
    tmpResult = undefined;
    if (closure_0 === type.type) {
      tmpResult = closure_1_7(selectedType(closure_2[17]).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
    }
    return closure_1_7(TableRow, obj, type.type);
  });
  cResult[4] = tmp4;
  cResult[5] = selectedType;
  cResult[6] = mapped;
  tmp11 = mapped;
}) : ((arg0) => {
  let BottomSheetTitleHeader;
  let TableRowGroup;
  let closure_2;
  let length;
  let obj2;
  let obj3;
  let obj5;
  let onSelect;
  let require;
  ({ selectedType: require, onSelect } = arg0);
  items = [onSelect];
  dependencyMap = react.useCallback((type) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("action-sheet-selector");
    onSelect(type.type);
    type.show();
  }, items);
  let obj = { header: closure_7(BottomSheetTitleHeader, obj2), children: closure_7(closure_5, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  obj3 = { style: { paddingHorizontal: onSelect(587).space.PX_12 }, children: closure_7(TableRowGroup, obj5) };
  obj5 = {
    hasIcons: true,
    children: items.map((type, index) => {
      let tmpResult;
      const require = type;
      const obj = {
        icon: closure_1_7(require("WarningIcon").WarningIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_2(type);
        },
        trailing: tmpResult,
        start: 0 === index,
        end: index === items.length - 1
      };
      const TableRow = require("TableRow").TableRow;
      ({ label: obj.label, description: obj.subLabel } = type);
      tmpResult = undefined;
      if (require === type.type) {
        tmpResult = closure_1_7(require("CheckmarkLargeIcon").CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      return closure_1_7(TableRow, obj, type.type);
    })
  };
  ({ paddingHorizontal: onSelect(587).space.PX_12 });
  TableRowGroup = TableRowGroup2.TableRowGroup;
  return closure_7(BottomSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Card;
  let obj3;
  let obj5;
  let onSelect;
  let tmp11;
  let tmp7;
  let obj = selectedType(576);
  const cResult = obj.c(13);
  closure_9();
  [selectedType, importDefault] = react.useState("blocked-domain");
  if (cResult[0] !== selectedType) {
    const found = items.find((type) => type.type === first);
    cResult[0] = selectedType;
    cResult[1] = found;
    tmp7 = found;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== selectedType) {
    class T {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { default: closure_11 };
        const obj3 = { selectedType, onSelect };
        obj.openLazy(Promise.resolve(obj2), "action-sheet-selector", obj3);
      }
    }
    cResult[2] = selectedType;
    cResult[3] = T;
  } else {
    class T {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { default: closure_11 };
        const obj3 = { selectedType, onSelect };
        obj.openLazy(Promise.resolve(obj2), "action-sheet-selector", obj3);
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { default: closure_11 };
        const obj3 = { selectedType, onSelect };
        obj.openLazy(Promise.resolve(obj2), "action-sheet-selector", obj3);
      }
    }
    const tmp12 = closure_7(selectedType(4886).Text, { variant: "heading-lg/medium", children: "Action Sheets" });
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    class T {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { default: closure_11 };
        const obj3 = { selectedType, onSelect };
        obj.openLazy(Promise.resolve(obj2), "action-sheet-selector", obj3);
      }
    }
  }
  if (cResult[5] === T) {
    class T {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { default: closure_11 };
        const obj3 = { selectedType, onSelect };
        obj.openLazy(Promise.resolve(obj2), "action-sheet-selector", obj3);
      }
    }
  }
  let obj2 = { spacing: 16, children: closure_8(Card, obj3) };
  const Stack = tmp(5593).Stack;
  obj3 = { children: items };
  items = [tmp11, ];
  Card = tmp(5995).Card;
  const obj4 = { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: closure_7(selectedType(5993).TableRow, obj5) };
  const TableRowGroup = tmp(6074).TableRowGroup;
  obj5 = { label: tmp7.label, subLabel: tmp7.description, arrow: true, onPress: T };
  items[1] = closure_7(TableRowGroup, obj4);
  cResult[5] = T;
  cResult[6] = tmp7.description;
  cResult[7] = tmp7.label;
  cResult[8] = closure_7(Stack, obj2);
  closure_7(Stack, obj2);
}) : (() => {
  let Card;
  let Stack;
  let items1;
  let obj2;
  let obj3;
  let obj5;
  let onSelect;
  const tmp = closure_9();
  [selectedType, onSelect] = react.useState("blocked-domain");
  const found = items.find((type) => type.type === first);
  items = [selectedType];
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: closure_7(Stack, obj2) };
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: closure_11 };
    const obj3 = { selectedType, onSelect };
    obj.openLazy(Promise.resolve(obj2), "action-sheet-selector", obj3);
  }, items);
  obj2 = { spacing: 16, children: closure_8(Card, obj3) };
  Stack = selectedType(5593).Stack;
  obj3 = { children: items1 };
  Card = selectedType(5995).Card;
  items1 = [closure_7(selectedType(4886).Text, { variant: "heading-lg/medium", children: "Action Sheets" }), ];
  const obj4 = { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: closure_7(selectedType(5993).TableRow, obj5) };
  const TableRowGroup = selectedType(6074).TableRowGroup;
  obj5 = { label: found.label, subLabel: found.description, arrow: true, onPress: callback };
  items1[1] = closure_7(TableRowGroup, obj4);
  return closure_7(closure_6, obj);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default tmp5;