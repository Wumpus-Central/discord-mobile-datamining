// discord_app/modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import ExplicitMediaRedactionUtils from "../ExplicitMediaRedactionUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_5 = fn(7021).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const Constants = fn(1074);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4836);
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
  let intl = channelId(attachmentId[10]).intl;
  let stringResult = intl.string(channelId(attachmentId[10]).t["5e0geG"]);
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
    const result = obj.trackMediaRedactionAction({
      action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId,
      messageId,
    });
  }, items2);
  const items3 = [shouldAgeVerifyForExplicitMedia, callback, channelId, messageId, attachmentId, embedId];
  const tmp11 = embedId.useCallback(() => {
    let formatResult = null;
    if (!shouldAgeVerifyForExplicitMedia) {
      const intl = util.intl;
      let obj = {
        handleFalsePositiveHook() {
          messageId(attachmentId[12]).hideActionSheet();
          callback(
            channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE,
          );
          const obj = messageId(attachmentId[12]);
          messageId(attachmentId[12]).openLazy(
            channelId(attachmentId[17])(attachmentId[16], attachmentId.paths),
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
      children: closure_8(channelId(attachmentId[19]).ShieldSpotIllustration, { height: 120, width: 120 }),
    }),
    ,
  ];
  const obj5 = { style: tmp.info, children: null };
  const obj6 = {
    style: tmp.infoHeader,
    accessibilityRole: "header",
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl2 = channelId(attachmentId[10]).intl;
  obj6.children = intl2.string(channelId(attachmentId[10]).t.sGW77l);
  const items5 = [closure_8(channelId(attachmentId[20]).Text, obj6)];
  const obj7 = { style: tmp.infoDesc, variant: "text-md/medium", color: "text-default", children: null };
  if (!memo) {
    const intl3 = tmp4(tmp2[10]).intl;
    const intl4 = tmp4(tmp2[10]).intl;
    let stringResult2 = intl4.string(tmp4(tmp2[10]).t["E/oQYL"]);
    if (tmp3) {
      stringResult2 = stringResult1;
    }
    stringResult = stringResult2;
    stringResult1 = intl3.string(tmp4(tmp2[10]).t.RUw0ZC);
  }
  obj7.children = stringResult;
  items5[1] = closure_8(channelId(attachmentId[20]).Text, obj7);
  obj5.children = items5;
  items4[1] = closure_9(isVerifiedTeen, obj5);
  const obj8 = { style: tmp.buttonsContainer, children: null };
  const obj9 = { variant: "primary", size: "md", text: null, onPress: null };
  const intl5 = tmp4(tmp2[10]).intl;
  const string = intl5.string;
  const t = tmp4(tmp2[10]).t;
  if (memo) {
    function handleNavigateToAgeVerificationLearnMore() {
      callback(
        ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE,
      );
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
    obj9.text = string(t.hvVgAZ);
    obj9.onPress = handleNavigateToAgeVerificationLearnMore;
    let tmp17 = obj9;
  } else if (tmp3) {
    function handleNavigateToSettingsButtonPress() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
      openUserSettings.openUserSettings({ screen: constants2.CONTENT_AND_SOCIAL });
      const obj2 = { screen: constants2.CONTENT_AND_SOCIAL };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    obj9.text = string(t["9D+zGX"]);
    obj9.onPress = handleNavigateToSettingsButtonPress;
    tmp17 = obj9;
  } else {
    function handleNavigateToHelpCenterLearnMore() {
      const obj = messageId(attachmentId[13]);
      obj.openURL(messageId(attachmentId[14]).getArticleURL(callback.EXPLICIT_MEDIA_REDACTION));
    }
    obj9.text = string(t.hvVgAZ);
    obj9.onPress = handleNavigateToHelpCenterLearnMore;
    tmp17 = obj9;
  }
  const items6 = [closure_8(channelId(attachmentId[21]).Button, tmp17), ,];
  const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl6 = tmp4(tmp2[10]).intl;
  obj10.text = intl6.string(channelId(attachmentId[10]).t.bmbHPA);
  obj10.onPress = function onPress() {
    callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items6[1] = closure_8(channelId(attachmentId[21]).Button, obj10);
  let tmp12Result = null != tmp11;
  if (tmp12Result) {
    const obj11 = { style: tmp.linkSubtext, variant: "text-sm/medium", color: "text-muted", children: tmp11 };
    tmp12Result = closure_8(tmp4(tmp2[20]).Text, obj11);
  }
  const obj12 = { startExpanded: true, children: null };
  items6[2] = tmp12Result;
  obj8.children = items6;
  items4[2] = closure_9(isVerifiedTeen, obj8);
  obj3.children = items4;
  obj12.children = closure_9(isVerifiedTeen, obj3);
  return closure_8(channelId(attachmentId[18]).BottomSheet, obj12);
}
