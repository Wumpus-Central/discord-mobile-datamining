// discord_app/modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import TableRowGroupTitle from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import COMMUNITY_PORTAL_SERVER_SAFETY_PAGE from "../GuildReportRaidModalConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function ReportModal(onSubmit) {
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  const tmp = callback4();
  dependencyMap = tmp;
  const items = [tmp];
  closure_3 = React.useCallback((arg0) => closure_1_9(require(formRow[8]).Text, { style: formRow.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: closure_1_7(arg0) }), items);
  const callback = React.useCallback(() => {
    callback(formRow[9]).openURL(closure_6);
  }, []);
  let obj = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.format(getSystemLocale.t.Hg8Ee7, { onClick: callback });
  const items1 = [callback2(Text.Text, obj), , ];
  obj = {
    style: tmp.formBody,
    children: callback2(TableRowGroupTitle.TableRowGroup, {
      hasIcons: false,
      children: closure_8.map((item, index) => {
        closure_0 = item;
        return closure_1_9(require(formRow[12]).TableCheckboxRow, {
          start: 0 === index,
          end: index === closure_1_8.length - 1,
          label: callback2(item),
          checked: closure_0.includes(item),
          onPress() {
            return closure_1_1(closure_0);
          }
        }, item);
      })
    })
  };
  items1[1] = callback2(View, obj);
  const obj2 = { style: items2, children: null };
  items2 = [tmp.submitButtonContainer, ];
  obj1 = {
    hasIcons: false,
    children: closure_8.map((item, index) => {
      closure_0 = item;
      return closure_1_9(require(formRow[12]).TableCheckboxRow, {
        start: 0 === index,
        end: index === closure_1_8.length - 1,
        label: callback2(item),
        checked: closure_0.includes(item),
        onPress() {
          return closure_1_1(closure_0);
        }
      }, item);
    })
  };
  items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  const obj4 = { size: "md", text: null, onPress: null };
  const intl2 = getSystemLocale.intl;
  obj4[1] = intl2.string(getSystemLocale.t.geKm7t);
  obj4[2] = onSubmit.onSubmit;
  obj2[1] = callback2(Button.Button, obj4);
  items1[2] = callback2(View, obj2);
  obj[1] = items1;
  return callback3(View, obj);
}
({ COMMUNITY_PORTAL_SERVER_SAFETY_PAGE: closure_6, getReportRaidTypeLabel: error, REPORT_RAID_OPTIONS: closure_8 } = COMMUNITY_PORTAL_SERVER_SAFETY_PAGE);
({ jsx: c9, jsxs: c10 } = jsxProd);
const REPORT_RAID = "REPORT_RAID";
const createCacheKey = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginTop: 8 };
createCacheKey[2] = { marginTop: 24 };
createCacheKey[3] = { paddingVertical: 2 };
createCacheKey[4] = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default function GuildAntiRaidReportModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  let callback;
  const tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  callback = tmp[1];
  const items = [onCloseModal, first, guildId];
  const memo = React.useMemo(() => {
    closure_0 = onSubmit;
    function onChange(arg0) {
      closure_0 = arg0;
      callback2((arr) => {
        if (arr.includes(closure_0)) {
          let found = arr.filter((item, index) => item !== closure_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
        }
        return found;
      });
    }
    onSubmit = function onSubmit() {
      const result = callback(onSubmit[15]).trackReportRaidViewed(onChange, onSubmit);
      const obj = callback(onSubmit[15]);
      callback(onSubmit[15]).handleReportRaid(onChange);
      callback();
    };
    let obj = { ignoreKeyboard: true, title: null, headerLeft: null, render: null };
    const intl = onCloseModal(first[10]).intl;
    obj[1] = intl.string(onCloseModal(first[10]).t.uYPGsS);
    obj[2] = onCloseModal(first[14]).getHeaderCloseButton(closure_0);
    obj[3] = function render() {
      return closure_1_9(closure_1_13, { raidTypes: closure_0, onChange, onSubmit });
    };
    obj[REPORT_RAID] = obj;
    return obj;
  }, items);
  return callback2(onCloseModal(first[16]).Navigator, { screens: memo, initialRouteName: REPORT_RAID, headerStatusBarHeight: guildId(first[7])().top });
};