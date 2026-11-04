// discord_app/modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx
import _modDef1652 from "../../../../../../_runtime/metro/01652__.js";
import _modDef15343 from "../../../../../../_runtime/metro/15343__.js";
import _modDef17076 from "../../../../../../_runtime/metro/17076__.js";
import AddFriendsScreenUtils from "AddFriendsScreenUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5141);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row" } });
let closure_8 = {
  code: "(function IncomingRequestRowActionsTsx1(){let[animate,pressed,withTiming]=this.__closure;return{position:'absolute',right:0,flexDirection:'row',opacity:!animate?!pressed.get()?1:0:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};})",
};
let closure_9 = {
  code: "(function IncomingRequestRowActionsTsx2(){let[buttonWidth,buttonOffsetX,pressed,animate,withTiming]=this.__closure;const width=buttonWidth.get();const offset=buttonOffsetX.get();const scaleX=!pressed.get()?0.5:1;const translateX=!pressed.get()?width-offset:0;return{transform:[{translateX:!animate?translateX:withTiming(translateX)},{scaleX:!animate?scaleX:withTiming(scaleX)}],opacity:!animate?!pressed.get()?0:1:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};})",
};
let closure_10 = {
  code: "(function IncomingRequestRowActionsTsx3(){let[waveWidth,waveHeight]=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};})",
};
let closure_11 = {
  code: "(function IncomingRequestRowActionsTsx4(){let[withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight]=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};})",
};
let closure_12 = {
  code: "(function IncomingRequestRowActionsTsx5(){let[pressed]=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx");

