// === Module 11259: LikelyAtoMoreTipsModalActionItems ===

// Module 11259 (LikelyAtoMoreTipsModalActionItems)
import UserUtilsDefault from "UserUtils" /* 5063 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default function LikelyAtoMoreTipsModalActionItems(senderId) {
  senderId = senderId.senderId;
  const items = [UserStore];
  const items1 = [senderId];
  const stateFromStores = senderId(504).useStateFromStores(items, () => UserStore.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => UserUtilsDefault.getName(stateFromStores), items2);
  const obj2 = { hasIcons: true, children: null };
  const obj3 = { label: null, subLabel: null, onPress: null, icon: null };
  const intl = senderId(1114).intl;
  obj3.label = intl.formatToPlainString(senderId(1114).t["F/ID+9"], { username: memo });
  const intl2 = senderId(1114).intl;
  obj3.subLabel = intl2.string(senderId(1114).t.w2ve0t);
  obj3.onPress = senderId.handleMutePressed;
  obj3.icon = jsx(senderId(10973).BellSlashIcon, {});
  obj2.children = jsx(senderId(6969).TableRow, { label: null, subLabel: null, onPress: null, icon: null });
  return jsx(senderId(7054).TableRowGroup, { hasIcons: true, children: null });
};