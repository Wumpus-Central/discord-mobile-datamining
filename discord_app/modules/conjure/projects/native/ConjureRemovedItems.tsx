// === Module 11387: ConjureRemovedItems ===

// Module 11387 (ConjureRemovedItems)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import Text_Text from "Text/Text" /* 5087 */;
import Stack_Stack from "Stack/Stack" /* 5374 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6183 */;
import TableRowGroup from "TableRowGroup" /* 6269 */;
import FolderIcon from "FolderIcon" /* 8185 */;
import AppsIcon from "AppsIcon" /* 8217 */;
import BotTagDefault from "BotTag" /* 8750 */;
import RobotIcon from "RobotIcon" /* 11388 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { box: { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, boxDimmed: { opacity: 0.5 } };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemIcon(kind) {
  const cResult = c.c(3);
  kind = kind.kind;
  if ("channel" === kind) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = hasOwnProperty(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
      cResult[0] = tmp15;
      let first = tmp15;
    } else {
      first = cResult[0];
    }
    return first;
  } else if ("app" === kind) {
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = hasOwnProperty(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
      cResult[1] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[1];
    }
    return tmp9;
  } else if ("project" === kind) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = hasOwnProperty(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
      cResult[2] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
}) : (function ItemIcon(kind) {
  kind = kind.kind;
  if ("channel" === kind) {
    return hasOwnProperty(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
  } else if ("app" === kind) {
    return hasOwnProperty(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
  } else if ("project" === kind) {
    return hasOwnProperty(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
  }
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemsBox(arg0) {
  const cResult = c.c(11);
  ({ items, dimmed } = arg0);
  const tmp5 = closure_7();
  let boxDimmed = null;
  if (tmp4) {
    boxDimmed = tmp5.boxDimmed;
  }
  if (cResult[0] === tmp5.box) {
    if (cResult[1] === boxDimmed) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== items) {
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function b(kind) {
          const obj = { direction: "horizontal", spacing: 8, align: "center", children: null };
          const items = [closure_1_5(closure_1_8, { kind: kind.kind }), closure_1_5(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: kind.label })];
          obj.children = items;
          return closure_1_6(Stack_Stack.Stack, obj, kind.key);
        };
        cResult[5] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[5];
      }
      const mapped = items.map(tmp10);
      cResult[3] = items;
      cResult[4] = mapped;
    } else {
      if (cResult[6] !== cResult[4]) {
        const obj2 = { spacing: 8, children: tmp8 };
        const tmp15 = hasOwnProperty(Stack_Stack.Stack, obj2);
        cResult[6] = tmp8;
        cResult[7] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp13) {
          let tmp16 = cResult[10];
        }
        return tmp16;
      }
      const obj3 = { style: tmp7, children: tmp13 };
      const tmp19 = hasOwnProperty(View, obj3);
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      cResult[10] = tmp19;
      tmp16 = tmp19;
    }
  }
  const items1 = [tmp5.box, boxDimmed];
  cResult[0] = tmp5.box;
  cResult[1] = boxDimmed;
  cResult[2] = items1;
  tmp7 = items1;
  tmp4 = undefined !== dimmed && dimmed;
}) : (function ItemsBox(arg0) {
  ({ items, dimmed } = arg0);
  if (dimmed === undefined) {
    dimmed = false;
  }
  const tmp = closure_7();
  const items1 = [tmp.box, ];
  let boxDimmed = null;
  if (dimmed) {
    boxDimmed = tmp.boxDimmed;
  }
  let obj = {
    style: items1,
    children: hasOwnProperty(Stack_Stack.Stack, {
      spacing: 8,
      children: items.map((kind) => {
        const obj = { direction: "horizontal", spacing: 8, align: "center", children: null };
        const items = [closure_1_5(closure_1_8, { kind: kind.kind }), closure_1_5(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: kind.label })];
        obj.children = items;
        return closure_1_6(Stack_Stack.Stack, obj, kind.key);
      })
    })
  };
  items1[1] = boxDimmed;
  return hasOwnProperty(View, obj);
});
fn(558);
let obj3 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemovedItems(items) {
  const cResult = c.c(3);
  items = items.items;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "text-strong", children: null };
    const intl = util.intl;
    obj2.children = intl.string(_modDef3827["+E2PqP"]);
    const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== items) {
    const obj3 = { spacing: 8, children: null };
    const items1 = [first, ];
    const obj4 = { items };
    items1[1] = hasOwnProperty(closure_9, obj4);
    obj3.children = items1;
    const tmp12 = timestampProducer(Stack_Stack.Stack, obj3);
    cResult[1] = items;
    cResult[2] = tmp12;
    let tmp8 = tmp12;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function ConjureRemovedItems(items) {
  const obj = { spacing: 8, children: null };
  const obj2 = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3827["+E2PqP"]);
  items = [hasOwnProperty(Text_Text.Text, obj2), ];
  items[1] = hasOwnProperty(closure_9, { items: items.items });
  obj.children = items;
  return timestampProducer(Stack_Stack.Stack, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemovedItems.tsx");

export default tmp3;
export const formatWithAppTag = function formatWithAppTag(_87CtcA, targetAppName) {
  const intl = util.intl;
  const obj = { app: null };
  const obj2 = { children: null };
  const items = [targetAppName, " ", hasOwnProperty(BotTagDefault, {})];
  obj2.children = items;
  obj.app = timestampProducer(noop.Fragment, obj2, "app");
  return intl.format(_87CtcA, obj);
};
export const ConjureRemoveEverythingField = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemoveEverythingField(arg0) {
  const cResult = c.c(10);
  ({ checked, onChange, items } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3827.gKA9tU);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === checked) {
    if (cResult[2] === onChange) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] === items) {
      if (cResult[5] === tmp9) {
        let tmp10 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        if (cResult[8] === tmp10) {
          let tmp14 = cResult[9];
        }
        return tmp14;
      }
      const obj2 = { spacing: 8, children: null };
      const items1 = [tmp7, tmp10];
      obj2.children = items1;
      const tmp16 = timestampProducer(Stack_Stack.Stack, obj2);
      cResult[7] = tmp7;
      cResult[8] = tmp10;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    }
    const obj3 = { items, dimmed: !checked };
    const tmp13 = hasOwnProperty(closure_9, obj3);
    cResult[4] = items;
    cResult[5] = !checked;
    cResult[6] = tmp13;
    tmp10 = tmp13;
  }
  const tmp8 = hasOwnProperty(TableRowGroup.TableRowGroup, { hasIcons: false, children: hasOwnProperty(TableCheckboxRow.TableCheckboxRow, { label: first, checked, onPress: onChange }) });
  cResult[1] = checked;
  cResult[2] = onChange;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const obj4 = { hasIcons: false, children: hasOwnProperty(TableCheckboxRow.TableCheckboxRow, { label: first, checked, onPress: onChange }) };
}) : (function ConjureRemoveEverythingField(checked) {
  checked = checked.checked;
  ({ onChange, items } = checked);
  const obj = { spacing: 8, children: null };
  const obj2 = { hasIcons: false, children: null };
  const obj3 = { label: null, checked: null, onPress: null };
  const intl = util.intl;
  obj3.label = intl.string(_modDef3827.gKA9tU);
  obj3.checked = checked;
  obj3.onPress = onChange;
  obj2.children = hasOwnProperty(TableCheckboxRow.TableCheckboxRow, obj3);
  const items1 = [hasOwnProperty(TableRowGroup.TableRowGroup, obj2), hasOwnProperty(closure_9, { items, dimmed: !checked })];
  obj.children = items1;
  return timestampProducer(Stack_Stack.Stack, obj);
});