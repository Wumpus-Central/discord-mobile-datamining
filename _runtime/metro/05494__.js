// === Module 5494: ? ===

// Module 5494
import ErrorMessages from "ErrorMessages" /* 5496 */;
import FlashList from "FlashList" /* 5497 */;
import _mod5517 from "module_5517" /* 5517 */;
import _mod5518 from "module_5518" /* 5518 */;
import _mod5556 from "module_5556" /* 5556 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5557 */;
import _modDef5558 from "module_5558" /* 5558 */;
import _mod5559 from "module_5559" /* 5559 */;
import Cancellable from "Cancellable" /* 5560 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5561 */;
import _mod5563 from "module_5563" /* 5563 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5564 */;
import _mod5565 from "module_5565" /* 5565 */;
import _mod5566 from "module_5566" /* 5566 */;
import _modDef5567 from "module_5567" /* 5567 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5568 */;
import get_ActivityIndicator from "module_5495" /* 5495 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5556.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5558;
  exports.useBenchmark = _mod5559.useBenchmark;
  exports.BenchmarkParams = _mod5559.BenchmarkParams;
  exports.BenchmarkResult = _mod5559.BenchmarkResult;
  exports.useDataMultiplier = _mod5563.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5517.useLayoutState;
  exports.useRecyclingState = _mod5565.useRecyclingState;
  exports.useMappingHelper = _mod5566.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5567;
  exports.useFlashListContext = _mod5518.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}