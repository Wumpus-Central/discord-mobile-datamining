// === Module 14938: SettingsScreenNotices ===

// Module 14938 (SettingsScreenNotices)
import nativeDefault from "native" /* 576 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4853 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5511 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5512 */;
import FamilyCenterSettingsNoticeDefault from "FamilyCenterSettingsNotice" /* 14939 */;
import AgeConfirmationNoticeDefault from "AgeConfirmationNotice" /* 14941 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
const obj2 = { noticeContainer: { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 }, listHeaderNoticeContainer: null };
const obj3 = { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 };
obj2.listHeaderNoticeContainer = { marginTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const obj5 = { SENSITIVE_CONTENT_FILTERS: null, CONTENT_AND_SOCIAL: null, DATA_AND_PRIVACY: null };
const obj4 = { marginTop: nativeDefault.space.PX_16 };
let items = [{ order: 100, predicate: fn(7706).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, , , ];
const obj6 = { order: 100, predicate: fn(7706).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
items[1] = { order: 150, predicate: fn(14940).shouldShowTinyBroncoUnconfirmedNotice, Component: fn(14940).ContentFiltersUnconfirmedNotice };
const obj7 = { order: 150, predicate: fn(14940).shouldShowTinyBroncoUnconfirmedNotice, Component: fn(14940).ContentFiltersUnconfirmedNotice };
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
const obj8 = {
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
items[3] = {
  order: 300,
  predicate() {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: fn(14942).SensitiveContentFiltersTeenNotice
};
obj5.SENSITIVE_CONTENT_FILTERS = items;
const obj9 = {
  order: 300,
  predicate() {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: fn(14942).SensitiveContentFiltersTeenNotice
};
const items1 = [{ order: 100, predicate: fn(7706).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, ];
const obj10 = { order: 100, predicate: fn(7706).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
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
obj5.CONTENT_AND_SOCIAL = items1;
const obj11 = {
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
const items2 = [{ order: 100, predicate: fn(7706).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }];
obj5.DATA_AND_PRIVACY = items2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default function SettingsScreenNotices(screen) {
  screen = screen.screen;
  let flag = screen.isListHeader;
  if (flag === undefined) {
    flag = false;
  }
  let obj = closure_6();
  const items = [screen];
  const memo = noop.useMemo(() => {
    const found = obj5[screen].filter((predicate) => predicate.predicate());
    const sorted = found.sort((order, order2) => order.order - order2.order);
    const mapped = sorted.map((Component) => Component.Component);
    let first = null;
    if (0 !== mapped.length) {
      first = mapped[0];
    }
    return first;
  }, items);
  if (null == memo) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj.style = flag ? obj.listHeaderNoticeContainer : obj.noticeContainer;
    obj.children = <memo key={screen} />;
    <View style={null}>{null}</View>;
    const tmp4 = flag ? obj.listHeaderNoticeContainer : obj.noticeContainer;
  }
};
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };