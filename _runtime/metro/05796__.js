// _runtime/metro/05796__.js
import ErrorMessages from "../05798_ErrorMessages.js";
import FlashList from "../05799_FlashList.js";
import _mod5819 from "05819__.js";
import _mod5820 from "05820__.js";
import _mod5858 from "05858__.js";
import RenderTargetOptions from "../05859_RenderTargetOptions.js";
import _modDef5860 from "05860__.js";
import _mod5861 from "05861__.js";
import Cancellable from "../05862_Cancellable.js";
import JSFPSMonitor from "../05863_JSFPSMonitor.js";
import _mod5865 from "05865__.js";
import runScrollBenchmark from "../05866_runScrollBenchmark.js";
import _mod5867 from "05867__.js";
import _mod5868 from "05868__.js";
import _modDef5869 from "05869__.js";
import LayoutCommitObserver from "../05870_LayoutCommitObserver.js";
import get_ActivityIndicator from "05797__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5858.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5860;
  exports.useBenchmark = _mod5861.useBenchmark;
  exports.BenchmarkParams = _mod5861.BenchmarkParams;
  exports.BenchmarkResult = _mod5861.BenchmarkResult;
  exports.useDataMultiplier = _mod5865.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5819.useLayoutState;
  exports.useRecyclingState = _mod5867.useRecyclingState;
  exports.useMappingHelper = _mod5868.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5869;
  exports.useFlashListContext = _mod5820.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
