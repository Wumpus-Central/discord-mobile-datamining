// discord_app/modules/frames/timing/frameLaunchSteps.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import FramesStore from "../FramesStore.tsx";

const require = globalThis.__r;

const require = fn;
const makeFrameId = fn(6906).makeFrameId;
let obj = {};
obj[fn(7649).EmbeddedAppCSPSource.SKIPPED] = fn(7654).StepStatus.SKIPPED;
obj[fn(7649).EmbeddedAppCSPSource.CACHED] = fn(7654).StepStatus.CACHED;
obj[fn(7649).EmbeddedAppCSPSource.IN_FLIGHT] = fn(7654).StepStatus.IN_FLIGHT;
obj[fn(7649).EmbeddedAppCSPSource.FETCHED] = fn(7654).StepStatus.OK;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/timing/frameLaunchSteps.tsx");

export function loadLaunchCSP(span, arg1) {
  _require = asyncGeneratorStep(async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp5;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: tmp2(7649)(closure_0), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_129_1 = value;
          closure_129_0.setStatus(closure_2_7[closure_129_1]);
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp16) {
        c4 = tmp;
        throw tmp16;
      }
    }
  });
  return span.span(require("FrameLaunchTimingTypes").LaunchStep.CSP, function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
}
export function prefetchFrameLaunch(CONJURE_PREVIEW_PREFETCH, applicationId, conjurePreviewSurface) {
  _require = applicationId;
  closure_1 = conjurePreviewSurface;
  const tmp = makeFrameId(applicationId, conjurePreviewSurface);
  if (null != FramesStore.getFrame(tmp)) {
    let NOOP_FRAME_LAUNCH_TIMING = require("noopFrameLaunchTiming").NOOP_FRAME_LAUNCH_TIMING;
    let tmp11 = _require;
    let tmp13 = _require;
  } else {
    obj = require("FrameLaunchTimingManager");
    tmp11 = _require;
    tmp13 = _require;
    NOOP_FRAME_LAUNCH_TIMING = obj.startLaunchTiming(
      CONJURE_PREVIEW_PREFETCH,
      tmp,
      applicationId,
      conjurePreviewSurface,
    );
  }
  asyncGeneratorStep(async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp5;
            closure_129_0 = closure_0;
            const tmp21 = tmp2(6908)(tmp2);
            c3 = 1;
            c4 = 1;
            const obj4 = { value: closure_0(7657).prefetchProxyTicket(closure_0, tmp21, tmp2.type), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (value.alreadyPrefetched) {
            closure_129_0.setStatus(closure_0(7654).StepStatus.PREFETCHED);
          }
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp12) {
        c4 = tmp;
        throw tmp12;
      }
    }
  });
  closure_129_0 = applicationId;
  asyncGeneratorStep(async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp5;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: tmp2(7649)(closure_0), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_129_1 = value;
          closure_129_0.setStatus(closure_2_7[closure_129_1]);
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp16) {
        c4 = tmp;
        throw tmp16;
      }
    }
  });
  const spanResult = NOOP_FRAME_LAUNCH_TIMING.span(tmp13(7654).LaunchStep.PROXY_TICKET, function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
  _require = asyncGeneratorStep(async (arg0) => {
    const status = arg0;
    c2 = 0;
    c1 = 0;
    return (async (arg0) => {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              if (hydrated.isHydrated(status)) {
                status.setStatus(status(7654).StepStatus.CACHED);
              }
              const useApplication = status(6940).useApplication;
              items = [status];
              c2 = 1;
              c1 = 1;
              const obj4 = { value: useApplication.fetchMany(items), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp10) {
          c1 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  items = [
    spanResult,
    NOOP_FRAME_LAUNCH_TIMING.span(tmp11(7654).LaunchStep.CSP, function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }),
    NOOP_FRAME_LAUNCH_TIMING.span(tmp13(7654).LaunchStep.APPLICATION, function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }),
  ];
  Promise.allSettled(items);
  const spanResult1 = NOOP_FRAME_LAUNCH_TIMING.span(tmp11(7654).LaunchStep.CSP, function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
}
