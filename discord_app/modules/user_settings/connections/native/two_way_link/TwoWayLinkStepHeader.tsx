// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx",
);

export function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  const obj = { variant: "body-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.fHz6eR, { number: idx, total });
  return jsx(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", children: null });
}
