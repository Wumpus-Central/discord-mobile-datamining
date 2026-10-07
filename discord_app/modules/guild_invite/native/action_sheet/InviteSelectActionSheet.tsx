// discord_app/modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = onChange(576).c(15);
      ({ title, options, value, onChange } = arg0);
      const tmp4 = closure_4();
      if (cResult[0] !== onChange) {
        const fn = function l(arg0) {
          onChange(arg0);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        cResult[0] = onChange;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== title) {
        const obj2 = { title };
        const tmp8 = jsx(onChange(6651).BottomSheetTitleHeader, { title });
        cResult[2] = title;
        cResult[3] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== options) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function _(value) {
            return jsx(
              onChange(dependencyMap[8]).TableRadioRow,
              { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel },
              "" + value.value,
            );
          };
          cResult[6] = fn2;
          let tmp11 = fn2;
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
            const tmp19 = jsx(onChange(6652).BottomSheet, {
              contentStyles: tmp4.content,
              header: tmp6,
              children: tmp14,
            });
            cResult[11] = tmp4.content;
            cResult[12] = tmp6;
            cResult[13] = tmp14;
            cResult[14] = tmp19;
            tmp17 = tmp19;
          }
        }
        const obj4 = { value, onChange: tmp5, hasIcons: false, children: cResult[5] };
        const tmp16 = jsx(onChange(6079).TableRadioGroup, {
          value,
          onChange: tmp5,
          hasIcons: false,
          children: cResult[5],
        });
        cResult[7] = tmp5;
        cResult[8] = cResult[5];
        cResult[9] = value;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      }
      const obj = onChange(576);
    }
  : (arg0) => {
      ({ options, onChange: require } = arg0);
      ({ title, value } = arg0);
      const obj = {
        contentStyles: closure_4().content,
        header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }),
        children: null,
      };
      const tmp = closure_4();
      obj.children = jsx(TableRadioGroup.TableRadioGroup, {
        value,
        onChange(arg0) {
          require(arg0);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
        hasIcons: false,
        children: options.map((value) =>
          jsx(
            TableRadioRow.TableRadioRow,
            { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel },
            "" + value.value,
          ),
        ),
      });
      return jsx(Sheet_BottomSheet.BottomSheet, {
        contentStyles: closure_4().content,
        header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }),
        children: null,
      });
    };
