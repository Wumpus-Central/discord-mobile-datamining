// === Module 5801: ? ===

// Module 5801
import _mod5803 from "module_5803" /* 5803 */;
import FlashList from "FlashList" /* 5804 */;
import useLayoutState from "useLayoutState" /* 5824 */;
import context from "context" /* 5825 */;
import _mod5863 from "module_5863" /* 5863 */;
import _mod5864 from "module_5864" /* 5864 */;
import FlashListDefault from "FlashList" /* 5865 */;
import getFormattedString from "getFormattedString" /* 5866 */;
import Cancellable from "Cancellable" /* 5867 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5868 */;
import useDataMultiplier from "useDataMultiplier" /* 5870 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5871 */;
import useRecyclingState from "useRecyclingState" /* 5872 */;
import useMappingHelper from "useMappingHelper" /* 5873 */;
import _modDef5874 from "module_5874" /* 5874 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5875 */;
import isNewArch from "isNewArch" /* 5802 */;

if (isNewArch.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5863.FlashListRef;
  exports.FlashListProps = _mod5864.FlashListProps;
  exports.ListRenderItem = _mod5864.ListRenderItem;
  exports.ListRenderItemInfo = _mod5864.ListRenderItemInfo;
  exports.RenderTarget = _mod5864.RenderTarget;
  exports.RenderTargetOptions = _mod5864.RenderTargetOptions;
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
  exports.ViewToken = _modDef5874;
  exports.useFlashListContext = context.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(_mod5803.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}