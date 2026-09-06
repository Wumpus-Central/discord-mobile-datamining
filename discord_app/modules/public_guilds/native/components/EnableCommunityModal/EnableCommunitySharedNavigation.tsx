// === Module 17663: EnableCommunitySharedNavigation ===

// Module 17663 (EnableCommunitySharedNavigation)
import DispatcherDefault from "Dispatcher" /* 573 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
let GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { flex: 1, height: "100%" }, modal: { height: "100%", flex: 1, justifyContent: "space-between" }, button: { flexGrow: 0, paddingLeft: 16, paddingTop: 16, paddingRight: 16 } });
createStyles = { STEP_1: "STEP_1", STEP_2: "STEP_2", STEP_3: "STEP_3" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx");

export const EnableCommunityModalSteps = createStyles;
export const EnableCommunityModalScreen = function EnableCommunityModalScreen(arg0) {
  ({ onSuccess: require, buttonText, currentStep: importDefault, headerRef } = arg0);
  closure_5 = undefined;
  let isScreenReaderEnabled;
  GuildFeatures = undefined;
  ({ disableNextStep, children } = arg0);
  const tmp = closure_10();
  let obj = require("initialize");
  const items = [isScreenReaderEnabled];
  const guild = obj.useStateFromStoresObject(items, () => isScreenReaderEnabled.getProps()).guild;
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  let tmp2Result = require("useNavigation");
  closure_5 = tmp2Result.useNavigation();
  tmp2Result = require("useIsScreenReaderEnabled");
  isScreenReaderEnabled = tmp2Result.useIsScreenReaderEnabled();
  GuildFeatures = tmp7;
  const items1 = [isScreenReaderEnabled, null != guild, headerRef];
  const effect = guild.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (closure_7) {
        if (null != headerRef) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            require("setAccessibilityFocus");
            const obj = { ref };
            return obj.setAccessibilityFocus(obj);
          }, 100);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items1);
  const items2 = [hasItem];
  const effect1 = guild.useEffect(() => {
    if (hasItem) {
      DispatcherDefault.wait(() => closure_1_1(headerRef[11]).close());
    }
  }, items2);
  if (null == guild) {
    let tmp12Result = closure_8(require("SceneLoadingIndicator").SceneLoadingIndicator, {});
  } else {
    obj = { style: tmp.container, children: null };
    obj = { bottom: true, style: tmp.modal, children: null };
    const obj1 = { style: { flexGrow: 1 }, children };
    const items3 = [closure_8(hasItem, obj1), ];
    const obj2 = { style: tmp.button, children: null };
    if (buttonText == null) {
      const intl = require("util").intl;
      buttonText = intl.string(require("util").t.PDTjLN);
    }
    const obj3 = {
      variant: "primary",
      grow: true,
      text: buttonText,
      onPress() {
          if (null != guild) {
            if (createStyles.STEP_1 === importDefault) {
              closure_5.push(createStyles.STEP_2);
            } else if (createStyles.STEP_2 === tmp2) {
              closure_5.push(createStyles.STEP_3);
            } else if (require != null) {
              tmp4(tmp);
            }
          }
        },
      disabled: disableNextStep
    };
    obj2.children = closure_8(require("components/Button/Button").Button, obj3);
    items3[1] = closure_8(hasItem, obj2);
    obj.children = items3;
    obj.children = closure_9(require("common/SafeAreaView").SafeAreaPaddingView, obj);
    tmp12Result = closure_8(closure_5, obj);
  }
  return tmp12Result;
};