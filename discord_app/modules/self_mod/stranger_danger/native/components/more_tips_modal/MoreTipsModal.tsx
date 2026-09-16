// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import native from "../../../../../../design/void/native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import _modDef7102 from "../../../../../../../_runtime/metro/07102__.js";
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
  const obj = { keyboardShouldPersistTaps: "handled", style: tmp.scroll, children: null };
  const obj2 = { style: tmp.contentContainer, children: null };
  const obj3 = { style: tmp.tipsContainer, children: null };
  const items = [React6(SafetyTipsSectionDefault, { description, safetyTips, showHeader: true })];
  let tmp2Result = null;
  if (null != learnMore) {
    const obj4 = { style: tmp.learnMore, children: learnMore };
    tmp2Result = React6(React4, obj4);
  }
  items[1] = tmp2Result;
  obj3.children = items;
  const items1 = [React7(React4, obj3), ,];
  const obj5 = { children: null };
  const obj6 = { variant: "eyebrow", color: "text-default", style: tmp.header, children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.K5FKtc);
  const items2 = [React6(Text_Text.Text, obj6), actionItems];
  obj5.children = items2;
  items1[1] = React7(React4, obj5);
  items1[2] = React6(WasThisHelpfulSectionDefault, { channelId, warningId, senderId });
  obj2.children = items1;
  obj.children = React7(React4, obj2);
  return React6(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  scroll: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  contentContainer: null,
  tipsContainer: null,
  learnMore: null,
  header: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.contentContainer = {
  marginHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
let obj4 = {
  marginHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
obj2.tipsContainer = { gap: nativeDefault.space.PX_8 };
obj2.learnMore = { alignItems: "center" };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.header = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx",
);

export default function MoreTipsModal(headerStyle) {
  const channelId = headerStyle.channelId;
  const warningId = headerStyle.warningId;
  const senderId = headerStyle.senderId;
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = channelId(senderId[16]).useStateFromStores(items, () =>
    ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId),
  );
  const items1 = [channelId, warningId, senderId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    const obj2 = { channelId, warningId, senderId, warningType: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj2.warningType = type;
    SafetyWarningUtils.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, obj2);
    const obj3 = MonitoringAgentDefault;
    obj3.increment({ name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW });
    const obj4 = { name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW };
  }, items1);
  let obj2 = {
    screens: {
      MORE_TIPS: {
        headerRight() {
          const obj = {
            onPress() {
              return warningId(senderId[12]).popWithKey(channelId);
            },
            source: _modDef7102,
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
    },
    initialRouteName: "MORE_TIPS",
    headerStatusBarHeight: warningId(senderId[15])().top,
  };
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
  return closure_8(channelId(senderId[20]).Navigator, obj2);
}
