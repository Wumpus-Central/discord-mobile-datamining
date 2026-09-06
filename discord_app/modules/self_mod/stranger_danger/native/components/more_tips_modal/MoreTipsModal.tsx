// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import native from "../../../../../../design/void/native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import _modDef6992 from "../../../../../../../_runtime/metro/06992__.js";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import MonitoringAgentDefault from "../../../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import SafetyWarningUtils from "../../../../shared/SafetyWarningUtils.tsx";
import SafetyTipsSectionDefault from "../../../../shared/native/SafetyTipsSection.tsx";
import WasThisHelpfulSectionDefault from "WasThisHelpfulSection.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelSafetyWarningsStore from "../../../../ChannelSafetyWarningsStore.tsx";

require = fn;
function MoreTipsModalScreen(learnMore) {
  learnMore = learnMore.learnMore;
  ({ channelId, warningId, senderId, description, safetyTips, actionItems } = learnMore);
  const tmp = closure_10();
  let obj = { keyboardShouldPersistTaps: "handled", style: tmp.scroll, children: null };
  obj = { style: tmp.contentContainer, children: null };
  obj = { style: tmp.tipsContainer, children: null };
  const items = [React6(SafetyTipsSectionDefault, { description, safetyTips, showHeader: true })];
  let tmp2Result = null;
  if (null != learnMore) {
    const obj1 = { style: tmp.learnMore, children: learnMore };
    tmp2Result = tmp2(tmp5, obj1);
  }
  items[1] = tmp2Result;
  obj.children = items;
  const items1 = [React7(React4, obj), ,];
  const obj2 = { children: null };
  const obj3 = { variant: "eyebrow", color: "text-default", style: tmp.header, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.K5FKtc);
  const items2 = [React6(Text_Text.Text, obj3), actionItems];
  obj2.children = items2;
  items1[1] = React7(React4, obj2);
  items1[2] = React6(WasThisHelpfulSectionDefault, { channelId, warningId, senderId });
  obj.children = items1;
  obj.children = React7(React4, obj);
  return React6(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { scroll: null, contentContainer: null, tipsContainer: null, learnMore: null, header: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.scroll = createStyles;
createStyles.contentContainer = {
  marginHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
let obj1 = {
  marginHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
createStyles.tipsContainer = { gap: nativeDefault.space.PX_8 };
createStyles.learnMore = { alignItems: "center" };
let obj2 = { gap: nativeDefault.space.PX_8 };
createStyles.header = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx",
);

export default function MoreTipsModal(headerStyle) {
  const channelId = headerStyle.channelId;
  const warningId = headerStyle.warningId;
  const senderId = headerStyle.senderId;
  let obj = channelId(senderId[16]);
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId),
  );
  const items1 = [channelId, warningId, senderId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let obj = { channelId, warningId, senderId, warningType: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj.warningType = type;
    obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, obj);
    obj = { name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW };
    MonitoringAgentDefault.increment(obj);
  }, items1);
  obj = { screens: null, initialRouteName: "MORE_TIPS", headerStatusBarHeight: warningId(senderId[15])().top };
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  closure_129_5 = undefined;
  closure_129_6 = undefined;
  closure_129_7 = undefined;
  ({
    modalKey: closure_129_0,
    channelId: closure_129_1,
    warningId: closure_129_2,
    senderId: closure_129_3,
    description: closure_129_4,
    safetyTips: closure_129_5,
    actionItems: closure_129_6,
    learnMore: closure_129_7,
  } = headerStyle);
  obj = {
    MORE_TIPS: {
      headerRight() {
        const obj = {
          onPress() {
            return warningId(senderId[12]).popWithKey(channelId);
          },
          source: _modDef6992,
          iconSize: native.IconSizes.MEDIUM,
          accessibilityLabel: null,
        };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
        return React6(HeaderActionButton.HeaderActionButton, obj);
      },
      headerTitle() {
        return null;
      },
      headerLeft() {
        return null;
      },
      headerStyle: headerStyle.headerStyle,
      render() {
        return React6(MoreTipsModalScreen, {
          channelId: warningId,
          warningId: senderId,
          senderId: stateFromStores,
          description,
          safetyTips,
          actionItems,
          learnMore,
        });
      },
    },
  };
  obj.screens = obj;
  return closure_8(channelId(senderId[20]).Navigator, obj);
}
