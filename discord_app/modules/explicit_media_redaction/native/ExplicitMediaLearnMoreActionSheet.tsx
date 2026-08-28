// === Module 11382: ExplicitMediaLearnMoreActionSheet ===

// Module 11382 (ExplicitMediaLearnMoreActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_5 } from "USER_SETTING_ACTION_SHEET_KEY" /* 7293 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ HelpdeskArticles: closure_6, UserSettingsSections: error } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, art: null, infoHeader: null, info: null, infoDesc: null, buttonsContainer: null, linkSubtext: null };
createCacheKey = { paddingVertical: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_24, justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", marginBottom: ThemesDefault.space.PX_16 };
let obj1 = { alignSelf: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_8, alignItems: "center" };
let obj2 = { marginBottom: ThemesDefault.space.PX_8, alignItems: "center" };
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_24, alignItems: "center" };
createCacheKey[4] = { textAlign: "center" };
let obj3 = { marginBottom: ThemesDefault.space.PX_24, alignItems: "center" };
createCacheKey[5] = { gap: ThemesDefault.space.PX_8 };
let obj4 = { gap: ThemesDefault.space.PX_8 };
createCacheKey[6] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj5 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx");

export default function ExplicitMediaLearnMoreActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const attachmentId = channelId.attachmentId;
  const embedId = channelId.embedId;
  let isVerifiedTeen;
  let shouldAgeVerifyForExplicitMedia;
  let memo;
  let callback;
  let tmp = callback2();
  const tmp3 = messageId(attachmentId[7])();
  let obj = channelId(attachmentId[8]);
  isVerifiedTeen = obj.useIsVerifiedTeen();
  obj1 = channelId(attachmentId[9]);
  shouldAgeVerifyForExplicitMedia = obj1.useShouldAgeVerifyForExplicitMedia();
  let intl = channelId(attachmentId[10]).intl;
  let intl2 = channelId(attachmentId[10]).intl;
  let stringResult1 = intl2.string(channelId(attachmentId[10]).t["5e0geG"]);
  const items = [isVerifiedTeen, shouldAgeVerifyForExplicitMedia];
  memo = embedId.useMemo(() => {
    let tmp = isVerifiedTeen;
    if (isVerifiedTeen) {
      tmp = shouldAgeVerifyForExplicitMedia;
    }
    return tmp;
  }, items);
  const items1 = [channelId, messageId];
  callback = embedId.useCallback((action) => {
    let obj = channelId(attachmentId[9]);
    obj = { action, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj);
  }, items1);
  const items2 = [channelId, messageId];
  const effect = embedId.useEffect(() => {
    let obj = channelId(attachmentId[9]);
    obj = { action: channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj);
  }, items2);
  const items3 = [memo, shouldAgeVerifyForExplicitMedia, callback, channelId, messageId, attachmentId, embedId];
  const callback1 = embedId.useCallback(() => {
    if (memo) {
      const intl2 = channelId(attachmentId[10]).intl;
      let obj = { handleOnHelpUrlHook: null };
      obj[0] = function handleOnHelpUrlHook() {
        const obj = closure_1_1(closure_1_2[15]);
        obj.openUrl(closure_1_1(closure_1_2[14]).getArticleURL(closure_1_6.TIGGER_PAWTECT_LEARN_MORE));
        callback(closure_1_0(closure_1_2[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
      };
      let formatResult = intl2.format(channelId(attachmentId[10]).t["TGqx+i"], obj);
    } else {
      formatResult = null;
      if (!shouldAgeVerifyForExplicitMedia) {
        const intl = channelId(attachmentId[10]).intl;
        obj = { handleFalsePositiveHook: null };
        obj[0] = function handleFalsePositiveHook() {
          let obj = closure_1_1(closure_1_2[12]);
          obj.hideActionSheet();
          callback(closure_1_0(closure_1_2[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
          obj = { channelId: closure_0, messageId: closure_1, attachmentId: closure_2, embedId: closure_3 };
          closure_1_1(closure_1_2[12]).openLazy(closure_1_0(closure_1_2[18])(closure_1_2[17], closure_1_2.paths), closure_1_5, obj);
        };
        formatResult = intl.format(channelId(attachmentId[10]).t.Ge0HUi, obj);
      }
    }
    return formatResult;
  }, items3);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.art, children: callback(channelId(attachmentId[20]).ShieldSpotIllustration, { height: 120, width: 120 }) };
  const items4 = [callback(isVerifiedTeen, obj), , ];
  obj1 = { style: tmp.info, children: null };
  const obj2 = { style: tmp.infoHeader, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl3 = channelId(attachmentId[10]).intl;
  obj2[4] = intl3.string(channelId(attachmentId[10]).t.sGW77l);
  const items5 = [callback(channelId(attachmentId[21]).Text, obj2), ];
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
  obj3[3] = stringResult1;
  items5[1] = callback(channelId(attachmentId[21]).Text, obj3);
  obj1[1] = items5;
  items4[1] = closure_9(isVerifiedTeen, obj1);
  const obj4 = { style: tmp.buttonsContainer, children: null };
  const obj5 = { variant: "primary", size: "md", text: null, onPress: null };
  if (memo) {
    obj5[2] = stringResult;
    obj5[3] = function handleAgeVerifyButtonPress() {
      callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY);
      let obj = messageId(attachmentId[15]);
      obj = { entryPoint: channelId(attachmentId[16]).AgeVerificationModalEntryPoint.SENSITIVE_MEDIA_LEARN_MORE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
      messageId(attachmentId[12]).hideActionSheet();
    };
    let tmp18 = obj5;
  } else {
    const intl6 = tmp4(tmp2[10]).intl;
    const string = intl6.string;
    const t = tmp4(tmp2[10]).t;
    if (tmp3) {
      function handleNavigateToSettingsButtonPress() {
        callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
        let obj = channelId(attachmentId[11]);
        obj = { screen: callback.CONTENT_AND_SOCIAL };
        obj.openUserSettings(obj);
        messageId(attachmentId[12]).hideActionSheet();
      }
      obj5[2] = string(t["9D+zGX"]);
      obj5[3] = handleNavigateToSettingsButtonPress;
      tmp18 = obj5;
    } else {
      function handleNavigateToHelpCenterLearnMore() {
        const obj = messageId(attachmentId[13]);
        obj.openURL(messageId(attachmentId[14]).getArticleURL(memo.EXPLICIT_MEDIA_REDACTION));
      }
      obj5[2] = string(t.hvVgAZ);
      obj5[3] = handleNavigateToHelpCenterLearnMore;
      tmp18 = obj5;
    }
  }
  const obj6 = { startExpanded: true, children: null };
  const items6 = [callback(channelId(attachmentId[22]).Button, tmp18), , ];
  const obj7 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl7 = tmp4(tmp2[10]).intl;
  obj7[2] = intl7.string(channelId(attachmentId[10]).t.bmbHPA);
  obj7[3] = function onPress() {
    callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
    messageId(attachmentId[12]).hideActionSheet();
  };
  items6[1] = callback(channelId(attachmentId[22]).Button, obj7);
  stringResult = intl.string(channelId(attachmentId[10]).t["9KiIz6"]);
  items6[2] = callback(channelId(attachmentId[21]).Text, { style: tmp.linkSubtext, variant: "text-sm/medium", color: "text-muted", children: callback1() });
  obj4[1] = items6;
  items4[2] = closure_9(isVerifiedTeen, obj4);
  obj[1] = items4;
  obj6[1] = closure_9(isVerifiedTeen, obj);
  return callback(channelId(attachmentId[19]).BottomSheet, obj6);
};