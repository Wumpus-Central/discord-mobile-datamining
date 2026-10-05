// discord_app/modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import MemberVerificationTypes from "../../guild_member_verification/MemberVerificationTypes.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import openJoinRequestActionSheetDefault from "../../guild_member_verification/native/openJoinRequestActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildJoinRequestStore from "../../guild_member_verification/GuildJoinRequestStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, joinRequest;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  containerInner: obj2,
  spinnerContainer: { padding: 32 },
  footerSpinner: { paddingVertical: 16 },
  spinner: obj3,
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1, marginTop: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_BRAND };
let closure_10 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (user) => {
        let items;
        let tmp4;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(10);
        user = user.user;
        if (cResult[0] !== user) {
          const obj2 = UserUtilsDefault;
          const globalName = obj2.getGlobalName(user);
          cResult[0] = user;
          cResult[1] = globalName;
          tmp4 = globalName;
        } else {
          tmp4 = cResult[1];
        }
        let username = tmp4;
        if (tmp4 == null) {
          username = user.username;
        }
        if (cResult[2] !== username) {
          const obj3 = { variant: "text-md/semibold", children: username };
          const tmp9 = metroImportDefault(Text_Text.Text, obj3);
          cResult[2] = username;
          cResult[3] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp4) {
          let tmp10;
          if (cResult[5] === user) {
            tmp10 = cResult[6];
          }
          if (cResult[7] === tmp7) {
            let tmp13;
            if (cResult[8] === tmp10) {
              tmp13 = cResult[9];
            }
            return tmp13;
          }
          const obj4 = { children: items };
          items = [tmp7, tmp10];
          const tmp16 = metroImportAll(hasOwnProperty, obj4);
          cResult[7] = tmp7;
          cResult[8] = tmp10;
          cResult[9] = tmp16;
          tmp13 = tmp16;
        }
        let tmp11 = null != tmp4;
        if (tmp11) {
          const obj5 = { variant: "text-xs/medium", children: user.username };
          tmp11 = metroImportDefault(Text_Text.Text, obj5);
        }
        cResult[4] = tmp4;
        cResult[5] = user;
        cResult[6] = tmp11;
        tmp10 = tmp11;
      }
    : (user) => {
        user = user.user;
        const obj = UserUtilsDefault;
        const globalName = obj.getGlobalName(user);
        let username = globalName;
        const Text = Text_Text.Text;
        if (globalName == null) {
          username = user.username;
        }
        const children = [metroImportDefault(Text, { variant: "text-md/semibold", children: username })];
        let tmp5Result = null != globalName;
        if (tmp5Result) {
          const obj2 = { variant: "text-xs/medium", children: user.username };
          tmp5Result = metroImportDefault(Text_Text.Text, obj2);
        }
        children[1] = tmp5Result;
        return metroImportAll(hasOwnProperty, { children });
      },
);
const unpackModuleId = memoResult;
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (joinRequest) => {
        let end;
        let start;
        let tmp4;
        const obj = joinRequest(576);
        const cResult = obj.c(14);
        joinRequest = joinRequest.joinRequest;
        ({ start, end } = joinRequest);
        if (cResult[0] !== joinRequest) {
          const fn = function n() {
            openJoinRequestActionSheetDefault(joinRequest);
          };
          cResult[0] = joinRequest;
          cResult[1] = fn;
          tmp4 = fn;
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
            let tmp5;
            let tmp8;
            let tmp11;
            if (cResult[2] !== user) {
              let userAvatarSource = null;
              if (null != user) {
                const obj2 = AvatarUtilsDefault;
                userAvatarSource = obj2.getUserAvatarSource(user);
              }
              cResult[2] = user;
              cResult[3] = userAvatarSource;
              tmp5 = userAvatarSource;
            } else {
              tmp5 = cResult[3];
            }
            if (cResult[4] !== tmp5) {
              const obj3 = { source: tmp5, size: joinRequest(1188).AvatarSizes.SMALL };
              const Avatar = tmp(1188).Avatar;
              const tmp10 = closure_7(Avatar, obj3);
              cResult[4] = tmp5;
              cResult[5] = tmp10;
              tmp8 = tmp10;
            } else {
              tmp8 = cResult[5];
            }
            if (cResult[6] !== user) {
              const obj4 = { user };
              const tmp14 = closure_7(closure_11, obj4);
              cResult[6] = user;
              cResult[7] = tmp14;
              tmp11 = tmp14;
            } else {
              tmp11 = cResult[7];
            }
            if (cResult[8] === end) {
              if (cResult[9] === tmp4) {
                if (cResult[10] === start) {
                  if (cResult[11] === tmp8) {
                    let tmp15;
                    if (cResult[12] === tmp11) {
                      tmp15 = cResult[13];
                    }
                    return tmp15;
                  }
                }
              }
            }
            const obj5 = { arrow: true, icon: tmp8, label: tmp11, onPress: tmp4, start, end };
            const tmp17 = closure_7(joinRequest(5993).TableRow, obj5);
            cResult[8] = end;
            cResult[9] = tmp4;
            cResult[10] = start;
            cResult[11] = tmp8;
            cResult[12] = tmp11;
            cResult[13] = tmp17;
            tmp15 = tmp17;
          }
        }
      }
    : (joinRequest) => {
        let Avatar;
        let end;
        let obj3;
        let obj4;
        let start;
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
              const obj = AvatarUtilsDefault;
              userAvatarSource = obj.getUserAvatarSource(user);
            }
            const obj2 = {
              arrow: true,
              icon: closure_7(Avatar, obj3),
              label: closure_7(closure_11, obj4),
              onPress: tmp,
              start,
              end,
            };
            const TableRow = joinRequest(5993).TableRow;
            obj3 = { source: userAvatarSource, size: joinRequest(1188).AvatarSizes.SMALL };
            Avatar = joinRequest(1188).Avatar;
            obj4 = { user };
            return closure_7(TableRow, obj2);
          }
        }
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let applicationStatus;
        let closure_1;
        let fetching;
        let guildId;
        let guildJoinRequests;
        let tmp19;
        let obj = applicationStatus(guildJoinRequests[7]);
        const cResult = obj.c(43);
        ({ guildId, applicationStatus } = arg0);
        const tmp4 = closure_10();
        importDefault = tmp4;
        const bottom = require("useSafeAreaInsets")().bottom;
        if (cResult[0] === applicationStatus) {
          let tmp5;
          if (cResult[1] === guildId) {
            tmp5 = cResult[2];
          }
          const tmpResult = applicationStatus(guildJoinRequests[16]);
          guildJoinRequests = tmpResult.useSortedMemberApplications(tmp5).guildJoinRequests;
          if (cResult[3] === guildId) {
            let tmp6;
            let tmp9;
            let tmp8;
            if (cResult[4] === guildJoinRequests) {
              tmp6 = cResult[5];
            }
            const tmpResult3 = applicationStatus(guildJoinRequests[17]);
            const fetchNextPage = tmpResult3.usePaginatedMemberApplications(tmp6).fetchNextPage;
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [GuildJoinRequestStore];
              class T {
                constructor() {
                  return fetching.isFetching();
                }
              }
              cResult[6] = items;
              cResult[7] = T;
              tmp9 = T;
              tmp8 = items;
            } else {
              tmp8 = cResult[6];
              tmp9 = cResult[7];
            }
            const tmpResult4 = applicationStatus(guildJoinRequests[18]);
            const stateFromStores = tmpResult4.useStateFromStores(tmp8, tmp9);
            if (cResult[8] === applicationStatus) {
              let tmp12;
              if (cResult[9] === fetchNextPage) {
                tmp12 = cResult[10];
              }
              let closure_5 = tmp12;
              if (cResult[11] === tmp12) {
                let tmp13;
                let tmp14;
                if (cResult[12] === guildJoinRequests.length) {
                  tmp13 = cResult[13];
                  tmp14 = cResult[14];
                }
                const effect = fetchNextPage.useEffect(tmp13, tmp14);
                class M {
                  constructor() {
                    if (0 === guildJoinRequests.length) {
                      closure_5();
                    }
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  class D {
                    constructor(joinRequestId) {
                      return joinRequestId.joinRequestId;
                    }
                  }
                  cResult[17] = D;
                  class M {
                    constructor() {
                      if (0 === guildJoinRequests.length) {
                        closure_5();
                      }
                    }
                  }
                } else {
                  class D {
                    constructor(joinRequestId) {
                      return joinRequestId.joinRequestId;
                    }
                  }
                }
                if (stateFromStores) {
                  class D {
                    constructor(joinRequestId) {
                      return joinRequestId.joinRequestId;
                    }
                  }
                  if (0 === guildJoinRequests.length) {
                    class D {
                      constructor(joinRequestId) {
                        return joinRequestId.joinRequestId;
                      }
                    }
                    if (cResult[20] === tmp4.spinnerContainer) {
                      class D {
                        constructor(joinRequestId) {
                          return joinRequestId.joinRequestId;
                        }
                      }
                      return tmp19;
                    }
                    class M {
                      constructor() {
                        if (0 === guildJoinRequests.length) {
                          closure_5();
                        }
                      }
                    }
                    let obj2 = { style: tmp4.spinnerContainer, children: tmp18 };
                    cResult[20] = tmp4.spinnerContainer;
                    cResult[21] = tmp18;
                    const tmp21 = closure_7(closure_5, obj2);
                    class C {
                      constructor() {
                        fetchNextPage(
                          MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC,
                          applicationStatus,
                        );
                      }
                    }
                    tmp19 = tmp21;
                  }
                }
                if (cResult[23] === stateFromStores) {
                  class D {
                    constructor(joinRequestId) {
                      return joinRequestId.joinRequestId;
                    }
                  }
                }
                const fn = function w() {
                  let obj2;
                  let tmp = null;
                  if (stateFromStores) {
                    const obj = { style: closure_1.footerSpinner, children: metroImportDefault(React3, obj2) };
                    obj2 = { size: "small", color: closure_1.spinner.color };
                    tmp = metroImportDefault(hasOwnProperty, obj);
                  }
                  return tmp;
                };
                cResult[23] = stateFromStores;
                class C {
                  constructor() {
                    fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
                  }
                }
                cResult[25] = tmp4.spinner;
                cResult[26] = fn;
              }
              class M {
                constructor() {
                  if (0 === guildJoinRequests.length) {
                    closure_5();
                  }
                }
              }
              const items1 = [tmp12, guildJoinRequests.length];
              cResult[11] = tmp12;
              cResult[12] = guildJoinRequests.length;
              cResult[13] = M;
              class C {
                constructor() {
                  fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
                }
              }
              cResult[14] = items1;
              tmp14 = items1;
              tmp13 = M;
            }
            class C {
              constructor() {
                fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
              }
            }
            cResult[8] = applicationStatus;
            cResult[9] = fetchNextPage;
            cResult[10] = C;
            tmp12 = C;
          }
          const obj3 = { guildId, guildJoinRequests };
          cResult[3] = guildId;
          cResult[4] = guildJoinRequests;
          tmp6 = obj3;
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
      }
    : (arg0) => {
        let applicationStatus;
        let closure_1;
        let fetching;
        let guildId;
        let items4;
        let obj6;
        let obj9;
        let stringResult;
        let tmp13Result;
        ({ guildId, applicationStatus } = arg0);
        let guildJoinRequests;
        let tmp = closure_10();
        importDefault = tmp;
        const bottom = require("useSafeAreaInsets")().bottom;
        let obj = applicationStatus(guildJoinRequests[16]);
        let obj2 = {
          guildId,
          applicationStatus,
          sortOrder: applicationStatus(guildJoinRequests[15]).GuildJoinRequestSortOrders.TIMESTAMP_DESC,
        };
        guildJoinRequests = obj.useSortedMemberApplications(obj2).guildJoinRequests;
        const obj3 = applicationStatus(guildJoinRequests[17]);
        const fetchNextPage = obj3.usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
        const items = [GuildJoinRequestStore];
        const obj4 = applicationStatus(guildJoinRequests[18]);
        const stateFromStores = obj4.useStateFromStores(items, () => fetching.isFetching());
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
          const obj = {
            joinRequest: joinRequest.item,
            start: 0 === index,
            end: index === guildJoinRequests.length - 1,
          };
          return metroImportDefault(closure_12, obj);
        }, items3);
        const callback2 = fetchNextPage.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
        const tmp2 = importDefault;
        if (stateFromStores) {
          if (0 === guildJoinRequests.length) {
            const obj5 = { style: tmp.spinnerContainer, children: closure_7(stateFromStores, obj6) };
            obj6 = { size: "large", color: tmp.spinner.color };
            return closure_7(onEndReached, obj5);
          }
        }
        if (
          applicationStatus(guildJoinRequests[15]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus
        ) {
          const intl2 = applicationStatus(tmp3[19]).intl;
          stringResult = intl2.string(applicationStatus(tmp3[19]).t["/wqiSv"]);
        } else if (
          applicationStatus(guildJoinRequests[15]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus
        ) {
          const intl = applicationStatus(tmp3[19]).intl;
          stringResult = intl.string(applicationStatus(tmp3[19]).t.bv82GS);
        } else if (
          applicationStatus(guildJoinRequests[15]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus
        ) {
          const intl3 = applicationStatus(tmp3[19]).intl;
          stringResult = intl3.string(applicationStatus(tmp3[19]).t["7YSJ6f"]);
        }
        const obj7 = { style: tmp.containerInner, children: tmp13Result };
        const tmp14 = onEndReached;
        if (0 !== guildJoinRequests.length) {
          const obj8 = {
            keyExtractor: callback2,
            data: guildJoinRequests,
            renderItem: callback1,
            contentContainerStyle: obj9,
            onEndReached,
            ListFooterComponent() {
              let obj2;
              let tmp = null;
              if (stateFromStores) {
                const obj = { style: closure_1.footerSpinner, children: metroImportDefault(React3, obj2) };
                obj2 = { size: "small", color: closure_1.spinner.color };
                tmp = metroImportDefault(hasOwnProperty, obj);
              }
              return tmp;
            },
          };
          obj9 = { paddingBottom: bottom + tmp2(guildJoinRequests[5]).space.PX_16 };
          const FlashList = applicationStatus(tmp3[20]).FlashList;
          tmp13Result = closure_7(FlashList, obj8);
        } else {
          const obj10 = { Illustration: applicationStatus(guildJoinRequests[21]).NoResults, body: stringResult };
          const EmptyState = applicationStatus(tmp3[12]).EmptyState;
          tmp13Result = closure_7(EmptyState, obj10);
        }
        const obj11 = { children: items4 };
        items4 = [closure_7(tmp14, obj7), closure_7(applicationStatus(guildJoinRequests[22]).NavScrim, {})];
        return closure_8(closure_9, obj11);
      },
);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default memoResult1;
export const MemberApplicationUser = memoResult;
