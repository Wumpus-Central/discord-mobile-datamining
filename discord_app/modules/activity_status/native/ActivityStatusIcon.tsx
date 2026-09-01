// discord_app/modules/activity_status/native/ActivityStatusIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

noopAll;
let closure_1 = createCacheKey.createStyles({ icon: { flexShrink: 0 } });
const result = require("set").fileFinishedImporting("modules/activity_status/native/ActivityStatusIcon.tsx");

export default function ActivityStatusIcon(arg0) {
  ({ icon, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const obj = { size: "xxs", style: null, color: "status-positive" };
  const items = [callback().icon, style];
  obj[1] = items;
  const merged1 = Object.assign(merged);
  return <icon size="xxs" style={null} color="status-positive" />;
}
