// _runtime/metro/05638__.js
import ErrorMessages from "../05640_ErrorMessages.js";
import FlashList from "../05641_FlashList.js";
import _mod5661 from "05661__.js";
import _mod5662 from "05662__.js";
import _mod5700 from "05700__.js";
import RenderTargetOptions from "../05701_RenderTargetOptions.js";
import _modDef5702 from "05702__.js";
import _mod5703 from "05703__.js";
import Cancellable from "../05704_Cancellable.js";
import JSFPSMonitor from "../05705_JSFPSMonitor.js";
import _mod5707 from "05707__.js";
import runScrollBenchmark from "../05708_runScrollBenchmark.js";
import _mod5709 from "05709__.js";
import _mod5710 from "05710__.js";
import _modDef5711 from "05711__.js";
import LayoutCommitObserver from "../05712_LayoutCommitObserver.js";
import get_ActivityIndicator from "05639__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5700.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5702;
  exports.useBenchmark = _mod5703.useBenchmark;
  exports.BenchmarkParams = _mod5703.BenchmarkParams;
  exports.BenchmarkResult = _mod5703.BenchmarkResult;
  exports.useDataMultiplier = _mod5707.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5661.useLayoutState;
  exports.useRecyclingState = _mod5709.useRecyclingState;
  exports.useMappingHelper = _mod5710.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5711;
  exports.useFlashListContext = _mod5662.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
