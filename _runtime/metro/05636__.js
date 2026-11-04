// === Module 5636: ? ===

// Module 5636
import ErrorMessages from "ErrorMessages" /* 5638 */;
import FlashList from "FlashList" /* 5639 */;
import _mod5659 from "module_5659" /* 5659 */;
import _mod5660 from "module_5660" /* 5660 */;
import _mod5698 from "module_5698" /* 5698 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5699 */;
import _modDef5700 from "module_5700" /* 5700 */;
import _mod5701 from "module_5701" /* 5701 */;
import Cancellable from "Cancellable" /* 5702 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5703 */;
import _mod5705 from "module_5705" /* 5705 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5706 */;
import _mod5707 from "module_5707" /* 5707 */;
import _mod5708 from "module_5708" /* 5708 */;
import _modDef5709 from "module_5709" /* 5709 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5710 */;
import get_ActivityIndicator from "module_5637" /* 5637 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5698.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5700;
  exports.useBenchmark = _mod5701.useBenchmark;
  exports.BenchmarkParams = _mod5701.BenchmarkParams;
  exports.BenchmarkResult = _mod5701.BenchmarkResult;
  exports.useDataMultiplier = _mod5705.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5659.useLayoutState;
  exports.useRecyclingState = _mod5707.useRecyclingState;
  exports.useMappingHelper = _mod5708.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5709;
  exports.useFlashListContext = _mod5660.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}