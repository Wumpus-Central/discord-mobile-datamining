// === Module 17434: EnableCommunitySharedNavigation ===

// Module 17434 (EnableCommunitySharedNavigation)
import DispatcherDefault from "Dispatcher" /* 573 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9038 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
let GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let closure_10 = createStyles.createStyles({ container: { flex: 1, height: "100%" }, modal: { height: "100%", flex: 1, justifyContent: "space-between" }, button: { flexGrow: 0, paddingLeft: 16, paddingTop: 16, paddingRight: 16 } });
let obj2 = { STEP_1: "STEP_1", STEP_2: "STEP_2", STEP_3: "STEP_3" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx");

export const EnableCommunityModalSteps = obj2;
export const EnableCommunityModalScreen = function EnableCommunityModalScreen(arg0) {
  ({ onSuccess: require, buttonText, currentStep: importDefault, headerRef } = arg0);
  closure_5 = undefined;
  let isScreenReaderEnabled;
  GuildFeatures = undefined;
  ({ disableNextStep, children } = arg0);
  const tmp = closure_10();
  const items = [isScreenReaderEnabled];
  const guild = require("initialize").useStateFromStoresObject(items, () => isScreenReaderEnabled.getProps()).guild;
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  let obj = require("initialize");
  closure_5 = require("useNavigation").useNavigation();
  const tmp2Result = require("useNavigation");
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  GuildFeatures = tmp7;
  const items1 = [isScreenReaderEnabled, null != guild, headerRef];
  const effect = guild.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (closure_7) {
        if (null != headerRef) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => require("setAccessibilityFocus").setAccessibilityFocus({ ref }), 100);
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
    obj2 = { style: tmp.container, children: null };
    const obj3 = { bottom: true, style: tmp.modal, children: null };
    const obj4 = { style: { flexGrow: 1 }, children };
    const items3 = [closure_8(hasItem, obj4), ];
    const obj5 = { style: tmp.button, children: null };
    if (buttonText == null) {
      const intl = require("util").intl;
      buttonText = intl.string(require("util").t.PDTjLN);
    }
    const obj6 = {
      variant: "primary",
      grow: true,
      text: buttonText,
      onPress() {
          if (null != guild) {
            if (obj2.STEP_1 === importDefault) {
              closure_5.push(obj2.STEP_2);
            } else if (obj2.STEP_2 === tmp2) {
              closure_5.push(obj2.STEP_3);
            } else if (require != null) {
              tmp4(tmp);
            }
          }
        },
      disabled: disableNextStep
    };
    obj5.children = closure_8(require("components/Button/Button").Button, obj6);
    items3[1] = closure_8(hasItem, obj5);
    obj3.children = items3;
    obj2.children = closure_9(require("common/SafeAreaView").SafeAreaPaddingView, obj3);
    tmp12Result = closure_8(closure_5, obj2);
  }
  return tmp12Result;
};