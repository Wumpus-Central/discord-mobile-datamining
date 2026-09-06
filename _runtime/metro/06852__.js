// === Module 6852: ? ===

// Module 6852
import ErrorMessages from "ErrorMessages" /* 6854 */;
import FlashList from "FlashList" /* 6855 */;
import _mod6875 from "module_6875" /* 6875 */;
import _mod6876 from "module_6876" /* 6876 */;
import _mod6914 from "module_6914" /* 6914 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6915 */;
import _modDef6916 from "module_6916" /* 6916 */;
import _mod6917 from "module_6917" /* 6917 */;
import Cancellable from "Cancellable" /* 6918 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6919 */;
import _mod6921 from "module_6921" /* 6921 */;
import runScrollBenchmark from "runScrollBenchmark" /* 6922 */;
import _mod6923 from "module_6923" /* 6923 */;
import _mod6924 from "module_6924" /* 6924 */;
import _modDef6925 from "module_6925" /* 6925 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6926 */;
import get_ActivityIndicator from "module_6853" /* 6853 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6914.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6916;
  exports.useBenchmark = _mod6917.useBenchmark;
  exports.BenchmarkParams = _mod6917.BenchmarkParams;
  exports.BenchmarkResult = _mod6917.BenchmarkResult;
  exports.useDataMultiplier = _mod6921.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6875.useLayoutState;
  exports.useRecyclingState = _mod6923.useRecyclingState;
  exports.useMappingHelper = _mod6924.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6925;
  exports.useFlashListContext = _mod6876.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}