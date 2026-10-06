// discord_app/modules/custom_status/native/ClearAfterOptionsActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import TableRadioRow2 from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup2 from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import BottomSheetTitleHeader2 from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import Constants from "../Constants.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const ClearAfterOptions = Constants.ClearAfterOptions;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, buttonWrapper: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let initialValue;
      let intl;
      let items;
      let onChange;
      let obj = onChange(576);
      const cResult = obj.c(18);
      ({ initialValue, onChange } = arg0);
      const tmp4 = closure_9();
      const first = _slicedToArray(react.useState(initialValue), 2)[0];
      _slicedToArray(react.useState(initialValue), 2);
      if (cResult[0] === onChange) {
        let tmp8;
        let tmp10;
        let tmp13;
        let tmp15;
        let tmp18;
        let tmp21;
        let tmp23;
        if (cResult[1] === first) {
          tmp8 = cResult[2];
        }
        const _Symbol = Symbol;
        const content = tmp4.content;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { title: intl.string(onChange(1126).t["5XnRQ+"]) };
          const BottomSheetTitleHeader = onChange(6651).BottomSheetTitleHeader;
          intl = onChange(1126).intl;
          const tmp12 = closure_7(BottomSheetTitleHeader, obj2);
          cResult[3] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = onChange(1126).intl;
          const stringResult = intl2.string(onChange(1126).t.E45wvP);
          cResult[4] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[4];
        }
        const _Symbol3 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const mapped = ClearAfterOptions.map((value) => {
            const obj = { value, label: first(dependencyMap[13])(value) };
            const TableRadioRow = onChange(dependencyMap[12]).TableRadioRow;
            return closure_1_7(TableRadioRow, obj, value);
          });
          cResult[5] = mapped;
          tmp15 = mapped;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] !== initialValue) {
          const obj3 = { onChange: tmp7, title: tmp13, defaultValue: initialValue, hasIcons: false, children: tmp15 };
          const tmp20 = closure_7(onChange(6079).TableRadioGroup, obj3);
          cResult[6] = initialValue;
          cResult[7] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[7];
        }
        const _Symbol4 = Symbol;
        const buttonWrapper = tmp4.buttonWrapper;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = onChange(1126).intl;
          const stringResult1 = intl3.string(onChange(1126).t.TyCVIq);
          cResult[8] = stringResult1;
          tmp21 = stringResult1;
        } else {
          tmp21 = cResult[8];
        }
        if (cResult[9] !== tmp8) {
          const obj4 = { onPress: tmp8, text: tmp21 };
          const tmp25 = closure_7(onChange(5601).Button, obj4);
          cResult[9] = tmp8;
          cResult[10] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[10];
        }
        if (cResult[11] === tmp4.buttonWrapper) {
          let tmp26;
          if (cResult[12] === tmp23) {
            tmp26 = cResult[13];
          }
          if (cResult[14] === tmp4.content) {
            if (cResult[15] === tmp26) {
              let tmp30;
              if (cResult[16] === tmp18) {
                tmp30 = cResult[17];
              }
              return tmp30;
            }
          }
          const obj5 = { contentStyles: content, header: tmp10, children: items };
          items = [tmp18, tmp26];
          const tmp32 = closure_8(onChange(6652).BottomSheet, obj5);
          cResult[14] = tmp4.content;
          cResult[15] = tmp26;
          cResult[16] = tmp18;
          cResult[17] = tmp32;
          tmp30 = tmp32;
        }
        const obj6 = { style: buttonWrapper, children: tmp23 };
        const tmp29 = closure_7(View, obj6);
        cResult[11] = tmp4.buttonWrapper;
        cResult[12] = tmp23;
        cResult[13] = tmp29;
        tmp26 = tmp29;
      }
      const fn = function p() {
        onChange(first);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      };
      cResult[0] = onChange;
      cResult[1] = first;
      cResult[2] = fn;
      tmp8 = fn;
    }
  : (arg0) => {
      let BottomSheetTitleHeader;
      let Button;
      let closure_1;
      let initialValue;
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj2;
      let obj5;
      let tmp3;
      ({ initialValue, onChange: require } = arg0);
      closure_1 = undefined;
      const tmp = closure_9();
      [closure_1, tmp3] = react.useState(initialValue);
      let obj = { contentStyles: tmp.content, header: closure_7(BottomSheetTitleHeader, obj2), children: items };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj2 = { title: intl.string(intl4.t["5XnRQ+"]) };
      BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl4.intl;
      const obj3 = {
        onChange: tmp3,
        title: intl2.string(intl4.t.E45wvP),
        defaultValue: initialValue,
        hasIcons: false,
        children: ClearAfterOptions.map((value) => {
          const obj = { value, label: closure_1(dependencyMap[13])(value) };
          const TableRadioRow = TableRadioRow2.TableRadioRow;
          return closure_1_7(TableRadioRow, obj, value);
        }),
      };
      const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
      intl2 = intl4.intl;
      items = [closure_7(TableRadioGroup, obj3)];
      const obj4 = { style: tmp.buttonWrapper, children: closure_7(Button, obj5) };
      obj5 = {
        onPress() {
          require(closure_1);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
        text: intl3.string(intl4.t.TyCVIq),
      };
      Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items[1] = closure_7(View, obj4);
      return closure_8(BottomSheet, obj);
    };
const result = size.fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default tmp4;
