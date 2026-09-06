// === Module 17756: GuildRoleSubscriptionBenefitModalHeader ===

// Module 17756 (GuildRoleSubscriptionBenefitModalHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9050 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
const View = fn(17).View;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { headerContainer: null, headerButtonContainer: null, headerButtonStart: null, headerButtonEnd: null, headerButton: null, disabledButton: null, titleContainer: null, title: null, subtitle: null };
createStyles = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", paddingBottom: 8, paddingHorizontal: 16 };
createStyles.headerContainer = createStyles;
createStyles.headerButtonContainer = { flexDirection: "row", alignSelf: "center", minWidth: 60 };
createStyles.headerButtonStart = { alignItems: "flex-start" };
createStyles.headerButtonEnd = { alignItems: "flex-end" };
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
createStyles.headerButton = {};
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
createStyles.disabledButton = {};
createStyles.titleContainer = { flex: 1, flexDirection: "column" };
let obj3 = {};
const merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3.textAlign = "center";
createStyles.title = obj3;
createStyles.subtitle = { textAlign: "center" };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx");

export default function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = closure_8();
  let obj = { top: true, style: tmp.headerContainer, children: null };
  obj = { style: null, accessibilityRole: "button", onPress: onClose, children: null };
  const items = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  obj.style = items;
  const obj1 = { style: tmp.headerButton, variant: "text-md/medium", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t["ETE/oC"]);
  obj.children = timestampProducer(Text_Text.Text, obj1);
  const items1 = [timestampProducer(TouchableHitBoxDefault, obj), , ];
  const obj2 = { style: tmp.titleContainer, children: null };
  const items2 = [timestampProducer(native.LegacyText, { style: tmp.title, accessibilityRole: "header", children: title }), ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", children: title };
  items2[1] = timestampProducer(Text_Text.Text, { style: tmp.subtitle, variant: "text-xs/medium", color: "text-default", children: _slicedToArray(obj.useName(listingId), 1)[0] });
  obj2.children = items2;
  items1[1] = React5(View, obj2);
  const obj5 = { style: null, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: null };
  const items3 = [, ];
  ({ headerButtonContainer: arr4[0], headerButtonEnd: arr4[1] } = tmp);
  obj5.style = items3;
  const obj4 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-default", children: _slicedToArray(obj.useName(listingId), 1)[0] };
  const items4 = [tmp.headerButton, ];
  let disabledButton = !canSave;
  if (!canSave) {
    disabledButton = tmp.disabledButton;
  }
  const obj6 = { style: items4, children: null };
  items4[1] = disabledButton;
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t["R3BPH+"]);
  obj5.children = timestampProducer(native.LegacyText, obj6);
  items1[2] = timestampProducer(TouchableHitBoxDefault, obj5);
  obj.children = items1;
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj);
};