// discord_app/modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default function LikelyAtoMoreTipsModalActionItems(senderId) {
  senderId = senderId.senderId;
  let obj = senderId(589);
  const items = [closure_4];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores(dependencyMap[4]).getName(stateFromStores), items2);
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