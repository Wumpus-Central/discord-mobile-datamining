// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import messages_PinsScreenDefault from "../../../../../search/native/components/tabs/pages/messages/PinsScreen.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";

const require = fn;
const View = fn(17).View;
const SearchTabs = fn(9312).SearchTabs;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function PinsScreen() {
        const cResult = channelId(576).c(8);
        const obj = channelId(576);
        channelId = channelId(1506).useRoute().params.channelId;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
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
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const obj2 = channelId(1506);
        const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
        const tmpResult = channelId(504);
        const channelDetailsSearchContext = channelId(11995).useChannelDetailsSearchContext(channelId, stateFromStores);
        const tmp9 = closure_7();
        if (cResult[3] !== channelDetailsSearchContext) {
          const obj3 = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
          const tmp14 = jsx(messages_PinsScreenDefault, {
            searchContext: channelDetailsSearchContext,
            isFocused: true,
            tab: SearchTabs.PINS,
          });
          cResult[3] = channelDetailsSearchContext;
          cResult[4] = tmp14;
          let tmp10 = tmp14;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === tmp9.container) {
          if (cResult[6] === tmp10) {
            let tmp15 = cResult[7];
          }
          return tmp15;
        }
        const tmp16 = <View style={tmp9.container}>{tmp10}</View>;
        cResult[5] = tmp9.container;
        cResult[6] = tmp10;
        cResult[7] = tmp16;
        tmp15 = tmp16;
        const obj4 = { style: tmp9.container, children: tmp10 };
        const tmpResult2 = channelId(11995);
      }
    : function PinsScreen() {
        channelId = channelId(1506).useRoute().params.channelId;
        const obj = channelId(1506);
        const items = [ChannelStore];
        const stateFromStores = channelId(504).useStateFromStores(items, () => {
          const channel = ChannelStore.getChannel(channelId);
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return guild_id;
        });
        const obj2 = channelId(504);
        const channelDetailsSearchContext = channelId(11995).useChannelDetailsSearchContext(channelId, stateFromStores);
        const obj4 = {
          style: closure_7().container,
          children: jsx(messages_PinsScreenDefault, {
            searchContext: channelDetailsSearchContext,
            isFocused: true,
            tab: SearchTabs.PINS,
          }),
        };
        return (
          <View style={closure_7().container}>
            {jsx(messages_PinsScreenDefault, {
              searchContext: channelDetailsSearchContext,
              isFocused: true,
              tab: SearchTabs.PINS,
            })}
          </View>
        );
      },
);
