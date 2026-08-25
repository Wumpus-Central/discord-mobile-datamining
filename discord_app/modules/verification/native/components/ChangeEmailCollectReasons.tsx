// === Module 8611: ChangeEmailCollectReasons ===

// Module 8611 (ChangeEmailCollectReasons)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import ChangeEmailReasons from "ChangeEmailReasons" /* 8612 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ CHANGE_EMAIL_REASONS_ORDER: error, SUSPICIOUS_CHANGE_EMAIL_REASONS: closure_8 } = ChangeEmailReasons);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { background: null, container: null, radioGroup: null, title: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
let obj1 = { paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: 38 };
createCacheKey[3] = { textAlign: "center" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: 38 };
const result = require("set").fileFinishedImporting("modules/verification/native/components/ChangeEmailCollectReasons.tsx");

export default function ChangeEmailCollectReasons(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const setChangeEmailReason = changeEmailReason.setChangeEmailReason;
  let navigation;
  let callback1;
  const tmp = callback3();
  let obj = changeEmailReason(navigation[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = changeEmailReason(navigation[9]);
  navigation = obj1.useNavigation();
  const items1 = [navigation, changeEmailReason];
  const items2 = [setChangeEmailReason];
  const callback = callback1.useCallback(() => {
    let obj = setChangeEmailReason(navigation[10]);
    obj = { change_email_reason_enum: changeEmailReason };
    obj.track(closure_1_9.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, obj);
    if (null != changeEmailReason) {
      if (closure_1_8.has(changeEmailReason)) {
        navigation.push(changeEmailReason(tmp[11]).VerificationModalScenes.CHANGE_EMAIL_WARNING);
      }
    }
    navigation.push(changeEmailReason(navigation[11]).VerificationModalScenes.ENTER_EMAIL);
  }, items1);
  callback1 = callback1.useCallback((change_email_reason_enum) => {
    let obj = setChangeEmailReason(navigation[10]);
    obj = { change_email_reason_enum };
    obj.track(closure_1_9.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj);
    setChangeEmailReason(change_email_reason_enum);
  }, items2);
  const items3 = [changeEmailReason, callback1];
  let tmp9 = null;
  if (null != stateFromStores) {
    obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: null, children: null };
    obj[2] = tmp.background;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj1[0] = tmp.title;
    const intl = tmp2(tmp3[16]).intl;
    obj1[4] = intl.string(tmp2(tmp3[16]).t["41NIIh"]);
    const items4 = [callback(tmp2(tmp3[15]).Text, obj1), , ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.radioGroup;
    obj2[1] = tmp8;
    items4[1] = callback(closure_4, obj2);
    const obj3 = { size: "md", variant: "primary", onPress: null, text: null, disabled: null };
    obj3[2] = callback;
    const intl2 = tmp2(tmp3[16]).intl;
    obj3[3] = intl2.string(tmp2(tmp3[16]).t.XiOHRX);
    obj3[4] = null == changeEmailReason;
    items4[2] = callback(tmp2(tmp3[17]).Button, obj3);
    obj[1] = items4;
    obj[3] = callback2(closure_4, obj);
    tmp9 = callback(closure_5, obj);
  }
  return tmp9;
};