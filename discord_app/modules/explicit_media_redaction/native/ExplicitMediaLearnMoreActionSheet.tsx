// === Module 11488: ExplicitMediaLearnMoreActionSheet ===

// Module 11488 (ExplicitMediaLearnMoreActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7109 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7110 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
let closure_5 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
({ HelpdeskArticles: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, art: obj3, infoHeader: obj4, info: obj5, infoDesc: { textAlign: "center" }, buttonsContainer: obj6, linkSubtext: obj7 };
obj2 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_8, alignItems: "center" };
obj5 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center" };
obj6 = { gap: nativeDefault.space.PX_8 };
obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx");

export default function ExplicitMediaLearnMoreActionSheet(channelId) {
  let intl2;
  let intl6;
  let items4;
  let items5;
  let items6;
  let tmp17;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const attachmentId = channelId.attachmentId;
  const embedId = channelId.embedId;
  const tmp = closure_10();
  const tmp2 = attachmentId;
  const tmp3 = messageId(attachmentId[7])();
  let obj = channelId(attachmentId[8]);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  let obj2 = channelId(attachmentId[9]);
  const shouldAgeVerifyForExplicitMedia = obj2.useShouldAgeVerifyForExplicitMedia();
  let intl = channelId(attachmentId[10]).intl;
  let stringResult = intl.string(channelId(attachmentId[10]).t["5e0geG"]);
  const items = [isVerifiedTeen, shouldAgeVerifyForExplicitMedia];
  const memo = embedId.useMemo(() => isVerifiedTeen && shouldAgeVerifyForExplicitMedia, items);
  const items1 = [channelId, messageId];
  const callback = embedId.useCallback((action) => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items1);
  const items2 = [channelId, messageId];
  const effect = embedId.useEffect(() => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items2);
  const items3 = [shouldAgeVerifyForExplicitMedia, callback, channelId, messageId, attachmentId, embedId];
  const tmp11 = embedId.useCallback(() => {
    let formatResult = null;
    if (!shouldAgeVerifyForExplicitMedia) {
      const intl = intl7.intl;
      let obj = {
        handleFalsePositiveHook() {
            const obj = messageId(attachmentId[12]);
            obj.hideActionSheet();
            callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
            const obj2 = messageId(attachmentId[12]);
            const obj3 = { channelId, messageId, attachmentId, embedId };
            obj2.openLazy(channelId(attachmentId[17])(attachmentId[16], attachmentId.paths), shouldAgeVerifyForExplicitMedia, obj3);
          }
      };
      formatResult = intl.format(intl7.t.Ge0HUi, obj);
    }
    return formatResult;
  }, items3)();
  let obj3 = { style: tmp.container, children: items4 };
  const obj4 = { style: tmp.art, children: closure_8(channelId(attachmentId[19]).ShieldSpotIllustration, { height: 120, width: 120 }) };
  BottomSheet = channelId(attachmentId[18]).BottomSheet;
  items4 = [closure_8(isVerifiedTeen, obj4), , ];
  const obj5 = { style: tmp.info, children: items5 };
  const obj6 = { style: tmp.infoHeader, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl2.string(channelId(attachmentId[10]).t.sGW77l) };
  const Text = channelId(attachmentId[20]).Text;
  intl2 = channelId(attachmentId[10]).intl;
  items5 = [closure_8(Text, obj6), ];
  const obj7 = { style: tmp.infoDesc, variant: "text-md/medium", color: "text-default", children: stringResult };
  const Text2 = channelId(attachmentId[20]).Text;
  if (!memo) {
    const intl3 = tmp4(tmp2[10]).intl;
    const stringResult1 = intl3.string(channelId(tmp2[10]).t.RUw0ZC);
    const intl4 = tmp4(tmp2[10]).intl;
    let stringResult2 = intl4.string(tmp4(tmp2[10]).t["E/oQYL"]);
    if (tmp3) {
      stringResult2 = stringResult1;
    }
    stringResult = stringResult2;
  }
  items5[1] = closure_8(Text2, obj7);
  items4[1] = closure_9(isVerifiedTeen, obj5);
  const obj9 = { variant: "primary", size: "md", text: null, onPress: null };
  const obj8 = { style: tmp.buttonsContainer, children: items6 };
  const Button = tmp4(tmp2[21]).Button;
  const intl5 = tmp4(tmp2[10]).intl;
  const string = intl5.string;
  const t = tmp4(tmp2[10]).t;
  if (memo) {
    function handleNavigateToAgeVerificationLearnMore() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(metroRequire.TIGGER_PAWTECT_LEARN_MORE));
    }
    obj9.text = string(t.hvVgAZ);
    obj9.onPress = handleNavigateToAgeVerificationLearnMore;
    tmp17 = obj9;
  } else if (tmp3) {
    function handleNavigateToSettingsButtonPress() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
      const obj = openUserSettings;
      const obj2 = { screen: metroImportDefault.CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }
    obj9.text = string(t["9D+zGX"]);
    obj9.onPress = handleNavigateToSettingsButtonPress;
    tmp17 = obj9;
  } else {
    function handleNavigateToHelpCenterLearnMore() {
      const openURL = messageId(attachmentId[13]).openURL;
      messageId(attachmentId[13]);
      const obj = messageId(attachmentId[14]);
      openURL(obj.getArticleURL(callback.EXPLICIT_MEDIA_REDACTION));
    }
    obj9.text = string(t.hvVgAZ);
    obj9.onPress = handleNavigateToHelpCenterLearnMore;
    tmp17 = obj9;
  }
  items6 = [closure_8(Button, tmp17), , ];
  const obj10 = {
    variant: "secondary",
    size: "md",
    text: intl6.string(channelId(tmp2[10]).t.bmbHPA),
    onPress() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  const Button2 = tmp4(tmp2[21]).Button;
  intl6 = tmp4(tmp2[10]).intl;
  items6[1] = closure_8(Button2, obj10);
  let tmp12Result = null != tmp11;
  if (tmp12Result) {
    const obj11 = { style: tmp.linkSubtext, variant: "text-sm/medium", color: "text-muted", children: tmp11 };
    tmp12Result = closure_8(tmp4(tmp2[20]).Text, obj11);
  }
  items6[2] = tmp12Result;
  const obj12 = { startExpanded: true, children: closure_9(isVerifiedTeen, obj3) };
  items4[2] = closure_9(isVerifiedTeen, obj8);
  return closure_8(BottomSheet, obj12);
};