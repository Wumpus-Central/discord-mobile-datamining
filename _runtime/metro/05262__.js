// _runtime/metro/05262__.js
import ErrorMessages from "../05264_ErrorMessages.js";
import FlashList from "../05265_FlashList.js";
import _mod5285 from "05285__.js";
import _mod5286 from "05286__.js";
import _mod5324 from "05324__.js";
import RenderTargetOptions from "../05325_RenderTargetOptions.js";
import _modDef5326 from "05326__.js";
import _mod5327 from "05327__.js";
import Cancellable from "../05328_Cancellable.js";
import JSFPSMonitor from "../05329_JSFPSMonitor.js";
import _mod5331 from "05331__.js";
import runScrollBenchmark from "../05332_runScrollBenchmark.js";
import _mod5333 from "05333__.js";
import _mod5334 from "05334__.js";
import _modDef5335 from "05335__.js";
import LayoutCommitObserver from "../05336_LayoutCommitObserver.js";
import get_ActivityIndicator from "05263__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5324.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5326;
  exports.useBenchmark = _mod5327.useBenchmark;
  exports.BenchmarkParams = _mod5327.BenchmarkParams;
  exports.BenchmarkResult = _mod5327.BenchmarkResult;
  exports.useDataMultiplier = _mod5331.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5285.useLayoutState;
  exports.useRecyclingState = _mod5333.useRecyclingState;
  exports.useMappingHelper = _mod5334.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5335;
  exports.useFlashListContext = _mod5286.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
