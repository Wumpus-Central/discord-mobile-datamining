// discord_app/modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default function LikelyAtoMoreTipsModalActionItems(senderId) {
  senderId = senderId.senderId;
  let stateFromStores;
  let obj = senderId(589);
  const items = [mergeGuildAvatar];
  const items1 = [senderId];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores(outer1_2[4]).getName(stateFromStores), items2);
  obj = { hasIcons: true, children: null };
  obj = { label: null, subLabel: null, onPress: null, icon: null };
  const intl = senderId(1236).intl;
  obj[0] = intl.formatToPlainString(senderId(1236).t["F/ID+9"], { username: memo });
  const intl2 = senderId(1236).intl;
  obj[1] = intl2.string(senderId(1236).t.w2ve0t);
  obj[2] = senderId.handleMutePressed;
  obj[3] = jsx(senderId(9730).BellSlashIcon, {});
  obj[1] = jsx(senderId(5374).TableRow, { label: null, subLabel: null, onPress: null, icon: null });
  return jsx(senderId(5767).TableRowGroup, { label: null, subLabel: null, onPress: null, icon: null });
};