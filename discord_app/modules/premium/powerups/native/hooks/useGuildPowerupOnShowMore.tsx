// === Module 12367: useGuildPowerupOnShowMore ===

// Module 12367 (useGuildPowerupOnShowMore)
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx");

export default function useGuildPowerupOnShowMore(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
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