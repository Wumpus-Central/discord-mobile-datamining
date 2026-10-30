// === Module 12944: ConjureHomeTargetPicker ===

// Module 12944 (ConjureHomeTargetPicker)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11377 */;
import UserIcon from "UserIcon" /* 12431 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeTargetPicker.tsx");

export default function ConjureHomeTargetPicker(target) {
  target = target.target;
  const guilds = target.guilds;
  const onChange = target.onChange;
  let name;
  let intl = target(onChange[2]).intl;
  const stringResult = intl.string(guilds(onChange[3]).UPLaGM);
  noop = stringResult;
  let tmp5 = null;
  if (target !== target(onChange[4]).CONJURE_TARGET_USER) {
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
          return dependencyMap(target(onChange[4]).CONJURE_TARGET_USER);
        }
      },
      ...guilds.map((label) => ({
        label: label.name,
        IconComponent: target(9738).ServerIcon,
        action() {
          return dependencyMap(label.id);
        }
      }))
    ];
    return items;
  }, items);
  let obj = { items: memo, align: "above", title: null, children: null };
  const intl2 = tmp(tmp2[2]).intl;
  obj.title = intl2.string(guilds(onChange[3]).NyVn6T);
  obj.children = function children(arg0) {
    ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
    const obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: name, icon: jsx(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.formatToPlainString(_modDef3865.Lyx6pW, { name });
    obj.accessibilityActions = accessibilityActions;
    obj.onAccessibilityAction = onAccessibilityAction;
    return jsx(components_Button_Button.Button, { ref, variant: "tertiary", size: "sm", shrink: true, text: name, icon: jsx(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs" }), iconPosition: "end", onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null });
  };
  return name(target(onChange[7]).ContextMenu, obj);
};