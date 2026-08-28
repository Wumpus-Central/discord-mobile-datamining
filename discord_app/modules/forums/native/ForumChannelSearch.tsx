// === Module 12856: ForumChannelCloseSearchButton ===

// Module 12856 (ForumChannelCloseSearchButton)
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "initialize" /* 7459 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let c3 = importAllResult;
let closure_8 = createCacheKey.createStyles({ inputContainer: { flexGrow: 1, marginLeft: 8 }, cancelButtonContainer: { paddingLeft: 8 } });
const memoResult = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  let navigation;
  let route;
  let obj = channelId(route[6]);
  navigation = obj.useNavigation();
  const tmp = callback();
  route = channelId(route[6]).useRoute();
  let obj2 = channelId(route[6]);
  const items = [navigation, route];
  const canSearchForumPostsByChannelId = channelId(route[7]).useCanSearchForumPostsByChannelId(channelId);
  const effect = importAllResult.useEffect(() => () => {
    if (null != closure_1) {
      obj.setOptions(closure_1_0(closure_1_2[8]).getDefaultChannelStackHeaderProps(obj, closure_2));
      const obj2 = closure_1_0(closure_1_2[8]);
    }
  }, items);
  let tmp8 = null;
  if (canSearchForumPostsByChannelId) {
    obj = { style: null, children: null };
    obj[0] = tmp.cancelButtonContainer;
    obj = { variant: "tertiary", size: "sm", text: null, onPress: null };
    const intl = tmp2(tmp3[10]).intl;
    obj[2] = intl.string(tmp2(tmp3[10]).t["ETE/oC"]);
    obj[3] = function onPress() {
      if (null != channelId) {
        const result = navigation(route[11]).updateForumSearchQuery(tmp, null);
        const obj = navigation(route[11]);
      }
    };
    obj[1] = jsx(tmp2(tmp3[9]).Button, { variant: "tertiary", size: "sm", text: null, onPress: null });
    tmp8 = <View variant="tertiary" size="sm" text={null} onPress={null} />;
  }
  return tmp8;
});
const memoResult1 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  ({ guildId: importDefault, placeholder } = channelId);
  let obj = channelId(12857);
  const canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(channelId);
  const tmp = callback();
  const items = [closure_6];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = closure_1_6.getSearchQuery(tmp);
    }
    return searchQuery;
  }, items1);
  channelId(589);
  [][0] = channelId;
  let tmp8Result = null;
  if (canSearchForumPostsByChannelId) {
    tmp8Result = null;
    if (null != stateFromStores) {
      obj = { style: null, children: null };
      obj[0] = tmp.inputContainer;
      obj = { size: "sm", defaultValue: null, onChange: null, placeholder: null, autoFocus: null, onClear: null, grow: false };
      obj[1] = stateFromStores;
      obj[2] = function onChange(query) {
        if (null != channelId) {
          const result = closure_1_1(closure_1_2[11]).updateForumSearchQuery(tmp, query);
          const obj = closure_1_1(closure_1_2[11]);
        }
      };
      if (null != placeholder) {
        obj[3] = placeholder;
        obj[4] = 0 === stateFromStores.length;
        obj[5] = function onClear() {
          let tmp2 = null != closure_1;
          if (tmp2) {
            tmp2 = null != channelId;
          }
          if (tmp2) {
            let obj = channelId(closure_1_2[14]);
            obj = { guildId: null, channelId: null };
            obj[0] = closure_1;
            obj[1] = channelId;
            const result = obj.trackForumSearchCleared(obj);
          }
          if (null != channelId) {
            const result1 = closure_1_1(closure_1_2[11]).updateForumSearchQuery(tmp8, "");
            const obj3 = closure_1_1(closure_1_2[11]);
          }
        };
        obj[1] = tmp8(tmp10, obj);
        tmp8Result = tmp8(tmp9, obj);
      } else {
        const intl = tmp2(1236).intl;
        const t = tmp2(1236).t;
        intl.string(tmp6 ? t["5h0QOP"] : t.Iy2gnS);
      }
      tmp9 = View;
    }
  }
  return tmp8Result;
});
let result = require("set").fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = memoResult1;