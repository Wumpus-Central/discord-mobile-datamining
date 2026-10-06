// === Module 6702: SimpleActionSheet ===

// Module 6702 (SimpleActionSheet)
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6651 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 6703 */;
import ActionSheetRow2 from "ActionSheetRow" /* 6704 */;
import ActionSheet2 from "ActionSheet" /* 6708 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let hideActionSheet;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((hideActionSheet) => {
  let hasIcons;
  let header;
  let items;
  let options;
  let tmp10;
  let tmp4;
  let tmp7Result;
  let tmp = hideActionSheet;
  let obj = hideActionSheet(576);
  const cResult = obj.c(13);
  hideActionSheet = hideActionSheet.hideActionSheet;
  ({ header, options, hasIcons } = hideActionSheet);
  if (cResult[0] !== header) {
    let tmp7Result2 = null != header;
    if (tmp7Result2) {
      const obj3 = { leading: null, title: null, subtitle: null, trailing: tmp7Result };
      ({ icon: obj2.leading, title: obj2.title, subtitle: obj2.subtitle } = header);
      tmp7Result = null;
      const BottomSheetTitleHeader = tmp(6651).BottomSheetTitleHeader;
      if (null != header.onClose) {
        const obj4 = { onPress: header.onClose };
        tmp7Result = closure_2(tmp(6703).ActionSheetCloseButton, obj4);
      }
      tmp7Result2 = closure_2(BottomSheetTitleHeader, obj3);
    }
    cResult[0] = header;
    cResult[1] = tmp7Result2;
    tmp4 = tmp7Result2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === hideActionSheet) {
    let tmp9;
    if (cResult[3] === options) {
      tmp9 = cResult[4];
    }
    if (cResult[7] === hasIcons) {
      let tmp12;
      if (cResult[8] === tmp9) {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp4) {
        let tmp15;
        if (cResult[11] === tmp12) {
          tmp15 = cResult[12];
        }
        return tmp15;
      }
      const obj5 = { children: items };
      items = [tmp4, tmp12];
      const tmp17 = closure_3(tmp(6708).ActionSheet, obj5);
      cResult[10] = tmp4;
      cResult[11] = tmp12;
      cResult[12] = tmp17;
      tmp15 = tmp17;
    }
    const obj9 = { hasIcons, children: tmp9 };
    const tmp14 = closure_2(tmp(6704).ActionSheetRow.Group, obj9);
    cResult[7] = hasIcons;
    cResult[8] = tmp9;
    cResult[9] = tmp14;
    tmp12 = tmp14;
  }
  if (cResult[5] !== hideActionSheet) {
    const fn = function c(arg0, arg1) {
      let IconComponent;
      let icon;
      let isDestructive;
      let label;
      let str;
      let tmp;
      ({ icon, IconComponent, onPress: hideActionSheet } = arg0);
      ({ label, isDestructive } = arg0);
      if (null != icon) {
        const obj = { source: icon, IconComponent };
        tmp = closure_1_2(hideActionSheet(dependencyMap[6]).ActionSheetRow.Icon, obj);
      }
      const obj2 = {
        icon: tmp,
        variant: str,
        label,
        onPress() {
          hideActionSheet();
          hideActionSheet();
        }
      };
      str = "default";
      const ActionSheetRow = hideActionSheet(dependencyMap[6]).ActionSheetRow;
      if (isDestructive) {
        str = "danger";
      }
      return closure_1_2(ActionSheetRow, obj2, arg1);
    };
    cResult[5] = hideActionSheet;
    cResult[6] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[6];
  }
  const mapped = options.map(tmp10);
  cResult[2] = hideActionSheet;
  cResult[3] = options;
  cResult[4] = mapped;
  tmp9 = mapped;
}) : ((hasIcons) => {
  let header;
  let items;
  let options;
  let tmp5Result;
  ({ hideActionSheet: require, header, options } = hasIcons);
  hasIcons = hasIcons.hasIcons;
  let tmp5Result2 = null != header;
  const ActionSheet = ActionSheet2.ActionSheet;
  if (tmp5Result2) {
    let obj = { leading: null, title: null, subtitle: null, trailing: tmp5Result };
    ({ icon: obj.leading, title: obj.title, subtitle: obj.subtitle } = header);
    tmp5Result = null;
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    if (null != header.onClose) {
      let obj2 = { onPress: header.onClose };
      tmp5Result = closure_2(ActionSheetCloseButton.ActionSheetCloseButton, obj2);
    }
    tmp5Result2 = closure_2(BottomSheetTitleHeader, obj);
  }
  const obj3 = { children: items };
  items = [tmp5Result2, ];
  const obj4 = {
    hasIcons,
    children: options.map((item, index) => {
      let IconComponent;
      let closure_0;
      let icon;
      let isDestructive;
      let label;
      let str;
      let tmp;
      ({ icon, IconComponent, onPress: closure_0 } = item);
      ({ label, isDestructive } = item);
      if (null != icon) {
        const obj = { source: icon, IconComponent };
        tmp = closure_1_2(ActionSheetRow2.ActionSheetRow.Icon, obj);
      }
      const obj2 = {
        icon: tmp,
        variant: str,
        label,
        onPress() {
          require();
          closure_0();
        }
      };
      str = "default";
      const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
      if (isDestructive) {
        str = "danger";
      }
      return closure_1_2(ActionSheetRow, obj2, index);
    })
  };
  const Group = ActionSheetRow2.ActionSheetRow.Group;
  items[1] = closure_2(Group, obj4);
  return closure_3(ActionSheet, obj3);
});
const result = size.fileFinishedImporting("design/components/Sheet/native/SimpleActionSheet.native.tsx");

export default tmp4;
export const SimpleActionSheet = tmp4;