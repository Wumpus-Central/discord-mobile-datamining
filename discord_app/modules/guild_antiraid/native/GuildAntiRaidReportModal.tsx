// === Module 14051: GuildAntiRaidReportModal ===

// Module 14051 (GuildAntiRaidReportModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4632 */;
import components_Button_Button from "components/Button/Button" /* 5056 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import TableRowGroup from "TableRowGroup" /* 5768 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ReportModal(onSubmit) {
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  const tmp = closure_13();
  dependencyMap = tmp;
  const items = [tmp];
  closure_3 = noop.useCallback((arg0) => closure_2_10(Text_Text.Text, { style: formRow.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: React6(arg0) }), items);
  let obj = { style: tmp.container, children: null };
  const callback = noop.useCallback(() => {
    require("Linking").openURL(closure_1_7());
  }, []);
  obj = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.Hg8Ee7, { onClick: callback });
  const items1 = [closure_10(Text_Text.Text, obj), , ];
  obj = {
    style: tmp.formBody,
    children: closure_10(TableRowGroup.TableRowGroup, {
      hasIcons: false,
      children: length.map((item, index) => {
        closure_0 = item;
        return closure_1_10(require("TableCheckboxRow").TableCheckboxRow, {
          start: 0 === index,
          end: index === length.length - 1,
          label: closure_3(item),
          checked: closure_0.includes(item),
          onPress() {
            return importDefault(closure_0);
          }
        }, item);
      })
    })
  };
  items1[1] = closure_10(View, obj);
  const obj2 = { style: null, children: null };
  const items2 = [tmp.submitButtonContainer, ];
  const obj1 = {
    hasIcons: false,
    children: length.map((item, index) => {
      closure_0 = item;
      return closure_1_10(require("TableCheckboxRow").TableCheckboxRow, {
        start: 0 === index,
        end: index === length.length - 1,
        label: closure_3(item),
        checked: closure_0.includes(item),
        onPress() {
          return importDefault(closure_0);
        }
      }, item);
    })
  };
  items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  obj2.style = items2;
  const obj4 = { size: "md", text: null, onPress: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.geKm7t);
  obj4.onPress = onSubmit.onSubmit;
  obj2.children = closure_10(components_Button_Button.Button, obj4);
  items1[2] = closure_10(View, obj2);
  obj.children = items1;
  return closure_11(View, obj);
}
const View = fn(17).View;
const GuildReportRaidModalConstants = fn(14052);
({ getReportRaidHelpArticleURL: closure_7, getReportRaidTypeLabel: closure_8, REPORT_RAID_OPTIONS: closure_9 } = GuildReportRaidModalConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const REPORT_RAID = "REPORT_RAID";
fn(4636);
let createStyles = { container: null, headerSubtitle: null, formBody: null, formRow: null, submitButtonContainer: null };
createStyles = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createStyles.container = createStyles;
createStyles.headerSubtitle = { textAlign: "center", marginTop: 8 };
createStyles.formBody = { marginTop: 24 };
createStyles.formRow = { paddingVertical: 2 };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.submitButtonContainer = rect;
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default function GuildAntiRaidReportModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = _slicedToArray(noop.useState([]), 2);
  const first = tmp[0];
  asyncGeneratorStep = tmp[1];
  _slicedToArray = guildId(first[16])();
  noop = noop.useRef(false);
  const tmp3Result = guildId(first[17])(asyncGeneratorStep(async () => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else if (ref.current) {
            dependencyMap = 3;
          } else {
            tmp21.current = true;
            let obj1 = tmp2(11961);
            const result = obj1.trackReportRaidViewed(guildId, first);
            tmp2(11961).handleReportRaid(guildId);
            const intl = tmp2(1114).intl;
            c1 = 1;
            dependencyMap = 1;
            obj1 = { value: closure_4(intl.string(tmp2(1114).t["54qByS"])), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0();
        }
        dependencyMap = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  }));
  closure_6 = tmp3Result;
  const items = [tmp3Result, onCloseModal, first];
  const memo = noop.useMemo(() => {
    const raidTypes = first;
    function onChange(arg0) {
      closure_0 = arg0;
      closure_1_3((arr) => {
        if (arr.includes(closure_0)) {
          let found = arr.filter((item) => item !== closure_1_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
        }
        return found;
      });
    }
    const onSubmit = closure_6;
    let obj = {};
    obj = { ignoreKeyboard: true, title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.uYPGsS);
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(onCloseModal);
    obj.render = function render() {
      return closure_2_10(ReportModal, { raidTypes, onChange, onSubmit });
    };
    obj[REPORT_RAID] = obj;
    return obj;
  }, items);
  const tmp3 = guildId(first[17]);
  return closure_10(onCloseModal(first[19]).Navigator, { screens: memo, initialRouteName: REPORT_RAID, headerStatusBarHeight: guildId(first[8])().top });
};