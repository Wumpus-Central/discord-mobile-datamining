// discord_app/modules/safety_common/native/URLCallout.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import useUrlParts from "../../masked_link/SharedStateUtils.tsx";
import { ScrollView } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsxs: c3, jsx: c4 } = jsxProd);
createCacheKey = { linkCalloutContainer: null, linkCalloutContainerText: null };
createCacheKey = { maxHeight: 300, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_12, textAlign: "center" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj1 = { padding: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_12, textAlign: "center" };
const result = require("set").fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export const URLCallout = function URLCallout(url) {
  const tmp = callback3();
  let obj = useUrlParts;
  const urlParts = obj.useUrlParts(url.url);
  obj = { style: tmp.linkCalloutContainer, children: null };
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  obj = { style: tmp.linkCalloutContainerText, variant: "text-md/normal", children: null };
  const items = [protocol, "//"];
  const items1 = [callback(Text.Text, { variant: "text-md/normal", color: "text-muted", children: items }), callback2(Text.Text, { variant: "text-md/semibold", color: "text-default", children: hostname }), callback2(Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl })];
  obj[2] = items1;
  obj[1] = callback(Text.Text, obj);
  return callback2(ScrollView, obj);
};