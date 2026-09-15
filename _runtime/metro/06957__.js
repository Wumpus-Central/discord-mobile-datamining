// _runtime/metro/06957__.js
import ErrorMessages from "../06959_ErrorMessages.js";
import FlashList from "../06960_FlashList.js";
import _mod6980 from "06980__.js";
import _mod6981 from "06981__.js";
import _mod7019 from "07019__.js";
import RenderTargetOptions from "../07020_RenderTargetOptions.js";
import _modDef7021 from "07021__.js";
import _mod7022 from "07022__.js";
import Cancellable from "../07023_Cancellable.js";
import JSFPSMonitor from "../07024_JSFPSMonitor.js";
import _mod7026 from "07026__.js";
import runScrollBenchmark from "../07027_runScrollBenchmark.js";
import _mod7028 from "07028__.js";
import _mod7029 from "07029__.js";
import _modDef7030 from "07030__.js";
import LayoutCommitObserver from "../07031_LayoutCommitObserver.js";
import get_ActivityIndicator from "06958__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7019.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7021;
  exports.useBenchmark = _mod7022.useBenchmark;
  exports.BenchmarkParams = _mod7022.BenchmarkParams;
  exports.BenchmarkResult = _mod7022.BenchmarkResult;
  exports.useDataMultiplier = _mod7026.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6980.useLayoutState;
  exports.useRecyclingState = _mod7028.useRecyclingState;
  exports.useMappingHelper = _mod7029.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7030;
  exports.useFlashListContext = _mod6981.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
