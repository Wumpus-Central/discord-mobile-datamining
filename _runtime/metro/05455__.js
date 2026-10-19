// _runtime/metro/05455__.js
import ErrorMessages from "../05457_ErrorMessages.js";
import FlashList from "../05458_FlashList.js";
import _mod5478 from "05478__.js";
import _mod5479 from "05479__.js";
import _mod5517 from "05517__.js";
import RenderTargetOptions from "../05518_RenderTargetOptions.js";
import _modDef5519 from "05519__.js";
import _mod5520 from "05520__.js";
import Cancellable from "../05521_Cancellable.js";
import JSFPSMonitor from "../05522_JSFPSMonitor.js";
import _mod5524 from "05524__.js";
import runScrollBenchmark from "../05525_runScrollBenchmark.js";
import _mod5526 from "05526__.js";
import _mod5527 from "05527__.js";
import _modDef5528 from "05528__.js";
import LayoutCommitObserver from "../05529_LayoutCommitObserver.js";
import get_ActivityIndicator from "05456__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5517.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5519;
  exports.useBenchmark = _mod5520.useBenchmark;
  exports.BenchmarkParams = _mod5520.BenchmarkParams;
  exports.BenchmarkResult = _mod5520.BenchmarkResult;
  exports.useDataMultiplier = _mod5524.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5478.useLayoutState;
  exports.useRecyclingState = _mod5526.useRecyclingState;
  exports.useMappingHelper = _mod5527.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5528;
  exports.useFlashListContext = _mod5479.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
