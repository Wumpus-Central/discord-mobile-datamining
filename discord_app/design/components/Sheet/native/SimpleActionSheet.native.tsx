// discord_app/design/components/Sheet/native/SimpleActionSheet.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import RedesignBottomSheetTitleHeaderBase from "BottomSheetTitleHeader.native.tsx";
import ActionSheet from "ActionSheet.native.tsx";
import ActionSheetCloseButton from "ActionSheetCloseButton.native.tsx";
import ActionSheetRowIcon from "ActionSheetRow.native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
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
    obj2 = {
      hasIcons: global.hasIcons,
      children: options.map((item, index) => {
            ({ icon, IconComponent, onPress: closure_0 } = item);
            ({ label, isDestructive } = item);
            if (null != icon) {
              let obj = { source: null, IconComponent: null };
              obj[0] = icon;
              obj[1] = IconComponent;
              const tmp = closure_1_2(ActionSheetRowIcon.ActionSheetRow.Icon, obj);
            }
            obj = { icon: tmp, variant: null, label: null, onPress: null };
            let str = "default";
            if (isDestructive) {
              str = "danger";
            }
            obj[1] = str;
            obj[2] = label;
            obj[3] = function onPress() {
              closure_1_0();
              callback();
            };
            return closure_1_2(ActionSheetRowIcon.ActionSheetRow, obj, index);
          })
    };
    items[1] = jsx(require("ActionSheetRowIcon").ActionSheetRow.Group, obj2);
    obj1[0] = items;
    return tmp(require("ActionSheet").ActionSheet, obj1);
  }
}
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("obj132").fileFinishedImporting("design/components/Sheet/native/SimpleActionSheet.native.tsx");

export default SimpleActionSheet;
export { SimpleActionSheet };