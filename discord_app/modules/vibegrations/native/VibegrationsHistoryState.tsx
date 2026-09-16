// discord_app/modules/vibegrations/native/VibegrationsHistoryState.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3591 from "../intl/VibegrationsUntranslated.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let obj2 = { placeholder: { alignItems: "center", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_24 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsHistoryState.tsx");

export const VibegrationsHistoryPlaceholder = function VibegrationsHistoryPlaceholder(state) {
  ({ emptyTitle, emptyBody } = state);
  const obj = { style: closure_6().placeholder, accessibilityRole: null, children: null };
  let str;
  if ("failed" === state.state.status) {
    str = "alert";
  }
  obj.accessibilityRole = str;
  if ("failed" === state.state.status) {
    const intl = util.intl;
    emptyTitle = intl.string(_modDef3591.TV42NS);
  }
  const items = [React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: emptyTitle })];
  if ("failed" === state.state.status) {
    const intl2 = util.intl;
    emptyBody = intl2.string(_modDef3591["+2AMt1"]);
  }
  items[1] = React4(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: emptyBody });
  obj.children = items;
  return hasOwnProperty(View, obj);
};
export const VibegrationsHistoryNotice = function VibegrationsHistoryNotice(state) {
  state = state.state;
  if (!state.hasRows) {
    return null;
  } else if ("failed" === state.status) {
    const obj2 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(_modDef3591.TV42NS);
    let tmp = React4(Text_Text.Text, obj2);
  } else if (state.truncated) {
    const obj = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = util.intl;
    obj.children = intl.string(_modDef3591["U/qDX9"]);
    tmp = React4(Text_Text.Text, obj);
  }
};
