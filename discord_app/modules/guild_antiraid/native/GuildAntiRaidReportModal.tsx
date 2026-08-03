// === Module 13185: ReportModal ===

// Module 13185 (ReportModal)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "set";
import COMMUNITY_PORTAL_SERVER_SAFETY_PAGE from "COMMUNITY_PORTAL_SERVER_SAFETY_PAGE";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ReportModal(onSubmit) {
  let importDefault;
  let require;
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  let dependencyMap;
  let _slicedToArray;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  const items = [tmp];
  _slicedToArray = React.useCallback((arg0) => {
    const obj = { style: _undefined.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: null };
    obj[3] = outer1_7(arg0);
    return outer1_9(outer1_0(_undefined[8]).Text, obj);
  }, items);
  let obj = { style: tmp.container, children: null };
  const callback = React.useCallback(() => {
    callback(_undefined[9]).openURL(closure_6);
  }, []);
  obj = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.format(require(1236) /* getSystemLocale */.t.Hg8Ee7, { onClick: callback });
  const items1 = [callback2(require(4251) /* Text */.Text, obj), , ];
  obj = { style: tmp.formBody, children: null };
  const obj1 = { hasIcons: false, children: null };
  obj1[1] = closure_8.map((arg0, arg1) => {
    let closure_0 = arg0;
    const obj = { start: 0 === arg1, end: arg1 === outer1_8.length - 1, label: null, checked: null, onPress: null };
    obj[2] = callback2(arg0);
    obj[3] = closure_0.includes(arg0);
    obj[4] = function onPress() {
      return outer1_1(closure_0);
    };
    return outer1_9(outer1_0(_undefined[12]).TableCheckboxRow, obj, arg0);
  });
  obj[1] = callback2(require(5620) /* TableRowGroupTitle */.TableRowGroup, obj1);
  items1[1] = callback2(View, obj);
  const obj2 = { style: items2, children: null };
  items2 = [tmp.submitButtonContainer, { paddingBottom: importDefault(1581)().bottom + 16 }];
  const obj4 = { size: "md", text: null, onPress: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj4[1] = intl2.string(require(1236) /* getSystemLocale */.t.geKm7t);
  obj4[2] = onSubmit.onSubmit;
  obj2[1] = callback2(require(4666) /* Button */.Button, obj4);
  items1[2] = callback2(View, obj2);
  obj[1] = items1;
  return callback3(View, obj);
}
({ COMMUNITY_PORTAL_SERVER_SAFETY_PAGE: closure_6, getReportRaidTypeLabel: error, REPORT_RAID_OPTIONS: metroImportAll } = COMMUNITY_PORTAL_SERVER_SAFETY_PAGE);
({ jsx: c9, jsxs: c10 } = jsxProd);
const REPORT_RAID = "REPORT_RAID";
createCacheKey = { container: null, headerSubtitle: null, formBody: null, formRow: null, submitButtonContainer: null };
createCacheKey = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginTop: 8 };
createCacheKey[2] = { marginTop: 24 };
createCacheKey[3] = { paddingVertical: 2 };
createCacheKey[4] = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default function GuildAntiRaidReportModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  let first;
  let callback;
  const tmp = callback(React.useState([]), 2);
  first = tmp[0];
  callback = tmp[1];
  const items = [onCloseModal, first, guildId];
  const memo = React.useMemo(() => {
    let closure_0 = onSubmit;
    function onChange(arg0) {
      let closure_0 = arg0;
      callback2((arr) => {
        if (arr.includes(closure_0)) {
          let found = arr.filter((arg0) => arg0 !== closure_0);
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
    let obj = {};
    obj = { ignoreKeyboard: true, title: null, headerLeft: null, render: null };
    const intl = onCloseModal(first[10]).intl;
    obj[1] = intl.string(onCloseModal(first[10]).t.uYPGsS);
    obj[2] = onCloseModal(first[14]).getHeaderCloseButton(closure_0);
    obj[3] = function render() {
      return outer1_9(outer1_13, { raidTypes: closure_0, onChange, onSubmit });
    };
    obj[outer1_11] = obj;
    return obj;
  }, items);
  return callback2(onCloseModal(first[16]).Navigator, { screens: memo, initialRouteName: REPORT_RAID, headerStatusBarHeight: guildId(first[7])().top });
};