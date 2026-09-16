// _runtime/metro/06960__.js
import ErrorMessages from "../06962_ErrorMessages.js";
import FlashList from "../06963_FlashList.js";
import _mod6983 from "06983__.js";
import _mod6984 from "06984__.js";
import _mod7022 from "07022__.js";
import RenderTargetOptions from "../07023_RenderTargetOptions.js";
import _modDef7024 from "07024__.js";
import _mod7025 from "07025__.js";
import Cancellable from "../07026_Cancellable.js";
import JSFPSMonitor from "../07027_JSFPSMonitor.js";
import _mod7029 from "07029__.js";
import runScrollBenchmark from "../07030_runScrollBenchmark.js";
import _mod7031 from "07031__.js";
import _mod7032 from "07032__.js";
import _modDef7033 from "07033__.js";
import LayoutCommitObserver from "../07034_LayoutCommitObserver.js";
import get_ActivityIndicator from "06961__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7022.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7024;
  exports.useBenchmark = _mod7025.useBenchmark;
  exports.BenchmarkParams = _mod7025.BenchmarkParams;
  exports.BenchmarkResult = _mod7025.BenchmarkResult;
  exports.useDataMultiplier = _mod7029.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6983.useLayoutState;
  exports.useRecyclingState = _mod7031.useRecyclingState;
  exports.useMappingHelper = _mod7032.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7033;
  exports.useFlashListContext = _mod6984.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
