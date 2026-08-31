// === Module 13741: MenuGroup ===

// Module 13741 (MenuGroup)
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

let c0 = importAllResult;
({ StyleSheet, View: closure_1 } = get_ActivityIndicator);
({ jsx: obj1, jsxs: c3 } = jsxProd);
let obj = { divider: null };
obj = { marginLeft: 0, height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
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
const result = require("set").fileFinishedImporting("design/components/Menu/native/MenuGroup.tsx");

export const MenuGroup = forwardRefResult;