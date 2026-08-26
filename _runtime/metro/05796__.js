// === Module 5796: ? ===

// Module 5796
import _mod5798 from "module_5798" /* 5798 */;
import FlashList from "FlashList" /* 5799 */;
import useLayoutState from "useLayoutState" /* 5819 */;
import context from "context" /* 5820 */;
import _mod5858 from "module_5858" /* 5858 */;
import _mod5859 from "module_5859" /* 5859 */;
import FlashListDefault from "FlashList" /* 5860 */;
import getFormattedString from "getFormattedString" /* 5861 */;
import Cancellable from "Cancellable" /* 5862 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5863 */;
import useDataMultiplier from "useDataMultiplier" /* 5865 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5866 */;
import useRecyclingState from "useRecyclingState" /* 5867 */;
import useMappingHelper from "useMappingHelper" /* 5868 */;
import _modDef5869 from "module_5869" /* 5869 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5870 */;
import isNewArch from "isNewArch" /* 5797 */;

if (isNewArch.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5858.FlashListRef;
  exports.FlashListProps = _mod5859.FlashListProps;
  exports.ListRenderItem = _mod5859.ListRenderItem;
  exports.ListRenderItemInfo = _mod5859.ListRenderItemInfo;
  exports.RenderTarget = _mod5859.RenderTarget;
  exports.RenderTargetOptions = _mod5859.RenderTargetOptions;
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
  exports.ViewToken = _modDef5869;
  exports.useFlashListContext = context.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(_mod5798.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}