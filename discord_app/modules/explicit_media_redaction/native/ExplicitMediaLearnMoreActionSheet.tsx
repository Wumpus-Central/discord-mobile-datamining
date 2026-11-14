// discord_app/modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef3417 from "../../age_assurance/ManualReview.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import ExplicitMediaRedactionUtils from "../ExplicitMediaRedactionUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_5 = fn(8637).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const Constants = fn(1072);
({ HelpdeskArticles: closure_6, UserSettingsSections: metroImportDefault } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  container: {
    paddingVertical: nativeDefault.space.PX_24,
    paddingHorizontal: nativeDefault.space.PX_24,
    justifyContent: "center",
  },
  art: null,
  infoHeader: null,
  info: null,
  infoDesc: null,
  buttonsContainer: null,
  linkSubtext: null,
};
let obj3 = {
  paddingVertical: nativeDefault.space.PX_24,
  paddingHorizontal: nativeDefault.space.PX_24,
  justifyContent: "center",
};
obj2.art = { alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
const obj4 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
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
let result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx",
);

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
  items = [isVerifiedTeen, shouldAgeVerifyForExplicitMedia];
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
    const result = obj.trackMediaRedactionAction({
      action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId,
      messageId,
    });
  }, items2);
  const items3 = [shouldAgeVerifyForExplicitMedia, callback, channelId, messageId, attachmentId, embedId];
  const tmp10 = embedId.useCallback(() => {
    let formatResult = null;
    if (!shouldAgeVerifyForExplicitMedia) {
      const intl = util.intl;
      let obj = {
        handleFalsePositiveHook() {
          messageId(attachmentId[11]).hideActionSheet();
          callback(
            channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE,
          );
          const obj = messageId(attachmentId[11]);
          messageId(attachmentId[11]).openLazy(
            channelId(attachmentId[19])(attachmentId[18], attachmentId.paths),
            shouldAgeVerifyForExplicitMedia,
            { channelId, messageId, attachmentId, embedId },
          );
        },
      };
      formatResult = intl.format(util.t.Ge0HUi, obj);
    }
    return formatResult;
  }, items3)();
  const obj3 = { style: tmp.container, children: null };
  let obj2 = channelId(attachmentId[9]);
  const items4 = [
    closure_8(isVerifiedTeen, {
      style: tmp.art,
      children: closure_8(channelId(attachmentId[21]).ShieldSpotIllustration, { height: 120, width: 120 }),
    }),
    ,
  ];
  const obj5 = { style: tmp.info, children: null };
  const obj6 = {
    style: tmp.infoHeader,
    accessibilityRole: "header",
    variant: "heading-xl/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  let intl = channelId(attachmentId[15]).intl;
  const string = intl.string;
  const t = channelId(attachmentId[15]).t;
  if (shouldAgeVerifyForExplicitMedia) {
    let stringResult = string(t["2t3DCx"]);
  } else {
    stringResult = string(t.sGW77l);
  }
  function handleNavigateToHelpCenterLearnMore() {
    callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE);
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(constants.EXPLICIT_MEDIA_REDACTION));
  }
  obj6.children = stringResult;
  const items5 = [closure_8(channelId(attachmentId[22]).Text, obj6)];
  const obj7 = { style: tmp.infoDesc, variant: "body-md/medium", color: "text-default", children: null };
  if (memo) {
    function handleNavigateToTeenAgeGroupArticle() {
      callback(
        ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE,
      );
      const obj = AgeVerificationActionCreatorsDefault;
      const intl = util.intl;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(intl.string(_modDef3417.agiNYw)));
    }
    const intl5 = tmp4(tmp2[15]).intl;
    const obj8 = { handleOnTeenAgeGroupHook: handleNavigateToTeenAgeGroupArticle };
    let formatResult = intl5.format(tmp4(tmp2[15]).t["24JQP1"], obj8);
  } else if (shouldAgeVerifyForExplicitMedia) {
    const intl4 = tmp4(tmp2[15]).intl;
    formatResult = intl4.string(tmp4(tmp2[15]).t["3y2fov"]);
  } else if (true === tmp3) {
    const intl3 = tmp4(tmp2[15]).intl;
    const obj9 = { handleOnHelpCenterHook: handleNavigateToHelpCenterLearnMore };
    formatResult = intl3.format(tmp4(tmp2[15]).t.kIEcIY, obj9);
  } else {
    const intl2 = tmp4(tmp2[15]).intl;
    formatResult = intl2.string(tmp4(tmp2[15]).t["E/oQYL"]);
  }
  obj7.children = formatResult;
  items5[1] = closure_8(channelId(attachmentId[22]).Text, obj7);
  obj5.children = items5;
  items4[1] = closure_9(isVerifiedTeen, obj5);
  const obj10 = { style: tmp.buttonsContainer, children: null };
  if (memo) {
    const obj11 = { variant: "primary", size: "md", text: null, onPress: null };
    const intl9 = tmp4(tmp2[15]).intl;
    obj11.text = intl9.string(tmp4(tmp2[15]).t.hvVgAZ);
    obj11.onPress = handleNavigateToHelpCenterLearnMore;
    let obj14 = obj11;
  } else if (shouldAgeVerifyForExplicitMedia) {
    const obj12 = { variant: "primary", size: "md", text: null, onPress: null };
    function handleConfirmAgeButtonPress() {
      callback(
        ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY,
      );
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj2 = AgeVerificationActionCreatorsDefault;
      const result = obj2.showAgeVerificationGetStartedModal({
        entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SENSITIVE_MEDIA_LEARN_MORE,
      });
    }
    const intl8 = tmp4(tmp2[15]).intl;
    obj12.text = intl8.string(tmp4(tmp2[15]).t.DVywUB);
    obj12.onPress = handleConfirmAgeButtonPress;
    obj14 = obj12;
  } else if (true === tmp3) {
    const obj13 = { variant: "primary", size: "md", text: null, onPress: null };
    function handleNavigateToSettingsButtonPress() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
      openUserSettings.openUserSettings({ screen: constants2.CONTENT_AND_SOCIAL });
      const obj2 = { screen: constants2.CONTENT_AND_SOCIAL };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    const intl7 = tmp4(tmp2[15]).intl;
    obj13.text = intl7.string(tmp4(tmp2[15]).t["9D+zGX"]);
    obj13.onPress = handleNavigateToSettingsButtonPress;
    obj14 = obj13;
  } else {
    obj14 = { variant: "primary", size: "md", text: null, onPress: null };
    const intl6 = tmp4(tmp2[15]).intl;
    obj14.text = intl6.string(tmp4(tmp2[15]).t.hvVgAZ);
    obj14.onPress = handleNavigateToHelpCenterLearnMore;
  }
  const items6 = [closure_8(channelId(attachmentId[23]).Button, obj14), ,];
  const obj15 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl10 = tmp4(tmp2[15]).intl;
  obj15.text = intl10.string(channelId(attachmentId[15]).t.bmbHPA);
  obj15.onPress = function handleDismissButtonPress() {
    callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items6[1] = closure_8(channelId(attachmentId[23]).Button, obj15);
  let tmp11Result = null != tmp10;
  if (tmp11Result) {
    const obj16 = { style: tmp.linkSubtext, variant: "body-sm/medium", color: "text-muted", children: tmp10 };
    tmp11Result = closure_8(tmp4(tmp2[22]).Text, obj16);
  }
  const obj17 = { startExpanded: true, children: null };
  items6[2] = tmp11Result;
  obj10.children = items6;
  items4[2] = closure_9(isVerifiedTeen, obj10);
  obj3.children = items4;
  obj17.children = closure_9(isVerifiedTeen, obj3);
  return closure_8(channelId(attachmentId[20]).BottomSheet, obj17);
}
