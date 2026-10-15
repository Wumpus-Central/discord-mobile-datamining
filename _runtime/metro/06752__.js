// === Module 6752: ? ===

// Module 6752
import ErrorMessages from "ErrorMessages" /* 6754 */;
import FlashList from "FlashList" /* 6755 */;
import _mod6775 from "module_6775" /* 6775 */;
import _mod6776 from "module_6776" /* 6776 */;
import _mod6814 from "module_6814" /* 6814 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6815 */;
import _modDef6816 from "module_6816" /* 6816 */;
import _mod6817 from "module_6817" /* 6817 */;
import Cancellable from "Cancellable" /* 6818 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6819 */;
import _mod6821 from "module_6821" /* 6821 */;
import runScrollBenchmark from "runScrollBenchmark" /* 6822 */;
import _mod6823 from "module_6823" /* 6823 */;
import _mod6824 from "module_6824" /* 6824 */;
import _modDef6825 from "module_6825" /* 6825 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6826 */;
import get_ActivityIndicator from "module_6753" /* 6753 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6814.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6816;
  exports.useBenchmark = _mod6817.useBenchmark;
  exports.BenchmarkParams = _mod6817.BenchmarkParams;
  exports.BenchmarkResult = _mod6817.BenchmarkResult;
  exports.useDataMultiplier = _mod6821.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6775.useLayoutState;
  exports.useRecyclingState = _mod6823.useRecyclingState;
  exports.useMappingHelper = _mod6824.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6825;
  exports.useFlashListContext = _mod6776.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}