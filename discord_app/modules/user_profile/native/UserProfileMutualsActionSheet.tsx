// === Module 12275: UserProfileMutualsActionSheet ===

// Module 12275 (UserProfileMutualsActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import TableRow from "TableRow" /* 5993 */;
import ActivityStatusDefault from "ActivityStatus" /* 10609 */;
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet" /* 10841 */;
import useUserProfileMutualsDefault from "useUserProfileMutuals" /* 12270 */;
import NoMutualServers from "NoMutualServers" /* 12271 */;
import NoMutualFriends from "NoMutualFriends" /* 12276 */;
import getMutualFriendsLabelDefault from "getMutualFriendsLabel" /* 12280 */;
import getMutualGuildsLabelDefault from "getMutualGuildsLabel" /* 12281 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4930 */;

const GuildIconDefault = GuildIcon;
const UserProfileStackedActionSheetDefault = UserProfileStackedActionSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(7854).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 }, loadingState: null, emptyState: null, activityStatusText: null, mutualGuildSubLabel: null };
let obj3 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
obj2.loadingState = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj2.emptyState = { alignItems: "center" };
let obj4 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj2.activityStatusText = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj2.mutualGuildSubLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((mutualFriend) => {
  const cResult = user(576).c(25);
  ({ guildId, onPress, start, end } = mutualFriend);
  user = mutualFriend.mutualFriend.user;
  const tmp4 = closure_11();
  const obj = user(576);
  const avatarDecoration = user(7887).useAvatarDecoration(user);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function n() {
      return { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = user(7887);
  const stateFromStoresObject = user(504).useStateFromStoresObject(first, tmp8);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (cResult[3] === avatarDecoration) {
    if (cResult[4] === guildId) {
      if (cResult[5] === isMobileOnline) {
        if (cResult[6] === isVROnline) {
          if (cResult[7] === status) {
            if (cResult[8] === user) {
              let tmp11 = cResult[9];
            }
            if (cResult[10] === guildId) {
              if (cResult[11] === user) {
                let tmp13 = cResult[12];
              }
              if (cResult[13] === guildId) {
                if (cResult[14] === tmp4.activityStatusText) {
                  if (cResult[15] === user.id) {
                    let tmp16 = cResult[16];
                  }
                  if (cResult[17] === end) {
                    if (cResult[18] === onPress) {
                      if (cResult[19] === start) {
                        if (cResult[20] === tmp11) {
                          if (cResult[21] === tmp13) {
                            if (cResult[22] === tmp16) {
                              if (cResult[23] === user.id) {
                                let tmp20 = cResult[24];
                              }
                              return tmp20;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj3 = { onPress, icon: tmp11, label: tmp13, subLabel: tmp16, start, end };
                  const tmp22 = closure_9(tmp(5993).TableRow, obj3, tmp10);
                  cResult[17] = end;
                  cResult[18] = onPress;
                  cResult[19] = start;
                  cResult[20] = tmp11;
                  cResult[21] = tmp13;
                  cResult[22] = tmp16;
                  cResult[23] = user.id;
                  cResult[24] = tmp22;
                  tmp20 = tmp22;
                }
              }
              const obj4 = { userId: user.id, guildId, textStyle: tmp4.activityStatusText };
              const tmp19 = closure_9(ActivityStatusDefault, obj4);
              cResult[13] = guildId;
              cResult[14] = tmp4.activityStatusText;
              cResult[15] = user.id;
              cResult[16] = tmp19;
              tmp16 = tmp19;
            }
            const name = NicknameUtilsDefault.getName(guildId, undefined, user);
            cResult[10] = guildId;
            cResult[11] = user;
            cResult[12] = name;
            tmp13 = name;
          }
        }
      }
    }
  }
  const tmpResult = user(504);
  const tmp12 = closure_9(user(1188).Avatar, { user, size: user(1188).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true });
  cResult[3] = avatarDecoration;
  cResult[4] = guildId;
  cResult[5] = isMobileOnline;
  cResult[6] = isVROnline;
  cResult[7] = status;
  cResult[8] = user;
  cResult[9] = tmp12;
  tmp11 = tmp12;
  const obj6 = { user, size: user(1188).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
}) : ((mutualFriend) => {
  const user = mutualFriend.mutualFriend.user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  const tmp = closure_11();
  const avatarDecoration = user(7887).useAvatarDecoration(user);
  const obj = user(7887);
  const items = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({ status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, icon: null, label: null, subLabel: null, start: null, end: null };
  const obj2 = user(504);
  obj3.icon = closure_9(user(1188).Avatar, { user, size: user(1188).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true });
  const obj4 = { user, size: user(1188).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  obj3.label = NicknameUtilsDefault.getName(guildId, undefined, user);
  obj3.subLabel = closure_9(ActivityStatusDefault, { userId: user.id, guildId, textStyle: tmp.activityStatusText });
  obj3.start = start;
  obj3.end = end;
  return closure_9(user(5993).TableRow, obj3, user.id);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(28);
  ({ mutualGuild, user, onPress, start, end } = arg0);
  ({ guild, nick } = mutualGuild);
  const tmp4 = closure_11();
  if (cResult[0] === guild.id) {
    if (cResult[1] === user) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== guild) {
      const obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
      const tmp11 = options(GuildIconDefault, obj2);
      cResult[3] = guild;
      cResult[4] = tmp11;
      let tmp7 = tmp11;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === guild.id) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === user) {
          let tmp12 = cResult[8];
        }
        if (cResult[9] !== nick) {
          let tmp17 = null != nick;
          if (tmp17) {
            const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: nick };
            tmp17 = options(Text_Text.Text, obj3);
          }
          cResult[9] = nick;
          cResult[10] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp5) {
          if (cResult[12] === nick) {
            if (cResult[13] === user.username) {
              let tmp19 = cResult[14];
            }
            if (cResult[15] === tmp4.mutualGuildSubLabel) {
              if (cResult[16] === tmp12) {
                if (cResult[17] === tmp15) {
                  if (cResult[18] === tmp19) {
                    let tmp23 = cResult[19];
                  }
                  if (cResult[20] === end) {
                    if (cResult[21] === guild.id) {
                      if (cResult[22] === guild.name) {
                        if (cResult[23] === onPress) {
                          if (cResult[24] === start) {
                            if (cResult[25] === tmp7) {
                              if (cResult[26] === tmp23) {
                                let tmp27 = cResult[27];
                              }
                              return tmp27;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj4 = { onPress, icon: tmp7, label: guild.name, subLabel: tmp23, start, end };
                  const tmp29 = options(TableRow.TableRow, obj4, guild.id);
                  cResult[20] = end;
                  cResult[21] = guild.id;
                  cResult[22] = guild.name;
                  cResult[23] = onPress;
                  cResult[24] = start;
                  cResult[25] = tmp7;
                  cResult[26] = tmp23;
                  cResult[27] = tmp29;
                  tmp27 = tmp29;
                }
              }
            }
            const obj5 = { style: tmp4.mutualGuildSubLabel, children: null };
            const items = [tmp12, tmp15, tmp19];
            obj5.children = items;
            const tmp26 = v65535(hasOwnProperty, obj5);
            cResult[15] = tmp4.mutualGuildSubLabel;
            cResult[16] = tmp12;
            cResult[17] = tmp15;
            cResult[18] = tmp19;
            cResult[19] = tmp26;
            tmp23 = tmp26;
          }
        }
        let tmp21 = null == nick && tmp5;
        if (tmp21) {
          const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: user.username };
          tmp21 = options(Text_Text.Text, obj6);
        }
        cResult[11] = tmp5;
        cResult[12] = nick;
        cResult[13] = user.username;
        cResult[14] = tmp21;
        tmp19 = tmp21;
      }
    }
    let tmp13 = tmp5;
    if (tmp5) {
      const obj7 = { size: native.AvatarSizes.SIZE_16, user, guildId: guild.id };
      tmp13 = options(native.Avatar, obj7);
    }
    cResult[5] = guild.id;
    cResult[6] = tmp5;
    cResult[7] = user;
    cResult[8] = tmp13;
    tmp12 = tmp13;
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
  cResult[0] = guild.id;
  cResult[1] = user;
  cResult[2] = hasAvatarForGuildResult;
  tmp5 = hasAvatarForGuildResult;
}) : ((mutualGuild) => {
  ({ guild, nick } = mutualGuild.mutualGuild);
  const user = mutualGuild.user;
  ({ onPress, start, end } = mutualGuild);
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
  const obj = { onPress, icon: null, label: null, subLabel: null, start: null, end: null };
  const obj2 = { guild, size: null };
  const tmp = closure_11();
  obj2.size = GuildIcon.GuildIconSizes.SMALL_32;
  obj.icon = options(GuildIconDefault, obj2);
  obj.label = guild.name;
  const obj3 = { style: tmp.mutualGuildSubLabel, children: null };
  let tmp3Result = hasAvatarForGuildResult;
  if (hasAvatarForGuildResult) {
    const obj4 = { size: native.AvatarSizes.SIZE_16, user, guildId: guild.id };
    tmp3Result = options(native.Avatar, obj4);
  }
  const items = [tmp3Result, , ];
  let tmp3Result3 = null != nick;
  if (tmp3Result3) {
    const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: nick };
    tmp3Result3 = options(Text_Text.Text, obj5);
  }
  items[1] = tmp3Result3;
  let tmp3Result4 = null == nick && hasAvatarForGuildResult;
  if (tmp3Result4) {
    const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: user.username };
    tmp3Result4 = options(Text_Text.Text, obj6);
  }
  items[2] = tmp3Result4;
  obj3.children = items;
  obj.subLabel = v65535(hasOwnProperty, obj3);
  obj.start = start;
  obj.end = end;
  return options(TableRow.TableRow, obj, guild.id);
});
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(onPressMutualFriend[9]).c(42);
  user = user.user;
  const guildId = user.guildId;
  onPressMutualFriend = user.onPressMutualFriend;
  const onPressMutualGuild = user.onPressMutualGuild;
  let tmp4 = closure_11();
  noop = tmp4;
  let obj = user(onPressMutualFriend[9]);
  [tmp6, closure_5] = onPressMutualGuild(noop.useState(0), 2);
  const tmp8 = guildId(onPressMutualFriend[18])(user);
  const mutualFriends = tmp8.mutualFriends;
  const mutualGuilds = tmp8.mutualGuilds;
  if (cResult[0] === guildId) {
    if (cResult[1] === mutualFriends) {
      if (cResult[2] === onPressMutualFriend) {
        if (cResult[3] === tmp4.emptyState) {
          if (cResult[4] === tmp4.loadingState) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] === mutualGuilds) {
            if (cResult[7] === onPressMutualGuild) {
              if (cResult[8] === tmp4.emptyState) {
                if (cResult[9] === tmp4.loadingState) {
                  if (cResult[10] === user) {
                    let tmp10 = cResult[11];
                  }
                  class F {
                    constructor() {
                      arr = mutualGuilds;
                      if (null == mutualGuilds) {
                        tmp11 = jsx;
                        tmp12 = View;
                        obj1 = { style: null, children: null };
                        tmp13 = closure_4;
                        obj1.style = closure_4.loadingState;
                        tmp14 = jsx;
                        tmp15 = ActivityIndicator;
                        obj1.children = jsx(ActivityIndicator, {});
                        tmp4 = jsx(View, obj1);
                      } else {
                        num = 0;
                        if (0 === arr.length) {
                          tmp5 = jsx;
                          tmp6 = View;
                          obj4 = { style: null, children: null };
                          tmp7 = closure_4;
                          obj4.style = closure_4.emptyState;
                          tmp8 = jsx;
                          tmp9 = closure_0;
                          tmp10 = closure_2;
                          obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                          tmp4 = jsx(View, obj4);
                        } else {
                          tmp = jsx;
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          obj = { data: null, keyExtractor: null, renderItem: null };
                          obj.data = arr;
                          obj.keyExtractor = function keyExtractor(guild) {
                            return guild.guild.id;
                          };
                          obj.renderItem = function renderItem(start) {
                            const item = start.item;
                            return closure_1_9(closure_1_13, {
                              user: item,
                              mutualGuild: item,
                              onPress() {
                                return onPressMutualGuild(item.guild.id);
                              },
                              start: start.start,
                              end: start.end
                            });
                          };
                          tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                        }
                      }
                      return tmp4;
                    }
                  }
                  let length;
                  if (mutualFriends != null) {
                    length = mutualFriends.length;
                  }
                  if (cResult[12] !== length) {
                    const tmp15 = tmp7(tmp2[22])(length);
                    class F {
                      constructor() {
                        arr = mutualGuilds;
                        if (null == mutualGuilds) {
                          tmp11 = jsx;
                          tmp12 = View;
                          obj1 = { style: null, children: null };
                          tmp13 = closure_4;
                          obj1.style = closure_4.loadingState;
                          tmp14 = jsx;
                          tmp15 = ActivityIndicator;
                          obj1.children = jsx(ActivityIndicator, {});
                          tmp4 = jsx(View, obj1);
                        } else {
                          num = 0;
                          if (0 === arr.length) {
                            tmp5 = jsx;
                            tmp6 = View;
                            obj4 = { style: null, children: null };
                            tmp7 = closure_4;
                            obj4.style = closure_4.emptyState;
                            tmp8 = jsx;
                            tmp9 = closure_0;
                            tmp10 = closure_2;
                            obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                            tmp4 = jsx(View, obj4);
                          } else {
                            tmp = jsx;
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            obj = { data: null, keyExtractor: null, renderItem: null };
                            obj.data = arr;
                            obj.keyExtractor = function keyExtractor(guild) {
                              return guild.guild.id;
                            };
                            obj.renderItem = function renderItem(start) {
                              const item = start.item;
                              return closure_1_9(closure_1_13, {
                                user: item,
                                mutualGuild: item,
                                onPress() {
                                  return onPressMutualGuild(item.guild.id);
                                },
                                start: start.start,
                                end: start.end
                              });
                            };
                            tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                          }
                        }
                        return tmp4;
                      }
                    }
                    cResult[13] = tmp15;
                    let tmp14 = tmp15;
                  } else {
                    tmp14 = cResult[13];
                  }
                  if (cResult[14] !== tmp9) {
                    const tmp9Result = tmp9();
                    class F {
                      constructor() {
                        arr = mutualGuilds;
                        if (null == mutualGuilds) {
                          tmp11 = jsx;
                          tmp12 = View;
                          obj1 = { style: null, children: null };
                          tmp13 = closure_4;
                          obj1.style = closure_4.loadingState;
                          tmp14 = jsx;
                          tmp15 = ActivityIndicator;
                          obj1.children = jsx(ActivityIndicator, {});
                          tmp4 = jsx(View, obj1);
                        } else {
                          num = 0;
                          if (0 === arr.length) {
                            tmp5 = jsx;
                            tmp6 = View;
                            obj4 = { style: null, children: null };
                            tmp7 = closure_4;
                            obj4.style = closure_4.emptyState;
                            tmp8 = jsx;
                            tmp9 = closure_0;
                            tmp10 = closure_2;
                            obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                            tmp4 = jsx(View, obj4);
                          } else {
                            tmp = jsx;
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            obj = { data: null, keyExtractor: null, renderItem: null };
                            obj.data = arr;
                            obj.keyExtractor = function keyExtractor(guild) {
                              return guild.guild.id;
                            };
                            obj.renderItem = function renderItem(start) {
                              const item = start.item;
                              return closure_1_9(closure_1_13, {
                                user: item,
                                mutualGuild: item,
                                onPress() {
                                  return onPressMutualGuild(item.guild.id);
                                },
                                start: start.start,
                                end: start.end
                              });
                            };
                            tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                          }
                        }
                        return tmp4;
                      }
                    }
                    cResult[15] = tmp9Result;
                    let tmp16 = tmp9Result;
                  } else {
                    tmp16 = cResult[15];
                  }
                  if (cResult[16] === tmp14) {
                    if (cResult[17] === tmp16) {
                      let tmp18 = cResult[18];
                    }
                    class F {
                      constructor() {
                        arr = mutualGuilds;
                        if (null == mutualGuilds) {
                          tmp11 = jsx;
                          tmp12 = View;
                          obj1 = { style: null, children: null };
                          tmp13 = closure_4;
                          obj1.style = closure_4.loadingState;
                          tmp14 = jsx;
                          tmp15 = ActivityIndicator;
                          obj1.children = jsx(ActivityIndicator, {});
                          tmp4 = jsx(View, obj1);
                        } else {
                          num = 0;
                          if (0 === arr.length) {
                            tmp5 = jsx;
                            tmp6 = View;
                            obj4 = { style: null, children: null };
                            tmp7 = closure_4;
                            obj4.style = closure_4.emptyState;
                            tmp8 = jsx;
                            tmp9 = closure_0;
                            tmp10 = closure_2;
                            obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                            tmp4 = jsx(View, obj4);
                          } else {
                            tmp = jsx;
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            obj = { data: null, keyExtractor: null, renderItem: null };
                            obj.data = arr;
                            obj.keyExtractor = function keyExtractor(guild) {
                              return guild.guild.id;
                            };
                            obj.renderItem = function renderItem(start) {
                              const item = start.item;
                              return closure_1_9(closure_1_13, {
                                user: item,
                                mutualGuild: item,
                                onPress() {
                                  return onPressMutualGuild(item.guild.id);
                                },
                                start: start.start,
                                end: start.end
                              });
                            };
                            tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                          }
                        }
                        return tmp4;
                      }
                    }
                    if (cResult[19] !== undefined) {
                      const tmp21 = tmp7(tmp2[23])(tmp19);
                      class F {
                        constructor() {
                          arr = mutualGuilds;
                          if (null == mutualGuilds) {
                            tmp11 = jsx;
                            tmp12 = View;
                            obj1 = { style: null, children: null };
                            tmp13 = closure_4;
                            obj1.style = closure_4.loadingState;
                            tmp14 = jsx;
                            tmp15 = ActivityIndicator;
                            obj1.children = jsx(ActivityIndicator, {});
                            tmp4 = jsx(View, obj1);
                          } else {
                            num = 0;
                            if (0 === arr.length) {
                              tmp5 = jsx;
                              tmp6 = View;
                              obj4 = { style: null, children: null };
                              tmp7 = closure_4;
                              obj4.style = closure_4.emptyState;
                              tmp8 = jsx;
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                              tmp4 = jsx(View, obj4);
                            } else {
                              tmp = jsx;
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = { data: null, keyExtractor: null, renderItem: null };
                              obj.data = arr;
                              obj.keyExtractor = function keyExtractor(guild) {
                                return guild.guild.id;
                              };
                              obj.renderItem = function renderItem(start) {
                                const item = start.item;
                                return closure_1_9(closure_1_13, {
                                  user: item,
                                  mutualGuild: item,
                                  onPress() {
                                    return onPressMutualGuild(item.guild.id);
                                  },
                                  start: start.start,
                                  end: start.end
                                });
                              };
                              tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                            }
                          }
                          return tmp4;
                        }
                      }
                      cResult[20] = tmp21;
                      let tmp20 = tmp21;
                    } else {
                      tmp20 = cResult[20];
                    }
                    if (cResult[21] !== tmp10) {
                      const tmp10Result = tmp10();
                      class F {
                        constructor() {
                          arr = mutualGuilds;
                          if (null == mutualGuilds) {
                            tmp11 = jsx;
                            tmp12 = View;
                            obj1 = { style: null, children: null };
                            tmp13 = closure_4;
                            obj1.style = closure_4.loadingState;
                            tmp14 = jsx;
                            tmp15 = ActivityIndicator;
                            obj1.children = jsx(ActivityIndicator, {});
                            tmp4 = jsx(View, obj1);
                          } else {
                            num = 0;
                            if (0 === arr.length) {
                              tmp5 = jsx;
                              tmp6 = View;
                              obj4 = { style: null, children: null };
                              tmp7 = closure_4;
                              obj4.style = closure_4.emptyState;
                              tmp8 = jsx;
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                              tmp4 = jsx(View, obj4);
                            } else {
                              tmp = jsx;
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = { data: null, keyExtractor: null, renderItem: null };
                              obj.data = arr;
                              obj.keyExtractor = function keyExtractor(guild) {
                                return guild.guild.id;
                              };
                              obj.renderItem = function renderItem(start) {
                                const item = start.item;
                                return closure_1_9(closure_1_13, {
                                  user: item,
                                  mutualGuild: item,
                                  onPress() {
                                    return onPressMutualGuild(item.guild.id);
                                  },
                                  start: start.start,
                                  end: start.end
                                });
                              };
                              tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                            }
                          }
                          return tmp4;
                        }
                      }
                      cResult[22] = tmp10Result;
                      let tmp22 = tmp10Result;
                    } else {
                      tmp22 = cResult[22];
                    }
                    if (cResult[23] === tmp22) {
                      if (cResult[24] === tmp20) {
                        let tmp24 = cResult[25];
                      }
                      if (cResult[26] === tmp24) {
                        if (cResult[27] === tmp18) {
                          let tmp25 = cResult[28];
                        }
                        if (cResult[29] === tmp6) {
                          if (cResult[30] === tmp25) {
                            tmp(tmp2[24]);
                            class F {
                              constructor() {
                                arr = mutualGuilds;
                                if (null == mutualGuilds) {
                                  tmp11 = jsx;
                                  tmp12 = View;
                                  obj1 = { style: null, children: null };
                                  tmp13 = closure_4;
                                  obj1.style = closure_4.loadingState;
                                  tmp14 = jsx;
                                  tmp15 = ActivityIndicator;
                                  obj1.children = jsx(ActivityIndicator, {});
                                  tmp4 = jsx(View, obj1);
                                } else {
                                  num = 0;
                                  if (0 === arr.length) {
                                    tmp5 = jsx;
                                    tmp6 = View;
                                    obj4 = { style: null, children: null };
                                    tmp7 = closure_4;
                                    obj4.style = closure_4.emptyState;
                                    tmp8 = jsx;
                                    tmp9 = closure_0;
                                    tmp10 = closure_2;
                                    obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                                    tmp4 = jsx(View, obj4);
                                  } else {
                                    tmp = jsx;
                                    tmp2 = closure_0;
                                    tmp3 = closure_2;
                                    obj = { data: null, keyExtractor: null, renderItem: null };
                                    obj.data = arr;
                                    obj.keyExtractor = function keyExtractor(guild) {
                                      return guild.guild.id;
                                    };
                                    obj.renderItem = function renderItem(start) {
                                      const item = start.item;
                                      return closure_1_9(closure_1_13, {
                                        user: item,
                                        mutualGuild: item,
                                        onPress() {
                                          return onPressMutualGuild(item.guild.id);
                                        },
                                        start: start.start,
                                        end: start.end
                                      });
                                    };
                                    tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                                  }
                                }
                                return tmp4;
                              }
                            }
                            const _Symbol = Symbol;
                            if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                              class B {
                                constructor(arg0) {
                                  tmp = closure_5(user.nativeEvent.layout.width);
                                  return;
                                }
                              }
                              class F {
                                constructor() {
                                  arr = mutualGuilds;
                                  if (null == mutualGuilds) {
                                    tmp11 = jsx;
                                    tmp12 = View;
                                    obj1 = { style: null, children: null };
                                    tmp13 = closure_4;
                                    obj1.style = closure_4.loadingState;
                                    tmp14 = jsx;
                                    tmp15 = ActivityIndicator;
                                    obj1.children = jsx(ActivityIndicator, {});
                                    tmp4 = jsx(View, obj1);
                                  } else {
                                    num = 0;
                                    if (0 === arr.length) {
                                      tmp5 = jsx;
                                      tmp6 = View;
                                      obj4 = { style: null, children: null };
                                      tmp7 = closure_4;
                                      obj4.style = closure_4.emptyState;
                                      tmp8 = jsx;
                                      tmp9 = closure_0;
                                      tmp10 = closure_2;
                                      obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                                      tmp4 = jsx(View, obj4);
                                    } else {
                                      tmp = jsx;
                                      tmp2 = closure_0;
                                      tmp3 = closure_2;
                                      obj = { data: null, keyExtractor: null, renderItem: null };
                                      obj.data = arr;
                                      obj.keyExtractor = function keyExtractor(guild) {
                                        return guild.guild.id;
                                      };
                                      obj.renderItem = function renderItem(start) {
                                        const item = start.item;
                                        return closure_1_9(closure_1_13, {
                                          user: item,
                                          mutualGuild: item,
                                          onPress() {
                                            return onPressMutualGuild(item.guild.id);
                                          },
                                          start: start.start,
                                          end: start.end
                                        });
                                      };
                                      tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                                    }
                                  }
                                  return tmp4;
                                }
                              }
                            } else {
                              class B {
                                constructor(arg0) {
                                  tmp = closure_5(user.nativeEvent.layout.width);
                                  return;
                                }
                              }
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                              class B {
                                constructor(arg0) {
                                  tmp = closure_5(user.nativeEvent.layout.width);
                                  return;
                                }
                              }
                              const string = tmp34.string;
                              class F {
                                constructor() {
                                  arr = mutualGuilds;
                                  if (null == mutualGuilds) {
                                    tmp11 = jsx;
                                    tmp12 = View;
                                    obj1 = { style: null, children: null };
                                    tmp13 = closure_4;
                                    obj1.style = closure_4.loadingState;
                                    tmp14 = jsx;
                                    tmp15 = ActivityIndicator;
                                    obj1.children = jsx(ActivityIndicator, {});
                                    tmp4 = jsx(View, obj1);
                                  } else {
                                    num = 0;
                                    if (0 === arr.length) {
                                      tmp5 = jsx;
                                      tmp6 = View;
                                      obj4 = { style: null, children: null };
                                      tmp7 = closure_4;
                                      obj4.style = closure_4.emptyState;
                                      tmp8 = jsx;
                                      tmp9 = closure_0;
                                      tmp10 = closure_2;
                                      obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                                      tmp4 = jsx(View, obj4);
                                    } else {
                                      tmp = jsx;
                                      tmp2 = closure_0;
                                      tmp3 = closure_2;
                                      obj = { data: null, keyExtractor: null, renderItem: null };
                                      obj.data = arr;
                                      obj.keyExtractor = function keyExtractor(guild) {
                                        return guild.guild.id;
                                      };
                                      obj.renderItem = function renderItem(start) {
                                        const item = start.item;
                                        return closure_1_9(closure_1_13, {
                                          user: item,
                                          mutualGuild: item,
                                          onPress() {
                                            return onPressMutualGuild(item.guild.id);
                                          },
                                          start: start.start,
                                          end: start.end
                                        });
                                      };
                                      tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                                    }
                                  }
                                  return tmp4;
                                }
                              }
                              cResult[34] = tmp35;
                            } else {
                              class B {
                                constructor(arg0) {
                                  tmp = closure_5(user.nativeEvent.layout.width);
                                  return;
                                }
                              }
                            }
                            if (cResult[35] !== tmp30) {
                              class B {
                                constructor(arg0) {
                                  tmp = closure_5(user.nativeEvent.layout.width);
                                  return;
                                }
                              }
                              class F {
                                constructor() {
                                  arr = mutualGuilds;
                                  if (null == mutualGuilds) {
                                    tmp11 = jsx;
                                    tmp12 = View;
                                    obj1 = { style: null, children: null };
                                    tmp13 = closure_4;
                                    obj1.style = closure_4.loadingState;
                                    tmp14 = jsx;
                                    tmp15 = ActivityIndicator;
                                    obj1.children = jsx(ActivityIndicator, {});
                                    tmp4 = jsx(View, obj1);
                                  } else {
                                    num = 0;
                                    if (0 === arr.length) {
                                      tmp5 = jsx;
                                      tmp6 = View;
                                      obj4 = { style: null, children: null };
                                      tmp7 = closure_4;
                                      obj4.style = closure_4.emptyState;
                                      tmp8 = jsx;
                                      tmp9 = closure_0;
                                      tmp10 = closure_2;
                                      obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                                      tmp4 = jsx(View, obj4);
                                    } else {
                                      tmp = jsx;
                                      tmp2 = closure_0;
                                      tmp3 = closure_2;
                                      obj = { data: null, keyExtractor: null, renderItem: null };
                                      obj.data = arr;
                                      obj.keyExtractor = function keyExtractor(guild) {
                                        return guild.guild.id;
                                      };
                                      obj.renderItem = function renderItem(start) {
                                        const item = start.item;
                                        return closure_1_9(closure_1_13, {
                                          user: item,
                                          mutualGuild: item,
                                          onPress() {
                                            return onPressMutualGuild(item.guild.id);
                                          },
                                          start: start.start,
                                          end: start.end
                                        });
                                      };
                                      tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                                    }
                                  }
                                  return tmp4;
                                }
                              }
                              let obj2 = { state: tmp30 };
                              tmp39[0] = closure_9(tmp(tmp2[26]).Tabs, obj2);
                              const tmp40 = closure_9(closure_5, tmp39);
                              let obj3 = { state: tmp30 };
                              const tmp41 = closure_9(tmp(tmp2[27]).SegmentedControlPages, obj3);
                              cResult[35] = tmp30;
                              cResult[36] = tmp40;
                              cResult[37] = tmp41;
                              let tmp37 = tmp41;
                            } else {
                              class B {
                                constructor(arg0) {
                                  tmp = closure_5(user.nativeEvent.layout.width);
                                  return;
                                }
                              }
                              tmp37 = cResult[37];
                            }
                            if (cResult[38] === tmp4.container) {
                              class B {
                                constructor(arg0) {
                                  tmp = closure_5(user.nativeEvent.layout.width);
                                  return;
                                }
                              }
                            }
                            const obj4 = { scrollable: true, title: tmp35, children: null };
                            const obj5 = { style: tmp4.container, onLayout: B, children: null };
                            const items = [tmp36, tmp37];
                            obj5.children = items;
                            obj4.children = closure_10(closure_5, obj5);
                            const tmp47 = closure_9(tmp7(tmp2[20]), obj4);
                            cResult[38] = tmp4.container;
                            cResult[39] = tmp36;
                            cResult[40] = tmp37;
                            cResult[41] = tmp47;
                            const tmp7Result = tmp7(tmp2[20]);
                          }
                        }
                        class F {
                          constructor() {
                            arr = mutualGuilds;
                            if (null == mutualGuilds) {
                              tmp11 = jsx;
                              tmp12 = View;
                              obj1 = { style: null, children: null };
                              tmp13 = closure_4;
                              obj1.style = closure_4.loadingState;
                              tmp14 = jsx;
                              tmp15 = ActivityIndicator;
                              obj1.children = jsx(ActivityIndicator, {});
                              tmp4 = jsx(View, obj1);
                            } else {
                              num = 0;
                              if (0 === arr.length) {
                                tmp5 = jsx;
                                tmp6 = View;
                                obj4 = { style: null, children: null };
                                tmp7 = closure_4;
                                obj4.style = closure_4.emptyState;
                                tmp8 = jsx;
                                tmp9 = closure_0;
                                tmp10 = closure_2;
                                obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                                tmp4 = jsx(View, obj4);
                              } else {
                                tmp = jsx;
                                tmp2 = closure_0;
                                tmp3 = closure_2;
                                obj = { data: null, keyExtractor: null, renderItem: null };
                                obj.data = arr;
                                obj.keyExtractor = function keyExtractor(guild) {
                                  return guild.guild.id;
                                };
                                obj.renderItem = function renderItem(start) {
                                  const item = start.item;
                                  return closure_1_9(closure_1_13, {
                                    user: item,
                                    mutualGuild: item,
                                    onPress() {
                                      return onPressMutualGuild(item.guild.id);
                                    },
                                    start: start.start,
                                    end: start.end
                                  });
                                };
                                tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                              }
                            }
                            return tmp4;
                          }
                        }
                        tmp28[0] = tmp6;
                        tmp28[1] = num7;
                        tmp28[2] = tmp25;
                        cResult[29] = tmp6;
                        cResult[30] = tmp25;
                        cResult[31] = num7;
                        cResult[32] = tmp28;
                      }
                      class F {
                        constructor() {
                          arr = mutualGuilds;
                          if (null == mutualGuilds) {
                            tmp11 = jsx;
                            tmp12 = View;
                            obj1 = { style: null, children: null };
                            tmp13 = closure_4;
                            obj1.style = closure_4.loadingState;
                            tmp14 = jsx;
                            tmp15 = ActivityIndicator;
                            obj1.children = jsx(ActivityIndicator, {});
                            tmp4 = jsx(View, obj1);
                          } else {
                            num = 0;
                            if (0 === arr.length) {
                              tmp5 = jsx;
                              tmp6 = View;
                              obj4 = { style: null, children: null };
                              tmp7 = closure_4;
                              obj4.style = closure_4.emptyState;
                              tmp8 = jsx;
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                              tmp4 = jsx(View, obj4);
                            } else {
                              tmp = jsx;
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = { data: null, keyExtractor: null, renderItem: null };
                              obj.data = arr;
                              obj.keyExtractor = function keyExtractor(guild) {
                                return guild.guild.id;
                              };
                              obj.renderItem = function renderItem(start) {
                                const item = start.item;
                                return closure_1_9(closure_1_13, {
                                  user: item,
                                  mutualGuild: item,
                                  onPress() {
                                    return onPressMutualGuild(item.guild.id);
                                  },
                                  start: start.start,
                                  end: start.end
                                });
                              };
                              tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                            }
                          }
                          return tmp4;
                        }
                      }
                      tmp26[0] = tmp18;
                      tmp26[1] = tmp24;
                      cResult[26] = tmp24;
                      cResult[27] = tmp18;
                      cResult[28] = tmp26;
                      tmp25 = tmp26;
                    }
                    const obj6 = { id: "mutual-guilds", label: tmp20, page: tmp22 };
                    cResult[23] = tmp22;
                    cResult[24] = tmp20;
                    cResult[25] = obj6;
                    tmp24 = obj6;
                  }
                  const obj7 = { id: "mutual-friends", label: tmp14, page: tmp16 };
                  cResult[16] = tmp14;
                  cResult[17] = tmp16;
                  cResult[18] = obj7;
                  tmp18 = obj7;
                }
              }
            }
          }
          class F {
            constructor() {
              arr = mutualGuilds;
              if (null == mutualGuilds) {
                tmp11 = jsx;
                tmp12 = View;
                obj1 = { style: null, children: null };
                tmp13 = closure_4;
                obj1.style = closure_4.loadingState;
                tmp14 = jsx;
                tmp15 = ActivityIndicator;
                obj1.children = jsx(ActivityIndicator, {});
                tmp4 = jsx(View, obj1);
              } else {
                num = 0;
                if (0 === arr.length) {
                  tmp5 = jsx;
                  tmp6 = View;
                  obj4 = { style: null, children: null };
                  tmp7 = closure_4;
                  obj4.style = closure_4.emptyState;
                  tmp8 = jsx;
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  obj4.children = jsx(closure_0(closure_2[21]).NoMutualServers, {});
                  tmp4 = jsx(View, obj4);
                } else {
                  tmp = jsx;
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = { data: null, keyExtractor: null, renderItem: null };
                  obj.data = arr;
                  obj.keyExtractor = function keyExtractor(guild) {
                    return guild.guild.id;
                  };
                  obj.renderItem = function renderItem(start) {
                    const item = start.item;
                    return closure_1_9(closure_1_13, {
                      user: item,
                      mutualGuild: item,
                      onPress() {
                        return onPressMutualGuild(item.guild.id);
                      },
                      start: start.start,
                      end: start.end
                    });
                  };
                  tmp4 = jsx(closure_0(closure_2[20]).UserProfileStackedActionSheetList, obj);
                }
              }
              return tmp4;
            }
          }
          cResult[6] = mutualGuilds;
          cResult[7] = onPressMutualGuild;
          cResult[8] = tmp4.emptyState;
          cResult[9] = tmp4.loadingState;
          cResult[10] = user;
          cResult[11] = F;
          tmp10 = F;
        }
      }
    }
  }
  const fn = function o() {
    if (null == mutualFriends) {
      const obj2 = { style: closure_4.loadingState, children: options(timestampProducer, {}) };
      let tmp4 = options(hasOwnProperty, obj2);
    } else if (0 === mutualFriends.length) {
      const obj3 = { style: closure_4.emptyState, children: options(NoMutualFriends.NoMutualFriends, {}) };
      tmp4 = options(hasOwnProperty, obj3);
    } else {
      const obj = {
        data: mutualFriends,
        keyExtractor(user) {
            return user.user.id;
          },
        renderItem(start) {
            const item = start.item;
            return closure_1_9(closure_1_12, {
              mutualFriend: item,
              guildId,
              onPress() {
                return onPressMutualFriend(item.user.id);
              },
              start: start.start,
              end: start.end
            });
          }
      };
      tmp4 = options(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, obj);
    }
    return tmp4;
  };
  cResult[0] = guildId;
  cResult[1] = mutualFriends;
  cResult[2] = onPressMutualFriend;
  cResult[3] = tmp4.emptyState;
  cResult[4] = tmp4.loadingState;
  cResult[5] = fn;
  tmp9 = fn;
  const tmp5 = onPressMutualGuild(noop.useState(0), 2);
}) : ((user) => {
  user = user.user;
  ({ guildId: importDefault, onPressMutualFriend: dependencyMap, onPressMutualGuild: _slicedToArray } = user);
  noop = undefined;
  const tmp = closure_11();
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  noop = tmp2[1];
  ({ mutualFriends, mutualGuilds } = useUserProfileMutualsDefault(user));
  const obj = noop;
  const tmp5 = useUserProfileMutualsDefault(user);
  const obj3 = { pageWidth: tmp2[0], defaultIndex: null, items: null };
  let num = 0;
  if (user.section === UserProfileSections.MUTUAL_GUILDS) {
    num = 1;
  }
  obj3.defaultIndex = num;
  let length;
  const obj2 = user(9282);
  if (mutualFriends != null) {
    length = mutualFriends.length;
  }
  const obj4 = { id: "mutual-friends", label: getMutualFriendsLabelDefault(length), page: null };
  if (null == mutualFriends) {
    const obj5 = { style: tmp.loadingState, children: closure_9(closure_6, {}) };
    let tmp10 = closure_9(closure_5, obj5);
    let tmp9 = closure_9;
  } else if (0 === mutualFriends.length) {
    const obj6 = { style: tmp.emptyState, children: closure_9(tmp6(12276).NoMutualFriends, {}) };
    tmp10 = closure_9(closure_5, obj6);
    tmp9 = closure_9;
  } else {
    tmp9 = closure_9;
    const obj7 = {
      data: mutualFriends,
      keyExtractor(user) {
          return user.user.id;
        },
      renderItem(start) {
          const item = start.item;
          return closure_1_9(closure_1_12, {
            mutualFriend: item,
            guildId,
            onPress() {
              return dependencyMap(item.user.id);
            },
            start: start.start,
            end: start.end
          });
        }
    };
    tmp10 = closure_9(tmp6(10841).UserProfileStackedActionSheetList, obj7);
  }
  obj4.page = tmp10;
  const items = [obj4, ];
  let length1;
  const tmp3Result = getMutualFriendsLabelDefault;
  if (mutualGuilds != null) {
    length1 = mutualGuilds.length;
  }
  const obj8 = { id: "mutual-guilds", label: getMutualGuildsLabelDefault(length1), page: null };
  if (null == mutualGuilds) {
    const obj9 = { style: tmp.loadingState, children: tmp9(closure_6, {}) };
    let tmp9Result = tmp9(closure_5, obj9);
  } else if (0 === mutualGuilds.length) {
    const obj10 = { style: tmp.emptyState, children: tmp9(tmp6(12271).NoMutualServers, {}) };
    tmp9Result = tmp9(closure_5, obj10);
  } else {
    const obj11 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(start) {
          const item = start.item;
          return closure_1_9(closure_1_13, {
            user: item,
            mutualGuild: item,
            onPress() {
              return _slicedToArray(item.guild.id);
            },
            start: start.start,
            end: start.end
          });
        }
    };
    tmp9Result = tmp9(tmp6(10841).UserProfileStackedActionSheetList, obj11);
  }
  obj8.page = tmp9Result;
  items[1] = obj8;
  obj3.items = items;
  const segmentedControlState = obj2.useSegmentedControlState(obj3);
  const callback = obj.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj12 = { scrollable: true, title: null, children: null };
  const tmp3Result3 = getMutualGuildsLabelDefault;
  const intl = tmp6(1126).intl;
  obj12.title = intl.string(user(1126).t["l2/aLi"]);
  const obj13 = { style: tmp.container, onLayout: callback, children: null };
  const tmp3Result4 = UserProfileStackedActionSheetDefault;
  const items1 = [tmp9(closure_5, { children: tmp9(user(12282).Tabs, { state: segmentedControlState }) }), tmp9(user(10974).SegmentedControlPages, { state: segmentedControlState })];
  obj13.children = items1;
  obj12.children = closure_10(closure_5, obj13);
  return tmp9(tmp3Result4, obj12);
});
export const MutualGuildRow = tmp4;