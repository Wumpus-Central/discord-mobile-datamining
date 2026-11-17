// === Module 5796: ? ===

// Module 5796
import ErrorMessages from "ErrorMessages" /* 5798 */;
import FlashList from "FlashList" /* 5799 */;
import _mod5819 from "module_5819" /* 5819 */;
import _mod5820 from "module_5820" /* 5820 */;
import _mod5858 from "module_5858" /* 5858 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5859 */;
import _modDef5860 from "module_5860" /* 5860 */;
import _mod5861 from "module_5861" /* 5861 */;
import Cancellable from "Cancellable" /* 5862 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5863 */;
import _mod5865 from "module_5865" /* 5865 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5866 */;
import _mod5867 from "module_5867" /* 5867 */;
import _mod5868 from "module_5868" /* 5868 */;
import _modDef5869 from "module_5869" /* 5869 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5870 */;
import get_ActivityIndicator from "module_5797" /* 5797 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5858.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5860;
  exports.useBenchmark = _mod5861.useBenchmark;
  exports.BenchmarkParams = _mod5861.BenchmarkParams;
  exports.BenchmarkResult = _mod5861.BenchmarkResult;
  exports.useDataMultiplier = _mod5865.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5819.useLayoutState;
  exports.useRecyclingState = _mod5867.useRecyclingState;
  exports.useMappingHelper = _mod5868.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5869;
  exports.useFlashListContext = _mod5820.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}