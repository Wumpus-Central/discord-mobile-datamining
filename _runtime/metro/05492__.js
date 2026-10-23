// === Module 5492: ? ===

// Module 5492
import ErrorMessages from "ErrorMessages" /* 5494 */;
import FlashList from "FlashList" /* 5495 */;
import _mod5515 from "module_5515" /* 5515 */;
import _mod5516 from "module_5516" /* 5516 */;
import _mod5554 from "module_5554" /* 5554 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5555 */;
import _modDef5556 from "module_5556" /* 5556 */;
import _mod5557 from "module_5557" /* 5557 */;
import Cancellable from "Cancellable" /* 5558 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5559 */;
import _mod5561 from "module_5561" /* 5561 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5562 */;
import _mod5563 from "module_5563" /* 5563 */;
import _mod5564 from "module_5564" /* 5564 */;
import _modDef5565 from "module_5565" /* 5565 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5566 */;
import get_ActivityIndicator from "module_5493" /* 5493 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5554.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5556;
  exports.useBenchmark = _mod5557.useBenchmark;
  exports.BenchmarkParams = _mod5557.BenchmarkParams;
  exports.BenchmarkResult = _mod5557.BenchmarkResult;
  exports.useDataMultiplier = _mod5561.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5515.useLayoutState;
  exports.useRecyclingState = _mod5563.useRecyclingState;
  exports.useMappingHelper = _mod5564.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5565;
  exports.useFlashListContext = _mod5516.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}