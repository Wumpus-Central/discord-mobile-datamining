// === Module 12795: ConjureHomeTargetPicker ===

// Module 12795 (ConjureHomeTargetPicker)
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11172 */;
import UserIcon from "UserIcon" /* 12268 */;
import conjureTarget from "conjureTarget" /* 12789 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeTargetPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeTargetPicker(target) {
  const cResult = target(name[3]).c(18);
  target = target.target;
  ({ guilds, onChange } = target);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(tmp2[4]).intl;
    const stringResult = intl.string(onChange(tmp2[5]).UPLaGM);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guilds) {
    if (cResult[2] === target) {
      let tmp7 = cResult[3];
    }
    name = undefined;
    if (tmp7 != null) {
      name = tmp7.name;
    }
    if (name == null) {
      name = first;
    }
    if (cResult[4] !== onChange) {
      const obj2 = {
        label: first,
        IconComponent: tmp(tmp2[7]).UserIcon,
        action() {
              return onChange(conjureTarget.CONJURE_TARGET_USER);
            }
      };
      cResult[4] = onChange;
      cResult[5] = obj2;
      let tmp12 = obj2;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === guilds) {
      if (cResult[7] === onChange) {
        if (cResult[8] === tmp12) {
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[4]).intl;
            const stringResult1 = intl2.string(onChange(tmp2[5]).NyVn6T);
            cResult[12] = stringResult1;
            let tmp19 = stringResult1;
          } else {
            tmp19 = cResult[12];
          }
          if (cResult[13] !== name) {
            class P {
              constructor(arg0) {
                ({ ref, onPress, accessibilityActions, onAccessibilityAction } = target);
                obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: closure_2, icon: jsx(closure_0(closure_2[10]).ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                intl = closure_0(closure_2[4]).intl;
                obj1 = { name: closure_2 };
                obj.accessibilityLabel = intl.formatToPlainString(closure_1(closure_2[5]).Lyx6pW, obj1);
                obj.accessibilityActions = accessibilityActions;
                obj.onAccessibilityAction = onAccessibilityAction;
                return jsx(closure_0(closure_2[9]).Button, obj);
              }
            }
            cResult[13] = name;
            cResult[14] = P;
          } else {
            class P {
              constructor(arg0) {
                ({ ref, onPress, accessibilityActions, onAccessibilityAction } = target);
                obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: closure_2, icon: jsx(closure_0(closure_2[10]).ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                intl = closure_0(closure_2[4]).intl;
                obj1 = { name: closure_2 };
                obj.accessibilityLabel = intl.formatToPlainString(closure_1(closure_2[5]).Lyx6pW, obj1);
                obj.accessibilityActions = accessibilityActions;
                obj.onAccessibilityAction = onAccessibilityAction;
                return jsx(closure_0(closure_2[9]).Button, obj);
              }
            }
          }
          if (cResult[15] === cResult[9]) {
            class P {
              constructor(arg0) {
                ({ ref, onPress, accessibilityActions, onAccessibilityAction } = target);
                obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: closure_2, icon: jsx(closure_0(closure_2[10]).ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                intl = closure_0(closure_2[4]).intl;
                obj1 = { name: closure_2 };
                obj.accessibilityLabel = intl.formatToPlainString(closure_1(closure_2[5]).Lyx6pW, obj1);
                obj.accessibilityActions = accessibilityActions;
                obj.onAccessibilityAction = onAccessibilityAction;
                return jsx(closure_0(closure_2[9]).Button, obj);
              }
            }
            return tmp23;
          }
          const obj3 = { items: cResult[9], align: "above", title: tmp19, children: P };
          const tmp25 = jsx(tmp(tmp2[11]).ContextMenu, { items: cResult[9], align: "above", title: tmp19, children: P });
          cResult[15] = cResult[9];
          cResult[16] = P;
          cResult[17] = tmp25;
          tmp23 = tmp25;
        }
      }
    }
    if (cResult[10] !== onChange) {
      class P {
        constructor(arg0) {
          ({ ref, onPress, accessibilityActions, onAccessibilityAction } = target);
          obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: closure_2, icon: jsx(closure_0(closure_2[10]).ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
          intl = closure_0(closure_2[4]).intl;
          obj1 = { name: closure_2 };
          obj.accessibilityLabel = intl.formatToPlainString(closure_1(closure_2[5]).Lyx6pW, obj1);
          obj.accessibilityActions = accessibilityActions;
          obj.onAccessibilityAction = onAccessibilityAction;
          return jsx(closure_0(closure_2[9]).Button, obj);
        }
      }
      cResult[10] = onChange;
      cResult[11] = tmp15;
    } else {
      class P {
        constructor(arg0) {
          ({ ref, onPress, accessibilityActions, onAccessibilityAction } = target);
          obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: closure_2, icon: jsx(closure_0(closure_2[10]).ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
          intl = closure_0(closure_2[4]).intl;
          obj1 = { name: closure_2 };
          obj.accessibilityLabel = intl.formatToPlainString(closure_1(closure_2[5]).Lyx6pW, obj1);
          obj.accessibilityActions = accessibilityActions;
          obj.onAccessibilityAction = onAccessibilityAction;
          return jsx(closure_0(closure_2[9]).Button, obj);
        }
      }
    }
    const items = [tmp12];
    HermesBuiltin.arraySpread(guilds.map(tmp15), 1);
    cResult[6] = guilds;
    cResult[7] = onChange;
    cResult[8] = tmp12;
    cResult[9] = items;
  }
  let tmp8 = null;
  if (target !== target(name[6]).CONJURE_TARGET_USER) {
    class P {
      constructor(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = target);
        obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: closure_2, icon: jsx(closure_0(closure_2[10]).ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
        intl = closure_0(closure_2[4]).intl;
        obj1 = { name: closure_2 };
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(closure_2[5]).Lyx6pW, obj1);
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return jsx(closure_0(closure_2[9]).Button, obj);
      }
    }
    if (tmp9 == null) {
      class P {
        constructor(arg0) {
          ({ ref, onPress, accessibilityActions, onAccessibilityAction } = target);
          obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: closure_2, icon: jsx(closure_0(closure_2[10]).ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
          intl = closure_0(closure_2[4]).intl;
          obj1 = { name: closure_2 };
          obj.accessibilityLabel = intl.formatToPlainString(closure_1(closure_2[5]).Lyx6pW, obj1);
          obj.accessibilityActions = accessibilityActions;
          obj.onAccessibilityAction = onAccessibilityAction;
          return jsx(closure_0(closure_2[9]).Button, obj);
        }
      }
    }
    tmp8 = tmp9;
  }
  cResult[1] = guilds;
  cResult[2] = target;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  let obj = target(name[3]);
}) : (function ConjureHomeTargetPicker(target) {
  target = target.target;
  const guilds = target.guilds;
  const onChange = target.onChange;
  let name;
  let intl = target(onChange[4]).intl;
  const stringResult = intl.string(guilds(onChange[5]).UPLaGM);
  noop = stringResult;
  let tmp5 = null;
  if (target !== target(onChange[6]).CONJURE_TARGET_USER) {
    let found = guilds.find((id) => id.id === target);
    if (found == null) {
      found = null;
    }
    tmp5 = found;
  }
  name = undefined;
  if (tmp5 != null) {
    name = tmp5.name;
  }
  if (name == null) {
    name = stringResult;
  }
  let items = [guilds, onChange, stringResult];
  const memo = noop.useMemo(() => {
    const items = [
      {
        label,
        IconComponent: UserIcon.UserIcon,
        action() {
          return dependencyMap(target(onChange[6]).CONJURE_TARGET_USER);
        }
      },
      ...guilds.map((label) => ({
        label: label.name,
        IconComponent: target(9712).ServerIcon,
        action() {
          return dependencyMap(label.id);
        }
      }))
    ];
    return items;
  }, items);
  let obj = { items: memo, align: "above", title: null, children: null };
  const intl2 = tmp(tmp2[4]).intl;
  obj.title = intl2.string(guilds(onChange[5]).NyVn6T);
  obj.children = function children(arg0) {
    ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
    const obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: name, icon: jsx(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.formatToPlainString(_modDef3864.Lyx6pW, { name });
    obj.accessibilityActions = accessibilityActions;
    obj.onAccessibilityAction = onAccessibilityAction;
    return jsx(components_Button_Button.Button, { ref, variant: "tertiary", size: "sm", shrink: true, text: name, icon: jsx(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null });
  };
  return name(target(onChange[11]).ContextMenu, obj);
});