// discord_app/modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import build_overrides_BuildOverrideUtils from "../../../../build_overrides/native/BuildOverrideUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import BuildOverrideStore from "../../../../build_overrides/BuildOverrideStore.tsx";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
const jsx = jsxProd.jsx;
const jsxs = jsxProd.jsxs;
const createStyles = fn(4890);
let obj = { content: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.contentContainer = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let obj4 = { padding: nativeDefault.space.PX_16 };
let items = [{ label: "Branch Name", value: "branch", icon: jsx(fn(8524).TagIcon, {}) }];
let obj5 = { label: "Branch Name", value: "branch", icon: jsx(fn(8524).TagIcon, {}) };
items[1] = { label: "Commit SHA", value: "id", icon: jsx(fn(15411).HashmarkIcon, {}) };
const ReactCompilerGating = fn(558);
let obj6 = { label: "Commit SHA", value: "id", icon: jsx(fn(15411).HashmarkIcon, {}) };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = stateFromStores(576).c(47);
        const tmp4 = closure_9();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { includeKeyboardHeight: true };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          items = [BuildOverrideStore];
          class C {
            constructor() {
              overrides = closure_1_6.getCurrentBuildOverride().overrides;
              tmp = undefined;
              if (overrides != null) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
              }
              return tmp;
            }
          }
          cResult[1] = items;
          cResult[2] = C;
          let tmp7 = C;
          let tmp6 = items;
        } else {
          tmp6 = cResult[1];
          tmp7 = cResult[2];
        }
        let obj = stateFromStores(576);
        stateFromStores = stateFromStores(504).useStateFromStores(tmp6, tmp7);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          cResult[3] = { type: "branch", id: "" };
          class C {
            constructor() {
              overrides = closure_1_6.getCurrentBuildOverride().overrides;
              tmp = undefined;
              if (overrides != null) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
              }
              return tmp;
            }
          }
          let obj3 = { type: "branch", id: "" };
        } else {
          const tmp10 = cResult[3];
        }
        [first1, dependencyMap] = noop.useState(tmp10);
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
              overrides = closure_1_6.getCurrentBuildOverride().overrides;
              tmp = undefined;
              if (overrides != null) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
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
        const sum = tmp4.contentContainer.padding + first1(6471)(first).insets.bottom;
        if (cResult[5] === tmp4.contentContainer) {
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
              const obj4 = { title: "Current Override", hasIcons: true, children: null };
              class C {
                constructor() {
                  overrides = closure_1_6.getCurrentBuildOverride().overrides;
                  tmp = undefined;
                  if (overrides != null) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              const obj5 = {
                icon: jsx(tmp(4843).CopyIcon, {}),
                label: tmp13(stateFromStores),
                subLabel: stateFromStores.id,
                onPress() {
                  ClipboardUtils.copy(stateFromStores.id);
                  const result = ToastUtils.presentCopiedToClipboard();
                },
              };
              const items1 = [
                jsx(tmp(5993).TableRow, {
                  icon: jsx(tmp(4843).CopyIcon, {}),
                  label: tmp13(stateFromStores),
                  subLabel: stateFromStores.id,
                  onPress() {
                    ClipboardUtils.copy(stateFromStores.id);
                    const result = ToastUtils.presentCopiedToClipboard();
                  },
                }),
                ,
              ];
              const obj6 = {
                icon: jsx(tmp(14778).RefreshIcon, {}),
                label: "Refresh Override",
                onPress: tmp(11399).refreshBuildOverride,
                arrow: true,
              };
              items1[1] = jsx(tmp(5993).TableRow, {
                icon: jsx(tmp(14778).RefreshIcon, {}),
                label: "Refresh Override",
                onPress: tmp(11399).refreshBuildOverride,
                arrow: true,
              });
              const obj7 = {
                icon: jsx(tmp(4847).TrashIcon, { color: "text-feedback-critical" }),
                label: "Clear Override",
                variant: "danger",
                onPress: tmp(11399).clearBuildOverride,
                arrow: true,
              };
              items1[2] = jsx(tmp(5993).TableRow, {
                icon: jsx(tmp(4847).TrashIcon, { color: "text-feedback-critical" }),
                label: "Clear Override",
                variant: "danger",
                onPress: tmp(11399).clearBuildOverride,
                arrow: true,
              });
              obj4.children = items1;
              const tmp17 = (
                <tmp18 title="Current Override" hasIcons>
                  {null}
                </tmp18>
              );
            }
            class C {
              constructor() {
                overrides = closure_1_6.getCurrentBuildOverride().overrides;
                tmp = undefined;
                if (overrides != null) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
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
              overrides = closure_1_6.getCurrentBuildOverride().overrides;
              tmp = undefined;
              if (overrides != null) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
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
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor(arg0) {
                obj = { type: arg0, id: "" };
                tmp = closure_2(obj);
                return;
              }
            }
            cResult[10] = F;
            class C {
              constructor() {
                overrides = closure_1_6.getCurrentBuildOverride().overrides;
                tmp = undefined;
                if (overrides != null) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                }
                return tmp;
              }
            }
          } else {
            class F {
              constructor(arg0) {
                obj = { type: arg0, id: "" };
                tmp = closure_2(obj);
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor(arg0) {
                obj = { type: arg0, id: "" };
                tmp = closure_2(obj);
                return;
              }
            }
            const mapped = items.map((value) => {
              value = value.value;
              ({ icon, label } = value);
              return jsx(stateFromStores(6071).TableRadioRow, { value, label, icon }, value);
            });
            class C {
              constructor() {
                overrides = closure_1_6.getCurrentBuildOverride().overrides;
                tmp = undefined;
                if (overrides != null) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                }
                return tmp;
              }
            }
            const tmp22 = mapped;
          } else {
            class F {
              constructor(arg0) {
                obj = { type: arg0, id: "" };
                tmp = closure_2(obj);
                return;
              }
            }
          }
          const text = `${str} Override Type`;
          if (cResult[12] === first1.type) {
            class F {
              constructor(arg0) {
                obj = { type: arg0, id: "" };
                tmp = closure_2(obj);
                return;
              }
            }
            if (cResult[15] !== first1) {
              class F {
                constructor(arg0) {
                  obj = { type: arg0, id: "" };
                  tmp = closure_2(obj);
                  return;
                }
              }
              cResult[15] = first1;
              class C {
                constructor() {
                  overrides = closure_1_6.getCurrentBuildOverride().overrides;
                  tmp = undefined;
                  if (overrides != null) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              cResult[16] = tmp29;
            } else {
              class F {
                constructor(arg0) {
                  obj = { type: arg0, id: "" };
                  tmp = closure_2(obj);
                  return;
                }
              }
            }
            if (cResult[17] !== first1.type) {
              class F {
                constructor(arg0) {
                  obj = { type: arg0, id: "" };
                  tmp = closure_2(obj);
                  return;
                }
              }
              let found = items.find((value) => value.value === first1.type);
              class C {
                constructor() {
                  overrides = closure_1_6.getCurrentBuildOverride().overrides;
                  tmp = undefined;
                  if (overrides != null) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              cResult[17] = first1.type;
              cResult[18] = undefined;
            } else {
              class F {
                constructor(arg0) {
                  obj = { type: arg0, id: "" };
                  tmp = closure_2(obj);
                  return;
                }
              }
            }
            class C {
              constructor() {
                overrides = closure_1_6.getCurrentBuildOverride().overrides;
                tmp = undefined;
                if (overrides != null) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                }
                return tmp;
              }
            }
            const _HermesInternal = HermesInternal;
            const combined = "Enter " + tmp33;
            if (cResult[21] !== first1) {
              class H {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(closure_1);
                  obj.id = arg0;
                  tmp2 = closure_2(obj);
                  return;
                }
              }
              cResult[21] = first1;
              class C {
                constructor() {
                  overrides = closure_1_6.getCurrentBuildOverride().overrides;
                  tmp = undefined;
                  if (overrides != null) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              cResult[22] = H;
            } else {
              class H {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(closure_1);
                  obj.id = arg0;
                  tmp2 = closure_2(obj);
                  return;
                }
              }
            }
            if (cResult[23] === combined) {
              class H {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(closure_1);
                  obj.id = arg0;
                  tmp2 = closure_2(obj);
                  return;
                }
              }
              if (cResult[26] === tmp30) {
                class H {
                  constructor(arg0) {
                    obj = {};
                    merged = Object.assign(closure_1);
                    obj.id = arg0;
                    tmp2 = closure_2(obj);
                    return;
                  }
                }
                if (cResult[29] === tmp29) {
                  class H {
                    constructor(arg0) {
                      obj = {};
                      merged = Object.assign(closure_1);
                      obj.id = arg0;
                      tmp2 = closure_2(obj);
                      return;
                    }
                  }
                  if (cResult[32] === first1.id) {
                    class H {
                      constructor(arg0) {
                        obj = {};
                        merged = Object.assign(closure_1);
                        obj.id = arg0;
                        tmp2 = closure_2(obj);
                        return;
                      }
                    }
                    class U {
                      constructor() {
                        tmp = closure_1;
                        type = closure_1.type;
                        if ("branch" === type) {
                          tmp8 = closure_0;
                          tmp9 = closure_2;
                          obj3 = closure_0(closure_2[12]);
                          result = obj3.setBuildOverrideForBranch(tmp.id);
                        } else {
                          str = "id";
                          if ("id" === type) {
                            tmp5 = closure_0;
                            tmp6 = closure_2;
                            obj2 = closure_0(closure_2[12]);
                            result1 = obj2.setBuildOverrideForId(tmp.id);
                          } else {
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            obj = closure_0(closure_2[24]);
                            assertNeverResult = obj.assertNever(tmp.type);
                          }
                        }
                        return;
                      }
                    }
                    class C {
                      constructor() {
                        overrides = closure_1_6.getCurrentBuildOverride().overrides;
                        tmp = undefined;
                        if (overrides != null) {
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                        }
                        return tmp;
                      }
                    }
                    const obj8 = { text: "Apply Build Override", disabled: "" === tmp45, onPress: U };
                    const tmp49 = jsx(tmp(5594).Button, {
                      text: "Apply Build Override",
                      disabled: "" === tmp45,
                      onPress: U,
                    });
                    cResult[35] = "" === tmp45;
                    cResult[36] = U;
                    cResult[37] = tmp49;
                  }
                  class U {
                    constructor() {
                      tmp = closure_1;
                      type = closure_1.type;
                      if ("branch" === type) {
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        obj3 = closure_0(closure_2[12]);
                        result = obj3.setBuildOverrideForBranch(tmp.id);
                      } else {
                        str = "id";
                        if ("id" === type) {
                          tmp5 = closure_0;
                          tmp6 = closure_2;
                          obj2 = closure_0(closure_2[12]);
                          result1 = obj2.setBuildOverrideForId(tmp.id);
                        } else {
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          obj = closure_0(closure_2[24]);
                          assertNeverResult = obj.assertNever(tmp.type);
                        }
                      }
                      return;
                    }
                  }
                  class C {
                    constructor() {
                      overrides = closure_1_6.getCurrentBuildOverride().overrides;
                      tmp = undefined;
                      if (overrides != null) {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
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
                    overrides = closure_1_6.getCurrentBuildOverride().overrides;
                    tmp = undefined;
                    if (overrides != null) {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                    }
                    return tmp;
                  }
                }
                tmp43[0] = tmp29;
                tmp43[2] = tmp39;
                const tmp44 = jsx(tmp(6074).TableRowGroup, tmp43);
                cResult[29] = tmp29;
                cResult[30] = tmp39;
                cResult[31] = tmp44;
              }
              class C {
                constructor() {
                  overrides = closure_1_6.getCurrentBuildOverride().overrides;
                  tmp = undefined;
                  if (overrides != null) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    tmp = overrides[closure_0(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              tmp40[0] = tmp30;
              tmp40[1] = tmp36;
              const tmp41 = jsx(tmp(5993).TableRow, tmp40);
              cResult[26] = tmp30;
              cResult[27] = tmp36;
              cResult[28] = tmp41;
            }
            const obj9 = {
              size: "md",
              placeholder: combined,
              onChange: H,
              autoCapitalize: "none",
              autoCorrect: false,
              autoComplete: "off",
              clearable: true,
            };
            const tmp38 = jsx(tmp(6098).TextInput, {
              size: "md",
              placeholder: combined,
              onChange: H,
              autoCapitalize: "none",
              autoCorrect: false,
              autoComplete: "off",
              clearable: true,
            });
            cResult[23] = combined;
            cResult[24] = H;
            cResult[25] = tmp38;
          }
          const obj10 = { title: text, defaultValue: first1.type, onChange: tmp21, hasIcons: true, children: tmp22 };
          const tmp27 = jsx(tmp(6072).TableRadioGroup, {
            title: text,
            defaultValue: first1.type,
            onChange: tmp21,
            hasIcons: true,
            children: tmp22,
          });
          cResult[12] = first1.type;
          cResult[13] = text;
          cResult[14] = tmp27;
        }
        const obj11 = {};
        let merged = Object.assign(tmp4.contentContainer);
        obj11.paddingBottom = sum;
        cResult[5] = tmp4.contentContainer;
        cResult[6] = sum;
        cResult[7] = obj11;
        const tmpResult = stateFromStores(504);
      }
    : () => {
        let tmp = closure_9();
        items = [BuildOverrideStore];
        const stateFromStores = first(504).useStateFromStores(items, () => {
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let tmp;
          if (overrides != null) {
            tmp = overrides[first(undefined, 11399).DEVICE_FIELD];
          }
          return tmp;
        });
        first = stateFromStores;
        [first, dependencyMap] = noop.useState({ type: "branch", id: "" });
        let obj2 = { style: tmp.content, contentContainerStyle: null, children: null };
        let obj3 = {};
        let merged = Object.assign(tmp.contentContainer);
        obj3.paddingBottom = tmp.contentContainer.padding + first(6471)({ includeKeyboardHeight: true }).insets.bottom;
        obj2.contentContainerStyle = obj3;
        let tmp10Result = null;
        if (null != stateFromStores) {
          const obj4 = { icon: jsx(tmp3(4843).CopyIcon, {}), label: null, subLabel: null, onPress: null };
          first = stateFromStores;
          const found = items.find((value) => value.value === first.type);
          let label;
          if (found != null) {
            label = found.label;
          }
          const obj5 = { title: "Current Override", hasIcons: true, children: null };
          obj4.label = label;
          obj4.subLabel = stateFromStores.id;
          obj4.onPress = function onPress() {
            ClipboardUtils.copy(first.id);
            const result = ToastUtils.presentCopiedToClipboard();
          };
          const items1 = [
            jsx(tmp3(5993).TableRow, {
              icon: jsx(tmp3(4843).CopyIcon, {}),
              label: null,
              subLabel: null,
              onPress: null,
            }),
            ,
          ];
          const obj6 = {
            icon: jsx(tmp3(14778).RefreshIcon, {}),
            label: "Refresh Override",
            onPress: tmp3(11399).refreshBuildOverride,
            arrow: true,
          };
          items1[1] = jsx(tmp3(5993).TableRow, {
            icon: jsx(tmp3(14778).RefreshIcon, {}),
            label: "Refresh Override",
            onPress: tmp3(11399).refreshBuildOverride,
            arrow: true,
          });
          const obj7 = {
            icon: jsx(tmp3(4847).TrashIcon, { color: "text-feedback-critical" }),
            label: "Clear Override",
            variant: "danger",
            onPress: tmp3(11399).clearBuildOverride,
            arrow: true,
          };
          items1[2] = jsx(tmp3(5993).TableRow, {
            icon: jsx(tmp3(4847).TrashIcon, { color: "text-feedback-critical" }),
            label: "Clear Override",
            variant: "danger",
            onPress: tmp3(11399).clearBuildOverride,
            arrow: true,
          });
          obj5.children = items1;
          tmp10Result = jsxs(tmp3(6074).TableRowGroup, { title: "Current Override", hasIcons: true, children: null });
        }
        const items2 = [tmp10Result, , ,];
        let str = "";
        if (null != stateFromStores) {
          str = "New";
        }
        let obj = first(504);
        items2[1] = jsx(first(6072).TableRadioGroup, {
          title: `${str} Override Type`,
          defaultValue: first.type,
          onChange(type) {
            dependencyMap({ type, id: "" });
          },
          hasIcons: true,
          children: items.map((value) => {
            value = value.value;
            ({ icon, label } = value);
            return jsx(first(6071).TableRadioRow, { value, label, icon }, value);
          }),
        });
        const found1 = items.find((value) => value.value === first.type);
        let label1;
        if (found1 != null) {
          label1 = found1.label;
        }
        const obj9 = { title: label1, hasIcons: true, children: null };
        const found2 = arr4.find((value) => value.value === first.type);
        let icon;
        if (found2 != null) {
          icon = found2.icon;
        }
        const obj10 = { icon, label: null };
        const found3 = arr4.find((value) => value.value === first.type);
        let label2;
        if (found3 != null) {
          label2 = found3.label;
        }
        const obj11 = { spacing: 16, children: null };
        const obj8 = {
          title: `${str} Override Type`,
          defaultValue: first.type,
          onChange(type) {
            dependencyMap({ type, id: "" });
          },
          hasIcons: true,
          children: items.map((value) => {
            value = value.value;
            ({ icon, label } = value);
            return jsx(first(6071).TableRadioRow, { value, label, icon }, value);
          }),
        };
        obj10.label = jsx(first(6098).TextInput, {
          size: "md",
          placeholder: "Enter " + label2,
          onChange(id) {
            const obj = {};
            const merged = Object.assign(first);
            obj.id = id;
            dependencyMap(obj);
          },
          autoCapitalize: "none",
          autoCorrect: false,
          autoComplete: "off",
          clearable: true,
        });
        obj9.children = jsx(first(5993).TableRow, { icon, label: null });
        items2[2] = jsx(first(6074).TableRowGroup, { title: label1, hasIcons: true, children: null });
        items2[3] = jsx(first(5594).Button, {
          text: "Apply Build Override",
          disabled: "" === first.id,
          onPress() {
            const type = first.type;
            if ("branch" === type) {
              const result = build_overrides_BuildOverrideUtils.setBuildOverrideForBranch(first.id);
            } else if ("id" === type) {
              const result1 = build_overrides_BuildOverrideUtils.setBuildOverrideForId(first.id);
            } else {
              GlobalUtils.assertNever(first.type);
            }
          },
        });
        obj11.children = items2;
        obj2.children = jsxs(first(5593).Stack, { spacing: 16, children: null });
        return (
          <ScrollView style={tmp.content} contentContainerStyle={null}>
            {null}
          </ScrollView>
        );
      },
);
