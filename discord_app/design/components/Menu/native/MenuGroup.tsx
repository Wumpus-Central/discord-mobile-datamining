// === Module 14048: MenuGroup ===

// Module 14048 (MenuGroup)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_1 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { divider: { marginLeft: 0, height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Menu/native/MenuGroup.tsx");

export const MenuGroup = function MenuGroup(ref) {
  ({ style, children } = ref.ref);
  const obj = { style, children: null };
  let tmp4 = null == ref;
  if (tmp4) {
    let obj2 = { style: tmp.divider };
    tmp4 = closure_2(closure_1, obj2);
  }
  const items = [tmp4, ];
  const Children = ref.Children;
  items[1] = Children.map(children, (label, arg1) => {
    let cloneElementResult = label;
    if (0 === arg1) {
      cloneElementResult = label;
      if (noop.isValidElement(label)) {
        const obj2 = { ref };
        cloneElementResult = noop.cloneElement(label, obj2);
      }
    }
    return cloneElementResult;
  });
  obj.children = items;
  return closure_3(closure_1, obj);
};