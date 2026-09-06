// discord_app/modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef16243 from "../../../../../_runtime/metro/16243__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  brightTitle: null,
  unavailableContainer: null,
  unavailableInfo: null,
  unavailableDescription: null,
  joinCtaTitle: null,
};
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.brightTitle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.unavailableContainer = { justifyContent: "center" };
createStyles.unavailableInfo = { alignItems: "center", justifyContent: "center" };
createStyles.unavailableDescription = { marginTop: 8, marginHorizontal: 16, textAlign: "center" };
createStyles.joinCtaTitle = { alignSelf: "center", marginTop: 16, paddingHorizontal: 24, textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx");

export default function UnavailableNotice(brightTitle) {
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = closure_6();
  let obj = { style: null, children: null };
  const items = [,];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  obj.style = items;
  obj = { style: tmp.unavailableInfo, children: null };
  obj = { source: _modDef16243 };
  const items1 = [React4(FastImageDefault, obj), ,];
  const items2 = [tmp.joinCtaTitle];
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  items1[1] = React4(Text_Text.Text, {
    variant: "heading-lg/extrabold",
    color: "text-default",
    style: items2,
    children: title,
  });
  items1[2] = React4(Text_Text.Text, {
    style: tmp.unavailableDescription,
    variant: "text-sm/medium",
    color: "text-default",
    children: description,
  });
  obj.children = items1;
  obj.children = hasOwnProperty(View, obj);
  return React4(View, obj);
}
