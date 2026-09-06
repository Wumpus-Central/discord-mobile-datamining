// discord_app/modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx
import GuildPowerupsActionCreators from "../GuildPowerupsActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx");

export default function useGuildPowerupOnToggle(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  [tmp2, _slicedToArray] = _slicedToArray(noop.useState(false), 2);
  const tmp3 = _slicedToArray(noop.useState(undefined), 2);
  noop = tmp3[1];
  const obj = { isLoading: tmp2, error: tmp3[0], onToggle: null };
  const items = [arg0, arg1];
  obj.onToggle = noop.useCallback((arg0) => {
    if (null == closure_1) {
      return Promise.resolve();
    } else {
      const tmp5 = GuildPowerupsActionCreators;
      _slicedToArray(true);
      closure_3(undefined);
      const tmp6 = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild;
      const tmp6Result = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild(closure_0, tmp.skuId);
      return arg0
        ? tmp5.enablePowerupForGuild
        : tmp5
            .disablePowerupForGuild(closure_0, tmp.skuId)
            .catch((error) => {
              const body = error.body;
              let message;
              if (body != null) {
                message = body.message;
              }
              closure_1_3(message);
              throw error;
            })
            .finally(() => {
              closure_1_2(false);
            });
    }
  }, items);
  return obj;
}
