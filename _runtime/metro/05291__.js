// === Module 5291: ? ===

// Module 5291
import ErrorMessages from "ErrorMessages" /* 5293 */;
import FlashList from "FlashList" /* 5294 */;
import _mod5314 from "module_5314" /* 5314 */;
import _mod5315 from "module_5315" /* 5315 */;
import _mod5353 from "module_5353" /* 5353 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5354 */;
import _modDef5355 from "module_5355" /* 5355 */;
import _mod5356 from "module_5356" /* 5356 */;
import Cancellable from "Cancellable" /* 5357 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5358 */;
import _mod5360 from "module_5360" /* 5360 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5361 */;
import _mod5362 from "module_5362" /* 5362 */;
import _mod5363 from "module_5363" /* 5363 */;
import _modDef5364 from "module_5364" /* 5364 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5365 */;
import get_ActivityIndicator from "module_5292" /* 5292 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5353.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5355;
  exports.useBenchmark = _mod5356.useBenchmark;
  exports.BenchmarkParams = _mod5356.BenchmarkParams;
  exports.BenchmarkResult = _mod5356.BenchmarkResult;
  exports.useDataMultiplier = _mod5360.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5314.useLayoutState;
  exports.useRecyclingState = _mod5362.useRecyclingState;
  exports.useMappingHelper = _mod5363.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5364;
  exports.useFlashListContext = _mod5315.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}