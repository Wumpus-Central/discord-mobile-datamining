// _runtime/metro/06344__.js
import ErrorMessages from "../06346_ErrorMessages.js";
import FlashList from "../06347_FlashList.js";
import _mod6367 from "06367__.js";
import react from "../06368_react.js";
import _mod6406 from "06406__.js";
import RenderTargetOptions from "../06407_RenderTargetOptions.js";
import react_nativeDefault from "../06408_react-native.js";
import _mod6409 from "06409__.js";
import autoScroll from "../06410_autoScroll.js";
import JSFPSMonitor from "../06411_JSFPSMonitor.js";
import _mod6413 from "06413__.js";
import _mod6414 from "06414__.js";
import _mod6415 from "06415__.js";
import react2 from "../06416_react.js";
import _modDef6417 from "06417__.js";
import LayoutCommitObserver from "../06418_LayoutCommitObserver.js";
import react_native from "../06345_react-native.js";

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6406.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6409.useBenchmark;
  exports.BenchmarkParams = _mod6409.BenchmarkParams;
  exports.BenchmarkResult = _mod6409.BenchmarkResult;
  exports.useDataMultiplier = _mod6413.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6414.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6414.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6367.useLayoutState;
  exports.useRecyclingState = _mod6415.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6417;
  exports.useFlashListContext = react.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const self = this;
  const self2 = this;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
