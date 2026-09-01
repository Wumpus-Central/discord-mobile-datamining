// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../../../safe_area/useSafeAreaInsets.native.tsx";
import Text from "../../../../../../design/components/Text/native/Text.tsx";
import SafetyTipsContainerDefault from "../../../../shared/native/SafetyTipsSection.tsx";
import WasThisHelpfulSectionDefault from "WasThisHelpfulSection.tsx";
import closure_3 from "../../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../ChannelSafetyWarningsStore.tsx";
import { AnalyticEvents } from "../../../../../../Constants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";
import { defaultAreStatesEqual } from "../../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

require = arg1;
function MoreTipsModalScreen(learnMore) {
  learnMore = learnMore.learnMore;
  ({ channelId, warningId, senderId, description, safetyTips, actionItems } = learnMore);
  const tmp = callback2();
  let obj = { keyboardShouldPersistTaps: "handled", style: tmp.scroll, children: null };
  obj = { style: tmp.contentContainer, children: null };
  obj = { style: tmp.tipsContainer, children: null };
  const items = [callback(SafetyTipsContainerDefault, { description, safetyTips, showHeader: true })];
  let tmp2Result = null;
  if (null != learnMore) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.learnMore;
    obj1[1] = learnMore;
    tmp2Result = tmp2(tmp5, obj1);
  }
  items[1] = tmp2Result;
  obj[1] = items;
  const items1 = [closure_9(closure_4, obj), ,];
  const obj2 = { children: null };
  const obj3 = { variant: "eyebrow", color: "text-default", style: tmp.header, children: null };
  const intl = getSystemLocale.intl;
  obj3[3] = intl.string(getSystemLocale.t.K5FKtc);
  const items2 = [callback(Text.Text, obj3), actionItems];
  obj2[0] = items2;
  items1[1] = closure_9(closure_4, obj2);
  items1[2] = callback(WasThisHelpfulSectionDefault, { channelId, warningId, senderId });
  obj[1] = items1;
  obj[2] = closure_9(closure_4, obj);
  return callback(closure_5, obj);
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { scroll: null, contentContainer: null, tipsContainer: null, learnMore: null, header: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  marginHorizontal: ThemesDefault.space.PX_16,
  marginBottom: ThemesDefault.space.PX_16,
  gap: ThemesDefault.space.PX_16,
};
let obj1 = {
  marginHorizontal: ThemesDefault.space.PX_16,
  marginBottom: ThemesDefault.space.PX_16,
  gap: ThemesDefault.space.PX_16,
};
createCacheKey[2] = { gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { alignItems: "center" };
let obj2 = { gap: ThemesDefault.space.PX_8 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting(
  "modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx",
);

export default function MoreTipsModal(channelId) {
  channelId = channelId.channelId;
  let _require = channelId;
  const warningId = channelId.warningId;
  importDefault = warningId;
  const senderId = channelId.senderId;
  dependencyMap = senderId;
  let MORE_TIPS = defaultAreStatesEqual;
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
  ({
    modalKey: c0,
    channelId: c1,
    warningId: c2,
    senderId: c3,
    description: c4,
    safetyTips: c5,
    actionItems: c6,
    learnMore: c7,
  } = channelId);
  MORE_TIPS = {
    headerRight() {
      const obj = {
        onPress() {
          return closure_1_1(closure_1_2[12]).popWithKey(closure_0);
        },
        source: _undefined2(_undefined3[13]),
        iconSize: _undefined(_undefined3[14]).IconSizes.MEDIUM,
        accessibilityLabel: null,
      };
      const intl = _undefined(_undefined3[9]).intl;
      obj[3] = intl.string(_undefined(_undefined3[9]).t.cpT0Cq);
      return closure_1_8(_undefined(_undefined3[11]).HeaderActionButton, obj);
    },
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    headerStyle: channelId.headerStyle,
    render() {
      return closure_1_8(closure_1_11, {
        channelId: c1,
        warningId: c2,
        senderId: c3,
        description: c4,
        safetyTips: c5,
        actionItems: c6,
        learnMore: c7,
      });
    },
  };
  return callback(require("../../../../../../design/components/Navigator/native/Navigator.native.tsx").Navigator, {
    screens: { MORE_TIPS },
    initialRouteName: "MORE_TIPS",
    headerStatusBarHeight: useSafeAreaInsetsDefault().top,
  });
}
