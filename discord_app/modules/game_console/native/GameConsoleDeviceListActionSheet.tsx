// discord_app/modules/game_console/native/GameConsoleDeviceListActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import GameConsoleActionCreators from "../GameConsoleActionCreators.tsx";
import _modDef9457 from "../../../../_runtime/metro/09457__.js";
import _modDef9458 from "../../../../_runtime/metro/09458__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../GameConsoleStore.tsx";

require = fn;
function TransferFooter(arg0) {
  ({ onPress, transferring } = arg0);
  let obj = { bottom: true, style: closure_15().footerContainer, children: null };
  obj = { loading: transferring, disabled: null, onPress: null, text: null, grow: true };
  if (!transferring) {
    transferring = null == onPress;
  }
  obj.disabled = transferring;
  obj.onPress = onPress;
  const intl = util.intl;
  obj.text = intl.string(util.t.FYi3ry);
  obj.children = closure_1_12(components_Button_Button.Button, obj);
  return closure_1_12(common_SafeAreaView.SafeAreaPaddingView, obj);
}
function DeviceOption(children) {
  const tmp = closure_15();
  let obj = { style: tmp.deviceOption, children: null };
  obj = { style: tmp.deviceIcon, source: _modDef9457 };
  const items = [closure_1_12(React6, obj)];
  obj = {
    style: tmp.deviceText,
    color: "mobile-text-heading-primary",
    variant: "text-md/bold",
    children: children.name,
  };
  items[1] = closure_1_12(Text_Text.Text, obj);
  obj.children = items;
  return map1(React5, obj);
}
function EmptyState() {
  const tmp = closure_15();
  let obj = { style: tmp.emptyContainer, children: null };
  obj = { source: _modDef9458, style: tmp.emptyArt };
  const items = [closure_1_12(React6, obj), ,];
  obj = {
    style: tmp.emptyHeader,
    variant: "heading-md/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj.children = intl.string(util.t.OkJf1e);
  items[1] = closure_1_12(Text_Text.Text, obj);
  const obj1 = { style: tmp.emptyBody, variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t["of/l5Z"]);
  items[2] = closure_1_12(Text_Text.Text, obj1);
  obj.children = items;
  return map1(React5, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7, Image: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
const ComponentActions = fn(1074).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  container: { padding: 16, justifyContent: "center", paddingBottom: 90 },
  loading: { minHeight: 56 },
  footerContainer: null,
  radioItem: null,
  deviceIcon: null,
  deviceOption: null,
  deviceText: null,
  emptyContainer: null,
  emptyArt: null,
  emptyHeader: null,
  emptyBody: null,
  infoBox: null,
};
createStyles = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingBottom: 16 };
createStyles.footerContainer = createStyles;
createStyles.radioItem = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xs,
  padding: 16,
};
let size = { marginRight: 16, width: 32, height: 32, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.deviceIcon = size;
createStyles.deviceOption = { flexDirection: "row", alignItems: "center", marginRight: 24 };
createStyles.deviceText = { flexShrink: 1 };
createStyles.emptyContainer = { alignItems: "center", justifyContent: "center" };
createStyles.emptyArt = { marginBottom: 16 };
createStyles.emptyHeader = { marginBottom: 8, textAlign: "center" };
createStyles.emptyBody = { textAlign: "center" };
createStyles.infoBox = { marginTop: 8 };
let closure_15 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/game_console/native/GameConsoleDeviceListActionSheet.tsx");

export default function GameConsoleListActionSheet(arg0) {
  ({ platform: require, channel: importDefault } = arg0);
  let stateFromStores;
  value = undefined;
  noop = undefined;
  c6 = undefined;
  closure_7 = async function _handleTransferVoice() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v1(38)(null != _slicedToArray, "selectedDeviceId cannot be null");
            timestampProducer(true);
            v1 = 1;
            dependencyMap = 1;
            const obj1 = {
              value: tmp4(9455).transferToPlaystationWithAlert(require, stateFromStores[_slicedToArray], importDefault),
              done: false,
            };
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          obj = v1(4527);
          obj.hideActionSheet();
          const ComponentDispatch = tmp4(1109).ComponentDispatch;
          ComponentDispatch.dispatch(constants.TOGGLE_CALL_CONTROL_DRAWER);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        dependencyMap = tmp;
        throw tmp13;
      }
    }
  };
  const tmp = closure_15();
  let obj = require("initialize");
  let items = [GameConsoleStore];
  stateFromStores = obj.useStateFromStores(items, () => GameConsoleStore.getDevicesForPlatform(require));
  let obj1 = require("initialize");
  const items1 = [GameConsoleStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => GameConsoleStore.getFetchingDevices(require));
  let obj2 = require("initialize");
  const items2 = [GameConsoleStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () =>
    GameConsoleStore.getLastSelectedDeviceByPlatform(require),
  );
  const tmp7 = value(noop.useState(null), 2);
  value = tmp7[0];
  noop = tmp7[1];
  [tmp10, c6] = value(noop.useState(false), 2);
  const items3 = [stateFromStores, stateFromStores2];
  const effect = noop.useEffect(() => {
    const values = Object.values(stateFromStores);
    if (1 === values.length) {
      closure_5(values[0].id);
    } else if (null != stateFromStores2) {
      closure_5(tmp);
    }
  }, items3);
  const items4 = [stateFromStores];
  const memo = noop.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const values = Object.values(items);
    return values.map((id) => {
      let obj = { value: id.id, name: null };
      obj = { name: id.name, platform: id.platform };
      obj.name = closure_1_12(closure_1_17, obj);
      return obj;
    });
  }, items4);
  if (memo.length > 0) {
    obj = { children: null };
    obj = {
      style: tmp.radioItem,
      options: memo,
      value,
      withDividers: false,
      withSpacing: true,
      disabled: tmp10,
      onChange(value) {
        value = value.value;
        closure_5(value);
        const result = GameConsoleActionCreators.persistSelectedDeviceId(closure_1_0, value);
      },
    };
    const items5 = [closure_12(require("native").RadioGroup, obj)];
    obj1 = { style: tmp.infoBox, children: null };
    const intl = require("util").intl;
    obj1.children = intl.string(require("util").t.dI4HFq);
    items5[1] = closure_12(require("InfoBox"), obj1);
    obj.children = items5;
    let tmp12Result = closure_13(closure_14, obj);
    let tmp12 = closure_12;
    const tmp19 = require("InfoBox");
  } else {
    tmp12 = closure_12;
    tmp12Result = closure_12(EmptyState, {});
  }
  obj2 = { transferring: tmp10, onPress: null };
  let handleTransferVoice;
  if (null != value) {
    handleTransferVoice = function handleTransferVoice() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  }
  const obj3 = { footer: tmp12(TransferFooter, obj2), header: null, scrollable: true, children: null };
  obj2.onPress = handleTransferVoice;
  const obj4 = { title: null, trailing: null };
  const intl2 = require("util").intl;
  obj4.title = intl2.string(require("util").t.aUuz7W);
  let tmp22 = stateFromStores1;
  if (!stateFromStores1) {
    tmp22 = tmp10;
  }
  const obj5 = {
    disabled: tmp22,
    onPress() {
      return GameConsoleActionCreators.fetchDevices(closure_1_0);
    },
    children: null,
  };
  const obj6 = { variant: "text-md/semibold", color: "text-brand", children: null };
  const intl3 = require("util").intl;
  obj6.children = intl3.string(require("util").t.hb12iG);
  obj5.children = tmp12(require("Text/Text").Text, obj6);
  obj4.trailing = tmp12(c6, obj5);
  obj3.header = tmp12(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4);
  const obj7 = { contentContainerStyle: tmp.container, children: null };
  if (stateFromStores1) {
    const obj8 = { style: tmp.loading };
    tmp12Result = tmp12(closure_9, obj8);
  }
  obj7.children = tmp12Result;
  obj3.children = tmp12(require("BottomSheetModal").BottomSheetScrollView, obj7);
  return tmp12(require("Sheet/BottomSheet").BottomSheet, obj3);
}
