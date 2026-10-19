// === Module 5455: ? ===

// Module 5455
import ErrorMessages from "ErrorMessages" /* 5457 */;
import FlashList from "FlashList" /* 5458 */;
import _mod5478 from "module_5478" /* 5478 */;
import _mod5479 from "module_5479" /* 5479 */;
import _mod5517 from "module_5517" /* 5517 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5518 */;
import _modDef5519 from "module_5519" /* 5519 */;
import _mod5520 from "module_5520" /* 5520 */;
import Cancellable from "Cancellable" /* 5521 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5522 */;
import _mod5524 from "module_5524" /* 5524 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5525 */;
import _mod5526 from "module_5526" /* 5526 */;
import _mod5527 from "module_5527" /* 5527 */;
import _modDef5528 from "module_5528" /* 5528 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5529 */;
import get_ActivityIndicator from "module_5456" /* 5456 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5517.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5519;
  exports.useBenchmark = _mod5520.useBenchmark;
  exports.BenchmarkParams = _mod5520.BenchmarkParams;
  exports.BenchmarkResult = _mod5520.BenchmarkResult;
  exports.useDataMultiplier = _mod5524.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5478.useLayoutState;
  exports.useRecyclingState = _mod5526.useRecyclingState;
  exports.useMappingHelper = _mod5527.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5528;
  exports.useFlashListContext = _mod5479.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}