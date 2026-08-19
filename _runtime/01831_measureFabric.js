// === Module 1831: measureFabric ===

// Module 1831 (measureFabric)
import addLogBoxLog from "addLogBoxLog" /* 1658 */;
import isJest from "isJest" /* 1657 */;

function measureFabric(arg0) {
  if (globalThis._WORKLET) {
    const tmp3 = arg0();
    if (-1 === tmp3) {
      const logger4 = addLogBoxLog.logger;
      const _HermesInternal = HermesInternal;
      logger4.warn("The view with tag " + tmp3 + " is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");
      return null;
    } else {
      let _measureFabricResult = global._measureFabric(tmp3);
      if (null === _measureFabricResult) {
        const logger3 = addLogBoxLog.logger;
        logger3.warn("The view has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");
        _measureFabricResult = null;
      } else if (-1234567 === _measureFabricResult.x) {
        const logger2 = addLogBoxLog.logger;
        logger2.warn("The view returned an invalid measurement response. Please make sure the view is currently rendered.");
        _measureFabricResult = null;
      } else {
        const _isNaN = isNaN;
        if (isNaN(_measureFabricResult.x)) {
          const logger = addLogBoxLog.logger;
          logger.warn("The view gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.");
          _measureFabricResult = null;
        }
      }
      return _measureFabricResult;
    }
  } else {
    return null;
  }
}
let obj = { logger: addLogBoxLog.logger };
measureFabric.__closure = obj;
measureFabric.__workletHash = 11588690892656;
measureFabric.__initData = { code: "function measureFabric_Pnpm_measureTs1(animatedRef){const{logger}=this.__closure;if(!_WORKLET){return null;}const viewTag=animatedRef();if(viewTag===-1){logger.warn(\"The view with tag \"+viewTag+\" is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).\");return null;}const measured=global._measureFabric(viewTag);if(measured===null){logger.warn(\"The view has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).\");return null;}else if(measured.x===-1234567){logger.warn(\"The view returned an invalid measurement response. Please make sure the view is currently rendered.\");return null;}else if(isNaN(measured.x)){logger.warn(\"The view gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.\");return null;}else{return measured;}}" };
function measurePaper(arg0) {
  if (globalThis._WORKLET) {
    const tmp3 = arg0();
    if (-1 === tmp3) {
      const logger4 = addLogBoxLog.logger;
      const _HermesInternal4 = HermesInternal;
      logger4.warn("The view with tag " + tmp3 + " is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");
      return null;
    } else {
      let _measurePaperResult = global._measurePaper(tmp3);
      if (null === _measurePaperResult) {
        const logger3 = addLogBoxLog.logger;
        const _HermesInternal3 = HermesInternal;
        logger3.warn("The view with tag " + tmp3 + " has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");
        _measurePaperResult = null;
      } else if (-1234567 === _measurePaperResult.x) {
        const logger2 = addLogBoxLog.logger;
        const _HermesInternal2 = HermesInternal;
        logger2.warn("The view with tag " + tmp3 + " returned an invalid measurement response. Please make sure the view is currently rendered.");
        _measurePaperResult = null;
      } else {
        const _isNaN = isNaN;
        if (isNaN(_measurePaperResult.x)) {
          const logger = addLogBoxLog.logger;
          const _HermesInternal = HermesInternal;
          logger.warn("The view with tag " + tmp3 + " gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.");
          _measurePaperResult = null;
        }
      }
      return _measurePaperResult;
    }
  } else {
    return null;
  }
}
obj = { logger: addLogBoxLog.logger };
measurePaper.__closure = obj;
measurePaper.__workletHash = 12497864483036;
measurePaper.__initData = { code: "function measurePaper_Pnpm_measureTs2(animatedRef){const{logger}=this.__closure;if(!_WORKLET){return null;}const viewTag=animatedRef();if(viewTag===-1){logger.warn(\"The view with tag \"+viewTag+\" is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).\");return null;}const measured=global._measurePaper(viewTag);if(measured===null){logger.warn(\"The view with tag \"+viewTag+\" has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).\");return null;}else if(measured.x===-1234567){logger.warn(\"The view with tag \"+viewTag+\" returned an invalid measurement response. Please make sure the view is currently rendered.\");return null;}else if(isNaN(measured.x)){logger.warn(\"The view with tag \"+viewTag+\" gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.\");return null;}else{return measured;}}" };
isJest = isJest.shouldBeUseWeb();
if (isJest) {
  if (isJest.isJest()) {
    function measureJest() {
      const logger = addLogBoxLog.logger;
      logger.warn("measure() cannot be used with Jest.");
      return null;
    }
  } else {
    const _module2 = isJest;
    measureJest = _module2.isChromeDebugger() ? (function measureChromeDebugger() {
      const logger = addLogBoxLog.logger;
      logger.warn("measure() cannot be used with Chrome Debugger.");
      return null;
    }) : (function measureDefault() {
      const logger = addLogBoxLog.logger;
      logger.warn("measure() is not supported on this configuration.");
      return null;
    });
  }
} else {
  if (isJest.isFabric()) {
    measurePaper = measureFabric;
  }
  exports.measure = measurePaper;
}