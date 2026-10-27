// === Module 12333: ConjureTipGutterRow ===

// Module 12333 (ConjureTipGutterRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5235 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12334 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4972);
let closure_6 = createStyles.createStyles((arg0, marginTop) => {
  const obj = { row: { flexDirection: "row", alignItems: "flex-start", paddingHorizontal: ConjureNativeStatusLine.MESSAGE_EDGE_INSET }, gutter: null, content: null };
  const size = { width: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE, marginRight: ConjureNativeStatusLine.MESSAGE_AVATAR_GAP, height: Text_Text.TextStyleSheet[arg0].lineHeight, marginTop, alignItems: "center", justifyContent: "center" };
  obj.gutter = size;
  obj.content = { flex: 1, minWidth: 0 };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipGutterRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipGutterRow(arg0) {
  const cResult = c.c(13);
  ({ icon, firstLineInset, children } = arg0);
  let num = 0;
  ({ tone, firstLine } = arg0);
  if (undefined !== firstLineInset) {
    num = firstLineInset;
  }
  const tmp3Result = closure_6(firstLine, num);
  if ("brand" === tone) {
    let ICON_MUTED = nativeDefault.colors.ICON_BRAND;
  } else {
    ICON_MUTED = nativeDefault.colors.ICON_MUTED;
  }
  if (cResult[0] === icon) {
    if (cResult[1] === ICON_MUTED) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === tmp3Result.gutter) {
      if (cResult[4] === tmp7) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === children) {
        if (cResult[7] === tmp3Result.content) {
          let tmp13 = cResult[8];
        }
        if (cResult[9] === tmp3Result.row) {
          if (cResult[10] === tmp9) {
            if (cResult[11] === tmp13) {
              let tmp17 = cResult[12];
            }
            return tmp17;
          }
        }
        const obj2 = { style: tmp3Result.row, children: null };
        const items = [tmp9, tmp13];
        obj2.children = items;
        const tmp20 = hasOwnProperty(View, obj2);
        cResult[9] = tmp3Result.row;
        cResult[10] = tmp9;
        cResult[11] = tmp13;
        cResult[12] = tmp20;
        tmp17 = tmp20;
      }
      const obj3 = { style: tmp3Result.content, children };
      const tmp16 = React4(View, obj3);
      cResult[6] = children;
      cResult[7] = tmp3Result.content;
      cResult[8] = tmp16;
      tmp13 = tmp16;
    }
    const obj4 = { style: tmp3Result.gutter, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp7 };
    const tmp12 = React4(View, obj4);
    cResult[3] = tmp3Result.gutter;
    cResult[4] = tmp7;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
  const tmp8 = React4(icon, { size: "sm", color: ICON_MUTED });
  cResult[0] = icon;
  cResult[1] = ICON_MUTED;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function ConjureTipGutterRow(children) {
  let num = children.firstLineInset;
  ({ icon, tone, firstLine } = children);
  if (num === undefined) {
    num = 0;
  }
  const tmp = closure_6(firstLine, num);
  const obj = { style: tmp.row, children: null };
  const obj2 = { style: tmp.gutter, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  if ("brand" === tone) {
    let ICON_MUTED = nativeDefault.colors.ICON_BRAND;
  } else {
    ICON_MUTED = nativeDefault.colors.ICON_MUTED;
  }
  obj2.children = React4(icon, { size: "sm", color: ICON_MUTED });
  const items = [React4(View, obj2), React4(View, { style: tmp.content, children: children.children })];
  obj.children = items;
  return hasOwnProperty(View, obj);
});