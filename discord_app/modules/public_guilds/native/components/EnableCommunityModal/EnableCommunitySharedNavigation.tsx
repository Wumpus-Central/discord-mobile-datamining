// discord_app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../guild_settings/GuildSettingsStore.tsx";
import { GuildFeatures } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({
  container: { flex: 1, height: "100%" },
  modal: { height: "100%", flex: 1, justifyContent: "space-between" },
  button: { flexGrow: 0, paddingLeft: 16, paddingTop: 16, paddingRight: 16 },
});
createCacheKey = { STEP_1: "STEP_1", STEP_2: "STEP_2", STEP_3: "STEP_3" };
const result = require("set").fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx",
);

export const EnableCommunityModalSteps = createCacheKey;
export const EnableCommunityModalScreen = function EnableCommunityModalScreen(arg0) {
  ({ onSuccess: require, buttonText, currentStep: importDefault, headerRef } = arg0);
  let guild;
  let hasItem;
  closure_5 = undefined;
  let isScreenReaderEnabled;
  GuildFeatures = undefined;
  ({ disableNextStep, children } = arg0);
  const tmp = callback2();
  let obj = require(headerRef[6]);
  const items = [isScreenReaderEnabled];
  guild = obj.useStateFromStoresObject(items, () => isScreenReaderEnabled.getProps()).guild;
  hasItem = undefined;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  let tmp2Result = tmp2(tmp3[7]);
  closure_5 = tmp2Result.useNavigation();
  tmp2Result = tmp2(tmp3[8]);
  isScreenReaderEnabled = tmp2Result.useIsScreenReaderEnabled();
  GuildFeatures = tmp7;
  const items1 = [isScreenReaderEnabled, null != guild, headerRef];
  const effect = guild.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (closure_7) {
        if (null != headerRef) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            let obj = callback(closure_1_2[9]);
            obj = { ref: closure_2 };
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
      closure_1_1(headerRef[10]).wait(() => callback(table[11]).close());
      const obj = closure_1_1(headerRef[10]);
    }
  }, items2);
  if (null == guild) {
    let tmp12Result = callback(tmp2(tmp3[12]).SceneLoadingIndicator, {});
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { bottom: true, style: null, children: null };
    obj[1] = tmp.modal;
    obj1 = { style: null, children: null };
    obj1[0] = { flexGrow: 1 };
    obj1[1] = children;
    const items3 = [callback(hasItem, obj1)];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.button;
    if (buttonText == null) {
      const intl = tmp2(tmp3[15]).intl;
      buttonText = intl.string(tmp2(tmp3[15]).t.PDTjLN);
    }
    const obj3 = { variant: "primary", grow: true, text: null, onPress: null, disabled: null };
    obj3[2] = buttonText;
    obj3[3] = function onPress() {
      if (null != guild) {
        if (closure_1_11.STEP_1 === closure_1) {
          arr = arr.push(tmp3.STEP_2);
        } else if (tmp3.STEP_2 === tmp2) {
          arr = arr.push(tmp3.STEP_3);
        } else if (closure_0 != null) {
          tmp4(tmp);
        }
      }
    };
    obj3[4] = disableNextStep;
    obj2[1] = callback(tmp2(tmp3[14]).Button, obj3);
    items3[1] = callback(hasItem, obj2);
    obj[2] = items3;
    obj[1] = closure_9(tmp2(tmp3[13]).SafeAreaPaddingView, obj);
    tmp12Result = tmp12(closure_5, obj);
    const tmp13 = closure_5;
    const tmp14 = closure_9;
    const tmp15 = hasItem;
  }
  return tmp12Result;
};
