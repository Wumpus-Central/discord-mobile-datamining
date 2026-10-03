// discord_app/modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      const cResult = onPress(state[7]).c(12);
      ({ element, onPress } = state);
      state = state.state;
      const tmp4 = closure_5();
      if (null != element) {
        if ("checkbox" === element.type) {
          const data = element.data;
          if (cResult[0] === data) {
            if (cResult[1] === onPress) {
              if (cResult[2] === state) {
                if (cResult[7] !== cResult[3]) {
                  const obj2 = { hasIcons: false, children: tmp5 };
                  const tmp11 = jsx(onPress(state[9]).TableRowGroup, { hasIcons: false, children: tmp5 });
                  cResult[7] = tmp5;
                  cResult[8] = tmp11;
                  let tmp9 = tmp11;
                } else {
                  tmp9 = cResult[8];
                }
                if (cResult[9] === tmp4.container) {
                  if (cResult[10] === tmp9) {
                    let tmp12 = cResult[11];
                  }
                  return tmp12;
                }
                const obj3 = { style: tmp16, children: tmp9 };
                const tmp15 = <View style={tmp16}>{tmp9}</View>;
                cResult[9] = tmp4.container;
                cResult[10] = tmp9;
                cResult[11] = tmp15;
                tmp12 = tmp15;
              }
            }
          }
          if (cResult[4] === onPress) {
            if (cResult[5] === state) {
              let tmp6 = cResult[6];
            }
            const mapped = data.map(tmp6);
            cResult[0] = data;
            cResult[1] = onPress;
            cResult[2] = state;
            cResult[3] = mapped;
          }
          const fn = function v(arg0) {
            const tmp = _slicedToArray(arg0, 3);
            const first = tmp[0];
            closure_1 = tmp3;
            return jsx(
              onPress(state[8]).TableCheckboxRow,
              {
                label: tmp[1],
                subLabel: tmp[2],
                onPress() {
                  return onPress(first, closure_1);
                },
                checked: first in closure_1,
              },
              first,
            );
          };
          cResult[4] = onPress;
          cResult[5] = state;
          cResult[6] = fn;
          tmp6 = fn;
        }
      }
      return null;
    }
  : (arg0) => {
      ({ element, onPress: require, state: dependencyMap } = arg0);
      if (null != element) {
        if ("checkbox" === element.type) {
          const data = element.data;
          const obj = { style: tmp.container, children: null };
          const obj2 = {
            hasIcons: false,
            children: data.map((item) => {
              [tmp, tmp2, tmp3] = item;
              return jsx(
                TableCheckboxRow.TableCheckboxRow,
                {
                  label: tmp2,
                  subLabel: tmp3,
                  onPress() {
                    return require(closure_1_0, closure_1_1);
                  },
                  checked: tmp in closure_1,
                },
                tmp,
              );
            }),
          };
          obj.children = jsx(TableRowGroup.TableRowGroup, {
            hasIcons: false,
            children: data.map((item) => {
              [tmp, tmp2, tmp3] = item;
              return jsx(
                TableCheckboxRow.TableCheckboxRow,
                {
                  label: tmp2,
                  subLabel: tmp3,
                  onPress() {
                    return require(closure_1_0, closure_1_1);
                  },
                  checked: tmp in closure_1,
                },
                tmp,
              );
            }),
          });
          return <View style={tmp.container}>{null}</View>;
        }
      }
      return null;
    };
