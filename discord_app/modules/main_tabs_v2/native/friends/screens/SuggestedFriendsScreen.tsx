// === Module 16774: SuggestedFriendsScreen ===

// Module 16774 (SuggestedFriendsScreen)
import nativeDefault from "native" /* 576 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import ContactSuggestionRow from "ContactSuggestionRow" /* 16771 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { emptyContainer: null, container: null };
createStyles = { flex: 1, paddingTop: nativeDefault.space.PX_32 };
createStyles.emptyContainer = createStyles;
createStyles.container = { flex: 1 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx");

export default function SuggestedFriendsScreen() {
  const tmp = closure_9();
  const analyticsLocations = added(setAdded[6])(added(setAdded[7]).SUGGESTED_FRIENDS).analyticsLocations;
  const effect = friendSuggestions.useEffect(() => {
    added(setAdded[8]);
    const obj = { friend_add_type: constants2.FRIENDS_SUGGESTED_FRIENDS_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  }, []);
  const tmp6 = added(setAdded[9])();
  added = tmp6.added;
  setAdded = tmp6.setAdded;
  friendSuggestions = tmp6.friendSuggestions;
  let items = [analyticsLocations];
  const onPress = friendSuggestions.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const items1 = [added, friendSuggestions, onPress, setAdded];
  const callback1 = friendSuggestions.useCallback((arg0, arg1) => {
    closure_0 = arg1;
    const suggestedFriend = tmp;
    let mutualFriendsCount;
    if (friendSuggestions[arg1] != null) {
      mutualFriendsCount = tmp.mutualFriendsCount;
    }
    let tmp3 = null != mutualFriendsCount;
    if (tmp3) {
      let mutualFriendsCount1;
      if (tmp != null) {
        mutualFriendsCount1 = tmp.mutualFriendsCount;
      }
      tmp3 = mutualFriendsCount1 > 0;
    }
    const end = arg1 === friendSuggestions.length - 1;
    let str = "contactSuggestionNoMutualCount";
    if (tmp3) {
      str = "contactSuggestionMutualCount";
    }
    return {
      type: "custom",
      itemType: str,
      key: friendSuggestions[arg1].user.id,
      component() {
        return React5(ContactSuggestionRow.ContactSuggestionRow, {
          added: added.includes(suggestedFriend),
          suggestedFriend,
          start: 0 === closure_0,
          end,
          onPress,
          onAddSuggestion() {
            return closure_2((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_1_1;
              return items;
            });
          },
          location: constants.FRIENDS_SUGGESTED_FRIENDS_MODAL
        });
      }
    };
  }, items1);
  const callback2 = friendSuggestions.useCallback(() => {

  }, []);
  let obj = { value: analyticsLocations, children: null };
  const items2 = [closure_7(added(setAdded[12]), { absolute: true }), ];
  obj = { style: tmp.container, children: null };
  if (0 !== friendSuggestions.length) {
    obj = { sections: null, getItemProps: null, getSectionProps: null, insetStart: 8 };
    const items3 = [friendSuggestions.length];
    obj.sections = items3;
    obj.getItemProps = callback1;
    obj.getSectionProps = callback2;
    let tmp12Result = tmp12(tmp11(tmp3[13]).UsersFastList, obj);
  } else {
    const obj1 = { style: tmp.emptyContainer, children: null };
    const obj2 = { title: null, disableBackgroundOverlay: true };
    const intl = tmp11(tmp3[15]).intl;
    obj2.title = intl.string(tmp11(tmp3[15]).t.pxFW8V);
    obj1.children = tmp12(added(tmp3[14]), obj2);
    tmp12Result = tmp12(tmp13, obj1);
    const tmp2Result = added(tmp3[14]);
  }
  obj.children = tmp12Result;
  items2[1] = closure_7(onPress, obj);
  obj.children = items2;
  return closure_8(analyticsLocations(setAdded[6]).AnalyticsLocationProvider, obj);
};