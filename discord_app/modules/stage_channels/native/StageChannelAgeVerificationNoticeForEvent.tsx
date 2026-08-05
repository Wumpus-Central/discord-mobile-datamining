// discord_app/modules/stage_channels/native/StageChannelAgeVerificationNoticeForEvent.tsx
import "noop";
import { View } from "set";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { useAgeVerificationRunner } from "../../age_assurance/AgeVerificationUtils.tsx";
import { useIsStageSpeakingDisabledForCurrentUser } from "../useStageSpeakingForCurrentUser.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
function StageChannelAgeVerificationNoticeContent(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let closure_1;
  closure_1 = createCacheKey();
  let obj = onConfirmPress(4500);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const intl = onConfirmPress(1236).intl;
  const format = intl.format;
  const t = onConfirmPress(1236).t;
  if (isVerifiedTeen) {
    obj = { hook: null };
    obj[0] = function hook(children) {
      return outer1_5(onConfirmPress(outer1_2[8]).Text, {
        variant: "text-sm/medium",
        color: "text-default",
        style: closure_1.linkText,
        onPress() {
          const tmp = outer1_1(outer1_2[9]);
          tmp(outer1_1(outer1_2[10]).getArticleURL(outer1_4.TIGGER_PAWTECT_LEARN_MORE));
          if (callback != null) {
            callback();
          }
        },
        children
      });
    };
    let formatResult = format(t.iWGjcg, obj);
  } else {
    obj = { hook: null };
    obj[0] = function hook(children) {
      return outer1_5(onConfirmPress(outer1_2[8]).Text, {
        variant: "text-sm/medium",
        color: "text-default",
        style: closure_1.linkText,
        onPress() {
          let obj = outer1_1(outer1_2[11]);
          obj = { entryPoint: outer1_0(outer1_2[12]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
          const result = obj.showAgeVerificationGetStartedModal(obj);
          if (callback != null) {
            callback();
          }
        },
        children
      });
    };
    formatResult = format(t.edpbxy, obj);
  }
  return formatResult;
}
function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let tmp = createCacheKey();
  let Text = require;
  let tmp8Result = dependencyMap;
  let obj = useAgeVerificationRunner /* useAgeVerificationRunner */;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  if (onConfirmPress.noBackground) {
    obj = { style: null, children: null };
    obj[0] = tmp.noticeContainer;
    if (isVerifiedTeen) {
      let WarningIcon = Text(4241).CircleInformationIcon;
    } else {
      WarningIcon = Text(7772).WarningIcon;
    }
    obj = { size: "refresh_sm", color: null, style: null };
    obj[1] = Themes.colors.TEXT_DEFAULT;
    obj[2] = tmp.icon;
    const items = [closure_5(WarningIcon, obj), ];
    Text = Text(4281).Text;
    const obj1 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
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
    const HelpMessageTypes = Text(1297).HelpMessageTypes;
    const obj3 = { messageType: null, children: null };
    obj3[0] = isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING;
    const obj4 = { onConfirmPress: null };
    obj4[0] = onConfirmPress;
    obj3[1] = closure_5(StageChannelAgeVerificationNoticeContent, obj4);
    return closure_5(Text(1297).HelpMessage, obj3);
  }
}
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { container: null, containerWithDivider: null, divider: null, noticeContainer: null, icon: null, linkText: null, contentText: null };
createCacheKey = { marginTop: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: require("Themes").space.PX_16 };
let obj1 = { paddingVertical: require("Themes").space.PX_16 };
createCacheKey[2] = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
let obj2 = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, borderRadius: require("Themes").radii.sm };
createCacheKey[4] = { flexShrink: 0 };
createCacheKey[5] = { textDecorationLine: "underline" };
createCacheKey[6] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, borderRadius: require("Themes").radii.sm };
let result = require("ME").fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNoticeForEvent.tsx");

export default function StageChannelAgeVerificationNoticeForEvent(divider) {
  let noBackground;
  let onConfirmPress;
  let style;
  divider = divider.divider;
  ({ noBackground, onConfirmPress, style } = divider);
  const tmp = createCacheKey();
  let obj = useIsStageSpeakingDisabledForCurrentUser /* useIsStageSpeakingDisabledForCurrentUser */;
  if (obj.useShouldShowAgeVerificationForEvent()) {
    const _Array = Array;
    if (Array.isArray(divider)) {
      const hasItem = divider.includes(obj4.TOP);
      let tmp11 = hasItem;
      if (hasItem) {
        obj = { style: null };
        obj[0] = tmp.divider;
        tmp11 = callback(View, obj);
      }
      const items = [tmp11, , ];
      obj = { style: null, children: null };
      const items1 = [arr.length > 0 ? tmp.containerWithDivider : tmp.container, style];
      obj[0] = items1;
      const obj1 = { noBackground: null, onConfirmPress: null };
      obj1[0] = noBackground;
      obj1[1] = onConfirmPress;
      obj[1] = callback(StageChannelAgeVerificationNoticeWrapper, obj1);
      items[1] = callback(View, obj);
      let hasItem1 = arr.includes(obj4.BOTTOM);
      if (hasItem1) {
        const obj2 = { style: null };
        obj2[0] = tmp.divider;
        hasItem1 = tmp14(tmp15, obj2);
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
};
export const DividerPosition = obj4;