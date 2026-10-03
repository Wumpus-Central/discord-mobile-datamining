// === Module 9456: GameConsoleDeviceListActionSheet ===

// Module 9456 (GameConsoleDeviceListActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9448 */;
import _modDef9457 from "module_9457" /* 9457 */;
import _modDef9458 from "module_9458" /* 9458 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7, Image: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
const ComponentActions = fn(1085).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { padding: 16, justifyContent: "center", paddingBottom: 90 }, loading: { minHeight: 56 }, footerContainer: { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingBottom: 16 }, radioItem: null, deviceIcon: null, deviceOption: null, deviceText: null, emptyContainer: null, emptyArt: null, emptyHeader: null, emptyBody: null, infoBox: null };
let obj3 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingBottom: 16 };
obj2.radioItem = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xs, padding: 16 };
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
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ onPress, transferring } = arg0);
  const tmp4 = closure_15();
  let tmp5 = transferring;
  if (!transferring) {
    tmp5 = null == onPress;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.FYi3ry);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onPress) {
    if (cResult[2] === tmp5) {
      if (cResult[3] === transferring) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === tmp4.footerContainer) {
        if (cResult[6] === tmp9) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
      const obj2 = { bottom: true, style: tmp4.footerContainer, children: tmp9 };
      const tmp13 = __initData(common_SafeAreaView.SafeAreaPaddingView, obj2);
      cResult[5] = tmp4.footerContainer;
      cResult[6] = tmp9;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    }
  }
  const tmp10 = __initData(components_Button_Button.Button, { loading: transferring, disabled: tmp5, onPress, text: first, grow: true });
  cResult[1] = onPress;
  cResult[2] = tmp5;
  cResult[3] = transferring;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
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
  obj.children = __initData(components_Button_Button.Button, obj2);
  return __initData(common_SafeAreaView.SafeAreaPaddingView, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ name, platform } = arg0);
  const tmp4 = closure_15();
  ({ deviceOption, deviceIcon } = tmp4);
  if (cResult[0] !== platform) {
    const tmp7 = _modDef9457;
    cResult[0] = platform;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.deviceIcon) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === name) {
      if (cResult[6] === tmp4.deviceText) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4.deviceOption) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === tmp10) {
            let tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj2 = { style: deviceOption, children: null };
      const items = [tmp8, tmp10];
      obj2.children = items;
      const tmp16 = __initData2(React5, obj2);
      cResult[8] = tmp4.deviceOption;
      cResult[9] = tmp8;
      cResult[10] = tmp10;
      cResult[11] = tmp16;
      tmp13 = tmp16;
    }
    const obj3 = { style: tmp4.deviceText, color: "mobile-text-heading-primary", variant: "text-md/bold", children: name };
    const tmp12 = __initData(Text_Text.Text, obj3);
    cResult[5] = name;
    cResult[6] = tmp4.deviceText;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  const tmp9 = __initData(closure_1_8, { style: deviceIcon, source: tmp5 });
  cResult[2] = tmp4.deviceIcon;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((children) => {
  const tmp = closure_15();
  const obj = { style: tmp.deviceOption, children: null };
  const items = [__initData(closure_1_8, { style: tmp.deviceIcon, source: _modDef9457 }), __initData(Text_Text.Text, { style: tmp.deviceText, color: "mobile-text-heading-primary", variant: "text-md/bold", children: children.name })];
  obj.children = items;
  return __initData2(React5, obj);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(13);
  const tmp4 = closure_15();
  if (cResult[0] !== tmp4.emptyArt) {
    const obj2 = { source: _modDef9458, style: tmp4.emptyArt };
    const tmp9 = __initData(closure_1_8, obj2);
    cResult[0] = tmp4.emptyArt;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.OkJf1e);
    cResult[2] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.emptyHeader) {
    const obj3 = { style: tmp4.emptyHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: tmp10 };
    const tmp14 = __initData(Text_Text.Text, obj3);
    cResult[3] = tmp4.emptyHeader;
    cResult[4] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["of/l5Z"]);
    cResult[5] = stringResult1;
    let tmp15 = stringResult1;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.emptyBody) {
    const obj4 = { style: tmp4.emptyBody, variant: "text-md/normal", color: "text-default", children: tmp15 };
    const tmp19 = __initData(Text_Text.Text, obj4);
    cResult[6] = tmp4.emptyBody;
    cResult[7] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === tmp4.emptyContainer) {
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp12) {
        if (cResult[11] === tmp17) {
          let tmp20 = cResult[12];
        }
        return tmp20;
      }
    }
  }
  const obj5 = { style: tmp4.emptyContainer, children: null };
  const items = [tmp5, tmp12, tmp17];
  obj5.children = items;
  const tmp21 = __initData2(React5, obj5);
  cResult[8] = tmp4.emptyContainer;
  cResult[9] = tmp5;
  cResult[10] = tmp12;
  cResult[11] = tmp17;
  cResult[12] = tmp21;
  tmp20 = tmp21;
}) : (() => {
  const tmp = closure_15();
  const obj = { style: tmp.emptyContainer, children: null };
  const items = [__initData(closure_1_8, { source: _modDef9458, style: tmp.emptyArt }), , ];
  const obj3 = { style: tmp.emptyHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.OkJf1e);
  items[1] = __initData(Text_Text.Text, obj3);
  const obj4 = { style: tmp.emptyBody, variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t["of/l5Z"]);
  items[2] = __initData(Text_Text.Text, obj4);
  obj.children = items;
  return __initData2(React5, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xs, padding: 16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_console/native/GameConsoleDeviceListActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((platform) => {
  const cResult = require("c").c(50);
  platform = platform.platform;
  _require = platform;
  const channel = platform.channel;
  closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== platform) {
    const fn = function h() {
      return GameConsoleStore.getDevicesForPlatform(closure_0);
    };
    cResult[1] = platform;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GameConsoleStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== platform) {
    class P {
      constructor() {
        return closure_10.getFetchingDevices(closure_0);
      }
    }
    cResult[4] = platform;
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        return closure_10.getFetchingDevices(closure_0);
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, P);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return closure_10.getFetchingDevices(closure_0);
      }
    }
    const items2 = [GameConsoleStore];
    cResult[6] = items2;
    const tmp13 = items2;
  } else {
    class P {
      constructor() {
        return closure_10.getFetchingDevices(closure_0);
      }
    }
  }
  if (cResult[7] !== platform) {
    class R {
      constructor() {
        return closure_10.getLastSelectedDeviceByPlatform(closure_0);
      }
    }
    cResult[7] = platform;
    cResult[8] = R;
  } else {
    class R {
      constructor() {
        return closure_10.getLastSelectedDeviceByPlatform(closure_0);
      }
    }
  }
  const tmpResult3 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp13, R);
  const tmp16 = first1(noop.useState(null), 2);
  first1 = tmp16[0];
  noop = tmp16[1];
  let obj5 = noop;
  const tmpResult4 = require("initialize");
  [r10079, closure_6] = first1(noop.useState(false), 2);
  if (cResult[9] === stateFromStores) {
    class R {
      constructor() {
        return closure_10.getLastSelectedDeviceByPlatform(closure_0);
      }
    }
    const effect = obj5.useEffect(H, items3);
    if (cResult[13] !== platform) {
      class R {
        constructor() {
          return closure_10.getLastSelectedDeviceByPlatform(closure_0);
        }
      }
      cResult[13] = platform;
      cResult[14] = tmp21;
    } else {
      class R {
        constructor() {
          return closure_10.getLastSelectedDeviceByPlatform(closure_0);
        }
      }
    }
    if (cResult[15] === channel) {
      class R {
        constructor() {
          return closure_10.getLastSelectedDeviceByPlatform(closure_0);
        }
      }
    }
    _require = stateFromStores2(function*() {
      if (stateFromStores === 2) {
        stateFromStores = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          stateFromStores = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              stateFromStores = 3;
              throw value;
            } else if (arg0 === 2) {
              stateFromStores = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              channel(stateFromStores[19])(null != first1, "selectedDeviceId cannot be null");
              closure_1_6(true);
              c1 = 1;
              stateFromStores = 1;
              const obj4 = { value: tmp4(stateFromStores[20]).transferToPlaystationWithAlert(tmp4, stateFromStores[first1], c1), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            channel(stateFromStores[21]).hideActionSheet();
            const ComponentDispatch = tmp4(stateFromStores[22]).ComponentDispatch;
            ComponentDispatch.dispatch(constants.TOGGLE_CALL_CONTROL_DRAWER);
            stateFromStores = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp13) {
          stateFromStores = tmp;
          throw tmp13;
        }
      }
    });
    function handleTransferVoice() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[15] = channel;
    cResult[16] = stateFromStores;
    cResult[17] = platform;
    cResult[18] = first1;
    cResult[19] = handleTransferVoice;
  }
  class H {
    constructor() {
      values = Object.values(closure_2);
      if (1 === values.length) {
        tmp5 = closure_5;
        tmp6 = closure_5(values[0].id);
      } else {
        tmp2 = null;
        if (null != closure_3) {
          tmp3 = closure_5;
          tmp4 = closure_5(tmp);
        }
      }
      return;
    }
  }
  items3 = [stateFromStores, stateFromStores2];
  cResult[9] = stateFromStores;
  cResult[10] = stateFromStores2;
  cResult[11] = H;
  cResult[12] = items3;
  const tmp18 = first1(noop.useState(false), 2);
}) : ((arg0) => {
  ({ platform: require, channel: importDefault } = arg0);
  let stateFromStores;
  value = undefined;
  noop = undefined;
  c6 = undefined;
  closure_7 = async function _handleTransferVoice2() {
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
        return { value: "IconComponent", done: "IconComponent" };
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
            const obj4 = { value: tmp4(9455).transferToPlaystationWithAlert(_require, stateFromStores[_slicedToArray], importDefault), done: false };
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
          v1(4854).hideActionSheet();
          const ComponentDispatch = tmp4(1121).ComponentDispatch;
          ComponentDispatch.dispatch(constants.TOGGLE_CALL_CONTROL_DRAWER);
          dependencyMap = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp13) {
        dependencyMap = tmp;
        throw tmp13;
      }
    }
  };
  const tmp = closure_15();
  let items = [GameConsoleStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GameConsoleStore.getDevicesForPlatform(_require));
  let obj = require("initialize");
  const items1 = [GameConsoleStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GameConsoleStore.getFetchingDevices(_require));
  let obj2 = require("initialize");
  const items2 = [GameConsoleStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => GameConsoleStore.getLastSelectedDeviceByPlatform(_require));
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
          const result = GameConsoleActionCreators.persistSelectedDeviceId(_require, value);
        }
    };
    const items5 = [closure_12(require("native").RadioGroup, obj5), ];
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
    tmp12Result = closure_12(closure_18, {});
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
  const obj8 = { footer: tmp12(closure_16, obj7), header: null, scrollable: true, children: null };
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
      return GameConsoleActionCreators.fetchDevices(_require);
    },
    children: null
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
});