// discord_app/modules/game_console/native/GameConsoleDeviceListActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import SafeAreaPaddingView from "../../../components_native/common/SafeAreaView.tsx";
import registerAssetDefault from "../../../../_runtime/09848_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/09849_registerAsset.js";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_10 from "../GameConsoleStore.tsx";
import { ComponentActions } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function TransferFooter(arg0) {
  ({ onPress, transferring } = arg0);
  let obj = { bottom: true, style: callback3().footerContainer, children: null };
  obj = { loading: transferring, disabled: null, onPress: null, text: null, grow: true };
  if (!transferring) {
    transferring = null == onPress;
  }
  obj[1] = transferring;
  obj[2] = onPress;
  const intl = tmp3(1236).intl;
  obj[3] = intl.string(getSystemLocale.t.FYi3ry);
  obj[2] = closure_12(Button.Button, obj);
  return closure_12(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
function DeviceOption(children) {
  const tmp = callback3();
  let obj = { style: tmp.deviceOption, children: null };
  obj = { style: tmp.deviceIcon, source: registerAssetDefault };
  const items = [callback(closure_8, obj), ];
  obj = { style: tmp.deviceText, color: "mobile-text-heading-primary", variant: "text-md/bold", children: children.name };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(closure_7, obj);
}
function EmptyState() {
  const tmp = callback3();
  let obj = { style: tmp.emptyContainer, children: null };
  obj = { source: registerAssetDefault2, style: tmp.emptyArt };
  const items = [callback(closure_8, obj), , ];
  obj = { style: tmp.emptyHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.OkJf1e);
  items[1] = callback(Text.Text, obj);
  obj1 = { style: tmp.emptyBody, variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t["of/l5Z"]);
  items[2] = callback(Text.Text, obj1);
  obj[1] = items;
  return callback2(closure_7, obj);
}
({ Pressable: closure_6, View: error, Image: closure_8, ActivityIndicator: c9 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { container: { padding: 16, justifyContent: "center", paddingBottom: 90 }, loading: { minHeight: 56 }, footerContainer: null, radioItem: null, deviceIcon: null, deviceOption: null, deviceText: null, emptyContainer: null, emptyArt: null, emptyHeader: null, emptyBody: null, infoBox: null };
createCacheKey = { padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, paddingBottom: 16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.xs, padding: 16 };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.xs, padding: 16 };
createCacheKey[4] = { marginRight: 16, width: 32, height: 32, tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", marginRight: 24 };
createCacheKey[6] = { flexShrink: 1 };
createCacheKey[7] = { alignItems: "center", justifyContent: "center" };
createCacheKey[8] = { marginBottom: 16 };
createCacheKey[9] = { marginBottom: 8, textAlign: "center" };
createCacheKey[10] = { textAlign: "center" };
createCacheKey[11] = { marginTop: 8 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginRight: 16, width: 32, height: 32, tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let result = require("set").fileFinishedImporting("modules/game_console/native/GameConsoleDeviceListActionSheet.tsx");

export default function GameConsoleListActionSheet(arg0) {
  ({ platform: require, channel: importDefault } = arg0);
  let stateFromStores;
  let stateFromStores2;
  let first;
  let React;
  c6 = undefined;
  function _handleTransferVoice() {
    const self = this;
    const tmp = stateFromStores2(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp4;
              v0(38)(null != closure_1_4, "selectedDeviceId cannot be null");
              closure_1_6(true);
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(9846).transferToPlaystationWithAlert(closure_1_0, dependencyMap[closure_1_4], v0);
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = v0(4415);
            obj.hideActionSheet();
            const ComponentDispatch = closure_1_0(1231).ComponentDispatch;
            ComponentDispatch.dispatch(closure_1_11.TOGGLE_CALL_CONTROL_DRAWER);
            dependencyMap = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp13) {
          dependencyMap = tmp;
          throw tmp13;
        }
      }
    });
    closure_7 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  let obj = require(stateFromStores[15]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getDevicesForPlatform(closure_0));
  obj1 = require(stateFromStores[15]);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_10.getFetchingDevices(closure_0));
  let obj2 = require(stateFromStores[15]);
  const items2 = [closure_10];
  stateFromStores2 = obj2.useStateFromStores(items2, () => closure_1_10.getLastSelectedDeviceByPlatform(closure_0));
  const tmp7 = first(React.useState(null), 2);
  first = tmp7[0];
  React = tmp7[1];
  [tmp10, c6] = first(React.useState(false), 2);
  const items3 = [stateFromStores, stateFromStores2];
  const effect = React.useEffect(() => {
    const values = Object.values(stateFromStores);
    if (1 === values.length) {
      callback(values[0].id);
    } else if (null != stateFromStores2) {
      callback(tmp);
    }
  }, items3);
  const items4 = [stateFromStores];
  const memo = React.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const values = Object.values(items);
    return values.map((id) => {
      obj = { value: id.id, name: callback(closure_17, obj) };
      obj = { name: id.name, platform: id.platform };
      return obj;
    });
  }, items4);
  if (memo.length > 0) {
    obj = { children: null };
    obj = { style: null, options: null, value: null, withDividers: false, withSpacing: true, disabled: null, onChange: null };
    obj[0] = tmp.radioItem;
    obj[1] = memo;
    obj[2] = first;
    obj[5] = tmp10;
    obj[6] = function onChange(value) {
      value = value.value;
      callback(value);
      const result = closure_1_0(stateFromStores[16]).persistSelectedDeviceId(closure_0, value);
    };
    const items5 = [callback(tmp2(tmp3[21]).RadioGroup, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.infoBox;
    const intl = tmp2(tmp3[11]).intl;
    obj1[1] = intl.string(tmp2(tmp3[11]).t.dI4HFq);
    items5[1] = callback(importDefault(tmp3[22]), obj1);
    obj[0] = items5;
    let tmp12Result = callback2(closure_14, obj);
    let tmp12 = callback;
    const tmp19 = importDefault(tmp3[22]);
  } else {
    tmp12 = callback;
    tmp12Result = callback(EmptyState, {});
  }
  obj2 = { transferring: tmp10, onPress: null };
  let handleTransferVoice;
  if (null != first) {
    handleTransferVoice = function handleTransferVoice() {
      const self = this;
      const apply = _handleTransferVoice.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  }
  const obj3 = { footer: tmp12(TransferFooter, obj2), header: null, scrollable: true, children: null };
  obj2[1] = handleTransferVoice;
  const obj4 = { title: null, trailing: null };
  const intl2 = tmp2(tmp3[11]).intl;
  obj4[0] = intl2.string(require(stateFromStores[11]).t.aUuz7W);
  let tmp22 = stateFromStores1;
  if (!stateFromStores1) {
    tmp22 = tmp10;
  }
  const obj5 = {
    disabled: tmp22,
    onPress() {
      return closure_1_0(stateFromStores[16]).fetchDevices(closure_0);
    },
    children: null
  };
  const obj6 = { variant: "text-md/semibold", color: "text-brand", children: null };
  const intl3 = tmp2(tmp3[11]).intl;
  obj6[2] = intl3.string(require(stateFromStores[11]).t.hb12iG);
  obj5[2] = tmp12(require(stateFromStores[13]).Text, obj6);
  obj4[1] = tmp12(c6, obj5);
  obj3[1] = tmp12(require(stateFromStores[24]).BottomSheetTitleHeader, obj4);
  const obj7 = { contentContainerStyle: tmp.container, children: null };
  if (stateFromStores1) {
    const obj8 = { style: null };
    obj8[0] = tmp.loading;
    tmp12Result = tmp12(closure_9, obj8);
  }
  obj7[1] = tmp12Result;
  obj3[3] = tmp12(require(stateFromStores[25]).BottomSheetScrollView, obj7);
  return tmp12(require(stateFromStores[23]).BottomSheet, obj3);
};