// discord_app/modules/guild_scheduled_events/useSelectStage.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useSelectStage.tsx");

export default function useSelectStage() {
  const items = [SelectedChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => voiceChannelId.getVoiceChannelId(), []);
  const tmp2 = _slicedToArray(noop.useState(stateFromStores), 2);
  first = tmp2[0];
  asyncGeneratorStep = tmp2[1];
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_2(closure_0);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  _require = asyncGeneratorStep(async (arg0, arg1) => {
    if (closure_1 === closure_1) {
      channel = channel.getChannel(closure_1);
      if (null != channel) {
        closure_0(first[6]).navigateToStage(channel);
        c5 = 0;
        c6 = 3;
        let obj1 = { value: undefined, done: true };
        return obj1;
      }
    }
    tmp3(closure_1);
    obj1 = closure_0(first[6]);
    await obj1.connectOrLurkStage(closure_0, closure_1);
    if (1 === tmp7) {
      c5 = 0;
      tmp3(null);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c5 = 0;
    }
    return value;
  });
  const items2 = [first];
  const items3 = [
    first,
    noop.useCallback(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items2),
  ];
  return items3;
}
