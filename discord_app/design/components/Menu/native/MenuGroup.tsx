// discord_app/design/components/Menu/native/MenuGroup.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_1 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const createStyles = fn(4560);
let obj = { divider: null };
obj = {
  marginLeft: 0,
  height: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: -1 * StyleSheet.hairlineWidth,
};
obj.divider = obj;
let closure_4 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Menu/native/MenuGroup.tsx");

export const MenuGroup = noop.forwardRef((arg0, ref) => {
  noop = ref;
  ({ style, children } = arg0);
  let obj = { style, children: null };
  let tmp4 = null === ref;
  if (tmp4) {
    obj = { style: tmp.divider };
    tmp4 = closure_2(tmp3, obj);
  }
  const items = [tmp4];
  const Children = noop.Children;
  items[1] = Children.map(children, (icon, arg1) => {
    let cloneElementResult = icon;
    if (0 === arg1) {
      let obj = noop;
      cloneElementResult = icon;
      if (noop.isValidElement(icon)) {
        obj = { ref };
        cloneElementResult = obj.cloneElement(icon, obj);
      }
    }
    return cloneElementResult;
  });
  obj.children = items;
  return closure_3(closure_1, obj);
});
