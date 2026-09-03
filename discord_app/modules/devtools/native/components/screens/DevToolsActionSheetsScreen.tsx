// === Module 15563: ActionSheetSelector ===

// Module 15563 (ActionSheetSelector)
import ThemesDefault from "Themes" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5630 */;
import Background from "Background" /* 5631 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6001 */;
import _modDef13043 from "module_13043" /* 13043 */;
import _modDef13045 from "module_13045" /* 13045 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function ActionSheetSelector(arg0) {
  ({ selectedType: require, onSelect } = arg0);
  dependencyMap = undefined;
  items = [onSelect];
  dependencyMap = React.useCallback((type) => {
    onSelect(4445).hideActionSheet("action-sheet-selector");
    onSelect(type.type);
    type.show();
  }, items);
  let obj = { header: null, children: null };
  obj = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { style: { paddingHorizontal: onSelect(709).space.PX_12 }, children: null };
  obj1 = { paddingHorizontal: onSelect(709).space.PX_12 };
  obj[1] = callback2(TableRowGroupTitle.TableRowGroup, {
    hasIcons: true,
    children: items.map((type) => {
      closure_0 = type;
      const obj = {
        icon: closure_1_7(closure_1_0(8755).WarningIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_1_2(closure_0);
        },
        trailing: null,
        start: null,
        end: null
      };
      ({ label: obj[1], description: obj[2] } = type);
      let tmpResult;
      if (closure_0 === type.type) {
        tmpResult = tmp(closure_1_0(4429).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj[4] = tmpResult;
      obj[5] = 0 === arg1;
      obj[6] = arg1 === closure_1_10.length - 1;
      return closure_1_7(closure_1_0(5608).TableRow, obj, type.type);
    })
  });
  obj[1] = callback2(closure_5, obj);
  return callback2(Background.BottomSheet, obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { wrap: null, contentContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let items = [
  {
    type: "blocked-domain",
    label: "Blocked Domain",
    description: "Shows a warning for potentially malicious domains",
    show() {
      return _modDef13045.show("https://example-phishing-site.com/malicious-page");
    }
  },
  {
    type: "suspicious-download",
    label: "Suspicious Download",
    description: "Warns users about potentially dangerous file downloads",
    show() {
      return _modDef13043.show("https://suspicious-file.com/dangerous-file.exe");
    }
  },
  {
    type: "inappropriate-conversation",
    label: "Inappropriate Conversation",
    description: "Shows safety warning for inappropriate conversations",
    show() {
      return _modDef4724.pushLazy(asyncRequireImpl(15564, dependencyMap.paths), { warningId: "test-warning-123", warningType: "inappropriate_conversation", senderId: "123456789", channelId: "987654321" }, "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL");
    }
  }
];
let obj1 = { paddingVertical: ThemesDefault.space.PX_16 };
const obj2 = {
  type: "blocked-domain",
  label: "Blocked Domain",
  description: "Shows a warning for potentially malicious domains",
  show() {
    return _modDef13045.show("https://example-phishing-site.com/malicious-page");
  }
};
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default function DevToolsActionSheetsScreen() {
  const tmp = callback4();
  const tmp2 = callback(React.useState("blocked-domain"), 2);
  const first = tmp2[0];
  closure_1 = tmp2[1];
  const found = items.find((type) => type.type === first);
  items = [first];
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  callback = React.useCallback(() => {
    let obj = callback(closure_1_2[11]);
    obj = { default: closure_1_11 };
    obj = { selectedType: first, onSelect: callback };
    obj.openLazy(Promise.resolve(obj), "action-sheet-selector", obj);
  }, items);
  obj = { spacing: 16, children: null };
  obj = { children: null };
  const items1 = [callback2(first(4474).Text, { variant: "heading-lg/medium", children: "Action Sheets" }), callback2(first(6001).TableRowGroup, { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: callback2(first(5608).TableRow, obj2) })];
  obj[0] = items1;
  obj[1] = callback3(first(5610).Card, obj);
  obj[2] = callback2(first(4927).Stack, obj);
  return callback2(closure_6, obj);
};