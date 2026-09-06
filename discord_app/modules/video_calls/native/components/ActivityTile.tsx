// === Module 9631: ActivityTile ===

// Module 9631 (ActivityTile)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import native2 from "native" /* 4271 */;
import handlePressJoinActivityDefault from "handlePressJoinActivity" /* 9530 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function ActivityTileInner(participant) {
  participant = participant.participant;
  const channel = participant.channel;
  const onSingleTap = participant.onSingleTap;
  let stateFromStores;
  let analyticsLocations;
  closure_6 = undefined;
  let embeddedActivityJoinability;
  function handleCanJoin() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  ActivityLayoutMode = async function _handleCanJoin(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            let tmp12 = null != stateFromStores;
            if (tmp12) {
              tmp12 = null != application;
            }
            if (tmp12) {
              const obj1 = { applicationId: tmp23.applicationId, activityChannelId: id.id, locationObject: _location.location, analyticsLocations };
              v1 = 1;
              dependencyMap = 1;
              const obj2 = { value: v1(9533)(obj1), done: false };
              return obj2;
            } else {
              dependencyMap = 3;
            }
            tmp23 = stateFromStores;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          obj = tmp2(9634);
          const result = obj.setOrientationLockState(closure_128_3);
        }
        dependencyMap = 3;
        const obj3 = { value, done: true };
        return obj3;
      } catch (tmp18) {
        dependencyMap = tmp;
        throw tmp18;
      }
    }
  };
  const tmp = closure_14();
  const items = [participant.applicationId];
  const application = stateFromStores(channel(onSingleTap[15])(items), 1)[0];
  closure_129_0 = participant;
  let obj = participant(onSingleTap[13]);
  let obj1 = embeddedActivityJoinability;
  const items1 = [embeddedActivityJoinability];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    const mapped = Array.from(participant.participants).map((userId) => user.getUser(userId.userId));
    return mapped.filter(GlobalUtils.isNotNullish);
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
    const embeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(channel.id);
    return embeddedActivitiesForChannelIncludingHidden.find((applicationId) => {
      id = undefined;
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
  if (application != null) {
    name1 = application.name;
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
    if (application != null) {
      id = application.id;
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
  obj = { userId: id1, channelId: channel.id, application };
  embeddedActivityJoinability = participant(onSingleTap[23]).useEmbeddedActivityJoinability(obj);
  if (stateFromStoresArray.length > 1) {
    const intl3 = tmp5(tmp3[22]).intl;
    obj = { username: name, count: stateFromStoresArray.length - 1 };
    let formatToPlainStringResult = intl3.formatToPlainString(tmp5(tmp3[22]).t.cpe6CK, obj);
  } else {
    const intl2 = tmp5(tmp3[22]).intl;
    obj1 = { username: name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[22]).t["7Uuia2"], obj1);
  }
  if (tmp15) {
    obj2 = { pointerEvents: "box-only", style: tmp.activityViewContainer, onPress: onSingleTap, activeOpacity: 1, children: null };
    let obj3 = { channel, layoutMode: ActivityLayoutMode.PIP };
    obj2.children = closure_10(tmp2(tmp3[28]), obj3);
    let tmp23Result = closure_10(tmp5(tmp3[27]).PressableOpacity, obj2);
  } else {
    function handleTileOrButtonPress() {
      handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
      if (onSingleTap != null) {
        onSingleTap();
      }
    }
    const obj4 = { accessibilityRole: "button", accessibilityLabel: null, androidRippleConfig: null, onPress: null, style: null, children: null };
    const intl4 = tmp5(tmp3[22]).intl;
    const obj5 = { applicationName: name1 };
    obj4.accessibilityLabel = intl4.formatToPlainString(tmp5(tmp3[22]).t.Yw5Hr2, obj5);
    obj4.androidRippleConfig = androidRippleConfig;
    obj4.onPress = handleTileOrButtonPress;
    obj4.style = tmp.pressableOpacity;
    const obj6 = { application, resizeMode: "cover" };
    const items3 = [closure_10(tmp2(tmp3[29]), obj6), ];
    const obj7 = { style: null, children: null };
    const items4 = [tmp.activityPreview, participant.style];
    obj7.style = items4;
    const obj8 = {
      offsetAmount: -6,
      overflowStyle: tmp.overflow,
      overflowComponent: tmp5(tmp3[10]).OverflowText,
      items: stateFromStoresArray,
      max: 4,
      renderItem(user, arg1) {
          let obj = { user, guildId: null, size: XSMALL, cutout: null };
          const guildId = participant.guildId;
          obj.guildId = guildId;
          let tmp5;
          if (!arg1) {
            obj = { radius: tmp2(1178).AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: tmp2(1178).CutoutDirection.RIGHT, inset: -6 };
            tmp5 = obj;
          }
          obj.cutout = tmp5;
          return closure_2_10(native.CutoutableAvatarImage, obj);
        }
    };
    const items5 = [closure_10(tmp5(tmp3[10]).SummarizedIconRow, obj8), , , ];
    const obj9 = { style: tmp.subtitleText, lineClamp: 2, variant: "text-sm/normal", children: formatToPlainStringResult };
    items5[1] = closure_10(tmp5(tmp3[30]).Text, obj9);
    const obj10 = { style: tmp.titleText, children: name1 };
    items5[2] = closure_10(tmp5(tmp3[10]).LegacyText, obj10);
    let tmp25Result = null;
    if (embeddedActivityJoinability === tmp5(tmp3[23]).EmbeddedActivityJoinability.CAN_JOIN) {
      const obj11 = { style: tmp.buttonWrapper, children: null };
      const obj12 = { onPress: handleTileOrButtonPress, pillStyle: tmp.buttonPill, text: null, variant: "secondary" };
      const intl5 = tmp5(tmp3[22]).intl;
      obj12.text = intl5.string(tmp5(tmp3[22]).t["4i2vj+"]);
      obj11.children = tmp25(tmp5(tmp3[31]).BaseTextButton, obj12);
      tmp25Result = tmp25(tmp26, obj11);
    }
    items5[3] = tmp25Result;
    obj7.children = items5;
    items3[1] = closure_11(analyticsLocations, obj7);
    obj4.children = items3;
    tmp23Result = tmp23(tmp5(tmp3[27]).PressableOpacity, obj4);
  }
  return tmp23Result;
}
const View = fn(17).View;
const Constants = fn(1074);
({ ThemeTypes: closure_8, Fonts } = Constants);
let ActivityLayoutMode = fn(1920).ActivityLayoutMode;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const XSMALL = fn(1178).AvatarSizes.XSMALL;
const androidRippleConfig = fn(1182).getThemedRippleConfig({ foreground: true });
fn(4560);
let createStyles = { pressableOpacity: null, activityPreview: null, activityViewContainer: null, titleText: null, subtitleText: null, overflow: null, buttonWrapper: null, buttonPill: null };
let size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center" };
createStyles.pressableOpacity = size;
createStyles.activityPreview = { alignItems: "center", display: "flex", width: "100%", padding: 16 };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.activityViewContainer = createStyles;
createStyles.titleText = { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.DISPLAY_EXTRABOLD, textAlign: "center", marginLeft: 16, marginRight: 16 };
createStyles.subtitleText = { textAlign: "center", marginLeft: 16, marginRight: 16 };
let obj1 = { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.DISPLAY_EXTRABOLD, textAlign: "center", marginLeft: 16, marginRight: 16 };
createStyles.overflow = { height: fn(1178).AVATAR_SIZE_MAP[XSMALL], backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
createStyles.buttonWrapper = { marginTop: 8, alignSelf: "center" };
createStyles.buttonPill = { borderRadius: 100 };
let closure_14 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ActivityTile.tsx");

export default function ActivityTile(arg0) {
  let obj = { theme: constants.DARK, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = closure_1_10(ActivityTileInner, obj);
  return closure_1_10(native2.ThemeContextProvider, obj);
};