// discord_app/modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx
import PostTTIScheduler from "PostTTIScheduler.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx");

export const waitSafelyForPostTTI = function waitSafelyForPostTTI(arg0) {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const timeout = setTimeout(() => {
      closure_0();
    }, num);
    PostTTIScheduler.schedulePostTTIEvent(() => {
      clearTimeout(closure_1);
      closure_0();
    });
  });
};
