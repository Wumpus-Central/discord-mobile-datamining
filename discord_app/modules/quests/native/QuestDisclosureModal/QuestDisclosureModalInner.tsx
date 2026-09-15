// === Module 15206: QuestDisclosureModalInner ===

// Module 15206 (QuestDisclosureModalInner)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4635 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4639 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { flex: 1, width: "100%", maxWidth: 480, alignSelf: "center" }, contentContainer: { flexGrow: 1, padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 }, illustration: null, closeButton: null, targetList: null, targetItem: null, lastTargetItem: null, disclosureText: null };
let obj2 = { flexGrow: 1, padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj.illustration = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
let obj3 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
obj.closeButton = { marginTop: "auto", paddingHorizontal: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
obj.targetList = { padding: 0 };
let obj4 = { marginTop: "auto", paddingHorizontal: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
obj.targetItem = { flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingLeft: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj.lastTargetItem = { borderBottomWidth: 0 };
let obj5 = { flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingLeft: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj.disclosureText = { flex: 1, paddingVertical: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx");

export default function QuestDisclosureModalInner(isTargetedDisclosure) {
  isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
  let items1;
  ({ adCreativeType, gamePublisher, gameTitle, isVideoQuest, onClose, cosponsorName } = isTargetedDisclosure);
  const tmp = closure_8();
  _require = tmp;
  const DropsOptedOut = require("UserSettings").DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  let obj = { icon: null, text: null };
  if (setting) {
    obj.icon = closure_6(tmp2(9418).ServerIcon, { size: "xs" });
    const intl4 = tmp2(1115).intl;
    obj.text = intl4.string(tmp2(1115).t["2bL0wT"]);
    let items = [obj];
    let tmp6 = closure_6;
    items1 = items;
  } else {
    obj.icon = closure_6(tmp2(9018).GlobeEarthIcon, { size: "xs" });
    const intl = tmp2(1115).intl;
    obj.text = intl.string(tmp2(1115).t.xQSdPv);
    items1 = [obj, , ];
    const obj2 = { icon: closure_6(tmp2(11960).UserIcon, { size: "xs" }), text: null };
    const intl2 = tmp2(1115).intl;
    obj2.text = intl2.string(tmp2(1115).t.mYt7hQ);
    items1[1] = obj2;
    const obj3 = { icon: closure_6(tmp2(9355).GameControllerIcon, { size: "xs" }), text: null };
    const intl3 = tmp2(1115).intl;
    obj3.text = intl3.string(tmp2(1115).t.XAsWxQ);
    items1[2] = obj3;
    tmp6 = closure_6;
  }
  const obj4 = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: null };
  const items2 = [tmp6(closure_4, { style: tmp.illustration, children: tmp6(require("native").WumpusCouchSpotIllustration, {}) }), , , , ];
  const obj6 = { variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
  const obj5 = { style: tmp.illustration, children: tmp6(require("native").WumpusCouchSpotIllustration, {}) };
  obj6.children = require("QuestCopyUtils").getDisclosureText({ adCreativeType, gamePublisher, gameTitle, isTargetedDisclosure, isContextualDisclosure: setting, cosponsorName, isVideoQuest });
  items2[1] = tmp6(require("Text/Text").Text, obj6);
  if (isTargetedDisclosure) {
    const obj7 = {
      radius: 16,
      style: tmp.targetList,
      children: items1.map((children, index) => {
          const obj = { style: closure_0.targetItem, children: null };
          const items = [children.icon, ];
          items1 = [closure_0.disclosureText, ];
          let lastTargetItem = index === items1.length - 1;
          if (lastTargetItem) {
            lastTargetItem = closure_0.lastTargetItem;
          }
          items1[1] = lastTargetItem;
          items[1] = timestampProducer(React4, { style: items1, children: timestampProducer(Text_Text.Text, { variant: "text-md/semibold", children: children.text }) });
          obj.children = items;
          return React5(React4, obj, index);
        })
    };
    isTargetedDisclosure = tmp6(tmp2(5692).Card, obj7);
  }
  items2[2] = isTargetedDisclosure;
  const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl5 = tmp2(1115).intl;
  const obj9 = { privacySettingsUrl: null };
  const tmp2Result = require("QuestCopyUtils");
  obj9.privacySettingsUrl = items1(2025).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj8.children = intl5.format(require("util").t.tzq9Wa, obj9);
  items2[3] = tmp6(require("Text/Text").Text, obj8);
  const obj10 = { style: tmp.closeButton, children: null };
  const obj12 = { variant: "primary", grow: true, size: "lg", text: null, onPress: null };
  const intl6 = tmp2(1115).intl;
  obj12.text = intl6.string(require("util").t.cpT0Cq);
  obj12.onPress = onClose;
  obj10.children = tmp6(require("components/Button/Button").Button, obj12);
  items2[4] = tmp6(closure_4, obj10);
  obj4.children = items2;
  return closure_7(closure_3, obj4);
};