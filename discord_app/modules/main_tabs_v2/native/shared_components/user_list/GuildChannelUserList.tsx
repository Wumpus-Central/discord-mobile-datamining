// === Module 11926: GuildChannelUserList ===

// Module 11926 (GuildChannelUserList)
import throttleDefault from "throttle" /* 550 */;
import util from "util" /* 1115 */;
import PermissionUtilsAll from "PermissionUtils" /* 4469 */;
import UserUtilsDefault from "UserUtils" /* 4673 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4981 */;
import GuildUtilsDefault from "GuildUtils" /* 5824 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8527 */;
import sortByMatchScore from "sortByMatchScore" /* 10182 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelMemberStore_mod from "ChannelMemberStore" /* 7609 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildMemberStore from "GuildMemberStore" /* 2107 */;
import GuildStore from "GuildStore" /* 2066 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import UserStore from "UserStore" /* 1372 */;

const sortByMatchScoreDefault = sortByMatchScore;

require = fn;
const View = fn(17).View;
let ChannelMemberStore = fn(7609);
({ EVERYONE_CHANNEL_ID: closure_7, MemberListRowTypes: closure_8 } = ChannelMemberStore);
let ChannelMemberStore = ChannelMemberStore_mod;
const Constants = fn(1074);
({ RelationshipTypes: closure_15, StatusTypes: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx");

export default noop.memo(function GuildChannelUserList(searchable) {
  let flag = searchable.searchable;
  if (flag === undefined) {
    flag = false;
  }
  ({ searchableEmptyState, channelId } = searchable);
  let guildId = searchable.guildId;
  const roleId = searchable.roleId;
  let flag2 = searchable.headerShown;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const onUserPress = searchable.onUserPress;
  const onUserLongPress = searchable.onUserLongPress;
  let flag3 = searchable.opensUserProfileOnUserPress;
  if (flag3 === undefined) {
    flag3 = true;
  }
  const isNameplatedList = searchable.isNameplatedList;
  ({ canShowDisplayNameStylesFont, disableStickySections, inActionSheet, disableThemedGradient, listStyleOverride, disableBottomSafeZone, insetEnd } = searchable);
  if (canShowDisplayNameStylesFont === undefined) {
    canShowDisplayNameStylesFont = false;
  }
  let stateFromStoresArray;
  closure_20 = undefined;
  let memo3;
  const analyticsLocations = guildId(onUserPress[15])().analyticsLocations;
  const ref = flag3.useRef(null);
  closure_129_0 = guildId;
  closure_129_1 = ref;
  closure_129_2 = flag;
  closure_129_3 = searchableEmptyState;
  const ref1 = flag3.useRef(null);
  closure_129_4 = ref1;
  const tmp5 = onUserLongPress(flag3.useState(""), 2);
  closure_129_5 = str;
  closure_129_6 = tmp5[1];
  let tmp6 = onUserLongPress(flag3.useState(closure_20), 2);
  const first = tmp6[0];
  closure_129_7 = first;
  closure_129_8 = tmp6[1];
  const first1 = onUserLongPress(flag3.useState(() => {
    const items = [sortByMatchScore.AutocompleterResultTypes.USER];
    const obj = { userFilters: { guild: channelId, strict: true } };
    const obj2 = { guild: channelId, strict: true };
    return new sortByMatchScoreDefault((canMentionEveryone, str) => {
      if ("" === str.trim()) {
        analyticsLocations(closure_20);
      } else {
        analyticsLocations(canMentionEveryone);
      }
    }, items, undefined, obj);
  }), 1)[0];
  closure_129_9 = first1;
  let items = [flag, first1];
  const effect = flag3.useEffect(() => {
    if (roleId) {
      const searchContext = closure_9.createSearchContext();
    } else {
      isNameplatedList("");
      closure_9.clean();
      const current = onUserLongPress.current;
      if (current != null) {
        current.setText("");
      }
    }
  }, items);
  let tmp10 = "" !== tmp5[0].trim();
  closure_129_10 = tmp10;
  const tmp11 = onUserLongPress(flag3.useState(flag), 2);
  const first2 = tmp11[0];
  closure_129_11 = first2;
  closure_129_12 = tmp11[1];
  const items1 = [first, tmp10];
  const effect1 = flag3.useEffect(() => {
    if (canShowDisplayNameStylesFont.length <= 0) {
      if (first) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          rows(false);
        }, 300);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    rows(true);
  }, items1);
  const items2 = [ref, tmp5[0]];
  const layoutEffect = flag3.useLayoutEffect(() => {
    const current = guildId.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items2);
  const items3 = [first1, guildId];
  const items4 = [flag, searchableEmptyState, first2, tmp5[0]];
  const callback = flag3.useCallback((str) => {
    closure_9.search(str);
    isNameplatedList(str);
    if ("" !== str.trim()) {
      const members = GuildUtilsDefault.requestMembers(channelId, str);
    }
  }, items3);
  closure_9 = tmp10;
  const memo = flag3.useMemo(() => {
    let tmp = null;
    if (roleId) {
      tmp = null;
      if (!groups) {
        let tmp3Result;
        if (onUserPress != null) {
          tmp3Result = tmp3(flag3);
        }
        tmp = tmp3Result;
      }
    }
    return tmp;
  }, items4);
  const items5 = [closure_9];
  const stateFromStoresObject = channelId(onUserPress[16]).useStateFromStoresObject(items5, () => {
    let tmp3 = null;
    if (channelId !== React5) {
      tmp3 = channelId;
    }
    return ChannelMemberStore.getProps(guildId, tmp3);
  });
  const groups = stateFromStoresObject.groups;
  const rows = stateFromStoresObject.rows;
  let obj2 = channelId(onUserPress[16]);
  let tmp = guildId;
  const items6 = [first];
  const stateFromStores = channelId(onUserPress[16]).useStateFromStores(items6, () => {
    if (channelId !== React5) {
      return ChannelStore.getChannel(tmp);
    }
  });
  let obj3 = channelId(onUserPress[16]);
  const items7 = [stateFromStores];
  const stateFromStores1 = channelId(onUserPress[16]).useStateFromStores(items7, () => stateFromStores.getChannelId());
  const tmp21 = guildId(onUserPress[17])();
  const items8 = [guildId];
  const memo1 = flag3.useMemo(() => {
    const guild = GuildStore.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = PermissionUtilsAll.getGuildVisualOwnerId(guild);
    }
    return guildVisualOwnerId;
  }, items8);
  const ref2 = flag3.useRef(0);
  const ref3 = flag3.useRef(0);
  closure_130_0 = guildId;
  closure_130_1 = channelId;
  closure_130_2 = tmp10;
  closure_130_3 = ref;
  closure_130_4 = ref3;
  closure_130_5 = ref2;
  closure_130_6 = tmp21;
  const items9 = [channelId, guildId, tmp10, tmp21, ref2, ref, ref3];
  const memo2 = flag3.useMemo(() => throttleDefault(() => {
    let tmp = null == ref.current || roleId;
    if (!tmp) {
      let tmp4 = channelId !== canShowDisplayNameStylesFont;
      if (tmp4) {
        tmp4 = null == first.getChannel(tmp2);
      }
      tmp = tmp4;
    }
    if (!tmp) {
      const obj2 = { guildId, channelId, y: ref2.current, height: ref3.current, rowHeight };
      const result = channelId(onUserPress[14]).subscribeChannelDimensions(obj2);
      const obj = channelId(onUserPress[14]);
    }
  }, 50), items9);
  const items10 = [memo2];
  const items11 = [memo2];
  const callback1 = flag3.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.layout.height;
    memo2();
  }, items10);
  const callback2 = flag3.useCallback((nativeEvent) => {
    ref3.current = nativeEvent.nativeEvent.contentOffset.y;
    memo2();
  }, items11);
  let obj5 = { channel: stateFromStores, disable: null };
  let tmp29 = tmp10;
  let obj4 = channelId(onUserPress[16]);
  if (!tmp10) {
    tmp29 = !flag2;
  }
  obj5.disable = tmp29;
  const tmp28 = guildId(onUserPress[19]);
  const items12 = [stateFromStores, memo2];
  ({ listActionRenderer, listActionHeight } = guildId(onUserPress[19])(obj5));
  const effect2 = obj.useEffect(() => {
    if (null != stateFromStores) {
      memo2();
    }
  }, items12);
  const tmp28Result = guildId(onUserPress[19])(obj5);
  const items13 = [groups, stateFromStores1];
  stateFromStoresArray = channelId(onUserPress[16]).useStateFromStoresArray(items13, () => {
    if (null != roleId) {
      if (!obj.isEveryoneRoleId(guildId, tmp)) {
        let tmp6 = null;
        if (closure_0 !== canShowDisplayNameStylesFont) {
          tmp6 = closure_0;
        }
        closure_0 = tmp6;
        const members = groups.getMembers(guildId);
        const found = members.filter((roles) => {
          roles = roles.roles;
          let hasItem = roles.includes(roleId);
          if (hasItem) {
            hasItem = null != stateFromStores1.getUser(roles.userId);
          }
          return hasItem;
        });
        return found.sort((userId, userId2) => {
          const user = UserStore.getUser(userId.userId);
          const user1 = UserStore.getUser(userId2.userId);
          let str = NicknameUtilsDefault.getNickname(guildId, closure_0, user);
          if (str == null) {
            str = UserUtilsDefault.getGlobalName(user);
            const tmp3Result = UserUtilsDefault;
          }
          let str2 = NicknameUtilsDefault.getNickname(guildId, closure_0, user1);
          if (str2 == null) {
            str2 = UserUtilsDefault.getGlobalName(user1);
            const tmp3Result4 = UserUtilsDefault;
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
      obj = channelId(onUserPress[20]);
    }
    return [];
  });
  let tmp32 = null != roleId;
  if (tmp32) {
    tmp32 = !tmp17(tmp2[20]).isEveryoneRoleId(guildId, roleId);
    const tmp17Result2 = tmp17(tmp2[20]);
  }
  closure_20 = tmp32;
  const items14 = [guildId, roleId, tmp32, tmp10, first];
  memo3 = obj.useMemo(() => {
    if (closure_20) {
      if (closure_9) {
        let found = first.filter((record) => {
          const member = groups.getMember(guildId, record.record.id);
          let found;
          if (member != null) {
            const roles = member.roles;
            if (roles != null) {
              found = roles.find((item) => item === closure_1_2);
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
      const element = { type: "section", props: null };
      const obj = { title: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["zkoeq/"]);
      element.props = obj;
      return element;
    } else if (!closure_20) {
      ({ title, count } = groups[arg0]);
      if (null != title) {
        if (0 !== count) {
          if (tmp3 === constants.UNKNOWN) {
            let element1 = { type: "placeholder" };
          } else {
            element1 = { type: "section", props: null };
            const obj2 = { title: null };
            const _HermesInternal = HermesInternal;
            obj2.title = "" + title + " \u2014 " + count;
            element1.props = obj2;
          }
          return element1;
        }
      }
    }
  }, items15);
  let tmp35Result = null;
  const callback4 = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    guildId = arg1;
    if (closure_20) {
      if (!closure_9) {
        if (arg1 < stateFromStoresArray.length) {
          const user1 = stateFromStores1.getUser(tmp4.userId);
          if (null != user1) {
            let obj = { user: user1, guildMember: tmp4, end: arg1 === stateFromStoresArray.length - 1 };
            let tmp3 = obj;
          }
        }
      }
      if (null != tmp3) {
        const user = tmp3.user;
        const memberListMember = tmp3.memberListMember;
        ({ guildMember, comparator } = tmp3);
        let obj2 = { type: memo1.NONE, user, nickname: null, usernameColor: null, roleColors: null, isNameplatedRow: null, premiumSince: null, isOwner: null, guildId: null, canShowDisplayNameStylesFont: null, onPress: null, onLongPress: null, start: null, end: null };
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
        obj2.nickname = nick;
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
        obj2.usernameColor = colorString;
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
        obj2.roleColors = colorStrings;
        obj2.isNameplatedRow = isNameplatedList;
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
        obj2.premiumSince = premiumSince;
        if (null != memberListMember) {
          let isOwner = memberListMember.isOwner;
        } else {
          isOwner = memo1 === user.id;
        }
        obj2.isOwner = isOwner;
        obj2.guildId = guildId;
        obj2.canShowDisplayNameStylesFont = canShowDisplayNameStylesFont;
        obj2.onPress = function onPress(id) {
          if (null == onUserPress) {
            if (flag3) {
              const obj = { userId: id.id, channelId: channelId !== React5 ? channelId : stateFromStores1, roleId: null, sourceAnalyticsLocations: null };
              let colorRoleId;
              if (memberListMember != null) {
                colorRoleId = memberListMember.colorRoleId;
              }
              obj.roleId = colorRoleId;
              obj.sourceAnalyticsLocations = analyticsLocations;
              showUserProfileActionSheetDefault(obj);
            }
          } else {
            let obj2 = { user: id, index: null };
            if (!closure_20) {
              if (!closure_9) {
                let num3 = 0;
                let num4 = 0;
                let num5 = 0;
                if (0 < closure_0) {
                  do {
                    num4 = num4 + groups[num3].count;
                    num3 = num3 + 1;
                    num5 = num4;
                  } while (num3 < closure_0);
                }
                let sum = num5 + closure_1;
              }
              obj2.index = sum;
              obj2 = tmp(obj2);
            }
            sum = closure_1;
          }
        };
        let fn;
        if (null != onUserLongPress) {
          fn = () => {
            const obj = { user, index: null };
            if (!closure_20) {
              if (!closure_9) {
                let num3 = 0;
                let num4 = 0;
                let num5 = 0;
                if (0 < closure_0) {
                  do {
                    num4 = num4 + groups[num3].count;
                    num3 = num3 + 1;
                    num5 = num4;
                  } while (num3 < closure_0);
                }
                let sum = num5 + closure_1;
              }
              obj.index = sum;
              return tmp(obj);
            }
            sum = closure_1;
          };
        }
        const element = { type: "user", props: null };
        obj2.onLongPress = fn;
        obj2.start = tmp20;
        obj2.end = tmp3.end;
        element.props = obj2;
        return element;
      } else {
        const element1 = { type: "placeholder", props: null };
        const obj3 = { start: tmp20, end: arg1 === groups[arg0].count - 1 };
        element1.props = obj3;
        return element1;
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
        const member = groups.getMember(guildId, record.id);
        if (null != member) {
          const obj4 = { user: record, guildMember: member, comparator: null, end: null };
          let comparator1;
          if (!closure_20) {
            comparator1 = tmp14.comparator;
          }
          obj4.comparator = comparator1;
          obj4.end = arg1 === diff;
          tmp3 = obj4;
        }
      }
    } else {
      const tmp10 = rows[groups[arg0].index + 1 + arg1];
      if (null != tmp10) {
        if (tmp10.type === analyticsLocations.MEMBER) {
          const obj5 = { user: tmp10.user, memberListMember: tmp10, end: arg1 === tmp9[arg0].count - 1 };
          tmp3 = obj5;
        }
      }
    }
  }, items16);
  if (flag) {
    const obj6 = { children: null };
    const obj7 = { style: null, children: null };
    const obj8 = { marginHorizontal: tmp(tmp2[25]).space.PX_16 };
    obj7.style = obj8;
    const obj9 = { size: "md", onChange: callback, ref: ref1 };
    obj7.children = ref3(tmp17(tmp2[26]).SearchField, obj9);
    const items17 = [ref3(isNameplatedList, obj7), memo];
    obj6.children = items17;
    tmp35Result = tmp35(tmp36, obj6);
  }
  const items18 = [tmp35Result, ];
  const obj10 = { ref, sections: null, getItemProps: null, getSectionProps: null, renderListHeader: null, listHeaderSize: null, onLayout: null, onScroll: null, disableStickySections: null, inActionSheet: null, disableThemedGradient: null, listStyleOverride: null, disableBottomSafeZone: null, insetEnd: null };
  if (tmp32) {
    if (!tmp10) {
      const items19 = [stateFromStoresArray.length];
      obj10.sections = items19;
      obj10.getItemProps = callback4;
      obj10.getSectionProps = callback3;
      obj10.renderListHeader = listActionRenderer;
      obj10.listHeaderSize = listActionHeight;
      obj10.onLayout = callback1;
      obj10.onScroll = callback2;
      obj10.disableStickySections = disableStickySections;
      obj10.inActionSheet = inActionSheet;
      obj10.disableThemedGradient = disableThemedGradient;
      obj10.listStyleOverride = listStyleOverride;
      obj10.disableBottomSafeZone = disableBottomSafeZone;
      obj10.insetEnd = insetEnd;
      let str2 = "guild-channel-user-list";
      if (tmp10) {
        str2 = "guild-channel-user-list-search-results";
      }
      const obj11 = { children: null };
      items18[1] = ref3(tmp41, obj10, str2);
      obj11.children = items18;
      return tmp35(tmp36, obj11);
    }
  }
  if (tmp10) {
    memo3 = [];
    memo3[0] = memo3.length;
    let mapped = memo3;
  } else {
    const groups1 = stateFromStoresObject.groups;
    mapped = groups1.map((count) => count.count);
  }
});