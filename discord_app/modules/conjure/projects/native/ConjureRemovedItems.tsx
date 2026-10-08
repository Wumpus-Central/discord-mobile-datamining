// === Module 16869: ConjureRemovedItems ===

// Module 16869 (ConjureRemovedItems)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import FolderIcon from "FolderIcon" /* 8177 */;
import AppsIcon from "AppsIcon" /* 8209 */;
import BotTagDefault from "BotTag" /* 8741 */;
import RobotIcon from "RobotIcon" /* 12825 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { box: { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE } };
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
let obj3 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemovedItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemovedItems(items) {
  const cResult = c.c(9);
  items = items.items;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "text-strong", children: null };
    const intl = util.intl;
    obj2.children = intl.string(_modDef3827["+E2PqP"]);
    const tmp8 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== items) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function v(kind) {
        const obj = { direction: "horizontal", spacing: 8, align: "center", children: null };
        const items = [closure_1_5(closure_1_8, { kind: kind.kind }), closure_1_5(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: kind.label })];
        obj.children = items;
        return closure_1_6(Stack_Stack.Stack, obj, kind.key);
      };
      cResult[3] = fn;
      let tmp11 = fn;
    } else {
      tmp11 = cResult[3];
    }
    const mapped = items.map(tmp11);
    cResult[1] = items;
    cResult[2] = mapped;
  } else {
    if (cResult[4] !== cResult[2]) {
      const obj3 = { spacing: 8, children: tmp10 };
      const tmp16 = hasOwnProperty(Stack_Stack.Stack, obj3);
      cResult[4] = tmp10;
      cResult[5] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp4.box) {
      if (cResult[7] === tmp14) {
        let tmp17 = cResult[8];
      }
      return tmp17;
    }
    const obj4 = { spacing: 8, children: null };
    const items1 = [first, ];
    const obj5 = { style: tmp9, children: tmp14 };
    items1[1] = hasOwnProperty(View, obj5);
    obj4.children = items1;
    const tmp21 = timestampProducer(Stack_Stack.Stack, obj4);
    cResult[6] = tmp4.box;
    cResult[7] = tmp14;
    cResult[8] = tmp21;
    tmp17 = tmp21;
  }
}) : (function ConjureRemovedItems(items) {
  items = items.items;
  let obj = { spacing: 8, children: null };
  const obj2 = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3827["+E2PqP"]);
  const items1 = [hasOwnProperty(Text_Text.Text, obj2), ];
  const obj3 = { style: closure_7().box, children: null };
  const tmp = closure_7();
  obj3.children = hasOwnProperty(Stack_Stack.Stack, {
    spacing: 8,
    children: items.map((kind) => {
      const obj = { direction: "horizontal", spacing: 8, align: "center", children: null };
      const items = [closure_1_5(closure_1_8, { kind: kind.kind }), closure_1_5(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: kind.label })];
      obj.children = items;
      return closure_1_6(Stack_Stack.Stack, obj, kind.key);
    })
  });
  items1[1] = hasOwnProperty(View, obj3);
  obj.children = items1;
  return timestampProducer(Stack_Stack.Stack, obj);
});
export const formatWithAppTag = function formatWithAppTag(_87CtcA, appName) {
  const intl = util.intl;
  const obj = { app: null };
  const obj2 = { children: null };
  const items = [appName, " ", hasOwnProperty(BotTagDefault, {})];
  obj2.children = items;
  obj.app = timestampProducer(noop.Fragment, obj2, "app");
  return intl.format(_87CtcA, obj);
};