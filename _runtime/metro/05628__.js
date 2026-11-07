// _runtime/metro/05628__.js
import ErrorMessages from "../05630_ErrorMessages.js";
import FlashList from "../05631_FlashList.js";
import _mod5651 from "05651__.js";
import _mod5652 from "05652__.js";
import _mod5690 from "05690__.js";
import RenderTargetOptions from "../05691_RenderTargetOptions.js";
import _modDef5692 from "05692__.js";
import _mod5693 from "05693__.js";
import Cancellable from "../05694_Cancellable.js";
import JSFPSMonitor from "../05695_JSFPSMonitor.js";
import _mod5697 from "05697__.js";
import runScrollBenchmark from "../05698_runScrollBenchmark.js";
import _mod5699 from "05699__.js";
import _mod5700 from "05700__.js";
import _modDef5701 from "05701__.js";
import LayoutCommitObserver from "../05702_LayoutCommitObserver.js";
import get_ActivityIndicator from "05629__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5690.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5692;
  exports.useBenchmark = _mod5693.useBenchmark;
  exports.BenchmarkParams = _mod5693.BenchmarkParams;
  exports.BenchmarkResult = _mod5693.BenchmarkResult;
  exports.useDataMultiplier = _mod5697.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5651.useLayoutState;
  exports.useRecyclingState = _mod5699.useRecyclingState;
  exports.useMappingHelper = _mod5700.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5701;
  exports.useFlashListContext = _mod5652.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
