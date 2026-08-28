// === Module 5814: ? ===

// Module 5814
import _mod5816 from "module_5816" /* 5816 */;
import FlashList from "FlashList" /* 5817 */;
import useLayoutState from "useLayoutState" /* 5837 */;
import context from "context" /* 5838 */;
import _mod5876 from "module_5876" /* 5876 */;
import _mod5877 from "module_5877" /* 5877 */;
import FlashListDefault from "FlashList" /* 5878 */;
import getFormattedString from "getFormattedString" /* 5879 */;
import Cancellable from "Cancellable" /* 5880 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5881 */;
import useDataMultiplier from "useDataMultiplier" /* 5883 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5884 */;
import useRecyclingState from "useRecyclingState" /* 5885 */;
import useMappingHelper from "useMappingHelper" /* 5886 */;
import _modDef5887 from "module_5887" /* 5887 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5888 */;
import isNewArch from "isNewArch" /* 5815 */;

if (isNewArch.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5876.FlashListRef;
  exports.FlashListProps = _mod5877.FlashListProps;
  exports.ListRenderItem = _mod5877.ListRenderItem;
  exports.ListRenderItemInfo = _mod5877.ListRenderItemInfo;
  exports.RenderTarget = _mod5877.RenderTarget;
  exports.RenderTargetOptions = _mod5877.RenderTargetOptions;
  exports.AnimatedFlashList = FlashListDefault;
  exports.useBenchmark = getFormattedString.useBenchmark;
  exports.BenchmarkParams = getFormattedString.BenchmarkParams;
  exports.BenchmarkResult = getFormattedString.BenchmarkResult;
  exports.useDataMultiplier = useDataMultiplier.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = useLayoutState.useLayoutState;
  exports.useRecyclingState = useRecyclingState.useRecyclingState;
  exports.useMappingHelper = useMappingHelper.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5887;
  exports.useFlashListContext = context.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(_mod5816.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}