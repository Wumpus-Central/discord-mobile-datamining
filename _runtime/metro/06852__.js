// === Module 6852: ? ===

// Module 6852
import _mod6854 from "module_6854" /* 6854 */;
import FlashList from "FlashList" /* 6855 */;
import useLayoutState from "useLayoutState" /* 6875 */;
import context from "context" /* 6876 */;
import _mod6914 from "module_6914" /* 6914 */;
import _mod6915 from "module_6915" /* 6915 */;
import FlashListDefault from "FlashList" /* 6916 */;
import getFormattedString from "getFormattedString" /* 6917 */;
import Cancellable from "Cancellable" /* 6918 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6919 */;
import useDataMultiplier from "useDataMultiplier" /* 6921 */;
import runScrollBenchmark from "runScrollBenchmark" /* 6922 */;
import useRecyclingState from "useRecyclingState" /* 6923 */;
import useMappingHelper from "useMappingHelper" /* 6924 */;
import _modDef6925 from "module_6925" /* 6925 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6926 */;
import isNewArch from "isNewArch" /* 6853 */;

if (isNewArch.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6914.FlashListRef;
  exports.FlashListProps = _mod6915.FlashListProps;
  exports.ListRenderItem = _mod6915.ListRenderItem;
  exports.ListRenderItemInfo = _mod6915.ListRenderItemInfo;
  exports.RenderTarget = _mod6915.RenderTarget;
  exports.RenderTargetOptions = _mod6915.RenderTargetOptions;
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
  exports.ViewToken = _modDef6925;
  exports.useFlashListContext = context.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(_mod6854.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}