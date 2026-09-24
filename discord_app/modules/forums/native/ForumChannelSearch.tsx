// discord_app/modules/forums/native/ForumChannelSearch.tsx
import tracking_Tracking from "../tracking/Tracking.tsx";
import ForumActionCreatorsDefault from "../ForumActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ForumSearchStore from "../ForumSearchStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({
  inputContainer: { flexGrow: 1, marginLeft: 8 },
  cancelButtonContainer: { paddingLeft: 8 },
});
const memoResult = noop.memo((channelId) => {
  channelId = channelId.channelId;
  let route;
  const tmp = closure_8();
  const navigation = channelId(route[6]).useNavigation();
  let obj = channelId(route[6]);
  route = channelId(route[6]).useRoute();
  let obj2 = channelId(route[6]);
  const items = [navigation, route];
  const canSearchForumPostsByChannelId = channelId(route[7]).useCanSearchForumPostsByChannelId(channelId);
  const effect = noop.useEffect(
    () => () => {
      if (null != navigation) {
        navigation.setOptions(channelId(route[8]).getDefaultChannelStackHeaderProps(navigation, closure_1_2));
        const obj2 = channelId(route[8]);
      }
    },
    items,
  );
  let tmp8 = null;
  if (canSearchForumPostsByChannelId) {
    const obj4 = { style: tmp.cancelButtonContainer, children: null };
    const obj5 = { variant: "tertiary", size: "sm", text: null, onPress: null };
    const intl = tmp2(tmp3[10]).intl;
    obj5.text = intl.string(tmp2(tmp3[10]).t["ETE/oC"]);
    obj5.onPress = function onPress() {
      if (null != channelId) {
        const result = ForumActionCreatorsDefault.updateForumSearchQuery(tmp, null);
      }
    };
    obj4.children = jsx(tmp2(tmp3[9]).Button, { variant: "tertiary", size: "sm", text: null, onPress: null });
    tmp8 = <View style={tmp.cancelButtonContainer}>{null}</View>;
  }
  return tmp8;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = noop.memo((channelId) => {
  channelId = channelId.channelId;
  ({ guildId: importDefault, placeholder } = channelId);
  const tmp = closure_8();
  const canSearchForumPostsByChannelId = channelId(13665).useCanSearchForumPostsByChannelId(channelId);
  let obj = channelId(13665);
  const items = [ForumSearchStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(
    items,
    () => {
      let searchQuery = null;
      if (null != channelId) {
        searchQuery = ForumSearchStore.getSearchQuery(tmp);
      }
      return searchQuery;
    },
    items1,
  );
  channelId(504);
  [][0] = channelId;
  let tmp8Result = null;
  if (canSearchForumPostsByChannelId) {
    tmp8Result = null;
    if (null != stateFromStores) {
      let obj3 = { style: tmp.inputContainer, children: null };
      const obj4 = {
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
        grow: false,
      };
      if (null != placeholder) {
        obj4.placeholder = placeholder;
        obj4.autoFocus = 0 === stateFromStores.length;
        obj4.onClear = function onClear() {
          let tmp2 = null != guildId;
          if (tmp2) {
            tmp2 = null != channelId;
          }
          if (tmp2) {
            const obj2 = { guildId, channelId };
            const result = tracking_Tracking.trackForumSearchCleared(obj2);
          }
          if (null != channelId) {
            const result1 = ForumActionCreatorsDefault.updateForumSearchQuery(tmp8, "");
          }
        };
        obj3.children = <tmp10 {...obj4} />;
        tmp8Result = <View {...obj3} />;
      } else {
        const intl = tmp2(1115).intl;
        const t = tmp2(1115).t;
        intl.string(tmp6 ? t["5h0QOP"] : t.Iy2gnS);
      }
    }
  }
  return tmp8Result;
});
