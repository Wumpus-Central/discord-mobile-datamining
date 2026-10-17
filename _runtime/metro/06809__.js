// === Module 6809: ? ===

// Module 6809
import ErrorMessages from "ErrorMessages" /* 6811 */;
import FlashList from "FlashList" /* 6812 */;
import _mod6832 from "module_6832" /* 6832 */;
import _mod6833 from "module_6833" /* 6833 */;
import _mod6871 from "module_6871" /* 6871 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6872 */;
import _modDef6873 from "module_6873" /* 6873 */;
import _mod6874 from "module_6874" /* 6874 */;
import Cancellable from "Cancellable" /* 6875 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6876 */;
import _mod6878 from "module_6878" /* 6878 */;
import runScrollBenchmark from "runScrollBenchmark" /* 6879 */;
import _mod6880 from "module_6880" /* 6880 */;
import _mod6881 from "module_6881" /* 6881 */;
import _modDef6882 from "module_6882" /* 6882 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6883 */;
import get_ActivityIndicator from "module_6810" /* 6810 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6871.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6873;
  exports.useBenchmark = _mod6874.useBenchmark;
  exports.BenchmarkParams = _mod6874.BenchmarkParams;
  exports.BenchmarkResult = _mod6874.BenchmarkResult;
  exports.useDataMultiplier = _mod6878.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6832.useLayoutState;
  exports.useRecyclingState = _mod6880.useRecyclingState;
  exports.useMappingHelper = _mod6881.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6882;
  exports.useFlashListContext = _mod6833.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}