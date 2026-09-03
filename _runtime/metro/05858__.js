// === Module 5858: ? ===

// Module 5858
import _mod5860 from "module_5860" /* 5860 */;
import FlashList from "FlashList" /* 5861 */;
import useLayoutState from "useLayoutState" /* 5881 */;
import context from "context" /* 5882 */;
import _mod5920 from "module_5920" /* 5920 */;
import _mod5921 from "module_5921" /* 5921 */;
import FlashListDefault from "FlashList" /* 5922 */;
import getFormattedString from "getFormattedString" /* 5923 */;
import Cancellable from "Cancellable" /* 5924 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5925 */;
import useDataMultiplier from "useDataMultiplier" /* 5927 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5928 */;
import useRecyclingState from "useRecyclingState" /* 5929 */;
import useMappingHelper from "useMappingHelper" /* 5930 */;
import _modDef5931 from "module_5931" /* 5931 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5932 */;
import isNewArch from "isNewArch" /* 5859 */;

if (isNewArch.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5920.FlashListRef;
  exports.FlashListProps = _mod5921.FlashListProps;
  exports.ListRenderItem = _mod5921.ListRenderItem;
  exports.ListRenderItemInfo = _mod5921.ListRenderItemInfo;
  exports.RenderTarget = _mod5921.RenderTarget;
  exports.RenderTargetOptions = _mod5921.RenderTargetOptions;
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
  exports.ViewToken = _modDef5931;
  exports.useFlashListContext = context.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(_mod5860.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}