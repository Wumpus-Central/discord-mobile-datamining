// === Module 14103: RestrictedAccountRedirect ===

// Module 14103 (RestrictedAccountRedirect)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4745 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import handleOpenEmailVerification from "handleOpenEmailVerification" /* 8624 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14104 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { AnalyticsSections } from "ME" /* 676 */;
import { SafetySettingsNoticeType } from "SafetyToastType" /* 5430 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function RestrictedAccountRedirect() {
  let obj = {
    label: getSystemLocale.t.zqv4nV,
    labelHook() {
      callback(table[11]);
      const obj = { screen: constants.SETTINGS_CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj);
    },
    noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  };
  return callback(SafetySettingsNoticeDefault, obj);
}
let c3 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { paddingTop: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_24 };
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
      obj[4] = callback(Button.Button, obj1);
      tmp14 = callback(TableRowInner.TableRow, obj);
    }
    items2[1] = tmp14;
    obj[1] = items2;
    let tmp9Result = callback(View, obj);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
});
const result = require("obj132").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default memoResult;