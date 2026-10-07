// discord_app/modules/interaction_components/native/components/useSearchableSelectComponent.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/useSearchableSelectComponent.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (selectActionComponent) => {
      const cResult = selectActionComponent(576).c(29);
      selectActionComponent = selectActionComponent.selectActionComponent;
      ({ containerId, guildId, queryOptions, onSubmit } = selectActionComponent);
      let obj = selectActionComponent(576);
      const obj2 = noop;
      const tmp = selectActionComponent;
      const tmp4 = first1;
      const first = first1(noop.useState(""), 2)[0];
      if (cResult[0] === containerId) {
        if (cResult[1] === guildId) {
          if (cResult[2] === selectActionComponent) {
            let tmp8 = cResult[3];
          }
          dependencyMap = tmp8;
          if (cResult[4] !== tmp8) {
            const fn = function h() {
              return new Map(
                closure_2.map((value) => {
                  const items = [value.value, value];
                  return items;
                }),
              );
            };
            cResult[4] = tmp8;
            cResult[5] = fn;
            let tmp10 = fn;
          } else {
            tmp10 = cResult[5];
          }
          const tmp4Result = tmp4(obj2.useState(tmp10), 2);
          first1 = tmp4Result[0];
          noop = tmp4Result[1];
          if (cResult[6] === first) {
            if (cResult[7] === queryOptions) {
              let tmp12 = cResult[8];
            }
            closure_5 = tmp14;
            if (cResult[9] === onSubmit) {
              if (cResult[10] === selectActionComponent.type) {
                let tmp15 = cResult[11];
              }
              closure_6 = tmp15;
              if (cResult[12] === tmp14) {
                if (cResult[13] === selectActionComponent.maxValues) {
                  if (cResult[14] === first1) {
                    if (cResult[15] === tmp15) {
                      let tmp16 = cResult[16];
                    }
                    if (cResult[17] !== first1) {
                      let items = [];
                      HermesBuiltin.arraySpread(first1.values(), 0);
                      class Q {
                        constructor(arg0) {
                          return closure_3.has(selectActionComponent.value);
                        }
                      }
                      class A {
                        constructor(arg0) {
                          obj = { type: selectActionComponent.type, selectedOptions: null };
                          items = [...selectActionComponent.values()];
                          obj.selectedOptions = items;
                          tmp = onSubmit(obj);
                          obj2 = closure_1(closure_2[5]);
                          hideActionSheetResult = obj2.hideActionSheet();
                          return;
                        }
                      }
                      cResult[17] = first1;
                      cResult[18] = items;
                      cResult[19] = Q;
                      let tmp18 = Q;
                      let tmp17 = items;
                    } else {
                      tmp17 = cResult[18];
                      tmp18 = cResult[19];
                    }
                    if (cResult[20] === first1) {
                      if (cResult[21] === tmp15) {
                        let tmp21 = cResult[22];
                      }
                      if (cResult[23] === tmp16) {
                        if (cResult[24] === tmp12) {
                          if (cResult[25] === tmp17) {
                            if (cResult[26] === tmp18) {
                              if (cResult[27] === tmp21) {
                                let tmp22 = cResult[28];
                              }
                              return tmp22;
                            }
                          }
                        }
                      }
                      const obj3 = {
                        options: tmp12,
                        selectedOptions: null,
                        isSelected: null,
                        onPressOptionItem: null,
                        submitSelection: null,
                        setQuery: null,
                      };
                      class Q {
                        constructor(arg0) {
                          return closure_3.has(selectActionComponent.value);
                        }
                      }
                      class A {
                        constructor(arg0) {
                          obj = { type: selectActionComponent.type, selectedOptions: null };
                          items = [...selectActionComponent.values()];
                          obj.selectedOptions = items;
                          tmp = onSubmit(obj);
                          obj2 = closure_1(closure_2[5]);
                          hideActionSheetResult = obj2.hideActionSheet();
                          return;
                        }
                      }
                      obj3.onPressOptionItem = tmp16;
                      obj3.submitSelection = tmp21;
                      obj3.setQuery = tmp7;
                      cResult[23] = tmp16;
                      cResult[24] = tmp12;
                      cResult[25] = tmp17;
                      cResult[26] = tmp18;
                      cResult[27] = tmp21;
                      cResult[28] = obj3;
                      tmp22 = obj3;
                    }
                    const fn3 = function j() {
                      return closure_6(first1);
                    };
                    class A {
                      constructor(arg0) {
                        obj = { type: selectActionComponent.type, selectedOptions: null };
                        items = [...selectActionComponent.values()];
                        obj.selectedOptions = items;
                        tmp = onSubmit(obj);
                        obj2 = closure_1(closure_2[5]);
                        hideActionSheetResult = obj2.hideActionSheet();
                        return;
                      }
                    }
                    cResult[21] = tmp15;
                    cResult[22] = fn3;
                    tmp21 = fn3;
                  }
                }
              }
              const fn2 = function k(arg0, value) {
                const hasItem = first1.has(value.value);
                if (closure_5) {
                  let tmp12 = !hasItem;
                  if (!hasItem) {
                    tmp12 = first1.size >= selectActionComponent.maxValues;
                  }
                  if (!tmp12) {
                    closure_4((arg0) => {
                      const map = new Map(arg0);
                      if (hasItem) {
                        map.delete(value.value);
                      } else {
                        const result = map.set(value.value, value);
                      }
                      return map;
                    });
                  }
                } else {
                  const _Map = Map;
                  if (hasItem) {
                    let _Map1 = new _Map();
                  } else {
                    const items = [value.value, value];
                    const items1 = [items];
                    _Map1 = new _Map(items1);
                  }
                  closure_6(_Map1);
                }
              };
              class A {
                constructor(arg0) {
                  obj = { type: selectActionComponent.type, selectedOptions: null };
                  items = [...selectActionComponent.values()];
                  obj.selectedOptions = items;
                  tmp = onSubmit(obj);
                  obj2 = closure_1(closure_2[5]);
                  hideActionSheetResult = obj2.hideActionSheet();
                  return;
                }
              }
              cResult[13] = selectActionComponent.maxValues;
              cResult[14] = first1;
              cResult[15] = tmp15;
              cResult[16] = fn2;
              tmp16 = fn2;
            }
            class A {
              constructor(arg0) {
                obj = { type: selectActionComponent.type, selectedOptions: null };
                items = [...selectActionComponent.values()];
                obj.selectedOptions = items;
                tmp = onSubmit(obj);
                obj2 = closure_1(closure_2[5]);
                hideActionSheetResult = obj2.hideActionSheet();
                return;
              }
            }
            cResult[9] = onSubmit;
            cResult[10] = selectActionComponent.type;
            cResult[11] = A;
            tmp15 = A;
          }
          const queryOptionsResult = queryOptions(first);
          cResult[6] = first;
          cResult[7] = queryOptions;
          cResult[8] = queryOptionsResult;
          tmp12 = queryOptionsResult;
        }
      }
      const tmp5 = first1(noop.useState(""), 2);
      const initialSnowflakeSelectOptions = tmp(7814).getInitialSnowflakeSelectOptions(
        selectActionComponent,
        containerId,
        guildId,
      );
      cResult[0] = containerId;
      cResult[1] = guildId;
      cResult[2] = selectActionComponent;
      cResult[3] = initialSnowflakeSelectOptions;
      tmp8 = initialSnowflakeSelectOptions;
    }
  : (selectActionComponent) => {
      selectActionComponent = selectActionComponent.selectActionComponent;
      const queryOptions = selectActionComponent.queryOptions;
      const onSubmit = selectActionComponent.onSubmit;
      let first;
      noop = undefined;
      ({ containerId, guildId } = selectActionComponent);
      const tmp = first(noop.useState(""), 2);
      first = tmp[0];
      noop = selectActionComponent(onSubmit[4]).getInitialSnowflakeSelectOptions(
        selectActionComponent,
        containerId,
        guildId,
      );
      const tmp3 = first(
        noop.useState(
          () =>
            new Map(
              closure_4.map((value) => {
                const items = [value.value, value];
                return items;
              }),
            ),
        ),
        2,
      );
      const first1 = tmp3[0];
      closure_6 = tmp3[1];
      let items = [first, queryOptions];
      closure_7 = selectActionComponent.maxValues > 1;
      const obj2 = {
        options: noop.useMemo(() => queryOptions(first), items),
        selectedOptions: null,
        isSelected(value) {
          return first1.has(value.value);
        },
        onPressOptionItem(arg0, value) {
          const hasItem = first1.has(value.value);
          if (closure_7) {
            let tmp17 = !hasItem;
            if (!hasItem) {
              tmp17 = first1.size >= selectActionComponent.maxValues;
            }
            if (!tmp17) {
              closure_6((arg0) => {
                const map = new Map(arg0);
                if (hasItem) {
                  map.delete(value.value);
                } else {
                  const result = map.set(value.value, value);
                }
                return map;
              });
            }
          } else {
            const _Map = Map;
            if (hasItem) {
              let _Map1 = new _Map();
            } else {
              const items = [value.value, value];
              const items1 = [items];
              _Map1 = new _Map(items1);
            }
            const obj = { type: selectActionComponent.type, selectedOptions: null };
            const items2 = [];
            HermesBuiltin.arraySpread(_Map1.values(), 0);
            obj.selectedOptions = items2;
            onSubmit(obj);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          }
        },
        submitSelection() {
          const obj = { type: selectActionComponent.type, selectedOptions: null };
          const items = [...first1.values()];
          obj.selectedOptions = items;
          onSubmit(obj);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
        setQuery: tmp[1],
      };
      let items1 = [...first1.values()];
      obj2.selectedOptions = items1;
      return obj2;
    };
