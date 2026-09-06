// discord_app/modules/safety_common/native/URLCallout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SharedStateUtils from "../../masked_link/SharedStateUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsxs: c3, jsx: closure_4 } = jsxProd);
fn(4560);
let createStyles = { linkCalloutContainer: null, linkCalloutContainerText: null };
createStyles = {
  maxHeight: 300,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  width: "100%",
  borderRadius: nativeDefault.radii.md,
};
createStyles.linkCalloutContainer = createStyles;
createStyles.linkCalloutContainerText = {
  padding: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_12,
  textAlign: "center",
};
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export const URLCallout = function URLCallout(url) {
  const tmp = closure_5();
  let obj = SharedStateUtils;
  const urlParts = obj.useUrlParts(url.url);
  obj = { style: tmp.linkCalloutContainer, children: null };
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  obj = { style: tmp.linkCalloutContainerText, variant: "text-md/normal", children: null };
  const obj1 = { variant: "text-md/normal", color: "text-muted", children: null };
  const items = [protocol, "//"];
  obj1.children = items;
  const items1 = [
    React3(Text_Text.Text, obj1),
    React4(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: hostname }),
    React4(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl }),
  ];
  obj.children = items1;
  obj.children = React3(Text_Text.Text, obj);
  return React4(ScrollView, obj);
};
