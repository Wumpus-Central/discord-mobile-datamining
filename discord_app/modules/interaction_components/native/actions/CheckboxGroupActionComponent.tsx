// === Module 18009: CheckboxGroupActionComponent ===

// Module 18009 (CheckboxGroupActionComponent)
import TableCheckboxRow from "TableCheckboxRow" /* 6183 */;
import noop from "module_19" /* 19 */;

require = fn;
let jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CheckboxGroupActionComponent(type) {
  const cResult = type(maxValues[3]).c(25);
  type = type.type;
  ({ options, maxValues } = type);
  if (cResult[0] !== options) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function n(arg0) {
        return arg0.default;
      };
      cResult[2] = fn;
      let found = fn;
    } else {
      found = cResult[2];
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function u(value) {
        return value.value;
      };
      cResult[3] = fn2;
      let tmp6 = fn2;
    } else {
      tmp6 = cResult[3];
    }
    found = options.filter(found);
    const mapped = found.map(tmp6);
    cResult[0] = options;
    cResult[1] = mapped;
  } else {
    if (cResult[4] === cResult[1]) {
      if (cResult[5] === type) {
        let tmp9 = cResult[6];
      }
      const componentState = tmp(tmp2[4]).useComponentState(type, tmp9);
      ({ state, executeStateUpdate } = componentState);
      if (cResult[7] === state) {
        if (cResult[8] === type) {
          jsx = tmp12;
          if (cResult[10] === executeStateUpdate) {
            if (cResult[11] === type) {
              if (cResult[12] === tmp12) {
                let tmp17 = cResult[13];
              }
              closure_4 = tmp17;
              if (cResult[14] === tmp17) {
                if (cResult[15] === maxValues) {
                  if (cResult[16] === options) {
                    if (cResult[17] === tmp12) {
                      if (cResult[23] !== cResult[18]) {
                        const obj2 = { hasIcons: false, children: tmp18 };
                        const tmp24 = jsx(tmp(tmp2[6]).TableRowGroup, { hasIcons: false, children: tmp18 });
                        class G {
                          constructor(arg0) {
                            hasItem = closure_3.includes(type.value);
                            tmp2 = jsx;
                            obj = { label: type.label, subLabel: type.description, checked: hasItem, onPress: closure_4(type.value), disabled: closure_3.length >= maxValues && !hasItem };
                            return tmp2(closure_0(closure_1[5]).TableCheckboxRow, obj, type.value);
                          }
                        }
                        cResult[23] = tmp18;
                        cResult[24] = tmp24;
                        let tmp22 = tmp24;
                      } else {
                        tmp22 = cResult[24];
                      }
                      return tmp22;
                    }
                  }
                }
              }
              if (cResult[19] === tmp17) {
                if (cResult[20] === maxValues) {
                  if (cResult[21] === tmp12) {
                    let tmp19 = cResult[22];
                  }
                  const mapped1 = options.map(tmp19);
                  cResult[14] = tmp17;
                  class G {
                    constructor(arg0) {
                      hasItem = closure_3.includes(type.value);
                      tmp2 = jsx;
                      obj = { label: type.label, subLabel: type.description, checked: hasItem, onPress: closure_4(type.value), disabled: closure_3.length >= maxValues && !hasItem };
                      return tmp2(closure_0(closure_1[5]).TableCheckboxRow, obj, type.value);
                    }
                  }
                  cResult[15] = maxValues;
                  cResult[16] = options;
                  cResult[17] = tmp12;
                  cResult[18] = mapped1;
                }
              }
              class G {
                constructor(arg0) {
                  hasItem = closure_3.includes(type.value);
                  tmp2 = jsx;
                  obj = { label: type.label, subLabel: type.description, checked: hasItem, onPress: closure_4(type.value), disabled: closure_3.length >= maxValues && !hasItem };
                  return tmp2(closure_0(closure_1[5]).TableCheckboxRow, obj, type.value);
                }
              }
              cResult[19] = tmp17;
              cResult[20] = maxValues;
              cResult[21] = tmp12;
              cResult[22] = G;
              tmp19 = G;
            }
          }
          function getOnPress(arg0) {
            closure_0 = arg0;
            return (arg0) => {
              if (arg0) {
                const items = [];
                items[HermesBuiltin.arraySpread(closure_3, 0)] = closure_0;
                let found = items;
              } else {
                found = closure_3.filter((item) => item !== closure_1_0);
              }
              executeStateUpdate({ type, values: found });
              const obj = { type, values: found };
            };
          }
          cResult[10] = executeStateUpdate;
          cResult[11] = type;
          cResult[12] = cResult[9];
          cResult[13] = getOnPress;
          tmp17 = getOnPress;
        }
      }
      let type1;
      if (state != null) {
        type1 = state.type;
      }
      const tmp15 = type1 === type ? state.values : [];
      cResult[7] = state;
      cResult[8] = type;
      cResult[9] = tmp15;
      const tmpResult = tmp(tmp2[4]);
    }
    cResult[4] = cResult[1];
    cResult[5] = type;
    cResult[6] = undefined;
    tmp9 = tmp10;
  }
}) : (function CheckboxGroupActionComponent(type) {
  type = type.type;
  options = type.options;
  const maxValues = type.maxValues;
  let items = [options];
  const memo = maxValues.useMemo(() => {
    const found = options.filter((item) => item.default);
    return found.map((value) => value.value);
  }, items);
  let tmp3;
  if (memo.length > 0) {
    const obj3 = { type, values: memo };
    tmp3 = obj3;
  }
  const componentState = type(options[4]).useComponentState(type, tmp3);
  state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  closure_5 = maxValues.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = state.type;
    }
    return type === type ? state.values : [];
  }, items1);
  const obj2 = type(options[4]);
  const tmp = type;
  const tmp2 = options;
  return state(tmp(tmp2[6]).TableRowGroup, {
    hasIcons: false,
    children: options.map((label) => {
      const hasItem = closure_5.includes(label.value);
      let obj = {
        label: label.label,
        subLabel: label.description,
        checked: hasItem,
        onPress: (arg0) => {
          if (arg0) {
            const items = [];
            items[HermesBuiltin.arraySpread(closure_5, 0)] = value;
            let found = items;
          } else {
            found = closure_5.filter((item) => item !== closure_1_0);
          }
          executeStateUpdate({ type, values: found });
          const obj = { type, values: found };
        },
        disabled: null
      };
      type = label.value;
      let tmp3 = closure_5.length >= maxValues;
      if (tmp3) {
        tmp3 = !hasItem;
      }
      obj.disabled = tmp3;
      return state(type(options[5]).TableCheckboxRow, obj, label.value);
    })
  });
}));