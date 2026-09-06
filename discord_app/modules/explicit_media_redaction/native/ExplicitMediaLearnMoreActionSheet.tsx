// === Module 11876: ExplicitMediaLearnMoreActionSheet ===

// Module 11876 (ExplicitMediaLearnMoreActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(7601).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const Constants = fn(1074);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, art: null, infoHeader: null, info: null, infoDesc: null, buttonsContainer: null, linkSubtext: null };
createStyles = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center" };
createStyles.container = createStyles;
createStyles.art = { alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
let obj1 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.infoHeader = { marginBottom: nativeDefault.space.PX_8, alignItems: "center" };
let obj2 = { marginBottom: nativeDefault.space.PX_8, alignItems: "center" };
createStyles.info = { marginBottom: nativeDefault.space.PX_24, alignItems: "center" };
createStyles.infoDesc = { textAlign: "center" };
let obj3 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center" };
createStyles.buttonsContainer = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
createStyles.linkSubtext = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx");

export default function ExplicitMediaLearnMoreActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const attachmentId = channelId.attachmentId;
  const embedId = channelId.embedId;
  let tmp = closure_10();
  const tmp3 = messageId(attachmentId[7])();
  let obj = channelId(attachmentId[8]);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  let obj1 = channelId(attachmentId[9]);
  const shouldAgeVerifyForExplicitMedia = obj1.useShouldAgeVerifyForExplicitMedia();
  let intl = channelId(attachmentId[10]).intl;
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
    const obj = { action, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj);
  }, items1);
  const items2 = [channelId, messageId];
  const effect = embedId.useEffect(() => {
    const obj = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj);
  }, items2);
  const items3 = [memo, shouldAgeVerifyForExplicitMedia, callback, channelId, messageId, attachmentId, embedId];
  const callback1 = embedId.useCallback(() => {
    if (memo) {
      const intl2 = util.intl;
      let obj = {
        handleOnHelpUrlHook() {
            const obj = messageId(attachmentId[15]);
            obj.openUrl(messageId(attachmentId[14]).getArticleURL(memo.TIGGER_PAWTECT_LEARN_MORE));
            callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
          }
      };
      let formatResult = intl2.format(util.t["TGqx+i"], obj);
    } else {
      formatResult = null;
      if (!shouldAgeVerifyForExplicitMedia) {
        const intl = util.intl;
        obj = {
          handleFalsePositiveHook() {
                let obj = messageId(attachmentId[12]);
                obj.hideActionSheet();
                callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
                obj = { channelId, messageId, attachmentId, embedId };
                messageId(attachmentId[12]).openLazy(channelId(attachmentId[18])(attachmentId[17], attachmentId.paths), shouldAgeVerifyForExplicitMedia, obj);
              }
        };
        formatResult = intl.format(util.t.Ge0HUi, obj);
      }
    }
    return formatResult;
  }, items3);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.art, children: closure_8(channelId(attachmentId[20]).ShieldSpotIllustration, { height: 120, width: 120 }) };
  const items4 = [closure_8(isVerifiedTeen, obj), , ];
  obj1 = { style: tmp.info, children: null };
  const obj2 = { style: tmp.infoHeader, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl3 = channelId(attachmentId[10]).intl;
  obj2.children = intl3.string(channelId(attachmentId[10]).t.sGW77l);
  const items5 = [closure_8(channelId(attachmentId[21]).Text, obj2), ];
  const obj3 = { style: tmp.infoDesc, variant: "text-md/medium", color: "text-default", children: null };
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
  obj3.children = stringResult1;
  items5[1] = closure_8(channelId(attachmentId[21]).Text, obj3);
  obj1.children = items5;
  items4[1] = closure_9(isVerifiedTeen, obj1);
  const obj4 = { style: tmp.buttonsContainer, children: null };
  const obj5 = { variant: "primary", size: "md", text: null, onPress: null };
  if (memo) {
    obj5.text = stringResult;
    obj5.onPress = function handleAgeVerifyButtonPress() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY);
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SENSITIVE_MEDIA_LEARN_MORE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    let tmp18 = obj5;
  } else {
    const intl6 = tmp4(tmp2[10]).intl;
    const string = intl6.string;
    const t = tmp4(tmp2[10]).t;
    if (tmp3) {
      function handleNavigateToSettingsButtonPress() {
        callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
        const obj = { screen: constants.CONTENT_AND_SOCIAL };
        obj.openUserSettings(obj);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
      obj5.text = string(t["9D+zGX"]);
      obj5.onPress = handleNavigateToSettingsButtonPress;
      tmp18 = obj5;
    } else {
      function handleNavigateToHelpCenterLearnMore() {
        const obj = messageId(attachmentId[13]);
        obj.openURL(messageId(attachmentId[14]).getArticleURL(memo.EXPLICIT_MEDIA_REDACTION));
      }
      obj5.text = string(t.hvVgAZ);
      obj5.onPress = handleNavigateToHelpCenterLearnMore;
      tmp18 = obj5;
    }
  }
  const obj6 = { startExpanded: true, children: null };
  const items6 = [closure_8(channelId(attachmentId[22]).Button, tmp18), , ];
  const obj7 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl7 = tmp4(tmp2[10]).intl;
  obj7.text = intl7.string(channelId(attachmentId[10]).t.bmbHPA);
  obj7.onPress = function onPress() {
    callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items6[1] = closure_8(channelId(attachmentId[22]).Button, obj7);
  stringResult = intl.string(channelId(attachmentId[10]).t["9KiIz6"]);
  items6[2] = closure_8(channelId(attachmentId[21]).Text, { style: tmp.linkSubtext, variant: "text-sm/medium", color: "text-muted", children: callback1() });
  obj4.children = items6;
  items4[2] = closure_9(isVerifiedTeen, obj4);
  obj.children = items4;
  obj6.children = closure_9(isVerifiedTeen, obj);
  return closure_8(channelId(attachmentId[19]).BottomSheet, obj6);
};