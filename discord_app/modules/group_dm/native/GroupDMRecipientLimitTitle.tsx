// === Module 16578: GroupDMRecipientLimitTitle ===

// Module 16578 (GroupDMRecipientLimitTitle)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useToken from "useToken" /* 4531 */;
import Text_Text from "Text/Text" /* 4832 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11086 */;
import openGroupDMNitroCapInfoActionSheetDefault from "openGroupDMNitroCapInfoActionSheet" /* 11670 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const MAX_GROUP_DM_PARTICIPANTS = fn(1074).MAX_GROUP_DM_PARTICIPANTS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { title: { textAlign: "center", fontSize: 18 }, subtitleRow: { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, subtitle: { textAlign: "center" }, nitroWheelIcon: null };
const PlatformUtils = fn(1364);
let tmp5;
if (PlatformUtils.isAndroid()) {
  let items = [{ translateY: 2 }];
  tmp5 = items;
}
obj2.nitroWheelIcon = { transform: tmp5 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMRecipientLimitTitle.tsx");

export default function GroupDMRecipientLimitTitle(arg0) {
  ({ title, memberCount, recipientLimit } = arg0);
  const tmp = closure_9();
  const groupDMNitroAudience = GroupDMNitroUpsellModel.useGroupDMNitroAudience();
  const token = useToken.useToken(nativeDefault.modules.mobile.HEADER_TITLE_TEXT_STYLE);
  const token1 = useToken.useToken(nativeDefault.colors.PREMIUM_NITRO_PINK_TEXT);
  let token2 = useToken.useToken(nativeDefault.colors.TEXT_SUBTLE);
  let tmp9 = "entitled" === groupDMNitroAudience;
  if (tmp9) {
    tmp9 = recipientLimit > MAX_GROUP_DM_PARTICIPANTS;
  }
  let str = "text-subtle";
  if (tmp9) {
    if (tmp11) {
      str = "premium-nitro-pink-text";
    }
    let str2 = str;
  } else {
    str2 = str;
    if (memberCount >= recipientLimit) {
      str2 = "text-feedback-critical";
    }
  }
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t["9EQix0"], { numMembers: memberCount, maxMemberLimit: recipientLimit });
  const items = [timestampProducer(Text_Text.Text, { lineClamp: 1, variant: token, color: "mobile-text-heading-primary", style: tmp.title, maxFontSizeMultiplier: 2, children: title }), ];
  const obj6 = { style: tmp.subtitleRow, children: null };
  let tmp15Result = null;
  if (tmp9) {
    if (tmp11) {
      token2 = token1;
    }
    const obj7 = { size: "xxs", color: token2, style: tmp.nitroWheelIcon, accessible: false };
    tmp15Result = timestampProducer(NitroWheelIcon.NitroWheelIcon, obj7);
  }
  const obj8 = { children: null };
  const items1 = [tmp15Result, timestampProducer(Text_Text.Text, { lineClamp: 1, variant: "text-xs/medium", color: str2, style: tmp.subtitle, maxFontSizeMultiplier: 2, children: formatToPlainStringResult })];
  obj6.children = items1;
  items[1] = React5(React4, obj6);
  obj8.children = items;
  const tmp13Result = React5(React6, obj8);
  if (tmp9) {
    const obj10 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
    const _HermesInternal = HermesInternal;
    obj10.accessibilityLabel = "" + title + ", " + formatToPlainStringResult;
    const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
    obj10.hitSlop = rect;
    obj10.onPress = openGroupDMNitroCapInfoActionSheetDefault;
    obj10.children = tmp13Result;
    let tmp15Result2 = timestampProducer(React3, obj10);
  } else {
    const obj11 = { accessible: true, accessibilityRole: "header", children: tmp13Result };
    tmp15Result2 = timestampProducer(React4, obj11);
  }
  return tmp15Result2;
};