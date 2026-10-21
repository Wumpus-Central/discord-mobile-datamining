// === Module 5476: ? ===

// Module 5476
import ErrorMessages from "ErrorMessages" /* 5478 */;
import FlashList from "FlashList" /* 5479 */;
import _mod5499 from "module_5499" /* 5499 */;
import _mod5500 from "module_5500" /* 5500 */;
import _mod5538 from "module_5538" /* 5538 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5539 */;
import _modDef5540 from "module_5540" /* 5540 */;
import _mod5541 from "module_5541" /* 5541 */;
import Cancellable from "Cancellable" /* 5542 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5543 */;
import _mod5545 from "module_5545" /* 5545 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5546 */;
import _mod5547 from "module_5547" /* 5547 */;
import _mod5548 from "module_5548" /* 5548 */;
import _modDef5549 from "module_5549" /* 5549 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5550 */;
import get_ActivityIndicator from "module_5477" /* 5477 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5538.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5540;
  exports.useBenchmark = _mod5541.useBenchmark;
  exports.BenchmarkParams = _mod5541.BenchmarkParams;
  exports.BenchmarkResult = _mod5541.BenchmarkResult;
  exports.useDataMultiplier = _mod5545.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5499.useLayoutState;
  exports.useRecyclingState = _mod5547.useRecyclingState;
  exports.useMappingHelper = _mod5548.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5549;
  exports.useFlashListContext = _mod5500.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}