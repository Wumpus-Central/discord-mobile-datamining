// === Module 13257: ForumChannelSearch ===

// Module 13257 (ForumChannelSearch)
import tracking_Tracking from "tracking/Tracking" /* 7767 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7898 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import ForumSearchStore from "ForumSearchStore" /* 7768 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ inputContainer: { flexGrow: 1, marginLeft: 8 }, cancelButtonContainer: { paddingLeft: 8 } });
const memoResult = noop.memo((channelId) => {
  channelId = channelId.channelId;
  let route;
  let obj = channelId(route[6]);
  const navigation = obj.useNavigation();
  const tmp = closure_8();
  route = channelId(route[6]).useRoute();
  let obj2 = channelId(route[6]);
  const items = [navigation, route];
  const canSearchForumPostsByChannelId = channelId(route[7]).useCanSearchForumPostsByChannelId(channelId);
  const effect = noop.useEffect(() => () => {
    if (null != navigation) {
      obj.setOptions(channelId(route[8]).getDefaultChannelStackHeaderProps(obj, closure_1_2));
      const obj2 = channelId(route[8]);
    }
  }, items);
  let tmp8 = null;
  if (canSearchForumPostsByChannelId) {
    obj = { style: tmp.cancelButtonContainer, children: null };
    obj = { variant: "tertiary", size: "sm", text: null, onPress: null };
    const intl = tmp2(tmp3[10]).intl;
    obj.text = intl.string(tmp2(tmp3[10]).t["ETE/oC"]);
    obj.onPress = function onPress() {
      if (null != channelId) {
        const result = ForumActionCreatorsDefault.updateForumSearchQuery(tmp, null);
      }
    };
    obj.children = jsx(tmp2(tmp3[9]).Button, { variant: "tertiary", size: "sm", text: null, onPress: null });
    tmp8 = <View variant="tertiary" size="sm" text={null} onPress={null} />;
  }
  return tmp8;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = noop.memo((channelId) => {
  channelId = channelId.channelId;
  ({ guildId: importDefault, placeholder } = channelId);
  let obj = channelId(13258);
  const canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(channelId);
  const tmp = closure_8();
  const items = [ForumSearchStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = ForumSearchStore.getSearchQuery(tmp);
    }
    return searchQuery;
  }, items1);
  channelId(504);
  [][0] = channelId;
  let tmp8Result = null;
  if (canSearchForumPostsByChannelId) {
    tmp8Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.inputContainer, children: null };
      obj = {
        size: "sm",
        defaultValue: stateFromStores,
        onChange(query) {
              if (null != channelId) {
                const result = ForumActionCreatorsDefault.updateForumSearchQuery(tmp, query);
              }
            },
        placeholder: null,
        autoFocus: null,
        onClear: null,
        grow: false
      };
      if (null != placeholder) {
        obj.placeholder = placeholder;
        obj.autoFocus = 0 === stateFromStores.length;
        obj.onClear = function onClear() {
          let tmp2 = null != guildId;
          if (tmp2) {
            tmp2 = null != channelId;
          }
          if (tmp2) {
            const obj = { guildId, channelId };
            const result = obj.trackForumSearchCleared(obj);
          }
          if (null != channelId) {
            const result1 = ForumActionCreatorsDefault.updateForumSearchQuery(tmp8, "");
          }
        };
        obj.children = tmp8(tmp10, obj);
        tmp8Result = tmp8(tmp9, obj);
      } else {
        const intl = tmp2(1114).intl;
        const t = tmp2(1114).t;
        intl.string(tmp6 ? t["5h0QOP"] : t.Iy2gnS);
      }
      tmp9 = View;
    }
  }
  return tmp8Result;
});