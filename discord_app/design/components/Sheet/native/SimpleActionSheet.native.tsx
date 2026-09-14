// discord_app/design/components/Sheet/native/SimpleActionSheet.native.tsx
import BottomSheetTitleHeader from "BottomSheetTitleHeader.native.tsx";
import ActionSheet from "ActionSheet.native.tsx";
import ActionSheetCloseButton from "ActionSheetCloseButton.native.tsx";
import ActionSheetRow from "ActionSheetRow.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
        obj1 = { onPress: null };
        obj1.onPress = header.onClose;
        tmp5Result = tmp5(tmp2(tmp3[4]).ActionSheetCloseButton, obj1);
      }
      obj.trailing = tmp5Result;
      tmp5Result1 = tmp5(tmp2(tmp3[3]).BottomSheetTitleHeader, obj);
    }
    obj5 = { children: null };
    items = [,];
    items[0] = tmp5Result1;
    obj6 = {
      hasIcons: global.hasIcons,
      children: options.map((item, index) => {
        ({ icon, IconComponent, onPress: closure_0 } = item);
        ({ label, isDestructive } = item);
        if (null != icon) {
          const obj = { source: icon, IconComponent };
          const tmp = closure_1_2(ActionSheetRow.ActionSheetRow.Icon, obj);
        }
        const obj2 = { icon: tmp, variant: null, label: null, onPress: null };
        let str = "default";
        if (isDestructive) {
          str = "danger";
        }
        obj2.variant = str;
        obj2.label = label;
        obj2.onPress = function onPress() {
          require();
          closure_1_0();
        };
        return closure_1_2(ActionSheetRow.ActionSheetRow, obj2, index);
      }),
    };
    items[1] = jsx(tmp2(tmp3[5]).ActionSheetRow.Group, obj6);
    obj5.children = items;
    return tmp(hideActionSheet(closure_1[2]).ActionSheet, obj5);
  }
}
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/SimpleActionSheet.native.tsx");

export default SimpleActionSheet;
export { SimpleActionSheet };
