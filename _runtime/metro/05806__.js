// === Module 5806: ? ===

// Module 5806
import ErrorMessages from "ErrorMessages" /* 5808 */;
import FlashList from "FlashList" /* 5809 */;
import _mod5829 from "module_5829" /* 5829 */;
import _mod5830 from "module_5830" /* 5830 */;
import _mod5868 from "module_5868" /* 5868 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5869 */;
import _modDef5870 from "module_5870" /* 5870 */;
import _mod5871 from "module_5871" /* 5871 */;
import Cancellable from "Cancellable" /* 5872 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5873 */;
import _mod5875 from "module_5875" /* 5875 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5876 */;
import _mod5877 from "module_5877" /* 5877 */;
import _mod5878 from "module_5878" /* 5878 */;
import _modDef5879 from "module_5879" /* 5879 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5880 */;
import get_ActivityIndicator from "module_5807" /* 5807 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5868.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5870;
  exports.useBenchmark = _mod5871.useBenchmark;
  exports.BenchmarkParams = _mod5871.BenchmarkParams;
  exports.BenchmarkResult = _mod5871.BenchmarkResult;
  exports.useDataMultiplier = _mod5875.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5829.useLayoutState;
  exports.useRecyclingState = _mod5877.useRecyclingState;
  exports.useMappingHelper = _mod5878.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5879;
  exports.useFlashListContext = _mod5830.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}