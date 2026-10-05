// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import CustomTypingIndicatorTypes from "../CustomTypingIndicatorTypes.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import EmojiAngryFaceWithHornsIcon from "../../../design/components/Icon/native/redesign/generated/EmojiAngryFaceWithHornsIcon.tsx";
import EmojiColdFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiColdFaceIcon.tsx";
import EmojiCowboyHatFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiCowboyHatFaceIcon.tsx";
import EmojiCryingFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiCryingFaceIcon.tsx";
import EmojiDisguisedFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiDisguisedFaceIcon.tsx";
import EmojiFaceVomitingIcon from "../../../design/components/Icon/native/redesign/generated/EmojiFaceVomitingIcon.tsx";
import EmojiFaceWithMonocleIcon from "../../../design/components/Icon/native/redesign/generated/EmojiFaceWithMonocleIcon.tsx";
import EmojiFaceWithSpiralEyesIcon from "../../../design/components/Icon/native/redesign/generated/EmojiFaceWithSpiralEyesIcon.tsx";
import EmojiMeltingFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiMeltingFaceIcon.tsx";
import EmojiMoneyMouthFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiMoneyMouthFaceIcon.tsx";
import EmojiNerdFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiNerdFaceIcon.tsx";
import EmojiPartyingFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiPartyingFaceIcon.tsx";
import EmojiSalutingFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiSalutingFaceIcon.tsx";
import EmojiSkullIcon from "../../../design/components/Icon/native/redesign/generated/EmojiSkullIcon.tsx";
import EmojiSmilingFaceWithHornsIcon from "../../../design/components/Icon/native/redesign/generated/EmojiSmilingFaceWithHornsIcon.tsx";
import EmojiSmilingFaceWithSunglassesIcon from "../../../design/components/Icon/native/redesign/generated/EmojiSmilingFaceWithSunglassesIcon.tsx";
import EmojiSquintingFaceWithTongueIcon from "../../../design/components/Icon/native/redesign/generated/EmojiSquintingFaceWithTongueIcon.tsx";
import EmojiUpsideDownFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiUpsideDownFaceIcon.tsx";
import EmojiWoozyFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiWoozyFaceIcon.tsx";
import EmojiZanyFaceIcon from "../../../design/components/Icon/native/redesign/generated/EmojiZanyFaceIcon.tsx";
import EmojiRollingOnTheFloorLaughingIcon from "../../../design/components/Icon/native/redesign/generated/EmojiRollingOnTheFloorLaughingIcon.tsx";
import EmojiSmilingFaceWithHeartsIcon from "../../../design/components/Icon/native/redesign/generated/EmojiSmilingFaceWithHeartsIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let dependencyMap, emojis;

