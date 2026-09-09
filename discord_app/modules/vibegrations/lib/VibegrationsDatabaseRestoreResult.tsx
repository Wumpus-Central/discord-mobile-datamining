// discord_app/modules/vibegrations/lib/VibegrationsDatabaseRestoreResult.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDatabaseRestoreResult.tsx");

export const databaseRestoreResultFromStatus = function databaseRestoreResultFromStatus(status, message) {
  if (202 === status) {
    let obj = { ok: false, code: "unconfirmed", message };
  } else {
    if (status >= 200) {
      if (status < 300) {
        obj = { ok: true };
      }
    }
    let str = "failed";
    if (410 === status) {
      str = "expired";
    }
    obj = { ok: false, code: str, message };
  }
  return obj;
};
