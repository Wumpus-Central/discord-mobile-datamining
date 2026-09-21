// discord_app/modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ReportModal(onSubmit) {
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  const tmp = closure_13();
  dependencyMap = tmp;
  const items = [tmp];
  closure_3 = noop.useCallback(
    (arg0) =>
      closure_2_10(Text_Text.Text, {
        style: formRow.formRow,
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: React6(arg0),
      }),
    items,
  );
  const obj = { style: tmp.container, children: null };
  const callback = noop.useCallback(() => {
    require("Linking").openURL(closure_1_7());
  }, []);
  const obj2 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.Hg8Ee7, { onClick: callback });
  const items1 = [closure_10(Text_Text.Text, obj2), ,];
  const obj3 = {
    style: tmp.formBody,
    children: closure_10(TableRowGroup.TableRowGroup, {
      hasIcons: false,
      children: length.map((item, index) => {
        closure_0 = item;
        return closure_1_10(
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
  items1[1] = closure_10(View, obj3);
  const obj5 = { style: null, children: null };
  const items2 = [tmp.submitButtonContainer];
  const obj4 = {
    hasIcons: false,
    children: length.map((item, index) => {
      closure_0 = item;
      return closure_1_10(
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
  obj5.style = items2;
  const obj7 = { size: "md", text: null, onPress: null };
  const intl2 = util.intl;
  obj7.text = intl2.string(util.t.geKm7t);
  obj7.onPress = onSubmit.onSubmit;
  obj5.children = closure_10(components_Button_Button.Button, obj7);
  items1[2] = closure_10(View, obj5);
  obj.children = items1;
  return closure_11(View, obj);
}
const View = fn(17).View;
const GuildReportRaidModalConstants = fn(14234);
({
  getReportRaidHelpArticleURL: closure_7,
  getReportRaidTypeLabel: closure_8,
  REPORT_RAID_OPTIONS: closure_9,
} = GuildReportRaidModalConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const REPORT_RAID = "REPORT_RAID";
const createStyles = fn(4756);
let obj2 = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 0,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    flexDirection: "column",
    height: "100%",
    paddingTop: 8,
  },
  headerSubtitle: { textAlign: "center", marginTop: 8 },
  formBody: { marginTop: 24 },
  formRow: { paddingVertical: 2 },
  submitButtonContainer: null,
};
const rect = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  paddingHorizontal: 16,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.submitButtonContainer = rect;
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default function GuildAntiRaidReportModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  first = undefined;
  asyncGeneratorStep = undefined;
  noop = undefined;
  [first, asyncGeneratorStep] = noop.useState([]);
  _slicedToArray = guildId(first[16])();
  noop = noop.useRef(false);
  const tmp3Result = guildId(first[17])(
    asyncGeneratorStep(async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
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
              const obj5 = { value, done: true };
              return obj5;
            } else if (ref.current) {
              dependencyMap = 3;
            } else {
              tmp21.current = true;
              const result = tmp2(12085).trackReportRaidViewed(guildId, first);
              const obj2 = tmp2(12085);
              tmp2(12085).handleReportRaid(guildId);
              const intl = tmp2(1115).intl;
              c1 = 1;
              dependencyMap = 1;
              const obj6 = { value: closure_4(intl.string(tmp2(1115).t["54qByS"])), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0();
          }
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp16) {
          dependencyMap = tmp;
          throw tmp16;
        }
      }
    }),
  );
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
    const obj = {};
    const obj2 = { ignoreKeyboard: true, title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.uYPGsS);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onCloseModal);
    obj2.render = function render() {
      return closure_2_10(ReportModal, { raidTypes, onChange, onSubmit });
    };
    obj[REPORT_RAID] = obj2;
    return obj;
  }, items);
  const tmp3 = guildId(first[17]);
  return closure_10(onCloseModal(first[19]).Navigator, {
    screens: memo,
    initialRouteName: REPORT_RAID,
    headerStatusBarHeight: guildId(first[8])().top,
  });
}
