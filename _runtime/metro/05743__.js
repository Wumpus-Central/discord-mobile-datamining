// === Module 5743: ? ===

// Module 5743
import ErrorMessages from "ErrorMessages" /* 5745 */;
import FlashList from "FlashList" /* 5746 */;
import _mod5766 from "module_5766" /* 5766 */;
import _mod5767 from "module_5767" /* 5767 */;
import _mod5805 from "module_5805" /* 5805 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5806 */;
import _modDef5807 from "module_5807" /* 5807 */;
import _mod5808 from "module_5808" /* 5808 */;
import Cancellable from "Cancellable" /* 5809 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5810 */;
import _mod5812 from "module_5812" /* 5812 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5813 */;
import _mod5814 from "module_5814" /* 5814 */;
import _mod5815 from "module_5815" /* 5815 */;
import _modDef5816 from "module_5816" /* 5816 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5817 */;
import get_ActivityIndicator from "module_5744" /* 5744 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5805.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5807;
  exports.useBenchmark = _mod5808.useBenchmark;
  exports.BenchmarkParams = _mod5808.BenchmarkParams;
  exports.BenchmarkResult = _mod5808.BenchmarkResult;
  exports.useDataMultiplier = _mod5812.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5766.useLayoutState;
  exports.useRecyclingState = _mod5814.useRecyclingState;
  exports.useMappingHelper = _mod5815.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5816;
  exports.useFlashListContext = _mod5767.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}