export function IncomingRequestRowActions(user) {
  user = user.user;
  _require = user;
  const applicationId = user.applicationId;
  const pressed = user.pressed;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  noop = onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  c4 = onDeclineIncomingRequest;
  const animate = user.animate;
  let sharedValue2;
  ({ acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel } = user);
  const tmp = sharedValue2();
  const sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  c5 = sharedValue;
  let obj = require("../../../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(-1);
  c6 = sharedValue1;
  let obj2 = require("../../../../../../_runtime/metro/01652__.js");
  sharedValue2 = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(-1);
  let obj3 = require("../../../../../../_runtime/metro/01652__.js");
  const sharedValue3 = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(-1);
  let obj4 = require("../../../../../../_runtime/metro/01652__.js");
  items = [sharedValue3, animate, pressed, require("timing/timing").withTiming];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items;
  class IncomingRequestRowActionsTsx1 {
    constructor() {
      if (closure_0) {
        tmp = closure_2;
        tmp2 = closure_1;
        num2 = 1;
        if (closure_1.get()) {
          num2 = 0;
        }
        num = tmp(num2, { duration: 150 });
        obj = tmp2;
      } else {
        obj = closure_1;
        num = 1;
        if (closure_1.get()) {
          num = 0;
        }
      }
      obj1 = { position: "absolute", right: 0, flexDirection: "row", opacity: num, pointerEvents: null };
      str = "auto";
      if (obj.get()) {
        str = "none";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const items1 = [tmp9, tmp10, tmp11];
  IncomingRequestRowActionsTsx1.__closure = items1;
  IncomingRequestRowActionsTsx1.__workletHash = 92597612104;
  IncomingRequestRowActionsTsx1.__initData = tmp8;
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    IncomingRequestRowActionsTsx1,
  );
  const obj5 = require("../../../../../../_runtime/metro/01652__.js");
  const items2 = [closure_9, sharedValue1, sharedValue, pressed, animate, require("timing/timing").withTiming];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class IncomingRequestRowActionsTsx2 {
    constructor() {
      value = closure_0.get();
      obj = closure_2;
      value1 = closure_1.get();
      num = 0.5;
      if (closure_2.get()) {
        num = 1;
      }
      num2 = 0;
      if (!obj.get()) {
        num2 = value - value1;
      }
      tmp3 = closure_3;
      tmp4 = num2;
      if (closure_3) {
        tmp5 = closure_4;
        tmp4 = closure_4(num2);
      }
      items = [,];
      items[0] = { translateX: tmp4 };
      tmp6 = num;
      if (tmp3) {
        tmp7 = closure_4;
        tmp6 = closure_4(num);
      }
      obj1 = { transform: items, opacity: null, pointerEvents: null };
      items[1] = { scaleX: tmp6 };
      if (tmp3) {
        tmp8 = closure_4;
        num4 = 0;
        if (obj.get()) {
          num4 = 1;
        }
        num3 = tmp8(num4);
      } else {
        num3 = 0;
        if (obj.get()) {
          num3 = 1;
        }
      }
      obj1.opacity = num3;
      str = "none";
      if (obj.get()) {
        str = "auto";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18];
  IncomingRequestRowActionsTsx2.__closure = items3;
  IncomingRequestRowActionsTsx2.__workletHash = 2238045380054;
  IncomingRequestRowActionsTsx2.__initData = tmp13;
  const animatedStyle1 = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    IncomingRequestRowActionsTsx2,
  );
  const tmp2Result = require("../../../../../../_runtime/metro/01652__.js");
  const items4 = [closure_10, sharedValue2, sharedValue3];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items4;
  class IncomingRequestRowActionsTsx3 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: closure_0.get() / 2 };
      items = [,];
      items[0] = obj1;
      obj4 = { translateY: closure_1.get() / 2 };
      items[1] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items5 = [tmp21, tmp22];
  IncomingRequestRowActionsTsx3.__closure = items5;
  IncomingRequestRowActionsTsx3.__workletHash = 11012038099485;
  IncomingRequestRowActionsTsx3.__initData = tmp20;
  const animatedStyle2 = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    IncomingRequestRowActionsTsx3,
  );
  const tmp2Result4 = require("../../../../../../_runtime/metro/01652__.js");
  const items6 = [
    closure_11,
    require("../../../../../../_runtime/metro/01652__.js").withDelay,
    require("../../../../../../_runtime/metro/01652__.js").withRepeat,
    require("timing/timing").withTiming,
    pressed,
    require("../../../../../../_runtime/metro/01652__.js").Easing,
    sharedValue2,
    sharedValue3,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items6;
  class IncomingRequestRowActionsTsx4 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      tmp3 = closure_2;
      str = "-2deg";
      if (closure_3.get()) {
        str = "8deg";
      }
      obj = { transform: null };
      obj1 = { rotateZ: null };
      obj6 = { duration: 150, easing: closure_4.inOut(closure_4.quad) };
      obj1.rotateZ = tmp(450, tmp2(tmp3(str, obj6), 4, true));
      items = [, ,];
      items[0] = obj1;
      obj7 = { translateX: -closure_5.get() / 2 };
      items[1] = obj7;
      obj8 = { translateY: -closure_6.get() / 2 };
      items[2] = obj8;
      obj.transform = items;
      return obj;
    }
  }
  const items7 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
  IncomingRequestRowActionsTsx4.__closure = items7;
  IncomingRequestRowActionsTsx4.__workletHash = 16187142860645;
  IncomingRequestRowActionsTsx4.__initData = tmp24;
  const animatedStyle3 = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    IncomingRequestRowActionsTsx4,
  );
  const tmp2Result5 = require("../../../../../../_runtime/metro/01652__.js");
  const items8 = [closure_12, pressed];
  _require = undefined;
  [tmp33, tmp34] = items8;
  class IncomingRequestRowActionsTsx5 {
    constructor() {
      value = closure_0.get();
      return { pointerEvents: "none" };
    }
  }
  const items9 = [tmp34];
  IncomingRequestRowActionsTsx5.__closure = items9;
  IncomingRequestRowActionsTsx5.__workletHash = 13146349595849;
  IncomingRequestRowActionsTsx5.__initData = tmp33;
  const animatedProps = require("../../../../../../_runtime/metro/01652__.js").useAnimatedProps(
    IncomingRequestRowActionsTsx5,
  );
  const items10 = [applicationId, onAcceptIncomingRequest, pressed, user];
  const items11 = [applicationId, onDeclineIncomingRequest, user];
  const callback = noop.useCallback(() => {
    const result = _undefined2.set(true);
    const result1 = AddFriendsScreenUtils.acceptIncomingRequest({ userId: _undefined.id, applicationId });
    _undefined3(_undefined.id, applicationId);
  }, items10);
  const items12 = [user];
  const callback1 = noop.useCallback(() => {
    _undefined4(_undefined.id, applicationId);
    const result = AddFriendsScreenUtils.dismissIncomingRequest({ userId: _undefined.id, applicationId });
  }, items11);
  const obj6 = { style: tmp.container, children: null };
  const callback2 = noop.useCallback(() => {
    AddFriendsScreenUtils.sendWave(_undefined.id, true, "Incoming Friend Request");
  }, items12);
  const obj7 = {
    onLayout: function handleIconButtonsLayout(nativeEvent) {
      const result = _undefined5.set(nativeEvent.nativeEvent.layout.width);
    },
    style: animatedStyle,
    children: null,
  };
  const obj8 = { direction: "horizontal", spacing: 8, children: null };
  const tmp2Result6 = require("../../../../../../_runtime/metro/01652__.js");
  const tmp39 = c6;
  const tmp40 = c4;
  const items13 = [
    c5(require("IconButton").IconButton, {
      size: "sm",
      variant: "tertiary",
      icon: _modDef17076,
      onPress: callback1,
      accessibilityLabel: ignoreRequestAccessibilityLabel,
      maxFontSizeMultiplier: 2,
    }),
  ];
  const obj9 = {
    size: "sm",
    variant: "tertiary",
    icon: _modDef17076,
    onPress: callback1,
    accessibilityLabel: ignoreRequestAccessibilityLabel,
    maxFontSizeMultiplier: 2,
  };
  items13[1] = c5(require("IconButton").IconButton, {
    size: "sm",
    variant: "active",
    icon: _modDef15343,
    onPress: callback,
    accessibilityLabel: acceptRequestAccessibilityLabel,
    maxFontSizeMultiplier: 2,
  });
  obj8.children = items13;
  obj7.children = c6(require("Stack/Stack").Stack, obj8);
  const items14 = [c5(_modDef1652.View, obj7)];
  const obj11 = {
    style: animatedStyle1,
    onLayout: function handleButtonsLayout(nativeEvent) {
      const result = _undefined6.set(nativeEvent.nativeEvent.layout.width);
    },
  };
  const merged = Object.assign(animatedProps);
  const obj12 = { size: "sm", variant: "secondary", text: null, icon: null, onPress: null };
  const intl = tmp2(1113).intl;
  obj12.text = intl.string(require("util").t.n8nU4W);
  let tmp44 = null;
  if (animate) {
    tmp44 = animatedStyle2;
  }
  const obj13 = {
    style: tmp44,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  let tmp45 = null;
  if (animate) {
    tmp45 = animatedStyle3;
  }
  const obj10 = {
    size: "sm",
    variant: "active",
    icon: _modDef15343,
    onPress: callback,
    accessibilityLabel: acceptRequestAccessibilityLabel,
    maxFontSizeMultiplier: 2,
  };
  obj13.children = c5(_modDef1652.View, {
    style: tmp45,
    onLayout: function handleWaveLayout(nativeEvent) {
      const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
      const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
    },
    children: c5(require("Text/Text").Text, {
      maxFontSizeMultiplier: 2,
      variant: "body-sm/normal",
      children: "\u{1F44B}",
    }),
  });
  obj12.icon = c5(_modDef1652.View, obj13);
  obj12.onPress = callback2;
  obj11.children = c5(require("components/Button/Button").Button, obj12);
  items14[1] = c5(_modDef1652.View, obj11);
  obj6.children = items14;
  return tmp39(tmp40, obj6);
}
