// === Module 10917: ActivityTile ===

// Module 10917 (ActivityTile)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import native2 from "native" /* 4827 */;
import handlePressJoinActivityDefault from "handlePressJoinActivity" /* 10923 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ ThemeTypes: closure_8, Fonts } = Constants);
let ActivityLayoutMode = fn(2024).ActivityLayoutMode;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const XSMALL = fn(1200).AvatarSizes.XSMALL;
const androidRippleConfig = fn(1204).getThemedRippleConfig({ foreground: true });
const createStyles = fn(5092);
let obj2 = { pressableOpacity: null, activityPreview: null, activityViewContainer: null, titleText: null, subtitleText: null, overflow: null, buttonWrapper: null, buttonPill: null };
let size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center" };
obj2.pressableOpacity = size;
obj2.activityPreview = { alignItems: "center", display: "flex", width: "100%", padding: 16 };
obj2.activityViewContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.titleText = { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.DISPLAY_EXTRABOLD, textAlign: "center", marginLeft: 16, marginRight: 16 };
obj2.subtitleText = { textAlign: "center", marginLeft: 16, marginRight: 16 };
let obj4 = { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.DISPLAY_EXTRABOLD, textAlign: "center", marginLeft: 16, marginRight: 16 };
obj2.overflow = { height: fn(1200).AVATAR_SIZE_MAP[XSMALL], backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.buttonWrapper = { marginTop: 8, alignSelf: "center" };
obj2.buttonPill = { borderRadius: 100 };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUsersForActivityParticipant(participants) {
  _require = participants;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== participants.participants) {
    const fn = function a() {
      const mapped = Array.from(participants.participants).map((userId) => user.getUser(userId.userId));
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    cResult[1] = participants.participants;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp6);
}) : (function useUsersForActivityParticipant(arg0) {
  _require = arg0;
  const items = [UserStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const mapped = Array.from(participants.participants).map((userId) => user.getUser(userId.userId));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityTileInner(participant) {
  const cResult = require("c").c(61);
  participant = participant.participant;
  _require = participant;
  ({ style, channel } = participant);
  onSingleTap = participant.onSingleTap;
  const tmp4 = closure_14();
  if (cResult[0] !== participant.applicationId) {
    const items = [participant.applicationId];
    cResult[0] = participant.applicationId;
    cResult[1] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  const application = stateFromStores(channel(tmp2[17])(tmp5), 1)[0];
  const arr2 = closure_15(participant);
  let obj = require("c");
  let first1;
  let guildId = channel.getGuildId();
  if (arr2 != null) {
    first1 = arr2[0];
  }
  let name = channel(onSingleTap[18]).getName(guildId, channel.id, first1);
  if (name == null) {
    let first2;
    if (arr2 != null) {
      first2 = arr2[0];
    }
    name = channel(tmp2[19]).getName(first2);
    const tmp6Result = channel(tmp2[19]);
  }
  const tmp12 = channel(onSingleTap[20])();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [analyticsContext];
    cResult[2] = items1;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[2];
  }
  let id1;
  if (application != null) {
    id1 = application.id;
  }
  if (cResult[3] === id1) {
    if (cResult[4] === channel.id) {
      let tmp16 = cResult[5];
    }
    stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp13, tmp16);
    const tmpResult = tmp(tmp2[16]);
    const analyticsLocations = channel(tmp2[21])(channel(tmp2[22]).ACTIVITY_TILE).analyticsLocations;
    const tmp6Result2 = channel(tmp2[21]);
    analyticsContext = tmp(tmp2[23]).useAnalyticsContext();
    let name1;
    if (application != null) {
      name1 = application.name;
    }
    if (name1 == null) {
      const intl = tmp(tmp2[24]).intl;
      name1 = intl.string(tmp(tmp2[24]).t.WCNe7F);
    }
    const currentUser = embeddedActivityJoinability.getCurrentUser();
    if (currentUser != null) {
      let id = currentUser.id;
    }
    let tmp22 = null != tmp12;
    if (tmp22) {
      let id2;
      if (application != null) {
        id2 = application.id;
      }
      tmp22 = tmp12.id === id2;
    }
    if (!tmp22) {
      let tmp24 = null != id;
      if (tmp24) {
        let hasItem;
        if (stateFromStores != null) {
          const userIds = stateFromStores.userIds;
          hasItem = userIds.has(id);
        }
        tmp24 = hasItem;
      }
      tmp22 = tmp24;
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const currentUser1 = obj6.getCurrentUser();
      let id3;
      if (currentUser1 != null) {
        id3 = currentUser1.id;
      }
      cResult[6] = id3;
      let tmp26 = id3;
    } else {
      tmp26 = cResult[6];
    }
    if (cResult[7] === application) {
      if (cResult[8] === channel.id) {
        let tmp29 = cResult[9];
      }
      embeddedActivityJoinability = tmp(tmp2[25]).useEmbeddedActivityJoinability(tmp29);
      if (cResult[10] === analyticsContext) {
        if (cResult[11] === analyticsLocations) {
          if (cResult[12] === application) {
            if (cResult[13] === channel.id) {
              if (cResult[14] === stateFromStores) {
                let tmp31 = cResult[15];
              }
              let handleCanJoin = tmp31;
              if (cResult[16] === embeddedActivityJoinability) {
                if (cResult[17] === tmp31) {
                  if (arr2.length > 1) {
                    const intl3 = tmp(tmp2[24]).intl;
                    let obj3 = { username: name, count: arr2.length - 1 };
                    intl3.formatToPlainString(tmp(tmp2[24]).t.cpe6CK, obj3);
                  } else {
                    const intl2 = tmp(tmp2[24]).intl;
                    let obj4 = { username: name };
                    intl2.formatToPlainString(tmp(tmp2[24]).t["7Uuia2"], obj4);
                  }
                  if (tmp22) {
                    if (cResult[20] !== channel) {
                      let obj5 = { channel, layoutMode: ActivityLayoutMode.PIP };
                      const tmp47 = closure_10(channel(tmp2[29]), obj5);
                      cResult[20] = channel;
                      cResult[21] = tmp47;
                      let tmp44 = tmp47;
                    } else {
                      tmp44 = cResult[21];
                    }
                    if (cResult[22] === onSingleTap) {
                      if (cResult[23] === tmp4.activityViewContainer) {
                        if (cResult[24] === tmp44) {
                          let tmp48 = cResult[25];
                        }
                        return tmp48;
                      }
                    }
                    const obj7 = { pointerEvents: "box-only", style: tmp4.activityViewContainer, onPress: onSingleTap, activeOpacity: 1, children: tmp44 };
                    const tmp50 = closure_10(tmp(tmp2[30]).PressableOpacity, obj7);
                    cResult[22] = onSingleTap;
                    cResult[23] = tmp4.activityViewContainer;
                    cResult[24] = tmp44;
                    cResult[25] = tmp50;
                    tmp48 = tmp50;
                  } else {
                    const PressableOpacity = tmp(tmp2[30]).PressableOpacity;
                    const intl4 = tmp(tmp2[24]).intl;
                    const obj8 = { applicationName: name1 };
                    intl4.formatToPlainString(tmp(tmp2[24]).t.Yw5Hr2, obj8);
                    if (cResult[26] !== application) {
                      const obj9 = { application, resizeMode: "cover" };
                      const tmp38 = closure_10(channel(tmp2[31]), obj9);
                      cResult[26] = application;
                      cResult[27] = tmp38;
                    }
                    if (cResult[28] === style) {
                      if (cResult[31] !== participant.guildId) {
                        class Q {
                          constructor(arg0, arg1) {
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            tmp = jsx;
                            obj = { user: participant, guildId: null, size: null, cutout: null };
                            guildId = closure_0.guildId;
                            obj.guildId = guildId;
                            obj.size = XSMALL;
                            tmp5 = undefined;
                            if (!arg1) {
                              obj1 = { radius: null, direction: null, inset: -6 };
                              num = 2;
                              num2 = 3;
                              obj1.radius = tmp2(tmp3[10]).AVATAR_SIZE_MAP[tmp4] / 2 + 3;
                              obj1.direction = tmp2(tmp3[10]).CutoutDirection.RIGHT;
                              tmp5 = obj1;
                            }
                            obj.cutout = tmp5;
                            return tmp(closure_0(closure_2[10]).CutoutableAvatarImage, obj);
                          }
                        }
                        cResult[31] = participant.guildId;
                        cResult[32] = Q;
                      } else {
                        class Q {
                          constructor(arg0, arg1) {
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            tmp = jsx;
                            obj = { user: participant, guildId: null, size: null, cutout: null };
                            guildId = closure_0.guildId;
                            obj.guildId = guildId;
                            obj.size = XSMALL;
                            tmp5 = undefined;
                            if (!arg1) {
                              obj1 = { radius: null, direction: null, inset: -6 };
                              num = 2;
                              num2 = 3;
                              obj1.radius = tmp2(tmp3[10]).AVATAR_SIZE_MAP[tmp4] / 2 + 3;
                              obj1.direction = tmp2(tmp3[10]).CutoutDirection.RIGHT;
                              tmp5 = obj1;
                            }
                            obj.cutout = tmp5;
                            return tmp(closure_0(closure_2[10]).CutoutableAvatarImage, obj);
                          }
                        }
                      }
                      if (cResult[33] === tmp4.overflow) {
                        class Q {
                          constructor(arg0, arg1) {
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            tmp = jsx;
                            obj = { user: participant, guildId: null, size: null, cutout: null };
                            guildId = closure_0.guildId;
                            obj.guildId = guildId;
                            obj.size = XSMALL;
                            tmp5 = undefined;
                            if (!arg1) {
                              obj1 = { radius: null, direction: null, inset: -6 };
                              num = 2;
                              num2 = 3;
                              obj1.radius = tmp2(tmp3[10]).AVATAR_SIZE_MAP[tmp4] / 2 + 3;
                              obj1.direction = tmp2(tmp3[10]).CutoutDirection.RIGHT;
                              tmp5 = obj1;
                            }
                            obj.cutout = tmp5;
                            return tmp(closure_0(closure_2[10]).CutoutableAvatarImage, obj);
                          }
                        }
                      }
                      const obj10 = { offsetAmount: -6, overflowStyle: tmp4.overflow, overflowComponent: tmp(tmp2[10]).OverflowText, items: arr2, max: 4, renderItem: Q };
                      const tmp43 = closure_10(tmp(tmp2[10]).SummarizedIconRow, obj10);
                      cResult[33] = tmp4.overflow;
                      cResult[34] = Q;
                      cResult[35] = arr2;
                      cResult[36] = tmp43;
                    }
                    const items2 = [tmp4.activityPreview, style];
                    cResult[28] = style;
                    cResult[29] = tmp4.activityPreview;
                    cResult[30] = items2;
                  }
                }
              }
              function handleTileOrButtonPress() {
                handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
                if (onSingleTap != null) {
                  onSingleTap();
                }
              }
              cResult[16] = embeddedActivityJoinability;
              cResult[17] = tmp31;
              cResult[18] = onSingleTap;
              cResult[19] = handleTileOrButtonPress;
            }
          }
        }
      }
      _require = application(function*() {
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
            return { value: "IconComponent", done: "+51" };
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
                let tmp11 = null != stateFromStores;
                if (tmp11) {
                  tmp11 = null != application;
                }
                if (tmp11) {
                  const obj4 = { applicationId: stateFromStores.applicationId, activityChannelId: id.id, locationObject: _location.location, analyticsLocations };
                  id = 1;
                  c2 = 1;
                  const obj5 = { value: channel(onSingleTap[26])(obj4), done: false };
                  return obj5;
                } else {
                  c2 = 3;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 !== 2) {
              const result = tmp4(onSingleTap[27]).setOrientationLockState(application);
              const obj = tmp4(onSingleTap[27]);
            }
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } catch (tmp17) {
            c2 = tmp;
            throw tmp17;
          }
        }
      });
      handleCanJoin = function handleCanJoin() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      cResult[10] = analyticsContext;
      cResult[11] = analyticsLocations;
      cResult[12] = application;
      cResult[13] = channel.id;
      cResult[14] = stateFromStores;
      cResult[15] = handleCanJoin;
      tmp31 = handleCanJoin;
      const tmpResult4 = tmp(tmp2[25]);
    }
    const obj11 = { userId: tmp26, channelId: channel.id, application };
    cResult[7] = application;
    cResult[8] = channel.id;
    cResult[9] = obj11;
    tmp29 = obj11;
    obj6 = embeddedActivityJoinability;
    const tmpResult3 = tmp(tmp2[23]);
  }
  if (application != null) {
    class Q {
      constructor(arg0, arg1) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        tmp = jsx;
        obj = { user: participant, guildId: null, size: null, cutout: null };
        guildId = closure_0.guildId;
        obj.guildId = guildId;
        obj.size = XSMALL;
        tmp5 = undefined;
        if (!arg1) {
          obj1 = { radius: null, direction: null, inset: -6 };
          num = 2;
          num2 = 3;
          obj1.radius = tmp2(tmp3[10]).AVATAR_SIZE_MAP[tmp4] / 2 + 3;
          obj1.direction = tmp2(tmp3[10]).CutoutDirection.RIGHT;
          tmp5 = obj1;
        }
        obj.cutout = tmp5;
        return tmp(closure_0(closure_2[10]).CutoutableAvatarImage, obj);
      }
    }
  }
  const fn = function _() {
    const embeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(channel.id);
    return embeddedActivitiesForChannelIncludingHidden.find((applicationId) => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return applicationId.applicationId === id;
    });
  };
  cResult[3] = undefined;
  cResult[4] = channel.id;
  cResult[5] = fn;
  tmp16 = fn;
  let obj2 = channel(onSingleTap[18]);
}) : (function ActivityTileInner(participant) {
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
  ActivityLayoutMode = async function _handleCanJoin2() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
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
            let tmp12 = null != stateFromStores;
            if (tmp12) {
              tmp12 = null != application;
            }
            if (tmp12) {
              const obj4 = { applicationId: stateFromStores.applicationId, activityChannelId: id.id, locationObject: _location.location, analyticsLocations };
              v1 = 1;
              dependencyMap = 1;
              const obj5 = { value: v1(10822)(obj4), done: false };
              return obj5;
            } else {
              dependencyMap = 3;
            }
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          const result = tmp2(10922).setOrientationLockState(closure_128_3);
          const obj = tmp2(10922);
        }
        dependencyMap = 3;
        const obj6 = { value, done: true };
        return obj6;
      } catch (tmp18) {
        dependencyMap = tmp;
        throw tmp18;
      }
    }
  };
  const tmp = closure_14();
  const items = [participant.applicationId];
  const application = stateFromStores(channel(onSingleTap[17])(items), 1)[0];
  const arr2 = closure_15(participant);
  let first1;
  let guildId = channel.getGuildId();
  if (arr2 != null) {
    first1 = arr2[0];
  }
  let name = channel(onSingleTap[18]).getName(guildId, channel.id, first1);
  if (name == null) {
    let first2;
    if (arr2 != null) {
      first2 = arr2[0];
    }
    name = tmp2(tmp3[19]).getName(first2);
    const tmp2Result = tmp2(tmp3[19]);
  }
  const tmp9 = channel(onSingleTap[20])();
  let obj = channel(onSingleTap[18]);
  const items1 = [closure_6];
  stateFromStores = participant(onSingleTap[16]).useStateFromStores(items1, () => {
    const embeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(channel.id);
    return embeddedActivitiesForChannelIncludingHidden.find((applicationId) => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return applicationId.applicationId === id;
    });
  });
  let obj3 = participant(onSingleTap[16]);
  analyticsLocations = channel(onSingleTap[21])(tmp2(tmp3[22]).ACTIVITY_TILE).analyticsLocations;
  const tmp2Result2 = channel(onSingleTap[21]);
  closure_6 = participant(onSingleTap[23]).useAnalyticsContext();
  let name1;
  if (application != null) {
    name1 = application.name;
  }
  if (name1 == null) {
    const intl = tmp10(tmp3[24]).intl;
    name1 = intl.string(tmp10(tmp3[24]).t.WCNe7F);
  }
  const currentUser = embeddedActivityJoinability.getCurrentUser();
  if (currentUser != null) {
    let id = currentUser.id;
  }
  let tmp15 = null != tmp9;
  if (tmp15) {
    let id1;
    if (application != null) {
      id1 = application.id;
    }
    tmp15 = tmp9.id === id1;
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
  let obj4 = participant(onSingleTap[23]);
  let obj5 = embeddedActivityJoinability;
  const currentUser1 = obj5.getCurrentUser();
  let id2;
  if (currentUser1 != null) {
    id2 = currentUser1.id;
  }
  embeddedActivityJoinability = participant(onSingleTap[25]).useEmbeddedActivityJoinability({ userId: id2, channelId: channel.id, application });
  if (arr2.length > 1) {
    const intl3 = tmp10(tmp3[24]).intl;
    let obj6 = { username: name, count: arr2.length - 1 };
    let formatToPlainStringResult = intl3.formatToPlainString(tmp10(tmp3[24]).t.cpe6CK, obj6);
  } else {
    const intl2 = tmp10(tmp3[24]).intl;
    const obj7 = { username: name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp10(tmp3[24]).t["7Uuia2"], obj7);
  }
  if (tmp15) {
    const obj8 = { pointerEvents: "box-only", style: tmp.activityViewContainer, onPress: onSingleTap, activeOpacity: 1, children: null };
    const obj9 = { channel, layoutMode: ActivityLayoutMode.PIP };
    obj8.children = closure_10(tmp2(tmp3[29]), obj9);
    let tmp23Result = closure_10(tmp10(tmp3[30]).PressableOpacity, obj8);
  } else {
    function handleTileOrButtonPress() {
      handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
      if (onSingleTap != null) {
        onSingleTap();
      }
    }
    const obj10 = { accessibilityRole: "button", accessibilityLabel: null, androidRippleConfig: null, onPress: null, style: null, children: null };
    const intl4 = tmp10(tmp3[24]).intl;
    const obj11 = { applicationName: name1 };
    obj10.accessibilityLabel = intl4.formatToPlainString(tmp10(tmp3[24]).t.Yw5Hr2, obj11);
    obj10.androidRippleConfig = androidRippleConfig;
    obj10.onPress = handleTileOrButtonPress;
    obj10.style = tmp.pressableOpacity;
    const obj12 = { application, resizeMode: "cover" };
    const items2 = [closure_10(tmp2(tmp3[31]), obj12), ];
    const obj13 = { style: null, children: null };
    const items3 = [tmp.activityPreview, participant.style];
    obj13.style = items3;
    const obj14 = {
      offsetAmount: -6,
      overflowStyle: tmp.overflow,
      overflowComponent: tmp10(tmp3[10]).OverflowText,
      items: arr2,
      max: 4,
      renderItem(user, arg1) {
          const obj = { user, guildId: null, size: XSMALL, cutout: null };
          const guildId = participant.guildId;
          obj.guildId = guildId;
          let tmp5;
          if (!arg1) {
            const obj2 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
            tmp5 = obj2;
          }
          obj.cutout = tmp5;
          return collapsed(native.CutoutableAvatarImage, obj);
        }
    };
    const items4 = [closure_10(tmp10(tmp3[10]).SummarizedIconRow, obj14), , , ];
    const obj15 = { style: tmp.subtitleText, lineClamp: 2, variant: "text-sm/normal", children: formatToPlainStringResult };
    items4[1] = closure_10(tmp10(tmp3[32]).Text, obj15);
    const obj16 = { style: tmp.titleText, children: name1 };
    items4[2] = closure_10(tmp10(tmp3[10]).LegacyText, obj16);
    let tmp25Result = null;
    if (embeddedActivityJoinability === tmp10(tmp3[25]).EmbeddedActivityJoinability.CAN_JOIN) {
      const obj17 = { style: tmp.buttonWrapper, children: null };
      const obj18 = { onPress: handleTileOrButtonPress, pillStyle: tmp.buttonPill, text: null, variant: "secondary" };
      const intl5 = tmp10(tmp3[24]).intl;
      obj18.text = intl5.string(tmp10(tmp3[24]).t["4i2vj+"]);
      obj17.children = closure_10(tmp10(tmp3[33]).BaseTextButton, obj18);
      tmp25Result = closure_10(tmp26, obj17);
    }
    items4[3] = tmp25Result;
    obj13.children = items4;
    items2[1] = closure_11(analyticsLocations, obj13);
    obj10.children = items2;
    tmp23Result = closure_11(tmp10(tmp3[30]).PressableOpacity, obj10);
  }
  return tmp23Result;
});
ReactCompilerGating = fn(558);
let obj5 = { height: fn(1200).AVATAR_SIZE_MAP[XSMALL], backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ActivityTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityTile(arg0) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = { theme: constants.DARK, children: null };
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj2.children = collapsed(closure_16, obj3);
    const tmp11 = collapsed(native2.ThemeContextProvider, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    let tmp4 = tmp11;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ActivityTile(arg0) {
  const obj = { theme: constants.DARK, children: null };
  const merged = Object.assign(arg0);
  obj.children = collapsed(closure_16, {});
  return collapsed(native2.ThemeContextProvider, obj);
});