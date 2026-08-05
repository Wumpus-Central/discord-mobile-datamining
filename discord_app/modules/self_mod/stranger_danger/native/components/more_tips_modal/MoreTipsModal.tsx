import { defaultAreStatesEqual } from "../../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { NavigationStack } from "../../../../../../design/components/Navigator/native/Navigator.native.tsx";
import { Text } from "../../../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../../../intl/index.native.tsx";
import { useSafeAreaInsets } from "../../../../../safe_area/useSafeAreaInsets.native.tsx";
import { SafetyTipsContainer } from "../../../../shared/native/SafetyTipsSection.tsx";
import { WasThisHelpfulSection } from "WasThisHelpfulSection.tsx";
// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx
import set from "set";
import get_ActivityIndicator from "trackViewedEvent";
import handleConnectionOpen from "handleConnectionOpen";
import { AnalyticEvents } from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
function MoreTipsModalScreen(learnMore) {
  let actionItems;
  let channelId;
  let description;
  let safetyTips;
  let senderId;
  let warningId;
  learnMore = learnMore.learnMore;
  ({ channelId, warningId, senderId, description, safetyTips, actionItems } = learnMore);
  const tmp = createCacheKey();
  let obj = { keyboardShouldPersistTaps: "handled", style: tmp.scroll, children: null };
  obj = { style: tmp.contentContainer, children: null };
  obj = { style: tmp.tipsContainer, children: null };
  const items = [callback(SafetyTipsContainer, { description, safetyTips, showHeader: true }), ];
  let tmp2Result = null;
  if (null != learnMore) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.learnMore;
    obj1[1] = learnMore;
    tmp2Result = tmp2(tmp5, obj1);
  }
  items[1] = tmp2Result;
  obj[1] = items;
  const items1 = [closure_9(closure_4, obj), , ];
  const obj2 = { children: null };
  const obj3 = { variant: "eyebrow", color: "text-default", style: tmp.header, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj3[3] = intl.string(getSystemLocale /* getSystemLocale */.t.K5FKtc);
  const items2 = [callback(Text /* Text */.Text, obj3), actionItems];
  obj2[0] = items2;
  items1[1] = closure_9(closure_4, obj2);
  items1[2] = callback(WasThisHelpfulSection, { channelId, warningId, senderId });
  obj[1] = items1;
  obj[2] = closure_9(closure_4, obj);
  return callback(closure_5, obj);
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { scroll: null, contentContainer: null, tipsContainer: null, learnMore: null, header: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
let obj1 = { marginHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[2] = { gap: require("Themes").space.PX_8 };
createCacheKey[3] = { alignItems: "center" };
let obj2 = { gap: require("Themes").space.PX_8 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
const result = require("handleConnectionOpen").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx");

export default function MoreTipsModal(channelId) {
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  channelId = channelId.channelId;
  let _require = channelId;
  const warningId = channelId.warningId;
  let importDefault = warningId;
  const senderId = channelId.senderId;
  let dependencyMap = senderId;
  let MORE_TIPS = _defaultAreStatesEqual;
  const items = [c6];
  const stateFromStores = MORE_TIPS.useStateFromStores(items, () => _undefined5.getChannelSafetyWarning(c0, c1));
  let React = stateFromStores;
  const items1 = [channelId, warningId, senderId, stateFromStores];
  const effect = React.useEffect(() => {
    let obj = _undefined(_undefined3[17]);
    obj = { channelId: _undefined, warningId: _undefined2, senderId: _undefined3, warningType: null };
    let type;
    if (_undefined4 != null) {
      type = _undefined4.type;
    }
    obj[3] = type;
    obj.trackViewedEvent(_undefined6.SAFETY_WARNING_MODAL_VIEWED, obj);
    obj = { name: _undefined(tmp2[19]).MetricEvents.SAFETY_WARNING_MODAL_VIEW };
    _undefined2(_undefined3[18]).increment(obj);
  }, items1);
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  React = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  ({ modalKey: c0, channelId: c1, warningId: c2, senderId: c3, description: c4, safetyTips: c5, actionItems: c6, learnMore: c7 } = channelId);
  MORE_TIPS = {
    headerRight() {
      const obj = {
        onPress() {
          return outer1_1(outer1_2[12]).popWithKey(closure_0);
        },
        source: null,
        iconSize: null,
        accessibilityLabel: null
      };
      obj[1] = _undefined2(_undefined3[13]);
      obj[2] = _undefined(_undefined3[14]).IconSizes.MEDIUM;
      const intl = _undefined(_undefined3[9]).intl;
      obj[3] = intl.string(_undefined(_undefined3[9]).t.cpT0Cq);
      return outer1_8(_undefined(_undefined3[11]).HeaderActionButton, obj);
    },
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    headerStyle: channelId.headerStyle,
    render() {
      return outer1_8(outer1_11, { channelId: c1, warningId: c2, senderId: c3, description: c4, safetyTips: c5, actionItems: c6, learnMore: c7 });
    }
  };
  return callback(_NavigationStack.Navigator, { screens: { MORE_TIPS }, initialRouteName: "MORE_TIPS", headerStatusBarHeight: useSafeAreaInsets().top });
};