// discord_app/modules/interaction_components/native/actions/MenuActionItemComponent.tsx
import Server from "../../../../flow/Server.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import InteractionComponentTypes from "../../InteractionComponentTypes.tsx";
import MaskedLinkUtils from "../../../../utils/MaskedLinkUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/MenuActionItemComponent.tsx");

export default function MenuActionItemComponent(style) {
  style = style.style;
  ({ disabled, emoji, url: importDefault } = style);
  ({ label, description } = style);
  const componentState = style(visualState[2]).useComponentState(style);
  visualState = componentState.visualState;
  ({ executeStateUpdate: jsx, isDisabled } = componentState);
  if (visualState === style(visualState[3]).ActionComponentState.LOADING) {
    let tmp4 = jsx(tmp(tmp2[4]).Ellipsis, { variant: "secondary", size: "sm" });
  } else if (style === tmp(tmp2[5]).MenuActionItemStyle.LINK) {
    tmp4 = jsx(tmp(tmp2[6]).LinkExternalSmallIcon, { color: "text-muted" });
  }
  let obj2 = { label, subLabel: description, variant: null, disabled: null, icon: null, trailing: null, onPress: null };
  let str = "default";
  if (style === style(visualState[5]).MenuActionItemStyle.DANGER) {
    str = "danger";
  }
  obj2.variant = str;
  if (!disabled) {
    disabled = visualState === tmp(tmp2[3]).ActionComponentState.DISABLED;
  }
  if (!disabled) {
    disabled = isDisabled;
  }
  obj2.disabled = disabled;
  let tmp7Result;
  if (null != emoji) {
    const obj3 = { emoji };
    tmp7Result = jsx(require("ComponentEmojiIcon"), { emoji });
  }
  obj2.icon = tmp7Result;
  obj2.trailing = tmp4;
  obj2.onPress = function handlePress() {
    if (style === Server.MenuActionItemStyle.LINK) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      let tmp9 = null != href;
      if (tmp9) {
        tmp9 = href.length > 0;
      }
      if (tmp9) {
        const obj2 = { href, shouldConfirm: true };
        MaskedLinkUtils.handleClick(obj2);
        const tmpResult = MaskedLinkUtils;
      }
    } else if (visualState === InteractionComponentTypes.ActionComponentState.NORMAL) {
      jsx();
    }
  };
  return jsx(style(visualState[7]).TableRow, {
    label,
    subLabel: description,
    variant: null,
    disabled: null,
    icon: null,
    trailing: null,
    onPress: null,
  });
}
