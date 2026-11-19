// === Module 5260: ? ===

// Module 5260
import ErrorMessages from "ErrorMessages" /* 5262 */;
import FlashList from "FlashList" /* 5263 */;
import _mod5283 from "module_5283" /* 5283 */;
import _mod5284 from "module_5284" /* 5284 */;
import _mod5322 from "module_5322" /* 5322 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5323 */;
import _modDef5324 from "module_5324" /* 5324 */;
import _mod5325 from "module_5325" /* 5325 */;
import Cancellable from "Cancellable" /* 5326 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5327 */;
import _mod5329 from "module_5329" /* 5329 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5330 */;
import _mod5331 from "module_5331" /* 5331 */;
import _mod5332 from "module_5332" /* 5332 */;
import _modDef5333 from "module_5333" /* 5333 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5334 */;
import get_ActivityIndicator from "module_5261" /* 5261 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5322.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5324;
  exports.useBenchmark = _mod5325.useBenchmark;
  exports.BenchmarkParams = _mod5325.BenchmarkParams;
  exports.BenchmarkResult = _mod5325.BenchmarkResult;
  exports.useDataMultiplier = _mod5329.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5283.useLayoutState;
  exports.useRecyclingState = _mod5331.useRecyclingState;
  exports.useMappingHelper = _mod5332.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5333;
  exports.useFlashListContext = _mod5284.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}