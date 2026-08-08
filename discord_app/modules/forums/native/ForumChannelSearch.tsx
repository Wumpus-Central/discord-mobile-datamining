// discord_app/modules/forums/native/ForumChannelSearch.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import initialize from "initialize";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let closure_7 = createCacheKey.createStyles({ inputContainer: { flexGrow: 1, marginLeft: 8 }, cancelButtonContainer: { paddingLeft: 8 } });
const memoResult = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  let navigation;
  let route;
  let obj = channelId(route[5]);
  navigation = obj.useNavigation();
  const tmp = callback();
  route = channelId(route[5]).useRoute();
  let obj2 = channelId(route[5]);
  const items = [navigation, route];
  const canSearchForumPostsByChannelId = channelId(route[6]).useCanSearchForumPostsByChannelId(channelId);
  const effect = importAllResult.useEffect(() => () => {
    if (null != closure_1) {
      obj.setOptions(outer1_0(outer1_2[7]).getDefaultChannelStackHeaderProps(obj, closure_2));
      const obj2 = outer1_0(outer1_2[7]);
    }
  }, items);
  let tmp8 = null;
  if (canSearchForumPostsByChannelId) {
    obj = { style: null, children: null };
    obj[0] = tmp.cancelButtonContainer;
    obj = { variant: "tertiary", size: "sm", text: null, onPress: null };
    const intl = tmp2(tmp3[9]).intl;
    obj[2] = intl.string(tmp2(tmp3[9]).t["ETE/oC"]);
    obj[3] = function onPress() {
      if (null != channelId) {
        const result = navigation(route[10]).updateForumSearchQuery(tmp, null);
        const obj = navigation(route[10]);
      }
    };
    obj[1] = jsx(tmp2(tmp3[8]).Button, { variant: "tertiary", size: "sm", text: null, onPress: null });
    tmp8 = <View variant="tertiary" size="sm" text={null} onPress={null} />;
  }
  return tmp8;
});
const memoResult1 = importAllResult.memo((channelId) => {
  let importDefault;
  let placeholder;
  channelId = channelId.channelId;
  ({ guildId: importDefault, placeholder } = channelId);
  let obj = channelId(12540);
  const canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(channelId);
  const tmp = callback();
  const items = [initialize];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = outer1_5.getSearchQuery(tmp);
    }
    return searchQuery;
  }, items1);
  let tmp6Result = null;
  if (canSearchForumPostsByChannelId) {
    tmp6Result = null;
    if (null != stateFromStores) {
      obj = { style: null, children: null };
      obj[0] = tmp.inputContainer;
      obj = { size: "sm", defaultValue: null, onChange: null, placeholder: null, autoFocus: null, onClear: null, grow: false };
      obj[1] = stateFromStores;
      obj[2] = function onChange(query) {
        if (null != channelId) {
          const result = outer1_1(outer1_2[10]).updateForumSearchQuery(tmp, query);
          const obj = outer1_1(outer1_2[10]);
        }
      };
      if (null == placeholder) {
        const intl = tmp2(1236).intl;
        placeholder = intl.string(tmp2(1236).t.Iy2gnS);
      }
      obj[3] = placeholder;
      obj[4] = 0 === stateFromStores.length;
      obj[5] = function onClear() {
        let tmp2 = null != closure_1;
        if (tmp2) {
          tmp2 = null != channelId;
        }
        if (tmp2) {
          let obj = channelId(outer1_2[13]);
          obj = { guildId: null, channelId: null };
          obj[0] = closure_1;
          obj[1] = channelId;
          const result = obj.trackForumSearchCleared(obj);
        }
        if (null != channelId) {
          const result1 = outer1_1(outer1_2[10]).updateForumSearchQuery(tmp8, "");
          const obj3 = outer1_1(outer1_2[10]);
        }
      };
      obj[1] = jsx(tmp2(5992).SearchField, { size: "sm", defaultValue: null, onChange: null, placeholder: null, autoFocus: null, onClear: null, grow: false });
      tmp6Result = tmp6(View, obj);
      const tmp7 = View;
    }
  }
  return tmp6Result;
});
let result = require("initialize").fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = memoResult1;