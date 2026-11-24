// === Module 5385: ? ===

// Module 5385
import ErrorMessages from "ErrorMessages" /* 5387 */;
import FlashList from "FlashList" /* 5388 */;
import _mod5408 from "module_5408" /* 5408 */;
import _mod5409 from "module_5409" /* 5409 */;
import _mod5447 from "module_5447" /* 5447 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5448 */;
import _modDef5449 from "module_5449" /* 5449 */;
import _mod5450 from "module_5450" /* 5450 */;
import Cancellable from "Cancellable" /* 5451 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5452 */;
import _mod5454 from "module_5454" /* 5454 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5455 */;
import _mod5456 from "module_5456" /* 5456 */;
import _mod5457 from "module_5457" /* 5457 */;
import _modDef5458 from "module_5458" /* 5458 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5459 */;
import get_ActivityIndicator from "module_5386" /* 5386 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5447.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5449;
  exports.useBenchmark = _mod5450.useBenchmark;
  exports.BenchmarkParams = _mod5450.BenchmarkParams;
  exports.BenchmarkResult = _mod5450.BenchmarkResult;
  exports.useDataMultiplier = _mod5454.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5408.useLayoutState;
  exports.useRecyclingState = _mod5456.useRecyclingState;
  exports.useMappingHelper = _mod5457.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5458;
  exports.useFlashListContext = _mod5409.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}