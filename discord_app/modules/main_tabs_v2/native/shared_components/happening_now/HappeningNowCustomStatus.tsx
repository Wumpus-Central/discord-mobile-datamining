// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActivityEmojiDefault from "../../../../activity_status/native/ActivityEmoji.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const HappeningNowConstants = fn(14843);
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
const STATUS_CUTOUT_SMALL = HappeningNowConstants.STATUS_CUTOUT_SMALL;
const StatusTypes = fn(1085).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let c15 = 16;
let c16 = 32;
const rect = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: -3, transform: null };
let items = [{ rotate: "24deg" }];
rect.transform = items;
let items1 = [rect, , , , ,];
const rect1 = {
  left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3,
  top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2,
  transform: null,
};
let items2 = [{ rotate: "-12deg" }];
rect1.transform = items2;
items1[1] = rect1;
const rect2 = {
  left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3,
  top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2,
  transform: null,
};
let items3 = [{ rotate: "12deg" }];
rect2.transform = items3;
items1[2] = rect2;
const rect3 = {
  left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2,
  top: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3,
  transform: null,
};
let items4 = [{ rotate: "-24deg" }];
rect3.transform = items4;
items1[3] = rect3;
const rect4 = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: null };
let items5 = [{ rotate: "12deg" }];
rect4.transform = items5;
items1[4] = rect4;
const rect5 = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: null };
let items6 = [{ rotate: "-12deg" }];
rect5.transform = items6;
items1[5] = rect5;
const createStyles = fn(4836);
let closure_18 = createStyles.createStyles((arg0) => {
  const obj = {
    customStatusContainer: { flexShrink: 1, flexDirection: "row", alignItems: "center" },
    customStatusContextContainer: { flexShrink: 1, flexDirection: "column", marginLeft: 12, gap: 2 },
    statusAvatar: { marginBottom: 2 },
    largeEmoji: null,
    smallEmoji: null,
    cardContainer: null,
    emojisContainer: null,
  };
  const size = { width: v32, height: v32, borderRadius: 2, overflow: "hidden" };
  obj.largeEmoji = size;
  const size1 = { position: "absolute", width: v16, height: v16, borderRadius: 2, opacity: 0.6 };
  obj.smallEmoji = size1;
  let num;
  if (arg0) {
    num = 12;
  }
  obj.cardContainer = { justifyContent: "center", paddingLeft: num };
  const size2 = {
    width: HAPPENING_NOW_CONTENT_HEIGHT,
    height: HAPPENING_NOW_CONTENT_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: nativeDefault.radii.sm,
    overflow: "hidden",
  };
  obj.emojisContainer = size2;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx",
);

export const CustomStatusActivityCard = function CustomStatusActivityCard(user) {
  user = user.user;
  ({ guildId, activity } = user);
  ({ userTitle, panelVariant } = user);
  ({ fullwidth, onPress } = user);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  c3 = undefined;
  let source;
  noop = undefined;
  const tmp = closure_18(null == activity.emoji);
  dependencyMap = tmp;
  let num = 2;
  [tmp3, c3] = source(noop.useState(undefined), 2);
  const tmp4 = source(noop.useState(undefined), 2);
  source = tmp4[0];
  noop = tmp4[1];
  const tmp2 = source(noop.useState(undefined), 2);
  let items = [PresenceStore];
  const stateFromStoresObject = user(563).useStateFromStoresObject(items, () => {
    const status = PresenceStore.getStatus(user.id);
    let tmp3 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp3 = status;
    }
    return {
      status: tmp3,
      isMobileOnline: PresenceStore.isMobileOnline(user.id),
      isVROnline: PresenceStore.isVROnline(user.id),
    };
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  let obj = user(563);
  let obj2 = { userId: user.id, guildId };
  let tmp10 = activity(5084)({ userId: user.id, guildId });
  const displayNameStylesFont = user(9188).useDisplayNameStylesFont({ displayNameStyles: tmp10 });
  items1 = [activity.emoji];
  const effect = noop.useEffect(() => {
    closure_0 = async function _loadEmoji() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c1 = 0;
              closure_0 = tmp4;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              if (null != c1.emoji) {
                c2 = 1;
                v3 = 1;
                const obj5 = { value: user(15712).getEmojiSource(c1.emoji), done: false };
                return obj5;
              } else {
                v3 = 3;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_128_0 = value;
              const obj8 = { emoji: c1.emoji, emojiSource: closure_128_0 };
              c2 = 2;
              v3 = 1;
              const obj9 = { value: user(15713).getEmojiDominantColors(obj8), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_1 = value;
            if (closure_128_1.length > 0) {
              closure_128_2 = closure_128_1[0];
              const _HermesInternal = HermesInternal;
              v3("rgba(" + closure_128_2[0] + ", " + closure_128_2[1] + ", " + closure_128_2[2] + ", 0.16)");
            }
            closure_1_5(closure_128_0);
          }
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp28) {
          v3 = tmp;
          throw tmp28;
        }
      }
    };
    !(function loadEmoji() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items1);
  if (null != activity.emoji) {
    num = 1;
  }
  let obj3 = user(9188);
  const gameMentionsAsPlainText = user(10339).useGameMentionsAsPlainText(activity.state);
  const items2 = [userTitle, ,];
  const tmp6Result = user(10339);
  items2[1] = user(9060).getStatusLabel(status);
  items2[2] = gameMentionsAsPlainText;
  const joined = items2.join(", ");
  let obj4 = { onPress, width: null, style: null, accessibilityLabel: null, panelVariant: null, children: null };
  let str = "stretchy";
  const tmp6Result3 = user(9060);
  if (fullwidth) {
    str = "full";
  }
  obj4.width = str;
  obj4.style = tmp.cardContainer;
  obj4.accessibilityLabel = joined;
  obj4.panelVariant = panelVariant;
  let obj5 = { style: tmp.customStatusContainer, children: null };
  if (null != activity.emoji) {
    const obj6 = { style: null, children: null };
    const items3 = [tmp.emojisContainer];
    let obj7 = { backgroundColor: tmp3 };
    items3[1] = obj7;
    obj6.style = items3;
    if (tmp6Result4.isAndroid()) {
      let tmp15Result = null != source;
      if (tmp15Result) {
        let obj8 = { source, style: tmp.largeEmoji };
        tmp15Result = closure_12(closure_7, obj8);
      }
      let tmp15Result3 = tmp15Result;
    } else {
      let obj9 = { emoji: activity.emoji, size: v32, style: tmp.largeEmoji, animate: false };
      tmp15Result3 = closure_12(activity(10353), obj9);
    }
    const items4 = [
      tmp15Result3,
      items1.map((item, index) => {
        if (obj.isAndroid()) {
          let tmp10 = null != first;
          if (tmp10) {
            const obj2 = { source: tmp8, style: null };
            const items = [closure_2.smallEmoji, item];
            obj2.style = items;
            tmp10 = closure_2_12(React5, obj2, index);
          }
          let tmp7 = tmp10;
        } else {
          const obj3 = { emoji: activity.emoji, size, style: null, animate: false };
          items1 = [closure_2.smallEmoji, item];
          obj3.style = items1;
          tmp7 = closure_2_12(ActivityEmojiDefault, obj3, index);
        }
        return tmp7;
      }),
    ];
    obj6.children = items4;
    const items5 = [closure_13(closure_6, obj6)];
    const obj10 = { style: tmp.customStatusContextContainer, children: null };
    const obj11 = {
      user,
      avatarDecoration: user.avatarDecoration,
      size: tmp6(1177).AvatarSizes.XSMALL,
      guildId,
      status,
      isMobileOnline,
      isVROnline,
      style: tmp.statusAvatar,
      autoStatusCutout: STATUS_CUTOUT_SMALL,
    };
    const items6 = [closure_12(tmp6(1177).Avatar, obj11), ,];
    const obj12 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    items6[1] = closure_12(tmp6(14844).HappeningNowCardHeader, obj12);
    const state = activity.state;
    let num2;
    if (state != null) {
      num2 = state.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let tmp15Result4 = num2 > 0;
    if (tmp15Result4) {
      const obj13 = {
        ellipsizeMode: "tail",
        variant: "text-xs/medium",
        color: "text-default",
        lineClamp: num,
        maxFontSizeMultiplier: 2,
        children: gameMentionsAsPlainText,
      };
      tmp15Result4 = closure_12(tmp6(4832).Text, obj13);
    }
    const obj14 = { children: null };
    items6[2] = tmp15Result4;
    obj10.children = items6;
    items5[1] = closure_13(closure_6, obj10);
    obj14.children = items5;
    let tmp18Result = closure_13(closure_14, obj14);
    tmp6Result4 = tmp6(1364);
  } else {
    const obj15 = { children: null };
    const obj16 = {
      user,
      avatarDecoration: user.avatarDecoration,
      size: tmp6(1177).AvatarSizes.LARGE,
      guildId,
      status,
      isMobileOnline,
      isVROnline,
      autoStatusCutout: true,
    };
    const items7 = [closure_12(tmp6(1177).Avatar, obj16)];
    const obj17 = { style: tmp.customStatusContextContainer, children: null };
    const obj18 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    const items8 = [closure_12(tmp6(14844).HappeningNowCardHeader, obj18)];
    const obj19 = {
      ellipsizeMode: "tail",
      variant: "text-xs/medium",
      color: "text-default",
      lineClamp: num,
      maxFontSizeMultiplier: 2,
      children: gameMentionsAsPlainText,
    };
    items8[1] = closure_12(tmp6(4832).Text, obj19);
    obj17.children = items8;
    items7[1] = closure_13(closure_6, obj17);
    obj15.children = items7;
    tmp18Result = closure_13(closure_14, obj15);
  }
  obj5.children = tmp18Result;
  obj4.children = closure_12(closure_6, obj5);
  return closure_12(activity(14844), obj4);
};
