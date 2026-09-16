// === Module 6960: ? ===

// Module 6960
import ErrorMessages from "ErrorMessages" /* 6962 */;
import FlashList from "FlashList" /* 6963 */;
import _mod6983 from "module_6983" /* 6983 */;
import _mod6984 from "module_6984" /* 6984 */;
import _mod7022 from "module_7022" /* 7022 */;
import RenderTargetOptions from "RenderTargetOptions" /* 7023 */;
import _modDef7024 from "module_7024" /* 7024 */;
import _mod7025 from "module_7025" /* 7025 */;
import Cancellable from "Cancellable" /* 7026 */;
import JSFPSMonitor from "JSFPSMonitor" /* 7027 */;
import _mod7029 from "module_7029" /* 7029 */;
import runScrollBenchmark from "runScrollBenchmark" /* 7030 */;
import _mod7031 from "module_7031" /* 7031 */;
import _mod7032 from "module_7032" /* 7032 */;
import _modDef7033 from "module_7033" /* 7033 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 7034 */;
import get_ActivityIndicator from "module_6961" /* 6961 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7022.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7024;
  exports.useBenchmark = _mod7025.useBenchmark;
  exports.BenchmarkParams = _mod7025.BenchmarkParams;
  exports.BenchmarkResult = _mod7025.BenchmarkResult;
  exports.useDataMultiplier = _mod7029.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6983.useLayoutState;
  exports.useRecyclingState = _mod7031.useRecyclingState;
  exports.useMappingHelper = _mod7032.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7033;
  exports.useFlashListContext = _mod6984.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}