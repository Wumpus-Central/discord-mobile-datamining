// === Module 5500: ? ===

// Module 5500
import ErrorMessages from "ErrorMessages" /* 5502 */;
import FlashList from "FlashList" /* 5503 */;
import _mod5523 from "module_5523" /* 5523 */;
import _mod5524 from "module_5524" /* 5524 */;
import _mod5562 from "module_5562" /* 5562 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5563 */;
import _modDef5564 from "module_5564" /* 5564 */;
import _mod5565 from "module_5565" /* 5565 */;
import Cancellable from "Cancellable" /* 5566 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5567 */;
import _mod5569 from "module_5569" /* 5569 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5570 */;
import _mod5571 from "module_5571" /* 5571 */;
import _mod5572 from "module_5572" /* 5572 */;
import _modDef5573 from "module_5573" /* 5573 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5574 */;
import get_ActivityIndicator from "module_5501" /* 5501 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5562.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5564;
  exports.useBenchmark = _mod5565.useBenchmark;
  exports.BenchmarkParams = _mod5565.BenchmarkParams;
  exports.BenchmarkResult = _mod5565.BenchmarkResult;
  exports.useDataMultiplier = _mod5569.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5523.useLayoutState;
  exports.useRecyclingState = _mod5571.useRecyclingState;
  exports.useMappingHelper = _mod5572.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5573;
  exports.useFlashListContext = _mod5524.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}