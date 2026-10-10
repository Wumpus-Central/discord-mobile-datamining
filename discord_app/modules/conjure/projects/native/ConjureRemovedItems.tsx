// discord_app/modules/conjure/projects/native/ConjureRemovedItems.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import FolderIcon from "../../../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import BotTagDefault from "../../../applications/native/BotTag.tsx";
import RobotIcon from "../../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  box: {
    padding: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  },
  boxDimmed: { opacity: 0.5 },
  optionalLabel: { flex: 1 },
};
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ItemIcon(kind) {
      const cResult = c.c(3);
      kind = kind.kind;
      if ("channel" === kind) {
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp15 = timestampProducer(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
          cResult[0] = tmp15;
          let first = tmp15;
        } else {
          first = cResult[0];
        }
        return first;
      } else if ("app" === kind) {
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = timestampProducer(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
          cResult[1] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[1];
        }
        return tmp9;
      } else if ("project" === kind) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = timestampProducer(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
          cResult[2] = tmp7;
          let tmp5 = tmp7;
        } else {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
    }
  : function ItemIcon(kind) {
      kind = kind.kind;
      if ("channel" === kind) {
        return timestampProducer(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
      } else if ("app" === kind) {
        return timestampProducer(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
      } else if ("project" === kind) {
        return timestampProducer(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
      }
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ItemsBox(arg0) {
      const cResult = c.c(12);
      ({ items, dimmed, children } = arg0);
      const tmp5 = closure_8();
      let boxDimmed = null;
      if (tmp4) {
        boxDimmed = tmp5.boxDimmed;
      }
      if (cResult[0] === tmp5.box) {
        if (cResult[1] === boxDimmed) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] !== items) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function o(kind) {
              const obj = { direction: "horizontal", spacing: 8, align: "center", children: null };
              const items = [
                closure_1_6(closure_1_9, { kind: kind.kind }),
                closure_1_6(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: kind.label }),
              ];
              obj.children = items;
              return closure_1_7(Stack_Stack.Stack, obj, kind.key);
            };
            cResult[5] = fn;
            let tmp10 = fn;
          } else {
            tmp10 = cResult[5];
          }
          const mapped = items.map(tmp10);
          cResult[3] = items;
          cResult[4] = mapped;
        } else {
          if (cResult[6] === children) {
            if (cResult[7] === tmp8) {
              let tmp13 = cResult[8];
            }
            if (cResult[9] === tmp7) {
              if (cResult[10] === tmp13) {
                let tmp16 = cResult[11];
              }
              return tmp16;
            }
            const obj2 = { style: tmp7, children: tmp13 };
            const tmp19 = timestampProducer(hasOwnProperty, obj2);
            cResult[9] = tmp7;
            cResult[10] = tmp13;
            cResult[11] = tmp19;
            tmp16 = tmp19;
          }
          const obj3 = { spacing: 8, children: null };
          const items1 = [cResult[4], children];
          obj3.children = items1;
          const tmp15 = React5(Stack_Stack.Stack, obj3);
          cResult[6] = children;
          cResult[7] = cResult[4];
          cResult[8] = tmp15;
          tmp13 = tmp15;
        }
      }
      const items2 = [tmp5.box, boxDimmed];
      cResult[0] = tmp5.box;
      cResult[1] = boxDimmed;
      cResult[2] = items2;
      tmp7 = items2;
      tmp4 = undefined !== dimmed && dimmed;
    }
  : function ItemsBox(children) {
      ({ items, dimmed } = children);
      if (dimmed === undefined) {
        dimmed = false;
      }
      const tmp = closure_8();
      const items1 = [tmp.box];
      let boxDimmed = null;
      if (dimmed) {
        boxDimmed = tmp.boxDimmed;
      }
      let obj = { style: items1, children: null };
      items1[1] = boxDimmed;
      const obj2 = { spacing: 8, children: null };
      const items2 = [
        items.map((kind) => {
          const obj = { direction: "horizontal", spacing: 8, align: "center", children: null };
          const items = [
            closure_1_6(closure_1_9, { kind: kind.kind }),
            closure_1_6(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: kind.label }),
          ];
          obj.children = items;
          return closure_1_7(Stack_Stack.Stack, obj, kind.key);
        }),
        children.children,
      ];
      obj2.children = items2;
      obj.children = React5(Stack_Stack.Stack, obj2);
      return timestampProducer(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OptionalItemRow(onChange) {
      const cResult = c.c(25);
      ({ item, checked } = onChange);
      onChange = onChange.onChange;
      const disabled = onChange.disabled;
      const tmp4 = closure_8();
      if (cResult[0] === checked) {
        if (cResult[1] === disabled) {
          let tmp5 = cResult[2];
        }
        const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp5);
        ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
        let boxDimmed = null;
        if (disabled) {
          boxDimmed = tmp4.boxDimmed;
        }
        if (cResult[3] === checked) {
          if (cResult[4] === onChange) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] !== item.kind) {
            const obj2 = { kind: item.kind };
            const tmp12 = timestampProducer(closure_9, obj2);
            cResult[6] = item.kind;
            cResult[7] = tmp12;
            let tmp9 = tmp12;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === item.label) {
            if (cResult[9] === tmp4.optionalLabel) {
              let tmp13 = cResult[10];
            }
            if (cResult[11] !== checked) {
              const obj3 = { checked };
              const tmp18 = timestampProducer(FormCheckbox.FormCheckbox, obj3);
              cResult[11] = checked;
              cResult[12] = tmp18;
              let tmp16 = tmp18;
            } else {
              tmp16 = cResult[12];
            }
            if (cResult[13] === tmp9) {
              if (cResult[14] === tmp13) {
                if (cResult[15] === tmp16) {
                  let tmp19 = cResult[16];
                }
                if (cResult[17] === accessibilityRole) {
                  if (cResult[18] === accessibilityState) {
                    if (cResult[19] === disabled) {
                      if (cResult[20] === item.label) {
                        if (cResult[21] === boxDimmed) {
                          if (cResult[22] === tmp8) {
                            if (cResult[23] === tmp19) {
                              let tmp22 = cResult[24];
                            }
                            return tmp22;
                          }
                        }
                      }
                    }
                  }
                }
                const obj4 = {
                  accessibilityRole,
                  accessibilityState,
                  accessibilityLabel: item.label,
                  disabled,
                  style: boxDimmed,
                  onPress: tmp8,
                  children: tmp19,
                };
                const tmp25 = timestampProducer(React4, obj4);
                cResult[17] = accessibilityRole;
                cResult[18] = accessibilityState;
                cResult[19] = disabled;
                cResult[20] = item.label;
                cResult[21] = boxDimmed;
                cResult[22] = tmp8;
                cResult[23] = tmp19;
                cResult[24] = tmp25;
                tmp22 = tmp25;
              }
            }
            const obj5 = { direction: "horizontal", spacing: 8, align: "center", children: null };
            const items = [tmp9, tmp13, tmp16];
            obj5.children = items;
            const tmp21 = React5(Stack_Stack.Stack, obj5);
            cResult[13] = tmp9;
            cResult[14] = tmp13;
            cResult[15] = tmp16;
            cResult[16] = tmp21;
            tmp19 = tmp21;
          }
          const obj6 = {
            variant: "text-sm/medium",
            color: "text-subtle",
            style: tmp4.optionalLabel,
            children: item.label,
          };
          const tmp15 = timestampProducer(Text_Text.Text, obj6);
          cResult[8] = item.label;
          cResult[9] = tmp4.optionalLabel;
          cResult[10] = tmp15;
          tmp13 = tmp15;
        }
        const fn = function y() {
          return onChange(!checked);
        };
        cResult[3] = checked;
        cResult[4] = onChange;
        cResult[5] = fn;
        tmp8 = fn;
        const tmpResult = useA11yRolesNative;
      }
      const obj7 = { checked, disabled };
      cResult[0] = checked;
      cResult[1] = disabled;
      cResult[2] = obj7;
      tmp5 = obj7;
    }
  : function OptionalItemRow(arg0) {
      ({ item, checked } = arg0);
      ({ onChange: importDefault, disabled } = arg0);
      const tmp = closure_8();
      const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
      const obj2 = {
        accessibilityRole: checkboxA11yNative.accessibilityRole,
        accessibilityState: checkboxA11yNative.accessibilityState,
        accessibilityLabel: item.label,
        disabled,
        style: null,
        onPress: null,
        children: null,
      };
      let boxDimmed = null;
      if (disabled) {
        boxDimmed = tmp.boxDimmed;
      }
      obj2.style = boxDimmed;
      obj2.onPress = function onPress() {
        return importDefault(!checked);
      };
      const obj3 = { direction: "horizontal", spacing: 8, align: "center", children: null };
      const items = [
        timestampProducer(closure_9, { kind: item.kind }),
        timestampProducer(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          style: tmp.optionalLabel,
          children: item.label,
        }),
        timestampProducer(FormCheckbox.FormCheckbox, { checked }),
      ];
      obj3.children = items;
      obj2.children = React5(Stack_Stack.Stack, obj3);
      return timestampProducer(React4, obj2);
    };
