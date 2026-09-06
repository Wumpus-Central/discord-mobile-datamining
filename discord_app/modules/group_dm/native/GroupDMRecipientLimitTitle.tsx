// discord_app/modules/group_dm/native/GroupDMRecipientLimitTitle.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const MAX_GROUP_DM_PARTICIPANTS = fn(1074).MAX_GROUP_DM_PARTICIPANTS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  title: { textAlign: "center", fontSize: 18 },
  subtitleRow: null,
  subtitle: null,
  nitroWheelIcon: null,
};
createStyles = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.subtitleRow = createStyles;
createStyles.subtitle = { textAlign: "center" };
const PlatformUtils = fn(1115);
let tmp5;
if (PlatformUtils.isAndroid()) {
  let items = [{ translateY: 2 }];
  tmp5 = items;
}
createStyles.nitroWheelIcon = { transform: tmp5 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMRecipientLimitTitle.tsx");

export default function GroupDMRecipientLimitTitle(arg0) {
  ({ title, memberCount, recipientLimit } = arg0);
  const tmp = closure_9();
  let obj = GroupDMNitroUpsellModel;
  const groupDMNitroAudience = obj.useGroupDMNitroAudience();
  let obj1 = useToken;
  const token = obj1.useToken(nativeDefault.modules.mobile.HEADER_TITLE_TEXT_STYLE);
  let obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.PREMIUM_NITRO_PINK_TEXT);
  let obj3 = useToken;
  let token2 = obj3.useToken(nativeDefault.colors.TEXT_SUBTLE);
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
  const intl = tmp2(1114).intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t["9EQix0"], {
    numMembers: memberCount,
    maxMemberLimit: recipientLimit,
  });
  obj = {
    lineClamp: 1,
    variant: token,
    color: "mobile-text-heading-primary",
    style: tmp.title,
    maxFontSizeMultiplier: 2,
    children: title,
  };
  const items = [timestampProducer(Text_Text.Text, obj)];
  obj = { style: tmp.subtitleRow, children: null };
  let tmp15Result = null;
  if (tmp9) {
    if (tmp11) {
      token2 = token1;
    }
    obj1 = { size: "xxs", color: token2, style: tmp.nitroWheelIcon, accessible: false };
    tmp15Result = tmp15(tmp2(8662).NitroWheelIcon, obj1);
  }
  obj2 = { children: null };
  const items1 = [tmp15Result];
  obj3 = {
    lineClamp: 1,
    variant: "text-xs/medium",
    color: str2,
    style: tmp.subtitle,
    maxFontSizeMultiplier: 2,
    children: formatToPlainStringResult,
  };
  items1[1] = timestampProducer(Text_Text.Text, obj3);
  obj.children = items1;
  items[1] = React5(React4, obj);
  obj2.children = items;
  const tmp13Result = React5(React6, obj2);
  if (tmp9) {
    const obj4 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: null,
      hitSlop: null,
      onPress: null,
      children: null,
    };
    const _HermesInternal = HermesInternal;
    obj4.accessibilityLabel = "" + title + ", " + formatToPlainStringResult;
    const rect = {
      top: tmp5(576).space.PX_8,
      bottom: tmp5(576).space.PX_8,
      left: tmp5(576).space.PX_16,
      right: tmp5(576).space.PX_16,
    };
    obj4.hitSlop = rect;
    obj4.onPress = tmp5(12188);
    obj4.children = tmp13Result;
    tmp15Result = tmp15(React3, obj4);
  } else {
    const obj5 = { accessible: true, accessibilityRole: "header", children: tmp13Result };
    tmp15Result = tmp15(tmp16, obj5);
  }
  return tmp15Result;
}
