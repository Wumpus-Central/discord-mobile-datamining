// === Module 5381: ? ===

// Module 5381
import ErrorMessages from "ErrorMessages" /* 5383 */;
import FlashList from "FlashList" /* 5384 */;
import _mod5404 from "module_5404" /* 5404 */;
import _mod5405 from "module_5405" /* 5405 */;
import _mod5443 from "module_5443" /* 5443 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5444 */;
import _modDef5445 from "module_5445" /* 5445 */;
import _mod5446 from "module_5446" /* 5446 */;
import Cancellable from "Cancellable" /* 5447 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5448 */;
import _mod5450 from "module_5450" /* 5450 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5451 */;
import _mod5452 from "module_5452" /* 5452 */;
import _mod5453 from "module_5453" /* 5453 */;
import _modDef5454 from "module_5454" /* 5454 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5455 */;
import get_ActivityIndicator from "module_5382" /* 5382 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5443.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5445;
  exports.useBenchmark = _mod5446.useBenchmark;
  exports.BenchmarkParams = _mod5446.BenchmarkParams;
  exports.BenchmarkResult = _mod5446.BenchmarkResult;
  exports.useDataMultiplier = _mod5450.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5404.useLayoutState;
  exports.useRecyclingState = _mod5452.useRecyclingState;
  exports.useMappingHelper = _mod5453.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5454;
  exports.useFlashListContext = _mod5405.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}