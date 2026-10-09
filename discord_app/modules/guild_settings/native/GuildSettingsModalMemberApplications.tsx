// discord_app/modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import MemberVerificationTypes from "../../guild_member_verification/MemberVerificationTypes.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import openJoinRequestActionSheetDefault from "../../guild_member_verification/native/openJoinRequestActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildJoinRequestStore from "../../guild_member_verification/GuildJoinRequestStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj = {
  containerInner: { paddingHorizontal: nativeDefault.space.PX_12, flex: 1, marginTop: 16 },
  spinnerContainer: { padding: 32 },
  footerSpinner: { paddingVertical: 16 },
  spinner: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1, marginTop: 16 };
obj.spinner = { color: nativeDefault.colors.TEXT_BRAND };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MemberApplicationUser(user) {
        const cResult = c.c(10);
        user = user.user;
        if (cResult[0] !== user) {
          const globalName = UserUtilsDefault.getGlobalName(user);
          cResult[0] = user;
          cResult[1] = globalName;
          let tmp4 = globalName;
        } else {
          tmp4 = cResult[1];
        }
        let username = tmp4;
        if (tmp4 == null) {
          username = user.username;
        }
        if (cResult[2] !== username) {
          const obj3 = { variant: "text-md/semibold", children: username };
          const tmp9 = React5(Text_Text.Text, obj3);
          cResult[2] = username;
          cResult[3] = tmp9;
          let tmp7 = tmp9;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp4) {
          if (cResult[5] === user) {
            let tmp10 = cResult[6];
          }
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp10) {
              let tmp13 = cResult[9];
            }
            return tmp13;
          }
          const obj4 = { children: null };
          const items = [tmp7, tmp10];
          obj4.children = items;
          const tmp16 = closure_1_8(hasOwnProperty, obj4);
          cResult[7] = tmp7;
          cResult[8] = tmp10;
          cResult[9] = tmp16;
          tmp13 = tmp16;
        }
        let tmp11 = null != tmp4;
        if (tmp11) {
          const obj5 = { variant: "text-xs/medium", children: user.username };
          tmp11 = React5(Text_Text.Text, obj5);
        }
        cResult[4] = tmp4;
        cResult[5] = user;
        cResult[6] = tmp11;
        tmp10 = tmp11;
      }
    : function MemberApplicationUser(user) {
        user = user.user;
        const globalName = UserUtilsDefault.getGlobalName(user);
        let username = globalName;
        if (globalName == null) {
          username = user.username;
        }
        const children = [React5(Text_Text.Text, { variant: "text-md/semibold", children: username })];
        let tmp5Result = null != globalName;
        if (tmp5Result) {
          const obj2 = { variant: "text-xs/medium", children: user.username };
          tmp5Result = React5(Text_Text.Text, obj2);
        }
        children[1] = tmp5Result;
        return closure_1_8(hasOwnProperty, { children });
      },
);
ReactCompilerGating = fn(558);
let closure_12 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildSettingsModalMemberApplication(joinRequest) {
        const cResult = joinRequest(576).c(14);
        joinRequest = joinRequest.joinRequest;
        ({ start, end } = joinRequest);
        if (cResult[0] !== joinRequest) {
          const fn = function n() {
            openJoinRequestActionSheetDefault(joinRequest);
          };
          cResult[0] = joinRequest;
          cResult[1] = fn;
          let tmp4 = fn;
        } else {
          tmp4 = cResult[1];
        }
        if (null == joinRequest) {
          return null;
        } else {
          const user = joinRequest.user;
          if (null == user) {
            return null;
          } else {
            if (cResult[2] !== user) {
              let userAvatarSource = null;
              if (null != user) {
                userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(user);
              }
              cResult[2] = user;
              cResult[3] = userAvatarSource;
              let tmp5 = userAvatarSource;
            } else {
              tmp5 = cResult[3];
            }
            if (cResult[4] !== tmp5) {
              const obj3 = { source: tmp5, size: tmp(1200).AvatarSizes.SMALL };
              const tmp10 = closure_7(tmp(1200).Avatar, obj3);
              cResult[4] = tmp5;
              cResult[5] = tmp10;
              let tmp8 = tmp10;
            } else {
              tmp8 = cResult[5];
            }
            if (cResult[6] !== user) {
              const obj4 = { user };
              const tmp14 = closure_7(closure_11, obj4);
              cResult[6] = user;
              cResult[7] = tmp14;
              let tmp11 = tmp14;
            } else {
              tmp11 = cResult[7];
            }
            if (cResult[8] === end) {
              if (cResult[9] === tmp4) {
                if (cResult[10] === start) {
                  if (cResult[11] === tmp8) {
                    if (cResult[12] === tmp11) {
                      let tmp15 = cResult[13];
                    }
                    return tmp15;
                  }
                }
              }
            }
            const obj5 = { arrow: true, icon: tmp8, label: tmp11, onPress: tmp4, start, end };
            const tmp17 = closure_7(tmp(6186).TableRow, obj5);
            cResult[8] = end;
            cResult[9] = tmp4;
            cResult[10] = start;
            cResult[11] = tmp8;
            cResult[12] = tmp11;
            cResult[13] = tmp17;
            tmp15 = tmp17;
          }
        }
        const obj = joinRequest(576);
      }
    : function GuildSettingsModalMemberApplication(joinRequest) {
        joinRequest = joinRequest.joinRequest;
        [][0] = joinRequest;
        ({ start, end } = joinRequest);
        if (null == joinRequest) {
          return null;
        } else {
          const user = joinRequest.user;
          if (null == user) {
            return null;
          } else {
            let userAvatarSource = null;
            if (null != user) {
              userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(user);
            }
            const obj2 = { arrow: true, icon: null, label: null, onPress: null, start: null, end: null };
            const obj3 = { source: userAvatarSource, size: joinRequest(1200).AvatarSizes.SMALL };
            obj2.icon = closure_7(joinRequest(1200).Avatar, obj3);
            const obj4 = { user };
            obj2.label = closure_7(closure_11, obj4);
            obj2.onPress = tmp;
            obj2.start = start;
            obj2.end = end;
            return closure_7(joinRequest(6186).TableRow, obj2);
          }
        }
      },
);
ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.TEXT_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildSettingsModalMemberApplications(arg0) {
        const cResult = applicationStatus(guildJoinRequests[7]).c(43);
        ({ guildId, applicationStatus } = arg0);
        const tmp4 = closure_10();
        importDefault = tmp4;
        const bottom = require("useSafeAreaInsets")().bottom;
        if (cResult[0] === applicationStatus) {
          if (cResult[1] === guildId) {
            let tmp5 = cResult[2];
          }
          guildJoinRequests = applicationStatus(tmp2[16]).useSortedMemberApplications(tmp5).guildJoinRequests;
          if (cResult[3] === guildId) {
            if (cResult[4] === guildJoinRequests) {
              let tmp6 = cResult[5];
            }
            const fetchNextPage = applicationStatus(tmp2[17]).usePaginatedMemberApplications(tmp6).fetchNextPage;
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [GuildJoinRequestStore];
              const fn = function y() {
                return fetching.isFetching();
              };
              cResult[6] = items;
              cResult[7] = fn;
              let tmp9 = fn;
              let tmp8 = items;
            } else {
              tmp8 = cResult[6];
              tmp9 = cResult[7];
            }
            const tmpResult3 = applicationStatus(tmp2[17]);
            const stateFromStores = applicationStatus(tmp2[18]).useStateFromStores(tmp8, tmp9);
            if (cResult[8] === applicationStatus) {
              if (cResult[9] === fetchNextPage) {
                let tmp12 = cResult[10];
              }
              closure_5 = tmp12;
              if (cResult[11] === tmp12) {
                if (cResult[12] === guildJoinRequests.length) {
                  let tmp13 = cResult[13];
                  let tmp14 = cResult[14];
                }
                const effect = fetchNextPage.useEffect(tmp13, tmp14);
                if (cResult[15] !== guildJoinRequests.length) {
                  class J {
                    constructor(arg0) {
                      index = arg0.index;
                      obj = { joinRequest: arg0.item, start: 0 === index, end: index === guildJoinRequests.length - 1 };
                      return jsx(closure_12, obj);
                    }
                  }
                  cResult[15] = guildJoinRequests.length;
                  cResult[16] = J;
                } else {
                  class J {
                    constructor(arg0) {
                      index = arg0.index;
                      obj = { joinRequest: arg0.item, start: 0 === index, end: index === guildJoinRequests.length - 1 };
                      return jsx(closure_12, obj);
                    }
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  class F {
                    constructor(arg0) {
                      return arg0.joinRequestId;
                    }
                  }
                  cResult[17] = F;
                } else {
                  class F {
                    constructor(arg0) {
                      return arg0.joinRequestId;
                    }
                  }
                }
                if (stateFromStores) {
                  class F {
                    constructor(arg0) {
                      return arg0.joinRequestId;
                    }
                  }
                  if (0 === guildJoinRequests.length) {
                    class F {
                      constructor(arg0) {
                        return arg0.joinRequestId;
                      }
                    }
                    if (cResult[20] === tmp4.spinnerContainer) {
                      class F {
                        constructor(arg0) {
                          return arg0.joinRequestId;
                        }
                      }
                      return tmp21;
                    }
                    let obj2 = { style: tmp4.spinnerContainer, children: tmp20 };
                    const tmp24 = closure_7(closure_5, obj2);
                    cResult[20] = tmp4.spinnerContainer;
                    cResult[21] = tmp20;
                    cResult[22] = tmp24;
                    tmp21 = tmp24;
                  }
                }
                if (cResult[23] === stateFromStores) {
                  class F {
                    constructor(arg0) {
                      return arg0.joinRequestId;
                    }
                  }
                }
                function renderFooter() {
                  let tmp = null;
                  if (stateFromStores) {
                    const obj = { style: closure_1.footerSpinner, children: null };
                    const obj2 = { size: "small", color: closure_1.spinner.color };
                    obj.children = React5(React4, obj2);
                    tmp = React5(hasOwnProperty, obj);
                  }
                  return tmp;
                }
                cResult[23] = stateFromStores;
                cResult[24] = tmp4.footerSpinner;
                cResult[25] = tmp4.spinner;
                cResult[26] = renderFooter;
              }
              const fn3 = function x() {
                if (0 === guildJoinRequests.length) {
                  closure_5();
                }
              };
              const items1 = [tmp12, guildJoinRequests.length];
              cResult[11] = tmp12;
              cResult[12] = guildJoinRequests.length;
              cResult[13] = fn3;
              cResult[14] = items1;
              tmp14 = items1;
              tmp13 = fn3;
            }
            const fn2 = function q() {
              fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
            };
            cResult[8] = applicationStatus;
            cResult[9] = fetchNextPage;
            cResult[10] = fn2;
            tmp12 = fn2;
            const tmpResult4 = applicationStatus(tmp2[18]);
          }
          const obj3 = { guildId, guildJoinRequests };
          cResult[3] = guildId;
          cResult[4] = guildJoinRequests;
          cResult[5] = obj3;
          tmp6 = obj3;
          const tmpResult = applicationStatus(tmp2[16]);
        }
        const obj4 = {
          guildId,
          applicationStatus,
          sortOrder: applicationStatus(guildJoinRequests[15]).GuildJoinRequestSortOrders.TIMESTAMP_DESC,
        };
        cResult[0] = applicationStatus;
        cResult[1] = guildId;
        cResult[2] = obj4;
        tmp5 = obj4;
        let obj = applicationStatus(guildJoinRequests[7]);
      }
    : function GuildSettingsModalMemberApplications(arg0) {
        ({ guildId, applicationStatus } = arg0);
        let guildJoinRequests;
        let tmp = closure_10();
        importDefault = tmp;
        let obj = applicationStatus(guildJoinRequests[16]);
        const tmp2 = importDefault;
        guildJoinRequests = obj.useSortedMemberApplications({
          guildId,
          applicationStatus,
          sortOrder: applicationStatus(guildJoinRequests[15]).GuildJoinRequestSortOrders.TIMESTAMP_DESC,
        }).guildJoinRequests;
        let obj2 = {
          guildId,
          applicationStatus,
          sortOrder: applicationStatus(guildJoinRequests[15]).GuildJoinRequestSortOrders.TIMESTAMP_DESC,
        };
        const fetchNextPage = applicationStatus(guildJoinRequests[17]).usePaginatedMemberApplications({
          guildId,
          guildJoinRequests,
        }).fetchNextPage;
        const obj3 = applicationStatus(guildJoinRequests[17]);
        const items = [GuildJoinRequestStore];
        const stateFromStores = applicationStatus(guildJoinRequests[18]).useStateFromStores(items, () =>
          fetching.isFetching(),
        );
        const items1 = [applicationStatus, fetchNextPage];
        const onEndReached = fetchNextPage.useCallback(() => {
          fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
        }, items1);
        const items2 = [onEndReached, guildJoinRequests.length];
        const effect = fetchNextPage.useEffect(() => {
          if (0 === guildJoinRequests.length) {
            callback();
          }
        }, items2);
        const items3 = [guildJoinRequests.length];
        const callback1 = fetchNextPage.useCallback((joinRequest) => {
          const index = joinRequest.index;
          return React5(closure_12, {
            joinRequest: joinRequest.item,
            start: 0 === index,
            end: index === guildJoinRequests.length - 1,
          });
        }, items3);
        const callback2 = fetchNextPage.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
        if (stateFromStores) {
          if (0 === guildJoinRequests.length) {
            const obj5 = { style: tmp.spinnerContainer, children: null };
            const obj6 = { size: "large", color: tmp.spinner.color };
            obj5.children = closure_7(stateFromStores, obj6);
            return closure_7(onEndReached, obj5);
          }
        }
        if (
          applicationStatus(guildJoinRequests[15]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus
        ) {
          const intl2 = applicationStatus(tmp3[19]).intl;
          let stringResult = intl2.string(applicationStatus(tmp3[19]).t["/wqiSv"]);
        } else if (applicationStatus(tmp3[15]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
          const intl = applicationStatus(tmp3[19]).intl;
          stringResult = intl.string(applicationStatus(tmp3[19]).t.bv82GS);
        } else if (applicationStatus(tmp3[15]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const intl3 = applicationStatus(tmp3[19]).intl;
          stringResult = intl3.string(applicationStatus(tmp3[19]).t["7YSJ6f"]);
        }
        const obj7 = { style: tmp.containerInner, children: null };
        if (0 !== guildJoinRequests.length) {
          const obj8 = {
            keyExtractor: callback2,
            data: guildJoinRequests,
            renderItem: callback1,
            contentContainerStyle: null,
            onEndReached: null,
            ListFooterComponent: null,
          };
          const obj9 = { paddingBottom: require("useSafeAreaInsets")().bottom + tmp2(tmp3[5]).space.PX_16 };
          obj8.contentContainerStyle = obj9;
          obj8.onEndReached = onEndReached;
          obj8.ListFooterComponent = function renderFooter() {
            let tmp = null;
            if (stateFromStores) {
              const obj = { style: closure_1.footerSpinner, children: null };
              const obj2 = { size: "small", color: closure_1.spinner.color };
              obj.children = React5(React4, obj2);
              tmp = React5(hasOwnProperty, obj);
            }
            return tmp;
          };
          let tmp13Result = closure_7(applicationStatus(tmp3[20]).FlashList, obj8);
        } else {
          const obj10 = { Illustration: applicationStatus(tmp3[21]).NoResults, body: stringResult };
          tmp13Result = closure_7(applicationStatus(tmp3[12]).EmptyState, obj10);
        }
        const obj11 = { children: null };
        obj7.children = tmp13Result;
        const items4 = [
          closure_7(onEndReached, obj7),
          closure_7(applicationStatus(guildJoinRequests[22]).NavScrim, {}),
        ];
        obj11.children = items4;
        return closure_8(closure_9, obj11);
      },
);
export const MemberApplicationUser = memoResult;
