// discord_app/modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx
import search_tracking_TrackingDefault from "../../tracking/Tracking.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const ScrollView = fn(17).ScrollView;
const SearchTypes = fn(1085).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ container: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchNavigatorPreviewScreen() {
      const cResult = navigation(searchContext[6]).c(14);
      const tmp3 = closure_7();
      let obj = navigation(searchContext[6]);
      navigation = navigation(searchContext[7]).useNavigation();
      let obj2 = navigation(searchContext[7]);
      const route = navigation(searchContext[8]).useRoute();
      const channelId = route.params.channelId;
      searchContext = route.params.searchContext;
      const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
      if (cResult[0] === channelId) {
        if (cResult[1] === navigation) {
          if (cResult[2] === onBeforeJumpToMessage) {
            if (cResult[3] === searchContext) {
              let tmp6 = cResult[4];
            }
            let type = searchContext.type;
            if (SearchTypes.CHANNEL !== type) {
              if (SearchTypes.GUILD_CHANNEL !== type) {
                if (cResult[11] === channelId) {
                  if (cResult[12] === tmp6) {
                    let tmp7 = cResult[13];
                  }
                  return tmp7;
                }
                const obj4 = { channelId, onBeforeJumpToMessage: tmp6 };
                const tmp10 = jsx(channelId(tmp[10]), { channelId, onBeforeJumpToMessage: tmp6 });
                cResult[11] = channelId;
                cResult[12] = tmp6;
                cResult[13] = tmp10;
                tmp7 = tmp10;
              }
            }
            if (cResult[5] === channelId) {
              if (cResult[6] === tmp6) {
                let tmp11 = cResult[7];
              }
              if (cResult[8] === tmp3.container) {
                if (cResult[9] === tmp11) {
                  let tmp15 = cResult[10];
                }
                return tmp15;
              }
              const obj5 = {
                horizontal: true,
                scrollEnabled: false,
                bounces: false,
                contentContainerStyle: tmp3.container,
                children: tmp11,
              };
              const tmp18 = (
                <ScrollView horizontal scrollEnabled={false} bounces={false} contentContainerStyle={tmp3.container}>
                  {tmp11}
                </ScrollView>
              );
              cResult[8] = tmp3.container;
              cResult[9] = tmp11;
              cResult[10] = tmp18;
              tmp15 = tmp18;
            }
            const obj6 = { channelId, onBeforeJumpToMessage: tmp6 };
            const tmp14 = jsx(channelId(tmp[10]), { channelId, onBeforeJumpToMessage: tmp6 });
            cResult[5] = channelId;
            cResult[6] = tmp6;
            cResult[7] = tmp14;
            tmp11 = tmp14;
          }
        }
      }
      const fn = function n() {
        const result = search_tracking_TrackingDefault.trackSearchJumpToMessage({ searchContext, channelId });
        if (onBeforeJumpToMessage != null) {
          onBeforeJumpToMessage();
        }
        const type = searchContext.type;
        const parent = navigation.getParent();
        if (null != parent) {
          parent.goBack();
        }
        const obj2 = { searchContext, channelId };
      };
      cResult[0] = channelId;
      cResult[1] = navigation;
      cResult[2] = onBeforeJumpToMessage;
      cResult[3] = searchContext;
      cResult[4] = fn;
      tmp6 = fn;
      const obj3 = navigation(searchContext[8]);
    }
  : function SearchNavigatorPreviewScreen() {
      const tmp = closure_7();
      navigation = navigation(searchContext[7]).useNavigation();
      let obj = navigation(searchContext[7]);
      const route = navigation(searchContext[8]).useRoute();
      const channelId = route.params.channelId;
      searchContext = route.params.searchContext;
      const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
      const items = [searchContext, channelId, onBeforeJumpToMessage, navigation];
      const callback = onBeforeJumpToMessage.useCallback(() => {
        const result = search_tracking_TrackingDefault.trackSearchJumpToMessage({ searchContext, channelId });
        if (onBeforeJumpToMessage != null) {
          onBeforeJumpToMessage();
        }
        const type = searchContext.type;
        const parent = navigation.getParent();
        if (null != parent) {
          parent.goBack();
        }
        const obj2 = { searchContext, channelId };
      }, items);
      let type = searchContext.type;
      if (SearchTypes.CHANNEL !== type) {
        if (SearchTypes.GUILD_CHANNEL !== type) {
          const obj3 = { channelId, onBeforeJumpToMessage: callback };
          return jsx(channelId(tmp2[10]), { channelId, onBeforeJumpToMessage: callback });
        }
      }
      let obj2 = navigation(searchContext[8]);
      return (
        <ScrollView horizontal scrollEnabled={false} bounces={false} contentContainerStyle={tmp.container}>
          {jsx(channelId(searchContext[10]), { channelId, onBeforeJumpToMessage: callback })}
        </ScrollView>
      );
    };
