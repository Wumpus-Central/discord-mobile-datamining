// discord_app/modules/self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import SafetyWarningUtils from "../../../shared/SafetyWarningUtils.tsx";
import ChannelSafetyWarningsActionCreators from "../../../ChannelSafetyWarningsActionCreators.tsx";
import StrangerDangerMoreTipsModalActionItemsDefault from "StrangerDangerMoreTipsModalActionItems.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";

require = fn;
class StrangerDangerWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_3 = closure_11();
    tmp = channelId;
    tmp2 = senderId;
    obj = channelId(senderId[9]);
    items = [];
    items[0] = closure_4;
    items1 = [];
    items1[0] = senderId;
    items2 = [, ,];
    items2[0] = channelId;
    items2[1] = warningId;
    items2[2] = senderId;
    stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
    effect = closure_3.useEffect(() => {
      const obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER };
      obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_VIEWED, obj);
    }, items2);
    items3 = [,];
    items3[0] = channelId;
    items3[1] = warningId;
    callback = closure_3.useCallback(() => {
      const items = [warningId];
      const result = ChannelSafetyWarningsActionCreators.dismissChannelSafetyWarnings(channelId, items);
      ModalActionCreatorsDefault.popWithKey(modalKey);
    }, items3);
    closure_4 = callback;
    items4 = [, , ,];
    items4[0] = callback;
    items4[1] = channelId;
    items4[2] = warningId;
    items4[3] = senderId;
    callback1 = closure_3.useCallback(
      (cta) => () => {
        callback();
        const obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta };
        obj.trackCtaEvent(obj);
      },
      items4,
    );
    closure_5 = callback1;
    items5 = [, , , ,];
    items5[0] = callback1;
    items5[1] = callback;
    items5[2] = channelId;
    items5[3] = warningId;
    items5[4] = senderId;
    callback2 = closure_3.useCallback((arg0) => {
      closure_0 = arg0;
      return () => {
        let obj = {
          userId: senderId,
          channelId,
          onBlock: callback1(channelId),
          onSuccess() {
            return warningId(senderId[13]).hideActionSheet();
          },
          onIgnore() {
            closure_1_4();
            channelId(11370);
            const obj = {
              channelId,
              warningId,
              senderId,
              warningType: constants.STRANGER_DANGER,
              cta: channelId(11370).CtaEventTypes.USER_BANNER_IGNORE_CONFIRM,
            };
            obj.trackCtaEvent(obj);
          },
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION,
        };
        obj.openLazy(asyncRequireImpl(11383, dependencyMap.paths), closure_9, obj);
      };
    }, items5);
    closure_6 = callback2;
    tmp8 = jsx;
    obj = {
      channelId,
      warningId,
      senderId,
      warningType: closure_5.STRANGER_DANGER,
      header: null,
      description: null,
      onDismiss: null,
      buttons: null,
    };
    tmp9 = warningId(senderId[17]);
    intl = channelId(senderId[18]).intl;
    obj.header = intl.string(channelId(senderId[18]).t.iOkDpM);
    intl2 = channelId(senderId[18]).intl;
    obj.description = intl2.string(channelId(senderId[18]).t.ISUbcM);
    obj.onDismiss = callback;
    obj1 = { text: null, variant: "primary", onpress: null };
    intl3 = channelId(senderId[18]).intl;
    obj1.text = intl3.string(channelId(senderId[18]).t["Qk/c48"]);
    obj1.onpress = function onpress() {
      let obj = {
        modalKey,
        headerStyle: moreTipsHeader.moreTipsHeader,
        channelId,
        warningId,
        senderId,
        description: null,
        safetyTips: null,
        actionItems: null,
      };
      const intl = util.intl;
      obj.description = intl.string(util.t.DJMZX6);
      const tmp = asyncRequireImpl(11375, dependencyMap.paths);
      obj.safetyTips = React5().map((children, index) =>
        closure_1_10(channelId(senderId[20]).Text, { variant: "text-sm/medium", children }, index),
      );
      obj = { channelId, warningId, senderId, onBlockPressed: null };
      const arr = React5();
      obj.onBlockPressed = callback2(SafetyWarningUtils.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM);
      obj.actionItems = jsx(StrangerDangerMoreTipsModalActionItemsDefault, {
        channelId,
        warningId,
        senderId,
        onBlockPressed: null,
      });
      obj.pushLazy(tmp, obj, modalKey);
      const obj4 = SafetyWarningUtils;
      obj4.trackCtaEvent({
        channelId,
        warningId,
        senderId,
        warningType: SafetyWarningTypes.STRANGER_DANGER,
        cta: SafetyWarningUtils.CtaEventTypes.OPEN_MORE_TIPS,
      });
    };
    items6 = [];
    items6[0] = obj1;
    if (stateFromStores) {
      items7 = [];
    } else {
      obj2 = { text: null, variant: "destructive", onpress: null };
      intl4 = tmp(tmp2[18]).intl;
      obj2.text = intl4.string(tmp(tmp2[18]).t.ie0QdN);
      obj2.onpress = callback2(tmp(tmp2[10]).CtaEventTypes.USER_BANNER_BLOCK_CONFIRM);
      items7 = [];
      items7[0] = obj2;
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items7, 1);
    obj.buttons = items6;
    return tmp8(tmp9, obj);
  }
}
const SafetyWarningTypes = fn(10915).SafetyWarningTypes;
const Constants = fn(11363);
({ STRANGER_DANGER_MORE_TIPS_MODAL_KEY: metroRequire, getStrangerDangerSafetyTips: closure_7 } = Constants);
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_9 = fn(11382).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { moreTipsHeader: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createStyles.moreTipsHeader = createStyles;
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx",
);

export default StrangerDangerWarningBanner;
export { StrangerDangerWarningBanner };
