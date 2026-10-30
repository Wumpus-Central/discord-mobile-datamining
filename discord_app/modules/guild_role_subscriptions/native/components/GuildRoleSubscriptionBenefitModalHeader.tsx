// === Module 19909: GuildRoleSubscriptionBenefitModalHeader ===

// Module 19909 (GuildRoleSubscriptionBenefitModalHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7286 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9090 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17147 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { headerContainer: { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", paddingBottom: 8, paddingHorizontal: 16 }, headerButtonContainer: { flexDirection: "row", alignSelf: "center", minWidth: 60 }, headerButtonStart: { alignItems: "flex-start" }, headerButtonEnd: { alignItems: "flex-end" }, titleContainer: { flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx");

export default function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = closure_8();
  const obj2 = { top: true, style: tmp.headerContainer, children: null };
  const obj3 = { style: null, accessibilityRole: "button", onPress: onClose, children: null };
  const items = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  obj3.style = items;
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj4 = { variant: "text-md/medium", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["ETE/oC"]);
  obj3.children = timestampProducer(Text_Text.Text, obj4);
  const items1 = [timestampProducer(TouchableHitBoxDefault, obj3), , ];
  items1[1] = timestampProducer(View, { style: tmp.titleContainer, children: timestampProducer(NavigatorHeader.NavigatorHeader, { title, subtitle: _slicedToArray(obj.useName(listingId), 1)[0] }) });
  const obj6 = { style: null, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: null };
  const items2 = [, ];
  ({ headerButtonContainer: arr3[0], headerButtonEnd: arr3[1] } = tmp);
  obj6.style = items2;
  const obj5 = { style: tmp.titleContainer, children: timestampProducer(NavigatorHeader.NavigatorHeader, { title, subtitle: _slicedToArray(obj.useName(listingId), 1)[0] }) };
  let str = "text-muted";
  if (canSave) {
    str = "interactive-text-active";
  }
  const obj7 = { variant: "text-md/medium", color: str, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t["R3BPH+"]);
  obj6.children = timestampProducer(Text_Text.Text, obj7);
  items1[2] = timestampProducer(TouchableHitBoxDefault, obj6);
  obj2.children = items1;
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj2);
};