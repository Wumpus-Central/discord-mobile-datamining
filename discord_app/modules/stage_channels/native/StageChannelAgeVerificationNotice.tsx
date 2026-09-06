// === Module 8410: StageChannelAgeVerificationNotice ===

// Module 8410 (StageChannelAgeVerificationNotice)
import nativeDefault from "native" /* 576 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5422 */;
import noop from "module_19" /* 19 */;

const native = Text(1178);
const CircleInformationIcon = Text(4515);
const Text_Text = Text(4556);
const WarningIcon2 = Text(8588);
require = fn;
function StageChannelAgeVerificationNoticeContent(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  closure_1 = closure_8();
  let obj = onConfirmPress(4773);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const intl = onConfirmPress(1114).intl;
  const format = intl.format;
  const t = onConfirmPress(1114).t;
  if (isVerifiedTeen) {
    obj = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const tmp = closure_1(4249);
              tmp(closure_1(2024).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              if (onConfirmPress != null) {
                onConfirmPress();
              }
            },
            children
          });
        }
    };
    let formatResult = format(t.iWGjcg, obj);
  } else {
    obj = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              closure_1(8411);
              const obj = { entryPoint: onConfirmPress(8413).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
              const result = obj.showAgeVerificationGetStartedModal(obj);
              if (closure_1_0 != null) {
                closure_1_0();
              }
            },
            children
          });
        }
    };
    formatResult = format(t.edpbxy, obj);
  }
  return formatResult;
}
function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let tmp = closure_8();
  let Text = require;
  let tmp8Result = dependencyMap;
  let obj = AgeVerificationUtils;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  if (onConfirmPress.noBackground) {
    obj = { style: tmp.noticeContainer, children: null };
    if (isVerifiedTeen) {
      let WarningIcon = CircleInformationIcon.CircleInformationIcon;
    } else {
      WarningIcon = WarningIcon2.WarningIcon;
    }
    obj = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp.icon };
    const items = [hasOwnProperty(WarningIcon, obj), ];
    Text = Text_Text.Text;
    const obj1 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.contentText, children: null };
    tmp = StageChannelAgeVerificationNoticeContent;
    const obj2 = { onConfirmPress };
    obj1.children = hasOwnProperty(StageChannelAgeVerificationNoticeContent, obj2);
    tmp8Result = hasOwnProperty(Text, obj1);
    items[1] = tmp8Result;
    obj.children = items;
    timestampProducer(View, obj);
  } else {
    const HelpMessageTypes = native.HelpMessageTypes;
    const obj3 = { messageType: isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING, children: null };
    obj4 = { onConfirmPress };
    obj3.children = hasOwnProperty(StageChannelAgeVerificationNoticeContent, obj4);
    return hasOwnProperty(native.HelpMessage, obj3);
  }
}
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, containerWithDivider: null, divider: null, noticeContainer: null, icon: null, linkText: null, contentText: null };
createStyles = { marginTop: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.containerWithDivider = { paddingVertical: nativeDefault.space.PX_16 };
let obj1 = { paddingVertical: nativeDefault.space.PX_16 };
createStyles.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj2 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.noticeContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
createStyles.icon = { flexShrink: 0 };
createStyles.linkText = { textDecorationLine: "underline" };
createStyles.contentText = { flex: 1 };
let closure_8 = createStyles.createStyles(createStyles);
let obj4 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx");

export default function StageChannelAgeVerificationNotice(arg0) {
  ({ divider, channelId } = arg0);
  ({ noBackground, onConfirmPress, style } = arg0);
  const tmp = closure_8();
  let obj = useStageSpeakingForCurrentUser;
  if (obj.useShouldAgeVerifyToSpeakForCurrentUser(channelId)) {
    const _Array = Array;
    if (Array.isArray(divider)) {
      const hasItem = divider.includes(obj4.TOP);
      let tmp9 = hasItem;
      if (hasItem) {
        obj = { style: tmp.divider };
        tmp9 = hasOwnProperty(View, obj);
      }
      const items = [tmp9, , ];
      obj = { style: null, children: null };
      const items1 = [divider.length > 0 ? tmp.containerWithDivider : tmp.container, style];
      obj.style = items1;
      const obj1 = { noBackground, onConfirmPress };
      obj.children = hasOwnProperty(StageChannelAgeVerificationNoticeWrapper, obj1);
      items[1] = hasOwnProperty(View, obj);
      let hasItem1 = divider.includes(obj4.BOTTOM);
      if (hasItem1) {
        const obj2 = { style: tmp.divider };
        hasItem1 = hasOwnProperty(View, obj2);
      }
      const obj3 = { children: null };
      items[2] = hasItem1;
      obj3.children = items;
      return timestampProducer(React5, obj3);
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