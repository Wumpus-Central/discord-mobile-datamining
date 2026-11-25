// === Module 5480: ? ===

// Module 5480
import ErrorMessages from "ErrorMessages" /* 5482 */;
import FlashList from "FlashList" /* 5483 */;
import _mod5503 from "module_5503" /* 5503 */;
import _mod5504 from "module_5504" /* 5504 */;
import _mod5542 from "module_5542" /* 5542 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5543 */;
import _modDef5544 from "module_5544" /* 5544 */;
import _mod5545 from "module_5545" /* 5545 */;
import Cancellable from "Cancellable" /* 5546 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5547 */;
import _mod5549 from "module_5549" /* 5549 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5550 */;
import _mod5551 from "module_5551" /* 5551 */;
import _mod5552 from "module_5552" /* 5552 */;
import _modDef5553 from "module_5553" /* 5553 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5554 */;
import get_ActivityIndicator from "module_5481" /* 5481 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5542.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5544;
  exports.useBenchmark = _mod5545.useBenchmark;
  exports.BenchmarkParams = _mod5545.BenchmarkParams;
  exports.BenchmarkResult = _mod5545.BenchmarkResult;
  exports.useDataMultiplier = _mod5549.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5503.useLayoutState;
  exports.useRecyclingState = _mod5551.useRecyclingState;
  exports.useMappingHelper = _mod5552.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5553;
  exports.useFlashListContext = _mod5504.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}