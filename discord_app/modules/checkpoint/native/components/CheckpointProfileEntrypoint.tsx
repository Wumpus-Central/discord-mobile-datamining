// discord_app/modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx
import asyncRequireImpl from "../../../../../_runtime/02121_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openCheckpoint from "../../openCheckpoint.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import CheckpointStore from "../../CheckpointStore.tsx";

require = fn;
let closure_7 = async function _handlePress(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp4;
          c2 = 1;
          c3 = 1;
          const obj5 = { value: openCheckpoint.openCheckpoint(closure_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_1(closure_129_2[5]).hideAllActionSheets();
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
function CheckpointProfileEntrypointRow(source) {
  source = source.source;
  const checkpointQAMode = source(6248).useCheckpointQAMode("CheckpointProfileEntrypoint");
  const obj = source(6248);
  items = [CheckpointStore];
  const stateFromStores = source(504).useStateFromStores(items, () => isFetching.isFetching);
  const obj3 = {
    label: null,
    subLabel: null,
    icon: null,
    onPress: null,
    onLongPress: null,
    arrow: true,
    start: true,
    end: true,
  };
  const intl = source(1113).intl;
  obj3.label = intl.string(checkpointQAMode(3339)["8hclXY"]);
  const intl2 = source(1113).intl;
  obj3.subLabel = intl2.string(checkpointQAMode(3339).BFc4lY);
  if (stateFromStores) {
    let tmp5Result = <ActivityIndicator />;
  } else {
    const obj4 = { IconComponent: tmp(10015).ExperimentalCheckpointIcon };
    tmp5Result = jsx(tmp(6956).TableRow.Icon, { IconComponent: tmp(10015).ExperimentalCheckpointIcon });
  }
  obj3.icon = tmp5Result;
  obj3.onPress = function onPress() {
    return (function handlePress() {
      const self = this;
      const apply = closure_1_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(source);
  };
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(14529, dependencyMap.paths),
        "CheckpointTestingActionSheet",
        { mode: checkpointQAMode },
      );
    };
  }
  obj3.onLongPress = fn;
  return jsx(source(6956).TableRow, {
    label: null,
    subLabel: null,
    icon: null,
    onPress: null,
    onLongPress: null,
    arrow: true,
    start: true,
    end: true,
  });
}
const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint(source) {
  let tmp = null;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    const obj2 = { source: source.source };
    tmp = <CheckpointProfileEntrypointRow source={source.source} />;
  }
  return tmp;
}
