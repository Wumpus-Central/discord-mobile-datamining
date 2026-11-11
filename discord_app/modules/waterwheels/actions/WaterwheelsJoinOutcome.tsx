// discord_app/modules/waterwheels/actions/WaterwheelsJoinOutcome.tsx
import Constants from "../../../Constants.tsx";
import JoinGuildRefusedError from "../../guild/JoinGuildRefusedError.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/waterwheels/actions/WaterwheelsJoinOutcome.tsx");

export function classifyWaterwheelsJoinFailure(cause) {
  if (cause instanceof JoinGuildRefusedError.JoinGuildRefusedError) {
    cause = cause.cause;
  }
  if (null != cause) {
    if (typeof cause === "object") {
      const body = cause.body;
      let code1;
      ({ status, code } = cause);
      if (body != null) {
        code1 = body.code;
      }
      if (code1 == null) {
        code1 = code;
      }
      let str2 = "not_found";
      if (404 !== status) {
        str2 = "not_found";
        if (code1 !== AbortCodes.UNKNOWN_GUILD) {
          let str3 = "other";
          if (code1 === AbortCodes.USER_BANNED) {
            str3 = "banned";
          }
          str2 = str3;
        }
      }
      return str2;
    }
  }
  return "other";
}
