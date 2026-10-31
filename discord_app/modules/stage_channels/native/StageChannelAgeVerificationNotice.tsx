// discord_app/modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useStageSpeakingForCurrentUser from "../useStageSpeakingForCurrentUser.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let contentText = closure_8();
  let Text = onConfirmPress;
  let tmp = dependencyMap;
  const isVerifiedTeen = onConfirmPress(6726).useIsVerifiedTeen();
  const intl = onConfirmPress(1113).intl;
  const format = intl.format;
  const t = onConfirmPress(1113).t;
  if (isVerifiedTeen) {
    const obj2 = {
      hook(children) {
        return hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          style: contentText.linkText,
          onPress() {
            const tmp = contentText(5705);
            tmp(contentText(2061).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
            if (onConfirmPress != null) {
              onConfirmPress();
            }
          },
          children,
        });
      },
    };
    let formatResult = format(t.iWGjcg, obj2);
  } else {
    const obj3 = {
      hook(children) {
        return hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          style: contentText.linkText,
          onPress() {
            const obj = contentText(7955);
            const result = obj.showAgeVerificationGetStartedModal({
              entryPoint: onConfirmPress(6729).AgeVerificationModalEntryPoint.START_STAGE_PROMPT,
            });
            if (closure_1_0 != null) {
              closure_1_0();
            }
          },
          children,
        });
      },
    };
    formatResult = format(t.edpbxy, obj3);
  }
  if (onConfirmPress.noBackground) {
    const obj4 = { style: contentText.noticeContainer, children: null };
    if (isVerifiedTeen) {
      let WarningIcon = Text(5735).CircleInformationIcon;
    } else {
      WarningIcon = Text(8026).WarningIcon;
    }
    const obj5 = { size: "refresh_sm", color: contentText(575).colors.TEXT_DEFAULT, style: contentText.icon };
    const items = [closure_5(WarningIcon, obj5)];
    Text = Text(5624).Text;
    const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
    contentText = contentText.contentText;
    obj6.style = contentText;
    obj6.children = formatResult;
    tmp = closure_5(Text, obj6);
    items[1] = tmp;
    obj4.children = items;
    closure_6(View, obj4);
  } else {
    let str = "warning";
    if (isVerifiedTeen) {
      str = "info";
    }
    obj7 = { type: str, message: formatResult, role: "none" };
    return closure_5(Text(8025).InlineNotice, obj7);
  }
  let obj = onConfirmPress(6726);
}
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { marginTop: nativeDefault.space.PX_16 },
  containerWithDivider: null,
  divider: null,
  noticeContainer: null,
  icon: null,
  linkText: null,
  contentText: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_16 };
obj2.containerWithDivider = { paddingVertical: nativeDefault.space.PX_16 };
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.noticeContainer = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
};
obj2.icon = { flexShrink: 0 };
obj2.linkText = { textDecorationLine: "underline" };
obj2.contentText = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
let obj7 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx");

export default function StageChannelAgeVerificationNotice(arg0) {
  ({ divider, channelId } = arg0);
  ({ noBackground, onConfirmPress, style } = arg0);
  const tmp = closure_8();
  if (obj.useShouldAgeVerifyToSpeakForCurrentUser(channelId)) {
    const _Array = Array;
    if (Array.isArray(divider)) {
      const hasItem = divider.includes(obj7.TOP);
      let tmp9 = hasItem;
      if (hasItem) {
        const obj2 = { style: tmp.divider };
        tmp9 = hasOwnProperty(View, obj2);
      }
      const items = [tmp9, ,];
      const obj3 = { style: null, children: null };
      const items1 = [divider.length > 0 ? tmp.containerWithDivider : tmp.container, style];
      obj3.style = items1;
      const obj4 = { noBackground, onConfirmPress };
      obj3.children = hasOwnProperty(StageChannelAgeVerificationNoticeWrapper, obj4);
      items[1] = hasOwnProperty(View, obj3);
      let hasItem1 = divider.includes(obj7.BOTTOM);
      if (hasItem1) {
        const obj5 = { style: tmp.divider };
        hasItem1 = hasOwnProperty(View, obj5);
      }
      const obj6 = { children: null };
      items[2] = hasItem1;
      obj6.children = items;
      return timestampProducer(React5, obj6);
    } else if (null != divider) {
      const items2 = [divider];
      let items3 = items2;
    } else {
      items3 = [];
    }
  } else {
    return null;
  }
  obj = useStageSpeakingForCurrentUser;
}
export const DividerPosition = obj7;
