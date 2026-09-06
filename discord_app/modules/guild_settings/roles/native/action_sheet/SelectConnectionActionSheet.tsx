// === Module 17638: SelectConnectionActionSheet ===

// Module 17638 (SelectConnectionActionSheet)
import util from "util" /* 1114 */;
import useThemeDefault from "useTheme" /* 4495 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import useGetOrFetchApplicationBatched from "useGetOrFetchApplicationBatched" /* 11563 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function IdentityApplicationRow(arg0) {
  ({ applicationId, onPress } = arg0);
  let obj = useGetOrFetchApplicationBatched;
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    let tmp6Result = null;
    if (null != bot) {
      obj = { user: bot, size: tmp(1178).AvatarSizes.XSMALL, guildId: "Array" };
      tmp6Result = tmp6(tmp(1178).Avatar, obj);
    }
    obj = { icon: tmp6Result, label: getOrFetchApplicationBatched.name, subLabel: null, onPress: null };
    let description;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    obj.subLabel = description;
    obj.onPress = onPress;
    return timestampProducer(tmp(5605).TableRow, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default function SelectConnectionActionSheet(arg0) {
  ({ addConnection: require, excludedConnections: importDefault, excludedApplications: dependencyMap, integrations, onCompleteApplication: _slicedToArray, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  closure_5 = useThemeDefault();
  let obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.Sm0YG7);
  const tmp5 = _slicedToArray(onCompleteIdentityApplication.useState(0), 2);
  const first = tmp5[0];
  let found;
  if (integrations != null) {
    found = integrations.filter((application) => {
      application = application.application;
      let prop;
      if (application != null) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = application.application;
        let id;
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !set2.has(id);
      }
      return tmp2;
    });
  }
  let tmp3Result = tmp3(7503);
  const platforms = tmp3Result.usePlatforms();
  const found1 = platforms.filter((type) => !set.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    let obj = require("AvatarUtils");
    icon = icon.icon;
    const source = obj.makeSource(require("shared").isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    obj = {
      icon: closure_1_6(tmp(tmp2[6]).Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        require(icon.type);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    };
    return closure_1_6(require("TableRow").TableRow, obj, "row-" + icon.type);
  });
  if (found != null) {
    mapped1 = found.map((application) => {
      application = application.application;
      let tmp = null;
      if (null != application) {
        let obj = { icon: null, label: null, subLabel: null, onPress: null };
        obj = { user: application.bot, size: require("native").AvatarSizes.XSMALL, guildId: "Array" };
        obj.icon = closure_1_6(require("native").Avatar, obj);
        obj.label = application.name;
        let description;
        if ("" !== application.description) {
          description = application.description;
        }
        obj.subLabel = description;
        obj.onPress = function onPress() {
          _slicedToArray(application.id);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        const _HermesInternal = HermesInternal;
        tmp = closure_1_6(require("TableRow").TableRow, obj, "row-" + application.id);
      }
      return tmp;
    });
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((item) => !set2.has(item));
  if (null != onCompleteIdentityApplication) {
    let mapped2 = found2.map((applicationId) => {
      closure_0 = applicationId;
      return closure_1_6(IdentityApplicationRow, {
        applicationId,
        onPress() {
          onCompleteIdentityApplication(closure_0);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
      }, "row-identity-" + applicationId);
    });
  } else {
    mapped2 = [];
  }
  let num;
  if (mapped1 != null) {
    num = mapped1.length;
  }
  if (num == null) {
    num = 0;
  }
  const intl2 = tmp3(1114).intl;
  const items = [intl2.string(util.t["3fe7U5"])];
  if (num > 0) {
    const intl3 = tmp3(1114).intl;
    items.push(intl3.string(tmp3(1114).t.PHjkRE));
  }
  if (mapped2.length > 0) {
    const intl4 = tmp3(1114).intl;
    items.push(intl4.string(tmp3(1114).t.y3ZnnU));
  }
  tmp3Result = tmp3(9792);
  obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp5[1], items: items.map((id) => ({ id, label: id, page: null })) };
  const segmentedControlState = tmp3Result.useSegmentedControlState(obj);
  if (1 === first) {
    if (tmp10) {
      mapped2 = mapped1;
    }
    let tmp15 = mapped2;
  } else {
    tmp15 = mapped;
    if (2 === first) {
      tmp15 = mapped2;
    }
  }
  obj = { scrollable: true, header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), startExpanded: true, children: null };
  if (num > 0) {
    const obj1 = { children: null };
    const obj2 = { state: segmentedControlState };
    obj1.children = tmp2(tmp3(9793).SegmentedControl, obj2);
    let tmp2Result = tmp2(closure_5, obj1);
  } else {
    tmp2Result = null;
  }
  const items1 = [tmp2Result, ];
  const obj3 = { children: null };
  const tmp16 = closure_7;
  const tmp4 = closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj3.children = closure_6(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, children: closure_6(TableRowGroup.TableRowGroup, { hasIcons: true, children: tmp15 }) });
  items1[1] = closure_6(BottomSheetModal.BottomSheetScrollView, obj3);
  obj.children = items1;
  return tmp16(ActionSheet.ActionSheet, obj);
};