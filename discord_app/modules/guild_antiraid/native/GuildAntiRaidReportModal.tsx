// discord_app/modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ReportModal(onSubmit) {
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  const tmp = closure_12();
  dependencyMap = tmp;
  const items = [tmp];
  closure_3 = noop.useCallback(
    (arg0) =>
      React7(Text_Text.Text, {
        style: formRow.formRow,
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: React5(arg0),
      }),
    items,
  );
  let obj = { style: tmp.container, children: null };
  const callback = noop.useCallback(() => {
    require("Linking").openURL(closure_1_6());
  }, []);
  obj = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.Hg8Ee7, { onClick: callback });
  const items1 = [closure_9(Text_Text.Text, obj), ,];
  obj = {
    style: tmp.formBody,
    children: closure_9(TableRowGroup.TableRowGroup, {
      hasIcons: false,
      children: length.map((item, index) => {
        closure_0 = item;
        return closure_1_9(
          require("TableCheckboxRow").TableCheckboxRow,
          {
            start: 0 === index,
            end: index === length.length - 1,
            label: closure_3(item),
            checked: closure_0.includes(item),
            onPress() {
              return importDefault(closure_0);
            },
          },
          item,
        );
      }),
    }),
  };
  items1[1] = closure_9(View, obj);
  const obj2 = { style: null, children: null };
  const items2 = [tmp.submitButtonContainer];
  const obj1 = {
    hasIcons: false,
    children: length.map((item, index) => {
      closure_0 = item;
      return closure_1_9(
        require("TableCheckboxRow").TableCheckboxRow,
        {
          start: 0 === index,
          end: index === length.length - 1,
          label: closure_3(item),
          checked: closure_0.includes(item),
          onPress() {
            return importDefault(closure_0);
          },
        },
        item,
      );
    }),
  };
  items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  obj2.style = items2;
  const obj4 = { size: "md", text: null, onPress: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.geKm7t);
  obj4.onPress = onSubmit.onSubmit;
  obj2.children = closure_9(components_Button_Button.Button, obj4);
  items1[2] = closure_9(View, obj2);
  obj.children = items1;
  return closure_10(View, obj);
}
const View = fn(17).View;
const GuildReportRaidModalConstants = fn(13965);
({
  getReportRaidHelpArticleURL: metroRequire,
  getReportRaidTypeLabel: closure_7,
  REPORT_RAID_OPTIONS: closure_8,
} = GuildReportRaidModalConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const REPORT_RAID = "REPORT_RAID";
fn(4560);
let createStyles = {
  container: null,
  headerSubtitle: null,
  formBody: null,
  formRow: null,
  submitButtonContainer: null,
};
createStyles = {
  flex: 1,
  paddingHorizontal: 16,
  paddingVertical: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "column",
  height: "100%",
  paddingTop: 8,
};
createStyles.container = createStyles;
createStyles.headerSubtitle = { textAlign: "center", marginTop: 8 };
createStyles.formBody = { marginTop: 24 };
createStyles.formRow = { paddingVertical: 2 };
const rect = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  paddingHorizontal: 16,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.submitButtonContainer = rect;
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default function GuildAntiRaidReportModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  _slicedToArray = undefined;
  const tmp = _slicedToArray(noop.useState([]), 2);
  const first = tmp[0];
  _slicedToArray = tmp[1];
  const items = [onCloseModal, first, guildId];
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
    function onSubmit() {
      const result = onCloseModal(first[15]).trackReportRaidViewed(onChange, onSubmit);
      const obj = onCloseModal(first[15]);
      onCloseModal(first[15]).handleReportRaid(onChange);
      raidTypes();
    }
    let obj = {};
    obj = { ignoreKeyboard: true, title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.uYPGsS);
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(onCloseModal);
    obj.render = function render() {
      return closure_2_9(ReportModal, { raidTypes, onChange, onSubmit });
    };
    obj[REPORT_RAID] = obj;
    return obj;
  }, items);
  return closure_9(onCloseModal(first[16]).Navigator, {
    screens: memo,
    initialRouteName: REPORT_RAID,
    headerStatusBarHeight: guildId(first[7])().top,
  });
}
