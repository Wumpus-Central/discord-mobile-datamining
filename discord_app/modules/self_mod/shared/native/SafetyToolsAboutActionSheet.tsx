// discord_app/modules/self_mod/shared/native/SafetyToolsAboutActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SafetyWarningUtils from "../SafetyWarningUtils.tsx";
import ChannelSafetyWarningsActionCreators from "../../ChannelSafetyWarningsActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_6 = fn(11363).getSafetyToolsActionSheetKey;
let HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { aboutContainer: null, description: null, reportFalsePositive: null };
createStyles = { marginHorizontal: nativeDefault.space.PX_32 };
createStyles.aboutContainer = createStyles;
createStyles.description = { alignSelf: "center", textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
let obj1 = { alignSelf: "center", textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
createStyles.reportFalsePositive = { alignSelf: "center", textAlign: "center", marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsAboutActionSheet.tsx");

export default function SafetyToolsAboutScreen(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let disabled;
  const tmp = warningType(disabled.useState(false), 2);
  disabled = tmp[0];
  closure_5 = tmp[1];
  const tmp3 = closure_10();
  let obj = channelId(warningId[8]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  const isNudgeWarning = tmp4;
  const items = [channelId, warningId, warningType, recipientId, tmp4];
  const items1 = [channelId, disabled];
  const callback = disabled.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(isNudgeWarning(channelId));
    obj = {
      channelId,
      warningId,
      warningType,
      senderId: recipientId,
      cta: SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS,
      isNudgeWarning,
    };
    SafetyWarningUtils.trackCtaEvent(obj);
  }, items);
  HelpdeskArticles = disabled.useCallback(() => {
    if (!first) {
      closure_5(true);
      const reportFalsePositiveResult = ChannelSafetyWarningsActionCreators.reportFalsePositive(channelId);
      ChannelSafetyWarningsActionCreators.reportFalsePositive(channelId)
        .then(() => {
          closure_1_5(false);
          channelId(warningId[12]);
          const obj = { id: "safety-tools-report-false-positive", text: null };
          const intl = channelId(warningId[13]).intl;
          obj.text = intl.string(channelId(warningId[13]).t.FhgVWi);
          obj.showSafetyToast(obj);
          recipientId(warningId[9]).hideActionSheet(closure_6(closure_1_0));
        })
        .catch(() => {
          closure_1_5(false);
          const intl = channelId(warningId[13]).intl;
          channelId(warningId[14]).presentError(intl.string(channelId(warningId[13]).t.R0RpRX));
        });
      const nextPromise = ChannelSafetyWarningsActionCreators.reportFalsePositive(channelId).then(() => {
        closure_1_5(false);
        channelId(warningId[12]);
        const obj = { id: "safety-tools-report-false-positive", text: null };
        const intl = channelId(warningId[13]).intl;
        obj.text = intl.string(channelId(warningId[13]).t.FhgVWi);
        obj.showSafetyToast(obj);
        recipientId(warningId[9]).hideActionSheet(closure_6(closure_1_0));
      });
    }
  }, items1);
  obj = {
    hasHeaderBack: true,
    recipientId,
    warningId,
    warningType,
    headerTitle: null,
    channelId: null,
    onClose: null,
    children: null,
  };
  let intl = channelId(warningId[13]).intl;
  obj.headerTitle = intl.string(channelId(warningId[13]).t.qI14KM);
  obj.channelId = channelId;
  obj.onClose = channelId.onClose;
  obj = { style: tmp3.aboutContainer, children: null };
  const obj1 = { variant: "text-md/medium", style: tmp3.description, children: null };
  const intl2 = channelId(warningId[13]).intl;
  const obj2 = { learnMoreLink: null };
  let obj5 = recipientId(warningId[17]);
  obj2.learnMoreLink = obj5.getArticleURL(HelpdeskArticles.SAFETY_ALERTS);
  obj1.children = intl2.format(channelId(warningId[13]).t["njJ/Cg"], obj2);
  const items2 = [closure_8(channelId(warningId[16]).Text, obj1)];
  const obj3 = { variant: "secondary", size: "lg", disabled, text: null, onPress: null };
  const intl3 = channelId(warningId[13]).intl;
  obj3.text = intl3.string(channelId(warningId[13]).t.Xb2REN);
  obj3.onPress = callback;
  items2[1] = closure_8(channelId(warningId[18]).Button, obj3);
  obj.children = items2;
  const items3 = [closure_9(closure_5, obj)];
  const obj4 = { variant: "text-md/medium", style: tmp3.reportFalsePositive, children: null };
  const intl4 = channelId(warningId[13]).intl;
  obj5 = {
    reportFalsePositiveHook(children, arg1) {
      return React6(
        Text_Text.Text,
        { variant: "text-sm/medium", color: "text-link", disabled, onPress, children },
        arg1,
      );
    },
  };
  obj4.children = intl4.format(channelId(warningId[13]).t["2uYViD"], obj5);
  items3[1] = closure_8(channelId(warningId[16]).Text, obj4);
  obj.children = items3;
  return closure_9(recipientId(warningId[15]), obj);
}
