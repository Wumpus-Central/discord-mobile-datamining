// discord_app/modules/self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants2 from "../../../../../Constants.tsx";
import intl5 from "../../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import ChannelSafetyWarningsStore from "../../../ChannelSafetyWarningsStore.tsx";
import SafetyWarningUtils from "../../../shared/SafetyWarningUtils.tsx";
import ChannelSafetyWarningsActionCreators from "../../../ChannelSafetyWarningsActionCreators.tsx";
import RestrictionConfirmationConstants from "../../../../relationships/native/RestrictionConfirmationConstants.tsx";
import StrangerDangerMoreTipsModalActionItemsDefault from "StrangerDangerMoreTipsModalActionItems.tsx";
import react_mod from "../../../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import Constants from "../../../Constants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
class StrangerDangerWarningBanner {
  constructor(channelId) {
    let intl3;
    let intl4;
    let items7;
    let moreTipsHeader;
    channelId = channelId.channelId;
    const warningId = channelId.warningId;
    const senderId = channelId.senderId;
    let onDismiss;
    react = closure_11();
    let tmp2 = channelId;
    const tmp3 = senderId;
    let obj = channelId(senderId[9]);
    let items = [onDismiss];
    const items1 = [senderId];
    const items2 = [channelId, warningId, senderId];
    const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
    const effect = react.useEffect(() => {
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER };
      obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_VIEWED, obj2);
    }, items2);
    const items3 = [channelId, warningId];
    onDismiss = react.useCallback(() => {
      const items = [warningId];
      const obj = ChannelSafetyWarningsActionCreators;
      const result = obj.dismissChannelSafetyWarnings(channelId, items);
      const obj2 = ModalActionCreatorsDefault;
      obj2.popWithKey(metroRequire);
    }, items3);
    const items4 = [onDismiss, channelId, warningId, senderId];
    const callback1 = react.useCallback(
      (cta) => () => {
        callback();
        const obj = SafetyWarningUtils;
        const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta };
        obj.trackCtaEvent(obj2);
      },
      items4,
    );
    const items5 = [callback1, onDismiss, channelId, warningId, senderId];
    const callback2 = react.useCallback((arg0) => {
      let closure_0 = arg0;
      return () => {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        let obj = {
          userId: senderId,
          channelId,
          onBlock: callback1(channelId),
          onSuccess() {
            const obj = warningId(senderId[13]);
            return obj.hideActionSheet();
          },
          onIgnore() {
            closure_1_4();
            const obj = channelId(closure_2_2[10]);
            const obj2 = {
              channelId,
              warningId,
              senderId,
              warningType: constants.STRANGER_DANGER,
              cta: channelId(closure_2_2[10]).CtaEventTypes.USER_BANNER_IGNORE_CONFIRM,
            };
            obj.trackCtaEvent(obj2);
          },
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION,
        };
        const tmp2 = asyncRequire(9830, dependencyMap.paths);
        openLazy(tmp2, closure_9, obj);
      };
    }, items5);
    warningId(senderId[17]);
    let intl = channelId(senderId[18]).intl;
    const intl2 = channelId(senderId[18]).intl;
    let obj3 = {
      text: intl3.string(channelId(senderId[18]).t["Qk/c48"]),
      variant: "primary",
      onpress() {
        let arr;
        let intl;
        const pushLazy = ModalActionCreatorsDefault.pushLazy;
        let obj = {
          modalKey: metroRequire,
          headerStyle: moreTipsHeader.moreTipsHeader,
          channelId,
          warningId,
          senderId,
          description: intl.string(intl5.t.DJMZX6),
          safetyTips: arr.map((children, index) => {
            const obj = { variant: "text-sm/medium", children };
            return closure_1_10(channelId(senderId[20]).Text, obj, index);
          }),
          actionItems: null,
        };
        ModalActionCreatorsDefault;
        const tmp2 = asyncRequire(9818, dependencyMap.paths);
        intl = intl5.intl;
        arr = metroImportDefault();
        ({
          channelId,
          warningId,
          senderId,
          onBlockPressed: callback2(SafetyWarningUtils.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM),
        });
        StrangerDangerMoreTipsModalActionItemsDefault;
        pushLazy(tmp2, obj, metroRequire);
        const obj3 = SafetyWarningUtils;
        const obj4 = {
          channelId,
          warningId,
          senderId,
          warningType: SafetyWarningTypes.STRANGER_DANGER,
          cta: SafetyWarningUtils.CtaEventTypes.OPEN_MORE_TIPS,
        };
        obj3.trackCtaEvent(obj4);
      },
    };
    intl3 = channelId(senderId[18]).intl;
    const items6 = [obj3];
    if (stateFromStores) {
      items7 = [];
    } else {
      let obj4 = {
        text: intl4.string(tmp2(tmp3[18]).t.ie0QdN),
        variant: "destructive",
        onpress: callback2(tmp2(tmp3[10]).CtaEventTypes.USER_BANNER_BLOCK_CONFIRM),
      };
      intl4 = tmp2(tmp3[18]).intl;
      items7 = [obj4];
    }
    HermesBuiltin.arraySpread(items6, items7, 1);
    return (
      <tmp10
        channelId={channelId}
        warningId={warningId}
        senderId={senderId}
        warningType={callback1.STRANGER_DANGER}
        header={intl.string(channelId(senderId[18]).t.iOkDpM)}
        description={intl2.string(channelId(senderId[18]).t.ISUbcM)}
        onDismiss={onDismiss}
        buttons={items6}
      />
    );
  }
}
let react = react_mod;
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
({ STRANGER_DANGER_MORE_TIPS_MODAL_KEY: metroRequire, getStrangerDangerSafetyTips: metroImportDefault } = Constants);
const AnalyticEvents = Constants2.AnalyticEvents;
let closure_9 = RestrictionConfirmationConstants.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
let obj = { moreTipsHeader: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
const unpackModuleId = createStyles.createStyles(obj);
let result = size.fileFinishedImporting(
  "modules/self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx",
);

export default StrangerDangerWarningBanner;
export { StrangerDangerWarningBanner };
