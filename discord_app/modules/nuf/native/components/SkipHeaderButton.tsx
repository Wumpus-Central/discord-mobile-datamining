// discord_app/modules/nuf/native/components/SkipHeaderButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { button: null, insideNavigatorButton: null };
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.button = createStyles;
createStyles.insideNavigatorButton = { paddingRight: 16 };
let closure_3 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default function SkipHeaderButton(label) {
  const tmp = closure_3();
  label = label.label;
  if (label == null) {
    const intl = util.intl;
    label = intl.string(util.t["5Wxrcd"]);
  }
  const obj = {};
  const merged = Object.assign(label);
  const items = [tmp.button];
  let prop;
  if (label.insideNavigator) {
    prop = tmp.insideNavigatorButton;
  }
  items[1] = prop;
  obj.labelStyle = items;
  obj.label = label;
  obj.accessibilityLabel = label;
  return jsx(HeaderShared.HeaderTextButton, {});
}
