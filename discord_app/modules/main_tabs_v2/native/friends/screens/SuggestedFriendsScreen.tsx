// discord_app/modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import ContactSuggestionRow2 from "../components/ContactSuggestionRow.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_1, closure_2, constants, num;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { emptyContainer: obj2, container: { flex: 1 } };
obj2 = { flex: 1, paddingTop: nativeDefault.space.PX_32 };
let closure_9 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let added;
      let analyticsLocations;
      let friendSuggestions;
      let setAdded;
      let tmp13;
      let tmp7;
      let tmp8;
      const tmp = analyticsLocations;
      let obj = analyticsLocations(setAdded[7]);
      const cResult = obj.c(26);
      closure_9();
      const tmp6 = added(setAdded[8]);
      analyticsLocations = tmp6(added(setAdded[9]).SUGGESTED_FRIENDS).analyticsLocations;
      const tmp5 = added;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          const obj = added(setAdded[10]);
          const obj2 = { friend_add_type: constants.FRIENDS_SUGGESTED_FRIENDS_MODAL };
          obj.track(userRowWithSubLabelHeight1.FRIEND_ADD_VIEWED, obj2);
        };
        let items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp7 = fn;
        tmp8 = items;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const effect = friendSuggestions.useEffect(tmp7, tmp8);
      const tmp10 = tmp5(setAdded[11])();
      added = tmp10.added;
      setAdded = tmp10.setAdded;
      friendSuggestions = tmp10.friendSuggestions;
      const tmpResult = tmp(setAdded[12]);
      const userRowWithSubLabelHeight = tmpResult.useUserRowWithSubLabelHeight(1);
      const tmpResult2 = tmp(setAdded[12]);
      const userRowWithSubLabelHeight1 = tmpResult2.useUserRowWithSubLabelHeight(2);
      if (cResult[2] !== analyticsLocations) {
        const fn2 = function h(id) {
          const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        };
        cResult[2] = analyticsLocations;
        cResult[3] = fn2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[3];
      }
      constants = tmp13;
      if (cResult[4] === added) {
        if (cResult[5] === friendSuggestions) {
          if (cResult[6] === tmp13) {
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              class A {
                constructor() {}
              }
              cResult[9] = A;
            } else {
              class A {
                constructor() {}
              }
            }
            if (cResult[10] === friendSuggestions) {
              class A {
                constructor() {}
              }
            }
            class M {
              constructor(arg0, arg1) {
                let mutualFriendsCount;
                if (friendSuggestions[arg1] != null) {
                  mutualFriendsCount = tmp.mutualFriendsCount;
                }
                let tmp3 = null != mutualFriendsCount;
                if (tmp3) {
                  let mutualFriendsCount1;
                  if (friendSuggestions[arg1] != null) {
                    mutualFriendsCount1 = tmp.mutualFriendsCount;
                  }
                  tmp3 = mutualFriendsCount1 > 0;
                }
                return tmp3 ? userRowWithSubLabelHeight1 : userRowWithSubLabelHeight;
              }
            }
            cResult[10] = friendSuggestions;
            cResult[11] = userRowWithSubLabelHeight;
            cResult[12] = userRowWithSubLabelHeight1;
            cResult[13] = M;
          }
        }
      }
      class I {
        constructor(arg0, arg1) {
          closure_0 = arg1;
          tmp = friendSuggestions[arg1];
          closure_1 = tmp;
          closure_2 = arg1 === friendSuggestions.length - 1;
          mutualFriendsCount = undefined;
          if (tmp != null) {
            mutualFriendsCount = tmp.mutualFriendsCount;
          }
          tmp3 = null != mutualFriendsCount;
          if (tmp3) {
            mutualFriendsCount1 = undefined;
            if (tmp != null) {
              mutualFriendsCount1 = tmp.mutualFriendsCount;
            }
            num = 0;
            tmp3 = mutualFriendsCount1 > 0;
          }
          str = "contactSuggestionNoMutualCount";
          if (tmp3) {
            str = "contactSuggestionMutualCount";
          }
          obj = {
            type: "custom",
            itemType: str,
            key: tmp.user.id,
            component() {
              const obj = {
                added: added.includes(suggestedFriend),
                suggestedFriend,
                start: 0 === closure_0,
                end,
                onPress,
                onAddSuggestion() {
                  /* body not rendered: F153837 */
                },
                location: metroRequire.FRIENDS_SUGGESTED_FRIENDS_MODAL,
              };
              const ContactSuggestionRow = ContactSuggestionRow2.ContactSuggestionRow;
              return metroImportDefault(ContactSuggestionRow, obj);
            },
          };
          return obj;
        }
      }
      cResult[4] = added;
      cResult[5] = friendSuggestions;
      cResult[6] = tmp13;
      cResult[7] = setAdded;
      cResult[8] = I;
    }
  : () => {
      let added;
      let friendSuggestions;
      let intl;
      let items3;
      let items4;
      let obj7;
      let setAdded;
      let tmp15Result;
      let tmp2Result;
      const tmp = closure_9();
      let tmp3 = setAdded;
      const tmp4 = added(setAdded[8]);
      const analyticsLocations = tmp4(added(setAdded[9]).SUGGESTED_FRIENDS).analyticsLocations;
      const effect = friendSuggestions.useEffect(() => {
        const obj = added(setAdded[10]);
        const obj2 = { friend_add_type: callback.FRIENDS_SUGGESTED_FRIENDS_MODAL };
        obj.track(userRowWithSubLabelHeight1.FRIEND_ADD_VIEWED, obj2);
      }, []);
      const tmp6 = added(setAdded[11])();
      const tmp2 = added;
      added = tmp6.added;
      setAdded = tmp6.setAdded;
      friendSuggestions = tmp6.friendSuggestions;
      let obj = analyticsLocations(setAdded[12]);
      const userRowWithSubLabelHeight = obj.useUserRowWithSubLabelHeight(1);
      let obj2 = analyticsLocations(setAdded[12]);
      const userRowWithSubLabelHeight1 = obj2.useUserRowWithSubLabelHeight(2);
      let items = [analyticsLocations];
      const onPress = friendSuggestions.useCallback((id) => {
        const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }, items);
      const items1 = [added, friendSuggestions, onPress, setAdded];
      const callback1 = friendSuggestions.useCallback((arg0, arg1) => {
        let closure_0 = arg1;
        const suggestedFriend = tmp;
        const end = arg1 === friendSuggestions.length - 1;
        let mutualFriendsCount;
        if (friendSuggestions[arg1] != null) {
          mutualFriendsCount = tmp.mutualFriendsCount;
        }
        let tmp3 = null != mutualFriendsCount;
        if (tmp3) {
          let mutualFriendsCount1;
          if (friendSuggestions[arg1] != null) {
            mutualFriendsCount1 = tmp.mutualFriendsCount;
          }
          tmp3 = mutualFriendsCount1 > 0;
        }
        let str = "contactSuggestionNoMutualCount";
        if (tmp3) {
          str = "contactSuggestionMutualCount";
        }
        let obj = {
          type: "custom",
          itemType: str,
          key: tmp.user.id,
          component() {
            const obj = {
              added: added.includes(suggestedFriend),
              suggestedFriend,
              start: 0 === closure_0,
              end,
              onPress,
              onAddSuggestion() {
                return end((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_1;
                  return items;
                });
              },
              location: metroRequire.FRIENDS_SUGGESTED_FRIENDS_MODAL,
            };
            const ContactSuggestionRow = ContactSuggestionRow2.ContactSuggestionRow;
            return metroImportDefault(ContactSuggestionRow, obj);
          },
        };
        return obj;
      }, items1);
      const items2 = [friendSuggestions, userRowWithSubLabelHeight, userRowWithSubLabelHeight1];
      const callback2 = friendSuggestions.useCallback(() => {}, []);
      const callback3 = friendSuggestions.useCallback((arg0, arg1) => {
        let mutualFriendsCount;
        if (friendSuggestions[arg1] != null) {
          mutualFriendsCount = tmp.mutualFriendsCount;
        }
        let tmp3 = null != mutualFriendsCount;
        if (tmp3) {
          let mutualFriendsCount1;
          if (friendSuggestions[arg1] != null) {
            mutualFriendsCount1 = tmp.mutualFriendsCount;
          }
          tmp3 = mutualFriendsCount1 > 0;
        }
        return tmp3 ? userRowWithSubLabelHeight1 : userRowWithSubLabelHeight;
      }, items2);
      const obj3 = { value: analyticsLocations, children: items3 };
      const AnalyticsLocationProvider = analyticsLocations(setAdded[8]).AnalyticsLocationProvider;
      items3 = [closure_7(added(setAdded[15]), { absolute: true })];
      const obj4 = { style: tmp.container, children: tmp15Result };
      if (0 !== friendSuggestions.length) {
        const obj5 = {
          sections: items4,
          getItemProps: callback1,
          getSectionProps: callback2,
          getItemSize: callback3,
          insetStart: 8,
        };
        items4 = [friendSuggestions.length];
        tmp15Result = closure_7(tmp7(tmp3[16]).UsersFastList, obj5);
      } else {
        const obj6 = { style: tmp.emptyContainer, children: closure_7(tmp2Result, obj7) };
        obj7 = { title: intl.string(analyticsLocations(tmp3[18]).t.pxFW8V), disableBackgroundOverlay: true };
        tmp2Result = tmp2(tmp3[17]);
        intl = tmp7(tmp3[18]).intl;
        tmp15Result = closure_7(tmp16, obj6);
      }
      items3[1] = closure_7(userRowWithSubLabelHeight, obj4);
      return closure_8(AnalyticsLocationProvider, obj3);
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx");

export default tmp4;
