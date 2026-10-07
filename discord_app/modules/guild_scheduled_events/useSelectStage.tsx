// === Module 9303: useSelectStage ===

// Module 9303 (useSelectStage)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useSelectStage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    const fn = function s() {
      return voiceChannelId.getVoiceChannelId();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5, tmp6);
  _require = stateFromStores;
  [first, asyncGeneratorStep] = noop.useState(stateFromStores);
  if (cResult[3] !== stateFromStores) {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    const items2 = [stateFromStores];
    cResult[3] = stateFromStores;
    cResult[4] = S;
    cResult[5] = items2;
    let tmp12 = items2;
  } else {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    tmp12 = cResult[5];
  }
  const effect = noop.useEffect(S, tmp12);
  if (cResult[6] !== first) {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    _require = asyncGeneratorStep(async (arg0, arg1) => {
      if (closure_1 === closure_1) {
        channel = channel.getChannel(closure_1);
        if (null != channel) {
          closure_0(first[8]).navigateToStage(channel);
          c5 = 0;
          c6 = 3;
          return { value: undefined, done: true };
        }
      }
      tmp3(closure_1);
      await closure_0(first[8]).connectOrLurkStage(closure_0, closure_1);
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
    const fn2 = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[6] = first;
    cResult[7] = fn2;
  } else {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
  }
  if (cResult[8] === tmp14) {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    return items3;
  }
  items3 = [first, tmp14];
  cResult[8] = tmp14;
  cResult[9] = first;
  cResult[10] = items3;
  const tmpResult = require("initialize");
}) : (() => {
  const items = [SelectedChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => voiceChannelId.getVoiceChannelId(), []);
  [first, asyncGeneratorStep] = noop.useState(stateFromStores);
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
        closure_0(first[8]).navigateToStage(channel);
        c5 = 0;
        c6 = 3;
        return { value: undefined, done: true };
      }
    }
    tmp3(closure_1);
    await closure_0(first[8]).connectOrLurkStage(closure_0, closure_1);
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
    noop.useCallback(function() {
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
});