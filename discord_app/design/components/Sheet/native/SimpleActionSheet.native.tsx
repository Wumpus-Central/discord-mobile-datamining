// discord_app/design/components/Sheet/native/SimpleActionSheet.native.tsx
import BottomSheetTitleHeader from "BottomSheetTitleHeader.native.tsx";
import ActionSheetCloseButton from "ActionSheetCloseButton.native.tsx";
import ActionSheetRow from "ActionSheetRow.native.tsx";
import ActionSheet from "ActionSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SimpleActionSheet(hideActionSheet) {
      const cResult = hideActionSheet(576).c(13);
      hideActionSheet = hideActionSheet.hideActionSheet;
      ({ header, options, hasIcons } = hideActionSheet);
      if (cResult[0] !== header) {
        let tmp7Result2 = null != header;
        if (tmp7Result2) {
          const obj3 = { leading: null, title: null, subtitle: null, trailing: null };
          ({ icon: obj2.leading, title: obj2.title, subtitle: obj2.subtitle } = header);
          let tmp7Result = null;
          if (null != header.onClose) {
            const obj4 = { onPress: header.onClose };
            tmp7Result = closure_2(tmp(6893).ActionSheetCloseButton, obj4);
          }
          obj3.trailing = tmp7Result;
          tmp7Result2 = closure_2(tmp(6838).BottomSheetTitleHeader, obj3);
        }
        cResult[0] = header;
        cResult[1] = tmp7Result2;
        let tmp4 = tmp7Result2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === hideActionSheet) {
        if (cResult[3] === options) {
          if (cResult[7] === hasIcons) {
            if (cResult[8] === tmp9) {
              let tmp12 = cResult[9];
            }
            if (cResult[10] === tmp4) {
              if (cResult[11] === tmp12) {
                let tmp15 = cResult[12];
              }
              return tmp15;
            }
            const obj5 = { children: null };
            const items = [tmp4, tmp12];
            obj5.children = items;
            const tmp17 = closure_3(tmp(6898).ActionSheet, obj5);
            cResult[10] = tmp4;
            cResult[11] = tmp12;
            cResult[12] = tmp17;
            tmp15 = tmp17;
          }
          const obj9 = { hasIcons, children: cResult[4] };
          const tmp14 = closure_2(tmp(6894).ActionSheetRow.Group, obj9);
          cResult[7] = hasIcons;
          cResult[8] = cResult[4];
          cResult[9] = tmp14;
          tmp12 = tmp14;
        }
      }
      if (cResult[5] !== hideActionSheet) {
        const fn = function c(arg0, arg1) {
          ({ icon, IconComponent, onPress: hideActionSheet } = arg0);
          ({ label, isDestructive } = arg0);
          if (null != icon) {
            const obj = { source: icon, IconComponent };
            const tmp = closure_1_2(hideActionSheet(6894).ActionSheetRow.Icon, obj);
          }
          const obj2 = { icon: tmp, variant: null, label: null, onPress: null };
          let str = "default";
          if (isDestructive) {
            str = "danger";
          }
          obj2.variant = str;
          obj2.label = label;
          obj2.onPress = function handlePress() {
            hideActionSheet();
            closure_1_0();
          };
          return closure_1_2(hideActionSheet(6894).ActionSheetRow, obj2, arg1);
        };
        cResult[5] = hideActionSheet;
        cResult[6] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[6];
      }
      const mapped = options.map(tmp10);
      cResult[2] = hideActionSheet;
      cResult[3] = options;
      cResult[4] = mapped;
      let obj = hideActionSheet(576);
    }
  : function SimpleActionSheet(hasIcons) {
      ({ hideActionSheet: require, header, options } = hasIcons);
      let tmp5Result2 = null != header;
      if (tmp5Result2) {
        let obj = { leading: null, title: null, subtitle: null, trailing: null };
        ({ icon: obj.leading, title: obj.title, subtitle: obj.subtitle } = header);
        let tmp5Result = null;
        if (null != header.onClose) {
          let obj2 = { onPress: header.onClose };
          tmp5Result = closure_2(ActionSheetCloseButton.ActionSheetCloseButton, obj2);
        }
        obj.trailing = tmp5Result;
        tmp5Result2 = closure_2(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
      }
      const obj3 = { children: null };
      const items = [
        tmp5Result2,
        closure_2(ActionSheetRow.ActionSheetRow.Group, {
          hasIcons: hasIcons.hasIcons,
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
            obj2.onPress = function handlePress() {
              require();
              closure_1_0();
            };
            return closure_1_2(ActionSheetRow.ActionSheetRow, obj2, index);
          }),
        }),
      ];
      obj3.children = items;
      return closure_3(ActionSheet.ActionSheet, obj3);
    };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/SimpleActionSheet.native.tsx");

export default tmp4;
export const SimpleActionSheet = tmp4;
