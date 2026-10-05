// discord_app/modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../Constants.tsx";
import search_tracking_TrackingDefault from "../../tracking/Tracking.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let navigation;

const ScrollView = react_native.ScrollView;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { flex: 1 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let searchContext;
      let obj = navigation(searchContext[6]);
      const cResult = obj.c(14);
      const tmp3 = closure_7();
      let obj2 = navigation(searchContext[7]);
      navigation = obj2.useNavigation();
      const obj3 = navigation(searchContext[8]);
      const route = obj3.useRoute();
      const channelId = route.params.channelId;
      searchContext = route.params.searchContext;
      const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
      if (cResult[0] === channelId) {
        if (cResult[1] === navigation) {
          if (cResult[2] === onBeforeJumpToMessage) {
            let tmp6;
            if (cResult[3] === searchContext) {
              tmp6 = cResult[4];
            }
            let type = searchContext.type;
            if (SearchTypes.CHANNEL !== type) {
              if (SearchTypes.GUILD_CHANNEL !== type) {
                if (cResult[11] === channelId) {
                  let tmp7;
                  if (cResult[12] === tmp6) {
                    tmp7 = cResult[13];
                  }
                  return tmp7;
                }
                const tmp10 = jsx(channelId(searchContext[10]), { channelId, onBeforeJumpToMessage: tmp6 });
                cResult[11] = channelId;
                cResult[12] = tmp6;
                cResult[13] = tmp10;
                tmp7 = tmp10;
              }
            }
            if (cResult[5] === channelId) {
              let tmp11;
              if (cResult[6] === tmp6) {
                tmp11 = cResult[7];
              }
              if (cResult[8] === tmp3.container) {
                let tmp15;
                if (cResult[9] === tmp11) {
                  tmp15 = cResult[10];
                }
                return tmp15;
              }
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
            const tmp14 = jsx(channelId(searchContext[10]), { channelId, onBeforeJumpToMessage: tmp6 });
            cResult[5] = channelId;
            cResult[6] = tmp6;
            cResult[7] = tmp14;
            tmp11 = tmp14;
          }
        }
      }
      const fn = function n() {
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext, channelId };
        const result = obj.trackSearchJumpToMessage(obj2);
        if (onBeforeJumpToMessage != null) {
          onBeforeJumpToMessage();
        }
        const type = searchContext.type;
        const parent = navigation.getParent();
        if (null != parent) {
          parent.goBack();
        }
      };
      cResult[0] = channelId;
      cResult[1] = navigation;
      cResult[2] = onBeforeJumpToMessage;
      cResult[3] = searchContext;
      cResult[4] = fn;
      tmp6 = fn;
    }
  : () => {
      let searchContext;
      const tmp = closure_7();
      let obj = navigation(searchContext[7]);
      navigation = obj.useNavigation();
      let obj2 = navigation(searchContext[8]);
      const route = obj2.useRoute();
      const channelId = route.params.channelId;
      searchContext = route.params.searchContext;
      const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
      const items = [searchContext, channelId, onBeforeJumpToMessage, navigation];
      const callback = onBeforeJumpToMessage.useCallback(() => {
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext, channelId };
        const result = obj.trackSearchJumpToMessage(obj2);
        if (onBeforeJumpToMessage != null) {
          onBeforeJumpToMessage();
        }
        const type = searchContext.type;
        const parent = navigation.getParent();
        if (null != parent) {
          parent.goBack();
        }
      }, items);
      let type = searchContext.type;
      if (SearchTypes.CHANNEL !== type) {
        if (SearchTypes.GUILD_CHANNEL !== type) {
          return jsx(channelId(searchContext[10]), { channelId, onBeforeJumpToMessage: callback });
        }
      }
      return (
        <ScrollView horizontal scrollEnabled={false} bounces={false} contentContainerStyle={tmp.container}>
          {jsx(channelId(searchContext[10]), { channelId, onBeforeJumpToMessage: callback })}
        </ScrollView>
      );
    };
let result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx");

export default tmp2;