fn(558);
let obj3 = {
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureRemovedItems(arg0) {
      const cResult = c.c(6);
      ({ items, optionalItem } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-md/semibold", color: "text-strong", children: null };
        const intl = util.intl;
        obj2.children = intl.string(_modDef3849["+E2PqP"]);
        const tmp7 = timestampProducer(Text_Text.Text, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== optionalItem) {
        let tmp9 = null;
        if (null != optionalItem) {
          const obj3 = {};
          const merged = Object.assign(optionalItem);
          tmp9 = timestampProducer(closure_11, obj3);
        }
        cResult[1] = optionalItem;
        cResult[2] = tmp9;
        let tmp8 = tmp9;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === items) {
        if (cResult[4] === tmp8) {
          let tmp15 = cResult[5];
        }
        return tmp15;
      }
      const obj4 = { spacing: 8, children: null };
      const items1 = [first, timestampProducer(closure_10, { items, children: tmp8 })];
      obj4.children = items1;
      const tmp16 = React5(Stack_Stack.Stack, obj4);
      cResult[3] = items;
      cResult[4] = tmp8;
      cResult[5] = tmp16;
      tmp15 = tmp16;
    }
  : function ConjureRemovedItems(items) {
      const optionalItem = items.optionalItem;
      const obj = { variant: "text-md/semibold", color: "text-strong", children: null };
      const intl = util.intl;
      obj.children = intl.string(_modDef3849["+E2PqP"]);
      items = [timestampProducer(Text_Text.Text, obj)];
      const obj2 = { items: items.items, children: null };
      let tmp2Result = null;
      if (null != optionalItem) {
        const obj3 = {};
        const merged = Object.assign(optionalItem);
        tmp2Result = timestampProducer(closure_11, obj3);
      }
      const obj4 = { spacing: 8, children: null };
      obj2.children = tmp2Result;
      items[1] = timestampProducer(closure_10, obj2);
      obj4.children = items;
      return React5(Stack_Stack.Stack, obj4);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemovedItems.tsx");

export default tmp4;
export const formatWithAppTag = function formatWithAppTag(HmNT_r, targetAppName) {
  const intl = util.intl;
  const obj = { app: null };
  const obj2 = { children: null };
  const items = [targetAppName, " ", timestampProducer(BotTagDefault, {})];
  obj2.children = items;
  obj.app = React5(noop.Fragment, obj2, "app");
  return intl.format(HmNT_r, obj);
};
export const ConjureRemoveEverythingField = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureRemoveEverythingField(arg0) {
      const cResult = c.c(10);
      ({ checked, onChange, items } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3849.gKA9tU);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === checked) {
        if (cResult[2] === onChange) {
          let tmp7 = cResult[3];
        }
        if (cResult[4] === items) {
          if (cResult[5] === tmp9) {
            let tmp10 = cResult[6];
          }
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp10) {
              let tmp14 = cResult[9];
            }
            return tmp14;
          }
          const obj2 = { spacing: 8, children: null };
          const items1 = [tmp7, tmp10];
          obj2.children = items1;
          const tmp16 = React5(Stack_Stack.Stack, obj2);
          cResult[7] = tmp7;
          cResult[8] = tmp10;
          cResult[9] = tmp16;
          tmp14 = tmp16;
        }
        const obj3 = { items, dimmed: !checked };
        const tmp13 = timestampProducer(closure_10, obj3);
        cResult[4] = items;
        cResult[5] = !checked;
        cResult[6] = tmp13;
        tmp10 = tmp13;
      }
      const tmp8 = timestampProducer(TableRowGroup.TableRowGroup, {
        hasIcons: false,
        children: timestampProducer(TableCheckboxRow.TableCheckboxRow, { label: first, checked, onPress: onChange }),
      });
      cResult[1] = checked;
      cResult[2] = onChange;
      cResult[3] = tmp8;
      tmp7 = tmp8;
      const obj4 = {
        hasIcons: false,
        children: timestampProducer(TableCheckboxRow.TableCheckboxRow, { label: first, checked, onPress: onChange }),
      };
    }
  : function ConjureRemoveEverythingField(checked) {
      checked = checked.checked;
      ({ onChange, items } = checked);
      const obj = { spacing: 8, children: null };
      const obj2 = { hasIcons: false, children: null };
      const obj3 = { label: null, checked: null, onPress: null };
      const intl = util.intl;
      obj3.label = intl.string(_modDef3849.gKA9tU);
      obj3.checked = checked;
      obj3.onPress = onChange;
      obj2.children = timestampProducer(TableCheckboxRow.TableCheckboxRow, obj3);
      const items1 = [
        timestampProducer(TableRowGroup.TableRowGroup, obj2),
        timestampProducer(closure_10, { items, dimmed: !checked }),
      ];
      obj.children = items1;
      return React5(Stack_Stack.Stack, obj);
    };
