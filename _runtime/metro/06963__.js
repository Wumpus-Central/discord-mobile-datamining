// _runtime/metro/06963__.js
import ErrorMessages from "../06965_ErrorMessages.js";
import FlashList from "../06966_FlashList.js";
import _mod6986 from "06986__.js";
import _mod6987 from "06987__.js";
import _mod7025 from "07025__.js";
import RenderTargetOptions from "../07026_RenderTargetOptions.js";
import _modDef7027 from "07027__.js";
import _mod7028 from "07028__.js";
import Cancellable from "../07029_Cancellable.js";
import JSFPSMonitor from "../07030_JSFPSMonitor.js";
import _mod7032 from "07032__.js";
import runScrollBenchmark from "../07033_runScrollBenchmark.js";
import _mod7034 from "07034__.js";
import _mod7035 from "07035__.js";
import _modDef7036 from "07036__.js";
import LayoutCommitObserver from "../07037_LayoutCommitObserver.js";
import get_ActivityIndicator from "06964__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7025.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7027;
  exports.useBenchmark = _mod7028.useBenchmark;
  exports.BenchmarkParams = _mod7028.BenchmarkParams;
  exports.BenchmarkResult = _mod7028.BenchmarkResult;
  exports.useDataMultiplier = _mod7032.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6986.useLayoutState;
  exports.useRecyclingState = _mod7034.useRecyclingState;
  exports.useMappingHelper = _mod7035.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7036;
  exports.useFlashListContext = _mod6987.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
