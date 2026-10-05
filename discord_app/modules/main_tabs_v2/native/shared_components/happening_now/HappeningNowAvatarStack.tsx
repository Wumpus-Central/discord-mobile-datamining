// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import ClipView from "../../../../../design/components/Icon/native/ClipView.tsx";
import ChannelAnimationConstants from "../guild_channels/ChannelAnimationConstants.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import LocaleStore_mod from "../../../../user_settings/LocaleStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ClipViewDefault = ClipView;
let dependencyMap, set;

let c9;
let metroImportAll;
let View = react_native.View;
let LocaleStore = LocaleStore_mod;
const CHANNEL_SPRING_CONFIG = ChannelAnimationConstants.CHANNEL_SPRING_CONFIG;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let SPRING_CONFIG = { damping: 17, stiffness: 320, mass: 0.5 };
let closure_11 = createStyles.createStyles((arg0, marginLeft) => {
  let obj4;
  const obj = {
    avatarStack: { flexDirection: "row" },
    stageAvatarStack: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
      borderRadius: 24,
      paddingLeft: 4,
      paddingRight: 4,
      paddingVertical: 4,
    },
    avatarBubbles: { display: "flex", flexDirection: "row" },
    avatars: { display: "flex", flexDirection: "row" },
    shiftedAvatar: { marginLeft: -marginLeft },
    userCounter: {
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: -marginLeft,
      height: native.AVATAR_SIZE_MAP[arg0],
      minWidth: native.AVATAR_SIZE_MAP[arg0],
      borderRadius: 10,
      paddingHorizontal: 4,
      paddingTop: 1,
    },
    ellipsisWrapper: obj4,
    ellipsisBorder: { borderColor: nativeDefault.colors.CARD_SECONDARY_BG },
  };
  ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderRadius: 24,
    paddingLeft: 4,
    paddingRight: 4,
    paddingVertical: 4,
  });
  obj4 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
    marginLeft: -4 - marginLeft,
  };
  ({
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -marginLeft,
    height: native.AVATAR_SIZE_MAP[arg0],
    minWidth: native.AVATAR_SIZE_MAP[arg0],
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingTop: 1,
  });
  ({ borderColor: nativeDefault.colors.CARD_SECONDARY_BG });
  return obj;
});
const __initData = {
  code: "function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}",
};
let closure_13 = {
  code: "function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished){return;}runOnJS(setRenderComponents)(isTyping);}",
};
let closure_14 = {
  code: "function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}",
};
const __initData2 = {
  code: "function HappeningNowAvatarStackTsx4(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}",
};
let closure_16 = {
  code: "function HappeningNowAvatarStackTsx5(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}",
};
const __initData3 = {
  code: "function HappeningNowAvatarStackTsx6(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let avatarBorderWidth;
      let avatarOverlap;
      let avatarSize;
      let closure_6;
      let guildId;
      let isStage;
      let isTyping;
      let setRenderComponents;
      let style;
      let tmp11;
      let tmp12;
      let tmp6;
      let tmp8;
      let userCount;
      let userLimit;
      let users;
      let tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(64);
      ({ users, guildId } = arg0);
      ({ isTyping, userLimit, userCount, isStage } = arg0);
      ({ avatarSize, avatarBorderWidth, avatarOverlap, style } = arg0);
      const tmp4 = undefined !== isTyping && isTyping;
      dependencyMap = tmp4;
      let num = 3;
      if (undefined !== userLimit) {
        num = userLimit;
      }
      if (undefined === avatarSize) {
        avatarSize = tmp(1188).AvatarSizes.XSMALL_20;
      }
      let num2 = 2;
      if (undefined !== avatarBorderWidth) {
        num2 = avatarBorderWidth;
      }
      let num3 = 4;
      if (undefined !== avatarOverlap) {
        num3 = avatarOverlap;
      }
      const tmp5 = closure_11(avatarSize, num3);
      LocaleStore = tmp5;
      if (cResult[0] !== tmp4) {
        let fn = function f() {
          return isTyping;
        };
        cResult[0] = tmp4;
        let num5 = 1;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      let obj2 = num2;
      [tmp8, CHANNEL_SPRING_CONFIG] = avatarSize(num2.useState(tmp6), 2);
      let num6 = 0;
      const tmp7 = avatarSize(num2.useState(tmp6), 2);
      const useSharedValue = tmp(4612).useSharedValue;
      tmp(4612);
      if (tmp4) {
        num6 = 1;
      }
      const sharedValue = useSharedValue(num6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp13 = LocaleStore;
        let items = [LocaleStore];
        class M {
          constructor() {
            return closure_6.locale;
          }
        }
        cResult[2] = items;
        cResult[3] = M;
        tmp12 = M;
        tmp11 = items;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      const tmpResult3 = tmp(573);
      const stateFromStores = tmpResult3.useStateFromStores(tmp11, tmp12);
      const tmpResult4 = tmp(4612);
      class J {
        constructor() {
          let obj2;
          let obj3;
          const obj = {
            opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]),
            width: obj3.interpolate(sharedValue.get(), [0, 1], [0, 28]),
          };
          obj2 = ReanimatedRexport;
          obj3 = ReanimatedRexport;
          return obj;
        }
      }
      let obj3 = { interpolate: tmp(4612).interpolate, typingValue: sharedValue, ELLIPSIS_WIDTH: 28 };
      J.__closure = obj3;
      J.__workletHash = 14140918847743;
      J.__initData = __initData;
      const animatedStyle = tmpResult4.useAnimatedStyle(J);
      if (cResult[4] === tmp4) {
        let tmp16;
        let tmp17;
        if (cResult[5] === sharedValue) {
          tmp16 = cResult[6];
          tmp17 = cResult[7];
        }
        const effect = obj2.useEffect(tmp17, tmp16);
        if (!tmp8) {
          tmp8 = tmp4;
        }
        class M {
          constructor() {
            return closure_6.locale;
          }
        }
        const substr = users.slice(0, num);
        let length = userCount;
        if (userCount == null) {
          length = users.length;
        }
        let diff = length - substr.length;
        let closure_9 = diff;
        closure_11 = !isStage && diff > 0;
        const mapped = substr.map((user, index) => {
          let items;
          let tmp2Result;
          diff = substr.length - 1;
          const obj = { user, guildId, size: avatarSize };
          const tmp6 = metroImportAll(native.Avatar, obj);
          let shiftedAvatar;
          if (0 !== index) {
            shiftedAvatar = closure_6.shiftedAvatar;
          }
          const obj2 = { style: shiftedAvatar, children: tmp2Result };
          if (index !== diff) {
            const obj3 = { cutouts: items, children: tmp6 };
            const point = {
              shape: ClipView.CutoutShape.Circle,
              x: native.AVATAR_SIZE_MAP[avatarSize] - num3 - num2,
              y: -num2,
              size: native.AVATAR_SIZE_MAP[avatarSize] + 2 * num2,
            };
            items = [point];
            const tmp13 = ClipViewDefault;
            tmp2Result = metroImportAll(tmp13, obj3);
          } else {
            tmp2Result = tmp6;
          }
          return metroImportAll(View, obj2, user.id);
        });
        cResult[8] = num2;
        cResult[9] = num3;
        cResult[10] = avatarSize;
        cResult[11] = guildId;
        cResult[12] = isStage;
        cResult[13] = tmp5.shiftedAvatar;
        cResult[14] = userCount;
        cResult[15] = num;
        cResult[16] = users;
        cResult[17] = diff;
        cResult[18] = mapped;
        cResult[19] = length;
      }
      const fn2 = function j() {
        let num = 0;
        set = sharedValue.set;
        const withSpring = spring.withSpring;
        spring;
        if (isTyping) {
          num = 1;
        }
        const fn = function t(arg0) {
          const tmp = arg0;
          if (tmp) {
            const obj = guildId(closure_2[11]);
            obj.runOnJS(setRenderComponents)(closure_1_2);
          }
        };
        let obj = { runOnJS: ReanimatedRexport.runOnJS, setRenderComponents: CHANNEL_SPRING_CONFIG, isTyping };
        fn.__closure = obj;
        fn.__workletHash = 4812035752027;
        fn.__initData = __initData;
        const result = set(withSpring(num, CHANNEL_SPRING_CONFIG, "respect-motion-settings", fn));
      };
      const items1 = [tmp4, sharedValue];
      cResult[4] = tmp4;
      cResult[5] = sharedValue;
      cResult[6] = items1;
      cResult[7] = fn2;
      tmp17 = fn2;
      tmp16 = items1;
    }
  : (userLimit) => {
      let Text;
      let c10;
      let c7;
      let guildId;
      let isStage;
      let isTyping;
      let items10;
      let items3;
      let items6;
      let items7;
      let items8;
      let obj10;
      let obj12;
      let require;
      let setRenderComponents;
      let tmp19Result2;
      let tmp21;
      let tmp5;
      let tmp6Result7;
      let userCount;
      let users;
      ({ users, guildId: require, isTyping } = userLimit);
      if (isTyping === undefined) {
        isTyping = false;
      }
      let num = userLimit.userLimit;
      if (num === undefined) {
        num = 3;
      }
      ({ userCount, isStage } = userLimit);
      let XSMALL_20 = userLimit.avatarSize;
      if (XSMALL_20 === undefined) {
        XSMALL_20 = require("native").AvatarSizes.XSMALL_20;
      }
      let num2 = userLimit.avatarBorderWidth;
      if (num2 === undefined) {
        num2 = 2;
      }
      let num3 = userLimit.avatarOverlap;
      if (num3 === undefined) {
        num3 = 4;
      }
      const style = userLimit.style;
      c7 = undefined;
      let sharedValue;
      let substr;
      SPRING_CONFIG = undefined;
      let mapped;
      const tmp3 = mapped(XSMALL_20, num3);
      let closure_6 = tmp3;
      let obj = num2;
      const tmp4 = XSMALL_20(
        num2.useState(() => isTyping),
        2,
      );
      [tmp5, c7] = tmp4;
      let num4 = 0;
      const useSharedValue = require("ReanimatedRexport").useSharedValue;
      require("ReanimatedRexport");
      if (isTyping) {
        num4 = 1;
      }
      sharedValue = useSharedValue(num4);
      let items = [closure_6];
      const tmp6Result = require("useStateFromStores");
      const stateFromStores = tmp6Result.useStateFromStores(items, () => closure_6.locale);
      const tmp6Result5 = require("ReanimatedRexport");
      class C {
        constructor() {
          let obj2;
          let obj3;
          const obj = {
            opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]),
            width: obj3.interpolate(sharedValue.get(), [0, 1], [0, 28]),
          };
          obj2 = ReanimatedRexport;
          obj3 = ReanimatedRexport;
          return obj;
        }
      }
      let obj2 = {
        interpolate: require("ReanimatedRexport").interpolate,
        typingValue: sharedValue,
        ELLIPSIS_WIDTH: 28,
      };
      C.__closure = obj2;
      C.__workletHash = 16391129142042;
      C.__initData = __initData2;
      const items1 = [isTyping, sharedValue];
      const animatedStyle = tmp6Result5.useAnimatedStyle(C);
      const effect = obj.useEffect(() => {
        let num = 0;
        set = sharedValue.set;
        const withSpring = spring.withSpring;
        spring;
        if (isTyping) {
          num = 1;
        }
        const fn = function t(arg0) {
          const tmp = arg0;
          if (tmp) {
            const obj = require("ReanimatedRexport");
            obj.runOnJS(setRenderComponents)(isTyping);
          }
        };
        let obj = { runOnJS: ReanimatedRexport.runOnJS, setRenderComponents, isTyping };
        fn.__closure = obj;
        fn.__workletHash = 12044980828058;
        fn.__initData = __initData;
        const result = set(withSpring(num, CHANNEL_SPRING_CONFIG, "respect-motion-settings", fn));
      }, items1);
      substr = users.slice(0, num);
      if (userCount == null) {
        userCount = users.length;
      }
      let diff = userCount - substr.length;
      SPRING_CONFIG = diff;
      mapped = substr.map((user, index) => {
        let items;
        let tmp2Result;
        const diff = substr.length - 1;
        const obj = { user, guildId: require, size: XSMALL_20 };
        const tmp6 = metroImportAll(native.Avatar, obj);
        let shiftedAvatar;
        if (0 !== index) {
          shiftedAvatar = closure_6.shiftedAvatar;
        }
        const obj2 = { style: shiftedAvatar, children: tmp2Result };
        if (index !== diff) {
          const obj3 = { cutouts: items, children: tmp6 };
          const point = {
            shape: ClipView.CutoutShape.Circle,
            x: native.AVATAR_SIZE_MAP[XSMALL_20] - num3 - num2,
            y: -num2,
            size: native.AVATAR_SIZE_MAP[XSMALL_20] + 2 * num2,
          };
          items = [point];
          const tmp14 = ClipViewDefault;
          tmp2Result = metroImportAll(tmp14, obj3);
        } else {
          tmp2Result = tmp6;
          if (!isStage) {
            tmp2Result = tmp6;
          }
        }
        return metroImportAll(View, obj2, user.id);
      });
      const tmp6Result6 = require("ReanimatedRexport");
      class H {
        constructor() {
          let num4;
          let obj2;
          let num = 0;
          const length = mapped.length;
          if (!isStage) {
            num = 0;
            if (c10 > 0) {
              num = 1;
            }
          }
          const sum = length + num;
          num2 = 0;
          if (sum > 0) {
            num2 = sum * native.AVATAR_SIZE_MAP[XSMALL_20] - (sum - 1) * num3;
          }
          const obj = { width: obj2.withSpring(num2, SPRING_CONFIG), marginRight: num4 };
          num4 = 4;
          obj2 = spring;
          if (0 === sum) {
            num4 = 0;
          }
          return obj;
        }
      }
      let obj3 = {
        isStage,
        extraUsers: diff,
        avatars: mapped,
        AVATAR_SIZE_MAP: require("native").AVATAR_SIZE_MAP,
        avatarSize: XSMALL_20,
        avatarOverlap: num3,
        withSpring: require("spring").withSpring,
        SPRING_CONFIG,
      };
      H.__closure = obj3;
      H.__workletHash = 9687356498740;
      H.__initData = __initData3;
      const animatedStyle1 = tmp6Result6.useAnimatedStyle(H);
      const obj4 = { style: null, children: null };
      if (isStage) {
        const items2 = [tmp3.stageAvatarStack, style];
        obj4.style = items2;
        const obj5 = { style: items3, children: mapped };
        items3 = [tmp3.avatars, animatedStyle1];
        const items4 = [sharedValue(isTyping(isStage[11]).View, obj5)];
        const obj6 = {
          color: "text-default",
          variant: "text-xs/semibold",
          children: tmp6Result7.humanizeValue(userCount, stateFromStores),
        };
        const Text2 = require("Text/Text").Text;
        tmp6Result7 = require("NumberUtils");
        items4[1] = sharedValue(Text2, obj6);
        obj4.children = items4;
        tmp21 = obj4;
      } else {
        const items5 = [tmp3.avatarStack, style];
        obj4.style = items5;
        const obj7 = { style: items6, children: items7 };
        items6 = [tmp3.avatarBubbles, animatedStyle1];
        const obj8 = { style: tmp3.avatars, children: mapped };
        View = isTyping(isStage[11]).View;
        items7 = [sharedValue(num3, obj8)];
        let tmp19Result = null;
        const tmp18 = isTyping;
        if (diff > 0) {
          const obj9 = { style: tmp3.userCounter, children: substr(Text, obj10) };
          obj10 = { color: "text-default", variant: "text-xxs/semibold", allowFontScaling: false, children: items8 };
          Text = require("Text/Text").Text;
          items8 = ["+"];
          const tmp6Result8 = require("NumberUtils");
          items8[1] = tmp6Result8.humanizeValue(diff, stateFromStores);
          tmp19Result = tmp19(tmp17, obj9);
        }
        items7[1] = tmp19Result;
        const items9 = [substr(View, obj7)];
        if (!tmp19Result2) {
          tmp19Result2 = isTyping;
        }
        if (tmp19Result2) {
          const obj11 = {
            style: items10,
            children: sharedValue(require("typing_indicators/TypingIndicator").TypingIndicator, obj12),
          };
          items10 = [tmp3.ellipsisWrapper, animatedStyle];
          const View2 = tmp18(isStage[11]).View;
          obj12 = { style: tmp3.ellipsisBorder };
          tmp19Result2 = tmp19(View2, obj11);
        }
        items9[1] = tmp19Result2;
        obj4.children = items9;
        tmp21 = obj4;
      }
      return substr(num3, tmp21);
    };
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx",
);

export const HappeningNowAvatarStack = tmp3;
