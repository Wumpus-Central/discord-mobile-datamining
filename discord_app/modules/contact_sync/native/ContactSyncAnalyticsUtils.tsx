// === Module 12812: ContactSyncAnalyticsUtils ===

// Module 12812 (ContactSyncAnalyticsUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12813 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

require = fn;
const getIsOnboarding = fn(12807).getIsOnboarding;
const ContactPermissions = fn(12808).ContactPermissions;
const AnalyticEvents = fn(1074).AnalyticEvents;
const Steps = { INITIALIZED: "Flow Initialized", LANDING: "Landing", PERMISSION_REQUESTED: "Contacts Permission Requested", NAME_INPUT: "Name Input", SUGGESTIONS_RESULTS: "Suggestions Results", CONTACT_INVITES: "Contact Invites", ADD_PHONE_NUMBER: "Add Phone Number", VERIFY_PHONE_NUMBER: "Verify Phone Number", PASSWORD_CONFIRM: "Password Confirmation", COMPLETE: "Complete" };
let c8 = null;
let timestamp = 0;
const Onboarding = "Onboarding";
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx");

export { Steps };
export const CONTACT_SYNC_ONBOARDING_LOCATION = "Onboarding";
export const trackFlowStart = function trackFlowStart(arg0) {
  _require = arg0;
  const LANDING = obj.LANDING;
  closure_9 = Date.now();
  const currentUser = UserStore.getCurrentUser();
  let phone;
  if (currentUser != null) {
    phone = currentUser.phone;
  }
  const has_phone_number = null != phone;
  obj = require("ContactSyncUtils");
  const result = obj.checkContactPermissions();
  result.then((result) => {
    let tmp = null;
    if (result !== ContactPermissions.NOT_DETERMINED) {
      let str = "denied";
      if (result === ContactPermissions.AUTHORIZED) {
        str = "accepted";
      }
      tmp = str;
    }
    const obj = AnalyticsUtilsDefault;
    const obj3 = {};
    const merged = Object.assign(closure_0);
    obj3.flow_type = "Contact Sync";
    ({ INITIALIZED: obj2.from_step, LANDING: obj2.to_step } = obj);
    obj3.skip = false;
    obj3.back = false;
    obj3.seconds_on_from_step = 0;
    obj3.has_phone_number = has_phone_number;
    obj3.mobile_contacts_permission = tmp;
    obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj3);
  });
};
export const trackFlowStep = function trackFlowStep(LANDING, skip, back, location) {
  const tmp = getIsOnboarding();
  timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  const obj2 = {};
  const merged = Object.assign(location);
  if (tmp) {
    let _location = Onboarding;
  } else if (location != null) {
    _location = location.location;
  }
  obj2.location = _location;
  obj2.flow_type = "Contact Sync";
  obj2.from_step = from_step;
  obj2.to_step = LANDING;
  obj2.skip = skip;
  obj2.back = back;
  obj2.seconds_on_from_step = result;
  AnalyticsUtilsDefault.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj2);
  if (tmp) {
    const obj4 = { skip };
    NewUserAnalyticsUtils.trackNUFStep(from_step, LANDING, obj4);
  }
  from_step = LANDING;
};
export const trackFlowEnd = function trackFlowEnd(flag, location) {
  timestamp = Date.now();
  const obj = AnalyticsUtilsDefault;
  const obj2 = {};
  const merged = Object.assign(location);
  if (tmp) {
    let _location = Onboarding;
  } else if (location != null) {
    _location = location.location;
  }
  obj2.location = _location;
  obj2.flow_type = "Contact Sync";
  obj2.from_step = from_step;
  obj2.to_step = obj.COMPLETE;
  obj2.skip = flag;
  obj2.back = false;
  obj2.seconds_on_from_step = (timestamp - timestamp) / 1000;
  obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj2);
  from_step = null;
};