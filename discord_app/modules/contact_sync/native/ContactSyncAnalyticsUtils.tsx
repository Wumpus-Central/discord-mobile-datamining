// discord_app/modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import trackNUFStep from "trackNUFStep" /* 11856 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { getIsOnboarding } from "ContactSyncModes" /* 11850 */;
import { ContactPermissions } from "ContactSyncLandingPage" /* 11851 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { _uploadContacts } from "ContactSyncUtils.tsx";

require = arg1;
let obj = { INITIALIZED: "Flow Initialized", LANDING: "Landing", PERMISSION_REQUESTED: "Contacts Permission Requested", NAME_INPUT: "Name Input", SUGGESTIONS_RESULTS: "Suggestions Results", CONTACT_INVITES: "Contact Invites", ADD_PHONE_NUMBER: "Add Phone Number", VERIFY_PHONE_NUMBER: "Verify Phone Number", PASSWORD_CONFIRM: "Password Confirmation", COMPLETE: "Complete" };
let c8 = null;
let c9 = 0;
const Onboarding = "Onboarding";
let result = require("set").fileFinishedImporting("modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx");

export const Steps = obj;
export const CONTACT_SYNC_ONBOARDING_LOCATION = "Onboarding";
export const trackFlowStart = function trackFlowStart(arg0) {
  const _require = arg0;
  const LANDING = obj.LANDING;
  closure_9 = Date.now();
  currentUser = currentUser.getCurrentUser();
  let phone;
  if (currentUser != null) {
    phone = currentUser.phone;
  }
  closure_1 = null != phone;
  obj = __uploadContacts;
  const result = obj.checkContactPermissions();
  result.then((arg0) => {
    let tmp = null;
    if (arg0 !== closure_1_5.NOT_DETERMINED) {
      let str = "denied";
      if (arg0 === closure_1_5.AUTHORIZED) {
        str = "accepted";
      }
      tmp = str;
    }
    obj = callback(closure_1_2[5]);
    obj = {};
    const merged = Object.assign(closure_0);
    obj.flow_type = "Contact Sync";
    ({ INITIALIZED: obj2.from_step, LANDING: obj2.to_step } = closure_1_7);
    obj.skip = false;
    obj.back = false;
    obj.seconds_on_from_step = 0;
    obj.has_phone_number = callback;
    obj.mobile_contacts_permission = tmp;
    obj.track(closure_1_6.CONTACT_SYNC_FLOW_KEY, obj);
  });
};
export const trackFlowStep = function trackFlowStep(LANDING, skip, back, location) {
  const tmp = getIsOnboarding();
  const timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  obj = expandEventPropertiesDefault;
  obj = {};
  const merged = Object.assign(location);
  if (tmp) {
    let _location = Onboarding;
  } else if (location != null) {
    _location = location.location;
  }
  obj.location = _location;
  obj.flow_type = "Contact Sync";
  obj.from_step = closure_8;
  obj.to_step = LANDING;
  obj.skip = skip;
  obj.back = back;
  obj.seconds_on_from_step = result;
  obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj);
  if (tmp) {
    obj = { skip: null };
    obj[0] = skip;
    trackNUFStep.trackNUFStep(closure_8, LANDING, obj);
    const obj3 = trackNUFStep;
  }
  closure_8 = LANDING;
};
export const trackFlowEnd = function trackFlowEnd(flag, location) {
  const timestamp = Date.now();
  obj = expandEventPropertiesDefault;
  obj = {};
  const merged = Object.assign(location);
  if (tmp) {
    let _location = Onboarding;
  } else if (location != null) {
    _location = location.location;
  }
  obj.location = _location;
  obj.flow_type = "Contact Sync";
  obj.from_step = c8;
  obj.to_step = obj.COMPLETE;
  obj.skip = flag;
  obj.back = false;
  obj.seconds_on_from_step = (timestamp - c9) / 1000;
  obj.track(AnalyticEvents.CONTACT_SYNC_FLOW_KEY, obj);
  c8 = null;
};