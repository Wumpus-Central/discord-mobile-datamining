// === Module 13256: MenuGroup ===

// Module 13256 (MenuGroup)
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c3;
let closure_1;
let obj1;
let c0 = importAllResult;
({ StyleSheet, View: closure_1 } = get_ActivityIndicator);
({ jsx: obj1, jsxs: c3 } = jsxProd);
let obj = { divider: null };
obj = { marginLeft: 0, height: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  let children;
  let style;
  ({ style, children } = arg0);
  let obj = { style, children: null };
  let tmp4 = null === arg1;
  if (tmp4) {
    obj = { style: null };
    obj[0] = tmp.divider;
    tmp4 = callback(tmp3, obj);
  }
  const items = [tmp4, ];
  const Children = arg1.Children;
  items[1] = Children.map(children, (icon) => {
    let cloneElementResult = icon;
    if (0 === arg1) {
      let obj = validElement;
      cloneElementResult = icon;
      if (validElement.isValidElement(icon)) {
        obj = { ref: null };
        obj[0] = validElement;
        cloneElementResult = obj.cloneElement(icon, obj);
      }
    }
    return cloneElementResult;
  });
  obj[1] = items;
  return closure_3(closure_1, obj);
});
const result = require("jsxProd").fileFinishedImporting("design/components/Menu/native/MenuGroup.tsx");

export const MenuGroup = forwardRefResult;