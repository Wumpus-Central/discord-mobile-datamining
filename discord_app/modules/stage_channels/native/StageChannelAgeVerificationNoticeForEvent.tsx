// === Module 9898: StageChannelAgeVerificationNoticeForEvent ===

// Module 9898 (StageChannelAgeVerificationNoticeForEvent)
import nativeDefault from "native" /* 576 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4852 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5507 */;
import noop from "module_19" /* 19 */;

const native = Text(1177);
const CircleInformationIcon = Text(4594);
const Text_Text = Text(4635);
const WarningIcon2 = Text(8714);
require = fn;
function StageChannelAgeVerificationNoticeContent(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  closure_1 = closure_8();
  const isVerifiedTeen = onConfirmPress(4852).useIsVerifiedTeen();
  const intl = onConfirmPress(1115).intl;
  const format = intl.format;
  const t = onConfirmPress(1115).t;
  if (isVerifiedTeen) {
    const obj2 = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const tmp = closure_1(4328);
              tmp(closure_1(2025).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              if (onConfirmPress != null) {
                onConfirmPress();
              }
            },
            children
          });
        }
    };
    let formatResult = format(t.iWGjcg, obj2);
  } else {
    const obj3 = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const obj = closure_1(8532);
              const result = obj.showAgeVerificationGetStartedModal({ entryPoint: onConfirmPress(8534).AgeVerificationModalEntryPoint.START_STAGE_PROMPT });
              if (closure_1_0 != null) {
                closure_1_0();
              }
            },
            children
          });
        }
    };
    formatResult = format(t.edpbxy, obj3);
  }
  return formatResult;
}
function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let tmp = closure_8();
  let Text = require;
  let tmp8Result = dependencyMap;
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (onConfirmPress.noBackground) {
    const obj2 = { style: tmp.noticeContainer, children: null };
    if (isVerifiedTeen) {
      let WarningIcon = CircleInformationIcon.CircleInformationIcon;
    } else {
      WarningIcon = WarningIcon2.WarningIcon;
    }
    const obj3 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp.icon };
    const items = [hasOwnProperty(WarningIcon, obj3), ];
    Text = Text_Text.Text;
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.contentText, children: null };
    tmp = StageChannelAgeVerificationNoticeContent;
    const obj5 = { onConfirmPress };
    obj4.children = hasOwnProperty(StageChannelAgeVerificationNoticeContent, obj5);
    tmp8Result = hasOwnProperty(Text, obj4);
    items[1] = tmp8Result;
    obj2.children = items;
    timestampProducer(View, obj2);
  } else {
    const HelpMessageTypes = native.HelpMessageTypes;
    const obj6 = { messageType: isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING, children: null };
    obj7 = { onConfirmPress };
    obj6.children = hasOwnProperty(StageChannelAgeVerificationNoticeContent, obj7);
    return hasOwnProperty(native.HelpMessage, obj6);
  }
}
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { marginTop: nativeDefault.space.PX_16 }, containerWithDivider: null, divider: null, noticeContainer: null, icon: null, linkText: null, contentText: null };
let obj3 = { marginTop: nativeDefault.space.PX_16 };
obj2.containerWithDivider = { paddingVertical: nativeDefault.space.PX_16 };
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.noticeContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj2.icon = { flexShrink: 0 };
obj2.linkText = { textDecorationLine: "underline" };
obj2.contentText = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
let obj7 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNoticeForEvent.tsx");

export default function StageChannelAgeVerificationNoticeForEvent(divider) {
  divider = divider.divider;
  ({ noBackground, onConfirmPress, style } = divider);
  const tmp = closure_8();
  if (obj.useShouldShowAgeVerificationForEvent()) {
    const _Array = Array;
    if (Array.isArray(divider)) {
      const hasItem = divider.includes(obj7.TOP);
      let tmp11 = hasItem;
      if (hasItem) {
        const obj2 = { style: tmp.divider };
        tmp11 = hasOwnProperty(View, obj2);
      }
      const items = [tmp11, , ];
      const obj3 = { style: null, children: null };
      const items1 = [arr.length > 0 ? tmp.containerWithDivider : tmp.container, style];
      obj3.style = items1;
      const obj4 = { noBackground, onConfirmPress };
      obj3.children = hasOwnProperty(StageChannelAgeVerificationNoticeWrapper, obj4);
      items[1] = hasOwnProperty(View, obj3);
      let hasItem1 = arr.includes(obj7.BOTTOM);
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
};
export const DividerPosition = obj7;