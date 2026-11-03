// === Module 5623: ? ===

// Module 5623
import ErrorMessages from "ErrorMessages" /* 5625 */;
import FlashList from "FlashList" /* 5626 */;
import _mod5646 from "module_5646" /* 5646 */;
import _mod5647 from "module_5647" /* 5647 */;
import _mod5685 from "module_5685" /* 5685 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5686 */;
import _modDef5687 from "module_5687" /* 5687 */;
import _mod5688 from "module_5688" /* 5688 */;
import Cancellable from "Cancellable" /* 5689 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5690 */;
import _mod5692 from "module_5692" /* 5692 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5693 */;
import _mod5694 from "module_5694" /* 5694 */;
import _mod5695 from "module_5695" /* 5695 */;
import _modDef5696 from "module_5696" /* 5696 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5697 */;
import get_ActivityIndicator from "module_5624" /* 5624 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5685.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5687;
  exports.useBenchmark = _mod5688.useBenchmark;
  exports.BenchmarkParams = _mod5688.BenchmarkParams;
  exports.BenchmarkResult = _mod5688.BenchmarkResult;
  exports.useDataMultiplier = _mod5692.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5646.useLayoutState;
  exports.useRecyclingState = _mod5694.useRecyclingState;
  exports.useMappingHelper = _mod5695.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5696;
  exports.useFlashListContext = _mod5647.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}