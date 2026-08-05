// discord_app/modules/guild_scheduled_events/useSelectStage.tsx
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/guild_scheduled_events/useSelectStage.tsx");

export default function useSelectStage() {
  const items = [handleConnectionOpen];
  const stateFromStores = _require(first[5]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId(), []);
  _require = stateFromStores;
  const tmp2 = callback2(React.useState(stateFromStores), 2);
  first = tmp2[0];
  const callback = tmp2[1];
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_0);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  _require = undefined;
  _require = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c6 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      let initialize = tmp3;
      let c5 = 1;
      if (closure_1 === closure_1) {
        const channel = outer2_5.getChannel(tmp31);
        if (null != channel) {
          callback(first[6]).navigateToStage(channel);
          c5 = 0;
          let c6 = 3;
          let obj1 = { value: null, done: true };
          obj1[0] = undefined;
          return obj1;
        }
      }
      outer1_2(closure_1);
      obj1 = callback(first[6]);
      yield obj1.connectOrLurkStage(callback, closure_1);
      if (1 === tmp7) {
        c5 = 0;
        outer1_2(null);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c5 = 0;
      }
      c5 = 0;
      return arg1;
    })();
  });
  const items2 = [first];
  const items3 = [
    first,
    React.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items2)
  ];
  return items3;
};