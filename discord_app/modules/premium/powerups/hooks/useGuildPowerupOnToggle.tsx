// discord_app/modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx
import closure_2 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx");

export default function useGuildPowerupOnToggle(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  [tmp2, closure_2] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(undefined), 2);
  React = tmp3[1];
  const tmp = callback(React.useState(false), 2);
  const items = [arg0, arg1];
  return {
    isLoading: tmp2,
    error: tmp3[0],
    onToggle: React.useCallback((arg0) => {
      if (null == table) {
        return Promise.resolve();
      } else {
        const tmp5 = callback(table[2]);
        callback2(true);
        callback3(undefined);
        const tmp6 = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild;
        const tmp6Result = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild(callback, tmp.skuId);
        return arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild(callback, tmp.skuId).catch((body) => {
          body = body.body;
          let message;
          if (body != null) {
            message = body.message;
          }
          closure_3(message);
          throw body;
        }).finally(() => {
          callback(false);
        });
      }
    }, items)
  };
};