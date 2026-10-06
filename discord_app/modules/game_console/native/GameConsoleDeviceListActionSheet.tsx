// === Module 9469: GameConsoleDeviceListActionSheet ===

// Module 9469 (GameConsoleDeviceListActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9461 */;
import AssetRegistryDefault from "AssetRegistry" /* 9470 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9471 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameConsoleStore from "GameConsoleStore" /* 4913 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, c1, c2;

let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let react = react_mod;
({ Pressable: metroRequire, View: metroImportDefault, Image: metroImportAll, ActivityIndicator: c9 } = react_native);
const ComponentActions = Constants.ComponentActions;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16, justifyContent: "center", paddingBottom: 90 }, loading: { minHeight: 56 }, footerContainer: obj2, radioItem: obj3, deviceIcon: size, deviceOption: { flexDirection: "row", alignItems: "center", marginRight: 24 }, deviceText: { flexShrink: 1 }, emptyContainer: { alignItems: "center", justifyContent: "center" }, emptyArt: { marginBottom: 16 }, emptyHeader: { marginBottom: 8, textAlign: "center" }, emptyBody: { textAlign: "center" }, infoBox: { marginTop: 8 } };
obj2 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xs, padding: 16 };
size = { marginRight: 16, width: 32, height: 32, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let onPress;
  let transferring;
  const obj = react2;
  const cResult = obj.c(8);
  ({ onPress, transferring } = arg0);
  const tmp4 = closure_15();
  let tmp5 = transferring;
  const footerContainer = tmp4.footerContainer;
  if (!transferring) {
    tmp5 = null == onPress;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.FYi3ry);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onPress) {
    if (cResult[2] === tmp5) {
      let tmp9;
      if (cResult[3] === transferring) {
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp4.footerContainer) {
        let tmp11;
        if (cResult[6] === tmp9) {
          tmp11 = cResult[7];
        }
        return tmp11;
      }
      const obj2 = { bottom: true, style: footerContainer, children: tmp9 };
      const tmp13 = closure_12(common_SafeAreaView.SafeAreaPaddingView, obj2);
      cResult[5] = tmp4.footerContainer;
      cResult[6] = tmp9;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    }
  }
  const tmp10 = closure_12(components_Button_Button.Button, { loading: transferring, disabled: tmp5, onPress, text: first, grow: true });
  cResult[1] = onPress;
  cResult[2] = tmp5;
  cResult[3] = transferring;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let Button;
  let intl;
  let obj2;
  let onPress;
  let transferring;
  ({ onPress, transferring } = arg0);
  const obj = { bottom: true, style: closure_15().footerContainer, children: closure_12(Button, obj2) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj2 = { loading: transferring, disabled: transferring, onPress, text: intl.string(intl4.t.FYi3ry), grow: true };
  Button = components_Button_Button.Button;
  if (!transferring) {
    transferring = null == onPress;
  }
  intl = intl4.intl;
  return closure_12(SafeAreaPaddingView, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let deviceIcon;
  let deviceOption;
  let items;
  let name;
  let platform;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(12);
  ({ name, platform } = arg0);
  const tmp4 = closure_15();
  ({ deviceOption, deviceIcon } = tmp4);
  if (cResult[0] !== platform) {
    const tmp7 = AssetRegistryDefault;
    cResult[0] = platform;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.deviceIcon) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === name) {
      let tmp10;
      if (cResult[6] === tmp4.deviceText) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4.deviceOption) {
        if (cResult[9] === tmp8) {
          let tmp13;
          if (cResult[10] === tmp10) {
            tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj2 = { style: deviceOption, children: items };
      items = [tmp8, tmp10];
      const tmp16 = map1(metroImportDefault, obj2);
      cResult[8] = tmp4.deviceOption;
      cResult[9] = tmp8;
      cResult[10] = tmp10;
      cResult[11] = tmp16;
      tmp13 = tmp16;
    }
    const obj3 = { style: tmp4.deviceText, color: "mobile-text-heading-primary", variant: "text-md/bold", children: name };
    const tmp12 = closure_12(Text_Text.Text, obj3);
    cResult[5] = name;
    cResult[6] = tmp4.deviceText;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  const tmp9 = closure_12(metroImportAll, { style: deviceIcon, source: tmp5 });
  cResult[2] = tmp4.deviceIcon;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((name) => {
  let items;
  name = name.name;
  const tmp = closure_15();
  const obj = { style: tmp.deviceOption, children: items };
  items = [, ];
  const obj2 = { style: tmp.deviceIcon, source: AssetRegistryDefault };
  items[0] = closure_12(metroImportAll, obj2);
  const obj3 = { style: tmp.deviceText, color: "mobile-text-heading-primary", variant: "text-md/bold", children: name };
  items[1] = closure_12(Text_Text.Text, obj3);
  return map1(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(13);
  const tmp4 = closure_15();
  const emptyContainer = tmp4.emptyContainer;
  if (cResult[0] !== tmp4.emptyArt) {
    const obj2 = { source: AssetRegistryDefault2, style: tmp4.emptyArt };
    const tmp9 = closure_12(metroImportAll, obj2);
    cResult[0] = tmp4.emptyArt;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  const emptyHeader = tmp4.emptyHeader;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.OkJf1e);
    cResult[2] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.emptyHeader) {
    const obj3 = { style: emptyHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: tmp10 };
    const tmp14 = closure_12(Text_Text.Text, obj3);
    cResult[3] = tmp4.emptyHeader;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  const emptyBody = tmp4.emptyBody;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t["of/l5Z"]);
    cResult[5] = stringResult1;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.emptyBody) {
    const obj4 = { style: emptyBody, variant: "text-md/normal", color: "text-default", children: tmp15 };
    const tmp19 = closure_12(Text_Text.Text, obj4);
    cResult[6] = tmp4.emptyBody;
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === tmp4.emptyContainer) {
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp12) {
        let tmp20;
        if (cResult[11] === tmp17) {
          tmp20 = cResult[12];
        }
        return tmp20;
      }
    }
  }
  const obj5 = { style: emptyContainer, children: items };
  items = [tmp5, tmp12, tmp17];
  const tmp21 = map1(metroImportDefault, obj5);
  cResult[8] = tmp4.emptyContainer;
  cResult[9] = tmp5;
  cResult[10] = tmp12;
  cResult[11] = tmp17;
  cResult[12] = tmp21;
  tmp20 = tmp21;
}) : (() => {
  let intl;
  let intl2;
  let items;
  const tmp = closure_15();
  const obj = { style: tmp.emptyContainer, children: items };
  items = [, , ];
  const obj2 = { source: AssetRegistryDefault2, style: tmp.emptyArt };
  items[0] = closure_12(metroImportAll, obj2);
  const obj3 = { style: tmp.emptyHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.OkJf1e) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = closure_12(Text, obj3);
  const obj4 = { style: tmp.emptyBody, variant: "text-md/normal", color: "text-default", children: intl2.string(intl4.t["of/l5Z"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = closure_12(Text2, obj4);
  return map1(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((platform) => {
  let closure_5;
  let closure_6;
  let closure_7;
  let first;
  let first1;
  let items3;
  let stateFromStores;
  let tmp13;
  let tmp21;
  let tmp7;
  let tmp9;
  const tmp = platform;
  const tmp2 = stateFromStores;
  let obj = platform(stateFromStores[10]);
  const cResult = obj.c(50);
  platform = platform.platform;
  const channel = platform.channel;
  closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== platform) {
    const fn = function h() {
      return GameConsoleStore.getDevicesForPlatform(platform);
    };
    cResult[1] = platform;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[17]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GameConsoleStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== platform) {
    class P {
      constructor() {
        return GameConsoleStore.getFetchingDevices(platform);
      }
    }
    cResult[4] = platform;
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        return GameConsoleStore.getFetchingDevices(platform);
      }
    }
  }
  const tmpResult3 = tmp(tmp2[17]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, P);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return GameConsoleStore.getFetchingDevices(platform);
      }
    }
    const items2 = [GameConsoleStore];
    cResult[6] = items2;
    tmp13 = items2;
  } else {
    class P {
      constructor() {
        return GameConsoleStore.getFetchingDevices(platform);
      }
    }
  }
  if (cResult[7] !== platform) {
    class R {
      constructor() {
        return GameConsoleStore.getLastSelectedDeviceByPlatform(platform);
      }
    }
    cResult[7] = platform;
    cResult[8] = R;
  } else {
    class R {
      constructor() {
        return GameConsoleStore.getLastSelectedDeviceByPlatform(platform);
      }
    }
  }
  const tmpResult4 = tmp(tmp2[17]);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, R);
  let obj5 = react;
  const tmp16 = first1(react.useState(null), 2);
  first1 = tmp16[0];
  react = tmp16[1];
  [r10079, closure_6] = first1(react.useState(false), 2);
  first1(react.useState(false), 2);
  if (cResult[9] === stateFromStores) {
    let tmp20;
    class R {
      constructor() {
        return GameConsoleStore.getLastSelectedDeviceByPlatform(platform);
      }
    }
    const effect = obj5.useEffect(H, items3);
    if (cResult[13] !== platform) {
      class R {
        constructor() {
          return GameConsoleStore.getLastSelectedDeviceByPlatform(platform);
        }
      }
      cResult[13] = platform;
      cResult[14] = tmp21;
      tmp20 = tmp21;
    } else {
      class R {
        constructor() {
          return GameConsoleStore.getLastSelectedDeviceByPlatform(platform);
        }
      }
    }
    tmp21 = tmp20;
    if (cResult[15] === channel) {
      class R {
        constructor() {
          return GameConsoleStore.getLastSelectedDeviceByPlatform(platform);
        }
      }
    }
    let closure_0 = stateFromStores2(function*() {
      let obj6;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              channel(stateFromStores[19])(null != first1, "selectedDeviceId cannot be null");
              closure_1_6(true);
              const tmp24 = c2[first1];
              c1 = 1;
              c2 = 1;
              const obj4 = { value: obj6.transferToPlaystationWithAlert(tmp3, tmp24, c1), done: false };
              obj6 = tmp3(stateFromStores[20]);
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj = channel(stateFromStores[21]);
            obj.hideActionSheet();
            const ComponentDispatch = tmp3(stateFromStores[22]).ComponentDispatch;
            ComponentDispatch.dispatch(constants.TOGGLE_CALL_CONTROL_DRAWER);
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c2 = 3;
          throw tmp12;
        }
      }
    });
    function handleTransferVoice() {
      return closure_0(...arguments);
    }
    cResult[15] = channel;
    cResult[16] = stateFromStores;
    cResult[17] = platform;
    cResult[18] = first1;
    cResult[19] = handleTransferVoice;
  }
  class H {
    constructor() {
      const values = Object.values(stateFromStores);
      if (1 === values.length) {
        closure_5(values[0].id);
      } else if (null != stateFromStores2) {
        closure_5(tmp);
      }
    }
  }
  items3 = [stateFromStores, stateFromStores2];
  cResult[9] = stateFromStores;
  cResult[10] = stateFromStores2;
  cResult[11] = H;
  cResult[12] = items3;
}) : ((arg0) => {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let Text;
  let _undefined;
  let c6;
  let closure_5;
  let handleTransferVoice;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let obj10;
  let obj11;
  let obj12;
  let obj9;
  let tmp10;
  let tmp12;
  let tmp12Result;
  let tmp21;
  ({ platform: require, channel: importDefault } = arg0);
  let stateFromStores;
  let value;
  react = undefined;
  c6 = undefined;
  let obj = function _handleTransferVoice2() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              v1(c2[19])(null != _slicedToArray, "selectedDeviceId cannot be null");
              _undefined(true);
              const tmp24 = stateFromStores[_slicedToArray];
              v1 = 1;
              const obj6 = tmp3(c2[20]);
              c2 = 1;
              const obj4 = { value: obj6.transferToPlaystationWithAlert(require, tmp24, importDefault), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            obj = v1(c2[21]);
            obj.hideActionSheet();
            const ComponentDispatch = tmp3(c2[22]).ComponentDispatch;
            ComponentDispatch.dispatch(constants.TOGGLE_CALL_CONTROL_DRAWER);
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c2 = 3;
          throw tmp12;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_15();
  const tmp3 = stateFromStores;
  obj = require("get initialized");
  let items = [GameConsoleStore];
  stateFromStores = obj.useStateFromStores(items, () => GameConsoleStore.getDevicesForPlatform(require));
  let obj2 = require("get initialized");
  const items1 = [GameConsoleStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GameConsoleStore.getFetchingDevices(require));
  let obj3 = require("get initialized");
  const items2 = [GameConsoleStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => GameConsoleStore.getLastSelectedDeviceByPlatform(require));
  const tmp7 = value(react.useState(null), 2);
  value = tmp7[0];
  react = tmp7[1];
  [tmp10, c6] = value(react.useState(false), 2);
  const items3 = [stateFromStores, stateFromStores2];
  const tmp9 = value(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const values = Object.values(stateFromStores);
    if (1 === values.length) {
      closure_5(values[0].id);
    } else if (null != stateFromStores2) {
      closure_5(tmp);
    }
  }, items3);
  const items4 = [stateFromStores];
  const memo = react.useMemo(() => {
    let items = stateFromStores;
    const _Object = Object;
    if (stateFromStores == null) {
      items = [];
    }
    const values2 = values(items);
    return values2.map((id) => {
      obj = { value: id.id, name: closure_1_12(closure_1_17, obj2) };
      return obj;
    });
  }, items4);
  if (memo.length > 0) {
    let obj4 = { children: items5 };
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
          obj = GameConsoleActionCreators;
          const result = obj.persistSelectedDeviceId(require, value);
        }
    };
    items5 = [closure_12(require("native").RadioGroup, obj5), ];
    let obj6 = { style: tmp.infoBox, children: intl.string(require("intl").t.dI4HFq) };
    const tmp19 = require("InfoBox");
    intl = require("intl").intl;
    items5[1] = closure_12(tmp19, obj6);
    tmp12Result = closure_13(closure_14, obj4);
    tmp12 = closure_12;
  } else {
    tmp12 = closure_12;
    tmp12Result = closure_12(closure_18, {});
  }
  const obj7 = { transferring: tmp10, onPress: handleTransferVoice };
  handleTransferVoice = undefined;
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  if (null != value) {
    handleTransferVoice = function handleTransferVoice() {
      return obj(...arguments);
    };
  }
  const obj8 = { footer: tmp12(closure_16, obj7), header: tmp12(BottomSheetTitleHeader, obj9), scrollable: true, children: tmp12(BottomSheetScrollView, obj12) };
  obj9 = { title: intl2.string(require("intl").t.aUuz7W), trailing: tmp12(tmp21, obj10) };
  BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl2 = require("intl").intl;
  let tmp22 = stateFromStores1;
  tmp21 = c6;
  if (!stateFromStores1) {
    tmp22 = tmp10;
  }
  obj10 = {
    disabled: tmp22,
    onPress() {
      obj = GameConsoleActionCreators;
      return obj.fetchDevices(require);
    },
    children: tmp12(Text, obj11)
  };
  obj11 = { variant: "text-md/semibold", color: "text-brand", children: intl3.string(require("intl").t.hb12iG) };
  Text = require("Text/Text").Text;
  intl3 = require("intl").intl;
  obj12 = { contentContainerStyle: tmp.container, children: tmp12Result };
  BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  if (stateFromStores1) {
    const obj13 = { style: tmp.loading };
    tmp12Result = tmp12(closure_9, obj13);
  }
  return tmp12(BottomSheet, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_console/native/GameConsoleDeviceListActionSheet.tsx");

export default tmp5;