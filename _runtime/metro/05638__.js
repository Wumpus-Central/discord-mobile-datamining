// === Module 5638: ? ===

// Module 5638
import ErrorMessages from "ErrorMessages" /* 5640 */;
import FlashList from "FlashList" /* 5641 */;
import _mod5661 from "module_5661" /* 5661 */;
import _mod5662 from "module_5662" /* 5662 */;
import _mod5700 from "module_5700" /* 5700 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5701 */;
import _modDef5702 from "module_5702" /* 5702 */;
import _mod5703 from "module_5703" /* 5703 */;
import Cancellable from "Cancellable" /* 5704 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5705 */;
import _mod5707 from "module_5707" /* 5707 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5708 */;
import _mod5709 from "module_5709" /* 5709 */;
import _mod5710 from "module_5710" /* 5710 */;
import _modDef5711 from "module_5711" /* 5711 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5712 */;
import get_ActivityIndicator from "module_5639" /* 5639 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5700.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5702;
  exports.useBenchmark = _mod5703.useBenchmark;
  exports.BenchmarkParams = _mod5703.BenchmarkParams;
  exports.BenchmarkResult = _mod5703.BenchmarkResult;
  exports.useDataMultiplier = _mod5707.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5661.useLayoutState;
  exports.useRecyclingState = _mod5709.useRecyclingState;
  exports.useMappingHelper = _mod5710.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5711;
  exports.useFlashListContext = _mod5662.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}