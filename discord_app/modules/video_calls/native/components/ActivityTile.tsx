// === Module 9165: ActivityTile ===

// Module 9165 (ActivityTile)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import FormConstants from "FormConstants" /* 1192 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import Constants2 from "Constants" /* 2011 */;
import native2 from "native" /* 4595 */;
import handlePressJoinActivityDefault from "handlePressJoinActivity" /* 9081 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, applicationId, c2, participant;

let Fonts;
let c10;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let unpackModuleId;
const View = react_native.View;
({ ThemeTypes: metroImportAll, Fonts } = Constants);
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const XSMALL = native.AvatarSizes.XSMALL;
const androidRippleConfig = getThemedRippleConfig({ foreground: true });
let createStyles = createStyles_mod;
let obj = { pressableOpacity: size, activityPreview: { alignItems: "center", display: "flex", width: "100%", padding: 16 }, activityViewContainer: obj2, titleText: obj3, subtitleText: { textAlign: "center", marginLeft: 16, marginRight: 16 }, overflow: obj4, buttonWrapper: { marginTop: 8, alignSelf: "center" }, buttonPill: { borderRadius: 100 } };
size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3 = { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.DISPLAY_EXTRABOLD, textAlign: "center", marginLeft: 16, marginRight: 16 };
obj4 = { height: native.AVATAR_SIZE_MAP[XSMALL], backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((participants) => {
  let first;
  let tmp6;
  _require = participants;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== participants.participants) {
    const fn = function a() {
      let user;
      const arr = Array.from(participants.participants);
      const mapped = arr.map((userId) => user.getUser(userId.userId));
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    cResult[1] = participants.participants;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp6);
}) : ((arg0) => {
  let participants;
  _require = arg0;
  const items = [UserStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let user;
    const arr = Array.from(participants.participants);
    const mapped = arr.map((userId) => user.getUser(userId.userId));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((participant) => {
  let analyticsContext;
  let channel;
  let embeddedActivityJoinability;
  let onSingleTap;
  let stateFromStores;
  let style;
  let tmp15;
  let tmp5;
  const tmp2 = onSingleTap;
  let obj = participant(onSingleTap[14]);
  const cResult = obj.c(61);
  participant = participant.participant;
  ({ style, channel } = participant);
  onSingleTap = participant.onSingleTap;
  const tmp4 = closure_14();
  if (cResult[0] !== participant.applicationId) {
    const items = [participant.applicationId];
    cResult[0] = participant.applicationId;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  const application = stateFromStores(channel(tmp2[17])(tmp5), 1)[0];
  const arr2 = closure_15(participant);
  const getName = channel(tmp2[18]).getName;
  let first1;
  channel(tmp2[18]);
  let guildId = channel.getGuildId();
  let id = channel.id;
  if (arr2 != null) {
    first1 = arr2[0];
  }
  let name = getName(guildId, id, first1);
  if (name == null) {
    let first2;
    const getName2 = channel(tmp2[19]).getName;
    channel(tmp2[19]);
    if (arr2 != null) {
      first2 = arr2[0];
    }
    name = getName2(first2);
  }
  const tmp14 = channel(tmp2[20])();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = analyticsContext;
    const items1 = [analyticsContext];
    cResult[2] = items1;
    tmp15 = items1;
  } else {
    tmp15 = cResult[2];
  }
  let id1;
  const tmp17 = cResult[3];
  if (application != null) {
    id1 = application.id;
  }
  if (tmp17 === id1) {
    let tmp19;
    let id2;
    let tmp29;
    if (cResult[4] === channel.id) {
      tmp19 = cResult[5];
    }
    const tmpResult = participant(tmp2[16]);
    stateFromStores = tmpResult.useStateFromStores(tmp15, tmp19);
    const tmp6Result2 = channel(tmp2[21]);
    const analyticsLocations = tmp6Result2(channel(tmp2[22]).ACTIVITY_TILE).analyticsLocations;
    const tmpResult3 = participant(tmp2[23]);
    analyticsContext = tmpResult3.useAnalyticsContext();
    let name1;
    if (application != null) {
      name1 = application.name;
    }
    if (name1 == null) {
      const intl = tmp(tmp2[24]).intl;
      name1 = intl.string(tmp(tmp2[24]).t.WCNe7F);
    }
    let obj4 = embeddedActivityJoinability;
    const currentUser = embeddedActivityJoinability.getCurrentUser();
    if (currentUser != null) {
      id2 = currentUser.id;
    }
    let tmp25 = null != tmp14;
    if (tmp25) {
      let id4;
      const id3 = tmp14.id;
      if (application != null) {
        id4 = application.id;
      }
      tmp25 = id3 === id4;
    }
    if (!tmp25) {
      let tmp27 = null != id2;
      if (tmp27) {
        let hasItem;
        if (stateFromStores != null) {
          const userIds = stateFromStores.userIds;
          hasItem = userIds.has(id2);
        }
        tmp27 = hasItem;
      }
      tmp25 = tmp27;
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const currentUser1 = obj4.getCurrentUser();
      let id5;
      if (currentUser1 != null) {
        id5 = currentUser1.id;
      }
      cResult[6] = id5;
      tmp29 = id5;
    } else {
      tmp29 = cResult[6];
    }
    if (cResult[7] === application) {
      let tmp32;
      let handleCanJoin;
      if (cResult[8] === channel.id) {
        tmp32 = cResult[9];
      }
      const tmpResult4 = participant(tmp2[25]);
      embeddedActivityJoinability = tmpResult4.useEmbeddedActivityJoinability(tmp32);
      if (cResult[10] === analyticsContext) {
        if (cResult[11] === analyticsLocations) {
          if (cResult[12] === application) {
            if (cResult[13] === channel.id) {
              let tmp34;
              if (cResult[14] === stateFromStores) {
                tmp34 = cResult[15];
              }
              handleCanJoin = tmp34;
              if (cResult[16] === embeddedActivityJoinability) {
                if (cResult[17] === tmp34) {
                  if (arr2.length > 1) {
                    const intl3 = tmp(tmp2[24]).intl;
                    let obj2 = { username: name, count: arr2.length - 1 };
                    intl3.formatToPlainString(participant(tmp2[24]).t.cpe6CK, obj2);
                  } else {
                    const intl2 = tmp(tmp2[24]).intl;
                    let obj3 = { username: name };
                    intl2.formatToPlainString(participant(tmp2[24]).t["7Uuia2"], obj3);
                  }
                  if (tmp25) {
                    let tmp47;
                    if (cResult[20] !== channel) {
                      let obj5 = { channel, layoutMode: ActivityLayoutMode.PIP };
                      const tmp50 = closure_10(channel(tmp2[29]), obj5);
                      cResult[20] = channel;
                      cResult[21] = tmp50;
                      tmp47 = tmp50;
                    } else {
                      tmp47 = cResult[21];
                    }
                    if (cResult[22] === onSingleTap) {
                      if (cResult[23] === tmp4.activityViewContainer) {
                        let tmp51;
                        if (cResult[24] === tmp47) {
                          tmp51 = cResult[25];
                        }
                        return tmp51;
                      }
                    }
                    let obj6 = { pointerEvents: "box-only", style: tmp4.activityViewContainer, onPress: onSingleTap, activeOpacity: 1, children: tmp47 };
                    const tmp53 = closure_10(participant(tmp2[30]).PressableOpacity, obj6);
                    cResult[22] = onSingleTap;
                    cResult[23] = tmp4.activityViewContainer;
                    cResult[24] = tmp47;
                    cResult[25] = tmp53;
                    tmp51 = tmp53;
                  } else {
                    const PressableOpacity = tmp(tmp2[30]).PressableOpacity;
                    const intl4 = tmp(tmp2[24]).intl;
                    const obj7 = { applicationName: name1 };
                    intl4.formatToPlainString(participant(tmp2[24]).t.Yw5Hr2, obj7);
                    if (cResult[26] !== application) {
                      const obj8 = { application, resizeMode: "cover" };
                      cResult[26] = application;
                      cResult[27] = closure_10(channel(tmp2[31]), obj8);
                      const tmp41 = closure_10(channel(tmp2[31]), obj8);
                    }
                    if (cResult[28] === style) {
                      if (cResult[31] !== participant.guildId) {
                        class Q {
                          constructor(user, arg1) {
                            let guildId;
                            let tmp5;
                            const obj = { user, guildId, size: XSMALL, cutout: tmp5 };
                            guildId = participant.guildId;
                            const CutoutableAvatarImage = native.CutoutableAvatarImage;
                            tmp5 = undefined;
                            if (!arg1) {
                              tmp5 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
                              const obj2 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
                            }
                            return authStore(CutoutableAvatarImage, obj);
                          }
                        }
                        cResult[31] = participant.guildId;
                        cResult[32] = Q;
                      } else {
                        class Q {
                          constructor(user, arg1) {
                            let guildId;
                            let tmp5;
                            const obj = { user, guildId, size: XSMALL, cutout: tmp5 };
                            guildId = participant.guildId;
                            const CutoutableAvatarImage = native.CutoutableAvatarImage;
                            tmp5 = undefined;
                            if (!arg1) {
                              tmp5 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
                              const obj2 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
                            }
                            return authStore(CutoutableAvatarImage, obj);
                          }
                        }
                      }
                      if (cResult[33] === tmp4.overflow) {
                        class Q {
                          constructor(user, arg1) {
                            let guildId;
                            let tmp5;
                            const obj = { user, guildId, size: XSMALL, cutout: tmp5 };
                            guildId = participant.guildId;
                            const CutoutableAvatarImage = native.CutoutableAvatarImage;
                            tmp5 = undefined;
                            if (!arg1) {
                              tmp5 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
                              const obj2 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
                            }
                            return authStore(CutoutableAvatarImage, obj);
                          }
                        }
                      }
                      const obj9 = { offsetAmount: -6, overflowStyle: tmp4.overflow, overflowComponent: participant(tmp2[10]).OverflowText, items: arr2, max: 4, renderItem: Q };
                      const SummarizedIconRow = tmp(tmp2[10]).SummarizedIconRow;
                      cResult[33] = tmp4.overflow;
                      cResult[34] = Q;
                      cResult[35] = arr2;
                      cResult[36] = closure_10(SummarizedIconRow, obj9);
                      const tmp46 = closure_10(SummarizedIconRow, obj9);
                    }
                    const items2 = [tmp4.activityPreview, style];
                    cResult[28] = style;
                    cResult[29] = tmp4.activityPreview;
                    cResult[30] = items2;
                  }
                }
              }
              const fn2 = function z() {
                const obj = { embeddedActivityJoinability, handleCanJoin };
                handlePressJoinActivityDefault(obj);
                if (onSingleTap != null) {
                  onSingleTap();
                }
              };
              cResult[16] = embeddedActivityJoinability;
              cResult[17] = tmp34;
              cResult[18] = onSingleTap;
              cResult[19] = fn2;
            }
          }
        }
      }
      _require = application(function*() {
        let id;
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
            if (0 === id) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const tmp10 = null != applicationId && null != application;
                if (tmp10) {
                  const obj4 = { applicationId: applicationId.applicationId, activityChannelId: id.id, locationObject: _location.location, analyticsLocations };
                  id = 1;
                  c2 = 1;
                  const obj5 = { value: channel(onSingleTap[26])(obj4), done: false };
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const obj = tmp3(onSingleTap[27]);
              const result = obj.setOrientationLockState(application);
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp16) {
            c2 = 3;
            throw tmp16;
          }
        }
      });
      handleCanJoin = function handleCanJoin() {
        return closure_0(...arguments);
      };
      cResult[10] = analyticsContext;
      cResult[11] = analyticsLocations;
      cResult[12] = application;
      cResult[13] = channel.id;
      cResult[14] = stateFromStores;
      cResult[15] = handleCanJoin;
      tmp34 = handleCanJoin;
    }
    const obj10 = { userId: tmp29, channelId: channel.id, application };
    cResult[7] = application;
    cResult[8] = channel.id;
    cResult[9] = obj10;
    tmp32 = obj10;
  }
  if (application != null) {
    class Q {
      constructor(user, arg1) {
        let guildId;
        let tmp5;
        const obj = { user, guildId, size: XSMALL, cutout: tmp5 };
        guildId = participant.guildId;
        const CutoutableAvatarImage = native.CutoutableAvatarImage;
        tmp5 = undefined;
        if (!arg1) {
          tmp5 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
          const obj2 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
        }
        return authStore(CutoutableAvatarImage, obj);
      }
    }
  }
  const fn = function _() {
    const embeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(channel.id);
    return embeddedActivitiesForChannelIncludingHidden.find((applicationId) => {
      id = undefined;
      applicationId = applicationId.applicationId;
      if (id != null) {
        id = id.id;
      }
      return applicationId === id;
    });
  };
  cResult[3] = undefined;
  cResult[4] = channel.id;
  cResult[5] = fn;
  tmp19 = fn;
}) : ((participant) => {
  let BaseTextButton;
  let formatToPlainStringResult;
  let id2;
  let intl4;
  let intl5;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj17;
  let obj8;
  let tmp26Result;
  participant = participant.participant;
  const channel = participant.channel;
  const onSingleTap = participant.onSingleTap;
  let stateFromStores;
  let analyticsLocations;
  let closure_6;
  let embeddedActivityJoinability;
  function handleCanJoin() {
    return obj(...arguments);
  }
  let obj = function _handleCanJoin2() {
    let _location;
    let id;
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
              const tmp11 = null != stateFromStores && null != application;
              if (tmp11) {
                const obj4 = { applicationId: stateFromStores.applicationId, activityChannelId: id.id, locationObject: _location.location, analyticsLocations };
                v1 = 1;
                c2 = 1;
                const obj5 = { value: v1(c2[26])(obj4), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj = tmp(c2[27]);
            const result = obj.setOrientationLockState(closure_128_3);
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp17) {
          c2 = 3;
          throw tmp17;
        }
      }
    });
    return obj(...arguments);
  };
  const style = participant.style;
  const tmp = closure_14();
  const tmp3 = onSingleTap;
  const items = [participant.applicationId];
  const application = stateFromStores(channel(onSingleTap[17])(items), 1)[0];
  const arr2 = closure_15(participant);
  let tmp5 = channel(onSingleTap[18]);
  const getName = tmp5.getName;
  let first1;
  let guildId = channel.getGuildId();
  let id = channel.id;
  if (arr2 != null) {
    first1 = arr2[0];
  }
  let name = getName(guildId, id, first1);
  if (name == null) {
    let first2;
    const getName2 = tmp2(tmp3[19]).getName;
    channel(tmp3[19]);
    if (arr2 != null) {
      first2 = arr2[0];
    }
    name = getName2(first2);
  }
  let tmp11 = tmp2(tmp3[20])();
  obj = participant(tmp3[16]);
  const items1 = [closure_6];
  stateFromStores = obj.useStateFromStores(items1, () => {
    const embeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(channel.id);
    return embeddedActivitiesForChannelIncludingHidden.find((applicationId) => {
      id = undefined;
      applicationId = applicationId.applicationId;
      if (id != null) {
        id = id.id;
      }
      return applicationId === id;
    });
  });
  const tmp2Result2 = channel(tmp3[21]);
  analyticsLocations = tmp2Result2(tmp2(tmp3[22]).ACTIVITY_TILE).analyticsLocations;
  let obj2 = participant(tmp3[23]);
  closure_6 = obj2.useAnalyticsContext();
  let name1;
  if (application != null) {
    name1 = application.name;
  }
  if (name1 == null) {
    const intl = tmp12(tmp3[24]).intl;
    name1 = intl.string(tmp12(tmp3[24]).t.WCNe7F);
  }
  let obj3 = embeddedActivityJoinability;
  const currentUser = embeddedActivityJoinability.getCurrentUser();
  if (currentUser != null) {
    id2 = currentUser.id;
  }
  let tmp17 = null != tmp11;
  if (tmp17) {
    let id1;
    const id3 = tmp11.id;
    if (application != null) {
      id1 = application.id;
    }
    tmp17 = id3 === id1;
  }
  if (!tmp17) {
    let tmp19 = null != id2;
    if (tmp19) {
      let hasItem;
      if (stateFromStores != null) {
        const userIds = stateFromStores.userIds;
        hasItem = userIds.has(id2);
      }
      tmp19 = hasItem;
    }
    tmp17 = tmp19;
  }
  const useEmbeddedActivityJoinability = tmp12(tmp3[25]).useEmbeddedActivityJoinability;
  participant(tmp3[25]);
  const currentUser1 = obj3.getCurrentUser();
  let id4;
  if (currentUser1 != null) {
    id4 = currentUser1.id;
  }
  let obj4 = { userId: id4, channelId: channel.id, application };
  embeddedActivityJoinability = useEmbeddedActivityJoinability(obj4);
  const CAN_JOIN = tmp12(tmp3[25]).EmbeddedActivityJoinability.CAN_JOIN;
  if (arr2.length > 1) {
    const intl3 = tmp12(tmp3[24]).intl;
    let obj5 = { username: name, count: arr2.length - 1 };
    formatToPlainStringResult = intl3.formatToPlainString(tmp12(tmp3[24]).t.cpe6CK, obj5);
  } else {
    const intl2 = tmp12(tmp3[24]).intl;
    let obj6 = { username: name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp12(tmp3[24]).t["7Uuia2"], obj6);
  }
  if (tmp17) {
    const obj7 = { pointerEvents: "box-only", style: tmp.activityViewContainer, onPress: onSingleTap, activeOpacity: 1, children: closure_10(channel(tmp3[29]), obj8) };
    const PressableOpacity2 = tmp12(tmp3[30]).PressableOpacity;
    obj8 = { channel, layoutMode: obj.PIP };
    tmp26Result = closure_10(PressableOpacity2, obj7);
  } else {
    function handleTileOrButtonPress() {
      obj = { embeddedActivityJoinability, handleCanJoin };
      handlePressJoinActivityDefault(obj);
      if (onSingleTap != null) {
        onSingleTap();
      }
    }
    const obj9 = { accessibilityRole: "button", accessibilityLabel: intl4.formatToPlainString(participant(tmp3[24]).t.Yw5Hr2, obj10), androidRippleConfig, onPress: handleTileOrButtonPress, style: tmp.pressableOpacity, children: items2 };
    const PressableOpacity = tmp12(tmp3[30]).PressableOpacity;
    intl4 = tmp12(tmp3[24]).intl;
    obj10 = { applicationName: name1 };
    const obj11 = { application, resizeMode: "cover" };
    items2 = [closure_10(tmp2(tmp3[31]), obj11), ];
    const obj12 = { style: items3, children: items4 };
    items3 = [tmp.activityPreview, style];
    const obj13 = {
      offsetAmount: -6,
      overflowStyle: tmp.overflow,
      overflowComponent: participant(tmp3[10]).OverflowText,
      items: arr2,
      max: 4,
      renderItem(user, arg1) {
          let guildId;
          let tmp5;
          obj = { user, guildId, size: XSMALL, cutout: tmp5 };
          guildId = participant.guildId;
          const CutoutableAvatarImage = native.CutoutableAvatarImage;
          tmp5 = undefined;
          if (!arg1) {
            tmp5 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
            const obj2 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
          }
          return authStore(CutoutableAvatarImage, obj);
        }
    };
    const SummarizedIconRow = tmp12(tmp3[10]).SummarizedIconRow;
    items4 = [closure_10(SummarizedIconRow, obj13), , , ];
    const obj14 = { style: tmp.subtitleText, lineClamp: 2, variant: "text-sm/normal", children: formatToPlainStringResult };
    items4[1] = closure_10(participant(tmp3[32]).Text, obj14);
    const obj15 = { style: tmp.titleText, children: name1 };
    items4[2] = closure_10(participant(tmp3[10]).LegacyText, obj15);
    let tmp28Result = null;
    if (embeddedActivityJoinability === CAN_JOIN) {
      const obj16 = { style: tmp.buttonWrapper, children: closure_10(BaseTextButton, obj17) };
      obj17 = { onPress: handleTileOrButtonPress, pillStyle: tmp.buttonPill, text: intl5.string(participant(tmp3[24]).t["4i2vj+"]), variant: "secondary" };
      BaseTextButton = tmp12(tmp3[33]).BaseTextButton;
      intl5 = tmp12(tmp3[24]).intl;
      tmp28Result = closure_10(tmp29, obj16);
    }
    items4[3] = tmp28Result;
    items2[1] = closure_11(analyticsLocations, obj12);
    tmp26Result = closure_11(PressableOpacity, obj9);
  }
  return tmp26Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityTile(arg0) {
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = { theme: metroImportAll.DARK, children: authStore(closure_16, obj3) };
    obj3 = {};
    const ThemeContextProvider = native2.ThemeContextProvider;
    const merged = Object.assign(arg0);
    const tmp11 = authStore(ThemeContextProvider, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    tmp4 = tmp11;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ActivityTile(arg0) {
  let obj2;
  const obj = { theme: metroImportAll.DARK, children: authStore(closure_16, obj2) };
  obj2 = {};
  const ThemeContextProvider = native2.ThemeContextProvider;
  const merged = Object.assign(arg0);
  return authStore(ThemeContextProvider, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/ActivityTile.tsx");

export default tmp6;