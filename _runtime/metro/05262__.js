// === Module 5262: ? ===

// Module 5262
import ErrorMessages from "ErrorMessages" /* 5264 */;
import FlashList from "FlashList" /* 5265 */;
import _mod5285 from "module_5285" /* 5285 */;
import _mod5286 from "module_5286" /* 5286 */;
import _mod5324 from "module_5324" /* 5324 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5325 */;
import _modDef5326 from "module_5326" /* 5326 */;
import _mod5327 from "module_5327" /* 5327 */;
import Cancellable from "Cancellable" /* 5328 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5329 */;
import _mod5331 from "module_5331" /* 5331 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5332 */;
import _mod5333 from "module_5333" /* 5333 */;
import _mod5334 from "module_5334" /* 5334 */;
import _modDef5335 from "module_5335" /* 5335 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5336 */;
import get_ActivityIndicator from "module_5263" /* 5263 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5324.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5326;
  exports.useBenchmark = _mod5327.useBenchmark;
  exports.BenchmarkParams = _mod5327.BenchmarkParams;
  exports.BenchmarkResult = _mod5327.BenchmarkResult;
  exports.useDataMultiplier = _mod5331.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5285.useLayoutState;
  exports.useRecyclingState = _mod5333.useRecyclingState;
  exports.useMappingHelper = _mod5334.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5335;
  exports.useFlashListContext = _mod5286.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}