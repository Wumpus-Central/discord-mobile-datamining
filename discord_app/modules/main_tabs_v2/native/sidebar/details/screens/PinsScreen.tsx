// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import SearchConstants from "../../../../../search/SearchConstants.tsx";
import messages_PinsScreenDefault from "../../../../../search/native/components/tabs/pages/messages/PinsScreen.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let obj2;
const View = react_native.View;
const SearchTabs = SearchConstants.SearchTabs;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_7 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let channelId;
        let first;
        let tmp10;
        let tmp6;
        const obj = channelId(576);
        const cResult = obj.c(8);
        const obj2 = channelId(1493);
        channelId = obj2.useRoute().params.channelId;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function u() {
            const channel = ChannelStore.getChannel(channelId);
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            return guild_id;
          };
          cResult[1] = channelId;
          cResult[2] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const tmpResult = channelId(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
        const tmpResult2 = channelId(11941);
        const channelDetailsSearchContext = tmpResult2.useChannelDetailsSearchContext(channelId, stateFromStores);
        const tmp9 = closure_7();
        if (cResult[3] !== channelDetailsSearchContext) {
          const tmp14 = jsx(messages_PinsScreenDefault, {
            searchContext: channelDetailsSearchContext,
            isFocused: true,
            tab: SearchTabs.PINS,
          });
          cResult[3] = channelDetailsSearchContext;
          cResult[4] = tmp14;
          tmp10 = tmp14;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === tmp9.container) {
          let tmp15;
          if (cResult[6] === tmp10) {
            tmp15 = cResult[7];
          }
          return tmp15;
        }
        const tmp16 = <View style={tmp9.container}>{tmp10}</View>;
        cResult[5] = tmp9.container;
        cResult[6] = tmp10;
        cResult[7] = tmp16;
        tmp15 = tmp16;
      }
    : () => {
        let channelId;
        const obj = channelId(1493);
        channelId = obj.useRoute().params.channelId;
        const items = [ChannelStore];
        const obj2 = channelId(504);
        const stateFromStores = obj2.useStateFromStores(items, () => {
          const channel = ChannelStore.getChannel(channelId);
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return guild_id;
        });
        const obj3 = channelId(11941);
        const channelDetailsSearchContext = obj3.useChannelDetailsSearchContext(channelId, stateFromStores);
        return <View style={closure_7().container}>{null}</View>;
      },
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
