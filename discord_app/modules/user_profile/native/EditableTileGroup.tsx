// === Module 14910: EditableTileGroup ===

// Module 14910 (EditableTileGroup)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9035 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { gap: nativeDefault.space.PX_8 }, labelRow: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileGroup.tsx");

export const EditableTileGroup = ReactCompilerGating.isReactCompilerEnabled() ? (function EditableTileGroup(arg0) {
  const cResult = c.c(12);
  ({ heading, showNitroIcon, children } = arg0);
  const tmp5 = closure_6();
  if (cResult[0] !== heading) {
    const obj2 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-strong", children: heading };
    const tmp8 = React4(Text_Text.Text, obj2);
    cResult[0] = heading;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== (undefined !== showNitroIcon && showNitroIcon)) {
    let tmp10 = tmp4;
    if (tmp4) {
      const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_STRONG, accessibilityLabel: null };
      const intl = util.intl;
      obj3.accessibilityLabel = intl.string(util.t["5AFxuK"]);
      tmp10 = React4(NitroWheelIcon.NitroWheelIcon, obj3);
    }
    cResult[2] = tmp4;
    cResult[3] = tmp10;
    let tmp9 = tmp10;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp5.labelRow) {
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp9) {
        let tmp13 = cResult[7];
      }
      if (cResult[8] === children) {
        if (cResult[9] === tmp5.container) {
          if (cResult[10] === tmp13) {
            let tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
      const obj4 = { style: tmp5.container, children: null };
      const items = [tmp13, children];
      obj4.children = items;
      const tmp18 = hasOwnProperty(View, obj4);
      cResult[8] = children;
      cResult[9] = tmp5.container;
      cResult[10] = tmp13;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
  }
  const obj5 = { style: tmp5.labelRow, children: null };
  const items1 = [tmp6, tmp9];
  obj5.children = items1;
  const tmp14 = hasOwnProperty(View, obj5);
  cResult[4] = tmp5.labelRow;
  cResult[5] = tmp6;
  cResult[6] = tmp9;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function EditableTileGroup(children) {
  let flag = children.showNitroIcon;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.labelRow, children: null };
  const items = [React4(Text_Text.Text, { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-strong", children: children.heading }), ];
  if (flag) {
    const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_STRONG, accessibilityLabel: null };
    const intl = util.intl;
    obj3.accessibilityLabel = intl.string(util.t["5AFxuK"]);
    flag = React4(NitroWheelIcon.NitroWheelIcon, obj3);
  }
  items[1] = flag;
  obj2.children = items;
  const items1 = [hasOwnProperty(View, obj2), children.children];
  obj.children = items1;
  return hasOwnProperty(View, obj);
});