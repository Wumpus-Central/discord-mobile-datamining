// === Module 9834: InappropriateConversationWarningBanner ===

// Module 9834 (InappropriateConversationWarningBanner)
import Fragment from "Fragment" /* 21 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 9799 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9811 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 9812 */;
import SafetyToolsActionCreators from "SafetyToolsActionCreators" /* 9838 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import size from "module_2" /* 2 */;

class InappropriateConversationWarningBanner {
  constructor(channelId) {
    let intl3;
    let intl4;
    let items8;
    channelId = channelId.channelId;
    const warningId = channelId.warningId;
    const senderId = channelId.senderId;
    let callback;
    let callback1;
    let items = [channelId, warningId, senderId];
    const effect = callback.useEffect(() => {
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, viewName: SafetyWarningUtils.ViewNameTypes.SAFETY_WARNING_BANNER };
      obj.trackNamedViewEvent(obj2);
    }, items);
    const items1 = [channelId, warningId, senderId];
    callback = callback.useCallback((cta) => {
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, cta };
      obj.trackCtaEvent(obj2);
    }, items1);
    let obj = channelId(senderId[5]);
    const items2 = [callback1];
    const items3 = [senderId];
    const items4 = [channelId, warningId];
    const stateFromStores = obj.useStateFromStores(items2, () => RelationshipStore.isBlocked(senderId), items3);
    callback1 = callback.useCallback(() => {
      const items = [warningId];
      const obj = ChannelSafetyWarningsActionCreators;
      const result = obj.dismissChannelSafetyWarnings(channelId, items);
    }, items4);
    const items5 = [callback1, channelId, warningId, senderId];
    const items6 = [channelId, warningId, senderId, callback];
    const callback2 = callback.useCallback(() => {
      let obj = actions_AlertActionCreatorsDefault;
      const obj2 = {
        importer() {
          let onDismiss;
          const promise = channelId(senderId[9])(senderId[8], senderId.paths);
          return promise.then((result) => {
            let closure_0 = result.default;
            return (arg0) => {
              const obj = { channelId, warningId, warningType: closure_3_5.INAPPROPRIATE_CONVERSATION_TIER_2, senderId, analyticsBlockContext: closure_3_0(closure_3_2[4]).CtaEventTypes.USER_BANNER_BLOCK_CONFIRM, analyticsBlockAndReportContext: closure_3_0(closure_3_2[4]).CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM, analyticsCancelContext: closure_3_0(closure_3_2[4]).CtaEventTypes.USER_BANNER_BLOCK_CANCEL, onDismiss };
              const merged = Object.assign(arg0);
              return closure_3_6(closure_0, obj);
            };
          });
        },
        isDismissable: false
      };
      obj.openLazy(obj2);
    }, items5);
    const callback3 = callback.useCallback(() => {
      const obj = SafetyToolsActionCreators;
      const result = obj.openSafetyToolsActionSheet(channelId, senderId, warningId, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
      callback(SafetyWarningUtils.CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS);
    }, items6);
    warningId(senderId[11]);
    const intl = channelId(senderId[12]).intl;
    const intl2 = channelId(senderId[12]).intl;
    const obj3 = { text: intl3.string(channelId(senderId[12]).t.Qyu4UK), variant: "primary", onpress: callback3 };
    intl3 = channelId(senderId[12]).intl;
    const items7 = [obj3];
    if (stateFromStores) {
      items8 = [];
    } else {
      const obj4 = { text: intl4.string(channelId(senderId[12]).t["7q0bNY"]), variant: "secondary", onpress: callback2 };
      intl4 = tmp4(tmp5[12]).intl;
      items8 = [obj4];
    }
    HermesBuiltin.arraySpread(items7, items8, 1);
    return <tmp11 channelId={channelId} warningId={warningId} senderId={senderId} warningType={SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2} header={intl.string(channelId(senderId[12]).t.ZzlB5p)} description={intl2.string(channelId(senderId[12]).t["D1aU+h"])} onDismiss={callback1} buttons={items7} />;
  }
}
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationWarningBanner.tsx");

export default InappropriateConversationWarningBanner;
export { InappropriateConversationWarningBanner };