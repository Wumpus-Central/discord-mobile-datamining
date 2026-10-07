// === Module 6344: ? ===

// Module 6344
import ErrorMessages from "ErrorMessages" /* 6346 */;
import FlashList from "FlashList" /* 6347 */;
import _mod6367 from "module_6367" /* 6367 */;
import _mod6368 from "module_6368" /* 6368 */;
import _mod6406 from "module_6406" /* 6406 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6407 */;
import _modDef6408 from "module_6408" /* 6408 */;
import _mod6409 from "module_6409" /* 6409 */;
import Cancellable from "Cancellable" /* 6410 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6411 */;
import _mod6413 from "module_6413" /* 6413 */;
import runScrollBenchmark from "runScrollBenchmark" /* 6414 */;
import _mod6415 from "module_6415" /* 6415 */;
import _mod6416 from "module_6416" /* 6416 */;
import _modDef6417 from "module_6417" /* 6417 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6418 */;
import get_ActivityIndicator from "module_6345" /* 6345 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6406.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6408;
  exports.useBenchmark = _mod6409.useBenchmark;
  exports.BenchmarkParams = _mod6409.BenchmarkParams;
  exports.BenchmarkResult = _mod6409.BenchmarkResult;
  exports.useDataMultiplier = _mod6413.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6367.useLayoutState;
  exports.useRecyclingState = _mod6415.useRecyclingState;
  exports.useMappingHelper = _mod6416.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6417;
  exports.useFlashListContext = _mod6368.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}