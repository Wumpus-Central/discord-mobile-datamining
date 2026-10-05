// discord_app/modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import react_native2 from "../../shared_components/MainTabsV2Constants.tsx";
import ForumChannelSearch from "../../../../forums/native/ForumChannelSearch.tsx";
import useIsForumChannelSearchActive from "../../../../forums/native/hooks/useIsForumChannelSearchActive.tsx";
import GuildChannelHeaderDefault from "GuildChannelHeader.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const MIN_HEADER_HEIGHT = react_native2.MIN_HEADER_HEIGHT;
const jsx = Fragment.jsx;
let obj = {
  search: {
    flex: 1,
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 4,
    height: MIN_HEADER_HEIGHT,
  },
};
let closure_5 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let channelId;
        let guildId;
        let isGuildMemberCountVisible;
        let isNavigationScreen;
        let pressable;
        let screenIndex;
        let searchPlaceholder;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(14);
        ({
          channelId,
          screenIndex,
          guildId,
          pressable,
          isGuildMemberCountVisible,
          isNavigationScreen,
          searchPlaceholder,
        } = arg0);
        const tmp4 = closure_5();
        const obj2 = useIsForumChannelSearchActive;
        if (obj2.useIsForumChannelSearchActive(channelId)) {
          if (cResult[0] === channelId) {
            if (cResult[1] === guildId) {
              let tmp9;
              if (cResult[2] === searchPlaceholder) {
                tmp9 = cResult[3];
              }
              if (cResult[4] === tmp4.search) {
                let tmp12;
                if (cResult[5] === tmp9) {
                  tmp12 = cResult[6];
                }
                tmp5 = tmp12;
              }
              const tmp15 = <View style={tmp4.search}>{tmp9}</View>;
              cResult[4] = tmp4.search;
              cResult[5] = tmp9;
              cResult[6] = tmp15;
              tmp12 = tmp15;
            }
          }
          const tmp11 = jsx(ForumChannelSearch.ForumChannelSearchInput, {
            channelId,
            guildId,
            placeholder: searchPlaceholder,
          });
          cResult[0] = channelId;
          cResult[1] = guildId;
          cResult[2] = searchPlaceholder;
          cResult[3] = tmp11;
          tmp9 = tmp11;
        } else {
          if (cResult[7] === channelId) {
            if (cResult[8] === guildId) {
              if (cResult[9] === isGuildMemberCountVisible) {
                if (cResult[10] === isNavigationScreen) {
                  if (cResult[11] === pressable) {
                    if (cResult[12] === screenIndex) {
                      tmp5 = cResult[13];
                    }
                  }
                }
              }
            }
          }
          const tmp8 = jsx(GuildChannelHeaderDefault, {
            channelId,
            guildId,
            pressable,
            isGuildMemberCountVisible,
            isNavigationScreen,
            screenIndex,
          });
          cResult[7] = channelId;
          cResult[8] = guildId;
          cResult[9] = isGuildMemberCountVisible;
          cResult[10] = isNavigationScreen;
          cResult[11] = pressable;
          cResult[12] = screenIndex;
          cResult[13] = tmp8;
          tmp5 = tmp8;
        }
        return tmp5;
      }
    : (arg0) => {
        let channelId;
        let guildId;
        let isGuildMemberCountVisible;
        let isNavigationScreen;
        let pressable;
        let screenIndex;
        let searchPlaceholder;
        let tmp4Result;
        ({ channelId, guildId } = arg0);
        ({ screenIndex, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
        const tmp = closure_5();
        const obj = useIsForumChannelSearchActive;
        if (obj.useIsForumChannelSearchActive(channelId)) {
          tmp4Result = <View style={tmp.search}>{null}</View>;
        } else {
          tmp4Result = jsx(GuildChannelHeaderDefault, {
            channelId,
            guildId,
            pressable,
            isGuildMemberCountVisible,
            isNavigationScreen,
            screenIndex,
          });
        }
        return tmp4Result;
      },
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default memoResult;
