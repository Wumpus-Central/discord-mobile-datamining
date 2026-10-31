// === Module 17696: OrbWalletEntryRow ===

// Module 17696 (OrbWalletEntryRow)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2172 from "module_2172" /* 2172 */;
import Text_Text from "Text/Text" /* 5624 */;
import Card from "Card" /* 6977 */;
import Badge from "Badge" /* 7306 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7378 */;
import OrbsIcon from "OrbsIcon" /* 9532 */;
import noop from "module_19" /* 19 */;

require = fn;
function OrbWalletEntryBadge(notificationType) {
  notificationType = notificationType.notificationType;
  if (constants.NEW_ACHIEVEMENT === notificationType) {
    return hasOwnProperty(Badge.Badge, { type: "new", variant: "primary" });
  } else if (tmp.UNCLAIMED_ACHIEVEMENT === notificationType) {
    const obj = { type: null, variant: "primary" };
    const obj2 = { text: null };
    const intl = util.intl;
    obj2.text = intl.string(_modDef2172.WmfVjs);
    obj.type = obj2;
    return hasOwnProperty(Badge.Badge, obj);
  } else {
    return null;
  }
}
const View = fn(17).View;
const constants = fn(15625).ClientUnreadNotificationType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_24 }, balance: null, balanceText: null, trailing: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_24 };
obj2.balance = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.balanceText = { flexShrink: 1 };
let obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.trailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbWalletEntryRow.tsx");

export function OrbWalletEntryRow(onPress) {
  ({ balance, notificationType } = onPress);
  const tmp = closure_7();
  let str;
  if (balance != null) {
    str = balance.toString();
  }
  if (str == null) {
    str = "";
  }
  const obj = { onPress: onPress.onPress, radius: 12, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = util.intl;
  if (null != notificationType) {
    let zPaLL9 = util.t.AgMngw;
  } else {
    zPaLL9 = util.t.zPaLL9;
  }
  obj.accessibilityLabel = intl.formatToPlainString(zPaLL9, { balance: str });
  const obj2 = { style: tmp.row, children: null };
  const obj3 = { style: tmp.balance, children: null };
  const items = [hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: nativeDefault.colors.ICON_SUBTLE, accessible: false }), ];
  const obj5 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.balanceText, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.formatToPlainString(util.t["8xDISf"], { balance: str });
  items[1] = hasOwnProperty(Text_Text.Text, obj5);
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3), ];
  const obj6 = { style: tmp.trailing, children: null };
  const items2 = [hasOwnProperty(OrbWalletEntryBadge, { notificationType }), ];
  const obj4 = { size: "sm", color: nativeDefault.colors.ICON_SUBTLE, accessible: false };
  items2[1] = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "refresh_sm", color: nativeDefault.colors.ICON_SUBTLE, accessible: false });
  obj6.children = items2;
  items1[1] = timestampProducer(View, obj6);
  obj2.children = items1;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(Card.Card, obj);
}