// === Module 14560: RestrictedAccountRedirect ===

// Module 14560 (RestrictedAccountRedirect)
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import handleOpenEmailVerification from "handleOpenEmailVerification" /* 7775 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14561 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "markAllUserIdListsStale" /* 4130 */;
import closure_6 from "mergeGuildAvatar" /* 1921 */;
import { AnalyticsSections } from "ME" /* 673 */;
import { SafetySettingsNoticeType } from "SafetyToastType" /* 8685 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function RestrictedAccountRedirect() {
  let obj = {
    label: getSystemLocale.t.zqv4nV,
    labelHook() {
      let obj = callback(table[11]);
      obj = { screen: constants.SETTINGS_CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj);
    },
    noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  };
  return callback(SafetySettingsNoticeDefault, obj);
}
let c3 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { header: null };
obj = { paddingTop: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_24 };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = handleOpenEmailVerification;
  const bannerText = obj1.getBannerText(stateFromStores);
  const tmp = callback2();
  const items1 = [closure_5];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().size > 0);
  const callback = importAllResult.useCallback(() => {
    callback(table[14]).open();
  }, []);
  if (null != bannerText) {
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    let tmp11 = null;
    if (stateFromStores1) {
      tmp11 = callback(RestrictedAccountRedirect, {});
    }
    const items2 = [tmp11, ];
    let tmp14 = null;
    if (null != bannerText) {
      obj = { onPress: null, variant: "danger", label: null, accessibilityLabel: null, trailing: null, start: true, end: true };
      obj[0] = callback;
      ({ title: obj5[2], title: obj5[3] } = bannerText);
      obj1 = { text: null, accessibilityLabel: null, onPress: null };
      ({ button: obj6[0], button: obj6[1] } = bannerText);
      obj1[2] = callback;
      obj[4] = callback(tmp2(4928).Button, obj1);
      tmp14 = callback(tmp2(5607).TableRow, obj);
    }
    items2[1] = tmp14;
    obj[1] = items2;
    let tmp9Result = closure_10(View, obj);
    const tmp10 = View;
    const tmp9 = closure_10;
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
});
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default memoResult;