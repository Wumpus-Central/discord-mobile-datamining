// === Module 18041: InviteSelectActionSheet ===

// Module 18041 (InviteSelectActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import TableRadioRow from "TableRadioRow" /* 6078 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6079 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let obj2;
const jsx = Fragment.jsx;
let obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onChange;
  let options;
  let title;
  let tmp5;
  let tmp6;
  let tmp9;
  let value;
  let obj = onChange(576);
  const cResult = obj.c(15);
  ({ title, options, value, onChange } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] !== onChange) {
    const fn = function l(arg0) {
      onChange(arg0);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const content = tmp4.content;
  if (cResult[2] !== title) {
    const tmp8 = jsx(onChange(6651).BottomSheetTitleHeader, { title });
    cResult[2] = title;
    cResult[3] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== options) {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function _(value) {
        return jsx(onChange(dependencyMap[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value);
      };
      cResult[6] = fn2;
      tmp11 = fn2;
    } else {
      tmp11 = cResult[6];
    }
    const mapped = options.map(tmp11);
    cResult[4] = options;
    cResult[5] = mapped;
    tmp9 = mapped;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[7] === tmp5) {
    if (cResult[8] === tmp9) {
      let tmp13;
      if (cResult[9] === value) {
        tmp13 = cResult[10];
      }
      if (cResult[11] === tmp4.content) {
        if (cResult[12] === tmp6) {
          let tmp15;
          if (cResult[13] === tmp13) {
            tmp15 = cResult[14];
          }
          return tmp15;
        }
      }
      const tmp17 = jsx(onChange(6652).BottomSheet, { contentStyles: content, header: tmp6, children: tmp13 });
      cResult[11] = tmp4.content;
      cResult[12] = tmp6;
      cResult[13] = tmp13;
      cResult[14] = tmp17;
      tmp15 = tmp17;
    }
  }
  const tmp14 = jsx(onChange(6079).TableRadioGroup, { value, onChange: tmp5, hasIcons: false, children: tmp9 });
  cResult[7] = tmp5;
  cResult[8] = tmp9;
  cResult[9] = value;
  cResult[10] = tmp14;
  tmp13 = tmp14;
}) : ((arg0) => {
  let options;
  let title;
  let value;
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  const tmp = closure_4();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  ({
    value,
    onChange(arg0) {
      require(arg0);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  return <BottomSheet contentStyles={tmp.content} header={null}>{null}</BottomSheet>;
});
const result = size.fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default tmp3;