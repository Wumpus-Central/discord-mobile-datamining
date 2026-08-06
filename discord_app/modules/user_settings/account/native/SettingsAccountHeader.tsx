// discord_app/modules/user_settings/account/native/SettingsAccountHeader.tsx
import importAllResult from "noop";
import { View } from "set";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AnalyticsSections } from "ME";
import { SafetySettingsNoticeType } from "SafetyToastType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { SafetySettingsNotice } from "../../../safety_common/native/SafetySettingsNotice.tsx";
import { handleOpenEmailVerification } from "UserSettingsAccountUnverifiedHeader.tsx";

let c10;
let c9;
const require = arg1;
function RestrictedAccountRedirect() {
  let obj = { label: null, labelHook: null, noticeType: null };
  obj[0] = getSystemLocale.t.zqv4nV;
  obj[1] = function labelHook() {
    let obj = callback(table[11]);
    obj = { screen: constants.SETTINGS_CONTENT_AND_SOCIAL };
    obj.openUserSettings(obj);
  };
  obj[2] = SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE;
  return callback(SafetySettingsNotice, obj);
}
let c3 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { header: null };
obj = { paddingTop: require("Themes").space.PX_24, gap: require("Themes").space.PX_24 };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  let obj = initialize;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = handleOpenEmailVerification;
  const bannerText = obj1.getBannerText(stateFromStores);
  const tmp = callback2();
  const items1 = [upsertRelationship];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().length > 0);
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
      obj[4] = callback(tmp2(4695).Button, obj1);
      tmp14 = callback(tmp2(5354).TableRow, obj);
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
const result = require("upsertRelationship").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default memoResult;