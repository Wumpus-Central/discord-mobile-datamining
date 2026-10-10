// discord_app/modules/parent_tools/hooks/useTimeValue.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useTimeValue.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useTimeValue(initial) {
      const cResult = c.c(3);
      initial = initial.initial;
      const defaultValue = initial.defaultValue;
      if (cResult[0] === defaultValue) {
        if (cResult[1] === initial) {
          let tmp2 = cResult[2];
        }
        return noop.useState(tmp2);
      }
      const fn = function s() {
        if (null != initial) {
          const time = { hours: null, minutes: null };
          ({ hours: obj.hours, minutes: obj.minutes } = initial);
          let tmp2 = time;
        } else {
          tmp2 = defaultValue;
        }
        return tmp2;
      };
      cResult[0] = defaultValue;
      cResult[1] = initial;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : function useTimeValue(arg0) {
      ({ initial: require, defaultValue: dependencyMap } = arg0);
      return noop.useState(() => {
        if (null != require) {
          const time = { hours: null, minutes: null };
          ({ hours: obj.hours, minutes: obj.minutes } = require);
          let tmp2 = time;
        } else {
          tmp2 = dependencyMap;
        }
        return tmp2;
      });
    };
export const timeToMinutes = fn(12566).timeToMinutes;
