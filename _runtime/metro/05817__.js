// === Module 5817: ? ===

// Module 5817
import _mod5819 from "module_5819" /* 5819 */;
import FlashList from "FlashList" /* 5820 */;
import useLayoutState from "useLayoutState" /* 5840 */;
import context from "context" /* 5841 */;
import _mod5879 from "module_5879" /* 5879 */;
import _mod5880 from "module_5880" /* 5880 */;
import FlashListDefault from "FlashList" /* 5881 */;
import getFormattedString from "getFormattedString" /* 5882 */;
import Cancellable from "Cancellable" /* 5883 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5884 */;
import useDataMultiplier from "useDataMultiplier" /* 5886 */;
import runScrollBenchmark from "runScrollBenchmark" /* 5887 */;
import useRecyclingState from "useRecyclingState" /* 5888 */;
import useMappingHelper from "useMappingHelper" /* 5889 */;
import _modDef5890 from "module_5890" /* 5890 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5891 */;
import isNewArch from "isNewArch" /* 5818 */;

if (isNewArch.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5879.FlashListRef;
  exports.FlashListProps = _mod5880.FlashListProps;
  exports.ListRenderItem = _mod5880.ListRenderItem;
  exports.ListRenderItemInfo = _mod5880.ListRenderItemInfo;
  exports.RenderTarget = _mod5880.RenderTarget;
  exports.RenderTargetOptions = _mod5880.RenderTargetOptions;
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
  exports.ViewToken = _modDef5890;
  exports.useFlashListContext = context.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(_mod5819.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}