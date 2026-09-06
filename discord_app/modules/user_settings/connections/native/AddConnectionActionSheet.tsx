// === Module 14957: AddConnectionActionSheet ===

// Module 14957 (AddConnectionActionSheet)
import Constants from "Constants" /* 1074 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 1921 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import TableRow from "TableRow" /* 5605 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import native from "native" /* 1178 */;
import size from "module_2" /* 2 */;

function AddApplicationIdentityTableRow(application) {
  application = application.application;
  _require = undefined;
  let analyticsLocations;
  ({ start, end } = application);
  ({ startAuthorization: c0, canStartAuthorization } = analyticsLocations(7165)(application));
  const tmp2 = analyticsLocations(7165)(application);
  analyticsLocations = analyticsLocations(7162)(analyticsLocations(7182).ACTION_SHEET).analyticsLocations;
  const tmp3 = analyticsLocations(7162);
  let obj = require("native");
  const iconSource = application.getIconSource(obj.getIconSize(require("native").IconSizes.LARGE));
  obj = {
    start,
    end,
    label: application.name,
    onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      obj = { analyticsLocations };
      _undefined(obj);
    },
    icon: null,
    trailing: null,
    disabled: null
  };
  let tmp7Result = null;
  if (null != iconSource) {
    obj = { source: iconSource, style: tmp4.icon, disableColor: true };
    tmp7Result = tmp7(tmp5(1178).Icon, obj);
  }
  obj.icon = tmp7Result;
  obj.trailing = closure_5(require("TableRow").TableRow.Arrow, {});
  obj.disabled = !canStartAuthorization;
  return closure_5(require("TableRow").TableRow, obj, application.id);
}
const AnalyticsLocations = Constants.AnalyticsLocations;
let closure_4 = UserApplicationIdentityConstants.getMigratedApplicationIdentityConnectionsScreenApplications;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { list: { paddingHorizontal: 16 }, icon: null };
obj = { borderRadius: null };
obj.borderRadius = native.getIconSize(native.Icon.Sizes.LARGE);
obj.icon = obj;
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/AddConnectionActionSheet.tsx");

export default function AddConnectionActionSheet() {
  _require = found(found1[5])();
  let obj = require("ConnectionsHooks");
  const platforms = obj.usePlatforms();
  found = platforms.filter((migrationData) => {
    let tmp = null == migrationData.migrationData;
    if (!tmp) {
      migrationData = migrationData.migrationData;
      tmp = !migrationData.getMigrationExperimentEnabled("AddConnectionActionSheet");
    }
    return tmp;
  });
  let tmp = closure_7();
  const tmp2 = found(found1[8]);
  found1 = found(found1[8])(closure_4("AddConnectionActionSheet")).filter((item) => null != item);
  obj = { scrollable: true, startExpanded: true, header: null, children: null };
  obj = { title: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.Zhcj9X);
  obj.header = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj);
  const obj1 = { style: tmp.list, contentContainerStyle: { paddingBottom: found(found1[6])().bottom }, children: null };
  const items = [
    found1.map((application, index) => {
      const obj = { application, start: 0 === index, end: null };
      let tmp3 = index === found1.length - 1;
      if (tmp3) {
        tmp3 = 0 === found.length;
      }
      obj.end = tmp3;
      return hasOwnProperty(AddApplicationIdentityTableRow, obj, application.id);
    }),
    found.map((label, index) => {
      const type = label.type;
      const icon = label.icon;
      let tmp4 = 0 === index;
      if (tmp4) {
        tmp4 = 0 === found1.length;
      }
      let obj = {
        start: tmp4,
        end: index === found.length - 1,
        label: label.name,
        onPress() {
          let obj = found(found1[14]);
          obj.hideActionSheet();
          obj = { platformType: type, location: constants.USER_SETTINGS };
          found(found1[15])(obj);
        },
        icon: null,
        trailing: null
      };
      tmp2(1396);
      const tmp2Result = tmp2(4411);
      obj = { source: tmp2Result.makeSource(tmp2Result.isThemeDark(closure_0) ? icon.darkPNG : icon.lightPNG), disableColor: true };
      obj.icon = hasOwnProperty(native.Icon, obj);
      obj.trailing = hasOwnProperty(TableRow.TableRow.Arrow, {});
      return hasOwnProperty(TableRow.TableRow, obj, type);
    })
  ];
  obj1.children = items;
  obj.children = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj1);
  return closure_5(require("Sheet/BottomSheet").BottomSheet, obj);
};