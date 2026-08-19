// === Module 15174: ActionSheetSelector ===

// Module 15174 (ActionSheetSelector)
import ThemesDefault from "Themes" /* 712 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4326 */;
import _modDef5260 from "module_5260" /* 5260 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import Background from "Background" /* 6950 */;
import WarningIcon from "WarningIcon" /* 8078 */;
import _modDef12416 from "module_12416" /* 12416 */;
import _modDef12418 from "module_12418" /* 12418 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function ActionSheetSelector(arg0) {
  ({ selectedType: require, onSelect } = arg0);
  items = [onSelect];
  dependencyMap = React.useCallback((type) => {
    onSelect(4342).hideActionSheet("action-sheet-selector");
    onSelect(type.type);
    type.show();
  }, items);
  let obj = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { style: { paddingHorizontal: onSelect(712).space.PX_12 }, children: null };
  obj1 = { paddingHorizontal: onSelect(712).space.PX_12 };
  obj[1] = callback2(TableRowGroupTitle.TableRowGroup, {
    hasIcons: true,
    children: items.map((item, index) => {
      closure_0 = item;
      const obj = {
        icon: closure_1_7(WarningIcon.WarningIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_1_2(closure_0);
        },
        trailing: null,
        start: null,
        end: null
      };
      ({ label: obj[1], description: obj[2] } = item);
      let tmpResult;
      if (closure_0 === item.type) {
        tmpResult = closure_1_7(CheckmarkLargeIcon.CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj[4] = tmpResult;
      obj[5] = 0 === index;
      obj[6] = index === items.length - 1;
      return closure_1_7(TableRowInner.TableRow, obj, item.type);
    })
  });
  obj[1] = callback2(closure_5, obj);
  return callback2(Background.BottomSheet, obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let items = [
  {
    type: "blocked-domain",
    label: "Blocked Domain",
    description: "Shows a warning for potentially malicious domains",
    show() {
      return _modDef12418.show("https://example-phishing-site.com/malicious-page");
    }
  },
  {
    type: "suspicious-download",
    label: "Suspicious Download",
    description: "Warns users about potentially dangerous file downloads",
    show() {
      return _modDef12416.show("https://suspicious-file.com/dangerous-file.exe");
    }
  },
  {
    type: "inappropriate-conversation",
    label: "Inappropriate Conversation",
    description: "Shows safety warning for inappropriate conversations",
    show() {
      return _modDef5260.pushLazy(asyncRequireImpl(15175, dependencyMap.paths), { warningId: "test-warning-123", warningType: "inappropriate_conversation", senderId: "123456789", channelId: "987654321" }, "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL");
    }
  }
];
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default function DevToolsActionSheetsScreen() {
  const tmp = callback4();
  const tmp2 = callback(React.useState("blocked-domain"), 2);
  const first = tmp2[0];
  closure_1 = tmp2[1];
  const found = items.find((item, index) => item.type === first);
  items = [first];
  callback = React.useCallback(() => {
    callback(dependencyMap[11]);
    const obj = { selectedType: first, onSelect: callback };
    obj.openLazy(Promise.resolve(obj), "action-sheet-selector", obj);
  }, items);
  let obj = { children: null };
  const items1 = [callback2(first(4734).Text, { variant: "heading-lg/medium", children: "Action Sheets" }), callback2(first(6286).TableRowGroup, { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: callback2(first(6291).TableRow, obj2) })];
  obj[0] = items1;
  obj[1] = callback3(first(6292).Card, obj);
  obj[2] = callback2(first(4733).Stack, obj);
  return callback2(closure_6, obj);
};