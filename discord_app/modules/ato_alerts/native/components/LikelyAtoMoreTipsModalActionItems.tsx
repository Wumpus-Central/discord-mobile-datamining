// discord_app/modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

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
  obj.icon = jsx(senderId(9059).BellSlashIcon, {});
  obj.children = jsx(senderId(5605).TableRow, { label: null, subLabel: null, onPress: null, icon: null });
  return jsx(senderId(5687).TableRowGroup, { label: null, subLabel: null, onPress: null, icon: null });
}
