// discord_app/modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import TableCheckboxRow2 from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_0, type;

let jsx = Fragment.jsx;
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (type) => {
        let arr;
        let closure_3;
        let executeStateUpdate;
        let maxValues;
        let options;
        let state;
        let obj = type(maxValues[3]);
        const cResult = obj.c(25);
        const tmp = type;
        type = type.type;
        ({ options, maxValues } = type);
        if (cResult[0] !== options) {
          let tmp5;
          let tmp6;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function n(arg0) {
              return arg0.default;
            };
            cResult[2] = fn;
            tmp5 = fn;
          } else {
            tmp5 = cResult[2];
          }
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function u(value) {
              return value.value;
            };
            cResult[3] = fn2;
            tmp6 = fn2;
          } else {
            tmp6 = cResult[3];
          }
          let found = options.filter(tmp5);
          const mapped = found.map(tmp6);
          cResult[0] = options;
          cResult[1] = mapped;
          arr = mapped;
        } else {
          arr = cResult[1];
        }
        if (cResult[4] === arr) {
          let tmp8;
          if (cResult[5] === type) {
            tmp8 = cResult[6];
          }
          const tmpResult = tmp(maxValues[4]);
          const componentState = tmpResult.useComponentState(type, tmp8);
          ({ state, executeStateUpdate } = componentState);
          if (cResult[7] === state) {
            let tmp11;
            if (cResult[8] === type) {
              tmp11 = cResult[9];
            }
            jsx = tmp11;
            if (cResult[10] === executeStateUpdate) {
              if (cResult[11] === type) {
                let tmp15;
                if (cResult[12] === tmp11) {
                  tmp15 = cResult[13];
                }
                let closure_4 = tmp15;
                if (cResult[14] === tmp15) {
                  if (cResult[15] === maxValues) {
                    if (cResult[16] === options) {
                      let tmp18;
                      if (cResult[23] !== tmp16) {
                        class C {
                          constructor(arg0) {
                            closure_0 = type;
                            return (arg0) => {
                              let found;
                              const tmp2 = arg0;
                              if (tmp2) {
                                const items = [];
                                items[HermesBuiltin.arraySpread(items, closure_3, 0)] = closure_0;
                                found = items;
                              } else {
                                found = closure_3.filter(function () {
                                  /* body not rendered: F153762 */
                                });
                              }
                              const obj = { type, values: found };
                              executeStateUpdate(obj);
                            };
                          }
                        }
                        class R {
                          constructor(label) {
                            const hasItem = closure_3.includes(label.value);
                            const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
                            return (
                              <TableCheckboxRow
                                key={label.value}
                                label={label.label}
                                subLabel={label.description}
                                checked={hasItem}
                                onPress={closure_4(label.value)}
                                disabled={closure_3.length >= maxValues && !hasItem}
                              />
                            );
                          }
                        }
                        cResult[23] = tmp16;
                        cResult[24] = tmp20;
                        tmp18 = tmp20;
                      } else {
                        tmp18 = cResult[24];
                      }
                      return tmp18;
                    }
                  }
                }
                class C {
                  constructor(arg0) {
                    closure_0 = type;
                    return (arg0) => {
                      let found;
                      const tmp2 = arg0;
                      if (tmp2) {
                        const items = [];
                        items[HermesBuiltin.arraySpread(items, closure_3, 0)] = closure_0;
                        found = items;
                      } else {
                        found = closure_3.filter(function () {
                          /* body not rendered: F153762 */
                        });
                      }
                      const obj = { type, values: found };
                      executeStateUpdate(obj);
                    };
                  }
                }
                class R {
                  constructor(label) {
                    const hasItem = closure_3.includes(label.value);
                    const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
                    return (
                      <TableCheckboxRow
                        key={label.value}
                        label={label.label}
                        subLabel={label.description}
                        checked={hasItem}
                        onPress={closure_4(label.value)}
                        disabled={closure_3.length >= maxValues && !hasItem}
                      />
                    );
                  }
                }
                cResult[19] = tmp15;
                cResult[20] = maxValues;
                cResult[21] = tmp11;
                cResult[22] = R;
              }
            }
            class C {
              constructor(arg0) {
                closure_0 = type;
                return (arg0) => {
                  let found;
                  const tmp2 = arg0;
                  if (tmp2) {
                    const items = [];
                    items[HermesBuiltin.arraySpread(items, closure_3, 0)] = closure_0;
                    found = items;
                  } else {
                    found = closure_3.filter(function () {
                      /* body not rendered: F153762 */
                    });
                  }
                  const obj = { type, values: found };
                  executeStateUpdate(obj);
                };
              }
            }
            cResult[10] = executeStateUpdate;
            cResult[11] = type;
            cResult[12] = tmp11;
            cResult[13] = C;
            tmp15 = C;
          }
          let type1;
          if (state != null) {
            type1 = state.type;
          }
          const tmp14 = type1 === type ? state.values : [];
          cResult[7] = state;
          cResult[8] = type;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        }
        if (arr.length > 0) {
          class C {
            constructor(arg0) {
              closure_0 = type;
              return (arg0) => {
                let found;
                const tmp2 = arg0;
                if (tmp2) {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, closure_3, 0)] = closure_0;
                  found = items;
                } else {
                  found = closure_3.filter(function () {
                    /* body not rendered: F153762 */
                  });
                }
                const obj = { type, values: found };
                executeStateUpdate(obj);
              };
            }
          }
        }
        cResult[4] = arr;
        cResult[5] = type;
        cResult[6] = undefined;
        tmp8 = tmp9;
      }
    : (type) => {
        type = type.type;
        const options = type.options;
        const maxValues = type.maxValues;
        let obj = maxValues;
        let items = [options];
        const memo = maxValues.useMemo(() => {
          const found = options.filter((item) => item.default);
          return found.map((value) => value.value);
        }, items);
        let tmp2 = options;
        let tmp3 = type(options[4]);
        let tmp4;
        const useComponentState = tmp3.useComponentState;
        const tmp = type;
        if (memo.length > 0) {
          tmp4 = { type, values: memo };
          const obj2 = { type, values: memo };
        }
        const componentState = useComponentState(type, tmp4);
        const state = componentState.state;
        const executeStateUpdate = componentState.executeStateUpdate;
        const items1 = [state, type];
        let closure_5 = obj.useMemo(() => {
          type = undefined;
          if (state != null) {
            type = state.type;
          }
          return type === type ? state.values : [];
        }, items1);
        const obj3 = {
          hasIcons: false,
          children: options.map((label) => {
            let tmp3;
            let value;
            const hasItem = closure_5.includes(label.value);
            let obj = {
              label: label.label,
              subLabel: label.description,
              checked: hasItem,
              onPress: (arg0) => {
                let found;
                const tmp2 = arg0;
                if (tmp2) {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, closure_5, 0)] = type;
                  found = items;
                } else {
                  found = closure_5.filter((item) => item !== closure_1_0);
                }
                const obj = { type, values: found };
                executeStateUpdate(obj);
              },
              disabled: tmp3,
            };
            type = label.value;
            tmp3 = closure_5.length >= maxValues;
            const TableCheckboxRow = type(options[5]).TableCheckboxRow;
            if (tmp3) {
              tmp3 = !hasItem;
            }
            return state(TableCheckboxRow, obj, label.value);
          }),
        };
        const TableRowGroup = tmp(tmp2[6]).TableRowGroup;
        return state(TableRowGroup, obj3);
      },
);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx",
);

export default memoResult;
