// === Module 10592: LikelyAtoMoreTipsModalActionItems ===

// Module 10592 (LikelyAtoMoreTipsModalActionItems)
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default function LikelyAtoMoreTipsModalActionItems(senderId) {
  senderId = senderId.senderId;
  let stateFromStores;
  let obj = senderId(589);
  const items = [closure_4];
  const items1 = [senderId];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores(closure_1_2[4]).getName(stateFromStores), items2);
  obj = { hasIcons: true, children: null };
  obj = { label: null, subLabel: null, onPress: null, icon: null };
  const intl = senderId(1236).intl;
  obj[0] = intl.formatToPlainString(senderId(1236).t["F/ID+9"], { username: memo });
  const intl2 = senderId(1236).intl;
  obj[1] = intl2.string(senderId(1236).t.w2ve0t);
  obj[2] = senderId.handleMutePressed;
  obj[3] = jsx(senderId(10001).BellSlashIcon, {});
  obj[1] = jsx(senderId(6291).TableRow, { label: null, subLabel: null, onPress: null, icon: null });
  return jsx(senderId(6286).TableRowGroup, { label: null, subLabel: null, onPress: null, icon: null });
};