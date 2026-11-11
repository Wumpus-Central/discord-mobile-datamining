// discord_app/modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx
import throttleDefault from "../../../../../../_runtime/00550_throttle.js";
import util from "../../../../../intl/index.native.tsx";
import PermissionUtilsAll from "../../../../../utils/PermissionUtils.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import GuildUtilsDefault from "../../../../../utils/GuildUtils.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import sortByMatchScore from "../../../../autocompleter/index.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelMemberStore_mod from "../../../../../stores/ChannelMemberStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const sortByMatchScoreDefault = sortByMatchScore;

require = fn;
const View = fn(17).View;
let ChannelMemberStore = fn(7251);
({ EVERYONE_CHANNEL_ID: metroImportDefault, MemberListRowTypes: closure_8 } = ChannelMemberStore);
let ChannelMemberStore = ChannelMemberStore_mod;
const Constants = fn(1072);
({ RelationshipTypes: closure_15, StatusTypes: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = [];
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx",
);

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
  ({
    canShowDisplayNameStylesFont,
    disableStickySections,
    inActionSheet,
    disableThemedGradient,
    listStyleOverride,
    disableBottomSafeZone,
    insetEnd,
  } = searchable);
  if (canShowDisplayNameStylesFont === undefined) {
    canShowDisplayNameStylesFont = false;
  }
  let groups;
  let stateFromStoresArray1;
  closure_20 = undefined;
  let memo4;
  const analyticsLocations = guildId(onUserPress[17])().analyticsLocations;
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
  const first1 = onUserLongPress(
    flag3.useState(() => {
      items = [sortByMatchScore.AutocompleterResultTypes.USER];
      const obj = { userFilters: { guild: channelId, strict: true } };
      const obj2 = { guild: channelId, strict: true };
      return new sortByMatchScoreDefault(
        (canMentionEveryone, str) => {
          if ("" === str.trim()) {
            analyticsLocations(closure_20);
          } else {
            analyticsLocations(canMentionEveryone);
          }
        },
        items,
        undefined,
        obj,
      );
    }),
    1,
  )[0];
  closure_129_9 = first1;
  items = [flag, first1];
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
  const items1 = [groups];
  const items2 = [guildId, first];
  const stateFromStoresArray = channelId(onUserPress[12]).useStateFromStoresArray(
    items1,
    () => canShowDisplayNameStylesFont.filter((record) => groups.isMember(channelId, record.record.id)),
    items2,
  );
  closure_129_11 = stateFromStoresArray;
  const items3 = [tmp10, stateFromStoresArray];
  const memo = flag3.useMemo(() => {
    let mapped = null;
    if (stateFromStoresArray) {
      mapped = groups.map((record) => record.record.id);
    }
    return mapped;
  }, items3);
  guildId(onUserPress[13])(guildId, memo);
  const tmp16 = onUserLongPress(flag3.useState(flag), 2);
  const first2 = tmp16[0];
  closure_129_12 = first2;
  closure_129_13 = tmp16[1];
  const items4 = [stateFromStoresArray, tmp10];
  const effect1 = flag3.useEffect(() => {
    if (groups.length <= 0) {
      if (stateFromStoresArray) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          stateFromStores(false);
        }, 300);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    stateFromStores(true);
  }, items4);
  const items5 = [ref, tmp5[0]];
  const layoutEffect = flag3.useLayoutEffect(() => {
    const current = guildId.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items5);
  const items6 = [first1, guildId];
  const items7 = [flag, searchableEmptyState, first2, tmp5[0]];
  const callback = flag3.useCallback((str) => {
    closure_9.search(str);
    isNameplatedList(str);
    if ("" !== str.trim()) {
      const members = GuildUtilsDefault.requestMembers(channelId, str);
    }
  }, items6);
  closure_9 = tmp10;
  const memo1 = flag3.useMemo(() => {
    let tmp = null;
    if (roleId) {
      tmp = null;
      if (!rows) {
        let tmp3Result;
        if (onUserPress != null) {
          tmp3Result = tmp3(flag3);
        }
        tmp = tmp3Result;
      }
    }
    return tmp;
  }, items7);
  let obj2 = channelId(onUserPress[12]);
  let tmp = guildId;
  let tmp12 = groups;
  const items8 = [closure_9];
  const stateFromStoresObject = channelId(onUserPress[12]).useStateFromStoresObject(items8, () => {
    let tmp3 = null;
    if (channelId !== metroImportDefault) {
      tmp3 = channelId;
    }
    return ChannelMemberStore.getProps(guildId, tmp3);
  });
  groups = stateFromStoresObject.groups;
  const rows = stateFromStoresObject.rows;
  let obj3 = channelId(onUserPress[12]);
  const items9 = [stateFromStoresArray];
  const stateFromStores = channelId(onUserPress[12]).useStateFromStores(items9, () => {
    if (channelId !== metroImportDefault) {
      return ChannelStore.getChannel(tmp);
    }
  });
  let obj4 = channelId(onUserPress[12]);
  const items10 = [stateFromStores];
  const stateFromStores1 = channelId(onUserPress[12]).useStateFromStores(items10, () => stateFromStores.getChannelId());
  const tmp25 = guildId(onUserPress[18])();
  const items11 = [guildId];
  const memo2 = flag3.useMemo(() => {
    guild = GuildStore.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = PermissionUtilsAll.getGuildVisualOwnerId(guild);
    }
    return guildVisualOwnerId;
  }, items11);
  const ref2 = flag3.useRef(0);
  const ref3 = flag3.useRef(0);
  closure_130_0 = guildId;
  closure_130_1 = channelId;
  closure_130_2 = tmp10;
  closure_130_3 = ref;
  closure_130_4 = ref3;
  closure_130_5 = ref2;
  closure_130_6 = tmp25;
  const items12 = [channelId, guildId, tmp10, tmp25, ref2, ref, ref3];
  const memo3 = flag3.useMemo(
    () =>
      throttleDefault(() => {
        let tmp = null == ref.current || roleId;
        if (!tmp) {
          let tmp4 = channelId !== canShowDisplayNameStylesFont;
          if (tmp4) {
            tmp4 = null == stateFromStoresArray.getChannel(tmp2);
          }
          tmp = tmp4;
        }
        if (!tmp) {
          const obj2 = { guildId, channelId, y: ref2.current, height: ref3.current, rowHeight };
          const result = channelId(onUserPress[16]).subscribeChannelDimensions(obj2);
          const obj = channelId(onUserPress[16]);
        }
      }, 50),
    items12,
  );
  const items13 = [memo3];
  const items14 = [memo3];
  const callback1 = flag3.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.layout.height;
    memo3();
  }, items13);
  const callback2 = flag3.useCallback((nativeEvent) => {
    ref3.current = nativeEvent.nativeEvent.contentOffset.y;
    memo3();
  }, items14);
  const obj6 = { channel: stateFromStores, disable: null };
  let tmp33 = tmp10;
  let obj5 = channelId(onUserPress[12]);
  if (!tmp10) {
    tmp33 = !flag2;
  }
  obj6.disable = tmp33;
  const tmp32 = guildId(onUserPress[20]);
  const items15 = [stateFromStores, memo3];
  ({ listActionRenderer, listActionHeight } = guildId(onUserPress[20])(obj6));
  const effect2 = obj.useEffect(() => {
    if (null != stateFromStores) {
      memo3();
    }
  }, items15);
  const tmp32Result = guildId(onUserPress[20])(obj6);
  const items16 = [tmp12, stateFromStores1];
  stateFromStoresArray1 = channelId(onUserPress[12]).useStateFromStoresArray(items16, () => {
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
      obj = channelId(onUserPress[21]);
    }
    return [];
  });
  let tmp36 = null != roleId;
  if (tmp36) {
    tmp36 = !tmp11(tmp2[21]).isEveryoneRoleId(guildId, roleId);
    const tmp11Result2 = tmp11(tmp2[21]);
  }
  closure_20 = tmp36;
  const items17 = [guildId, roleId, tmp36, tmp10, stateFromStoresArray];
  memo4 = obj.useMemo(() => {
    if (closure_20) {
      if (closure_9) {
        let found = stateFromStoresArray.filter((record) => {
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
    found = stateFromStoresArray;
  }, items17);
  const items18 = [groups, memo4, tmp36];
  const items19 = [
    tmp36,
    stateFromStoresArray1,
    memo4,
    tmp10,
    guildId,
    rows,
    groups,
    memo2,
    onUserPress,
    flag3,
    channelId,
    stateFromStores1,
    onUserLongPress,
    analyticsLocations,
    isNameplatedList,
    canShowDisplayNameStylesFont,
  ];
  const callback3 = obj.useCallback((arg0) => {
    if (memo4.length > 0) {
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
  }, items18);
  let tmp39Result = null;
  const callback4 = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    guildId = arg1;
    if (closure_20) {
      if (!closure_9) {
        if (arg1 < stateFromStoresArray1.length) {
          const user1 = stateFromStores1.getUser(tmp4.userId);
          if (null != user1) {
            let obj = { user: user1, guildMember: tmp4, end: arg1 === stateFromStoresArray1.length - 1 };
            let tmp3 = obj;
          }
        }
      }
      if (null != tmp3) {
        const user = tmp3.user;
        const memberListMember = tmp3.memberListMember;
        ({ guildMember, comparator } = tmp3);
        let obj2 = {
          type: memo2.NONE,
          user,
          nickname: null,
          usernameColor: null,
          roleColors: null,
          isNameplatedRow: null,
          premiumSince: null,
          isOwner: null,
          guildId: null,
          canShowDisplayNameStylesFont: null,
          onPress: null,
          onLongPress: null,
          start: null,
          end: null,
        };
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
          isOwner = memo2 === user.id;
        }
        obj2.isOwner = isOwner;
        obj2.guildId = guildId;
        obj2.canShowDisplayNameStylesFont = canShowDisplayNameStylesFont;
        obj2.onPress = function onPress(id) {
          if (null == onUserPress) {
            if (flag3) {
              const obj = {
                userId: id.id,
                channelId: channelId !== metroImportDefault ? channelId : stateFromStores1,
                roleId: null,
                sourceAnalyticsLocations: null,
              };
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
      const diff = memo4.length - 1;
      if (arg1 < memo4.length) {
        tmp14 = memo4[arg1];
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
  }, items19);
  if (flag) {
    const obj7 = { children: null };
    const obj8 = { style: null, children: null };
    const obj9 = { marginHorizontal: tmp(tmp2[26]).space.PX_16 };
    obj8.style = obj9;
    const obj10 = { size: "md", onChange: callback, ref: ref1 };
    obj8.children = ref3(tmp11(tmp2[27]).SearchBar, obj10);
    const items20 = [ref3(isNameplatedList, obj8), memo1];
    obj7.children = items20;
    tmp39Result = tmp39(tmp40, obj7);
  }
  const items21 = [tmp39Result];
  const obj11 = {
    ref,
    sections: null,
    getItemProps: null,
    getSectionProps: null,
    renderListHeader: null,
    listHeaderSize: null,
    onLayout: null,
    onScroll: null,
    disableStickySections: null,
    inActionSheet: null,
    disableThemedGradient: null,
    listStyleOverride: null,
    disableBottomSafeZone: null,
    insetEnd: null,
  };
  if (tmp36) {
    if (!tmp10) {
      const items22 = [stateFromStoresArray1.length];
      obj11.sections = items22;
      obj11.getItemProps = callback4;
      obj11.getSectionProps = callback3;
      obj11.renderListHeader = listActionRenderer;
      obj11.listHeaderSize = listActionHeight;
      obj11.onLayout = callback1;
      obj11.onScroll = callback2;
      obj11.disableStickySections = disableStickySections;
      obj11.inActionSheet = inActionSheet;
      obj11.disableThemedGradient = disableThemedGradient;
      obj11.listStyleOverride = listStyleOverride;
      obj11.disableBottomSafeZone = disableBottomSafeZone;
      obj11.insetEnd = insetEnd;
      let str2 = "guild-channel-user-list";
      if (tmp10) {
        str2 = "guild-channel-user-list-search-results";
      }
      const obj12 = { children: null };
      items21[1] = ref3(tmp45, obj11, str2);
      obj12.children = items21;
      return tmp39(tmp40, obj12);
    }
  }
  if (tmp10) {
    memo4 = [];
    memo4[0] = memo4.length;
    let mapped = memo4;
  } else {
    const groups1 = stateFromStoresObject.groups;
    mapped = groups1.map((count) => count.count);
  }
});
