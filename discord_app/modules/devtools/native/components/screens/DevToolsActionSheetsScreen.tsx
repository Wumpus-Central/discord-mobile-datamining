// discord_app/modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx
import _slicedToArray from "_slicedToArray";
import PressableCard from "PressableCard";
import get_ActivityIndicator from "CheckmarkLargeIcon";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import { asyncRequireImpl } from "../../../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../../actions/ModalActionCreators.tsx";
import { Background } from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { TableRowGroupTitle } from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { BlockedDomainModalActionCreators.native } from "../../../../blocked_domains/BlockedDomainModalActionCreators.native.tsx";
import { SuspiciousDownloadModalActionCreators.native } from "../../../../suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ActionSheetSelector(arg0) {
  let onSelect;
  let require;
  ({ selectedType: require, onSelect } = arg0);
  let dependencyMap;
  const items = [onSelect];
  dependencyMap = React.useCallback((type) => {
    onSelect(4310).hideActionSheet("action-sheet-selector");
    onSelect(type.type);
    type.show();
  }, items);
  let obj = { header: null, children: null };
  obj = { title: "Select Action Sheet", subtitle: null };
  obj[1] = "" + items.length + " options";
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { style: null, children: null };
  obj[0] = { paddingHorizontal: onSelect(712).space.PX_12 };
  const obj2 = { hasIcons: true, children: null };
  obj2[1] = items.map((type) => {
    let closure_0 = type;
    const obj = { icon: null, label: null, subLabel: null, onPress: null, trailing: null, start: null, end: null };
    obj[0] = outer1_7(outer1_0(8007).WarningIcon, { size: "md" });
    ({ label: obj[1], description: obj[2] } = type);
    obj[3] = function onPress() {
      return outer1_2(closure_0);
    };
    let tmpResult;
    if (closure_0 === type.type) {
      tmpResult = tmp(outer1_0(4294).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
    }
    obj[4] = tmpResult;
    obj[5] = 0 === arg1;
    obj[6] = arg1 === outer1_10.length - 1;
    return outer1_7(outer1_0(5414).TableRow, obj, type.type);
  });
  obj[1] = callback2(TableRowGroupTitle.TableRowGroup, obj2);
  obj[1] = callback2(closure_5, obj);
  return callback2(Background.BottomSheet, obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { wrap: null, contentContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1, paddingHorizontal: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let items = [
  {
    type: "blocked-domain",
    label: "Blocked Domain",
    description: "Shows a warning for potentially malicious domains",
    show() {
      return BlockedDomainModalActionCreators.native.show("https://example-phishing-site.com/malicious-page");
    }
  },
  {
    type: "suspicious-download",
    label: "Suspicious Download",
    description: "Warns users about potentially dangerous file downloads",
    show() {
      return SuspiciousDownloadModalActionCreators.native.show("https://suspicious-file.com/dangerous-file.exe");
    }
  },
  {
    type: "inappropriate-conversation",
    label: "Inappropriate Conversation",
    description: "Shows safety warning for inappropriate conversations",
    show() {
      return ModalActionCreators.pushLazy(asyncRequireImpl(15121, dependencyMap.paths), { warningId: "test-warning-123", warningType: "inappropriate_conversation", senderId: "123456789", channelId: "987654321" }, "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL");
    }
  }
];
let obj1 = { paddingVertical: require("Themes").space.PX_16 };
let obj2 = {
  type: "blocked-domain",
  label: "Blocked Domain",
  description: "Shows a warning for potentially malicious domains",
  show() {
    return BlockedDomainModalActionCreators.native.show("https://example-phishing-site.com/malicious-page");
  }
};
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default function DevToolsActionSheetsScreen() {
  const tmp = createCacheKey();
  const tmp2 = callback(React.useState("blocked-domain"), 2);
  const first = tmp2[0];
  let closure_1 = tmp2[1];
  const found = items.find((type) => type.type === first);
  items = [first];
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  callback = React.useCallback(() => {
    let obj = callback(outer1_2[11]);
    obj = { default: outer1_11 };
    obj = { selectedType: first, onSelect: callback };
    obj.openLazy(Promise.resolve(obj), "action-sheet-selector", obj);
  }, items);
  obj = { spacing: 16, children: null };
  obj = { children: null };
  const items1 = [callback2(first(4338).Text, { variant: "heading-lg/medium", children: "Action Sheets" }), ];
  const obj1 = { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: null };
  obj1[2] = callback2(first(5414).TableRow, { label: found.label, subLabel: found.description, arrow: true, onPress: callback });
  items1[1] = callback2(first(5807).TableRowGroup, obj1);
  obj[0] = items1;
  obj[1] = callback3(first(5416).Card, obj);
  obj[2] = callback2(first(4753).Stack, obj);
  return callback2(closure_6, obj);
};