// === Module 16810: OnboardingHomeResourcesSheet ===

// Module 16810 (OnboardingHomeResourcesSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 9254 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16809 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(16808).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OnboardingHomeResourcesSheet(guildId) {
  const cResult = guildId(576).c(11);
  guildId = guildId.guildId;
  let obj = guildId(576);
  token = guildId(4778).useToken(token(587).modules.mobile.TABLE_ROW_ICON_SIZE);
  const arr = token(16809)(guildId);
  if (cResult[0] !== guildId) {
    function handleChannelPress(channelId) {
      const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, channelId);
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
    }
    cResult[0] = guildId;
    cResult[1] = handleChannelPress;
    let tmp5 = handleChannelPress;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  if (cResult[2] === tmp5) {
    if (cResult[3] === arr) {
      if (cResult[4] === token) {
        if (cResult[9] !== cResult[5]) {
          let obj3 = { children: null };
          let obj4 = { hasIcons: true, children: tmp6 };
          obj3.children = jsx(tmp(6881).ActionSheetRow.Group, { hasIcons: true, children: tmp6 });
          const tmp12 = jsx(tmp(6885).ActionSheet, { children: null });
          cResult[9] = tmp6;
          cResult[10] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[10];
        }
        return tmp10;
      }
    }
  }
  if (cResult[6] === tmp5) {
    if (cResult[7] === token) {
      let tmp7 = cResult[8];
    }
    const mapped = arr.map(tmp7);
    cResult[2] = tmp5;
    cResult[3] = arr;
    cResult[4] = token;
    cResult[5] = mapped;
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
      return tmp4(guildId(tmp2[11]).ActionSheetRow, obj1, guildId.channelId);
    }
  }
  cResult[6] = tmp5;
  cResult[7] = token;
  cResult[8] = I;
  tmp7 = I;
  let obj2 = guildId(4778);
}) : (function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  importDefault = guildId(4778).useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  let obj = guildId(4778);
  let obj2 = { children: null };
  const arr = useResourceChannelsDefault(guildId);
  obj2.children = jsx(guildId(6881).ActionSheetRow.Group, {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((label) => {
      const resourceChannelIconURL = height(dependencyMap[10]).getResourceChannelIconURL(label);
      const obj2 = { label: label.title, icon: null, onPress: null, arrow: true };
      let tmp4Result;
      if (null != resourceChannelIconURL) {
        const obj3 = { style: null, source: null };
        const size = { width: height, height };
        obj3.style = size;
        const obj4 = { uri: resourceChannelIconURL };
        obj3.source = obj4;
        tmp4Result = jsx(height(dependencyMap[12]), { style: null, source: null });
      }
      obj2.icon = tmp4Result;
      obj2.onPress = function onPress() {
        const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, label.channelId);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
      };
      return jsx(guildId(dependencyMap[11]).ActionSheetRow, { label: label.title, icon: null, onPress: null, arrow: true }, label.channelId);
    })
  });
  return jsx(guildId(6885).ActionSheet, { children: null });
});