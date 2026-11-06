// === Module 15225: ProfileReadStateEndpoints ===

// Module 15225 (ProfileReadStateEndpoints)
import size from "module_2" /* 2 */;

const frozen = Object.freeze({
  PROFILE_READ_STATE(arg0) {
    return "/users/@me/profile-read-states/" + arg0;
  }
});
const result = size.fileFinishedImporting("modules/user_profile/ProfileReadStateEndpoints.tsx");

export const ProfileReadStateEndpoints = frozen;