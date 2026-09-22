// discord_app/modules/game_console/native/GameConsoleDeviceListActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import GameConsoleActionCreators from "../GameConsoleActionCreators.tsx";
import _modDef10059 from "../../../../_runtime/metro/10059__.js";
import _modDef10060 from "../../../../_runtime/metro/10060__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../GameConsoleStore.tsx";

const require = globalThis.__r;

require = fn;
function TransferFooter(arg0) {
  ({ onPress, transferring } = arg0);
  const obj = { bottom: true, style: closure_15().footerContainer, children: null };
  const obj2 = { loading: transferring, disabled: null, onPress: null, text: null, grow: true };
  if (!transferring) {
    transferring = null == onPress;
  }
  obj2.disabled = transferring;
  obj2.onPress = onPress;
  const intl = util.intl;
  obj2.text = intl.string(util.t.FYi3ry);
  obj.children = closure_1_12(components_Button_Button.Button, obj2);
  return closure_1_12(common_SafeAreaView.SafeAreaPaddingView, obj);
}
function DeviceOption(children) {
  const tmp = closure_15();
  const obj = { style: tmp.deviceOption, children: null };
  const items = [
    closure_1_12(React6, { style: tmp.deviceIcon, source: _modDef10059 }),
    closure_1_12(Text_Text.Text, {
      style: tmp.deviceText,
      color: "mobile-text-heading-primary",
      variant: "text-md/bold",
      children: children.name,
    }),
  ];
  obj.children = items;
  return map1(React5, obj);
}
function EmptyState() {
  const tmp = closure_15();
  const obj = { style: tmp.emptyContainer, children: null };
  const items = [closure_1_12(React6, { source: _modDef10060, style: tmp.emptyArt }), ,];
  const obj3 = {
    style: tmp.emptyHeader,
    variant: "heading-md/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj3.children = intl.string(util.t.OkJf1e);
  items[1] = closure_1_12(Text_Text.Text, obj3);
  const obj4 = { style: tmp.emptyBody, variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t["of/l5Z"]);
  items[2] = closure_1_12(Text_Text.Text, obj4);
  obj.children = items;
  return map1(React5, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7, Image: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
const ComponentActions = fn(1074).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { padding: 16, justifyContent: "center", paddingBottom: 90 },
  loading: { minHeight: 56 },
  footerContainer: { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingBottom: 16 },
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
let obj3 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingBottom: 16 };
obj2.radioItem = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xs,
  padding: 16,
};
let size = { marginRight: 16, width: 32, height: 32, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.deviceIcon = size;
obj2.deviceOption = { flexDirection: "row", alignItems: "center", marginRight: 24 };
obj2.deviceText = { flexShrink: 1 };
obj2.emptyContainer = { alignItems: "center", justifyContent: "center" };
obj2.emptyArt = { marginBottom: 16 };
obj2.emptyHeader = { marginBottom: 8, textAlign: "center" };
obj2.emptyBody = { textAlign: "center" };
obj2.infoBox = { marginTop: 8 };
let closure_15 = createStyles.createStyles(obj2);
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            v1(38)(null != _slicedToArray, "selectedDeviceId cannot be null");
            timestampProducer(true);
            v1 = 1;
            dependencyMap = 1;
            const obj4 = {
              value: tmp4(10057).transferToPlaystationWithAlert(
                require,
                stateFromStores[_slicedToArray],
                importDefault,
              ),
              done: false,
            };
            return obj4;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          v1(4724).hideActionSheet();
          const ComponentDispatch = tmp4(1110).ComponentDispatch;
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
  let items = [GameConsoleStore];
  stateFromStores = require("initialize").useStateFromStores(items, () =>
    GameConsoleStore.getDevicesForPlatform(require),
  );
  let obj = require("initialize");
  const items1 = [GameConsoleStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
    GameConsoleStore.getFetchingDevices(require),
  );
  let obj2 = require("initialize");
  const items2 = [GameConsoleStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () =>
    GameConsoleStore.getLastSelectedDeviceByPlatform(require),
  );
  const tmp7 = value(noop.useState(null), 2);
  value = tmp7[0];
  noop = tmp7[1];
  let obj3 = require("initialize");
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
      const obj = { value: id.id, name: closure_1_12(closure_1_17, { name: id.name, platform: id.platform }) };
      return obj;
    });
  }, items4);
  if (memo.length > 0) {
    let obj4 = { children: null };
    let obj5 = {
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
    const items5 = [closure_12(require("native").RadioGroup, obj5)];
    const obj6 = { style: tmp.infoBox, children: null };
    const intl = require("util").intl;
    obj6.children = intl.string(require("util").t.dI4HFq);
    items5[1] = closure_12(require("InfoBox"), obj6);
    obj4.children = items5;
    let tmp12Result = closure_13(closure_14, obj4);
    let tmp12 = closure_12;
    const tmp19 = require("InfoBox");
  } else {
    tmp12 = closure_12;
    tmp12Result = closure_12(EmptyState, {});
  }
  const obj7 = { transferring: tmp10, onPress: null };
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
  const obj8 = { footer: tmp12(TransferFooter, obj7), header: null, scrollable: true, children: null };
  obj7.onPress = handleTransferVoice;
  const obj9 = { title: null, trailing: null };
  const intl2 = require("util").intl;
  obj9.title = intl2.string(require("util").t.aUuz7W);
  let tmp22 = stateFromStores1;
  if (!stateFromStores1) {
    tmp22 = tmp10;
  }
  const obj10 = {
    disabled: tmp22,
    onPress() {
      return GameConsoleActionCreators.fetchDevices(closure_1_0);
    },
    children: null,
  };
  const obj11 = { variant: "text-md/semibold", color: "text-brand", children: null };
  const intl3 = require("util").intl;
  obj11.children = intl3.string(require("util").t.hb12iG);
  obj10.children = tmp12(require("Text/Text").Text, obj11);
  obj9.trailing = tmp12(c6, obj10);
  obj8.header = tmp12(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj9);
  const obj12 = { contentContainerStyle: tmp.container, children: null };
  if (stateFromStores1) {
    const obj13 = { style: tmp.loading };
    tmp12Result = tmp12(closure_9, obj13);
  }
  obj12.children = tmp12Result;
  obj8.children = tmp12(require("BottomSheetModal").BottomSheetScrollView, obj12);
  return tmp12(require("Sheet/BottomSheet").BottomSheet, obj8);
}
