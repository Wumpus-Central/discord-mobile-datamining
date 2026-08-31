// === Module 14683: QuestDisclosureModalInner ===

// Module 14683 (QuestDisclosureModalInner)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import ThemesDefault from "Themes" /* 712 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

({ ScrollView: c3, View: c4 } = get_ActivityIndicator);
const HelpdeskArticles = ME.HelpdeskArticles;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { container: { flex: 1, width: "100%", maxWidth: 480, alignSelf: "center" }, contentContainer: null, illustration: null, closeButton: null, targetList: null, targetItem: null, lastTargetItem: null, disclosureText: null };
obj = { flexGrow: 1, padding: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_16 };
obj[1] = obj;
obj[2] = { alignSelf: "center", marginBottom: ThemesDefault.space.PX_8 };
let obj1 = { alignSelf: "center", marginBottom: ThemesDefault.space.PX_8 };
obj[3] = { marginTop: "auto", paddingHorizontal: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_24 };
obj[4] = { padding: 0 };
let obj2 = { marginTop: "auto", paddingHorizontal: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_24 };
obj[5] = { flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingLeft: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
obj[6] = { borderBottomWidth: 0 };
let obj3 = { flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingLeft: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
obj[7] = { flex: 1, paddingVertical: ThemesDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_8 = createCacheKey.createStyles(obj);
let obj4 = { flex: 1, paddingVertical: ThemesDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = set.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx");

export default function QuestDisclosureModalInner(isTargetedDisclosure) {
  isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
  let _require;
  let items1;
  ({ gamePublisher, gameTitle, isVideoQuest, onClose, cosponsorName } = isTargetedDisclosure);
  const tmp = callback();
  _require = tmp;
  const DropsOptedOut = _require(4136).DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  let obj = { icon: null, text: null };
  if (setting) {
    obj[0] = tmp5(tmp2(9316).ServerIcon, { size: "xs" });
    const intl4 = tmp2(1236).intl;
    obj[1] = intl4.string(tmp2(1236).t["2bL0wT"]);
    let items = [obj];
    let tmp6 = tmp5;
    items1 = items;
  } else {
    obj[0] = tmp5(tmp2(9330).GlobeEarthIcon, { size: "xs" });
    const intl = tmp2(1236).intl;
    obj[1] = intl.string(tmp2(1236).t.xQSdPv);
    items1 = [obj, , ];
    obj = { icon: null, text: null };
    obj[0] = tmp5(tmp2(11360).UserIcon, { size: "xs" });
    const intl2 = tmp2(1236).intl;
    obj[1] = intl2.string(tmp2(1236).t.mYt7hQ);
    items1[1] = obj;
    obj = { icon: null, text: null };
    obj[0] = tmp5(tmp2(9160).GameControllerIcon, { size: "xs" });
    const intl3 = tmp2(1236).intl;
    obj[1] = intl3.string(tmp2(1236).t.XAsWxQ);
    items1[2] = obj;
    tmp6 = tmp5;
  }
  obj1 = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: null };
  const items2 = [tmp6(closure_4, { style: tmp.illustration, children: tmp6(_require(6224).WumpusCouchSpotIllustration, {}) }), , , , ];
  const obj3 = { variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
  const obj2 = { style: tmp.illustration, children: tmp6(_require(6224).WumpusCouchSpotIllustration, {}) };
  const tmp7 = closure_7;
  const tmp8 = closure_3;
  const tmp9 = closure_4;
  obj3[2] = _require(10894).getDisclosureText({ gamePublisher, gameTitle, isTargetedDisclosure, isContextualDisclosure: setting, cosponsorName, isVideoQuest });
  items2[1] = tmp6(_require(4444).Text, obj3);
  if (isTargetedDisclosure) {
    const obj4 = { radius: 16, style: null, children: null };
    obj4[1] = tmp.targetList;
    obj4[2] = items1.map((children) => {
      let obj = { style: lib.targetItem, children: null };
      const items = [children.icon, ];
      items1 = [lib.disclosureText, ];
      let lastTargetItem = arg1 === items1.length - 1;
      if (lastTargetItem) {
        lastTargetItem = lib.lastTargetItem;
      }
      obj = { style: items1, children: tmp3(lib(closure_1_2[12]).Text, { variant: "text-md/semibold", children: children.text }) };
      items1[1] = lastTargetItem;
      items[1] = closure_1_6(closure_1_4, obj);
      obj[1] = items;
      return closure_1_7(closure_1_4, obj, arg1);
    });
    isTargetedDisclosure = tmp6(tmp2(5569).Card, obj4);
  }
  items2[2] = isTargetedDisclosure;
  const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl5 = tmp2(1236).intl;
  const obj6 = { privacySettingsUrl: null };
  const tmp2Result = _require(10894);
  obj6[0] = items1(1995).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj5[2] = intl5.format(_require(1236).t.tzq9Wa, obj6);
  items2[3] = tmp6(_require(4444).Text, obj5);
  const obj7 = { style: tmp.closeButton, children: null };
  const obj8 = { variant: "primary", grow: true, size: "lg", text: null, onPress: null };
  const intl6 = tmp2(1236).intl;
  obj8[3] = intl6.string(_require(1236).t.cpT0Cq);
  obj8[4] = onClose;
  obj7[1] = tmp6(_require(4896).Button, obj8);
  items2[4] = tmp6(tmp9, obj7);
  obj1[2] = items2;
  return tmp7(tmp8, obj1);
};