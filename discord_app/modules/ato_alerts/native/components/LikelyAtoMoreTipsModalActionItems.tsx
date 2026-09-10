// === Module 11452: LikelyAtoMoreTipsModalActionItems ===

// Module 11452 (LikelyAtoMoreTipsModalActionItems)
import UserUtilsDefault from "UserUtils" /* 4449 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default function LikelyAtoMoreTipsModalActionItems(senderId) {
  senderId = senderId.senderId;
  let obj = senderId(504);
  const items = [UserStore];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => UserUtilsDefault.getName(stateFromStores), items2);
  obj = { hasIcons: true, children: null };
  obj = { label: null, subLabel: null, onPress: null, icon: null };
  const intl = senderId(1114).intl;
  obj.label = intl.formatToPlainString(senderId(1114).t["F/ID+9"], { username: memo });
  const intl2 = senderId(1114).intl;
  obj.subLabel = intl2.string(senderId(1114).t.w2ve0t);
  obj.onPress = senderId.handleMutePressed;
  obj.icon = jsx(senderId(9128).BellSlashIcon, {});
  obj.children = jsx(senderId(5655).TableRow, { label: null, subLabel: null, onPress: null, icon: null });
  return jsx(senderId(5737).TableRowGroup, { label: null, subLabel: null, onPress: null, icon: null });
};