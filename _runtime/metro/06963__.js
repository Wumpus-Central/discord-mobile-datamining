// === Module 6963: ? ===

// Module 6963
import ErrorMessages from "ErrorMessages" /* 6965 */;
import FlashList from "FlashList" /* 6966 */;
import _mod6986 from "module_6986" /* 6986 */;
import _mod6987 from "module_6987" /* 6987 */;
import _mod7025 from "module_7025" /* 7025 */;
import RenderTargetOptions from "RenderTargetOptions" /* 7026 */;
import _modDef7027 from "module_7027" /* 7027 */;
import _mod7028 from "module_7028" /* 7028 */;
import Cancellable from "Cancellable" /* 7029 */;
import JSFPSMonitor from "JSFPSMonitor" /* 7030 */;
import _mod7032 from "module_7032" /* 7032 */;
import runScrollBenchmark from "runScrollBenchmark" /* 7033 */;
import _mod7034 from "module_7034" /* 7034 */;
import _mod7035 from "module_7035" /* 7035 */;
import _modDef7036 from "module_7036" /* 7036 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 7037 */;
import get_ActivityIndicator from "module_6964" /* 6964 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7025.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7027;
  exports.useBenchmark = _mod7028.useBenchmark;
  exports.BenchmarkParams = _mod7028.BenchmarkParams;
  exports.BenchmarkResult = _mod7028.BenchmarkResult;
  exports.useDataMultiplier = _mod7032.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6986.useLayoutState;
  exports.useRecyclingState = _mod7034.useRecyclingState;
  exports.useMappingHelper = _mod7035.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7036;
  exports.useFlashListContext = _mod6987.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}