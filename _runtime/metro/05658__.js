// === Module 5658: ? ===

// Module 5658
import ErrorMessages from "ErrorMessages" /* 5660 */;
import FlashList from "FlashList" /* 5661 */;
import _mod5681 from "module_5681" /* 5681 */;
import _mod5682 from "module_5682" /* 5682 */;
import _mod5720 from "module_5720" /* 5720 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5721 */;
import _modDef5722 from "module_5722" /* 5722 */;
import _mod5723 from "module_5723" /* 5723 */;
import Cancellable from "Cancellable" /* 5724 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5725 */;
import _mod5727 from "module_5727" /* 5727 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5728 */;
import _mod5729 from "module_5729" /* 5729 */;
import _mod5730 from "module_5730" /* 5730 */;
import _modDef5731 from "module_5731" /* 5731 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5732 */;
import get_ActivityIndicator from "module_5659" /* 5659 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5720.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5722;
  exports.useBenchmark = _mod5723.useBenchmark;
  exports.BenchmarkParams = _mod5723.BenchmarkParams;
  exports.BenchmarkResult = _mod5723.BenchmarkResult;
  exports.useDataMultiplier = _mod5727.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5681.useLayoutState;
  exports.useRecyclingState = _mod5729.useRecyclingState;
  exports.useMappingHelper = _mod5730.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5731;
  exports.useFlashListContext = _mod5682.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}