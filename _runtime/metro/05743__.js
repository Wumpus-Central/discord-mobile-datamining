// _runtime/metro/05743__.js
import ErrorMessages from "../05745_ErrorMessages.js";
import FlashList from "../05746_FlashList.js";
import _mod5766 from "05766__.js";
import _mod5767 from "05767__.js";
import _mod5805 from "05805__.js";
import RenderTargetOptions from "../05806_RenderTargetOptions.js";
import _modDef5807 from "05807__.js";
import _mod5808 from "05808__.js";
import Cancellable from "../05809_Cancellable.js";
import JSFPSMonitor from "../05810_JSFPSMonitor.js";
import _mod5812 from "05812__.js";
import runScrollBenchmark from "../05813_runScrollBenchmark.js";
import _mod5814 from "05814__.js";
import _mod5815 from "05815__.js";
import _modDef5816 from "05816__.js";
import LayoutCommitObserver from "../05817_LayoutCommitObserver.js";
import get_ActivityIndicator from "05744__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5805.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5807;
  exports.useBenchmark = _mod5808.useBenchmark;
  exports.BenchmarkParams = _mod5808.BenchmarkParams;
  exports.BenchmarkResult = _mod5808.BenchmarkResult;
  exports.useDataMultiplier = _mod5812.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5766.useLayoutState;
  exports.useRecyclingState = _mod5814.useRecyclingState;
  exports.useMappingHelper = _mod5815.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5816;
  exports.useFlashListContext = _mod5767.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
