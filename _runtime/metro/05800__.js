// === Module 5800: ? ===

// Module 5800
import ErrorMessages from "ErrorMessages" /* 5802 */;
import FlashList from "FlashList" /* 5803 */;
import _mod5823 from "module_5823" /* 5823 */;
import _mod5824 from "module_5824" /* 5824 */;
import _mod5862 from "module_5862" /* 5862 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5863 */;
import _modDef5864 from "module_5864" /* 5864 */;
import _mod5865 from "module_5865" /* 5865 */;
import Cancellable from "Cancellable" /* 5866 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5867 */;
import _mod5869 from "module_5869" /* 5869 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5870 */;
import _mod5871 from "module_5871" /* 5871 */;
import _mod5872 from "module_5872" /* 5872 */;
import _modDef5873 from "module_5873" /* 5873 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5874 */;
import get_ActivityIndicator from "module_5801" /* 5801 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5862.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5864;
  exports.useBenchmark = _mod5865.useBenchmark;
  exports.BenchmarkParams = _mod5865.BenchmarkParams;
  exports.BenchmarkResult = _mod5865.BenchmarkResult;
  exports.useDataMultiplier = _mod5869.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5823.useLayoutState;
  exports.useRecyclingState = _mod5871.useRecyclingState;
  exports.useMappingHelper = _mod5872.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5873;
  exports.useFlashListContext = _mod5824.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}