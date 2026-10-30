// discord_app/modules/conjure/home/native/ConjureHomeTargetPicker.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ChevronSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import UserIcon from "../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
        },
      },
      ...guilds.map((label) => ({
        label: label.name,
        IconComponent: target(9738).ServerIcon,
        action() {
          return dependencyMap(label.id);
        },
      })),
    ];
    return items;
  }, items);
  let obj = { items: memo, align: "above", title: null, children: null };
  const intl2 = tmp(tmp2[2]).intl;
  obj.title = intl2.string(guilds(onChange[3]).NyVn6T);
  obj.children = function children(arg0) {
    ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
    const obj = {
      ref,
      variant: "tertiary",
      size: "sm",
      shrink: true,
      text: name,
      icon: jsx(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs" }),
      iconPosition: "end",
      onPress,
      accessibilityLabel: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.formatToPlainString(_modDef3865.Lyx6pW, { name });
    obj.accessibilityActions = accessibilityActions;
    obj.onAccessibilityAction = onAccessibilityAction;
    return jsx(components_Button_Button.Button, {
      ref,
      variant: "tertiary",
      size: "sm",
      shrink: true,
      text: name,
      icon: jsx(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs" }),
      iconPosition: "end",
      onPress,
      accessibilityLabel: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
    });
  };
  return name(target(onChange[7]).ContextMenu, obj);
}
