// === Module 14815: SettingsScreenNotices ===

// Module 14815 (SettingsScreenNotices)
import nativeDefault from "native" /* 576 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5423 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5424 */;
import FamilyCenterSettingsNoticeDefault from "FamilyCenterSettingsNotice" /* 14816 */;
import AgeConfirmationNoticeDefault from "AgeConfirmationNotice" /* 14818 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { noticeContainer: null };
createStyles = { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 };
createStyles.noticeContainer = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const obj1 = { SENSITIVE_CONTENT_FILTERS: null, CONTENT_AND_SOCIAL: null, DATA_AND_PRIVACY: null };
let items = [{ order: 100, predicate: fn(7593).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, , ];
const obj2 = { order: 100, predicate: fn(7593).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
items[1] = {
  order: 300,
  predicate() {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: fn(14817).SensitiveContentFiltersTeenNotice
};
const obj3 = {
  order: 300,
  predicate() {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: fn(14817).SensitiveContentFiltersTeenNotice
};
items[2] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
obj1.SENSITIVE_CONTENT_FILTERS = items;
const obj4 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
const items1 = [{ order: 100, predicate: fn(7593).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, ];
const obj5 = { order: 100, predicate: fn(7593).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
items1[1] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
obj1.CONTENT_AND_SOCIAL = items1;
const obj6 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
const items2 = [{ order: 100, predicate: fn(7593).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }];
obj1.DATA_AND_PRIVACY = items2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default function SettingsScreenNotices(screen) {
  screen = screen.screen;
  const items = [screen];
  const memo = noop.useMemo(() => {
    const found = obj1[screen].filter((predicate) => predicate.predicate());
    const sorted = found.sort((order, order2) => order.order - order2.order);
    const mapped = sorted.map((Component) => Component.Component);
    let first = null;
    if (0 !== mapped.length) {
      first = mapped[0];
    }
    return first;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    const obj = { style: tmp.noticeContainer, children: <memo key={screen} /> };
    tmp3 = <View style={tmp.noticeContainer}><memo key={screen} /></View>;
  }
  return tmp3;
};
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };