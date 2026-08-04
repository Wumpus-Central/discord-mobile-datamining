// discord_app/design/components/Sheet/native/SimpleActionSheet.native.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
class SimpleActionSheet {
  constructor(arg0) {
    ({ hideActionSheet, header, options } = global);
    tmp2 = hideActionSheet;
    tmp3 = closure_1;
    tmp = jsxs;
    tmp5Result1 = null != header;
    if (tmp5Result1) {
      tmp5 = jsx;
      obj = { leading: null, title: null, subtitle: null, trailing: null };
      ({ icon: obj[0], title: obj[1], subtitle: obj[2] } = header);
      tmp5Result = null;
      if (null != header.onClose) {
        obj = { onPress: null };
        obj[0] = header.onClose;
        tmp5Result = tmp5(require("ActionSheetCloseButton").ActionSheetCloseButton, obj);
      }
      obj[3] = tmp5Result;
      tmp5Result1 = tmp5(require("RedesignBottomSheetTitleHeaderBase").BottomSheetTitleHeader, obj);
    }
    obj1 = { children: null };
    items = [, ];
    items[0] = tmp5Result1;
    obj2 = { hasIcons: global.hasIcons, children: null };
    obj2[1] = options.map((arg0, arg1) => {
      let IconComponent;
      let closure_0;
      let icon;
      let isDestructive;
      let label;
      ({ icon, IconComponent, onPress: closure_0 } = arg0);
      ({ label, isDestructive } = arg0);
      if (null != icon) {
        let obj = { source: null, IconComponent: null };
        obj[0] = icon;
        obj[1] = IconComponent;
        const tmp = outer1_2(outer1_0(outer1_1[5]).ActionSheetRow.Icon, obj);
      }
      obj = { icon: tmp, variant: null, label: null, onPress: null };
      let str = "default";
      if (isDestructive) {
        str = "danger";
      }
      obj[1] = str;
      obj[2] = label;
      obj[3] = function onPress() {
        outer1_0();
        callback();
      };
      return outer1_2(outer1_0(outer1_1[5]).ActionSheetRow, obj, arg1);
    });
    items[1] = jsx(require("ActionSheetRowIcon").ActionSheetRow.Group, obj2);
    obj1[0] = items;
    return tmp(require("ActionSheet").ActionSheet, obj1);
  }
}
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("ActionSheet").fileFinishedImporting("design/components/Sheet/native/SimpleActionSheet.native.tsx");

export default SimpleActionSheet;
export { SimpleActionSheet };