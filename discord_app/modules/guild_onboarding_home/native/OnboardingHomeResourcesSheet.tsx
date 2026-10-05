// discord_app/modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildOnboardingHomeActionCreators from "../GuildOnboardingHomeActionCreators.tsx";
import OnboardingHomeConstants from "OnboardingHomeConstants.tsx";
import useResourceChannelsDefault from "../useResourceChannels.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_0, dependencyMap, guildId, importDefault, obj1, obj6, obj7, tmp, tmp2, tmp4;

let closure_3 = OnboardingHomeConstants.ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_2;
      let tmp5;
      let tmp6;
      let token;
      let obj = guildId(576);
      const cResult = obj.c(11);
      guildId = guildId.guildId;
      let obj2 = guildId(4580);
      token = obj2.useToken(token(587).modules.mobile.TABLE_ROW_ICON_SIZE);
      const arr = token(16514)(guildId);
      if (cResult[0] !== guildId) {
        const fn = function l(channelId) {
          const obj = GuildOnboardingHomeActionCreators;
          const homeResourceChannel = obj.selectHomeResourceChannel(guildId, channelId);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet(closure_3);
        };
        cResult[0] = guildId;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      if (cResult[2] === tmp5) {
        if (cResult[3] === arr) {
          let tmp9;
          if (cResult[4] === token) {
            tmp6 = cResult[5];
          }
          if (cResult[9] !== tmp6) {
            const ActionSheet = tmp(6701).ActionSheet;
            let obj4 = { hasIcons: true, children: tmp6 };
            const tmp11 = <ActionSheet>{null}</ActionSheet>;
            cResult[9] = tmp6;
            cResult[10] = tmp11;
            tmp9 = tmp11;
          } else {
            tmp9 = cResult[10];
          }
          return tmp9;
        }
      }
      if (cResult[6] === tmp5) {
        let tmp7;
        if (cResult[7] === token) {
          tmp7 = cResult[8];
        }
        const mapped = arr.map(tmp7);
        cResult[2] = tmp5;
        cResult[3] = arr;
        cResult[4] = token;
        cResult[5] = mapped;
        tmp6 = mapped;
      }
      class I {
        constructor(arg0) {
          closure_0 = guildId;
          tmp2 = closure_2;
          tmp = closure_1;
          obj = closure_1(closure_2[10]);
          resourceChannelIconURL = obj.getResourceChannelIconURL(guildId);
          tmp4 = closure_1_4;
          obj1 = { label: guildId.title, icon: null, onPress: null, arrow: true };
          tmp4Result = undefined;
          ActionSheetRow = guildId(tmp2[11]).ActionSheetRow;
          if (null != resourceChannelIconURL) {
            obj6 = { style: null, source: null };
            size = { width: null, height: null };
            tmp6 = closure_1;
            size.width = closure_1;
            size.height = closure_1;
            obj6.style = size;
            obj7 = { uri: null };
            obj7.uri = resourceChannelIconURL;
            obj6.source = obj7;
            tmp4Result = tmp4(tmp(tmp2[12]), obj6);
          }
          obj1.icon = tmp4Result;
          obj1.onPress = function onPress() {
            return closure_2(label.channelId);
          };
          return tmp4(ActionSheetRow, obj1, guildId.channelId);
        }
      }
      cResult[6] = tmp5;
      cResult[7] = token;
      cResult[8] = I;
      tmp7 = I;
    }
  : (guildId) => {
      let closure_1;
      guildId = guildId.guildId;
      let obj = guildId(4580);
      importDefault = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
      const arr = useResourceChannelsDefault(guildId);
      const ActionSheet = guildId(6701).ActionSheet;
      ({
        hasIcons: true,
        children: arr.map((label) => {
          let obj = height(dependencyMap[10]);
          const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
          let tmp4Result;
          const ActionSheetRow = guildId(dependencyMap[11]).ActionSheetRow;
          if (null != resourceChannelIconURL) {
            size = { width: height, height };
            const obj4 = { uri: resourceChannelIconURL };
            tmp4Result = jsx(height(dependencyMap[12]), { style: size, source: obj4 });
          }
          return (
            <ActionSheetRow
              key={label.channelId}
              label={label.title}
              icon={tmp4Result}
              onPress={function onPress() {
                const channelId = label.channelId;
                const obj = GuildOnboardingHomeActionCreators;
                const homeResourceChannel = obj.selectHomeResourceChannel(guildId, channelId);
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet(closure_3);
              }}
              arrow
            />
          );
        }),
      });
      const Group = guildId(6697).ActionSheetRow.Group;
      return <ActionSheet>{null}</ActionSheet>;
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default tmp3;
