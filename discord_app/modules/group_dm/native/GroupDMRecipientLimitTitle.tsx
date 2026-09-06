// discord_app/modules/group_dm/native/GroupDMRecipientLimitTitle.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import GroupDMNitroAcquisitionStrategy from "GroupDMNitroUpsellModel.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_GROUP_DM_PARTICIPANTS } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../utils/PlatformUtils.tsx";

require = arg1;
noopAll;
({ Pressable: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
createCacheKey = {
  title: { textAlign: "center", fontSize: 18 },
  subtitleRow: null,
  subtitle: null,
  nitroWheelIcon: null,
};
createCacheKey = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center" };
let tmp5;
if (set.isAndroid()) {
  let items = [{ translateY: 2 }];
  tmp5 = items;
}
createCacheKey[3] = { transform: tmp5 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/group_dm/native/GroupDMRecipientLimitTitle.tsx");

export default function GroupDMRecipientLimitTitle(arg0) {
  ({ title, memberCount, recipientLimit } = arg0);
  const tmp = callback2();
  let obj = GroupDMNitroAcquisitionStrategy;
  const groupDMNitroAudience = obj.useGroupDMNitroAudience();
  obj1 = map;
  const token = obj1.useToken(ThemesDefault.modules.mobile.HEADER_TITLE_TEXT_STYLE);
  let obj2 = map;
  const token1 = obj2.useToken(ThemesDefault.colors.PREMIUM_NITRO_PINK_TEXT);
  let obj3 = map;
  let token2 = obj3.useToken(ThemesDefault.colors.TEXT_SUBTLE);
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
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["9EQix0"], {
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
  const items = [callback(Text.Text, obj)];
  obj = { style: tmp.subtitleRow, children: null };
  let tmp15Result = null;
  if (tmp9) {
    if (tmp11) {
      token2 = token1;
    }
    obj1 = { size: "xxs", color: null, style: null, accessible: false };
    obj1[1] = token2;
    obj1[2] = tmp.nitroWheelIcon;
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
  items1[1] = callback(Text.Text, obj3);
  obj[1] = items1;
  items[1] = closure_7(closure_4, obj);
  obj2[0] = items;
  const tmp13Result = closure_7(closure_8, obj2);
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
    obj4[2] = "" + title + ", " + formatToPlainStringResult;
    const obj5 = { top: null, bottom: null, left: null, right: null };
    obj5[0] = tmp5(576).space.PX_8;
    obj5[1] = tmp5(576).space.PX_8;
    obj5[2] = tmp5(576).space.PX_16;
    obj5[3] = tmp5(576).space.PX_16;
    obj4[3] = obj5;
    obj4[4] = tmp5(12188);
    obj4[5] = tmp13Result;
    tmp15Result = tmp15(closure_3, obj4);
  } else {
    const obj6 = { accessible: true, accessibilityRole: "header", children: null };
    obj6[2] = tmp13Result;
    tmp15Result = tmp15(tmp16, obj6);
  }
  return tmp15Result;
}
