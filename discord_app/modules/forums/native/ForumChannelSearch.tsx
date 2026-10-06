// === Module 13117: ForumChannelSearch ===

// Module 13117 (ForumChannelSearch)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import tracking_Tracking from "tracking/Tracking" /* 7276 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7552 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ForumSearchStore from "ForumSearchStore" /* 7277 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId, navigation;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ inputContainer: { flexGrow: 1, marginLeft: 8 }, cancelButtonContainer: { paddingLeft: 8 } });
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memo2 = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let route;
  const tmp = channelId;
  let obj = channelId(route[7]);
  const cResult = obj.c(12);
  channelId = channelId.channelId;
  const tmp4 = closure_8();
  const obj2 = channelId(route[8]);
  navigation = obj2.useNavigation();
  const obj3 = channelId(route[8]);
  route = obj3.useRoute();
  channelId(route[9]);
  if (cResult[0] === navigation) {
    let tmp9;
    let tmp10;
    if (cResult[1] === route) {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const effect = react.useEffect(tmp9, tmp10);
    if (tmp8) {
      let tmp14;
      let tmp16;
      let tmp18;
      if (cResult[4] !== channelId) {
        const fn2 = function h() {
          if (null != channelId) {
            const obj = ForumActionCreatorsDefault;
            const result = obj.updateForumSearchQuery(tmp, null);
          }
        };
        cResult[4] = channelId;
        cResult[5] = fn2;
        tmp14 = fn2;
      } else {
        tmp14 = cResult[5];
      }
      const _Symbol = Symbol;
      const cancelButtonContainer = tmp4.cancelButtonContainer;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[12]).intl;
        const stringResult = intl.string(tmp(route[12]).t["ETE/oC"]);
        cResult[6] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== tmp14) {
        const tmp20 = jsx(tmp(route[13]).Button, { variant: "tertiary", size: "sm", text: tmp16, onPress: tmp14 });
        cResult[7] = tmp14;
        cResult[8] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] === tmp4.cancelButtonContainer) {
        let tmp21;
        if (cResult[10] === tmp18) {
          tmp21 = cResult[11];
        }
        return tmp21;
      }
      const tmp24 = <View style={cancelButtonContainer}>{tmp18}</View>;
      cResult[9] = tmp4.cancelButtonContainer;
      cResult[10] = tmp18;
      cResult[11] = tmp24;
      tmp21 = tmp24;
    } else {
      return null;
    }
  }
  const fn = function u() {
    return () => {
      if (null != navigation) {
        const setOptions = navigation.setOptions;
        const obj = channelId(route[10]);
        setOptions(obj.getDefaultChannelStackHeaderProps(navigation, closure_1_2));
      }
    };
  };
  const items = [navigation, route];
  cResult[0] = navigation;
  cResult[1] = route;
  cResult[2] = fn;
  cResult[3] = items;
  tmp10 = items;
  tmp9 = fn;
}) : ((channelId) => {
  let intl;
  channelId = channelId.channelId;
  let route;
  const tmp = closure_8();
  let obj = channelId(route[8]);
  navigation = obj.useNavigation();
  const obj2 = channelId(route[8]);
  route = obj2.useRoute();
  const items = [navigation, route];
  const obj3 = channelId(route[9]);
  const canSearchForumPostsByChannelId = obj3.useCanSearchForumPostsByChannelId(channelId);
  const effect = react.useEffect(() => () => {
    if (null != navigation) {
      const setOptions = navigation.setOptions;
      const obj = channelId(route[10]);
      setOptions(obj.getDefaultChannelStackHeaderProps(navigation, closure_1_2));
    }
  }, items);
  let tmp8 = null;
  if (canSearchForumPostsByChannelId) {
    ({
      variant: "tertiary",
      size: "sm",
      text: intl.string(channelId(route[12]).t["ETE/oC"]),
      onPress() {
          if (null != channelId) {
            const obj = ForumActionCreatorsDefault;
            const result = obj.updateForumSearchQuery(tmp, null);
          }
        }
    });
    const Button = tmp2(tmp3[13]).Button;
    intl = tmp2(tmp3[12]).intl;
    tmp8 = <View style={tmp.cancelButtonContainer}>{null}</View>;
  }
  return tmp8;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let tmp11;
  let tmp14;
  let tmp8;
  let tmp9;
  const tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(25);
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  closure_8();
  let obj2 = channelId(13118);
  const canSearchForumPostsByChannelId = obj2.useCanSearchForumPostsByChannelId(channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumSearchStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function h() {
      let searchQuery = null;
      if (null != channelId) {
        searchQuery = ForumSearchStore.getSearchQuery(tmp);
      }
      return searchQuery;
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[4] = items2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== channelId) {
    class B {
      constructor() {
        let tmp2 = null != channelId;
        if (tmp2) {
          const channel = ChannelStore.getChannel(tmp);
          let flag;
          if (channel != null) {
            flag = channel.isGameInvitesChannel();
          }
          if (flag == null) {
            flag = false;
          }
          tmp2 = flag;
        }
        return tmp2;
      }
    }
    const items3 = [channelId];
    cResult[5] = channelId;
    cResult[6] = B;
    cResult[7] = items3;
    tmp14 = items3;
  } else {
    class B {
      constructor() {
        let tmp2 = null != channelId;
        if (tmp2) {
          const channel = ChannelStore.getChannel(tmp);
          let flag;
          if (channel != null) {
            flag = channel.isGameInvitesChannel();
          }
          if (flag == null) {
            flag = false;
          }
          tmp2 = flag;
        }
        return tmp2;
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp11, B, tmp14);
  if (canSearchForumPostsByChannelId) {
    class B {
      constructor() {
        let tmp2 = null != channelId;
        if (tmp2) {
          const channel = ChannelStore.getChannel(tmp);
          let flag;
          if (channel != null) {
            flag = channel.isGameInvitesChannel();
          }
          if (flag == null) {
            flag = false;
          }
          tmp2 = flag;
        }
        return tmp2;
      }
    }
    if (null != stateFromStores) {
      class B {
        constructor() {
          let tmp2 = null != channelId;
          if (tmp2) {
            const channel = ChannelStore.getChannel(tmp);
            let flag;
            if (channel != null) {
              flag = channel.isGameInvitesChannel();
            }
            if (flag == null) {
              flag = false;
            }
            tmp2 = flag;
          }
          return tmp2;
        }
      }
      const fn2 = function _() {
        const tmp2 = null != guildId && null != channelId;
        if (tmp2) {
          const obj2 = { guildId, channelId };
          const obj = tracking_Tracking;
          const result = obj.trackForumSearchCleared(obj2);
        }
        if (null != channelId) {
          const obj3 = ForumActionCreatorsDefault;
          const result1 = obj3.updateForumSearchQuery(tmp8, "");
        }
      };
      cResult[8] = channelId;
      cResult[9] = guildId;
      cResult[10] = fn2;
    }
  }
  return null;
}) : ((channelId) => {
  let placeholder;
  channelId = channelId.channelId;
  ({ guildId: importDefault, placeholder } = channelId);
  let tmp2 = channelId;
  const tmp = closure_8();
  let obj = channelId(13118);
  const canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(channelId);
  let obj2 = channelId(504);
  const items = [ForumSearchStore];
  const items1 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
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
      const SearchField = tmp2(6554).SearchField;
      if (null == placeholder) {
        const intl = tmp2(1126).intl;
        const string = intl.string;
        const t = tmp2(1126).t;
        placeholder = string(tmp6 ? t["5h0QOP"] : t.Iy2gnS);
      }
      tmp8Result = <View style={tmp.inputContainer}>{null}</View>;
    }
  }
  return tmp8Result;
}));
let result = size.fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = memo2Result;