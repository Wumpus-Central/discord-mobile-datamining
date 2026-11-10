// === Module 5630: ? ===

// Module 5630
import ErrorMessages from "ErrorMessages" /* 5632 */;
import FlashList from "FlashList" /* 5633 */;
import _mod5653 from "module_5653" /* 5653 */;
import _mod5654 from "module_5654" /* 5654 */;
import _mod5692 from "module_5692" /* 5692 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5693 */;
import _modDef5694 from "module_5694" /* 5694 */;
import _mod5695 from "module_5695" /* 5695 */;
import Cancellable from "Cancellable" /* 5696 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5697 */;
import _mod5699 from "module_5699" /* 5699 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5700 */;
import _mod5701 from "module_5701" /* 5701 */;
import _mod5702 from "module_5702" /* 5702 */;
import _modDef5703 from "module_5703" /* 5703 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5704 */;
import get_ActivityIndicator from "module_5631" /* 5631 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5692.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5694;
  exports.useBenchmark = _mod5695.useBenchmark;
  exports.BenchmarkParams = _mod5695.BenchmarkParams;
  exports.BenchmarkResult = _mod5695.BenchmarkResult;
  exports.useDataMultiplier = _mod5699.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5653.useLayoutState;
  exports.useRecyclingState = _mod5701.useRecyclingState;
  exports.useMappingHelper = _mod5702.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5703;
  exports.useFlashListContext = _mod5654.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}