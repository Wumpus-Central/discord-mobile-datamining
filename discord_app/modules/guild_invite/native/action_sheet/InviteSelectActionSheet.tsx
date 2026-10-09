// === Module 18490: InviteSelectActionSheet ===

// Module 18490 (InviteSelectActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import TableRadioRow from "TableRadioRow" /* 6266 */;
import TableRadioGroup from "TableRadioGroup" /* 6267 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6835 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6836 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function InviteSelectActionSheet(arg0) {
  const cResult = onChange(576).c(15);
  ({ title, options, value, onChange } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] !== onChange) {
    function handleChange(arg0) {
      onChange(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    cResult[0] = onChange;
    cResult[1] = handleChange;
    let tmp5 = handleChange;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== title) {
    const obj2 = { title };
    const tmp8 = jsx(onChange(6835).BottomSheetTitleHeader, { title });
    cResult[2] = title;
    cResult[3] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== options) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function _(value) {
        return jsx(onChange(dependencyMap[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value);
      };
      cResult[6] = fn;
      let tmp11 = fn;
    } else {
      tmp11 = cResult[6];
    }
    const mapped = options.map(tmp11);
    cResult[4] = options;
    cResult[5] = mapped;
  } else {
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp9) {
        if (cResult[9] === value) {
          let tmp14 = cResult[10];
        }
        if (cResult[11] === tmp4.content) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp14) {
              let tmp17 = cResult[14];
            }
            return tmp17;
          }
        }
        const obj3 = { contentStyles: tmp4.content, header: tmp6, children: tmp14 };
        const tmp19 = jsx(onChange(6836).BottomSheet, { contentStyles: tmp4.content, header: tmp6, children: tmp14 });
        cResult[11] = tmp4.content;
        cResult[12] = tmp6;
        cResult[13] = tmp14;
        cResult[14] = tmp19;
        tmp17 = tmp19;
      }
    }
    const obj4 = { value, onChange: tmp5, hasIcons: false, children: cResult[5] };
    const tmp16 = jsx(onChange(6267).TableRadioGroup, { value, onChange: tmp5, hasIcons: false, children: cResult[5] });
    cResult[7] = tmp5;
    cResult[8] = cResult[5];
    cResult[9] = value;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const obj = onChange(576);
}) : (function InviteSelectActionSheet(arg0) {
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  const obj = { contentStyles: closure_4().content, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null };
  const tmp = closure_4();
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    value,
    onChange: function handleChange(arg0) {
      require(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
  return jsx(Sheet_BottomSheet.BottomSheet, { contentStyles: closure_4().content, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null });
});