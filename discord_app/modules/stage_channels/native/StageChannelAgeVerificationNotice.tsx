// discord_app/modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text2 from "../../../design/components/Text/native/Text.tsx";
import useAgeVerificationRunner from "../../age_assurance/AgeVerificationUtils.tsx";
import useIsStageSpeakingDisabledForCurrentUser from "../useStageSpeakingForCurrentUser.tsx";
import WarningIcon2 from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function StageChannelAgeVerificationNoticeContent(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  closure_1 = undefined;
  closure_1 = callback2();
  let obj = onConfirmPress(4733);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const intl = onConfirmPress(1233).intl;
  const format = intl.format;
  const t = onConfirmPress(1233).t;
  if (isVerifiedTeen) {
    obj = { hook: null };
    obj[0] = function hook(children) {
      return closure_1_5(onConfirmPress(closure_1_2[8]).Text, {
        variant: "text-sm/medium",
        color: "text-default",
        style: closure_1.linkText,
        onPress() {
          const tmp = closure_1_1(closure_1_2[9]);
          tmp(closure_1_1(closure_1_2[10]).getArticleURL(closure_1_4.TIGGER_PAWTECT_LEARN_MORE));
          if (callback != null) {
            callback();
          }
        },
        children,
      });
    };
    let formatResult = format(t.iWGjcg, obj);
  } else {
    obj = { hook: null };
    obj[0] = function hook(children) {
      return closure_1_5(onConfirmPress(closure_1_2[8]).Text, {
        variant: "text-sm/medium",
        color: "text-default",
        style: closure_1.linkText,
        onPress() {
          let obj = closure_1_1(closure_1_2[11]);
          obj = { entryPoint: closure_1_0(closure_1_2[12]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
          const result = obj.showAgeVerificationGetStartedModal(obj);
          if (callback != null) {
            callback();
          }
        },
        children,
      });
    };
    formatResult = format(t.edpbxy, obj);
  }
  return formatResult;
}
function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let tmp = callback2();
  let Text = require;
  let tmp8Result = dependencyMap;
  let obj = useAgeVerificationRunner;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  if (onConfirmPress.noBackground) {
    obj = { style: null, children: null };
    obj[0] = tmp.noticeContainer;
    if (isVerifiedTeen) {
      let WarningIcon = CircleInformationIcon.CircleInformationIcon;
    } else {
      WarningIcon = WarningIcon2.WarningIcon;
    }
    obj = { size: "refresh_sm", color: null, style: null };
    obj[1] = ThemesDefault.colors.TEXT_DEFAULT;
    obj[2] = tmp.icon;
    const items = [closure_5(WarningIcon, obj)];
    Text = Text2.Text;
    obj1 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
    obj1[2] = tmp.contentText;
    tmp = StageChannelAgeVerificationNoticeContent;
    const obj2 = { onConfirmPress: null };
    obj2[0] = onConfirmPress;
    obj1[3] = closure_5(StageChannelAgeVerificationNoticeContent, obj2);
    tmp8Result = tmp8(Text, obj1);
    items[1] = tmp8Result;
    obj[1] = items;
    closure_6(View, obj);
    const tmp6 = closure_6;
    const tmp7 = View;
  } else {
    const HelpMessageTypes = Button.HelpMessageTypes;
    const obj3 = { messageType: null, children: null };
    obj3[0] = isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING;
    obj4 = { onConfirmPress: null };
    obj4[0] = onConfirmPress;
    obj3[1] = closure_5(StageChannelAgeVerificationNoticeContent, obj4);
    return closure_5(Button.HelpMessage, obj3);
  }
}
noopAll;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = {
  container: null,
  containerWithDivider: null,
  divider: null,
  noticeContainer: null,
  icon: null,
  linkText: null,
  contentText: null,
};
createCacheKey = { marginTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_16 };
let obj1 = { paddingVertical: ThemesDefault.space.PX_16 };
createCacheKey[2] = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj2 = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[3] = {
  flexDirection: "row",
  alignItems: "center",
  gap: ThemesDefault.space.PX_8,
  borderRadius: ThemesDefault.radii.sm,
};
createCacheKey[4] = { flexShrink: 0 };
createCacheKey[5] = { textDecorationLine: "underline" };
createCacheKey[6] = { flex: 1 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj4 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: ThemesDefault.space.PX_8,
  borderRadius: ThemesDefault.radii.sm,
};
let result = require("set").fileFinishedImporting(
  "modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx",
);

export default function StageChannelAgeVerificationNotice(arg0) {
  ({ divider, channelId } = arg0);
  ({ noBackground, onConfirmPress, style } = arg0);
  const tmp = callback2();
  let obj = useIsStageSpeakingDisabledForCurrentUser;
  if (obj.useShouldAgeVerifyToSpeakForCurrentUser(channelId)) {
    const _Array = Array;
    if (Array.isArray(divider)) {
      const hasItem = divider.includes(obj4.TOP);
      let tmp9 = hasItem;
      if (hasItem) {
        obj = { style: null };
        obj[0] = tmp.divider;
        tmp9 = callback(View, obj);
      }
      const items = [tmp9, ,];
      obj = { style: null, children: null };
      const items1 = [arr.length > 0 ? tmp.containerWithDivider : tmp.container, style];
      obj[0] = items1;
      obj1 = { noBackground: null, onConfirmPress: null };
      obj1[0] = noBackground;
      obj1[1] = onConfirmPress;
      obj[1] = callback(StageChannelAgeVerificationNoticeWrapper, obj1);
      items[1] = callback(View, obj);
      let hasItem1 = arr.includes(obj4.BOTTOM);
      if (hasItem1) {
        const obj2 = { style: null };
        obj2[0] = tmp.divider;
        hasItem1 = tmp12(tmp13, obj2);
      }
      const obj3 = { children: null };
      items[2] = hasItem1;
      obj3[0] = items;
      return closure_6(closure_7, obj3);
    } else if (null != divider) {
      const items2 = [divider];
      let items3 = items2;
    } else {
      items3 = [];
    }
  } else {
    return null;
  }
}
export const DividerPosition = obj4;
