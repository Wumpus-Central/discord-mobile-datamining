// === Module 16287: SuggestedFriendsScreen ===

// Module 16287 (SuggestedFriendsScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { emptyContainer: null, container: null };
createCacheKey = { flex: 1, paddingTop: ThemesDefault.space.PX_32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx");

export default function SuggestedFriendsScreen() {
  const tmp = callback2();
  const analyticsLocations = added(setAdded[6])(added(setAdded[7]).SUGGESTED_FRIENDS).analyticsLocations;
  const effect = friendSuggestions.useEffect(() => {
    let obj = added(setAdded[8]);
    obj = { friend_add_type: constants2.FRIENDS_SUGGESTED_FRIENDS_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  }, []);
  const tmp6 = added(setAdded[9])();
  added = tmp6.added;
  setAdded = tmp6.setAdded;
  friendSuggestions = tmp6.friendSuggestions;
  let items = [analyticsLocations];
  const callback = friendSuggestions.useCallback((id) => {
    added(setAdded[10])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const items1 = [added, friendSuggestions, callback, setAdded];
  const callback1 = friendSuggestions.useCallback((arg0, arg1) => {
    closure_0 = arg1;
    closure_1 = tmp;
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
    closure_2 = arg1 === friendSuggestions.length - 1;
    let str = "contactSuggestionNoMutualCount";
    if (tmp3) {
      str = "contactSuggestionMutualCount";
    }
    return {
      type: "custom",
      itemType: str,
      key: friendSuggestions[arg1].user.id,
      component() {
        return closure_2_7(analyticsLocations(setAdded[11]).ContactSuggestionRow, {
          added: closure_1.includes(closure_1),
          suggestedFriend: closure_1,
          start: 0 === closure_0,
          end: closure_2,
          onPress: closure_1_4,
          onAddSuggestion() {
            return closure_1_2((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_1;
              return items;
            });
          },
          location: closure_2_6.FRIENDS_SUGGESTED_FRIENDS_MODAL
        });
      }
    };
  }, items1);
  callback2 = friendSuggestions.useCallback(() => {

  }, []);
  let obj = { value: analyticsLocations, children: null };
  const items2 = [callback(added(setAdded[12]), { absolute: true }), ];
  obj = { style: tmp.container, children: null };
  if (0 !== friendSuggestions.length) {
    obj = { sections: null, getItemProps: null, getSectionProps: null, insetStart: 8 };
    const items3 = [friendSuggestions.length];
    obj[0] = items3;
    obj[1] = callback1;
    obj[2] = callback2;
    let tmp12Result = tmp12(tmp11(tmp3[13]).UsersFastList, obj);
  } else {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.emptyContainer;
    const obj2 = { title: null, disableBackgroundOverlay: true };
    const intl = tmp11(tmp3[15]).intl;
    obj2[0] = intl.string(tmp11(tmp3[15]).t.pxFW8V);
    obj1[1] = tmp12(added(tmp3[14]), obj2);
    tmp12Result = tmp12(tmp13, obj1);
    const tmp2Result = added(tmp3[14]);
  }
  obj[1] = tmp12Result;
  items2[1] = callback(callback, obj);
  obj[1] = items2;
  return closure_8(analyticsLocations(setAdded[6]).AnalyticsLocationProvider, obj);
};