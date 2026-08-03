// === Module 13932: items ===

// Module 13932 (items)
import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { noticeContainer: null };
createCacheKey = { marginHorizontal: require("Themes").space.PX_16, marginTop: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { SENSITIVE_CONTENT_FILTERS: null, CONTENT_AND_SOCIAL: null, DATA_AND_PRIVACY: null };
let items = [{ order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") }, , ];
const obj2 = { order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") };
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
    let isFeatureAgeGatedResult = require(3934) /* isFeatureAgeGated */.isFeatureAgeGated(require(5079) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !require(4471) /* useAgeVerificationRunner */.isAgeVerified();
      const tmpResult = require(4471) /* useAgeVerificationRunner */;
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("AgeConfirmationNotice")
};
obj1[0] = items;
const obj4 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = require(3934) /* isFeatureAgeGated */.isFeatureAgeGated(require(5079) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !require(4471) /* useAgeVerificationRunner */.isAgeVerified();
      const tmpResult = require(4471) /* useAgeVerificationRunner */;
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("AgeConfirmationNotice")
};
const items1 = [{ order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") }, ];
const obj5 = { order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") };
items1[1] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = require(3934) /* isFeatureAgeGated */.isFeatureAgeGated(require(5079) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !require(4471) /* useAgeVerificationRunner */.isAgeVerified();
      const tmpResult = require(4471) /* useAgeVerificationRunner */;
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("AgeConfirmationNotice")
};
obj1[1] = items1;
const obj6 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = require(3934) /* isFeatureAgeGated */.isFeatureAgeGated(require(5079) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !require(4471) /* useAgeVerificationRunner */.isAgeVerified();
      const tmpResult = require(4471) /* useAgeVerificationRunner */;
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("AgeConfirmationNotice")
};
const items2 = [{ order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") }];
obj1[2] = items2;
const obj7 = { order: 100, predicate: require("getEmptyActivityFormatter").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default function SettingsScreenNotices(screen) {
  screen = screen.screen;
  const items = [screen];
  const memo = React.useMemo(() => {
    const found = outer1_7[screen].filter((predicate) => predicate.predicate());
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
    const obj = { style: null, children: null };
    obj[0] = tmp.noticeContainer;
    obj[1] = <memo key={screen} />;
    tmp3 = <View style={null}>{null}</View>;
  }
  return tmp3;
};
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };