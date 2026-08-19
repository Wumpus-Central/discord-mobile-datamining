// discord_app/modules/guild_scheduled_events/useSelectStage.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/useSelectStage.tsx");

export default function useSelectStage() {
  const items = [closure_6];
  const stateFromStores = _require(first[5]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId(), []);
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
  _require = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      closure_2 = tmp3;
      c5 = 1;
      if (closure_1 === closure_1) {
        const channel = closure_2_5.getChannel(closure_1);
        if (null != channel) {
          callback(first[6]).navigateToStage(channel);
          c5 = 0;
          c6 = 3;
          obj1 = { value: null, done: true };
          obj1[0] = undefined;
          return obj1;
        }
      }
      closure_1_2(closure_1);
      obj1 = callback(first[6]);
      yield obj1.connectOrLurkStage(callback, closure_1);
      if (1 === tmp7) {
        c5 = 0;
        closure_1_2(null);
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