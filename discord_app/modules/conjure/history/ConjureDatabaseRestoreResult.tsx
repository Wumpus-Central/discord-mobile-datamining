// discord_app/modules/conjure/history/ConjureDatabaseRestoreResult.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/history/ConjureDatabaseRestoreResult.tsx");

export const databaseRestoreResultFromStatus = function databaseRestoreResultFromStatus(status, message) {
  let obj;
  if (202 === status) {
    obj = { ok: false, code: "unconfirmed", message };
    const obj2 = { ok: false, code: "unconfirmed", message };
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
