// discord_app/modules/video_calls/native/components/ActivityTile.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import ManaContext from "ManaContext" /* 4104 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "participantFromServer" /* 1390 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { ActivityLayoutMode } from "items3" /* 4481 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function ActivityTileInner(participant) {
  participant = participant.participant;
  const channel = participant.channel;
  const onSingleTap = participant.onSingleTap;
  let first;
  let stateFromStores;
  let analyticsLocations;
  closure_6 = undefined;
  let embeddedActivityJoinability;
  function handleCanJoin() {
    const self = this;
    const apply = _handleCanJoin.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _handleCanJoin() {
    const self = this;
    const tmp = first(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
              closure_0 = tmp2;
              let tmp12 = null != closure_1_4;
              if (tmp12) {
                tmp12 = null != closure_1_3;
              }
              if (tmp12) {
                obj1 = { applicationId: null, activityChannelId: null, locationObject: null, analyticsLocations: null };
                obj1[0] = tmp24.applicationId;
                obj1[1] = v0.id;
                obj1[2] = closure_1_6.location;
                obj1[3] = closure_1_5;
                v0 = 1;
                dependencyMap = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = v0(8731)(obj1);
                return obj2;
              } else {
                dependencyMap = 3;
              }
              tmp24 = closure_1_4;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = closure_1_0(12467);
            const result = obj.setOrientationLockState(closure_3);
          }
          dependencyMap = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } catch (tmp18) {
          dependencyMap = tmp;
          throw tmp18;
        }
      }
    });
    closure_9 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  const items = [participant.applicationId];
  first = stateFromStores(channel(onSingleTap[15])(items), 1)[0];
  let obj = participant(onSingleTap[13]);
  obj1 = embeddedActivityJoinability;
  const items1 = [embeddedActivityJoinability];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    const mapped = Array.from(participant.participants).map((userId) => user.getUser(userId.userId));
    return mapped.filter(participant(onSingleTap[14]).isNotNullish);
  });
  let obj2 = channel(onSingleTap[16]);
  let first1;
  let guildId = channel.getGuildId();
  if (stateFromStoresArray != null) {
    first1 = stateFromStoresArray[0];
  }
  let name = obj2.getName(guildId, channel.id, first1);
  if (name == null) {
    let tmp2Result = tmp2(tmp3[17]);
    let first2;
    if (stateFromStoresArray != null) {
      first2 = stateFromStoresArray[0];
    }
    name = tmp2Result.getName(first2);
  }
  const tmp10 = channel(onSingleTap[18])();
  let tmp5Result = tmp5(tmp3[13]);
  const items2 = [closure_6];
  stateFromStores = tmp5Result.useStateFromStores(items2, () => {
    embeddedActivitiesForChannelIncludingHidden = embeddedActivitiesForChannelIncludingHidden.getEmbeddedActivitiesForChannelIncludingHidden(channel.id);
    return embeddedActivitiesForChannelIncludingHidden.find((applicationId) => {
      let id;
      if (id != null) {
        id = id.id;
      }
      return applicationId.applicationId === id;
    });
  });
  tmp2Result = tmp2(tmp3[19]);
  analyticsLocations = tmp2Result(tmp2(tmp3[20]).ACTIVITY_TILE).analyticsLocations;
  tmp5Result = tmp5(tmp3[21]);
  closure_6 = tmp5Result.useAnalyticsContext();
  let name1;
  if (first != null) {
    name1 = first.name;
  }
  if (name1 == null) {
    const intl = tmp5(tmp3[22]).intl;
    name1 = intl.string(tmp5(tmp3[22]).t.WCNe7F);
  }
  const currentUser = obj1.getCurrentUser();
  if (currentUser != null) {
    let id = currentUser.id;
  }
  let tmp15 = null != tmp10;
  if (tmp15) {
    id = undefined;
    if (first != null) {
      id = first.id;
    }
    tmp15 = tmp10.id === id;
  }
  if (!tmp15) {
    let tmp17 = null != id;
    if (tmp17) {
      let hasItem;
      if (stateFromStores != null) {
        const userIds = stateFromStores.userIds;
        hasItem = userIds.has(id);
      }
      tmp17 = hasItem;
    }
    tmp15 = tmp17;
  }
  const currentUser1 = obj1.getCurrentUser();
  let id1;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  obj = { userId: id1, channelId: channel.id, application: first };
  embeddedActivityJoinability = participant(onSingleTap[23]).useEmbeddedActivityJoinability(obj);
  if (stateFromStoresArray.length > 1) {
    const intl3 = tmp5(tmp3[22]).intl;
    obj = { username: null, count: null };
    obj[0] = name;
    obj[1] = stateFromStoresArray.length - 1;
    let formatToPlainStringResult = intl3.formatToPlainString(tmp5(tmp3[22]).t.cpe6CK, obj);
  } else {
    const intl2 = tmp5(tmp3[22]).intl;
    obj1 = { username: null };
    obj1[0] = name;
    formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[22]).t["7Uuia2"], obj1);
  }
  if (tmp15) {
    obj2 = { pointerEvents: "box-only", style: null, onPress: null, activeOpacity: 1, children: null };
    obj2[1] = tmp.activityViewContainer;
    obj2[2] = onSingleTap;
    let obj3 = { channel: null, layoutMode: null };
    obj3[0] = channel;
    obj3[1] = _handleCanJoin.PIP;
    obj2[4] = callback(tmp2(tmp3[28]), obj3);
    let tmp23Result = callback(tmp5(tmp3[27]).PressableOpacity, obj2);
  } else {
    function handleTileOrButtonPress() {
      channel(onSingleTap[26])({ embeddedActivityJoinability, handleCanJoin });
      if (onSingleTap != null) {
        onSingleTap();
      }
    }
    const obj4 = { accessibilityRole: "button", accessibilityLabel: null, androidRippleConfig: null, onPress: null, style: null, children: null };
    const intl4 = tmp5(tmp3[22]).intl;
    const obj5 = { applicationName: null };
    obj5[0] = name1;
    obj4[1] = intl4.formatToPlainString(tmp5(tmp3[22]).t.Yw5Hr2, obj5);
    obj4[2] = closure_13;
    obj4[3] = handleTileOrButtonPress;
    obj4[4] = tmp.pressableOpacity;
    const obj6 = { application: null, resizeMode: "cover" };
    obj6[0] = first;
    const items3 = [callback(tmp2(tmp3[29]), obj6), ];
    const obj7 = { style: null, children: null };
    const items4 = [tmp.activityPreview, participant.style];
    obj7[0] = items4;
    const obj8 = { offsetAmount: -6, overflowStyle: null, overflowComponent: null, items: null, max: 4, renderItem: null };
    obj8[1] = tmp.overflow;
    obj8[2] = tmp5(tmp3[10]).OverflowText;
    obj8[3] = stateFromStoresArray;
    obj8[5] = function renderItem(user) {
      let obj = { user, guildId, size: closure_1_12, cutout: null };
      guildId = participant.guildId;
      let tmp5;
      if (!arg1) {
        obj = { radius: null, direction: null, inset: -6 };
        obj[0] = tmp2(tmp3[10]).AVATAR_SIZE_MAP[tmp4] / 2 + 3;
        obj[1] = tmp2(tmp3[10]).CutoutDirection.RIGHT;
        tmp5 = obj;
      }
      obj[3] = tmp5;
      return closure_1_10(participant(onSingleTap[10]).CutoutableAvatarImage, obj);
    };
    const items5 = [callback(tmp5(tmp3[10]).SummarizedIconRow, obj8), , , ];
    const obj9 = { style: null, lineClamp: 2, variant: "text-sm/normal", children: null };
    obj9[0] = tmp.subtitleText;
    obj9[3] = formatToPlainStringResult;
    items5[1] = callback(tmp5(tmp3[30]).Text, obj9);
    const obj10 = { style: null, children: null };
    obj10[0] = tmp.titleText;
    obj10[1] = name1;
    items5[2] = callback(tmp5(tmp3[10]).LegacyText, obj10);
    let tmp25Result = null;
    if (embeddedActivityJoinability === tmp5(tmp3[23]).EmbeddedActivityJoinability.CAN_JOIN) {
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.buttonWrapper;
      const obj12 = { onPress: null, pillStyle: null, text: null, variant: "secondary" };
      obj12[0] = handleTileOrButtonPress;
      obj12[1] = tmp.buttonPill;
      const intl5 = tmp5(tmp3[22]).intl;
      obj12[2] = intl5.string(tmp5(tmp3[22]).t["4i2vj+"]);
      obj11[1] = tmp25(tmp5(tmp3[31]).BaseTextButton, obj12);
      tmp25Result = tmp25(tmp26, obj11);
    }
    items5[3] = tmp25Result;
    obj7[1] = items5;
    items3[1] = closure_11(analyticsLocations, obj7);
    obj4[5] = items3;
    tmp23Result = tmp23(tmp5(tmp3[27]).PressableOpacity, obj4);
  }
  return tmp23Result;
}
noopAll;
({ ThemeTypes: closure_8, Fonts } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const XSMALL = require("Button").AvatarSizes.XSMALL;
const themedRippleConfig = require("semanticColor").getThemedRippleConfig({ foreground: true });
createCacheKey = { pressableOpacity: null, activityPreview: null, activityViewContainer: null, titleText: null, subtitleText: null, overflow: null, buttonWrapper: null, buttonPill: null };
createCacheKey = { width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", display: "flex", width: "100%", padding: 16 };
createCacheKey[2] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[3] = { fontSize: 16, lineHeight: 24, color: ThemesDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.DISPLAY_EXTRABOLD, textAlign: "center", marginLeft: 16, marginRight: 16 };
createCacheKey[4] = { textAlign: "center", marginLeft: 16, marginRight: 16 };
let obj2 = { fontSize: 16, lineHeight: 24, color: ThemesDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.DISPLAY_EXTRABOLD, textAlign: "center", marginLeft: 16, marginRight: 16 };
createCacheKey[5] = { height: require("Button").AVATAR_SIZE_MAP[XSMALL], backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
createCacheKey[6] = { marginTop: 8, alignSelf: "center" };
createCacheKey[7] = { borderRadius: 100 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj3 = { height: require("Button").AVATAR_SIZE_MAP[XSMALL], backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/ActivityTile.tsx");

export default function ActivityTile(arg0) {
  let obj = { theme: constants.DARK, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[1] = callback(ActivityTileInner, obj);
  return callback(ManaContext.ThemeContextProvider, obj);
};