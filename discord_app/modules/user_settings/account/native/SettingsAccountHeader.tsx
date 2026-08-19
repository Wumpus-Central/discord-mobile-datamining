// discord_app/modules/user_settings/account/native/SettingsAccountHeader.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import handleOpenEmailVerification from "UserSettingsAccountUnverifiedHeader.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { AnalyticsSections } from "../../../../Constants.tsx";
import { SafetySettingsNoticeType } from "../../../safety_common/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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