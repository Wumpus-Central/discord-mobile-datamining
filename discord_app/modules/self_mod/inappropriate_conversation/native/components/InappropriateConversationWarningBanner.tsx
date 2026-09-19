// === Module 11648: InappropriateConversationWarningBanner ===

// Module 11648 (InappropriateConversationWarningBanner)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5109 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11631 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 11632 */;
import SafetyToolsActionCreators from "SafetyToolsActionCreators" /* 11652 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;

require = fn;
class InappropriateConversationWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    closure_3 = undefined;
    closure_4 = undefined;
    items = [, , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    effect = closure_3.useEffect(() => {
      const obj = SafetyWarningUtils;
      obj.trackNamedViewEvent({ channelId, warningId, senderId, warningType: SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, viewName: SafetyWarningUtils.ViewNameTypes.SAFETY_WARNING_BANNER });
    }, items);
    items1 = [, , ];
    items1[0] = channelId;
    items1[1] = warningId;
    items1[2] = senderId;
    callback = closure_3.useCallback((cta) => {
      SafetyWarningUtils.trackCtaEvent({ channelId, warningId, senderId, warningType: SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, cta });
    }, items1);
    closure_3 = callback;
    tmp3 = channelId;
    tmp4 = senderId;
    obj = channelId(senderId[5]);
    items2 = [];
    items2[0] = closure_4;
    items3 = [];
    items3[0] = senderId;
    items4 = [, ];
    items4[0] = channelId;
    items4[1] = warningId;
    stateFromStores = obj.useStateFromStores(items2, () => RelationshipStore.isBlocked(senderId), items3);
    callback1 = closure_3.useCallback(() => {
      const items = [warningId];
      const result = ChannelSafetyWarningsActionCreators.dismissChannelSafetyWarnings(channelId, items);
    }, items4);
    closure_4 = callback1;
    items5 = [, , , ];
    items5[0] = callback1;
    items5[1] = channelId;
    items5[2] = warningId;
    items5[3] = senderId;
    items6 = [, , , ];
    items6[0] = channelId;
    items6[1] = warningId;
    items6[2] = senderId;
    items6[3] = callback;
    callback2 = closure_3.useCallback(() => {
      actions_AlertActionCreatorsDefault.openLazy({
        importer() {
          return channelId(senderId[9])(senderId[8], senderId.paths).then((result) => {
            closure_0 = result.default;
            return (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.channelId = channelId;
              obj.warningId = warningId;
              obj.warningType = closure_3_5.INAPPROPRIATE_CONVERSATION_TIER_2;
              obj.senderId = senderId;
              obj.analyticsBlockContext = closure_3_0(11631).CtaEventTypes.USER_BANNER_BLOCK_CONFIRM;
              obj.analyticsBlockAndReportContext = closure_3_0(11631).CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM;
              obj.analyticsCancelContext = closure_3_0(11631).CtaEventTypes.USER_BANNER_BLOCK_CANCEL;
              obj.onDismiss = onDismiss;
              return closure_3_6(closure_0, obj);
            };
          });
        },
        isDismissable: false
      });
    }, items5);
    callback3 = closure_3.useCallback(() => {
      const result = SafetyToolsActionCreators.openSafetyToolsActionSheet(channelId, senderId, warningId, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
      callback(SafetyWarningUtils.CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS);
    }, items6);
    tmp9 = jsx;
    obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, header: null, description: null, onDismiss: null, buttons: null };
    tmp10 = warningId(senderId[11]);
    intl = channelId(senderId[12]).intl;
    obj1.header = intl.string(channelId(senderId[12]).t.ZzlB5p);
    intl2 = channelId(senderId[12]).intl;
    obj1.description = intl2.string(channelId(senderId[12]).t["D1aU+h"]);
    obj1.onDismiss = callback1;
    obj5 = { text: null, variant: "primary", onpress: null };
    intl3 = channelId(senderId[12]).intl;
    obj5.text = intl3.string(channelId(senderId[12]).t.Qyu4UK);
    obj5.onpress = callback3;
    items7 = [];
    items7[0] = obj5;
    if (stateFromStores) {
      items8 = [];
    } else {
      obj6 = { text: null, variant: "secondary", onpress: null };
      intl4 = tmp3(tmp4[12]).intl;
      obj6.text = intl4.string(tmp3(tmp4[12]).t["7q0bNY"]);
      obj6.onpress = callback2;
      items8 = [];
      items8[0] = obj6;
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items8, 1);
    obj1.buttons = items7;
    return tmp9(tmp10, obj1);
  }
}
const SafetyWarningTypes = fn(11178).SafetyWarningTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationWarningBanner.tsx");

export default InappropriateConversationWarningBanner;
export { InappropriateConversationWarningBanner };