// _runtime/metro/05260__.js
import ErrorMessages from "../05262_ErrorMessages.js";
import FlashList from "../05263_FlashList.js";
import _mod5283 from "05283__.js";
import _mod5284 from "05284__.js";
import _mod5322 from "05322__.js";
import RenderTargetOptions from "../05323_RenderTargetOptions.js";
import _modDef5324 from "05324__.js";
import _mod5325 from "05325__.js";
import Cancellable from "../05326_Cancellable.js";
import JSFPSMonitor from "../05327_JSFPSMonitor.js";
import _mod5329 from "05329__.js";
import runScrollBenchmark from "../05330_runScrollBenchmark.js";
import _mod5331 from "05331__.js";
import _mod5332 from "05332__.js";
import _modDef5333 from "05333__.js";
import LayoutCommitObserver from "../05334_LayoutCommitObserver.js";
import get_ActivityIndicator from "05261__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5322.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5324;
  exports.useBenchmark = _mod5325.useBenchmark;
  exports.BenchmarkParams = _mod5325.BenchmarkParams;
  exports.BenchmarkResult = _mod5325.BenchmarkResult;
  exports.useDataMultiplier = _mod5329.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5283.useLayoutState;
  exports.useRecyclingState = _mod5331.useRecyclingState;
  exports.useMappingHelper = _mod5332.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5333;
  exports.useFlashListContext = _mod5284.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
