// === Module 5495: ? ===

// Module 5495
import ErrorMessages from "ErrorMessages" /* 5497 */;
import FlashList from "FlashList" /* 5498 */;
import _mod5518 from "module_5518" /* 5518 */;
import _mod5519 from "module_5519" /* 5519 */;
import _mod5557 from "module_5557" /* 5557 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5558 */;
import _modDef5559 from "module_5559" /* 5559 */;
import _mod5560 from "module_5560" /* 5560 */;
import Cancellable from "Cancellable" /* 5561 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5562 */;
import _mod5564 from "module_5564" /* 5564 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5565 */;
import _mod5566 from "module_5566" /* 5566 */;
import _mod5567 from "module_5567" /* 5567 */;
import _modDef5568 from "module_5568" /* 5568 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5569 */;
import get_ActivityIndicator from "module_5496" /* 5496 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5557.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5559;
  exports.useBenchmark = _mod5560.useBenchmark;
  exports.BenchmarkParams = _mod5560.BenchmarkParams;
  exports.BenchmarkResult = _mod5560.BenchmarkResult;
  exports.useDataMultiplier = _mod5564.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5518.useLayoutState;
  exports.useRecyclingState = _mod5566.useRecyclingState;
  exports.useMappingHelper = _mod5567.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5568;
  exports.useFlashListContext = _mod5519.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}