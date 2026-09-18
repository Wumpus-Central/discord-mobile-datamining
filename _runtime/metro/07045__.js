// === Module 7045: ? ===

// Module 7045
import ErrorMessages from "ErrorMessages" /* 7047 */;
import FlashList from "FlashList" /* 7048 */;
import _mod7068 from "module_7068" /* 7068 */;
import _mod7069 from "module_7069" /* 7069 */;
import _mod7107 from "module_7107" /* 7107 */;
import RenderTargetOptions from "RenderTargetOptions" /* 7108 */;
import _modDef7109 from "module_7109" /* 7109 */;
import _mod7110 from "module_7110" /* 7110 */;
import Cancellable from "Cancellable" /* 7111 */;
import JSFPSMonitor from "JSFPSMonitor" /* 7112 */;
import _mod7114 from "module_7114" /* 7114 */;
import runScrollBenchmark from "runScrollBenchmark" /* 7115 */;
import _mod7116 from "module_7116" /* 7116 */;
import _mod7117 from "module_7117" /* 7117 */;
import _modDef7118 from "module_7118" /* 7118 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 7119 */;
import get_ActivityIndicator from "module_7046" /* 7046 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7107.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7109;
  exports.useBenchmark = _mod7110.useBenchmark;
  exports.BenchmarkParams = _mod7110.BenchmarkParams;
  exports.BenchmarkResult = _mod7110.BenchmarkResult;
  exports.useDataMultiplier = _mod7114.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod7068.useLayoutState;
  exports.useRecyclingState = _mod7116.useRecyclingState;
  exports.useMappingHelper = _mod7117.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7118;
  exports.useFlashListContext = _mod7069.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}