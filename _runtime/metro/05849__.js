// === Module 5849: ? ===

// Module 5849
import _mod5851 from "module_5851" /* 5851 */;
import FlashList from "FlashList" /* 5852 */;
import useLayoutState from "useLayoutState" /* 5872 */;
import context from "context" /* 5873 */;
import _mod5911 from "module_5911" /* 5911 */;
import _mod5912 from "module_5912" /* 5912 */;
import FlashListDefault from "FlashList" /* 5913 */;
import getFormattedString from "getFormattedString" /* 5914 */;
import Cancellable from "Cancellable" /* 5915 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5916 */;
import useDataMultiplier from "useDataMultiplier" /* 5918 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5919 */;
import useRecyclingState from "useRecyclingState" /* 5920 */;
import useMappingHelper from "useMappingHelper" /* 5921 */;
import _modDef5922 from "module_5922" /* 5922 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5923 */;
import isNewArch from "isNewArch" /* 5850 */;

if (isNewArch.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5911.FlashListRef;
  exports.FlashListProps = _mod5912.FlashListProps;
  exports.ListRenderItem = _mod5912.ListRenderItem;
  exports.ListRenderItemInfo = _mod5912.ListRenderItemInfo;
  exports.RenderTarget = _mod5912.RenderTarget;
  exports.RenderTargetOptions = _mod5912.RenderTargetOptions;
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
  exports.ViewToken = _modDef5922;
  exports.useFlashListContext = context.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(_mod5851.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}