// === Module 18319: GuildRoleSubscriptionBenefitModalHeader ===

// Module 18319 (GuildRoleSubscriptionBenefitModalHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4825 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7456 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 10095 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 5829 */;

require = fn;
const View = fn(17).View;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { headerContainer: { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", paddingBottom: 8, paddingHorizontal: 16 }, headerButtonContainer: { flexDirection: "row", alignSelf: "center", minWidth: 60 }, headerButtonStart: { alignItems: "flex-start" }, headerButtonEnd: { alignItems: "flex-end" }, headerButton: null, disabledButton: null, titleContainer: null, title: null, subtitle: null };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj2.headerButton = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj2.disabledButton = {};
obj2.titleContainer = { flex: 1, flexDirection: "column" };
let obj6 = {};
let TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj6.textAlign = "center";
obj2.title = obj6;
obj2.subtitle = { textAlign: "center" };
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
  const obj4 = { style: tmp.headerButton, variant: "text-md/medium", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["ETE/oC"]);
  obj3.children = timestampProducer(Text_Text.Text, obj4);
  const items1 = [timestampProducer(TouchableHitBoxDefault, obj3), , ];
  const obj5 = { style: tmp.titleContainer, children: null };
  const items2 = [timestampProducer(native.LegacyText, { style: tmp.title, accessibilityRole: "header", children: title }), ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", children: title };
  items2[1] = timestampProducer(Text_Text.Text, { style: tmp.subtitle, variant: "text-xs/medium", color: "text-default", children: _slicedToArray(obj.useName(listingId), 1)[0] });
  obj5.children = items2;
  items1[1] = React5(View, obj5);
  const obj8 = { style: null, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: null };
  const items3 = [, ];
  ({ headerButtonContainer: arr4[0], headerButtonEnd: arr4[1] } = tmp);
  obj8.style = items3;
  const obj7 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-default", children: _slicedToArray(obj.useName(listingId), 1)[0] };
  const items4 = [tmp.headerButton, ];
  let disabledButton = !canSave;
  if (!canSave) {
    disabledButton = tmp.disabledButton;
  }
  const obj9 = { style: items4, children: null };
  items4[1] = disabledButton;
  const intl2 = util.intl;
  obj9.children = intl2.string(util.t["R3BPH+"]);
  obj8.children = timestampProducer(native.LegacyText, obj9);
  items1[2] = timestampProducer(TouchableHitBoxDefault, obj8);
  obj2.children = items1;
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj2);
};