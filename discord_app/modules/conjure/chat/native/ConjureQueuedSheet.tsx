// === Module 12788: ConjureQueuedSheet ===

// Module 12788 (ConjureQueuedSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12577 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;

require = fn;
function ConjureQueuedRow(content) {
  content = content.content;
  c0 = undefined;
  c1 = undefined;
  const tmp = closure_11();
  [tmp3, c0] = noop.useState(false);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp5, c1] = noop.useState(false);
  const item = tmp.item;
  const callback = noop.useCallback((nativeEvent) => _undefined2(nativeEvent.nativeEvent.lines.length > 3), []);
  if (content.divided) {
    const items = [item, tmp.divider];
    let tmp7 = items;
  } else {
    tmp7 = item;
  }
  if ("" === content) {
    const obj2 = { style: tmp7, children: null };
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(_modDef3868["07XimM"]);
    obj2.children = React6(Text_Text.Text, obj3);
    let tmp18Result = React6(timestampProducer, obj2);
  } else {
    const obj4 = { style: tmp7, children: null };
    const obj5 = { style: tmp.content, children: null };
    const obj6 = { variant: "text-sm/normal", color: "text-default", style: tmp.measure, onTextLayout: callback, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: content };
    const items1 = [React6(Text_Text.Text, obj6), ];
    const obj = { variant: "text-sm/normal", color: "text-default", lineClamp: 3, children: content };
    items1[1] = React6(Text_Text.Text, obj);
    obj5.children = items1;
    const items2 = [React7(timestampProducer, obj5), ];
    if (!tmp5) {
      items2[1] = null;
      obj4.children = items2;
      tmp18Result = React7(timestampProducer, obj4);
    } else {
      const intl = util.intl;
      const obj7 = { variant: "tertiary", size: "sm", text: null, onPress: null };
      obj7.text = intl.string(tmp3 ? obj7.nEMoeN : obj7["W+la29"]);
      obj7.onPress = function onPress() {
        return _undefined((arg0) => !arg0);
      };
      React6(components_Button_Button.Button, obj7);
      const tmp10 = tmp3 ? obj7.nEMoeN : obj7["W+la29"];
    }
  }
  return tmp18Result;
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ConjureQueuedSheet = "ConjureQueuedSheet";
const createStyles = fn(5014);
let obj2 = { scroller: { maxHeight: 360 }, item: { alignItems: "flex-start", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8 }, divider: null, content: null, measure: null };
let obj3 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8 };
obj2.divider = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.content = { alignSelf: "stretch" };
obj2.measure = { position: "absolute", left: 0, right: 0, opacity: 0 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureQueuedSheet.tsx");

export default function ConjureQueuedSheet(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_11();
  const items = [ConjureChatStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureChatStore.getMessages(projectId), items1);
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => conjureQueuedMessage.queuedUserMessages(stateFromStores), items2);
  dependencyMap = tmp5;
  const items3 = [0 === memo.length];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjureQueuedSheet);
    }
  }, items3);
  let tmp7 = null;
  if (0 !== memo.length) {
    const obj2 = { header: null, children: null };
    const obj3 = { title: null };
    const intl = tmp2(1113).intl;
    obj3.title = intl.string(stateFromStores(3868).hzgPbZ);
    obj2.header = closure_8(tmp2(7321).BottomSheetTitleHeader, obj3);
    const obj4 = { style: tmp.scroller, nestedScrollEnabled: true, children: memo.map((content, index) => closure_1_8(ConjureQueuedRow, { content: content.content, divided: index > 0 }, content.render_id)) };
    obj2.children = closure_8(closure_5, obj4);
    tmp7 = closure_8(tmp2(7366).ActionSheet, obj2);
  }
  return tmp7;
};
export const CONJURE_QUEUED_SHEET_KEY = "ConjureQueuedSheet";