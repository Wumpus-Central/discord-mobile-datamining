// discord_app/modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import TagIcon from "../../../../../design/components/Icon/native/redesign/generated/TagIcon.tsx";
import build_overrides_BuildOverrideUtils from "../../../../build_overrides/native/BuildOverrideUtils.tsx";
import HashmarkIcon from "../../../../../design/components/Icon/native/redesign/generated/HashmarkIcon.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import BuildOverrideStore from "../../../../build_overrides/BuildOverrideStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_0;

let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const jsxs = Fragment.jsxs;
let createStyles = createStyles_mod;
let obj = { content: obj2, contentContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let items = [{ label: "Branch Name", value: "branch", icon: jsx(TagIcon.TagIcon, {}) }];
const obj4 = { label: "Branch Name", value: "branch", icon: jsx(TagIcon.TagIcon, {}) };
items[1] = { label: "Commit SHA", value: "id", icon: jsx(HashmarkIcon.HashmarkIcon, {}) };
const memo = react.memo;
const obj5 = { label: "Commit SHA", value: "id", icon: jsx(HashmarkIcon.HashmarkIcon, {}) };
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let closure_2;
        let currentBuildOverride;
        let first;
        let first1;
        let stateFromStores;
        let tmp10;
        let tmp6;
        let tmp7;
        let tmp = stateFromStores;
        let obj = stateFromStores(576);
        const cResult = obj.c(47);
        const tmp4 = closure_9();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { includeKeyboardHeight: true };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        const insets = first1(6471)(first).insets;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          items = [BuildOverrideStore];
          class C {
            constructor() {
              const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
              let tmp;
              if (overrides != null) {
                tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
              }
              return tmp;
            }
          }
          cResult[1] = items;
          cResult[2] = C;
          tmp7 = C;
          tmp6 = items;
        } else {
          tmp6 = cResult[1];
          tmp7 = cResult[2];
        }
        const tmpResult = tmp(504);
        stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { type: "branch", id: "" };
          cResult[3] = obj3;
          class C {
            constructor() {
              const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
              let tmp;
              if (overrides != null) {
                tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
              }
              return tmp;
            }
          }
        } else {
          tmp10 = cResult[3];
        }
        [first1, dependencyMap] = react.useState(tmp10);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor(arg0) {
              closure_0 = arg0;
              found = closure_1_10.find((value) => value.value === type.type);
              label = undefined;
              if (found != null) {
                label = found.label;
              }
              return label;
            }
          }
          cResult[4] = R;
          class C {
            constructor() {
              const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
              let tmp;
              if (overrides != null) {
                tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
              }
              return tmp;
            }
          }
        } else {
          class R {
            constructor(arg0) {
              closure_0 = arg0;
              found = closure_1_10.find((value) => value.value === type.type);
              label = undefined;
              if (found != null) {
                label = found.label;
              }
              return label;
            }
          }
        }
        const sum = tmp4.contentContainer.padding + insets.bottom;
        if (cResult[5] === tmp4.contentContainer) {
          let tmp22;
          class R {
            constructor(arg0) {
              closure_0 = arg0;
              found = closure_1_10.find((value) => value.value === type.type);
              label = undefined;
              if (found != null) {
                label = found.label;
              }
              return label;
            }
          }
          if (cResult[8] !== stateFromStores) {
            let tmp17;
            class R {
              constructor(arg0) {
                closure_0 = arg0;
                found = closure_1_10.find((value) => value.value === type.type);
                label = undefined;
                if (found != null) {
                  label = found.label;
                }
                return label;
              }
            }
            if (null != stateFromStores) {
              class R {
                constructor(arg0) {
                  closure_0 = arg0;
                  found = closure_1_10.find((value) => value.value === type.type);
                  label = undefined;
                  if (found != null) {
                    label = found.label;
                  }
                  return label;
                }
              }
              class C {
                constructor() {
                  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                  let tmp;
                  if (overrides != null) {
                    tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              const TableRow = tmp(5993).TableRow;
              const items1 = [
                <TableRow
                  icon={null}
                  label={tmp13(stateFromStores)}
                  subLabel={stateFromStores.id}
                  onPress={function onPress() {
                    const obj = ClipboardUtils;
                    obj.copy(stateFromStores.id);
                    const obj2 = ToastUtils;
                    const result = obj2.presentCopiedToClipboard();
                  }}
                />,
                ,
              ];
              const TableRow2 = tmp(5993).TableRow;
              items1[1] = (
                <TableRow2 icon={null} label="Refresh Override" onPress={tmp(11399).refreshBuildOverride} arrow />
              );
              const TableRow3 = tmp(5993).TableRow;
              items1[2] = (
                <TableRow3
                  icon={null}
                  label="Clear Override"
                  variant="danger"
                  onPress={tmp(11399).clearBuildOverride}
                  arrow
                />
              );
              tmp17 = (
                <tmp18 title="Current Override" hasIcons>
                  {items1}
                </tmp18>
              );
            }
            class C {
              constructor() {
                const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                let tmp;
                if (overrides != null) {
                  tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                }
                return tmp;
              }
            }
            cResult[9] = tmp17;
          } else {
            class R {
              constructor(arg0) {
                closure_0 = arg0;
                found = closure_1_10.find((value) => value.value === type.type);
                label = undefined;
                if (found != null) {
                  label = found.label;
                }
                return label;
              }
            }
          }
          class C {
            constructor() {
              const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
              let tmp;
              if (overrides != null) {
                tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
              }
              return tmp;
            }
          }
          if (null != stateFromStores) {
            class R {
              constructor(arg0) {
                closure_0 = arg0;
                found = closure_1_10.find((value) => value.value === type.type);
                label = undefined;
                if (found != null) {
                  label = found.label;
                }
                return label;
              }
            }
          }
          const _Symbol = Symbol;
          let type = first1.type;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor(type) {
                const obj = { type, id: "" };
                closure_2(obj);
              }
            }
            cResult[10] = F;
            class C {
              constructor() {
                const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                let tmp;
                if (overrides != null) {
                  tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                }
                return tmp;
              }
            }
          } else {
            class F {
              constructor(type) {
                const obj = { type, id: "" };
                closure_2(obj);
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor(type) {
                const obj = { type, id: "" };
                closure_2(obj);
              }
            }
            const mapped = items.map((value) => {
              let icon;
              let label;
              value = value.value;
              ({ icon, label } = value);
              return jsx(stateFromStores(closure_2[21]).TableRadioRow, { value, label, icon }, value);
            });
            class C {
              constructor() {
                const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                let tmp;
                if (overrides != null) {
                  tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                }
                return tmp;
              }
            }
            tmp22 = mapped;
          } else {
            class F {
              constructor(type) {
                const obj = { type, id: "" };
                closure_2(obj);
              }
            }
          }
          const text = `${str} Override Type`;
          if (cResult[12] === first1.type) {
            class F {
              constructor(type) {
                const obj = { type, id: "" };
                closure_2(obj);
              }
            }
            if (cResult[15] !== first1) {
              class F {
                constructor(type) {
                  const obj = { type, id: "" };
                  closure_2(obj);
                }
              }
              cResult[15] = first1;
              class C {
                constructor() {
                  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                  let tmp;
                  if (overrides != null) {
                    tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              cResult[16] = tmp29;
            } else {
              class F {
                constructor(type) {
                  const obj = { type, id: "" };
                  closure_2(obj);
                }
              }
            }
            if (cResult[17] !== first1.type) {
              class F {
                constructor(type) {
                  const obj = { type, id: "" };
                  closure_2(obj);
                }
              }
              let found = items.find((value) => value.value === first1.type);
              class C {
                constructor() {
                  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                  let tmp;
                  if (overrides != null) {
                    tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              cResult[17] = first1.type;
              cResult[18] = undefined;
            } else {
              class F {
                constructor(type) {
                  const obj = { type, id: "" };
                  closure_2(obj);
                }
              }
            }
            class C {
              constructor() {
                const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                let tmp;
                if (overrides != null) {
                  tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                }
                return tmp;
              }
            }
            const _HermesInternal = HermesInternal;
            const combined = "Enter " + tmp33;
            if (cResult[21] !== first1) {
              class H {
                constructor(id) {
                  const obj = { id };
                  const merged = Object.assign(first1);
                  closure_2(obj);
                }
              }
              cResult[21] = first1;
              class C {
                constructor() {
                  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                  let tmp;
                  if (overrides != null) {
                    tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              cResult[22] = H;
            } else {
              class H {
                constructor(id) {
                  const obj = { id };
                  const merged = Object.assign(first1);
                  closure_2(obj);
                }
              }
            }
            if (cResult[23] === combined) {
              class H {
                constructor(id) {
                  const obj = { id };
                  const merged = Object.assign(first1);
                  closure_2(obj);
                }
              }
              if (cResult[26] === tmp30) {
                class H {
                  constructor(id) {
                    const obj = { id };
                    const merged = Object.assign(first1);
                    closure_2(obj);
                  }
                }
                if (cResult[29] === tmp29) {
                  class H {
                    constructor(id) {
                      const obj = { id };
                      const merged = Object.assign(first1);
                      closure_2(obj);
                    }
                  }
                  if (cResult[32] === first1.id) {
                    class H {
                      constructor(id) {
                        const obj = { id };
                        const merged = Object.assign(first1);
                        closure_2(obj);
                      }
                    }
                    class U {
                      constructor() {
                        const type = first1.type;
                        if ("branch" === type) {
                          const obj3 = build_overrides_BuildOverrideUtils;
                          const result = obj3.setBuildOverrideForBranch(first1.id);
                        } else if ("id" === type) {
                          const obj2 = build_overrides_BuildOverrideUtils;
                          const result1 = obj2.setBuildOverrideForId(first1.id);
                        } else {
                          const obj = GlobalUtils;
                          obj.assertNever(first1.type);
                        }
                      }
                    }
                    class C {
                      constructor() {
                        const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                        let tmp;
                        if (overrides != null) {
                          tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                        }
                        return tmp;
                      }
                    }
                    cResult[35] = "" === tmp45;
                    cResult[36] = U;
                    cResult[37] = jsx(tmp(5594).Button, {
                      text: "Apply Build Override",
                      disabled: "" === tmp45,
                      onPress: U,
                    });
                    const tmp49 = jsx(tmp(5594).Button, {
                      text: "Apply Build Override",
                      disabled: "" === tmp45,
                      onPress: U,
                    });
                  }
                  class U {
                    constructor() {
                      const type = first1.type;
                      if ("branch" === type) {
                        const obj3 = build_overrides_BuildOverrideUtils;
                        const result = obj3.setBuildOverrideForBranch(first1.id);
                      } else if ("id" === type) {
                        const obj2 = build_overrides_BuildOverrideUtils;
                        const result1 = obj2.setBuildOverrideForId(first1.id);
                      } else {
                        const obj = GlobalUtils;
                        obj.assertNever(first1.type);
                      }
                    }
                  }
                  class C {
                    constructor() {
                      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                      let tmp;
                      if (overrides != null) {
                        tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                      }
                      return tmp;
                    }
                  }
                  cResult[32] = first1.id;
                  cResult[33] = first1.type;
                  cResult[34] = U;
                }
                class C {
                  constructor() {
                    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                    let tmp;
                    if (overrides != null) {
                      tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                    }
                    return tmp;
                  }
                }
                tmp43[0] = tmp29;
                tmp43[2] = tmp39;
                cResult[29] = tmp29;
                cResult[30] = tmp39;
                cResult[31] = jsx(tmp(6074).TableRowGroup, tmp43);
                const tmp44 = jsx(tmp(6074).TableRowGroup, tmp43);
              }
              class C {
                constructor() {
                  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                  let tmp;
                  if (overrides != null) {
                    tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              tmp40[0] = tmp30;
              tmp40[1] = tmp36;
              cResult[26] = tmp30;
              cResult[27] = tmp36;
              cResult[28] = jsx(tmp(5993).TableRow, tmp40);
              const tmp41 = jsx(tmp(5993).TableRow, tmp40);
            }
            cResult[23] = combined;
            cResult[24] = H;
            cResult[25] = jsx(tmp(6098).TextInput, {
              size: "md",
              placeholder: combined,
              onChange: H,
              autoCapitalize: "none",
              autoCorrect: false,
              autoComplete: "off",
              clearable: true,
            });
            const tmp38 = jsx(tmp(6098).TextInput, {
              size: "md",
              placeholder: combined,
              onChange: H,
              autoCapitalize: "none",
              autoCorrect: false,
              autoComplete: "off",
              clearable: true,
            });
          }
          cResult[12] = first1.type;
          cResult[13] = text;
          cResult[14] = jsx(tmp(6072).TableRadioGroup, {
            title: text,
            defaultValue: type,
            onChange: tmp21,
            hasIcons: true,
            children: tmp22,
          });
          const tmp27 = jsx(tmp(6072).TableRadioGroup, {
            title: text,
            defaultValue: type,
            onChange: tmp21,
            hasIcons: true,
            children: tmp22,
          });
        }
        const obj11 = { paddingBottom: sum };
        let merged = Object.assign(tmp4.contentContainer);
        cResult[5] = tmp4.contentContainer;
        cResult[6] = sum;
        cResult[7] = obj11;
      }
    : () => {
        let closure_2;
        let currentBuildOverride;
        let first;
        let stateFromStores;
        const f144714 = (value) => value.value === first.type;
        let tmp = closure_9();
        const insets = first(6471)({ includeKeyboardHeight: true }).insets;
        let obj = stateFromStores(504);
        items = [BuildOverrideStore];
        stateFromStores = obj.useStateFromStores(items, () => {
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let tmp;
          if (overrides != null) {
            tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
          }
          return tmp;
        });
        [first, dependencyMap] = react.useState({ type: "branch", id: "" });
        let obj3 = { paddingBottom: tmp.contentContainer.padding + insets.bottom };
        let merged = Object.assign(tmp.contentContainer);
        let tmp10Result = null;
        const Stack = stateFromStores(5593).Stack;
        if (null != stateFromStores) {
          const TableRowGroup = tmp3(6074).TableRowGroup;
          const TableRow = tmp3(5993).TableRow;
          const found = items.find(f144714);
          let label;
          if (found != null) {
            label = found.label;
          }
          const items1 = [
            <TableRow
              icon={null}
              label={label}
              subLabel={stateFromStores.id}
              onPress={function onPress() {
                const obj = ClipboardUtils;
                obj.copy(stateFromStores.id);
                const obj2 = ToastUtils;
                const result = obj2.presentCopiedToClipboard();
              }}
            />,
            ,
          ];
          const TableRow2 = tmp3(5993).TableRow;
          items1[1] = (
            <TableRow2
              icon={null}
              label="Refresh Override"
              onPress={stateFromStores(11399).refreshBuildOverride}
              arrow
            />
          );
          const TableRow3 = tmp3(5993).TableRow;
          items1[2] = (
            <TableRow3
              icon={null}
              label="Clear Override"
              variant="danger"
              onPress={stateFromStores(11399).clearBuildOverride}
              arrow
            />
          );
          tmp10Result = (
            <TableRowGroup title="Current Override" hasIcons>
              {items1}
            </TableRowGroup>
          );
        }
        const items2 = [tmp10Result, , ,];
        let str = "";
        const TableRadioGroup = tmp3(6072).TableRadioGroup;
        if (null != stateFromStores) {
          str = "New";
        }
        items2[1] = (
          <TableRadioGroup
            title={`${str} Override Type`}
            defaultValue={first.type}
            onChange={function onChange(type) {
              const obj = { type, id: "" };
              closure_2(obj);
            }}
            hasIcons
          >
            {items.map((value) => {
              let icon;
              let label;
              value = value.value;
              ({ icon, label } = value);
              return jsx(stateFromStores(closure_2[21]).TableRadioRow, { value, label, icon }, value);
            })}
          </TableRadioGroup>
        );
        const TableRowGroup2 = tmp3(6074).TableRowGroup;
        const found1 = items.find(f144714);
        let label1;
        if (found1 != null) {
          label1 = found1.label;
        }
        const TableRow4 = tmp3(5993).TableRow;
        const found2 = arr4.find((value) => value.value === first.type);
        let icon;
        if (found2 != null) {
          icon = found2.icon;
        }
        const TextInput = tmp3(6098).TextInput;
        const found3 = arr4.find(f144714);
        let label2;
        if (found3 != null) {
          label2 = found3.label;
        }
        ({
          size: "md",
          placeholder: "Enter " + label2,
          onChange(id) {
            const obj = { id };
            const merged = Object.assign(first);
            closure_2(obj);
          },
          autoCapitalize: "none",
          autoCorrect: false,
          autoComplete: "off",
          clearable: true,
        });
        items2[2] = (
          <TableRowGroup2 title={label1} hasIcons>
            {null}
          </TableRowGroup2>
        );
        items2[3] = jsx(stateFromStores(5594).Button, {
          text: "Apply Build Override",
          disabled: "" === first.id,
          onPress() {
            const type = first.type;
            if ("branch" === type) {
              const obj3 = build_overrides_BuildOverrideUtils;
              const result = obj3.setBuildOverrideForBranch(first.id);
            } else if ("id" === type) {
              const obj2 = build_overrides_BuildOverrideUtils;
              const result1 = obj2.setBuildOverrideForId(first.id);
            } else {
              const obj = GlobalUtils;
              obj.assertNever(first.type);
            }
          },
        });
        return (
          <ScrollView style={tmp.content} contentContainerStyle={obj3}>
            {null}
          </ScrollView>
        );
      },
);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default memoResult;
