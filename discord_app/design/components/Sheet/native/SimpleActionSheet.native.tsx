// === Module 7197: SimpleActionSheet ===

// Module 7197 (SimpleActionSheet)
import ActionSheet from "ActionSheet" /* 7198 */;
import ActionSheetRow from "ActionSheetRow" /* 7200 */;
import noop from "module_19" /* 19 */;

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
      ({ icon: obj.leading, title: obj.title, subtitle: obj.subtitle } = header);
      tmp5Result = null;
      if (null != header.onClose) {
        obj = { onPress: null };
        obj.onPress = header.onClose;
        tmp5Result = tmp5(tmp2(tmp3[4]).ActionSheetCloseButton, obj);
      }
      obj.trailing = tmp5Result;
      tmp5Result1 = tmp5(tmp2(tmp3[3]).BottomSheetTitleHeader, obj);
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
              let obj = { source: icon, IconComponent };
              const tmp = closure_1_2(ActionSheetRow.ActionSheetRow.Icon, obj);
            }
            obj = { icon: tmp, variant: null, label: null, onPress: null };
            let str = "default";
            if (isDestructive) {
              str = "danger";
            }
            obj.variant = str;
            obj.label = label;
            obj.onPress = function onPress() {
              require();
              closure_1_0();
            };
            return closure_1_2(ActionSheetRow.ActionSheetRow, obj, index);
          })
    };
    items[1] = jsx(tmp2(tmp3[5]).ActionSheetRow.Group, obj2);
    obj1.children = items;
    return tmp(hideActionSheet(closure_1[2]).ActionSheet, obj1);
  }
}
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/SimpleActionSheet.native.tsx");

export default SimpleActionSheet;
export { SimpleActionSheet };