// _runtime/metro/05800__.js
import ErrorMessages from "../05802_ErrorMessages.js";
import FlashList from "../05803_FlashList.js";
import _mod5823 from "05823__.js";
import _mod5824 from "05824__.js";
import _mod5862 from "05862__.js";
import RenderTargetOptions from "../05863_RenderTargetOptions.js";
import _modDef5864 from "05864__.js";
import _mod5865 from "05865__.js";
import Cancellable from "../05866_Cancellable.js";
import JSFPSMonitor from "../05867_JSFPSMonitor.js";
import _mod5869 from "05869__.js";
import runScrollBenchmark from "../05870_runScrollBenchmark.js";
import _mod5871 from "05871__.js";
import _mod5872 from "05872__.js";
import _modDef5873 from "05873__.js";
import LayoutCommitObserver from "../05874_LayoutCommitObserver.js";
import get_ActivityIndicator from "05801__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5862.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5864;
  exports.useBenchmark = _mod5865.useBenchmark;
  exports.BenchmarkParams = _mod5865.BenchmarkParams;
  exports.BenchmarkResult = _mod5865.BenchmarkResult;
  exports.useDataMultiplier = _mod5869.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5823.useLayoutState;
  exports.useRecyclingState = _mod5871.useRecyclingState;
  exports.useMappingHelper = _mod5872.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5873;
  exports.useFlashListContext = _mod5824.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
