// discord_app/modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import NewUserAnalyticsUtils from "../../nuf/native/NewUserAnalyticsUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const getIsOnboarding = fn(12677).getIsOnboarding;
const ContactPermissions = fn(12678).ContactPermissions;
const AnalyticEvents = fn(1074).AnalyticEvents;
const Steps = {
  INITIALIZED: "Flow Initialized",
  LANDING: "Landing",
  PERMISSION_REQUESTED: "Contacts Permission Requested",
  NAME_INPUT: "Name Input",
  SUGGESTIONS_RESULTS: "Suggestions Results",
  CONTACT_INVITES: "Contact Invites",
  ADD_PHONE_NUMBER: "Add Phone Number",
  VERIFY_PHONE_NUMBER: "Verify Phone Number",
  PASSWORD_CONFIRM: "Password Confirmation",
  COMPLETE: "Complete",
};
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
    const obj = {};
    const merged = Object.assign(closure_0);
    obj.flow_type = "Contact Sync";
    ({ INITIALIZED: obj2.from_step, LANDING: obj2.to_step } = obj);
    obj.skip = false;
    obj.back = false;
    obj.seconds_on_from_step = 0;
    obj.has_phone_number = has_phone_number;
    obj.mobile_contacts_permission = tmp;
    obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj);
  });
};
export const trackFlowStep = function trackFlowStep(LANDING, skip, back, location) {
  const tmp = getIsOnboarding();
  timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  let obj = {};
  const merged = Object.assign(location);
  if (tmp) {
    let _location = Onboarding;
  } else if (location != null) {
    _location = location.location;
  }
  obj.location = _location;
  obj.flow_type = "Contact Sync";
  obj.from_step = from_step;
  obj.to_step = LANDING;
  obj.skip = skip;
  obj.back = back;
  obj.seconds_on_from_step = result;
  obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj);
  if (tmp) {
    obj = { skip };
    NewUserAnalyticsUtils.trackNUFStep(from_step, LANDING, obj);
  }
  from_step = LANDING;
};
export const trackFlowEnd = function trackFlowEnd(flag, location) {
  timestamp = Date.now();
  const obj = {};
  const merged = Object.assign(location);
  if (tmp) {
    let _location = Onboarding;
  } else if (location != null) {
    _location = location.location;
  }
  obj.location = _location;
  obj.flow_type = "Contact Sync";
  obj.from_step = from_step;
  obj.to_step = obj.COMPLETE;
  obj.skip = flag;
  obj.back = false;
  obj.seconds_on_from_step = (timestamp - timestamp) / 1000;
  obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj);
  from_step = null;
};