const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let c7 = 28;
let c8 = 0.4;
let c9 = 1.14;
let items = [
  EmojiAngryFaceWithHornsIcon.EmojiAngryFaceWithHornsIcon,
  EmojiColdFaceIcon.EmojiColdFaceIcon,
  EmojiCowboyHatFaceIcon.EmojiCowboyHatFaceIcon,
  EmojiCryingFaceIcon.EmojiCryingFaceIcon,
  EmojiDisguisedFaceIcon.EmojiDisguisedFaceIcon,
  EmojiFaceVomitingIcon.EmojiFaceVomitingIcon,
  EmojiFaceWithMonocleIcon.EmojiFaceWithMonocleIcon,
  EmojiFaceWithSpiralEyesIcon.EmojiFaceWithSpiralEyesIcon,
  EmojiMeltingFaceIcon.EmojiMeltingFaceIcon,
  EmojiMoneyMouthFaceIcon.EmojiMoneyMouthFaceIcon,
  EmojiNerdFaceIcon.EmojiNerdFaceIcon,
  EmojiPartyingFaceIcon.EmojiPartyingFaceIcon,
  EmojiSalutingFaceIcon.EmojiSalutingFaceIcon,
  EmojiSkullIcon.EmojiSkullIcon,
  EmojiSmilingFaceWithHornsIcon.EmojiSmilingFaceWithHornsIcon,
  EmojiSmilingFaceWithSunglassesIcon.EmojiSmilingFaceWithSunglassesIcon,
  EmojiSquintingFaceWithTongueIcon.EmojiSquintingFaceWithTongueIcon,
  EmojiUpsideDownFaceIcon.EmojiUpsideDownFaceIcon,
  EmojiWoozyFaceIcon.EmojiWoozyFaceIcon,
  EmojiZanyFaceIcon.EmojiZanyFaceIcon,
  EmojiRollingOnTheFloorLaughingIcon.EmojiRollingOnTheFloorLaughingIcon,
  EmojiSmilingFaceWithHeartsIcon.EmojiSmilingFaceWithHeartsIcon,
];
let closure_11 = createStyles.createStyles({
  slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emoji) => {
      let animated;
      const obj = react2;
      const cResult = obj.c(8);
      emoji = emoji.emoji;
      if (cResult[0] === emoji.animated) {
        let tmp3;
        let tmp10;
        let tmp9;
        if (cResult[1] === emoji.id) {
          tmp3 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          size = { width: v28, height: v28 };
          const obj3 = { fontSize: v28, lineHeight: 32 };
          cResult[3] = size;
          cResult[4] = obj3;
          tmp10 = obj3;
          tmp9 = size;
        } else {
          tmp9 = cResult[3];
          tmp10 = cResult[4];
        }
        if (cResult[5] === emoji.name) {
          let tmp12;
          if (cResult[6] === tmp3) {
            tmp12 = cResult[7];
          }
          return tmp12;
        }
        const tmp15 = jsx(EmojiDefault, { name: emoji.name, src: tmp3, fastImageStyle: tmp9, textEmojiStyle: tmp10 });
        cResult[5] = emoji.name;
        cResult[6] = tmp3;
        cResult[7] = tmp15;
        tmp12 = tmp15;
      }
      let emojiURL;
      if (null != emoji.id) {
        const obj5 = { id: null, animated, size: v28 };
        ({ id: obj2.id, animated } = emoji);
        const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
        AvatarUtilsDefault;
        if (animated == null) {
          animated = false;
        }
        emojiURL = getEmojiURL(obj5);
      }
      cResult[0] = emoji.animated;
      cResult[1] = emoji.id;
      cResult[2] = emojiURL;
      tmp3 = emojiURL;
    }
  : (emoji) => {
      let animated;
      emoji = emoji.emoji;
      let emojiURL;
      EmojiDefault;
      if (null != emoji.id) {
        const obj3 = { id: null, animated, size: v28 };
        ({ id: obj2.id, animated } = emoji);
        const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
        AvatarUtilsDefault;
        if (animated == null) {
          animated = false;
        }
        emojiURL = getEmojiURL(obj3);
      }
      size = { width: v28, height: v28 };
      return (
        <tmp4
          name={emoji.name}
          src={emojiURL}
          fastImageStyle={size}
          textEmojiStyle={{ fontSize: v28, lineHeight: 32 }}
        />
      );
    };
const __initData = {
  code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}",
};
const __initData2 = {
  code: "function CustomTypingIndicatorEmojiSlotsTsx2(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Icon;
      let first;
      let pressed;
      let tmp6;
      let obj = pressed(576);
      const cResult = obj.c(6);
      ({ Icon, pressed } = arg0);
      let obj2 = pressed(4612);
      const fn = function t() {
        let interpolateResult;
        let interpolateResult1;
        let items2;
        let withSpring;
        let withSpring2;
        const value = pressed.get();
        const obj = { opacity: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING), transform: items2 };
        withSpring = spring.withSpring;
        spring;
        items = [c8, 1];
        const obj2 = ReanimatedRexport;
        interpolateResult = obj2.interpolate(value, [0, 1], items);
        const obj3 = { scale: withSpring2(interpolateResult1, springPresets.ON_PRESS_SPRING) };
        withSpring2 = spring.withSpring;
        spring;
        const items1 = [1, c9];
        const obj4 = ReanimatedRexport;
        items2 = [obj3];
        interpolateResult1 = obj4.interpolate(value, [0, 1], items1);
        return obj;
      };
      let obj3 = {
        pressed,
        withSpring: pressed(5597).withSpring,
        interpolate: pressed(4612).interpolate,
        PLACEHOLDER_EMOJI_RESTING_OPACITY,
        ON_PRESS_SPRING: pressed(5598).ON_PRESS_SPRING,
        PLACEHOLDER_EMOJI_ACTIVE_SCALE,
      };
      fn.__closure = obj3;
      fn.__workletHash = 16574219123934;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        size = { width: v28, height: v28 };
        cResult[0] = size;
        first = size;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== Icon) {
        const tmp8 = <Icon size="custom" style={first} />;
        cResult[1] = Icon;
        cResult[2] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === animatedStyle) {
        let tmp9;
        if (cResult[4] === tmp6) {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
      const tmp10 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: tmp6 });
      cResult[3] = animatedStyle;
      cResult[4] = tmp6;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (pressed) => {
      pressed = pressed.pressed;
      const Icon = pressed.Icon;
      let obj = pressed(4612);
      const fn = function o() {
        let interpolateResult;
        let interpolateResult1;
        let items2;
        let withSpring;
        let withSpring2;
        const value = pressed.get();
        const obj = { opacity: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING), transform: items2 };
        withSpring = spring.withSpring;
        spring;
        items = [c8, 1];
        const obj2 = ReanimatedRexport;
        interpolateResult = obj2.interpolate(value, [0, 1], items);
        const obj3 = { scale: withSpring2(interpolateResult1, springPresets.ON_PRESS_SPRING) };
        withSpring2 = spring.withSpring;
        spring;
        const items1 = [1, c9];
        const obj4 = ReanimatedRexport;
        items2 = [obj3];
        interpolateResult1 = obj4.interpolate(value, [0, 1], items1);
        return obj;
      };
      let obj2 = {
        pressed,
        withSpring: pressed(5597).withSpring,
        interpolate: pressed(4612).interpolate,
        PLACEHOLDER_EMOJI_RESTING_OPACITY,
        ON_PRESS_SPRING: pressed(5598).ON_PRESS_SPRING,
        PLACEHOLDER_EMOJI_ACTIVE_SCALE,
      };
      fn.__closure = obj2;
      fn.__workletHash = 4597331743997;
      fn.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(fn);
      let obj4 = { size: "custom", style: size };
      size = { width: v28, height: v28 };
      const View = ReanimatedRexportDefault.View;
      return <View style={animatedStyle}>{null}</View>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (index) => {
      let emoji;
      let onChange;
      let placeholderIcon;
      let sharedValue;
      let obj = index(sharedValue[28]);
      const cResult = obj.c(21);
      index = index.index;
      ({ emoji, placeholderIcon, onChange } = index);
      closure_11();
      let obj2 = index(sharedValue[31]);
      sharedValue = obj2.useSharedValue(0);
      if (cResult[0] === index) {
        let formatToPlainString2Result;
        if (cResult[3] !== sharedValue) {
          const fn2 = function p() {
            return sharedValue.set(1);
          };
          cResult[3] = sharedValue;
          cResult[4] = fn2;
        }
        if (cResult[5] !== sharedValue) {
          class T {
            constructor() {
              return sharedValue.set(0);
            }
          }
          cResult[5] = sharedValue;
          cResult[6] = T;
        } else {
          class T {
            constructor() {
              return sharedValue.set(0);
            }
          }
        }
        if (cResult[7] === emoji) {
          let tmp20;
          class T {
            constructor() {
              return sharedValue.set(0);
            }
          }
          if (cResult[10] === emoji) {
            class T {
              constructor() {
                return sharedValue.set(0);
              }
            }
          }
          if (null != emoji) {
            class T {
              constructor() {
                return sharedValue.set(0);
              }
            }
            tmp20 = <closure_12 emoji={emoji} />;
          } else {
            class T {
              constructor() {
                return sharedValue.set(0);
              }
            }
            tmp20 = <closure_15 Icon={placeholderIcon} pressed={sharedValue} />;
          }
          cResult[10] = emoji;
          cResult[11] = placeholderIcon;
          cResult[12] = sharedValue;
          cResult[13] = tmp20;
        }
        if (null != emoji) {
          class T {
            constructor() {
              return sharedValue.set(0);
            }
          }
          const formatToPlainString2 = tmp14.formatToPlainString;
          const obj5 = {
            slot: index + 1,
            total: index(sharedValue[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT,
            emojiName: emoji.name,
          };
          const prop = onChange(tmp2[36])["lEsZ+N"];
          formatToPlainString2Result = formatToPlainString2(prop, obj5);
        } else {
          class T {
            constructor() {
              return sharedValue.set(0);
            }
          }
          const formatToPlainString = tmp11.formatToPlainString;
          const obj6 = { slot: index + 1, total: index(sharedValue[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
          const O0Pe85 = onChange(tmp2[36]).O0Pe85;
          formatToPlainString2Result = formatToPlainString(O0Pe85, obj6);
        }
        cResult[7] = emoji;
        cResult[8] = index;
        cResult[9] = formatToPlainString2Result;
      }
      const fn = function t() {
        let obj = openEmojiPickerActionSheet;
        const obj2 = {
          onPressEmoji(id) {
            let str2;
            id = id.id;
            const obj = { id, name: null, animated: null };
            if (null == id.id) {
              if (null != id.optionallyDiverseSequence) {
                if ("" !== id.optionallyDiverseSequence) {
                  str2 = id.optionallyDiverseSequence;
                }
                obj.name = str2;
                obj.animated = id.animated;
                return onChange(index, obj);
              }
            }
            str2 = id.name;
            if (str2 == null) {
              str2 = "";
            }
          },
          pickerIntention: EmojiIntention.TYPING_INDICATOR,
          bypassPremiumEmojiEntitlement: true,
        };
        const result = obj.openEmojiPickerActionSheet(obj2);
      };
      cResult[0] = index;
      cResult[1] = onChange;
      cResult[2] = fn;
    }
  : (index) => {
      let emoji;
      let formatToPlainString2Result;
      let onChange;
      let tmp12Result;
      index = index.index;
      ({ emoji, onChange } = index);
      let sharedValue;
      const placeholderIcon = index.placeholderIcon;
      const tmp = closure_11();
      let obj = index(sharedValue[31]);
      sharedValue = obj.useSharedValue(0);
      items = [index, onChange];
      const items1 = [sharedValue];
      const callback = react.useCallback(() => {
        let obj = openEmojiPickerActionSheet;
        const obj2 = {
          onPressEmoji(id) {
            let str2;
            id = id.id;
            const obj = { id, name: null, animated: null };
            if (null == id.id) {
              if (null != id.optionallyDiverseSequence) {
                if ("" !== id.optionallyDiverseSequence) {
                  str2 = id.optionallyDiverseSequence;
                }
                obj.name = str2;
                obj.animated = id.animated;
                return onChange(index, obj);
              }
            }
            str2 = id.name;
            if (str2 == null) {
              str2 = "";
            }
          },
          pickerIntention: EmojiIntention.TYPING_INDICATOR,
          bypassPremiumEmojiEntitlement: true,
        };
        const result = obj.openEmojiPickerActionSheet(obj2);
      }, items);
      const items2 = [sharedValue];
      const callback1 = react.useCallback(() => sharedValue.set(1), items1);
      const callback2 = react.useCallback(() => sharedValue.set(0), items2);
      if (null != emoji) {
        const intl2 = tmp2(tmp3[35]).intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        let obj2 = {
          slot: index + 1,
          total: index(sharedValue[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT,
          emojiName: emoji.name,
        };
        const prop = onChange(tmp3[36])["lEsZ+N"];
        formatToPlainString2Result = formatToPlainString2(prop, obj2);
      } else {
        const intl = tmp2(tmp3[35]).intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj3 = { slot: index + 1, total: index(sharedValue[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
        const O0Pe85 = onChange(tmp3[36]).O0Pe85;
        formatToPlainString2Result = formatToPlainString(O0Pe85, obj3);
      }
      const Card = tmp2(tmp3[38]).Card;
      if (null != emoji) {
        tmp12Result = <closure_12 emoji={emoji} />;
      } else {
        tmp12Result = <closure_15 Icon={placeholderIcon} pressed={sharedValue} />;
      }
      return (
        <Card
          style={tmp.slot}
          onPress={callback}
          onPressIn={callback1}
          onPressOut={callback2}
          accessibilityLabel={formatToPlainString2Result}
          radius={16}
        >
          {tmp12Result}
        </Card>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojis) => {
      let first;
      let first1;
      let obj = emojis(first1[28]);
      const cResult = obj.c(5);
      emojis = emojis.emojis;
      const onChange = emojis.onChange;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          const obj = emojis(first1[39]);
          return obj.sampleSize(items, emojis(first1[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      first1 = _slicedToArray(react.useState(first), 1)[0];
      if (cResult[1] === emojis) {
        if (cResult[2] === onChange) {
          let tmp6;
          if (cResult[3] === first1) {
            tmp6 = cResult[4];
          }
          return tmp6;
        }
      }
      const obj3 = { length: emojis(first1[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
      const Stack = tmp(tmp2[40]).Stack;
      const tmp7 = (
        <Stack direction="horizontal" spacing={8}>
          {from(obj3, (arg0, index) => {
            let tmp3 = emojis[index];
            if (tmp3 == null) {
              tmp3 = null;
            }
            return (
              <closure_16 key={index} index={index} emoji={tmp3} placeholderIcon={first1[index]} onChange={onChange} />
            );
          })}
        </Stack>
      );
      cResult[1] = emojis;
      cResult[2] = onChange;
      cResult[3] = first1;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : (arg0) => {
      let closure_2;
      let onChange;
      ({ emojis: require, onChange: importDefault } = arg0);
      dependencyMap = _slicedToArray(
        react.useState(() => {
          const obj = require("../../../../_runtime/metro/00012__.js");
          return obj.sampleSize(items, require("CustomTypingIndicatorTypes").CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
        }),
        1,
      )[0];
      const obj2 = { length: CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
      const Stack = Stack_Stack.Stack;
      return (
        <Stack direction="horizontal" spacing={8}>
          {from(obj2, (arg0, index) => {
            let tmp3 = require[index];
            if (tmp3 == null) {
              tmp3 = null;
            }
            return (
              <closure_16
                key={index}
                index={index}
                emoji={tmp3}
                placeholderIcon={closure_2[index]}
                onChange={importDefault}
              />
            );
          })}
        </Stack>
      );
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default tmp2;
