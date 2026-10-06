// === Module 12346: ContactSyncAnalyticsUtils ===

// Module 12346 (ContactSyncAnalyticsUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12341 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12342 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12347 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, from_step;

const getIsOnboarding = ContactSyncModalStore.getIsOnboarding;
const ContactPermissions = ContactSyncConstants.ContactPermissions;
const AnalyticEvents = Constants.AnalyticEvents;
const Steps = { INITIALIZED: "Flow Initialized", LANDING: "Landing", PERMISSION_REQUESTED: "Contacts Permission Requested", NAME_INPUT: "Name Input", SUGGESTIONS_RESULTS: "Suggestions Results", CONTACT_INVITES: "Contact Invites", ADD_PHONE_NUMBER: "Add Phone Number", VERIFY_PHONE_NUMBER: "Verify Phone Number", PASSWORD_CONFIRM: "Password Confirmation", COMPLETE: "Complete" };
let c8 = null;
let timestamp = 0;
const Onboarding = "Onboarding";
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx");

export { Steps };
export const CONTACT_SYNC_ONBOARDING_LOCATION = "Onboarding";
export const trackFlowStart = function trackFlowStart(arg0) {
  let closure_0;
  let obj;
  _require = arg0;
  const LANDING = obj.LANDING;
  let closure_9 = Date.now();
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
    const obj = { flow_type: "Contact Sync", skip: false, back: false, seconds_on_from_step: 0, has_phone_number, mobile_contacts_permission: tmp };
    const track = AnalyticsUtilsDefault.track;
    const CONTACT_SYNC_FLOW_KEY = AnalyticEvents.CONTACT_SYNC_FLOW_KEY;
    AnalyticsUtilsDefault;
    const merged = Object.assign(closure_0);
    ({ INITIALIZED: obj.from_step, LANDING: obj.to_step } = obj);
    track(CONTACT_SYNC_FLOW_KEY, obj);
  });
};
export const trackFlowStep = function trackFlowStep(LANDING, skip, back, location) {
  let _location;
  const tmp = getIsOnboarding();
  timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  const obj = { location: _location, flow_type: "Contact Sync", from_step, to_step: LANDING, skip, back, seconds_on_from_step: result };
  const track = AnalyticsUtilsDefault.track;
  const CONTACT_SYNC_FLOW_KEY = AnalyticEvents.CONTACT_SYNC_FLOW_KEY;
  AnalyticsUtilsDefault;
  const merged = Object.assign(location);
  if (tmp) {
    _location = Onboarding;
  } else if (location != null) {
    _location = location.location;
  }
  track(CONTACT_SYNC_FLOW_KEY, obj);
  if (tmp) {
    const obj3 = { skip };
    const obj2 = NewUserAnalyticsUtils;
    obj2.trackNUFStep(from_step, LANDING, obj3);
  }
  from_step = LANDING;
};
export const trackFlowEnd = function trackFlowEnd(flag, location) {
  let _location;
  let obj;
  const tmp = getIsOnboarding();
  timestamp = Date.now();
  obj = { location: _location, flow_type: "Contact Sync", from_step, to_step: obj.COMPLETE, skip: flag, back: false, seconds_on_from_step: (timestamp - timestamp) / 1000 };
  const track = AnalyticsUtilsDefault.track;
  const CONTACT_SYNC_FLOW_KEY = AnalyticEvents.CONTACT_SYNC_FLOW_KEY;
  AnalyticsUtilsDefault;
  const merged = Object.assign(location);
  if (tmp) {
    _location = Onboarding;
  } else if (location != null) {
    _location = location.location;
  }
  track(CONTACT_SYNC_FLOW_KEY, obj);
  from_step = null;
};