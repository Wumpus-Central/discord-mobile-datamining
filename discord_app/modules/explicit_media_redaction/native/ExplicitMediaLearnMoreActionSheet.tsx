// === Module 12028: ExplicitMediaLearnMoreActionSheet ===

// Module 12028 (ExplicitMediaLearnMoreActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import openUserSettings from "openUserSettings" /* 7496 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7714 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8560 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8562 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(7715).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const Constants = fn(1074);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center" }, art: null, infoHeader: null, info: null, infoDesc: null, buttonsContainer: null, linkSubtext: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center" };
obj2.art = { alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
let obj4 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.infoHeader = { marginBottom: nativeDefault.space.PX_8, alignItems: "center" };
let obj5 = { marginBottom: nativeDefault.space.PX_8, alignItems: "center" };
obj2.info = { marginBottom: nativeDefault.space.PX_24, alignItems: "center" };
obj2.infoDesc = { textAlign: "center" };
let obj6 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center" };
obj2.buttonsContainer = { gap: nativeDefault.space.PX_8 };
let obj7 = { gap: nativeDefault.space.PX_8 };
obj2.linkSubtext = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx");

export default function ExplicitMediaLearnMoreActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const attachmentId = channelId.attachmentId;
  const embedId = channelId.embedId;
  let tmp = closure_10();
  const tmp3 = messageId(attachmentId[7])();
  const isVerifiedTeen = channelId(attachmentId[8]).useIsVerifiedTeen();
  let obj = channelId(attachmentId[8]);
  const shouldAgeVerifyForExplicitMedia = channelId(attachmentId[9]).useShouldAgeVerifyForExplicitMedia();
  let intl = channelId(attachmentId[10]).intl;
  let obj2 = channelId(attachmentId[9]);
  let intl2 = channelId(attachmentId[10]).intl;
  let stringResult1 = intl2.string(channelId(attachmentId[10]).t["5e0geG"]);
  const items = [isVerifiedTeen, shouldAgeVerifyForExplicitMedia];
  const memo = embedId.useMemo(() => {
    let tmp = isVerifiedTeen;
    if (isVerifiedTeen) {
      tmp = shouldAgeVerifyForExplicitMedia;
    }
    return tmp;
  }, items);
  const items1 = [channelId, messageId];
  const callback = embedId.useCallback((action) => {
    const result = ExplicitMediaRedactionUtils.trackMediaRedactionAction({ action, channelId, messageId });
  }, items1);
  const items2 = [channelId, messageId];
  const effect = embedId.useEffect(() => {
    const obj = ExplicitMediaRedactionUtils;
    const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId, messageId });
  }, items2);
  const items3 = [memo, shouldAgeVerifyForExplicitMedia, callback, channelId, messageId, attachmentId, embedId];
  const callback1 = embedId.useCallback(() => {
    if (memo) {
      const intl2 = util.intl;
      const obj2 = {
        handleOnHelpUrlHook() {
            const obj = messageId(attachmentId[15]);
            obj.openUrl(messageId(attachmentId[14]).getArticleURL(memo.TIGGER_PAWTECT_LEARN_MORE));
            callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
          }
      };
      let formatResult = intl2.format(util.t["TGqx+i"], obj2);
    } else {
      formatResult = null;
      if (!shouldAgeVerifyForExplicitMedia) {
        const intl = util.intl;
        let obj = {
          handleFalsePositiveHook() {
                messageId(attachmentId[12]).hideActionSheet();
                callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
                const obj = messageId(attachmentId[12]);
                messageId(attachmentId[12]).openLazy(channelId(attachmentId[18])(attachmentId[17], attachmentId.paths), shouldAgeVerifyForExplicitMedia, { channelId, messageId, attachmentId, embedId });
              }
        };
        formatResult = intl.format(util.t.Ge0HUi, obj);
      }
    }
    return formatResult;
  }, items3);
  const obj3 = { style: tmp.container, children: null };
  const stringResult = intl.string(channelId(attachmentId[10]).t["9KiIz6"]);
  const items4 = [closure_8(isVerifiedTeen, { style: tmp.art, children: closure_8(channelId(attachmentId[20]).ShieldSpotIllustration, { height: 120, width: 120 }) }), , ];
  const obj5 = { style: tmp.info, children: null };
  const obj6 = { style: tmp.infoHeader, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl3 = channelId(attachmentId[10]).intl;
  obj6.children = intl3.string(channelId(attachmentId[10]).t.sGW77l);
  const items5 = [closure_8(channelId(attachmentId[21]).Text, obj6), ];
  const obj7 = { style: tmp.infoDesc, variant: "text-md/medium", color: "text-default", children: null };
  if (!memo) {
    const intl4 = tmp4(tmp2[10]).intl;
    const intl5 = tmp4(tmp2[10]).intl;
    let stringResult3 = intl5.string(tmp4(tmp2[10]).t["E/oQYL"]);
    if (tmp3) {
      stringResult3 = stringResult2;
    }
    stringResult1 = stringResult3;
    stringResult2 = intl4.string(tmp4(tmp2[10]).t.RUw0ZC);
  }
  obj7.children = stringResult1;
  items5[1] = closure_8(channelId(attachmentId[21]).Text, obj7);
  obj5.children = items5;
  items4[1] = closure_9(isVerifiedTeen, obj5);
  const obj8 = { style: tmp.buttonsContainer, children: null };
  const obj9 = { variant: "primary", size: "md", text: null, onPress: null };
  if (memo) {
    obj9.text = stringResult;
    obj9.onPress = function handleAgeVerifyButtonPress() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY);
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SENSITIVE_MEDIA_LEARN_MORE });
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SENSITIVE_MEDIA_LEARN_MORE };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    let tmp18 = obj9;
  } else {
    const intl6 = tmp4(tmp2[10]).intl;
    const string = intl6.string;
    const t = tmp4(tmp2[10]).t;
    if (tmp3) {
      function handleNavigateToSettingsButtonPress() {
        callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
        openUserSettings.openUserSettings({ screen: constants.CONTENT_AND_SOCIAL });
        const obj2 = { screen: constants.CONTENT_AND_SOCIAL };
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
      obj9.text = string(t["9D+zGX"]);
      obj9.onPress = handleNavigateToSettingsButtonPress;
      tmp18 = obj9;
    } else {
      function handleNavigateToHelpCenterLearnMore() {
        const obj = messageId(attachmentId[13]);
        obj.openURL(messageId(attachmentId[14]).getArticleURL(memo.EXPLICIT_MEDIA_REDACTION));
      }
      obj9.text = string(t.hvVgAZ);
      obj9.onPress = handleNavigateToHelpCenterLearnMore;
      tmp18 = obj9;
    }
  }
  const obj10 = { startExpanded: true, children: null };
  const items6 = [closure_8(channelId(attachmentId[22]).Button, tmp18), , ];
  const obj11 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl7 = tmp4(tmp2[10]).intl;
  obj11.text = intl7.string(channelId(attachmentId[10]).t.bmbHPA);
  obj11.onPress = function onPress() {
    callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items6[1] = closure_8(channelId(attachmentId[22]).Button, obj11);
  const obj4 = { style: tmp.art, children: closure_8(channelId(attachmentId[20]).ShieldSpotIllustration, { height: 120, width: 120 }) };
  items6[2] = closure_8(channelId(attachmentId[21]).Text, { style: tmp.linkSubtext, variant: "text-sm/medium", color: "text-muted", children: callback1() });
  obj8.children = items6;
  items4[2] = closure_9(isVerifiedTeen, obj8);
  obj3.children = items4;
  obj10.children = closure_9(isVerifiedTeen, obj3);
  return closure_8(channelId(attachmentId[19]).BottomSheet, obj10);
};