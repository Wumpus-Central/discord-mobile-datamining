// === Module 14915: UserProfileEditableTileBase ===

// Module 14915 (UserProfileEditableTileBase)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Pressables from "Pressables" /* 6184 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { tile: { height: 100, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, borderOverlay: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm };
obj2.borderOverlay = rect;
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { height: 100, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditableTileBase.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditableTileBase(arg0) {
  const cResult = c.c(15);
  ({ onPress, accessibilityLabel, accessibilityValue, children, style } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== accessibilityValue) {
    const obj2 = { text: accessibilityValue };
    cResult[0] = accessibilityValue;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["4lAcxv"]);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === style) {
    if (cResult[4] === tmp4.tile) {
      let tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp4.borderOverlay) {
      const obj3 = { style: tmp4.borderOverlay, pointerEvents: "none" };
      const tmp12 = React3(View, obj3);
      cResult[6] = tmp4.borderOverlay;
      cResult[7] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[7];
    }
    if (cResult[8] === accessibilityLabel) {
      if (cResult[9] === children) {
        if (cResult[10] === onPress) {
          if (cResult[11] === tmp5) {
            if (cResult[12] === tmp8) {
              if (cResult[13] === tmp9) {
                let tmp13 = cResult[14];
              }
              return tmp13;
            }
          }
        }
      }
    }
    const obj4 = { onPress, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp5, accessibilityHint: tmp6, style: tmp8, children: null };
    const items = [children, tmp9];
    obj4.children = items;
    const tmp15 = React4(Pressables.PressableHighlight, obj4);
    cResult[8] = accessibilityLabel;
    cResult[9] = children;
    cResult[10] = onPress;
    cResult[11] = tmp5;
    cResult[12] = tmp8;
    cResult[13] = tmp9;
    cResult[14] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [tmp4.tile, style];
  cResult[3] = style;
  cResult[4] = tmp4.tile;
  cResult[5] = items1;
  tmp8 = items1;
}) : (function UserProfileEditableTileBase(arg0) {
  ({ onPress, accessibilityLabel, accessibilityValue, children, style } = arg0);
  const tmp = closure_5();
  const obj = { onPress, accessibilityRole: "button", accessibilityLabel, accessibilityValue: { text: accessibilityValue }, accessibilityHint: null, style: null, children: null };
  const intl = util.intl;
  obj.accessibilityHint = intl.string(util.t["4lAcxv"]);
  const items = [tmp.tile, style];
  obj.style = items;
  const items1 = [children, React3(View, { style: tmp.borderOverlay, pointerEvents: "none" })];
  obj.children = items1;
  return React4(Pressables.PressableHighlight, obj);
});