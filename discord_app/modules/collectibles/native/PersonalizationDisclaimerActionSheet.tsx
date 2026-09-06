// === Module 15831: PersonalizationDisclaimerActionSheet ===

// Module 15831 (PersonalizationDisclaimerActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import LinkingDefault from "Linking" /* 4255 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import ButtonGroup from "ButtonGroup" /* 5433 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8580 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.header = { paddingVertical: nativeDefault.space.PX_8, alignSelf: "center", textAlign: "center" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default function PersonalizationDisclaimerActionSheet() {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { contentStyles: tmp.container, children: null };
  obj = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.header, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.euks4U);
  const items = [hasOwnProperty(Text_Text.Text, obj), ];
  obj = { children: null };
  const obj1 = { size: "lg", text: null, onPress: null, icon: null, iconPosition: "end" };
  const intl2 = util.intl;
  obj1.text = intl2.string(util.t.hvVgAZ);
  obj1.onPress = callback;
  obj1.icon = hasOwnProperty(LinkExternalSmallIcon.LinkExternalSmallIcon, { color: nativeDefault.colors.WHITE });
  const items1 = [hasOwnProperty(components_Button_Button.Button, obj1), ];
  const obj3 = { variant: "tertiary", size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.WAI6xu);
  obj3.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items1[1] = hasOwnProperty(components_Button_Button.Button, obj3);
  obj.children = items1;
  items[1] = timestampProducer(ButtonGroup.ButtonGroup, obj);
  obj.children = items;
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
};