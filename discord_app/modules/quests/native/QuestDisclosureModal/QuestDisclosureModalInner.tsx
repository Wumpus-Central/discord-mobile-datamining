// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  container: { flex: 1, width: "100%", maxWidth: 480, alignSelf: "center" },
  contentContainer: null,
  illustration: null,
  closeButton: null,
  targetList: null,
  targetItem: null,
  lastTargetItem: null,
  disclosureText: null,
};
obj = { flexGrow: 1, padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj.contentContainer = obj;
obj.illustration = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
let obj1 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
obj.closeButton = {
  marginTop: "auto",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_24,
};
obj.targetList = { padding: 0 };
let obj2 = { marginTop: "auto", paddingHorizontal: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
obj.targetItem = {
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  paddingLeft: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
obj.lastTargetItem = { borderBottomWidth: 0 };
let obj3 = {
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  paddingLeft: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
obj.disclosureText = {
  flex: 1,
  paddingVertical: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
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
    obj.icon = tmp5(tmp2(9286).ServerIcon, { size: "xs" });
    const intl4 = tmp2(1114).intl;
    obj.text = intl4.string(tmp2(1114).t["2bL0wT"]);
    let items = [obj];
    let tmp6 = tmp5;
    items1 = items;
  } else {
    obj.icon = tmp5(tmp2(8886).GlobeEarthIcon, { size: "xs" });
    const intl = tmp2(1114).intl;
    obj.text = intl.string(tmp2(1114).t.xQSdPv);
    items1 = [obj, ,];
    obj = { icon: tmp5(tmp2(11825).UserIcon, { size: "xs" }), text: null };
    const intl2 = tmp2(1114).intl;
    obj.text = intl2.string(tmp2(1114).t.mYt7hQ);
    items1[1] = obj;
    obj = { icon: tmp5(tmp2(9223).GameControllerIcon, { size: "xs" }), text: null };
    const intl3 = tmp2(1114).intl;
    obj.text = intl3.string(tmp2(1114).t.XAsWxQ);
    items1[2] = obj;
    tmp6 = tmp5;
  }
  const obj1 = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: null };
  const items2 = [
    tmp6(closure_4, { style: tmp.illustration, children: tmp6(require("native").WumpusCouchSpotIllustration, {}) }),
    ,
    ,
    ,
  ];
  const obj3 = { variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
  const obj2 = { style: tmp.illustration, children: tmp6(require("native").WumpusCouchSpotIllustration, {}) };
  const tmp7 = closure_7;
  const tmp8 = closure_3;
  const tmp9 = closure_4;
  obj3.children = require("QuestCopyUtils").getDisclosureText({
    adCreativeType,
    gamePublisher,
    gameTitle,
    isTargetedDisclosure,
    isContextualDisclosure: setting,
    cosponsorName,
    isVideoQuest,
  });
  items2[1] = tmp6(require("Text/Text").Text, obj3);
  if (isTargetedDisclosure) {
    const obj4 = {
      radius: 16,
      style: tmp.targetList,
      children: items1.map((children, index) => {
        let obj = { style: closure_0.targetItem, children: null };
        const items = [children.icon];
        items1 = [closure_0.disclosureText];
        let lastTargetItem = index === items1.length - 1;
        if (lastTargetItem) {
          lastTargetItem = closure_0.lastTargetItem;
        }
        obj = {
          style: items1,
          children: tmp3(Text_Text.Text, { variant: "text-md/semibold", children: children.text }),
        };
        items1[1] = lastTargetItem;
        items[1] = timestampProducer(React4, obj);
        obj.children = items;
        return React5(React4, obj, index);
      }),
    };
    isTargetedDisclosure = tmp6(tmp2(5607).Card, obj4);
  }
  items2[2] = isTargetedDisclosure;
  const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl5 = tmp2(1114).intl;
  const obj6 = { privacySettingsUrl: null };
  const tmp2Result = require("QuestCopyUtils");
  obj6.privacySettingsUrl = items1(2024).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj5.children = intl5.format(require("util").t.tzq9Wa, obj6);
  items2[3] = tmp6(require("Text/Text").Text, obj5);
  const obj7 = { style: tmp.closeButton, children: null };
  const obj8 = { variant: "primary", grow: true, size: "lg", text: null, onPress: null };
  const intl6 = tmp2(1114).intl;
  obj8.text = intl6.string(require("util").t.cpT0Cq);
  obj8.onPress = onClose;
  obj7.children = tmp6(require("components/Button/Button").Button, obj8);
  items2[4] = tmp6(tmp9, obj7);
  obj1.children = items2;
  return tmp7(tmp8, obj1);
}
