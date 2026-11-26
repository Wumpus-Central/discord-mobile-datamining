// === Module 5511: ? ===

// Module 5511
import ErrorMessages from "ErrorMessages" /* 5513 */;
import FlashList from "FlashList" /* 5514 */;
import _mod5534 from "module_5534" /* 5534 */;
import _mod5535 from "module_5535" /* 5535 */;
import _mod5573 from "module_5573" /* 5573 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5574 */;
import _modDef5575 from "module_5575" /* 5575 */;
import _mod5576 from "module_5576" /* 5576 */;
import Cancellable from "Cancellable" /* 5577 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5578 */;
import _mod5580 from "module_5580" /* 5580 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5581 */;
import _mod5582 from "module_5582" /* 5582 */;
import _mod5583 from "module_5583" /* 5583 */;
import _modDef5584 from "module_5584" /* 5584 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5585 */;
import get_ActivityIndicator from "module_5512" /* 5512 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5573.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5575;
  exports.useBenchmark = _mod5576.useBenchmark;
  exports.BenchmarkParams = _mod5576.BenchmarkParams;
  exports.BenchmarkResult = _mod5576.BenchmarkResult;
  exports.useDataMultiplier = _mod5580.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5534.useLayoutState;
  exports.useRecyclingState = _mod5582.useRecyclingState;
  exports.useMappingHelper = _mod5583.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5584;
  exports.useFlashListContext = _mod5535.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}