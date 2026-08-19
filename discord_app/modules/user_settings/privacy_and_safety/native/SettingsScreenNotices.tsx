// discord_app/modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import isFeatureAgeGated from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import useAgeVerificationRunner from "../../../age_assurance/AgeVerificationUtils.tsx";
import AgeGatedFeature from "../../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import FamilyCenterSettingsParentalControlsNoticeDefault from "../../family_center/native/FamilyCenterSettingsNotice.tsx";
import AgeConfirmationNoticeDefault from "../../content_and_social/native/AgeConfirmationNotice.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
const createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { SENSITIVE_CONTENT_FILTERS: null, CONTENT_AND_SOCIAL: null, DATA_AND_PRIVACY: null };
let items = [{ order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: FamilyCenterSettingsParentalControlsNoticeDefault }, , ];
const obj2 = { order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: FamilyCenterSettingsParentalControlsNoticeDefault };
items[1] = {
  order: 300,
  predicate() {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: require("SensitiveContentFiltersTeenNotice").SensitiveContentFiltersTeenNotice
};
const obj3 = {
  order: 300,
  predicate() {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: require("SensitiveContentFiltersTeenNotice").SensitiveContentFiltersTeenNotice
};
items[2] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !useAgeVerificationRunner.isAgeVerified();
      const tmpResult = useAgeVerificationRunner;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
obj1[0] = items;
const items1 = [{ order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: FamilyCenterSettingsParentalControlsNoticeDefault }, ];
const obj5 = { order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: FamilyCenterSettingsParentalControlsNoticeDefault };
items1[1] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !useAgeVerificationRunner.isAgeVerified();
      const tmpResult = useAgeVerificationRunner;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
obj1[1] = items1;
const items2 = [{ order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: FamilyCenterSettingsParentalControlsNoticeDefault }];
obj1[2] = items2;
const obj7 = { order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: FamilyCenterSettingsParentalControlsNoticeDefault };
const result = require("obj132").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default function SettingsScreenNotices(screen) {
  screen = screen.screen;
  const items = [screen];
  const memo = React.useMemo(() => {
    const found = obj1[screen].filter((item, index) => item.predicate());
    const sorted = found.sort((order, order2) => order.order - order2.order);
    const mapped = sorted.map((item, index) => item.Component);
    let first = null;
    if (0 !== mapped.length) {
      first = mapped[0];
    }
    return first;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    const obj = { style: null, children: null };
    obj[0] = tmp.noticeContainer;
    obj[1] = <memo key={screen} />;
    tmp3 = <View style={null}>{null}</View>;
  }
  return tmp3;
};
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };