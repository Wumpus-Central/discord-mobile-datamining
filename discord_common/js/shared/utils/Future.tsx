// discord_common/js/shared/utils/Future.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export const Future = function Future() {
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise((resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  });
  return obj;
}.prototype;