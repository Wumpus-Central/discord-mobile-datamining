// === Module 12500: ConjurePublishHistoryPanel ===

// Module 12500 (ConjurePublishHistoryPanel)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import useConjurePublishHistory from "useConjurePublishHistory" /* 12501 */;
import ConjureNativeMarkdownDefault from "ConjureNativeMarkdown" /* 12503 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ReleaseNotes(arg0) {
  ({ projectId, id, notesCache } = arg0);
  const conjurePublishHistoryNotes = useConjurePublishHistory.useConjurePublishHistoryNotes(projectId, id, notesCache);
  const state = conjurePublishHistoryNotes.state;
  if ("failed" === state.status) {
    const obj2 = { spacing: 8, children: null };
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = util.intl;
    obj3.children = intl4.string(_modDef3865.cBIaeW);
    const items = [timestampProducer(Text_Text.Text, obj3), ];
    const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl5 = util.intl;
    obj4.text = intl5.string(_modDef3865.HOuQ9H);
    obj4.onPress = tmp4;
    items[1] = timestampProducer(components_Button_Button.Button, obj4);
    obj2.children = items;
    return React5(Stack_Stack.Stack, obj2);
  } else {
    let data = null;
    if ("loaded" === state.status) {
      data = state.data;
    }
    if (null != data) {
      if ("" !== data) {
        const obj5 = { source: data };
        let tmp6Result = timestampProducer(ConjureNativeMarkdownDefault, obj5);
      }
      return tmp6Result;
    }
    if ("loading" === state.status) {
      const intl3 = util.intl;
      let stringResult = intl3.string(_modDef3865["LmWLc+"]);
    } else if (null == data) {
      const intl2 = util.intl;
      stringResult = intl2.string(_modDef3865.hcrQOo);
    } else {
      const intl = util.intl;
      stringResult = intl.string(_modDef3865["0bDcBs"]);
    }
    const obj6 = { accessibilityLiveRegion: "polite", children: null };
    const obj7 = { variant: "text-sm/normal", children: stringResult };
    obj6.children = timestampProducer(Text_Text.Text, obj7);
    tmp6Result = timestampProducer(View, obj6);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_9 = noop.memo(function PublishRow(entry) {
  entry = entry.entry;
  c0 = undefined;
  ({ projectId, notesCache } = entry);
  [tmp2, c0] = noop.useState(false);
  const tmp = _slicedToArray(noop.useState(false), 2);
  const publishHistoryTitleResult = useConjurePublishHistory.publishHistoryTitle(entry.publishedAt);
  const children = [timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: publishHistoryTitleResult }), , ];
  const intl = util.intl;
  const tmp9 = _modDef3865;
  if (tmp2) {
    let ufHcsq = tmp9["Qro2x/"];
    let tmp10 = importDefault;
  } else {
    ufHcsq = tmp9.ufHcsq;
    tmp10 = importDefault;
  }
  const obj2 = { variant: "secondary", size: "sm", text: intl.string(ufHcsq), accessibilityLabel: null, accessibilityState: null, onPress: null };
  const intl2 = util.intl;
  obj2.accessibilityLabel = intl2.formatToPlainString(tmp10(3865)["M9L+3I"], { title: publishHistoryTitleResult });
  obj2.accessibilityState = { expanded: tmp2 };
  obj2.onPress = function onPress() {
    return _undefined((arg0) => !arg0);
  };
  children[1] = timestampProducer(components_Button_Button.Button, obj2);
  let tmp7Result = null;
  if (tmp2) {
    const obj3 = { projectId, id: entry.id, notesCache };
    tmp7Result = timestampProducer(ReleaseNotes, obj3);
  }
  children[2] = tmp7Result;
  return React5(Stack_Stack.Stack, { spacing: 12, children });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjurePublishHistoryPanel.tsx");

export default function ConjurePublishHistoryPanel(projectId) {
  projectId = projectId.projectId;
  const iter = projectId(12501).useConjurePublishHistory(projectId);
  const state = iter.state;
  if ("loading" === state.status) {
    const obj2 = { variant: "text-sm/normal", children: null };
    const intl4 = tmp(1114).intl;
    obj2.children = intl4.string(iter(3865)["d/Wf8N"]);
    let tmp5 = closure_6(tmp(5619).Text, obj2);
  } else if ("failed" === state.status) {
    const obj3 = { spacing: 12, children: null };
    const obj4 = { variant: "text-sm/normal", children: null };
    const intl2 = tmp(1114).intl;
    obj4.children = intl2.string(iter(3865).TzCJWI);
    const items = [closure_6(tmp(5619).Text, obj4), ];
    const obj5 = { variant: "secondary", text: null, onPress: null };
    const intl3 = tmp(1114).intl;
    obj5.text = intl3.string(iter(3865).HOuQ9H);
    obj5.onPress = iter.retry;
    items[1] = closure_6(tmp(5629).Button, obj5);
    obj3.children = items;
    tmp5 = closure_7(tmp(6022).Stack, obj3);
  } else if (0 === state.data.entries.length) {
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl = tmp(1114).intl;
    obj6.children = intl.string(iter(3865)["19L92G"]);
    tmp5 = closure_6(tmp(5619).Text, obj6);
  } else {
    const obj7 = { spacing: 24, children: null };
    const obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl5 = tmp(1114).intl;
    obj8.children = intl5.string(iter(3865).Kzt1rI);
    const items1 = [closure_6(tmp(5619).Text, obj8), , ];
    const entries = state.data.entries;
    items1[1] = entries.map((entry) => timestampProducer(closure_9, { projectId, entry, notesCache: iter.notesCache }, entry.id));
    const obj9 = { direction: "horizontal", spacing: 8, align: "center", justify: "space-between", children: null };
    const obj10 = { variant: "secondary", size: "sm", shrink: true, text: null, disabled: null, onPress: null };
    const intl6 = tmp(1114).intl;
    obj10.text = intl6.string(iter(3865)["4un98A"]);
    obj10.disabled = !iter.hasPrevious;
    obj10.onPress = iter.previous;
    const items2 = [closure_6(tmp(5629).Button, obj10), , ];
    const obj11 = { variant: "text-sm/normal", children: null };
    const intl7 = tmp(1114).intl;
    const obj12 = { page: iter.page };
    obj11.children = intl7.formatToPlainString(iter(3865)["54samz"], obj12);
    items2[1] = closure_6(tmp(5619).Text, obj11);
    const obj13 = { variant: "secondary", size: "sm", shrink: true, text: null, disabled: null, onPress: null };
    const intl8 = tmp(1114).intl;
    obj13.text = intl8.string(iter(3865).HqheLL);
    obj13.disabled = !iter.hasNext;
    obj13.onPress = iter.next;
    items2[2] = closure_6(tmp(5629).Button, obj13);
    obj9.children = items2;
    items1[2] = closure_7(tmp(6022).Stack, obj9);
    obj7.children = items1;
    tmp5 = closure_7(tmp(6022).Stack, obj7);
  }
  return tmp5;
};