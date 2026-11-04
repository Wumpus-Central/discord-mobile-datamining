// _runtime/metro/05636__.js
import ErrorMessages from "../05638_ErrorMessages.js";
import FlashList from "../05639_FlashList.js";
import _mod5659 from "05659__.js";
import _mod5660 from "05660__.js";
import _mod5698 from "05698__.js";
import RenderTargetOptions from "../05699_RenderTargetOptions.js";
import _modDef5700 from "05700__.js";
import _mod5701 from "05701__.js";
import Cancellable from "../05702_Cancellable.js";
import JSFPSMonitor from "../05703_JSFPSMonitor.js";
import _mod5705 from "05705__.js";
import runScrollBenchmark from "../05706_runScrollBenchmark.js";
import _mod5707 from "05707__.js";
import _mod5708 from "05708__.js";
import _modDef5709 from "05709__.js";
import LayoutCommitObserver from "../05710_LayoutCommitObserver.js";
import get_ActivityIndicator from "05637__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5698.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5700;
  exports.useBenchmark = _mod5701.useBenchmark;
  exports.BenchmarkParams = _mod5701.BenchmarkParams;
  exports.BenchmarkResult = _mod5701.BenchmarkResult;
  exports.useDataMultiplier = _mod5705.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5659.useLayoutState;
  exports.useRecyclingState = _mod5707.useRecyclingState;
  exports.useMappingHelper = _mod5708.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5709;
  exports.useFlashListContext = _mod5660.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
