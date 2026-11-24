// _runtime/metro/05385__.js
import ErrorMessages from "../05387_ErrorMessages.js";
import FlashList from "../05388_FlashList.js";
import _mod5408 from "05408__.js";
import _mod5409 from "05409__.js";
import _mod5447 from "05447__.js";
import RenderTargetOptions from "../05448_RenderTargetOptions.js";
import _modDef5449 from "05449__.js";
import _mod5450 from "05450__.js";
import Cancellable from "../05451_Cancellable.js";
import JSFPSMonitor from "../05452_JSFPSMonitor.js";
import _mod5454 from "05454__.js";
import runScrollBenchmark from "../05455_runScrollBenchmark.js";
import _mod5456 from "05456__.js";
import _mod5457 from "05457__.js";
import _modDef5458 from "05458__.js";
import LayoutCommitObserver from "../05459_LayoutCommitObserver.js";
import get_ActivityIndicator from "05386__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5447.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5449;
  exports.useBenchmark = _mod5450.useBenchmark;
  exports.BenchmarkParams = _mod5450.BenchmarkParams;
  exports.BenchmarkResult = _mod5450.BenchmarkResult;
  exports.useDataMultiplier = _mod5454.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5408.useLayoutState;
  exports.useRecyclingState = _mod5456.useRecyclingState;
  exports.useMappingHelper = _mod5457.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5458;
  exports.useFlashListContext = _mod5409.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
