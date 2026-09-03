// === Module 11413: ? ===

// Module 11413
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import getMemberListId from "getMemberListId" /* 6135 */;
import closure_9 from "getMemberListId" /* 6135 */;
import closure_10 from "ensureGuildLoaded" /* 1386 */;
import closure_11 from "trackCommunicationDisabled" /* 1991 */;
import closure_12 from "createGuildRecordFromRust" /* 1908 */;
import closure_13 from "handleConnectionOpen" /* 1980 */;
import closure_14 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let c5 = importAllResult;
({ EVERYONE_CHANNEL_ID: error, MemberListRowTypes: closure_8 } = getMemberListId);
({ RelationshipTypes: closure_15, StatusTypes: closure_16 } = ME);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = [];
const memoResult = importAllResult.memo(function GuildChannelUserList(searchable) {
  let flag = searchable.searchable;
  if (flag === undefined) {
    flag = false;
  }
  ({ searchableEmptyState, channelId } = searchable);
  let guildId = channelId;
  guildId = searchable.guildId;
  channelId = guildId;
  const roleId = searchable.roleId;
  closure_2 = roleId;
  let flag2 = searchable.headerShown;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const onUserPress = searchable.onUserPress;
  let ref = onUserPress;
  const onUserLongPress = searchable.onUserLongPress;
  let ref3 = onUserLongPress;
  let flag3 = searchable.opensUserProfileOnUserPress;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let ref2 = flag3;
  const isNameplatedList = searchable.isNameplatedList;
  closure_6 = isNameplatedList;
  ({ canShowDisplayNameStylesFont, disableStickySections, inActionSheet, disableThemedGradient, listStyleOverride, disableBottomSafeZone, insetEnd } = searchable);
  if (canShowDisplayNameStylesFont === undefined) {
    canShowDisplayNameStylesFont = false;
  }
  let first = canShowDisplayNameStylesFont;
  closure_8 = undefined;
  closure_9 = undefined;
  first = undefined;
  let groups;
  let rows;
  let stateFromStores;
  let stateFromStores1;
  let memo1;
  ref2 = undefined;
  ref3 = undefined;
  let memo2;
  let stateFromStoresArray;
  closure_20 = undefined;
  let memo3;
  const analyticsLocations = channelId(ref[15])().analyticsLocations;
  closure_8 = analyticsLocations;
  let obj = ref2;
  ref = ref2.useRef(null);
  channelId = ref;
  closure_2 = flag;
  ref = searchableEmptyState;
  ref3 = undefined;
  ref2 = undefined;
  closure_6 = undefined;
  first = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  first = undefined;
  groups = undefined;
  rows = undefined;
  const ref1 = ref2.useRef(null);
  ref3 = ref1;
  let tmp5 = ref3(ref2.useState(""), 2);
  ref2 = str;
  closure_6 = tmp5[1];
  let tmp6 = ref3(ref2.useState(closure_20), 2);
  first = tmp6[0];
  closure_8 = tmp6[1];
  const first1 = ref3(ref2.useState(() => {
    let tmp = channelId(ref[11]);
    const items = [guildId(ref[11]).AutocompleterResultTypes.USER];
    obj = { userFilters: obj };
    obj = { guild: guildId, strict: true };
    tmp = new tmp((arg0, str) => {
      if ("" === str.trim()) {
        callback(closure_1_20);
      } else {
        callback(arg0);
      }
    }, items, undefined, obj);
    return tmp;
  }), 1)[0];
  closure_9 = first1;
  let items = [flag, first1];
  const effect = ref2.useEffect(() => {
    if (closure_2) {
      const searchContext = closure_9.createSearchContext();
    } else {
      callback2("");
      closure_9.clean();
      const current = ref3.current;
      if (current != null) {
        current.setText("");
      }
    }
  }, items);
  let tmp10 = "" !== tmp5[0].trim();
  first = tmp10;
  const tmp11 = ref3(ref2.useState(flag), 2);
  const first2 = tmp11[0];
  groups = first2;
  rows = tmp11[1];
  const items1 = [first, tmp10];
  const effect1 = ref2.useEffect(() => {
    if (first.length <= 0) {
      if (first) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          callback(false);
        }, 300);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    rows(true);
  }, items1);
  const items2 = [ref, tmp5[0]];
  const layoutEffect = ref2.useLayoutEffect(() => {
    const current = channelId.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items2);
  const items3 = [first1, guildId];
  const items4 = [flag, searchableEmptyState, first2, tmp5[0]];
  const callback = ref2.useCallback((str) => {
    closure_9.search(str);
    callback2(str);
    if ("" !== str.trim()) {
      const members = channelId(ref[12]).requestMembers(guildId, str);
      const obj = channelId(ref[12]);
    }
  }, items3);
  closure_9 = tmp10;
  const memo = ref2.useMemo(() => {
    let tmp = null;
    if (closure_2) {
      tmp = null;
      if (!groups) {
        let tmp3Result;
        if (ref != null) {
          tmp3Result = tmp3(ref2);
        }
        tmp = tmp3Result;
      }
    }
    return tmp;
  }, items4);
  obj1 = guildId(ref[16]);
  const items5 = [closure_9];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items5, () => {
    let tmp3 = null;
    if (guildId !== first) {
      tmp3 = guildId;
    }
    return closure_9.getProps(channelId, tmp3);
  });
  groups = stateFromStoresObject.groups;
  rows = stateFromStoresObject.rows;
  let obj2 = guildId(ref[16]);
  const items6 = [first];
  stateFromStores = obj2.useStateFromStores(items6, () => {
    if (guildId !== first) {
      return first.getChannel(tmp);
    }
  });
  let obj3 = guildId(ref[16]);
  const items7 = [stateFromStores];
  stateFromStores1 = obj3.useStateFromStores(items7, () => stateFromStores.getChannelId());
  const tmp21 = channelId(ref[17])();
  const items8 = [guildId];
  memo1 = ref2.useMemo(() => {
    const guild = rows.getGuild(channelId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = callback(ref[18]).getGuildVisualOwnerId(guild);
      const obj = callback(ref[18]);
    }
    return guildVisualOwnerId;
  }, items8);
  ref2 = ref2.useRef(0);
  ref3 = ref2.useRef(0);
  closure_2 = tmp10;
  closure_6 = tmp21;
  const items9 = [channelId, guildId, tmp10, tmp21, ref2, ref, ref3];
  memo2 = ref2.useMemo(() => channelId(ref[13])(() => {
    let tmp = null == ref.current || closure_2;
    if (!tmp) {
      let tmp4 = closure_1 !== closure_1_7;
      if (tmp4) {
        tmp4 = null == closure_1_10.getChannel(tmp2);
      }
      tmp = tmp4;
    }
    if (!tmp) {
      let obj = closure_1_0(closure_1_3[14]);
      obj = { guildId: null, channelId: null, y: null, height: null, rowHeight: null };
      obj[0] = closure_0;
      obj[1] = closure_1;
      obj[2] = ref2.current;
      obj[3] = ref3.current;
      obj[4] = closure_6;
      const result = obj.subscribeChannelDimensions(obj);
    }
  }, 50), items9);
  const items10 = [memo2];
  const items11 = [memo2];
  const callback1 = ref2.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.layout.height;
    memo2();
  }, items10);
  const callback2 = ref2.useCallback((nativeEvent) => {
    ref3.current = nativeEvent.nativeEvent.contentOffset.y;
    memo2();
  }, items11);
  obj = { channel: stateFromStores, disable: null };
  let tmp29 = tmp10;
  if (!tmp10) {
    tmp29 = !flag2;
  }
  obj[1] = tmp29;
  let tmp = channelId;
  const tmp28 = channelId(ref[19]);
  const items12 = [stateFromStores, memo2];
  ({ listActionRenderer, listActionHeight } = channelId(ref[19])(obj));
  const effect2 = obj.useEffect(() => {
    if (null != stateFromStores) {
      memo2();
    }
  }, items12);
  let tmp17Result = tmp17(tmp2[16]);
  const items13 = [groups, stateFromStores1];
  stateFromStoresArray = tmp17Result.useStateFromStoresArray(items13, () => {
    if (null != closure_2) {
      if (!obj.isEveryoneRoleId(channelId, tmp)) {
        let tmp6 = null;
        if (closure_0 !== first) {
          tmp6 = closure_0;
        }
        closure_0 = tmp6;
        const members = groups.getMembers(tmp4);
        const found = members.filter((roles) => {
          roles = roles.roles;
          let hasItem = roles.includes(closure_2);
          if (hasItem) {
            hasItem = null != closure_1_14.getUser(roles.userId);
          }
          return hasItem;
        });
        return found.sort((userId, userId2) => {
          const user = stateFromStores1.getUser(userId.userId);
          const user1 = stateFromStores1.getUser(userId2.userId);
          let str = channelId(ref[21]).getNickname(closure_1_1, closure_0, user);
          if (str == null) {
            let tmp3Result = tmp3(tmp4[22]);
            str = tmp3Result.getGlobalName(user);
          }
          tmp3Result = tmp3(tmp4[21]);
          let str2 = tmp3Result.getNickname(closure_1_1, closure_0, user1);
          if (str2 == null) {
            str2 = tmp3(tmp4[22]).getGlobalName(user1);
            const tmp3Result1 = tmp3(tmp4[22]);
          }
          if (str == null) {
            str = "";
          }
          if (str2 == null) {
            str2 = "";
          }
          return str.localeCompare(str2);
        });
      }
      obj = guildId(ref[20]);
      tmp4 = channelId;
    }
    return [];
  });
  let tmp32 = null != roleId;
  if (tmp32) {
    tmp17Result = tmp17(tmp2[20]);
    tmp32 = !tmp17Result.isEveryoneRoleId(guildId, roleId);
  }
  closure_20 = tmp32;
  const items14 = [guildId, roleId, tmp32, tmp10, first];
  memo3 = obj.useMemo(() => {
    if (closure_20) {
      if (closure_9) {
        let found = first.filter((record) => {
          const member = closure_1_11.getMember(closure_1, record.record.id);
          let found;
          if (member != null) {
            const roles = member.roles;
            if (roles != null) {
              found = roles.find((arg0) => arg0 === closure_2);
            }
          }
          return null != found;
        });
      }
      return found;
    }
    found = first;
  }, items14);
  const items15 = [groups, memo3, tmp32];
  const items16 = [tmp32, stateFromStoresArray, memo3, tmp10, guildId, rows, groups, memo1, onUserPress, flag3, channelId, stateFromStores1, onUserLongPress, analyticsLocations, isNameplatedList, canShowDisplayNameStylesFont];
  const callback3 = obj.useCallback((arg0) => {
    if (memo3.length > 0) {
      let obj = { type: "section", props: null };
      obj = { title: null };
      const intl = guildId(ref[23]).intl;
      obj[0] = intl.string(guildId(ref[23]).t["zkoeq/"]);
      obj[1] = obj;
      return obj;
    } else if (!closure_20) {
      ({ title, count } = groups[arg0]);
      if (null != title) {
        if (0 !== count) {
          if (tmp3 === ref2.UNKNOWN) {
            obj = { type: "placeholder" };
          } else {
            obj = { type: "section", props: null };
            obj1 = { title: null };
            const _HermesInternal = HermesInternal;
            obj1[0] = "" + title + " \u2014 " + count;
            obj[1] = obj1;
          }
          return obj;
        }
      }
    }
  }, items15);
  let tmp35Result = null;
  const callback4 = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    if (closure_20) {
      if (!closure_9) {
        if (arg1 < stateFromStoresArray.length) {
          let user = stateFromStores1.getUser(tmp4.userId);
          if (null != user) {
            let obj = { user: null, guildMember: null, end: null };
            obj[0] = user;
            obj[1] = tmp4;
            obj[2] = arg1 === arr.length - 1;
            let tmp3 = obj;
          }
        }
      }
      if (null != tmp3) {
        user = tmp3.user;
        const memberListMember = tmp3.memberListMember;
        ({ guildMember, comparator } = tmp3);
        obj = { type: null, user: null, nickname: null, usernameColor: null, roleColors: null, isNameplatedRow: null, premiumSince: null, isOwner: null, guildId: null, canShowDisplayNameStylesFont: null, onPress: null, onLongPress: null, start: null, end: null };
        obj[0] = memo1.NONE;
        obj[1] = user;
        let nick;
        if (memberListMember != null) {
          nick = memberListMember.nick;
        }
        if (nick == null) {
          if (null != comparator) {
            nick = comparator;
          }
          let nick1;
          if (guildMember != null) {
            nick1 = guildMember.nick;
          }
          comparator = nick1;
        }
        obj[2] = nick;
        let colorString;
        if (memberListMember != null) {
          colorString = memberListMember.colorString;
        }
        if (colorString == null) {
          let colorString1;
          if (guildMember != null) {
            colorString1 = guildMember.colorString;
          }
          colorString = colorString1;
        }
        obj[3] = colorString;
        let colorStrings;
        if (memberListMember != null) {
          colorStrings = memberListMember.colorStrings;
        }
        if (colorStrings == null) {
          let colorStrings1;
          if (guildMember != null) {
            colorStrings1 = guildMember.colorStrings;
          }
          colorStrings = colorStrings1;
        }
        obj[4] = colorStrings;
        obj[5] = closure_6;
        let premiumSince;
        if (memberListMember != null) {
          premiumSince = memberListMember.premiumSince;
        }
        if (premiumSince == null) {
          let premiumSince1;
          if (guildMember != null) {
            premiumSince1 = guildMember.premiumSince;
          }
          premiumSince = premiumSince1;
        }
        obj[6] = premiumSince;
        if (null != memberListMember) {
          let isOwner = memberListMember.isOwner;
        } else {
          isOwner = memo1 === user.id;
        }
        obj[7] = isOwner;
        obj[8] = closure_1;
        obj[9] = first;
        obj[10] = function onPress(id) {
          if (null == memberListMember) {
            if (closure_1_5) {
              let obj = { userId: null, channelId: null, roleId: null, sourceAnalyticsLocations: null };
              obj[0] = id.id;
              obj[1] = closure_0 !== first ? closure_0 : closure_1_14;
              let colorRoleId;
              if (memberListMember != null) {
                colorRoleId = memberListMember.colorRoleId;
              }
              obj[2] = colorRoleId;
              obj[3] = closure_1_8;
              channelId(ref[24])(obj);
              const tmp12 = channelId(ref[24]);
            }
          } else {
            obj = { user: null, index: null };
            obj[0] = id;
            if (!closure_1_20) {
              if (!closure_1_9) {
                let num3 = 0;
                let num4 = 0;
                let num5 = 0;
                if (0 < closure_0) {
                  do {
                    let tmp5 = closure_1_11;
                    num4 = num4 + closure_1_11[num3].count;
                    num3 = num3 + 1;
                    let tmp6 = closure_0;
                    num5 = num4;
                  } while (num3 < closure_0);
                }
                let sum = num5 + closure_1;
              }
              obj[1] = sum;
              obj = tmp(obj);
            }
            sum = closure_1;
          }
        };
        let fn;
        if (null != ref3) {
          fn = () => {
            const obj = { user, index: null };
            if (!closure_1_20) {
              if (!closure_1_9) {
                let num3 = 0;
                let num4 = 0;
                let num5 = 0;
                if (0 < closure_0) {
                  do {
                    let tmp4 = closure_1_11;
                    num4 = num4 + closure_1_11[num3].count;
                    num3 = num3 + 1;
                    let tmp5 = closure_0;
                    num5 = num4;
                  } while (num3 < closure_0);
                }
                let sum = num5 + closure_1;
              }
              obj[1] = sum;
              return tmp(obj);
            }
            sum = closure_1;
          };
        }
        obj = { type: "user", props: null };
        obj[11] = fn;
        obj[12] = tmp20;
        obj[13] = tmp3.end;
        obj[1] = obj;
        return obj;
      } else {
        obj1 = { type: "placeholder", props: null };
        const obj2 = { start: null, end: null };
        obj2[0] = tmp20;
        obj2[1] = arg1 === groups[arg0].count - 1;
        obj1[1] = obj2;
        return obj1;
      }
    }
    if (closure_9) {
      let tmp14;
      const diff = memo3.length - 1;
      if (arg1 < memo3.length) {
        tmp14 = memo3[arg1];
      }
      if (null != tmp14) {
        const record = tmp14.record;
        const member = groups.getMember(closure_1, record.id);
        if (null != member) {
          const obj3 = { user: null, guildMember: null, comparator: null, end: null };
          obj3[0] = record;
          obj3[1] = member;
          comparator = undefined;
          if (!closure_20) {
            comparator = tmp14.comparator;
          }
          obj3[2] = comparator;
          obj3[3] = arg1 === diff;
          tmp3 = obj3;
        }
      }
    } else {
      const tmp10 = rows[groups[arg0].index + 1 + arg1];
      if (null != tmp10) {
        if (tmp10.type === constants.MEMBER) {
          const obj4 = { user: null, memberListMember: null, end: null };
          obj4[0] = tmp10.user;
          obj4[1] = tmp10;
          obj4[2] = arg1 === tmp9[arg0].count - 1;
          tmp3 = obj4;
        }
      }
    }
  }, items16);
  if (flag) {
    obj = { children: null };
    obj1 = { style: null, children: null };
    obj2 = { marginHorizontal: null };
    obj2[0] = tmp(tmp2[25]).space.PX_16;
    obj1[0] = obj2;
    obj3 = { size: "md", onChange: null, ref: null };
    obj3[1] = callback;
    obj3[2] = ref1;
    obj1[1] = ref3(tmp17(tmp2[26]).SearchField, obj3);
    const items17 = [ref3(closure_6, obj1), memo];
    obj[0] = items17;
    tmp35Result = tmp35(tmp36, obj);
  }
  const items18 = [tmp35Result, ];
  let obj4 = { ref, sections: null, getItemProps: null, getSectionProps: null, renderListHeader: null, listHeaderSize: null, onLayout: null, onScroll: null, disableStickySections: null, inActionSheet: null, disableThemedGradient: null, listStyleOverride: null, disableBottomSafeZone: null, insetEnd: null };
  if (tmp32) {
    if (!tmp10) {
      const items19 = [stateFromStoresArray.length];
      obj4[1] = items19;
      obj4[2] = callback4;
      obj4[3] = callback3;
      obj4[4] = listActionRenderer;
      obj4[5] = listActionHeight;
      obj4[6] = callback1;
      obj4[7] = callback2;
      obj4[8] = disableStickySections;
      obj4[9] = inActionSheet;
      obj4[10] = disableThemedGradient;
      obj4[11] = listStyleOverride;
      obj4[12] = disableBottomSafeZone;
      obj4[13] = insetEnd;
      let str2 = "guild-channel-user-list";
      if (tmp10) {
        str2 = "guild-channel-user-list-search-results";
      }
      const obj5 = { children: null };
      items18[1] = ref3(tmp41, obj4, str2);
      obj5[0] = items18;
      return tmp35(tmp36, obj5);
    }
  }
  if (tmp10) {
    memo3 = [];
    memo3[0] = memo3.length;
    let mapped = memo3;
  } else {
    groups = stateFromStoresObject.groups;
    mapped = groups.map((count) => count.count);
  }
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx");

export default memoResult;