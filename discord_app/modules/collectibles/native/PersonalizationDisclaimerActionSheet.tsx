// === Module 17813: PersonalizationDisclaimerActionSheet ===

// Module 17813 (PersonalizationDisclaimerActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import LinkingDefault from "Linking" /* 5704 */;
import ButtonGroup from "ButtonGroup" /* 6761 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8153 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16 }, header: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.header = { paddingVertical: nativeDefault.space.PX_8, alignSelf: "center", textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default function PersonalizationDisclaimerActionSheet() {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { contentStyles: tmp.container, children: null };
  const obj2 = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.euks4U);
  const items = [hasOwnProperty(Text_Text.Text, obj2), ];
  const obj3 = { children: null };
  const obj4 = { size: "lg", text: null, onPress: null, icon: null, iconPosition: "end" };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.hvVgAZ);
  obj4.onPress = callback;
  obj4.icon = hasOwnProperty(LinkExternalSmallIcon.LinkExternalSmallIcon, { color: nativeDefault.colors.WHITE });
  const items1 = [hasOwnProperty(components_Button_Button.Button, obj4), ];
  const obj6 = { variant: "tertiary", size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.WAI6xu);
  obj6.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items1[1] = hasOwnProperty(components_Button_Button.Button, obj6);
  obj3.children = items1;
  items[1] = timestampProducer(ButtonGroup.ButtonGroup, obj3);
  obj.children = items;
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
};