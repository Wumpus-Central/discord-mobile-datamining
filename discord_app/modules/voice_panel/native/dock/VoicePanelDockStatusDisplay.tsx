// discord_app/modules/voice_panel/native/dock/VoicePanelDockStatusDisplay.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _modDef4125 from "VoicePanelDock.messages.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
function StatusText(status) {
  status = status.status;
  _require = undefined;
  importDefault = undefined;
  const kind = status.kind;
  let stringResult = null;
  if ("channel" !== kind) {
    stringResult = null;
    if ("speaker" !== kind) {
      if ("joined" === kind) {
        const intl3 = require("util").intl;
        stringResult = intl3.string(_modDef4125.f9Cdb5);
      } else if ("left" === kind) {
        const intl2 = require("util").intl;
        stringResult = intl2.string(_modDef4125.aZoM2c);
      } else if ("streaming" === kind) {
        const intl = require("util").intl;
        stringResult = intl.string(_modDef4125.syN59i);
      }
    }
  }
  _require = tmp12;
  const tmp13 = _slicedToArray(noop.useState(status.kind), 2);
  let kind2 = tmp13[0];
  let tmp14 = tmp12;
  if (null != stringResult) {
    tmp14 = status.kind !== kind2;
  }
  if (tmp14) {
    tmp13[1](status.kind);
  }
  if (null != stringResult) {
    kind2 = status.kind;
  }
  let stringResult1 = null;
  if ("channel" !== kind2) {
    stringResult1 = null;
    if ("speaker" !== kind2) {
      if ("joined" === kind2) {
        const intl6 = require("util").intl;
        stringResult1 = intl6.string(_modDef4125.f9Cdb5);
      } else if ("left" === kind2) {
        const intl5 = require("util").intl;
        stringResult1 = intl5.string(_modDef4125.aZoM2c);
      } else if ("streaming" === kind2) {
        const intl4 = require("util").intl;
        stringResult1 = intl4.string(_modDef4125.syN59i);
      }
    }
  }
  const tmp = closure_12();
  let num = 0;
  if (null != stringResult) {
    num = 1;
  }
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  items = [sharedValue, null != stringResult];
  const effect = noop.useEffect(() => {
    if (c0) {
      const tmp2Result = _mod1652;
      let withDelayResult = tmp2Result.withDelay(70, timing_timing.withTiming(1, { duration: 175 }));
    } else {
      withDelayResult = spring_spring.withSpring(0, closure_10);
      const tmp2Result2 = spring_spring;
    }
    const result = _undefined2.set(withDelayResult);
  }, items);
  const obj2 = require("../../../../../_runtime/metro/01652__.js");
  const items1 = [closure_14, sharedValue, closure_11];
  _require = undefined;
  importDefault = undefined;
  [tmp30, tmp31, tmp32] = items1;
  class VoicePanelDockStatusDisplayTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: -closure_0.get() * closure_1 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp31, tmp32];
  VoicePanelDockStatusDisplayTsx1.__closure = items2;
  VoicePanelDockStatusDisplayTsx1.__workletHash = 2314057210930;
  VoicePanelDockStatusDisplayTsx1.__initData = tmp30;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    VoicePanelDockStatusDisplayTsx1,
  );
  const tmp26Result = require("../../../../../_runtime/metro/01652__.js");
  const items3 = [
    closure_15,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    sharedValue,
    0.5,
    require("../../../../../_runtime/metro/01652__.js").Extrapolation,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp34, tmp35, tmp36, tmp37, tmp38] = items3;
  class VoicePanelDockStatusDisplayTsx2 {
    constructor() {
      obj = { opacity: null };
      items = [,];
      items[0] = closure_2;
      items[1] = 1;
      obj.opacity = closure_0(closure_1.get(), items, [0, 1], closure_3.CLAMP);
      return obj;
    }
  }
  const items4 = [tmp35, tmp36, tmp37, tmp38];
  VoicePanelDockStatusDisplayTsx2.__closure = items4;
  VoicePanelDockStatusDisplayTsx2.__workletHash = 6670936502342;
  VoicePanelDockStatusDisplayTsx2.__initData = tmp34;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    VoicePanelDockStatusDisplayTsx2,
  );
  let obj3 = { style: animatedStyle, children: null };
  if (null != status.userId) {
    const obj4 = { userId: status.userId, dimmed: "left" === status.kind };
    let tmp43 = closure_8(tmp26(19520).DockUserTitle, obj4);
    let tmp44 = closure_8;
  } else {
    tmp43 = closure_8(tmp26(19520).DockChannelTitle, {});
    tmp44 = closure_8;
  }
  const items5 = [tmp43];
  let tmp44Result = null != stringResult1;
  if (tmp44Result) {
    const obj5 = { style: null, children: null };
    const items6 = [tmp.subtext, animatedStyle1];
    obj5.style = items6;
    let str4 = "text-voice-connected";
    if ("left" === kind2) {
      str4 = "text-muted";
    }
    const obj6 = { variant: "body-xs/medium", color: str4, lineClamp: 1, children: stringResult1 };
    obj5.children = tmp44(tmp26(5763).Text, obj6);
    tmp44Result = tmp44(_modDef1652.View, obj5);
  }
  items5[1] = tmp44Result;
  obj3.children = items5;
  return closure_9(_modDef1652.View, obj3);
}
function StatusLayer(exit) {
  ({ status, enter } = exit);
  _require = enter;
  exit = exit.exit;
  importDefault = exit;
  state = exit.state;
  dependencyMap = state;
  const cleanUp = exit.cleanUp;
  let _slicedToArray = cleanUp;
  const onExited = exit.onExited;
  noop = onExited;
  c5 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let sharedValue6;
  closure_13 = undefined;
  const tmp = sharedValue6();
  let str = status.userId;
  if (str == null) {
    str = "channel";
  }
  c5 = str;
  let num;
  if (enter != null) {
    num = enter.x;
  }
  if (num == null) {
    num = 0;
  }
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  let obj = require("../../../../../_runtime/metro/01652__.js");
  let num2;
  if (enter != null) {
    num2 = enter.x;
  }
  if (num2 == null) {
    num2 = 0;
  }
  sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num2);
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  let num3;
  if (enter != null) {
    num3 = enter.y;
  }
  if (num3 == null) {
    num3 = 0;
  }
  sharedValue2 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num3);
  const tmp2Result8 = require("../../../../../_runtime/metro/01652__.js");
  let num4;
  if (enter != null) {
    num4 = enter.y;
  }
  if (num4 == null) {
    num4 = 0;
  }
  sharedValue3 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num4);
  const tmp2Result9 = require("../../../../../_runtime/metro/01652__.js");
  let num5 = 1;
  let num6 = 1;
  if (null != enter) {
    num6 = 0;
  }
  sharedValue4 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num6);
  const tmp2Result10 = require("../../../../../_runtime/metro/01652__.js");
  if (null != enter) {
    num5 = 0;
  }
  sharedValue5 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num5);
  const tmp2Result11 = require("../../../../../_runtime/metro/01652__.js");
  let tmp10 = enter;
  if (enter == null) {
    tmp10 = closure_13;
  }
  sharedValue6 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(tmp10.fadeStartProgress);
  let tmp12 = _slicedToArray(noop.useState(null == enter), 2);
  closure_13 = tmp12[1];
  items = [
    cleanUp,
    enter,
    exit,
    sharedValue4,
    sharedValue,
    sharedValue2,
    sharedValue6,
    onExited,
    state,
    str,
    sharedValue5,
    sharedValue1,
    sharedValue3,
  ];
  const effect = noop.useEffect(() => {
    const tmp3 = closure_2 === _undefined(_undefined3[14]).TransitionStates.YEETED;
    if (tmp3) {
      let tmp4 = c1;
    } else {
      tmp4 = _undefined;
      if (_undefined == null) {
        tmp4 = closure_13;
      }
    }
    _undefined = tmp4;
    if (tmp3) {
      const point1 = { x: null, y: null, fade: 0 };
      ({ x: obj2.x, y: obj2.y } = c1);
      let point2 = point1;
    } else {
      point2 = { x: 0, y: 0, fade: 1 };
    }
    c1 = point2;
    point = _undefined;
    let num;
    value = sharedValue.get();
    if (_undefined != null) {
      num = point.x;
    }
    if (num == null) {
      num = 0;
    }
    let tmp9 = value === num;
    if (tmp9) {
      let num2;
      value2 = sharedValue2.get();
      if (point != null) {
        num2 = point.y;
      }
      if (num2 == null) {
        num2 = 0;
      }
      tmp9 = value2 === num2;
    }
    let tmp12 = tmp3;
    if (!tmp3) {
      tmp12 = tmp9;
    }
    function animateView(sharedValue, sharedValue2, sharedValue4, faceLagMs, VoicePanelDockStatusDisplayTsx3) {
      let num = 0;
      if (closure_2) {
        num = _undefined.delayMs + faceLagMs;
      }
      let num2 = 0;
      if (closure_2) {
        num2 = num + _undefined.fadeDelayMs;
      }
      const obj = _mod1652;
      const result = sharedValue.set(obj.withDelay(num, spring_spring.withSpring(_undefined2.x, _undefined.spring)));
      const obj3 = _mod1652;
      const result1 = sharedValue2.set(obj3.withDelay(num, spring_spring.withSpring(_undefined2.y, _undefined.spring)));
      const obj5 = _mod1652;
      const result2 = sharedValue4.set(
        obj5.withDelay(
          num2,
          timing_timing.withTiming(
            _undefined2.fade,
            closure_3,
            "respect-motion-settings",
            VoicePanelDockStatusDisplayTsx3,
          ),
        ),
      );
    }
    closure_2 = tmp12;
    closure_3 = { duration: tmp4.fadeMs, easing: tmp4.fadeEasing };
    let result = sharedValue6.set(tmp4.fadeStartProgress);
    if (tmp3) {
      items = [
        closure_1_17,
        tmp(_undefined3[15]).scheduleOnRN,
        function finishExit() {
          closure_3();
          _undefined5(_undefined6);
        },
      ];
      _undefined = undefined;
      c1 = undefined;
      [tmp31, tmp32, tmp33] = items;
      class VoicePanelDockStatusDisplayTsx3 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp32, tmp33];
      VoicePanelDockStatusDisplayTsx3.__closure = items1;
      VoicePanelDockStatusDisplayTsx3.__workletHash = 4840412944787;
      VoicePanelDockStatusDisplayTsx3.__initData = tmp31;
      const faceLagMs = tmp4.faceLagMs;
      let tmp37;
      if (tmp4.textLagMs < tmp4.faceLagMs) {
        tmp37 = VoicePanelDockStatusDisplayTsx3;
      }
      animateView(sharedValue, sharedValue2, sharedValue4, faceLagMs, tmp37);
      const textLagMs = tmp4.textLagMs;
      let tmp47;
      if (tmp4.textLagMs >= tmp4.faceLagMs) {
        tmp47 = VoicePanelDockStatusDisplayTsx3;
      }
      animateView(sharedValue1, sharedValue3, sharedValue5, textLagMs, tmp47);
    } else {
      const items2 = [closure_1_18, tmp(_undefined3[15]).scheduleOnRN, closure_13];
      _undefined = undefined;
      c1 = undefined;
      class VoicePanelDockStatusDisplayTsx3 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      class VoicePanelDockStatusDisplayTsx4 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1, true);
          }
          return;
        }
      }
      const items3 = [tmp18, tmp19];
      VoicePanelDockStatusDisplayTsx4.__closure = items3;
      VoicePanelDockStatusDisplayTsx4.__workletHash = 16935496833998;
      VoicePanelDockStatusDisplayTsx4.__initData = tmp17;
      animateView(sharedValue, sharedValue2, sharedValue4, tmp4.faceLagMs, VoicePanelDockStatusDisplayTsx4);
      animateView(sharedValue1, sharedValue3, sharedValue5, tmp4.textLagMs);
    }
  }, items);
  const tmp2Result12 = require("../../../../../_runtime/metro/01652__.js");
  let items1 = [
    closure_19,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    sharedValue4,
    sharedValue6,
    require("../../../../../_runtime/metro/01652__.js").Extrapolation,
    sharedValue,
    sharedValue2,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
  class VoicePanelDockStatusDisplayTsx5 {
    constructor() {
      obj = { opacity: null, transform: null };
      value = closure_1.get();
      items = [,];
      items[0] = closure_2.get();
      items[1] = 1;
      obj.opacity = closure_0(value, items, [0, 1], closure_3.CLAMP);
      obj1 = { translateX: closure_4.get() };
      items1 = [,];
      items1[0] = obj1;
      obj4 = { translateY: closure_5.get() };
      items1[1] = obj4;
      obj.transform = items1;
      return obj;
    }
  }
  let items2 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  VoicePanelDockStatusDisplayTsx5.__closure = items2;
  VoicePanelDockStatusDisplayTsx5.__workletHash = 7517298836265;
  VoicePanelDockStatusDisplayTsx5.__initData = tmp14;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    VoicePanelDockStatusDisplayTsx5,
  );
  const tmp2Result13 = require("../../../../../_runtime/metro/01652__.js");
  let items3 = [
    closure_20,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    sharedValue5,
    sharedValue6,
    require("../../../../../_runtime/metro/01652__.js").Extrapolation,
    sharedValue1,
    sharedValue3,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items3;
  class VoicePanelDockStatusDisplayTsx6 {
    constructor() {
      obj = { opacity: null, transform: null };
      value = closure_1.get();
      items = [,];
      items[0] = closure_2.get();
      items[1] = 1;
      obj.opacity = closure_0(value, items, [0, 1], closure_3.CLAMP);
      obj1 = { translateX: closure_4.get() };
      items1 = [,];
      items1[0] = obj1;
      obj4 = { translateY: closure_5.get() };
      items1[1] = obj4;
      obj.transform = items1;
      return obj;
    }
  }
  const items4 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  VoicePanelDockStatusDisplayTsx6.__closure = items4;
  VoicePanelDockStatusDisplayTsx6.__workletHash = 17078561971370;
  VoicePanelDockStatusDisplayTsx6.__initData = tmp22;
  let obj2 = { style: tmp.layer, pointerEvents: "none", children: null };
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    VoicePanelDockStatusDisplayTsx6,
  );
  let obj3 = { style: null, children: null };
  const items5 = [tmp.tile, animatedStyle];
  obj3.style = items5;
  if (null != status.userId) {
    let obj4 = { userId: status.userId, dimmed: "left" === status.kind, entered: tmp12[0] };
    let tmp32Result = tmp32(tmp2(19520).DockFace, obj4);
  } else {
    let obj5 = { streaming: status.streaming };
    tmp32Result = tmp32(tmp2(19520).DockChannelIcon, obj5);
  }
  obj3.children = tmp32Result;
  const items6 = [sharedValue2(_modDef1652.View, obj3)];
  let obj6 = { style: null, children: sharedValue2(StatusText, { status }) };
  const items7 = [tmp.textSlot, animatedStyle1];
  obj6.style = items7;
  items6[1] = sharedValue2(_modDef1652.View, obj6);
  obj2.children = items6;
  return sharedValue3(c5, obj2);
}
function getStatusItemKey(status) {
  let str = status.status.userId;
  if (str == null) {
    str = "channel";
  }
  return str;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const VoicePanelDockStatusStore = fn(19518);
({ useDockHasStreamers: closure_6, useDockSubject: metroImportDefault } = VoicePanelDockStatusStore);
const VoicePanelDockConstants = fn(11437);
({ DOCK_TILE_SIZE, DOCK_GAP } = VoicePanelDockConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const spring = { mass: 0.6, stiffness: 560, damping: 24 };
const lineHeight = fn(5763).TextStyleSheet["body-xs/medium"].lineHeight;
let closure_11 = (lineHeight + 1) / 2;
const sum = fn(5763).TextStyleSheet["body-md/medium"].lineHeight + 1;
const createStyles = fn(5143);
let obj = {
  display: { flexGrow: 1, flexShrink: 1, height: DOCK_TILE_SIZE },
  layer: null,
  tile: null,
  textSlot: null,
  subtext: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flexDirection = "row";
obj3.alignItems = "center";
obj3.gap = DOCK_GAP;
obj.layer = obj3;
obj.tile = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, alignItems: "center", justifyContent: "center" };
obj.textSlot = { flexGrow: 1, flexShrink: 1, alignSelf: "stretch", justifyContent: "center" };
obj.subtext = { position: "absolute", top: sum, left: 0, right: 0, height: lineHeight, justifyContent: "center" };
let closure_12 = createStyles.createStyles(obj);
let point = {
  x: 0,
  y: 0,
  delayMs: 0,
  faceLagMs: 0,
  textLagMs: 0,
  fadeStartProgress: 0.5,
  fadeMs: 120,
  fadeDelayMs: 0,
  fadeEasing: null,
  spring: null,
};
let Easing = fn(1652).Easing;
point.fadeEasing = Easing.inOut(fn(1652).Easing.quad);
point.spring = { mass: 0.5, stiffness: 300, damping: 15 };
let closure_14 = {
  code: "(function VoicePanelDockStatusDisplayTsx1(){let[progress,SUBTEXT_SHIFT]=this.__closure;return{transform:[{translateY:-progress.get()*SUBTEXT_SHIFT}]};})",
};
let closure_15 = {
  code: "(function VoicePanelDockStatusDisplayTsx2(){let[interpolate,progress,SUBTEXT_FADE_START,Extrapolation]=this.__closure;return{opacity:interpolate(progress.get(),[SUBTEXT_FADE_START,1],[0,1],Extrapolation.CLAMP)};})",
};
let closure_17 = {
  code: "(function VoicePanelDockStatusDisplayTsx3(finished){let[scheduleOnRN,finishExit]=this.__closure;if(finished===true){scheduleOnRN(finishExit);}})",
};
let closure_18 = {
  code: "(function VoicePanelDockStatusDisplayTsx4(finished){let[scheduleOnRN,setFaceEntered]=this.__closure;if(finished===true){scheduleOnRN(setFaceEntered,true);}})",
};
let closure_19 = {
  code: "(function VoicePanelDockStatusDisplayTsx5(){let[interpolate,faceFade,fadeStartProgress,Extrapolation,faceX,faceY]=this.__closure;return{opacity:interpolate(faceFade.get(),[fadeStartProgress.get(),1],[0,1],Extrapolation.CLAMP),transform:[{translateX:faceX.get()},{translateY:faceY.get()}]};})",
};
let closure_20 = {
  code: "(function VoicePanelDockStatusDisplayTsx6(){let[interpolate,textFade,fadeStartProgress,Extrapolation,textX,textY]=this.__closure;return{opacity:interpolate(textFade.get(),[fadeStartProgress.get(),1],[0,1],Extrapolation.CLAMP),transform:[{translateX:textX.get()},{translateY:textY.get()}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusDisplay.tsx");

export default noop.memo(function VoicePanelDockStatusDisplay() {
  const channelId = onExited.useContext(first(first1[16])).channelId;
  const tmp3 = closure_7(channelId);
  let str;
  const tmp = closure_12();
  if (tmp3 != null) {
    str = tmp3.kind;
  }
  if (str == null) {
    str = "channel";
  }
  const obj2 = { kind: str, userId: null, streaming: null };
  let userId;
  if (tmp3 != null) {
    userId = tmp3.userId;
  }
  if (userId == null) {
    userId = null;
  }
  obj2.userId = userId;
  obj2.streaming = closure_6(channelId);
  [first] = onExited.useState(() => ({ status: obj2, enter: null }));
  const tmp4 = closure_6(channelId);
  [arr, tmp10] = onExited.useState(() => {
    if ("channel" === obj2.kind) {
      items = [];
    } else {
      let str = tmp.userId;
      if (str == null) {
        str = "channel";
      }
      items = [str];
    }
    return items;
  });
  [first1] = onExited.useState(() => new Map());
  const _slicedToArray = tmp13;
  onExited = obj.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3((arg0) => {
      const map = new Map(arg0);
      map.delete(closure_0);
      return map;
    });
  }, []);
  const status = first.status;
  if (!tmp15) {
    let str2 = first.status.userId;
    if (str2 == null) {
      str2 = "channel";
    }
    let str3 = obj2.userId;
    if (str3 == null) {
      str3 = "channel";
    }
    if (str2 === str3) {
      const obj3 = {};
      const merged = Object.assign(first);
      obj3.status = obj2;
      tmp8(obj3);
    } else {
      let kind = first.status;
      if ("channel" === obj2.kind) {
        const obj4 = { recent: [], down: false };
        let obj8 = obj4;
      } else if ("joined" === obj2.kind) {
        items = [];
        let str8 = obj2.userId;
        if (str8 == null) {
          str8 = "channel";
        }
        const obj5 = { recent: null, down: true };
        items[
          HermesBuiltin.arraySpread(
            arr.filter((item) => {
              let str = obj2.userId;
              if (str == null) {
                str = "channel";
              }
              return item !== str;
            }),
            0,
          )
        ] = str8;
        obj5.recent = items;
        obj8 = obj5;
        const arraySpreadResult = HermesBuiltin.arraySpread(
          arr.filter((item) => {
            let str = obj2.userId;
            if (str == null) {
              str = "channel";
            }
            return item !== str;
          }),
          0,
        );
      } else {
        let num = -1;
        if ("channel" !== kind.kind) {
          let str4 = kind.userId;
          if (str4 == null) {
            str4 = "channel";
          }
          num = arr.indexOf(str4);
        }
        let str5 = obj2.userId;
        if (str5 == null) {
          str5 = "channel";
        }
        const index = arr.indexOf(str5);
        if (-1 === index) {
          if ("left" === obj2.kind) {
            const obj6 = { recent: arr, down: null };
            kind = kind.kind;
            obj6.down = "channel" === kind;
            let obj7 = obj6;
          } else {
            const items1 = [];
            let str7 = obj2.userId;
            if (str7 == null) {
              str7 = "channel";
            }
            obj7 = { recent: null, down: true };
            items1[HermesBuiltin.arraySpread(arr, 0)] = str7;
            obj7.recent = items1;
            const arraySpreadResult2 = HermesBuiltin.arraySpread(arr, 0);
          }
        } else {
          obj8 = { recent: arr, down: index > num };
        }
      }
      let num4 = -12;
      if (obj8.down) {
        num4 = 12;
      }
      if ("joined" === obj2.kind) {
        const obj9 = { enter: null, exit: null };
        const obj10 = {};
        const merged1 = Object.assign(point);
        obj10.x = -24;
        obj10.delayMs = 100;
        obj10.faceLagMs = 80;
        obj10.fadeStartProgress = 0.3333333333333333;
        obj10.spring = spring;
        obj9.enter = obj10;
        const obj11 = {};
        const merged2 = Object.assign(point);
        obj11.y = -num4;
        obj9.exit = obj11;
        let obj15 = obj9;
      } else if ("left" !== first.status.kind) {
        const obj12 = { enter: null, exit: null };
        const obj13 = {};
        const merged3 = Object.assign(point);
        obj13.y = num4;
        obj13.textLagMs = 40;
        obj13.fadeStartProgress = 0;
        obj13.fadeMs = 89.99999999999999;
        obj13.fadeDelayMs = 110.00000000000001;
        obj12.enter = obj13;
        const obj14 = {};
        const merged4 = Object.assign(point);
        obj14.y = -num4;
        obj14.textLagMs = 40;
        obj14.fadeStartProgress = 0;
        obj14.fadeMs = 90;
        const Easing = obj2(tmp2[8]).Easing;
        obj14.fadeEasing = Easing.out(obj2(tmp2[8]).Easing.quad);
        obj12.exit = obj14;
        obj15 = obj12;
      } else {
        obj15 = { enter: null, exit: null };
        const obj16 = {};
        const merged5 = Object.assign(point);
        obj16.y = num4;
        obj16.delayMs = 400;
        obj15.enter = obj16;
        const obj17 = {};
        const merged6 = Object.assign(point);
        obj17.x = -24;
        obj17.textLagMs = 100;
        obj17.spring = { mass: 0.5, damping: 16, stiffness: 200 };
        obj15.exit = obj17;
      }
      ({ enter, exit } = obj15);
      tmp10(obj8.recent);
      const _Map = Map;
      let map = new Map(first1);
      let str11 = first.status.userId;
      if (str11 == null) {
        str11 = "channel";
      }
      tmp13(map.set(str11, exit));
      const obj18 = { status: obj2, enter };
      tmp8(obj18);
    }
  }
  const items2 = [first];
  const items3 = [first1, onExited];
  const memo = obj.useMemo(() => {
    items = [first];
    return items;
  }, items2);
  const obj19 = { style: tmp.display, children: null };
  const callback1 = obj.useCallback((arg0, status, state, cleanUp) => {
    const obj = { status: status.status, enter: status.enter, exit: null, state: null, cleanUp: null, onExited: null };
    value = first1.get(arg0);
    if (value == null) {
      value = point;
    }
    obj.exit = value;
    obj.state = state;
    obj.cleanUp = cleanUp;
    obj.onExited = onExited;
    return React5(StatusLayer, obj, arg0);
  }, items3);
  obj19.children = closure_8(obj2(first1[14]).TransitionGroup, {
    items: memo,
    renderItem: callback1,
    getItemKey: getStatusItemKey,
  });
  return closure_8(closure_5, obj19);
});
