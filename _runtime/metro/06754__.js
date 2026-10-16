// === Module 6754: ? ===

// Module 6754
import ErrorMessages from "ErrorMessages" /* 6756 */;
import FlashList from "FlashList" /* 6757 */;
import _mod6777 from "module_6777" /* 6777 */;
import _mod6778 from "module_6778" /* 6778 */;
import _mod6816 from "module_6816" /* 6816 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6817 */;
import _modDef6818 from "module_6818" /* 6818 */;
import _mod6819 from "module_6819" /* 6819 */;
import Cancellable from "Cancellable" /* 6820 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6821 */;
import _mod6823 from "module_6823" /* 6823 */;
import runScrollBenchmark from "runScrollBenchmark" /* 6824 */;
import _mod6825 from "module_6825" /* 6825 */;
import _mod6826 from "module_6826" /* 6826 */;
import _modDef6827 from "module_6827" /* 6827 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6828 */;
import get_ActivityIndicator from "module_6755" /* 6755 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6816.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6818;
  exports.useBenchmark = _mod6819.useBenchmark;
  exports.BenchmarkParams = _mod6819.BenchmarkParams;
  exports.BenchmarkResult = _mod6819.BenchmarkResult;
  exports.useDataMultiplier = _mod6823.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6777.useLayoutState;
  exports.useRecyclingState = _mod6825.useRecyclingState;
  exports.useMappingHelper = _mod6826.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6827;
  exports.useFlashListContext = _mod6778.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}