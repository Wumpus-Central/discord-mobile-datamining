// === Module 11639: useGuildPowerupOnToggle ===

// Module 11639 (useGuildPowerupOnToggle)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("guildPowerupsAckNotification").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx");

export default function useGuildPowerupOnToggle(arg0, arg1) {
  let _slicedToArray;
  let tmp2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  [tmp2, _slicedToArray] = callback(React.useState(false), 2);
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
          noop(message);
          throw body;
        }).finally(() => {
          callback(false);
        });
      }
    }, items)
  };
};