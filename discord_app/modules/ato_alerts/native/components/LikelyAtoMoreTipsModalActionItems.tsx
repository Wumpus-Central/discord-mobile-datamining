// discord_app/modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx",
);

export default function LikelyAtoMoreTipsModalActionItems(senderId) {
  senderId = senderId.senderId;
  let stateFromStores;
  let obj = senderId(586);
  const items = [closure_4];
  const items1 = [senderId];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores(closure_1_2[4]).getName(stateFromStores), items2);
  obj = { hasIcons: true, children: null };
  obj = { label: null, subLabel: null, onPress: null, icon: null };
  const intl = senderId(1233).intl;
  obj[0] = intl.formatToPlainString(senderId(1233).t["F/ID+9"], { username: memo });
  const intl2 = senderId(1233).intl;
  obj[1] = intl2.string(senderId(1233).t.w2ve0t);
  obj[2] = senderId.handleMutePressed;
  obj[3] = jsx(senderId(10260).BellSlashIcon, {});
  obj[1] = jsx(senderId(5607).TableRow, { label: null, subLabel: null, onPress: null, icon: null });
  return jsx(senderId(6000).TableRowGroup, { label: null, subLabel: null, onPress: null, icon: null });
}
