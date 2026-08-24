// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../../../stores/PresenceStore.tsx";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HappeningNowConstants.tsx";
import { StatusTypes } from "../../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: closure_6, Image: error } = get_ActivityIndicator);
const HAPPENING_NOW_CONTENT_HEIGHT = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_CONTENT_HEIGHT;
const STATUS_CUTOUT_SMALL = HAPPENING_NOW_PANELS_CONTAINER_PADDING.STATUS_CUTOUT_SMALL;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let c15 = 16;
let c16 = 32;
let obj = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: -3, transform: items };
items = [{ rotate: "24deg" }];
let items1 = [obj, , , , , ];
obj = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: items2 };
items2 = [{ rotate: "-12deg" }];
items1[1] = obj;
obj = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: items3 };
items3 = [{ rotate: "12deg" }];
items1[2] = obj;
let items4 = [{ rotate: "-24deg" }];
items1[3] = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, transform: items4 };
let items5 = [{ rotate: "12deg" }];
items1[4] = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: items5 };
let items6 = [{ rotate: "-12deg" }];
items1[5] = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: items6 };
let closure_18 = createCacheKey.createStyles((arg0) => {
  obj = { customStatusContainer: { flexShrink: 1, flexDirection: "row", alignItems: "center" }, customStatusContextContainer: { flexShrink: 1, flexDirection: "column", marginLeft: 12, gap: 2 }, statusAvatar: { marginBottom: 2 }, largeEmoji: obj, smallEmoji: obj, cardContainer: null, emojisContainer: null };
  obj = { width: c16, height: c16, borderRadius: 2, overflow: "hidden" };
  obj = { position: "absolute", width: c15, height: c15, borderRadius: 2, opacity: 0.6 };
  let num;
  if (arg0) {
    num = 12;
  }
  obj[5] = { justifyContent: "center", paddingLeft: num };
  obj[6] = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx");

export const CustomStatusActivityCard = function CustomStatusActivityCard(user) {
  user = user.user;
  ({ guildId, activity } = user);
  ({ userTitle, panelVariant } = user);
  ({ fullwidth, onPress } = user);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  dependencyMap = undefined;
  c3 = undefined;
  let first;
  let React;
  let tmp = callback2(null == activity.emoji);
  dependencyMap = tmp;
  let num = 2;
  [tmp3, c3] = first(React.useState(undefined), 2);
  const tmp4 = first(React.useState(undefined), 2);
  first = tmp4[0];
  React = tmp4[1];
  let obj = user(647);
  let items = [closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = closure_1_8;
    const status = closure_1_8.getStatus(user.id);
    let tmp3 = null;
    if (status !== closure_1_11.OFFLINE) {
      tmp3 = status;
    }
    obj = { status: tmp3, isMobileOnline: obj.isMobileOnline(tmp.id), isVROnline: obj.isVROnline(tmp.id) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { userId: user.id, guildId };
  const tmp2 = first(React.useState(undefined), 2);
  let obj2 = user(9492);
  const displayNameStylesFont = obj2.useDisplayNameStylesFont({ displayNameStyles: activity(4820)(obj) });
  items1 = [activity.emoji];
  const effect = React.useEffect(() => {
    function _loadEmoji() {
      const self = this;
      const tmp = callback(function*() {
        if (v0 === 2) {
          v0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            v0 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let length = 0;
                let callback = tmp4;
                callback = undefined;
                length = undefined;
                dependencyMap = undefined;
                if (null != closure_1_1.emoji) {
                  dependencyMap = 1;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = callback(closure_2_2[13]).getEmojiSource(closure_1_1.emoji);
                  return obj1;
                } else {
                  v0 = 3;
                }
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                callback = arg1;
                obj1 = callback(closure_2_2[14]);
                const obj3 = { emoji: null, emojiSource: null };
                obj3[0] = closure_1_1.emoji;
                obj3[1] = callback;
                dependencyMap = 2;
                v0 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = obj1.getEmojiDominantColors(obj3);
                return obj4;
              }
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              length = arg1;
              if (length.length > 0) {
                dependencyMap = length[0];
                const _HermesInternal = HermesInternal;
                v0("rgba(" + 5 + ", " + 32 + ", " + 19 + ", 0.16)");
              }
              closure_1_5(callback);
            }
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp28) {
            v0 = tmp;
            throw tmp28;
          }
        }
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    !(function loadEmoji() {
      const self = this;
      const apply = _loadEmoji.apply;
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
  let tmp6Result = tmp6(9324);
  const gameMentionsAsPlainText = tmp6Result.useGameMentionsAsPlainText(activity.state);
  const items2 = [userTitle, , ];
  tmp6Result = tmp6(8923);
  items2[1] = tmp6Result.getStatusLabel(status);
  items2[2] = gameMentionsAsPlainText;
  const joined = items2.join(", ");
  obj = { onPress, width: null, style: null, accessibilityLabel: null, panelVariant: null, children: null };
  let str = "stretchy";
  let tmp10 = activity(4820)(obj);
  if (fullwidth) {
    str = "full";
  }
  obj[1] = str;
  obj[2] = tmp.cardContainer;
  obj[3] = joined;
  obj[4] = panelVariant;
  obj1 = { style: tmp.customStatusContainer, children: null };
  if (null != activity.emoji) {
    obj2 = { style: null, children: null };
    const items3 = [tmp.emojisContainer, ];
    let obj3 = { backgroundColor: null };
    obj3[0] = tmp3;
    items3[1] = obj3;
    obj2[0] = items3;
    if (tmp6Result1.isAndroid()) {
      let tmp15Result = null != first;
      if (tmp15Result) {
        let obj4 = { source: null, style: null };
        obj4[0] = first;
        obj4[1] = tmp.largeEmoji;
        tmp15Result = tmp15(closure_7, obj4);
      }
    } else {
      const obj5 = { emoji: null, size: null, style: null, animate: false };
      obj5[0] = activity.emoji;
      obj5[1] = c16;
      obj5[2] = tmp.largeEmoji;
      tmp15Result = tmp15(tmp9(9578), obj5);
    }
    const items4 = [
      tmp15Result,
      items1.map((arg0, arg1) => {
          let obj = user(closure_2[18]);
          if (obj.isAndroid()) {
            let tmp10 = null != first;
            if (tmp10) {
              obj = { source: null, style: null };
              obj[0] = tmp8;
              const items = [closure_2.smallEmoji, arg0];
              obj[1] = items;
              tmp10 = closure_1_12(closure_1_7, obj, arg1);
            }
            let tmp7 = tmp10;
          } else {
            obj = { emoji: null, size: null, style: null, animate: false };
            obj[0] = activity.emoji;
            obj[1] = closure_1_15;
            items1 = [closure_2.smallEmoji, arg0];
            obj[2] = items1;
            tmp7 = closure_1_12(activity(closure_2[19]), obj, arg1);
          }
          return tmp7;
        })
    ];
    obj2[1] = items4;
    const items5 = [callback(tmp17, obj2), ];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.customStatusContextContainer;
    const obj7 = { user: null, avatarDecoration: null, size: null, guildId: null, status: null, isMobileOnline: null, isVROnline: null, style: null, autoStatusCutout: null };
    obj7[0] = user;
    obj7[1] = user.avatarDecoration;
    obj7[2] = tmp6(1297).AvatarSizes.XSMALL;
    obj7[3] = guildId;
    obj7[4] = status;
    obj7[5] = isMobileOnline;
    obj7[6] = isVROnline;
    obj7[7] = tmp.statusAvatar;
    obj7[8] = STATUS_CUTOUT_SMALL;
    const items6 = [tmp15(tmp6(1297).Avatar, obj7), , ];
    const obj8 = { noMargin: true, displayNameFont: null, children: null };
    obj8[1] = displayNameStylesFont;
    obj8[2] = userTitle;
    items6[1] = tmp15(tmp6(14709).HappeningNowCardHeader, obj8);
    const state = activity.state;
    let num2;
    if (state != null) {
      num2 = state.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let tmp15Result1 = num2 > 0;
    if (tmp15Result1) {
      const obj9 = { ellipsizeMode: "tail", variant: "text-xs/medium", color: "text-default", lineClamp: null, maxFontSizeMultiplier: 2, children: null };
      obj9[3] = num;
      obj9[5] = gameMentionsAsPlainText;
      tmp15Result1 = tmp15(tmp6(4739).Text, obj9);
    }
    const obj10 = { children: null };
    items6[2] = tmp15Result1;
    obj6[1] = items6;
    items5[1] = callback(tmp17, obj6);
    obj10[0] = items5;
    let tmp18Result = tmp18(closure_14, obj10);
    const tmp19 = closure_14;
    tmp6Result1 = tmp6(500);
  } else {
    const obj11 = { children: null };
    const obj12 = { user: null, avatarDecoration: null, size: null, guildId: null, status: null, isMobileOnline: null, isVROnline: null, autoStatusCutout: true };
    obj12[0] = user;
    obj12[1] = user.avatarDecoration;
    obj12[2] = tmp6(1297).AvatarSizes.LARGE;
    obj12[3] = guildId;
    obj12[4] = status;
    obj12[5] = isMobileOnline;
    obj12[6] = isVROnline;
    const items7 = [tmp15(tmp6(1297).Avatar, obj12), ];
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.customStatusContextContainer;
    const obj14 = { noMargin: true, displayNameFont: null, children: null };
    obj14[1] = displayNameStylesFont;
    obj14[2] = userTitle;
    const items8 = [tmp15(tmp6(14709).HappeningNowCardHeader, obj14), ];
    const obj15 = { ellipsizeMode: "tail", variant: "text-xs/medium", color: "text-default", lineClamp: null, maxFontSizeMultiplier: 2, children: null };
    obj15[3] = num;
    obj15[5] = gameMentionsAsPlainText;
    items8[1] = tmp15(tmp6(4739).Text, obj15);
    obj13[1] = items8;
    items7[1] = callback(tmp17, obj13);
    obj11[0] = items7;
    tmp18Result = callback(closure_14, obj11);
  }
  obj1[1] = tmp18Result;
  obj[5] = closure_12(closure_6, obj1);
  return closure_12(activity(14709), obj);
};