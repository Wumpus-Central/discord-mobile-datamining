// discord_app/modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  resolve() {},
};
const promise = new Promise((resolve) => {
  obj.resolve = resolve;
});
const result = size.fileFinishedImporting("modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx");

export function schedulePostTTIEvent(arg0) {
  closure_0 = arg0;
  promise.then(() => {
    closure_0();
  });
}
export function notifyAboutTTI() {
  obj.resolve(null);
}
