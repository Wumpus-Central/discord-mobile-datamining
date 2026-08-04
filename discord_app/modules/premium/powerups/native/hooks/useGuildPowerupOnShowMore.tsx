// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx");

export default function useGuildPowerupOnShowMore(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useCallback(() => {
    if (null != table) {
      const obj = { guildId: null, powerup: null };
      obj[0] = callback;
      obj[1] = tmp;
      callback(table[1])(obj);
    }
  }, items);
};